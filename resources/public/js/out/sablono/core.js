// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__16223__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16222 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16222,0,null);var body = cljs.core.nthnext.call(null,vec__16222,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16223 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16223__delegate.call(this,args);};
G__16223.cljs$lang$maxFixedArity = 0;
G__16223.cljs$lang$applyTo = (function (arglist__16224){
var args = cljs.core.seq(arglist__16224);
return G__16223__delegate(args);
});
G__16223.cljs$core$IFn$_invoke$arity$variadic = G__16223__delegate;
return G__16223;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8597__auto__ = (function iter__16229(s__16230){return (new cljs.core.LazySeq(null,(function (){var s__16230__$1 = s__16230;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16230__$1);if(temp__4126__auto__)
{var s__16230__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16230__$2))
{var c__8595__auto__ = cljs.core.chunk_first.call(null,s__16230__$2);var size__8596__auto__ = cljs.core.count.call(null,c__8595__auto__);var b__16232 = cljs.core.chunk_buffer.call(null,size__8596__auto__);if((function (){var i__16231 = 0;while(true){
if((i__16231 < size__8596__auto__))
{var args = cljs.core._nth.call(null,c__8595__auto__,i__16231);cljs.core.chunk_append.call(null,b__16232,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16233 = (i__16231 + 1);
i__16231 = G__16233;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16232),iter__16229.call(null,cljs.core.chunk_rest.call(null,s__16230__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16232),null);
}
} else
{var args = cljs.core.first.call(null,s__16230__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16229.call(null,cljs.core.rest.call(null,s__16230__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8597__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8597__auto__ = (function iter__16238(s__16239){return (new cljs.core.LazySeq(null,(function (){var s__16239__$1 = s__16239;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16239__$1);if(temp__4126__auto__)
{var s__16239__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16239__$2))
{var c__8595__auto__ = cljs.core.chunk_first.call(null,s__16239__$2);var size__8596__auto__ = cljs.core.count.call(null,c__8595__auto__);var b__16241 = cljs.core.chunk_buffer.call(null,size__8596__auto__);if((function (){var i__16240 = 0;while(true){
if((i__16240 < size__8596__auto__))
{var style = cljs.core._nth.call(null,c__8595__auto__,i__16240);cljs.core.chunk_append.call(null,b__16241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16242 = (i__16240 + 1);
i__16240 = G__16242;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16241),iter__16238.call(null,cljs.core.chunk_rest.call(null,s__16239__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16241),null);
}
} else
{var style = cljs.core.first.call(null,s__16239__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16238.call(null,cljs.core.rest.call(null,s__16239__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8597__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__16243){
var styles = cljs.core.seq(arglist__16243);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to16244 = (function() { 
var link_to16244__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16244 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16244__delegate.call(this,url,content);};
link_to16244.cljs$lang$maxFixedArity = 1;
link_to16244.cljs$lang$applyTo = (function (arglist__16245){
var url = cljs.core.first(arglist__16245);
var content = cljs.core.rest(arglist__16245);
return link_to16244__delegate(url,content);
});
link_to16244.cljs$core$IFn$_invoke$arity$variadic = link_to16244__delegate;
return link_to16244;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16244);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16246 = (function() { 
var mail_to16246__delegate = function (e_mail,p__16247){var vec__16249 = p__16247;var content = cljs.core.nth.call(null,vec__16249,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7880__auto__ = content;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16246 = function (e_mail,var_args){
var p__16247 = null;if (arguments.length > 1) {
  p__16247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16246__delegate.call(this,e_mail,p__16247);};
mail_to16246.cljs$lang$maxFixedArity = 1;
mail_to16246.cljs$lang$applyTo = (function (arglist__16250){
var e_mail = cljs.core.first(arglist__16250);
var p__16247 = cljs.core.rest(arglist__16250);
return mail_to16246__delegate(e_mail,p__16247);
});
mail_to16246.cljs$core$IFn$_invoke$arity$variadic = mail_to16246__delegate;
return mail_to16246;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16246);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16251 = (function unordered_list16251(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8597__auto__ = (function iter__16256(s__16257){return (new cljs.core.LazySeq(null,(function (){var s__16257__$1 = s__16257;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16257__$1);if(temp__4126__auto__)
{var s__16257__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16257__$2))
{var c__8595__auto__ = cljs.core.chunk_first.call(null,s__16257__$2);var size__8596__auto__ = cljs.core.count.call(null,c__8595__auto__);var b__16259 = cljs.core.chunk_buffer.call(null,size__8596__auto__);if((function (){var i__16258 = 0;while(true){
if((i__16258 < size__8596__auto__))
{var x = cljs.core._nth.call(null,c__8595__auto__,i__16258);cljs.core.chunk_append.call(null,b__16259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16260 = (i__16258 + 1);
i__16258 = G__16260;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16259),iter__16256.call(null,cljs.core.chunk_rest.call(null,s__16257__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16259),null);
}
} else
{var x = cljs.core.first.call(null,s__16257__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16256.call(null,cljs.core.rest.call(null,s__16257__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8597__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16251);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16261 = (function ordered_list16261(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8597__auto__ = (function iter__16266(s__16267){return (new cljs.core.LazySeq(null,(function (){var s__16267__$1 = s__16267;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16267__$1);if(temp__4126__auto__)
{var s__16267__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16267__$2))
{var c__8595__auto__ = cljs.core.chunk_first.call(null,s__16267__$2);var size__8596__auto__ = cljs.core.count.call(null,c__8595__auto__);var b__16269 = cljs.core.chunk_buffer.call(null,size__8596__auto__);if((function (){var i__16268 = 0;while(true){
if((i__16268 < size__8596__auto__))
{var x = cljs.core._nth.call(null,c__8595__auto__,i__16268);cljs.core.chunk_append.call(null,b__16269,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16270 = (i__16268 + 1);
i__16268 = G__16270;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16269),iter__16266.call(null,cljs.core.chunk_rest.call(null,s__16267__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16269),null);
}
} else
{var x = cljs.core.first.call(null,s__16267__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16266.call(null,cljs.core.rest.call(null,s__16267__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8597__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16261);
/**
* Create an image element.
*/
sablono.core.image16271 = (function() {
var image16271 = null;
var image16271__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16271__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16271 = function(src,alt){
switch(arguments.length){
case 1:
return image16271__1.call(this,src);
case 2:
return image16271__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16271.cljs$core$IFn$_invoke$arity$1 = image16271__1;
image16271.cljs$core$IFn$_invoke$arity$2 = image16271__2;
return image16271;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16271);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16272_SHARP_,p2__16273_SHARP_){return [cljs.core.str(p1__16272_SHARP_),cljs.core.str("["),cljs.core.str(p2__16273_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16274_SHARP_,p2__16275_SHARP_){return [cljs.core.str(p1__16274_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16275_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field16276 = (function() {
var color_field16276 = null;
var color_field16276__1 = (function (name__14352__auto__){return color_field16276.call(null,name__14352__auto__,null);
});
var color_field16276__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__14352__auto__,value__14353__auto__);
});
color_field16276 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return color_field16276__1.call(this,name__14352__auto__);
case 2:
return color_field16276__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field16276.cljs$core$IFn$_invoke$arity$1 = color_field16276__1;
color_field16276.cljs$core$IFn$_invoke$arity$2 = color_field16276__2;
return color_field16276;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field16276);
/**
* Creates a date input field.
*/
sablono.core.date_field16277 = (function() {
var date_field16277 = null;
var date_field16277__1 = (function (name__14352__auto__){return date_field16277.call(null,name__14352__auto__,null);
});
var date_field16277__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__14352__auto__,value__14353__auto__);
});
date_field16277 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return date_field16277__1.call(this,name__14352__auto__);
case 2:
return date_field16277__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field16277.cljs$core$IFn$_invoke$arity$1 = date_field16277__1;
date_field16277.cljs$core$IFn$_invoke$arity$2 = date_field16277__2;
return date_field16277;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field16277);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field16278 = (function() {
var datetime_field16278 = null;
var datetime_field16278__1 = (function (name__14352__auto__){return datetime_field16278.call(null,name__14352__auto__,null);
});
var datetime_field16278__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__14352__auto__,value__14353__auto__);
});
datetime_field16278 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return datetime_field16278__1.call(this,name__14352__auto__);
case 2:
return datetime_field16278__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field16278.cljs$core$IFn$_invoke$arity$1 = datetime_field16278__1;
datetime_field16278.cljs$core$IFn$_invoke$arity$2 = datetime_field16278__2;
return datetime_field16278;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field16278);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field16279 = (function() {
var datetime_local_field16279 = null;
var datetime_local_field16279__1 = (function (name__14352__auto__){return datetime_local_field16279.call(null,name__14352__auto__,null);
});
var datetime_local_field16279__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__14352__auto__,value__14353__auto__);
});
datetime_local_field16279 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return datetime_local_field16279__1.call(this,name__14352__auto__);
case 2:
return datetime_local_field16279__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field16279.cljs$core$IFn$_invoke$arity$1 = datetime_local_field16279__1;
datetime_local_field16279.cljs$core$IFn$_invoke$arity$2 = datetime_local_field16279__2;
return datetime_local_field16279;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field16279);
/**
* Creates a email input field.
*/
sablono.core.email_field16280 = (function() {
var email_field16280 = null;
var email_field16280__1 = (function (name__14352__auto__){return email_field16280.call(null,name__14352__auto__,null);
});
var email_field16280__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__14352__auto__,value__14353__auto__);
});
email_field16280 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return email_field16280__1.call(this,name__14352__auto__);
case 2:
return email_field16280__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16280.cljs$core$IFn$_invoke$arity$1 = email_field16280__1;
email_field16280.cljs$core$IFn$_invoke$arity$2 = email_field16280__2;
return email_field16280;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16280);
/**
* Creates a file input field.
*/
sablono.core.file_field16281 = (function() {
var file_field16281 = null;
var file_field16281__1 = (function (name__14352__auto__){return file_field16281.call(null,name__14352__auto__,null);
});
var file_field16281__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__14352__auto__,value__14353__auto__);
});
file_field16281 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return file_field16281__1.call(this,name__14352__auto__);
case 2:
return file_field16281__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field16281.cljs$core$IFn$_invoke$arity$1 = file_field16281__1;
file_field16281.cljs$core$IFn$_invoke$arity$2 = file_field16281__2;
return file_field16281;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field16281);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field16282 = (function() {
var hidden_field16282 = null;
var hidden_field16282__1 = (function (name__14352__auto__){return hidden_field16282.call(null,name__14352__auto__,null);
});
var hidden_field16282__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__14352__auto__,value__14353__auto__);
});
hidden_field16282 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return hidden_field16282__1.call(this,name__14352__auto__);
case 2:
return hidden_field16282__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16282.cljs$core$IFn$_invoke$arity$1 = hidden_field16282__1;
hidden_field16282.cljs$core$IFn$_invoke$arity$2 = hidden_field16282__2;
return hidden_field16282;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16282);
/**
* Creates a month input field.
*/
sablono.core.month_field16283 = (function() {
var month_field16283 = null;
var month_field16283__1 = (function (name__14352__auto__){return month_field16283.call(null,name__14352__auto__,null);
});
var month_field16283__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__14352__auto__,value__14353__auto__);
});
month_field16283 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return month_field16283__1.call(this,name__14352__auto__);
case 2:
return month_field16283__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field16283.cljs$core$IFn$_invoke$arity$1 = month_field16283__1;
month_field16283.cljs$core$IFn$_invoke$arity$2 = month_field16283__2;
return month_field16283;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field16283);
/**
* Creates a number input field.
*/
sablono.core.number_field16284 = (function() {
var number_field16284 = null;
var number_field16284__1 = (function (name__14352__auto__){return number_field16284.call(null,name__14352__auto__,null);
});
var number_field16284__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__14352__auto__,value__14353__auto__);
});
number_field16284 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return number_field16284__1.call(this,name__14352__auto__);
case 2:
return number_field16284__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field16284.cljs$core$IFn$_invoke$arity$1 = number_field16284__1;
number_field16284.cljs$core$IFn$_invoke$arity$2 = number_field16284__2;
return number_field16284;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field16284);
/**
* Creates a password input field.
*/
sablono.core.password_field16285 = (function() {
var password_field16285 = null;
var password_field16285__1 = (function (name__14352__auto__){return password_field16285.call(null,name__14352__auto__,null);
});
var password_field16285__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__14352__auto__,value__14353__auto__);
});
password_field16285 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return password_field16285__1.call(this,name__14352__auto__);
case 2:
return password_field16285__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16285.cljs$core$IFn$_invoke$arity$1 = password_field16285__1;
password_field16285.cljs$core$IFn$_invoke$arity$2 = password_field16285__2;
return password_field16285;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16285);
/**
* Creates a range input field.
*/
sablono.core.range_field16286 = (function() {
var range_field16286 = null;
var range_field16286__1 = (function (name__14352__auto__){return range_field16286.call(null,name__14352__auto__,null);
});
var range_field16286__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__14352__auto__,value__14353__auto__);
});
range_field16286 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return range_field16286__1.call(this,name__14352__auto__);
case 2:
return range_field16286__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field16286.cljs$core$IFn$_invoke$arity$1 = range_field16286__1;
range_field16286.cljs$core$IFn$_invoke$arity$2 = range_field16286__2;
return range_field16286;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field16286);
/**
* Creates a search input field.
*/
sablono.core.search_field16287 = (function() {
var search_field16287 = null;
var search_field16287__1 = (function (name__14352__auto__){return search_field16287.call(null,name__14352__auto__,null);
});
var search_field16287__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__14352__auto__,value__14353__auto__);
});
search_field16287 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return search_field16287__1.call(this,name__14352__auto__);
case 2:
return search_field16287__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field16287.cljs$core$IFn$_invoke$arity$1 = search_field16287__1;
search_field16287.cljs$core$IFn$_invoke$arity$2 = search_field16287__2;
return search_field16287;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field16287);
/**
* Creates a tel input field.
*/
sablono.core.tel_field16288 = (function() {
var tel_field16288 = null;
var tel_field16288__1 = (function (name__14352__auto__){return tel_field16288.call(null,name__14352__auto__,null);
});
var tel_field16288__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__14352__auto__,value__14353__auto__);
});
tel_field16288 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return tel_field16288__1.call(this,name__14352__auto__);
case 2:
return tel_field16288__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field16288.cljs$core$IFn$_invoke$arity$1 = tel_field16288__1;
tel_field16288.cljs$core$IFn$_invoke$arity$2 = tel_field16288__2;
return tel_field16288;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field16288);
/**
* Creates a text input field.
*/
sablono.core.text_field16289 = (function() {
var text_field16289 = null;
var text_field16289__1 = (function (name__14352__auto__){return text_field16289.call(null,name__14352__auto__,null);
});
var text_field16289__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__14352__auto__,value__14353__auto__);
});
text_field16289 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return text_field16289__1.call(this,name__14352__auto__);
case 2:
return text_field16289__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16289.cljs$core$IFn$_invoke$arity$1 = text_field16289__1;
text_field16289.cljs$core$IFn$_invoke$arity$2 = text_field16289__2;
return text_field16289;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16289);
/**
* Creates a time input field.
*/
sablono.core.time_field16290 = (function() {
var time_field16290 = null;
var time_field16290__1 = (function (name__14352__auto__){return time_field16290.call(null,name__14352__auto__,null);
});
var time_field16290__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__14352__auto__,value__14353__auto__);
});
time_field16290 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return time_field16290__1.call(this,name__14352__auto__);
case 2:
return time_field16290__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field16290.cljs$core$IFn$_invoke$arity$1 = time_field16290__1;
time_field16290.cljs$core$IFn$_invoke$arity$2 = time_field16290__2;
return time_field16290;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field16290);
/**
* Creates a url input field.
*/
sablono.core.url_field16291 = (function() {
var url_field16291 = null;
var url_field16291__1 = (function (name__14352__auto__){return url_field16291.call(null,name__14352__auto__,null);
});
var url_field16291__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__14352__auto__,value__14353__auto__);
});
url_field16291 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return url_field16291__1.call(this,name__14352__auto__);
case 2:
return url_field16291__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field16291.cljs$core$IFn$_invoke$arity$1 = url_field16291__1;
url_field16291.cljs$core$IFn$_invoke$arity$2 = url_field16291__2;
return url_field16291;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field16291);
/**
* Creates a week input field.
*/
sablono.core.week_field16292 = (function() {
var week_field16292 = null;
var week_field16292__1 = (function (name__14352__auto__){return week_field16292.call(null,name__14352__auto__,null);
});
var week_field16292__2 = (function (name__14352__auto__,value__14353__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__14352__auto__,value__14353__auto__);
});
week_field16292 = function(name__14352__auto__,value__14353__auto__){
switch(arguments.length){
case 1:
return week_field16292__1.call(this,name__14352__auto__);
case 2:
return week_field16292__2.call(this,name__14352__auto__,value__14353__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field16292.cljs$core$IFn$_invoke$arity$1 = week_field16292__1;
week_field16292.cljs$core$IFn$_invoke$arity$2 = week_field16292__2;
return week_field16292;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field16292);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box16293 = (function() {
var check_box16293 = null;
var check_box16293__1 = (function (name){return check_box16293.call(null,name,null);
});
var check_box16293__2 = (function (name,checked_QMARK_){return check_box16293.call(null,name,checked_QMARK_,"true");
});
var check_box16293__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16293 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16293__1.call(this,name);
case 2:
return check_box16293__2.call(this,name,checked_QMARK_);
case 3:
return check_box16293__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16293.cljs$core$IFn$_invoke$arity$1 = check_box16293__1;
check_box16293.cljs$core$IFn$_invoke$arity$2 = check_box16293__2;
check_box16293.cljs$core$IFn$_invoke$arity$3 = check_box16293__3;
return check_box16293;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16293);
/**
* Creates a radio button.
*/
sablono.core.radio_button16294 = (function() {
var radio_button16294 = null;
var radio_button16294__1 = (function (group){return radio_button16294.call(null,group,null);
});
var radio_button16294__2 = (function (group,checked_QMARK_){return radio_button16294.call(null,group,checked_QMARK_,"true");
});
var radio_button16294__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16294 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16294__1.call(this,group);
case 2:
return radio_button16294__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16294__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16294.cljs$core$IFn$_invoke$arity$1 = radio_button16294__1;
radio_button16294.cljs$core$IFn$_invoke$arity$2 = radio_button16294__2;
radio_button16294.cljs$core$IFn$_invoke$arity$3 = radio_button16294__3;
return radio_button16294;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16294);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16295 = (function() {
var select_options16295 = null;
var select_options16295__1 = (function (coll){return select_options16295.call(null,coll,null);
});
var select_options16295__2 = (function (coll,selected){var iter__8597__auto__ = (function iter__16304(s__16305){return (new cljs.core.LazySeq(null,(function (){var s__16305__$1 = s__16305;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16305__$1);if(temp__4126__auto__)
{var s__16305__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16305__$2))
{var c__8595__auto__ = cljs.core.chunk_first.call(null,s__16305__$2);var size__8596__auto__ = cljs.core.count.call(null,c__8595__auto__);var b__16307 = cljs.core.chunk_buffer.call(null,size__8596__auto__);if((function (){var i__16306 = 0;while(true){
if((i__16306 < size__8596__auto__))
{var x = cljs.core._nth.call(null,c__8595__auto__,i__16306);cljs.core.chunk_append.call(null,b__16307,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16310 = x;var text = cljs.core.nth.call(null,vec__16310,0,null);var val = cljs.core.nth.call(null,vec__16310,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__16310,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16295.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16312 = (i__16306 + 1);
i__16306 = G__16312;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16307),iter__16304.call(null,cljs.core.chunk_rest.call(null,s__16305__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16307),null);
}
} else
{var x = cljs.core.first.call(null,s__16305__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16311 = x;var text = cljs.core.nth.call(null,vec__16311,0,null);var val = cljs.core.nth.call(null,vec__16311,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__16311,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16295.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16304.call(null,cljs.core.rest.call(null,s__16305__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8597__auto__.call(null,coll);
});
select_options16295 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16295__1.call(this,coll);
case 2:
return select_options16295__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16295.cljs$core$IFn$_invoke$arity$1 = select_options16295__1;
select_options16295.cljs$core$IFn$_invoke$arity$2 = select_options16295__2;
return select_options16295;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16295);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16313 = (function() {
var drop_down16313 = null;
var drop_down16313__2 = (function (name,options){return drop_down16313.call(null,name,options,null);
});
var drop_down16313__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16313 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16313__2.call(this,name,options);
case 3:
return drop_down16313__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16313.cljs$core$IFn$_invoke$arity$2 = drop_down16313__2;
drop_down16313.cljs$core$IFn$_invoke$arity$3 = drop_down16313__3;
return drop_down16313;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16313);
/**
* Creates a text area element.
*/
sablono.core.text_area16314 = (function() {
var text_area16314 = null;
var text_area16314__1 = (function (name){return text_area16314.call(null,name,null);
});
var text_area16314__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area16314 = function(name,value){
switch(arguments.length){
case 1:
return text_area16314__1.call(this,name);
case 2:
return text_area16314__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16314.cljs$core$IFn$_invoke$arity$1 = text_area16314__1;
text_area16314.cljs$core$IFn$_invoke$arity$2 = text_area16314__2;
return text_area16314;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16314);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16315 = (function label16315(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16315);
/**
* Creates a submit button.
*/
sablono.core.submit_button16316 = (function submit_button16316(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16316);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16317 = (function reset_button16317(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16317);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16318 = (function() { 
var form_to16318__delegate = function (p__16319,body){var vec__16321 = p__16319;var method = cljs.core.nth.call(null,vec__16321,0,null);var action = cljs.core.nth.call(null,vec__16321,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16318 = function (p__16319,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16318__delegate.call(this,p__16319,body);};
form_to16318.cljs$lang$maxFixedArity = 1;
form_to16318.cljs$lang$applyTo = (function (arglist__16322){
var p__16319 = cljs.core.first(arglist__16322);
var body = cljs.core.rest(arglist__16322);
return form_to16318__delegate(p__16319,body);
});
form_to16318.cljs$core$IFn$_invoke$arity$variadic = form_to16318__delegate;
return form_to16318;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16318);

//# sourceMappingURL=core.js.map