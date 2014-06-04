// Compiled by ClojureScript 0.0-2202
goog.provide('steampunk.core');
goog.require('cljs.core');
goog.require('steampunk.utils');
goog.require('cljs.core.async');
goog.require('secretary.core');
goog.require('steampunk.utils');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('goog.History.EventType');
goog.require('figwheel.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('devcards.core');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('figwheel.client');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clojure.walk');
goog.require('goog.events');
goog.require('cljs_http.client');
steampunk.core.history = (new goog.History());
cljs.core.enable_console_print_BANG_.call(null);
steampunk.core.detail = (function detail(t,d){return React.DOM.dl({"className": "dl-horizontal"},React.DOM.dt(null,t),React.DOM.dd(null,d));
});
steampunk.core.edit_detail = (function edit_detail(t,d){return React.DOM.dl({"className": "d1-horizontal"},React.DOM.dt(null,t),React.DOM.text(null,d));
});
steampunk.core.editable_details = (function editable_details(user,owner){if(typeof steampunk.core.t22299 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22299 = (function (owner,user,editable_details,meta22300){
this.owner = owner;
this.user = user;
this.editable_details = editable_details;
this.meta22300 = meta22300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22299.cljs$lang$type = true;
steampunk.core.t22299.cljs$lang$ctorStr = "steampunk.core/t22299";
steampunk.core.t22299.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22299");
});
steampunk.core.t22299.prototype.om$core$IRender$ = true;
steampunk.core.t22299.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return steampunk.core.panel.call(null,"Facts-edit2",React.DOM.div({"className": "panel-body"},steampunk.core.edit_detail.call(null,"Name",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.user)),steampunk.core.edit_detail.call(null,"Orientation",steampunk.core.orientation.call(null,self__.user)),steampunk.core.edit_detail.call(null,"Smoker",steampunk.core.smokes.call(null,self__.user)),steampunk.core.edit_detail.call(null,"Drinker",steampunk.core.drinks.call(null,self__.user)),steampunk.core.edit_detail.call(null,"Drugs",steampunk.core.drugs.call(null,self__.user)),steampunk.core.edit_detail.call(null,"Religion",steampunk.core.religion.call(null,self__.user))));
});
steampunk.core.t22299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22301){var self__ = this;
var _22301__$1 = this;return self__.meta22300;
});
steampunk.core.t22299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22301,meta22300__$1){var self__ = this;
var _22301__$1 = this;return (new steampunk.core.t22299(self__.owner,self__.user,self__.editable_details,meta22300__$1));
});
steampunk.core.__GT_t22299 = (function __GT_t22299(owner__$1,user__$1,editable_details__$1,meta22300){return (new steampunk.core.t22299(owner__$1,user__$1,editable_details__$1,meta22300));
});
}
return (new steampunk.core.t22299(owner,user,editable_details,null));
});
steampunk.core.user = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"orientation","orientation",3869370690),"gay",new cljs.core.Keyword(null,"smoke","smoke",1123466465),"Only Green",new cljs.core.Keyword(null,"drink","drink",1109756938),"lots",new cljs.core.Keyword(null,"drug","drug",1016996626),"Bring it on",new cljs.core.Keyword(null,"religion","religion",4761436323),"sane"], null)], null);
devcards.core.register_card.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steampunk.core","steampunk.core",4454848429),new cljs.core.Keyword(null,"editable-detail","editable-detail",2939965260)], null),devcards.system.get_options.call(null,devcards.core.om_root_card.call(null,steampunk.core.editable_details,steampunk.core.user)),(function (){return devcards.core.om_root_card.call(null,steampunk.core.editable_details,steampunk.core.user);
}));
steampunk.core.interests = (function interests(user){return React.DOM.div(null,(function (){var inters = cljs.core.get_in.call(null,user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"interests","interests",1516515835)], null));return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (inters){
return (function (p1__22302_SHARP_){return React.DOM.span({"className": "badge"},p1__22302_SHARP_);
});})(inters))
,inters));
})());
});
steampunk.core.panel = (function() {
var panel = null;
var panel__2 = (function (title,content){return panel.call(null,title,content,(function (){return cljs.core.List.EMPTY;
}));
});
var panel__3 = (function (title,content,edit_fn){return React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},React.DOM.h3({"className": "panel-title"},title,React.DOM.div({"className": "pull-right"},React.DOM.button({"className": "btn btn-default btn-xs panel-title", "type": "button"},React.DOM.span({"onClick": edit_fn.call(null), "className": "glyphicon glyphicon-edit glyphicon-align-justify"}))))),React.DOM.div({"className": "panel-body"},content));
});
panel = function(title,content,edit_fn){
switch(arguments.length){
case 2:
return panel__2.call(this,title,content);
case 3:
return panel__3.call(this,title,content,edit_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
panel.cljs$core$IFn$_invoke$arity$2 = panel__2;
panel.cljs$core$IFn$_invoke$arity$3 = panel__3;
return panel;
})()
;
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
steampunk.core.detail_block = (function detail_block(user,owner){if(typeof steampunk.core.t22306 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22306 = (function (owner,user,detail_block,meta22307){
this.owner = owner;
this.user = user;
this.detail_block = detail_block;
this.meta22307 = meta22307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22306.cljs$lang$type = true;
steampunk.core.t22306.cljs$lang$ctorStr = "steampunk.core/t22306";
steampunk.core.t22306.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22306");
});
steampunk.core.t22306.prototype.om$core$IRender$ = true;
steampunk.core.t22306.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return steampunk.core.panel.call(null,"Facts",React.DOM.div({"className": "panel-body"},steampunk.core.detail.call(null,"Name",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.user)),steampunk.core.detail.call(null,"Orientation",steampunk.core.orientation.call(null,self__.user)),steampunk.core.detail.call(null,"Smoker",steampunk.core.smokes.call(null,self__.user)),steampunk.core.detail.call(null,"Drinker",steampunk.core.drinks.call(null,self__.user)),steampunk.core.detail.call(null,"Drugs",steampunk.core.drugs.call(null,self__.user)),steampunk.core.detail.call(null,"Religion",steampunk.core.religion.call(null,self__.user))));
});
steampunk.core.t22306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22308){var self__ = this;
var _22308__$1 = this;return self__.meta22307;
});
steampunk.core.t22306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22308,meta22307__$1){var self__ = this;
var _22308__$1 = this;return (new steampunk.core.t22306(self__.owner,self__.user,self__.detail_block,meta22307__$1));
});
steampunk.core.__GT_t22306 = (function __GT_t22306(owner__$1,user__$1,detail_block__$1,meta22307){return (new steampunk.core.t22306(owner__$1,user__$1,detail_block__$1,meta22307));
});
}
return (new steampunk.core.t22306(owner,user,detail_block,null));
});
steampunk.core.image_block = (function image_block(user){if(typeof steampunk.core.t22312 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22312 = (function (user,image_block,meta22313){
this.user = user;
this.image_block = image_block;
this.meta22313 = meta22313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22312.cljs$lang$type = true;
steampunk.core.t22312.cljs$lang$ctorStr = "steampunk.core/t22312";
steampunk.core.t22312.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22312");
});
steampunk.core.t22312.prototype.om$core$IRender$ = true;
steampunk.core.t22312.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.a({"className": "thumbnail", "href": "#"},React.DOM.img({"className": "img-rounded img-responsive", "alt": new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.user), "src": new cljs.core.Keyword(null,"picture","picture",4731129968).cljs$core$IFn$_invoke$arity$1(self__.user)},null));
});
steampunk.core.t22312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22314){var self__ = this;
var _22314__$1 = this;return self__.meta22313;
});
steampunk.core.t22312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22314,meta22313__$1){var self__ = this;
var _22314__$1 = this;return (new steampunk.core.t22312(self__.user,self__.image_block,meta22313__$1));
});
steampunk.core.__GT_t22312 = (function __GT_t22312(user__$1,image_block__$1,meta22313){return (new steampunk.core.t22312(user__$1,image_block__$1,meta22313));
});
}
return (new steampunk.core.t22312(user,image_block,null));
});
steampunk.core.display = (function display(show){if(cljs.core.truth_(show))
{return {};
} else
{return {"display": "none"};
}
});
steampunk.core.about_block = (function about_block(user,owner){if(typeof steampunk.core.t22322 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22322 = (function (owner,user,about_block,meta22323){
this.owner = owner;
this.user = user;
this.about_block = about_block;
this.meta22323 = meta22323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22322.cljs$lang$type = true;
steampunk.core.t22322.cljs$lang$ctorStr = "steampunk.core/t22322";
steampunk.core.t22322.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22322");
});
steampunk.core.t22322.prototype.om$core$IRenderState$ = true;
steampunk.core.t22322.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__22325){var self__ = this;
var map__22326 = p__22325;var map__22326__$1 = ((cljs.core.seq_QMARK_.call(null,map__22326))?cljs.core.apply.call(null,cljs.core.hash_map,map__22326):map__22326);var edit_text = cljs.core.get.call(null,map__22326__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var editing = cljs.core.get.call(null,map__22326__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var ___$1 = this;var text = cljs.core.get_in.call(null,self__.user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"about","about",1106515711)], null));var data_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"about","about",1106515711)], null);var title = [cljs.core.str("About "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.user))].join('');return React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},React.DOM.h3({"className": "panel-title"},title,React.DOM.div({"className": "pull-right"},React.DOM.button({"onClick": ((function (text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
});})(text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing))
, "className": "btn btn-default btn-xs panel-title", "type": "button"},React.DOM.span({"className": "glyphicon glyphicon-edit glyphicon-align-justify"}))))),React.DOM.div({"style": steampunk.core.display.call(null,cljs.core.not.call(null,editing)), "className": "panel-body"},text),React.DOM.div({"style": steampunk.core.display.call(null,editing), "className": "panel-body"},om.dom.textarea.call(null,{"onBlur": ((function (text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing){
return (function (e){if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786))))
{return steampunk.utils.end_edit.call(null,self__.user,data_key,text,self__.owner,((function (text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing){
return (function (new_text){return steampunk.utils.update_extra.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"about","about",1106515711),new_text], null));
});})(text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing))
);
} else
{return null;
}
});})(text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing))
, "onKeyPress": ((function (text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing){
return (function (p1__22316_SHARP_){if(cljs.core.truth_((function (){var and__7868__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786));if(cljs.core.truth_(and__7868__auto__))
{return (p1__22316_SHARP_.keyCode === 13);
} else
{return and__7868__auto__;
}
})()))
{return steampunk.utils.end_edit.call(null,self__.user,data_key,text,self__.owner,((function (text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing){
return (function (new_text){return steampunk.utils.update_extra.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"about","about",1106515711),new_text], null));
});})(text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing))
);
} else
{return null;
}
});})(text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing))
, "onChange": ((function (text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing){
return (function (p1__22315_SHARP_){return steampunk.utils.handle_change.call(null,p1__22315_SHARP_,self__.user,data_key,self__.owner);
});})(text,data_key,title,___$1,map__22326,map__22326__$1,edit_text,editing))
, "className": "form-control", "rows": 12, "value": text})));
});
steampunk.core.t22322.prototype.om$core$IInitState$ = true;
steampunk.core.t22322.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
steampunk.core.t22322.prototype.om$core$IDisplayName$ = true;
steampunk.core.t22322.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "About Block";
});
steampunk.core.t22322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22324){var self__ = this;
var _22324__$1 = this;return self__.meta22323;
});
steampunk.core.t22322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22324,meta22323__$1){var self__ = this;
var _22324__$1 = this;return (new steampunk.core.t22322(self__.owner,self__.user,self__.about_block,meta22323__$1));
});
steampunk.core.__GT_t22322 = (function __GT_t22322(owner__$1,user__$1,about_block__$1,meta22323){return (new steampunk.core.t22322(owner__$1,user__$1,about_block__$1,meta22323));
});
}
return (new steampunk.core.t22322(owner,user,about_block,null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steampunk.core","steampunk.core",4454848429),new cljs.core.Keyword(null,"about-block","about-block",964579775)], null),devcards.system.get_options.call(null,devcards.core.om_root_card.call(null,steampunk.core.about_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"about","about",1106515711),"test"], null)], null))),(function (){return devcards.core.om_root_card.call(null,steampunk.core.about_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"about","about",1106515711),"test"], null)], null));
}));
steampunk.core.user_column = (function user_column(user,owner){if(typeof steampunk.core.t22330 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22330 = (function (owner,user,user_column,meta22331){
this.owner = owner;
this.user = user;
this.user_column = user_column;
this.meta22331 = meta22331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22330.cljs$lang$type = true;
steampunk.core.t22330.cljs$lang$ctorStr = "steampunk.core/t22330";
steampunk.core.t22330.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22330");
});
steampunk.core.t22330.prototype.om$core$IRender$ = true;
steampunk.core.t22330.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "col-md-5 col-xs-12"},om.core.build.call(null,steampunk.core.image_block,self__.user),om.core.build.call(null,steampunk.core.detail_block,self__.user));
});
steampunk.core.t22330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22332){var self__ = this;
var _22332__$1 = this;return self__.meta22331;
});
steampunk.core.t22330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22332,meta22331__$1){var self__ = this;
var _22332__$1 = this;return (new steampunk.core.t22330(self__.owner,self__.user,self__.user_column,meta22331__$1));
});
steampunk.core.__GT_t22330 = (function __GT_t22330(owner__$1,user__$1,user_column__$1,meta22331){return (new steampunk.core.t22330(owner__$1,user__$1,user_column__$1,meta22331));
});
}
return (new steampunk.core.t22330(owner,user,user_column,null));
});
steampunk.core.about_column = (function about_column(user,owner){if(typeof steampunk.core.t22336 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22336 = (function (owner,user,about_column,meta22337){
this.owner = owner;
this.user = user;
this.about_column = about_column;
this.meta22337 = meta22337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22336.cljs$lang$type = true;
steampunk.core.t22336.cljs$lang$ctorStr = "steampunk.core/t22336";
steampunk.core.t22336.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22336");
});
steampunk.core.t22336.prototype.om$core$IRender$ = true;
steampunk.core.t22336.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "col-md-5 col-md-offset-2 col-xs-12"},om.core.build.call(null,steampunk.core.about_block,self__.user),om.core.build.call(null,steampunk.core.interests_block,self__.user));
});
steampunk.core.t22336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22338){var self__ = this;
var _22338__$1 = this;return self__.meta22337;
});
steampunk.core.t22336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22338,meta22337__$1){var self__ = this;
var _22338__$1 = this;return (new steampunk.core.t22336(self__.owner,self__.user,self__.about_column,meta22337__$1));
});
steampunk.core.__GT_t22336 = (function __GT_t22336(owner__$1,user__$1,about_column__$1,meta22337){return (new steampunk.core.t22336(owner__$1,user__$1,about_column__$1,meta22337));
});
}
return (new steampunk.core.t22336(owner,user,about_column,null));
});
steampunk.core.nav_button = React.DOM.button({"data-taget": "#navbar-collapse", "data-toggle": "collapse", "className": "navbar-toggle", "type": "button"},React.DOM.span({"className": "sr-only"},"Toggle navigation"),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}));
steampunk.core.login_button = (function login_button(app,owner){if(typeof steampunk.core.t22342 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22342 = (function (owner,app,login_button,meta22343){
this.owner = owner;
this.app = app;
this.login_button = login_button;
this.meta22343 = meta22343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22342.cljs$lang$type = true;
steampunk.core.t22342.cljs$lang$ctorStr = "steampunk.core/t22342";
steampunk.core.t22342.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22342");
});
steampunk.core.t22342.prototype.om$core$IRender$ = true;
steampunk.core.t22342.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.ul({"className": "nav navbar-nav navbar-right"},React.DOM.li(null,React.DOM.a({"onClick": ((function (___$1){
return (function (){return steampunk.utils.handle_login.call(null,self__.app);
});})(___$1))
, "href": "#"},"Login")));
});
steampunk.core.t22342.prototype.om$core$IDisplayName$ = true;
steampunk.core.t22342.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "Login-Button";
});
steampunk.core.t22342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22344){var self__ = this;
var _22344__$1 = this;return self__.meta22343;
});
steampunk.core.t22342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22344,meta22343__$1){var self__ = this;
var _22344__$1 = this;return (new steampunk.core.t22342(self__.owner,self__.app,self__.login_button,meta22343__$1));
});
steampunk.core.__GT_t22342 = (function __GT_t22342(owner__$1,app__$1,login_button__$1,meta22343){return (new steampunk.core.t22342(owner__$1,app__$1,login_button__$1,meta22343));
});
}
return (new steampunk.core.t22342(owner,app,login_button,null));
});
steampunk.core.logout_button = (function logout_button(app,owner){if(typeof steampunk.core.t22348 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22348 = (function (owner,app,logout_button,meta22349){
this.owner = owner;
this.app = app;
this.logout_button = logout_button;
this.meta22349 = meta22349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22348.cljs$lang$type = true;
steampunk.core.t22348.cljs$lang$ctorStr = "steampunk.core/t22348";
steampunk.core.t22348.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22348");
});
steampunk.core.t22348.prototype.om$core$IRender$ = true;
steampunk.core.t22348.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.ul({"className": "nav navbar-nav navbar-righ"},React.DOM.li(null,React.DOM.a({"href": "#"},[cljs.core.str("Hi, "),cljs.core.str(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"name","name",1017277949)], null)))].join(''))),React.DOM.li(null,React.DOM.a({"onClick": ((function (___$1){
return (function (){return steampunk.utils.handle_logout.call(null,self__.app);
});})(___$1))
, "href": "#"},"Logout")));
});
steampunk.core.t22348.prototype.om$core$IDisplayName$ = true;
steampunk.core.t22348.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "Logout-Button";
});
steampunk.core.t22348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22350){var self__ = this;
var _22350__$1 = this;return self__.meta22349;
});
steampunk.core.t22348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22350,meta22349__$1){var self__ = this;
var _22350__$1 = this;return (new steampunk.core.t22348(self__.owner,self__.app,self__.logout_button,meta22349__$1));
});
steampunk.core.__GT_t22348 = (function __GT_t22348(owner__$1,app__$1,logout_button__$1,meta22349){return (new steampunk.core.t22348(owner__$1,app__$1,logout_button__$1,meta22349));
});
}
return (new steampunk.core.t22348(owner,app,logout_button,null));
});
steampunk.core.navbar = (function navbar(app,owner){if(typeof steampunk.core.t22354 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22354 = (function (owner,app,navbar,meta22355){
this.owner = owner;
this.app = app;
this.navbar = navbar;
this.meta22355 = meta22355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22354.cljs$lang$type = true;
steampunk.core.t22354.cljs$lang$ctorStr = "steampunk.core/t22354";
steampunk.core.t22354.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22354");
});
steampunk.core.t22354.prototype.om$core$IRender$ = true;
steampunk.core.t22354.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.nav({"role": "navigation", "className": "navbar navbar-inverse navbar-static-top"},React.DOM.div({"className": "container"},React.DOM.div({"className": "navbar-header"},steampunk.core.nav_button,React.DOM.a({"className": "navbar-brand"},"Steampunk Dating")),React.DOM.div({"id": "navbar-collapse", "className": "collapse navbar-collapse"},React.DOM.ul({"className": "nav navbar-nav"},React.DOM.li({"className": "active"},React.DOM.a({"href": "#"},"Profile")),React.DOM.li(null,React.DOM.a({"href": "#"},"Inbox")),React.DOM.li(null,React.DOM.a({"href": "#"},"Blog")),React.DOM.li(null,React.DOM.a({"href": "#"},"Settings"))),(((cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"name","name",1017277949)], null)) == null))?om.core.build.call(null,steampunk.core.login_button,self__.app):om.core.build.call(null,steampunk.core.logout_button,self__.app)))));
});
steampunk.core.t22354.prototype.om$core$IDisplayName$ = true;
steampunk.core.t22354.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "Navbar";
});
steampunk.core.t22354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22356){var self__ = this;
var _22356__$1 = this;return self__.meta22355;
});
steampunk.core.t22354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22356,meta22355__$1){var self__ = this;
var _22356__$1 = this;return (new steampunk.core.t22354(self__.owner,self__.app,self__.navbar,meta22355__$1));
});
steampunk.core.__GT_t22354 = (function __GT_t22354(owner__$1,app__$1,navbar__$1,meta22355){return (new steampunk.core.t22354(owner__$1,app__$1,navbar__$1,meta22355));
});
}
return (new steampunk.core.t22354(owner,app,navbar,null));
});
steampunk.core.center_pane = (function center_pane(user,owner){if(typeof steampunk.core.t22360 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22360 = (function (owner,user,center_pane,meta22361){
this.owner = owner;
this.user = user;
this.center_pane = center_pane;
this.meta22361 = meta22361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22360.cljs$lang$type = true;
steampunk.core.t22360.cljs$lang$ctorStr = "steampunk.core/t22360";
steampunk.core.t22360.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22360");
});
steampunk.core.t22360.prototype.om$core$IRender$ = true;
steampunk.core.t22360.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "center-pane", "className": "container"},React.DOM.div({"className": "row"},om.core.build.call(null,steampunk.core.user_column,self__.user),om.core.build.call(null,steampunk.core.about_column,self__.user)));
});
steampunk.core.t22360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22362){var self__ = this;
var _22362__$1 = this;return self__.meta22361;
});
steampunk.core.t22360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22362,meta22361__$1){var self__ = this;
var _22362__$1 = this;return (new steampunk.core.t22360(self__.owner,self__.user,self__.center_pane,meta22361__$1));
});
steampunk.core.__GT_t22360 = (function __GT_t22360(owner__$1,user__$1,center_pane__$1,meta22361){return (new steampunk.core.t22360(owner__$1,user__$1,center_pane__$1,meta22361));
});
}
return (new steampunk.core.t22360(owner,user,center_pane,null));
});
steampunk.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1017503549),null], null));
steampunk.core.blog_page = (function blog_page(app,owner){if(typeof steampunk.core.t22366 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22366 = (function (owner,app,blog_page,meta22367){
this.owner = owner;
this.app = app;
this.blog_page = blog_page;
this.meta22367 = meta22367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22366.cljs$lang$type = true;
steampunk.core.t22366.cljs$lang$ctorStr = "steampunk.core/t22366";
steampunk.core.t22366.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22366");
});
steampunk.core.t22366.prototype.om$core$IRender$ = true;
steampunk.core.t22366.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,steampunk.core.navbar,self__.app));
});
steampunk.core.t22366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22368){var self__ = this;
var _22368__$1 = this;return self__.meta22367;
});
steampunk.core.t22366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22368,meta22367__$1){var self__ = this;
var _22368__$1 = this;return (new steampunk.core.t22366(self__.owner,self__.app,self__.blog_page,meta22367__$1));
});
steampunk.core.__GT_t22366 = (function __GT_t22366(owner__$1,app__$1,blog_page__$1,meta22367){return (new steampunk.core.t22366(owner__$1,app__$1,blog_page__$1,meta22367));
});
}
return (new steampunk.core.t22366(owner,app,blog_page,null));
});
steampunk.core.user_page = (function user_page(app,owner){if(typeof steampunk.core.t22372 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t22372 = (function (owner,app,user_page,meta22373){
this.owner = owner;
this.app = app;
this.user_page = user_page;
this.meta22373 = meta22373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t22372.cljs$lang$type = true;
steampunk.core.t22372.cljs$lang$ctorStr = "steampunk.core/t22372";
steampunk.core.t22372.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"steampunk.core/t22372");
});
steampunk.core.t22372.prototype.om$core$IRender$ = true;
steampunk.core.t22372.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,steampunk.core.navbar,self__.app),om.core.build.call(null,steampunk.core.center_pane,new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
steampunk.core.t22372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22374){var self__ = this;
var _22374__$1 = this;return self__.meta22373;
});
steampunk.core.t22372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22374,meta22373__$1){var self__ = this;
var _22374__$1 = this;return (new steampunk.core.t22372(self__.owner,self__.app,self__.user_page,meta22373__$1));
});
steampunk.core.__GT_t22372 = (function __GT_t22372(owner__$1,app__$1,user_page__$1,meta22373){return (new steampunk.core.t22372(owner__$1,app__$1,user_page__$1,meta22373));
});
}
return (new steampunk.core.t22372(owner,app,user_page,null));
});
var action__9785__auto___22377 = (function (params__9786__auto__){if(cljs.core.map_QMARK_.call(null,params__9786__auto__))
{var map__22375 = params__9786__auto__;var map__22375__$1 = ((cljs.core.seq_QMARK_.call(null,map__22375))?cljs.core.apply.call(null,cljs.core.hash_map,map__22375):map__22375);return om.core.root.call(null,steampunk.core.blog_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9786__auto__))
{var map__22376 = params__9786__auto__;var map__22376__$1 = ((cljs.core.seq_QMARK_.call(null,map__22376))?cljs.core.apply.call(null,cljs.core.hash_map,map__22376):map__22376);return om.core.root.call(null,steampunk.core.blog_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__9785__auto___22377);
var action__9785__auto___22380 = (function (params__9786__auto__){if(cljs.core.map_QMARK_.call(null,params__9786__auto__))
{var map__22378 = params__9786__auto__;var map__22378__$1 = ((cljs.core.seq_QMARK_.call(null,map__22378))?cljs.core.apply.call(null,cljs.core.hash_map,map__22378):map__22378);return om.core.root.call(null,steampunk.core.user_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9786__auto__))
{var map__22379 = params__9786__auto__;var map__22379__$1 = ((cljs.core.seq_QMARK_.call(null,map__22379))?cljs.core.apply.call(null,cljs.core.hash_map,map__22379):map__22379);return om.core.root.call(null,steampunk.core.user_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/profile",action__9785__auto___22380);
var action__9785__auto___22383 = (function (params__9786__auto__){if(cljs.core.map_QMARK_.call(null,params__9786__auto__))
{var map__22381 = params__9786__auto__;var map__22381__$1 = ((cljs.core.seq_QMARK_.call(null,map__22381))?cljs.core.apply.call(null,cljs.core.hash_map,map__22381):map__22381);return om.core.root.call(null,steampunk.core.user_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9786__auto__))
{var map__22382 = params__9786__auto__;var map__22382__$1 = ((cljs.core.seq_QMARK_.call(null,map__22382))?cljs.core.apply.call(null,cljs.core.hash_map,map__22382):map__22382);return om.core.root.call(null,steampunk.core.user_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("content")], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9785__auto___22383);
devcards.core.start_devcard_ui_BANG_.call(null);
devcards.core.start_figwheel_reloader_BANG_.call(null);
steampunk.core.navigation_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"UserProfile",new cljs.core.Keyword(null,"path","path",1017337751),"/profile"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Blog",new cljs.core.Keyword(null,"path","path",1017337751),"/blog"], null)], null));
devcards.core.register_card.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steampunk.core","steampunk.core",4454848429),new cljs.core.Keyword(null,"blog-page","blog-page",1944436044)], null),devcards.system.get_options.call(null,devcards.core.om_root_card.call(null,steampunk.core.blog_page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1017503549),null], null))),(function (){return devcards.core.om_root_card.call(null,steampunk.core.blog_page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1017503549),null], null));
}));

//# sourceMappingURL=core.js.map