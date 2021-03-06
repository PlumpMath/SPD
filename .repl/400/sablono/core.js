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
var G__25788__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__25787 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__25787,0,null);var body = cljs.core.nthnext.call(null,vec__25787,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__25788 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25788__delegate.call(this,args);};
G__25788.cljs$lang$maxFixedArity = 0;
G__25788.cljs$lang$applyTo = (function (arglist__25789){
var args = cljs.core.seq(arglist__25789);
return G__25788__delegate(args);
});
G__25788.cljs$core$IFn$_invoke$arity$variadic = G__25788__delegate;
return G__25788;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__9387__auto__ = (function iter__25794(s__25795){return (new cljs.core.LazySeq(null,(function (){var s__25795__$1 = s__25795;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25795__$1);if(temp__4126__auto__)
{var s__25795__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25795__$2))
{var c__9385__auto__ = cljs.core.chunk_first.call(null,s__25795__$2);var size__9386__auto__ = cljs.core.count.call(null,c__9385__auto__);var b__25797 = cljs.core.chunk_buffer.call(null,size__9386__auto__);if((function (){var i__25796 = 0;while(true){
if((i__25796 < size__9386__auto__))
{var args = cljs.core._nth.call(null,c__9385__auto__,i__25796);cljs.core.chunk_append.call(null,b__25797,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__25798 = (i__25796 + 1);
i__25796 = G__25798;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25797),iter__25794.call(null,cljs.core.chunk_rest.call(null,s__25795__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25797),null);
}
} else
{var args = cljs.core.first.call(null,s__25795__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__25794.call(null,cljs.core.rest.call(null,s__25795__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9387__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__9387__auto__ = (function iter__25803(s__25804){return (new cljs.core.LazySeq(null,(function (){var s__25804__$1 = s__25804;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25804__$1);if(temp__4126__auto__)
{var s__25804__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25804__$2))
{var c__9385__auto__ = cljs.core.chunk_first.call(null,s__25804__$2);var size__9386__auto__ = cljs.core.count.call(null,c__9385__auto__);var b__25806 = cljs.core.chunk_buffer.call(null,size__9386__auto__);if((function (){var i__25805 = 0;while(true){
if((i__25805 < size__9386__auto__))
{var style = cljs.core._nth.call(null,c__9385__auto__,i__25805);cljs.core.chunk_append.call(null,b__25806,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__25807 = (i__25805 + 1);
i__25805 = G__25807;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25806),iter__25803.call(null,cljs.core.chunk_rest.call(null,s__25804__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25806),null);
}
} else
{var style = cljs.core.first.call(null,s__25804__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__25803.call(null,cljs.core.rest.call(null,s__25804__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9387__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__25808){
var styles = cljs.core.seq(arglist__25808);
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
sablono.core.link_to25809 = (function() { 
var link_to25809__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to25809 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to25809__delegate.call(this,url,content);};
link_to25809.cljs$lang$maxFixedArity = 1;
link_to25809.cljs$lang$applyTo = (function (arglist__25810){
var url = cljs.core.first(arglist__25810);
var content = cljs.core.rest(arglist__25810);
return link_to25809__delegate(url,content);
});
link_to25809.cljs$core$IFn$_invoke$arity$variadic = link_to25809__delegate;
return link_to25809;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25809);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to25811 = (function() { 
var mail_to25811__delegate = function (e_mail,p__25812){var vec__25814 = p__25812;var content = cljs.core.nth.call(null,vec__25814,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__8662__auto__ = content;if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to25811 = function (e_mail,var_args){
var p__25812 = null;if (arguments.length > 1) {
  p__25812 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to25811__delegate.call(this,e_mail,p__25812);};
mail_to25811.cljs$lang$maxFixedArity = 1;
mail_to25811.cljs$lang$applyTo = (function (arglist__25815){
var e_mail = cljs.core.first(arglist__25815);
var p__25812 = cljs.core.rest(arglist__25815);
return mail_to25811__delegate(e_mail,p__25812);
});
mail_to25811.cljs$core$IFn$_invoke$arity$variadic = mail_to25811__delegate;
return mail_to25811;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25811);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list25816 = (function unordered_list25816(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__9387__auto__ = (function iter__25821(s__25822){return (new cljs.core.LazySeq(null,(function (){var s__25822__$1 = s__25822;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25822__$1);if(temp__4126__auto__)
{var s__25822__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25822__$2))
{var c__9385__auto__ = cljs.core.chunk_first.call(null,s__25822__$2);var size__9386__auto__ = cljs.core.count.call(null,c__9385__auto__);var b__25824 = cljs.core.chunk_buffer.call(null,size__9386__auto__);if((function (){var i__25823 = 0;while(true){
if((i__25823 < size__9386__auto__))
{var x = cljs.core._nth.call(null,c__9385__auto__,i__25823);cljs.core.chunk_append.call(null,b__25824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__25825 = (i__25823 + 1);
i__25823 = G__25825;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25824),iter__25821.call(null,cljs.core.chunk_rest.call(null,s__25822__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25824),null);
}
} else
{var x = cljs.core.first.call(null,s__25822__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__25821.call(null,cljs.core.rest.call(null,s__25822__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9387__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25816);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list25826 = (function ordered_list25826(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__9387__auto__ = (function iter__25831(s__25832){return (new cljs.core.LazySeq(null,(function (){var s__25832__$1 = s__25832;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25832__$1);if(temp__4126__auto__)
{var s__25832__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25832__$2))
{var c__9385__auto__ = cljs.core.chunk_first.call(null,s__25832__$2);var size__9386__auto__ = cljs.core.count.call(null,c__9385__auto__);var b__25834 = cljs.core.chunk_buffer.call(null,size__9386__auto__);if((function (){var i__25833 = 0;while(true){
if((i__25833 < size__9386__auto__))
{var x = cljs.core._nth.call(null,c__9385__auto__,i__25833);cljs.core.chunk_append.call(null,b__25834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__25835 = (i__25833 + 1);
i__25833 = G__25835;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25834),iter__25831.call(null,cljs.core.chunk_rest.call(null,s__25832__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25834),null);
}
} else
{var x = cljs.core.first.call(null,s__25832__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__25831.call(null,cljs.core.rest.call(null,s__25832__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9387__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25826);
/**
* Create an image element.
*/
sablono.core.image25836 = (function() {
var image25836 = null;
var image25836__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image25836__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image25836 = function(src,alt){
switch(arguments.length){
case 1:
return image25836__1.call(this,src);
case 2:
return image25836__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image25836.cljs$core$IFn$_invoke$arity$1 = image25836__1;
image25836.cljs$core$IFn$_invoke$arity$2 = image25836__2;
return image25836;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25836);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__25837_SHARP_,p2__25838_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25837_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25838_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__25839_SHARP_,p2__25840_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25839_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25840_SHARP_));
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
sablono.core.color_field25841 = (function() {
var color_field25841 = null;
var color_field25841__1 = (function (name__15164__auto__){return color_field25841.call(null,name__15164__auto__,null);
});
var color_field25841__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__15164__auto__,value__15165__auto__);
});
color_field25841 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return color_field25841__1.call(this,name__15164__auto__);
case 2:
return color_field25841__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field25841.cljs$core$IFn$_invoke$arity$1 = color_field25841__1;
color_field25841.cljs$core$IFn$_invoke$arity$2 = color_field25841__2;
return color_field25841;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25841);
/**
* Creates a date input field.
*/
sablono.core.date_field25842 = (function() {
var date_field25842 = null;
var date_field25842__1 = (function (name__15164__auto__){return date_field25842.call(null,name__15164__auto__,null);
});
var date_field25842__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__15164__auto__,value__15165__auto__);
});
date_field25842 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return date_field25842__1.call(this,name__15164__auto__);
case 2:
return date_field25842__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field25842.cljs$core$IFn$_invoke$arity$1 = date_field25842__1;
date_field25842.cljs$core$IFn$_invoke$arity$2 = date_field25842__2;
return date_field25842;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25842);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field25843 = (function() {
var datetime_field25843 = null;
var datetime_field25843__1 = (function (name__15164__auto__){return datetime_field25843.call(null,name__15164__auto__,null);
});
var datetime_field25843__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__15164__auto__,value__15165__auto__);
});
datetime_field25843 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return datetime_field25843__1.call(this,name__15164__auto__);
case 2:
return datetime_field25843__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field25843.cljs$core$IFn$_invoke$arity$1 = datetime_field25843__1;
datetime_field25843.cljs$core$IFn$_invoke$arity$2 = datetime_field25843__2;
return datetime_field25843;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25843);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field25844 = (function() {
var datetime_local_field25844 = null;
var datetime_local_field25844__1 = (function (name__15164__auto__){return datetime_local_field25844.call(null,name__15164__auto__,null);
});
var datetime_local_field25844__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__15164__auto__,value__15165__auto__);
});
datetime_local_field25844 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return datetime_local_field25844__1.call(this,name__15164__auto__);
case 2:
return datetime_local_field25844__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field25844.cljs$core$IFn$_invoke$arity$1 = datetime_local_field25844__1;
datetime_local_field25844.cljs$core$IFn$_invoke$arity$2 = datetime_local_field25844__2;
return datetime_local_field25844;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25844);
/**
* Creates a email input field.
*/
sablono.core.email_field25845 = (function() {
var email_field25845 = null;
var email_field25845__1 = (function (name__15164__auto__){return email_field25845.call(null,name__15164__auto__,null);
});
var email_field25845__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__15164__auto__,value__15165__auto__);
});
email_field25845 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return email_field25845__1.call(this,name__15164__auto__);
case 2:
return email_field25845__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field25845.cljs$core$IFn$_invoke$arity$1 = email_field25845__1;
email_field25845.cljs$core$IFn$_invoke$arity$2 = email_field25845__2;
return email_field25845;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25845);
/**
* Creates a file input field.
*/
sablono.core.file_field25846 = (function() {
var file_field25846 = null;
var file_field25846__1 = (function (name__15164__auto__){return file_field25846.call(null,name__15164__auto__,null);
});
var file_field25846__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__15164__auto__,value__15165__auto__);
});
file_field25846 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return file_field25846__1.call(this,name__15164__auto__);
case 2:
return file_field25846__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field25846.cljs$core$IFn$_invoke$arity$1 = file_field25846__1;
file_field25846.cljs$core$IFn$_invoke$arity$2 = file_field25846__2;
return file_field25846;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25846);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field25847 = (function() {
var hidden_field25847 = null;
var hidden_field25847__1 = (function (name__15164__auto__){return hidden_field25847.call(null,name__15164__auto__,null);
});
var hidden_field25847__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__15164__auto__,value__15165__auto__);
});
hidden_field25847 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return hidden_field25847__1.call(this,name__15164__auto__);
case 2:
return hidden_field25847__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field25847.cljs$core$IFn$_invoke$arity$1 = hidden_field25847__1;
hidden_field25847.cljs$core$IFn$_invoke$arity$2 = hidden_field25847__2;
return hidden_field25847;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25847);
/**
* Creates a month input field.
*/
sablono.core.month_field25848 = (function() {
var month_field25848 = null;
var month_field25848__1 = (function (name__15164__auto__){return month_field25848.call(null,name__15164__auto__,null);
});
var month_field25848__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__15164__auto__,value__15165__auto__);
});
month_field25848 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return month_field25848__1.call(this,name__15164__auto__);
case 2:
return month_field25848__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field25848.cljs$core$IFn$_invoke$arity$1 = month_field25848__1;
month_field25848.cljs$core$IFn$_invoke$arity$2 = month_field25848__2;
return month_field25848;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25848);
/**
* Creates a number input field.
*/
sablono.core.number_field25849 = (function() {
var number_field25849 = null;
var number_field25849__1 = (function (name__15164__auto__){return number_field25849.call(null,name__15164__auto__,null);
});
var number_field25849__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__15164__auto__,value__15165__auto__);
});
number_field25849 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return number_field25849__1.call(this,name__15164__auto__);
case 2:
return number_field25849__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field25849.cljs$core$IFn$_invoke$arity$1 = number_field25849__1;
number_field25849.cljs$core$IFn$_invoke$arity$2 = number_field25849__2;
return number_field25849;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25849);
/**
* Creates a password input field.
*/
sablono.core.password_field25850 = (function() {
var password_field25850 = null;
var password_field25850__1 = (function (name__15164__auto__){return password_field25850.call(null,name__15164__auto__,null);
});
var password_field25850__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__15164__auto__,value__15165__auto__);
});
password_field25850 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return password_field25850__1.call(this,name__15164__auto__);
case 2:
return password_field25850__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field25850.cljs$core$IFn$_invoke$arity$1 = password_field25850__1;
password_field25850.cljs$core$IFn$_invoke$arity$2 = password_field25850__2;
return password_field25850;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25850);
/**
* Creates a range input field.
*/
sablono.core.range_field25851 = (function() {
var range_field25851 = null;
var range_field25851__1 = (function (name__15164__auto__){return range_field25851.call(null,name__15164__auto__,null);
});
var range_field25851__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__15164__auto__,value__15165__auto__);
});
range_field25851 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return range_field25851__1.call(this,name__15164__auto__);
case 2:
return range_field25851__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field25851.cljs$core$IFn$_invoke$arity$1 = range_field25851__1;
range_field25851.cljs$core$IFn$_invoke$arity$2 = range_field25851__2;
return range_field25851;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25851);
/**
* Creates a search input field.
*/
sablono.core.search_field25852 = (function() {
var search_field25852 = null;
var search_field25852__1 = (function (name__15164__auto__){return search_field25852.call(null,name__15164__auto__,null);
});
var search_field25852__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__15164__auto__,value__15165__auto__);
});
search_field25852 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return search_field25852__1.call(this,name__15164__auto__);
case 2:
return search_field25852__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field25852.cljs$core$IFn$_invoke$arity$1 = search_field25852__1;
search_field25852.cljs$core$IFn$_invoke$arity$2 = search_field25852__2;
return search_field25852;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25852);
/**
* Creates a tel input field.
*/
sablono.core.tel_field25853 = (function() {
var tel_field25853 = null;
var tel_field25853__1 = (function (name__15164__auto__){return tel_field25853.call(null,name__15164__auto__,null);
});
var tel_field25853__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__15164__auto__,value__15165__auto__);
});
tel_field25853 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return tel_field25853__1.call(this,name__15164__auto__);
case 2:
return tel_field25853__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field25853.cljs$core$IFn$_invoke$arity$1 = tel_field25853__1;
tel_field25853.cljs$core$IFn$_invoke$arity$2 = tel_field25853__2;
return tel_field25853;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25853);
/**
* Creates a text input field.
*/
sablono.core.text_field25854 = (function() {
var text_field25854 = null;
var text_field25854__1 = (function (name__15164__auto__){return text_field25854.call(null,name__15164__auto__,null);
});
var text_field25854__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__15164__auto__,value__15165__auto__);
});
text_field25854 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return text_field25854__1.call(this,name__15164__auto__);
case 2:
return text_field25854__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field25854.cljs$core$IFn$_invoke$arity$1 = text_field25854__1;
text_field25854.cljs$core$IFn$_invoke$arity$2 = text_field25854__2;
return text_field25854;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25854);
/**
* Creates a time input field.
*/
sablono.core.time_field25855 = (function() {
var time_field25855 = null;
var time_field25855__1 = (function (name__15164__auto__){return time_field25855.call(null,name__15164__auto__,null);
});
var time_field25855__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__15164__auto__,value__15165__auto__);
});
time_field25855 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return time_field25855__1.call(this,name__15164__auto__);
case 2:
return time_field25855__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field25855.cljs$core$IFn$_invoke$arity$1 = time_field25855__1;
time_field25855.cljs$core$IFn$_invoke$arity$2 = time_field25855__2;
return time_field25855;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25855);
/**
* Creates a url input field.
*/
sablono.core.url_field25856 = (function() {
var url_field25856 = null;
var url_field25856__1 = (function (name__15164__auto__){return url_field25856.call(null,name__15164__auto__,null);
});
var url_field25856__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__15164__auto__,value__15165__auto__);
});
url_field25856 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return url_field25856__1.call(this,name__15164__auto__);
case 2:
return url_field25856__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field25856.cljs$core$IFn$_invoke$arity$1 = url_field25856__1;
url_field25856.cljs$core$IFn$_invoke$arity$2 = url_field25856__2;
return url_field25856;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25856);
/**
* Creates a week input field.
*/
sablono.core.week_field25857 = (function() {
var week_field25857 = null;
var week_field25857__1 = (function (name__15164__auto__){return week_field25857.call(null,name__15164__auto__,null);
});
var week_field25857__2 = (function (name__15164__auto__,value__15165__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__15164__auto__,value__15165__auto__);
});
week_field25857 = function(name__15164__auto__,value__15165__auto__){
switch(arguments.length){
case 1:
return week_field25857__1.call(this,name__15164__auto__);
case 2:
return week_field25857__2.call(this,name__15164__auto__,value__15165__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field25857.cljs$core$IFn$_invoke$arity$1 = week_field25857__1;
week_field25857.cljs$core$IFn$_invoke$arity$2 = week_field25857__2;
return week_field25857;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25857);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box25858 = (function() {
var check_box25858 = null;
var check_box25858__1 = (function (name){return check_box25858.call(null,name,null);
});
var check_box25858__2 = (function (name,checked_QMARK_){return check_box25858.call(null,name,checked_QMARK_,"true");
});
var check_box25858__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box25858 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box25858__1.call(this,name);
case 2:
return check_box25858__2.call(this,name,checked_QMARK_);
case 3:
return check_box25858__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box25858.cljs$core$IFn$_invoke$arity$1 = check_box25858__1;
check_box25858.cljs$core$IFn$_invoke$arity$2 = check_box25858__2;
check_box25858.cljs$core$IFn$_invoke$arity$3 = check_box25858__3;
return check_box25858;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25858);
/**
* Creates a radio button.
*/
sablono.core.radio_button25859 = (function() {
var radio_button25859 = null;
var radio_button25859__1 = (function (group){return radio_button25859.call(null,group,null);
});
var radio_button25859__2 = (function (group,checked_QMARK_){return radio_button25859.call(null,group,checked_QMARK_,"true");
});
var radio_button25859__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button25859 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button25859__1.call(this,group);
case 2:
return radio_button25859__2.call(this,group,checked_QMARK_);
case 3:
return radio_button25859__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button25859.cljs$core$IFn$_invoke$arity$1 = radio_button25859__1;
radio_button25859.cljs$core$IFn$_invoke$arity$2 = radio_button25859__2;
radio_button25859.cljs$core$IFn$_invoke$arity$3 = radio_button25859__3;
return radio_button25859;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25859);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options25860 = (function() {
var select_options25860 = null;
var select_options25860__1 = (function (coll){return select_options25860.call(null,coll,null);
});
var select_options25860__2 = (function (coll,selected){var iter__9387__auto__ = (function iter__25869(s__25870){return (new cljs.core.LazySeq(null,(function (){var s__25870__$1 = s__25870;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25870__$1);if(temp__4126__auto__)
{var s__25870__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25870__$2))
{var c__9385__auto__ = cljs.core.chunk_first.call(null,s__25870__$2);var size__9386__auto__ = cljs.core.count.call(null,c__9385__auto__);var b__25872 = cljs.core.chunk_buffer.call(null,size__9386__auto__);if((function (){var i__25871 = 0;while(true){
if((i__25871 < size__9386__auto__))
{var x = cljs.core._nth.call(null,c__9385__auto__,i__25871);cljs.core.chunk_append.call(null,b__25872,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25875 = x;var text = cljs.core.nth.call(null,vec__25875,0,null);var val = cljs.core.nth.call(null,vec__25875,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__25875,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options25860.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__25877 = (i__25871 + 1);
i__25871 = G__25877;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25872),iter__25869.call(null,cljs.core.chunk_rest.call(null,s__25870__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25872),null);
}
} else
{var x = cljs.core.first.call(null,s__25870__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25876 = x;var text = cljs.core.nth.call(null,vec__25876,0,null);var val = cljs.core.nth.call(null,vec__25876,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__25876,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options25860.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__25869.call(null,cljs.core.rest.call(null,s__25870__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9387__auto__.call(null,coll);
});
select_options25860 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options25860__1.call(this,coll);
case 2:
return select_options25860__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options25860.cljs$core$IFn$_invoke$arity$1 = select_options25860__1;
select_options25860.cljs$core$IFn$_invoke$arity$2 = select_options25860__2;
return select_options25860;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25860);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down25878 = (function() {
var drop_down25878 = null;
var drop_down25878__2 = (function (name,options){return drop_down25878.call(null,name,options,null);
});
var drop_down25878__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down25878 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down25878__2.call(this,name,options);
case 3:
return drop_down25878__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down25878.cljs$core$IFn$_invoke$arity$2 = drop_down25878__2;
drop_down25878.cljs$core$IFn$_invoke$arity$3 = drop_down25878__3;
return drop_down25878;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25878);
/**
* Creates a text area element.
*/
sablono.core.text_area25879 = (function() {
var text_area25879 = null;
var text_area25879__1 = (function (name){return text_area25879.call(null,name,null);
});
var text_area25879__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area25879 = function(name,value){
switch(arguments.length){
case 1:
return text_area25879__1.call(this,name);
case 2:
return text_area25879__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area25879.cljs$core$IFn$_invoke$arity$1 = text_area25879__1;
text_area25879.cljs$core$IFn$_invoke$arity$2 = text_area25879__2;
return text_area25879;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25879);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label25880 = (function label25880(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25880);
/**
* Creates a submit button.
*/
sablono.core.submit_button25881 = (function submit_button25881(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25881);
/**
* Creates a form reset button.
*/
sablono.core.reset_button25882 = (function reset_button25882(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25882);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to25883 = (function() { 
var form_to25883__delegate = function (p__25884,body){var vec__25886 = p__25884;var method = cljs.core.nth.call(null,vec__25886,0,null);var action = cljs.core.nth.call(null,vec__25886,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to25883 = function (p__25884,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to25883__delegate.call(this,p__25884,body);};
form_to25883.cljs$lang$maxFixedArity = 1;
form_to25883.cljs$lang$applyTo = (function (arglist__25887){
var p__25884 = cljs.core.first(arglist__25887);
var body = cljs.core.rest(arglist__25887);
return form_to25883__delegate(p__25884,body);
});
form_to25883.cljs$core$IFn$_invoke$arity$variadic = form_to25883__delegate;
return form_to25883;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25883);
