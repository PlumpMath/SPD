(ns steampunk.core
  (:require 
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [cljs-http.client :as http]
            [clojure.walk :as walk]
            [sablono.core :as html :refer-macros [html]]
            [clojure.browser.repl :as repl]
            [steampunk.utils :refer 
             [guid handle-change end-edit update-extra handle-login handle-logout]])

  (:require-macros [cljs.core.async.macros :refer [go alt!]]))

(enable-console-print!)


(defn detail [title detail]
  (om/component
    (html [:dl {class "dl-horizontal"}
           [:dt title]
           [:dd detail]])))

(defn edit-button [params]
  "constructs a gliyphicon edit button with paramaters"
  (let [params-merged 
        (merge {:type "button"
                :class "btn btn-default btn-xs panel-title"}
               params)]
    [:button params
     [:span {:class "glyphicon glyphicon-edit glyphicon-align-justify"}]]))
 
(defn panel
  "constructs bootstrap panel with a option edit-fn that
   is run on the click of a glypicon edit button"
  ([title content]
   (panel title content #()))

  ([title content edit-fn]
     [:div {:class "panel panel-defalut"}
      [:h3 "panel-headeing"
       title
       [:div {:class "pull-right"}
        edit-button {:on-click edit-fn}]]
      content]))
 

(def user-details [["Name" [:name]]
            ["Orientation" [:extras :orientation]]
            ["Smoker" [:extras :smokes]]
            ["Drinker" [:extras :drinks]]
            ["Drugs"  [:extras :drugs]]
            ["Religion" [:extras :religion]]])

(defn detail-block [user owner]
  (om/component
    (panel "facts-edit" 
           (html
             [:div {:class "panel-body"} 
              (map (partial apply detail) user-details)]))))

(defn badge-span [s]
 "make a bootstrap badge span from a string" 
 [:span {:class "badge"} s])


(defn interests-block [{:keys [extras]}]
  (om/componenet
    (html [:div (map badge-span (:interests extras))])))
 
(defn image-block [{:keys [picture name]}]
  (om/component
    (html
      [:a {:class "thumbnail"
           :href "#"}
       [:img {:src picture
              :alt name
              :class "img-rounded img-responsive"}]])))


(defn display [show]
 (if show {} {:display "none"}))

(defn about-block [user owner]
  (reify
    om/IDisplayName
    (display-name [_] "About Block")
    om/IInitState
    (init-state [_]
      {:editing false})
    om/IRenderState
    (render-state
      [_ {:keys [editing edit-text]}]
      (let [text (get-in user [:extra :about])
            data-key [:extra :about]
            title (str "About " (:name user))]

        (letfn [(update-fn [new-text] (update-extra {:about new-text}))
                     (done-editing [pred]
                       #(when (pred %)
                          (end-edit user data-key text owner update-fn)))]
               
        (html
          (panel 
            {:onClick #(om/set-state! owner :editing true)}
            [:div {:class "panel-body" :style (display editing)}
             [:textarea {:value text
                           :rows 12
                           :class "form-control"
                           :on-change #(handle-change % user data-key owner)
                           :on-key-press  (done-editing #(and (om/get-state owner :editing)
                                                             (== (.-keyCode %) 12)))
                           :on-blur  (done-editing #(om/get-state owner :editing))}]])))))))


(defn user-column [user owner]
  (om/component
    (html [:div {:class "col-md-5 col-xs-12"}
           (om/build image-block user)
           (om/build detail-block user)])))

(defn about-column [user owner]
  (html [:div {:class "col-md-5 col-md-offset-2 col-xs-12"}
         (om/build about-block user)
         (om/build interests-block user)]))


(def nav-button
  [:button {:type "button"
            :class "navbar-toggle"
            :data-toggle "collapse"
            :data-target "#navbar-collapse"}
   [:span {:class "sr-only"} "Toggle navigation"]
     (for [x (range 1 4)] 
       [:span {:class "icon-bar"}])])

(defn login-button [app owner]
  (om/component
    (html [:ul {:class "nav navbar-nav navbar-right"}
           [:li [:a {:href "#" :on-click #(handle-login app)} "Login"]]])))

(defn logout-button [app owner]
  (om/component
    (html [:ul {:class "nav navbar-nav navbar-right"}
           [:li [:a {:href "#"} (str "Hi, " (get-in app [:user :name]))]]
           [:li [:a {:href "#" :on-click #(handle-logout app)} "Logout"]]])))


(defn navbar [{:keys [title user]} app owner]
  (om/component
    (html
      [:nav {:class "navbar navbar-inverse navbar-static-top" :role "navigation"}
       [:div {:class "container"}
        nav-button
        [:a {:class "navbar-brand"} title]]
       [:div {:class "collapse navbar-collapse" :id "navbar-collapse"}
        [:ul {:class "nav navbar-nav"}
         [:li {:class "active"} [:a {:href "#"} "Profile"]]
         (for [s (seq ["Inbox" "Blog" "Settings"])]
           [:li [:a {:href "#"} s]])
         (if (nil? user) 
           (om/build login-button app)
           (om/build logout-button app))]]])))


(defn center-pane [user owner]
  (om/component
    (html [:div {:class "container" :id "center-pane"}
           [:div {:class "row"}
            (om/build user-column user)
            (om/build about-column user)]])))

(def app-state
  (atom {:title "Steampunk dating" :user nil}))

(defn user-page [{user :user} app owner]
  (om/component
    (html [:div 
           (om/build navbar app)
           (om/build center-pane user)])))

(om/root user-page app-state {:target (. js/document getElementById "main")})
