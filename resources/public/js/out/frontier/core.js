// Compiled by ClojureScript 0.0-2202
goog.provide('frontier.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('cljs.core.async');
goog.require('devcards.util.edn_renderer');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
frontier.core.dev_null = (function dev_null(in$){var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__){
return (function (state_15998){var state_val_15999 = (state_15998[1]);if((state_val_15999 === 7))
{var inst_15994 = (state_15998[2]);var state_15998__$1 = state_15998;var statearr_16000_16013 = state_15998__$1;(statearr_16000_16013[2] = inst_15994);
(statearr_16000_16013[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 6))
{var state_15998__$1 = state_15998;var statearr_16001_16014 = state_15998__$1;(statearr_16001_16014[2] = null);
(statearr_16001_16014[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 5))
{var state_15998__$1 = state_15998;var statearr_16002_16015 = state_15998__$1;(statearr_16002_16015[2] = new cljs.core.Keyword(null,"closed","closed",3951351006));
(statearr_16002_16015[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 4))
{var inst_15988 = (state_15998[2]);var inst_15989 = (inst_15988 == null);var state_15998__$1 = state_15998;if(cljs.core.truth_(inst_15989))
{var statearr_16003_16016 = state_15998__$1;(statearr_16003_16016[1] = 5);
} else
{var statearr_16004_16017 = state_15998__$1;(statearr_16004_16017[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15999 === 3))
{var inst_15996 = (state_15998[2]);var state_15998__$1 = state_15998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15998__$1,inst_15996);
} else
{if((state_val_15999 === 2))
{var state_15998__$1 = state_15998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15998__$1,4,in$);
} else
{if((state_val_15999 === 1))
{var state_15998__$1 = state_15998;var statearr_16005_16018 = state_15998__$1;(statearr_16005_16018[2] = null);
(statearr_16005_16018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__9731__auto__))
;return ((function (switch__9716__auto__,c__9731__auto__){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_16009 = [null,null,null,null,null,null,null];(statearr_16009[0] = state_machine__9717__auto__);
(statearr_16009[1] = 1);
return statearr_16009;
});
var state_machine__9717__auto____1 = (function (state_15998){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_15998);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e16010){if((e16010 instanceof Object))
{var ex__9720__auto__ = e16010;var statearr_16011_16019 = state_15998;(statearr_16011_16019[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16020 = state_15998;
state_15998 = G__16020;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_15998){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_15998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__))
})();var state__9733__auto__ = (function (){var statearr_16012 = f__9732__auto__.call(null);(statearr_16012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_16012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__))
);
return c__9731__auto__;
});
frontier.core.IInit = (function (){var obj16022 = {};return obj16022;
})();
frontier.core._initialize = (function _initialize(_,effect_chan,event_chan){if((function (){var and__7868__auto__ = _;if(and__7868__auto__)
{return _.frontier$core$IInit$_initialize$arity$3;
} else
{return and__7868__auto__;
}
})())
{return _.frontier$core$IInit$_initialize$arity$3(_,effect_chan,event_chan);
} else
{var x__8507__auto__ = (((_ == null))?null:_);return (function (){var or__7880__auto__ = (frontier.core._initialize[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (frontier.core._initialize["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInit.-initialize",_);
}
}
})().call(null,_,effect_chan,event_chan);
}
});
frontier.core.IStop = (function (){var obj16024 = {};return obj16024;
})();
frontier.core._stop = (function _stop(_){if((function (){var and__7868__auto__ = _;if(and__7868__auto__)
{return _.frontier$core$IStop$_stop$arity$1;
} else
{return and__7868__auto__;
}
})())
{return _.frontier$core$IStop$_stop$arity$1(_);
} else
{var x__8507__auto__ = (((_ == null))?null:_);return (function (){var or__7880__auto__ = (frontier.core._stop[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (frontier.core._stop["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStop.-stop",_);
}
}
})().call(null,_);
}
});
frontier.core.ITransform = (function (){var obj16026 = {};return obj16026;
})();
frontier.core._transform = (function _transform(_,msg,state){if((function (){var and__7868__auto__ = _;if(and__7868__auto__)
{return _.frontier$core$ITransform$_transform$arity$3;
} else
{return and__7868__auto__;
}
})())
{return _.frontier$core$ITransform$_transform$arity$3(_,msg,state);
} else
{var x__8507__auto__ = (((_ == null))?null:_);return (function (){var or__7880__auto__ = (frontier.core._transform[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (frontier.core._transform["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.-transform",_);
}
}
})().call(null,_,msg,state);
}
});
frontier.core.IEffect = (function (){var obj16028 = {};return obj16028;
})();
frontier.core._effect = (function _effect(_,msg,state,event_chan,effect_chan){if((function (){var and__7868__auto__ = _;if(and__7868__auto__)
{return _.frontier$core$IEffect$_effect$arity$5;
} else
{return and__7868__auto__;
}
})())
{return _.frontier$core$IEffect$_effect$arity$5(_,msg,state,event_chan,effect_chan);
} else
{var x__8507__auto__ = (((_ == null))?null:_);return (function (){var or__7880__auto__ = (frontier.core._effect[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (frontier.core._effect["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEffect.-effect",_);
}
}
})().call(null,_,msg,state,event_chan,effect_chan);
}
});
frontier.core.IInputFilter = (function (){var obj16030 = {};return obj16030;
})();
frontier.core._filter_input = (function _filter_input(_,msg,state){if((function (){var and__7868__auto__ = _;if(and__7868__auto__)
{return _.frontier$core$IInputFilter$_filter_input$arity$3;
} else
{return and__7868__auto__;
}
})())
{return _.frontier$core$IInputFilter$_filter_input$arity$3(_,msg,state);
} else
{var x__8507__auto__ = (((_ == null))?null:_);return (function (){var or__7880__auto__ = (frontier.core._filter_input[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (frontier.core._filter_input["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInputFilter.-filter-input",_);
}
}
})().call(null,_,msg,state);
}
});
frontier.core.IDerive = (function (){var obj16032 = {};return obj16032;
})();
frontier.core._derive = (function _derive(_,state){if((function (){var and__7868__auto__ = _;if(and__7868__auto__)
{return _.frontier$core$IDerive$_derive$arity$2;
} else
{return and__7868__auto__;
}
})())
{return _.frontier$core$IDerive$_derive$arity$2(_,state);
} else
{var x__8507__auto__ = (((_ == null))?null:_);return (function (){var or__7880__auto__ = (frontier.core._derive[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (frontier.core._derive["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDerive.-derive",_);
}
}
})().call(null,_,state);
}
});
frontier.core.IRender = (function (){var obj16034 = {};return obj16034;
})();
frontier.core._render = (function _render(_,state){if((function (){var and__7868__auto__ = _;if(and__7868__auto__)
{return _.frontier$core$IRender$_render$arity$2;
} else
{return and__7868__auto__;
}
})())
{return _.frontier$core$IRender$_render$arity$2(_,state);
} else
{var x__8507__auto__ = (((_ == null))?null:_);return (function (){var or__7880__auto__ = (frontier.core._render[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (frontier.core._render["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.-render",_);
}
}
})().call(null,_,state);
}
});
frontier.core.IWillAccept = (function (){var obj16036 = {};return obj16036;
})();
frontier.core._will_accept_QMARK_ = (function _will_accept_QMARK_(o,msg){if((function (){var and__7868__auto__ = o;if(and__7868__auto__)
{return o.frontier$core$IWillAccept$_will_accept_QMARK_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return o.frontier$core$IWillAccept$_will_accept_QMARK_$arity$2(o,msg);
} else
{var x__8507__auto__ = (((o == null))?null:o);return (function (){var or__7880__auto__ = (frontier.core._will_accept_QMARK_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (frontier.core._will_accept_QMARK_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillAccept.-will-accept?",o);
}
}
})().call(null,o,msg);
}
});
/**
* @param {...*} var_args
*/
frontier.core.add_effects = (function() { 
var add_effects__delegate = function (state,args){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__effects","__effects",1628718228)], null),(function (effects){return cljs.core.concat.call(null,effects,args);
}));
};
var add_effects = function (state,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return add_effects__delegate.call(this,state,args);};
add_effects.cljs$lang$maxFixedArity = 1;
add_effects.cljs$lang$applyTo = (function (arglist__16037){
var state = cljs.core.first(arglist__16037);
var args = cljs.core.rest(arglist__16037);
return add_effects__delegate(state,args);
});
add_effects.cljs$core$IFn$_invoke$arity$variadic = add_effects__delegate;
return add_effects;
})()
;
/**
* @param {...*} var_args
*/
frontier.core.compose = (function() { 
var compose__delegate = function (components){var initializers = cljs.core.filter.call(null,(function (p1__16038_SHARP_){var G__16069 = p1__16038_SHARP_;if(G__16069)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16069.frontier$core$IInit$;
}
})()))
{return true;
} else
{if((!G__16069.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IInit,G__16069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IInit,G__16069);
}
}),components);var stoppers = cljs.core.filter.call(null,((function (initializers){
return (function (p1__16039_SHARP_){var G__16070 = p1__16039_SHARP_;if(G__16070)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16070.frontier$core$IStop$;
}
})()))
{return true;
} else
{if((!G__16070.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IStop,G__16070);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IStop,G__16070);
}
});})(initializers))
,components);var transforms = cljs.core.filter.call(null,((function (initializers,stoppers){
return (function (p1__16040_SHARP_){var G__16071 = p1__16040_SHARP_;if(G__16071)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16071.frontier$core$ITransform$;
}
})()))
{return true;
} else
{if((!G__16071.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.ITransform,G__16071);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.ITransform,G__16071);
}
});})(initializers,stoppers))
,components);var effects = cljs.core.filter.call(null,((function (initializers,stoppers,transforms){
return (function (p1__16041_SHARP_){var G__16072 = p1__16041_SHARP_;if(G__16072)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16072.frontier$core$IEffect$;
}
})()))
{return true;
} else
{if((!G__16072.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IEffect,G__16072);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IEffect,G__16072);
}
});})(initializers,stoppers,transforms))
,components);var input_filters = cljs.core.filter.call(null,((function (initializers,stoppers,transforms,effects){
return (function (p1__16042_SHARP_){var G__16073 = p1__16042_SHARP_;if(G__16073)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16073.frontier$core$IInputFilter$;
}
})()))
{return true;
} else
{if((!G__16073.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IInputFilter,G__16073);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IInputFilter,G__16073);
}
});})(initializers,stoppers,transforms,effects))
,components);var derivatives = cljs.core.filter.call(null,((function (initializers,stoppers,transforms,effects,input_filters){
return (function (p1__16043_SHARP_){var G__16074 = p1__16043_SHARP_;if(G__16074)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16074.frontier$core$IDerive$;
}
})()))
{return true;
} else
{if((!G__16074.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IDerive,G__16074);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IDerive,G__16074);
}
});})(initializers,stoppers,transforms,effects,input_filters))
,components);var ifilter = cljs.core.apply.call(null,cljs.core.comp,cljs.core.mapv.call(null,((function (initializers,stoppers,transforms,effects,input_filters,derivatives){
return (function (pl){var func = cljs.core.partial.call(null,frontier.core._filter_input,pl);return ((function (func,initializers,stoppers,transforms,effects,input_filters,derivatives){
return (function (p__16075){var vec__16076 = p__16075;var msg = cljs.core.nth.call(null,vec__16076,0,null);var state = cljs.core.nth.call(null,vec__16076,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [func.call(null,msg,state),state], null);
});
;})(func,initializers,stoppers,transforms,effects,input_filters,derivatives))
});})(initializers,stoppers,transforms,effects,input_filters,derivatives))
,cljs.core.reverse.call(null,input_filters)));var itrans = cljs.core.apply.call(null,cljs.core.comp,cljs.core.mapv.call(null,((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter){
return (function (pl){var func = cljs.core.partial.call(null,frontier.core._transform,pl);return ((function (func,initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter){
return (function (p__16077){var vec__16078 = p__16077;var msg = cljs.core.nth.call(null,vec__16078,0,null);var state = cljs.core.nth.call(null,vec__16078,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg,func.call(null,msg,state)], null);
});
;})(func,initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter))
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter))
,cljs.core.reverse.call(null,transforms)));var ideriv = cljs.core.apply.call(null,cljs.core.comp,cljs.core.mapv.call(null,((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans){
return (function (pl){return cljs.core.partial.call(null,frontier.core._derive,pl);
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans))
,cljs.core.reverse.call(null,derivatives)));var ieffects = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv){
return (function (msg,state,event_chan,effect_chan){var seq__16079 = cljs.core.seq.call(null,cljs.core.reverse.call(null,effects));var chunk__16080 = null;var count__16081 = 0;var i__16082 = 0;while(true){
if((i__16082 < count__16081))
{var pl = cljs.core._nth.call(null,chunk__16080,i__16082);frontier.core._effect.call(null,pl,msg,state,event_chan,effect_chan);
{
var G__16094 = seq__16079;
var G__16095 = chunk__16080;
var G__16096 = count__16081;
var G__16097 = (i__16082 + 1);
seq__16079 = G__16094;
chunk__16080 = G__16095;
count__16081 = G__16096;
i__16082 = G__16097;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16079);if(temp__4126__auto__)
{var seq__16079__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16079__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__16079__$1);{
var G__16098 = cljs.core.chunk_rest.call(null,seq__16079__$1);
var G__16099 = c__8628__auto__;
var G__16100 = cljs.core.count.call(null,c__8628__auto__);
var G__16101 = 0;
seq__16079 = G__16098;
chunk__16080 = G__16099;
count__16081 = G__16100;
i__16082 = G__16101;
continue;
}
} else
{var pl = cljs.core.first.call(null,seq__16079__$1);frontier.core._effect.call(null,pl,msg,state,event_chan,effect_chan);
{
var G__16102 = cljs.core.next.call(null,seq__16079__$1);
var G__16103 = null;
var G__16104 = 0;
var G__16105 = 0;
seq__16079 = G__16102;
chunk__16080 = G__16103;
count__16081 = G__16104;
i__16082 = G__16105;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv))
;if(typeof frontier.core.t16083 !== 'undefined')
{} else
{
/**
* @constructor
*/
frontier.core.t16083 = (function (itrans,derivatives,compose,initializers,ideriv,transforms,stoppers,components,ifilter,input_filters,effects,ieffects,meta16084){
this.itrans = itrans;
this.derivatives = derivatives;
this.compose = compose;
this.initializers = initializers;
this.ideriv = ideriv;
this.transforms = transforms;
this.stoppers = stoppers;
this.components = components;
this.ifilter = ifilter;
this.input_filters = input_filters;
this.effects = effects;
this.ieffects = ieffects;
this.meta16084 = meta16084;
this.cljs$lang$protocol_mask$partition1$ = 8192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
frontier.core.t16083.cljs$lang$type = true;
frontier.core.t16083.cljs$lang$ctorStr = "frontier.core/t16083";
frontier.core.t16083.cljs$lang$ctorPrWriter = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"frontier.core/t16083");
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
frontier.core.t16083.prototype.frontier$core$IDerive$ = true;
frontier.core.t16083.prototype.frontier$core$IDerive$_derive$arity$2 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_,state){var self__ = this;
var ___$1 = this;return self__.ideriv.call(null,state);
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
frontier.core.t16083.prototype.frontier$core$IInputFilter$ = true;
frontier.core.t16083.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_,msg,state){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,self__.ifilter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg,state], null)));
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
frontier.core.t16083.prototype.frontier$core$IEffect$ = true;
frontier.core.t16083.prototype.frontier$core$IEffect$_effect$arity$5 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_,msg,state,event_chan,effect_chan){var self__ = this;
var ___$1 = this;return self__.ieffects.call(null,msg,state,event_chan,effect_chan);
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
frontier.core.t16083.prototype.frontier$core$ITransform$ = true;
frontier.core.t16083.prototype.frontier$core$ITransform$_transform$arity$3 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_,msg,state){var self__ = this;
var ___$1 = this;return cljs.core.last.call(null,self__.itrans.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg,state], null)));
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
frontier.core.t16083.prototype.frontier$core$IStop$ = true;
frontier.core.t16083.prototype.frontier$core$IStop$_stop$arity$1 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_){var self__ = this;
var ___$1 = this;var seq__16086 = cljs.core.seq.call(null,self__.stoppers);var chunk__16087 = null;var count__16088 = 0;var i__16089 = 0;while(true){
if((i__16089 < count__16088))
{var pl = cljs.core._nth.call(null,chunk__16087,i__16089);frontier.core._stop.call(null,pl);
{
var G__16106 = seq__16086;
var G__16107 = chunk__16087;
var G__16108 = count__16088;
var G__16109 = (i__16089 + 1);
seq__16086 = G__16106;
chunk__16087 = G__16107;
count__16088 = G__16108;
i__16089 = G__16109;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16086);if(temp__4126__auto__)
{var seq__16086__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16086__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__16086__$1);{
var G__16110 = cljs.core.chunk_rest.call(null,seq__16086__$1);
var G__16111 = c__8628__auto__;
var G__16112 = cljs.core.count.call(null,c__8628__auto__);
var G__16113 = 0;
seq__16086 = G__16110;
chunk__16087 = G__16111;
count__16088 = G__16112;
i__16089 = G__16113;
continue;
}
} else
{var pl = cljs.core.first.call(null,seq__16086__$1);frontier.core._stop.call(null,pl);
{
var G__16114 = cljs.core.next.call(null,seq__16086__$1);
var G__16115 = null;
var G__16116 = 0;
var G__16117 = 0;
seq__16086 = G__16114;
chunk__16087 = G__16115;
count__16088 = G__16116;
i__16089 = G__16117;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
frontier.core.t16083.prototype.frontier$core$IInit$ = true;
frontier.core.t16083.prototype.frontier$core$IInit$_initialize$arity$3 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_,state,event_chan){var self__ = this;
var ___$1 = this;var seq__16090 = cljs.core.seq.call(null,self__.initializers);var chunk__16091 = null;var count__16092 = 0;var i__16093 = 0;while(true){
if((i__16093 < count__16092))
{var pl = cljs.core._nth.call(null,chunk__16091,i__16093);frontier.core._initialize.call(null,pl,state,event_chan);
{
var G__16118 = seq__16090;
var G__16119 = chunk__16091;
var G__16120 = count__16092;
var G__16121 = (i__16093 + 1);
seq__16090 = G__16118;
chunk__16091 = G__16119;
count__16092 = G__16120;
i__16093 = G__16121;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16090);if(temp__4126__auto__)
{var seq__16090__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16090__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__16090__$1);{
var G__16122 = cljs.core.chunk_rest.call(null,seq__16090__$1);
var G__16123 = c__8628__auto__;
var G__16124 = cljs.core.count.call(null,c__8628__auto__);
var G__16125 = 0;
seq__16090 = G__16122;
chunk__16091 = G__16123;
count__16092 = G__16124;
i__16093 = G__16125;
continue;
}
} else
{var pl = cljs.core.first.call(null,seq__16090__$1);frontier.core._initialize.call(null,pl,state,event_chan);
{
var G__16126 = cljs.core.next.call(null,seq__16090__$1);
var G__16127 = null;
var G__16128 = 0;
var G__16129 = 0;
seq__16090 = G__16126;
chunk__16091 = G__16127;
count__16092 = G__16128;
i__16093 = G__16129;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
frontier.core.t16083.prototype.cljs$core$ICloneable$_clone$arity$1 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (o){var self__ = this;
var o__$1 = this;return o__$1;
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
frontier.core.t16083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_16085){var self__ = this;
var _16085__$1 = this;return self__.meta16084;
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
frontier.core.t16083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_16085,meta16084__$1){var self__ = this;
var _16085__$1 = this;return (new frontier.core.t16083(self__.itrans,self__.derivatives,self__.compose,self__.initializers,self__.ideriv,self__.transforms,self__.stoppers,self__.components,self__.ifilter,self__.input_filters,self__.effects,self__.ieffects,meta16084__$1));
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
frontier.core.__GT_t16083 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function __GT_t16083(itrans__$1,derivatives__$1,compose__$1,initializers__$1,ideriv__$1,transforms__$1,stoppers__$1,components__$1,ifilter__$1,input_filters__$1,effects__$1,ieffects__$1,meta16084){return (new frontier.core.t16083(itrans__$1,derivatives__$1,compose__$1,initializers__$1,ideriv__$1,transforms__$1,stoppers__$1,components__$1,ifilter__$1,input_filters__$1,effects__$1,ieffects__$1,meta16084));
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;
}
return (new frontier.core.t16083(itrans,derivatives,compose,initializers,ideriv,transforms,stoppers,components,ifilter,input_filters,effects,ieffects,null));
};
var compose = function (var_args){
var components = null;if (arguments.length > 0) {
  components = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return compose__delegate.call(this,components);};
compose.cljs$lang$maxFixedArity = 0;
compose.cljs$lang$applyTo = (function (arglist__16130){
var components = cljs.core.seq(arglist__16130);
return compose__delegate(components);
});
compose.cljs$core$IFn$_invoke$arity$variadic = compose__delegate;
return compose;
})()
;
frontier.core.make_renderable = (function make_renderable(component,render_function){var x16132 = cljs.core.clone.call(null,component);x16132.frontier$core$IRender$ = true;
x16132.frontier$core$IRender$_render$arity$2 = ((function (x16132){
return (function (_,state){var ___$1 = this;return render_function.call(null,state);
});})(x16132))
;
return x16132;
});
frontier.core.trans_helper_STAR_ = (function trans_helper_STAR_(comp_STAR_,effect_handler,state,msg){var temp__4124__auto__ = frontier.core._transform.call(null,comp_STAR_,msg,state);if(cljs.core.truth_(temp__4124__auto__))
{var new_state = temp__4124__auto__;effect_handler.call(null,new cljs.core.Keyword(null,"__effects","__effects",1628718228).cljs$core$IFn$_invoke$arity$1(new_state));
return cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"__effects","__effects",1628718228));
} else
{return state;
}
});
frontier.core.state_from_msg_list = (function state_from_msg_list(component,msg_list,initial_state){return cljs.core.reduce.call(null,cljs.core.partial.call(null,frontier.core.trans_helper_STAR_,component,cljs.core.identity),initial_state,msg_list);
});
frontier.core.transform_with_effects = (function transform_with_effects(component,effect_chan,state,msg){return frontier.core.trans_helper_STAR_.call(null,component,(function (p1__16133_SHARP_){var seq__16138 = cljs.core.seq.call(null,p1__16133_SHARP_);var chunk__16139 = null;var count__16140 = 0;var i__16141 = 0;while(true){
if((i__16141 < count__16140))
{var ef = cljs.core._nth.call(null,chunk__16139,i__16141);cljs.core.async.put_BANG_.call(null,effect_chan,ef);
{
var G__16142 = seq__16138;
var G__16143 = chunk__16139;
var G__16144 = count__16140;
var G__16145 = (i__16141 + 1);
seq__16138 = G__16142;
chunk__16139 = G__16143;
count__16140 = G__16144;
i__16141 = G__16145;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16138);if(temp__4126__auto__)
{var seq__16138__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16138__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__16138__$1);{
var G__16146 = cljs.core.chunk_rest.call(null,seq__16138__$1);
var G__16147 = c__8628__auto__;
var G__16148 = cljs.core.count.call(null,c__8628__auto__);
var G__16149 = 0;
seq__16138 = G__16146;
chunk__16139 = G__16147;
count__16140 = G__16148;
i__16141 = G__16149;
continue;
}
} else
{var ef = cljs.core.first.call(null,seq__16138__$1);cljs.core.async.put_BANG_.call(null,effect_chan,ef);
{
var G__16150 = cljs.core.next.call(null,seq__16138__$1);
var G__16151 = null;
var G__16152 = 0;
var G__16153 = 0;
seq__16138 = G__16150;
chunk__16139 = G__16151;
count__16140 = G__16152;
i__16141 = G__16153;
continue;
}
}
} else
{return null;
}
}
break;
}
}),state,msg);
});
frontier.core.move_to_top = (function move_to_top(path,state){var temp__4124__auto__ = cljs.core.get_in.call(null,state,path);if(cljs.core.truth_(temp__4124__auto__))
{var d = temp__4124__auto__;var k = cljs.core.last.call(null,path);var ns = cljs.core.update_in.call(null,state,cljs.core.butlast.call(null,path),((function (k,d,temp__4124__auto__){
return (function (s){return cljs.core.dissoc.call(null,s,k);
});})(k,d,temp__4124__auto__))
);return cljs.core.assoc.call(null,ns,k,d);
} else
{return state;
}
});
frontier.core.move_effects_to_top = (function move_effects_to_top(path,state){return frontier.core.move_to_top.call(null,cljs.core.conj.call(null,(((path instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null):path),new cljs.core.Keyword(null,"__effects","__effects",1628718228)),state);
});
frontier.core.path__GT_box = (function path__GT_box(path){if((path instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null);
} else
{return path;
}
});
frontier.core.path__GT_unbox = (function path__GT_unbox(path){if(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,path)))
{return cljs.core.first.call(null,path);
} else
{return path;
}
});
frontier.core.msg_prefix = (function msg_prefix(path,p__16154){var vec__16156 = p__16154;var msg_name = cljs.core.nth.call(null,vec__16156,0,null);var data = cljs.core.nth.call(null,vec__16156,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,frontier.core.path__GT_box.call(null,path),frontier.core.path__GT_box.call(null,msg_name))),data], null);
});
frontier.core.msg_path__GT_local_msg_name = (function msg_path__GT_local_msg_name(path,msg_name){var path__$1 = frontier.core.path__GT_box.call(null,path);var len = cljs.core.count.call(null,path__$1);if(cljs.core._EQ_.call(null,cljs.core.take.call(null,len,frontier.core.path__GT_box.call(null,msg_name)),path__$1))
{var new_path = cljs.core.vec.call(null,cljs.core.drop.call(null,len,frontier.core.path__GT_box.call(null,msg_name)));return frontier.core.path__GT_unbox.call(null,new_path);
} else
{return null;
}
});
frontier.core.msg__GT_local_msg = (function msg__GT_local_msg(path,p__16157){var vec__16159 = p__16157;var msg_name = cljs.core.nth.call(null,vec__16159,0,null);var data = cljs.core.nth.call(null,vec__16159,1,null);var temp__4126__auto__ = frontier.core.msg_path__GT_local_msg_name.call(null,path,msg_name);if(cljs.core.truth_(temp__4126__auto__))
{var local_msg_name = temp__4126__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [local_msg_name,data], null);
} else
{return null;
}
});
frontier.core.ns_input_filter = (function ns_input_filter(path,p__16160,f){var vec__16162 = p__16160;var msg_name = cljs.core.nth.call(null,vec__16162,0,null);var data = cljs.core.nth.call(null,vec__16162,1,null);var temp__4124__auto__ = frontier.core.msg__GT_local_msg.call(null,path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontier.core.path__GT_box.call(null,msg_name),data], null));if(cljs.core.truth_(temp__4124__auto__))
{var local_msg = temp__4124__auto__;return frontier.core.msg_prefix.call(null,path,f.call(null,local_msg));
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_name,data], null);
}
});
frontier.core.move_effects_to_top_fix_ns = (function move_effects_to_top_fix_ns(path,state){var path_SINGLEQUOTE_ = frontier.core.path__GT_box.call(null,path);var state_SINGLEQUOTE_ = frontier.core.move_to_top.call(null,cljs.core.conj.call(null,path_SINGLEQUOTE_,new cljs.core.Keyword(null,"__effects","__effects",1628718228)),state);var temp__4124__auto__ = new cljs.core.Keyword(null,"__effects","__effects",1628718228).cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_);if(cljs.core.truth_(temp__4124__auto__))
{var effects = temp__4124__auto__;return cljs.core.assoc.call(null,state_SINGLEQUOTE_,new cljs.core.Keyword(null,"__effects","__effects",1628718228),cljs.core.map.call(null,cljs.core.partial.call(null,frontier.core.msg_prefix,path_SINGLEQUOTE_),effects));
} else
{return state_SINGLEQUOTE_;
}
});
frontier.core.ns_transform = (function ns_transform(path,msg,state,system){var path__$1 = frontier.core.path__GT_box.call(null,path);var temp__4124__auto__ = frontier.core.msg__GT_local_msg.call(null,path__$1,msg);if(cljs.core.truth_(temp__4124__auto__))
{var local_msg = temp__4124__auto__;return frontier.core.move_effects_to_top_fix_ns.call(null,path__$1,cljs.core.update_in.call(null,state,path__$1,((function (local_msg,temp__4124__auto__,path__$1){
return (function (scoped_state){return frontier.core._transform.call(null,system,local_msg,scoped_state);
});})(local_msg,temp__4124__auto__,path__$1))
));
} else
{return state;
}
});
frontier.core.ns_scoped_channel = (function ns_scoped_channel(path,channel){return cljs.core.async.map_GT_.call(null,cljs.core.partial.call(null,frontier.core.msg_prefix,path),channel);
});

