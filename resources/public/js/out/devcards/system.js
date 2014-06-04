// Compiled by ClojureScript 0.0-2202
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('jayq.core');
goog.require('clojure.set');
goog.require('frontier.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('crate.core');
goog.require('crate.core');
goog.require('jayq.core');
goog.require('frontier.core');
devcards.system.devcards_app_element_id = "devcards-main";
devcards.system.devcards_controls_element_id = "devcards-controls";
devcards.system.devcards_cards_element_id = "devcards-cards";
devcards.system.get_element_by_id = (function get_element_by_id(id){return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards_app_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.devcards_controls_node = (function devcards_controls_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_controls_element_id);
});
devcards.system.devcards_cards_node = (function devcards_cards_node(){return devcards.system.get_element_by_id.call(null,devcards.system.devcards_cards_element_id);
});
devcards.system.unique_card_id = (function unique_card_id(path){return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){return [cljs.core.str("["),cljs.core.str(x),cljs.core.str("]")].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",1006488231),path))));
});
devcards.system.unique_card_id__GT_path = (function unique_card_id__GT_path(card_id){return cljs.core.mapv.call(null,cljs.core.keyword,cljs.core.rest.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,card_id,1,(cljs.core.count.call(null,card_id) - 1)),/\].\[/)));
});
devcards.system.current_page = (function current_page(data){var and__7868__auto__ = new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__7868__auto__))
{var and__7868__auto____$1 = new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__7868__auto____$1))
{return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(data));
} else
{return and__7868__auto____$1;
}
} else
{return and__7868__auto__;
}
});
devcards.system.IMount = (function (){var obj16489 = {};return obj16489;
})();
devcards.system.mount = (function mount(o,data){if((function (){var and__7868__auto__ = o;if(and__7868__auto__)
{return o.devcards$system$IMount$mount$arity$2;
} else
{return and__7868__auto__;
}
})())
{return o.devcards$system$IMount$mount$arity$2(o,data);
} else
{var x__8507__auto__ = (((o == null))?null:o);return (function (){var or__7880__auto__ = (devcards.system.mount[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (devcards.system.mount["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMount.mount",o);
}
}
})().call(null,o,data);
}
});
devcards.system.IUnMount = (function (){var obj16491 = {};return obj16491;
})();
devcards.system.unmount = (function unmount(o,data){if((function (){var and__7868__auto__ = o;if(and__7868__auto__)
{return o.devcards$system$IUnMount$unmount$arity$2;
} else
{return and__7868__auto__;
}
})())
{return o.devcards$system$IUnMount$unmount$arity$2(o,data);
} else
{var x__8507__auto__ = (((o == null))?null:o);return (function (){var or__7880__auto__ = (devcards.system.unmount[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (devcards.system.unmount["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnMount.unmount",o);
}
}
})().call(null,o,data);
}
});
devcards.system.IConfig = (function (){var obj16493 = {};return obj16493;
})();
devcards.system._options = (function _options(o){if((function (){var and__7868__auto__ = o;if(and__7868__auto__)
{return o.devcards$system$IConfig$_options$arity$1;
} else
{return and__7868__auto__;
}
})())
{return o.devcards$system$IConfig$_options$arity$1(o);
} else
{var x__8507__auto__ = (((o == null))?null:o);return (function (){var or__7880__auto__ = (devcards.system._options[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (devcards.system._options["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConfig.-options",o);
}
}
})().call(null,o);
}
});
devcards.system.default_card_options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"heading","heading",1809215860),true,new cljs.core.Keyword(null,"padding","padding",4502531971),true,new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876),true,new cljs.core.Keyword(null,"hidden","hidden",4091384092),false], null);
devcards.system.get_options = (function get_options(card){return cljs.core.merge.call(null,devcards.system.default_card_options,(function (){var or__7880__auto__ = (function (){var and__7868__auto__ = (function (){var G__16501 = card;if(G__16501)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16501.devcards$system$IConfig$;
}
})()))
{return true;
} else
{if((!G__16501.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IConfig,G__16501);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IConfig,G__16501);
}
})();if(and__7868__auto__)
{return devcards.system._options.call(null,card);
} else
{return and__7868__auto__;
}
})();if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});

