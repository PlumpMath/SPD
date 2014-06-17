(ns steampunk.example)
(comment
  (def user {:extra {
                   :orientation "gay"
                   :smoke  "Only Green"
                   :drink  "lots"
                   :drug   "Bring it on"
                   :religion "sane"}})

  )


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
 
