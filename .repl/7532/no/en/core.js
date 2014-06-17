// Compiled by ClojureScript 0.0-2234
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.crypt.base64');
goog.require('goog.crypt.base64');
goog.require('cljs.reader');
goog.require('clojure.string');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"http","http",1017117690),80,new cljs.core.Keyword(null,"https","https",1113521245),443,new cljs.core.Keyword(null,"mysql","mysql",1118286868),3306,new cljs.core.Keyword(null,"postgresql","postgresql",3203390150),5432,new cljs.core.Keyword(null,"rabbitmq","rabbitmq",918735536),5672], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?]*)(\?(.*))?)?)/;
/**
* Split the string `s` by the regex `pattern`.
*/
no.en.core.split_by_regex = (function split_by_regex(s,pattern){if(cljs.core.sequential_QMARK_.call(null,s))
{return s;
} else
{if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return clojure.string.split.call(null,s,pattern);
} else
{return null;
}
}
});
/**
* Split the string `s` by comma.
*/
no.en.core.split_by_comma = (function split_by_comma(s){return no.en.core.split_by_regex.call(null,s,/\s*,\s*/);
});
/**
* Returns `bytes` as an UTF-8 encoded string.
*/
no.en.core.utf8_string = (function utf8_string(bytes){throw cljs.core.ex_info.call(null,"utf8-string not implemented yet",bytes);
});
/**
* Returns `s` as a Base64 encoded string.
*/
no.en.core.base64_encode = (function base64_encode(bytes){if(cljs.core.truth_(bytes))
{return goog.crypt.base64.encodeString(bytes,false);
} else
{return null;
}
});
/**
* Returns `s` as a Base64 decoded string.
*/
no.en.core.base64_decode = (function base64_decode(s){if(cljs.core.truth_(s))
{return goog.crypt.base64.decodeString(s,false);
} else
{return null;
}
});
/**
* Returns `s` as an URL encoded string.
* @param {...*} var_args
*/
no.en.core.url_encode = (function() { 
var url_encode__delegate = function (s,p__21992){var vec__21994 = p__21992;var encoding = cljs.core.nth.call(null,vec__21994,0,null);if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,encodeURIComponent((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))),"*","%2A");
} else
{return null;
}
};
var url_encode = function (s,var_args){
var p__21992 = null;if (arguments.length > 1) {
  p__21992 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return url_encode__delegate.call(this,s,p__21992);};
url_encode.cljs$lang$maxFixedArity = 1;
url_encode.cljs$lang$applyTo = (function (arglist__21995){
var s = cljs.core.first(arglist__21995);
var p__21992 = cljs.core.rest(arglist__21995);
return url_encode__delegate(s,p__21992);
});
url_encode.cljs$core$IFn$_invoke$arity$variadic = url_encode__delegate;
return url_encode;
})()
;
/**
* Returns `s` as an URL decoded string.
* @param {...*} var_args
*/
no.en.core.url_decode = (function() { 
var url_decode__delegate = function (s,p__21996){var vec__21998 = p__21996;var encoding = cljs.core.nth.call(null,vec__21998,0,null);if(cljs.core.truth_(s))
{return decodeURIComponent(s);
} else
{return null;
}
};
var url_decode = function (s,var_args){
var p__21996 = null;if (arguments.length > 1) {
  p__21996 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return url_decode__delegate.call(this,s,p__21996);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__21999){
var s = cljs.core.first(arglist__21999);
var p__21996 = cljs.core.rest(arglist__21999);
return url_decode__delegate(s,p__21996);
});
url_decode.cljs$core$IFn$_invoke$arity$variadic = url_decode__delegate;
return url_decode;
})()
;
no.en.core.pow = (function pow(n,x){return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow.call(null,1024,4),no.en.core.pow.call(null,1024,1),no.en.core.pow.call(null,1024,3),no.en.core.pow.call(null,1024,2),no.en.core.pow.call(null,1024,8),no.en.core.pow.call(null,1024,7),no.en.core.pow.call(null,1024,6),no.en.core.pow.call(null,1024,0),no.en.core.pow.call(null,1024,5)]);
no.en.core.apply_unit = (function apply_unit(number,unit){if(typeof unit === 'string')
{var G__22002 = clojure.string.upper_case.call(null,unit);switch (G__22002) {
default:
var G__22003 = unit;switch (G__22003) {
case "M":
return (number * 1000000);

break;
case "B":
return (number * 1000000000);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit))));

}

}
} else
{return number;
}
});
no.en.core.parse_number = (function parse_number(s,parse_fn){var temp__4124__auto__ = cljs.core.re_matches.call(null,/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var number = parse_fn.call(null,cljs.core.nth.call(null,matches,1));var unit = cljs.core.nth.call(null,matches,3);if(cljs.core.not.call(null,isNaN(number)))
{return no.en.core.apply_unit.call(null,number,unit);
} else
{return null;
}
} else
{return null;
}
});
no.en.core.parse_bytes = (function parse_bytes(s){var temp__4124__auto__ = cljs.core.re_matches.call(null,/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var number = cljs.reader.read_string.call(null,cljs.core.nth.call(null,matches,1));var unit = cljs.core.nth.call(null,matches,3);return cljs.core.long$.call(null,(cljs.core.long$.call(null,cljs.reader.read_string.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,matches,1))))) * cljs.core.get.call(null,no.en.core.byte_scale,clojure.string.upper_case.call(null,(function (){var or__8656__auto__ = unit;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return "";
}
})()),1)));
} else
{return null;
}
});
/**
* Parse `s` as a integer number.
*/
no.en.core.parse_integer = (function parse_integer(s){return no.en.core.parse_number.call(null,s,(function (p1__22006_SHARP_){return parseInt(p1__22006_SHARP_);
}));
});
/**
* Parse `s` as a long number.
*/
no.en.core.parse_long = (function parse_long(s){return no.en.core.parse_number.call(null,s,(function (p1__22007_SHARP_){return parseInt(p1__22007_SHARP_);
}));
});
/**
* Parse `s` as a double number.
*/
no.en.core.parse_double = (function parse_double(s){return no.en.core.parse_number.call(null,s,(function (p1__22008_SHARP_){return parseFloat(p1__22008_SHARP_);
}));
});
/**
* Parse `s` as a float number.
*/
no.en.core.parse_float = (function parse_float(s){return no.en.core.parse_number.call(null,s,(function (p1__22009_SHARP_){return parseFloat(p1__22009_SHARP_);
}));
});
/**
* Format the map `m` into a query parameter string.
*/
no.en.core.format_query_params = (function format_query_params(m){var params = clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__22012_SHARP_){return clojure.string.join.call(null,"=",p1__22012_SHARP_);
}),cljs.core.map.call(null,(function (p1__22011_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode.call(null,cljs.core.name.call(null,cljs.core.first.call(null,p1__22011_SHARP_))),no.en.core.url_encode.call(null,cljs.core.second.call(null,p1__22011_SHARP_))],null));
}),cljs.core.remove.call(null,(function (p1__22010_SHARP_){return clojure.string.blank_QMARK_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22010_SHARP_))));
}),cljs.core.seq.call(null,m)))));if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,params)))
{return params;
} else
{return null;
}
});
/**
* Format the Ring map as an url.
*/
no.en.core.format_url = (function format_url(m){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"scheme","scheme",4400883991).cljs$core$IFn$_invoke$arity$1(m)))+"://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var map__22014 = m;var map__22014__$1 = ((cljs.core.seq_QMARK_.call(null,map__22014))?cljs.core.apply.call(null,cljs.core.hash_map,map__22014):map__22014);var password = cljs.core.get.call(null,map__22014__$1,new cljs.core.Keyword(null,"password","password",2230889997));var user = cljs.core.get.call(null,map__22014__$1,new cljs.core.Keyword(null,"user","user",1017503549));if(cljs.core.truth_(user))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(user)?user:null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(password)?(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)):null))+"@");
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"server-name","server-name",4503925319).cljs$core$IFn$_invoke$arity$1(m))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"server-port","server-port",4503998525).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var port = temp__4124__auto__;if(!(cljs.core._EQ_.call(null,port,no.en.core.port_number.call(null,new cljs.core.Keyword(null,"scheme","scheme",4400883991).cljs$core$IFn$_invoke$arity$1(m)))))
{return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(port));
} else
{return null;
}
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(m))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var query_params = temp__4124__auto__;return ("?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.format_query_params.call(null,query_params)));
} else
{return null;
}
})()));
});
/**
* Parse `s` as a percentage.
*/
no.en.core.parse_percent = (function parse_percent(s){return no.en.core.parse_double.call(null,clojure.string.replace.call(null,s,"%",""));
});
/**
* Quote the special characters in `s` that are used in regular expressions.
*/
no.en.core.pattern_quote = (function pattern_quote(s){return clojure.string.replace.call(null,cljs.core.name.call(null,s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
* Returns the first string that separates the components in `s`.
*/
no.en.core.separator = (function separator(s){var temp__4124__auto__ = cljs.core.re_matches.call(null,/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;return cljs.core.nth.call(null,matches,2);
} else
{return null;
}
});
/**
* Parse the query parameter string `s` and return a map.
*/
no.en.core.parse_query_params = (function parse_query_params(s){if(cljs.core.truth_(s))
{return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__22017_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,no.en.core.url_decode.call(null,cljs.core.first.call(null,p1__22017_SHARP_))),no.en.core.url_decode.call(null,cljs.core.second.call(null,p1__22017_SHARP_))],null));
}),cljs.core.filter.call(null,(function (p1__22016_SHARP_){return cljs.core._EQ_.call(null,2,cljs.core.count.call(null,p1__22016_SHARP_));
}),cljs.core.map.call(null,(function (p1__22015_SHARP_){return clojure.string.split.call(null,p1__22015_SHARP_,/=/);
}),clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/)))));
} else
{return null;
}
});
/**
* Parse the url `s` and return a Ring compatible map.
*/
no.en.core.parse_url = (function parse_url(s){var temp__4124__auto__ = cljs.core.re_matches.call(null,no.en.core.url_regex,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var scheme = cljs.core.keyword.call(null,cljs.core.nth.call(null,matches,1));return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"scheme","scheme",4400883991),scheme,new cljs.core.Keyword(null,"user","user",1017503549),cljs.core.nth.call(null,matches,3),new cljs.core.Keyword(null,"password","password",2230889997),cljs.core.nth.call(null,matches,4),new cljs.core.Keyword(null,"server-name","server-name",4503925319),cljs.core.nth.call(null,matches,6),new cljs.core.Keyword(null,"server-port","server-port",4503998525),(function (){var or__8656__auto__ = no.en.core.parse_integer.call(null,cljs.core.nth.call(null,matches,8));if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return no.en.core.port_number.call(null,scheme);
}
})(),new cljs.core.Keyword(null,"uri","uri",1014020318),cljs.core.nth.call(null,matches,10),new cljs.core.Keyword(null,"query-params","query-params",1080249757),no.en.core.parse_query_params.call(null,cljs.core.nth.call(null,matches,12)),new cljs.core.Keyword(null,"query-string","query-string",1183691816),cljs.core.nth.call(null,matches,12)], null);
} else
{return null;
}
});
/**
* Executes thunk. If an exception is thrown, will retry. At most n retries
* are done. If still some exception is thrown it is bubbled upwards in
* the call chain.
*/
no.en.core.with_retries_STAR_ = (function with_retries_STAR_(n,thunk){var n__$1 = n;while(true){
var temp__4124__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thunk.call(null)], null);
}catch (e22019){if((e22019 instanceof Error))
{var e = e22019;if((n__$1 === 0))
{throw e;
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22019;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var result = temp__4124__auto__;return result.call(null,0);
} else
{{
var G__22020 = (n__$1 - 1);
n__$1 = G__22020;
continue;
}
}
break;
}
});
