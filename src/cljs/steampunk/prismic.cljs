(ns steampunk.prismic
  (:require-macros [cljs.core.async.macros :refer [go]])

  (:require [cljs.core.async :refer [>! <! <!! put! chan timeout] ])
  )

(def repo "https://steampunk-blog.prismic.io/api")

(defn get-api
  []
  (let [c (chan)
        err (fn [err, api] (print err))]
    (.Api js/Prismic repo
          #(go (put! c %2)))
          c))

(def api (go (<! get-api)))

(.forms api "everything")
(defn faqs []
  (let [c (chan)
        req  (.ref (.form api "everything"))]
    (.submit req  #(put! c %2 ))
    (go (<! c) )))

(faqs)
