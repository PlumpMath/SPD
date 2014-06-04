// Compiled by ClojureScript 0.0-2202
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",1014018518),"http://www.w3.org/2000/svg"], null);
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function as_content(parent,content){var seq__16943 = cljs.core.seq.call(null,content);var chunk__16944 = null;var count__16945 = 0;var i__16946 = 0;while(true){
if((i__16946 < count__16945))
{var c = cljs.core._nth.call(null,chunk__16944,i__16946);var child_16947 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_16947))
{goog.dom.appendChild(parent,child_16947);
} else
{}
{
var G__16948 = seq__16943;
var G__16949 = chunk__16944;
var G__16950 = count__16945;
var G__16951 = (i__16946 + 1);
seq__16943 = G__16948;
chunk__16944 = G__16949;
count__16945 = G__16950;
i__16946 = G__16951;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16943);if(temp__4126__auto__)
{var seq__16943__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16943__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__16943__$1);{
var G__16952 = cljs.core.chunk_rest.call(null,seq__16943__$1);
var G__16953 = c__8628__auto__;
var G__16954 = cljs.core.count.call(null,c__8628__auto__);
var G__16955 = 0;
seq__16943 = G__16952;
chunk__16944 = G__16953;
count__16945 = G__16954;
i__16946 = G__16955;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__16943__$1);var child_16956 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_16956))
{goog.dom.appendChild(parent,child_16956);
} else
{}
{
var G__16957 = cljs.core.next.call(null,seq__16943__$1);
var G__16958 = null;
var G__16959 = 0;
var G__16960 = 0;
seq__16943 = G__16957;
chunk__16944 = G__16958;
count__16945 = G__16959;
i__16946 = G__16960;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_binding = (function (){var method_table__8738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dom-binding",((function (method_table__8738__auto__,prefer_table__8739__auto__,method_cache__8740__auto__,cached_hierarchy__8741__auto__,hierarchy__8742__auto__){
return (function (type,_,___$1){return type;
});})(method_table__8738__auto__,prefer_table__8739__auto__,method_cache__8740__auto__,cached_hierarchy__8741__auto__,hierarchy__8742__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8742__auto__,method_table__8738__auto__,prefer_table__8739__auto__,method_cache__8740__auto__,cached_hierarchy__8741__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",1017460895),(function (_,b,elem){return crate.binding.on_change.call(null,b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (_,p__16961,elem){var vec__16962 = p__16961;var k = cljs.core.nth.call(null,vec__16962,0,null);var b = cljs.core.nth.call(null,vec__16962,1,null);return crate.binding.on_change.call(null,b,((function (vec__16962,k,b){
return (function (v){return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__16962,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",1123684643),(function (_,p__16963,elem){var vec__16964 = p__16963;var k = cljs.core.nth.call(null,vec__16964,0,null);var b = cljs.core.nth.call(null,vec__16964,1,null);return crate.binding.on_change.call(null,b,((function (vec__16964,k,b){
return (function (v){if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__16964,k,b))
);
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",1014000659));if(cljs.core.truth_(temp__4124__auto__))
{var adder = temp__4124__auto__;return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",4374260726));if(cljs.core.truth_(temp__4124__auto__))
{var remover = temp__4124__auto__;return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1016963678),(function (_,bc,parent){return crate.binding.on_change.call(null,bc,(function (type,elem,v){var pred__16965 = cljs.core._EQ_;var expr__16966 = type;if(cljs.core.truth_(pred__16965.call(null,new cljs.core.Keyword(null,"add","add",1014000659),expr__16966)))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(cljs.core.truth_(pred__16965.call(null,new cljs.core.Keyword(null,"remove","remove",4374260726),expr__16966)))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16966)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__16974 = cljs.core.seq.call(null,bs);var chunk__16975 = null;var count__16976 = 0;var i__16977 = 0;while(true){
if((i__16977 < count__16976))
{var vec__16978 = cljs.core._nth.call(null,chunk__16975,i__16977);var type = cljs.core.nth.call(null,vec__16978,0,null);var b = cljs.core.nth.call(null,vec__16978,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__16980 = seq__16974;
var G__16981 = chunk__16975;
var G__16982 = count__16976;
var G__16983 = (i__16977 + 1);
seq__16974 = G__16980;
chunk__16975 = G__16981;
count__16976 = G__16982;
i__16977 = G__16983;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16974);if(temp__4126__auto__)
{var seq__16974__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16974__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__16974__$1);{
var G__16984 = cljs.core.chunk_rest.call(null,seq__16974__$1);
var G__16985 = c__8628__auto__;
var G__16986 = cljs.core.count.call(null,c__8628__auto__);
var G__16987 = 0;
seq__16974 = G__16984;
chunk__16975 = G__16985;
count__16976 = G__16986;
i__16977 = G__16987;
continue;
}
} else
{var vec__16979 = cljs.core.first.call(null,seq__16974__$1);var type = cljs.core.nth.call(null,vec__16979,0,null);var b = cljs.core.nth.call(null,vec__16979,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__16988 = cljs.core.next.call(null,seq__16974__$1);
var G__16989 = null;
var G__16990 = 0;
var G__16991 = 0;
seq__16974 = G__16988;
chunk__16975 = G__16989;
count__16976 = G__16990;
i__16977 = G__16991;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){if(typeof v === 'string')
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__16998_17004 = cljs.core.seq.call(null,v);var chunk__16999_17005 = null;var count__17000_17006 = 0;var i__17001_17007 = 0;while(true){
if((i__17001_17007 < count__17000_17006))
{var vec__17002_17008 = cljs.core._nth.call(null,chunk__16999_17005,i__17001_17007);var k_17009 = cljs.core.nth.call(null,vec__17002_17008,0,null);var v_17010__$1 = cljs.core.nth.call(null,vec__17002_17008,1,null);dom_style.call(null,elem,k_17009,v_17010__$1);
{
var G__17011 = seq__16998_17004;
var G__17012 = chunk__16999_17005;
var G__17013 = count__17000_17006;
var G__17014 = (i__17001_17007 + 1);
seq__16998_17004 = G__17011;
chunk__16999_17005 = G__17012;
count__17000_17006 = G__17013;
i__17001_17007 = G__17014;
continue;
}
} else
{var temp__4126__auto___17015 = cljs.core.seq.call(null,seq__16998_17004);if(temp__4126__auto___17015)
{var seq__16998_17016__$1 = temp__4126__auto___17015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16998_17016__$1))
{var c__8628__auto___17017 = cljs.core.chunk_first.call(null,seq__16998_17016__$1);{
var G__17018 = cljs.core.chunk_rest.call(null,seq__16998_17016__$1);
var G__17019 = c__8628__auto___17017;
var G__17020 = cljs.core.count.call(null,c__8628__auto___17017);
var G__17021 = 0;
seq__16998_17004 = G__17018;
chunk__16999_17005 = G__17019;
count__17000_17006 = G__17020;
i__17001_17007 = G__17021;
continue;
}
} else
{var vec__17003_17022 = cljs.core.first.call(null,seq__16998_17016__$1);var k_17023 = cljs.core.nth.call(null,vec__17003_17022,0,null);var v_17024__$1 = cljs.core.nth.call(null,vec__17003_17022,1,null);dom_style.call(null,elem,k_17023,v_17024__$1);
{
var G__17025 = cljs.core.next.call(null,seq__16998_17016__$1);
var G__17026 = null;
var G__17027 = 0;
var G__17028 = 0;
seq__16998_17004 = G__17025;
chunk__16999_17005 = G__17026;
count__17000_17006 = G__17027;
i__17001_17007 = G__17028;
continue;
}
}
} else
{}
}
break;
}
} else
{if(crate.binding.binding_QMARK_.call(null,v))
{crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__17035_17041 = cljs.core.seq.call(null,attrs);var chunk__17036_17042 = null;var count__17037_17043 = 0;var i__17038_17044 = 0;while(true){
if((i__17038_17044 < count__17037_17043))
{var vec__17039_17045 = cljs.core._nth.call(null,chunk__17036_17042,i__17038_17044);var k_17046 = cljs.core.nth.call(null,vec__17039_17045,0,null);var v_17047 = cljs.core.nth.call(null,vec__17039_17045,1,null);dom_attr.call(null,elem,k_17046,v_17047);
{
var G__17048 = seq__17035_17041;
var G__17049 = chunk__17036_17042;
var G__17050 = count__17037_17043;
var G__17051 = (i__17038_17044 + 1);
seq__17035_17041 = G__17048;
chunk__17036_17042 = G__17049;
count__17037_17043 = G__17050;
i__17038_17044 = G__17051;
continue;
}
} else
{var temp__4126__auto___17052 = cljs.core.seq.call(null,seq__17035_17041);if(temp__4126__auto___17052)
{var seq__17035_17053__$1 = temp__4126__auto___17052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17035_17053__$1))
{var c__8628__auto___17054 = cljs.core.chunk_first.call(null,seq__17035_17053__$1);{
var G__17055 = cljs.core.chunk_rest.call(null,seq__17035_17053__$1);
var G__17056 = c__8628__auto___17054;
var G__17057 = cljs.core.count.call(null,c__8628__auto___17054);
var G__17058 = 0;
seq__17035_17041 = G__17055;
chunk__17036_17042 = G__17056;
count__17037_17043 = G__17057;
i__17038_17044 = G__17058;
continue;
}
} else
{var vec__17040_17059 = cljs.core.first.call(null,seq__17035_17053__$1);var k_17060 = cljs.core.nth.call(null,vec__17040_17059,0,null);var v_17061 = cljs.core.nth.call(null,vec__17040_17059,1,null);dom_attr.call(null,elem,k_17060,v_17061);
{
var G__17062 = cljs.core.next.call(null,seq__17035_17053__$1);
var G__17063 = null;
var G__17064 = 0;
var G__17065 = 0;
seq__17035_17041 = G__17062;
chunk__17036_17042 = G__17063;
count__17037_17043 = G__17064;
i__17038_17044 = G__17065;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643)))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_17066__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);elem.setAttribute(cljs.core.name.call(null,k),v_17066__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__17069){var vec__17070 = p__17069;var n = cljs.core.nth.call(null,vec__17070,0,null);var v = cljs.core.nth.call(null,vec__17070,1,null);if(v === true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__17072){var vec__17077 = p__17072;var tag = cljs.core.nth.call(null,vec__17077,0,null);var content = cljs.core.nthnext.call(null,vec__17077,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__17078 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));var _ = cljs.core.nth.call(null,vec__17078,0,null);var tag__$1 = cljs.core.nth.call(null,vec__17078,1,null);var id = cljs.core.nth.call(null,vec__17078,2,null);var class$ = cljs.core.nth.call(null,vec__17078,3,null);var vec__17079 = (function (){var vec__17080 = clojure.string.split.call(null,tag__$1,/:/);var nsp = cljs.core.nth.call(null,vec__17080,0,null);var t = cljs.core.nth.call(null,vec__17080,1,null);var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));if(cljs.core.truth_(t))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7880__auto__ = ns_xmlns;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return nsp;
}
})(),t], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();var nsp = cljs.core.nth.call(null,vec__17079,0,null);var tag__$2 = cljs.core.nth.call(null,vec__17079,1,null);var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__17078,_,tag__$1,id,class$,vec__17079,nsp,tag__$2,vec__17077,tag,content){
return (function (p1__17071_SHARP_){return !((cljs.core.second.call(null,p1__17071_SHARP_) == null));
});})(vec__17078,_,tag__$1,id,class$,vec__17079,nsp,tag__$2,vec__17077,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(function (){var or__7880__auto__ = id;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return null;
}
})(),new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings17083 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__17084 = crate.compiler.normalize_element.call(null,tag_def);var nsp = cljs.core.nth.call(null,vec__17084,0,null);var tag = cljs.core.nth.call(null,vec__17084,1,null);var attrs = cljs.core.nth.call(null,vec__17084,2,null);var content = cljs.core.nth.call(null,vec__17084,3,null);var elem = crate.compiler.create_elem.call(null,nsp,tag);crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings17083;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__17087__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17086 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17086,0,null);var body = cljs.core.nthnext.call(null,vec__17086,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17087 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17087__delegate.call(this,args);};
G__17087.cljs$lang$maxFixedArity = 0;
G__17087.cljs$lang$applyTo = (function (arglist__17088){
var args = cljs.core.seq(arglist__17088);
return G__17087__delegate(args);
});
G__17087.cljs$core$IFn$_invoke$arity$variadic = G__17087__delegate;
return G__17087;
})()
;
});

//# sourceMappingURL=compiler.js.map