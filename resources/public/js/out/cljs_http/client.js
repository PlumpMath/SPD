// Compiled by ClojureScript 0.0-2202
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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__7868__auto__ = v;if(cljs.core.truth_(and__7868__auto__))
{return (v > 0);
} else
{return and__7868__auto__;
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
{return cljs.core.reduce.call(null,(function (p1__18325_SHARP_,p2__18324_SHARP_){var vec__18327 = clojure.string.split.call(null,p2__18324_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__18327,0,null);var v = cljs.core.nth.call(null,vec__18327,1,null);return cljs.core.assoc.call(null,p1__18325_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",4400883991),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",4503925319),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",4503998525),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",1014020318),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",1183691816),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",1080249757),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [205,null,206,null,300,null,204,null,307,null,303,null,301,null,201,null,302,null,202,null,200,null,203,null,207,null], null), null);
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__18330){var vec__18331 = p__18330;var k = cljs.core.nth.call(null,vec__18331,0,null);var v = cljs.core.nth.call(null,vec__18331,1,null);return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
}),params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(content_type)].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",1809212152).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''))))
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__9731__auto___18366 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___18366,channel){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___18366,channel){
return (function (state_18356){var state_val_18357 = (state_18356[1]);if((state_val_18357 === 2))
{var inst_18351 = (state_18356[2]);var inst_18352 = cljs_http.client.decode_body.call(null,inst_18351,cljs.reader.read_string,"application/edn");var inst_18353 = cljs.core.async.put_BANG_.call(null,channel,inst_18352);var inst_18354 = cljs.core.async.close_BANG_.call(null,channel);var state_18356__$1 = (function (){var statearr_18358 = state_18356;(statearr_18358[7] = inst_18353);
return statearr_18358;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18356__$1,inst_18354);
} else
{if((state_val_18357 === 1))
{var inst_18349 = client.call(null,request);var state_18356__$1 = state_18356;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18356__$1,2,inst_18349);
} else
{return null;
}
}
});})(c__9731__auto___18366,channel))
;return ((function (switch__9716__auto__,c__9731__auto___18366,channel){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_18362 = [null,null,null,null,null,null,null,null];(statearr_18362[0] = state_machine__9717__auto__);
(statearr_18362[1] = 1);
return statearr_18362;
});
var state_machine__9717__auto____1 = (function (state_18356){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_18356);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e18363){if((e18363 instanceof Object))
{var ex__9720__auto__ = e18363;var statearr_18364_18367 = state_18356;(statearr_18364_18367[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18356);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18368 = state_18356;
state_18356 = G__18368;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_18356){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_18356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___18366,channel))
})();var state__9733__auto__ = (function (){var statearr_18365 = f__9732__auto__.call(null);(statearr_18365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___18366);
return statearr_18365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___18366,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__18369){var vec__18371 = p__18369;var accept = cljs.core.nth.call(null,vec__18371,0,null);return ((function (vec__18371,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__7880__auto__ = new cljs.core.Keyword(null,"accept","accept",3885410426).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__18371,accept))
};
var wrap_accept = function (client,var_args){
var p__18369 = null;if (arguments.length > 1) {
  p__18369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__18369);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__18372){
var client = cljs.core.first(arglist__18372);
var p__18369 = cljs.core.rest(arglist__18372);
return wrap_accept__delegate(client,p__18369);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__18373){var vec__18375 = p__18373;var content_type = cljs.core.nth.call(null,vec__18375,0,null);return ((function (vec__18375,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__7880__auto__ = new cljs.core.Keyword(null,"content-type","content-type",1799574400).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__18375,content_type))
};
var wrap_content_type = function (client,var_args){
var p__18373 = null;if (arguments.length > 1) {
  p__18373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__18373);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__18376){
var client = cljs.core.first(arglist__18376);
var p__18373 = cljs.core.rest(arglist__18376);
return wrap_content_type__delegate(client,p__18373);
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__9731__auto___18411 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___18411,channel){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___18411,channel){
return (function (state_18401){var state_val_18402 = (state_18401[1]);if((state_val_18402 === 2))
{var inst_18396 = (state_18401[2]);var inst_18397 = cljs_http.client.decode_body.call(null,inst_18396,cljs_http.util.json_decode,"application/json");var inst_18398 = cljs.core.async.put_BANG_.call(null,channel,inst_18397);var inst_18399 = cljs.core.async.close_BANG_.call(null,channel);var state_18401__$1 = (function (){var statearr_18403 = state_18401;(statearr_18403[7] = inst_18398);
return statearr_18403;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18401__$1,inst_18399);
} else
{if((state_val_18402 === 1))
{var inst_18394 = client.call(null,request);var state_18401__$1 = state_18401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18401__$1,2,inst_18394);
} else
{return null;
}
}
});})(c__9731__auto___18411,channel))
;return ((function (switch__9716__auto__,c__9731__auto___18411,channel){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_18407 = [null,null,null,null,null,null,null,null];(statearr_18407[0] = state_machine__9717__auto__);
(statearr_18407[1] = 1);
return statearr_18407;
});
var state_machine__9717__auto____1 = (function (state_18401){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_18401);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e18408){if((e18408 instanceof Object))
{var ex__9720__auto__ = e18408;var statearr_18409_18412 = state_18401;(statearr_18409_18412[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18401);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18413 = state_18401;
state_18401 = G__18413;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_18401){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_18401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___18411,channel))
})();var state__9733__auto__ = (function (){var statearr_18410 = f__9732__auto__.call(null);(statearr_18410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___18411);
return statearr_18410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___18411,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__18416){var map__18417 = p__18416;var map__18417__$1 = ((cljs.core.seq_QMARK_.call(null,map__18417))?cljs.core.apply.call(null,cljs.core.hash_map,map__18417):map__18417);var req = map__18417__$1;var query_params = cljs.core.get.call(null,map__18417__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));if(cljs.core.truth_(query_params))
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__18418_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__18418_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",4503925319),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__18422){var map__18423 = p__18422;var map__18423__$1 = ((cljs.core.seq_QMARK_.call(null,map__18423))?cljs.core.apply.call(null,cljs.core.hash_map,map__18423):map__18423);var req = map__18423__$1;var query_params = cljs.core.get.call(null,map__18423__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",1014020321)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757)], null),((function (spec,temp__4124__auto__,map__18423,map__18423__$1,req,query_params){
return (function (p1__18419_SHARP_){return cljs.core.merge.call(null,p1__18419_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__18423,map__18423__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__18424){var vec__18426 = p__18424;var credentials = cljs.core.nth.call(null,vec__18426,0,null);return ((function (vec__18426,credentials){
return (function (req){var credentials__$1 = (function (){var or__7880__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__18426,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__18424 = null;if (arguments.length > 1) {
  p__18424 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__18424);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__18427){
var client = cljs.core.first(arglist__18427);
var p__18424 = cljs.core.rest(arglist__18427);
return wrap_basic_auth__delegate(client,p__18424);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
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
var delete$__delegate = function (url,p__18428){var vec__18430 = p__18428;var req = cljs.core.nth.call(null,vec__18430,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var delete$ = function (url,var_args){
var p__18428 = null;if (arguments.length > 1) {
  p__18428 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__18428);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__18431){
var url = cljs.core.first(arglist__18431);
var p__18428 = cljs.core.rest(arglist__18431);
return delete$__delegate(url,p__18428);
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
var get__delegate = function (url,p__18432){var vec__18434 = p__18432;var req = cljs.core.nth.call(null,vec__18434,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var get = function (url,var_args){
var p__18432 = null;if (arguments.length > 1) {
  p__18432 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__18432);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__18435){
var url = cljs.core.first(arglist__18435);
var p__18432 = cljs.core.rest(arglist__18435);
return get__delegate(url,p__18432);
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
var head__delegate = function (url,p__18436){var vec__18438 = p__18436;var req = cljs.core.nth.call(null,vec__18438,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var head = function (url,var_args){
var p__18436 = null;if (arguments.length > 1) {
  p__18436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__18436);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__18439){
var url = cljs.core.first(arglist__18439);
var p__18436 = cljs.core.rest(arglist__18439);
return head__delegate(url,p__18436);
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
var move__delegate = function (url,p__18440){var vec__18442 = p__18440;var req = cljs.core.nth.call(null,vec__18442,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var move = function (url,var_args){
var p__18440 = null;if (arguments.length > 1) {
  p__18440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__18440);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__18443){
var url = cljs.core.first(arglist__18443);
var p__18440 = cljs.core.rest(arglist__18443);
return move__delegate(url,p__18440);
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
var options__delegate = function (url,p__18444){var vec__18446 = p__18444;var req = cljs.core.nth.call(null,vec__18446,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var options = function (url,var_args){
var p__18444 = null;if (arguments.length > 1) {
  p__18444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__18444);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__18447){
var url = cljs.core.first(arglist__18447);
var p__18444 = cljs.core.rest(arglist__18447);
return options__delegate(url,p__18444);
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
var patch__delegate = function (url,p__18448){var vec__18450 = p__18448;var req = cljs.core.nth.call(null,vec__18450,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"patch","patch",1120342970),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var patch = function (url,var_args){
var p__18448 = null;if (arguments.length > 1) {
  p__18448 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__18448);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__18451){
var url = cljs.core.first(arglist__18451);
var p__18448 = cljs.core.rest(arglist__18451);
return patch__delegate(url,p__18448);
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
var post__delegate = function (url,p__18452){var vec__18454 = p__18452;var req = cljs.core.nth.call(null,vec__18454,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var post = function (url,var_args){
var p__18452 = null;if (arguments.length > 1) {
  p__18452 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__18452);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__18455){
var url = cljs.core.first(arglist__18455);
var p__18452 = cljs.core.rest(arglist__18455);
return post__delegate(url,p__18452);
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
var put__delegate = function (url,p__18456){var vec__18458 = p__18456;var req = cljs.core.nth.call(null,vec__18458,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var put = function (url,var_args){
var p__18456 = null;if (arguments.length > 1) {
  p__18456 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__18456);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__18459){
var url = cljs.core.first(arglist__18459);
var p__18456 = cljs.core.rest(arglist__18459);
return put__delegate(url,p__18456);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map