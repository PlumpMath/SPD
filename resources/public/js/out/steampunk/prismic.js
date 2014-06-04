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
return (function (p1__15768_SHARP_,p2__15767_SHARP_){var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__,c,err){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__,c,err){
return (function (state_15782){var state_val_15783 = (state_15782[1]);if((state_val_15783 === 1))
{var inst_15780 = cljs.core.async.put_BANG_.call(null,c,p2__15767_SHARP_);var state_15782__$1 = state_15782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15782__$1,inst_15780);
} else
{return null;
}
});})(c__9731__auto__,c,err))
;return ((function (switch__9716__auto__,c__9731__auto__,c,err){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_15787 = [null,null,null,null,null,null,null];(statearr_15787[0] = state_machine__9717__auto__);
(statearr_15787[1] = 1);
return statearr_15787;
});
var state_machine__9717__auto____1 = (function (state_15782){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_15782);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e15788){if((e15788 instanceof Object))
{var ex__9720__auto__ = e15788;var statearr_15789_15791 = state_15782;(statearr_15789_15791[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15792 = state_15782;
state_15782 = G__15792;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_15782){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_15782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__,c,err))
})();var state__9733__auto__ = (function (){var statearr_15790 = f__9732__auto__.call(null);(statearr_15790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_15790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__,c,err))
);
return c__9731__auto__;
});})(c,err))
);
return c;
});
steampunk.prismic.api = (function (){var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__){
return (function (state_15796){var state_val_15797 = (state_15796[1]);if((state_val_15797 === 2))
{var inst_15794 = (state_15796[2]);var state_15796__$1 = state_15796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15796__$1,inst_15794);
} else
{if((state_val_15797 === 1))
{var state_15796__$1 = state_15796;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15796__$1,2,steampunk.prismic.get_api);
} else
{return null;
}
}
});})(c__9731__auto__))
;return ((function (switch__9716__auto__,c__9731__auto__){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_15801 = [null,null,null,null,null,null,null];(statearr_15801[0] = state_machine__9717__auto__);
(statearr_15801[1] = 1);
return statearr_15801;
});
var state_machine__9717__auto____1 = (function (state_15796){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_15796);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e15802){if((e15802 instanceof Object))
{var ex__9720__auto__ = e15802;var statearr_15803_15805 = state_15796;(statearr_15803_15805[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15796);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15806 = state_15796;
state_15796 = G__15806;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_15796){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_15796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__))
})();var state__9733__auto__ = (function (){var statearr_15804 = f__9732__auto__.call(null);(statearr_15804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_15804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__))
);
return c__9731__auto__;
})();
steampunk.prismic.api.forms("everything");
steampunk.prismic.faqs = (function faqs(){var c = cljs.core.async.chan.call(null);var req = steampunk.prismic.api.form("everything").ref();req.submit(((function (c,req){
return (function (p1__15808_SHARP_,p2__15807_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p2__15807_SHARP_);
});})(c,req))
);
var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__,c,req){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__,c,req){
return (function (state_15824){var state_val_15825 = (state_15824[1]);if((state_val_15825 === 2))
{var inst_15822 = (state_15824[2]);var state_15824__$1 = state_15824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15824__$1,inst_15822);
} else
{if((state_val_15825 === 1))
{var state_15824__$1 = state_15824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15824__$1,2,c);
} else
{return null;
}
}
});})(c__9731__auto__,c,req))
;return ((function (switch__9716__auto__,c__9731__auto__,c,req){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_15829 = [null,null,null,null,null,null,null];(statearr_15829[0] = state_machine__9717__auto__);
(statearr_15829[1] = 1);
return statearr_15829;
});
var state_machine__9717__auto____1 = (function (state_15824){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_15824);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e15830){if((e15830 instanceof Object))
{var ex__9720__auto__ = e15830;var statearr_15831_15833 = state_15824;(statearr_15831_15833[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15824);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15834 = state_15824;
state_15824 = G__15834;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_15824){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_15824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__,c,req))
})();var state__9733__auto__ = (function (){var statearr_15832 = f__9732__auto__.call(null);(statearr_15832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_15832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__,c,req))
);
return c__9731__auto__;
});
steampunk.prismic.faqs.call(null);

//# sourceMappingURL=prismic.js.map