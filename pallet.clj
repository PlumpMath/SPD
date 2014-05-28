;;; Pallet project configuration file

;;; By default, the pallet.api and pallet.crate namespaces are already referred.
;;; The pallet.crate.automated-admin-user/automated-admin-user us also referred.

;;; (require '[your-ns :refer [your-group]])
;;; Pallet project configuration file

;;; By default, the pallet.api and pallet.crate namespaces are already referred.
;;; The pallet.crate.automated-admin-user/automated-admin-user us also referred.

;;; (require '[your-ns :refer [your-group]])

(require '[pallet.crate.java :as java]
         '[pallet.crate.runit :as runit]
         '[pallet.crate.app-deploy :as app-deploy])

(def webserver
  (group-spec "webserver"
    :extends [(java/server-spec {})
              (runit/server-spec {})
              (app-deploy/server-spec {:artifacts
                                       {:from-lein
                                        [{:project-path "target/steampunk-%s-SNAPSHOT-standalone.jar"
                                          :path "steampunk.jar"}]}
                                       :run-command "java -jar /opt/steampunk-web/steampunk.jar"}
                                      :instance-id :steampunk-web)]))
(defproject steampunk
  :provider {:google-compute
             {:node-spec
               :image {:os-family :debian}
               :location {:location-id "us"}
               :network {:incoming-ports [23 3000 80]}
              }}
  :groups [webserver])
