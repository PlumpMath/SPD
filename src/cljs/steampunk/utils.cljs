(ns steampunk.utils
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [clojure.walk :as walk]
            [cljs.core.async :refer [>! <! put! chan timeout] ])
  (:import [goog.ui IdGenerator]))

(defn guid []
  (.getNextUniqueId (.getInstance IdGenerator)))


(defn handle-change [e data edit-key owner]
  (om/transact! data edit-key (fn [_] (.. e -target -value))))

(defn end-edit [data edit-key text owner cb]
  (om/set-state! owner :editing false)
  (om/transact! data edit-key (fn [_] text) :update)
  (when cb
    (cb text)))


(defmulti update-user (fn [k _] k) )
(defmethod update-user :extra [k m]
  (.then (.api js/Hull "/me" "put" #js {:extra  m})
         #(print "server response:" %)))

(defn update-extra [m]
  (print m)
  (.then (.api js/Hull "/me" "put" #js {:extra (clj->js m)})
         #(print "server response:" %)))


(defn handle-login [app]
  (.then (.login js/Hull "facebook")
        #(om/transact! app :user
                        (fn[_] (walk/keywordize-keys (js->clj %))) :update)
         #(print %)))


(defn handle-logout [app]
  (.then (.logout js/Hull)
         #(om/transact! app :user (fn[_] nil))))



