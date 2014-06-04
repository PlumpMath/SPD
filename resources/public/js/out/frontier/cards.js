// Compiled by ClojureScript 0.0-2202
goog.provide('frontier.cards');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('devcards.util.edn_renderer');
goog.require('frontier.core');
goog.require('frontier.core');
goog.require('devcards.util.edn_renderer');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
frontier.cards.can_go_forward_QMARK_ = (function can_go_forward_QMARK_(p__16375){var map__16377 = p__16375;var map__16377__$1 = ((cljs.core.seq_QMARK_.call(null,map__16377))?cljs.core.apply.call(null,cljs.core.hash_map,map__16377):map__16377);var __history_keeper = cljs.core.get.call(null,map__16377__$1,new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429));var pointer = cljs.core.get.call(null,map__16377__$1,new cljs.core.Keyword(null,"pointer","pointer",613298607));return (pointer < cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(__history_keeper)));
});
frontier.cards.can_go_back_QMARK_ = (function can_go_back_QMARK_(p__16378){var map__16380 = p__16378;var map__16380__$1 = ((cljs.core.seq_QMARK_.call(null,map__16380))?cljs.core.apply.call(null,cljs.core.hash_map,map__16380):map__16380);var pointer = cljs.core.get.call(null,map__16380__$1,new cljs.core.Keyword(null,"pointer","pointer",613298607));return (pointer > 0);
});
frontier.cards.under_control_QMARK_ = (function under_control_QMARK_(p__16381){var map__16383 = p__16381;var map__16383__$1 = ((cljs.core.seq_QMARK_.call(null,map__16383))?cljs.core.apply.call(null,cljs.core.hash_map,map__16383):map__16383);var __history_keeper = cljs.core.get.call(null,map__16383__$1,new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429));var pointer = cljs.core.get.call(null,map__16383__$1,new cljs.core.Keyword(null,"pointer","pointer",613298607));return cljs.core.not_EQ_.call(null,pointer,cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(__history_keeper)));
});
frontier.cards.msg_history = (function msg_history(state){return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429),new cljs.core.Keyword(null,"history","history",1940838406)], null));
});
frontier.cards.hist_trans = (function (){var method_table__8738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("hist-trans",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8742__auto__,method_table__8738__auto__,prefer_table__8739__auto__,method_cache__8740__auto__,cached_hierarchy__8741__auto__));
})();
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,state,___$1){return state;
}));
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"history.goto","history.goto",3301148143),(function (p__16384,state,_){var vec__16385 = p__16384;var ___$1 = cljs.core.nth.call(null,vec__16385,0,null);var pointer = cljs.core.nth.call(null,vec__16385,1,null);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pointer","pointer",613298607),pointer);
}));
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"history.back","history.back",3300985203),(function (_,state,___$1){if(frontier.cards.can_go_back_QMARK_.call(null,state))
{return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer","pointer",613298607)], null),cljs.core.dec);
} else
{return state;
}
}));
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"history.forward","history.forward",4046759645),(function (_,state,___$1){if(frontier.cards.can_go_forward_QMARK_.call(null,state))
{return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer","pointer",613298607)], null),cljs.core.inc);
} else
{return state;
}
}));
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"history.keep","history.keep",3301257233),(function (_,p__16386,___$1){var map__16387 = p__16386;var map__16387__$1 = ((cljs.core.seq_QMARK_.call(null,map__16387))?cljs.core.apply.call(null,cljs.core.hash_map,map__16387):map__16387);var state = map__16387__$1;var pointer = cljs.core.get.call(null,map__16387__$1,new cljs.core.Keyword(null,"pointer","pointer",613298607));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429),new cljs.core.Keyword(null,"history","history",1940838406)], null),((function (map__16387,map__16387__$1,state,pointer){
return (function (history){return cljs.core.subvec.call(null,history,0,pointer);
});})(map__16387,map__16387__$1,state,pointer))
);
}));
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"history.cancel","history.cancel",4199371910),(function (_,state,___$1){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pointer","pointer",613298607),cljs.core.count.call(null,frontier.cards.msg_history.call(null,state)));
}));
frontier.cards.under_control = (function under_control(system){return cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"under-control","under-control",2562402010),frontier.cards.under_control_QMARK_.call(null,system));
});
frontier.cards.current_state_STAR__STAR_ = (function() {
var current_state_STAR__STAR_ = null;
var current_state_STAR__STAR___2 = (function (p__16389,component){var map__16393 = p__16389;var map__16393__$1 = ((cljs.core.seq_QMARK_.call(null,map__16393))?cljs.core.apply.call(null,cljs.core.hash_map,map__16393):map__16393);var virt_state = map__16393__$1;var history = cljs.core.get.call(null,map__16393__$1,new cljs.core.Keyword(null,"history","history",1940838406));return current_state_STAR__STAR_.call(null,virt_state,cljs.core.count.call(null,history),component);
});
var current_state_STAR__STAR___3 = (function (p__16388,pointer,component){var map__16392 = p__16388;var map__16392__$1 = ((cljs.core.seq_QMARK_.call(null,map__16392))?cljs.core.apply.call(null,cljs.core.hash_map,map__16392):map__16392);var virt_state = map__16392__$1;var state = cljs.core.get.call(null,map__16392__$1,new cljs.core.Keyword(null,"state","state",1123661827));var history = cljs.core.get.call(null,map__16392__$1,new cljs.core.Keyword(null,"history","history",1940838406));var initial_state = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",4421543329),new cljs.core.Keyword(null,"initial-state","initial-state",4067401786)], null));return frontier.core._derive.call(null,component,((((pointer === 0)) || ((cljs.core.count.call(null,history) === 0)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(initial_state),new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),initial_state,new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.PersistentVector.EMPTY], null)], null):(function (){var temp_history = cljs.core.subvec.call(null,history,0,pointer);return frontier.core._transform.call(null,component,frontier.core.msg_prefix.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429)], null),cljs.core.last.call(null,temp_history)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",1123661827),state,new cljs.core.Keyword(null,"initial-state","initial-state",4067401786),initial_state,new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.butlast.call(null,temp_history)], null)], null));
})()));
});
current_state_STAR__STAR_ = function(p__16388,pointer,component){
switch(arguments.length){
case 2:
return current_state_STAR__STAR___2.call(this,p__16388,pointer);
case 3:
return current_state_STAR__STAR___3.call(this,p__16388,pointer,component);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
current_state_STAR__STAR_.cljs$core$IFn$_invoke$arity$2 = current_state_STAR__STAR___2;
current_state_STAR__STAR_.cljs$core$IFn$_invoke$arity$3 = current_state_STAR__STAR___3;
return current_state_STAR__STAR_;
})()
;
frontier.cards.render_state = (function render_state(p__16394,comp_STAR_){var map__16396 = p__16394;var map__16396__$1 = ((cljs.core.seq_QMARK_.call(null,map__16396))?cljs.core.apply.call(null,cljs.core.hash_map,map__16396):map__16396);var state = map__16396__$1;var __history_keeper = cljs.core.get.call(null,map__16396__$1,new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"render-stater","render-stater",3143570826),((frontier.cards.under_control_QMARK_.call(null,state))?frontier.cards.current_state_STAR__STAR_.call(null,__history_keeper,new cljs.core.Keyword(null,"pointer","pointer",613298607).cljs$core$IFn$_invoke$arity$1(state),comp_STAR_):frontier.cards.current_state_STAR__STAR_.call(null,__history_keeper,comp_STAR_)));
});
frontier.cards.can_go_forward = (function can_go_forward(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"can-go-forward","can-go-forward",4778555503),frontier.cards.can_go_forward_QMARK_.call(null,state));
});
frontier.cards.can_go_back = (function can_go_back(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"can-go-back","can-go-back",1633972513),frontier.cards.can_go_back_QMARK_.call(null,state));
});
frontier.cards.add_msg = (function add_msg(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"msg","msg",1014012659),frontier.core.msg__GT_local_msg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",1123661827)], null),cljs.core.get.call(null,frontier.cards.msg_history.call(null,state),(new cljs.core.Keyword(null,"pointer","pointer",613298607).cljs$core$IFn$_invoke$arity$1(state) - 1))));
});
frontier.cards.messages = (function messages(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.take.call(null,20,cljs.core.reverse.call(null,cljs.core.map_indexed.call(null,(function (i,x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + 1),x], null);
}),cljs.core.map.call(null,cljs.core.partial.call(null,frontier.core.msg__GT_local_msg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",1123661827)], null)),frontier.cards.msg_history.call(null,state))))));
});
frontier.cards.history_message_QMARK_ = (function history_message_QMARK_(msg){return ((cljs.core.first.call(null,msg) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.name.call(null,cljs.core.first.call(null,msg)),/\./)),"history"));
});

