// Compiled by ClojureScript 0.0-2234
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19008 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19008 = (function (f,fn_handler,meta19009){
this.f = f;
this.fn_handler = fn_handler;
this.meta19009 = meta19009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19008.cljs$lang$type = true;
cljs.core.async.t19008.cljs$lang$ctorStr = "cljs.core.async/t19008";
cljs.core.async.t19008.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"cljs.core.async/t19008");
});
cljs.core.async.t19008.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19010){var self__ = this;
var _19010__$1 = this;return self__.meta19009;
});
cljs.core.async.t19008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19010,meta19009__$1){var self__ = this;
var _19010__$1 = this;return (new cljs.core.async.t19008(self__.f,self__.fn_handler,meta19009__$1));
});
cljs.core.async.__GT_t19008 = (function __GT_t19008(f__$1,fn_handler__$1,meta19009){return (new cljs.core.async.t19008(f__$1,fn_handler__$1,meta19009));
});
}
return (new cljs.core.async.t19008(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19012 = buff;if(G__19012)
{var bit__9306__auto__ = null;if(cljs.core.truth_((function (){var or__8656__auto__ = bit__9306__auto__;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return G__19012.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19012.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19012);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19012);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_19013 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19013);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_19013,ret){
return (function (){return fn1.call(null,val_19013);
});})(val_19013,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9512__auto___19014 = n;var x_19015 = 0;while(true){
if((x_19015 < n__9512__auto___19014))
{(a[x_19015] = 0);
{
var G__19016 = (x_19015 + 1);
x_19015 = G__19016;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__19017 = (i + 1);
i = G__19017;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19021 = (function (flag,alt_flag,meta19022){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19022 = meta19022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19021.cljs$lang$type = true;
cljs.core.async.t19021.cljs$lang$ctorStr = "cljs.core.async/t19021";
cljs.core.async.t19021.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"cljs.core.async/t19021");
});})(flag))
;
cljs.core.async.t19021.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t19021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t19021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19023){var self__ = this;
var _19023__$1 = this;return self__.meta19022;
});})(flag))
;
cljs.core.async.t19021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19023,meta19022__$1){var self__ = this;
var _19023__$1 = this;return (new cljs.core.async.t19021(self__.flag,self__.alt_flag,meta19022__$1));
});})(flag))
;
cljs.core.async.__GT_t19021 = ((function (flag){
return (function __GT_t19021(flag__$1,alt_flag__$1,meta19022){return (new cljs.core.async.t19021(flag__$1,alt_flag__$1,meta19022));
});})(flag))
;
}
return (new cljs.core.async.t19021(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19027 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19027 = (function (cb,flag,alt_handler,meta19028){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19028 = meta19028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19027.cljs$lang$type = true;
cljs.core.async.t19027.cljs$lang$ctorStr = "cljs.core.async/t19027";
cljs.core.async.t19027.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"cljs.core.async/t19027");
});
cljs.core.async.t19027.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19029){var self__ = this;
var _19029__$1 = this;return self__.meta19028;
});
cljs.core.async.t19027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19029,meta19028__$1){var self__ = this;
var _19029__$1 = this;return (new cljs.core.async.t19027(self__.cb,self__.flag,self__.alt_handler,meta19028__$1));
});
cljs.core.async.__GT_t19027 = (function __GT_t19027(cb__$1,flag__$1,alt_handler__$1,meta19028){return (new cljs.core.async.t19027(cb__$1,flag__$1,alt_handler__$1,meta19028));
});
}
return (new cljs.core.async.t19027(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19030_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19030_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19031_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19031_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8656__auto__ = wport;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__19032 = (i + 1);
i = G__19032;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8656__auto__ = ret;if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__8644__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8644__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8644__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__19033){var map__19035 = p__19033;var map__19035__$1 = ((cljs.core.seq_QMARK_.call(null,map__19035))?cljs.core.apply.call(null,cljs.core.hash_map,map__19035):map__19035);var opts = map__19035__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__19033 = null;if (arguments.length > 1) {
  p__19033 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19033);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19036){
var ports = cljs.core.first(arglist__19036);
var p__19033 = cljs.core.rest(arglist__19036);
return alts_BANG___delegate(ports,p__19033);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19044 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19044 = (function (ch,f,map_LT_,meta19045){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19045 = meta19045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19044.cljs$lang$type = true;
cljs.core.async.t19044.cljs$lang$ctorStr = "cljs.core.async/t19044";
cljs.core.async.t19044.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"cljs.core.async/t19044");
});
cljs.core.async.t19044.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19044.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t19044.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19047 = (function (fn1,_,meta19045,ch,f,map_LT_,meta19048){
this.fn1 = fn1;
this._ = _;
this.meta19045 = meta19045;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19048 = meta19048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19047.cljs$lang$type = true;
cljs.core.async.t19047.cljs$lang$ctorStr = "cljs.core.async/t19047";
cljs.core.async.t19047.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"cljs.core.async/t19047");
});})(___$1))
;
cljs.core.async.t19047.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19047.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__19037_SHARP_){return f1.call(null,(((p1__19037_SHARP_ == null))?null:self__.f.call(null,p1__19037_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t19047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19049){var self__ = this;
var _19049__$1 = this;return self__.meta19048;
});})(___$1))
;
cljs.core.async.t19047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19049,meta19048__$1){var self__ = this;
var _19049__$1 = this;return (new cljs.core.async.t19047(self__.fn1,self__._,self__.meta19045,self__.ch,self__.f,self__.map_LT_,meta19048__$1));
});})(___$1))
;
cljs.core.async.__GT_t19047 = ((function (___$1){
return (function __GT_t19047(fn1__$1,___$2,meta19045__$1,ch__$2,f__$2,map_LT___$2,meta19048){return (new cljs.core.async.t19047(fn1__$1,___$2,meta19045__$1,ch__$2,f__$2,map_LT___$2,meta19048));
});})(___$1))
;
}
return (new cljs.core.async.t19047(fn1,___$1,self__.meta19045,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8644__auto__ = ret;if(cljs.core.truth_(and__8644__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8644__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t19044.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19044.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19044.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19046){var self__ = this;
var _19046__$1 = this;return self__.meta19045;
});
cljs.core.async.t19044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19046,meta19045__$1){var self__ = this;
var _19046__$1 = this;return (new cljs.core.async.t19044(self__.ch,self__.f,self__.map_LT_,meta19045__$1));
});
cljs.core.async.__GT_t19044 = (function __GT_t19044(ch__$1,f__$1,map_LT___$1,meta19045){return (new cljs.core.async.t19044(ch__$1,f__$1,map_LT___$1,meta19045));
});
}
return (new cljs.core.async.t19044(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19053 = (function (ch,f,map_GT_,meta19054){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19054 = meta19054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19053.cljs$lang$type = true;
cljs.core.async.t19053.cljs$lang$ctorStr = "cljs.core.async/t19053";
cljs.core.async.t19053.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"cljs.core.async/t19053");
});
cljs.core.async.t19053.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19053.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t19053.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19053.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19053.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19053.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19055){var self__ = this;
var _19055__$1 = this;return self__.meta19054;
});
cljs.core.async.t19053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19055,meta19054__$1){var self__ = this;
var _19055__$1 = this;return (new cljs.core.async.t19053(self__.ch,self__.f,self__.map_GT_,meta19054__$1));
});
cljs.core.async.__GT_t19053 = (function __GT_t19053(ch__$1,f__$1,map_GT___$1,meta19054){return (new cljs.core.async.t19053(ch__$1,f__$1,map_GT___$1,meta19054));
});
}
return (new cljs.core.async.t19053(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19059 = (function (ch,p,filter_GT_,meta19060){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19060 = meta19060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19059.cljs$lang$type = true;
cljs.core.async.t19059.cljs$lang$ctorStr = "cljs.core.async/t19059";
cljs.core.async.t19059.cljs$lang$ctorPrWriter = (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"cljs.core.async/t19059");
});
cljs.core.async.t19059.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t19059.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19059.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19059.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19061){var self__ = this;
var _19061__$1 = this;return self__.meta19060;
});
cljs.core.async.t19059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19061,meta19060__$1){var self__ = this;
var _19061__$1 = this;return (new cljs.core.async.t19059(self__.ch,self__.p,self__.filter_GT_,meta19060__$1));
});
cljs.core.async.__GT_t19059 = (function __GT_t19059(ch__$1,p__$1,filter_GT___$1,meta19060){return (new cljs.core.async.t19059(ch__$1,p__$1,filter_GT___$1,meta19060));
});
}
return (new cljs.core.async.t19059(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14088__auto___19144 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___19144,out){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___19144,out){
return (function (state_19123){var state_val_19124 = (state_19123[1]);if((state_val_19124 === 7))
{var inst_19119 = (state_19123[2]);var state_19123__$1 = state_19123;var statearr_19125_19145 = state_19123__$1;(statearr_19125_19145[2] = inst_19119);
(statearr_19125_19145[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19124 === 1))
{var state_19123__$1 = state_19123;var statearr_19126_19146 = state_19123__$1;(statearr_19126_19146[2] = null);
(statearr_19126_19146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19124 === 4))
{var inst_19105 = (state_19123[7]);var inst_19105__$1 = (state_19123[2]);var inst_19106 = (inst_19105__$1 == null);var state_19123__$1 = (function (){var statearr_19127 = state_19123;(statearr_19127[7] = inst_19105__$1);
return statearr_19127;
})();if(cljs.core.truth_(inst_19106))
{var statearr_19128_19147 = state_19123__$1;(statearr_19128_19147[1] = 5);
} else
{var statearr_19129_19148 = state_19123__$1;(statearr_19129_19148[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19124 === 6))
{var inst_19105 = (state_19123[7]);var inst_19110 = p.call(null,inst_19105);var state_19123__$1 = state_19123;if(cljs.core.truth_(inst_19110))
{var statearr_19130_19149 = state_19123__$1;(statearr_19130_19149[1] = 8);
} else
{var statearr_19131_19150 = state_19123__$1;(statearr_19131_19150[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19124 === 3))
{var inst_19121 = (state_19123[2]);var state_19123__$1 = state_19123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19123__$1,inst_19121);
} else
{if((state_val_19124 === 2))
{var state_19123__$1 = state_19123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19123__$1,4,ch);
} else
{if((state_val_19124 === 11))
{var inst_19113 = (state_19123[2]);var state_19123__$1 = state_19123;var statearr_19132_19151 = state_19123__$1;(statearr_19132_19151[2] = inst_19113);
(statearr_19132_19151[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19124 === 9))
{var state_19123__$1 = state_19123;var statearr_19133_19152 = state_19123__$1;(statearr_19133_19152[2] = null);
(statearr_19133_19152[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19124 === 5))
{var inst_19108 = cljs.core.async.close_BANG_.call(null,out);var state_19123__$1 = state_19123;var statearr_19134_19153 = state_19123__$1;(statearr_19134_19153[2] = inst_19108);
(statearr_19134_19153[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19124 === 10))
{var inst_19116 = (state_19123[2]);var state_19123__$1 = (function (){var statearr_19135 = state_19123;(statearr_19135[8] = inst_19116);
return statearr_19135;
})();var statearr_19136_19154 = state_19123__$1;(statearr_19136_19154[2] = null);
(statearr_19136_19154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19124 === 8))
{var inst_19105 = (state_19123[7]);var state_19123__$1 = state_19123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19123__$1,11,out,inst_19105);
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
}
});})(c__14088__auto___19144,out))
;return ((function (switch__14023__auto__,c__14088__auto___19144,out){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_19140 = [null,null,null,null,null,null,null,null,null];(statearr_19140[0] = state_machine__14024__auto__);
(statearr_19140[1] = 1);
return statearr_19140;
});
var state_machine__14024__auto____1 = (function (state_19123){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_19123);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e19141){if((e19141 instanceof Object))
{var ex__14027__auto__ = e19141;var statearr_19142_19155 = state_19123;(statearr_19142_19155[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19123);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19156 = state_19123;
state_19123 = G__19156;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_19123){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_19123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___19144,out))
})();var state__14090__auto__ = (function (){var statearr_19143 = f__14089__auto__.call(null);(statearr_19143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___19144);
return statearr_19143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___19144,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__14088__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto__){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto__){
return (function (state_19322){var state_val_19323 = (state_19322[1]);if((state_val_19323 === 7))
{var inst_19318 = (state_19322[2]);var state_19322__$1 = state_19322;var statearr_19324_19365 = state_19322__$1;(statearr_19324_19365[2] = inst_19318);
(statearr_19324_19365[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 20))
{var inst_19288 = (state_19322[7]);var inst_19299 = (state_19322[2]);var inst_19300 = cljs.core.next.call(null,inst_19288);var inst_19274 = inst_19300;var inst_19275 = null;var inst_19276 = 0;var inst_19277 = 0;var state_19322__$1 = (function (){var statearr_19325 = state_19322;(statearr_19325[8] = inst_19299);
(statearr_19325[9] = inst_19276);
(statearr_19325[10] = inst_19277);
(statearr_19325[11] = inst_19275);
(statearr_19325[12] = inst_19274);
return statearr_19325;
})();var statearr_19326_19366 = state_19322__$1;(statearr_19326_19366[2] = null);
(statearr_19326_19366[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 1))
{var state_19322__$1 = state_19322;var statearr_19327_19367 = state_19322__$1;(statearr_19327_19367[2] = null);
(statearr_19327_19367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 4))
{var inst_19263 = (state_19322[13]);var inst_19263__$1 = (state_19322[2]);var inst_19264 = (inst_19263__$1 == null);var state_19322__$1 = (function (){var statearr_19328 = state_19322;(statearr_19328[13] = inst_19263__$1);
return statearr_19328;
})();if(cljs.core.truth_(inst_19264))
{var statearr_19329_19368 = state_19322__$1;(statearr_19329_19368[1] = 5);
} else
{var statearr_19330_19369 = state_19322__$1;(statearr_19330_19369[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 15))
{var state_19322__$1 = state_19322;var statearr_19334_19370 = state_19322__$1;(statearr_19334_19370[2] = null);
(statearr_19334_19370[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 21))
{var state_19322__$1 = state_19322;var statearr_19335_19371 = state_19322__$1;(statearr_19335_19371[2] = null);
(statearr_19335_19371[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 13))
{var inst_19276 = (state_19322[9]);var inst_19277 = (state_19322[10]);var inst_19275 = (state_19322[11]);var inst_19274 = (state_19322[12]);var inst_19284 = (state_19322[2]);var inst_19285 = (inst_19277 + 1);var tmp19331 = inst_19276;var tmp19332 = inst_19275;var tmp19333 = inst_19274;var inst_19274__$1 = tmp19333;var inst_19275__$1 = tmp19332;var inst_19276__$1 = tmp19331;var inst_19277__$1 = inst_19285;var state_19322__$1 = (function (){var statearr_19336 = state_19322;(statearr_19336[9] = inst_19276__$1);
(statearr_19336[10] = inst_19277__$1);
(statearr_19336[11] = inst_19275__$1);
(statearr_19336[12] = inst_19274__$1);
(statearr_19336[14] = inst_19284);
return statearr_19336;
})();var statearr_19337_19372 = state_19322__$1;(statearr_19337_19372[2] = null);
(statearr_19337_19372[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 22))
{var state_19322__$1 = state_19322;var statearr_19338_19373 = state_19322__$1;(statearr_19338_19373[2] = null);
(statearr_19338_19373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 6))
{var inst_19263 = (state_19322[13]);var inst_19272 = f.call(null,inst_19263);var inst_19273 = cljs.core.seq.call(null,inst_19272);var inst_19274 = inst_19273;var inst_19275 = null;var inst_19276 = 0;var inst_19277 = 0;var state_19322__$1 = (function (){var statearr_19339 = state_19322;(statearr_19339[9] = inst_19276);
(statearr_19339[10] = inst_19277);
(statearr_19339[11] = inst_19275);
(statearr_19339[12] = inst_19274);
return statearr_19339;
})();var statearr_19340_19374 = state_19322__$1;(statearr_19340_19374[2] = null);
(statearr_19340_19374[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 17))
{var inst_19288 = (state_19322[7]);var inst_19292 = cljs.core.chunk_first.call(null,inst_19288);var inst_19293 = cljs.core.chunk_rest.call(null,inst_19288);var inst_19294 = cljs.core.count.call(null,inst_19292);var inst_19274 = inst_19293;var inst_19275 = inst_19292;var inst_19276 = inst_19294;var inst_19277 = 0;var state_19322__$1 = (function (){var statearr_19341 = state_19322;(statearr_19341[9] = inst_19276);
(statearr_19341[10] = inst_19277);
(statearr_19341[11] = inst_19275);
(statearr_19341[12] = inst_19274);
return statearr_19341;
})();var statearr_19342_19375 = state_19322__$1;(statearr_19342_19375[2] = null);
(statearr_19342_19375[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 3))
{var inst_19320 = (state_19322[2]);var state_19322__$1 = state_19322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19322__$1,inst_19320);
} else
{if((state_val_19323 === 12))
{var inst_19308 = (state_19322[2]);var state_19322__$1 = state_19322;var statearr_19343_19376 = state_19322__$1;(statearr_19343_19376[2] = inst_19308);
(statearr_19343_19376[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 2))
{var state_19322__$1 = state_19322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19322__$1,4,in$);
} else
{if((state_val_19323 === 23))
{var inst_19316 = (state_19322[2]);var state_19322__$1 = state_19322;var statearr_19344_19377 = state_19322__$1;(statearr_19344_19377[2] = inst_19316);
(statearr_19344_19377[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 19))
{var inst_19303 = (state_19322[2]);var state_19322__$1 = state_19322;var statearr_19345_19378 = state_19322__$1;(statearr_19345_19378[2] = inst_19303);
(statearr_19345_19378[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 11))
{var inst_19274 = (state_19322[12]);var inst_19288 = (state_19322[7]);var inst_19288__$1 = cljs.core.seq.call(null,inst_19274);var state_19322__$1 = (function (){var statearr_19346 = state_19322;(statearr_19346[7] = inst_19288__$1);
return statearr_19346;
})();if(inst_19288__$1)
{var statearr_19347_19379 = state_19322__$1;(statearr_19347_19379[1] = 14);
} else
{var statearr_19348_19380 = state_19322__$1;(statearr_19348_19380[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 9))
{var inst_19310 = (state_19322[2]);var inst_19311 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_19322__$1 = (function (){var statearr_19349 = state_19322;(statearr_19349[15] = inst_19310);
return statearr_19349;
})();if(cljs.core.truth_(inst_19311))
{var statearr_19350_19381 = state_19322__$1;(statearr_19350_19381[1] = 21);
} else
{var statearr_19351_19382 = state_19322__$1;(statearr_19351_19382[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 5))
{var inst_19266 = cljs.core.async.close_BANG_.call(null,out);var state_19322__$1 = state_19322;var statearr_19352_19383 = state_19322__$1;(statearr_19352_19383[2] = inst_19266);
(statearr_19352_19383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 14))
{var inst_19288 = (state_19322[7]);var inst_19290 = cljs.core.chunked_seq_QMARK_.call(null,inst_19288);var state_19322__$1 = state_19322;if(inst_19290)
{var statearr_19353_19384 = state_19322__$1;(statearr_19353_19384[1] = 17);
} else
{var statearr_19354_19385 = state_19322__$1;(statearr_19354_19385[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 16))
{var inst_19306 = (state_19322[2]);var state_19322__$1 = state_19322;var statearr_19355_19386 = state_19322__$1;(statearr_19355_19386[2] = inst_19306);
(statearr_19355_19386[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19323 === 10))
{var inst_19277 = (state_19322[10]);var inst_19275 = (state_19322[11]);var inst_19282 = cljs.core._nth.call(null,inst_19275,inst_19277);var state_19322__$1 = state_19322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19322__$1,13,out,inst_19282);
} else
{if((state_val_19323 === 18))
{var inst_19288 = (state_19322[7]);var inst_19297 = cljs.core.first.call(null,inst_19288);var state_19322__$1 = state_19322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19322__$1,20,out,inst_19297);
} else
{if((state_val_19323 === 8))
{var inst_19276 = (state_19322[9]);var inst_19277 = (state_19322[10]);var inst_19279 = (inst_19277 < inst_19276);var inst_19280 = inst_19279;var state_19322__$1 = state_19322;if(cljs.core.truth_(inst_19280))
{var statearr_19356_19387 = state_19322__$1;(statearr_19356_19387[1] = 10);
} else
{var statearr_19357_19388 = state_19322__$1;(statearr_19357_19388[1] = 11);
}
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
}
}
}
});})(c__14088__auto__))
;return ((function (switch__14023__auto__,c__14088__auto__){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_19361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19361[0] = state_machine__14024__auto__);
(statearr_19361[1] = 1);
return statearr_19361;
});
var state_machine__14024__auto____1 = (function (state_19322){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_19322);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e19362){if((e19362 instanceof Object))
{var ex__14027__auto__ = e19362;var statearr_19363_19389 = state_19322;(statearr_19363_19389[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19390 = state_19322;
state_19322 = G__19390;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_19322){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_19322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto__))
})();var state__14090__auto__ = (function (){var statearr_19364 = f__14089__auto__.call(null);(statearr_19364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);
return statearr_19364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto__))
);
return c__14088__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__14088__auto___19485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___19485){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___19485){
return (function (state_19461){var state_val_19462 = (state_19461[1]);if((state_val_19462 === 7))
{var inst_19457 = (state_19461[2]);var state_19461__$1 = state_19461;var statearr_19463_19486 = state_19461__$1;(statearr_19463_19486[2] = inst_19457);
(statearr_19463_19486[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19462 === 1))
{var state_19461__$1 = state_19461;var statearr_19464_19487 = state_19461__$1;(statearr_19464_19487[2] = null);
(statearr_19464_19487[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19462 === 4))
{var inst_19440 = (state_19461[7]);var inst_19440__$1 = (state_19461[2]);var inst_19441 = (inst_19440__$1 == null);var state_19461__$1 = (function (){var statearr_19465 = state_19461;(statearr_19465[7] = inst_19440__$1);
return statearr_19465;
})();if(cljs.core.truth_(inst_19441))
{var statearr_19466_19488 = state_19461__$1;(statearr_19466_19488[1] = 5);
} else
{var statearr_19467_19489 = state_19461__$1;(statearr_19467_19489[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19462 === 13))
{var state_19461__$1 = state_19461;var statearr_19468_19490 = state_19461__$1;(statearr_19468_19490[2] = null);
(statearr_19468_19490[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19462 === 6))
{var inst_19440 = (state_19461[7]);var state_19461__$1 = state_19461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19461__$1,11,to,inst_19440);
} else
{if((state_val_19462 === 3))
{var inst_19459 = (state_19461[2]);var state_19461__$1 = state_19461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19461__$1,inst_19459);
} else
{if((state_val_19462 === 12))
{var state_19461__$1 = state_19461;var statearr_19469_19491 = state_19461__$1;(statearr_19469_19491[2] = null);
(statearr_19469_19491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19462 === 2))
{var state_19461__$1 = state_19461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19461__$1,4,from);
} else
{if((state_val_19462 === 11))
{var inst_19450 = (state_19461[2]);var state_19461__$1 = state_19461;if(cljs.core.truth_(inst_19450))
{var statearr_19470_19492 = state_19461__$1;(statearr_19470_19492[1] = 12);
} else
{var statearr_19471_19493 = state_19461__$1;(statearr_19471_19493[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19462 === 9))
{var state_19461__$1 = state_19461;var statearr_19472_19494 = state_19461__$1;(statearr_19472_19494[2] = null);
(statearr_19472_19494[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19462 === 5))
{var state_19461__$1 = state_19461;if(cljs.core.truth_(close_QMARK_))
{var statearr_19473_19495 = state_19461__$1;(statearr_19473_19495[1] = 8);
} else
{var statearr_19474_19496 = state_19461__$1;(statearr_19474_19496[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19462 === 14))
{var inst_19455 = (state_19461[2]);var state_19461__$1 = state_19461;var statearr_19475_19497 = state_19461__$1;(statearr_19475_19497[2] = inst_19455);
(statearr_19475_19497[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19462 === 10))
{var inst_19447 = (state_19461[2]);var state_19461__$1 = state_19461;var statearr_19476_19498 = state_19461__$1;(statearr_19476_19498[2] = inst_19447);
(statearr_19476_19498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19462 === 8))
{var inst_19444 = cljs.core.async.close_BANG_.call(null,to);var state_19461__$1 = state_19461;var statearr_19477_19499 = state_19461__$1;(statearr_19477_19499[2] = inst_19444);
(statearr_19477_19499[1] = 10);
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
}
}
}
}
});})(c__14088__auto___19485))
;return ((function (switch__14023__auto__,c__14088__auto___19485){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_19481 = [null,null,null,null,null,null,null,null];(statearr_19481[0] = state_machine__14024__auto__);
(statearr_19481[1] = 1);
return statearr_19481;
});
var state_machine__14024__auto____1 = (function (state_19461){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_19461);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e19482){if((e19482 instanceof Object))
{var ex__14027__auto__ = e19482;var statearr_19483_19500 = state_19461;(statearr_19483_19500[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19501 = state_19461;
state_19461 = G__19501;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_19461){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_19461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___19485))
})();var state__14090__auto__ = (function (){var statearr_19484 = f__14089__auto__.call(null);(statearr_19484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___19485);
return statearr_19484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___19485))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14088__auto___19602 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___19602,tc,fc){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___19602,tc,fc){
return (function (state_19577){var state_val_19578 = (state_19577[1]);if((state_val_19578 === 7))
{var inst_19573 = (state_19577[2]);var state_19577__$1 = state_19577;var statearr_19579_19603 = state_19577__$1;(statearr_19579_19603[2] = inst_19573);
(statearr_19579_19603[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19578 === 1))
{var state_19577__$1 = state_19577;var statearr_19580_19604 = state_19577__$1;(statearr_19580_19604[2] = null);
(statearr_19580_19604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19578 === 4))
{var inst_19554 = (state_19577[7]);var inst_19554__$1 = (state_19577[2]);var inst_19555 = (inst_19554__$1 == null);var state_19577__$1 = (function (){var statearr_19581 = state_19577;(statearr_19581[7] = inst_19554__$1);
return statearr_19581;
})();if(cljs.core.truth_(inst_19555))
{var statearr_19582_19605 = state_19577__$1;(statearr_19582_19605[1] = 5);
} else
{var statearr_19583_19606 = state_19577__$1;(statearr_19583_19606[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19578 === 13))
{var state_19577__$1 = state_19577;var statearr_19584_19607 = state_19577__$1;(statearr_19584_19607[2] = null);
(statearr_19584_19607[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19578 === 6))
{var inst_19554 = (state_19577[7]);var inst_19560 = p.call(null,inst_19554);var state_19577__$1 = state_19577;if(cljs.core.truth_(inst_19560))
{var statearr_19585_19608 = state_19577__$1;(statearr_19585_19608[1] = 9);
} else
{var statearr_19586_19609 = state_19577__$1;(statearr_19586_19609[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19578 === 3))
{var inst_19575 = (state_19577[2]);var state_19577__$1 = state_19577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19577__$1,inst_19575);
} else
{if((state_val_19578 === 12))
{var state_19577__$1 = state_19577;var statearr_19587_19610 = state_19577__$1;(statearr_19587_19610[2] = null);
(statearr_19587_19610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19578 === 2))
{var state_19577__$1 = state_19577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19577__$1,4,ch);
} else
{if((state_val_19578 === 11))
{var inst_19554 = (state_19577[7]);var inst_19564 = (state_19577[2]);var state_19577__$1 = state_19577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19577__$1,8,inst_19564,inst_19554);
} else
{if((state_val_19578 === 9))
{var state_19577__$1 = state_19577;var statearr_19588_19611 = state_19577__$1;(statearr_19588_19611[2] = tc);
(statearr_19588_19611[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19578 === 5))
{var inst_19557 = cljs.core.async.close_BANG_.call(null,tc);var inst_19558 = cljs.core.async.close_BANG_.call(null,fc);var state_19577__$1 = (function (){var statearr_19589 = state_19577;(statearr_19589[8] = inst_19557);
return statearr_19589;
})();var statearr_19590_19612 = state_19577__$1;(statearr_19590_19612[2] = inst_19558);
(statearr_19590_19612[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19578 === 14))
{var inst_19571 = (state_19577[2]);var state_19577__$1 = state_19577;var statearr_19591_19613 = state_19577__$1;(statearr_19591_19613[2] = inst_19571);
(statearr_19591_19613[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19578 === 10))
{var state_19577__$1 = state_19577;var statearr_19592_19614 = state_19577__$1;(statearr_19592_19614[2] = fc);
(statearr_19592_19614[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19578 === 8))
{var inst_19566 = (state_19577[2]);var state_19577__$1 = state_19577;if(cljs.core.truth_(inst_19566))
{var statearr_19593_19615 = state_19577__$1;(statearr_19593_19615[1] = 12);
} else
{var statearr_19594_19616 = state_19577__$1;(statearr_19594_19616[1] = 13);
}
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
}
}
}
}
});})(c__14088__auto___19602,tc,fc))
;return ((function (switch__14023__auto__,c__14088__auto___19602,tc,fc){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_19598 = [null,null,null,null,null,null,null,null,null];(statearr_19598[0] = state_machine__14024__auto__);
(statearr_19598[1] = 1);
return statearr_19598;
});
var state_machine__14024__auto____1 = (function (state_19577){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_19577);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e19599){if((e19599 instanceof Object))
{var ex__14027__auto__ = e19599;var statearr_19600_19617 = state_19577;(statearr_19600_19617[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19618 = state_19577;
state_19577 = G__19618;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_19577){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_19577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___19602,tc,fc))
})();var state__14090__auto__ = (function (){var statearr_19601 = f__14089__auto__.call(null);(statearr_19601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___19602);
return statearr_19601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___19602,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__14088__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto__){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto__){
return (function (state_19665){var state_val_19666 = (state_19665[1]);if((state_val_19666 === 7))
{var inst_19661 = (state_19665[2]);var state_19665__$1 = state_19665;var statearr_19667_19683 = state_19665__$1;(statearr_19667_19683[2] = inst_19661);
(statearr_19667_19683[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 6))
{var inst_19651 = (state_19665[7]);var inst_19654 = (state_19665[8]);var inst_19658 = f.call(null,inst_19651,inst_19654);var inst_19651__$1 = inst_19658;var state_19665__$1 = (function (){var statearr_19668 = state_19665;(statearr_19668[7] = inst_19651__$1);
return statearr_19668;
})();var statearr_19669_19684 = state_19665__$1;(statearr_19669_19684[2] = null);
(statearr_19669_19684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 5))
{var inst_19651 = (state_19665[7]);var state_19665__$1 = state_19665;var statearr_19670_19685 = state_19665__$1;(statearr_19670_19685[2] = inst_19651);
(statearr_19670_19685[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 4))
{var inst_19654 = (state_19665[8]);var inst_19654__$1 = (state_19665[2]);var inst_19655 = (inst_19654__$1 == null);var state_19665__$1 = (function (){var statearr_19671 = state_19665;(statearr_19671[8] = inst_19654__$1);
return statearr_19671;
})();if(cljs.core.truth_(inst_19655))
{var statearr_19672_19686 = state_19665__$1;(statearr_19672_19686[1] = 5);
} else
{var statearr_19673_19687 = state_19665__$1;(statearr_19673_19687[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19666 === 3))
{var inst_19663 = (state_19665[2]);var state_19665__$1 = state_19665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19665__$1,inst_19663);
} else
{if((state_val_19666 === 2))
{var state_19665__$1 = state_19665;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19665__$1,4,ch);
} else
{if((state_val_19666 === 1))
{var inst_19651 = init;var state_19665__$1 = (function (){var statearr_19674 = state_19665;(statearr_19674[7] = inst_19651);
return statearr_19674;
})();var statearr_19675_19688 = state_19665__$1;(statearr_19675_19688[2] = null);
(statearr_19675_19688[1] = 2);
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
});})(c__14088__auto__))
;return ((function (switch__14023__auto__,c__14088__auto__){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_19679 = [null,null,null,null,null,null,null,null,null];(statearr_19679[0] = state_machine__14024__auto__);
(statearr_19679[1] = 1);
return statearr_19679;
});
var state_machine__14024__auto____1 = (function (state_19665){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_19665);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e19680){if((e19680 instanceof Object))
{var ex__14027__auto__ = e19680;var statearr_19681_19689 = state_19665;(statearr_19681_19689[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19665);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19690 = state_19665;
state_19665 = G__19690;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_19665){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_19665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto__))
})();var state__14090__auto__ = (function (){var statearr_19682 = f__14089__auto__.call(null);(statearr_19682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);
return statearr_19682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto__))
);
return c__14088__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__14088__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto__){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto__){
return (function (state_19764){var state_val_19765 = (state_19764[1]);if((state_val_19765 === 7))
{var inst_19746 = (state_19764[2]);var state_19764__$1 = state_19764;var statearr_19766_19789 = state_19764__$1;(statearr_19766_19789[2] = inst_19746);
(statearr_19766_19789[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19765 === 1))
{var inst_19740 = cljs.core.seq.call(null,coll);var inst_19741 = inst_19740;var state_19764__$1 = (function (){var statearr_19767 = state_19764;(statearr_19767[7] = inst_19741);
return statearr_19767;
})();var statearr_19768_19790 = state_19764__$1;(statearr_19768_19790[2] = null);
(statearr_19768_19790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19765 === 4))
{var inst_19741 = (state_19764[7]);var inst_19744 = cljs.core.first.call(null,inst_19741);var state_19764__$1 = state_19764;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19764__$1,7,ch,inst_19744);
} else
{if((state_val_19765 === 13))
{var inst_19758 = (state_19764[2]);var state_19764__$1 = state_19764;var statearr_19769_19791 = state_19764__$1;(statearr_19769_19791[2] = inst_19758);
(statearr_19769_19791[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19765 === 6))
{var inst_19749 = (state_19764[2]);var state_19764__$1 = state_19764;if(cljs.core.truth_(inst_19749))
{var statearr_19770_19792 = state_19764__$1;(statearr_19770_19792[1] = 8);
} else
{var statearr_19771_19793 = state_19764__$1;(statearr_19771_19793[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19765 === 3))
{var inst_19762 = (state_19764[2]);var state_19764__$1 = state_19764;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19764__$1,inst_19762);
} else
{if((state_val_19765 === 12))
{var state_19764__$1 = state_19764;var statearr_19772_19794 = state_19764__$1;(statearr_19772_19794[2] = null);
(statearr_19772_19794[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19765 === 2))
{var inst_19741 = (state_19764[7]);var state_19764__$1 = state_19764;if(cljs.core.truth_(inst_19741))
{var statearr_19773_19795 = state_19764__$1;(statearr_19773_19795[1] = 4);
} else
{var statearr_19774_19796 = state_19764__$1;(statearr_19774_19796[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19765 === 11))
{var inst_19755 = cljs.core.async.close_BANG_.call(null,ch);var state_19764__$1 = state_19764;var statearr_19775_19797 = state_19764__$1;(statearr_19775_19797[2] = inst_19755);
(statearr_19775_19797[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19765 === 9))
{var state_19764__$1 = state_19764;if(cljs.core.truth_(close_QMARK_))
{var statearr_19776_19798 = state_19764__$1;(statearr_19776_19798[1] = 11);
} else
{var statearr_19777_19799 = state_19764__$1;(statearr_19777_19799[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19765 === 5))
{var inst_19741 = (state_19764[7]);var state_19764__$1 = state_19764;var statearr_19778_19800 = state_19764__$1;(statearr_19778_19800[2] = inst_19741);
(statearr_19778_19800[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19765 === 10))
{var inst_19760 = (state_19764[2]);var state_19764__$1 = state_19764;var statearr_19779_19801 = state_19764__$1;(statearr_19779_19801[2] = inst_19760);
(statearr_19779_19801[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19765 === 8))
{var inst_19741 = (state_19764[7]);var inst_19751 = cljs.core.next.call(null,inst_19741);var inst_19741__$1 = inst_19751;var state_19764__$1 = (function (){var statearr_19780 = state_19764;(statearr_19780[7] = inst_19741__$1);
return statearr_19780;
})();var statearr_19781_19802 = state_19764__$1;(statearr_19781_19802[2] = null);
(statearr_19781_19802[1] = 2);
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
}
}
}
});})(c__14088__auto__))
;return ((function (switch__14023__auto__,c__14088__auto__){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_19785 = [null,null,null,null,null,null,null,null];(statearr_19785[0] = state_machine__14024__auto__);
(statearr_19785[1] = 1);
return statearr_19785;
});
var state_machine__14024__auto____1 = (function (state_19764){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_19764);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e19786){if((e19786 instanceof Object))
{var ex__14027__auto__ = e19786;var statearr_19787_19803 = state_19764;(statearr_19787_19803[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19764);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19804 = state_19764;
state_19764 = G__19804;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_19764){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_19764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto__))
})();var state__14090__auto__ = (function (){var statearr_19788 = f__14089__auto__.call(null);(statearr_19788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);
return statearr_19788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto__))
);
return c__14088__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj19806 = {};return obj19806;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8644__auto__ = _;if(and__8644__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8644__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9283__auto__ = (((_ == null))?null:_);return (function (){var or__8656__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19808 = {};return obj19808;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8644__auto__ = m;if(and__8644__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8644__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9283__auto__ = (((m == null))?null:m);return (function (){var or__8656__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8644__auto__ = m;if(and__8644__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8644__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9283__auto__ = (((m == null))?null:m);return (function (){var or__8656__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8644__auto__ = m;if(and__8644__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8644__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9283__auto__ = (((m == null))?null:m);return (function (){var or__8656__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20030 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20030 = (function (cs,ch,mult,meta20031){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20031 = meta20031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20030.cljs$lang$type = true;
cljs.core.async.t20030.cljs$lang$ctorStr = "cljs.core.async/t20030";
cljs.core.async.t20030.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"cljs.core.async/t20030");
});})(cs))
;
cljs.core.async.t20030.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20030.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20030.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20030.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20030.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20032){var self__ = this;
var _20032__$1 = this;return self__.meta20031;
});})(cs))
;
cljs.core.async.t20030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20032,meta20031__$1){var self__ = this;
var _20032__$1 = this;return (new cljs.core.async.t20030(self__.cs,self__.ch,self__.mult,meta20031__$1));
});})(cs))
;
cljs.core.async.__GT_t20030 = ((function (cs){
return (function __GT_t20030(cs__$1,ch__$1,mult__$1,meta20031){return (new cljs.core.async.t20030(cs__$1,ch__$1,mult__$1,meta20031));
});})(cs))
;
}
return (new cljs.core.async.t20030(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14088__auto___20251 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___20251,cs,m,dchan,dctr,done){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___20251,cs,m,dchan,dctr,done){
return (function (state_20163){var state_val_20164 = (state_20163[1]);if((state_val_20164 === 7))
{var inst_20159 = (state_20163[2]);var state_20163__$1 = state_20163;var statearr_20165_20252 = state_20163__$1;(statearr_20165_20252[2] = inst_20159);
(statearr_20165_20252[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 20))
{var inst_20064 = (state_20163[7]);var inst_20074 = cljs.core.first.call(null,inst_20064);var inst_20075 = cljs.core.nth.call(null,inst_20074,0,null);var inst_20076 = cljs.core.nth.call(null,inst_20074,1,null);var state_20163__$1 = (function (){var statearr_20166 = state_20163;(statearr_20166[8] = inst_20075);
return statearr_20166;
})();if(cljs.core.truth_(inst_20076))
{var statearr_20167_20253 = state_20163__$1;(statearr_20167_20253[1] = 22);
} else
{var statearr_20168_20254 = state_20163__$1;(statearr_20168_20254[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 27))
{var inst_20111 = (state_20163[9]);var inst_20106 = (state_20163[10]);var inst_20104 = (state_20163[11]);var inst_20035 = (state_20163[12]);var inst_20111__$1 = cljs.core._nth.call(null,inst_20104,inst_20106);var inst_20112 = cljs.core.async.put_BANG_.call(null,inst_20111__$1,inst_20035,done);var state_20163__$1 = (function (){var statearr_20169 = state_20163;(statearr_20169[9] = inst_20111__$1);
return statearr_20169;
})();if(cljs.core.truth_(inst_20112))
{var statearr_20170_20255 = state_20163__$1;(statearr_20170_20255[1] = 30);
} else
{var statearr_20171_20256 = state_20163__$1;(statearr_20171_20256[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 1))
{var state_20163__$1 = state_20163;var statearr_20172_20257 = state_20163__$1;(statearr_20172_20257[2] = null);
(statearr_20172_20257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 24))
{var inst_20064 = (state_20163[7]);var inst_20081 = (state_20163[2]);var inst_20082 = cljs.core.next.call(null,inst_20064);var inst_20044 = inst_20082;var inst_20045 = null;var inst_20046 = 0;var inst_20047 = 0;var state_20163__$1 = (function (){var statearr_20173 = state_20163;(statearr_20173[13] = inst_20044);
(statearr_20173[14] = inst_20081);
(statearr_20173[15] = inst_20047);
(statearr_20173[16] = inst_20046);
(statearr_20173[17] = inst_20045);
return statearr_20173;
})();var statearr_20174_20258 = state_20163__$1;(statearr_20174_20258[2] = null);
(statearr_20174_20258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 39))
{var state_20163__$1 = state_20163;var statearr_20178_20259 = state_20163__$1;(statearr_20178_20259[2] = null);
(statearr_20178_20259[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 4))
{var inst_20035 = (state_20163[12]);var inst_20035__$1 = (state_20163[2]);var inst_20036 = (inst_20035__$1 == null);var state_20163__$1 = (function (){var statearr_20179 = state_20163;(statearr_20179[12] = inst_20035__$1);
return statearr_20179;
})();if(cljs.core.truth_(inst_20036))
{var statearr_20180_20260 = state_20163__$1;(statearr_20180_20260[1] = 5);
} else
{var statearr_20181_20261 = state_20163__$1;(statearr_20181_20261[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 15))
{var inst_20044 = (state_20163[13]);var inst_20047 = (state_20163[15]);var inst_20046 = (state_20163[16]);var inst_20045 = (state_20163[17]);var inst_20060 = (state_20163[2]);var inst_20061 = (inst_20047 + 1);var tmp20175 = inst_20044;var tmp20176 = inst_20046;var tmp20177 = inst_20045;var inst_20044__$1 = tmp20175;var inst_20045__$1 = tmp20177;var inst_20046__$1 = tmp20176;var inst_20047__$1 = inst_20061;var state_20163__$1 = (function (){var statearr_20182 = state_20163;(statearr_20182[13] = inst_20044__$1);
(statearr_20182[18] = inst_20060);
(statearr_20182[15] = inst_20047__$1);
(statearr_20182[16] = inst_20046__$1);
(statearr_20182[17] = inst_20045__$1);
return statearr_20182;
})();var statearr_20183_20262 = state_20163__$1;(statearr_20183_20262[2] = null);
(statearr_20183_20262[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 21))
{var inst_20085 = (state_20163[2]);var state_20163__$1 = state_20163;var statearr_20187_20263 = state_20163__$1;(statearr_20187_20263[2] = inst_20085);
(statearr_20187_20263[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 31))
{var inst_20111 = (state_20163[9]);var inst_20115 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20116 = cljs.core.async.untap_STAR_.call(null,m,inst_20111);var state_20163__$1 = (function (){var statearr_20188 = state_20163;(statearr_20188[19] = inst_20115);
return statearr_20188;
})();var statearr_20189_20264 = state_20163__$1;(statearr_20189_20264[2] = inst_20116);
(statearr_20189_20264[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 32))
{var inst_20106 = (state_20163[10]);var inst_20104 = (state_20163[11]);var inst_20103 = (state_20163[20]);var inst_20105 = (state_20163[21]);var inst_20118 = (state_20163[2]);var inst_20119 = (inst_20106 + 1);var tmp20184 = inst_20104;var tmp20185 = inst_20103;var tmp20186 = inst_20105;var inst_20103__$1 = tmp20185;var inst_20104__$1 = tmp20184;var inst_20105__$1 = tmp20186;var inst_20106__$1 = inst_20119;var state_20163__$1 = (function (){var statearr_20190 = state_20163;(statearr_20190[22] = inst_20118);
(statearr_20190[10] = inst_20106__$1);
(statearr_20190[11] = inst_20104__$1);
(statearr_20190[20] = inst_20103__$1);
(statearr_20190[21] = inst_20105__$1);
return statearr_20190;
})();var statearr_20191_20265 = state_20163__$1;(statearr_20191_20265[2] = null);
(statearr_20191_20265[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 40))
{var inst_20131 = (state_20163[23]);var inst_20135 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20136 = cljs.core.async.untap_STAR_.call(null,m,inst_20131);var state_20163__$1 = (function (){var statearr_20192 = state_20163;(statearr_20192[24] = inst_20135);
return statearr_20192;
})();var statearr_20193_20266 = state_20163__$1;(statearr_20193_20266[2] = inst_20136);
(statearr_20193_20266[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 33))
{var inst_20122 = (state_20163[25]);var inst_20124 = cljs.core.chunked_seq_QMARK_.call(null,inst_20122);var state_20163__$1 = state_20163;if(inst_20124)
{var statearr_20194_20267 = state_20163__$1;(statearr_20194_20267[1] = 36);
} else
{var statearr_20195_20268 = state_20163__$1;(statearr_20195_20268[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 13))
{var inst_20054 = (state_20163[26]);var inst_20057 = cljs.core.async.close_BANG_.call(null,inst_20054);var state_20163__$1 = state_20163;var statearr_20196_20269 = state_20163__$1;(statearr_20196_20269[2] = inst_20057);
(statearr_20196_20269[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 22))
{var inst_20075 = (state_20163[8]);var inst_20078 = cljs.core.async.close_BANG_.call(null,inst_20075);var state_20163__$1 = state_20163;var statearr_20197_20270 = state_20163__$1;(statearr_20197_20270[2] = inst_20078);
(statearr_20197_20270[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 36))
{var inst_20122 = (state_20163[25]);var inst_20126 = cljs.core.chunk_first.call(null,inst_20122);var inst_20127 = cljs.core.chunk_rest.call(null,inst_20122);var inst_20128 = cljs.core.count.call(null,inst_20126);var inst_20103 = inst_20127;var inst_20104 = inst_20126;var inst_20105 = inst_20128;var inst_20106 = 0;var state_20163__$1 = (function (){var statearr_20198 = state_20163;(statearr_20198[10] = inst_20106);
(statearr_20198[11] = inst_20104);
(statearr_20198[20] = inst_20103);
(statearr_20198[21] = inst_20105);
return statearr_20198;
})();var statearr_20199_20271 = state_20163__$1;(statearr_20199_20271[2] = null);
(statearr_20199_20271[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 41))
{var inst_20122 = (state_20163[25]);var inst_20138 = (state_20163[2]);var inst_20139 = cljs.core.next.call(null,inst_20122);var inst_20103 = inst_20139;var inst_20104 = null;var inst_20105 = 0;var inst_20106 = 0;var state_20163__$1 = (function (){var statearr_20200 = state_20163;(statearr_20200[27] = inst_20138);
(statearr_20200[10] = inst_20106);
(statearr_20200[11] = inst_20104);
(statearr_20200[20] = inst_20103);
(statearr_20200[21] = inst_20105);
return statearr_20200;
})();var statearr_20201_20272 = state_20163__$1;(statearr_20201_20272[2] = null);
(statearr_20201_20272[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 43))
{var state_20163__$1 = state_20163;var statearr_20202_20273 = state_20163__$1;(statearr_20202_20273[2] = null);
(statearr_20202_20273[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 29))
{var inst_20147 = (state_20163[2]);var state_20163__$1 = state_20163;var statearr_20203_20274 = state_20163__$1;(statearr_20203_20274[2] = inst_20147);
(statearr_20203_20274[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 44))
{var inst_20156 = (state_20163[2]);var state_20163__$1 = (function (){var statearr_20204 = state_20163;(statearr_20204[28] = inst_20156);
return statearr_20204;
})();var statearr_20205_20275 = state_20163__$1;(statearr_20205_20275[2] = null);
(statearr_20205_20275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 6))
{var inst_20095 = (state_20163[29]);var inst_20094 = cljs.core.deref.call(null,cs);var inst_20095__$1 = cljs.core.keys.call(null,inst_20094);var inst_20096 = cljs.core.count.call(null,inst_20095__$1);var inst_20097 = cljs.core.reset_BANG_.call(null,dctr,inst_20096);var inst_20102 = cljs.core.seq.call(null,inst_20095__$1);var inst_20103 = inst_20102;var inst_20104 = null;var inst_20105 = 0;var inst_20106 = 0;var state_20163__$1 = (function (){var statearr_20206 = state_20163;(statearr_20206[30] = inst_20097);
(statearr_20206[10] = inst_20106);
(statearr_20206[11] = inst_20104);
(statearr_20206[20] = inst_20103);
(statearr_20206[29] = inst_20095__$1);
(statearr_20206[21] = inst_20105);
return statearr_20206;
})();var statearr_20207_20276 = state_20163__$1;(statearr_20207_20276[2] = null);
(statearr_20207_20276[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 28))
{var inst_20122 = (state_20163[25]);var inst_20103 = (state_20163[20]);var inst_20122__$1 = cljs.core.seq.call(null,inst_20103);var state_20163__$1 = (function (){var statearr_20208 = state_20163;(statearr_20208[25] = inst_20122__$1);
return statearr_20208;
})();if(inst_20122__$1)
{var statearr_20209_20277 = state_20163__$1;(statearr_20209_20277[1] = 33);
} else
{var statearr_20210_20278 = state_20163__$1;(statearr_20210_20278[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 25))
{var inst_20106 = (state_20163[10]);var inst_20105 = (state_20163[21]);var inst_20108 = (inst_20106 < inst_20105);var inst_20109 = inst_20108;var state_20163__$1 = state_20163;if(cljs.core.truth_(inst_20109))
{var statearr_20211_20279 = state_20163__$1;(statearr_20211_20279[1] = 27);
} else
{var statearr_20212_20280 = state_20163__$1;(statearr_20212_20280[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 34))
{var state_20163__$1 = state_20163;var statearr_20213_20281 = state_20163__$1;(statearr_20213_20281[2] = null);
(statearr_20213_20281[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 17))
{var state_20163__$1 = state_20163;var statearr_20214_20282 = state_20163__$1;(statearr_20214_20282[2] = null);
(statearr_20214_20282[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 3))
{var inst_20161 = (state_20163[2]);var state_20163__$1 = state_20163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20163__$1,inst_20161);
} else
{if((state_val_20164 === 12))
{var inst_20090 = (state_20163[2]);var state_20163__$1 = state_20163;var statearr_20215_20283 = state_20163__$1;(statearr_20215_20283[2] = inst_20090);
(statearr_20215_20283[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 2))
{var state_20163__$1 = state_20163;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20163__$1,4,ch);
} else
{if((state_val_20164 === 23))
{var state_20163__$1 = state_20163;var statearr_20216_20284 = state_20163__$1;(statearr_20216_20284[2] = null);
(statearr_20216_20284[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 35))
{var inst_20145 = (state_20163[2]);var state_20163__$1 = state_20163;var statearr_20217_20285 = state_20163__$1;(statearr_20217_20285[2] = inst_20145);
(statearr_20217_20285[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 19))
{var inst_20064 = (state_20163[7]);var inst_20068 = cljs.core.chunk_first.call(null,inst_20064);var inst_20069 = cljs.core.chunk_rest.call(null,inst_20064);var inst_20070 = cljs.core.count.call(null,inst_20068);var inst_20044 = inst_20069;var inst_20045 = inst_20068;var inst_20046 = inst_20070;var inst_20047 = 0;var state_20163__$1 = (function (){var statearr_20218 = state_20163;(statearr_20218[13] = inst_20044);
(statearr_20218[15] = inst_20047);
(statearr_20218[16] = inst_20046);
(statearr_20218[17] = inst_20045);
return statearr_20218;
})();var statearr_20219_20286 = state_20163__$1;(statearr_20219_20286[2] = null);
(statearr_20219_20286[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 11))
{var inst_20044 = (state_20163[13]);var inst_20064 = (state_20163[7]);var inst_20064__$1 = cljs.core.seq.call(null,inst_20044);var state_20163__$1 = (function (){var statearr_20220 = state_20163;(statearr_20220[7] = inst_20064__$1);
return statearr_20220;
})();if(inst_20064__$1)
{var statearr_20221_20287 = state_20163__$1;(statearr_20221_20287[1] = 16);
} else
{var statearr_20222_20288 = state_20163__$1;(statearr_20222_20288[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 9))
{var inst_20092 = (state_20163[2]);var state_20163__$1 = state_20163;var statearr_20223_20289 = state_20163__$1;(statearr_20223_20289[2] = inst_20092);
(statearr_20223_20289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 5))
{var inst_20042 = cljs.core.deref.call(null,cs);var inst_20043 = cljs.core.seq.call(null,inst_20042);var inst_20044 = inst_20043;var inst_20045 = null;var inst_20046 = 0;var inst_20047 = 0;var state_20163__$1 = (function (){var statearr_20224 = state_20163;(statearr_20224[13] = inst_20044);
(statearr_20224[15] = inst_20047);
(statearr_20224[16] = inst_20046);
(statearr_20224[17] = inst_20045);
return statearr_20224;
})();var statearr_20225_20290 = state_20163__$1;(statearr_20225_20290[2] = null);
(statearr_20225_20290[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 14))
{var state_20163__$1 = state_20163;var statearr_20226_20291 = state_20163__$1;(statearr_20226_20291[2] = null);
(statearr_20226_20291[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 45))
{var inst_20153 = (state_20163[2]);var state_20163__$1 = state_20163;var statearr_20227_20292 = state_20163__$1;(statearr_20227_20292[2] = inst_20153);
(statearr_20227_20292[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 26))
{var inst_20095 = (state_20163[29]);var inst_20149 = (state_20163[2]);var inst_20150 = cljs.core.seq.call(null,inst_20095);var state_20163__$1 = (function (){var statearr_20228 = state_20163;(statearr_20228[31] = inst_20149);
return statearr_20228;
})();if(inst_20150)
{var statearr_20229_20293 = state_20163__$1;(statearr_20229_20293[1] = 42);
} else
{var statearr_20230_20294 = state_20163__$1;(statearr_20230_20294[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 16))
{var inst_20064 = (state_20163[7]);var inst_20066 = cljs.core.chunked_seq_QMARK_.call(null,inst_20064);var state_20163__$1 = state_20163;if(inst_20066)
{var statearr_20231_20295 = state_20163__$1;(statearr_20231_20295[1] = 19);
} else
{var statearr_20232_20296 = state_20163__$1;(statearr_20232_20296[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 38))
{var inst_20142 = (state_20163[2]);var state_20163__$1 = state_20163;var statearr_20233_20297 = state_20163__$1;(statearr_20233_20297[2] = inst_20142);
(statearr_20233_20297[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 30))
{var state_20163__$1 = state_20163;var statearr_20234_20298 = state_20163__$1;(statearr_20234_20298[2] = null);
(statearr_20234_20298[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 10))
{var inst_20047 = (state_20163[15]);var inst_20045 = (state_20163[17]);var inst_20053 = cljs.core._nth.call(null,inst_20045,inst_20047);var inst_20054 = cljs.core.nth.call(null,inst_20053,0,null);var inst_20055 = cljs.core.nth.call(null,inst_20053,1,null);var state_20163__$1 = (function (){var statearr_20235 = state_20163;(statearr_20235[26] = inst_20054);
return statearr_20235;
})();if(cljs.core.truth_(inst_20055))
{var statearr_20236_20299 = state_20163__$1;(statearr_20236_20299[1] = 13);
} else
{var statearr_20237_20300 = state_20163__$1;(statearr_20237_20300[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 18))
{var inst_20088 = (state_20163[2]);var state_20163__$1 = state_20163;var statearr_20238_20301 = state_20163__$1;(statearr_20238_20301[2] = inst_20088);
(statearr_20238_20301[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 42))
{var state_20163__$1 = state_20163;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20163__$1,45,dchan);
} else
{if((state_val_20164 === 37))
{var inst_20122 = (state_20163[25]);var inst_20035 = (state_20163[12]);var inst_20131 = (state_20163[23]);var inst_20131__$1 = cljs.core.first.call(null,inst_20122);var inst_20132 = cljs.core.async.put_BANG_.call(null,inst_20131__$1,inst_20035,done);var state_20163__$1 = (function (){var statearr_20239 = state_20163;(statearr_20239[23] = inst_20131__$1);
return statearr_20239;
})();if(cljs.core.truth_(inst_20132))
{var statearr_20240_20302 = state_20163__$1;(statearr_20240_20302[1] = 39);
} else
{var statearr_20241_20303 = state_20163__$1;(statearr_20241_20303[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20164 === 8))
{var inst_20047 = (state_20163[15]);var inst_20046 = (state_20163[16]);var inst_20049 = (inst_20047 < inst_20046);var inst_20050 = inst_20049;var state_20163__$1 = state_20163;if(cljs.core.truth_(inst_20050))
{var statearr_20242_20304 = state_20163__$1;(statearr_20242_20304[1] = 10);
} else
{var statearr_20243_20305 = state_20163__$1;(statearr_20243_20305[1] = 11);
}
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
}
}
}
}
}
});})(c__14088__auto___20251,cs,m,dchan,dctr,done))
;return ((function (switch__14023__auto__,c__14088__auto___20251,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_20247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20247[0] = state_machine__14024__auto__);
(statearr_20247[1] = 1);
return statearr_20247;
});
var state_machine__14024__auto____1 = (function (state_20163){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_20163);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e20248){if((e20248 instanceof Object))
{var ex__14027__auto__ = e20248;var statearr_20249_20306 = state_20163;(statearr_20249_20306[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20163);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20307 = state_20163;
state_20163 = G__20307;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_20163){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_20163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___20251,cs,m,dchan,dctr,done))
})();var state__14090__auto__ = (function (){var statearr_20250 = f__14089__auto__.call(null);(statearr_20250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___20251);
return statearr_20250;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___20251,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj20309 = {};return obj20309;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8644__auto__ = m;if(and__8644__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8644__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9283__auto__ = (((m == null))?null:m);return (function (){var or__8656__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8644__auto__ = m;if(and__8644__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8644__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9283__auto__ = (((m == null))?null:m);return (function (){var or__8656__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8644__auto__ = m;if(and__8644__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8644__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9283__auto__ = (((m == null))?null:m);return (function (){var or__8656__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8644__auto__ = m;if(and__8644__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8644__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9283__auto__ = (((m == null))?null:m);return (function (){var or__8656__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8644__auto__ = m;if(and__8644__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8644__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9283__auto__ = (((m == null))?null:m);return (function (){var or__8656__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t20429 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20429 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20430){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20430 = meta20430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20429.cljs$lang$type = true;
cljs.core.async.t20429.cljs$lang$ctorStr = "cljs.core.async/t20429";
cljs.core.async.t20429.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"cljs.core.async/t20429");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20429.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20429.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20429.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20429.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20429.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20429.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20429.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20431){var self__ = this;
var _20431__$1 = this;return self__.meta20430;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20431,meta20430__$1){var self__ = this;
var _20431__$1 = this;return (new cljs.core.async.t20429(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20430__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20429 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20429(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20430){return (new cljs.core.async.t20429(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20430));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20429(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__14088__auto___20548 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___20548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___20548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20501){var state_val_20502 = (state_20501[1]);if((state_val_20502 === 7))
{var inst_20445 = (state_20501[7]);var inst_20450 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20445);var state_20501__$1 = state_20501;var statearr_20503_20549 = state_20501__$1;(statearr_20503_20549[2] = inst_20450);
(statearr_20503_20549[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 20))
{var inst_20460 = (state_20501[8]);var state_20501__$1 = state_20501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20501__$1,23,out,inst_20460);
} else
{if((state_val_20502 === 1))
{var inst_20435 = (state_20501[9]);var inst_20435__$1 = calc_state.call(null);var inst_20436 = cljs.core.seq_QMARK_.call(null,inst_20435__$1);var state_20501__$1 = (function (){var statearr_20504 = state_20501;(statearr_20504[9] = inst_20435__$1);
return statearr_20504;
})();if(inst_20436)
{var statearr_20505_20550 = state_20501__$1;(statearr_20505_20550[1] = 2);
} else
{var statearr_20506_20551 = state_20501__$1;(statearr_20506_20551[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 24))
{var inst_20453 = (state_20501[10]);var inst_20445 = inst_20453;var state_20501__$1 = (function (){var statearr_20507 = state_20501;(statearr_20507[7] = inst_20445);
return statearr_20507;
})();var statearr_20508_20552 = state_20501__$1;(statearr_20508_20552[2] = null);
(statearr_20508_20552[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 4))
{var inst_20435 = (state_20501[9]);var inst_20441 = (state_20501[2]);var inst_20442 = cljs.core.get.call(null,inst_20441,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_20443 = cljs.core.get.call(null,inst_20441,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_20444 = cljs.core.get.call(null,inst_20441,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_20445 = inst_20435;var state_20501__$1 = (function (){var statearr_20509 = state_20501;(statearr_20509[11] = inst_20443);
(statearr_20509[12] = inst_20444);
(statearr_20509[7] = inst_20445);
(statearr_20509[13] = inst_20442);
return statearr_20509;
})();var statearr_20510_20553 = state_20501__$1;(statearr_20510_20553[2] = null);
(statearr_20510_20553[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 15))
{var state_20501__$1 = state_20501;var statearr_20511_20554 = state_20501__$1;(statearr_20511_20554[2] = null);
(statearr_20511_20554[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 21))
{var inst_20453 = (state_20501[10]);var inst_20445 = inst_20453;var state_20501__$1 = (function (){var statearr_20512 = state_20501;(statearr_20512[7] = inst_20445);
return statearr_20512;
})();var statearr_20513_20555 = state_20501__$1;(statearr_20513_20555[2] = null);
(statearr_20513_20555[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 13))
{var inst_20497 = (state_20501[2]);var state_20501__$1 = state_20501;var statearr_20514_20556 = state_20501__$1;(statearr_20514_20556[2] = inst_20497);
(statearr_20514_20556[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 22))
{var inst_20495 = (state_20501[2]);var state_20501__$1 = state_20501;var statearr_20515_20557 = state_20501__$1;(statearr_20515_20557[2] = inst_20495);
(statearr_20515_20557[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 6))
{var inst_20499 = (state_20501[2]);var state_20501__$1 = state_20501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20501__$1,inst_20499);
} else
{if((state_val_20502 === 25))
{var state_20501__$1 = state_20501;var statearr_20516_20558 = state_20501__$1;(statearr_20516_20558[2] = null);
(statearr_20516_20558[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 17))
{var inst_20475 = (state_20501[14]);var state_20501__$1 = state_20501;var statearr_20517_20559 = state_20501__$1;(statearr_20517_20559[2] = inst_20475);
(statearr_20517_20559[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 3))
{var inst_20435 = (state_20501[9]);var state_20501__$1 = state_20501;var statearr_20518_20560 = state_20501__$1;(statearr_20518_20560[2] = inst_20435);
(statearr_20518_20560[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 12))
{var inst_20461 = (state_20501[15]);var inst_20456 = (state_20501[16]);var inst_20475 = (state_20501[14]);var inst_20475__$1 = inst_20456.call(null,inst_20461);var state_20501__$1 = (function (){var statearr_20519 = state_20501;(statearr_20519[14] = inst_20475__$1);
return statearr_20519;
})();if(cljs.core.truth_(inst_20475__$1))
{var statearr_20520_20561 = state_20501__$1;(statearr_20520_20561[1] = 17);
} else
{var statearr_20521_20562 = state_20501__$1;(statearr_20521_20562[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 2))
{var inst_20435 = (state_20501[9]);var inst_20438 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20435);var state_20501__$1 = state_20501;var statearr_20522_20563 = state_20501__$1;(statearr_20522_20563[2] = inst_20438);
(statearr_20522_20563[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 23))
{var inst_20486 = (state_20501[2]);var state_20501__$1 = state_20501;if(cljs.core.truth_(inst_20486))
{var statearr_20523_20564 = state_20501__$1;(statearr_20523_20564[1] = 24);
} else
{var statearr_20524_20565 = state_20501__$1;(statearr_20524_20565[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 19))
{var inst_20483 = (state_20501[2]);var state_20501__$1 = state_20501;if(cljs.core.truth_(inst_20483))
{var statearr_20525_20566 = state_20501__$1;(statearr_20525_20566[1] = 20);
} else
{var statearr_20526_20567 = state_20501__$1;(statearr_20526_20567[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 11))
{var inst_20460 = (state_20501[8]);var inst_20466 = (inst_20460 == null);var state_20501__$1 = state_20501;if(cljs.core.truth_(inst_20466))
{var statearr_20527_20568 = state_20501__$1;(statearr_20527_20568[1] = 14);
} else
{var statearr_20528_20569 = state_20501__$1;(statearr_20528_20569[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 9))
{var inst_20453 = (state_20501[10]);var inst_20453__$1 = (state_20501[2]);var inst_20454 = cljs.core.get.call(null,inst_20453__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_20455 = cljs.core.get.call(null,inst_20453__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_20456 = cljs.core.get.call(null,inst_20453__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_20501__$1 = (function (){var statearr_20529 = state_20501;(statearr_20529[10] = inst_20453__$1);
(statearr_20529[16] = inst_20456);
(statearr_20529[17] = inst_20455);
return statearr_20529;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20501__$1,10,inst_20454);
} else
{if((state_val_20502 === 5))
{var inst_20445 = (state_20501[7]);var inst_20448 = cljs.core.seq_QMARK_.call(null,inst_20445);var state_20501__$1 = state_20501;if(inst_20448)
{var statearr_20530_20570 = state_20501__$1;(statearr_20530_20570[1] = 7);
} else
{var statearr_20531_20571 = state_20501__$1;(statearr_20531_20571[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 14))
{var inst_20461 = (state_20501[15]);var inst_20468 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20461);var state_20501__$1 = state_20501;var statearr_20532_20572 = state_20501__$1;(statearr_20532_20572[2] = inst_20468);
(statearr_20532_20572[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 26))
{var inst_20491 = (state_20501[2]);var state_20501__$1 = state_20501;var statearr_20533_20573 = state_20501__$1;(statearr_20533_20573[2] = inst_20491);
(statearr_20533_20573[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 16))
{var inst_20471 = (state_20501[2]);var inst_20472 = calc_state.call(null);var inst_20445 = inst_20472;var state_20501__$1 = (function (){var statearr_20534 = state_20501;(statearr_20534[18] = inst_20471);
(statearr_20534[7] = inst_20445);
return statearr_20534;
})();var statearr_20535_20574 = state_20501__$1;(statearr_20535_20574[2] = null);
(statearr_20535_20574[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 10))
{var inst_20461 = (state_20501[15]);var inst_20460 = (state_20501[8]);var inst_20459 = (state_20501[2]);var inst_20460__$1 = cljs.core.nth.call(null,inst_20459,0,null);var inst_20461__$1 = cljs.core.nth.call(null,inst_20459,1,null);var inst_20462 = (inst_20460__$1 == null);var inst_20463 = cljs.core._EQ_.call(null,inst_20461__$1,change);var inst_20464 = (inst_20462) || (inst_20463);var state_20501__$1 = (function (){var statearr_20536 = state_20501;(statearr_20536[15] = inst_20461__$1);
(statearr_20536[8] = inst_20460__$1);
return statearr_20536;
})();if(cljs.core.truth_(inst_20464))
{var statearr_20537_20575 = state_20501__$1;(statearr_20537_20575[1] = 11);
} else
{var statearr_20538_20576 = state_20501__$1;(statearr_20538_20576[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 18))
{var inst_20461 = (state_20501[15]);var inst_20456 = (state_20501[16]);var inst_20455 = (state_20501[17]);var inst_20478 = cljs.core.empty_QMARK_.call(null,inst_20456);var inst_20479 = inst_20455.call(null,inst_20461);var inst_20480 = cljs.core.not.call(null,inst_20479);var inst_20481 = (inst_20478) && (inst_20480);var state_20501__$1 = state_20501;var statearr_20539_20577 = state_20501__$1;(statearr_20539_20577[2] = inst_20481);
(statearr_20539_20577[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20502 === 8))
{var inst_20445 = (state_20501[7]);var state_20501__$1 = state_20501;var statearr_20540_20578 = state_20501__$1;(statearr_20540_20578[2] = inst_20445);
(statearr_20540_20578[1] = 9);
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
}
}
}
}
}
}
});})(c__14088__auto___20548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__14023__auto__,c__14088__auto___20548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_20544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20544[0] = state_machine__14024__auto__);
(statearr_20544[1] = 1);
return statearr_20544;
});
var state_machine__14024__auto____1 = (function (state_20501){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_20501);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e20545){if((e20545 instanceof Object))
{var ex__14027__auto__ = e20545;var statearr_20546_20579 = state_20501;(statearr_20546_20579[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20580 = state_20501;
state_20501 = G__20580;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_20501){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_20501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___20548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__14090__auto__ = (function (){var statearr_20547 = f__14089__auto__.call(null);(statearr_20547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___20548);
return statearr_20547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___20548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj20582 = {};return obj20582;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8644__auto__ = p;if(and__8644__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8644__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9283__auto__ = (((p == null))?null:p);return (function (){var or__8656__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8644__auto__ = p;if(and__8644__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8644__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9283__auto__ = (((p == null))?null:p);return (function (){var or__8656__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8644__auto__ = p;if(and__8644__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8644__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9283__auto__ = (((p == null))?null:p);return (function (){var or__8656__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8644__auto__ = p;if(and__8644__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8644__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9283__auto__ = (((p == null))?null:p);return (function (){var or__8656__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9283__auto__)]);if(or__8656__auto__)
{return or__8656__auto__;
} else
{var or__8656__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8656__auto____$1)
{return or__8656__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__8656__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8656__auto__))
{return or__8656__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8656__auto__,mults){
return (function (p1__20583_SHARP_){if(cljs.core.truth_(p1__20583_SHARP_.call(null,topic)))
{return p1__20583_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20583_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8656__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20698 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20699){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20699 = meta20699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20698.cljs$lang$type = true;
cljs.core.async.t20698.cljs$lang$ctorStr = "cljs.core.async/t20698";
cljs.core.async.t20698.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9223__auto__,writer__9224__auto__,opt__9225__auto__){return cljs.core._write.call(null,writer__9224__auto__,"cljs.core.async/t20698");
});})(mults,ensure_mult))
;
cljs.core.async.t20698.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20698.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20698.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20698.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20698.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20698.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20700){var self__ = this;
var _20700__$1 = this;return self__.meta20699;
});})(mults,ensure_mult))
;
cljs.core.async.t20698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20700,meta20699__$1){var self__ = this;
var _20700__$1 = this;return (new cljs.core.async.t20698(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20699__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20698 = ((function (mults,ensure_mult){
return (function __GT_t20698(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20699){return (new cljs.core.async.t20698(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20699));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20698(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14088__auto___20812 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___20812,mults,ensure_mult,p){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___20812,mults,ensure_mult,p){
return (function (state_20768){var state_val_20769 = (state_20768[1]);if((state_val_20769 === 7))
{var inst_20764 = (state_20768[2]);var state_20768__$1 = state_20768;var statearr_20770_20813 = state_20768__$1;(statearr_20770_20813[2] = inst_20764);
(statearr_20770_20813[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 20))
{var state_20768__$1 = state_20768;var statearr_20771_20814 = state_20768__$1;(statearr_20771_20814[2] = null);
(statearr_20771_20814[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 1))
{var state_20768__$1 = state_20768;var statearr_20772_20815 = state_20768__$1;(statearr_20772_20815[2] = null);
(statearr_20772_20815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 4))
{var inst_20703 = (state_20768[7]);var inst_20703__$1 = (state_20768[2]);var inst_20704 = (inst_20703__$1 == null);var state_20768__$1 = (function (){var statearr_20773 = state_20768;(statearr_20773[7] = inst_20703__$1);
return statearr_20773;
})();if(cljs.core.truth_(inst_20704))
{var statearr_20774_20816 = state_20768__$1;(statearr_20774_20816[1] = 5);
} else
{var statearr_20775_20817 = state_20768__$1;(statearr_20775_20817[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 15))
{var inst_20745 = (state_20768[2]);var state_20768__$1 = state_20768;var statearr_20776_20818 = state_20768__$1;(statearr_20776_20818[2] = inst_20745);
(statearr_20776_20818[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 21))
{var inst_20751 = (state_20768[8]);var inst_20759 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20751);var state_20768__$1 = state_20768;var statearr_20777_20819 = state_20768__$1;(statearr_20777_20819[2] = inst_20759);
(statearr_20777_20819[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 13))
{var inst_20727 = (state_20768[9]);var inst_20729 = cljs.core.chunked_seq_QMARK_.call(null,inst_20727);var state_20768__$1 = state_20768;if(inst_20729)
{var statearr_20778_20820 = state_20768__$1;(statearr_20778_20820[1] = 16);
} else
{var statearr_20779_20821 = state_20768__$1;(statearr_20779_20821[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 22))
{var inst_20761 = (state_20768[2]);var state_20768__$1 = (function (){var statearr_20780 = state_20768;(statearr_20780[10] = inst_20761);
return statearr_20780;
})();var statearr_20781_20822 = state_20768__$1;(statearr_20781_20822[2] = null);
(statearr_20781_20822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 6))
{var inst_20751 = (state_20768[8]);var inst_20703 = (state_20768[7]);var inst_20751__$1 = topic_fn.call(null,inst_20703);var inst_20752 = cljs.core.deref.call(null,mults);var inst_20753 = cljs.core.get.call(null,inst_20752,inst_20751__$1);var inst_20754 = cljs.core.async.muxch_STAR_.call(null,inst_20753);var state_20768__$1 = (function (){var statearr_20782 = state_20768;(statearr_20782[8] = inst_20751__$1);
return statearr_20782;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20768__$1,19,inst_20754,inst_20703);
} else
{if((state_val_20769 === 17))
{var inst_20727 = (state_20768[9]);var inst_20736 = cljs.core.first.call(null,inst_20727);var inst_20737 = cljs.core.async.muxch_STAR_.call(null,inst_20736);var inst_20738 = cljs.core.async.close_BANG_.call(null,inst_20737);var inst_20739 = cljs.core.next.call(null,inst_20727);var inst_20713 = inst_20739;var inst_20714 = null;var inst_20715 = 0;var inst_20716 = 0;var state_20768__$1 = (function (){var statearr_20783 = state_20768;(statearr_20783[11] = inst_20713);
(statearr_20783[12] = inst_20716);
(statearr_20783[13] = inst_20738);
(statearr_20783[14] = inst_20714);
(statearr_20783[15] = inst_20715);
return statearr_20783;
})();var statearr_20784_20823 = state_20768__$1;(statearr_20784_20823[2] = null);
(statearr_20784_20823[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 3))
{var inst_20766 = (state_20768[2]);var state_20768__$1 = state_20768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20768__$1,inst_20766);
} else
{if((state_val_20769 === 12))
{var inst_20747 = (state_20768[2]);var state_20768__$1 = state_20768;var statearr_20785_20824 = state_20768__$1;(statearr_20785_20824[2] = inst_20747);
(statearr_20785_20824[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 2))
{var state_20768__$1 = state_20768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20768__$1,4,ch);
} else
{if((state_val_20769 === 19))
{var inst_20756 = (state_20768[2]);var state_20768__$1 = state_20768;if(cljs.core.truth_(inst_20756))
{var statearr_20786_20825 = state_20768__$1;(statearr_20786_20825[1] = 20);
} else
{var statearr_20787_20826 = state_20768__$1;(statearr_20787_20826[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 11))
{var inst_20713 = (state_20768[11]);var inst_20727 = (state_20768[9]);var inst_20727__$1 = cljs.core.seq.call(null,inst_20713);var state_20768__$1 = (function (){var statearr_20788 = state_20768;(statearr_20788[9] = inst_20727__$1);
return statearr_20788;
})();if(inst_20727__$1)
{var statearr_20789_20827 = state_20768__$1;(statearr_20789_20827[1] = 13);
} else
{var statearr_20790_20828 = state_20768__$1;(statearr_20790_20828[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 9))
{var inst_20749 = (state_20768[2]);var state_20768__$1 = state_20768;var statearr_20791_20829 = state_20768__$1;(statearr_20791_20829[2] = inst_20749);
(statearr_20791_20829[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 5))
{var inst_20710 = cljs.core.deref.call(null,mults);var inst_20711 = cljs.core.vals.call(null,inst_20710);var inst_20712 = cljs.core.seq.call(null,inst_20711);var inst_20713 = inst_20712;var inst_20714 = null;var inst_20715 = 0;var inst_20716 = 0;var state_20768__$1 = (function (){var statearr_20792 = state_20768;(statearr_20792[11] = inst_20713);
(statearr_20792[12] = inst_20716);
(statearr_20792[14] = inst_20714);
(statearr_20792[15] = inst_20715);
return statearr_20792;
})();var statearr_20793_20830 = state_20768__$1;(statearr_20793_20830[2] = null);
(statearr_20793_20830[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 14))
{var state_20768__$1 = state_20768;var statearr_20797_20831 = state_20768__$1;(statearr_20797_20831[2] = null);
(statearr_20797_20831[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 16))
{var inst_20727 = (state_20768[9]);var inst_20731 = cljs.core.chunk_first.call(null,inst_20727);var inst_20732 = cljs.core.chunk_rest.call(null,inst_20727);var inst_20733 = cljs.core.count.call(null,inst_20731);var inst_20713 = inst_20732;var inst_20714 = inst_20731;var inst_20715 = inst_20733;var inst_20716 = 0;var state_20768__$1 = (function (){var statearr_20798 = state_20768;(statearr_20798[11] = inst_20713);
(statearr_20798[12] = inst_20716);
(statearr_20798[14] = inst_20714);
(statearr_20798[15] = inst_20715);
return statearr_20798;
})();var statearr_20799_20832 = state_20768__$1;(statearr_20799_20832[2] = null);
(statearr_20799_20832[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 10))
{var inst_20713 = (state_20768[11]);var inst_20716 = (state_20768[12]);var inst_20714 = (state_20768[14]);var inst_20715 = (state_20768[15]);var inst_20721 = cljs.core._nth.call(null,inst_20714,inst_20716);var inst_20722 = cljs.core.async.muxch_STAR_.call(null,inst_20721);var inst_20723 = cljs.core.async.close_BANG_.call(null,inst_20722);var inst_20724 = (inst_20716 + 1);var tmp20794 = inst_20713;var tmp20795 = inst_20714;var tmp20796 = inst_20715;var inst_20713__$1 = tmp20794;var inst_20714__$1 = tmp20795;var inst_20715__$1 = tmp20796;var inst_20716__$1 = inst_20724;var state_20768__$1 = (function (){var statearr_20800 = state_20768;(statearr_20800[11] = inst_20713__$1);
(statearr_20800[12] = inst_20716__$1);
(statearr_20800[16] = inst_20723);
(statearr_20800[14] = inst_20714__$1);
(statearr_20800[15] = inst_20715__$1);
return statearr_20800;
})();var statearr_20801_20833 = state_20768__$1;(statearr_20801_20833[2] = null);
(statearr_20801_20833[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 18))
{var inst_20742 = (state_20768[2]);var state_20768__$1 = state_20768;var statearr_20802_20834 = state_20768__$1;(statearr_20802_20834[2] = inst_20742);
(statearr_20802_20834[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 8))
{var inst_20716 = (state_20768[12]);var inst_20715 = (state_20768[15]);var inst_20718 = (inst_20716 < inst_20715);var inst_20719 = inst_20718;var state_20768__$1 = state_20768;if(cljs.core.truth_(inst_20719))
{var statearr_20803_20835 = state_20768__$1;(statearr_20803_20835[1] = 10);
} else
{var statearr_20804_20836 = state_20768__$1;(statearr_20804_20836[1] = 11);
}
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
}
}
});})(c__14088__auto___20812,mults,ensure_mult,p))
;return ((function (switch__14023__auto__,c__14088__auto___20812,mults,ensure_mult,p){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_20808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20808[0] = state_machine__14024__auto__);
(statearr_20808[1] = 1);
return statearr_20808;
});
var state_machine__14024__auto____1 = (function (state_20768){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_20768);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e20809){if((e20809 instanceof Object))
{var ex__14027__auto__ = e20809;var statearr_20810_20837 = state_20768;(statearr_20810_20837[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20768);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20838 = state_20768;
state_20768 = G__20838;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_20768){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_20768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___20812,mults,ensure_mult,p))
})();var state__14090__auto__ = (function (){var statearr_20811 = f__14089__auto__.call(null);(statearr_20811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___20812);
return statearr_20811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___20812,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__14088__auto___20975 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___20975,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___20975,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20945){var state_val_20946 = (state_20945[1]);if((state_val_20946 === 7))
{var state_20945__$1 = state_20945;var statearr_20947_20976 = state_20945__$1;(statearr_20947_20976[2] = null);
(statearr_20947_20976[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 1))
{var state_20945__$1 = state_20945;var statearr_20948_20977 = state_20945__$1;(statearr_20948_20977[2] = null);
(statearr_20948_20977[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 4))
{var inst_20909 = (state_20945[7]);var inst_20911 = (inst_20909 < cnt);var state_20945__$1 = state_20945;if(cljs.core.truth_(inst_20911))
{var statearr_20949_20978 = state_20945__$1;(statearr_20949_20978[1] = 6);
} else
{var statearr_20950_20979 = state_20945__$1;(statearr_20950_20979[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 15))
{var inst_20941 = (state_20945[2]);var state_20945__$1 = state_20945;var statearr_20951_20980 = state_20945__$1;(statearr_20951_20980[2] = inst_20941);
(statearr_20951_20980[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 13))
{var inst_20934 = cljs.core.async.close_BANG_.call(null,out);var state_20945__$1 = state_20945;var statearr_20952_20981 = state_20945__$1;(statearr_20952_20981[2] = inst_20934);
(statearr_20952_20981[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 6))
{var state_20945__$1 = state_20945;var statearr_20953_20982 = state_20945__$1;(statearr_20953_20982[2] = null);
(statearr_20953_20982[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 3))
{var inst_20943 = (state_20945[2]);var state_20945__$1 = state_20945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20945__$1,inst_20943);
} else
{if((state_val_20946 === 12))
{var inst_20931 = (state_20945[8]);var inst_20931__$1 = (state_20945[2]);var inst_20932 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20931__$1);var state_20945__$1 = (function (){var statearr_20954 = state_20945;(statearr_20954[8] = inst_20931__$1);
return statearr_20954;
})();if(cljs.core.truth_(inst_20932))
{var statearr_20955_20983 = state_20945__$1;(statearr_20955_20983[1] = 13);
} else
{var statearr_20956_20984 = state_20945__$1;(statearr_20956_20984[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 2))
{var inst_20908 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20909 = 0;var state_20945__$1 = (function (){var statearr_20957 = state_20945;(statearr_20957[7] = inst_20909);
(statearr_20957[9] = inst_20908);
return statearr_20957;
})();var statearr_20958_20985 = state_20945__$1;(statearr_20958_20985[2] = null);
(statearr_20958_20985[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 11))
{var inst_20909 = (state_20945[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20945,10,Object,null,9);var inst_20918 = chs__$1.call(null,inst_20909);var inst_20919 = done.call(null,inst_20909);var inst_20920 = cljs.core.async.take_BANG_.call(null,inst_20918,inst_20919);var state_20945__$1 = state_20945;var statearr_20959_20986 = state_20945__$1;(statearr_20959_20986[2] = inst_20920);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20945__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 9))
{var inst_20909 = (state_20945[7]);var inst_20922 = (state_20945[2]);var inst_20923 = (inst_20909 + 1);var inst_20909__$1 = inst_20923;var state_20945__$1 = (function (){var statearr_20960 = state_20945;(statearr_20960[7] = inst_20909__$1);
(statearr_20960[10] = inst_20922);
return statearr_20960;
})();var statearr_20961_20987 = state_20945__$1;(statearr_20961_20987[2] = null);
(statearr_20961_20987[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 5))
{var inst_20929 = (state_20945[2]);var state_20945__$1 = (function (){var statearr_20962 = state_20945;(statearr_20962[11] = inst_20929);
return statearr_20962;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20945__$1,12,dchan);
} else
{if((state_val_20946 === 14))
{var inst_20931 = (state_20945[8]);var inst_20936 = cljs.core.apply.call(null,f,inst_20931);var state_20945__$1 = state_20945;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20945__$1,16,out,inst_20936);
} else
{if((state_val_20946 === 16))
{var inst_20938 = (state_20945[2]);var state_20945__$1 = (function (){var statearr_20963 = state_20945;(statearr_20963[12] = inst_20938);
return statearr_20963;
})();var statearr_20964_20988 = state_20945__$1;(statearr_20964_20988[2] = null);
(statearr_20964_20988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 10))
{var inst_20913 = (state_20945[2]);var inst_20914 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20945__$1 = (function (){var statearr_20965 = state_20945;(statearr_20965[13] = inst_20913);
return statearr_20965;
})();var statearr_20966_20989 = state_20945__$1;(statearr_20966_20989[2] = inst_20914);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20945__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20946 === 8))
{var inst_20927 = (state_20945[2]);var state_20945__$1 = state_20945;var statearr_20967_20990 = state_20945__$1;(statearr_20967_20990[2] = inst_20927);
(statearr_20967_20990[1] = 5);
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
}
}
}
}
}
}
});})(c__14088__auto___20975,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__14023__auto__,c__14088__auto___20975,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_20971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20971[0] = state_machine__14024__auto__);
(statearr_20971[1] = 1);
return statearr_20971;
});
var state_machine__14024__auto____1 = (function (state_20945){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_20945);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e20972){if((e20972 instanceof Object))
{var ex__14027__auto__ = e20972;var statearr_20973_20991 = state_20945;(statearr_20973_20991[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20945);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20992 = state_20945;
state_20945 = G__20992;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_20945){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_20945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___20975,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__14090__auto__ = (function (){var statearr_20974 = f__14089__auto__.call(null);(statearr_20974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___20975);
return statearr_20974;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___20975,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14088__auto___21100 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___21100,out){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___21100,out){
return (function (state_21076){var state_val_21077 = (state_21076[1]);if((state_val_21077 === 7))
{var inst_21056 = (state_21076[7]);var inst_21055 = (state_21076[8]);var inst_21055__$1 = (state_21076[2]);var inst_21056__$1 = cljs.core.nth.call(null,inst_21055__$1,0,null);var inst_21057 = cljs.core.nth.call(null,inst_21055__$1,1,null);var inst_21058 = (inst_21056__$1 == null);var state_21076__$1 = (function (){var statearr_21078 = state_21076;(statearr_21078[7] = inst_21056__$1);
(statearr_21078[8] = inst_21055__$1);
(statearr_21078[9] = inst_21057);
return statearr_21078;
})();if(cljs.core.truth_(inst_21058))
{var statearr_21079_21101 = state_21076__$1;(statearr_21079_21101[1] = 8);
} else
{var statearr_21080_21102 = state_21076__$1;(statearr_21080_21102[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21077 === 1))
{var inst_21047 = cljs.core.vec.call(null,chs);var inst_21048 = inst_21047;var state_21076__$1 = (function (){var statearr_21081 = state_21076;(statearr_21081[10] = inst_21048);
return statearr_21081;
})();var statearr_21082_21103 = state_21076__$1;(statearr_21082_21103[2] = null);
(statearr_21082_21103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21077 === 4))
{var inst_21048 = (state_21076[10]);var state_21076__$1 = state_21076;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21076__$1,7,inst_21048);
} else
{if((state_val_21077 === 6))
{var inst_21072 = (state_21076[2]);var state_21076__$1 = state_21076;var statearr_21083_21104 = state_21076__$1;(statearr_21083_21104[2] = inst_21072);
(statearr_21083_21104[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21077 === 3))
{var inst_21074 = (state_21076[2]);var state_21076__$1 = state_21076;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21076__$1,inst_21074);
} else
{if((state_val_21077 === 2))
{var inst_21048 = (state_21076[10]);var inst_21050 = cljs.core.count.call(null,inst_21048);var inst_21051 = (inst_21050 > 0);var state_21076__$1 = state_21076;if(cljs.core.truth_(inst_21051))
{var statearr_21085_21105 = state_21076__$1;(statearr_21085_21105[1] = 4);
} else
{var statearr_21086_21106 = state_21076__$1;(statearr_21086_21106[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21077 === 11))
{var inst_21048 = (state_21076[10]);var inst_21065 = (state_21076[2]);var tmp21084 = inst_21048;var inst_21048__$1 = tmp21084;var state_21076__$1 = (function (){var statearr_21087 = state_21076;(statearr_21087[11] = inst_21065);
(statearr_21087[10] = inst_21048__$1);
return statearr_21087;
})();var statearr_21088_21107 = state_21076__$1;(statearr_21088_21107[2] = null);
(statearr_21088_21107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21077 === 9))
{var inst_21056 = (state_21076[7]);var state_21076__$1 = state_21076;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21076__$1,11,out,inst_21056);
} else
{if((state_val_21077 === 5))
{var inst_21070 = cljs.core.async.close_BANG_.call(null,out);var state_21076__$1 = state_21076;var statearr_21089_21108 = state_21076__$1;(statearr_21089_21108[2] = inst_21070);
(statearr_21089_21108[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21077 === 10))
{var inst_21068 = (state_21076[2]);var state_21076__$1 = state_21076;var statearr_21090_21109 = state_21076__$1;(statearr_21090_21109[2] = inst_21068);
(statearr_21090_21109[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21077 === 8))
{var inst_21056 = (state_21076[7]);var inst_21055 = (state_21076[8]);var inst_21057 = (state_21076[9]);var inst_21048 = (state_21076[10]);var inst_21060 = (function (){var c = inst_21057;var v = inst_21056;var vec__21053 = inst_21055;var cs = inst_21048;return ((function (c,v,vec__21053,cs,inst_21056,inst_21055,inst_21057,inst_21048,state_val_21077,c__14088__auto___21100,out){
return (function (p1__20993_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20993_SHARP_);
});
;})(c,v,vec__21053,cs,inst_21056,inst_21055,inst_21057,inst_21048,state_val_21077,c__14088__auto___21100,out))
})();var inst_21061 = cljs.core.filterv.call(null,inst_21060,inst_21048);var inst_21048__$1 = inst_21061;var state_21076__$1 = (function (){var statearr_21091 = state_21076;(statearr_21091[10] = inst_21048__$1);
return statearr_21091;
})();var statearr_21092_21110 = state_21076__$1;(statearr_21092_21110[2] = null);
(statearr_21092_21110[1] = 2);
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
}
});})(c__14088__auto___21100,out))
;return ((function (switch__14023__auto__,c__14088__auto___21100,out){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_21096 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21096[0] = state_machine__14024__auto__);
(statearr_21096[1] = 1);
return statearr_21096;
});
var state_machine__14024__auto____1 = (function (state_21076){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_21076);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e21097){if((e21097 instanceof Object))
{var ex__14027__auto__ = e21097;var statearr_21098_21111 = state_21076;(statearr_21098_21111[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21076);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21112 = state_21076;
state_21076 = G__21112;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_21076){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_21076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___21100,out))
})();var state__14090__auto__ = (function (){var statearr_21099 = f__14089__auto__.call(null);(statearr_21099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___21100);
return statearr_21099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___21100,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14088__auto___21205 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___21205,out){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___21205,out){
return (function (state_21182){var state_val_21183 = (state_21182[1]);if((state_val_21183 === 7))
{var inst_21164 = (state_21182[7]);var inst_21164__$1 = (state_21182[2]);var inst_21165 = (inst_21164__$1 == null);var inst_21166 = cljs.core.not.call(null,inst_21165);var state_21182__$1 = (function (){var statearr_21184 = state_21182;(statearr_21184[7] = inst_21164__$1);
return statearr_21184;
})();if(inst_21166)
{var statearr_21185_21206 = state_21182__$1;(statearr_21185_21206[1] = 8);
} else
{var statearr_21186_21207 = state_21182__$1;(statearr_21186_21207[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21183 === 1))
{var inst_21159 = 0;var state_21182__$1 = (function (){var statearr_21187 = state_21182;(statearr_21187[8] = inst_21159);
return statearr_21187;
})();var statearr_21188_21208 = state_21182__$1;(statearr_21188_21208[2] = null);
(statearr_21188_21208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21183 === 4))
{var state_21182__$1 = state_21182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21182__$1,7,ch);
} else
{if((state_val_21183 === 6))
{var inst_21177 = (state_21182[2]);var state_21182__$1 = state_21182;var statearr_21189_21209 = state_21182__$1;(statearr_21189_21209[2] = inst_21177);
(statearr_21189_21209[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21183 === 3))
{var inst_21179 = (state_21182[2]);var inst_21180 = cljs.core.async.close_BANG_.call(null,out);var state_21182__$1 = (function (){var statearr_21190 = state_21182;(statearr_21190[9] = inst_21179);
return statearr_21190;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21182__$1,inst_21180);
} else
{if((state_val_21183 === 2))
{var inst_21159 = (state_21182[8]);var inst_21161 = (inst_21159 < n);var state_21182__$1 = state_21182;if(cljs.core.truth_(inst_21161))
{var statearr_21191_21210 = state_21182__$1;(statearr_21191_21210[1] = 4);
} else
{var statearr_21192_21211 = state_21182__$1;(statearr_21192_21211[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21183 === 11))
{var inst_21159 = (state_21182[8]);var inst_21169 = (state_21182[2]);var inst_21170 = (inst_21159 + 1);var inst_21159__$1 = inst_21170;var state_21182__$1 = (function (){var statearr_21193 = state_21182;(statearr_21193[8] = inst_21159__$1);
(statearr_21193[10] = inst_21169);
return statearr_21193;
})();var statearr_21194_21212 = state_21182__$1;(statearr_21194_21212[2] = null);
(statearr_21194_21212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21183 === 9))
{var state_21182__$1 = state_21182;var statearr_21195_21213 = state_21182__$1;(statearr_21195_21213[2] = null);
(statearr_21195_21213[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21183 === 5))
{var state_21182__$1 = state_21182;var statearr_21196_21214 = state_21182__$1;(statearr_21196_21214[2] = null);
(statearr_21196_21214[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21183 === 10))
{var inst_21174 = (state_21182[2]);var state_21182__$1 = state_21182;var statearr_21197_21215 = state_21182__$1;(statearr_21197_21215[2] = inst_21174);
(statearr_21197_21215[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21183 === 8))
{var inst_21164 = (state_21182[7]);var state_21182__$1 = state_21182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21182__$1,11,out,inst_21164);
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
}
});})(c__14088__auto___21205,out))
;return ((function (switch__14023__auto__,c__14088__auto___21205,out){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_21201 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21201[0] = state_machine__14024__auto__);
(statearr_21201[1] = 1);
return statearr_21201;
});
var state_machine__14024__auto____1 = (function (state_21182){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_21182);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e21202){if((e21202 instanceof Object))
{var ex__14027__auto__ = e21202;var statearr_21203_21216 = state_21182;(statearr_21203_21216[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21217 = state_21182;
state_21182 = G__21217;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_21182){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_21182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___21205,out))
})();var state__14090__auto__ = (function (){var statearr_21204 = f__14089__auto__.call(null);(statearr_21204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___21205);
return statearr_21204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___21205,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14088__auto___21314 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___21314,out){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___21314,out){
return (function (state_21289){var state_val_21290 = (state_21289[1]);if((state_val_21290 === 7))
{var inst_21284 = (state_21289[2]);var state_21289__$1 = state_21289;var statearr_21291_21315 = state_21289__$1;(statearr_21291_21315[2] = inst_21284);
(statearr_21291_21315[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21290 === 1))
{var inst_21266 = null;var state_21289__$1 = (function (){var statearr_21292 = state_21289;(statearr_21292[7] = inst_21266);
return statearr_21292;
})();var statearr_21293_21316 = state_21289__$1;(statearr_21293_21316[2] = null);
(statearr_21293_21316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21290 === 4))
{var inst_21269 = (state_21289[8]);var inst_21269__$1 = (state_21289[2]);var inst_21270 = (inst_21269__$1 == null);var inst_21271 = cljs.core.not.call(null,inst_21270);var state_21289__$1 = (function (){var statearr_21294 = state_21289;(statearr_21294[8] = inst_21269__$1);
return statearr_21294;
})();if(inst_21271)
{var statearr_21295_21317 = state_21289__$1;(statearr_21295_21317[1] = 5);
} else
{var statearr_21296_21318 = state_21289__$1;(statearr_21296_21318[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21290 === 6))
{var state_21289__$1 = state_21289;var statearr_21297_21319 = state_21289__$1;(statearr_21297_21319[2] = null);
(statearr_21297_21319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21290 === 3))
{var inst_21286 = (state_21289[2]);var inst_21287 = cljs.core.async.close_BANG_.call(null,out);var state_21289__$1 = (function (){var statearr_21298 = state_21289;(statearr_21298[9] = inst_21286);
return statearr_21298;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21289__$1,inst_21287);
} else
{if((state_val_21290 === 2))
{var state_21289__$1 = state_21289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21289__$1,4,ch);
} else
{if((state_val_21290 === 11))
{var inst_21269 = (state_21289[8]);var inst_21278 = (state_21289[2]);var inst_21266 = inst_21269;var state_21289__$1 = (function (){var statearr_21299 = state_21289;(statearr_21299[7] = inst_21266);
(statearr_21299[10] = inst_21278);
return statearr_21299;
})();var statearr_21300_21320 = state_21289__$1;(statearr_21300_21320[2] = null);
(statearr_21300_21320[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21290 === 9))
{var inst_21269 = (state_21289[8]);var state_21289__$1 = state_21289;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21289__$1,11,out,inst_21269);
} else
{if((state_val_21290 === 5))
{var inst_21269 = (state_21289[8]);var inst_21266 = (state_21289[7]);var inst_21273 = cljs.core._EQ_.call(null,inst_21269,inst_21266);var state_21289__$1 = state_21289;if(inst_21273)
{var statearr_21302_21321 = state_21289__$1;(statearr_21302_21321[1] = 8);
} else
{var statearr_21303_21322 = state_21289__$1;(statearr_21303_21322[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21290 === 10))
{var inst_21281 = (state_21289[2]);var state_21289__$1 = state_21289;var statearr_21304_21323 = state_21289__$1;(statearr_21304_21323[2] = inst_21281);
(statearr_21304_21323[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21290 === 8))
{var inst_21266 = (state_21289[7]);var tmp21301 = inst_21266;var inst_21266__$1 = tmp21301;var state_21289__$1 = (function (){var statearr_21305 = state_21289;(statearr_21305[7] = inst_21266__$1);
return statearr_21305;
})();var statearr_21306_21324 = state_21289__$1;(statearr_21306_21324[2] = null);
(statearr_21306_21324[1] = 2);
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
}
});})(c__14088__auto___21314,out))
;return ((function (switch__14023__auto__,c__14088__auto___21314,out){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_21310 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21310[0] = state_machine__14024__auto__);
(statearr_21310[1] = 1);
return statearr_21310;
});
var state_machine__14024__auto____1 = (function (state_21289){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_21289);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e21311){if((e21311 instanceof Object))
{var ex__14027__auto__ = e21311;var statearr_21312_21325 = state_21289;(statearr_21312_21325[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21289);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21326 = state_21289;
state_21289 = G__21326;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_21289){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_21289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___21314,out))
})();var state__14090__auto__ = (function (){var statearr_21313 = f__14089__auto__.call(null);(statearr_21313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___21314);
return statearr_21313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___21314,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14088__auto___21461 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___21461,out){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___21461,out){
return (function (state_21431){var state_val_21432 = (state_21431[1]);if((state_val_21432 === 7))
{var inst_21427 = (state_21431[2]);var state_21431__$1 = state_21431;var statearr_21433_21462 = state_21431__$1;(statearr_21433_21462[2] = inst_21427);
(statearr_21433_21462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 1))
{var inst_21394 = (new Array(n));var inst_21395 = inst_21394;var inst_21396 = 0;var state_21431__$1 = (function (){var statearr_21434 = state_21431;(statearr_21434[7] = inst_21395);
(statearr_21434[8] = inst_21396);
return statearr_21434;
})();var statearr_21435_21463 = state_21431__$1;(statearr_21435_21463[2] = null);
(statearr_21435_21463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 4))
{var inst_21399 = (state_21431[9]);var inst_21399__$1 = (state_21431[2]);var inst_21400 = (inst_21399__$1 == null);var inst_21401 = cljs.core.not.call(null,inst_21400);var state_21431__$1 = (function (){var statearr_21436 = state_21431;(statearr_21436[9] = inst_21399__$1);
return statearr_21436;
})();if(inst_21401)
{var statearr_21437_21464 = state_21431__$1;(statearr_21437_21464[1] = 5);
} else
{var statearr_21438_21465 = state_21431__$1;(statearr_21438_21465[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 15))
{var inst_21421 = (state_21431[2]);var state_21431__$1 = state_21431;var statearr_21439_21466 = state_21431__$1;(statearr_21439_21466[2] = inst_21421);
(statearr_21439_21466[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 13))
{var state_21431__$1 = state_21431;var statearr_21440_21467 = state_21431__$1;(statearr_21440_21467[2] = null);
(statearr_21440_21467[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 6))
{var inst_21396 = (state_21431[8]);var inst_21417 = (inst_21396 > 0);var state_21431__$1 = state_21431;if(cljs.core.truth_(inst_21417))
{var statearr_21441_21468 = state_21431__$1;(statearr_21441_21468[1] = 12);
} else
{var statearr_21442_21469 = state_21431__$1;(statearr_21442_21469[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 3))
{var inst_21429 = (state_21431[2]);var state_21431__$1 = state_21431;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21431__$1,inst_21429);
} else
{if((state_val_21432 === 12))
{var inst_21395 = (state_21431[7]);var inst_21419 = cljs.core.vec.call(null,inst_21395);var state_21431__$1 = state_21431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21431__$1,15,out,inst_21419);
} else
{if((state_val_21432 === 2))
{var state_21431__$1 = state_21431;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21431__$1,4,ch);
} else
{if((state_val_21432 === 11))
{var inst_21411 = (state_21431[2]);var inst_21412 = (new Array(n));var inst_21395 = inst_21412;var inst_21396 = 0;var state_21431__$1 = (function (){var statearr_21443 = state_21431;(statearr_21443[10] = inst_21411);
(statearr_21443[7] = inst_21395);
(statearr_21443[8] = inst_21396);
return statearr_21443;
})();var statearr_21444_21470 = state_21431__$1;(statearr_21444_21470[2] = null);
(statearr_21444_21470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 9))
{var inst_21395 = (state_21431[7]);var inst_21409 = cljs.core.vec.call(null,inst_21395);var state_21431__$1 = state_21431;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21431__$1,11,out,inst_21409);
} else
{if((state_val_21432 === 5))
{var inst_21399 = (state_21431[9]);var inst_21404 = (state_21431[11]);var inst_21395 = (state_21431[7]);var inst_21396 = (state_21431[8]);var inst_21403 = (inst_21395[inst_21396] = inst_21399);var inst_21404__$1 = (inst_21396 + 1);var inst_21405 = (inst_21404__$1 < n);var state_21431__$1 = (function (){var statearr_21445 = state_21431;(statearr_21445[11] = inst_21404__$1);
(statearr_21445[12] = inst_21403);
return statearr_21445;
})();if(cljs.core.truth_(inst_21405))
{var statearr_21446_21471 = state_21431__$1;(statearr_21446_21471[1] = 8);
} else
{var statearr_21447_21472 = state_21431__$1;(statearr_21447_21472[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 14))
{var inst_21424 = (state_21431[2]);var inst_21425 = cljs.core.async.close_BANG_.call(null,out);var state_21431__$1 = (function (){var statearr_21449 = state_21431;(statearr_21449[13] = inst_21424);
return statearr_21449;
})();var statearr_21450_21473 = state_21431__$1;(statearr_21450_21473[2] = inst_21425);
(statearr_21450_21473[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 10))
{var inst_21415 = (state_21431[2]);var state_21431__$1 = state_21431;var statearr_21451_21474 = state_21431__$1;(statearr_21451_21474[2] = inst_21415);
(statearr_21451_21474[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21432 === 8))
{var inst_21404 = (state_21431[11]);var inst_21395 = (state_21431[7]);var tmp21448 = inst_21395;var inst_21395__$1 = tmp21448;var inst_21396 = inst_21404;var state_21431__$1 = (function (){var statearr_21452 = state_21431;(statearr_21452[7] = inst_21395__$1);
(statearr_21452[8] = inst_21396);
return statearr_21452;
})();var statearr_21453_21475 = state_21431__$1;(statearr_21453_21475[2] = null);
(statearr_21453_21475[1] = 2);
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
}
}
}
}
}
});})(c__14088__auto___21461,out))
;return ((function (switch__14023__auto__,c__14088__auto___21461,out){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_21457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21457[0] = state_machine__14024__auto__);
(statearr_21457[1] = 1);
return statearr_21457;
});
var state_machine__14024__auto____1 = (function (state_21431){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_21431);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e21458){if((e21458 instanceof Object))
{var ex__14027__auto__ = e21458;var statearr_21459_21476 = state_21431;(statearr_21459_21476[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21431);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21477 = state_21431;
state_21431 = G__21477;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_21431){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_21431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___21461,out))
})();var state__14090__auto__ = (function (){var statearr_21460 = f__14089__auto__.call(null);(statearr_21460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___21461);
return statearr_21460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___21461,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14088__auto___21620 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__14088__auto___21620,out){
return (function (){var f__14089__auto__ = (function (){var switch__14023__auto__ = ((function (c__14088__auto___21620,out){
return (function (state_21590){var state_val_21591 = (state_21590[1]);if((state_val_21591 === 7))
{var inst_21586 = (state_21590[2]);var state_21590__$1 = state_21590;var statearr_21592_21621 = state_21590__$1;(statearr_21592_21621[2] = inst_21586);
(statearr_21592_21621[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21591 === 1))
{var inst_21549 = [];var inst_21550 = inst_21549;var inst_21551 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_21590__$1 = (function (){var statearr_21593 = state_21590;(statearr_21593[7] = inst_21550);
(statearr_21593[8] = inst_21551);
return statearr_21593;
})();var statearr_21594_21622 = state_21590__$1;(statearr_21594_21622[2] = null);
(statearr_21594_21622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21591 === 4))
{var inst_21554 = (state_21590[9]);var inst_21554__$1 = (state_21590[2]);var inst_21555 = (inst_21554__$1 == null);var inst_21556 = cljs.core.not.call(null,inst_21555);var state_21590__$1 = (function (){var statearr_21595 = state_21590;(statearr_21595[9] = inst_21554__$1);
return statearr_21595;
})();if(inst_21556)
{var statearr_21596_21623 = state_21590__$1;(statearr_21596_21623[1] = 5);
} else
{var statearr_21597_21624 = state_21590__$1;(statearr_21597_21624[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21591 === 15))
{var inst_21580 = (state_21590[2]);var state_21590__$1 = state_21590;var statearr_21598_21625 = state_21590__$1;(statearr_21598_21625[2] = inst_21580);
(statearr_21598_21625[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21591 === 13))
{var state_21590__$1 = state_21590;var statearr_21599_21626 = state_21590__$1;(statearr_21599_21626[2] = null);
(statearr_21599_21626[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21591 === 6))
{var inst_21550 = (state_21590[7]);var inst_21575 = inst_21550.length;var inst_21576 = (inst_21575 > 0);var state_21590__$1 = state_21590;if(cljs.core.truth_(inst_21576))
{var statearr_21600_21627 = state_21590__$1;(statearr_21600_21627[1] = 12);
} else
{var statearr_21601_21628 = state_21590__$1;(statearr_21601_21628[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21591 === 3))
{var inst_21588 = (state_21590[2]);var state_21590__$1 = state_21590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21590__$1,inst_21588);
} else
{if((state_val_21591 === 12))
{var inst_21550 = (state_21590[7]);var inst_21578 = cljs.core.vec.call(null,inst_21550);var state_21590__$1 = state_21590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21590__$1,15,out,inst_21578);
} else
{if((state_val_21591 === 2))
{var state_21590__$1 = state_21590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21590__$1,4,ch);
} else
{if((state_val_21591 === 11))
{var inst_21558 = (state_21590[10]);var inst_21554 = (state_21590[9]);var inst_21568 = (state_21590[2]);var inst_21569 = [];var inst_21570 = inst_21569.push(inst_21554);var inst_21550 = inst_21569;var inst_21551 = inst_21558;var state_21590__$1 = (function (){var statearr_21602 = state_21590;(statearr_21602[7] = inst_21550);
(statearr_21602[11] = inst_21568);
(statearr_21602[12] = inst_21570);
(statearr_21602[8] = inst_21551);
return statearr_21602;
})();var statearr_21603_21629 = state_21590__$1;(statearr_21603_21629[2] = null);
(statearr_21603_21629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21591 === 9))
{var inst_21550 = (state_21590[7]);var inst_21566 = cljs.core.vec.call(null,inst_21550);var state_21590__$1 = state_21590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21590__$1,11,out,inst_21566);
} else
{if((state_val_21591 === 5))
{var inst_21558 = (state_21590[10]);var inst_21551 = (state_21590[8]);var inst_21554 = (state_21590[9]);var inst_21558__$1 = f.call(null,inst_21554);var inst_21559 = cljs.core._EQ_.call(null,inst_21558__$1,inst_21551);var inst_21560 = cljs.core.keyword_identical_QMARK_.call(null,inst_21551,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_21561 = (inst_21559) || (inst_21560);var state_21590__$1 = (function (){var statearr_21604 = state_21590;(statearr_21604[10] = inst_21558__$1);
return statearr_21604;
})();if(cljs.core.truth_(inst_21561))
{var statearr_21605_21630 = state_21590__$1;(statearr_21605_21630[1] = 8);
} else
{var statearr_21606_21631 = state_21590__$1;(statearr_21606_21631[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21591 === 14))
{var inst_21583 = (state_21590[2]);var inst_21584 = cljs.core.async.close_BANG_.call(null,out);var state_21590__$1 = (function (){var statearr_21608 = state_21590;(statearr_21608[13] = inst_21583);
return statearr_21608;
})();var statearr_21609_21632 = state_21590__$1;(statearr_21609_21632[2] = inst_21584);
(statearr_21609_21632[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21591 === 10))
{var inst_21573 = (state_21590[2]);var state_21590__$1 = state_21590;var statearr_21610_21633 = state_21590__$1;(statearr_21610_21633[2] = inst_21573);
(statearr_21610_21633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21591 === 8))
{var inst_21550 = (state_21590[7]);var inst_21558 = (state_21590[10]);var inst_21554 = (state_21590[9]);var inst_21563 = inst_21550.push(inst_21554);var tmp21607 = inst_21550;var inst_21550__$1 = tmp21607;var inst_21551 = inst_21558;var state_21590__$1 = (function (){var statearr_21611 = state_21590;(statearr_21611[7] = inst_21550__$1);
(statearr_21611[8] = inst_21551);
(statearr_21611[14] = inst_21563);
return statearr_21611;
})();var statearr_21612_21634 = state_21590__$1;(statearr_21612_21634[2] = null);
(statearr_21612_21634[1] = 2);
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
}
}
}
}
}
});})(c__14088__auto___21620,out))
;return ((function (switch__14023__auto__,c__14088__auto___21620,out){
return (function() {
var state_machine__14024__auto__ = null;
var state_machine__14024__auto____0 = (function (){var statearr_21616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21616[0] = state_machine__14024__auto__);
(statearr_21616[1] = 1);
return statearr_21616;
});
var state_machine__14024__auto____1 = (function (state_21590){while(true){
var ret_value__14025__auto__ = (function (){try{while(true){
var result__14026__auto__ = switch__14023__auto__.call(null,state_21590);if(cljs.core.keyword_identical_QMARK_.call(null,result__14026__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14026__auto__;
}
break;
}
}catch (e21617){if((e21617 instanceof Object))
{var ex__14027__auto__ = e21617;var statearr_21618_21635 = state_21590;(statearr_21618_21635[5] = ex__14027__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21590);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14025__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21636 = state_21590;
state_21590 = G__21636;
continue;
}
} else
{return ret_value__14025__auto__;
}
break;
}
});
state_machine__14024__auto__ = function(state_21590){
switch(arguments.length){
case 0:
return state_machine__14024__auto____0.call(this);
case 1:
return state_machine__14024__auto____1.call(this,state_21590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14024__auto____0;
state_machine__14024__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14024__auto____1;
return state_machine__14024__auto__;
})()
;})(switch__14023__auto__,c__14088__auto___21620,out))
})();var state__14090__auto__ = (function (){var statearr_21619 = f__14089__auto__.call(null);(statearr_21619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___21620);
return statearr_21619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14090__auto__);
});})(c__14088__auto___21620,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
