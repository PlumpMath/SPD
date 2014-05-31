// Compiled by ClojureScript 0.0-2173
goog.provide('steampunk.core');
goog.require('cljs.core');
goog.require('steampunk.utils');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cljs_http.client');
goog.require('secretary.core');
goog.require('steampunk.utils');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.walk');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('goog.History.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('secretary.core');
steampunk.core.history = (new goog.History());
cljs.core.enable_console_print_BANG_.call(null);
steampunk.core.detail = (function detail(t,d){return React.DOM.dl({"className": "dl-horizontal"},React.DOM.dt(null,t),React.DOM.dd(null,d));
});
steampunk.core.interests = (function interests(user){return React.DOM.div(null,(function (){var inters = cljs.core.get_in.call(null,user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"interests","interests",1516515835)], null));return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__9723_SHARP_){return React.DOM.span({"className": "badge"},p1__9723_SHARP_);
}),inters));
})());
});
steampunk.core.panel = (function panel(title,content){return React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},React.DOM.h3({"className": "panel-title"},title,React.DOM.div({"className": "pull-right"},React.DOM.button({"className": "btn btn-default btn-xs panel-title", "type": "button"},React.DOM.span({"className": "glyphicon glyphicon-edit glyphicon-align-justify"}))))),React.DOM.div({"className": "panel-body"},content));
});
steampunk.core.orientation = (function orientation(user){return cljs.core.get_in.call(null,user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"orientation","orientation",3869370690)], null));
});
steampunk.core.smokes = (function smokes(user){return cljs.core.get_in.call(null,user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"smoke","smoke",1123466465)], null));
});
steampunk.core.drinks = (function drinks(user){return cljs.core.get_in.call(null,user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"drink","drink",1109756938)], null));
});
steampunk.core.drugs = (function drugs(user){return cljs.core.get_in.call(null,user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"drug","drug",1016996626)], null));
});
steampunk.core.religion = (function religion(user){return cljs.core.get_in.call(null,user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"religion","religion",4761436323)], null));
});
steampunk.core.interests_block = (function interests_block(user,_){return steampunk.core.panel.call(null,"Interests",steampunk.core.interests.call(null,user));
});
steampunk.core.detail_block = (function detail_block(user,owner){if(typeof steampunk.core.t9727 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9727 = (function (owner,user,detail_block,meta9728){
this.owner = owner;
this.user = user;
this.detail_block = detail_block;
this.meta9728 = meta9728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9727.cljs$lang$type = true;
steampunk.core.t9727.cljs$lang$ctorStr = "steampunk.core/t9727";
steampunk.core.t9727.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9727");
});
steampunk.core.t9727.prototype.om$core$IRender$ = true;
steampunk.core.t9727.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return steampunk.core.panel.call(null,"Facts",React.DOM.div({"className": "panel-body"},steampunk.core.detail.call(null,"Name",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.user)),steampunk.core.detail.call(null,"Orientation",steampunk.core.orientation.call(null,self__.user)),steampunk.core.detail.call(null,"Smoker",steampunk.core.smokes.call(null,self__.user)),steampunk.core.detail.call(null,"Drinker",steampunk.core.drinks.call(null,self__.user)),steampunk.core.detail.call(null,"Drugs",steampunk.core.drugs.call(null,self__.user)),steampunk.core.detail.call(null,"Religion",steampunk.core.religion.call(null,self__.user))));
});
steampunk.core.t9727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9729){var self__ = this;
var _9729__$1 = this;return self__.meta9728;
});
steampunk.core.t9727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9729,meta9728__$1){var self__ = this;
var _9729__$1 = this;return (new steampunk.core.t9727(self__.owner,self__.user,self__.detail_block,meta9728__$1));
});
steampunk.core.__GT_t9727 = (function __GT_t9727(owner__$1,user__$1,detail_block__$1,meta9728){return (new steampunk.core.t9727(owner__$1,user__$1,detail_block__$1,meta9728));
});
}
return (new steampunk.core.t9727(owner,user,detail_block,null));
});
steampunk.core.image_block = (function image_block(user){if(typeof steampunk.core.t9733 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9733 = (function (user,image_block,meta9734){
this.user = user;
this.image_block = image_block;
this.meta9734 = meta9734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9733.cljs$lang$type = true;
steampunk.core.t9733.cljs$lang$ctorStr = "steampunk.core/t9733";
steampunk.core.t9733.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9733");
});
steampunk.core.t9733.prototype.om$core$IRender$ = true;
steampunk.core.t9733.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.a({"className": "thumbnail", "href": "#"},React.DOM.img({"className": "img-rounded img-responsive", "alt": new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.user), "src": new cljs.core.Keyword(null,"picture","picture",4731129968).cljs$core$IFn$_invoke$arity$1(self__.user)},null));
});
steampunk.core.t9733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9735){var self__ = this;
var _9735__$1 = this;return self__.meta9734;
});
steampunk.core.t9733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9735,meta9734__$1){var self__ = this;
var _9735__$1 = this;return (new steampunk.core.t9733(self__.user,self__.image_block,meta9734__$1));
});
steampunk.core.__GT_t9733 = (function __GT_t9733(user__$1,image_block__$1,meta9734){return (new steampunk.core.t9733(user__$1,image_block__$1,meta9734));
});
}
return (new steampunk.core.t9733(user,image_block,null));
});
steampunk.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
steampunk.core.about_block = (function about_block(user,owner){if(typeof steampunk.core.t9743 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9743 = (function (owner,user,about_block,meta9744){
this.owner = owner;
this.user = user;
this.about_block = about_block;
this.meta9744 = meta9744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9743.cljs$lang$type = true;
steampunk.core.t9743.cljs$lang$ctorStr = "steampunk.core/t9743";
steampunk.core.t9743.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9743");
});
steampunk.core.t9743.prototype.om$core$IRenderState$ = true;
steampunk.core.t9743.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9746){var self__ = this;
var map__9747 = p__9746;var map__9747__$1 = ((cljs.core.seq_QMARK_.call(null,map__9747))?cljs.core.apply.call(null,cljs.core.hash_map,map__9747):map__9747);var edit_text = cljs.core.get.call(null,map__9747__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var editing = cljs.core.get.call(null,map__9747__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var ___$1 = this;var text = cljs.core.get_in.call(null,self__.user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"about","about",1106515711)], null));var data_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"about","about",1106515711)], null);var title = [cljs.core.str("About "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.user))].join('');return React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},React.DOM.h3({"className": "panel-title"},title,React.DOM.div({"className": "pull-right"},React.DOM.button({"onClick": (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
}), "className": "btn btn-default btn-xs panel-title", "type": "button"},React.DOM.span({"className": "glyphicon glyphicon-edit glyphicon-align-justify"}))))),React.DOM.div({"style": steampunk.core.display.call(null,cljs.core.not.call(null,editing)), "className": "panel-body"},text),React.DOM.div({"style": steampunk.core.display.call(null,editing), "className": "panel-body"},om.dom.textarea.call(null,{"onBlur": (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786))))
{return steampunk.utils.end_edit.call(null,self__.user,data_key,text,self__.owner,(function (new_text){return steampunk.utils.update_extra.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"about","about",1106515711),new_text], null));
}));
} else
{return null;
}
}), "onKeyPress": (function (p1__9737_SHARP_){if(cljs.core.truth_((function (){var and__3442__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786));if(cljs.core.truth_(and__3442__auto__))
{return (p1__9737_SHARP_.keyCode === 13);
} else
{return and__3442__auto__;
}
})()))
{return steampunk.utils.end_edit.call(null,self__.user,data_key,text,self__.owner,(function (new_text){return steampunk.utils.update_extra.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"about","about",1106515711),new_text], null));
}));
} else
{return null;
}
}), "onChange": (function (p1__9736_SHARP_){return steampunk.utils.handle_change.call(null,p1__9736_SHARP_,self__.user,data_key,self__.owner);
}), "className": "form-control", "rows": 12, "value": text})));
});
steampunk.core.t9743.prototype.om$core$IInitState$ = true;
steampunk.core.t9743.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
steampunk.core.t9743.prototype.om$core$IDisplayName$ = true;
steampunk.core.t9743.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "About Block";
});
steampunk.core.t9743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9745){var self__ = this;
var _9745__$1 = this;return self__.meta9744;
});
steampunk.core.t9743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9745,meta9744__$1){var self__ = this;
var _9745__$1 = this;return (new steampunk.core.t9743(self__.owner,self__.user,self__.about_block,meta9744__$1));
});
steampunk.core.__GT_t9743 = (function __GT_t9743(owner__$1,user__$1,about_block__$1,meta9744){return (new steampunk.core.t9743(owner__$1,user__$1,about_block__$1,meta9744));
});
}
return (new steampunk.core.t9743(owner,user,about_block,null));
});
steampunk.core.user_column = (function user_column(user,owner){if(typeof steampunk.core.t9751 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9751 = (function (owner,user,user_column,meta9752){
this.owner = owner;
this.user = user;
this.user_column = user_column;
this.meta9752 = meta9752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9751.cljs$lang$type = true;
steampunk.core.t9751.cljs$lang$ctorStr = "steampunk.core/t9751";
steampunk.core.t9751.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9751");
});
steampunk.core.t9751.prototype.om$core$IRender$ = true;
steampunk.core.t9751.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "col-md-5 col-xs-12"},om.core.build.call(null,steampunk.core.image_block,self__.user),om.core.build.call(null,steampunk.core.detail_block,self__.user));
});
steampunk.core.t9751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9753){var self__ = this;
var _9753__$1 = this;return self__.meta9752;
});
steampunk.core.t9751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9753,meta9752__$1){var self__ = this;
var _9753__$1 = this;return (new steampunk.core.t9751(self__.owner,self__.user,self__.user_column,meta9752__$1));
});
steampunk.core.__GT_t9751 = (function __GT_t9751(owner__$1,user__$1,user_column__$1,meta9752){return (new steampunk.core.t9751(owner__$1,user__$1,user_column__$1,meta9752));
});
}
return (new steampunk.core.t9751(owner,user,user_column,null));
});
steampunk.core.about_column = (function about_column(user,owner){if(typeof steampunk.core.t9757 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9757 = (function (owner,user,about_column,meta9758){
this.owner = owner;
this.user = user;
this.about_column = about_column;
this.meta9758 = meta9758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9757.cljs$lang$type = true;
steampunk.core.t9757.cljs$lang$ctorStr = "steampunk.core/t9757";
steampunk.core.t9757.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9757");
});
steampunk.core.t9757.prototype.om$core$IRender$ = true;
steampunk.core.t9757.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "col-md-5 col-md-offset-2 col-xs-12"},om.core.build.call(null,steampunk.core.about_block,self__.user),om.core.build.call(null,steampunk.core.interests_block,self__.user));
});
steampunk.core.t9757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9759){var self__ = this;
var _9759__$1 = this;return self__.meta9758;
});
steampunk.core.t9757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9759,meta9758__$1){var self__ = this;
var _9759__$1 = this;return (new steampunk.core.t9757(self__.owner,self__.user,self__.about_column,meta9758__$1));
});
steampunk.core.__GT_t9757 = (function __GT_t9757(owner__$1,user__$1,about_column__$1,meta9758){return (new steampunk.core.t9757(owner__$1,user__$1,about_column__$1,meta9758));
});
}
return (new steampunk.core.t9757(owner,user,about_column,null));
});
steampunk.core.nav_button = React.DOM.button({"data-taget": "#navbar-collapse", "data-toggle": "collapse", "className": "navbar-toggle", "type": "button"},React.DOM.span({"className": "sr-only"},"Toggle navigation"),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}));
steampunk.core.login_button = (function login_button(app,owner){if(typeof steampunk.core.t9763 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9763 = (function (owner,app,login_button,meta9764){
this.owner = owner;
this.app = app;
this.login_button = login_button;
this.meta9764 = meta9764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9763.cljs$lang$type = true;
steampunk.core.t9763.cljs$lang$ctorStr = "steampunk.core/t9763";
steampunk.core.t9763.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9763");
});
steampunk.core.t9763.prototype.om$core$IRender$ = true;
steampunk.core.t9763.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.ul({"className": "nav navbar-nav navbar-right"},React.DOM.li(null,React.DOM.a({"onClick": (function (){return steampunk.utils.handle_login.call(null,self__.app);
}), "href": "#"},"Login")));
});
steampunk.core.t9763.prototype.om$core$IDisplayName$ = true;
steampunk.core.t9763.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "Login-Button";
});
steampunk.core.t9763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9765){var self__ = this;
var _9765__$1 = this;return self__.meta9764;
});
steampunk.core.t9763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9765,meta9764__$1){var self__ = this;
var _9765__$1 = this;return (new steampunk.core.t9763(self__.owner,self__.app,self__.login_button,meta9764__$1));
});
steampunk.core.__GT_t9763 = (function __GT_t9763(owner__$1,app__$1,login_button__$1,meta9764){return (new steampunk.core.t9763(owner__$1,app__$1,login_button__$1,meta9764));
});
}
return (new steampunk.core.t9763(owner,app,login_button,null));
});
steampunk.core.logout_button = (function logout_button(app,owner){if(typeof steampunk.core.t9769 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9769 = (function (owner,app,logout_button,meta9770){
this.owner = owner;
this.app = app;
this.logout_button = logout_button;
this.meta9770 = meta9770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9769.cljs$lang$type = true;
steampunk.core.t9769.cljs$lang$ctorStr = "steampunk.core/t9769";
steampunk.core.t9769.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9769");
});
steampunk.core.t9769.prototype.om$core$IRender$ = true;
steampunk.core.t9769.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.ul({"className": "nav navbar-nav navbar-righ"},React.DOM.li(null,React.DOM.a({"href": "#"},[cljs.core.str("Hi, "),cljs.core.str(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"name","name",1017277949)], null)))].join(''))),React.DOM.li(null,React.DOM.a({"onClick": (function (){return steampunk.utils.handle_logout.call(null,self__.app);
}), "href": "#"},"Logout")));
});
steampunk.core.t9769.prototype.om$core$IDisplayName$ = true;
steampunk.core.t9769.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "Logout-Button";
});
steampunk.core.t9769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9771){var self__ = this;
var _9771__$1 = this;return self__.meta9770;
});
steampunk.core.t9769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9771,meta9770__$1){var self__ = this;
var _9771__$1 = this;return (new steampunk.core.t9769(self__.owner,self__.app,self__.logout_button,meta9770__$1));
});
steampunk.core.__GT_t9769 = (function __GT_t9769(owner__$1,app__$1,logout_button__$1,meta9770){return (new steampunk.core.t9769(owner__$1,app__$1,logout_button__$1,meta9770));
});
}
return (new steampunk.core.t9769(owner,app,logout_button,null));
});
steampunk.core.navbar = (function navbar(app,owner){if(typeof steampunk.core.t9775 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9775 = (function (owner,app,navbar,meta9776){
this.owner = owner;
this.app = app;
this.navbar = navbar;
this.meta9776 = meta9776;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9775.cljs$lang$type = true;
steampunk.core.t9775.cljs$lang$ctorStr = "steampunk.core/t9775";
steampunk.core.t9775.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9775");
});
steampunk.core.t9775.prototype.om$core$IRender$ = true;
steampunk.core.t9775.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.nav({"role": "navigation", "className": "navbar navbar-inverse navbar-static-top"},React.DOM.div({"className": "container"},React.DOM.div({"className": "navbar-header"},steampunk.core.nav_button,React.DOM.a({"className": "navbar-brand"},"Steampunk Dating")),React.DOM.div({"id": "navbar-collapse", "className": "collapse navbar-collapse"},React.DOM.ul({"className": "nav navbar-nav"},React.DOM.li({"className": "active"},React.DOM.a({"href": "#"},"Profile")),React.DOM.li(null,React.DOM.a({"href": "#"},"Inbox")),React.DOM.li(null,React.DOM.a({"href": "#"},"Blog")),React.DOM.li(null,React.DOM.a({"href": "#"},"Settings"))),(((cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"name","name",1017277949)], null)) == null))?om.core.build.call(null,steampunk.core.login_button,self__.app):om.core.build.call(null,steampunk.core.logout_button,self__.app)))));
});
steampunk.core.t9775.prototype.om$core$IDisplayName$ = true;
steampunk.core.t9775.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "Navbar";
});
steampunk.core.t9775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9777){var self__ = this;
var _9777__$1 = this;return self__.meta9776;
});
steampunk.core.t9775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9777,meta9776__$1){var self__ = this;
var _9777__$1 = this;return (new steampunk.core.t9775(self__.owner,self__.app,self__.navbar,meta9776__$1));
});
steampunk.core.__GT_t9775 = (function __GT_t9775(owner__$1,app__$1,navbar__$1,meta9776){return (new steampunk.core.t9775(owner__$1,app__$1,navbar__$1,meta9776));
});
}
return (new steampunk.core.t9775(owner,app,navbar,null));
});
steampunk.core.center_pane = (function center_pane(user,owner){if(typeof steampunk.core.t9781 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9781 = (function (owner,user,center_pane,meta9782){
this.owner = owner;
this.user = user;
this.center_pane = center_pane;
this.meta9782 = meta9782;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9781.cljs$lang$type = true;
steampunk.core.t9781.cljs$lang$ctorStr = "steampunk.core/t9781";
steampunk.core.t9781.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9781");
});
steampunk.core.t9781.prototype.om$core$IRender$ = true;
steampunk.core.t9781.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "center-pane", "className": "container"},React.DOM.div({"className": "row"},om.core.build.call(null,steampunk.core.user_column,self__.user),om.core.build.call(null,steampunk.core.about_column,self__.user)));
});
steampunk.core.t9781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9783){var self__ = this;
var _9783__$1 = this;return self__.meta9782;
});
steampunk.core.t9781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9783,meta9782__$1){var self__ = this;
var _9783__$1 = this;return (new steampunk.core.t9781(self__.owner,self__.user,self__.center_pane,meta9782__$1));
});
steampunk.core.__GT_t9781 = (function __GT_t9781(owner__$1,user__$1,center_pane__$1,meta9782){return (new steampunk.core.t9781(owner__$1,user__$1,center_pane__$1,meta9782));
});
}
return (new steampunk.core.t9781(owner,user,center_pane,null));
});
steampunk.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1017503549),null], null));
steampunk.core.blog_page = (function blog_page(app,owner){if(typeof steampunk.core.t9787 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9787 = (function (owner,app,blog_page,meta9788){
this.owner = owner;
this.app = app;
this.blog_page = blog_page;
this.meta9788 = meta9788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9787.cljs$lang$type = true;
steampunk.core.t9787.cljs$lang$ctorStr = "steampunk.core/t9787";
steampunk.core.t9787.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9787");
});
steampunk.core.t9787.prototype.om$core$IRender$ = true;
steampunk.core.t9787.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,steampunk.core.navbar,self__.app));
});
steampunk.core.t9787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9789){var self__ = this;
var _9789__$1 = this;return self__.meta9788;
});
steampunk.core.t9787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9789,meta9788__$1){var self__ = this;
var _9789__$1 = this;return (new steampunk.core.t9787(self__.owner,self__.app,self__.blog_page,meta9788__$1));
});
steampunk.core.__GT_t9787 = (function __GT_t9787(owner__$1,app__$1,blog_page__$1,meta9788){return (new steampunk.core.t9787(owner__$1,app__$1,blog_page__$1,meta9788));
});
}
return (new steampunk.core.t9787(owner,app,blog_page,null));
});
steampunk.core.user_page = (function user_page(app,owner){if(typeof steampunk.core.t9793 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t9793 = (function (owner,app,user_page,meta9794){
this.owner = owner;
this.app = app;
this.user_page = user_page;
this.meta9794 = meta9794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t9793.cljs$lang$type = true;
steampunk.core.t9793.cljs$lang$ctorStr = "steampunk.core/t9793";
steampunk.core.t9793.cljs$lang$ctorPrWriter = (function (this__4021__auto__,writer__4022__auto__,opt__4023__auto__){return cljs.core._write.call(null,writer__4022__auto__,"steampunk.core/t9793");
});
steampunk.core.t9793.prototype.om$core$IRender$ = true;
steampunk.core.t9793.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,steampunk.core.navbar,self__.app),om.core.build.call(null,steampunk.core.center_pane,new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
steampunk.core.t9793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9795){var self__ = this;
var _9795__$1 = this;return self__.meta9794;
});
steampunk.core.t9793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9795,meta9794__$1){var self__ = this;
var _9795__$1 = this;return (new steampunk.core.t9793(self__.owner,self__.app,self__.user_page,meta9794__$1));
});
steampunk.core.__GT_t9793 = (function __GT_t9793(owner__$1,app__$1,user_page__$1,meta9794){return (new steampunk.core.t9793(owner__$1,app__$1,user_page__$1,meta9794));
});
}
return (new steampunk.core.t9793(owner,app,user_page,null));
});
var action__4378__auto___9798 = (function (params__4379__auto__){if(cljs.core.map_QMARK_.call(null,params__4379__auto__))
{var map__9796 = params__4379__auto__;var map__9796__$1 = ((cljs.core.seq_QMARK_.call(null,map__9796))?cljs.core.apply.call(null,cljs.core.hash_map,map__9796):map__9796);return om.core.root.call(null,steampunk.core.blog_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4379__auto__))
{var map__9797 = params__4379__auto__;var map__9797__$1 = ((cljs.core.seq_QMARK_.call(null,map__9797))?cljs.core.apply.call(null,cljs.core.hash_map,map__9797):map__9797);return om.core.root.call(null,steampunk.core.blog_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__4378__auto___9798);
var action__4378__auto___9801 = (function (params__4379__auto__){if(cljs.core.map_QMARK_.call(null,params__4379__auto__))
{var map__9799 = params__4379__auto__;var map__9799__$1 = ((cljs.core.seq_QMARK_.call(null,map__9799))?cljs.core.apply.call(null,cljs.core.hash_map,map__9799):map__9799);return om.core.root.call(null,steampunk.core.user_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4379__auto__))
{var map__9800 = params__4379__auto__;var map__9800__$1 = ((cljs.core.seq_QMARK_.call(null,map__9800))?cljs.core.apply.call(null,cljs.core.hash_map,map__9800):map__9800);return om.core.root.call(null,steampunk.core.user_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/profile",action__4378__auto___9801);
var action__4378__auto___9804 = (function (params__4379__auto__){if(cljs.core.map_QMARK_.call(null,params__4379__auto__))
{var map__9802 = params__4379__auto__;var map__9802__$1 = ((cljs.core.seq_QMARK_.call(null,map__9802))?cljs.core.apply.call(null,cljs.core.hash_map,map__9802):map__9802);return om.core.root.call(null,steampunk.core.user_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4379__auto__))
{var map__9803 = params__4379__auto__;var map__9803__$1 = ((cljs.core.seq_QMARK_.call(null,map__9803))?cljs.core.apply.call(null,cljs.core.hash_map,map__9803):map__9803);return om.core.root.call(null,steampunk.core.user_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4378__auto___9804);
steampunk.core.navigation_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"UserProfile",new cljs.core.Keyword(null,"path","path",1017337751),"/profile"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Blog",new cljs.core.Keyword(null,"path","path",1017337751),"/blog"], null)], null));
steampunk.core.deffn.call(null);

//# sourceMappingURL=core.js.map