/**
* @constructor
* @param {*} virtual_system
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
frontier.cards.HistoryManager = (function (virtual_system,__meta,__extmap){
this.virtual_system = virtual_system;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
frontier.cards.HistoryManager.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8466__auto__,k__8467__auto__){var self__ = this;
var this__8466__auto____$1 = this;return cljs.core._lookup.call(null,this__8466__auto____$1,k__8467__auto__,null);
});
frontier.cards.HistoryManager.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8468__auto__,k16398,else__8469__auto__){var self__ = this;
var this__8468__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k16398,new cljs.core.Keyword(null,"virtual-system","virtual-system",3476471459)))
{return self__.virtual_system;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k16398,else__8469__auto__);
} else
{return null;
}
}
});
frontier.cards.HistoryManager.prototype.frontier$core$IInputFilter$ = true;
frontier.cards.HistoryManager.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (_,msg,state){var self__ = this;
var ___$1 = this;return frontier.core._filter_input.call(null,self__.virtual_system,msg,state);
});
frontier.cards.HistoryManager.prototype.frontier$core$IStop$ = true;
frontier.cards.HistoryManager.prototype.frontier$core$IStop$_stop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return frontier.core._stop.call(null,self__.virtual_system);
});
frontier.cards.HistoryManager.prototype.frontier$core$IInit$ = true;
frontier.cards.HistoryManager.prototype.frontier$core$IInit$_initialize$arity$3 = (function (_,state,event_chan){var self__ = this;
var ___$1 = this;return frontier.core._initialize.call(null,self__.virtual_system,state,event_chan);
});
frontier.cards.HistoryManager.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8480__auto__,writer__8481__auto__,opts__8482__auto__){var self__ = this;
var this__8480__auto____$1 = this;var pr_pair__8483__auto__ = ((function (this__8480__auto____$1){
return (function (keyval__8484__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,cljs.core.pr_writer,""," ","",opts__8482__auto__,keyval__8484__auto__);
});})(this__8480__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,pr_pair__8483__auto__,"#frontier.cards.HistoryManager{",", ","}",opts__8482__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"virtual-system","virtual-system",3476471459),self__.virtual_system],null))], null),self__.__extmap));
});
frontier.cards.HistoryManager.prototype.frontier$core$IDerive$ = true;
frontier.cards.HistoryManager.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;return frontier.cards.render_state.call(null,frontier.cards.messages.call(null,frontier.cards.add_msg.call(null,frontier.cards.can_go_back.call(null,frontier.cards.can_go_forward.call(null,frontier.cards.under_control.call(null,state))))),self__.virtual_system);
});
frontier.cards.HistoryManager.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8464__auto__){var self__ = this;
var this__8464__auto____$1 = this;return self__.__meta;
});
frontier.cards.HistoryManager.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8460__auto__){var self__ = this;
var this__8460__auto____$1 = this;return (new frontier.cards.HistoryManager(self__.virtual_system,self__.__meta,self__.__extmap,self__.__hash));
});
frontier.cards.HistoryManager.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8470__auto__){var self__ = this;
var this__8470__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
frontier.cards.HistoryManager.prototype.frontier$core$ITransform$ = true;
frontier.cards.HistoryManager.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;if(frontier.cards.history_message_QMARK_.call(null,msg))
{return frontier.cards.hist_trans.call(null,msg,state,new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429).cljs$core$IFn$_invoke$arity$1(state));
} else
{var new_state = frontier.core._transform.call(null,self__.virtual_system,msg,state);return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"pointer","pointer",613298607),cljs.core.count.call(null,cljs.core.get_in.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429),new cljs.core.Keyword(null,"history","history",1940838406)], null))));
}
});
frontier.cards.HistoryManager.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8461__auto__){var self__ = this;
var this__8461__auto____$1 = this;var h__8291__auto__ = self__.__hash;if(!((h__8291__auto__ == null)))
{return h__8291__auto__;
} else
{var h__8291__auto____$1 = cljs.core.hash_imap.call(null,this__8461__auto____$1);self__.__hash = h__8291__auto____$1;
return h__8291__auto____$1;
}
});
frontier.cards.HistoryManager.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8462__auto__,other__8463__auto__){var self__ = this;
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
frontier.cards.HistoryManager.prototype.frontier$core$IEffect$ = true;
frontier.cards.HistoryManager.prototype.frontier$core$IEffect$_effect$arity$5 = (function (o,msg,state,event_chan,effect_chan){var self__ = this;
var o__$1 = this;return frontier.core._effect.call(null,self__.virtual_system,msg,state,event_chan,effect_chan);
});
frontier.cards.HistoryManager.prototype.frontier$core$IRender$ = true;
frontier.cards.HistoryManager.prototype.frontier$core$IRender$_render$arity$2 = (function (_,p__16400){var self__ = this;
var map__16401 = p__16400;var map__16401__$1 = ((cljs.core.seq_QMARK_.call(null,map__16401))?cljs.core.apply.call(null,cljs.core.hash_map,map__16401):map__16401);var hist_state = map__16401__$1;var event_chan = cljs.core.get.call(null,map__16401__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var state = cljs.core.get.call(null,map__16401__$1,new cljs.core.Keyword(null,"state","state",1123661827));var ___$1 = this;var derived_state = new cljs.core.Keyword(null,"render-stater","render-stater",3143570826).cljs$core$IFn$_invoke$arity$1(state);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-manager","div.history-manager",2422151049),frontier.cards.render_history_controls.call(null,state,event_chan),frontier.core._render.call(null,self__.virtual_system,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),derived_state,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),event_chan], null)),devcards.util.edn_renderer.html_edn.call(null,cljs.core.get_in.call(null,derived_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429),new cljs.core.Keyword(null,"state","state",1123661827)], null)))], null);
});
frontier.cards.HistoryManager.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8475__auto__,k__8476__auto__){var self__ = this;
var this__8475__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"virtual-system","virtual-system",3476471459),null], null), null),k__8476__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8475__auto____$1),self__.__meta),k__8476__auto__);
} else
{return (new frontier.cards.HistoryManager(self__.virtual_system,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8476__auto__)),null));
}
});
frontier.cards.HistoryManager.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8473__auto__,k__8474__auto__,G__16397){var self__ = this;
var this__8473__auto____$1 = this;var pred__16402 = cljs.core.keyword_identical_QMARK_;var expr__16403 = k__8474__auto__;if(cljs.core.truth_(pred__16402.call(null,new cljs.core.Keyword(null,"virtual-system","virtual-system",3476471459),expr__16403)))
{return (new frontier.cards.HistoryManager(G__16397,self__.__meta,self__.__extmap,null));
} else
{return (new frontier.cards.HistoryManager(self__.virtual_system,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8474__auto__,G__16397),null));
}
});
frontier.cards.HistoryManager.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8478__auto__){var self__ = this;
var this__8478__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"virtual-system","virtual-system",3476471459),self__.virtual_system],null))], null),self__.__extmap));
});
frontier.cards.HistoryManager.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8465__auto__,G__16397){var self__ = this;
var this__8465__auto____$1 = this;return (new frontier.cards.HistoryManager(self__.virtual_system,G__16397,self__.__extmap,self__.__hash));
});
frontier.cards.HistoryManager.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8471__auto__,entry__8472__auto__){var self__ = this;
var this__8471__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8472__auto__))
{return cljs.core._assoc.call(null,this__8471__auto____$1,cljs.core._nth.call(null,entry__8472__auto__,0),cljs.core._nth.call(null,entry__8472__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8471__auto____$1,entry__8472__auto__);
}
});
frontier.cards.HistoryManager.cljs$lang$type = true;
frontier.cards.HistoryManager.cljs$lang$ctorPrSeq = (function (this__8500__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"frontier.cards/HistoryManager");
});
frontier.cards.HistoryManager.cljs$lang$ctorPrWriter = (function (this__8500__auto__,writer__8501__auto__){return cljs.core._write.call(null,writer__8501__auto__,"frontier.cards/HistoryManager");
});
frontier.cards.__GT_HistoryManager = (function __GT_HistoryManager(virtual_system){return (new frontier.cards.HistoryManager(virtual_system));
});
frontier.cards.map__GT_HistoryManager = (function map__GT_HistoryManager(G__16399){return (new frontier.cards.HistoryManager(new cljs.core.Keyword(null,"virtual-system","virtual-system",3476471459).cljs$core$IFn$_invoke$arity$1(G__16399),null,cljs.core.dissoc.call(null,G__16399,new cljs.core.Keyword(null,"virtual-system","virtual-system",3476471459))));
});
frontier.cards.render_history_controls = (function render_history_controls(p__16405,hist_chan){var map__16440 = p__16405;var map__16440__$1 = ((cljs.core.seq_QMARK_.call(null,map__16440))?cljs.core.apply.call(null,cljs.core.hash_map,map__16440):map__16440);var sys = map__16440__$1;var messages = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword(null,"messages","messages",551810238));var msg = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword(null,"msg","msg",1014012659));var can_go_forward = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword(null,"can-go-forward","can-go-forward",4778555503));var can_go_back = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword(null,"can-go-back","can-go-back",1633972513));var under_control = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword(null,"under-control","under-control",2562402010));return React.DOM.div({"className": "navbar navbar-default navbar-static-top", "style": cljs.core.clj__GT_js.call(null,(function (){var obj16447 = {"paddingLeft":"14px"};return obj16447;
})())},(function (){var attrs16441 = (cljs.core.truth_(can_go_back)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-default.navbar-btn","a.btn.btn-default.navbar-btn",1990552814),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"",new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){x.preventDefault();
return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.back","history.back",3300985203)], null));
});})(map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-step-backward","span.glyphicon.glyphicon-step-backward",3594472481)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-default.navbar-btn.disabled","a.btn.btn-default.navbar-btn.disabled",3715469856),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-step-backward","span.glyphicon.glyphicon-step-backward",3594472481)], null)], null));if(cljs.core.map_QMARK_.call(null,attrs16441))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav","navbar-nav","btn-group"], null)], null),attrs16441)),(cljs.core.truth_(under_control)?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){x.preventDefault();
return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.cancel","history.cancel",4199371910)], null));
});})(attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-stop"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-stop"}))),(cljs.core.truth_(under_control)?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){x.preventDefault();
return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.keep","history.keep",3301257233)], null));
});})(attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-download-alt"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-download-alt"}))),(cljs.core.truth_((function (){var and__7868__auto__ = under_control;if(cljs.core.truth_(and__7868__auto__))
{return can_go_forward;
} else
{return and__7868__auto__;
}
})())?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){x.preventDefault();
return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.forward","history.forward",4046759645)], null));
});})(attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-step-forward"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-step-forward"}))));
} else
{return React.DOM.div({"className": "nav navbar-nav btn-group"},sablono.interpreter.interpret.call(null,attrs16441),(cljs.core.truth_(under_control)?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){x.preventDefault();
return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.cancel","history.cancel",4199371910)], null));
});})(attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-stop"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-stop"}))),(cljs.core.truth_(under_control)?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){x.preventDefault();
return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.keep","history.keep",3301257233)], null));
});})(attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-download-alt"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-download-alt"}))),(cljs.core.truth_((function (){var and__7868__auto__ = under_control;if(cljs.core.truth_(and__7868__auto__))
{return can_go_forward;
} else
{return and__7868__auto__;
}
})())?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){x.preventDefault();
return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.forward","history.forward",4046759645)], null));
});})(attrs16441,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-step-forward"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-step-forward"}))));
}
})(),React.DOM.ul({"className": "nav navbar-nav"},React.DOM.li({"className": "dropdown"},React.DOM.a({"className": "dropdown-toggle", "data-toggle": "dropdown"},"Input history ",React.DOM.b({"className": "caret"})),(function (){var attrs16444 = cljs.core.map.call(null,((function (map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (p__16472){var vec__16473 = p__16472;var i = cljs.core.nth.call(null,vec__16473,0,null);var m = cljs.core.nth.call(null,vec__16473,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (vec__16473,i,m,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){x.preventDefault();
return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.goto","history.goto",3301148143),i], null));
});})(vec__16473,i,m,map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
], null),[cljs.core.str(i),cljs.core.str(" "),cljs.core.str(cljs.core.prn_str.call(null,m))].join('')], null)], null);
});})(map__16440,map__16440__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
,messages);if(cljs.core.map_QMARK_.call(null,attrs16444))
{return React.DOM.ul(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-menu"], null)], null),attrs16444)),null);
} else
{return React.DOM.ul({"className": "dropdown-menu"},sablono.interpreter.interpret.call(null,attrs16444));
}
})())),(function (){var attrs16445 = new cljs.core.Keyword(null,"pointer","pointer",613298607).cljs$core$IFn$_invoke$arity$1(sys);if(cljs.core.map_QMARK_.call(null,attrs16445))
{return React.DOM.p(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navbar-text"], null)], null),attrs16445))," ",sablono.interpreter.interpret.call(null,cljs.core.prn_str.call(null,msg)));
} else
{return React.DOM.p({"className": "navbar-text"},sablono.interpreter.interpret.call(null,attrs16445)," ",sablono.interpreter.interpret.call(null,cljs.core.prn_str.call(null,msg)));
}
})());
});
/**
* @param {...*} var_args
*/
frontier.cards.render_input_message_links = (function() { 
var render_input_message_links__delegate = function (msgs,event_chan,p__16474){var map__16476 = p__16474;var map__16476__$1 = ((cljs.core.seq_QMARK_.call(null,map__16476))?cljs.core.apply.call(null,cljs.core.hash_map,map__16476):map__16476);var disabled = cljs.core.get.call(null,map__16476__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,((function (map__16476,map__16476__$1,disabled){
return (function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),(cljs.core.truth_(disabled)?cljs.core.prn_str.call(null,x):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",3956969051),((function (map__16476,map__16476__$1,disabled){
return (function (){return cljs.core.async.put_BANG_.call(null,event_chan,x);
});})(map__16476,map__16476__$1,disabled))
], null),cljs.core.prn_str.call(null,x)], null))], null);
});})(map__16476,map__16476__$1,disabled))
,msgs)], null);
};
var render_input_message_links = function (msgs,event_chan,var_args){
var p__16474 = null;if (arguments.length > 2) {
  p__16474 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return render_input_message_links__delegate.call(this,msgs,event_chan,p__16474);};
render_input_message_links.cljs$lang$maxFixedArity = 2;
render_input_message_links.cljs$lang$applyTo = (function (arglist__16477){
var msgs = cljs.core.first(arglist__16477);
arglist__16477 = cljs.core.next(arglist__16477);
var event_chan = cljs.core.first(arglist__16477);
var p__16474 = cljs.core.rest(arglist__16477);
return render_input_message_links__delegate(msgs,event_chan,p__16474);
});
render_input_message_links.cljs$core$IFn$_invoke$arity$variadic = render_input_message_links__delegate;
return render_input_message_links;
})()
;
frontier.cards.input_controls_renderer = (function input_controls_renderer(input_messages){return (function() { 
var G__16486__delegate = function (p__16482,p__16483){var map__16484 = p__16482;var map__16484__$1 = ((cljs.core.seq_QMARK_.call(null,map__16484))?cljs.core.apply.call(null,cljs.core.hash_map,map__16484):map__16484);var event_chan = cljs.core.get.call(null,map__16484__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var map__16485 = p__16483;var map__16485__$1 = ((cljs.core.seq_QMARK_.call(null,map__16485))?cljs.core.apply.call(null,cljs.core.hash_map,map__16485):map__16485);var disabled = cljs.core.get.call(null,map__16485__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));return frontier.cards.render_input_message_links.call(null,input_messages,event_chan);
};
var G__16486 = function (p__16482,var_args){
var p__16483 = null;if (arguments.length > 1) {
  p__16483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__16486__delegate.call(this,p__16482,p__16483);};
G__16486.cljs$lang$maxFixedArity = 1;
G__16486.cljs$lang$applyTo = (function (arglist__16487){
var p__16482 = cljs.core.first(arglist__16487);
var p__16483 = cljs.core.rest(arglist__16487);
return G__16486__delegate(p__16482,p__16483);
});
G__16486.cljs$core$IFn$_invoke$arity$variadic = G__16486__delegate;
return G__16486;
})()
;
});
frontier.cards.history_manager = (function history_manager(initial_state,component){var initial_state_SINGLEQUOTE_ = cljs.core.assoc_in.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429),new cljs.core.Keyword(null,"state","state",1123661827)], null),initial_state);return (new frontier.cards.HistoryManager((new frontier.core.Namespacer(new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429),(new frontier.core.HistoryKeeper((new frontier.core.Namespacer(new cljs.core.Keyword(null,"state","state",1123661827),component)),new cljs.core.Keyword(null,"__history-keeper","__history-keeper",3771734429).cljs$core$IFn$_invoke$arity$1(initial_state_SINGLEQUOTE_)))))));
});

//# sourceMappingURL=cards.js.map