(ns steampunk.core
 (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [clojure.walk :as walk]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [devcards.core :as dc ]
            [figwheel.client :as fw ]
            [steampunk.utils :refer [guid handle-change end-edit update-extra handle-login handle-logout]])

   (:require-macros [cljs.core.async.macros :refer [go alt!]]
                   [devcards.core :refer [defcard]])

  (:import goog.History
           goog.History.EventType))

(def history (History.) )

;; Lets you do (prn "stuff") to the console
(enable-console-print!)
(comment
  {:user #js {:id "5367fbb460e5b57a89000f46"
              :updated_at "2014-05-05T22:24:59Z"
              :created_at "2014-05-05T20:59:32Z"
              :name "Eric Fode"
              :description nil
              :extra #js {}
              :stats #js {:sign_in_count 2}
              :tags #js []
              :picture "http://graph.facebook.com/10203689649821141/picture"
              :type "user"
              :approved false
              :username nil
              :profile #js {}
              :email nil
              :confirmed false
              :is_admin false
              :main_identity "facebook"
              :access_token "VfzyUsWSnJRPQwxdxJ6kwDKyxs9zqsHiVeWgaDdRjrGg"
              :identities #js [#js {:id "5367fbb460e5b57a89000f45", :created_at "2014-05-05T20:59:32Z", :name "Eric Fode", :description nil, :stats #js {}, :tags #js [], :picture "http://graph.facebook.com/10203689649821141/picture", :type "facebook_account", :provider "facebook", :uid "10203689649821141", :email nil, :first_name "Eric", :last_name "Fode"}], :last_seen_at "2014-05-05T21:17:09Z", :sign_in #js {:created_at "2014-05-05 20:59:33 UTC", :app_id "535739320813a625c50004c6", :url "http://localhost:3000/index.html"}}})
(comment
(def user
  { :gender "male"
    :orientation "hetro"
    :age 22
    :smoke "never"
    :drink "every night!"
    :drugs "most weekends"
    :religion "duchebag"
    :kids "Never!!!"
    :pets "Golden retriver"
    :job "Sales person"
    :education "Enugh"
    :image "http://thehairpin.com/wp-content/uploads/2012/05/Picture-71.jpg"
    :about "Hi, my name is bob the freindly person with a suprising amount of text in this little emo deallly bob. I also have lots of terrible speling errors
    Just to bother chisty when she is reading over it...  know thats kinda mean but meh,,, I need text and it;s the first thing that has popped into my head
    If I could think of somethig better I woud use that....  I want to tel a little story abou bob, he was afreindly guy until he started surfing then he got
    so goddamn boring that everyone decied to hate him... A bit vendictive I know but whats there for it! Nothing relly


    This shouuld be getting close to enugh text to get a feel for the thigns"

    :interests ["Jumping around" "Swimming and such" "Derping" "Herping" "slurping" "kerping"]
    })

)

(comment
  "Code to init a test user "
  (.then (.api js/Hull "/me" "put" #js {:extra (clj->js user) }) #(print %))
  (def test (chan))
  (.then (.api js/Hull #js {:provider "facebook" :path "me"}) #(put! test (js->clj %)))
  (go (<! chan))
)

(defn detail [t d]
  (dom/dl #js {:className "dl-horizontal"}
          (dom/dt nil t)
          (dom/dd nil d)))

(defn edit-detail [t d]
  (dom/dl #js {:className "d1-horizontal"}
          (dom/dt nil t)
          (dom/text nil d)))

(defn editable-details [user owner]
  (reify
    om/IRender
    (render [this]
     (panel "Facts-edit2" (dom/div
                     #js {:className "panel-body"}
                             (edit-detail "Name" (:name user))
                             (edit-detail "Orientation" (orientation user))
                             (edit-detail "Smoker" (smokes user))
                             (edit-detail "Drinker" (drinks user))
                             (edit-detail "Drugs" (drugs user))
                             (edit-detail "Religion" (religion user)))))))
(def user {:extra {
                   :orientation "gay"
                   :smoke  "Only Green"
                   :drink  "lots"
                   :drug   "Bring it on"
                   :religion "sane"}})
(defcard editable-detail
  (dc/om-root-card editable-details user ))

(defn interests [user]
  (dom/div nil
           (let [inters (get-in user [:extra :interests])]
             (clj->js (map #(dom/span #js {:className "badge"} %) inters )))))


(defn panel
  ([title content]
   (panel title content #()))
  ([title content edit-fn]
  (dom/div
   #js {:className "panel panel-default"}
   (dom/div
    #js {:className "panel-heading"}
    (dom/h3
     #js {:className "panel-title"}  title
     (dom/div
      #js {:className "pull-right"}
      (dom/button
       #js {:type "button" :className "btn btn-default btn-xs panel-title"}
       (dom/span
        #js {:className "glyphicon glyphicon-edit glyphicon-align-justify"
             :onClick (edit-fn)})))))
   (dom/div #js {:className "panel-body"} content ))))



(defn orientation [user]
  (get-in user [:extra :orientation]))

(defn smokes [user]
  (get-in user [:extra :smoke]))

(defn drinks [user]
  (get-in user [:extra :drink]))

(defn drugs [user]
  (get-in user [:extra :drug]))

(defn religion [user]
  (get-in user [:extra :religion]))

(defn interests-block [user _]
  (panel "Interests" (interests user)))

(defn detail-block [user owner]
  (reify
    om/IRender
    (render [this]
     (panel "Facts" (dom/div
                     #js {:className "panel-body"}
                             (detail "Name" (:name user))
                             (detail "Orientation" (orientation user))
                             (detail "Smoker" (smokes user))
                             (detail "Drinker" (drinks user))
                             (detail "Drugs" (drugs user))
                             (detail "Religion" (religion user)))))))


(defn image-block [user]
  (reify
    om/IRender
    (render [_]
            (dom/a
             #js {:href "#" :className "thumbnail"}
             (dom/img
              #js {:src (:picture user)
                   :alt (:name user)
                   :className "img-rounded img-responsive"} nil)))))




(defn display [show]
 (if show
  #js {}
  #js {:display "none"}))

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
       (dom/div
        #js {:className "panel panel-default"}
        (dom/div
         #js {:className "panel-heading"}
         (dom/h3
          #js {:className "panel-title"}  title
          (dom/div
           #js {:className "pull-right"}
           (dom/button
            #js {:type "button"
                 :className "btn btn-default btn-xs panel-title"
                 :onClick #(om/set-state! owner :editing true)}
            (dom/span
             #js {:className "glyphicon glyphicon-edit glyphicon-align-justify"})))))
        (dom/div #js {:className "panel-body" :style (display (not editing))} text)
        (dom/div
         #js {:className "panel-body" :style (display editing)}
         (dom/textarea
          #js {:value text
               :rows 12
               :className "form-control"
               :onChange #(handle-change % user data-key owner)
               :onKeyPress #(when (and
                                   (om/get-state owner :editing)
                                   (== (.-keyCode %) 13))
                              (end-edit user data-key text owner
                                        (fn [new-text] (update-extra {:about new-text}))))
               :onBlur (fn [e]
                         (when (om/get-state owner :editing)
                           (end-edit user data-key text owner
                                     (fn [new-text] (update-extra {:about new-text})))))})))))))

(defcard about-block
  (dc/om-root-card about-block {:extra {:about "test"}}))

(defn user-column [user owner]
  (reify
    om/IRender
    (render [this]
  (dom/div  #js {:className "col-md-5 col-xs-12"}
            (om/build image-block user)
            (om/build detail-block user)))))

(defn about-column [user owner]
  (reify
    om/IRender
    (render [this]
    (dom/div #js {:className "col-md-5 col-md-offset-2 col-xs-12" }
           (om/build about-block user)
           (om/build interests-block user)))))


(def nav-button
  (dom/button #js {:type "button"
                   :className "navbar-toggle"
                   :data-toggle "collapse"
                   :data-taget "#navbar-collapse"}
              (dom/span #js {:className "sr-only"} "Toggle navigation")
              (dom/span #js {:className "icon-bar"})
              (dom/span #js {:className "icon-bar"})
              (dom/span #js {:className "icon-bar"})))

(defn login-button [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "Login-Button")
    om/IRender
    (render [_]
            (dom/ul #js {:className "nav navbar-nav navbar-right"}
                    (dom/li nil (dom/a #js {:href "#"
                                            :onClick #(handle-login app)} "Login"))))))

(defn logout-button [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "Logout-Button")
    om/IRender
    (render [_]
            (dom/ul #js {:className "nav navbar-nav navbar-righ"}
                    (dom/li nil (dom/a #js {:href "#"} (str "Hi, " (get-in app [:user :name]))))
                    (dom/li nil (dom/a #js {:href "#" :onClick #(handle-logout app)} "Logout"))))))

(defn navbar  [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "Navbar")
    om/IRender
    (render [_]
            (dom/nav
             #js {:className "navbar navbar-inverse navbar-static-top"
                  :role "navigation"}
             (dom/div #js {:className "container"}
                      (dom/div #js {:className "navbar-header"}
                               nav-button
                               (dom/a #js {:className "navbar-brand"} "Steampunk Dating"))
                      (dom/div #js {:className "collapse navbar-collapse" :id "navbar-collapse"}
                               (dom/ul #js {:className "nav navbar-nav"}
                                       (dom/li
                                        #js {:className "active"}
                                        (dom/a #js {:href "#"} "Profile"))
                                       (dom/li nil (dom/a #js {:href "#"} "Inbox"))
                                       (dom/li nil (dom/a #js {:href "#"} "Blog"))
                                       (dom/li nil (dom/a #js {:href "#"} "Settings")))
                               (if (nil? (get-in app [:user :name]))
                                 (om/build login-button app)
                                 (om/build logout-button app))))))))


(defn center-pane [user owner]
  (reify
    om/IRender
    (render [this]
            (dom/div #js {:className "container" :id "center-pane"}
                     (dom/div #js {:className "row"}
                              (om/build user-column user)
                              (om/build about-column user))))))

(def app-state
  (atom {:user nil}))


(defn blog-page [app owner]
  (reify
    om/IRender
    (render [_]
            (dom/div nil
                      (om/build navbar app)))))

(defn user-page [app owner]
  (reify
    om/IRender
    (render [_]
            (dom/div nil
                     (om/build navbar app)
                     (om/build center-pane (:user app ))))))

(defroute "/blog" {}
  (om/root blog-page app-state {:target (.getElementById js/document "content")}))

(defroute "/profile" {}
  (om/root user-page app-state {:target (.getElementById js/document "content")}))

(defroute "/" {}
  (om/root user-page app-state {:target (.getElementById js/document "content")}))

(dc/start-devcard-ui!)
(dc/start-figwheel-reloader!)

(def navigation-state
  (atom [{:name "UserProfile" :path "/profile"}
         {:name "Blog"      :path "/blog"}]))


(defcard blog-page
  (dc/om-root-card blog-page {:user nil}))
