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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23052 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23052 = (function (f,fn_handler,meta23053){
this.f = f;
this.fn_handler = fn_handler;
this.meta23053 = meta23053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23052.cljs$lang$type = true;
cljs.core.async.t23052.cljs$lang$ctorStr = "cljs.core.async/t23052";
cljs.core.async.t23052.cljs$lang$ctorPrWriter = (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.core.async/t23052");
});
cljs.core.async.t23052.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23054){var self__ = this;
var _23054__$1 = this;return self__.meta23053;
});
cljs.core.async.t23052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23054,meta23053__$1){var self__ = this;
var _23054__$1 = this;return (new cljs.core.async.t23052(self__.f,self__.fn_handler,meta23053__$1));
});
cljs.core.async.__GT_t23052 = (function __GT_t23052(f__$1,fn_handler__$1,meta23053){return (new cljs.core.async.t23052(f__$1,fn_handler__$1,meta23053));
});
}
return (new cljs.core.async.t23052(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23056 = buff;if(G__23056)
{var bit__9312__auto__ = null;if(cljs.core.truth_((function (){var or__8662__auto__ = bit__9312__auto__;if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return G__23056.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23056.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23056);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23056);
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
{var val_23057 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23057);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23057,ret){
return (function (){return fn1.call(null,val_23057);
});})(val_23057,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9518__auto___23058 = n;var x_23059 = 0;while(true){
if((x_23059 < n__9518__auto___23058))
{(a[x_23059] = 0);
{
var G__23060 = (x_23059 + 1);
x_23059 = G__23060;
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
var G__23061 = (i + 1);
i = G__23061;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23065 = (function (flag,alt_flag,meta23066){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23066 = meta23066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23065.cljs$lang$type = true;
cljs.core.async.t23065.cljs$lang$ctorStr = "cljs.core.async/t23065";
cljs.core.async.t23065.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.core.async/t23065");
});})(flag))
;
cljs.core.async.t23065.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23067){var self__ = this;
var _23067__$1 = this;return self__.meta23066;
});})(flag))
;
cljs.core.async.t23065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23067,meta23066__$1){var self__ = this;
var _23067__$1 = this;return (new cljs.core.async.t23065(self__.flag,self__.alt_flag,meta23066__$1));
});})(flag))
;
cljs.core.async.__GT_t23065 = ((function (flag){
return (function __GT_t23065(flag__$1,alt_flag__$1,meta23066){return (new cljs.core.async.t23065(flag__$1,alt_flag__$1,meta23066));
});})(flag))
;
}
return (new cljs.core.async.t23065(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23071 = (function (cb,flag,alt_handler,meta23072){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23072 = meta23072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23071.cljs$lang$type = true;
cljs.core.async.t23071.cljs$lang$ctorStr = "cljs.core.async/t23071";
cljs.core.async.t23071.cljs$lang$ctorPrWriter = (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.core.async/t23071");
});
cljs.core.async.t23071.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23073){var self__ = this;
var _23073__$1 = this;return self__.meta23072;
});
cljs.core.async.t23071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23073,meta23072__$1){var self__ = this;
var _23073__$1 = this;return (new cljs.core.async.t23071(self__.cb,self__.flag,self__.alt_handler,meta23072__$1));
});
cljs.core.async.__GT_t23071 = (function __GT_t23071(cb__$1,flag__$1,alt_handler__$1,meta23072){return (new cljs.core.async.t23071(cb__$1,flag__$1,alt_handler__$1,meta23072));
});
}
return (new cljs.core.async.t23071(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23074_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23074_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23075_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23075_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8662__auto__ = wport;if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23076 = (i + 1);
i = G__23076;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8662__auto__ = ret;if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__8650__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8650__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8650__auto__;
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
var alts_BANG___delegate = function (ports,p__23077){var map__23079 = p__23077;var map__23079__$1 = ((cljs.core.seq_QMARK_.call(null,map__23079))?cljs.core.apply.call(null,cljs.core.hash_map,map__23079):map__23079);var opts = map__23079__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23077 = null;if (arguments.length > 1) {
  p__23077 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23077);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23080){
var ports = cljs.core.first(arglist__23080);
var p__23077 = cljs.core.rest(arglist__23080);
return alts_BANG___delegate(ports,p__23077);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23088 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23088 = (function (ch,f,map_LT_,meta23089){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23089 = meta23089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23088.cljs$lang$type = true;
cljs.core.async.t23088.cljs$lang$ctorStr = "cljs.core.async/t23088";
cljs.core.async.t23088.cljs$lang$ctorPrWriter = (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.core.async/t23088");
});
cljs.core.async.t23088.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23088.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t23088.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23088.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t23091 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23091 = (function (fn1,_,meta23089,ch,f,map_LT_,meta23092){
this.fn1 = fn1;
this._ = _;
this.meta23089 = meta23089;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23092 = meta23092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23091.cljs$lang$type = true;
cljs.core.async.t23091.cljs$lang$ctorStr = "cljs.core.async/t23091";
cljs.core.async.t23091.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.core.async/t23091");
});})(___$1))
;
cljs.core.async.t23091.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t23091.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t23091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__23081_SHARP_){return f1.call(null,(((p1__23081_SHARP_ == null))?null:self__.f.call(null,p1__23081_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t23091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23093){var self__ = this;
var _23093__$1 = this;return self__.meta23092;
});})(___$1))
;
cljs.core.async.t23091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23093,meta23092__$1){var self__ = this;
var _23093__$1 = this;return (new cljs.core.async.t23091(self__.fn1,self__._,self__.meta23089,self__.ch,self__.f,self__.map_LT_,meta23092__$1));
});})(___$1))
;
cljs.core.async.__GT_t23091 = ((function (___$1){
return (function __GT_t23091(fn1__$1,___$2,meta23089__$1,ch__$2,f__$2,map_LT___$2,meta23092){return (new cljs.core.async.t23091(fn1__$1,___$2,meta23089__$1,ch__$2,f__$2,map_LT___$2,meta23092));
});})(___$1))
;
}
return (new cljs.core.async.t23091(fn1,___$1,self__.meta23089,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8650__auto__ = ret;if(cljs.core.truth_(and__8650__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8650__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t23088.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23088.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23088.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23090){var self__ = this;
var _23090__$1 = this;return self__.meta23089;
});
cljs.core.async.t23088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23090,meta23089__$1){var self__ = this;
var _23090__$1 = this;return (new cljs.core.async.t23088(self__.ch,self__.f,self__.map_LT_,meta23089__$1));
});
cljs.core.async.__GT_t23088 = (function __GT_t23088(ch__$1,f__$1,map_LT___$1,meta23089){return (new cljs.core.async.t23088(ch__$1,f__$1,map_LT___$1,meta23089));
});
}
return (new cljs.core.async.t23088(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23097 = (function (ch,f,map_GT_,meta23098){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23098 = meta23098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23097.cljs$lang$type = true;
cljs.core.async.t23097.cljs$lang$ctorStr = "cljs.core.async/t23097";
cljs.core.async.t23097.cljs$lang$ctorPrWriter = (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.core.async/t23097");
});
cljs.core.async.t23097.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t23097.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23097.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23099){var self__ = this;
var _23099__$1 = this;return self__.meta23098;
});
cljs.core.async.t23097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23099,meta23098__$1){var self__ = this;
var _23099__$1 = this;return (new cljs.core.async.t23097(self__.ch,self__.f,self__.map_GT_,meta23098__$1));
});
cljs.core.async.__GT_t23097 = (function __GT_t23097(ch__$1,f__$1,map_GT___$1,meta23098){return (new cljs.core.async.t23097(ch__$1,f__$1,map_GT___$1,meta23098));
});
}
return (new cljs.core.async.t23097(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23103 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23103 = (function (ch,p,filter_GT_,meta23104){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23104 = meta23104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23103.cljs$lang$type = true;
cljs.core.async.t23103.cljs$lang$ctorStr = "cljs.core.async/t23103";
cljs.core.async.t23103.cljs$lang$ctorPrWriter = (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.core.async/t23103");
});
cljs.core.async.t23103.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t23103.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23103.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23103.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t23103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23105){var self__ = this;
var _23105__$1 = this;return self__.meta23104;
});
cljs.core.async.t23103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23105,meta23104__$1){var self__ = this;
var _23105__$1 = this;return (new cljs.core.async.t23103(self__.ch,self__.p,self__.filter_GT_,meta23104__$1));
});
cljs.core.async.__GT_t23103 = (function __GT_t23103(ch__$1,p__$1,filter_GT___$1,meta23104){return (new cljs.core.async.t23103(ch__$1,p__$1,filter_GT___$1,meta23104));
});
}
return (new cljs.core.async.t23103(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11799__auto___23188 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___23188,out){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___23188,out){
return (function (state_23167){var state_val_23168 = (state_23167[1]);if((state_val_23168 === 7))
{var inst_23163 = (state_23167[2]);var state_23167__$1 = state_23167;var statearr_23169_23189 = state_23167__$1;(statearr_23169_23189[2] = inst_23163);
(statearr_23169_23189[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23168 === 1))
{var state_23167__$1 = state_23167;var statearr_23170_23190 = state_23167__$1;(statearr_23170_23190[2] = null);
(statearr_23170_23190[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23168 === 4))
{var inst_23149 = (state_23167[7]);var inst_23149__$1 = (state_23167[2]);var inst_23150 = (inst_23149__$1 == null);var state_23167__$1 = (function (){var statearr_23171 = state_23167;(statearr_23171[7] = inst_23149__$1);
return statearr_23171;
})();if(cljs.core.truth_(inst_23150))
{var statearr_23172_23191 = state_23167__$1;(statearr_23172_23191[1] = 5);
} else
{var statearr_23173_23192 = state_23167__$1;(statearr_23173_23192[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23168 === 6))
{var inst_23149 = (state_23167[7]);var inst_23154 = p.call(null,inst_23149);var state_23167__$1 = state_23167;if(cljs.core.truth_(inst_23154))
{var statearr_23174_23193 = state_23167__$1;(statearr_23174_23193[1] = 8);
} else
{var statearr_23175_23194 = state_23167__$1;(statearr_23175_23194[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23168 === 3))
{var inst_23165 = (state_23167[2]);var state_23167__$1 = state_23167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23167__$1,inst_23165);
} else
{if((state_val_23168 === 2))
{var state_23167__$1 = state_23167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23167__$1,4,ch);
} else
{if((state_val_23168 === 11))
{var inst_23157 = (state_23167[2]);var state_23167__$1 = state_23167;var statearr_23176_23195 = state_23167__$1;(statearr_23176_23195[2] = inst_23157);
(statearr_23176_23195[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23168 === 9))
{var state_23167__$1 = state_23167;var statearr_23177_23196 = state_23167__$1;(statearr_23177_23196[2] = null);
(statearr_23177_23196[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23168 === 5))
{var inst_23152 = cljs.core.async.close_BANG_.call(null,out);var state_23167__$1 = state_23167;var statearr_23178_23197 = state_23167__$1;(statearr_23178_23197[2] = inst_23152);
(statearr_23178_23197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23168 === 10))
{var inst_23160 = (state_23167[2]);var state_23167__$1 = (function (){var statearr_23179 = state_23167;(statearr_23179[8] = inst_23160);
return statearr_23179;
})();var statearr_23180_23198 = state_23167__$1;(statearr_23180_23198[2] = null);
(statearr_23180_23198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23168 === 8))
{var inst_23149 = (state_23167[7]);var state_23167__$1 = state_23167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23167__$1,11,out,inst_23149);
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
});})(c__11799__auto___23188,out))
;return ((function (switch__11682__auto__,c__11799__auto___23188,out){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_23184 = [null,null,null,null,null,null,null,null,null];(statearr_23184[0] = state_machine__11683__auto__);
(statearr_23184[1] = 1);
return statearr_23184;
});
var state_machine__11683__auto____1 = (function (state_23167){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_23167);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e23185){if((e23185 instanceof Object))
{var ex__11686__auto__ = e23185;var statearr_23186_23199 = state_23167;(statearr_23186_23199[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23167);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23200 = state_23167;
state_23167 = G__23200;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_23167){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_23167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___23188,out))
})();var state__11801__auto__ = (function (){var statearr_23187 = f__11800__auto__.call(null);(statearr_23187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___23188);
return statearr_23187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___23188,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11799__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto__){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto__){
return (function (state_23366){var state_val_23367 = (state_23366[1]);if((state_val_23367 === 7))
{var inst_23362 = (state_23366[2]);var state_23366__$1 = state_23366;var statearr_23368_23409 = state_23366__$1;(statearr_23368_23409[2] = inst_23362);
(statearr_23368_23409[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 20))
{var inst_23332 = (state_23366[7]);var inst_23343 = (state_23366[2]);var inst_23344 = cljs.core.next.call(null,inst_23332);var inst_23318 = inst_23344;var inst_23319 = null;var inst_23320 = 0;var inst_23321 = 0;var state_23366__$1 = (function (){var statearr_23369 = state_23366;(statearr_23369[8] = inst_23320);
(statearr_23369[9] = inst_23321);
(statearr_23369[10] = inst_23318);
(statearr_23369[11] = inst_23343);
(statearr_23369[12] = inst_23319);
return statearr_23369;
})();var statearr_23370_23410 = state_23366__$1;(statearr_23370_23410[2] = null);
(statearr_23370_23410[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 1))
{var state_23366__$1 = state_23366;var statearr_23371_23411 = state_23366__$1;(statearr_23371_23411[2] = null);
(statearr_23371_23411[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 4))
{var inst_23307 = (state_23366[13]);var inst_23307__$1 = (state_23366[2]);var inst_23308 = (inst_23307__$1 == null);var state_23366__$1 = (function (){var statearr_23372 = state_23366;(statearr_23372[13] = inst_23307__$1);
return statearr_23372;
})();if(cljs.core.truth_(inst_23308))
{var statearr_23373_23412 = state_23366__$1;(statearr_23373_23412[1] = 5);
} else
{var statearr_23374_23413 = state_23366__$1;(statearr_23374_23413[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 15))
{var state_23366__$1 = state_23366;var statearr_23378_23414 = state_23366__$1;(statearr_23378_23414[2] = null);
(statearr_23378_23414[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 21))
{var state_23366__$1 = state_23366;var statearr_23379_23415 = state_23366__$1;(statearr_23379_23415[2] = null);
(statearr_23379_23415[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 13))
{var inst_23320 = (state_23366[8]);var inst_23321 = (state_23366[9]);var inst_23318 = (state_23366[10]);var inst_23319 = (state_23366[12]);var inst_23328 = (state_23366[2]);var inst_23329 = (inst_23321 + 1);var tmp23375 = inst_23320;var tmp23376 = inst_23318;var tmp23377 = inst_23319;var inst_23318__$1 = tmp23376;var inst_23319__$1 = tmp23377;var inst_23320__$1 = tmp23375;var inst_23321__$1 = inst_23329;var state_23366__$1 = (function (){var statearr_23380 = state_23366;(statearr_23380[8] = inst_23320__$1);
(statearr_23380[9] = inst_23321__$1);
(statearr_23380[10] = inst_23318__$1);
(statearr_23380[14] = inst_23328);
(statearr_23380[12] = inst_23319__$1);
return statearr_23380;
})();var statearr_23381_23416 = state_23366__$1;(statearr_23381_23416[2] = null);
(statearr_23381_23416[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 22))
{var state_23366__$1 = state_23366;var statearr_23382_23417 = state_23366__$1;(statearr_23382_23417[2] = null);
(statearr_23382_23417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 6))
{var inst_23307 = (state_23366[13]);var inst_23316 = f.call(null,inst_23307);var inst_23317 = cljs.core.seq.call(null,inst_23316);var inst_23318 = inst_23317;var inst_23319 = null;var inst_23320 = 0;var inst_23321 = 0;var state_23366__$1 = (function (){var statearr_23383 = state_23366;(statearr_23383[8] = inst_23320);
(statearr_23383[9] = inst_23321);
(statearr_23383[10] = inst_23318);
(statearr_23383[12] = inst_23319);
return statearr_23383;
})();var statearr_23384_23418 = state_23366__$1;(statearr_23384_23418[2] = null);
(statearr_23384_23418[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 17))
{var inst_23332 = (state_23366[7]);var inst_23336 = cljs.core.chunk_first.call(null,inst_23332);var inst_23337 = cljs.core.chunk_rest.call(null,inst_23332);var inst_23338 = cljs.core.count.call(null,inst_23336);var inst_23318 = inst_23337;var inst_23319 = inst_23336;var inst_23320 = inst_23338;var inst_23321 = 0;var state_23366__$1 = (function (){var statearr_23385 = state_23366;(statearr_23385[8] = inst_23320);
(statearr_23385[9] = inst_23321);
(statearr_23385[10] = inst_23318);
(statearr_23385[12] = inst_23319);
return statearr_23385;
})();var statearr_23386_23419 = state_23366__$1;(statearr_23386_23419[2] = null);
(statearr_23386_23419[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 3))
{var inst_23364 = (state_23366[2]);var state_23366__$1 = state_23366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23366__$1,inst_23364);
} else
{if((state_val_23367 === 12))
{var inst_23352 = (state_23366[2]);var state_23366__$1 = state_23366;var statearr_23387_23420 = state_23366__$1;(statearr_23387_23420[2] = inst_23352);
(statearr_23387_23420[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 2))
{var state_23366__$1 = state_23366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23366__$1,4,in$);
} else
{if((state_val_23367 === 23))
{var inst_23360 = (state_23366[2]);var state_23366__$1 = state_23366;var statearr_23388_23421 = state_23366__$1;(statearr_23388_23421[2] = inst_23360);
(statearr_23388_23421[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 19))
{var inst_23347 = (state_23366[2]);var state_23366__$1 = state_23366;var statearr_23389_23422 = state_23366__$1;(statearr_23389_23422[2] = inst_23347);
(statearr_23389_23422[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 11))
{var inst_23318 = (state_23366[10]);var inst_23332 = (state_23366[7]);var inst_23332__$1 = cljs.core.seq.call(null,inst_23318);var state_23366__$1 = (function (){var statearr_23390 = state_23366;(statearr_23390[7] = inst_23332__$1);
return statearr_23390;
})();if(inst_23332__$1)
{var statearr_23391_23423 = state_23366__$1;(statearr_23391_23423[1] = 14);
} else
{var statearr_23392_23424 = state_23366__$1;(statearr_23392_23424[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 9))
{var inst_23354 = (state_23366[2]);var inst_23355 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_23366__$1 = (function (){var statearr_23393 = state_23366;(statearr_23393[15] = inst_23354);
return statearr_23393;
})();if(cljs.core.truth_(inst_23355))
{var statearr_23394_23425 = state_23366__$1;(statearr_23394_23425[1] = 21);
} else
{var statearr_23395_23426 = state_23366__$1;(statearr_23395_23426[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 5))
{var inst_23310 = cljs.core.async.close_BANG_.call(null,out);var state_23366__$1 = state_23366;var statearr_23396_23427 = state_23366__$1;(statearr_23396_23427[2] = inst_23310);
(statearr_23396_23427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 14))
{var inst_23332 = (state_23366[7]);var inst_23334 = cljs.core.chunked_seq_QMARK_.call(null,inst_23332);var state_23366__$1 = state_23366;if(inst_23334)
{var statearr_23397_23428 = state_23366__$1;(statearr_23397_23428[1] = 17);
} else
{var statearr_23398_23429 = state_23366__$1;(statearr_23398_23429[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 16))
{var inst_23350 = (state_23366[2]);var state_23366__$1 = state_23366;var statearr_23399_23430 = state_23366__$1;(statearr_23399_23430[2] = inst_23350);
(statearr_23399_23430[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23367 === 10))
{var inst_23321 = (state_23366[9]);var inst_23319 = (state_23366[12]);var inst_23326 = cljs.core._nth.call(null,inst_23319,inst_23321);var state_23366__$1 = state_23366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23366__$1,13,out,inst_23326);
} else
{if((state_val_23367 === 18))
{var inst_23332 = (state_23366[7]);var inst_23341 = cljs.core.first.call(null,inst_23332);var state_23366__$1 = state_23366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23366__$1,20,out,inst_23341);
} else
{if((state_val_23367 === 8))
{var inst_23320 = (state_23366[8]);var inst_23321 = (state_23366[9]);var inst_23323 = (inst_23321 < inst_23320);var inst_23324 = inst_23323;var state_23366__$1 = state_23366;if(cljs.core.truth_(inst_23324))
{var statearr_23400_23431 = state_23366__$1;(statearr_23400_23431[1] = 10);
} else
{var statearr_23401_23432 = state_23366__$1;(statearr_23401_23432[1] = 11);
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
});})(c__11799__auto__))
;return ((function (switch__11682__auto__,c__11799__auto__){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_23405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23405[0] = state_machine__11683__auto__);
(statearr_23405[1] = 1);
return statearr_23405;
});
var state_machine__11683__auto____1 = (function (state_23366){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_23366);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e23406){if((e23406 instanceof Object))
{var ex__11686__auto__ = e23406;var statearr_23407_23433 = state_23366;(statearr_23407_23433[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23434 = state_23366;
state_23366 = G__23434;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_23366){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_23366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto__))
})();var state__11801__auto__ = (function (){var statearr_23408 = f__11800__auto__.call(null);(statearr_23408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto__);
return statearr_23408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto__))
);
return c__11799__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11799__auto___23529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___23529){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___23529){
return (function (state_23505){var state_val_23506 = (state_23505[1]);if((state_val_23506 === 7))
{var inst_23501 = (state_23505[2]);var state_23505__$1 = state_23505;var statearr_23507_23530 = state_23505__$1;(statearr_23507_23530[2] = inst_23501);
(statearr_23507_23530[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23506 === 1))
{var state_23505__$1 = state_23505;var statearr_23508_23531 = state_23505__$1;(statearr_23508_23531[2] = null);
(statearr_23508_23531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23506 === 4))
{var inst_23484 = (state_23505[7]);var inst_23484__$1 = (state_23505[2]);var inst_23485 = (inst_23484__$1 == null);var state_23505__$1 = (function (){var statearr_23509 = state_23505;(statearr_23509[7] = inst_23484__$1);
return statearr_23509;
})();if(cljs.core.truth_(inst_23485))
{var statearr_23510_23532 = state_23505__$1;(statearr_23510_23532[1] = 5);
} else
{var statearr_23511_23533 = state_23505__$1;(statearr_23511_23533[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23506 === 13))
{var state_23505__$1 = state_23505;var statearr_23512_23534 = state_23505__$1;(statearr_23512_23534[2] = null);
(statearr_23512_23534[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23506 === 6))
{var inst_23484 = (state_23505[7]);var state_23505__$1 = state_23505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23505__$1,11,to,inst_23484);
} else
{if((state_val_23506 === 3))
{var inst_23503 = (state_23505[2]);var state_23505__$1 = state_23505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23505__$1,inst_23503);
} else
{if((state_val_23506 === 12))
{var state_23505__$1 = state_23505;var statearr_23513_23535 = state_23505__$1;(statearr_23513_23535[2] = null);
(statearr_23513_23535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23506 === 2))
{var state_23505__$1 = state_23505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23505__$1,4,from);
} else
{if((state_val_23506 === 11))
{var inst_23494 = (state_23505[2]);var state_23505__$1 = state_23505;if(cljs.core.truth_(inst_23494))
{var statearr_23514_23536 = state_23505__$1;(statearr_23514_23536[1] = 12);
} else
{var statearr_23515_23537 = state_23505__$1;(statearr_23515_23537[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23506 === 9))
{var state_23505__$1 = state_23505;var statearr_23516_23538 = state_23505__$1;(statearr_23516_23538[2] = null);
(statearr_23516_23538[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23506 === 5))
{var state_23505__$1 = state_23505;if(cljs.core.truth_(close_QMARK_))
{var statearr_23517_23539 = state_23505__$1;(statearr_23517_23539[1] = 8);
} else
{var statearr_23518_23540 = state_23505__$1;(statearr_23518_23540[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23506 === 14))
{var inst_23499 = (state_23505[2]);var state_23505__$1 = state_23505;var statearr_23519_23541 = state_23505__$1;(statearr_23519_23541[2] = inst_23499);
(statearr_23519_23541[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23506 === 10))
{var inst_23491 = (state_23505[2]);var state_23505__$1 = state_23505;var statearr_23520_23542 = state_23505__$1;(statearr_23520_23542[2] = inst_23491);
(statearr_23520_23542[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23506 === 8))
{var inst_23488 = cljs.core.async.close_BANG_.call(null,to);var state_23505__$1 = state_23505;var statearr_23521_23543 = state_23505__$1;(statearr_23521_23543[2] = inst_23488);
(statearr_23521_23543[1] = 10);
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
});})(c__11799__auto___23529))
;return ((function (switch__11682__auto__,c__11799__auto___23529){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_23525 = [null,null,null,null,null,null,null,null];(statearr_23525[0] = state_machine__11683__auto__);
(statearr_23525[1] = 1);
return statearr_23525;
});
var state_machine__11683__auto____1 = (function (state_23505){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_23505);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e23526){if((e23526 instanceof Object))
{var ex__11686__auto__ = e23526;var statearr_23527_23544 = state_23505;(statearr_23527_23544[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23505);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23545 = state_23505;
state_23505 = G__23545;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_23505){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_23505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___23529))
})();var state__11801__auto__ = (function (){var statearr_23528 = f__11800__auto__.call(null);(statearr_23528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___23529);
return statearr_23528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___23529))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11799__auto___23646 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___23646,tc,fc){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___23646,tc,fc){
return (function (state_23621){var state_val_23622 = (state_23621[1]);if((state_val_23622 === 7))
{var inst_23617 = (state_23621[2]);var state_23621__$1 = state_23621;var statearr_23623_23647 = state_23621__$1;(statearr_23623_23647[2] = inst_23617);
(statearr_23623_23647[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23622 === 1))
{var state_23621__$1 = state_23621;var statearr_23624_23648 = state_23621__$1;(statearr_23624_23648[2] = null);
(statearr_23624_23648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23622 === 4))
{var inst_23598 = (state_23621[7]);var inst_23598__$1 = (state_23621[2]);var inst_23599 = (inst_23598__$1 == null);var state_23621__$1 = (function (){var statearr_23625 = state_23621;(statearr_23625[7] = inst_23598__$1);
return statearr_23625;
})();if(cljs.core.truth_(inst_23599))
{var statearr_23626_23649 = state_23621__$1;(statearr_23626_23649[1] = 5);
} else
{var statearr_23627_23650 = state_23621__$1;(statearr_23627_23650[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23622 === 13))
{var state_23621__$1 = state_23621;var statearr_23628_23651 = state_23621__$1;(statearr_23628_23651[2] = null);
(statearr_23628_23651[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23622 === 6))
{var inst_23598 = (state_23621[7]);var inst_23604 = p.call(null,inst_23598);var state_23621__$1 = state_23621;if(cljs.core.truth_(inst_23604))
{var statearr_23629_23652 = state_23621__$1;(statearr_23629_23652[1] = 9);
} else
{var statearr_23630_23653 = state_23621__$1;(statearr_23630_23653[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23622 === 3))
{var inst_23619 = (state_23621[2]);var state_23621__$1 = state_23621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23621__$1,inst_23619);
} else
{if((state_val_23622 === 12))
{var state_23621__$1 = state_23621;var statearr_23631_23654 = state_23621__$1;(statearr_23631_23654[2] = null);
(statearr_23631_23654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23622 === 2))
{var state_23621__$1 = state_23621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23621__$1,4,ch);
} else
{if((state_val_23622 === 11))
{var inst_23598 = (state_23621[7]);var inst_23608 = (state_23621[2]);var state_23621__$1 = state_23621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23621__$1,8,inst_23608,inst_23598);
} else
{if((state_val_23622 === 9))
{var state_23621__$1 = state_23621;var statearr_23632_23655 = state_23621__$1;(statearr_23632_23655[2] = tc);
(statearr_23632_23655[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23622 === 5))
{var inst_23601 = cljs.core.async.close_BANG_.call(null,tc);var inst_23602 = cljs.core.async.close_BANG_.call(null,fc);var state_23621__$1 = (function (){var statearr_23633 = state_23621;(statearr_23633[8] = inst_23601);
return statearr_23633;
})();var statearr_23634_23656 = state_23621__$1;(statearr_23634_23656[2] = inst_23602);
(statearr_23634_23656[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23622 === 14))
{var inst_23615 = (state_23621[2]);var state_23621__$1 = state_23621;var statearr_23635_23657 = state_23621__$1;(statearr_23635_23657[2] = inst_23615);
(statearr_23635_23657[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23622 === 10))
{var state_23621__$1 = state_23621;var statearr_23636_23658 = state_23621__$1;(statearr_23636_23658[2] = fc);
(statearr_23636_23658[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23622 === 8))
{var inst_23610 = (state_23621[2]);var state_23621__$1 = state_23621;if(cljs.core.truth_(inst_23610))
{var statearr_23637_23659 = state_23621__$1;(statearr_23637_23659[1] = 12);
} else
{var statearr_23638_23660 = state_23621__$1;(statearr_23638_23660[1] = 13);
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
});})(c__11799__auto___23646,tc,fc))
;return ((function (switch__11682__auto__,c__11799__auto___23646,tc,fc){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_23642 = [null,null,null,null,null,null,null,null,null];(statearr_23642[0] = state_machine__11683__auto__);
(statearr_23642[1] = 1);
return statearr_23642;
});
var state_machine__11683__auto____1 = (function (state_23621){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_23621);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e23643){if((e23643 instanceof Object))
{var ex__11686__auto__ = e23643;var statearr_23644_23661 = state_23621;(statearr_23644_23661[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23621);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23662 = state_23621;
state_23621 = G__23662;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_23621){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_23621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___23646,tc,fc))
})();var state__11801__auto__ = (function (){var statearr_23645 = f__11800__auto__.call(null);(statearr_23645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___23646);
return statearr_23645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___23646,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11799__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto__){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto__){
return (function (state_23709){var state_val_23710 = (state_23709[1]);if((state_val_23710 === 7))
{var inst_23705 = (state_23709[2]);var state_23709__$1 = state_23709;var statearr_23711_23727 = state_23709__$1;(statearr_23711_23727[2] = inst_23705);
(statearr_23711_23727[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23710 === 6))
{var inst_23695 = (state_23709[7]);var inst_23698 = (state_23709[8]);var inst_23702 = f.call(null,inst_23695,inst_23698);var inst_23695__$1 = inst_23702;var state_23709__$1 = (function (){var statearr_23712 = state_23709;(statearr_23712[7] = inst_23695__$1);
return statearr_23712;
})();var statearr_23713_23728 = state_23709__$1;(statearr_23713_23728[2] = null);
(statearr_23713_23728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23710 === 5))
{var inst_23695 = (state_23709[7]);var state_23709__$1 = state_23709;var statearr_23714_23729 = state_23709__$1;(statearr_23714_23729[2] = inst_23695);
(statearr_23714_23729[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23710 === 4))
{var inst_23698 = (state_23709[8]);var inst_23698__$1 = (state_23709[2]);var inst_23699 = (inst_23698__$1 == null);var state_23709__$1 = (function (){var statearr_23715 = state_23709;(statearr_23715[8] = inst_23698__$1);
return statearr_23715;
})();if(cljs.core.truth_(inst_23699))
{var statearr_23716_23730 = state_23709__$1;(statearr_23716_23730[1] = 5);
} else
{var statearr_23717_23731 = state_23709__$1;(statearr_23717_23731[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23710 === 3))
{var inst_23707 = (state_23709[2]);var state_23709__$1 = state_23709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23709__$1,inst_23707);
} else
{if((state_val_23710 === 2))
{var state_23709__$1 = state_23709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23709__$1,4,ch);
} else
{if((state_val_23710 === 1))
{var inst_23695 = init;var state_23709__$1 = (function (){var statearr_23718 = state_23709;(statearr_23718[7] = inst_23695);
return statearr_23718;
})();var statearr_23719_23732 = state_23709__$1;(statearr_23719_23732[2] = null);
(statearr_23719_23732[1] = 2);
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
});})(c__11799__auto__))
;return ((function (switch__11682__auto__,c__11799__auto__){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_23723 = [null,null,null,null,null,null,null,null,null];(statearr_23723[0] = state_machine__11683__auto__);
(statearr_23723[1] = 1);
return statearr_23723;
});
var state_machine__11683__auto____1 = (function (state_23709){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_23709);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e23724){if((e23724 instanceof Object))
{var ex__11686__auto__ = e23724;var statearr_23725_23733 = state_23709;(statearr_23725_23733[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23734 = state_23709;
state_23709 = G__23734;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_23709){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_23709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto__))
})();var state__11801__auto__ = (function (){var statearr_23726 = f__11800__auto__.call(null);(statearr_23726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto__);
return statearr_23726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto__))
);
return c__11799__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11799__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto__){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto__){
return (function (state_23808){var state_val_23809 = (state_23808[1]);if((state_val_23809 === 7))
{var inst_23790 = (state_23808[2]);var state_23808__$1 = state_23808;var statearr_23810_23833 = state_23808__$1;(statearr_23810_23833[2] = inst_23790);
(statearr_23810_23833[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23809 === 1))
{var inst_23784 = cljs.core.seq.call(null,coll);var inst_23785 = inst_23784;var state_23808__$1 = (function (){var statearr_23811 = state_23808;(statearr_23811[7] = inst_23785);
return statearr_23811;
})();var statearr_23812_23834 = state_23808__$1;(statearr_23812_23834[2] = null);
(statearr_23812_23834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23809 === 4))
{var inst_23785 = (state_23808[7]);var inst_23788 = cljs.core.first.call(null,inst_23785);var state_23808__$1 = state_23808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23808__$1,7,ch,inst_23788);
} else
{if((state_val_23809 === 13))
{var inst_23802 = (state_23808[2]);var state_23808__$1 = state_23808;var statearr_23813_23835 = state_23808__$1;(statearr_23813_23835[2] = inst_23802);
(statearr_23813_23835[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23809 === 6))
{var inst_23793 = (state_23808[2]);var state_23808__$1 = state_23808;if(cljs.core.truth_(inst_23793))
{var statearr_23814_23836 = state_23808__$1;(statearr_23814_23836[1] = 8);
} else
{var statearr_23815_23837 = state_23808__$1;(statearr_23815_23837[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23809 === 3))
{var inst_23806 = (state_23808[2]);var state_23808__$1 = state_23808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23808__$1,inst_23806);
} else
{if((state_val_23809 === 12))
{var state_23808__$1 = state_23808;var statearr_23816_23838 = state_23808__$1;(statearr_23816_23838[2] = null);
(statearr_23816_23838[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23809 === 2))
{var inst_23785 = (state_23808[7]);var state_23808__$1 = state_23808;if(cljs.core.truth_(inst_23785))
{var statearr_23817_23839 = state_23808__$1;(statearr_23817_23839[1] = 4);
} else
{var statearr_23818_23840 = state_23808__$1;(statearr_23818_23840[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23809 === 11))
{var inst_23799 = cljs.core.async.close_BANG_.call(null,ch);var state_23808__$1 = state_23808;var statearr_23819_23841 = state_23808__$1;(statearr_23819_23841[2] = inst_23799);
(statearr_23819_23841[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23809 === 9))
{var state_23808__$1 = state_23808;if(cljs.core.truth_(close_QMARK_))
{var statearr_23820_23842 = state_23808__$1;(statearr_23820_23842[1] = 11);
} else
{var statearr_23821_23843 = state_23808__$1;(statearr_23821_23843[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23809 === 5))
{var inst_23785 = (state_23808[7]);var state_23808__$1 = state_23808;var statearr_23822_23844 = state_23808__$1;(statearr_23822_23844[2] = inst_23785);
(statearr_23822_23844[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23809 === 10))
{var inst_23804 = (state_23808[2]);var state_23808__$1 = state_23808;var statearr_23823_23845 = state_23808__$1;(statearr_23823_23845[2] = inst_23804);
(statearr_23823_23845[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23809 === 8))
{var inst_23785 = (state_23808[7]);var inst_23795 = cljs.core.next.call(null,inst_23785);var inst_23785__$1 = inst_23795;var state_23808__$1 = (function (){var statearr_23824 = state_23808;(statearr_23824[7] = inst_23785__$1);
return statearr_23824;
})();var statearr_23825_23846 = state_23808__$1;(statearr_23825_23846[2] = null);
(statearr_23825_23846[1] = 2);
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
});})(c__11799__auto__))
;return ((function (switch__11682__auto__,c__11799__auto__){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_23829 = [null,null,null,null,null,null,null,null];(statearr_23829[0] = state_machine__11683__auto__);
(statearr_23829[1] = 1);
return statearr_23829;
});
var state_machine__11683__auto____1 = (function (state_23808){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_23808);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e23830){if((e23830 instanceof Object))
{var ex__11686__auto__ = e23830;var statearr_23831_23847 = state_23808;(statearr_23831_23847[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23848 = state_23808;
state_23808 = G__23848;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_23808){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_23808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto__))
})();var state__11801__auto__ = (function (){var statearr_23832 = f__11800__auto__.call(null);(statearr_23832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto__);
return statearr_23832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto__))
);
return c__11799__auto__;
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
cljs.core.async.Mux = (function (){var obj23850 = {};return obj23850;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8650__auto__ = _;if(and__8650__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8650__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9289__auto__ = (((_ == null))?null:_);return (function (){var or__8662__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj23852 = {};return obj23852;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8650__auto__ = m;if(and__8650__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8650__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9289__auto__ = (((m == null))?null:m);return (function (){var or__8662__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8650__auto__ = m;if(and__8650__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8650__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9289__auto__ = (((m == null))?null:m);return (function (){var or__8662__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8650__auto__ = m;if(and__8650__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8650__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9289__auto__ = (((m == null))?null:m);return (function (){var or__8662__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24074 = (function (cs,ch,mult,meta24075){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24075 = meta24075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24074.cljs$lang$type = true;
cljs.core.async.t24074.cljs$lang$ctorStr = "cljs.core.async/t24074";
cljs.core.async.t24074.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.core.async/t24074");
});})(cs))
;
cljs.core.async.t24074.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24074.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24074.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24074.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24074.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24076){var self__ = this;
var _24076__$1 = this;return self__.meta24075;
});})(cs))
;
cljs.core.async.t24074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24076,meta24075__$1){var self__ = this;
var _24076__$1 = this;return (new cljs.core.async.t24074(self__.cs,self__.ch,self__.mult,meta24075__$1));
});})(cs))
;
cljs.core.async.__GT_t24074 = ((function (cs){
return (function __GT_t24074(cs__$1,ch__$1,mult__$1,meta24075){return (new cljs.core.async.t24074(cs__$1,ch__$1,mult__$1,meta24075));
});})(cs))
;
}
return (new cljs.core.async.t24074(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11799__auto___24295 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___24295,cs,m,dchan,dctr,done){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___24295,cs,m,dchan,dctr,done){
return (function (state_24207){var state_val_24208 = (state_24207[1]);if((state_val_24208 === 7))
{var inst_24203 = (state_24207[2]);var state_24207__$1 = state_24207;var statearr_24209_24296 = state_24207__$1;(statearr_24209_24296[2] = inst_24203);
(statearr_24209_24296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 20))
{var inst_24108 = (state_24207[7]);var inst_24118 = cljs.core.first.call(null,inst_24108);var inst_24119 = cljs.core.nth.call(null,inst_24118,0,null);var inst_24120 = cljs.core.nth.call(null,inst_24118,1,null);var state_24207__$1 = (function (){var statearr_24210 = state_24207;(statearr_24210[8] = inst_24119);
return statearr_24210;
})();if(cljs.core.truth_(inst_24120))
{var statearr_24211_24297 = state_24207__$1;(statearr_24211_24297[1] = 22);
} else
{var statearr_24212_24298 = state_24207__$1;(statearr_24212_24298[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 27))
{var inst_24079 = (state_24207[9]);var inst_24155 = (state_24207[10]);var inst_24150 = (state_24207[11]);var inst_24148 = (state_24207[12]);var inst_24155__$1 = cljs.core._nth.call(null,inst_24148,inst_24150);var inst_24156 = cljs.core.async.put_BANG_.call(null,inst_24155__$1,inst_24079,done);var state_24207__$1 = (function (){var statearr_24213 = state_24207;(statearr_24213[10] = inst_24155__$1);
return statearr_24213;
})();if(cljs.core.truth_(inst_24156))
{var statearr_24214_24299 = state_24207__$1;(statearr_24214_24299[1] = 30);
} else
{var statearr_24215_24300 = state_24207__$1;(statearr_24215_24300[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 1))
{var state_24207__$1 = state_24207;var statearr_24216_24301 = state_24207__$1;(statearr_24216_24301[2] = null);
(statearr_24216_24301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 24))
{var inst_24108 = (state_24207[7]);var inst_24125 = (state_24207[2]);var inst_24126 = cljs.core.next.call(null,inst_24108);var inst_24088 = inst_24126;var inst_24089 = null;var inst_24090 = 0;var inst_24091 = 0;var state_24207__$1 = (function (){var statearr_24217 = state_24207;(statearr_24217[13] = inst_24089);
(statearr_24217[14] = inst_24091);
(statearr_24217[15] = inst_24090);
(statearr_24217[16] = inst_24125);
(statearr_24217[17] = inst_24088);
return statearr_24217;
})();var statearr_24218_24302 = state_24207__$1;(statearr_24218_24302[2] = null);
(statearr_24218_24302[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 39))
{var state_24207__$1 = state_24207;var statearr_24222_24303 = state_24207__$1;(statearr_24222_24303[2] = null);
(statearr_24222_24303[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 4))
{var inst_24079 = (state_24207[9]);var inst_24079__$1 = (state_24207[2]);var inst_24080 = (inst_24079__$1 == null);var state_24207__$1 = (function (){var statearr_24223 = state_24207;(statearr_24223[9] = inst_24079__$1);
return statearr_24223;
})();if(cljs.core.truth_(inst_24080))
{var statearr_24224_24304 = state_24207__$1;(statearr_24224_24304[1] = 5);
} else
{var statearr_24225_24305 = state_24207__$1;(statearr_24225_24305[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 15))
{var inst_24089 = (state_24207[13]);var inst_24091 = (state_24207[14]);var inst_24090 = (state_24207[15]);var inst_24088 = (state_24207[17]);var inst_24104 = (state_24207[2]);var inst_24105 = (inst_24091 + 1);var tmp24219 = inst_24089;var tmp24220 = inst_24090;var tmp24221 = inst_24088;var inst_24088__$1 = tmp24221;var inst_24089__$1 = tmp24219;var inst_24090__$1 = tmp24220;var inst_24091__$1 = inst_24105;var state_24207__$1 = (function (){var statearr_24226 = state_24207;(statearr_24226[13] = inst_24089__$1);
(statearr_24226[14] = inst_24091__$1);
(statearr_24226[15] = inst_24090__$1);
(statearr_24226[18] = inst_24104);
(statearr_24226[17] = inst_24088__$1);
return statearr_24226;
})();var statearr_24227_24306 = state_24207__$1;(statearr_24227_24306[2] = null);
(statearr_24227_24306[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 21))
{var inst_24129 = (state_24207[2]);var state_24207__$1 = state_24207;var statearr_24231_24307 = state_24207__$1;(statearr_24231_24307[2] = inst_24129);
(statearr_24231_24307[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 31))
{var inst_24155 = (state_24207[10]);var inst_24159 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_24160 = cljs.core.async.untap_STAR_.call(null,m,inst_24155);var state_24207__$1 = (function (){var statearr_24232 = state_24207;(statearr_24232[19] = inst_24159);
return statearr_24232;
})();var statearr_24233_24308 = state_24207__$1;(statearr_24233_24308[2] = inst_24160);
(statearr_24233_24308[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 32))
{var inst_24150 = (state_24207[11]);var inst_24147 = (state_24207[20]);var inst_24149 = (state_24207[21]);var inst_24148 = (state_24207[12]);var inst_24162 = (state_24207[2]);var inst_24163 = (inst_24150 + 1);var tmp24228 = inst_24147;var tmp24229 = inst_24149;var tmp24230 = inst_24148;var inst_24147__$1 = tmp24228;var inst_24148__$1 = tmp24230;var inst_24149__$1 = tmp24229;var inst_24150__$1 = inst_24163;var state_24207__$1 = (function (){var statearr_24234 = state_24207;(statearr_24234[11] = inst_24150__$1);
(statearr_24234[22] = inst_24162);
(statearr_24234[20] = inst_24147__$1);
(statearr_24234[21] = inst_24149__$1);
(statearr_24234[12] = inst_24148__$1);
return statearr_24234;
})();var statearr_24235_24309 = state_24207__$1;(statearr_24235_24309[2] = null);
(statearr_24235_24309[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 40))
{var inst_24175 = (state_24207[23]);var inst_24179 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_24180 = cljs.core.async.untap_STAR_.call(null,m,inst_24175);var state_24207__$1 = (function (){var statearr_24236 = state_24207;(statearr_24236[24] = inst_24179);
return statearr_24236;
})();var statearr_24237_24310 = state_24207__$1;(statearr_24237_24310[2] = inst_24180);
(statearr_24237_24310[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 33))
{var inst_24166 = (state_24207[25]);var inst_24168 = cljs.core.chunked_seq_QMARK_.call(null,inst_24166);var state_24207__$1 = state_24207;if(inst_24168)
{var statearr_24238_24311 = state_24207__$1;(statearr_24238_24311[1] = 36);
} else
{var statearr_24239_24312 = state_24207__$1;(statearr_24239_24312[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 13))
{var inst_24098 = (state_24207[26]);var inst_24101 = cljs.core.async.close_BANG_.call(null,inst_24098);var state_24207__$1 = state_24207;var statearr_24240_24313 = state_24207__$1;(statearr_24240_24313[2] = inst_24101);
(statearr_24240_24313[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 22))
{var inst_24119 = (state_24207[8]);var inst_24122 = cljs.core.async.close_BANG_.call(null,inst_24119);var state_24207__$1 = state_24207;var statearr_24241_24314 = state_24207__$1;(statearr_24241_24314[2] = inst_24122);
(statearr_24241_24314[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 36))
{var inst_24166 = (state_24207[25]);var inst_24170 = cljs.core.chunk_first.call(null,inst_24166);var inst_24171 = cljs.core.chunk_rest.call(null,inst_24166);var inst_24172 = cljs.core.count.call(null,inst_24170);var inst_24147 = inst_24171;var inst_24148 = inst_24170;var inst_24149 = inst_24172;var inst_24150 = 0;var state_24207__$1 = (function (){var statearr_24242 = state_24207;(statearr_24242[11] = inst_24150);
(statearr_24242[20] = inst_24147);
(statearr_24242[21] = inst_24149);
(statearr_24242[12] = inst_24148);
return statearr_24242;
})();var statearr_24243_24315 = state_24207__$1;(statearr_24243_24315[2] = null);
(statearr_24243_24315[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 41))
{var inst_24166 = (state_24207[25]);var inst_24182 = (state_24207[2]);var inst_24183 = cljs.core.next.call(null,inst_24166);var inst_24147 = inst_24183;var inst_24148 = null;var inst_24149 = 0;var inst_24150 = 0;var state_24207__$1 = (function (){var statearr_24244 = state_24207;(statearr_24244[11] = inst_24150);
(statearr_24244[27] = inst_24182);
(statearr_24244[20] = inst_24147);
(statearr_24244[21] = inst_24149);
(statearr_24244[12] = inst_24148);
return statearr_24244;
})();var statearr_24245_24316 = state_24207__$1;(statearr_24245_24316[2] = null);
(statearr_24245_24316[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 43))
{var state_24207__$1 = state_24207;var statearr_24246_24317 = state_24207__$1;(statearr_24246_24317[2] = null);
(statearr_24246_24317[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 29))
{var inst_24191 = (state_24207[2]);var state_24207__$1 = state_24207;var statearr_24247_24318 = state_24207__$1;(statearr_24247_24318[2] = inst_24191);
(statearr_24247_24318[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 44))
{var inst_24200 = (state_24207[2]);var state_24207__$1 = (function (){var statearr_24248 = state_24207;(statearr_24248[28] = inst_24200);
return statearr_24248;
})();var statearr_24249_24319 = state_24207__$1;(statearr_24249_24319[2] = null);
(statearr_24249_24319[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 6))
{var inst_24139 = (state_24207[29]);var inst_24138 = cljs.core.deref.call(null,cs);var inst_24139__$1 = cljs.core.keys.call(null,inst_24138);var inst_24140 = cljs.core.count.call(null,inst_24139__$1);var inst_24141 = cljs.core.reset_BANG_.call(null,dctr,inst_24140);var inst_24146 = cljs.core.seq.call(null,inst_24139__$1);var inst_24147 = inst_24146;var inst_24148 = null;var inst_24149 = 0;var inst_24150 = 0;var state_24207__$1 = (function (){var statearr_24250 = state_24207;(statearr_24250[29] = inst_24139__$1);
(statearr_24250[11] = inst_24150);
(statearr_24250[30] = inst_24141);
(statearr_24250[20] = inst_24147);
(statearr_24250[21] = inst_24149);
(statearr_24250[12] = inst_24148);
return statearr_24250;
})();var statearr_24251_24320 = state_24207__$1;(statearr_24251_24320[2] = null);
(statearr_24251_24320[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 28))
{var inst_24147 = (state_24207[20]);var inst_24166 = (state_24207[25]);var inst_24166__$1 = cljs.core.seq.call(null,inst_24147);var state_24207__$1 = (function (){var statearr_24252 = state_24207;(statearr_24252[25] = inst_24166__$1);
return statearr_24252;
})();if(inst_24166__$1)
{var statearr_24253_24321 = state_24207__$1;(statearr_24253_24321[1] = 33);
} else
{var statearr_24254_24322 = state_24207__$1;(statearr_24254_24322[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 25))
{var inst_24150 = (state_24207[11]);var inst_24149 = (state_24207[21]);var inst_24152 = (inst_24150 < inst_24149);var inst_24153 = inst_24152;var state_24207__$1 = state_24207;if(cljs.core.truth_(inst_24153))
{var statearr_24255_24323 = state_24207__$1;(statearr_24255_24323[1] = 27);
} else
{var statearr_24256_24324 = state_24207__$1;(statearr_24256_24324[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 34))
{var state_24207__$1 = state_24207;var statearr_24257_24325 = state_24207__$1;(statearr_24257_24325[2] = null);
(statearr_24257_24325[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 17))
{var state_24207__$1 = state_24207;var statearr_24258_24326 = state_24207__$1;(statearr_24258_24326[2] = null);
(statearr_24258_24326[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 3))
{var inst_24205 = (state_24207[2]);var state_24207__$1 = state_24207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24207__$1,inst_24205);
} else
{if((state_val_24208 === 12))
{var inst_24134 = (state_24207[2]);var state_24207__$1 = state_24207;var statearr_24259_24327 = state_24207__$1;(statearr_24259_24327[2] = inst_24134);
(statearr_24259_24327[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 2))
{var state_24207__$1 = state_24207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24207__$1,4,ch);
} else
{if((state_val_24208 === 23))
{var state_24207__$1 = state_24207;var statearr_24260_24328 = state_24207__$1;(statearr_24260_24328[2] = null);
(statearr_24260_24328[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 35))
{var inst_24189 = (state_24207[2]);var state_24207__$1 = state_24207;var statearr_24261_24329 = state_24207__$1;(statearr_24261_24329[2] = inst_24189);
(statearr_24261_24329[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 19))
{var inst_24108 = (state_24207[7]);var inst_24112 = cljs.core.chunk_first.call(null,inst_24108);var inst_24113 = cljs.core.chunk_rest.call(null,inst_24108);var inst_24114 = cljs.core.count.call(null,inst_24112);var inst_24088 = inst_24113;var inst_24089 = inst_24112;var inst_24090 = inst_24114;var inst_24091 = 0;var state_24207__$1 = (function (){var statearr_24262 = state_24207;(statearr_24262[13] = inst_24089);
(statearr_24262[14] = inst_24091);
(statearr_24262[15] = inst_24090);
(statearr_24262[17] = inst_24088);
return statearr_24262;
})();var statearr_24263_24330 = state_24207__$1;(statearr_24263_24330[2] = null);
(statearr_24263_24330[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 11))
{var inst_24108 = (state_24207[7]);var inst_24088 = (state_24207[17]);var inst_24108__$1 = cljs.core.seq.call(null,inst_24088);var state_24207__$1 = (function (){var statearr_24264 = state_24207;(statearr_24264[7] = inst_24108__$1);
return statearr_24264;
})();if(inst_24108__$1)
{var statearr_24265_24331 = state_24207__$1;(statearr_24265_24331[1] = 16);
} else
{var statearr_24266_24332 = state_24207__$1;(statearr_24266_24332[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 9))
{var inst_24136 = (state_24207[2]);var state_24207__$1 = state_24207;var statearr_24267_24333 = state_24207__$1;(statearr_24267_24333[2] = inst_24136);
(statearr_24267_24333[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 5))
{var inst_24086 = cljs.core.deref.call(null,cs);var inst_24087 = cljs.core.seq.call(null,inst_24086);var inst_24088 = inst_24087;var inst_24089 = null;var inst_24090 = 0;var inst_24091 = 0;var state_24207__$1 = (function (){var statearr_24268 = state_24207;(statearr_24268[13] = inst_24089);
(statearr_24268[14] = inst_24091);
(statearr_24268[15] = inst_24090);
(statearr_24268[17] = inst_24088);
return statearr_24268;
})();var statearr_24269_24334 = state_24207__$1;(statearr_24269_24334[2] = null);
(statearr_24269_24334[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 14))
{var state_24207__$1 = state_24207;var statearr_24270_24335 = state_24207__$1;(statearr_24270_24335[2] = null);
(statearr_24270_24335[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 45))
{var inst_24197 = (state_24207[2]);var state_24207__$1 = state_24207;var statearr_24271_24336 = state_24207__$1;(statearr_24271_24336[2] = inst_24197);
(statearr_24271_24336[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 26))
{var inst_24139 = (state_24207[29]);var inst_24193 = (state_24207[2]);var inst_24194 = cljs.core.seq.call(null,inst_24139);var state_24207__$1 = (function (){var statearr_24272 = state_24207;(statearr_24272[31] = inst_24193);
return statearr_24272;
})();if(inst_24194)
{var statearr_24273_24337 = state_24207__$1;(statearr_24273_24337[1] = 42);
} else
{var statearr_24274_24338 = state_24207__$1;(statearr_24274_24338[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 16))
{var inst_24108 = (state_24207[7]);var inst_24110 = cljs.core.chunked_seq_QMARK_.call(null,inst_24108);var state_24207__$1 = state_24207;if(inst_24110)
{var statearr_24275_24339 = state_24207__$1;(statearr_24275_24339[1] = 19);
} else
{var statearr_24276_24340 = state_24207__$1;(statearr_24276_24340[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 38))
{var inst_24186 = (state_24207[2]);var state_24207__$1 = state_24207;var statearr_24277_24341 = state_24207__$1;(statearr_24277_24341[2] = inst_24186);
(statearr_24277_24341[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 30))
{var state_24207__$1 = state_24207;var statearr_24278_24342 = state_24207__$1;(statearr_24278_24342[2] = null);
(statearr_24278_24342[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 10))
{var inst_24089 = (state_24207[13]);var inst_24091 = (state_24207[14]);var inst_24097 = cljs.core._nth.call(null,inst_24089,inst_24091);var inst_24098 = cljs.core.nth.call(null,inst_24097,0,null);var inst_24099 = cljs.core.nth.call(null,inst_24097,1,null);var state_24207__$1 = (function (){var statearr_24279 = state_24207;(statearr_24279[26] = inst_24098);
return statearr_24279;
})();if(cljs.core.truth_(inst_24099))
{var statearr_24280_24343 = state_24207__$1;(statearr_24280_24343[1] = 13);
} else
{var statearr_24281_24344 = state_24207__$1;(statearr_24281_24344[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 18))
{var inst_24132 = (state_24207[2]);var state_24207__$1 = state_24207;var statearr_24282_24345 = state_24207__$1;(statearr_24282_24345[2] = inst_24132);
(statearr_24282_24345[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 42))
{var state_24207__$1 = state_24207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24207__$1,45,dchan);
} else
{if((state_val_24208 === 37))
{var inst_24175 = (state_24207[23]);var inst_24079 = (state_24207[9]);var inst_24166 = (state_24207[25]);var inst_24175__$1 = cljs.core.first.call(null,inst_24166);var inst_24176 = cljs.core.async.put_BANG_.call(null,inst_24175__$1,inst_24079,done);var state_24207__$1 = (function (){var statearr_24283 = state_24207;(statearr_24283[23] = inst_24175__$1);
return statearr_24283;
})();if(cljs.core.truth_(inst_24176))
{var statearr_24284_24346 = state_24207__$1;(statearr_24284_24346[1] = 39);
} else
{var statearr_24285_24347 = state_24207__$1;(statearr_24285_24347[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24208 === 8))
{var inst_24091 = (state_24207[14]);var inst_24090 = (state_24207[15]);var inst_24093 = (inst_24091 < inst_24090);var inst_24094 = inst_24093;var state_24207__$1 = state_24207;if(cljs.core.truth_(inst_24094))
{var statearr_24286_24348 = state_24207__$1;(statearr_24286_24348[1] = 10);
} else
{var statearr_24287_24349 = state_24207__$1;(statearr_24287_24349[1] = 11);
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
});})(c__11799__auto___24295,cs,m,dchan,dctr,done))
;return ((function (switch__11682__auto__,c__11799__auto___24295,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_24291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24291[0] = state_machine__11683__auto__);
(statearr_24291[1] = 1);
return statearr_24291;
});
var state_machine__11683__auto____1 = (function (state_24207){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_24207);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e24292){if((e24292 instanceof Object))
{var ex__11686__auto__ = e24292;var statearr_24293_24350 = state_24207;(statearr_24293_24350[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24207);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24351 = state_24207;
state_24207 = G__24351;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_24207){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_24207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___24295,cs,m,dchan,dctr,done))
})();var state__11801__auto__ = (function (){var statearr_24294 = f__11800__auto__.call(null);(statearr_24294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___24295);
return statearr_24294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___24295,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj24353 = {};return obj24353;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8650__auto__ = m;if(and__8650__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8650__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9289__auto__ = (((m == null))?null:m);return (function (){var or__8662__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8650__auto__ = m;if(and__8650__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8650__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9289__auto__ = (((m == null))?null:m);return (function (){var or__8662__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8650__auto__ = m;if(and__8650__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8650__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9289__auto__ = (((m == null))?null:m);return (function (){var or__8662__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8650__auto__ = m;if(and__8650__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8650__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9289__auto__ = (((m == null))?null:m);return (function (){var or__8662__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8650__auto__ = m;if(and__8650__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8650__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9289__auto__ = (((m == null))?null:m);return (function (){var or__8662__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t24473 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24473 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24474){
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
this.meta24474 = meta24474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24473.cljs$lang$type = true;
cljs.core.async.t24473.cljs$lang$ctorStr = "cljs.core.async/t24473";
cljs.core.async.t24473.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.core.async/t24473");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24473.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24473.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24473.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24473.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24473.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24473.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24473.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24473.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24475){var self__ = this;
var _24475__$1 = this;return self__.meta24474;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24475,meta24474__$1){var self__ = this;
var _24475__$1 = this;return (new cljs.core.async.t24473(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24474__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24473 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24473(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24474){return (new cljs.core.async.t24473(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24474));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24473(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11799__auto___24592 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___24592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___24592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24545){var state_val_24546 = (state_24545[1]);if((state_val_24546 === 7))
{var inst_24489 = (state_24545[7]);var inst_24494 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24489);var state_24545__$1 = state_24545;var statearr_24547_24593 = state_24545__$1;(statearr_24547_24593[2] = inst_24494);
(statearr_24547_24593[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 20))
{var inst_24504 = (state_24545[8]);var state_24545__$1 = state_24545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24545__$1,23,out,inst_24504);
} else
{if((state_val_24546 === 1))
{var inst_24479 = (state_24545[9]);var inst_24479__$1 = calc_state.call(null);var inst_24480 = cljs.core.seq_QMARK_.call(null,inst_24479__$1);var state_24545__$1 = (function (){var statearr_24548 = state_24545;(statearr_24548[9] = inst_24479__$1);
return statearr_24548;
})();if(inst_24480)
{var statearr_24549_24594 = state_24545__$1;(statearr_24549_24594[1] = 2);
} else
{var statearr_24550_24595 = state_24545__$1;(statearr_24550_24595[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 24))
{var inst_24497 = (state_24545[10]);var inst_24489 = inst_24497;var state_24545__$1 = (function (){var statearr_24551 = state_24545;(statearr_24551[7] = inst_24489);
return statearr_24551;
})();var statearr_24552_24596 = state_24545__$1;(statearr_24552_24596[2] = null);
(statearr_24552_24596[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 4))
{var inst_24479 = (state_24545[9]);var inst_24485 = (state_24545[2]);var inst_24486 = cljs.core.get.call(null,inst_24485,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_24487 = cljs.core.get.call(null,inst_24485,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_24488 = cljs.core.get.call(null,inst_24485,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_24489 = inst_24479;var state_24545__$1 = (function (){var statearr_24553 = state_24545;(statearr_24553[11] = inst_24486);
(statearr_24553[12] = inst_24487);
(statearr_24553[7] = inst_24489);
(statearr_24553[13] = inst_24488);
return statearr_24553;
})();var statearr_24554_24597 = state_24545__$1;(statearr_24554_24597[2] = null);
(statearr_24554_24597[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 15))
{var state_24545__$1 = state_24545;var statearr_24555_24598 = state_24545__$1;(statearr_24555_24598[2] = null);
(statearr_24555_24598[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 21))
{var inst_24497 = (state_24545[10]);var inst_24489 = inst_24497;var state_24545__$1 = (function (){var statearr_24556 = state_24545;(statearr_24556[7] = inst_24489);
return statearr_24556;
})();var statearr_24557_24599 = state_24545__$1;(statearr_24557_24599[2] = null);
(statearr_24557_24599[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 13))
{var inst_24541 = (state_24545[2]);var state_24545__$1 = state_24545;var statearr_24558_24600 = state_24545__$1;(statearr_24558_24600[2] = inst_24541);
(statearr_24558_24600[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 22))
{var inst_24539 = (state_24545[2]);var state_24545__$1 = state_24545;var statearr_24559_24601 = state_24545__$1;(statearr_24559_24601[2] = inst_24539);
(statearr_24559_24601[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 6))
{var inst_24543 = (state_24545[2]);var state_24545__$1 = state_24545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24545__$1,inst_24543);
} else
{if((state_val_24546 === 25))
{var state_24545__$1 = state_24545;var statearr_24560_24602 = state_24545__$1;(statearr_24560_24602[2] = null);
(statearr_24560_24602[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 17))
{var inst_24519 = (state_24545[14]);var state_24545__$1 = state_24545;var statearr_24561_24603 = state_24545__$1;(statearr_24561_24603[2] = inst_24519);
(statearr_24561_24603[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 3))
{var inst_24479 = (state_24545[9]);var state_24545__$1 = state_24545;var statearr_24562_24604 = state_24545__$1;(statearr_24562_24604[2] = inst_24479);
(statearr_24562_24604[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 12))
{var inst_24500 = (state_24545[15]);var inst_24519 = (state_24545[14]);var inst_24505 = (state_24545[16]);var inst_24519__$1 = inst_24500.call(null,inst_24505);var state_24545__$1 = (function (){var statearr_24563 = state_24545;(statearr_24563[14] = inst_24519__$1);
return statearr_24563;
})();if(cljs.core.truth_(inst_24519__$1))
{var statearr_24564_24605 = state_24545__$1;(statearr_24564_24605[1] = 17);
} else
{var statearr_24565_24606 = state_24545__$1;(statearr_24565_24606[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 2))
{var inst_24479 = (state_24545[9]);var inst_24482 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24479);var state_24545__$1 = state_24545;var statearr_24566_24607 = state_24545__$1;(statearr_24566_24607[2] = inst_24482);
(statearr_24566_24607[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 23))
{var inst_24530 = (state_24545[2]);var state_24545__$1 = state_24545;if(cljs.core.truth_(inst_24530))
{var statearr_24567_24608 = state_24545__$1;(statearr_24567_24608[1] = 24);
} else
{var statearr_24568_24609 = state_24545__$1;(statearr_24568_24609[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 19))
{var inst_24527 = (state_24545[2]);var state_24545__$1 = state_24545;if(cljs.core.truth_(inst_24527))
{var statearr_24569_24610 = state_24545__$1;(statearr_24569_24610[1] = 20);
} else
{var statearr_24570_24611 = state_24545__$1;(statearr_24570_24611[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 11))
{var inst_24504 = (state_24545[8]);var inst_24510 = (inst_24504 == null);var state_24545__$1 = state_24545;if(cljs.core.truth_(inst_24510))
{var statearr_24571_24612 = state_24545__$1;(statearr_24571_24612[1] = 14);
} else
{var statearr_24572_24613 = state_24545__$1;(statearr_24572_24613[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 9))
{var inst_24497 = (state_24545[10]);var inst_24497__$1 = (state_24545[2]);var inst_24498 = cljs.core.get.call(null,inst_24497__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_24499 = cljs.core.get.call(null,inst_24497__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_24500 = cljs.core.get.call(null,inst_24497__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_24545__$1 = (function (){var statearr_24573 = state_24545;(statearr_24573[10] = inst_24497__$1);
(statearr_24573[15] = inst_24500);
(statearr_24573[17] = inst_24499);
return statearr_24573;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24545__$1,10,inst_24498);
} else
{if((state_val_24546 === 5))
{var inst_24489 = (state_24545[7]);var inst_24492 = cljs.core.seq_QMARK_.call(null,inst_24489);var state_24545__$1 = state_24545;if(inst_24492)
{var statearr_24574_24614 = state_24545__$1;(statearr_24574_24614[1] = 7);
} else
{var statearr_24575_24615 = state_24545__$1;(statearr_24575_24615[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 14))
{var inst_24505 = (state_24545[16]);var inst_24512 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24505);var state_24545__$1 = state_24545;var statearr_24576_24616 = state_24545__$1;(statearr_24576_24616[2] = inst_24512);
(statearr_24576_24616[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 26))
{var inst_24535 = (state_24545[2]);var state_24545__$1 = state_24545;var statearr_24577_24617 = state_24545__$1;(statearr_24577_24617[2] = inst_24535);
(statearr_24577_24617[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 16))
{var inst_24515 = (state_24545[2]);var inst_24516 = calc_state.call(null);var inst_24489 = inst_24516;var state_24545__$1 = (function (){var statearr_24578 = state_24545;(statearr_24578[18] = inst_24515);
(statearr_24578[7] = inst_24489);
return statearr_24578;
})();var statearr_24579_24618 = state_24545__$1;(statearr_24579_24618[2] = null);
(statearr_24579_24618[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 10))
{var inst_24504 = (state_24545[8]);var inst_24505 = (state_24545[16]);var inst_24503 = (state_24545[2]);var inst_24504__$1 = cljs.core.nth.call(null,inst_24503,0,null);var inst_24505__$1 = cljs.core.nth.call(null,inst_24503,1,null);var inst_24506 = (inst_24504__$1 == null);var inst_24507 = cljs.core._EQ_.call(null,inst_24505__$1,change);var inst_24508 = (inst_24506) || (inst_24507);var state_24545__$1 = (function (){var statearr_24580 = state_24545;(statearr_24580[8] = inst_24504__$1);
(statearr_24580[16] = inst_24505__$1);
return statearr_24580;
})();if(cljs.core.truth_(inst_24508))
{var statearr_24581_24619 = state_24545__$1;(statearr_24581_24619[1] = 11);
} else
{var statearr_24582_24620 = state_24545__$1;(statearr_24582_24620[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 18))
{var inst_24500 = (state_24545[15]);var inst_24505 = (state_24545[16]);var inst_24499 = (state_24545[17]);var inst_24522 = cljs.core.empty_QMARK_.call(null,inst_24500);var inst_24523 = inst_24499.call(null,inst_24505);var inst_24524 = cljs.core.not.call(null,inst_24523);var inst_24525 = (inst_24522) && (inst_24524);var state_24545__$1 = state_24545;var statearr_24583_24621 = state_24545__$1;(statearr_24583_24621[2] = inst_24525);
(statearr_24583_24621[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24546 === 8))
{var inst_24489 = (state_24545[7]);var state_24545__$1 = state_24545;var statearr_24584_24622 = state_24545__$1;(statearr_24584_24622[2] = inst_24489);
(statearr_24584_24622[1] = 9);
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
});})(c__11799__auto___24592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11682__auto__,c__11799__auto___24592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_24588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24588[0] = state_machine__11683__auto__);
(statearr_24588[1] = 1);
return statearr_24588;
});
var state_machine__11683__auto____1 = (function (state_24545){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_24545);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e24589){if((e24589 instanceof Object))
{var ex__11686__auto__ = e24589;var statearr_24590_24623 = state_24545;(statearr_24590_24623[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24545);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24589;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24624 = state_24545;
state_24545 = G__24624;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_24545){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_24545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___24592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11801__auto__ = (function (){var statearr_24591 = f__11800__auto__.call(null);(statearr_24591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___24592);
return statearr_24591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___24592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj24626 = {};return obj24626;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8650__auto__ = p;if(and__8650__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8650__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9289__auto__ = (((p == null))?null:p);return (function (){var or__8662__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8650__auto__ = p;if(and__8650__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8650__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9289__auto__ = (((p == null))?null:p);return (function (){var or__8662__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8650__auto__ = p;if(and__8650__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8650__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9289__auto__ = (((p == null))?null:p);return (function (){var or__8662__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8650__auto__ = p;if(and__8650__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8650__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9289__auto__ = (((p == null))?null:p);return (function (){var or__8662__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9289__auto__)]);if(or__8662__auto__)
{return or__8662__auto__;
} else
{var or__8662__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8662__auto____$1)
{return or__8662__auto____$1;
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
return (function (topic){var or__8662__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8662__auto__))
{return or__8662__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8662__auto__,mults){
return (function (p1__24627_SHARP_){if(cljs.core.truth_(p1__24627_SHARP_.call(null,topic)))
{return p1__24627_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24627_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8662__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24742 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24742 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24743){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24743 = meta24743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24742.cljs$lang$type = true;
cljs.core.async.t24742.cljs$lang$ctorStr = "cljs.core.async/t24742";
cljs.core.async.t24742.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9229__auto__,writer__9230__auto__,opt__9231__auto__){return cljs.core._write.call(null,writer__9230__auto__,"cljs.core.async/t24742");
});})(mults,ensure_mult))
;
cljs.core.async.t24742.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24742.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24742.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24742.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24742.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24742.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24742.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24744){var self__ = this;
var _24744__$1 = this;return self__.meta24743;
});})(mults,ensure_mult))
;
cljs.core.async.t24742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24744,meta24743__$1){var self__ = this;
var _24744__$1 = this;return (new cljs.core.async.t24742(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24743__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24742 = ((function (mults,ensure_mult){
return (function __GT_t24742(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24743){return (new cljs.core.async.t24742(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24743));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24742(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11799__auto___24856 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___24856,mults,ensure_mult,p){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___24856,mults,ensure_mult,p){
return (function (state_24812){var state_val_24813 = (state_24812[1]);if((state_val_24813 === 7))
{var inst_24808 = (state_24812[2]);var state_24812__$1 = state_24812;var statearr_24814_24857 = state_24812__$1;(statearr_24814_24857[2] = inst_24808);
(statearr_24814_24857[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 20))
{var state_24812__$1 = state_24812;var statearr_24815_24858 = state_24812__$1;(statearr_24815_24858[2] = null);
(statearr_24815_24858[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 1))
{var state_24812__$1 = state_24812;var statearr_24816_24859 = state_24812__$1;(statearr_24816_24859[2] = null);
(statearr_24816_24859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 4))
{var inst_24747 = (state_24812[7]);var inst_24747__$1 = (state_24812[2]);var inst_24748 = (inst_24747__$1 == null);var state_24812__$1 = (function (){var statearr_24817 = state_24812;(statearr_24817[7] = inst_24747__$1);
return statearr_24817;
})();if(cljs.core.truth_(inst_24748))
{var statearr_24818_24860 = state_24812__$1;(statearr_24818_24860[1] = 5);
} else
{var statearr_24819_24861 = state_24812__$1;(statearr_24819_24861[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 15))
{var inst_24789 = (state_24812[2]);var state_24812__$1 = state_24812;var statearr_24820_24862 = state_24812__$1;(statearr_24820_24862[2] = inst_24789);
(statearr_24820_24862[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 21))
{var inst_24795 = (state_24812[8]);var inst_24803 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24795);var state_24812__$1 = state_24812;var statearr_24821_24863 = state_24812__$1;(statearr_24821_24863[2] = inst_24803);
(statearr_24821_24863[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 13))
{var inst_24771 = (state_24812[9]);var inst_24773 = cljs.core.chunked_seq_QMARK_.call(null,inst_24771);var state_24812__$1 = state_24812;if(inst_24773)
{var statearr_24822_24864 = state_24812__$1;(statearr_24822_24864[1] = 16);
} else
{var statearr_24823_24865 = state_24812__$1;(statearr_24823_24865[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 22))
{var inst_24805 = (state_24812[2]);var state_24812__$1 = (function (){var statearr_24824 = state_24812;(statearr_24824[10] = inst_24805);
return statearr_24824;
})();var statearr_24825_24866 = state_24812__$1;(statearr_24825_24866[2] = null);
(statearr_24825_24866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 6))
{var inst_24747 = (state_24812[7]);var inst_24795 = (state_24812[8]);var inst_24795__$1 = topic_fn.call(null,inst_24747);var inst_24796 = cljs.core.deref.call(null,mults);var inst_24797 = cljs.core.get.call(null,inst_24796,inst_24795__$1);var inst_24798 = cljs.core.async.muxch_STAR_.call(null,inst_24797);var state_24812__$1 = (function (){var statearr_24826 = state_24812;(statearr_24826[8] = inst_24795__$1);
return statearr_24826;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24812__$1,19,inst_24798,inst_24747);
} else
{if((state_val_24813 === 17))
{var inst_24771 = (state_24812[9]);var inst_24780 = cljs.core.first.call(null,inst_24771);var inst_24781 = cljs.core.async.muxch_STAR_.call(null,inst_24780);var inst_24782 = cljs.core.async.close_BANG_.call(null,inst_24781);var inst_24783 = cljs.core.next.call(null,inst_24771);var inst_24757 = inst_24783;var inst_24758 = null;var inst_24759 = 0;var inst_24760 = 0;var state_24812__$1 = (function (){var statearr_24827 = state_24812;(statearr_24827[11] = inst_24782);
(statearr_24827[12] = inst_24758);
(statearr_24827[13] = inst_24759);
(statearr_24827[14] = inst_24757);
(statearr_24827[15] = inst_24760);
return statearr_24827;
})();var statearr_24828_24867 = state_24812__$1;(statearr_24828_24867[2] = null);
(statearr_24828_24867[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 3))
{var inst_24810 = (state_24812[2]);var state_24812__$1 = state_24812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24812__$1,inst_24810);
} else
{if((state_val_24813 === 12))
{var inst_24791 = (state_24812[2]);var state_24812__$1 = state_24812;var statearr_24829_24868 = state_24812__$1;(statearr_24829_24868[2] = inst_24791);
(statearr_24829_24868[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 2))
{var state_24812__$1 = state_24812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24812__$1,4,ch);
} else
{if((state_val_24813 === 19))
{var inst_24800 = (state_24812[2]);var state_24812__$1 = state_24812;if(cljs.core.truth_(inst_24800))
{var statearr_24830_24869 = state_24812__$1;(statearr_24830_24869[1] = 20);
} else
{var statearr_24831_24870 = state_24812__$1;(statearr_24831_24870[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 11))
{var inst_24771 = (state_24812[9]);var inst_24757 = (state_24812[14]);var inst_24771__$1 = cljs.core.seq.call(null,inst_24757);var state_24812__$1 = (function (){var statearr_24832 = state_24812;(statearr_24832[9] = inst_24771__$1);
return statearr_24832;
})();if(inst_24771__$1)
{var statearr_24833_24871 = state_24812__$1;(statearr_24833_24871[1] = 13);
} else
{var statearr_24834_24872 = state_24812__$1;(statearr_24834_24872[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 9))
{var inst_24793 = (state_24812[2]);var state_24812__$1 = state_24812;var statearr_24835_24873 = state_24812__$1;(statearr_24835_24873[2] = inst_24793);
(statearr_24835_24873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 5))
{var inst_24754 = cljs.core.deref.call(null,mults);var inst_24755 = cljs.core.vals.call(null,inst_24754);var inst_24756 = cljs.core.seq.call(null,inst_24755);var inst_24757 = inst_24756;var inst_24758 = null;var inst_24759 = 0;var inst_24760 = 0;var state_24812__$1 = (function (){var statearr_24836 = state_24812;(statearr_24836[12] = inst_24758);
(statearr_24836[13] = inst_24759);
(statearr_24836[14] = inst_24757);
(statearr_24836[15] = inst_24760);
return statearr_24836;
})();var statearr_24837_24874 = state_24812__$1;(statearr_24837_24874[2] = null);
(statearr_24837_24874[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 14))
{var state_24812__$1 = state_24812;var statearr_24841_24875 = state_24812__$1;(statearr_24841_24875[2] = null);
(statearr_24841_24875[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 16))
{var inst_24771 = (state_24812[9]);var inst_24775 = cljs.core.chunk_first.call(null,inst_24771);var inst_24776 = cljs.core.chunk_rest.call(null,inst_24771);var inst_24777 = cljs.core.count.call(null,inst_24775);var inst_24757 = inst_24776;var inst_24758 = inst_24775;var inst_24759 = inst_24777;var inst_24760 = 0;var state_24812__$1 = (function (){var statearr_24842 = state_24812;(statearr_24842[12] = inst_24758);
(statearr_24842[13] = inst_24759);
(statearr_24842[14] = inst_24757);
(statearr_24842[15] = inst_24760);
return statearr_24842;
})();var statearr_24843_24876 = state_24812__$1;(statearr_24843_24876[2] = null);
(statearr_24843_24876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 10))
{var inst_24758 = (state_24812[12]);var inst_24759 = (state_24812[13]);var inst_24757 = (state_24812[14]);var inst_24760 = (state_24812[15]);var inst_24765 = cljs.core._nth.call(null,inst_24758,inst_24760);var inst_24766 = cljs.core.async.muxch_STAR_.call(null,inst_24765);var inst_24767 = cljs.core.async.close_BANG_.call(null,inst_24766);var inst_24768 = (inst_24760 + 1);var tmp24838 = inst_24758;var tmp24839 = inst_24759;var tmp24840 = inst_24757;var inst_24757__$1 = tmp24840;var inst_24758__$1 = tmp24838;var inst_24759__$1 = tmp24839;var inst_24760__$1 = inst_24768;var state_24812__$1 = (function (){var statearr_24844 = state_24812;(statearr_24844[12] = inst_24758__$1);
(statearr_24844[13] = inst_24759__$1);
(statearr_24844[14] = inst_24757__$1);
(statearr_24844[15] = inst_24760__$1);
(statearr_24844[16] = inst_24767);
return statearr_24844;
})();var statearr_24845_24877 = state_24812__$1;(statearr_24845_24877[2] = null);
(statearr_24845_24877[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 18))
{var inst_24786 = (state_24812[2]);var state_24812__$1 = state_24812;var statearr_24846_24878 = state_24812__$1;(statearr_24846_24878[2] = inst_24786);
(statearr_24846_24878[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24813 === 8))
{var inst_24759 = (state_24812[13]);var inst_24760 = (state_24812[15]);var inst_24762 = (inst_24760 < inst_24759);var inst_24763 = inst_24762;var state_24812__$1 = state_24812;if(cljs.core.truth_(inst_24763))
{var statearr_24847_24879 = state_24812__$1;(statearr_24847_24879[1] = 10);
} else
{var statearr_24848_24880 = state_24812__$1;(statearr_24848_24880[1] = 11);
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
});})(c__11799__auto___24856,mults,ensure_mult,p))
;return ((function (switch__11682__auto__,c__11799__auto___24856,mults,ensure_mult,p){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_24852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24852[0] = state_machine__11683__auto__);
(statearr_24852[1] = 1);
return statearr_24852;
});
var state_machine__11683__auto____1 = (function (state_24812){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_24812);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e24853){if((e24853 instanceof Object))
{var ex__11686__auto__ = e24853;var statearr_24854_24881 = state_24812;(statearr_24854_24881[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24812);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24882 = state_24812;
state_24812 = G__24882;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_24812){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_24812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___24856,mults,ensure_mult,p))
})();var state__11801__auto__ = (function (){var statearr_24855 = f__11800__auto__.call(null);(statearr_24855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___24856);
return statearr_24855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___24856,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11799__auto___25019 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___25019,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___25019,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24989){var state_val_24990 = (state_24989[1]);if((state_val_24990 === 7))
{var state_24989__$1 = state_24989;var statearr_24991_25020 = state_24989__$1;(statearr_24991_25020[2] = null);
(statearr_24991_25020[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 1))
{var state_24989__$1 = state_24989;var statearr_24992_25021 = state_24989__$1;(statearr_24992_25021[2] = null);
(statearr_24992_25021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 4))
{var inst_24953 = (state_24989[7]);var inst_24955 = (inst_24953 < cnt);var state_24989__$1 = state_24989;if(cljs.core.truth_(inst_24955))
{var statearr_24993_25022 = state_24989__$1;(statearr_24993_25022[1] = 6);
} else
{var statearr_24994_25023 = state_24989__$1;(statearr_24994_25023[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 15))
{var inst_24985 = (state_24989[2]);var state_24989__$1 = state_24989;var statearr_24995_25024 = state_24989__$1;(statearr_24995_25024[2] = inst_24985);
(statearr_24995_25024[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 13))
{var inst_24978 = cljs.core.async.close_BANG_.call(null,out);var state_24989__$1 = state_24989;var statearr_24996_25025 = state_24989__$1;(statearr_24996_25025[2] = inst_24978);
(statearr_24996_25025[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 6))
{var state_24989__$1 = state_24989;var statearr_24997_25026 = state_24989__$1;(statearr_24997_25026[2] = null);
(statearr_24997_25026[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 3))
{var inst_24987 = (state_24989[2]);var state_24989__$1 = state_24989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24989__$1,inst_24987);
} else
{if((state_val_24990 === 12))
{var inst_24975 = (state_24989[8]);var inst_24975__$1 = (state_24989[2]);var inst_24976 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24975__$1);var state_24989__$1 = (function (){var statearr_24998 = state_24989;(statearr_24998[8] = inst_24975__$1);
return statearr_24998;
})();if(cljs.core.truth_(inst_24976))
{var statearr_24999_25027 = state_24989__$1;(statearr_24999_25027[1] = 13);
} else
{var statearr_25000_25028 = state_24989__$1;(statearr_25000_25028[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 2))
{var inst_24952 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_24953 = 0;var state_24989__$1 = (function (){var statearr_25001 = state_24989;(statearr_25001[9] = inst_24952);
(statearr_25001[7] = inst_24953);
return statearr_25001;
})();var statearr_25002_25029 = state_24989__$1;(statearr_25002_25029[2] = null);
(statearr_25002_25029[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 11))
{var inst_24953 = (state_24989[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24989,10,Object,null,9);var inst_24962 = chs__$1.call(null,inst_24953);var inst_24963 = done.call(null,inst_24953);var inst_24964 = cljs.core.async.take_BANG_.call(null,inst_24962,inst_24963);var state_24989__$1 = state_24989;var statearr_25003_25030 = state_24989__$1;(statearr_25003_25030[2] = inst_24964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24989__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 9))
{var inst_24953 = (state_24989[7]);var inst_24966 = (state_24989[2]);var inst_24967 = (inst_24953 + 1);var inst_24953__$1 = inst_24967;var state_24989__$1 = (function (){var statearr_25004 = state_24989;(statearr_25004[10] = inst_24966);
(statearr_25004[7] = inst_24953__$1);
return statearr_25004;
})();var statearr_25005_25031 = state_24989__$1;(statearr_25005_25031[2] = null);
(statearr_25005_25031[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 5))
{var inst_24973 = (state_24989[2]);var state_24989__$1 = (function (){var statearr_25006 = state_24989;(statearr_25006[11] = inst_24973);
return statearr_25006;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24989__$1,12,dchan);
} else
{if((state_val_24990 === 14))
{var inst_24975 = (state_24989[8]);var inst_24980 = cljs.core.apply.call(null,f,inst_24975);var state_24989__$1 = state_24989;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24989__$1,16,out,inst_24980);
} else
{if((state_val_24990 === 16))
{var inst_24982 = (state_24989[2]);var state_24989__$1 = (function (){var statearr_25007 = state_24989;(statearr_25007[12] = inst_24982);
return statearr_25007;
})();var statearr_25008_25032 = state_24989__$1;(statearr_25008_25032[2] = null);
(statearr_25008_25032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 10))
{var inst_24957 = (state_24989[2]);var inst_24958 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_24989__$1 = (function (){var statearr_25009 = state_24989;(statearr_25009[13] = inst_24957);
return statearr_25009;
})();var statearr_25010_25033 = state_24989__$1;(statearr_25010_25033[2] = inst_24958);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24989__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24990 === 8))
{var inst_24971 = (state_24989[2]);var state_24989__$1 = state_24989;var statearr_25011_25034 = state_24989__$1;(statearr_25011_25034[2] = inst_24971);
(statearr_25011_25034[1] = 5);
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
});})(c__11799__auto___25019,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11682__auto__,c__11799__auto___25019,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_25015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25015[0] = state_machine__11683__auto__);
(statearr_25015[1] = 1);
return statearr_25015;
});
var state_machine__11683__auto____1 = (function (state_24989){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_24989);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e25016){if((e25016 instanceof Object))
{var ex__11686__auto__ = e25016;var statearr_25017_25035 = state_24989;(statearr_25017_25035[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24989);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25036 = state_24989;
state_24989 = G__25036;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_24989){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_24989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___25019,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11801__auto__ = (function (){var statearr_25018 = f__11800__auto__.call(null);(statearr_25018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___25019);
return statearr_25018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___25019,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11799__auto___25144 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___25144,out){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___25144,out){
return (function (state_25120){var state_val_25121 = (state_25120[1]);if((state_val_25121 === 7))
{var inst_25100 = (state_25120[7]);var inst_25099 = (state_25120[8]);var inst_25099__$1 = (state_25120[2]);var inst_25100__$1 = cljs.core.nth.call(null,inst_25099__$1,0,null);var inst_25101 = cljs.core.nth.call(null,inst_25099__$1,1,null);var inst_25102 = (inst_25100__$1 == null);var state_25120__$1 = (function (){var statearr_25122 = state_25120;(statearr_25122[9] = inst_25101);
(statearr_25122[7] = inst_25100__$1);
(statearr_25122[8] = inst_25099__$1);
return statearr_25122;
})();if(cljs.core.truth_(inst_25102))
{var statearr_25123_25145 = state_25120__$1;(statearr_25123_25145[1] = 8);
} else
{var statearr_25124_25146 = state_25120__$1;(statearr_25124_25146[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25121 === 1))
{var inst_25091 = cljs.core.vec.call(null,chs);var inst_25092 = inst_25091;var state_25120__$1 = (function (){var statearr_25125 = state_25120;(statearr_25125[10] = inst_25092);
return statearr_25125;
})();var statearr_25126_25147 = state_25120__$1;(statearr_25126_25147[2] = null);
(statearr_25126_25147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25121 === 4))
{var inst_25092 = (state_25120[10]);var state_25120__$1 = state_25120;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25120__$1,7,inst_25092);
} else
{if((state_val_25121 === 6))
{var inst_25116 = (state_25120[2]);var state_25120__$1 = state_25120;var statearr_25127_25148 = state_25120__$1;(statearr_25127_25148[2] = inst_25116);
(statearr_25127_25148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25121 === 3))
{var inst_25118 = (state_25120[2]);var state_25120__$1 = state_25120;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25120__$1,inst_25118);
} else
{if((state_val_25121 === 2))
{var inst_25092 = (state_25120[10]);var inst_25094 = cljs.core.count.call(null,inst_25092);var inst_25095 = (inst_25094 > 0);var state_25120__$1 = state_25120;if(cljs.core.truth_(inst_25095))
{var statearr_25129_25149 = state_25120__$1;(statearr_25129_25149[1] = 4);
} else
{var statearr_25130_25150 = state_25120__$1;(statearr_25130_25150[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25121 === 11))
{var inst_25092 = (state_25120[10]);var inst_25109 = (state_25120[2]);var tmp25128 = inst_25092;var inst_25092__$1 = tmp25128;var state_25120__$1 = (function (){var statearr_25131 = state_25120;(statearr_25131[10] = inst_25092__$1);
(statearr_25131[11] = inst_25109);
return statearr_25131;
})();var statearr_25132_25151 = state_25120__$1;(statearr_25132_25151[2] = null);
(statearr_25132_25151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25121 === 9))
{var inst_25100 = (state_25120[7]);var state_25120__$1 = state_25120;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25120__$1,11,out,inst_25100);
} else
{if((state_val_25121 === 5))
{var inst_25114 = cljs.core.async.close_BANG_.call(null,out);var state_25120__$1 = state_25120;var statearr_25133_25152 = state_25120__$1;(statearr_25133_25152[2] = inst_25114);
(statearr_25133_25152[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25121 === 10))
{var inst_25112 = (state_25120[2]);var state_25120__$1 = state_25120;var statearr_25134_25153 = state_25120__$1;(statearr_25134_25153[2] = inst_25112);
(statearr_25134_25153[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25121 === 8))
{var inst_25092 = (state_25120[10]);var inst_25101 = (state_25120[9]);var inst_25100 = (state_25120[7]);var inst_25099 = (state_25120[8]);var inst_25104 = (function (){var c = inst_25101;var v = inst_25100;var vec__25097 = inst_25099;var cs = inst_25092;return ((function (c,v,vec__25097,cs,inst_25092,inst_25101,inst_25100,inst_25099,state_val_25121,c__11799__auto___25144,out){
return (function (p1__25037_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25037_SHARP_);
});
;})(c,v,vec__25097,cs,inst_25092,inst_25101,inst_25100,inst_25099,state_val_25121,c__11799__auto___25144,out))
})();var inst_25105 = cljs.core.filterv.call(null,inst_25104,inst_25092);var inst_25092__$1 = inst_25105;var state_25120__$1 = (function (){var statearr_25135 = state_25120;(statearr_25135[10] = inst_25092__$1);
return statearr_25135;
})();var statearr_25136_25154 = state_25120__$1;(statearr_25136_25154[2] = null);
(statearr_25136_25154[1] = 2);
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
});})(c__11799__auto___25144,out))
;return ((function (switch__11682__auto__,c__11799__auto___25144,out){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_25140 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25140[0] = state_machine__11683__auto__);
(statearr_25140[1] = 1);
return statearr_25140;
});
var state_machine__11683__auto____1 = (function (state_25120){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_25120);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e25141){if((e25141 instanceof Object))
{var ex__11686__auto__ = e25141;var statearr_25142_25155 = state_25120;(statearr_25142_25155[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25120);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25156 = state_25120;
state_25120 = G__25156;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_25120){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_25120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___25144,out))
})();var state__11801__auto__ = (function (){var statearr_25143 = f__11800__auto__.call(null);(statearr_25143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___25144);
return statearr_25143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___25144,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11799__auto___25249 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___25249,out){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___25249,out){
return (function (state_25226){var state_val_25227 = (state_25226[1]);if((state_val_25227 === 7))
{var inst_25208 = (state_25226[7]);var inst_25208__$1 = (state_25226[2]);var inst_25209 = (inst_25208__$1 == null);var inst_25210 = cljs.core.not.call(null,inst_25209);var state_25226__$1 = (function (){var statearr_25228 = state_25226;(statearr_25228[7] = inst_25208__$1);
return statearr_25228;
})();if(inst_25210)
{var statearr_25229_25250 = state_25226__$1;(statearr_25229_25250[1] = 8);
} else
{var statearr_25230_25251 = state_25226__$1;(statearr_25230_25251[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25227 === 1))
{var inst_25203 = 0;var state_25226__$1 = (function (){var statearr_25231 = state_25226;(statearr_25231[8] = inst_25203);
return statearr_25231;
})();var statearr_25232_25252 = state_25226__$1;(statearr_25232_25252[2] = null);
(statearr_25232_25252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25227 === 4))
{var state_25226__$1 = state_25226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25226__$1,7,ch);
} else
{if((state_val_25227 === 6))
{var inst_25221 = (state_25226[2]);var state_25226__$1 = state_25226;var statearr_25233_25253 = state_25226__$1;(statearr_25233_25253[2] = inst_25221);
(statearr_25233_25253[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25227 === 3))
{var inst_25223 = (state_25226[2]);var inst_25224 = cljs.core.async.close_BANG_.call(null,out);var state_25226__$1 = (function (){var statearr_25234 = state_25226;(statearr_25234[9] = inst_25223);
return statearr_25234;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25226__$1,inst_25224);
} else
{if((state_val_25227 === 2))
{var inst_25203 = (state_25226[8]);var inst_25205 = (inst_25203 < n);var state_25226__$1 = state_25226;if(cljs.core.truth_(inst_25205))
{var statearr_25235_25254 = state_25226__$1;(statearr_25235_25254[1] = 4);
} else
{var statearr_25236_25255 = state_25226__$1;(statearr_25236_25255[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25227 === 11))
{var inst_25203 = (state_25226[8]);var inst_25213 = (state_25226[2]);var inst_25214 = (inst_25203 + 1);var inst_25203__$1 = inst_25214;var state_25226__$1 = (function (){var statearr_25237 = state_25226;(statearr_25237[8] = inst_25203__$1);
(statearr_25237[10] = inst_25213);
return statearr_25237;
})();var statearr_25238_25256 = state_25226__$1;(statearr_25238_25256[2] = null);
(statearr_25238_25256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25227 === 9))
{var state_25226__$1 = state_25226;var statearr_25239_25257 = state_25226__$1;(statearr_25239_25257[2] = null);
(statearr_25239_25257[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25227 === 5))
{var state_25226__$1 = state_25226;var statearr_25240_25258 = state_25226__$1;(statearr_25240_25258[2] = null);
(statearr_25240_25258[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25227 === 10))
{var inst_25218 = (state_25226[2]);var state_25226__$1 = state_25226;var statearr_25241_25259 = state_25226__$1;(statearr_25241_25259[2] = inst_25218);
(statearr_25241_25259[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25227 === 8))
{var inst_25208 = (state_25226[7]);var state_25226__$1 = state_25226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25226__$1,11,out,inst_25208);
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
});})(c__11799__auto___25249,out))
;return ((function (switch__11682__auto__,c__11799__auto___25249,out){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_25245 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25245[0] = state_machine__11683__auto__);
(statearr_25245[1] = 1);
return statearr_25245;
});
var state_machine__11683__auto____1 = (function (state_25226){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_25226);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e25246){if((e25246 instanceof Object))
{var ex__11686__auto__ = e25246;var statearr_25247_25260 = state_25226;(statearr_25247_25260[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25226);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25261 = state_25226;
state_25226 = G__25261;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_25226){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_25226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___25249,out))
})();var state__11801__auto__ = (function (){var statearr_25248 = f__11800__auto__.call(null);(statearr_25248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___25249);
return statearr_25248;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___25249,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11799__auto___25358 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___25358,out){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___25358,out){
return (function (state_25333){var state_val_25334 = (state_25333[1]);if((state_val_25334 === 7))
{var inst_25328 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25335_25359 = state_25333__$1;(statearr_25335_25359[2] = inst_25328);
(statearr_25335_25359[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 1))
{var inst_25310 = null;var state_25333__$1 = (function (){var statearr_25336 = state_25333;(statearr_25336[7] = inst_25310);
return statearr_25336;
})();var statearr_25337_25360 = state_25333__$1;(statearr_25337_25360[2] = null);
(statearr_25337_25360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 4))
{var inst_25313 = (state_25333[8]);var inst_25313__$1 = (state_25333[2]);var inst_25314 = (inst_25313__$1 == null);var inst_25315 = cljs.core.not.call(null,inst_25314);var state_25333__$1 = (function (){var statearr_25338 = state_25333;(statearr_25338[8] = inst_25313__$1);
return statearr_25338;
})();if(inst_25315)
{var statearr_25339_25361 = state_25333__$1;(statearr_25339_25361[1] = 5);
} else
{var statearr_25340_25362 = state_25333__$1;(statearr_25340_25362[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 6))
{var state_25333__$1 = state_25333;var statearr_25341_25363 = state_25333__$1;(statearr_25341_25363[2] = null);
(statearr_25341_25363[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 3))
{var inst_25330 = (state_25333[2]);var inst_25331 = cljs.core.async.close_BANG_.call(null,out);var state_25333__$1 = (function (){var statearr_25342 = state_25333;(statearr_25342[9] = inst_25330);
return statearr_25342;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25333__$1,inst_25331);
} else
{if((state_val_25334 === 2))
{var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25333__$1,4,ch);
} else
{if((state_val_25334 === 11))
{var inst_25313 = (state_25333[8]);var inst_25322 = (state_25333[2]);var inst_25310 = inst_25313;var state_25333__$1 = (function (){var statearr_25343 = state_25333;(statearr_25343[10] = inst_25322);
(statearr_25343[7] = inst_25310);
return statearr_25343;
})();var statearr_25344_25364 = state_25333__$1;(statearr_25344_25364[2] = null);
(statearr_25344_25364[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 9))
{var inst_25313 = (state_25333[8]);var state_25333__$1 = state_25333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25333__$1,11,out,inst_25313);
} else
{if((state_val_25334 === 5))
{var inst_25310 = (state_25333[7]);var inst_25313 = (state_25333[8]);var inst_25317 = cljs.core._EQ_.call(null,inst_25313,inst_25310);var state_25333__$1 = state_25333;if(inst_25317)
{var statearr_25346_25365 = state_25333__$1;(statearr_25346_25365[1] = 8);
} else
{var statearr_25347_25366 = state_25333__$1;(statearr_25347_25366[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 10))
{var inst_25325 = (state_25333[2]);var state_25333__$1 = state_25333;var statearr_25348_25367 = state_25333__$1;(statearr_25348_25367[2] = inst_25325);
(statearr_25348_25367[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25334 === 8))
{var inst_25310 = (state_25333[7]);var tmp25345 = inst_25310;var inst_25310__$1 = tmp25345;var state_25333__$1 = (function (){var statearr_25349 = state_25333;(statearr_25349[7] = inst_25310__$1);
return statearr_25349;
})();var statearr_25350_25368 = state_25333__$1;(statearr_25350_25368[2] = null);
(statearr_25350_25368[1] = 2);
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
});})(c__11799__auto___25358,out))
;return ((function (switch__11682__auto__,c__11799__auto___25358,out){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_25354 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25354[0] = state_machine__11683__auto__);
(statearr_25354[1] = 1);
return statearr_25354;
});
var state_machine__11683__auto____1 = (function (state_25333){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_25333);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e25355){if((e25355 instanceof Object))
{var ex__11686__auto__ = e25355;var statearr_25356_25369 = state_25333;(statearr_25356_25369[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25333);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25370 = state_25333;
state_25333 = G__25370;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_25333){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_25333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___25358,out))
})();var state__11801__auto__ = (function (){var statearr_25357 = f__11800__auto__.call(null);(statearr_25357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___25358);
return statearr_25357;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___25358,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11799__auto___25505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___25505,out){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___25505,out){
return (function (state_25475){var state_val_25476 = (state_25475[1]);if((state_val_25476 === 7))
{var inst_25471 = (state_25475[2]);var state_25475__$1 = state_25475;var statearr_25477_25506 = state_25475__$1;(statearr_25477_25506[2] = inst_25471);
(statearr_25477_25506[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25476 === 1))
{var inst_25438 = (new Array(n));var inst_25439 = inst_25438;var inst_25440 = 0;var state_25475__$1 = (function (){var statearr_25478 = state_25475;(statearr_25478[7] = inst_25440);
(statearr_25478[8] = inst_25439);
return statearr_25478;
})();var statearr_25479_25507 = state_25475__$1;(statearr_25479_25507[2] = null);
(statearr_25479_25507[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25476 === 4))
{var inst_25443 = (state_25475[9]);var inst_25443__$1 = (state_25475[2]);var inst_25444 = (inst_25443__$1 == null);var inst_25445 = cljs.core.not.call(null,inst_25444);var state_25475__$1 = (function (){var statearr_25480 = state_25475;(statearr_25480[9] = inst_25443__$1);
return statearr_25480;
})();if(inst_25445)
{var statearr_25481_25508 = state_25475__$1;(statearr_25481_25508[1] = 5);
} else
{var statearr_25482_25509 = state_25475__$1;(statearr_25482_25509[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25476 === 15))
{var inst_25465 = (state_25475[2]);var state_25475__$1 = state_25475;var statearr_25483_25510 = state_25475__$1;(statearr_25483_25510[2] = inst_25465);
(statearr_25483_25510[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25476 === 13))
{var state_25475__$1 = state_25475;var statearr_25484_25511 = state_25475__$1;(statearr_25484_25511[2] = null);
(statearr_25484_25511[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25476 === 6))
{var inst_25440 = (state_25475[7]);var inst_25461 = (inst_25440 > 0);var state_25475__$1 = state_25475;if(cljs.core.truth_(inst_25461))
{var statearr_25485_25512 = state_25475__$1;(statearr_25485_25512[1] = 12);
} else
{var statearr_25486_25513 = state_25475__$1;(statearr_25486_25513[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25476 === 3))
{var inst_25473 = (state_25475[2]);var state_25475__$1 = state_25475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25475__$1,inst_25473);
} else
{if((state_val_25476 === 12))
{var inst_25439 = (state_25475[8]);var inst_25463 = cljs.core.vec.call(null,inst_25439);var state_25475__$1 = state_25475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25475__$1,15,out,inst_25463);
} else
{if((state_val_25476 === 2))
{var state_25475__$1 = state_25475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25475__$1,4,ch);
} else
{if((state_val_25476 === 11))
{var inst_25455 = (state_25475[2]);var inst_25456 = (new Array(n));var inst_25439 = inst_25456;var inst_25440 = 0;var state_25475__$1 = (function (){var statearr_25487 = state_25475;(statearr_25487[10] = inst_25455);
(statearr_25487[7] = inst_25440);
(statearr_25487[8] = inst_25439);
return statearr_25487;
})();var statearr_25488_25514 = state_25475__$1;(statearr_25488_25514[2] = null);
(statearr_25488_25514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25476 === 9))
{var inst_25439 = (state_25475[8]);var inst_25453 = cljs.core.vec.call(null,inst_25439);var state_25475__$1 = state_25475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25475__$1,11,out,inst_25453);
} else
{if((state_val_25476 === 5))
{var inst_25448 = (state_25475[11]);var inst_25440 = (state_25475[7]);var inst_25443 = (state_25475[9]);var inst_25439 = (state_25475[8]);var inst_25447 = (inst_25439[inst_25440] = inst_25443);var inst_25448__$1 = (inst_25440 + 1);var inst_25449 = (inst_25448__$1 < n);var state_25475__$1 = (function (){var statearr_25489 = state_25475;(statearr_25489[11] = inst_25448__$1);
(statearr_25489[12] = inst_25447);
return statearr_25489;
})();if(cljs.core.truth_(inst_25449))
{var statearr_25490_25515 = state_25475__$1;(statearr_25490_25515[1] = 8);
} else
{var statearr_25491_25516 = state_25475__$1;(statearr_25491_25516[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25476 === 14))
{var inst_25468 = (state_25475[2]);var inst_25469 = cljs.core.async.close_BANG_.call(null,out);var state_25475__$1 = (function (){var statearr_25493 = state_25475;(statearr_25493[13] = inst_25468);
return statearr_25493;
})();var statearr_25494_25517 = state_25475__$1;(statearr_25494_25517[2] = inst_25469);
(statearr_25494_25517[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25476 === 10))
{var inst_25459 = (state_25475[2]);var state_25475__$1 = state_25475;var statearr_25495_25518 = state_25475__$1;(statearr_25495_25518[2] = inst_25459);
(statearr_25495_25518[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25476 === 8))
{var inst_25448 = (state_25475[11]);var inst_25439 = (state_25475[8]);var tmp25492 = inst_25439;var inst_25439__$1 = tmp25492;var inst_25440 = inst_25448;var state_25475__$1 = (function (){var statearr_25496 = state_25475;(statearr_25496[7] = inst_25440);
(statearr_25496[8] = inst_25439__$1);
return statearr_25496;
})();var statearr_25497_25519 = state_25475__$1;(statearr_25497_25519[2] = null);
(statearr_25497_25519[1] = 2);
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
});})(c__11799__auto___25505,out))
;return ((function (switch__11682__auto__,c__11799__auto___25505,out){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_25501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25501[0] = state_machine__11683__auto__);
(statearr_25501[1] = 1);
return statearr_25501;
});
var state_machine__11683__auto____1 = (function (state_25475){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_25475);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e25502){if((e25502 instanceof Object))
{var ex__11686__auto__ = e25502;var statearr_25503_25520 = state_25475;(statearr_25503_25520[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25475);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25521 = state_25475;
state_25475 = G__25521;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_25475){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_25475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___25505,out))
})();var state__11801__auto__ = (function (){var statearr_25504 = f__11800__auto__.call(null);(statearr_25504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___25505);
return statearr_25504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___25505,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11799__auto___25664 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__11799__auto___25664,out){
return (function (){var f__11800__auto__ = (function (){var switch__11682__auto__ = ((function (c__11799__auto___25664,out){
return (function (state_25634){var state_val_25635 = (state_25634[1]);if((state_val_25635 === 7))
{var inst_25630 = (state_25634[2]);var state_25634__$1 = state_25634;var statearr_25636_25665 = state_25634__$1;(statearr_25636_25665[2] = inst_25630);
(statearr_25636_25665[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25635 === 1))
{var inst_25593 = [];var inst_25594 = inst_25593;var inst_25595 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_25634__$1 = (function (){var statearr_25637 = state_25634;(statearr_25637[7] = inst_25595);
(statearr_25637[8] = inst_25594);
return statearr_25637;
})();var statearr_25638_25666 = state_25634__$1;(statearr_25638_25666[2] = null);
(statearr_25638_25666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25635 === 4))
{var inst_25598 = (state_25634[9]);var inst_25598__$1 = (state_25634[2]);var inst_25599 = (inst_25598__$1 == null);var inst_25600 = cljs.core.not.call(null,inst_25599);var state_25634__$1 = (function (){var statearr_25639 = state_25634;(statearr_25639[9] = inst_25598__$1);
return statearr_25639;
})();if(inst_25600)
{var statearr_25640_25667 = state_25634__$1;(statearr_25640_25667[1] = 5);
} else
{var statearr_25641_25668 = state_25634__$1;(statearr_25641_25668[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25635 === 15))
{var inst_25624 = (state_25634[2]);var state_25634__$1 = state_25634;var statearr_25642_25669 = state_25634__$1;(statearr_25642_25669[2] = inst_25624);
(statearr_25642_25669[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25635 === 13))
{var state_25634__$1 = state_25634;var statearr_25643_25670 = state_25634__$1;(statearr_25643_25670[2] = null);
(statearr_25643_25670[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25635 === 6))
{var inst_25594 = (state_25634[8]);var inst_25619 = inst_25594.length;var inst_25620 = (inst_25619 > 0);var state_25634__$1 = state_25634;if(cljs.core.truth_(inst_25620))
{var statearr_25644_25671 = state_25634__$1;(statearr_25644_25671[1] = 12);
} else
{var statearr_25645_25672 = state_25634__$1;(statearr_25645_25672[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25635 === 3))
{var inst_25632 = (state_25634[2]);var state_25634__$1 = state_25634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25634__$1,inst_25632);
} else
{if((state_val_25635 === 12))
{var inst_25594 = (state_25634[8]);var inst_25622 = cljs.core.vec.call(null,inst_25594);var state_25634__$1 = state_25634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25634__$1,15,out,inst_25622);
} else
{if((state_val_25635 === 2))
{var state_25634__$1 = state_25634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25634__$1,4,ch);
} else
{if((state_val_25635 === 11))
{var inst_25602 = (state_25634[10]);var inst_25598 = (state_25634[9]);var inst_25612 = (state_25634[2]);var inst_25613 = [];var inst_25614 = inst_25613.push(inst_25598);var inst_25594 = inst_25613;var inst_25595 = inst_25602;var state_25634__$1 = (function (){var statearr_25646 = state_25634;(statearr_25646[7] = inst_25595);
(statearr_25646[11] = inst_25612);
(statearr_25646[8] = inst_25594);
(statearr_25646[12] = inst_25614);
return statearr_25646;
})();var statearr_25647_25673 = state_25634__$1;(statearr_25647_25673[2] = null);
(statearr_25647_25673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25635 === 9))
{var inst_25594 = (state_25634[8]);var inst_25610 = cljs.core.vec.call(null,inst_25594);var state_25634__$1 = state_25634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25634__$1,11,out,inst_25610);
} else
{if((state_val_25635 === 5))
{var inst_25602 = (state_25634[10]);var inst_25595 = (state_25634[7]);var inst_25598 = (state_25634[9]);var inst_25602__$1 = f.call(null,inst_25598);var inst_25603 = cljs.core._EQ_.call(null,inst_25602__$1,inst_25595);var inst_25604 = cljs.core.keyword_identical_QMARK_.call(null,inst_25595,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_25605 = (inst_25603) || (inst_25604);var state_25634__$1 = (function (){var statearr_25648 = state_25634;(statearr_25648[10] = inst_25602__$1);
return statearr_25648;
})();if(cljs.core.truth_(inst_25605))
{var statearr_25649_25674 = state_25634__$1;(statearr_25649_25674[1] = 8);
} else
{var statearr_25650_25675 = state_25634__$1;(statearr_25650_25675[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25635 === 14))
{var inst_25627 = (state_25634[2]);var inst_25628 = cljs.core.async.close_BANG_.call(null,out);var state_25634__$1 = (function (){var statearr_25652 = state_25634;(statearr_25652[13] = inst_25627);
return statearr_25652;
})();var statearr_25653_25676 = state_25634__$1;(statearr_25653_25676[2] = inst_25628);
(statearr_25653_25676[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25635 === 10))
{var inst_25617 = (state_25634[2]);var state_25634__$1 = state_25634;var statearr_25654_25677 = state_25634__$1;(statearr_25654_25677[2] = inst_25617);
(statearr_25654_25677[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25635 === 8))
{var inst_25602 = (state_25634[10]);var inst_25598 = (state_25634[9]);var inst_25594 = (state_25634[8]);var inst_25607 = inst_25594.push(inst_25598);var tmp25651 = inst_25594;var inst_25594__$1 = tmp25651;var inst_25595 = inst_25602;var state_25634__$1 = (function (){var statearr_25655 = state_25634;(statearr_25655[7] = inst_25595);
(statearr_25655[8] = inst_25594__$1);
(statearr_25655[14] = inst_25607);
return statearr_25655;
})();var statearr_25656_25678 = state_25634__$1;(statearr_25656_25678[2] = null);
(statearr_25656_25678[1] = 2);
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
});})(c__11799__auto___25664,out))
;return ((function (switch__11682__auto__,c__11799__auto___25664,out){
return (function() {
var state_machine__11683__auto__ = null;
var state_machine__11683__auto____0 = (function (){var statearr_25660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25660[0] = state_machine__11683__auto__);
(statearr_25660[1] = 1);
return statearr_25660;
});
var state_machine__11683__auto____1 = (function (state_25634){while(true){
var ret_value__11684__auto__ = (function (){try{while(true){
var result__11685__auto__ = switch__11682__auto__.call(null,state_25634);if(cljs.core.keyword_identical_QMARK_.call(null,result__11685__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11685__auto__;
}
break;
}
}catch (e25661){if((e25661 instanceof Object))
{var ex__11686__auto__ = e25661;var statearr_25662_25679 = state_25634;(statearr_25662_25679[5] = ex__11686__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25661;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11684__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25680 = state_25634;
state_25634 = G__25680;
continue;
}
} else
{return ret_value__11684__auto__;
}
break;
}
});
state_machine__11683__auto__ = function(state_25634){
switch(arguments.length){
case 0:
return state_machine__11683__auto____0.call(this);
case 1:
return state_machine__11683__auto____1.call(this,state_25634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11683__auto____0;
state_machine__11683__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11683__auto____1;
return state_machine__11683__auto__;
})()
;})(switch__11682__auto__,c__11799__auto___25664,out))
})();var state__11801__auto__ = (function (){var statearr_25663 = f__11800__auto__.call(null);(statearr_25663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11799__auto___25664);
return statearr_25663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11801__auto__);
});})(c__11799__auto___25664,out))
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