/**
* @constructor
* @param {*} path
* @param {*} system
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
frontier.core.Namespacer = (function (path,system,__meta,__extmap){
this.path = path;
this.system = system;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
frontier.core.Namespacer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8466__auto__,k__8467__auto__){var self__ = this;
var this__8466__auto____$1 = this;return cljs.core._lookup.call(null,this__8466__auto____$1,k__8467__auto__,null);
});
frontier.core.Namespacer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8468__auto__,k16164,else__8469__auto__){var self__ = this;
var this__8468__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k16164,new cljs.core.Keyword(null,"path","path",1017337751)))
{return self__.path;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16164,new cljs.core.Keyword(null,"system","system",4421543329)))
{return self__.system;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k16164,else__8469__auto__);
} else
{return null;
}
}
}
});
frontier.core.Namespacer.prototype.frontier$core$IWillAccept$ = true;
frontier.core.Namespacer.prototype.frontier$core$IWillAccept$_will_accept_QMARK_$arity$2 = (function (_,p__16166){var self__ = this;
var vec__16167 = p__16166;var msg_name = cljs.core.nth.call(null,vec__16167,0,null);var ___$1 = cljs.core.nth.call(null,vec__16167,1,null);var ___$2 = this;return frontier.core.msg_path__GT_local_msg_name.call(null,self__.path,msg_name);
});
frontier.core.Namespacer.prototype.frontier$core$IInputFilter$ = true;
frontier.core.Namespacer.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (_,msg,state){var self__ = this;
var ___$1 = this;return frontier.core.ns_input_filter.call(null,self__.path,msg,((function (___$1){
return (function (msg__$1){return frontier.core._filter_input.call(null,self__.system,msg__$1,state);
});})(___$1))
);
});
frontier.core.Namespacer.prototype.frontier$core$IStop$ = true;
frontier.core.Namespacer.prototype.frontier$core$IStop$_stop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return frontier.core._stop.call(null,self__.system);
});
frontier.core.Namespacer.prototype.frontier$core$IInit$ = true;
frontier.core.Namespacer.prototype.frontier$core$IInit$_initialize$arity$3 = (function (o,state,event_chan){var self__ = this;
var o__$1 = this;return frontier.core._initialize.call(null,self__.system,state,event_chan);
});
frontier.core.Namespacer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8480__auto__,writer__8481__auto__,opts__8482__auto__){var self__ = this;
var this__8480__auto____$1 = this;var pr_pair__8483__auto__ = ((function (this__8480__auto____$1){
return (function (keyval__8484__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,cljs.core.pr_writer,""," ","",opts__8482__auto__,keyval__8484__auto__);
});})(this__8480__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,pr_pair__8483__auto__,"#frontier.core.Namespacer{",", ","}",opts__8482__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",1017337751),self__.path],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"system","system",4421543329),self__.system],null))], null),self__.__extmap));
});
frontier.core.Namespacer.prototype.frontier$core$IDerive$ = true;
frontier.core.Namespacer.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;return cljs.core.update_in.call(null,state,frontier.core.path__GT_box.call(null,self__.path),((function (o__$1){
return (function (st){return frontier.core._derive.call(null,self__.system,st);
});})(o__$1))
);
});
frontier.core.Namespacer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8464__auto__){var self__ = this;
var this__8464__auto____$1 = this;return self__.__meta;
});
frontier.core.Namespacer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8460__auto__){var self__ = this;
var this__8460__auto____$1 = this;return (new frontier.core.Namespacer(self__.path,self__.system,self__.__meta,self__.__extmap,self__.__hash));
});
frontier.core.Namespacer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8470__auto__){var self__ = this;
var this__8470__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
frontier.core.Namespacer.prototype.frontier$core$ITransform$ = true;
frontier.core.Namespacer.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;return frontier.core.ns_transform.call(null,frontier.core.path__GT_box.call(null,self__.path),msg,state,self__.system);
});
frontier.core.Namespacer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8461__auto__){var self__ = this;
var this__8461__auto____$1 = this;var h__8291__auto__ = self__.__hash;if(!((h__8291__auto__ == null)))
{return h__8291__auto__;
} else
{var h__8291__auto____$1 = cljs.core.hash_imap.call(null,this__8461__auto____$1);self__.__hash = h__8291__auto____$1;
return h__8291__auto____$1;
}
});
frontier.core.Namespacer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8462__auto__,other__8463__auto__){var self__ = this;
var this__8462__auto____$1 = this;if(cljs.core.truth_((function (){var and__7868__auto__ = other__8463__auto__;if(cljs.core.truth_(and__7868__auto__))
{return ((this__8462__auto____$1.constructor === other__8463__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8462__auto____$1,other__8463__auto__));
} else
{return and__7868__auto__;
}
})()))
{return true;
} else
{return false;
}
});
frontier.core.Namespacer.prototype.frontier$core$IEffect$ = true;
frontier.core.Namespacer.prototype.frontier$core$IEffect$_effect$arity$5 = (function (o,msg,state,event_chan,effect_chan){var self__ = this;
var o__$1 = this;var temp__4126__auto__ = frontier.core.msg__GT_local_msg.call(null,self__.path,msg);if(cljs.core.truth_(temp__4126__auto__))
{var local_msg = temp__4126__auto__;var local_event_chan = frontier.core.ns_scoped_channel.call(null,frontier.core.path__GT_box.call(null,self__.path),event_chan);var local_effect_chan = frontier.core.ns_scoped_channel.call(null,frontier.core.path__GT_box.call(null,self__.path),effect_chan);return frontier.core._effect.call(null,self__.system,local_msg,cljs.core.get_in.call(null,state,frontier.core.path__GT_box.call(null,self__.path)),local_event_chan,local_effect_chan);
} else
{return null;
}
});
frontier.core.Namespacer.prototype.frontier$core$IRender$ = true;
frontier.core.Namespacer.prototype.frontier$core$IRender$_render$arity$2 = (function (_,rstate){var self__ = this;
var ___$1 = this;return frontier.core._render.call(null,self__.system,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.get_in.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(rstate),frontier.core.path__GT_box.call(null,self__.path)),new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),frontier.core.ns_scoped_channel.call(null,self__.path,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719).cljs$core$IFn$_invoke$arity$1(rstate))], null));
});
frontier.core.Namespacer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8475__auto__,k__8476__auto__){var self__ = this;
var this__8475__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),null,new cljs.core.Keyword(null,"system","system",4421543329),null], null), null),k__8476__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8475__auto____$1),self__.__meta),k__8476__auto__);
} else
{return (new frontier.core.Namespacer(self__.path,self__.system,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8476__auto__)),null));
}
});
frontier.core.Namespacer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8473__auto__,k__8474__auto__,G__16163){var self__ = this;
var this__8473__auto____$1 = this;var pred__16168 = cljs.core.keyword_identical_QMARK_;var expr__16169 = k__8474__auto__;if(cljs.core.truth_(pred__16168.call(null,new cljs.core.Keyword(null,"path","path",1017337751),expr__16169)))
{return (new frontier.core.Namespacer(G__16163,self__.system,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16168.call(null,new cljs.core.Keyword(null,"system","system",4421543329),expr__16169)))
{return (new frontier.core.Namespacer(self__.path,G__16163,self__.__meta,self__.__extmap,null));
} else
{return (new frontier.core.Namespacer(self__.path,self__.system,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8474__auto__,G__16163),null));
}
}
});
frontier.core.Namespacer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8478__auto__){var self__ = this;
var this__8478__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",1017337751),self__.path],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"system","system",4421543329),self__.system],null))], null),self__.__extmap));
});
frontier.core.Namespacer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8465__auto__,G__16163){var self__ = this;
var this__8465__auto____$1 = this;return (new frontier.core.Namespacer(self__.path,self__.system,G__16163,self__.__extmap,self__.__hash));
});
frontier.core.Namespacer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8471__auto__,entry__8472__auto__){var self__ = this;
var this__8471__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8472__auto__))
{return cljs.core._assoc.call(null,this__8471__auto____$1,cljs.core._nth.call(null,entry__8472__auto__,0),cljs.core._nth.call(null,entry__8472__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8471__auto____$1,entry__8472__auto__);
}
});
frontier.core.Namespacer.cljs$lang$type = true;
frontier.core.Namespacer.cljs$lang$ctorPrSeq = (function (this__8500__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"frontier.core/Namespacer");
});
frontier.core.Namespacer.cljs$lang$ctorPrWriter = (function (this__8500__auto__,writer__8501__auto__){return cljs.core._write.call(null,writer__8501__auto__,"frontier.core/Namespacer");
});
frontier.core.__GT_Namespacer = (function __GT_Namespacer(path,system){return (new frontier.core.Namespacer(path,system));
});
frontier.core.map__GT_Namespacer = (function map__GT_Namespacer(G__16165){return (new frontier.core.Namespacer(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__16165),new cljs.core.Keyword(null,"system","system",4421543329).cljs$core$IFn$_invoke$arity$1(G__16165),null,cljs.core.dissoc.call(null,G__16165,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"system","system",4421543329))));
});
frontier.core.history_keeper_transform = (function history_keeper_transform(p__16171,msg,state){var map__16173 = p__16171;var map__16173__$1 = ((cljs.core.seq_QMARK_.call(null,map__16173))?cljs.core.apply.call(null,cljs.core.hash_map,map__16173):map__16173);var initial_state = cljs.core.get.call(null,map__16173__$1,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786));var system = cljs.core.get.call(null,map__16173__$1,new cljs.core.Keyword(null,"system","system",4421543329));return cljs.core.assoc.call(null,frontier.core._transform.call(null,system,msg,frontier.core.state_from_msg_list.call(null,system,new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(state),initial_state)),new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.conj.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(state)),msg),new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),initial_state);
});

/**
* @constructor
* @param {*} system
* @param {*} initial_state
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
frontier.core.HistoryKeeper = (function (system,initial_state,__meta,__extmap){
this.system = system;
this.initial_state = initial_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
frontier.core.HistoryKeeper.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8466__auto__,k__8467__auto__){var self__ = this;
var this__8466__auto____$1 = this;return cljs.core._lookup.call(null,this__8466__auto____$1,k__8467__auto__,null);
});
frontier.core.HistoryKeeper.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8468__auto__,k16175,else__8469__auto__){var self__ = this;
var this__8468__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k16175,new cljs.core.Keyword(null,"system","system",4421543329)))
{return self__.system;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16175,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786)))
{return self__.initial_state;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k16175,else__8469__auto__);
} else
{return null;
}
}
}
});
frontier.core.HistoryKeeper.prototype.frontier$core$IInputFilter$ = true;
frontier.core.HistoryKeeper.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (_,msg,state){var self__ = this;
var ___$1 = this;return frontier.core._filter_input.call(null,self__.system,msg,state);
});
frontier.core.HistoryKeeper.prototype.frontier$core$IStop$ = true;
frontier.core.HistoryKeeper.prototype.frontier$core$IStop$_stop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return frontier.core._stop.call(null,self__.system);
});
frontier.core.HistoryKeeper.prototype.frontier$core$IInit$ = true;
frontier.core.HistoryKeeper.prototype.frontier$core$IInit$_initialize$arity$3 = (function (o,state,event_chan){var self__ = this;
var o__$1 = this;return frontier.core._initialize.call(null,self__.system,state,event_chan);
});
frontier.core.HistoryKeeper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8480__auto__,writer__8481__auto__,opts__8482__auto__){var self__ = this;
var this__8480__auto____$1 = this;var pr_pair__8483__auto__ = ((function (this__8480__auto____$1){
return (function (keyval__8484__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,cljs.core.pr_writer,""," ","",opts__8482__auto__,keyval__8484__auto__);
});})(this__8480__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,pr_pair__8483__auto__,"#frontier.core.HistoryKeeper{",", ","}",opts__8482__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"system","system",4421543329),self__.system],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),self__.initial_state],null))], null),self__.__extmap));
});
frontier.core.HistoryKeeper.prototype.frontier$core$IDerive$ = true;
frontier.core.HistoryKeeper.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;return frontier.core._derive.call(null,self__.system,state);
});
frontier.core.HistoryKeeper.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8464__auto__){var self__ = this;
var this__8464__auto____$1 = this;return self__.__meta;
});
frontier.core.HistoryKeeper.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8460__auto__){var self__ = this;
var this__8460__auto____$1 = this;return (new frontier.core.HistoryKeeper(self__.system,self__.initial_state,self__.__meta,self__.__extmap,self__.__hash));
});
frontier.core.HistoryKeeper.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8470__auto__){var self__ = this;
var this__8470__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
frontier.core.HistoryKeeper.prototype.frontier$core$ITransform$ = true;
frontier.core.HistoryKeeper.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set-history","set-history",687601051),cljs.core.first.call(null,msg)))
{return cljs.core.assoc_in.call(null,state,new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.second.call(null,msg));
} else
{if((function (){var G__16177 = self__.system;if(G__16177)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16177.frontier$core$IWillAccept$;
}
})()))
{return true;
} else
{if((!G__16177.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IWillAccept,G__16177);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IWillAccept,G__16177);
}
})())
{if(cljs.core.truth_(frontier.core._will_accept_QMARK_.call(null,self__.system,msg)))
{return frontier.core.history_keeper_transform.call(null,o__$1,msg,state);
} else
{return state;
}
} else
{return frontier.core.history_keeper_transform.call(null,o__$1,msg,state);
}
}
});
frontier.core.HistoryKeeper.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8461__auto__){var self__ = this;
var this__8461__auto____$1 = this;var h__8291__auto__ = self__.__hash;if(!((h__8291__auto__ == null)))
{return h__8291__auto__;
} else
{var h__8291__auto____$1 = cljs.core.hash_imap.call(null,this__8461__auto____$1);self__.__hash = h__8291__auto____$1;
return h__8291__auto____$1;
}
});
frontier.core.HistoryKeeper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8462__auto__,other__8463__auto__){var self__ = this;
var this__8462__auto____$1 = this;if(cljs.core.truth_((function (){var and__7868__auto__ = other__8463__auto__;if(cljs.core.truth_(and__7868__auto__))
{return ((this__8462__auto____$1.constructor === other__8463__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8462__auto____$1,other__8463__auto__));
} else
{return and__7868__auto__;
}
})()))
{return true;
} else
{return false;
}
});
frontier.core.HistoryKeeper.prototype.frontier$core$IEffect$ = true;
frontier.core.HistoryKeeper.prototype.frontier$core$IEffect$_effect$arity$5 = (function (o,msg,state,event_chan,effect_chan){var self__ = this;
var o__$1 = this;return frontier.core._effect.call(null,self__.system,msg,state,event_chan,effect_chan);
});
frontier.core.HistoryKeeper.prototype.frontier$core$IRender$ = true;
frontier.core.HistoryKeeper.prototype.frontier$core$IRender$_render$arity$2 = (function (_,rstate){var self__ = this;
var ___$1 = this;return frontier.core._render.call(null,self__.system,rstate);
});
frontier.core.HistoryKeeper.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8475__auto__,k__8476__auto__){var self__ = this;
var this__8475__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"system","system",4421543329),null,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),null], null), null),k__8476__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8475__auto____$1),self__.__meta),k__8476__auto__);
} else
{return (new frontier.core.HistoryKeeper(self__.system,self__.initial_state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8476__auto__)),null));
}
});
frontier.core.HistoryKeeper.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8473__auto__,k__8474__auto__,G__16174){var self__ = this;
var this__8473__auto____$1 = this;var pred__16178 = cljs.core.keyword_identical_QMARK_;var expr__16179 = k__8474__auto__;if(cljs.core.truth_(pred__16178.call(null,new cljs.core.Keyword(null,"system","system",4421543329),expr__16179)))
{return (new frontier.core.HistoryKeeper(G__16174,self__.initial_state,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16178.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),expr__16179)))
{return (new frontier.core.HistoryKeeper(self__.system,G__16174,self__.__meta,self__.__extmap,null));
} else
{return (new frontier.core.HistoryKeeper(self__.system,self__.initial_state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8474__auto__,G__16174),null));
}
}
});
frontier.core.HistoryKeeper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8478__auto__){var self__ = this;
var this__8478__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"system","system",4421543329),self__.system],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),self__.initial_state],null))], null),self__.__extmap));
});
frontier.core.HistoryKeeper.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8465__auto__,G__16174){var self__ = this;
var this__8465__auto____$1 = this;return (new frontier.core.HistoryKeeper(self__.system,self__.initial_state,G__16174,self__.__extmap,self__.__hash));
});
frontier.core.HistoryKeeper.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8471__auto__,entry__8472__auto__){var self__ = this;
var this__8471__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8472__auto__))
{return cljs.core._assoc.call(null,this__8471__auto____$1,cljs.core._nth.call(null,entry__8472__auto__,0),cljs.core._nth.call(null,entry__8472__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8471__auto____$1,entry__8472__auto__);
}
});
frontier.core.HistoryKeeper.cljs$lang$type = true;
frontier.core.HistoryKeeper.cljs$lang$ctorPrSeq = (function (this__8500__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"frontier.core/HistoryKeeper");
});
frontier.core.HistoryKeeper.cljs$lang$ctorPrWriter = (function (this__8500__auto__,writer__8501__auto__){return cljs.core._write.call(null,writer__8501__auto__,"frontier.core/HistoryKeeper");
});
frontier.core.__GT_HistoryKeeper = (function __GT_HistoryKeeper(system,initial_state){return (new frontier.core.HistoryKeeper(system,initial_state));
});
frontier.core.map__GT_HistoryKeeper = (function map__GT_HistoryKeeper(G__16176){return (new frontier.core.HistoryKeeper(new cljs.core.Keyword(null,"system","system",4421543329).cljs$core$IFn$_invoke$arity$1(G__16176),new cljs.core.Keyword(null,"initial-state","initial-state",4067401786).cljs$core$IFn$_invoke$arity$1(G__16176),null,cljs.core.dissoc.call(null,G__16176,new cljs.core.Keyword(null,"system","system",4421543329),new cljs.core.Keyword(null,"initial-state","initial-state",4067401786))));
});

/**
* @constructor
* @param {*} component
* @param {*} initial_state
* @param {*} state_atom
* @param {*} event_chan
* @param {*} effect_chan
* @param {*} running
* @param {*} state_callback
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
frontier.core.RunnableSystem = (function (component,initial_state,state_atom,event_chan,effect_chan,running,state_callback,__meta,__extmap){
this.component = component;
this.initial_state = initial_state;
this.state_atom = state_atom;
this.event_chan = event_chan;
this.effect_chan = effect_chan;
this.running = running;
this.state_callback = state_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
frontier.core.RunnableSystem.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8466__auto__,k__8467__auto__){var self__ = this;
var this__8466__auto____$1 = this;return cljs.core._lookup.call(null,this__8466__auto____$1,k__8467__auto__,null);
});
frontier.core.RunnableSystem.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8468__auto__,k16182,else__8469__auto__){var self__ = this;
var this__8468__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k16182,new cljs.core.Keyword(null,"component","component",3908964463)))
{return self__.component;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16182,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786)))
{return self__.initial_state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16182,new cljs.core.Keyword(null,"state-atom","state-atom",739597439)))
{return self__.state_atom;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16182,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719)))
{return self__.event_chan;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16182,new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120)))
{return self__.effect_chan;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16182,new cljs.core.Keyword(null,"running","running",2564688177)))
{return self__.running;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16182,new cljs.core.Keyword(null,"state-callback","state-callback",2401068403)))
{return self__.state_callback;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k16182,else__8469__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
});
frontier.core.RunnableSystem.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8480__auto__,writer__8481__auto__,opts__8482__auto__){var self__ = this;
var this__8480__auto____$1 = this;var pr_pair__8483__auto__ = ((function (this__8480__auto____$1){
return (function (keyval__8484__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,cljs.core.pr_writer,""," ","",opts__8482__auto__,keyval__8484__auto__);
});})(this__8480__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,pr_pair__8483__auto__,"#frontier.core.RunnableSystem{",", ","}",opts__8482__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",3908964463),self__.component],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-atom","state-atom",739597439),self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),self__.event_chan],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120),self__.effect_chan],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"running","running",2564688177),self__.running],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),self__.state_callback],null))], null),self__.__extmap));
});
frontier.core.RunnableSystem.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8464__auto__){var self__ = this;
var this__8464__auto____$1 = this;return self__.__meta;
});
frontier.core.RunnableSystem.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8460__auto__){var self__ = this;
var this__8460__auto____$1 = this;return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,self__.__extmap,self__.__hash));
});
frontier.core.RunnableSystem.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8470__auto__){var self__ = this;
var this__8470__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
frontier.core.RunnableSystem.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8461__auto__){var self__ = this;
var this__8461__auto____$1 = this;var h__8291__auto__ = self__.__hash;if(!((h__8291__auto__ == null)))
{return h__8291__auto__;
} else
{var h__8291__auto____$1 = cljs.core.hash_imap.call(null,this__8461__auto____$1);self__.__hash = h__8291__auto____$1;
return h__8291__auto____$1;
}
});
frontier.core.RunnableSystem.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8462__auto__,other__8463__auto__){var self__ = this;
var this__8462__auto____$1 = this;if(cljs.core.truth_((function (){var and__7868__auto__ = other__8463__auto__;if(cljs.core.truth_(and__7868__auto__))
{return ((this__8462__auto____$1.constructor === other__8463__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8462__auto____$1,other__8463__auto__));
} else
{return and__7868__auto__;
}
})()))
{return true;
} else
{return false;
}
});
frontier.core.RunnableSystem.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8475__auto__,k__8476__auto__){var self__ = this;
var this__8475__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state-atom","state-atom",739597439),null,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),null,new cljs.core.Keyword(null,"component","component",3908964463),null,new cljs.core.Keyword(null,"running","running",2564688177),null,new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),null,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),null,new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120),null], null), null),k__8476__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8475__auto____$1),self__.__meta),k__8476__auto__);
} else
{return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8476__auto__)),null));
}
});
frontier.core.RunnableSystem.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8473__auto__,k__8474__auto__,G__16181){var self__ = this;
var this__8473__auto____$1 = this;var pred__16184 = cljs.core.keyword_identical_QMARK_;var expr__16185 = k__8474__auto__;if(cljs.core.truth_(pred__16184.call(null,new cljs.core.Keyword(null,"component","component",3908964463),expr__16185)))
{return (new frontier.core.RunnableSystem(G__16181,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16184.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),expr__16185)))
{return (new frontier.core.RunnableSystem(self__.component,G__16181,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16184.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",739597439),expr__16185)))
{return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,G__16181,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16184.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),expr__16185)))
{return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,G__16181,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16184.call(null,new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120),expr__16185)))
{return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,G__16181,self__.running,self__.state_callback,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16184.call(null,new cljs.core.Keyword(null,"running","running",2564688177),expr__16185)))
{return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,G__16181,self__.state_callback,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16184.call(null,new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),expr__16185)))
{return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,G__16181,self__.__meta,self__.__extmap,null));
} else
{return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8474__auto__,G__16181),null));
}
}
}
}
}
}
}
});
frontier.core.RunnableSystem.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8478__auto__){var self__ = this;
var this__8478__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",3908964463),self__.component],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-atom","state-atom",739597439),self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),self__.event_chan],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120),self__.effect_chan],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"running","running",2564688177),self__.running],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),self__.state_callback],null))], null),self__.__extmap));
});
frontier.core.RunnableSystem.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8465__auto__,G__16181){var self__ = this;
var this__8465__auto____$1 = this;return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,G__16181,self__.__extmap,self__.__hash));
});
frontier.core.RunnableSystem.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8471__auto__,entry__8472__auto__){var self__ = this;
var this__8471__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8472__auto__))
{return cljs.core._assoc.call(null,this__8471__auto____$1,cljs.core._nth.call(null,entry__8472__auto__,0),cljs.core._nth.call(null,entry__8472__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8471__auto____$1,entry__8472__auto__);
}
});
frontier.core.RunnableSystem.cljs$lang$type = true;
frontier.core.RunnableSystem.cljs$lang$ctorPrSeq = (function (this__8500__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"frontier.core/RunnableSystem");
});
frontier.core.RunnableSystem.cljs$lang$ctorPrWriter = (function (this__8500__auto__,writer__8501__auto__){return cljs.core._write.call(null,writer__8501__auto__,"frontier.core/RunnableSystem");
});
frontier.core.__GT_RunnableSystem = (function __GT_RunnableSystem(component,initial_state,state_atom,event_chan,effect_chan,running,state_callback){return (new frontier.core.RunnableSystem(component,initial_state,state_atom,event_chan,effect_chan,running,state_callback));
});
frontier.core.map__GT_RunnableSystem = (function map__GT_RunnableSystem(G__16183){return (new frontier.core.RunnableSystem(new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(G__16183),new cljs.core.Keyword(null,"initial-state","initial-state",4067401786).cljs$core$IFn$_invoke$arity$1(G__16183),new cljs.core.Keyword(null,"state-atom","state-atom",739597439).cljs$core$IFn$_invoke$arity$1(G__16183),new cljs.core.Keyword(null,"event-chan","event-chan",1951581719).cljs$core$IFn$_invoke$arity$1(G__16183),new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120).cljs$core$IFn$_invoke$arity$1(G__16183),new cljs.core.Keyword(null,"running","running",2564688177).cljs$core$IFn$_invoke$arity$1(G__16183),new cljs.core.Keyword(null,"state-callback","state-callback",2401068403).cljs$core$IFn$_invoke$arity$1(G__16183),null,cljs.core.dissoc.call(null,G__16183,new cljs.core.Keyword(null,"component","component",3908964463),new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),new cljs.core.Keyword(null,"state-atom","state-atom",739597439),new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120),new cljs.core.Keyword(null,"running","running",2564688177),new cljs.core.Keyword(null,"state-callback","state-callback",2401068403))));
});
frontier.core.message_transform = (function message_transform(runnable,state,msg){return frontier.core.transform_with_effects.call(null,new cljs.core.Keyword(null,"component","component",3908964463).cljs$core$IFn$_invoke$arity$1(runnable),new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120).cljs$core$IFn$_invoke$arity$1(runnable),state,msg);
});
frontier.core.make_runnable = (function make_runnable(component,initial_state){return frontier.core.map__GT_RunnableSystem.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",3908964463),component,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),initial_state], null));
});
frontier.core.initialize = (function initialize(p__16187){var map__16189 = p__16187;var map__16189__$1 = ((cljs.core.seq_QMARK_.call(null,map__16189))?cljs.core.apply.call(null,cljs.core.hash_map,map__16189):map__16189);var r = map__16189__$1;var event_chan = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var effect_chan = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120));var component = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"component","component",3908964463));frontier.core._initialize.call(null,component,effect_chan,event_chan);
return r;
});
frontier.core.listen_for_effects = (function listen_for_effects(p__16190){var map__16192 = p__16190;var map__16192__$1 = ((cljs.core.seq_QMARK_.call(null,map__16192))?cljs.core.apply.call(null,cljs.core.hash_map,map__16192):map__16192);var r = map__16192__$1;var effect_chan = cljs.core.get.call(null,map__16192__$1,new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120));var event_chan = cljs.core.get.call(null,map__16192__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var state_atom = cljs.core.get.call(null,map__16192__$1,new cljs.core.Keyword(null,"state-atom","state-atom",739597439));var component = cljs.core.get.call(null,map__16192__$1,new cljs.core.Keyword(null,"component","component",3908964463));var effect_chan__$1 = (function (){var or__7880__auto__ = effect_chan;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})();var event_chan__$1 = (function (){var or__7880__auto__ = event_chan;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})();frontier.core.dev_null.call(null,cljs.core.async.map_LT_.call(null,((function (effect_chan__$1,event_chan__$1,map__16192,map__16192__$1,r,effect_chan,event_chan,state_atom,component){
return (function (msg){frontier.core._effect.call(null,component,msg,cljs.core.deref.call(null,state_atom),event_chan__$1,effect_chan__$1);
return true;
});})(effect_chan__$1,event_chan__$1,map__16192,map__16192__$1,r,effect_chan,event_chan,state_atom,component))
,effect_chan__$1));
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120),effect_chan__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),event_chan__$1);
});
frontier.core.listen_for_messages = (function listen_for_messages(p__16193){var map__16195 = p__16193;var map__16195__$1 = ((cljs.core.seq_QMARK_.call(null,map__16195))?cljs.core.apply.call(null,cljs.core.hash_map,map__16195):map__16195);var r = map__16195__$1;var effect_chan = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120));var event_chan = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var state_atom = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"state-atom","state-atom",739597439));var component = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"component","component",3908964463));var event_chan__$1 = (function (){var or__7880__auto__ = event_chan;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})();var effect_chan__$1 = (function (){var or__7880__auto__ = effect_chan;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})();frontier.core.dev_null.call(null,cljs.core.async.map_LT_.call(null,((function (event_chan__$1,effect_chan__$1,map__16195,map__16195__$1,r,effect_chan,event_chan,state_atom,component){
return (function (msg){var new_msg = frontier.core._filter_input.call(null,component,msg,cljs.core.deref.call(null,state_atom));return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.partial.call(null,frontier.core.message_transform,r),new_msg);
});})(event_chan__$1,effect_chan__$1,map__16195,map__16195__$1,r,effect_chan,event_chan,state_atom,component))
,event_chan__$1));
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120),effect_chan__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),event_chan__$1);
});
frontier.core.install_initial_state = (function install_initial_state(p__16196){var map__16198 = p__16196;var map__16198__$1 = ((cljs.core.seq_QMARK_.call(null,map__16198))?cljs.core.apply.call(null,cljs.core.hash_map,map__16198):map__16198);var r = map__16198__$1;var state_atom = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"state-atom","state-atom",739597439));var initial_state = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786));if((state_atom == null))
{return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"state-atom","state-atom",739597439),cljs.core.atom.call(null,initial_state));
} else
{if((cljs.core.deref.call(null,state_atom) == null))
{cljs.core.reset_BANG_.call(null,state_atom,initial_state);
return r;
} else
{return r;
}
}
});
frontier.core.hook_up_state_callback = (function hook_up_state_callback(p__16199){var map__16201 = p__16199;var map__16201__$1 = ((cljs.core.seq_QMARK_.call(null,map__16201))?cljs.core.apply.call(null,cljs.core.hash_map,map__16201):map__16201);var r = map__16201__$1;var event_chan = cljs.core.get.call(null,map__16201__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var component = cljs.core.get.call(null,map__16201__$1,new cljs.core.Keyword(null,"component","component",3908964463));var state_atom = cljs.core.get.call(null,map__16201__$1,new cljs.core.Keyword(null,"state-atom","state-atom",739597439));var state_callback = cljs.core.get.call(null,map__16201__$1,new cljs.core.Keyword(null,"state-callback","state-callback",2401068403));if(cljs.core.truth_(state_callback))
{cljs.core.add_watch.call(null,state_atom,new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),((function (map__16201,map__16201__$1,r,event_chan,component,state_atom,state_callback){
return (function (_,___$1,o,n){return state_callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),frontier.core._derive.call(null,component,n),new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),event_chan], null));
});})(map__16201,map__16201__$1,r,event_chan,component,state_atom,state_callback))
);
} else
{}
return r;
});
frontier.core.runner_start = (function runner_start(runnable){return cljs.core.assoc.call(null,frontier.core.initialize.call(null,frontier.core.hook_up_state_callback.call(null,frontier.core.listen_for_messages.call(null,frontier.core.listen_for_effects.call(null,frontier.core.install_initial_state.call(null,runnable))))),new cljs.core.Keyword(null,"running","running",2564688177),true);
});
frontier.core.runner_stop = (function runner_stop(runnable){if(cljs.core.truth_(new cljs.core.Keyword(null,"state-atom","state-atom",739597439).cljs$core$IFn$_invoke$arity$1(runnable)))
{cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",739597439).cljs$core$IFn$_invoke$arity$1(runnable),new cljs.core.Keyword(null,"state-callback","state-callback",2401068403));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"event-chan","event-chan",1951581719).cljs$core$IFn$_invoke$arity$1(runnable)))
{cljs.core.async.close_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719).cljs$core$IFn$_invoke$arity$1(runnable));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120).cljs$core$IFn$_invoke$arity$1(runnable)))
{cljs.core.async.close_BANG_.call(null,new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120).cljs$core$IFn$_invoke$arity$1(runnable));
} else
{}
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,runnable,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),null),new cljs.core.Keyword(null,"effect-chan","effect-chan",2628469120),null),new cljs.core.Keyword(null,"running","running",2564688177),null);
});
frontier.core.run = (function run(initial_state,component,state_callback){return frontier.core.runner_start.call(null,cljs.core.assoc.call(null,frontier.core.make_runnable.call(null,component,initial_state),new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),state_callback));
});
frontier.core.run_with_atom = (function run_with_atom(state_atom,initial_state,component,state_callback){return frontier.core.runner_start.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,frontier.core.make_runnable.call(null,component,initial_state),new cljs.core.Keyword(null,"state-atom","state-atom",739597439),state_atom),new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),state_callback));
});

//# sourceMappingURL=core.js.map