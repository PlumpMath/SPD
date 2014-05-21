(ns steampunk.utils
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true])
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


(defn handle-login [data owner]
  (.then (.login js/Hull "facebook")
         #(do (om/transact! data :user
                        (fn[_] (walk/keywordize-keys (js->clj %))))
            (om/refresh!))))


(defn handle-logout [data owner]
  (.then (.logout js/Hull)
         #(om/transact! data :user (fn[_] nil))))
