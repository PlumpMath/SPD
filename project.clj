(defproject steampunk "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.8.2"]
                 [lein-light-nrepl "0.0.17"]
                 ;; CLk
                 [ring/ring-core "1.2.0"]
                 [ring-serve "0.1.2"]
                 [compojure "1.1.6"]
                 [com.palletops/pallet "0.8.0-RC.9"]
                 [com.palletops/pallet-jclouds "1.7.3"]
                 [com.palletops/pallet-jclouds "1.7.3"]
                 [org.apache.jclouds/jclouds-allcompute "1.7.2"]
                 [org.slf4j/slf4j-api "1.7.3"]
                 [com.google.code.gson/gson "2.2.2"]
                 [org.apache.jclouds.driver/jclouds-sshj "1.7.2"]
                 [ch.qos.logback/logback-classic "1.0.9"]
                 [io.cloudsoft.jclouds/jclouds-all "1.7.2-ea-brooklyn.5"]
                 [io.cloudsoft.jclouds.labs/google-compute-engine "1.7.2-ea-brooklyn.5"]
                 [ring-cors "0.1.1"]
                 [cheshire "5.2.0"]
                 [org.clojars.bagucode/jna "3.2.4"]
                 ;; CLJS
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [cljs-http "0.1.9"]
                 [secretary "1.1.0"]
                 [om "0.6.2"]]

  :plugins [[lein-cljsbuild "1.0.2"]
            [lein-ring "0.8.7"]
            [lein-pdo "0.1.1"]]

  :aliases {"dev" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}

  :ring {:handler steampunk.core/app
         :init    steampunk.core/init}

  :source-paths ["src/clj"]
  :profiles {
             :pallet
              {:dependencies
               [[com.palletops/pallet "0.8.0-RC.9"
                 :classifier "tests"]
                [com.palletops/java-crate "0.8.0-beta.6"]
                [com.palletops/runit-crate "0.8.0-alpha.3"]
                [com.palletops/app-deploy-crate "0.8.0-alpha.3"]]}

              :dev
              {:dependencies
               [[com.palletops/pallet "0.8.0-RC.9"
                 :classifier "tests"]
                [com.palletops/java-crate "0.8.0-beta.6"]
                [com.palletops/runit-crate "0.8.0-alpha.3"]
                [com.palletops/app-deploy-crate "0.8.0-alpha.3"]]
               :plugins
               [[com.palletops/pallet-lein "0.8.0-alpha.1"]]}
              :leiningen/reply
              {:dependencies [[org.slf4j/jcl-over-slf4j "1.7.2"]]
               :exclusions [commons-logging]}}


             :repl-options {:nrepl-middleware [lighttable.nrepl.handler/lighttable-ops ]}
             :repositories {"sonatype" "https://oss.sonatype.org/content/repositories/releases/"}
             :cljsbuild {
                         :builds [{:id "dev"
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
