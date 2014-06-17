// Compiled by ClojureScript 0.0-2202
goog.provide('steampunk.prismic');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
steampunk.prismic.repo = "https://steampunk-blog.prismic.io/api";
steampunk.prismic.get_api = (function get_api(){var c = cljs.core.async.chan.call(null);var err = ((function (c){
return (function (err,api){return cljs.core.print.call(null,err);
});})(c))
;Prismic.Api(steampunk.prismic.repo,((function (c,err){
return (function (p1__10393_SHARP_,p2__10392_SHARP_){var c__6739__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6739__auto__,c,err){
return (function (){var f__6740__auto__ = (function (){var switch__6724__auto__ = ((function (c__6739__auto__,c,err){
return (function (state_10407){var state_val_10408 = (state_10407[1]);if((state_val_10408 === 1))
{var inst_10405 = cljs.core.async.put_BANG_.call(null,c,p2__10392_SHARP_);var state_10407__$1 = state_10407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10407__$1,inst_10405);
} else
{return null;
}
});})(c__6739__auto__,c,err))
;return ((function (switch__6724__auto__,c__6739__auto__,c,err){
return (function() {
var state_machine__6725__auto__ = null;
var state_machine__6725__auto____0 = (function (){var statearr_10412 = [null,null,null,null,null,null,null];(statearr_10412[0] = state_machine__6725__auto__);
(statearr_10412[1] = 1);
return statearr_10412;
});
var state_machine__6725__auto____1 = (function (state_10407){while(true){
var ret_value__6726__auto__ = (function (){try{while(true){
var result__6727__auto__ = switch__6724__auto__.call(null,state_10407);if(cljs.core.keyword_identical_QMARK_.call(null,result__6727__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6727__auto__;
}
break;
}
}catch (e10413){if((e10413 instanceof Object))
{var ex__6728__auto__ = e10413;var statearr_10414_10416 = state_10407;(statearr_10414_10416[5] = ex__6728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10407);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6726__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10417 = state_10407;
state_10407 = G__10417;
continue;
}
} else
{return ret_value__6726__auto__;
}
break;
}
});
state_machine__6725__auto__ = function(state_10407){
switch(arguments.length){
case 0:
return state_machine__6725__auto____0.call(this);
case 1:
return state_machine__6725__auto____1.call(this,state_10407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6725__auto____0;
state_machine__6725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6725__auto____1;
return state_machine__6725__auto__;
})()
;})(switch__6724__auto__,c__6739__auto__,c,err))
})();var state__6741__auto__ = (function (){var statearr_10415 = f__6740__auto__.call(null);(statearr_10415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6739__auto__);
return statearr_10415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6741__auto__);
});})(c__6739__auto__,c,err))
);
return c__6739__auto__;
});})(c,err))
);
return c;
});
steampunk.prismic.api = (function (){var c__6739__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6739__auto__){
return (function (){var f__6740__auto__ = (function (){var switch__6724__auto__ = ((function (c__6739__auto__){
return (function (state_10421){var state_val_10422 = (state_10421[1]);if((state_val_10422 === 2))
{var inst_10419 = (state_10421[2]);var state_10421__$1 = state_10421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10421__$1,inst_10419);
} else
{if((state_val_10422 === 1))
{var state_10421__$1 = state_10421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10421__$1,2,steampunk.prismic.get_api);
} else
{return null;
}
}
});})(c__6739__auto__))
;return ((function (switch__6724__auto__,c__6739__auto__){
return (function() {
var state_machine__6725__auto__ = null;
var state_machine__6725__auto____0 = (function (){var statearr_10426 = [null,null,null,null,null,null,null];(statearr_10426[0] = state_machine__6725__auto__);
(statearr_10426[1] = 1);
return statearr_10426;
});
var state_machine__6725__auto____1 = (function (state_10421){while(true){
var ret_value__6726__auto__ = (function (){try{while(true){
var result__6727__auto__ = switch__6724__auto__.call(null,state_10421);if(cljs.core.keyword_identical_QMARK_.call(null,result__6727__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6727__auto__;
}
break;
}
}catch (e10427){if((e10427 instanceof Object))
{var ex__6728__auto__ = e10427;var statearr_10428_10430 = state_10421;(statearr_10428_10430[5] = ex__6728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10421);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6726__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10431 = state_10421;
state_10421 = G__10431;
continue;
}
} else
{return ret_value__6726__auto__;
}
break;
}
});
state_machine__6725__auto__ = function(state_10421){
switch(arguments.length){
case 0:
return state_machine__6725__auto____0.call(this);
case 1:
return state_machine__6725__auto____1.call(this,state_10421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6725__auto____0;
state_machine__6725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6725__auto____1;
return state_machine__6725__auto__;
})()
;})(switch__6724__auto__,c__6739__auto__))
})();var state__6741__auto__ = (function (){var statearr_10429 = f__6740__auto__.call(null);(statearr_10429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6739__auto__);
return statearr_10429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6741__auto__);
});})(c__6739__auto__))
);
return c__6739__auto__;
})();
steampunk.prismic.api.forms("everything");
steampunk.prismic.faqs = (function faqs(){var c = cljs.core.async.chan.call(null);var req = steampunk.prismic.api.form("everything").ref();req.submit(((function (c,req){
return (function (p1__10433_SHARP_,p2__10432_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p2__10432_SHARP_);
});})(c,req))
);
var c__6739__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__6739__auto__,c,req){
return (function (){var f__6740__auto__ = (function (){var switch__6724__auto__ = ((function (c__6739__auto__,c,req){
return (function (state_10449){var state_val_10450 = (state_10449[1]);if((state_val_10450 === 2))
{var inst_10447 = (state_10449[2]);var state_10449__$1 = state_10449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10449__$1,inst_10447);
} else
{if((state_val_10450 === 1))
{var state_10449__$1 = state_10449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10449__$1,2,c);
} else
{return null;
}
}
});})(c__6739__auto__,c,req))
;return ((function (switch__6724__auto__,c__6739__auto__,c,req){
return (function() {
var state_machine__6725__auto__ = null;
var state_machine__6725__auto____0 = (function (){var statearr_10454 = [null,null,null,null,null,null,null];(statearr_10454[0] = state_machine__6725__auto__);
(statearr_10454[1] = 1);
return statearr_10454;
});
var state_machine__6725__auto____1 = (function (state_10449){while(true){
var ret_value__6726__auto__ = (function (){try{while(true){
var result__6727__auto__ = switch__6724__auto__.call(null,state_10449);if(cljs.core.keyword_identical_QMARK_.call(null,result__6727__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6727__auto__;
}
break;
}
}catch (e10455){if((e10455 instanceof Object))
{var ex__6728__auto__ = e10455;var statearr_10456_10458 = state_10449;(statearr_10456_10458[5] = ex__6728__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10449);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6726__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10459 = state_10449;
state_10449 = G__10459;
continue;
}
} else
{return ret_value__6726__auto__;
}
break;
}
});
state_machine__6725__auto__ = function(state_10449){
switch(arguments.length){
case 0:
return state_machine__6725__auto____0.call(this);
case 1:
return state_machine__6725__auto____1.call(this,state_10449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6725__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6725__auto____0;
state_machine__6725__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6725__auto____1;
return state_machine__6725__auto__;
})()
;})(switch__6724__auto__,c__6739__auto__,c,req))
})();var state__6741__auto__ = (function (){var statearr_10457 = f__6740__auto__.call(null);(statearr_10457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6739__auto__);
return statearr_10457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6741__auto__);
});})(c__6739__auto__,c,req))
);
return c__6739__auto__;
});
steampunk.prismic.faqs.call(null);

//# sourceMappingURL=prismic.js.map