/**
* @constructor
* @param {*} path
* @param {*} options
* @param {*} func
* @param {*} position
* @param {*} data_atom
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.DevCard = (function (path,options,func,position,data_atom,__meta,__extmap){
this.path = path;
this.options = options;
this.func = func;
this.position = position;
this.data_atom = data_atom;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.DevCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8466__auto__,k__8467__auto__){var self__ = this;
var this__8466__auto____$1 = this;return cljs.core._lookup.call(null,this__8466__auto____$1,k__8467__auto__,null);
});
devcards.system.DevCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8468__auto__,k16503,else__8469__auto__){var self__ = this;
var this__8468__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k16503,new cljs.core.Keyword(null,"path","path",1017337751)))
{return self__.path;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16503,new cljs.core.Keyword(null,"options","options",4059396624)))
{return self__.options;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16503,new cljs.core.Keyword(null,"func","func",1017058870)))
{return self__.func;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16503,new cljs.core.Keyword(null,"position","position",1761709211)))
{return self__.position;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k16503,new cljs.core.Keyword(null,"data-atom","data-atom",603797766)))
{return self__.data_atom;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k16503,else__8469__auto__);
} else
{return null;
}
}
}
}
}
}
});
devcards.system.DevCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8480__auto__,writer__8481__auto__,opts__8482__auto__){var self__ = this;
var this__8480__auto____$1 = this;var pr_pair__8483__auto__ = ((function (this__8480__auto____$1){
return (function (keyval__8484__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,cljs.core.pr_writer,""," ","",opts__8482__auto__,keyval__8484__auto__);
});})(this__8480__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,pr_pair__8483__auto__,"#devcards.system.DevCard{",", ","}",opts__8482__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",1017337751),self__.path],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",1017058870),self__.func],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",1761709211),self__.position],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-atom","data-atom",603797766),self__.data_atom],null))], null),self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8464__auto__){var self__ = this;
var this__8464__auto____$1 = this;return self__.__meta;
});
devcards.system.DevCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8460__auto__){var self__ = this;
var this__8460__auto____$1 = this;return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.DevCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8470__auto__){var self__ = this;
var this__8470__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8461__auto__){var self__ = this;
var this__8461__auto____$1 = this;var h__8291__auto__ = self__.__hash;if(!((h__8291__auto__ == null)))
{return h__8291__auto__;
} else
{var h__8291__auto____$1 = cljs.core.hash_imap.call(null,this__8461__auto____$1);self__.__hash = h__8291__auto____$1;
return h__8291__auto____$1;
}
});
devcards.system.DevCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8462__auto__,other__8463__auto__){var self__ = this;
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
devcards.system.DevCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8475__auto__,k__8476__auto__){var self__ = this;
var this__8475__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",1017337751),null,new cljs.core.Keyword(null,"func","func",1017058870),null,new cljs.core.Keyword(null,"position","position",1761709211),null,new cljs.core.Keyword(null,"options","options",4059396624),null,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),null], null), null),k__8476__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8475__auto____$1),self__.__meta),k__8476__auto__);
} else
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8476__auto__)),null));
}
});
devcards.system.DevCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8473__auto__,k__8474__auto__,G__16502){var self__ = this;
var this__8473__auto____$1 = this;var pred__16505 = cljs.core.keyword_identical_QMARK_;var expr__16506 = k__8474__auto__;if(cljs.core.truth_(pred__16505.call(null,new cljs.core.Keyword(null,"path","path",1017337751),expr__16506)))
{return (new devcards.system.DevCard(G__16502,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16505.call(null,new cljs.core.Keyword(null,"options","options",4059396624),expr__16506)))
{return (new devcards.system.DevCard(self__.path,G__16502,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16505.call(null,new cljs.core.Keyword(null,"func","func",1017058870),expr__16506)))
{return (new devcards.system.DevCard(self__.path,self__.options,G__16502,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16505.call(null,new cljs.core.Keyword(null,"position","position",1761709211),expr__16506)))
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,G__16502,self__.data_atom,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16505.call(null,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),expr__16506)))
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,G__16502,self__.__meta,self__.__extmap,null));
} else
{return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8474__auto__,G__16502),null));
}
}
}
}
}
});
devcards.system.DevCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8478__auto__){var self__ = this;
var this__8478__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",1017337751),self__.path],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",4059396624),self__.options],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",1017058870),self__.func],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",1761709211),self__.position],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-atom","data-atom",603797766),self__.data_atom],null))], null),self__.__extmap));
});
devcards.system.DevCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8465__auto__,G__16502){var self__ = this;
var this__8465__auto____$1 = this;return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,G__16502,self__.__extmap,self__.__hash));
});
devcards.system.DevCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8471__auto__,entry__8472__auto__){var self__ = this;
var this__8471__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8472__auto__))
{return cljs.core._assoc.call(null,this__8471__auto____$1,cljs.core._nth.call(null,entry__8472__auto__,0),cljs.core._nth.call(null,entry__8472__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8471__auto____$1,entry__8472__auto__);
}
});
devcards.system.DevCard.cljs$lang$type = true;
devcards.system.DevCard.cljs$lang$ctorPrSeq = (function (this__8500__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/DevCard");
});
devcards.system.DevCard.cljs$lang$ctorPrWriter = (function (this__8500__auto__,writer__8501__auto__){return cljs.core._write.call(null,writer__8501__auto__,"devcards.system/DevCard");
});
devcards.system.__GT_DevCard = (function __GT_DevCard(path,options,func,position,data_atom){return (new devcards.system.DevCard(path,options,func,position,data_atom));
});
devcards.system.map__GT_DevCard = (function map__GT_DevCard(G__16504){return (new devcards.system.DevCard(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__16504),new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(G__16504),new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(G__16504),new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(G__16504),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(G__16504),null,cljs.core.dissoc.call(null,G__16504,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"func","func",1017058870),new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.Keyword(null,"data-atom","data-atom",603797766))));
});
devcards.system.devcard_QMARK_ = (function devcard_QMARK_(d){var and__7868__auto__ = cljs.core.map_QMARK_.call(null,d);if(and__7868__auto__)
{var and__7868__auto____$1 = new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7868__auto____$1))
{var and__7868__auto____$2 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7868__auto____$2))
{var and__7868__auto____$3 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7868__auto____$3))
{var and__7868__auto____$4 = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(d);if(cljs.core.truth_(and__7868__auto____$4))
{return d;
} else
{return and__7868__auto____$4;
}
} else
{return and__7868__auto____$3;
}
} else
{return and__7868__auto____$2;
}
} else
{return and__7868__auto____$1;
}
} else
{return and__7868__auto__;
}
});
devcards.system.ifilter = (function (){var method_table__8738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("ifilter",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8742__auto__,method_table__8738__auto__,prefer_table__8739__auto__,method_cache__8740__auto__,cached_hierarchy__8741__auto__));
})();
cljs.core._add_method.call(null,devcards.system.ifilter,new cljs.core.Keyword(null,"default","default",2558708147),(function (msg,state){return msg;
}));
cljs.core._add_method.call(null,devcards.system.ifilter,new cljs.core.Keyword(null,"set-current-path","set-current-path",2665043702),(function (p__16508,state){var vec__16509 = p__16508;var _ = cljs.core.nth.call(null,vec__16509,0,null);var map__16510 = cljs.core.nth.call(null,vec__16509,1,null);var map__16510__$1 = ((cljs.core.seq_QMARK_.call(null,map__16510))?cljs.core.apply.call(null,cljs.core.hash_map,map__16510):map__16510);var path = cljs.core.get.call(null,map__16510__$1,new cljs.core.Keyword(null,"path","path",1017337751));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,path,":::")))], null)], null);
}));
devcards.system.dev_trans = (function (){var method_table__8738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8742__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dev-trans",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8742__auto__,method_table__8738__auto__,prefer_table__8739__auto__,method_cache__8740__auto__,cached_hierarchy__8741__auto__));
})();
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",2558708147),(function (msg,state){return state;
}));
devcards.system.map_vals = (function map_vals(f,h_map){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16513){var vec__16514 = p__16513;var k = cljs.core.nth.call(null,vec__16514,0,null);var v = cljs.core.nth.call(null,vec__16514,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
}),h_map));
});
devcards.system.map_all_cards_in_ns = (function map_all_cards_in_ns(f,state,ns){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",1108335317),ns], null),(function (p1__16515_SHARP_){return devcards.system.map_vals.call(null,f,p1__16515_SHARP_);
}));
});
devcards.system.mark_card = (function mark_card(card){return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093),true);
});
devcards.system.remove_mark_from_card = (function remove_mark_from_card(card){return cljs.core.dissoc.call(null,card,new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093));
});
devcards.system.set_card_to_be_deleted = (function set_card_to_be_deleted(card){if(cljs.core.truth_(new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093).cljs$core$IFn$_invoke$arity$1(card)))
{return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012),true);
} else
{return card;
}
});
devcards.system.set_deleted_and_remove_marks_in_ns = (function set_deleted_and_remove_marks_in_ns(state,ns){return devcards.system.map_all_cards_in_ns.call(null,cljs.core.comp.call(null,devcards.system.remove_mark_from_card,devcards.system.set_card_to_be_deleted),state,ns);
});
devcards.system.card_namespaces_being_reloaded = (function card_namespaces_being_reloaded(state,files){return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,new cljs.core.Keyword(null,"namespace","namespace",2266122445)),files)),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(state))));
});
devcards.system.mark_all_cards = (function mark_all_cards(state,files){return cljs.core.reduce.call(null,cljs.core.partial.call(null,devcards.system.map_all_cards_in_ns,devcards.system.mark_card),state,devcards.system.card_namespaces_being_reloaded.call(null,state,files));
});
devcards.system.remove_deleted_cards = (function remove_deleted_cards(card_map){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__16518){var vec__16519 = p__16518;var k = cljs.core.nth.call(null,vec__16519,0,null);var v = cljs.core.nth.call(null,vec__16519,1,null);return cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(v));
}),card_map));
});
devcards.system.remove_deleted_cards_in_ns = (function remove_deleted_cards_in_ns(state,ns){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",1108335317),ns], null),devcards.system.remove_deleted_cards);
});
devcards.system.sweep_ns = (function sweep_ns(state,ns){return devcards.system.set_deleted_and_remove_marks_in_ns.call(null,devcards.system.remove_deleted_cards_in_ns.call(null,state,ns),ns);
});
devcards.system.sweep = (function sweep(state,files){return cljs.core.reduce.call(null,devcards.system.sweep_ns,state,cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317).cljs$core$IFn$_invoke$arity$1(state))));
});
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),(function (p__16520,state){var vec__16521 = p__16520;var _ = cljs.core.nth.call(null,vec__16521,0,null);var files = cljs.core.nth.call(null,vec__16521,1,null);return devcards.system.mark_all_cards.call(null,state,files);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"jsreload","jsreload",3412240276),(function (p__16522,state){var vec__16523 = p__16522;var _ = cljs.core.nth.call(null,vec__16523,0,null);var files = cljs.core.nth.call(null,vec__16523,1,null);return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,devcards.system.sweep.call(null,state,files),new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271),new cljs.core.Keyword(null,"js","js",1013907643)),new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"cssload","cssload",2084339931),(function (msg,state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271),new cljs.core.Keyword(null,"css","css",1014003061));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"remove-code-loaded-effect","remove-code-loaded-effect",3939124180),(function (msg,state){return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"compile-fail","compile-fail",1107360234),(function (msg,state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),cljs.core.last.call(null,msg));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",3872264044),(function (p__16524,state){var vec__16525 = p__16524;var _ = cljs.core.nth.call(null,vec__16525,0,null);var map__16526 = cljs.core.nth.call(null,vec__16525,1,null);var map__16526__$1 = ((cljs.core.seq_QMARK_.call(null,map__16526))?cljs.core.apply.call(null,cljs.core.hash_map,map__16526):map__16526);var func = cljs.core.get.call(null,map__16526__$1,new cljs.core.Keyword(null,"func","func",1017058870));var options = cljs.core.get.call(null,map__16526__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__16526__$1,new cljs.core.Keyword(null,"path","path",1017337751));var position = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(state);return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),path),((function (position,vec__16525,_,map__16526,map__16526__$1,func,options,path){
return (function (dc){if(cljs.core.truth_(dc))
{return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,dc,new cljs.core.Keyword(null,"options","options",4059396624),cljs.core.merge.call(null,devcards.system.default_card_options,options),new cljs.core.Keyword(null,"position","position",1761709211),position,new cljs.core.Keyword(null,"func","func",1017058870),func),new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1175282093)),new cljs.core.Keyword(null,"delete-card","delete-card",4140359012));
} else
{return (new devcards.system.DevCard(path,cljs.core.merge.call(null,devcards.system.default_card_options,options),func,position,cljs.core.atom.call(null,(function (){var or__7880__auto__ = new cljs.core.Keyword(null,"initial-state","initial-state",4067401786).cljs$core$IFn$_invoke$arity$1(options);if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})())));
}
});})(position,vec__16525,_,map__16526,map__16526__$1,func,options,path))
);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"add-to-current-path","add-to-current-path",4368567377),(function (p__16527,state){var vec__16528 = p__16527;var _ = cljs.core.nth.call(null,vec__16528,0,null);var map__16529 = cljs.core.nth.call(null,vec__16528,1,null);var map__16529__$1 = ((cljs.core.seq_QMARK_.call(null,map__16529))?cljs.core.apply.call(null,cljs.core.hash_map,map__16529):map__16529);var path = cljs.core.get.call(null,map__16529__$1,new cljs.core.Keyword(null,"path","path",1017337751));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643)], null),((function (vec__16528,_,map__16529,map__16529__$1,path){
return (function (x){return cljs.core.conj.call(null,x,cljs.core.keyword.call(null,path));
});})(vec__16528,_,map__16529,map__16529__$1,path))
);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"current-path","current-path",2436513643),(function (p__16530,state){var vec__16531 = p__16530;var _ = cljs.core.nth.call(null,vec__16531,0,null);var map__16532 = cljs.core.nth.call(null,vec__16531,1,null);var map__16532__$1 = ((cljs.core.seq_QMARK_.call(null,map__16532))?cljs.core.apply.call(null,cljs.core.hash_map,map__16532):map__16532);var path = cljs.core.get.call(null,map__16532__$1,new cljs.core.Keyword(null,"path","path",1017337751));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",2436513643),cljs.core.vec.call(null,path));
}));
devcards.system.visible_cards = (function visible_cards(state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721),devcards.system.visible_card_nodes.call(null,state));
});
devcards.system.display_current_cards = (function display_current_cards(state){var cur = devcards.system.current_page.call(null,state);if(cljs.core.truth_(devcards.system.devcard_QMARK_.call(null,cur)))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988),cur);
} else
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"display-dir-paths","display-dir-paths",3029188565),cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur)),new cljs.core.Keyword(null,"display-cards","display-cards",2395336202),cljs.core.filter.call(null,cljs.core.comp.call(null,((function (cur){
return (function (p1__16533_SHARP_){var and__7868__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(p1__16533_SHARP_));if(and__7868__auto__)
{return devcards.system.devcard_QMARK_.call(null,p1__16533_SHARP_);
} else
{return and__7868__auto__;
}
});})(cur))
,cljs.core.second),cur));
}
});
devcards.system.render_cards_QMARK_ = (function render_cards_QMARK_(state){var visible_cards = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.first),new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(state)));var intended_cards = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(state)], null),cljs.core.vals.call(null,new cljs.core.Keyword(null,"display-cards","display-cards",2395336202).cljs$core$IFn$_invoke$arity$1(state)))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"render-cards","render-cards",651634654),cljs.core.not_EQ_.call(null,visible_cards,intended_cards));
});
devcards.system.breadcrumbs = (function breadcrumbs(p__16534){var map__16536 = p__16534;var map__16536__$1 = ((cljs.core.seq_QMARK_.call(null,map__16536))?cljs.core.apply.call(null,cljs.core.hash_map,map__16536):map__16536);var state = map__16536__$1;var current_path = cljs.core.get.call(null,map__16536__$1,new cljs.core.Keyword(null,"current-path","current-path",2436513643));var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"home","home",1017112657),current_path));var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__16536,map__16536__$1,state,current_path){
return (function (i,v){return cljs.core.subvec.call(null,v,0,i);
});})(cpath,map__16536,map__16536__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + 1),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"breadcrumbs","breadcrumbs",962446402),crumbs);
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.DevCards = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.DevCards.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8466__auto__,k__8467__auto__){var self__ = this;
var this__8466__auto____$1 = this;return cljs.core._lookup.call(null,this__8466__auto____$1,k__8467__auto__,null);
});
devcards.system.DevCards.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8468__auto__,k16538,else__8469__auto__){var self__ = this;
var this__8468__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k16538,else__8469__auto__);
} else
{return null;
}
});
devcards.system.DevCards.prototype.frontier$core$IInputFilter$ = true;
devcards.system.DevCards.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;return devcards.system.ifilter.call(null,msg,state);
});
devcards.system.DevCards.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8480__auto__,writer__8481__auto__,opts__8482__auto__){var self__ = this;
var this__8480__auto____$1 = this;var pr_pair__8483__auto__ = ((function (this__8480__auto____$1){
return (function (keyval__8484__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,cljs.core.pr_writer,""," ","",opts__8482__auto__,keyval__8484__auto__);
});})(this__8480__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,pr_pair__8483__auto__,"#devcards.system.DevCards{",", ","}",opts__8482__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.DevCards.prototype.frontier$core$IDerive$ = true;
devcards.system.DevCards.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;return devcards.system.breadcrumbs.call(null,devcards.system.render_cards_QMARK_.call(null,devcards.system.display_current_cards.call(null,devcards.system.visible_cards.call(null,state))));
});
devcards.system.DevCards.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8464__auto__){var self__ = this;
var this__8464__auto____$1 = this;return self__.__meta;
});
devcards.system.DevCards.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8460__auto__){var self__ = this;
var this__8460__auto____$1 = this;return (new devcards.system.DevCards(self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.DevCards.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8470__auto__){var self__ = this;
var this__8470__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.DevCards.prototype.frontier$core$ITransform$ = true;
devcards.system.DevCards.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){var self__ = this;
var o__$1 = this;return devcards.system.dev_trans.call(null,msg,state);
});
devcards.system.DevCards.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8461__auto__){var self__ = this;
var this__8461__auto____$1 = this;var h__8291__auto__ = self__.__hash;if(!((h__8291__auto__ == null)))
{return h__8291__auto__;
} else
{var h__8291__auto____$1 = cljs.core.hash_imap.call(null,this__8461__auto____$1);self__.__hash = h__8291__auto____$1;
return h__8291__auto____$1;
}
});
devcards.system.DevCards.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8462__auto__,other__8463__auto__){var self__ = this;
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
devcards.system.DevCards.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8475__auto__,k__8476__auto__){var self__ = this;
var this__8475__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__8476__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8475__auto____$1),self__.__meta),k__8476__auto__);
} else
{return (new devcards.system.DevCards(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8476__auto__)),null));
}
});
devcards.system.DevCards.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8473__auto__,k__8474__auto__,G__16537){var self__ = this;
var this__8473__auto____$1 = this;var pred__16540 = cljs.core.keyword_identical_QMARK_;var expr__16541 = k__8474__auto__;return (new devcards.system.DevCards(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8474__auto__,G__16537),null));
});
devcards.system.DevCards.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8478__auto__){var self__ = this;
var this__8478__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.DevCards.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8465__auto__,G__16537){var self__ = this;
var this__8465__auto____$1 = this;return (new devcards.system.DevCards(G__16537,self__.__extmap,self__.__hash));
});
devcards.system.DevCards.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8471__auto__,entry__8472__auto__){var self__ = this;
var this__8471__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8472__auto__))
{return cljs.core._assoc.call(null,this__8471__auto____$1,cljs.core._nth.call(null,entry__8472__auto__,0),cljs.core._nth.call(null,entry__8472__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8471__auto____$1,entry__8472__auto__);
}
});
devcards.system.DevCards.cljs$lang$type = true;
devcards.system.DevCards.cljs$lang$ctorPrSeq = (function (this__8500__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/DevCards");
});
devcards.system.DevCards.cljs$lang$ctorPrWriter = (function (this__8500__auto__,writer__8501__auto__){return cljs.core._write.call(null,writer__8501__auto__,"devcards.system/DevCards");
});
devcards.system.__GT_DevCards = (function __GT_DevCards(){return (new devcards.system.DevCards());
});
devcards.system.map__GT_DevCards = (function map__GT_DevCards(G__16539){return (new devcards.system.DevCards(null,cljs.core.dissoc.call(null,G__16539)));
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
devcards.system.CurrentPathSessionStorage = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8466__auto__,k__8467__auto__){var self__ = this;
var this__8466__auto____$1 = this;return cljs.core._lookup.call(null,this__8466__auto____$1,k__8467__auto__,null);
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8468__auto__,k16544,else__8469__auto__){var self__ = this;
var this__8468__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k16544,else__8469__auto__);
} else
{return null;
}
});
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IInit$ = true;
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IInit$_initialize$arity$3 = (function (_,state,event_chan){var self__ = this;
var ___$1 = this;var temp__4126__auto__ = sessionStorage.getItem("__devcards__current-path");if(cljs.core.truth_(temp__4126__auto__))
{var current_path = temp__4126__auto__;var temp__4126__auto____$1 = (function (){try{return cljs.reader.read_string.call(null,current_path);
}catch (e16546){if((e16546 instanceof Error))
{var e = e16546;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16546;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4126__auto____$1))
{var path = temp__4126__auto____$1;return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
} else
{return null;
}
} else
{return null;
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8480__auto__,writer__8481__auto__,opts__8482__auto__){var self__ = this;
var this__8480__auto____$1 = this;var pr_pair__8483__auto__ = ((function (this__8480__auto____$1){
return (function (keyval__8484__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,cljs.core.pr_writer,""," ","",opts__8482__auto__,keyval__8484__auto__);
});})(this__8480__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__8481__auto__,pr_pair__8483__auto__,"#devcards.system.CurrentPathSessionStorage{",", ","}",opts__8482__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IDerive$ = true;
devcards.system.CurrentPathSessionStorage.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){var self__ = this;
var o__$1 = this;sessionStorage.setItem("__devcards__current-path",cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"current-path","current-path",2436513643).cljs$core$IFn$_invoke$arity$1(state)));
return state;
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8464__auto__){var self__ = this;
var this__8464__auto____$1 = this;return self__.__meta;
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8460__auto__){var self__ = this;
var this__8460__auto____$1 = this;return (new devcards.system.CurrentPathSessionStorage(self__.__meta,self__.__extmap,self__.__hash));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8470__auto__){var self__ = this;
var this__8470__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8461__auto__){var self__ = this;
var this__8461__auto____$1 = this;var h__8291__auto__ = self__.__hash;if(!((h__8291__auto__ == null)))
{return h__8291__auto__;
} else
{var h__8291__auto____$1 = cljs.core.hash_imap.call(null,this__8461__auto____$1);self__.__hash = h__8291__auto____$1;
return h__8291__auto____$1;
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8462__auto__,other__8463__auto__){var self__ = this;
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
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8475__auto__,k__8476__auto__){var self__ = this;
var this__8475__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__8476__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8475__auto____$1),self__.__meta),k__8476__auto__);
} else
{return (new devcards.system.CurrentPathSessionStorage(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8476__auto__)),null));
}
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8473__auto__,k__8474__auto__,G__16543){var self__ = this;
var this__8473__auto____$1 = this;var pred__16547 = cljs.core.keyword_identical_QMARK_;var expr__16548 = k__8474__auto__;return (new devcards.system.CurrentPathSessionStorage(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8474__auto__,G__16543),null));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8478__auto__){var self__ = this;
var this__8478__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8465__auto__,G__16543){var self__ = this;
var this__8465__auto____$1 = this;return (new devcards.system.CurrentPathSessionStorage(G__16543,self__.__extmap,self__.__hash));
});
devcards.system.CurrentPathSessionStorage.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8471__auto__,entry__8472__auto__){var self__ = this;
var this__8471__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8472__auto__))
{return cljs.core._assoc.call(null,this__8471__auto____$1,cljs.core._nth.call(null,entry__8472__auto__,0),cljs.core._nth.call(null,entry__8472__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8471__auto____$1,entry__8472__auto__);
}
});
devcards.system.CurrentPathSessionStorage.cljs$lang$type = true;
devcards.system.CurrentPathSessionStorage.cljs$lang$ctorPrSeq = (function (this__8500__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/CurrentPathSessionStorage");
});
devcards.system.CurrentPathSessionStorage.cljs$lang$ctorPrWriter = (function (this__8500__auto__,writer__8501__auto__){return cljs.core._write.call(null,writer__8501__auto__,"devcards.system/CurrentPathSessionStorage");
});
devcards.system.__GT_CurrentPathSessionStorage = (function __GT_CurrentPathSessionStorage(){return (new devcards.system.CurrentPathSessionStorage());
});
devcards.system.map__GT_CurrentPathSessionStorage = (function map__GT_CurrentPathSessionStorage(G__16545){return (new devcards.system.CurrentPathSessionStorage(null,cljs.core.dissoc.call(null,G__16545)));
});
devcards.system.naked_card = (function naked_card(p__16550){var map__16552 = p__16550;var map__16552__$1 = ((cljs.core.seq_QMARK_.call(null,map__16552))?cljs.core.apply.call(null,cljs.core.hash_map,map__16552):map__16552);var options = cljs.core.get.call(null,map__16552__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__16552__$1,new cljs.core.Keyword(null,"path","path",1017337751));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.unique_card_id.call(null,path),new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("devcard-rendered-card"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"padding","padding",4502531971).cljs$core$IFn$_invoke$arity$1(options))?" devcard-padding":""))].join('')], null)], null);
});
devcards.system.card_template = (function card_template(p__16553){var map__16555 = p__16553;var map__16555__$1 = ((cljs.core.seq_QMARK_.call(null,map__16555))?cljs.core.apply.call(null,cljs.core.hash_map,map__16555):map__16555);var card = map__16555__$1;var options = cljs.core.get.call(null,map__16555__$1,new cljs.core.Keyword(null,"options","options",4059396624));var path = cljs.core.get.call(null,map__16555__$1,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092).cljs$core$IFn$_invoke$arity$1(options)))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"heading","heading",1809215860).cljs$core$IFn$_invoke$arity$1(options)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default.devcard-panel","div.panel.panel-default.devcard-panel",1439351633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading.devcards-set-current-path","div.panel-heading.devcards-set-current-path",3498842019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-path","data-path",604226522),clojure.string.join.call(null,":::",cljs.core.map.call(null,cljs.core.name,path))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-title","span.panel-title",1574285341),cljs.core.name.call(null,cljs.core.last.call(null,path))," "], null)], null),devcards.system.naked_card.call(null,card)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default.devcard-panel","div.panel.panel-default.devcard-panel",1439351633),devcards.system.naked_card.call(null,card)], null);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956)], null);
}
});
devcards.system.display_cards = (function display_cards(cards){return cljs.core.map.call(null,cljs.core.comp.call(null,devcards.system.card_template,cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",1761709211),cljs.core.second),cards));
});
devcards.system.dir_links = (function dir_links(dirs){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group","div.list-group",1811678591),cljs.core.map.call(null,(function (p__16558){var vec__16559 = p__16558;var key = cljs.core.nth.call(null,vec__16559,0,null);var child_tree = cljs.core.nth.call(null,vec__16559,1,null);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.devcards-add-to-current-path","a.list-group-item.devcards-add-to-current-path",2958249949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-path","data-path",604226522),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-folder-close","span.glyphicon.glyphicon-folder-close",1033290496)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",1118720881),cljs.core.count.call(null,child_tree)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956)," ",cljs.core.name.call(null,key)], null)], null);
}),cljs.core.reverse.call(null,dirs))], null);
});
devcards.system.breadcrumbs_templ = (function breadcrumbs_templ(crumbs){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.breadcrumb.devcards-breadcrumb","ol.breadcrumb.devcards-breadcrumb",4620418554),cljs.core.map.call(null,(function (p__16562){var vec__16563 = p__16562;var n = cljs.core.nth.call(null,vec__16563,0,null);var path = cljs.core.nth.call(null,vec__16563,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.devcards-set-current-path","a.devcards-set-current-path",2980456232),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"data-path","data-path",604226522),clojure.string.join.call(null,":::",path)], null),n], null)], null);
}),crumbs)], null);
});
devcards.system.main_template = (function main_template(data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-default.navbar-static-top.devards-main-navbar","div.navbar.navbar-default.navbar-static-top.devards-main-navbar",580178330),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",1151360959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",4283020137),"(:devcards ClojureScript)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",1688702431),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"breadcrumbs","breadcrumbs",962446402).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var crumbs = temp__4126__auto__;return devcards.system.breadcrumbs_templ.call(null,crumbs);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-dir-paths","display-dir-paths",3029188565).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var dir_paths = temp__4126__auto__;return devcards.system.dir_links.call(null,dir_paths);
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1688702425)], null)], null)], null)], null);
});
devcards.system.cards_templates = (function cards_templates(data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",1688702431),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-cards","display-cards",2395336202).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var cards = temp__4126__auto__;return devcards.system.display_cards.call(null,cards);
} else
{return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4126__auto__))
{var card = temp__4126__auto__;return devcards.system.naked_card.call(null,card);
} else
{return null;
}
})()], null)], null)], null);
});
devcards.system.to_node = (function to_node(jq){return (jq.get()[0]);
});
devcards.system.sel_nodes = (function sel_nodes(sel){return cljs.core.mapv.call(null,devcards.system.to_node,jayq.core.$.call(null,sel));
});
devcards.system.visible_card_paths = (function visible_card_paths(){var card_nodes = devcards.system.sel_nodes.call(null,".devcard-rendered-card");return cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,((function (card_nodes){
return (function (p1__16564_SHARP_){return devcards.system.unique_card_id__GT_path.call(null,p1__16564_SHARP_.id);
});})(card_nodes))
,card_nodes));
});
devcards.system.visible_card_nodes = (function visible_card_nodes(data){var card_nodes = devcards.system.sel_nodes.call(null,".devcard-rendered-card");return cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.juxt.call(null,((function (card_nodes){
return (function (p1__16565_SHARP_){return cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,p1__16565_SHARP_.id)));
});})(card_nodes))
,cljs.core.identity),card_nodes));
});
devcards.system.toggle_background_to_white = (function toggle_background_to_white(data){if(cljs.core.truth_(new cljs.core.Keyword(null,"display-single-card","display-single-card",1219792988).cljs$core$IFn$_invoke$arity$1(data)))
{return $("body").addClass("devcards-white-background");
} else
{return $("body").removeClass("devcards-white-background");
}
});
devcards.system.compile_failure = (function compile_failure(state){if(cljs.core.truth_(new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569).cljs$core$IFn$_invoke$arity$1(state)))
{return $(devcards.system.devcards_app_node.call(null)).addClass("devcards-compile-failed");
} else
{return $(devcards.system.devcards_app_node.call(null)).removeClass("devcards-compile-failed");
}
});
devcards.system.code_loaded_class = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js","js",1013907643),"devcards-load-highlight",new cljs.core.Keyword(null,"css","css",1014003061),"devcards-cssload-highlight"], null);
devcards.system.code_loaded = (function code_loaded(state,event_chan){var temp__4126__auto__ = devcards.system.code_loaded_class.call(null,new cljs.core.Keyword(null,"code-loaded","code-loaded",2924989271).cljs$core$IFn$_invoke$arity$1(state));if(cljs.core.truth_(temp__4126__auto__))
{var class$ = temp__4126__auto__;$(devcards.system.devcards_app_node.call(null)).addClass(class$);
var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__,class$,temp__4126__auto__){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__,class$,temp__4126__auto__){
return (function (state_16596){var state_val_16597 = (state_16596[1]);if((state_val_16597 === 2))
{var inst_16588 = (state_16596[2]);var inst_16589 = devcards.system.devcards_app_node.call(null);var inst_16590 = $(inst_16589);var inst_16591 = inst_16590.removeClass(class$);var inst_16592 = [new cljs.core.Keyword(null,"remove-code-loaded-effect","remove-code-loaded-effect",3939124180)];var inst_16593 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16592,null));var inst_16594 = cljs.core.async.put_BANG_.call(null,event_chan,inst_16593);var state_16596__$1 = (function (){var statearr_16598 = state_16596;(statearr_16598[7] = inst_16591);
(statearr_16598[8] = inst_16588);
return statearr_16598;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16596__$1,inst_16594);
} else
{if((state_val_16597 === 1))
{var inst_16586 = cljs.core.async.timeout.call(null,1400);var state_16596__$1 = state_16596;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16596__$1,2,inst_16586);
} else
{return null;
}
}
});})(c__9731__auto__,class$,temp__4126__auto__))
;return ((function (switch__9716__auto__,c__9731__auto__,class$,temp__4126__auto__){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_16602 = [null,null,null,null,null,null,null,null,null];(statearr_16602[0] = state_machine__9717__auto__);
(statearr_16602[1] = 1);
return statearr_16602;
});
var state_machine__9717__auto____1 = (function (state_16596){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_16596);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e16603){if((e16603 instanceof Object))
{var ex__9720__auto__ = e16603;var statearr_16604_16606 = state_16596;(statearr_16604_16606[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16596);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16607 = state_16596;
state_16596 = G__16607;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_16596){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_16596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__,class$,temp__4126__auto__))
})();var state__9733__auto__ = (function (){var statearr_16605 = f__9732__auto__.call(null);(statearr_16605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_16605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__,class$,temp__4126__auto__))
);
return c__9731__auto__;
} else
{return null;
}
});
devcards.system.create_needed_card_nodes = (function create_needed_card_nodes(data){if(cljs.core.truth_(new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data)))
{return jayq.core.$.call(null,devcards.system.devcards_cards_node.call(null)).html(crate.core.html.call(null,devcards.system.cards_templates.call(null,data)));
} else
{return null;
}
});
devcards.system.unmount_card_nodes = (function unmount_card_nodes(data){var seq__16618 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(data));var chunk__16619 = null;var count__16620 = 0;var i__16621 = 0;while(true){
if((i__16621 < count__16620))
{var vec__16622 = cljs.core._nth.call(null,chunk__16619,i__16621);var card = cljs.core.nth.call(null,vec__16622,0,null);var node = cljs.core.nth.call(null,vec__16622,1,null);var temp__4126__auto___16628 = cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,node.id)));if(cljs.core.truth_(temp__4126__auto___16628))
{var card_16629__$1 = temp__4126__auto___16628;var functionality_16630 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card_16629__$1).call(null);if(cljs.core.truth_((function (){var and__7868__auto__ = (function (){var G__16624 = functionality_16630;if(G__16624)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16624.devcards$system$IUnMount$;
}
})()))
{return true;
} else
{if((!G__16624.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__16624);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__16624);
}
})();if(and__7868__auto__)
{var or__7880__auto__ = new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(card_16629__$1));if(cljs.core.truth_(or__7880__auto____$1))
{return or__7880__auto____$1;
} else
{return new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card_16629__$1);
}
}
} else
{return and__7868__auto__;
}
})()))
{devcards.system.unmount.call(null,functionality_16630,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card_16629__$1)], null));
} else
{}
} else
{}
{
var G__16631 = seq__16618;
var G__16632 = chunk__16619;
var G__16633 = count__16620;
var G__16634 = (i__16621 + 1);
seq__16618 = G__16631;
chunk__16619 = G__16632;
count__16620 = G__16633;
i__16621 = G__16634;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16618);if(temp__4126__auto__)
{var seq__16618__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16618__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__16618__$1);{
var G__16635 = cljs.core.chunk_rest.call(null,seq__16618__$1);
var G__16636 = c__8628__auto__;
var G__16637 = cljs.core.count.call(null,c__8628__auto__);
var G__16638 = 0;
seq__16618 = G__16635;
chunk__16619 = G__16636;
count__16620 = G__16637;
i__16621 = G__16638;
continue;
}
} else
{var vec__16625 = cljs.core.first.call(null,seq__16618__$1);var card = cljs.core.nth.call(null,vec__16625,0,null);var node = cljs.core.nth.call(null,vec__16625,1,null);var temp__4126__auto___16639__$1 = cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",1108335317),devcards.system.unique_card_id__GT_path.call(null,node.id)));if(cljs.core.truth_(temp__4126__auto___16639__$1))
{var card_16640__$1 = temp__4126__auto___16639__$1;var functionality_16641 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card_16640__$1).call(null);if(cljs.core.truth_((function (){var and__7868__auto__ = (function (){var G__16627 = functionality_16641;if(G__16627)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16627.devcards$system$IUnMount$;
}
})()))
{return true;
} else
{if((!G__16627.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__16627);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__16627);
}
})();if(and__7868__auto__)
{var or__7880__auto__ = new cljs.core.Keyword(null,"render-cards","render-cards",651634654).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",4064716876).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(card_16640__$1));if(cljs.core.truth_(or__7880__auto____$1))
{return or__7880__auto____$1;
} else
{return new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card_16640__$1);
}
}
} else
{return and__7868__auto__;
}
})()))
{devcards.system.unmount.call(null,functionality_16641,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card_16640__$1)], null));
} else
{}
} else
{}
{
var G__16642 = cljs.core.next.call(null,seq__16618__$1);
var G__16643 = null;
var G__16644 = 0;
var G__16645 = 0;
seq__16618 = G__16642;
chunk__16619 = G__16643;
count__16620 = G__16644;
i__16621 = G__16645;
continue;
}
}
} else
{return null;
}
}
break;
}
});
devcards.system.mount_card_nodes = (function mount_card_nodes(data){var seq__16654 = cljs.core.seq.call(null,devcards.system.visible_card_nodes.call(null,data));var chunk__16655 = null;var count__16656 = 0;var i__16657 = 0;while(true){
if((i__16657 < count__16656))
{var vec__16658 = cljs.core._nth.call(null,chunk__16655,i__16657);var card = cljs.core.nth.call(null,vec__16658,0,null);var node = cljs.core.nth.call(null,vec__16658,1,null);var functionality_16662 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card).call(null);var arg_16663 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{} else
{if((function (){var G__16659 = functionality_16662;if(G__16659)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16659.devcards$system$IMount$;
}
})()))
{return true;
} else
{if((!G__16659.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__16659);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__16659);
}
})())
{devcards.system.mount.call(null,functionality_16662,arg_16663);
} else
{cljs.core.apply.call(null,functionality_16662,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_16663], null));
}
}
{
var G__16664 = seq__16654;
var G__16665 = chunk__16655;
var G__16666 = count__16656;
var G__16667 = (i__16657 + 1);
seq__16654 = G__16664;
chunk__16655 = G__16665;
count__16656 = G__16666;
i__16657 = G__16667;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16654);if(temp__4126__auto__)
{var seq__16654__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16654__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__16654__$1);{
var G__16668 = cljs.core.chunk_rest.call(null,seq__16654__$1);
var G__16669 = c__8628__auto__;
var G__16670 = cljs.core.count.call(null,c__8628__auto__);
var G__16671 = 0;
seq__16654 = G__16668;
chunk__16655 = G__16669;
count__16656 = G__16670;
i__16657 = G__16671;
continue;
}
} else
{var vec__16660 = cljs.core.first.call(null,seq__16654__$1);var card = cljs.core.nth.call(null,vec__16660,0,null);var node = cljs.core.nth.call(null,vec__16660,1,null);var functionality_16672 = new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(card).call(null);var arg_16673 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"data-atom","data-atom",603797766),new cljs.core.Keyword(null,"data-atom","data-atom",603797766).cljs$core$IFn$_invoke$arity$1(card)], null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{} else
{if((function (){var G__16661 = functionality_16672;if(G__16661)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__16661.devcards$system$IMount$;
}
})()))
{return true;
} else
{if((!G__16661.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__16661);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__16661);
}
})())
{devcards.system.mount.call(null,functionality_16672,arg_16673);
} else
{cljs.core.apply.call(null,functionality_16672,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_16673], null));
}
}
{
var G__16674 = cljs.core.next.call(null,seq__16654__$1);
var G__16675 = null;
var G__16676 = 0;
var G__16677 = 0;
seq__16654 = G__16674;
chunk__16655 = G__16675;
count__16656 = G__16676;
i__16657 = G__16677;
continue;
}
}
} else
{return null;
}
}
break;
}
});
devcards.system.remove_node = (function remove_node(node){if(cljs.core.truth_(node))
{return node.parentNode.removeChild(node);
} else
{return null;
}
});
devcards.system.remove_card = (function remove_card(card){var temp__4126__auto__ = document.getElementById(devcards.system.unique_card_id.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(card)));if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return devcards.system.remove_node.call(null,node.parentNode);
} else
{return null;
}
});
devcards.system.delete_deleted_card_nodes = (function delete_deleted_card_nodes(data){var seq__16684 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1307322721).cljs$core$IFn$_invoke$arity$1(data));var chunk__16685 = null;var count__16686 = 0;var i__16687 = 0;while(true){
if((i__16687 < count__16686))
{var vec__16688 = cljs.core._nth.call(null,chunk__16685,i__16687);var card = cljs.core.nth.call(null,vec__16688,0,null);var node = cljs.core.nth.call(null,vec__16688,1,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{devcards.system.remove_card.call(null,card);
} else
{}
{
var G__16690 = seq__16684;
var G__16691 = chunk__16685;
var G__16692 = count__16686;
var G__16693 = (i__16687 + 1);
seq__16684 = G__16690;
chunk__16685 = G__16691;
count__16686 = G__16692;
i__16687 = G__16693;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__16684);if(temp__4126__auto__)
{var seq__16684__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16684__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__16684__$1);{
var G__16694 = cljs.core.chunk_rest.call(null,seq__16684__$1);
var G__16695 = c__8628__auto__;
var G__16696 = cljs.core.count.call(null,c__8628__auto__);
var G__16697 = 0;
seq__16684 = G__16694;
chunk__16685 = G__16695;
count__16686 = G__16696;
i__16687 = G__16697;
continue;
}
} else
{var vec__16689 = cljs.core.first.call(null,seq__16684__$1);var card = cljs.core.nth.call(null,vec__16689,0,null);var node = cljs.core.nth.call(null,vec__16689,1,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",4140359012).cljs$core$IFn$_invoke$arity$1(card)))
{devcards.system.remove_card.call(null,card);
} else
{}
{
var G__16698 = cljs.core.next.call(null,seq__16684__$1);
var G__16699 = null;
var G__16700 = 0;
var G__16701 = 0;
seq__16684 = G__16698;
chunk__16685 = G__16699;
count__16686 = G__16700;
i__16687 = G__16701;
continue;
}
}
} else
{return null;
}
}
break;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function render_base_if_necessary_BANG_(){var temp__4124__auto__ = devcards.system.devcards_app_node.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var devcards_node = temp__4124__auto__;if(cljs.core.truth_(devcards.system.devcards_controls_node.call(null)))
{} else
{devcards_node.appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.devcards_controls_element_id], null)], null)));
}
if(cljs.core.truth_(devcards.system.devcards_cards_node.call(null)))
{return null;
} else
{return devcards_node.appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),devcards.system.devcards_cards_element_id], null)], null)));
}
} else
{throw (new Error([cljs.core.str("The devcards interface needs an element with an id of \""),cljs.core.str(devcards.system.devcards_app_element_id),cljs.core.str("\"")].join('')));
}
});
devcards.system.devcard_renderer = (function devcard_renderer(p__16702){var map__16704 = p__16702;var map__16704__$1 = ((cljs.core.seq_QMARK_.call(null,map__16704))?cljs.core.apply.call(null,cljs.core.hash_map,map__16704):map__16704);var event_chan = cljs.core.get.call(null,map__16704__$1,new cljs.core.Keyword(null,"event-chan","event-chan",1951581719));var state = cljs.core.get.call(null,map__16704__$1,new cljs.core.Keyword(null,"state","state",1123661827));devcards.system.unmount_card_nodes.call(null,state);
devcards.system.delete_deleted_card_nodes.call(null,state);
jayq.core.$.call(null,devcards.system.devcards_controls_node.call(null)).html(crate.core.html.call(null,devcards.system.main_template.call(null,state)));
devcards.system.create_needed_card_nodes.call(null,state);
devcards.system.toggle_background_to_white.call(null,state);
devcards.system.compile_failure.call(null,state);
devcards.system.code_loaded.call(null,state,event_chan);
return devcards.system.mount_card_nodes.call(null,state);
});
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-path","current-path",2436513643),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",1761709211),0,new cljs.core.Keyword(null,"cards","cards",1108335317),cljs.core.PersistentArrayMap.EMPTY], null);
devcards.system.devcard_comp = frontier.core.compose.call(null,(new devcards.system.DevCards()),(new devcards.system.CurrentPathSessionStorage()));
devcards.system.data_to_message = (function data_to_message(msg_name,event_chan){return (function (e){var t = e.currentTarget;var temp__4126__auto__ = jayq.core.$.call(null,t).data();if(cljs.core.truth_(temp__4126__auto__))
{var data = temp__4126__auto__;return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_name,cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
} else
{return null;
}
});
});
devcards.system.register_listeners = (function register_listeners(event_chan){jayq.core.$.call(null,devcards.system.devcards_app_node.call(null)).on("click","a.devcards-add-to-current-path",devcards.system.data_to_message.call(null,new cljs.core.Keyword(null,"add-to-current-path","add-to-current-path",4368567377),event_chan));
return jayq.core.$.call(null,devcards.system.devcards_app_node.call(null)).on("click",".devcards-set-current-path",devcards.system.data_to_message.call(null,new cljs.core.Keyword(null,"set-current-path","set-current-path",2665043702),event_chan));
});
devcards.system.devcard_system_start = (function devcard_system_start(event_chan,render_callback){return frontier.core.runner_start.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,frontier.core.make_runnable.call(null,devcards.system.devcard_comp,devcards.system.devcard_initial_data),new cljs.core.Keyword(null,"state-callback","state-callback",2401068403),render_callback),new cljs.core.Keyword(null,"event-chan","event-chan",1951581719),event_chan));
});
devcards.system.throttle_chan = (function throttle_chan(in$,ms){var out = cljs.core.async.chan.call(null);var c__9731__auto___16799 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___16799,out){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___16799,out){
return (function (state_16778){var state_val_16779 = (state_16778[1]);if((state_val_16779 === 7))
{var inst_16755 = (state_16778[7]);var inst_16762 = (state_16778[2]);var inst_16763 = cljs.core.nth.call(null,inst_16762,0,null);var inst_16764 = cljs.core.nth.call(null,inst_16762,1,null);var inst_16765 = cljs.core._EQ_.call(null,inst_16764,inst_16755);var state_16778__$1 = (function (){var statearr_16780 = state_16778;(statearr_16780[8] = inst_16763);
return statearr_16780;
})();if(inst_16765)
{var statearr_16781_16800 = state_16778__$1;(statearr_16781_16800[1] = 8);
} else
{var statearr_16782_16801 = state_16778__$1;(statearr_16782_16801[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 1))
{var state_16778__$1 = state_16778;var statearr_16783_16802 = state_16778__$1;(statearr_16783_16802[2] = null);
(statearr_16783_16802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 4))
{var inst_16754 = (state_16778[2]);var inst_16755 = cljs.core.async.timeout.call(null,ms);var inst_16756 = inst_16754;var state_16778__$1 = (function (){var statearr_16784 = state_16778;(statearr_16784[9] = inst_16756);
(statearr_16784[7] = inst_16755);
return statearr_16784;
})();var statearr_16785_16803 = state_16778__$1;(statearr_16785_16803[2] = null);
(statearr_16785_16803[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 6))
{var inst_16772 = (state_16778[2]);var inst_16773 = cljs.core.async.put_BANG_.call(null,out,inst_16772);var state_16778__$1 = (function (){var statearr_16786 = state_16778;(statearr_16786[10] = inst_16773);
return statearr_16786;
})();var statearr_16787_16804 = state_16778__$1;(statearr_16787_16804[2] = null);
(statearr_16787_16804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 3))
{var inst_16776 = (state_16778[2]);var state_16778__$1 = state_16778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16778__$1,inst_16776);
} else
{if((state_val_16779 === 2))
{var state_16778__$1 = state_16778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16778__$1,4,in$);
} else
{if((state_val_16779 === 9))
{var inst_16763 = (state_16778[8]);var inst_16756 = inst_16763;var state_16778__$1 = (function (){var statearr_16788 = state_16778;(statearr_16788[9] = inst_16756);
return statearr_16788;
})();var statearr_16789_16805 = state_16778__$1;(statearr_16789_16805[2] = null);
(statearr_16789_16805[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 5))
{var inst_16755 = (state_16778[7]);var inst_16759 = [in$,inst_16755];var inst_16760 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16759,null));var state_16778__$1 = state_16778;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16778__$1,7,inst_16760);
} else
{if((state_val_16779 === 10))
{var inst_16770 = (state_16778[2]);var state_16778__$1 = state_16778;var statearr_16790_16806 = state_16778__$1;(statearr_16790_16806[2] = inst_16770);
(statearr_16790_16806[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 8))
{var inst_16756 = (state_16778[9]);var state_16778__$1 = state_16778;var statearr_16791_16807 = state_16778__$1;(statearr_16791_16807[2] = inst_16756);
(statearr_16791_16807[1] = 10);
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
}
}
}
});})(c__9731__auto___16799,out))
;return ((function (switch__9716__auto__,c__9731__auto___16799,out){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_16795 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16795[0] = state_machine__9717__auto__);
(statearr_16795[1] = 1);
return statearr_16795;
});
var state_machine__9717__auto____1 = (function (state_16778){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_16778);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e16796){if((e16796 instanceof Object))
{var ex__9720__auto__ = e16796;var statearr_16797_16808 = state_16778;(statearr_16797_16808[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16809 = state_16778;
state_16778 = G__16809;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_16778){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_16778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___16799,out))
})();var state__9733__auto__ = (function (){var statearr_16798 = f__9732__auto__.call(null);(statearr_16798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___16799);
return statearr_16798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___16799,out))
);
return out;
});
devcards.system.throttle_function = (function throttle_function(f,ms){var q = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var tq = devcards.system.throttle_chan.call(null,q,ms);var c__9731__auto___16868 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___16868,q,tq){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___16868,q,tq){
return (function (state_16851){var state_val_16852 = (state_16851[1]);if((state_val_16852 === 7))
{var inst_16847 = (state_16851[2]);var state_16851__$1 = state_16851;var statearr_16853_16869 = state_16851__$1;(statearr_16853_16869[2] = inst_16847);
(statearr_16853_16869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16852 === 6))
{var state_16851__$1 = state_16851;var statearr_16854_16870 = state_16851__$1;(statearr_16854_16870[2] = null);
(statearr_16854_16870[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16852 === 5))
{var inst_16841 = (state_16851[7]);var inst_16843 = f.call(null,inst_16841);var state_16851__$1 = (function (){var statearr_16855 = state_16851;(statearr_16855[8] = inst_16843);
return statearr_16855;
})();var statearr_16856_16871 = state_16851__$1;(statearr_16856_16871[2] = null);
(statearr_16856_16871[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16852 === 4))
{var inst_16841 = (state_16851[7]);var inst_16841__$1 = (state_16851[2]);var state_16851__$1 = (function (){var statearr_16857 = state_16851;(statearr_16857[7] = inst_16841__$1);
return statearr_16857;
})();if(cljs.core.truth_(inst_16841__$1))
{var statearr_16858_16872 = state_16851__$1;(statearr_16858_16872[1] = 5);
} else
{var statearr_16859_16873 = state_16851__$1;(statearr_16859_16873[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16852 === 3))
{var inst_16849 = (state_16851[2]);var state_16851__$1 = state_16851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16851__$1,inst_16849);
} else
{if((state_val_16852 === 2))
{var state_16851__$1 = state_16851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16851__$1,4,tq);
} else
{if((state_val_16852 === 1))
{var state_16851__$1 = state_16851;var statearr_16860_16874 = state_16851__$1;(statearr_16860_16874[2] = null);
(statearr_16860_16874[1] = 2);
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
});})(c__9731__auto___16868,q,tq))
;return ((function (switch__9716__auto__,c__9731__auto___16868,q,tq){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_16864 = [null,null,null,null,null,null,null,null,null];(statearr_16864[0] = state_machine__9717__auto__);
(statearr_16864[1] = 1);
return statearr_16864;
});
var state_machine__9717__auto____1 = (function (state_16851){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_16851);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e16865){if((e16865 instanceof Object))
{var ex__9720__auto__ = e16865;var statearr_16866_16875 = state_16851;(statearr_16866_16875[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16851);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16876 = state_16851;
state_16851 = G__16876;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_16851){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_16851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___16868,q,tq))
})();var state__9733__auto__ = (function (){var statearr_16867 = f__9732__auto__.call(null);(statearr_16867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___16868);
return statearr_16867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___16868,q,tq))
);
return ((function (q,tq){
return (function (x){return cljs.core.async.put_BANG_.call(null,q,x);
});
;})(q,tq))
});

//# sourceMappingURL=system.js.map