// Compiled by ClojureScript 0.0-2234
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
var G__18839__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__18838 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__18838,0,null);var body = cljs.core.nthnext.call(null,vec__18838,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__18839 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18839__delegate.call(this,args);};
G__18839.cljs$lang$maxFixedArity = 0;
G__18839.cljs$lang$applyTo = (function (arglist__18840){
var args = cljs.core.seq(arglist__18840);
return G__18839__delegate(args);
});
G__18839.cljs$core$IFn$_invoke$arity$variadic = G__18839__delegate;
return G__18839;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__9381__auto__ = (function iter__18845(s__18846){return (new cljs.core.LazySeq(null,(function (){var s__18846__$1 = s__18846;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18846__$1);if(temp__4126__auto__)
{var s__18846__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18846__$2))
{var c__9379__auto__ = cljs.core.chunk_first.call(null,s__18846__$2);var size__9380__auto__ = cljs.core.count.call(null,c__9379__auto__);var b__18848 = cljs.core.chunk_buffer.call(null,size__9380__auto__);if((function (){var i__18847 = 0;while(true){
if((i__18847 < size__9380__auto__))
{var args = cljs.core._nth.call(null,c__9379__auto__,i__18847);cljs.core.chunk_append.call(null,b__18848,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__18849 = (i__18847 + 1);
i__18847 = G__18849;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18848),iter__18845.call(null,cljs.core.chunk_rest.call(null,s__18846__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18848),null);
}
} else
{var args = cljs.core.first.call(null,s__18846__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__18845.call(null,cljs.core.rest.call(null,s__18846__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9381__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__9381__auto__ = (function iter__18854(s__18855){return (new cljs.core.LazySeq(null,(function (){var s__18855__$1 = s__18855;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18855__$1);if(temp__4126__auto__)
{var s__18855__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18855__$2))
{var c__9379__auto__ = cljs.core.chunk_first.call(null,s__18855__$2);var size__9380__auto__ = cljs.core.count.call(null,c__9379__auto__);var b__18857 = cljs.core.chunk_buffer.call(null,size__9380__auto__);if((function (){var i__18856 = 0;while(true){
if((i__18856 < size__9380__auto__))
{var style = cljs.core._nth.call(null,c__9379__auto__,i__18856);cljs.core.chunk_append.call(null,b__18857,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__18858 = (i__18856 + 1);
i__18856 = G__18858;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18857),iter__18854.call(null,cljs.core.chunk_rest.call(null,s__18855__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18857),null);
}
} else
{var style = cljs.core.first.call(null,s__18855__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__18854.call(null,cljs.core.rest.call(null,s__18855__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9381__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__18859){
var styles = cljs.core.seq(arglist__18859);
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
sablono.core.link_to18860 = (function() { 
var link_to18860__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to18860 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to18860__delegate.call(this,url,content);};
link_to18860.cljs$lang$maxFixedArity = 1;
link_to18860.cljs$lang$applyTo = (function (arglist__18861){
var url = cljs.core.first(arglist__18861);
var content = cljs.core.rest(arglist__18861);
return link_to18860__delegate(url,content);
});
link_to18860.cljs$core$IFn$_invoke$arity$variadic = link_to18860__delegate;
return link_to18860;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18860);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to18862 = (function() { 
var mail_to18862__delegate = function (e_mail,p__18863){var vec__18865 = p__18863;var content = cljs.core.nth.call(null,vec__18865,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__8656__auto__ = content;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to18862 = function (e_mail,var_args){
var p__18863 = null;if (arguments.length > 1) {
  p__18863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to18862__delegate.call(this,e_mail,p__18863);};
mail_to18862.cljs$lang$maxFixedArity = 1;
mail_to18862.cljs$lang$applyTo = (function (arglist__18866){
var e_mail = cljs.core.first(arglist__18866);
var p__18863 = cljs.core.rest(arglist__18866);
return mail_to18862__delegate(e_mail,p__18863);
});
mail_to18862.cljs$core$IFn$_invoke$arity$variadic = mail_to18862__delegate;
return mail_to18862;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18862);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list18867 = (function unordered_list18867(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__9381__auto__ = (function iter__18872(s__18873){return (new cljs.core.LazySeq(null,(function (){var s__18873__$1 = s__18873;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18873__$1);if(temp__4126__auto__)
{var s__18873__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18873__$2))
{var c__9379__auto__ = cljs.core.chunk_first.call(null,s__18873__$2);var size__9380__auto__ = cljs.core.count.call(null,c__9379__auto__);var b__18875 = cljs.core.chunk_buffer.call(null,size__9380__auto__);if((function (){var i__18874 = 0;while(true){
if((i__18874 < size__9380__auto__))
{var x = cljs.core._nth.call(null,c__9379__auto__,i__18874);cljs.core.chunk_append.call(null,b__18875,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__18876 = (i__18874 + 1);
i__18874 = G__18876;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18875),iter__18872.call(null,cljs.core.chunk_rest.call(null,s__18873__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18875),null);
}
} else
{var x = cljs.core.first.call(null,s__18873__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__18872.call(null,cljs.core.rest.call(null,s__18873__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9381__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18867);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list18877 = (function ordered_list18877(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__9381__auto__ = (function iter__18882(s__18883){return (new cljs.core.LazySeq(null,(function (){var s__18883__$1 = s__18883;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18883__$1);if(temp__4126__auto__)
{var s__18883__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18883__$2))
{var c__9379__auto__ = cljs.core.chunk_first.call(null,s__18883__$2);var size__9380__auto__ = cljs.core.count.call(null,c__9379__auto__);var b__18885 = cljs.core.chunk_buffer.call(null,size__9380__auto__);if((function (){var i__18884 = 0;while(true){
if((i__18884 < size__9380__auto__))
{var x = cljs.core._nth.call(null,c__9379__auto__,i__18884);cljs.core.chunk_append.call(null,b__18885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__18886 = (i__18884 + 1);
i__18884 = G__18886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18885),iter__18882.call(null,cljs.core.chunk_rest.call(null,s__18883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18885),null);
}
} else
{var x = cljs.core.first.call(null,s__18883__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__18882.call(null,cljs.core.rest.call(null,s__18883__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9381__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18877);
/**
* Create an image element.
*/
sablono.core.image18887 = (function() {
var image18887 = null;
var image18887__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image18887__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image18887 = function(src,alt){
switch(arguments.length){
case 1:
return image18887__1.call(this,src);
case 2:
return image18887__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image18887.cljs$core$IFn$_invoke$arity$1 = image18887__1;
image18887.cljs$core$IFn$_invoke$arity$2 = image18887__2;
return image18887;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18887);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__18888_SHARP_,p2__18889_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18888_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18889_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__18890_SHARP_,p2__18891_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18890_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18891_SHARP_));
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
sablono.core.color_field18892 = (function() {
var color_field18892 = null;
var color_field18892__1 = (function (name__18040__auto__){return color_field18892.call(null,name__18040__auto__,null);
});
var color_field18892__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__18040__auto__,value__18041__auto__);
});
color_field18892 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return color_field18892__1.call(this,name__18040__auto__);
case 2:
return color_field18892__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field18892.cljs$core$IFn$_invoke$arity$1 = color_field18892__1;
color_field18892.cljs$core$IFn$_invoke$arity$2 = color_field18892__2;
return color_field18892;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18892);
/**
* Creates a date input field.
*/
sablono.core.date_field18893 = (function() {
var date_field18893 = null;
var date_field18893__1 = (function (name__18040__auto__){return date_field18893.call(null,name__18040__auto__,null);
});
var date_field18893__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__18040__auto__,value__18041__auto__);
});
date_field18893 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return date_field18893__1.call(this,name__18040__auto__);
case 2:
return date_field18893__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field18893.cljs$core$IFn$_invoke$arity$1 = date_field18893__1;
date_field18893.cljs$core$IFn$_invoke$arity$2 = date_field18893__2;
return date_field18893;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18893);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field18894 = (function() {
var datetime_field18894 = null;
var datetime_field18894__1 = (function (name__18040__auto__){return datetime_field18894.call(null,name__18040__auto__,null);
});
var datetime_field18894__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__18040__auto__,value__18041__auto__);
});
datetime_field18894 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return datetime_field18894__1.call(this,name__18040__auto__);
case 2:
return datetime_field18894__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field18894.cljs$core$IFn$_invoke$arity$1 = datetime_field18894__1;
datetime_field18894.cljs$core$IFn$_invoke$arity$2 = datetime_field18894__2;
return datetime_field18894;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18894);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field18895 = (function() {
var datetime_local_field18895 = null;
var datetime_local_field18895__1 = (function (name__18040__auto__){return datetime_local_field18895.call(null,name__18040__auto__,null);
});
var datetime_local_field18895__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__18040__auto__,value__18041__auto__);
});
datetime_local_field18895 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return datetime_local_field18895__1.call(this,name__18040__auto__);
case 2:
return datetime_local_field18895__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field18895.cljs$core$IFn$_invoke$arity$1 = datetime_local_field18895__1;
datetime_local_field18895.cljs$core$IFn$_invoke$arity$2 = datetime_local_field18895__2;
return datetime_local_field18895;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18895);
/**
* Creates a email input field.
*/
sablono.core.email_field18896 = (function() {
var email_field18896 = null;
var email_field18896__1 = (function (name__18040__auto__){return email_field18896.call(null,name__18040__auto__,null);
});
var email_field18896__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__18040__auto__,value__18041__auto__);
});
email_field18896 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return email_field18896__1.call(this,name__18040__auto__);
case 2:
return email_field18896__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field18896.cljs$core$IFn$_invoke$arity$1 = email_field18896__1;
email_field18896.cljs$core$IFn$_invoke$arity$2 = email_field18896__2;
return email_field18896;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18896);
/**
* Creates a file input field.
*/
sablono.core.file_field18897 = (function() {
var file_field18897 = null;
var file_field18897__1 = (function (name__18040__auto__){return file_field18897.call(null,name__18040__auto__,null);
});
var file_field18897__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__18040__auto__,value__18041__auto__);
});
file_field18897 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return file_field18897__1.call(this,name__18040__auto__);
case 2:
return file_field18897__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field18897.cljs$core$IFn$_invoke$arity$1 = file_field18897__1;
file_field18897.cljs$core$IFn$_invoke$arity$2 = file_field18897__2;
return file_field18897;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18897);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field18898 = (function() {
var hidden_field18898 = null;
var hidden_field18898__1 = (function (name__18040__auto__){return hidden_field18898.call(null,name__18040__auto__,null);
});
var hidden_field18898__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__18040__auto__,value__18041__auto__);
});
hidden_field18898 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return hidden_field18898__1.call(this,name__18040__auto__);
case 2:
return hidden_field18898__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field18898.cljs$core$IFn$_invoke$arity$1 = hidden_field18898__1;
hidden_field18898.cljs$core$IFn$_invoke$arity$2 = hidden_field18898__2;
return hidden_field18898;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18898);
/**
* Creates a month input field.
*/
sablono.core.month_field18899 = (function() {
var month_field18899 = null;
var month_field18899__1 = (function (name__18040__auto__){return month_field18899.call(null,name__18040__auto__,null);
});
var month_field18899__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__18040__auto__,value__18041__auto__);
});
month_field18899 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return month_field18899__1.call(this,name__18040__auto__);
case 2:
return month_field18899__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field18899.cljs$core$IFn$_invoke$arity$1 = month_field18899__1;
month_field18899.cljs$core$IFn$_invoke$arity$2 = month_field18899__2;
return month_field18899;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18899);
/**
* Creates a number input field.
*/
sablono.core.number_field18900 = (function() {
var number_field18900 = null;
var number_field18900__1 = (function (name__18040__auto__){return number_field18900.call(null,name__18040__auto__,null);
});
var number_field18900__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__18040__auto__,value__18041__auto__);
});
number_field18900 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return number_field18900__1.call(this,name__18040__auto__);
case 2:
return number_field18900__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field18900.cljs$core$IFn$_invoke$arity$1 = number_field18900__1;
number_field18900.cljs$core$IFn$_invoke$arity$2 = number_field18900__2;
return number_field18900;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18900);
/**
* Creates a password input field.
*/
sablono.core.password_field18901 = (function() {
var password_field18901 = null;
var password_field18901__1 = (function (name__18040__auto__){return password_field18901.call(null,name__18040__auto__,null);
});
var password_field18901__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__18040__auto__,value__18041__auto__);
});
password_field18901 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return password_field18901__1.call(this,name__18040__auto__);
case 2:
return password_field18901__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field18901.cljs$core$IFn$_invoke$arity$1 = password_field18901__1;
password_field18901.cljs$core$IFn$_invoke$arity$2 = password_field18901__2;
return password_field18901;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18901);
/**
* Creates a range input field.
*/
sablono.core.range_field18902 = (function() {
var range_field18902 = null;
var range_field18902__1 = (function (name__18040__auto__){return range_field18902.call(null,name__18040__auto__,null);
});
var range_field18902__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__18040__auto__,value__18041__auto__);
});
range_field18902 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return range_field18902__1.call(this,name__18040__auto__);
case 2:
return range_field18902__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field18902.cljs$core$IFn$_invoke$arity$1 = range_field18902__1;
range_field18902.cljs$core$IFn$_invoke$arity$2 = range_field18902__2;
return range_field18902;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18902);
/**
* Creates a search input field.
*/
sablono.core.search_field18903 = (function() {
var search_field18903 = null;
var search_field18903__1 = (function (name__18040__auto__){return search_field18903.call(null,name__18040__auto__,null);
});
var search_field18903__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__18040__auto__,value__18041__auto__);
});
search_field18903 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return search_field18903__1.call(this,name__18040__auto__);
case 2:
return search_field18903__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field18903.cljs$core$IFn$_invoke$arity$1 = search_field18903__1;
search_field18903.cljs$core$IFn$_invoke$arity$2 = search_field18903__2;
return search_field18903;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18903);
/**
* Creates a tel input field.
*/
sablono.core.tel_field18904 = (function() {
var tel_field18904 = null;
var tel_field18904__1 = (function (name__18040__auto__){return tel_field18904.call(null,name__18040__auto__,null);
});
var tel_field18904__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__18040__auto__,value__18041__auto__);
});
tel_field18904 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return tel_field18904__1.call(this,name__18040__auto__);
case 2:
return tel_field18904__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field18904.cljs$core$IFn$_invoke$arity$1 = tel_field18904__1;
tel_field18904.cljs$core$IFn$_invoke$arity$2 = tel_field18904__2;
return tel_field18904;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18904);
/**
* Creates a text input field.
*/
sablono.core.text_field18905 = (function() {
var text_field18905 = null;
var text_field18905__1 = (function (name__18040__auto__){return text_field18905.call(null,name__18040__auto__,null);
});
var text_field18905__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__18040__auto__,value__18041__auto__);
});
text_field18905 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return text_field18905__1.call(this,name__18040__auto__);
case 2:
return text_field18905__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field18905.cljs$core$IFn$_invoke$arity$1 = text_field18905__1;
text_field18905.cljs$core$IFn$_invoke$arity$2 = text_field18905__2;
return text_field18905;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18905);
/**
* Creates a time input field.
*/
sablono.core.time_field18906 = (function() {
var time_field18906 = null;
var time_field18906__1 = (function (name__18040__auto__){return time_field18906.call(null,name__18040__auto__,null);
});
var time_field18906__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__18040__auto__,value__18041__auto__);
});
time_field18906 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return time_field18906__1.call(this,name__18040__auto__);
case 2:
return time_field18906__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field18906.cljs$core$IFn$_invoke$arity$1 = time_field18906__1;
time_field18906.cljs$core$IFn$_invoke$arity$2 = time_field18906__2;
return time_field18906;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18906);
/**
* Creates a url input field.
*/
sablono.core.url_field18907 = (function() {
var url_field18907 = null;
var url_field18907__1 = (function (name__18040__auto__){return url_field18907.call(null,name__18040__auto__,null);
});
var url_field18907__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__18040__auto__,value__18041__auto__);
});
url_field18907 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return url_field18907__1.call(this,name__18040__auto__);
case 2:
return url_field18907__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field18907.cljs$core$IFn$_invoke$arity$1 = url_field18907__1;
url_field18907.cljs$core$IFn$_invoke$arity$2 = url_field18907__2;
return url_field18907;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18907);
/**
* Creates a week input field.
*/
sablono.core.week_field18908 = (function() {
var week_field18908 = null;
var week_field18908__1 = (function (name__18040__auto__){return week_field18908.call(null,name__18040__auto__,null);
});
var week_field18908__2 = (function (name__18040__auto__,value__18041__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__18040__auto__,value__18041__auto__);
});
week_field18908 = function(name__18040__auto__,value__18041__auto__){
switch(arguments.length){
case 1:
return week_field18908__1.call(this,name__18040__auto__);
case 2:
return week_field18908__2.call(this,name__18040__auto__,value__18041__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field18908.cljs$core$IFn$_invoke$arity$1 = week_field18908__1;
week_field18908.cljs$core$IFn$_invoke$arity$2 = week_field18908__2;
return week_field18908;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18908);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box18909 = (function() {
var check_box18909 = null;
var check_box18909__1 = (function (name){return check_box18909.call(null,name,null);
});
var check_box18909__2 = (function (name,checked_QMARK_){return check_box18909.call(null,name,checked_QMARK_,"true");
});
var check_box18909__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box18909 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box18909__1.call(this,name);
case 2:
return check_box18909__2.call(this,name,checked_QMARK_);
case 3:
return check_box18909__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box18909.cljs$core$IFn$_invoke$arity$1 = check_box18909__1;
check_box18909.cljs$core$IFn$_invoke$arity$2 = check_box18909__2;
check_box18909.cljs$core$IFn$_invoke$arity$3 = check_box18909__3;
return check_box18909;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18909);
/**
* Creates a radio button.
*/
sablono.core.radio_button18910 = (function() {
var radio_button18910 = null;
var radio_button18910__1 = (function (group){return radio_button18910.call(null,group,null);
});
var radio_button18910__2 = (function (group,checked_QMARK_){return radio_button18910.call(null,group,checked_QMARK_,"true");
});
var radio_button18910__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button18910 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button18910__1.call(this,group);
case 2:
return radio_button18910__2.call(this,group,checked_QMARK_);
case 3:
return radio_button18910__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button18910.cljs$core$IFn$_invoke$arity$1 = radio_button18910__1;
radio_button18910.cljs$core$IFn$_invoke$arity$2 = radio_button18910__2;
radio_button18910.cljs$core$IFn$_invoke$arity$3 = radio_button18910__3;
return radio_button18910;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18910);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options18911 = (function() {
var select_options18911 = null;
var select_options18911__1 = (function (coll){return select_options18911.call(null,coll,null);
});
var select_options18911__2 = (function (coll,selected){var iter__9381__auto__ = (function iter__18920(s__18921){return (new cljs.core.LazySeq(null,(function (){var s__18921__$1 = s__18921;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18921__$1);if(temp__4126__auto__)
{var s__18921__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18921__$2))
{var c__9379__auto__ = cljs.core.chunk_first.call(null,s__18921__$2);var size__9380__auto__ = cljs.core.count.call(null,c__9379__auto__);var b__18923 = cljs.core.chunk_buffer.call(null,size__9380__auto__);if((function (){var i__18922 = 0;while(true){
if((i__18922 < size__9380__auto__))
{var x = cljs.core._nth.call(null,c__9379__auto__,i__18922);cljs.core.chunk_append.call(null,b__18923,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18926 = x;var text = cljs.core.nth.call(null,vec__18926,0,null);var val = cljs.core.nth.call(null,vec__18926,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18926,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options18911.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__18928 = (i__18922 + 1);
i__18922 = G__18928;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18923),iter__18920.call(null,cljs.core.chunk_rest.call(null,s__18921__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18923),null);
}
} else
{var x = cljs.core.first.call(null,s__18921__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18927 = x;var text = cljs.core.nth.call(null,vec__18927,0,null);var val = cljs.core.nth.call(null,vec__18927,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18927,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options18911.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__18920.call(null,cljs.core.rest.call(null,s__18921__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9381__auto__.call(null,coll);
});
select_options18911 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options18911__1.call(this,coll);
case 2:
return select_options18911__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options18911.cljs$core$IFn$_invoke$arity$1 = select_options18911__1;
select_options18911.cljs$core$IFn$_invoke$arity$2 = select_options18911__2;
return select_options18911;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18911);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down18929 = (function() {
var drop_down18929 = null;
var drop_down18929__2 = (function (name,options){return drop_down18929.call(null,name,options,null);
});
var drop_down18929__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down18929 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down18929__2.call(this,name,options);
case 3:
return drop_down18929__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down18929.cljs$core$IFn$_invoke$arity$2 = drop_down18929__2;
drop_down18929.cljs$core$IFn$_invoke$arity$3 = drop_down18929__3;
return drop_down18929;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18929);
/**
* Creates a text area element.
*/
sablono.core.text_area18930 = (function() {
var text_area18930 = null;
var text_area18930__1 = (function (name){return text_area18930.call(null,name,null);
});
var text_area18930__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area18930 = function(name,value){
switch(arguments.length){
case 1:
return text_area18930__1.call(this,name);
case 2:
return text_area18930__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area18930.cljs$core$IFn$_invoke$arity$1 = text_area18930__1;
text_area18930.cljs$core$IFn$_invoke$arity$2 = text_area18930__2;
return text_area18930;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18930);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label18931 = (function label18931(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18931);
/**
* Creates a submit button.
*/
sablono.core.submit_button18932 = (function submit_button18932(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18932);
/**
* Creates a form reset button.
*/
sablono.core.reset_button18933 = (function reset_button18933(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18933);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to18934 = (function() { 
var form_to18934__delegate = function (p__18935,body){var vec__18937 = p__18935;var method = cljs.core.nth.call(null,vec__18937,0,null);var action = cljs.core.nth.call(null,vec__18937,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to18934 = function (p__18935,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to18934__delegate.call(this,p__18935,body);};
form_to18934.cljs$lang$maxFixedArity = 1;
form_to18934.cljs$lang$applyTo = (function (arglist__18938){
var p__18935 = cljs.core.first(arglist__18938);
var body = cljs.core.rest(arglist__18938);
return form_to18934__delegate(p__18935,body);
});
form_to18934.cljs$core$IFn$_invoke$arity$variadic = form_to18934__delegate;
return form_to18934;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18934);
