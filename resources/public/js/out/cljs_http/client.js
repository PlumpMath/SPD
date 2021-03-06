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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3469__auto__ = v;if(cljs.core.truth_(and__3469__auto__))
{return (v > 0);
} else
{return and__3469__auto__;
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
{return cljs.core.reduce.call(null,(function (p1__11540_SHARP_,p2__11539_SHARP_){var vec__11542 = clojure.string.split.call(null,p2__11539_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__11542,0,null);var v = cljs.core.nth.call(null,vec__11542,1,null);return cljs.core.assoc.call(null,p1__11540_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__11545){var vec__11546 = p__11545;var k = cljs.core.nth.call(null,vec__11546,0,null);var v = cljs.core.nth.call(null,vec__11546,1,null);return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6739__auto___11581 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6739__auto___11581,channel){
return (function (){var f__6740__auto__ = (function (){var switch__6724__auto__ = ((function (c__6739__auto___11581,channel){
return (function (state_11571){var state_val_11572 = (state_11571[1]);if((state_val_11572 === 2))
{var inst_11566 = (state_11571[2]);var inst_11567 = cljs_http.client.decode_body.call(null,inst_11566,cljs.reader.read_string,"application/edn");var inst_11568 = cljs.core.async.put_BANG_.call(null,channel,inst_11567);var inst_11569 = cljs.core.async.close_BANG_.call(null,channel);var state_11571__$1 = (function (){var statearr_11573 = state_11571;(statearr_11573[7] = inst_11568);
return statearr_11573;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11571__$1,inst_11569);
} else
{if((state_val_11572 === 1))
{var inst_11564 = client.call(null,request);var state_11571__$1 = state_11571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11571__$1,2,inst_11564);
} else
{return null;
}
}
});})(c__6739__auto___11581,channel))
;return ((function (switch__6724__auto__,c__6739__auto___11581,channel){
return (function() {
var state_machine__6725__auto__ = null;
var state_machine__6725__auto____0 = (function (){var statearr_11577 = [null,null,null,null,null,null,null,null];(statearr_11577[0] = state_machine__6725__auto__);
(statearr_11577[1] = 1);
return statearr_11577;
});
var state_machine__6725__auto____1 = (function (state_11571){while(true){
var ret_value__6726__auto__ = (function (){try{while(true){
var result__6727__auto__ = switch__6724__auto__.call(null,state_11571);if(cljs.core.keyword_identical_QMARK_.call(null,result__6727__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6727__auto__;
}
break;
}
}catch (e11578){if((e11578 instanceof Object))
{var ex__6728__auto__ = e11578;var statearr_11579_11582 = state_11571;(statearr_11579_11582[5] = ex__6728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11571);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6726__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11583 = state_11571;
state_11571 = G__11583;
continue;
}
} else
{return ret_value__6726__auto__;
}
break;
}
});
state_machine__6725__auto__ = function(state_11571){
switch(arguments.length){
case 0:
return state_machine__6725__auto____0.call(this);
case 1:
return state_machine__6725__auto____1.call(this,state_11571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6725__auto____0;
state_machine__6725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6725__auto____1;
return state_machine__6725__auto__;
})()
;})(switch__6724__auto__,c__6739__auto___11581,channel))
})();var state__6741__auto__ = (function (){var statearr_11580 = f__6740__auto__.call(null);(statearr_11580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6739__auto___11581);
return statearr_11580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6741__auto__);
});})(c__6739__auto___11581,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__11584){var vec__11586 = p__11584;var accept = cljs.core.nth.call(null,vec__11586,0,null);return ((function (vec__11586,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__3481__auto__ = new cljs.core.Keyword(null,"accept","accept",3885410426).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__11586,accept))
};
var wrap_accept = function (client,var_args){
var p__11584 = null;if (arguments.length > 1) {
  p__11584 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__11584);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__11587){
var client = cljs.core.first(arglist__11587);
var p__11584 = cljs.core.rest(arglist__11587);
return wrap_accept__delegate(client,p__11584);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__11588){var vec__11590 = p__11588;var content_type = cljs.core.nth.call(null,vec__11590,0,null);return ((function (vec__11590,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__3481__auto__ = new cljs.core.Keyword(null,"content-type","content-type",1799574400).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__11590,content_type))
};
var wrap_content_type = function (client,var_args){
var p__11588 = null;if (arguments.length > 1) {
  p__11588 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__11588);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__11591){
var client = cljs.core.first(arglist__11591);
var p__11588 = cljs.core.rest(arglist__11591);
return wrap_content_type__delegate(client,p__11588);
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6739__auto___11626 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6739__auto___11626,channel){
return (function (){var f__6740__auto__ = (function (){var switch__6724__auto__ = ((function (c__6739__auto___11626,channel){
return (function (state_11616){var state_val_11617 = (state_11616[1]);if((state_val_11617 === 2))
{var inst_11611 = (state_11616[2]);var inst_11612 = cljs_http.client.decode_body.call(null,inst_11611,cljs_http.util.json_decode,"application/json");var inst_11613 = cljs.core.async.put_BANG_.call(null,channel,inst_11612);var inst_11614 = cljs.core.async.close_BANG_.call(null,channel);var state_11616__$1 = (function (){var statearr_11618 = state_11616;(statearr_11618[7] = inst_11613);
return statearr_11618;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11616__$1,inst_11614);
} else
{if((state_val_11617 === 1))
{var inst_11609 = client.call(null,request);var state_11616__$1 = state_11616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11616__$1,2,inst_11609);
} else
{return null;
}
}
});})(c__6739__auto___11626,channel))
;return ((function (switch__6724__auto__,c__6739__auto___11626,channel){
return (function() {
var state_machine__6725__auto__ = null;
var state_machine__6725__auto____0 = (function (){var statearr_11622 = [null,null,null,null,null,null,null,null];(statearr_11622[0] = state_machine__6725__auto__);
(statearr_11622[1] = 1);
return statearr_11622;
});
var state_machine__6725__auto____1 = (function (state_11616){while(true){
var ret_value__6726__auto__ = (function (){try{while(true){
var result__6727__auto__ = switch__6724__auto__.call(null,state_11616);if(cljs.core.keyword_identical_QMARK_.call(null,result__6727__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6727__auto__;
}
break;
}
}catch (e11623){if((e11623 instanceof Object))
{var ex__6728__auto__ = e11623;var statearr_11624_11627 = state_11616;(statearr_11624_11627[5] = ex__6728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11616);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6726__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11628 = state_11616;
state_11616 = G__11628;
continue;
}
} else
{return ret_value__6726__auto__;
}
break;
}
});
state_machine__6725__auto__ = function(state_11616){
switch(arguments.length){
case 0:
return state_machine__6725__auto____0.call(this);
case 1:
return state_machine__6725__auto____1.call(this,state_11616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6725__auto____0;
state_machine__6725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6725__auto____1;
return state_machine__6725__auto__;
})()
;})(switch__6724__auto__,c__6739__auto___11626,channel))
})();var state__6741__auto__ = (function (){var statearr_11625 = f__6740__auto__.call(null);(statearr_11625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6739__auto___11626);
return statearr_11625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6741__auto__);
});})(c__6739__auto___11626,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__11631){var map__11632 = p__11631;var map__11632__$1 = ((cljs.core.seq_QMARK_.call(null,map__11632))?cljs.core.apply.call(null,cljs.core.hash_map,map__11632):map__11632);var req = map__11632__$1;var query_params = cljs.core.get.call(null,map__11632__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));if(cljs.core.truth_(query_params))
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__11633_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__11633_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",4503925319),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__11637){var map__11638 = p__11637;var map__11638__$1 = ((cljs.core.seq_QMARK_.call(null,map__11638))?cljs.core.apply.call(null,cljs.core.hash_map,map__11638):map__11638);var req = map__11638__$1;var query_params = cljs.core.get.call(null,map__11638__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",1014020321)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757)], null),((function (spec,temp__4124__auto__,map__11638,map__11638__$1,req,query_params){
return (function (p1__11634_SHARP_){return cljs.core.merge.call(null,p1__11634_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__11638,map__11638__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__11639){var vec__11641 = p__11639;var credentials = cljs.core.nth.call(null,vec__11641,0,null);return ((function (vec__11641,credentials){
return (function (req){var credentials__$1 = (function (){var or__3481__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__11641,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__11639 = null;if (arguments.length > 1) {
  p__11639 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__11639);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__11642){
var client = cljs.core.first(arglist__11642);
var p__11639 = cljs.core.rest(arglist__11642);
return wrap_basic_auth__delegate(client,p__11639);
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
var delete$__delegate = function (url,p__11643){var vec__11645 = p__11643;var req = cljs.core.nth.call(null,vec__11645,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var delete$ = function (url,var_args){
var p__11643 = null;if (arguments.length > 1) {
  p__11643 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__11643);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__11646){
var url = cljs.core.first(arglist__11646);
var p__11643 = cljs.core.rest(arglist__11646);
return delete$__delegate(url,p__11643);
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
var get__delegate = function (url,p__11647){var vec__11649 = p__11647;var req = cljs.core.nth.call(null,vec__11649,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var get = function (url,var_args){
var p__11647 = null;if (arguments.length > 1) {
  p__11647 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__11647);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__11650){
var url = cljs.core.first(arglist__11650);
var p__11647 = cljs.core.rest(arglist__11650);
return get__delegate(url,p__11647);
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
var head__delegate = function (url,p__11651){var vec__11653 = p__11651;var req = cljs.core.nth.call(null,vec__11653,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var head = function (url,var_args){
var p__11651 = null;if (arguments.length > 1) {
  p__11651 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__11651);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__11654){
var url = cljs.core.first(arglist__11654);
var p__11651 = cljs.core.rest(arglist__11654);
return head__delegate(url,p__11651);
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
var move__delegate = function (url,p__11655){var vec__11657 = p__11655;var req = cljs.core.nth.call(null,vec__11657,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var move = function (url,var_args){
var p__11655 = null;if (arguments.length > 1) {
  p__11655 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__11655);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__11658){
var url = cljs.core.first(arglist__11658);
var p__11655 = cljs.core.rest(arglist__11658);
return move__delegate(url,p__11655);
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
var options__delegate = function (url,p__11659){var vec__11661 = p__11659;var req = cljs.core.nth.call(null,vec__11661,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var options = function (url,var_args){
var p__11659 = null;if (arguments.length > 1) {
  p__11659 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__11659);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__11662){
var url = cljs.core.first(arglist__11662);
var p__11659 = cljs.core.rest(arglist__11662);
return options__delegate(url,p__11659);
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
var patch__delegate = function (url,p__11663){var vec__11665 = p__11663;var req = cljs.core.nth.call(null,vec__11665,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"patch","patch",1120342970),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var patch = function (url,var_args){
var p__11663 = null;if (arguments.length > 1) {
  p__11663 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__11663);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__11666){
var url = cljs.core.first(arglist__11666);
var p__11663 = cljs.core.rest(arglist__11666);
return patch__delegate(url,p__11663);
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
var post__delegate = function (url,p__11667){var vec__11669 = p__11667;var req = cljs.core.nth.call(null,vec__11669,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var post = function (url,var_args){
var p__11667 = null;if (arguments.length > 1) {
  p__11667 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__11667);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__11670){
var url = cljs.core.first(arglist__11670);
var p__11667 = cljs.core.rest(arglist__11670);
return post__delegate(url,p__11667);
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
var put__delegate = function (url,p__11671){var vec__11673 = p__11671;var req = cljs.core.nth.call(null,vec__11673,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var put = function (url,var_args){
var p__11671 = null;if (arguments.length > 1) {
  p__11671 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__11671);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__11674){
var url = cljs.core.first(arglist__11674);
var p__11671 = cljs.core.rest(arglist__11674);
return put__delegate(url,p__11671);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map