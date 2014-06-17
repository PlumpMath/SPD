// Compiled by ClojureScript 0.0-2202
goog.provide('steampunk.core');
goog.require('cljs.core');
goog.require('steampunk.utils');
goog.require('cljs.core.async');
goog.require('steampunk.utils');
goog.require('sablono.core');
goog.require('clojure.browser.repl');
goog.require('cljs_http.client');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.walk');
goog.require('clojure.browser.repl');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
steampunk.core.detail = (function detail(title,detail__$1){if(typeof steampunk.core.t10290 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t10290 = (function (title,detail,meta10291){
this.title = title;
this.detail = detail;
this.meta10291 = meta10291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t10290.cljs$lang$type = true;
steampunk.core.t10290.cljs$lang$ctorStr = "steampunk.core/t10290";
steampunk.core.t10290.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"steampunk.core/t10290");
});
steampunk.core.t10290.prototype.om$core$IRender$ = true;
steampunk.core.t10290.prototype.om$core$IRender$render$arity$1 = (function (this__5494__auto__){var self__ = this;
var this__5494__auto____$1 = this;return React.DOM.dl({"class": "dl-horizontal"},(function (){var attrs10293 = self__.title;return cljs.core.apply.call(null,React.DOM.dt,((cljs.core.map_QMARK_.call(null,attrs10293))?sablono.interpreter.attributes.call(null,attrs10293):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10293))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10293)], null))));
})(),(function (){var attrs10294 = self__.detail;return cljs.core.apply.call(null,React.DOM.dd,((cljs.core.map_QMARK_.call(null,attrs10294))?sablono.interpreter.attributes.call(null,attrs10294):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10294))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10294)], null))));
})());
});
steampunk.core.t10290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10292){var self__ = this;
var _10292__$1 = this;return self__.meta10291;
});
steampunk.core.t10290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10292,meta10291__$1){var self__ = this;
var _10292__$1 = this;return (new steampunk.core.t10290(self__.title,self__.detail,meta10291__$1));
});
steampunk.core.__GT_t10290 = (function __GT_t10290(title__$1,detail__$2,meta10291){return (new steampunk.core.t10290(title__$1,detail__$2,meta10291));
});
}
return (new steampunk.core.t10290(title,detail__$1,null));
});
steampunk.core.edit_button = (function edit_button(params){var params_merged = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"class","class",1108647146),"btn btn-default btn-xs panel-title"], null),params);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"glyphicon glyphicon-edit glyphicon-align-justify"], null)], null)], null);
});
/**
* constructs bootstrap panel with a option edit-fn that
* is run on the click of a glypicon edit button
*/
steampunk.core.panel = (function() {
var panel = null;
var panel__2 = (function (title,content){return panel.call(null,title,content,(function (){return cljs.core.List.EMPTY;
}));
});
var panel__3 = (function (title,content,edit_fn){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"panel panel-defalut"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"panel-headeing",title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"pull-right"], null),steampunk.core.edit_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),edit_fn], null)], null)], null),content], null);
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
steampunk.core.user_details = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Orientation",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extras","extras",4019839445),new cljs.core.Keyword(null,"orientation","orientation",3869370690)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Smoker",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extras","extras",4019839445),new cljs.core.Keyword(null,"smokes","smokes",4410333270)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drinker",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extras","extras",4019839445),new cljs.core.Keyword(null,"drinks","drinks",3985337933)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drugs",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extras","extras",4019839445),new cljs.core.Keyword(null,"drugs","drugs",1109768261)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religion",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extras","extras",4019839445),new cljs.core.Keyword(null,"religion","religion",4761436323)], null)], null)], null);
steampunk.core.detail_block = (function detail_block(user,owner){if(typeof steampunk.core.t10298 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t10298 = (function (owner,user,detail_block,meta10299){
this.owner = owner;
this.user = user;
this.detail_block = detail_block;
this.meta10299 = meta10299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t10298.cljs$lang$type = true;
steampunk.core.t10298.cljs$lang$ctorStr = "steampunk.core/t10298";
steampunk.core.t10298.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"steampunk.core/t10298");
});
steampunk.core.t10298.prototype.om$core$IRender$ = true;
steampunk.core.t10298.prototype.om$core$IRender$render$arity$1 = (function (this__5494__auto__){var self__ = this;
var this__5494__auto____$1 = this;return steampunk.core.panel.call(null,"facts-edit",React.DOM.div({"className": "panel-body"},sablono.interpreter.interpret.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,steampunk.core.detail),steampunk.core.user_details))));
});
steampunk.core.t10298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10300){var self__ = this;
var _10300__$1 = this;return self__.meta10299;
});
steampunk.core.t10298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10300,meta10299__$1){var self__ = this;
var _10300__$1 = this;return (new steampunk.core.t10298(self__.owner,self__.user,self__.detail_block,meta10299__$1));
});
steampunk.core.__GT_t10298 = (function __GT_t10298(owner__$1,user__$1,detail_block__$1,meta10299){return (new steampunk.core.t10298(owner__$1,user__$1,detail_block__$1,meta10299));
});
}
return (new steampunk.core.t10298(owner,user,detail_block,null));
});
steampunk.core.badge_span = (function badge_span(s){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"badge"], null),s], null);
});
steampunk.core.interests_block = (function interests_block(p__10301){var map__10304 = p__10301;var map__10304__$1 = ((cljs.core.seq_QMARK_.call(null,map__10304))?cljs.core.apply.call(null,cljs.core.hash_map,map__10304):map__10304);var extras = cljs.core.get.call(null,map__10304__$1,new cljs.core.Keyword(null,"extras","extras",4019839445));return om.core.componenet.call(null,(function (){var attrs10305 = cljs.core.map.call(null,steampunk.core.badge_span,new cljs.core.Keyword(null,"interests","interests",1516515835).cljs$core$IFn$_invoke$arity$1(extras));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs10305))?sablono.interpreter.attributes.call(null,attrs10305):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10305))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10305)], null))));
})());
});
steampunk.core.image_block = (function image_block(p__10306){var map__10311 = p__10306;var map__10311__$1 = ((cljs.core.seq_QMARK_.call(null,map__10311))?cljs.core.apply.call(null,cljs.core.hash_map,map__10311):map__10311);var name = cljs.core.get.call(null,map__10311__$1,new cljs.core.Keyword(null,"name","name",1017277949));var picture = cljs.core.get.call(null,map__10311__$1,new cljs.core.Keyword(null,"picture","picture",4731129968));if(typeof steampunk.core.t10312 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t10312 = (function (picture,name,map__10311,p__10306,image_block,meta10313){
this.picture = picture;
this.name = name;
this.map__10311 = map__10311;
this.p__10306 = p__10306;
this.image_block = image_block;
this.meta10313 = meta10313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t10312.cljs$lang$type = true;
steampunk.core.t10312.cljs$lang$ctorStr = "steampunk.core/t10312";
steampunk.core.t10312.cljs$lang$ctorPrWriter = ((function (map__10311,map__10311__$1,name,picture){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"steampunk.core/t10312");
});})(map__10311,map__10311__$1,name,picture))
;
steampunk.core.t10312.prototype.om$core$IRender$ = true;
steampunk.core.t10312.prototype.om$core$IRender$render$arity$1 = ((function (map__10311,map__10311__$1,name,picture){
return (function (this__5494__auto__){var self__ = this;
var this__5494__auto____$1 = this;return React.DOM.a({"className": "thumbnail", "href": "#"},React.DOM.img({"src": self__.picture, "alt": self__.name, "className": "img-rounded img-responsive"}));
});})(map__10311,map__10311__$1,name,picture))
;
steampunk.core.t10312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10311,map__10311__$1,name,picture){
return (function (_10314){var self__ = this;
var _10314__$1 = this;return self__.meta10313;
});})(map__10311,map__10311__$1,name,picture))
;
steampunk.core.t10312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10311,map__10311__$1,name,picture){
return (function (_10314,meta10313__$1){var self__ = this;
var _10314__$1 = this;return (new steampunk.core.t10312(self__.picture,self__.name,self__.map__10311,self__.p__10306,self__.image_block,meta10313__$1));
});})(map__10311,map__10311__$1,name,picture))
;
steampunk.core.__GT_t10312 = ((function (map__10311,map__10311__$1,name,picture){
return (function __GT_t10312(picture__$1,name__$1,map__10311__$2,p__10306__$1,image_block__$1,meta10313){return (new steampunk.core.t10312(picture__$1,name__$1,map__10311__$2,p__10306__$1,image_block__$1,meta10313));
});})(map__10311,map__10311__$1,name,picture))
;
}
return (new steampunk.core.t10312(picture,name,map__10311__$1,p__10306,image_block,null));
});
steampunk.core.display = (function display(show){if(cljs.core.truth_(show))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null);
}
});
steampunk.core.about_block = (function about_block(user,owner){if(typeof steampunk.core.t10323 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t10323 = (function (owner,user,about_block,meta10324){
this.owner = owner;
this.user = user;
this.about_block = about_block;
this.meta10324 = meta10324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t10323.cljs$lang$type = true;
steampunk.core.t10323.cljs$lang$ctorStr = "steampunk.core/t10323";
steampunk.core.t10323.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"steampunk.core/t10323");
});
steampunk.core.t10323.prototype.om$core$IRenderState$ = true;
steampunk.core.t10323.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10326){var self__ = this;
var map__10327 = p__10326;var map__10327__$1 = ((cljs.core.seq_QMARK_.call(null,map__10327))?cljs.core.apply.call(null,cljs.core.hash_map,map__10327):map__10327);var edit_text = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var editing = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var ___$1 = this;var text = cljs.core.get_in.call(null,self__.user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"about","about",1106515711)], null));var data_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"about","about",1106515711)], null);var title = [cljs.core.str("About "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.user))].join('');var update_fn = ((function (text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing){
return (function update_fn(new_text){return steampunk.utils.update_extra.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"about","about",1106515711),new_text], null));
});})(text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing))
;
var done_editing = ((function (text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing){
return (function done_editing(pred){return ((function (text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing){
return (function (p1__10315_SHARP_){if(cljs.core.truth_(pred.call(null,p1__10315_SHARP_)))
{return steampunk.utils.end_edit.call(null,self__.user,data_key,text,self__.owner,update_fn);
} else
{return null;
}
});
;})(text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing))
});})(text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing))
;
return sablono.interpreter.interpret.call(null,steampunk.core.panel.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
});})(text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"panel-body",new cljs.core.Keyword(null,"style","style",1123684643),steampunk.core.display.call(null,editing)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",1125876963),text,new cljs.core.Keyword(null,"rows","rows",1017410891),12,new cljs.core.Keyword(null,"class","class",1108647146),"form-control",new cljs.core.Keyword(null,"on-change","on-change",606853840),((function (text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing){
return (function (p1__10316_SHARP_){return steampunk.utils.handle_change.call(null,p1__10316_SHARP_,self__.user,data_key,self__.owner);
});})(text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing))
,new cljs.core.Keyword(null,"on-key-press","on-key-press",3322948697),done_editing.call(null,((function (text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing){
return (function (p1__10317_SHARP_){var and__3469__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786));if(cljs.core.truth_(and__3469__auto__))
{return (p1__10317_SHARP_.keyCode === 12);
} else
{return and__3469__auto__;
}
});})(text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing))
),new cljs.core.Keyword(null,"on-blur","on-blur",3936357127),done_editing.call(null,((function (text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing){
return (function (){return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786));
});})(text,data_key,title,___$1,map__10327,map__10327__$1,edit_text,editing))
)], null)], null)], null)));
});
steampunk.core.t10323.prototype.om$core$IInitState$ = true;
steampunk.core.t10323.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
steampunk.core.t10323.prototype.om$core$IDisplayName$ = true;
steampunk.core.t10323.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "About Block";
});
steampunk.core.t10323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10325){var self__ = this;
var _10325__$1 = this;return self__.meta10324;
});
steampunk.core.t10323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10325,meta10324__$1){var self__ = this;
var _10325__$1 = this;return (new steampunk.core.t10323(self__.owner,self__.user,self__.about_block,meta10324__$1));
});
steampunk.core.__GT_t10323 = (function __GT_t10323(owner__$1,user__$1,about_block__$1,meta10324){return (new steampunk.core.t10323(owner__$1,user__$1,about_block__$1,meta10324));
});
}
return (new steampunk.core.t10323(owner,user,about_block,null));
});
steampunk.core.user_column = (function user_column(user,owner){if(typeof steampunk.core.t10331 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t10331 = (function (owner,user,user_column,meta10332){
this.owner = owner;
this.user = user;
this.user_column = user_column;
this.meta10332 = meta10332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t10331.cljs$lang$type = true;
steampunk.core.t10331.cljs$lang$ctorStr = "steampunk.core/t10331";
steampunk.core.t10331.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"steampunk.core/t10331");
});
steampunk.core.t10331.prototype.om$core$IRender$ = true;
steampunk.core.t10331.prototype.om$core$IRender$render$arity$1 = (function (this__5494__auto__){var self__ = this;
var this__5494__auto____$1 = this;return React.DOM.div({"className": "col-md-5 col-xs-12"},sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.image_block,self__.user)),sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.detail_block,self__.user)));
});
steampunk.core.t10331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10333){var self__ = this;
var _10333__$1 = this;return self__.meta10332;
});
steampunk.core.t10331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10333,meta10332__$1){var self__ = this;
var _10333__$1 = this;return (new steampunk.core.t10331(self__.owner,self__.user,self__.user_column,meta10332__$1));
});
steampunk.core.__GT_t10331 = (function __GT_t10331(owner__$1,user__$1,user_column__$1,meta10332){return (new steampunk.core.t10331(owner__$1,user__$1,user_column__$1,meta10332));
});
}
return (new steampunk.core.t10331(owner,user,user_column,null));
});
steampunk.core.about_column = (function about_column(user,owner){return React.DOM.div({"className": "col-md-5 col-md-offset-2 col-xs-12"},sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.about_block,user)),sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.interests_block,user)));
});
steampunk.core.nav_button = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"class","class",1108647146),"navbar-toggle",new cljs.core.Keyword(null,"data-toggle","data-toggle",2577667657),"collapse",new cljs.core.Keyword(null,"data-target","data-target",2565065862),"#navbar-collapse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"sr-only"], null),"Toggle navigation"], null),(function (){var iter__4198__auto__ = (function iter__10334(s__10335){return (new cljs.core.LazySeq(null,(function (){var s__10335__$1 = s__10335;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10335__$1);if(temp__4126__auto__)
{var s__10335__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10335__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__10335__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__10337 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__10336 = 0;while(true){
if((i__10336 < size__4197__auto__))
{var x = cljs.core._nth.call(null,c__4196__auto__,i__10336);cljs.core.chunk_append.call(null,b__10337,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"icon-bar"], null)], null));
{
var G__10338 = (i__10336 + 1);
i__10336 = G__10338;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10337),iter__10334.call(null,cljs.core.chunk_rest.call(null,s__10335__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10337),null);
}
} else
{var x = cljs.core.first.call(null,s__10335__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"icon-bar"], null)], null),iter__10334.call(null,cljs.core.rest.call(null,s__10335__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__.call(null,cljs.core.range.call(null,1,4));
})()], null);
steampunk.core.login_button = (function login_button(app,owner){if(typeof steampunk.core.t10342 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t10342 = (function (owner,app,login_button,meta10343){
this.owner = owner;
this.app = app;
this.login_button = login_button;
this.meta10343 = meta10343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t10342.cljs$lang$type = true;
steampunk.core.t10342.cljs$lang$ctorStr = "steampunk.core/t10342";
steampunk.core.t10342.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"steampunk.core/t10342");
});
steampunk.core.t10342.prototype.om$core$IRender$ = true;
steampunk.core.t10342.prototype.om$core$IRender$render$arity$1 = (function (this__5494__auto__){var self__ = this;
var this__5494__auto____$1 = this;return React.DOM.ul({"className": "nav navbar-nav navbar-right"},React.DOM.li(null,React.DOM.a({"href": "#", "onClick": ((function (this__5494__auto____$1){
return (function (){return steampunk.utils.handle_login.call(null,self__.app);
});})(this__5494__auto____$1))
},"Login")));
});
steampunk.core.t10342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10344){var self__ = this;
var _10344__$1 = this;return self__.meta10343;
});
steampunk.core.t10342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10344,meta10343__$1){var self__ = this;
var _10344__$1 = this;return (new steampunk.core.t10342(self__.owner,self__.app,self__.login_button,meta10343__$1));
});
steampunk.core.__GT_t10342 = (function __GT_t10342(owner__$1,app__$1,login_button__$1,meta10343){return (new steampunk.core.t10342(owner__$1,app__$1,login_button__$1,meta10343));
});
}
return (new steampunk.core.t10342(owner,app,login_button,null));
});
steampunk.core.logout_button = (function logout_button(app,owner){if(typeof steampunk.core.t10348 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t10348 = (function (owner,app,logout_button,meta10349){
this.owner = owner;
this.app = app;
this.logout_button = logout_button;
this.meta10349 = meta10349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t10348.cljs$lang$type = true;
steampunk.core.t10348.cljs$lang$ctorStr = "steampunk.core/t10348";
steampunk.core.t10348.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"steampunk.core/t10348");
});
steampunk.core.t10348.prototype.om$core$IRender$ = true;
steampunk.core.t10348.prototype.om$core$IRender$render$arity$1 = (function (this__5494__auto__){var self__ = this;
var this__5494__auto____$1 = this;return React.DOM.ul({"className": "nav navbar-nav navbar-right"},React.DOM.li(null,React.DOM.a({"href": "#"},sablono.interpreter.interpret.call(null,[cljs.core.str("Hi, "),cljs.core.str(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"name","name",1017277949)], null)))].join('')))),React.DOM.li(null,React.DOM.a({"href": "#", "onClick": ((function (this__5494__auto____$1){
return (function (){return steampunk.utils.handle_logout.call(null,self__.app);
});})(this__5494__auto____$1))
},"Logout")));
});
steampunk.core.t10348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10350){var self__ = this;
var _10350__$1 = this;return self__.meta10349;
});
steampunk.core.t10348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10350,meta10349__$1){var self__ = this;
var _10350__$1 = this;return (new steampunk.core.t10348(self__.owner,self__.app,self__.logout_button,meta10349__$1));
});
steampunk.core.__GT_t10348 = (function __GT_t10348(owner__$1,app__$1,logout_button__$1,meta10349){return (new steampunk.core.t10348(owner__$1,app__$1,logout_button__$1,meta10349));
});
}
return (new steampunk.core.t10348(owner,app,logout_button,null));
});
steampunk.core.navbar = (function navbar(p__10351,app,owner){var map__10362 = p__10351;var map__10362__$1 = ((cljs.core.seq_QMARK_.call(null,map__10362))?cljs.core.apply.call(null,cljs.core.hash_map,map__10362):map__10362);var user = cljs.core.get.call(null,map__10362__$1,new cljs.core.Keyword(null,"user","user",1017503549));var title = cljs.core.get.call(null,map__10362__$1,new cljs.core.Keyword(null,"title","title",1124275658));if(typeof steampunk.core.t10363 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t10363 = (function (title,user,map__10362,owner,app,p__10351,navbar,meta10364){
this.title = title;
this.user = user;
this.map__10362 = map__10362;
this.owner = owner;
this.app = app;
this.p__10351 = p__10351;
this.navbar = navbar;
this.meta10364 = meta10364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t10363.cljs$lang$type = true;
steampunk.core.t10363.cljs$lang$ctorStr = "steampunk.core/t10363";
steampunk.core.t10363.cljs$lang$ctorPrWriter = ((function (map__10362,map__10362__$1,user,title){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"steampunk.core/t10363");
});})(map__10362,map__10362__$1,user,title))
;
steampunk.core.t10363.prototype.om$core$IRender$ = true;
steampunk.core.t10363.prototype.om$core$IRender$render$arity$1 = ((function (map__10362,map__10362__$1,user,title){
return (function (this__5494__auto__){var self__ = this;
var this__5494__auto____$1 = this;return React.DOM.nav({"className": "navbar navbar-inverse navbar-static-top", "role": "navigation"},React.DOM.div({"className": "container"},sablono.interpreter.interpret.call(null,steampunk.core.nav_button),React.DOM.a({"className": "navbar-brand"},sablono.interpreter.interpret.call(null,self__.title))),React.DOM.div({"className": "collapse navbar-collapse", "id": "navbar-collapse"},React.DOM.ul({"className": "nav navbar-nav"},React.DOM.li({"className": "active"},React.DOM.a({"href": "#"},"Profile")),cljs.core.into_array.call(null,(function (){var iter__4198__auto__ = ((function (this__5494__auto____$1,map__10362,map__10362__$1,user,title){
return (function iter__10368(s__10369){return (new cljs.core.LazySeq(null,((function (this__5494__auto____$1,map__10362,map__10362__$1,user,title){
return (function (){var s__10369__$1 = s__10369;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10369__$1);if(temp__4126__auto__)
{var s__10369__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10369__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__10369__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__10371 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__10370 = 0;while(true){
if((i__10370 < size__4197__auto__))
{var s = cljs.core._nth.call(null,c__4196__auto__,i__10370);cljs.core.chunk_append.call(null,b__10371,React.DOM.li(null,React.DOM.a({"href": "#"},sablono.interpreter.interpret.call(null,s))));
{
var G__10372 = (i__10370 + 1);
i__10370 = G__10372;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10371),iter__10368.call(null,cljs.core.chunk_rest.call(null,s__10369__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10371),null);
}
} else
{var s = cljs.core.first.call(null,s__10369__$2);return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.a({"href": "#"},sablono.interpreter.interpret.call(null,s))),iter__10368.call(null,cljs.core.rest.call(null,s__10369__$2)));
}
} else
{return null;
}
break;
}
});})(this__5494__auto____$1,map__10362,map__10362__$1,user,title))
,null,null));
});})(this__5494__auto____$1,map__10362,map__10362__$1,user,title))
;return iter__4198__auto__.call(null,cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Inbox","Blog","Settings"], null)));
})()),(((self__.user == null))?sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.login_button,self__.app)):sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.logout_button,self__.app))))));
});})(map__10362,map__10362__$1,user,title))
;
steampunk.core.t10363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10362,map__10362__$1,user,title){
return (function (_10365){var self__ = this;
var _10365__$1 = this;return self__.meta10364;
});})(map__10362,map__10362__$1,user,title))
;
steampunk.core.t10363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10362,map__10362__$1,user,title){
return (function (_10365,meta10364__$1){var self__ = this;
var _10365__$1 = this;return (new steampunk.core.t10363(self__.title,self__.user,self__.map__10362,self__.owner,self__.app,self__.p__10351,self__.navbar,meta10364__$1));
});})(map__10362,map__10362__$1,user,title))
;
steampunk.core.__GT_t10363 = ((function (map__10362,map__10362__$1,user,title){
return (function __GT_t10363(title__$1,user__$1,map__10362__$2,owner__$1,app__$1,p__10351__$1,navbar__$1,meta10364){return (new steampunk.core.t10363(title__$1,user__$1,map__10362__$2,owner__$1,app__$1,p__10351__$1,navbar__$1,meta10364));
});})(map__10362,map__10362__$1,user,title))
;
}
return (new steampunk.core.t10363(title,user,map__10362__$1,owner,app,p__10351,navbar,null));
});
steampunk.core.center_pane = (function center_pane(user,owner){if(typeof steampunk.core.t10376 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t10376 = (function (owner,user,center_pane,meta10377){
this.owner = owner;
this.user = user;
this.center_pane = center_pane;
this.meta10377 = meta10377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t10376.cljs$lang$type = true;
steampunk.core.t10376.cljs$lang$ctorStr = "steampunk.core/t10376";
steampunk.core.t10376.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"steampunk.core/t10376");
});
steampunk.core.t10376.prototype.om$core$IRender$ = true;
steampunk.core.t10376.prototype.om$core$IRender$render$arity$1 = (function (this__5494__auto__){var self__ = this;
var this__5494__auto____$1 = this;return React.DOM.div({"className": "container", "id": "center-pane"},React.DOM.div({"className": "row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.user_column,self__.user)),sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.about_column,self__.user))));
});
steampunk.core.t10376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10378){var self__ = this;
var _10378__$1 = this;return self__.meta10377;
});
steampunk.core.t10376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10378,meta10377__$1){var self__ = this;
var _10378__$1 = this;return (new steampunk.core.t10376(self__.owner,self__.user,self__.center_pane,meta10377__$1));
});
steampunk.core.__GT_t10376 = (function __GT_t10376(owner__$1,user__$1,center_pane__$1,meta10377){return (new steampunk.core.t10376(owner__$1,user__$1,center_pane__$1,meta10377));
});
}
return (new steampunk.core.t10376(owner,user,center_pane,null));
});
steampunk.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"Steampunk dating",new cljs.core.Keyword(null,"user","user",1017503549),null], null));
steampunk.core.user_page = (function user_page(p__10379,app,owner){var map__10385 = p__10379;var map__10385__$1 = ((cljs.core.seq_QMARK_.call(null,map__10385))?cljs.core.apply.call(null,cljs.core.hash_map,map__10385):map__10385);var user = cljs.core.get.call(null,map__10385__$1,new cljs.core.Keyword(null,"user","user",1017503549));if(typeof steampunk.core.t10386 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t10386 = (function (user,map__10385,owner,app,p__10379,user_page,meta10387){
this.user = user;
this.map__10385 = map__10385;
this.owner = owner;
this.app = app;
this.p__10379 = p__10379;
this.user_page = user_page;
this.meta10387 = meta10387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t10386.cljs$lang$type = true;
steampunk.core.t10386.cljs$lang$ctorStr = "steampunk.core/t10386";
steampunk.core.t10386.cljs$lang$ctorPrWriter = ((function (map__10385,map__10385__$1,user){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"steampunk.core/t10386");
});})(map__10385,map__10385__$1,user))
;
steampunk.core.t10386.prototype.om$core$IRender$ = true;
steampunk.core.t10386.prototype.om$core$IRender$render$arity$1 = ((function (map__10385,map__10385__$1,user){
return (function (this__5494__auto__){var self__ = this;
var this__5494__auto____$1 = this;var attrs10389 = om.core.build.call(null,steampunk.core.navbar,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs10389))?sablono.interpreter.attributes.call(null,attrs10389):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10389))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.center_pane,self__.user))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10389),sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.center_pane,self__.user))], null))));
});})(map__10385,map__10385__$1,user))
;
steampunk.core.t10386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10385,map__10385__$1,user){
return (function (_10388){var self__ = this;
var _10388__$1 = this;return self__.meta10387;
});})(map__10385,map__10385__$1,user))
;
steampunk.core.t10386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10385,map__10385__$1,user){
return (function (_10388,meta10387__$1){var self__ = this;
var _10388__$1 = this;return (new steampunk.core.t10386(self__.user,self__.map__10385,self__.owner,self__.app,self__.p__10379,self__.user_page,meta10387__$1));
});})(map__10385,map__10385__$1,user))
;
steampunk.core.__GT_t10386 = ((function (map__10385,map__10385__$1,user){
return (function __GT_t10386(user__$1,map__10385__$2,owner__$1,app__$1,p__10379__$1,user_page__$1,meta10387){return (new steampunk.core.t10386(user__$1,map__10385__$2,owner__$1,app__$1,p__10379__$1,user_page__$1,meta10387));
});})(map__10385,map__10385__$1,user))
;
}
return (new steampunk.core.t10386(user,map__10385__$1,owner,app,p__10379,user_page,null));
});
om.core.root.call(null,steampunk.core.user_page,steampunk.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("main")], null));

//# sourceMappingURL=core.js.map