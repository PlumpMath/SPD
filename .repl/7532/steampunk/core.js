// Compiled by ClojureScript 0.0-2234
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
steampunk.core.detail = (function detail(title,detail__$1){if(typeof steampunk.core.t18382 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t18382 = (function (title,detail,meta18383){
this.title = title;
this.detail = detail;
this.meta18383 = meta18383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t18382.cljs$lang$type = true;
steampunk.core.t18382.cljs$lang$ctorStr = "steampunk.core/t18382";
steampunk.core.t18382.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"steampunk.core/t18382");
});
steampunk.core.t18382.prototype.om$core$IRender$ = true;
steampunk.core.t18382.prototype.om$core$IRender$render$arity$1 = (function (this__17082__auto__){var self__ = this;
var this__17082__auto____$1 = this;return React.DOM.dl({"class": "dl-horizontal"},(function (){var attrs18385 = self__.title;return cljs.core.apply.call(null,React.DOM.dt,((cljs.core.map_QMARK_.call(null,attrs18385))?sablono.interpreter.attributes.call(null,attrs18385):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs18385))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs18385)], null))));
})(),(function (){var attrs18386 = self__.detail;return cljs.core.apply.call(null,React.DOM.dd,((cljs.core.map_QMARK_.call(null,attrs18386))?sablono.interpreter.attributes.call(null,attrs18386):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs18386))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs18386)], null))));
})());
});
steampunk.core.t18382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18384){var self__ = this;
var _18384__$1 = this;return self__.meta18383;
});
steampunk.core.t18382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18384,meta18383__$1){var self__ = this;
var _18384__$1 = this;return (new steampunk.core.t18382(self__.title,self__.detail,meta18383__$1));
});
steampunk.core.__GT_t18382 = (function __GT_t18382(title__$1,detail__$2,meta18383){return (new steampunk.core.t18382(title__$1,detail__$2,meta18383));
});
}
return (new steampunk.core.t18382(title,detail__$1,null));
});
steampunk.core.user_details = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Orientation",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extras","extras",4019839445),new cljs.core.Keyword(null,"orientation","orientation",3869370690)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Smoker",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extras","extras",4019839445),new cljs.core.Keyword(null,"smokes","smokes",4410333270)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drinker",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extras","extras",4019839445),new cljs.core.Keyword(null,"drinks","drinks",3985337933)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drugs",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extras","extras",4019839445),new cljs.core.Keyword(null,"drugs","drugs",1109768261)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Religion",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extras","extras",4019839445),new cljs.core.Keyword(null,"religion","religion",4761436323)], null)], null)], null);
steampunk.core.editable_details = (function editable_details(user,owner){if(typeof steampunk.core.t18390 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t18390 = (function (owner,user,editable_details,meta18391){
this.owner = owner;
this.user = user;
this.editable_details = editable_details;
this.meta18391 = meta18391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t18390.cljs$lang$type = true;
steampunk.core.t18390.cljs$lang$ctorStr = "steampunk.core/t18390";
steampunk.core.t18390.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"steampunk.core/t18390");
});
steampunk.core.t18390.prototype.om$core$IRender$ = true;
steampunk.core.t18390.prototype.om$core$IRender$render$arity$1 = (function (this__17082__auto__){var self__ = this;
var this__17082__auto____$1 = this;return steampunk.core.panel.call(null,"Facts-edit2",React.DOM.div({"className": "panel-body"},sablono.interpreter.interpret.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,steampunk.core.edit_detail),steampunk.core.user_details))));
});
steampunk.core.t18390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18392){var self__ = this;
var _18392__$1 = this;return self__.meta18391;
});
steampunk.core.t18390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18392,meta18391__$1){var self__ = this;
var _18392__$1 = this;return (new steampunk.core.t18390(self__.owner,self__.user,self__.editable_details,meta18391__$1));
});
steampunk.core.__GT_t18390 = (function __GT_t18390(owner__$1,user__$1,editable_details__$1,meta18391){return (new steampunk.core.t18390(owner__$1,user__$1,editable_details__$1,meta18391));
});
}
return (new steampunk.core.t18390(owner,user,editable_details,null));
});
steampunk.core.badge_span = (function badge_span(s){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"badge"], null),s], null);
});
steampunk.core.edit_button = (function edit_button(params){var params_merged = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"class","class",1108647146),"btn btn-default btn-xs panel-title"], null),params);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"glyphicon glyphicon-edit glyphicon-align-justify"], null)], null)], null);
});
steampunk.core.interests = (function interests(p__18393){var map__18396 = p__18393;var map__18396__$1 = ((cljs.core.seq_QMARK_.call(null,map__18396))?cljs.core.apply.call(null,cljs.core.hash_map,map__18396):map__18396);var key = cljs.core.get.call(null,map__18396__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [steampunk.core.extras], null));return om.core.componenet.call(null,(function (){var attrs18397 = cljs.core.map.call(null,steampunk.core.badge_span,new cljs.core.Keyword(null,"interests","interests",1516515835).cljs$core$IFn$_invoke$arity$1(steampunk.core.extras));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs18397))?sablono.interpreter.attributes.call(null,attrs18397):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs18397))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs18397)], null))));
})());
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
steampunk.core.image_block = (function image_block(p__18398){var map__18403 = p__18398;var map__18403__$1 = ((cljs.core.seq_QMARK_.call(null,map__18403))?cljs.core.apply.call(null,cljs.core.hash_map,map__18403):map__18403);var name = cljs.core.get.call(null,map__18403__$1,new cljs.core.Keyword(null,"name","name",1017277949));var picture = cljs.core.get.call(null,map__18403__$1,new cljs.core.Keyword(null,"picture","picture",4731129968));if(typeof steampunk.core.t18404 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t18404 = (function (picture,name,map__18403,p__18398,image_block,meta18405){
this.picture = picture;
this.name = name;
this.map__18403 = map__18403;
this.p__18398 = p__18398;
this.image_block = image_block;
this.meta18405 = meta18405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t18404.cljs$lang$type = true;
steampunk.core.t18404.cljs$lang$ctorStr = "steampunk.core/t18404";
steampunk.core.t18404.cljs$lang$ctorPrWriter = ((function (map__18403,map__18403__$1,name,picture){
return (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"steampunk.core/t18404");
});})(map__18403,map__18403__$1,name,picture))
;
steampunk.core.t18404.prototype.om$core$IRender$ = true;
steampunk.core.t18404.prototype.om$core$IRender$render$arity$1 = ((function (map__18403,map__18403__$1,name,picture){
return (function (this__17082__auto__){var self__ = this;
var this__17082__auto____$1 = this;return React.DOM.a({"className": "thumbnail", "href": "#"},React.DOM.img({"src": self__.picture, "alt": self__.name, "className": "img-rounded img-responsive"}));
});})(map__18403,map__18403__$1,name,picture))
;
steampunk.core.t18404.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18403,map__18403__$1,name,picture){
return (function (_18406){var self__ = this;
var _18406__$1 = this;return self__.meta18405;
});})(map__18403,map__18403__$1,name,picture))
;
steampunk.core.t18404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18403,map__18403__$1,name,picture){
return (function (_18406,meta18405__$1){var self__ = this;
var _18406__$1 = this;return (new steampunk.core.t18404(self__.picture,self__.name,self__.map__18403,self__.p__18398,self__.image_block,meta18405__$1));
});})(map__18403,map__18403__$1,name,picture))
;
steampunk.core.__GT_t18404 = ((function (map__18403,map__18403__$1,name,picture){
return (function __GT_t18404(picture__$1,name__$1,map__18403__$2,p__18398__$1,image_block__$1,meta18405){return (new steampunk.core.t18404(picture__$1,name__$1,map__18403__$2,p__18398__$1,image_block__$1,meta18405));
});})(map__18403,map__18403__$1,name,picture))
;
}
return (new steampunk.core.t18404(picture,name,map__18403__$1,p__18398,image_block,null));
});
steampunk.core.display = (function display(show){if(cljs.core.truth_(show))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",2685668404),"none"], null);
}
});
steampunk.core.about_block = (function about_block(user,owner){if(typeof steampunk.core.t18414 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t18414 = (function (owner,user,about_block,meta18415){
this.owner = owner;
this.user = user;
this.about_block = about_block;
this.meta18415 = meta18415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t18414.cljs$lang$type = true;
steampunk.core.t18414.cljs$lang$ctorStr = "steampunk.core/t18414";
steampunk.core.t18414.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"steampunk.core/t18414");
});
steampunk.core.t18414.prototype.om$core$IRenderState$ = true;
steampunk.core.t18414.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18417){var self__ = this;
var map__18418 = p__18417;var map__18418__$1 = ((cljs.core.seq_QMARK_.call(null,map__18418))?cljs.core.apply.call(null,cljs.core.hash_map,map__18418):map__18418);var edit_text = cljs.core.get.call(null,map__18418__$1,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));var editing = cljs.core.get.call(null,map__18418__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var ___$1 = this;var text = cljs.core.get_in.call(null,self__.user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"about","about",1106515711)], null));var data_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra","extra",1110869890),new cljs.core.Keyword(null,"about","about",1106515711)], null);var title = ("About "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.user)));return sablono.interpreter.interpret.call(null,steampunk.core.edit_panel.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (text,data_key,title,___$1,map__18418,map__18418__$1,edit_text,editing){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
});})(text,data_key,title,___$1,map__18418,map__18418__$1,edit_text,editing))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"panel-body",new cljs.core.Keyword(null,"style","style",1123684643),steampunk.core.display.call(null,editing)], null),(function (){var update_fn = ((function (text,data_key,title,___$1,map__18418,map__18418__$1,edit_text,editing){
return (function update_fn(new_text){return steampunk.utils.update_extra.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"about","about",1106515711),new_text], null));
});})(text,data_key,title,___$1,map__18418,map__18418__$1,edit_text,editing))
;
var done_editing = ((function (text,data_key,title,___$1,map__18418,map__18418__$1,edit_text,editing){
return (function done_editing(condition_fn){return ((function (text,data_key,title,___$1,map__18418,map__18418__$1,edit_text,editing){
return (function (p1__18407_SHARP_){if(cljs.core.truth_(condition_fn.call(null,p1__18407_SHARP_)))
{return steampunk.utils.end_edit.call(null,self__.user,data_key,text,self__.owner,update_fn);
} else
{return null;
}
});
;})(text,data_key,title,___$1,map__18418,map__18418__$1,edit_text,editing))
});})(text,data_key,title,___$1,map__18418,map__18418__$1,edit_text,editing))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",1125876963),text,new cljs.core.Keyword(null,"rows","rows",1017410891),12,new cljs.core.Keyword(null,"class","class",1108647146),"form-control",new cljs.core.Keyword(null,"on-change","on-change",606853840),((function (text,data_key,title,___$1,map__18418,map__18418__$1,edit_text,editing){
return (function (p1__18408_SHARP_){return steampunk.utils.handle_change.call(null,p1__18408_SHARP_,self__.user,data_key,self__.owner);
});})(text,data_key,title,___$1,map__18418,map__18418__$1,edit_text,editing))
,new cljs.core.Keyword(null,"on-key-press","on-key-press",3322948697),done_editing.call(null,(function (){var and__8644__auto__ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786));if(cljs.core.truth_(and__8644__auto__))
{return (steampunk.core._PERCENT_.keyCode === 12);
} else
{return and__8644__auto__;
}
})()),new cljs.core.Keyword(null,"on-blur","on-blur",3936357127),done_editing.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",3420907786)))], null)], null);
})()], null)));
});
steampunk.core.t18414.prototype.om$core$IInitState$ = true;
steampunk.core.t18414.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",3420907786),false], null);
});
steampunk.core.t18414.prototype.om$core$IDisplayName$ = true;
steampunk.core.t18414.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "About Block";
});
steampunk.core.t18414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18416){var self__ = this;
var _18416__$1 = this;return self__.meta18415;
});
steampunk.core.t18414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18416,meta18415__$1){var self__ = this;
var _18416__$1 = this;return (new steampunk.core.t18414(self__.owner,self__.user,self__.about_block,meta18415__$1));
});
steampunk.core.__GT_t18414 = (function __GT_t18414(owner__$1,user__$1,about_block__$1,meta18415){return (new steampunk.core.t18414(owner__$1,user__$1,about_block__$1,meta18415));
});
}
return (new steampunk.core.t18414(owner,user,about_block,null));
});
steampunk.core.user_column = (function user_column(user,owner){if(typeof steampunk.core.t18422 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t18422 = (function (owner,user,user_column,meta18423){
this.owner = owner;
this.user = user;
this.user_column = user_column;
this.meta18423 = meta18423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t18422.cljs$lang$type = true;
steampunk.core.t18422.cljs$lang$ctorStr = "steampunk.core/t18422";
steampunk.core.t18422.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"steampunk.core/t18422");
});
steampunk.core.t18422.prototype.om$core$IRender$ = true;
steampunk.core.t18422.prototype.om$core$IRender$render$arity$1 = (function (this__17082__auto__){var self__ = this;
var this__17082__auto____$1 = this;return React.DOM.div({"className": "col-md-5 col-xs-12"},sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.image_block,self__.user)),sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.detail_block,self__.user)));
});
steampunk.core.t18422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18424){var self__ = this;
var _18424__$1 = this;return self__.meta18423;
});
steampunk.core.t18422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18424,meta18423__$1){var self__ = this;
var _18424__$1 = this;return (new steampunk.core.t18422(self__.owner,self__.user,self__.user_column,meta18423__$1));
});
steampunk.core.__GT_t18422 = (function __GT_t18422(owner__$1,user__$1,user_column__$1,meta18423){return (new steampunk.core.t18422(owner__$1,user__$1,user_column__$1,meta18423));
});
}
return (new steampunk.core.t18422(owner,user,user_column,null));
});
steampunk.core.about_column = (function about_column(user,owner){return React.DOM.div({"className": "col-md-5 col-md-offset-2 col-xs-12"},sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.about_block,user)),sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.interests_block,user)));
});
steampunk.core.nav_button = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"class","class",1108647146),"navbar-toggle",new cljs.core.Keyword(null,"data-toggle","data-toggle",2577667657),"collapse",new cljs.core.Keyword(null,"data-target","data-target",2565065862),"#navbar-collapse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"sr-only"], null),"Toggle navigation"], null),(function (){var iter__9381__auto__ = (function iter__18425(s__18426){return (new cljs.core.LazySeq(null,(function (){var s__18426__$1 = s__18426;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18426__$1);if(temp__4126__auto__)
{var s__18426__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18426__$2))
{var c__9379__auto__ = cljs.core.chunk_first.call(null,s__18426__$2);var size__9380__auto__ = cljs.core.count.call(null,c__9379__auto__);var b__18428 = cljs.core.chunk_buffer.call(null,size__9380__auto__);if((function (){var i__18427 = 0;while(true){
if((i__18427 < size__9380__auto__))
{var x = cljs.core._nth.call(null,c__9379__auto__,i__18427);cljs.core.chunk_append.call(null,b__18428,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"icon-bar"], null)], null));
{
var G__18429 = (i__18427 + 1);
i__18427 = G__18429;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18428),iter__18425.call(null,cljs.core.chunk_rest.call(null,s__18426__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18428),null);
}
} else
{var x = cljs.core.first.call(null,s__18426__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"icon-bar"], null)], null),iter__18425.call(null,cljs.core.rest.call(null,s__18426__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9381__auto__.call(null,cljs.core.range.call(null,1,4));
})()], null);
steampunk.core.login_button = (function login_button(app,owner){if(typeof steampunk.core.t18433 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t18433 = (function (owner,app,login_button,meta18434){
this.owner = owner;
this.app = app;
this.login_button = login_button;
this.meta18434 = meta18434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t18433.cljs$lang$type = true;
steampunk.core.t18433.cljs$lang$ctorStr = "steampunk.core/t18433";
steampunk.core.t18433.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"steampunk.core/t18433");
});
steampunk.core.t18433.prototype.om$core$IRender$ = true;
steampunk.core.t18433.prototype.om$core$IRender$render$arity$1 = (function (this__17082__auto__){var self__ = this;
var this__17082__auto____$1 = this;return React.DOM.ul({"className": "nav navbar-nav navbar-right"},React.DOM.li(null,React.DOM.a({"href": "#", "onClick": ((function (this__17082__auto____$1){
return (function (){return steampunk.utils.handle_login.call(null,self__.app);
});})(this__17082__auto____$1))
},"Login")));
});
steampunk.core.t18433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18435){var self__ = this;
var _18435__$1 = this;return self__.meta18434;
});
steampunk.core.t18433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18435,meta18434__$1){var self__ = this;
var _18435__$1 = this;return (new steampunk.core.t18433(self__.owner,self__.app,self__.login_button,meta18434__$1));
});
steampunk.core.__GT_t18433 = (function __GT_t18433(owner__$1,app__$1,login_button__$1,meta18434){return (new steampunk.core.t18433(owner__$1,app__$1,login_button__$1,meta18434));
});
}
return (new steampunk.core.t18433(owner,app,login_button,null));
});
steampunk.core.logout_button = (function logout_button(app,owner){if(typeof steampunk.core.t18439 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t18439 = (function (owner,app,logout_button,meta18440){
this.owner = owner;
this.app = app;
this.logout_button = logout_button;
this.meta18440 = meta18440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t18439.cljs$lang$type = true;
steampunk.core.t18439.cljs$lang$ctorStr = "steampunk.core/t18439";
steampunk.core.t18439.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"steampunk.core/t18439");
});
steampunk.core.t18439.prototype.om$core$IRender$ = true;
steampunk.core.t18439.prototype.om$core$IRender$render$arity$1 = (function (this__17082__auto__){var self__ = this;
var this__17082__auto____$1 = this;return React.DOM.ul({"className": "nav navbar-nav navbar-right"},React.DOM.li(null,React.DOM.a({"href": "#"},sablono.interpreter.interpret.call(null,("Hi, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"name","name",1017277949)], null))))))),React.DOM.li(null,React.DOM.a({"href": "#", "onClick": ((function (this__17082__auto____$1){
return (function (){return steampunk.utils.handle_logout.call(null,self__.app);
});})(this__17082__auto____$1))
},"Logout")));
});
steampunk.core.t18439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18441){var self__ = this;
var _18441__$1 = this;return self__.meta18440;
});
steampunk.core.t18439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18441,meta18440__$1){var self__ = this;
var _18441__$1 = this;return (new steampunk.core.t18439(self__.owner,self__.app,self__.logout_button,meta18440__$1));
});
steampunk.core.__GT_t18439 = (function __GT_t18439(owner__$1,app__$1,logout_button__$1,meta18440){return (new steampunk.core.t18439(owner__$1,app__$1,logout_button__$1,meta18440));
});
}
return (new steampunk.core.t18439(owner,app,logout_button,null));
});
steampunk.core.navbar = (function navbar(p__18442,app,owner){var map__18453 = p__18442;var map__18453__$1 = ((cljs.core.seq_QMARK_.call(null,map__18453))?cljs.core.apply.call(null,cljs.core.hash_map,map__18453):map__18453);var user = cljs.core.get.call(null,map__18453__$1,new cljs.core.Keyword(null,"user","user",1017503549));var title = cljs.core.get.call(null,map__18453__$1,new cljs.core.Keyword(null,"title","title",1124275658));if(typeof steampunk.core.t18454 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t18454 = (function (title,user,map__18453,owner,app,p__18442,navbar,meta18455){
this.title = title;
this.user = user;
this.map__18453 = map__18453;
this.owner = owner;
this.app = app;
this.p__18442 = p__18442;
this.navbar = navbar;
this.meta18455 = meta18455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t18454.cljs$lang$type = true;
steampunk.core.t18454.cljs$lang$ctorStr = "steampunk.core/t18454";
steampunk.core.t18454.cljs$lang$ctorPrWriter = ((function (map__18453,map__18453__$1,user,title){
return (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"steampunk.core/t18454");
});})(map__18453,map__18453__$1,user,title))
;
steampunk.core.t18454.prototype.om$core$IRender$ = true;
steampunk.core.t18454.prototype.om$core$IRender$render$arity$1 = ((function (map__18453,map__18453__$1,user,title){
return (function (this__17082__auto__){var self__ = this;
var this__17082__auto____$1 = this;return React.DOM.nav({"className": "navbar navbar-inverse navbar-static-top", "role": "navigation"},React.DOM.div({"className": "container"},sablono.interpreter.interpret.call(null,steampunk.core.nav_button),React.DOM.a({"className": "navbar-brand"},sablono.interpreter.interpret.call(null,self__.title))),React.DOM.div({"className": "collapse navbar-collapse", "id": "navbar-collapse"},React.DOM.ul({"className": "nav navbar-nav"},React.DOM.li({"className": "active"},React.DOM.a({"href": "#"},"Profile")),cljs.core.into_array.call(null,(function (){var iter__9381__auto__ = ((function (this__17082__auto____$1,map__18453,map__18453__$1,user,title){
return (function iter__18459(s__18460){return (new cljs.core.LazySeq(null,((function (this__17082__auto____$1,map__18453,map__18453__$1,user,title){
return (function (){var s__18460__$1 = s__18460;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18460__$1);if(temp__4126__auto__)
{var s__18460__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18460__$2))
{var c__9379__auto__ = cljs.core.chunk_first.call(null,s__18460__$2);var size__9380__auto__ = cljs.core.count.call(null,c__9379__auto__);var b__18462 = cljs.core.chunk_buffer.call(null,size__9380__auto__);if((function (){var i__18461 = 0;while(true){
if((i__18461 < size__9380__auto__))
{var s = cljs.core._nth.call(null,c__9379__auto__,i__18461);cljs.core.chunk_append.call(null,b__18462,React.DOM.li(null,React.DOM.a({"href": "#"},sablono.interpreter.interpret.call(null,s))));
{
var G__18463 = (i__18461 + 1);
i__18461 = G__18463;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18462),iter__18459.call(null,cljs.core.chunk_rest.call(null,s__18460__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18462),null);
}
} else
{var s = cljs.core.first.call(null,s__18460__$2);return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.a({"href": "#"},sablono.interpreter.interpret.call(null,s))),iter__18459.call(null,cljs.core.rest.call(null,s__18460__$2)));
}
} else
{return null;
}
break;
}
});})(this__17082__auto____$1,map__18453,map__18453__$1,user,title))
,null,null));
});})(this__17082__auto____$1,map__18453,map__18453__$1,user,title))
;return iter__9381__auto__.call(null,cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Inbox","Blog","Settings"], null)));
})()),(((self__.user == null))?sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.login_button,self__.app)):sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.logout_button,self__.app))))));
});})(map__18453,map__18453__$1,user,title))
;
steampunk.core.t18454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18453,map__18453__$1,user,title){
return (function (_18456){var self__ = this;
var _18456__$1 = this;return self__.meta18455;
});})(map__18453,map__18453__$1,user,title))
;
steampunk.core.t18454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18453,map__18453__$1,user,title){
return (function (_18456,meta18455__$1){var self__ = this;
var _18456__$1 = this;return (new steampunk.core.t18454(self__.title,self__.user,self__.map__18453,self__.owner,self__.app,self__.p__18442,self__.navbar,meta18455__$1));
});})(map__18453,map__18453__$1,user,title))
;
steampunk.core.__GT_t18454 = ((function (map__18453,map__18453__$1,user,title){
return (function __GT_t18454(title__$1,user__$1,map__18453__$2,owner__$1,app__$1,p__18442__$1,navbar__$1,meta18455){return (new steampunk.core.t18454(title__$1,user__$1,map__18453__$2,owner__$1,app__$1,p__18442__$1,navbar__$1,meta18455));
});})(map__18453,map__18453__$1,user,title))
;
}
return (new steampunk.core.t18454(title,user,map__18453__$1,owner,app,p__18442,navbar,null));
});
steampunk.core.center_pane = (function center_pane(user,owner){if(typeof steampunk.core.t18467 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t18467 = (function (owner,user,center_pane,meta18468){
this.owner = owner;
this.user = user;
this.center_pane = center_pane;
this.meta18468 = meta18468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t18467.cljs$lang$type = true;
steampunk.core.t18467.cljs$lang$ctorStr = "steampunk.core/t18467";
steampunk.core.t18467.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"steampunk.core/t18467");
});
steampunk.core.t18467.prototype.om$core$IRender$ = true;
steampunk.core.t18467.prototype.om$core$IRender$render$arity$1 = (function (this__17082__auto__){var self__ = this;
var this__17082__auto____$1 = this;return React.DOM.div({"className": "container", "id": "center-pane"},React.DOM.div({"className": "row"},sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.user_column,self__.user)),sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.about_column,self__.user))));
});
steampunk.core.t18467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18469){var self__ = this;
var _18469__$1 = this;return self__.meta18468;
});
steampunk.core.t18467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18469,meta18468__$1){var self__ = this;
var _18469__$1 = this;return (new steampunk.core.t18467(self__.owner,self__.user,self__.center_pane,meta18468__$1));
});
steampunk.core.__GT_t18467 = (function __GT_t18467(owner__$1,user__$1,center_pane__$1,meta18468){return (new steampunk.core.t18467(owner__$1,user__$1,center_pane__$1,meta18468));
});
}
return (new steampunk.core.t18467(owner,user,center_pane,null));
});
steampunk.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"Steampunk dating",new cljs.core.Keyword(null,"user","user",1017503549),null], null));
steampunk.core.user_page = (function user_page(p__18470,app,owner){var map__18476 = p__18470;var map__18476__$1 = ((cljs.core.seq_QMARK_.call(null,map__18476))?cljs.core.apply.call(null,cljs.core.hash_map,map__18476):map__18476);var user = cljs.core.get.call(null,map__18476__$1,new cljs.core.Keyword(null,"user","user",1017503549));if(typeof steampunk.core.t18477 !== 'undefined')
{} else
{
/**
* @constructor
*/
steampunk.core.t18477 = (function (user,map__18476,owner,app,p__18470,user_page,meta18478){
this.user = user;
this.map__18476 = map__18476;
this.owner = owner;
this.app = app;
this.p__18470 = p__18470;
this.user_page = user_page;
this.meta18478 = meta18478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
steampunk.core.t18477.cljs$lang$type = true;
steampunk.core.t18477.cljs$lang$ctorStr = "steampunk.core/t18477";
steampunk.core.t18477.cljs$lang$ctorPrWriter = ((function (map__18476,map__18476__$1,user){
return (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"steampunk.core/t18477");
});})(map__18476,map__18476__$1,user))
;
steampunk.core.t18477.prototype.om$core$IRender$ = true;
steampunk.core.t18477.prototype.om$core$IRender$render$arity$1 = ((function (map__18476,map__18476__$1,user){
return (function (this__17082__auto__){var self__ = this;
var this__17082__auto____$1 = this;var attrs18480 = om.core.build.call(null,steampunk.core.navbar,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs18480))?sablono.interpreter.attributes.call(null,attrs18480):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs18480))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.center_pane,self__.user))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs18480),sablono.interpreter.interpret.call(null,om.core.build.call(null,steampunk.core.center_pane,self__.user))], null))));
});})(map__18476,map__18476__$1,user))
;
steampunk.core.t18477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18476,map__18476__$1,user){
return (function (_18479){var self__ = this;
var _18479__$1 = this;return self__.meta18478;
});})(map__18476,map__18476__$1,user))
;
steampunk.core.t18477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18476,map__18476__$1,user){
return (function (_18479,meta18478__$1){var self__ = this;
var _18479__$1 = this;return (new steampunk.core.t18477(self__.user,self__.map__18476,self__.owner,self__.app,self__.p__18470,self__.user_page,meta18478__$1));
});})(map__18476,map__18476__$1,user))
;
steampunk.core.__GT_t18477 = ((function (map__18476,map__18476__$1,user){
return (function __GT_t18477(user__$1,map__18476__$2,owner__$1,app__$1,p__18470__$1,user_page__$1,meta18478){return (new steampunk.core.t18477(user__$1,map__18476__$2,owner__$1,app__$1,p__18470__$1,user_page__$1,meta18478));
});})(map__18476,map__18476__$1,user))
;
}
return (new steampunk.core.t18477(user,map__18476__$1,owner,app,p__18470,user_page,null));
});
