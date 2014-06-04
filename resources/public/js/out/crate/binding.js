// Compiled by ClojureScript 0.0-2202
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__17089 = cljs.core.seq.call(null,self__.watches);var chunk__17090 = null;var count__17091 = 0;var i__17092 = 0;while(true){
if((i__17092 < count__17091))
{var vec__17093 = cljs.core._nth.call(null,chunk__17090,i__17092);var key__$1 = cljs.core.nth.call(null,vec__17093,0,null);var f = cljs.core.nth.call(null,vec__17093,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__17095 = seq__17089;
var G__17096 = chunk__17090;
var G__17097 = count__17091;
var G__17098 = (i__17092 + 1);
seq__17089 = G__17095;
chunk__17090 = G__17096;
count__17091 = G__17097;
i__17092 = G__17098;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17089);if(temp__4126__auto__)
{var seq__17089__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17089__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__17089__$1);{
var G__17099 = cljs.core.chunk_rest.call(null,seq__17089__$1);
var G__17100 = c__8628__auto__;
var G__17101 = cljs.core.count.call(null,c__8628__auto__);
var G__17102 = 0;
seq__17089 = G__17099;
chunk__17090 = G__17100;
count__17091 = G__17101;
i__17092 = G__17102;
continue;
}
} else
{var vec__17094 = cljs.core.first.call(null,seq__17089__$1);var key__$1 = cljs.core.nth.call(null,vec__17094,0,null);var f = cljs.core.nth.call(null,vec__17094,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__17103 = cljs.core.next.call(null,seq__17089__$1);
var G__17104 = null;
var G__17105 = 0;
var G__17106 = 0;
seq__17089 = G__17103;
chunk__17090 = G__17104;
count__17091 = G__17105;
i__17092 = G__17106;
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
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__17108 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__17108,0,null);var path__$2 = cljs.core.nth.call(null,vec__17108,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__17108,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
});})(path__$1,vec__17108,atm__$1,path__$2,k,sa))
);
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__17109__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__17109 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__17109__delegate.call(this,sa,f,x,y,z,more);};
G__17109.cljs$lang$maxFixedArity = 5;
G__17109.cljs$lang$applyTo = (function (arglist__17110){
var sa = cljs.core.first(arglist__17110);
arglist__17110 = cljs.core.next(arglist__17110);
var f = cljs.core.first(arglist__17110);
arglist__17110 = cljs.core.next(arglist__17110);
var x = cljs.core.first(arglist__17110);
arglist__17110 = cljs.core.next(arglist__17110);
var y = cljs.core.first(arglist__17110);
arglist__17110 = cljs.core.next(arglist__17110);
var z = cljs.core.first(arglist__17110);
var more = cljs.core.rest(arglist__17110);
return G__17109__delegate(sa,f,x,y,z,more);
});
G__17109.cljs$core$IFn$_invoke$arity$variadic = G__17109__delegate;
return G__17109;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj17112 = {};return obj17112;
})();
crate.binding._compute = (function _compute(this$){if((function (){var and__7868__auto__ = this$;if(and__7868__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__7868__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__8507__auto__ = (((this$ == null))?null:this$);return (function (){var or__7880__auto__ = (crate.binding._compute[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (crate.binding._compute["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__17113 = cljs.core.seq.call(null,self__.watches);var chunk__17114 = null;var count__17115 = 0;var i__17116 = 0;while(true){
if((i__17116 < count__17115))
{var vec__17117 = cljs.core._nth.call(null,chunk__17114,i__17116);var key__$1 = cljs.core.nth.call(null,vec__17117,0,null);var f = cljs.core.nth.call(null,vec__17117,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__17119 = seq__17113;
var G__17120 = chunk__17114;
var G__17121 = count__17115;
var G__17122 = (i__17116 + 1);
seq__17113 = G__17119;
chunk__17114 = G__17120;
count__17115 = G__17121;
i__17116 = G__17122;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17113);if(temp__4126__auto__)
{var seq__17113__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17113__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__17113__$1);{
var G__17123 = cljs.core.chunk_rest.call(null,seq__17113__$1);
var G__17124 = c__8628__auto__;
var G__17125 = cljs.core.count.call(null,c__8628__auto__);
var G__17126 = 0;
seq__17113 = G__17123;
chunk__17114 = G__17124;
count__17115 = G__17125;
i__17116 = G__17126;
continue;
}
} else
{var vec__17118 = cljs.core.first.call(null,seq__17113__$1);var key__$1 = cljs.core.nth.call(null,vec__17118,0,null);var f = cljs.core.nth.call(null,vec__17118,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__17127 = cljs.core.next.call(null,seq__17113__$1);
var G__17128 = null;
var G__17129 = 0;
var G__17130 = 0;
seq__17113 = G__17127;
chunk__17114 = G__17128;
count__17115 = G__17129;
i__17116 = G__17130;
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
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){return (new crate.binding.Computed(atms,value,func,watches,key));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(atms,null,func,null,k));crate.binding._compute.call(null,neue);
var seq__17135_17139 = cljs.core.seq.call(null,atms);var chunk__17136_17140 = null;var count__17137_17141 = 0;var i__17138_17142 = 0;while(true){
if((i__17138_17142 < count__17137_17141))
{var atm_17143 = cljs.core._nth.call(null,chunk__17136_17140,i__17138_17142);cljs.core.add_watch.call(null,atm_17143,k,((function (seq__17135_17139,chunk__17136_17140,count__17137_17141,i__17138_17142,atm_17143,k,neue){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__17135_17139,chunk__17136_17140,count__17137_17141,i__17138_17142,atm_17143,k,neue))
);
{
var G__17144 = seq__17135_17139;
var G__17145 = chunk__17136_17140;
var G__17146 = count__17137_17141;
var G__17147 = (i__17138_17142 + 1);
seq__17135_17139 = G__17144;
chunk__17136_17140 = G__17145;
count__17137_17141 = G__17146;
i__17138_17142 = G__17147;
continue;
}
} else
{var temp__4126__auto___17148 = cljs.core.seq.call(null,seq__17135_17139);if(temp__4126__auto___17148)
{var seq__17135_17149__$1 = temp__4126__auto___17148;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17135_17149__$1))
{var c__8628__auto___17150 = cljs.core.chunk_first.call(null,seq__17135_17149__$1);{
var G__17151 = cljs.core.chunk_rest.call(null,seq__17135_17149__$1);
var G__17152 = c__8628__auto___17150;
var G__17153 = cljs.core.count.call(null,c__8628__auto___17150);
var G__17154 = 0;
seq__17135_17139 = G__17151;
chunk__17136_17140 = G__17152;
count__17137_17141 = G__17153;
i__17138_17142 = G__17154;
continue;
}
} else
{var atm_17155 = cljs.core.first.call(null,seq__17135_17149__$1);cljs.core.add_watch.call(null,atm_17155,k,((function (seq__17135_17139,chunk__17136_17140,count__17137_17141,i__17138_17142,atm_17155,seq__17135_17149__$1,temp__4126__auto___17148,k,neue){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__17135_17139,chunk__17136_17140,count__17137_17141,i__17138_17142,atm_17155,seq__17135_17149__$1,temp__4126__auto___17148,k,neue))
);
{
var G__17156 = cljs.core.next.call(null,seq__17135_17149__$1);
var G__17157 = null;
var G__17158 = 0;
var G__17159 = 0;
seq__17135_17139 = G__17156;
chunk__17136_17140 = G__17157;
count__17137_17141 = G__17158;
i__17138_17142 = G__17159;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){return cljs.core.filter.call(null,(function (p1__17160_SHARP_){return (p1__17160_SHARP_ > 100);
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,1340);
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj17162 = {};return obj17162;
})();
crate.binding.bindable = (function (){var obj17164 = {};return obj17164;
})();
crate.binding._value = (function _value(this$){if((function (){var and__7868__auto__ = this$;if(and__7868__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__7868__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__8507__auto__ = (((this$ == null))?null:this$);return (function (){var or__7880__auto__ = (crate.binding._value[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (crate.binding._value["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__7868__auto__ = this$;if(and__7868__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__7868__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__8507__auto__ = (((this$ == null))?null:this$);return (function (){var or__7880__auto__ = (crate.binding._on_change[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (crate.binding._on_change["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__17165 = cljs.core.seq.call(null,self__.watches);var chunk__17166 = null;var count__17167 = 0;var i__17168 = 0;while(true){
if((i__17168 < count__17167))
{var vec__17169 = cljs.core._nth.call(null,chunk__17166,i__17168);var key = cljs.core.nth.call(null,vec__17169,0,null);var f = cljs.core.nth.call(null,vec__17169,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__17171 = seq__17165;
var G__17172 = chunk__17166;
var G__17173 = count__17167;
var G__17174 = (i__17168 + 1);
seq__17165 = G__17171;
chunk__17166 = G__17172;
count__17167 = G__17173;
i__17168 = G__17174;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17165);if(temp__4126__auto__)
{var seq__17165__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17165__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__17165__$1);{
var G__17175 = cljs.core.chunk_rest.call(null,seq__17165__$1);
var G__17176 = c__8628__auto__;
var G__17177 = cljs.core.count.call(null,c__8628__auto__);
var G__17178 = 0;
seq__17165 = G__17175;
chunk__17166 = G__17176;
count__17167 = G__17177;
i__17168 = G__17178;
continue;
}
} else
{var vec__17170 = cljs.core.first.call(null,seq__17165__$1);var key = cljs.core.nth.call(null,vec__17170,0,null);var f = cljs.core.nth.call(null,vec__17170,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__17179 = cljs.core.next.call(null,seq__17165__$1);
var G__17180 = null;
var G__17181 = 0;
var G__17182 = 0;
seq__17165 = G__17179;
chunk__17166 = G__17180;
count__17167 = G__17181;
i__17168 = G__17182;
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
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__17183){var vec__17184 = p__17183;var event = cljs.core.nth.call(null,vec__17184,0,null);var el = cljs.core.nth.call(null,vec__17184,1,null);var v = cljs.core.nth.call(null,vec__17184,2,null);return func.call(null,event,el,v);
});})(this$__$1))
);
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__7880__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__17185){
var bc = cljs.core.first(arglist__17185);
var segs = cljs.core.rest(arglist__17185);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__17194_17202 = cljs.core.seq.call(null,added);var chunk__17195_17203 = null;var count__17196_17204 = 0;var i__17197_17205 = 0;while(true){
if((i__17197_17205 < count__17196_17204))
{var a_17206 = cljs.core._nth.call(null,chunk__17195_17203,i__17197_17205);crate.binding.bc_add.call(null,bc,a_17206,a_17206);
{
var G__17207 = seq__17194_17202;
var G__17208 = chunk__17195_17203;
var G__17209 = count__17196_17204;
var G__17210 = (i__17197_17205 + 1);
seq__17194_17202 = G__17207;
chunk__17195_17203 = G__17208;
count__17196_17204 = G__17209;
i__17197_17205 = G__17210;
continue;
}
} else
{var temp__4126__auto___17211 = cljs.core.seq.call(null,seq__17194_17202);if(temp__4126__auto___17211)
{var seq__17194_17212__$1 = temp__4126__auto___17211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17194_17212__$1))
{var c__8628__auto___17213 = cljs.core.chunk_first.call(null,seq__17194_17212__$1);{
var G__17214 = cljs.core.chunk_rest.call(null,seq__17194_17212__$1);
var G__17215 = c__8628__auto___17213;
var G__17216 = cljs.core.count.call(null,c__8628__auto___17213);
var G__17217 = 0;
seq__17194_17202 = G__17214;
chunk__17195_17203 = G__17215;
count__17196_17204 = G__17216;
i__17197_17205 = G__17217;
continue;
}
} else
{var a_17218 = cljs.core.first.call(null,seq__17194_17212__$1);crate.binding.bc_add.call(null,bc,a_17218,a_17218);
{
var G__17219 = cljs.core.next.call(null,seq__17194_17212__$1);
var G__17220 = null;
var G__17221 = 0;
var G__17222 = 0;
seq__17194_17202 = G__17219;
chunk__17195_17203 = G__17220;
count__17196_17204 = G__17221;
i__17197_17205 = G__17222;
continue;
}
}
} else
{}
}
break;
}
var seq__17198 = cljs.core.seq.call(null,removed);var chunk__17199 = null;var count__17200 = 0;var i__17201 = 0;while(true){
if((i__17201 < count__17200))
{var r = cljs.core._nth.call(null,chunk__17199,i__17201);crate.binding.bc_remove.call(null,bc,r);
{
var G__17223 = seq__17198;
var G__17224 = chunk__17199;
var G__17225 = count__17200;
var G__17226 = (i__17201 + 1);
seq__17198 = G__17223;
chunk__17199 = G__17224;
count__17200 = G__17225;
i__17201 = G__17226;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17198);if(temp__4126__auto__)
{var seq__17198__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17198__$1))
{var c__8628__auto__ = cljs.core.chunk_first.call(null,seq__17198__$1);{
var G__17227 = cljs.core.chunk_rest.call(null,seq__17198__$1);
var G__17228 = c__8628__auto__;
var G__17229 = cljs.core.count.call(null,c__8628__auto__);
var G__17230 = 0;
seq__17198 = G__17227;
chunk__17199 = G__17228;
count__17200 = G__17229;
i__17201 = G__17230;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__17198__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__17231 = cljs.core.next.call(null,seq__17198__$1);
var G__17232 = null;
var G__17233 = 0;
var G__17234 = 0;
seq__17198 = G__17231;
chunk__17199 = G__17232;
count__17200 = G__17233;
i__17201 = G__17234;
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
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__17235){var vec__17238 = p__17235;var path = cljs.core.nth.call(null,vec__17238,0,null);var opts = cljs.core.nth.call(null,vec__17238,1,null);var vec__17239 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__17239,0,null);var opts__$1 = cljs.core.nth.call(null,vec__17239,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__17239,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__17238,path,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__17239,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__17238,path,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__17235 = null;if (arguments.length > 1) {
  p__17235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__17235);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__17240){
var atm = cljs.core.first(arglist__17240);
var p__17235 = cljs.core.rest(arglist__17240);
return bound_coll__delegate(atm,p__17235);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__17241){var vec__17243 = p__17241;var opts = cljs.core.nth.call(null,vec__17243,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__17243,opts){
return (function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__17243,opts))
);
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__17241 = null;if (arguments.length > 2) {
  p__17241 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__17241);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__17244){
var as = cljs.core.first(arglist__17244);
arglist__17244 = cljs.core.next(arglist__17244);
var atm = cljs.core.first(arglist__17244);
var p__17241 = cljs.core.rest(arglist__17244);
return map_bound__delegate(as,atm,p__17241);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__17246 = b;if(G__17246)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__17246.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__17246.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__17246);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__17246);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__17248 = b;if(G__17248)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__17248.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__17248.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__17248);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__17248);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__17250 = atm;if(G__17250)
{var bit__8530__auto__ = (G__17250.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__8530__auto__) || (G__17250.cljs$core$IDeref$))
{return true;
} else
{if((!G__17250.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__17250);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__17250);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__17251){var vec__17253 = p__17251;var func = cljs.core.nth.call(null,vec__17253,0,null);var func__$1 = (function (){var or__7880__auto__ = func;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__17251 = null;if (arguments.length > 1) {
  p__17251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__17251);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__17254){
var atm = cljs.core.first(arglist__17254);
var p__17251 = cljs.core.rest(arglist__17254);
return bound__delegate(atm,p__17251);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;

//# sourceMappingURL=binding.js.map