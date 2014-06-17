(ns steampunk.core
    (:require [compojure.handler :as handler]
              [compojure.route :as route]
              [compojure.core :refer [GET POST defroutes]]
              [ring.util.response :as resp]
              [ring.util.serve :as serve]
              [ring.middleware.cors :refer  [wrap-cors]]
              [cheshire.core :as json]
              [cemerick.austin.repls :refer (browser-connected-repl-js)]
              [net.cgrand.enlive-html :as enlive]
              [clojure.java.io :as io]))

(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})



(enlive/deftemplate page 
  (io/resource "public/index.html")
  []
  [:body] (enlive/append
            (enlive/html [:script (browser-connected-repl-js)])))

(defroutes app-routes
  (route/resources "/")
  (GET "/*" req (page))
  (route/not-found "Page not found"))

(def app
  (-> (handler/api app-routes)
      (wrap-cors :access-control-allow-origin #".+")
      ))

(defn run
  []
  (defonce ^:private server
    (ring.adapter.jetty/run-jetty #'app-routes {:port 8080 :join? false})))
