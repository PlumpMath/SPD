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
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__8644__auto__ = v;if(cljs.core.truth_(and__8644__auto__))
{return (v > 0);
} else
{return and__8644__auto__;
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
{return cljs.core.reduce.call(null,(function (p1__21743_SHARP_,p2__21742_SHARP_){var vec__21745 = clojure.string.split.call(null,p2__21742_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__21745,0,null);var v = cljs.core.nth.call(null,vec__21745,1,null);return cljs.core.assoc.call(null,p1__21743_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__21748){var vec__21749 = p__21748;var k = cljs.core.nth.call(null,vec__21749,0,null);var v = cljs.core.nth.call(null,vec__21749,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__14088__auto___21784 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___21784,channel){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___21784,channel){
return (function (state_21774){var state_val_21775 = (state_21774[1]);if((state_val_21775 === 2))
{var inst_21769 = (state_21774[2]);var inst_21770 = cljs_http.client.decode_body.call(null,inst_21769,cljs.reader.read_string,"application/edn");var inst_21771 = cljs.core.async.put_BANG_.call(null,channel,inst_21770);var inst_21772 = cljs.core.async.close_BANG_.call(null,channel);var state_21774__$1 = (function (){var statearr_21776 = state_21774;(statearr_21776[7] = inst_21771);
return statearr_21776;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21774__$1,inst_21772);
} else
{if((state_val_21775 === 1))
{var inst_21767 = client.call(null,request);var state_21774__$1 = state_21774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21774__$1,2,inst_21767);
} else
{return null;
}
}
});})(c__14088__auto___21784,channel))
;return ((function (switch__14023__auto__,c__14088__auto___21784,channel){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_21780 = [null,null,null,null,null,null,null,null];(statearr_21780[0] = state_machine__14024__auto__);
(statearr_21780[1] = 1);
return statearr_21780;
});
var state_machine__14024__auto____1 = (function (state_21774){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_21774);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e21781){if((e21781 instanceof Object))
{var ex__14027__auto__ = e21781;var statearr_21782_21785 = state_21774;(statearr_21782_21785[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21781;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21786 = state_21774;
state_21774 = G__21786;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_21774){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_21774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___21784,channel))
})();var state__14090__auto__ = (function (){var statearr_21783 = f__14089__auto__.call(null);(statearr_21783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___21784);
return statearr_21783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___21784,channel))
);
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__21787){var vec__21789 = p__21787;var accept = cljs.core.nth.call(null,vec__21789,0,null);return ((function (vec__21789,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__8656__auto__ = new cljs.core.Keyword(null,"accept","accept",3885410426).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
;})(vec__21789,accept))
};
var wrap_accept = function (client,var_args){
var p__21787 = null;if (arguments.length > 1) {
  p__21787 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__21787);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__21790){
var client = cljs.core.first(arglist__21790);
var p__21787 = cljs.core.rest(arglist__21790);
return wrap_accept__delegate(client,p__21787);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__21791){var vec__21793 = p__21791;var content_type = cljs.core.nth.call(null,vec__21793,0,null);return ((function (vec__21793,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__8656__auto__ = new cljs.core.Keyword(null,"content-type","content-type",1799574400).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
;})(vec__21793,content_type))
};
var wrap_content_type = function (client,var_args){
var p__21791 = null;if (arguments.length > 1) {
  p__21791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__21791);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__21794){
var client = cljs.core.first(arglist__21794);
var p__21791 = cljs.core.rest(arglist__21794);
return wrap_content_type__delegate(client,p__21791);
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__14088__auto___21829 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___21829,channel){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___21829,channel){
return (function (state_21819){var state_val_21820 = (state_21819[1]);if((state_val_21820 === 2))
{var inst_21814 = (state_21819[2]);var inst_21815 = cljs_http.client.decode_body.call(null,inst_21814,cljs_http.util.json_decode,"application/json");var inst_21816 = cljs.core.async.put_BANG_.call(null,channel,inst_21815);var inst_21817 = cljs.core.async.close_BANG_.call(null,channel);var state_21819__$1 = (function (){var statearr_21821 = state_21819;(statearr_21821[7] = inst_21816);
return statearr_21821;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21819__$1,inst_21817);
} else
{if((state_val_21820 === 1))
{var inst_21812 = client.call(null,request);var state_21819__$1 = state_21819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21819__$1,2,inst_21812);
} else
{return null;
}
}
});})(c__14088__auto___21829,channel))
;return ((function (switch__14023__auto__,c__14088__auto___21829,channel){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_21825 = [null,null,null,null,null,null,null,null];(statearr_21825[0] = state_machine__14024__auto__);
(statearr_21825[1] = 1);
return statearr_21825;
});
var state_machine__14024__auto____1 = (function (state_21819){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_21819);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e21826){if((e21826 instanceof Object))
{var ex__14027__auto__ = e21826;var statearr_21827_21830 = state_21819;(statearr_21827_21830[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21819);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21831 = state_21819;
state_21819 = G__21831;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_21819){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_21819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___21829,channel))
})();var state__14090__auto__ = (function (){var statearr_21828 = f__14089__auto__.call(null);(statearr_21828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___21829);
return statearr_21828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___21829,channel))
);
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__21834){var map__21835 = p__21834;var map__21835__$1 = ((cljs.core.seq_QMARK_.call(null,map__21835))?cljs.core.apply.call(null,cljs.core.hash_map,map__21835):map__21835);var req = map__21835__$1;var query_params = cljs.core.get.call(null,map__21835__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));if(cljs.core.truth_(query_params))
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__21836_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__21836_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",4503925319),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__21840){var map__21841 = p__21840;var map__21841__$1 = ((cljs.core.seq_QMARK_.call(null,map__21841))?cljs.core.apply.call(null,cljs.core.hash_map,map__21841):map__21841);var req = map__21841__$1;var query_params = cljs.core.get.call(null,map__21841__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",1014020321)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757)], null),((function (spec,temp__4124__auto__,map__21841,map__21841__$1,req,query_params){
return (function (p1__21837_SHARP_){return cljs.core.merge.call(null,p1__21837_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__21841,map__21841__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__21842){var vec__21844 = p__21842;var credentials = cljs.core.nth.call(null,vec__21844,0,null);return ((function (vec__21844,credentials){
return (function (req){var credentials__$1 = (function (){var or__8656__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
;})(vec__21844,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__21842 = null;if (arguments.length > 1) {
  p__21842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__21842);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__21845){
var client = cljs.core.first(arglist__21845);
var p__21842 = cljs.core.rest(arglist__21845);
return wrap_basic_auth__delegate(client,p__21842);
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
var delete$__delegate = function (url,p__21846){var vec__21848 = p__21846;var req = cljs.core.nth.call(null,vec__21848,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var delete$ = function (url,var_args){
var p__21846 = null;if (arguments.length > 1) {
  p__21846 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__21846);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__21849){
var url = cljs.core.first(arglist__21849);
var p__21846 = cljs.core.rest(arglist__21849);
return delete$__delegate(url,p__21846);
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
var get__delegate = function (url,p__21850){var vec__21852 = p__21850;var req = cljs.core.nth.call(null,vec__21852,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var get = function (url,var_args){
var p__21850 = null;if (arguments.length > 1) {
  p__21850 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__21850);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__21853){
var url = cljs.core.first(arglist__21853);
var p__21850 = cljs.core.rest(arglist__21853);
return get__delegate(url,p__21850);
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
var head__delegate = function (url,p__21854){var vec__21856 = p__21854;var req = cljs.core.nth.call(null,vec__21856,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var head = function (url,var_args){
var p__21854 = null;if (arguments.length > 1) {
  p__21854 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__21854);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__21857){
var url = cljs.core.first(arglist__21857);
var p__21854 = cljs.core.rest(arglist__21857);
return head__delegate(url,p__21854);
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
var move__delegate = function (url,p__21858){var vec__21860 = p__21858;var req = cljs.core.nth.call(null,vec__21860,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var move = function (url,var_args){
var p__21858 = null;if (arguments.length > 1) {
  p__21858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__21858);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__21861){
var url = cljs.core.first(arglist__21861);
var p__21858 = cljs.core.rest(arglist__21861);
return move__delegate(url,p__21858);
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
var options__delegate = function (url,p__21862){var vec__21864 = p__21862;var req = cljs.core.nth.call(null,vec__21864,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var options = function (url,var_args){
var p__21862 = null;if (arguments.length > 1) {
  p__21862 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__21862);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__21865){
var url = cljs.core.first(arglist__21865);
var p__21862 = cljs.core.rest(arglist__21865);
return options__delegate(url,p__21862);
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
var patch__delegate = function (url,p__21866){var vec__21868 = p__21866;var req = cljs.core.nth.call(null,vec__21868,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"patch","patch",1120342970),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var patch = function (url,var_args){
var p__21866 = null;if (arguments.length > 1) {
  p__21866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__21866);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__21869){
var url = cljs.core.first(arglist__21869);
var p__21866 = cljs.core.rest(arglist__21869);
return patch__delegate(url,p__21866);
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
var post__delegate = function (url,p__21870){var vec__21872 = p__21870;var req = cljs.core.nth.call(null,vec__21872,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var post = function (url,var_args){
var p__21870 = null;if (arguments.length > 1) {
  p__21870 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__21870);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__21873){
var url = cljs.core.first(arglist__21873);
var p__21870 = cljs.core.rest(arglist__21873);
return post__delegate(url,p__21870);
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
var put__delegate = function (url,p__21874){var vec__21876 = p__21874;var req = cljs.core.nth.call(null,vec__21876,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var put = function (url,var_args){
var p__21874 = null;if (arguments.length > 1) {
  p__21874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__21874);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__21877){
var url = cljs.core.first(arglist__21877);
var p__21874 = cljs.core.rest(arglist__21877);
return put__delegate(url,p__21874);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
