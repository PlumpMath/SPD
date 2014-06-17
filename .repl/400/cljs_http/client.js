// Compiled by ClojureScript 0.0-2234
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__8650__auto__ = v;if(cljs.core.truth_(and__8650__auto__))
{return (v > 0);
} else
{return and__8650__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__25963_SHARP_,p2__25962_SHARP_){var vec__25965 = clojure.string.split.call(null,p2__25962_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__25965,0,null);var v = cljs.core.nth.call(null,vec__25965,1,null);return cljs.core.assoc.call(null,p1__25963_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",4400883991),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",4503925319),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",4503998525),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",1014020318),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",1183691816),((cljs.core.not.call(null,query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),new cljs.core.Keyword(null,"query-params","query-params",1080249757),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [205,null,206,null,300,null,204,null,307,null,303,null,301,null,201,null,302,null,202,null,200,null,203,null,207,null], null), null);
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__25968){var vec__25969 = p__25968;var k = cljs.core.nth.call(null,vec__25969,0,null);var v = cljs.core.nth.call(null,vec__25969,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",1809212152).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))))))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",1007197398).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",1007197398)),new cljs.core.Keyword(null,"body","body",1016933652),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__11799__auto___26004 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___26004,channel){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___26004,channel){
return (function (state_25994){var state_val_25995 = (state_25994[1]);if((state_val_25995 === 2))
{var inst_25989 = (state_25994[2]);var inst_25990 = cljs_http.client.decode_body.call(null,inst_25989,cljs.reader.read_string,"application/edn");var inst_25991 = cljs.core.async.put_BANG_.call(null,channel,inst_25990);var inst_25992 = cljs.core.async.close_BANG_.call(null,channel);var state_25994__$1 = (function (){var statearr_25996 = state_25994;(statearr_25996[7] = inst_25991);
return statearr_25996;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25994__$1,inst_25992);
} else
{if((state_val_25995 === 1))
{var inst_25987 = client.call(null,request);var state_25994__$1 = state_25994;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25994__$1,2,inst_25987);
} else
{return null;
}
}
});})(c__11799__auto___26004,channel))
;return ((function (switch__11682__auto__,c__11799__auto___26004,channel){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_26000 = [null,null,null,null,null,null,null,null];(statearr_26000[0] = state_machine__11683__auto__);
(statearr_26000[1] = 1);
return statearr_26000;
});
var state_machine__11683__auto____1 = (function (state_25994){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_25994);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e26001){if((e26001 instanceof Object))
{var ex__11686__auto__ = e26001;var statearr_26002_26005 = state_25994;(statearr_26002_26005[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25994);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26006 = state_25994;
state_25994 = G__26006;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_25994){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_25994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___26004,channel))
})();var state__11801__auto__ = (function (){var statearr_26003 = f__11800__auto__.call(null);(statearr_26003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___26004);
return statearr_26003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___26004,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__26007){var vec__26009 = p__26007;var accept = cljs.core.nth.call(null,vec__26009,0,null);return ((function (vec__26009,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__8662__auto__ = new cljs.core.Keyword(null,"accept","accept",3885410426).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__26009,accept))
};
var wrap_accept = function (client,var_args){
var p__26007 = null;if (arguments.length > 1) {
  p__26007 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__26007);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__26010){
var client = cljs.core.first(arglist__26010);
var p__26007 = cljs.core.rest(arglist__26010);
return wrap_accept__delegate(client,p__26007);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__26011){var vec__26013 = p__26011;var content_type = cljs.core.nth.call(null,vec__26013,0,null);return ((function (vec__26013,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__8662__auto__ = new cljs.core.Keyword(null,"content-type","content-type",1799574400).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__26013,content_type))
};
var wrap_content_type = function (client,var_args){
var p__26011 = null;if (arguments.length > 1) {
  p__26011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__26011);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__26014){
var client = cljs.core.first(arglist__26014);
var p__26011 = cljs.core.rest(arglist__26014);
return wrap_content_type__delegate(client,p__26011);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",2645529981).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",2645529981)),new cljs.core.Keyword(null,"body","body",1016933652),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__11799__auto___26049 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___26049,channel){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___26049,channel){
return (function (state_26039){var state_val_26040 = (state_26039[1]);if((state_val_26040 === 2))
{var inst_26034 = (state_26039[2]);var inst_26035 = cljs_http.client.decode_body.call(null,inst_26034,cljs_http.util.json_decode,"application/json");var inst_26036 = cljs.core.async.put_BANG_.call(null,channel,inst_26035);var inst_26037 = cljs.core.async.close_BANG_.call(null,channel);var state_26039__$1 = (function (){var statearr_26041 = state_26039;(statearr_26041[7] = inst_26036);
return statearr_26041;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26039__$1,inst_26037);
} else
{if((state_val_26040 === 1))
{var inst_26032 = client.call(null,request);var state_26039__$1 = state_26039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26039__$1,2,inst_26032);
} else
{return null;
}
}
});})(c__11799__auto___26049,channel))
;return ((function (switch__11682__auto__,c__11799__auto___26049,channel){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_26045 = [null,null,null,null,null,null,null,null];(statearr_26045[0] = state_machine__11683__auto__);
(statearr_26045[1] = 1);
return statearr_26045;
});
var state_machine__11683__auto____1 = (function (state_26039){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_26039);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e26046){if((e26046 instanceof Object))
{var ex__11686__auto__ = e26046;var statearr_26047_26050 = state_26039;(statearr_26047_26050[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26046;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26051 = state_26039;
state_26039 = G__26051;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_26039){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_26039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___26049,channel))
})();var state__11801__auto__ = (function (){var statearr_26048 = f__11800__auto__.call(null);(statearr_26048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___26049);
return statearr_26048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___26049,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__26054){var map__26055 = p__26054;var map__26055__$1 = ((cljs.core.seq_QMARK_.call(null,map__26055))?cljs.core.apply.call(null,cljs.core.hash_map,map__26055):map__26055);var req = map__26055__$1;var query_params = cljs.core.get.call(null,map__26055__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",1080249757)),new cljs.core.Keyword(null,"query-string","query-string",1183691816),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.Keyword(null,"android","android",4447480289)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",4231316563)),new cljs.core.Keyword(null,"request-method","request-method",1993477457),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__26056_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__26056_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",4503925319),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__26060){var map__26061 = p__26060;var map__26061__$1 = ((cljs.core.seq_QMARK_.call(null,map__26061))?cljs.core.apply.call(null,cljs.core.hash_map,map__26061):map__26061);var req = map__26061__$1;var query_params = cljs.core.get.call(null,map__26061__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",1014020321)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757)], null),((function (spec,temp__4124__auto__,map__26061,map__26061__$1,req,query_params){
return (function (p1__26057_SHARP_){return cljs.core.merge.call(null,p1__26057_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__26061,map__26061__$1,req,query_params))
));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__26062){var vec__26064 = p__26062;var credentials = cljs.core.nth.call(null,vec__26064,0,null);return ((function (vec__26064,credentials){
return (function (req){var credentials__$1 = (function (){var or__8662__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__26064,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__26062 = null;if (arguments.length > 1) {
  p__26062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__26062);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__26065){
var client = cljs.core.first(arglist__26065);
var p__26062 = cljs.core.rest(arglist__26065);
return wrap_basic_auth__delegate(client,p__26062);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token))));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a battaries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,request))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__26066){var vec__26068 = p__26066;var req = cljs.core.nth.call(null,vec__26068,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var delete$ = function (url,var_args){
var p__26066 = null;if (arguments.length > 1) {
  p__26066 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__26066);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__26069){
var url = cljs.core.first(arglist__26069);
var p__26066 = cljs.core.rest(arglist__26069);
return delete$__delegate(url,p__26066);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__26070){var vec__26072 = p__26070;var req = cljs.core.nth.call(null,vec__26072,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var get = function (url,var_args){
var p__26070 = null;if (arguments.length > 1) {
  p__26070 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__26070);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__26073){
var url = cljs.core.first(arglist__26073);
var p__26070 = cljs.core.rest(arglist__26073);
return get__delegate(url,p__26070);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__26074){var vec__26076 = p__26074;var req = cljs.core.nth.call(null,vec__26076,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var head = function (url,var_args){
var p__26074 = null;if (arguments.length > 1) {
  p__26074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__26074);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__26077){
var url = cljs.core.first(arglist__26077);
var p__26074 = cljs.core.rest(arglist__26077);
return head__delegate(url,p__26074);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__26078){var vec__26080 = p__26078;var req = cljs.core.nth.call(null,vec__26080,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var move = function (url,var_args){
var p__26078 = null;if (arguments.length > 1) {
  p__26078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__26078);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__26081){
var url = cljs.core.first(arglist__26081);
var p__26078 = cljs.core.rest(arglist__26081);
return move__delegate(url,p__26078);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__26082){var vec__26084 = p__26082;var req = cljs.core.nth.call(null,vec__26084,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var options = function (url,var_args){
var p__26082 = null;if (arguments.length > 1) {
  p__26082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__26082);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__26085){
var url = cljs.core.first(arglist__26085);
var p__26082 = cljs.core.rest(arglist__26085);
return options__delegate(url,p__26082);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__26086){var vec__26088 = p__26086;var req = cljs.core.nth.call(null,vec__26088,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"patch","patch",1120342970),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var patch = function (url,var_args){
var p__26086 = null;if (arguments.length > 1) {
  p__26086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__26086);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__26089){
var url = cljs.core.first(arglist__26089);
var p__26086 = cljs.core.rest(arglist__26089);
return patch__delegate(url,p__26086);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__26090){var vec__26092 = p__26090;var req = cljs.core.nth.call(null,vec__26092,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var post = function (url,var_args){
var p__26090 = null;if (arguments.length > 1) {
  p__26090 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__26090);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__26093){
var url = cljs.core.first(arglist__26093);
var p__26090 = cljs.core.rest(arglist__26093);
return post__delegate(url,p__26090);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__26094){var vec__26096 = p__26094;var req = cljs.core.nth.call(null,vec__26096,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var put = function (url,var_args){
var p__26094 = null;if (arguments.length > 1) {
  p__26094 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__26094);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__26097){
var url = cljs.core.first(arglist__26097);
var p__26094 = cljs.core.rest(arglist__26097);
return put__delegate(url,p__26094);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
