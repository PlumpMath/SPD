(defproject steampunk "0.1.0-SNAPSHOT"
  :description "A dating website engine"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.8.2"]
                 [lein-light-nrepl "0.0.17"]
                 ;; CLk
                 [ring/ring-core "1.2.0"]
                 [ring-serve "0.1.2"]
                 [compojure "1.1.6"]
                 [ring-cors "0.1.1"]
                 [cheshire "5.2.0"]
                 ;; CLJS

                 [org.clojure/clojurescript "0.0-2202"]
                 [figwheel "0.1.3-SNAPSHOT"]
                 [devcards "0.1.0-SNAPSHOT"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [cljs-http "0.1.9"]
                 [secretary "1.1.0"]
                 [om "0.6.2"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.3-SNAPSHOT"]
            [lein-pdo "0.1.1"]]

  :aliases {"dev" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}

  :ring {:handler steampunk.core/app
         :init    steampunk.core/init}

  :figwheel {
             :http-server-port "public"
             :port 3449
             :css-dirs ["resources/public/css"]
             }

  :source-paths ["src/clj"]
  :repl-options {:nrepl-middleware [lighttable.nrepl.handler/lighttable-ops ]}
  :repositories {"sonatype" "https://oss.sonatype.org/content/repositories/releases/"}
  :cljsbuild {
              :builds [{:id "figwheel"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/js/steampunk.js"
                                   :output-dir "resources/public/js/out"
                                   :source-map true
                                   :optimizations :none
                                   :externs ["react/externs/react.js"]}}
                       {:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/js/steampunk.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true
                                   :externs ["react/externs/react.js"]}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/js/steampunk.js"
                                   :source-map "resources/public/js/steampunk.js.map"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :output-wrapper false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]
                                   :closure-warnings
                                   {:non-standard-jsdoc :off}}}]})
