// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__21358,args){var map__21360 = p__21358;var map__21360__$1 = ((cljs.core.seq_QMARK_.call(null,map__21360))?cljs.core.apply.call(null,cljs.core.hash_map,map__21360):map__21360);var debug = cljs.core.get.call(null,map__21360__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__21358,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__21358,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__21361){
var p__21358 = cljs.core.first(arglist__21361);
var args = cljs.core.rest(arglist__21361);
return log__delegate(p__21358,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__21362){var map__21364 = p__21362;var map__21364__$1 = ((cljs.core.seq_QMARK_.call(null,map__21364))?cljs.core.apply.call(null,cljs.core.hash_map,map__21364):map__21364);var websocket_url = cljs.core.get.call(null,map__21364__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__21365,callback){var map__21367 = p__21365;var map__21367__$1 = ((cljs.core.seq_QMARK_.call(null,map__21367))?cljs.core.apply.call(null,cljs.core.hash_map,map__21367):map__21367);var msg = map__21367__$1;var dependency_file = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7880__auto__ = dependency_file;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__21367,map__21367__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__21367,map__21367__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__21368,p__21369){var map__21372 = p__21368;var map__21372__$1 = ((cljs.core.seq_QMARK_.call(null,map__21372))?cljs.core.apply.call(null,cljs.core.hash_map,map__21372):map__21372);var opts = map__21372__$1;var url_rewriter = cljs.core.get.call(null,map__21372__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__21373 = p__21369;var map__21373__$1 = ((cljs.core.seq_QMARK_.call(null,map__21373))?cljs.core.apply.call(null,cljs.core.hash_map,map__21373):map__21373);var d = map__21373__$1;var file = cljs.core.get.call(null,map__21373__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__21374,p__21375){var map__21416 = p__21374;var map__21416__$1 = ((cljs.core.seq_QMARK_.call(null,map__21416))?cljs.core.apply.call(null,cljs.core.hash_map,map__21416):map__21416);var opts = map__21416__$1;var on_jsload = cljs.core.get.call(null,map__21416__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__21416__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__21417 = p__21375;var map__21417__$1 = ((cljs.core.seq_QMARK_.call(null,map__21417))?cljs.core.apply.call(null,cljs.core.hash_map,map__21417):map__21417);var files = cljs.core.get.call(null,map__21417__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__,map__21416,map__21416__$1,opts,on_jsload,before_jsload,map__21417,map__21417__$1,files){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__,map__21416,map__21416__$1,opts,on_jsload,before_jsload,map__21417,map__21417__$1,files){
return (function (state_21439){var state_val_21440 = (state_21439[1]);if((state_val_21440 === 6))
{var inst_21422 = (state_21439[7]);var inst_21431 = (state_21439[2]);var inst_21432 = [inst_21422];var inst_21433 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21432,null));var inst_21434 = cljs.core.apply.call(null,on_jsload,inst_21433);var state_21439__$1 = (function (){var statearr_21441 = state_21439;(statearr_21441[8] = inst_21431);
return statearr_21441;
})();var statearr_21442_21456 = state_21439__$1;(statearr_21442_21456[2] = inst_21434);
(statearr_21442_21456[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21440 === 5))
{var inst_21437 = (state_21439[2]);var state_21439__$1 = state_21439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21439__$1,inst_21437);
} else
{if((state_val_21440 === 4))
{var state_21439__$1 = state_21439;var statearr_21443_21457 = state_21439__$1;(statearr_21443_21457[2] = null);
(statearr_21443_21457[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21440 === 3))
{var inst_21422 = (state_21439[7]);var inst_21425 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_21426 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_21422);var inst_21427 = cljs.core.prn_str.call(null,inst_21426);var inst_21428 = console.log(inst_21427);var inst_21429 = cljs.core.async.timeout.call(null,10);var state_21439__$1 = (function (){var statearr_21444 = state_21439;(statearr_21444[9] = inst_21425);
(statearr_21444[10] = inst_21428);
return statearr_21444;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21439__$1,6,inst_21429);
} else
{if((state_val_21440 === 2))
{var inst_21422 = (state_21439[7]);var inst_21422__$1 = (state_21439[2]);var inst_21423 = cljs.core.not_empty.call(null,inst_21422__$1);var state_21439__$1 = (function (){var statearr_21445 = state_21439;(statearr_21445[7] = inst_21422__$1);
return statearr_21445;
})();if(cljs.core.truth_(inst_21423))
{var statearr_21446_21458 = state_21439__$1;(statearr_21446_21458[1] = 3);
} else
{var statearr_21447_21459 = state_21439__$1;(statearr_21447_21459[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21440 === 1))
{var inst_21418 = before_jsload.call(null,files);var inst_21419 = figwheel.client.add_request_urls.call(null,opts,files);var inst_21420 = figwheel.client.load_all_js_files.call(null,inst_21419);var state_21439__$1 = (function (){var statearr_21448 = state_21439;(statearr_21448[11] = inst_21418);
return statearr_21448;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21439__$1,2,inst_21420);
} else
{return null;
}
}
}
}
}
}
});})(c__9731__auto__,map__21416,map__21416__$1,opts,on_jsload,before_jsload,map__21417,map__21417__$1,files))
;return ((function (switch__9716__auto__,c__9731__auto__,map__21416,map__21416__$1,opts,on_jsload,before_jsload,map__21417,map__21417__$1,files){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_21452 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21452[0] = state_machine__9717__auto__);
(statearr_21452[1] = 1);
return statearr_21452;
});
var state_machine__9717__auto____1 = (function (state_21439){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_21439);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e21453){if((e21453 instanceof Object))
{var ex__9720__auto__ = e21453;var statearr_21454_21460 = state_21439;(statearr_21454_21460[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21439);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21461 = state_21439;
state_21439 = G__21461;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_21439){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_21439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__,map__21416,map__21416__$1,opts,on_jsload,before_jsload,map__21417,map__21417__$1,files))
})();var state__9733__auto__ = (function (){var statearr_21455 = f__9732__auto__.call(null);(statearr_21455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_21455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__,map__21416,map__21416__$1,opts,on_jsload,before_jsload,map__21417,map__21417__$1,files))
);
return c__9731__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__21462,link_href){var map__21464 = p__21462;var map__21464__$1 = ((cljs.core.seq_QMARK_.call(null,map__21464))?cljs.core.apply.call(null,cljs.core.hash_map,map__21464):map__21464);var request_url = cljs.core.get.call(null,map__21464__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__21464__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__,parent){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__,parent){
return (function (state_21485){var state_val_21486 = (state_21485[1]);if((state_val_21486 === 2))
{var inst_21482 = (state_21485[2]);var inst_21483 = parent.removeChild(orig_link);var state_21485__$1 = (function (){var statearr_21487 = state_21485;(statearr_21487[7] = inst_21482);
return statearr_21487;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21485__$1,inst_21483);
} else
{if((state_val_21486 === 1))
{var inst_21480 = cljs.core.async.timeout.call(null,200);var state_21485__$1 = state_21485;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21485__$1,2,inst_21480);
} else
{return null;
}
}
});})(c__9731__auto__,parent))
;return ((function (switch__9716__auto__,c__9731__auto__,parent){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_21491 = [null,null,null,null,null,null,null,null];(statearr_21491[0] = state_machine__9717__auto__);
(statearr_21491[1] = 1);
return statearr_21491;
});
var state_machine__9717__auto____1 = (function (state_21485){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_21485);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e21492){if((e21492 instanceof Object))
{var ex__9720__auto__ = e21492;var statearr_21493_21495 = state_21485;(statearr_21493_21495[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21485);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21496 = state_21485;
state_21485 = G__21496;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_21485){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_21485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__,parent))
})();var state__9733__auto__ = (function (){var statearr_21494 = f__9732__auto__.call(null);(statearr_21494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_21494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__,parent))
);
return c__9731__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__21497){var map__21499 = p__21497;var map__21499__$1 = ((cljs.core.seq_QMARK_.call(null,map__21499))?cljs.core.apply.call(null,cljs.core.hash_map,map__21499):map__21499);var f_data = map__21499__$1;var request_url = cljs.core.get.call(null,map__21499__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__21499__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__21500,files_msg){var map__21522 = p__21500;var map__21522__$1 = ((cljs.core.seq_QMARK_.call(null,map__21522))?cljs.core.apply.call(null,cljs.core.hash_map,map__21522):map__21522);var opts = map__21522__$1;var on_cssload = cljs.core.get.call(null,map__21522__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__21523_21543 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__21524_21544 = null;var count__21525_21545 = 0;var i__21526_21546 = 0;while(true){
if((i__21526_21546 < count__21525_21545))
{var f_21547 = cljs.core._nth.call(null,chunk__21524_21544,i__21526_21546);figwheel.client.reload_css_file.call(null,f_21547);
{
var G__21548 = seq__21523_21543;
var G__21549 = chunk__21524_21544;
var G__21550 = count__21525_21545;
var G__21551 = (i__21526_21546 + 1);
seq__21523_21543 = G__21548;
chunk__21524_21544 = G__21549;
count__21525_21545 = G__21550;
i__21526_21546 = G__21551;
continue;
}
} else
{var temp__4126__auto___21552 = cljs.core.seq.call(null,seq__21523_21543);if(temp__4126__auto___21552)
{var seq__21523_21553__$1 = temp__4126__auto___21552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21523_21553__$1))
{var c__8628__auto___21554 = cljs.core.chunk_first.call(null,seq__21523_21553__$1);{
var G__21555 = cljs.core.chunk_rest.call(null,seq__21523_21553__$1);
var G__21556 = c__8628__auto___21554;
var G__21557 = cljs.core.count.call(null,c__8628__auto___21554);
var G__21558 = 0;
seq__21523_21543 = G__21555;
chunk__21524_21544 = G__21556;
count__21525_21545 = G__21557;
i__21526_21546 = G__21558;
continue;
}
} else
{var f_21559 = cljs.core.first.call(null,seq__21523_21553__$1);figwheel.client.reload_css_file.call(null,f_21559);
{
var G__21560 = cljs.core.next.call(null,seq__21523_21553__$1);
var G__21561 = null;
var G__21562 = 0;
var G__21563 = 0;
seq__21523_21543 = G__21560;
chunk__21524_21544 = G__21561;
count__21525_21545 = G__21562;
i__21526_21546 = G__21563;
continue;
}
}
} else
{}
}
break;
}
var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__,map__21522,map__21522__$1,opts,on_cssload){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__,map__21522,map__21522__$1,opts,on_cssload){
return (function (state_21533){var state_val_21534 = (state_21533[1]);if((state_val_21534 === 2))
{var inst_21529 = (state_21533[2]);var inst_21530 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_21531 = on_cssload.call(null,inst_21530);var state_21533__$1 = (function (){var statearr_21535 = state_21533;(statearr_21535[7] = inst_21529);
return statearr_21535;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21533__$1,inst_21531);
} else
{if((state_val_21534 === 1))
{var inst_21527 = cljs.core.async.timeout.call(null,100);var state_21533__$1 = state_21533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21533__$1,2,inst_21527);
} else
{return null;
}
}
});})(c__9731__auto__,map__21522,map__21522__$1,opts,on_cssload))
;return ((function (switch__9716__auto__,c__9731__auto__,map__21522,map__21522__$1,opts,on_cssload){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_21539 = [null,null,null,null,null,null,null,null];(statearr_21539[0] = state_machine__9717__auto__);
(statearr_21539[1] = 1);
return statearr_21539;
});
var state_machine__9717__auto____1 = (function (state_21533){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_21533);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e21540){if((e21540 instanceof Object))
{var ex__9720__auto__ = e21540;var statearr_21541_21564 = state_21533;(statearr_21541_21564[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21565 = state_21533;
state_21533 = G__21565;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_21533){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_21533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__,map__21522,map__21522__$1,opts,on_cssload))
})();var state__9733__auto__ = (function (){var statearr_21542 = f__9732__auto__.call(null);(statearr_21542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_21542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__,map__21522,map__21522__$1,opts,on_cssload))
);
return c__9731__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__21566){var map__21571 = p__21566;var map__21571__$1 = ((cljs.core.seq_QMARK_.call(null,map__21571))?cljs.core.apply.call(null,cljs.core.hash_map,map__21571):map__21571);var opts = map__21571__$1;var on_compile_fail = cljs.core.get.call(null,map__21571__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__21571__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__21571__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__21571__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__21571,map__21571__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__21572 = cljs.core._EQ_;var expr__21573 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__21572.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__21573)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__21572.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__21573)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__21572.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__21573)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__21571,map__21571__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__21571,map__21571__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__21571,map__21571__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__21571,map__21571__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__21571,map__21571__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__21571,map__21571__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__21571,map__21571__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__21571,map__21571__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__21571,map__21571__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj21578 = {"detail":url};return obj21578;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__21579){var map__21581 = p__21579;var map__21581__$1 = ((cljs.core.seq_QMARK_.call(null,map__21581))?cljs.core.apply.call(null,cljs.core.hash_map,map__21581):map__21581);var class$ = cljs.core.get.call(null,map__21581__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__21581__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__21582){var map__21588 = p__21582;var map__21588__$1 = ((cljs.core.seq_QMARK_.call(null,map__21588))?cljs.core.apply.call(null,cljs.core.hash_map,map__21588):map__21588);var ed = map__21588__$1;var exception_data = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__21588__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__21589_21593 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__21590_21594 = null;var count__21591_21595 = 0;var i__21592_21596 = 0;while(true){
if((i__21592_21596 < count__21591_21595))
{var msg_21597 = cljs.core._nth.call(null,chunk__21590_21594,i__21592_21596);console.log(msg_21597);
{
var G__21598 = seq__21589_21593;
var G__21599 = chunk__21590_21594;
var G__21600 = count__21591_21595;
var G__21601 = (i__21592_21596 + 1);
seq__21589_21593 = G__21598;
chunk__21590_21594 = G__21599;
count__21591_21595 = G__21600;
i__21592_21596 = G__21601;
continue;
}
} else
{var temp__4126__auto___21602 = cljs.core.seq.call(null,seq__21589_21593);if(temp__4126__auto___21602)
{var seq__21589_21603__$1 = temp__4126__auto___21602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21589_21603__$1))
{var c__8628__auto___21604 = cljs.core.chunk_first.call(null,seq__21589_21603__$1);{
var G__21605 = cljs.core.chunk_rest.call(null,seq__21589_21603__$1);
var G__21606 = c__8628__auto___21604;
var G__21607 = cljs.core.count.call(null,c__8628__auto___21604);
var G__21608 = 0;
seq__21589_21593 = G__21605;
chunk__21590_21594 = G__21606;
count__21591_21595 = G__21607;
i__21592_21596 = G__21608;
continue;
}
} else
{var msg_21609 = cljs.core.first.call(null,seq__21589_21603__$1);console.log(msg_21609);
{
var G__21610 = cljs.core.next.call(null,seq__21589_21603__$1);
var G__21611 = null;
var G__21612 = 0;
var G__21613 = 0;
seq__21589_21593 = G__21610;
chunk__21590_21594 = G__21611;
count__21591_21595 = G__21612;
i__21592_21596 = G__21613;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__7880__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__21614){var map__21616 = p__21614;var map__21616__$1 = ((cljs.core.seq_QMARK_.call(null,map__21616))?cljs.core.apply.call(null,cljs.core.hash_map,map__21616):map__21616);var opts = map__21616__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__21614 = null;if (arguments.length > 0) {
  p__21614 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__21614);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__21617){
var p__21614 = cljs.core.seq(arglist__21617);
return watch_and_reload__delegate(p__21614);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map