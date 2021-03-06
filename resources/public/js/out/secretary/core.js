// Compiled by ClojureScript 0.0-2202
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core.IRouteMatches = (function (){var obj21848 = {};return obj21848;
})();
secretary.core.route_matches = (function route_matches(this$,route){if((function (){var and__7868__auto__ = this$;if(and__7868__auto__)
{return this$.secretary$core$IRouteMatches$route_matches$arity$2;
} else
{return and__7868__auto__;
}
})())
{return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else
{var x__8507__auto__ = (((this$ == null))?null:this$);return (function (){var or__7880__auto__ = (secretary.core.route_matches[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (secretary.core.route_matches["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});
secretary.core.IRouteValue = (function (){var obj21850 = {};return obj21850;
})();
secretary.core.route_value = (function route_value(this$){if((function (){var and__7868__auto__ = this$;if(and__7868__auto__)
{return this$.secretary$core$IRouteValue$route_value$arity$1;
} else
{return and__7868__auto__;
}
})())
{return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else
{var x__8507__auto__ = (((this$ == null))?null:this$);return (function (){var or__7880__auto__ = (secretary.core.route_value[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (secretary.core.route_value["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRouteValue.route-value",this$);
}
}
})().call(null,this$);
}
});
secretary.core.IRenderRoute = (function (){var obj21852 = {};return obj21852;
})();
secretary.core.render_route = (function() {
var render_route = null;
var render_route__1 = (function (this$){if((function (){var and__7868__auto__ = this$;if(and__7868__auto__)
{return this$.secretary$core$IRenderRoute$render_route$arity$1;
} else
{return and__7868__auto__;
}
})())
{return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else
{var x__8507__auto__ = (((this$ == null))?null:this$);return (function (){var or__7880__auto__ = (secretary.core.render_route[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (secretary.core.render_route["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
})().call(null,this$);
}
});
var render_route__2 = (function (this$,params){if((function (){var and__7868__auto__ = this$;if(and__7868__auto__)
{return this$.secretary$core$IRenderRoute$render_route$arity$2;
} else
{return and__7868__auto__;
}
})())
{return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else
{var x__8507__auto__ = (((this$ == null))?null:this$);return (function (){var or__7880__auto__ = (secretary.core.render_route[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (secretary.core.render_route["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
})().call(null,this$,params);
}
});
render_route = function(this$,params){
switch(arguments.length){
case 1:
return render_route__1.call(this,this$);
case 2:
return render_route__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_route.cljs$core$IFn$_invoke$arity$1 = render_route__1;
render_route.cljs$core$IFn$_invoke$arity$2 = render_route__2;
return render_route;
})()
;
secretary.core._STAR_config_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836),""], null));
/**
* Gets a value for *config* at path.
*/
secretary.core.get_config = (function get_config(path){var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.get_in.call(null,cljs.core.deref.call(null,secretary.core._STAR_config_STAR_),path__$1);
});
/**
* Associates a value val for *config* at path.
*/
secretary.core.set_config_BANG_ = (function set_config_BANG_(path,val){var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.swap_BANG_.call(null,secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
/**
* Given a key and a value return and encoded key-value pair.
*/
secretary.core.encode_pair = (function (){var method_table__8738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("encode-pair",((function (method_table__8738__auto__,prefer_table__8739__auto__,method_cache__8740__auto__,cached_hierarchy__8741__auto__,hierarchy__8742__auto__){
return (function (p__21853){var vec__21854 = p__21853;var k = cljs.core.nth.call(null,vec__21854,0,null);var v = cljs.core.nth.call(null,vec__21854,1,null);if((cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)))
{return new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",1410725665);
} else
{if((function (){var or__7880__auto__ = cljs.core.map_QMARK_.call(null,v);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var G__21856 = v;if(G__21856)
{var bit__8530__auto__ = (G__21856.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__8530__auto__) || (G__21856.cljs$core$IRecord$))
{return true;
} else
{if((!G__21856.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__21856);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__21856);
}
}
})())
{return new cljs.core.Keyword("secretary.core","map","secretary.core/map",572371848);
} else
{return null;
}
}
});})(method_table__8738__auto__,prefer_table__8739__auto__,method_cache__8740__auto__,cached_hierarchy__8741__auto__,hierarchy__8742__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8742__auto__,method_table__8738__auto__,prefer_table__8739__auto__,method_cache__8740__auto__,cached_hierarchy__8741__auto__));
})();
secretary.core.key_index = (function() {
var key_index = null;
var key_index__1 = (function (k){return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("[]")].join('');
});
var key_index__2 = (function (k,index){return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});
key_index = function(k,index){
switch(arguments.length){
case 1:
return key_index__1.call(this,k);
case 2:
return key_index__2.call(this,k,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
key_index.cljs$core$IFn$_invoke$arity$1 = key_index__1;
key_index.cljs$core$IFn$_invoke$arity$2 = key_index__2;
return key_index;
})()
;
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",1410725665),(function (p__21857){var vec__21858 = p__21857;var k = cljs.core.nth.call(null,vec__21858,0,null);var v = cljs.core.nth.call(null,vec__21858,1,null);var encoded = cljs.core.map_indexed.call(null,((function (vec__21858,k,v){
return (function (i,x){var pair = ((cljs.core.coll_QMARK_.call(null,x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k),x], null));return secretary.core.encode_pair.call(null,pair);
});})(vec__21858,k,v))
,v);return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","map","secretary.core/map",572371848),(function (p__21859){var vec__21860 = p__21859;var k = cljs.core.nth.call(null,vec__21860,0,null);var v = cljs.core.nth.call(null,vec__21860,1,null);var encoded = cljs.core.map.call(null,((function (vec__21860,k,v){
return (function (p__21861){var vec__21862 = p__21861;var ik = cljs.core.nth.call(null,vec__21862,0,null);var iv = cljs.core.nth.call(null,vec__21862,1,null);return secretary.core.encode_pair.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,cljs.core.name.call(null,ik)),iv], null));
});})(vec__21860,k,v))
,v);return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword(null,"default","default",2558708147),(function (p__21863){var vec__21864 = p__21863;var k = cljs.core.nth.call(null,vec__21864,0,null);var v = cljs.core.nth.call(null,vec__21864,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(secretary.core.encode.call(null,[cljs.core.str(v)].join('')))].join('');
}));
/**
* Convert a map of query parameters into url encoded string.
*/
secretary.core.encode_query_params = (function encode_query_params(query_params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,secretary.core.encode_pair,query_params));
});
/**
* Like js/encodeURIComponent excepts ignore slashes.
*/
secretary.core.encode_uri = (function encode_uri(uri){return clojure.string.join.call(null,"/",cljs.core.map.call(null,secretary.core.encode,clojure.string.split.call(null,uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
* Parse a value from a serialized query-string key index. If the
* index value is empty 0 is returned, if it's a digit it returns the
* js/parseInt value, otherwise it returns the extracted index.
*/
secretary.core.parse_path = (function parse_path(path){var index_re = /\[([^\]]*)\]*/;var parts = cljs.core.re_seq.call(null,index_re,path);return cljs.core.map.call(null,((function (index_re,parts){
return (function (p__21867){var vec__21868 = p__21867;var _ = cljs.core.nth.call(null,vec__21868,0,null);var part = cljs.core.nth.call(null,vec__21868,1,null);if(cljs.core.empty_QMARK_.call(null,part))
{return 0;
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,part)))
{return parseInt(part);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return part;
} else
{return null;
}
}
}
});})(index_re,parts))
,parts);
});
/**
* Return a key path for a serialized query-string entry.
* 
* Ex.
* 
* (key-parse "foo[][a][][b]")
* ;; => ("foo" 0 "a" 0 "b")
* 
*/
secretary.core.key_parse = (function key_parse(k){var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;var vec__21870 = cljs.core.re_matches.call(null,re,k);var _ = cljs.core.nth.call(null,vec__21870,0,null);var key = cljs.core.nth.call(null,vec__21870,1,null);var path = cljs.core.nth.call(null,vec__21870,2,null);var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path.call(null,path):null);return cljs.core.cons.call(null,key,parsed_path);
});
/**
* Like assoc-in but numbers in path create vectors instead of maps.
* 
* Ex.
* 
* (assoc-in-query-params {} ["foo" 0] 1)
* ;; => {"foo" [1]}
* 
* (assoc-in-query-params {} ["foo" 0 "a"] 1)
* ;; => {"foo" [{"a" 1}]}
* 
*/
secretary.core.assoc_in_query_params = (function assoc_in_query_params(m,path,v){var heads = (function (xs){return cljs.core.map_indexed.call(null,(function (i,_){return cljs.core.take.call(null,(i + 1),xs);
}),xs);
});var hs = heads.call(null,path);var m__$1 = cljs.core.reduce.call(null,((function (heads,hs){
return (function (m__$1,h){if((typeof cljs.core.last.call(null,h) === 'number') && (!(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,m__$1,cljs.core.butlast.call(null,h))))))
{return cljs.core.assoc_in.call(null,m__$1,cljs.core.butlast.call(null,h),cljs.core.PersistentVector.EMPTY);
} else
{return m__$1;
}
});})(heads,hs))
,m,hs);if((cljs.core.last.call(null,path) === 0))
{return cljs.core.update_in.call(null,m__$1,cljs.core.butlast.call(null,path),cljs.core.conj,v);
} else
{return cljs.core.assoc_in.call(null,m__$1,path,v);
}
});
/**
* Extract a map of query parameters from a query string.
*/
secretary.core.decode_query_params = (function decode_query_params(query_string){var parts = clojure.string.split.call(null,query_string,/&/);var params = cljs.core.reduce.call(null,((function (parts){
return (function (m,part){var vec__21872 = clojure.string.split.call(null,part,/=/,2);var k = cljs.core.nth.call(null,vec__21872,0,null);var v = cljs.core.nth.call(null,vec__21872,1,null);return secretary.core.assoc_in_query_params.call(null,m,secretary.core.key_parse.call(null,k),secretary.core.decode.call(null,v));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);var params__$1 = clojure.walk.keywordize_keys.call(null,params);return params__$1;
});
/**
* Like re-matches but result is a always vector. If re does not
* capture matches then it will return a vector of [m m] as if it had a
* single capture. Other wise it maintains consistent behavior with
* re-matches.
*/
secretary.core.re_matches_STAR_ = (function re_matches_STAR_(re,s){var ms = cljs.core.re_matches.call(null,re,s);if(cljs.core.truth_(ms))
{if(cljs.core.sequential_QMARK_.call(null,ms))
{return ms;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else
{return null;
}
});
secretary.core.re_escape_chars = cljs.core.set.call(null,"\\.*+|?()[]{}$^");
secretary.core.re_escape = (function re_escape(s){return cljs.core.reduce.call(null,(function (s__$1,c){if(cljs.core.truth_(secretary.core.re_escape_chars.call(null,c)))
{return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else
{return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
* Attempt to lex a single token from s with clauses. Each clause is a
* pair of [regexp action] where action is a function. regexp is
* expected to begin with ^ and contain a single capture. If the
* attempt is successful a vector of [s-without-token (action capture)]
* is returned. Otherwise the result is nil.
*/
secretary.core.lex_STAR_ = (function lex_STAR_(s,clauses){return cljs.core.some.call(null,(function (p__21876){var vec__21877 = p__21876;var re = cljs.core.nth.call(null,vec__21877,0,null);var action = cljs.core.nth.call(null,vec__21877,1,null);var temp__4126__auto__ = cljs.core.re_find.call(null,re,s);if(cljs.core.truth_(temp__4126__auto__))
{var vec__21878 = temp__4126__auto__;var m = cljs.core.nth.call(null,vec__21878,0,null);var c = cljs.core.nth.call(null,vec__21878,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,cljs.core.count.call(null,m)),action.call(null,c)], null);
} else
{return null;
}
}),clauses);
});
/**
* Return a pair of [regex params]. regex is a compiled regular
* expression for matching routes. params is a list of route param
* names (:*, :id, etc.).
*/
secretary.core.lex_route = (function lex_route(s,clauses){var s__$1 = s;var pattern = "";var params = cljs.core.PersistentVector.EMPTY;while(true){
if(cljs.core.seq.call(null,s__$1))
{var vec__21881 = secretary.core.lex_STAR_.call(null,s__$1,clauses);var s__$2 = cljs.core.nth.call(null,vec__21881,0,null);var vec__21882 = cljs.core.nth.call(null,vec__21881,1,null);var r = cljs.core.nth.call(null,vec__21882,0,null);var p = cljs.core.nth.call(null,vec__21882,1,null);{
var G__21883 = s__$2;
var G__21884 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__21885 = cljs.core.conj.call(null,params,p);
s__$1 = G__21883;
pattern = G__21884;
params = G__21885;
continue;
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.call(null,cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
* Given a route return an instance of IRouteMatches.
*/
secretary.core.compile_route = (function compile_route(orig_route){var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){var r = "(.*?)";var p = ((cljs.core.seq.call(null,v))?cljs.core.keyword.call(null,v):new cljs.core.Keyword(null,"*","*",1013904284));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){var r = "([^,;?/]+)";var p = cljs.core.keyword.call(null,v);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){var r = secretary.core.re_escape.call(null,v);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);var vec__21891 = secretary.core.lex_route.call(null,orig_route,clauses);var re = cljs.core.nth.call(null,vec__21891,0,null);var params = cljs.core.nth.call(null,vec__21891,1,null);if(typeof secretary.core.t21892 !== 'undefined')
{} else
{
/**
* @constructor
*/
secretary.core.t21892 = (function (params,re,vec__21891,clauses,orig_route,compile_route,meta21893){
this.params = params;
this.re = re;
this.vec__21891 = vec__21891;
this.clauses = clauses;
this.orig_route = orig_route;
this.compile_route = compile_route;
this.meta21893 = meta21893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
secretary.core.t21892.cljs$lang$type = true;
secretary.core.t21892.cljs$lang$ctorStr = "secretary.core/t21892";
secretary.core.t21892.cljs$lang$ctorPrWriter = ((function (clauses,vec__21891,re,params){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"secretary.core/t21892");
});})(clauses,vec__21891,re,params))
;
secretary.core.t21892.prototype.secretary$core$IRouteMatches$ = true;
secretary.core.t21892.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__21891,re,params){
return (function (_,route){var self__ = this;
var ___$1 = this;var temp__4126__auto__ = secretary.core.re_matches_STAR_.call(null,self__.re,route);if(cljs.core.truth_(temp__4126__auto__))
{var vec__21895 = temp__4126__auto__;var ___$2 = cljs.core.nth.call(null,vec__21895,0,null);var ms = cljs.core.nthnext.call(null,vec__21895,1);return cljs.core.merge_with.call(null,cljs.core.vector,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,self__.params,cljs.core.map.call(null,secretary.core.decode,ms))));
} else
{return null;
}
});})(clauses,vec__21891,re,params))
;
secretary.core.t21892.prototype.secretary$core$IRouteValue$ = true;
secretary.core.t21892.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__21891,re,params){
return (function (this$){var self__ = this;
var this$__$1 = this;return self__.orig_route;
});})(clauses,vec__21891,re,params))
;
secretary.core.t21892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__21891,re,params){
return (function (_21894){var self__ = this;
var _21894__$1 = this;return self__.meta21893;
});})(clauses,vec__21891,re,params))
;
secretary.core.t21892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__21891,re,params){
return (function (_21894,meta21893__$1){var self__ = this;
var _21894__$1 = this;return (new secretary.core.t21892(self__.params,self__.re,self__.vec__21891,self__.clauses,self__.orig_route,self__.compile_route,meta21893__$1));
});})(clauses,vec__21891,re,params))
;
secretary.core.__GT_t21892 = ((function (clauses,vec__21891,re,params){
return (function __GT_t21892(params__$1,re__$1,vec__21891__$1,clauses__$1,orig_route__$1,compile_route__$1,meta21893){return (new secretary.core.t21892(params__$1,re__$1,vec__21891__$1,clauses__$1,orig_route__$1,compile_route__$1,meta21893));
});})(clauses,vec__21891,re,params))
;
}
return (new secretary.core.t21892(params,re,vec__21891,clauses,orig_route,compile_route,null));
});
/**
* @param {...*} var_args
*/
secretary.core.render_route_STAR_ = (function() { 
var render_route_STAR___delegate = function (obj,args){if((function (){var G__21897 = obj;if(G__21897)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__21897.secretary$core$IRenderRoute$;
}
})()))
{return true;
} else
{if((!G__21897.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,G__21897);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,G__21897);
}
})())
{return cljs.core.apply.call(null,secretary.core.render_route,obj,args);
} else
{return null;
}
};
var render_route_STAR_ = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return render_route_STAR___delegate.call(this,obj,args);};
render_route_STAR_.cljs$lang$maxFixedArity = 1;
render_route_STAR_.cljs$lang$applyTo = (function (arglist__21898){
var obj = cljs.core.first(arglist__21898);
var args = cljs.core.rest(arglist__21898);
return render_route_STAR___delegate(obj,args);
});
render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = render_route_STAR___delegate;
return render_route_STAR_;
})()
;
secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function add_route_BANG_(obj,action){var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route.call(null,obj):obj);return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function remove_route_BANG_(obj){return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,(function (rs){return cljs.core.filterv.call(null,(function (p__21901){var vec__21902 = p__21901;var x = cljs.core.nth.call(null,vec__21902,0,null);var _ = cljs.core.nth.call(null,vec__21902,1,null);return cljs.core.not_EQ_.call(null,x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function reset_routes_BANG_(){return cljs.core.reset_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function locate_route(route){return cljs.core.some.call(null,(function (p__21905){var vec__21906 = p__21905;var compiled_route = cljs.core.nth.call(null,vec__21906,0,null);var action = cljs.core.nth.call(null,vec__21906,1,null);var temp__4126__auto__ = secretary.core.route_matches.call(null,compiled_route,route);if(cljs.core.truth_(temp__4126__auto__))
{var params = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",3885920680),action,new cljs.core.Keyword(null,"params","params",4313443576),params,new cljs.core.Keyword(null,"route","route",1122608571),compiled_route], null);
} else
{return null;
}
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
* Returns original route value as set in defroute when passed a URI path.
*/
secretary.core.locate_route_value = (function locate_route_value(uri){return secretary.core.route_value.call(null,new cljs.core.Keyword(null,"route","route",1122608571).cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route.call(null,uri)));
});
/**
* Dispatch an action for a given route if it matches the URI path.
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri){var vec__21909 = clojure.string.split.call(null,uri,/\?/);var uri_path = cljs.core.nth.call(null,vec__21909,0,null);var query_string = cljs.core.nth.call(null,vec__21909,1,null);var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),secretary.core.decode_query_params.call(null,query_string)], null):null);var map__21910 = secretary.core.locate_route.call(null,uri_path);var map__21910__$1 = ((cljs.core.seq_QMARK_.call(null,map__21910))?cljs.core.apply.call(null,cljs.core.hash_map,map__21910):map__21910);var params = cljs.core.get.call(null,map__21910__$1,new cljs.core.Keyword(null,"params","params",4313443576));var action = cljs.core.get.call(null,map__21910__$1,new cljs.core.Keyword(null,"action","action",3885920680));var action__$1 = (function (){var or__7880__auto__ = action;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.identity;
}
})();var params__$1 = cljs.core.merge.call(null,params,query_params);return action__$1.call(null,params__$1);
});
RegExp.prototype.secretary$core$IRouteMatches$ = true;
RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){var this$__$1 = this;var temp__4126__auto__ = secretary.core.re_matches_STAR_.call(null,this$__$1,route);if(cljs.core.truth_(temp__4126__auto__))
{var vec__21911 = temp__4126__auto__;var _ = cljs.core.nth.call(null,vec__21911,0,null);var ms = cljs.core.nthnext.call(null,vec__21911,1);return cljs.core.vec.call(null,ms);
} else
{return null;
}
});
(secretary.core.IRouteMatches["string"] = true);
(secretary.core.route_matches["string"] = (function (this$,route){return secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,this$),route);
}));
RegExp.prototype.secretary$core$IRouteValue$ = true;
RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
(secretary.core.IRouteValue["string"] = true);
(secretary.core.route_value["string"] = (function (this$){return secretary.core.route_value.call(null,secretary.core.compile_route.call(null,this$));
}));
(secretary.core.IRenderRoute["string"] = true);
(secretary.core.render_route["string"] = (function (this$){return secretary.core.render_route.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);
}));
(secretary.core.render_route["string"] = (function (this$,params){var map__21912 = params;var map__21912__$1 = ((cljs.core.seq_QMARK_.call(null,map__21912))?cljs.core.apply.call(null,cljs.core.hash_map,map__21912):map__21912);var m = map__21912__$1;var query_params = cljs.core.get.call(null,map__21912__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var a = cljs.core.atom.call(null,m);var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__21912,map__21912__$1,m,query_params,a){
return (function ($1){var lookup = cljs.core.keyword.call(null,((cljs.core._EQ_.call(null,$1,"*"))?$1:cljs.core.subs.call(null,$1,1)));var v = cljs.core.deref.call(null,a).call(null,lookup);var replacement = ((cljs.core.sequential_QMARK_.call(null,v))?(function (){cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,lookup,cljs.core.next.call(null,v));
return secretary.core.encode_uri.call(null,cljs.core.first.call(null,v));
})():(cljs.core.truth_(v)?secretary.core.encode_uri.call(null,v):$1));return replacement;
});})(map__21912,map__21912__$1,m,query_params,a))
);var path__$1 = [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)], null))),cljs.core.str(path)].join('');var temp__4124__auto__ = (function (){var and__7868__auto__ = query_params;if(cljs.core.truth_(and__7868__auto__))
{return secretary.core.encode_query_params.call(null,query_params);
} else
{return and__7868__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var query_string = temp__4124__auto__;return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else
{return path__$1;
}
}));

//# sourceMappingURL=core.js.map