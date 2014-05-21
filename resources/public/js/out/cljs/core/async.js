// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11045 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11045 = (function (f,fn_handler,meta11046){
this.f = f;
this.fn_handler = fn_handler;
this.meta11046 = meta11046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11045.cljs$lang$type = true;
cljs.core.async.t11045.cljs$lang$ctorStr = "cljs.core.async/t11045";
cljs.core.async.t11045.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11045");
});
cljs.core.async.t11045.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11047){var self__ = this;
var _11047__$1 = this;return self__.meta11046;
});
cljs.core.async.t11045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11047,meta11046__$1){var self__ = this;
var _11047__$1 = this;return (new cljs.core.async.t11045(self__.f,self__.fn_handler,meta11046__$1));
});
cljs.core.async.__GT_t11045 = (function __GT_t11045(f__$1,fn_handler__$1,meta11046){return (new cljs.core.async.t11045(f__$1,fn_handler__$1,meta11046));
});
}
return (new cljs.core.async.t11045(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11049 = buff;if(G__11049)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11049.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11049.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11049);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11049);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
{var val_11050 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11050);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11050);
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11051 = n;var x_11052 = 0;while(true){
if((x_11052 < n__4291__auto___11051))
{(a[x_11052] = 0);
{
var G__11053 = (x_11052 + 1);
x_11052 = G__11053;
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
var G__11054 = (i + 1);
i = G__11054;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11058 = (function (flag,alt_flag,meta11059){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11059 = meta11059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11058.cljs$lang$type = true;
cljs.core.async.t11058.cljs$lang$ctorStr = "cljs.core.async/t11058";
cljs.core.async.t11058.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11058");
});
cljs.core.async.t11058.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11060){var self__ = this;
var _11060__$1 = this;return self__.meta11059;
});
cljs.core.async.t11058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11060,meta11059__$1){var self__ = this;
var _11060__$1 = this;return (new cljs.core.async.t11058(self__.flag,self__.alt_flag,meta11059__$1));
});
cljs.core.async.__GT_t11058 = (function __GT_t11058(flag__$1,alt_flag__$1,meta11059){return (new cljs.core.async.t11058(flag__$1,alt_flag__$1,meta11059));
});
}
return (new cljs.core.async.t11058(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11064 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11064 = (function (cb,flag,alt_handler,meta11065){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11065 = meta11065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11064.cljs$lang$type = true;
cljs.core.async.t11064.cljs$lang$ctorStr = "cljs.core.async/t11064";
cljs.core.async.t11064.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11064");
});
cljs.core.async.t11064.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11066){var self__ = this;
var _11066__$1 = this;return self__.meta11065;
});
cljs.core.async.t11064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11066,meta11065__$1){var self__ = this;
var _11066__$1 = this;return (new cljs.core.async.t11064(self__.cb,self__.flag,self__.alt_handler,meta11065__$1));
});
cljs.core.async.__GT_t11064 = (function __GT_t11064(cb__$1,flag__$1,alt_handler__$1,meta11065){return (new cljs.core.async.t11064(cb__$1,flag__$1,alt_handler__$1,meta11065));
});
}
return (new cljs.core.async.t11064(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11067_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11067_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11068_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11068_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11069 = (i + 1);
i = G__11069;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__11070){var map__11072 = p__11070;var map__11072__$1 = ((cljs.core.seq_QMARK_.call(null,map__11072))?cljs.core.apply.call(null,cljs.core.hash_map,map__11072):map__11072);var opts = map__11072__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11070 = null;if (arguments.length > 1) {
  p__11070 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11070);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11073){
var ports = cljs.core.first(arglist__11073);
var p__11070 = cljs.core.rest(arglist__11073);
return alts_BANG___delegate(ports,p__11070);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11081 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11081 = (function (ch,f,map_LT_,meta11082){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11082 = meta11082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11081.cljs$lang$type = true;
cljs.core.async.t11081.cljs$lang$ctorStr = "cljs.core.async/t11081";
cljs.core.async.t11081.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11081");
});
cljs.core.async.t11081.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11081.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11081.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11081.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11084 = (function (fn1,_,meta11082,ch,f,map_LT_,meta11085){
this.fn1 = fn1;
this._ = _;
this.meta11082 = meta11082;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11085 = meta11085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11084.cljs$lang$type = true;
cljs.core.async.t11084.cljs$lang$ctorStr = "cljs.core.async/t11084";
cljs.core.async.t11084.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11084");
});
cljs.core.async.t11084.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11084.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11074_SHARP_){return f1.call(null,(((p1__11074_SHARP_ == null))?null:self__.f.call(null,p1__11074_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11086){var self__ = this;
var _11086__$1 = this;return self__.meta11085;
});
cljs.core.async.t11084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11086,meta11085__$1){var self__ = this;
var _11086__$1 = this;return (new cljs.core.async.t11084(self__.fn1,self__._,self__.meta11082,self__.ch,self__.f,self__.map_LT_,meta11085__$1));
});
cljs.core.async.__GT_t11084 = (function __GT_t11084(fn1__$1,___$2,meta11082__$1,ch__$2,f__$2,map_LT___$2,meta11085){return (new cljs.core.async.t11084(fn1__$1,___$2,meta11082__$1,ch__$2,f__$2,map_LT___$2,meta11085));
});
}
return (new cljs.core.async.t11084(fn1,___$1,self__.meta11082,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11081.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11081.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11081.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11083){var self__ = this;
var _11083__$1 = this;return self__.meta11082;
});
cljs.core.async.t11081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11083,meta11082__$1){var self__ = this;
var _11083__$1 = this;return (new cljs.core.async.t11081(self__.ch,self__.f,self__.map_LT_,meta11082__$1));
});
cljs.core.async.__GT_t11081 = (function __GT_t11081(ch__$1,f__$1,map_LT___$1,meta11082){return (new cljs.core.async.t11081(ch__$1,f__$1,map_LT___$1,meta11082));
});
}
return (new cljs.core.async.t11081(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11090 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11090 = (function (ch,f,map_GT_,meta11091){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11091 = meta11091;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11090.cljs$lang$type = true;
cljs.core.async.t11090.cljs$lang$ctorStr = "cljs.core.async/t11090";
cljs.core.async.t11090.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11090");
});
cljs.core.async.t11090.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11090.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11090.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11090.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11090.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11090.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11092){var self__ = this;
var _11092__$1 = this;return self__.meta11091;
});
cljs.core.async.t11090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11092,meta11091__$1){var self__ = this;
var _11092__$1 = this;return (new cljs.core.async.t11090(self__.ch,self__.f,self__.map_GT_,meta11091__$1));
});
cljs.core.async.__GT_t11090 = (function __GT_t11090(ch__$1,f__$1,map_GT___$1,meta11091){return (new cljs.core.async.t11090(ch__$1,f__$1,map_GT___$1,meta11091));
});
}
return (new cljs.core.async.t11090(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11096 = (function (ch,p,filter_GT_,meta11097){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11097 = meta11097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11096.cljs$lang$type = true;
cljs.core.async.t11096.cljs$lang$ctorStr = "cljs.core.async/t11096";
cljs.core.async.t11096.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11096");
});
cljs.core.async.t11096.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11096.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11096.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11096.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11098){var self__ = this;
var _11098__$1 = this;return self__.meta11097;
});
cljs.core.async.t11096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11098,meta11097__$1){var self__ = this;
var _11098__$1 = this;return (new cljs.core.async.t11096(self__.ch,self__.p,self__.filter_GT_,meta11097__$1));
});
cljs.core.async.__GT_t11096 = (function __GT_t11096(ch__$1,p__$1,filter_GT___$1,meta11097){return (new cljs.core.async.t11096(ch__$1,p__$1,filter_GT___$1,meta11097));
});
}
return (new cljs.core.async.t11096(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___11181 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_11160){var state_val_11161 = (state_11160[1]);if((state_val_11161 === 1))
{var state_11160__$1 = state_11160;var statearr_11162_11182 = state_11160__$1;(statearr_11162_11182[2] = null);
(statearr_11162_11182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11161 === 2))
{var state_11160__$1 = state_11160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11160__$1,4,ch);
} else
{if((state_val_11161 === 3))
{var inst_11158 = (state_11160[2]);var state_11160__$1 = state_11160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11160__$1,inst_11158);
} else
{if((state_val_11161 === 4))
{var inst_11142 = (state_11160[7]);var inst_11142__$1 = (state_11160[2]);var inst_11143 = (inst_11142__$1 == null);var state_11160__$1 = (function (){var statearr_11163 = state_11160;(statearr_11163[7] = inst_11142__$1);
return statearr_11163;
})();if(cljs.core.truth_(inst_11143))
{var statearr_11164_11183 = state_11160__$1;(statearr_11164_11183[1] = 5);
} else
{var statearr_11165_11184 = state_11160__$1;(statearr_11165_11184[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11161 === 5))
{var inst_11145 = cljs.core.async.close_BANG_.call(null,out);var state_11160__$1 = state_11160;var statearr_11166_11185 = state_11160__$1;(statearr_11166_11185[2] = inst_11145);
(statearr_11166_11185[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11161 === 6))
{var inst_11142 = (state_11160[7]);var inst_11147 = p.call(null,inst_11142);var state_11160__$1 = state_11160;if(cljs.core.truth_(inst_11147))
{var statearr_11167_11186 = state_11160__$1;(statearr_11167_11186[1] = 8);
} else
{var statearr_11168_11187 = state_11160__$1;(statearr_11168_11187[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11161 === 7))
{var inst_11156 = (state_11160[2]);var state_11160__$1 = state_11160;var statearr_11169_11188 = state_11160__$1;(statearr_11169_11188[2] = inst_11156);
(statearr_11169_11188[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11161 === 8))
{var inst_11142 = (state_11160[7]);var state_11160__$1 = state_11160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11160__$1,11,out,inst_11142);
} else
{if((state_val_11161 === 9))
{var state_11160__$1 = state_11160;var statearr_11170_11189 = state_11160__$1;(statearr_11170_11189[2] = null);
(statearr_11170_11189[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11161 === 10))
{var inst_11153 = (state_11160[2]);var state_11160__$1 = (function (){var statearr_11171 = state_11160;(statearr_11171[8] = inst_11153);
return statearr_11171;
})();var statearr_11172_11190 = state_11160__$1;(statearr_11172_11190[2] = null);
(statearr_11172_11190[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11161 === 11))
{var inst_11150 = (state_11160[2]);var state_11160__$1 = state_11160;var statearr_11173_11191 = state_11160__$1;(statearr_11173_11191[2] = inst_11150);
(statearr_11173_11191[1] = 10);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11177 = [null,null,null,null,null,null,null,null,null];(statearr_11177[0] = state_machine__6218__auto__);
(statearr_11177[1] = 1);
return statearr_11177;
});
var state_machine__6218__auto____1 = (function (state_11160){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11160);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11178){if((e11178 instanceof Object))
{var ex__6221__auto__ = e11178;var statearr_11179_11192 = state_11160;(statearr_11179_11192[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11160);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11193 = state_11160;
state_11160 = G__11193;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11160){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_11180 = f__6233__auto__.call(null);(statearr_11180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___11181);
return statearr_11180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_11359){var state_val_11360 = (state_11359[1]);if((state_val_11360 === 1))
{var state_11359__$1 = state_11359;var statearr_11361_11402 = state_11359__$1;(statearr_11361_11402[2] = null);
(statearr_11361_11402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 2))
{var state_11359__$1 = state_11359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11359__$1,4,in$);
} else
{if((state_val_11360 === 3))
{var inst_11357 = (state_11359[2]);var state_11359__$1 = state_11359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11359__$1,inst_11357);
} else
{if((state_val_11360 === 4))
{var inst_11300 = (state_11359[7]);var inst_11300__$1 = (state_11359[2]);var inst_11301 = (inst_11300__$1 == null);var state_11359__$1 = (function (){var statearr_11362 = state_11359;(statearr_11362[7] = inst_11300__$1);
return statearr_11362;
})();if(cljs.core.truth_(inst_11301))
{var statearr_11363_11403 = state_11359__$1;(statearr_11363_11403[1] = 5);
} else
{var statearr_11364_11404 = state_11359__$1;(statearr_11364_11404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 5))
{var inst_11303 = cljs.core.async.close_BANG_.call(null,out);var state_11359__$1 = state_11359;var statearr_11365_11405 = state_11359__$1;(statearr_11365_11405[2] = inst_11303);
(statearr_11365_11405[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 6))
{var inst_11300 = (state_11359[7]);var inst_11309 = f.call(null,inst_11300);var inst_11310 = cljs.core.seq.call(null,inst_11309);var inst_11311 = inst_11310;var inst_11312 = null;var inst_11313 = 0;var inst_11314 = 0;var state_11359__$1 = (function (){var statearr_11366 = state_11359;(statearr_11366[8] = inst_11313);
(statearr_11366[9] = inst_11314);
(statearr_11366[10] = inst_11312);
(statearr_11366[11] = inst_11311);
return statearr_11366;
})();var statearr_11367_11406 = state_11359__$1;(statearr_11367_11406[2] = null);
(statearr_11367_11406[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 7))
{var inst_11355 = (state_11359[2]);var state_11359__$1 = state_11359;var statearr_11368_11407 = state_11359__$1;(statearr_11368_11407[2] = inst_11355);
(statearr_11368_11407[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 8))
{var inst_11313 = (state_11359[8]);var inst_11314 = (state_11359[9]);var inst_11316 = (inst_11314 < inst_11313);var inst_11317 = inst_11316;var state_11359__$1 = state_11359;if(cljs.core.truth_(inst_11317))
{var statearr_11369_11408 = state_11359__$1;(statearr_11369_11408[1] = 10);
} else
{var statearr_11370_11409 = state_11359__$1;(statearr_11370_11409[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 9))
{var inst_11347 = (state_11359[2]);var inst_11348 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11359__$1 = (function (){var statearr_11371 = state_11359;(statearr_11371[12] = inst_11347);
return statearr_11371;
})();if(cljs.core.truth_(inst_11348))
{var statearr_11372_11410 = state_11359__$1;(statearr_11372_11410[1] = 21);
} else
{var statearr_11373_11411 = state_11359__$1;(statearr_11373_11411[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 10))
{var inst_11314 = (state_11359[9]);var inst_11312 = (state_11359[10]);var inst_11319 = cljs.core._nth.call(null,inst_11312,inst_11314);var state_11359__$1 = state_11359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11359__$1,13,out,inst_11319);
} else
{if((state_val_11360 === 11))
{var inst_11325 = (state_11359[13]);var inst_11311 = (state_11359[11]);var inst_11325__$1 = cljs.core.seq.call(null,inst_11311);var state_11359__$1 = (function (){var statearr_11377 = state_11359;(statearr_11377[13] = inst_11325__$1);
return statearr_11377;
})();if(inst_11325__$1)
{var statearr_11378_11412 = state_11359__$1;(statearr_11378_11412[1] = 14);
} else
{var statearr_11379_11413 = state_11359__$1;(statearr_11379_11413[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 12))
{var inst_11345 = (state_11359[2]);var state_11359__$1 = state_11359;var statearr_11380_11414 = state_11359__$1;(statearr_11380_11414[2] = inst_11345);
(statearr_11380_11414[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 13))
{var inst_11313 = (state_11359[8]);var inst_11314 = (state_11359[9]);var inst_11312 = (state_11359[10]);var inst_11311 = (state_11359[11]);var inst_11321 = (state_11359[2]);var inst_11322 = (inst_11314 + 1);var tmp11374 = inst_11313;var tmp11375 = inst_11312;var tmp11376 = inst_11311;var inst_11311__$1 = tmp11376;var inst_11312__$1 = tmp11375;var inst_11313__$1 = tmp11374;var inst_11314__$1 = inst_11322;var state_11359__$1 = (function (){var statearr_11381 = state_11359;(statearr_11381[8] = inst_11313__$1);
(statearr_11381[9] = inst_11314__$1);
(statearr_11381[14] = inst_11321);
(statearr_11381[10] = inst_11312__$1);
(statearr_11381[11] = inst_11311__$1);
return statearr_11381;
})();var statearr_11382_11415 = state_11359__$1;(statearr_11382_11415[2] = null);
(statearr_11382_11415[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 14))
{var inst_11325 = (state_11359[13]);var inst_11327 = cljs.core.chunked_seq_QMARK_.call(null,inst_11325);var state_11359__$1 = state_11359;if(inst_11327)
{var statearr_11383_11416 = state_11359__$1;(statearr_11383_11416[1] = 17);
} else
{var statearr_11384_11417 = state_11359__$1;(statearr_11384_11417[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 15))
{var state_11359__$1 = state_11359;var statearr_11385_11418 = state_11359__$1;(statearr_11385_11418[2] = null);
(statearr_11385_11418[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 16))
{var inst_11343 = (state_11359[2]);var state_11359__$1 = state_11359;var statearr_11386_11419 = state_11359__$1;(statearr_11386_11419[2] = inst_11343);
(statearr_11386_11419[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 17))
{var inst_11325 = (state_11359[13]);var inst_11329 = cljs.core.chunk_first.call(null,inst_11325);var inst_11330 = cljs.core.chunk_rest.call(null,inst_11325);var inst_11331 = cljs.core.count.call(null,inst_11329);var inst_11311 = inst_11330;var inst_11312 = inst_11329;var inst_11313 = inst_11331;var inst_11314 = 0;var state_11359__$1 = (function (){var statearr_11387 = state_11359;(statearr_11387[8] = inst_11313);
(statearr_11387[9] = inst_11314);
(statearr_11387[10] = inst_11312);
(statearr_11387[11] = inst_11311);
return statearr_11387;
})();var statearr_11388_11420 = state_11359__$1;(statearr_11388_11420[2] = null);
(statearr_11388_11420[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 18))
{var inst_11325 = (state_11359[13]);var inst_11334 = cljs.core.first.call(null,inst_11325);var state_11359__$1 = state_11359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11359__$1,20,out,inst_11334);
} else
{if((state_val_11360 === 19))
{var inst_11340 = (state_11359[2]);var state_11359__$1 = state_11359;var statearr_11389_11421 = state_11359__$1;(statearr_11389_11421[2] = inst_11340);
(statearr_11389_11421[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 20))
{var inst_11325 = (state_11359[13]);var inst_11336 = (state_11359[2]);var inst_11337 = cljs.core.next.call(null,inst_11325);var inst_11311 = inst_11337;var inst_11312 = null;var inst_11313 = 0;var inst_11314 = 0;var state_11359__$1 = (function (){var statearr_11390 = state_11359;(statearr_11390[15] = inst_11336);
(statearr_11390[8] = inst_11313);
(statearr_11390[9] = inst_11314);
(statearr_11390[10] = inst_11312);
(statearr_11390[11] = inst_11311);
return statearr_11390;
})();var statearr_11391_11422 = state_11359__$1;(statearr_11391_11422[2] = null);
(statearr_11391_11422[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 21))
{var state_11359__$1 = state_11359;var statearr_11392_11423 = state_11359__$1;(statearr_11392_11423[2] = null);
(statearr_11392_11423[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 22))
{var state_11359__$1 = state_11359;var statearr_11393_11424 = state_11359__$1;(statearr_11393_11424[2] = null);
(statearr_11393_11424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11360 === 23))
{var inst_11353 = (state_11359[2]);var state_11359__$1 = state_11359;var statearr_11394_11425 = state_11359__$1;(statearr_11394_11425[2] = inst_11353);
(statearr_11394_11425[1] = 7);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11398[0] = state_machine__6218__auto__);
(statearr_11398[1] = 1);
return statearr_11398;
});
var state_machine__6218__auto____1 = (function (state_11359){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11359);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11399){if((e11399 instanceof Object))
{var ex__6221__auto__ = e11399;var statearr_11400_11426 = state_11359;(statearr_11400_11426[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11359);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11427 = state_11359;
state_11359 = G__11427;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11359){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_11401 = f__6233__auto__.call(null);(statearr_11401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_11401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
return c__6232__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6232__auto___11522 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_11498){var state_val_11499 = (state_11498[1]);if((state_val_11499 === 1))
{var state_11498__$1 = state_11498;var statearr_11500_11523 = state_11498__$1;(statearr_11500_11523[2] = null);
(statearr_11500_11523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 2))
{var state_11498__$1 = state_11498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11498__$1,4,from);
} else
{if((state_val_11499 === 3))
{var inst_11496 = (state_11498[2]);var state_11498__$1 = state_11498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11498__$1,inst_11496);
} else
{if((state_val_11499 === 4))
{var inst_11477 = (state_11498[7]);var inst_11477__$1 = (state_11498[2]);var inst_11478 = (inst_11477__$1 == null);var state_11498__$1 = (function (){var statearr_11501 = state_11498;(statearr_11501[7] = inst_11477__$1);
return statearr_11501;
})();if(cljs.core.truth_(inst_11478))
{var statearr_11502_11524 = state_11498__$1;(statearr_11502_11524[1] = 5);
} else
{var statearr_11503_11525 = state_11498__$1;(statearr_11503_11525[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 5))
{var state_11498__$1 = state_11498;if(cljs.core.truth_(close_QMARK_))
{var statearr_11504_11526 = state_11498__$1;(statearr_11504_11526[1] = 8);
} else
{var statearr_11505_11527 = state_11498__$1;(statearr_11505_11527[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 6))
{var inst_11477 = (state_11498[7]);var state_11498__$1 = state_11498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11498__$1,11,to,inst_11477);
} else
{if((state_val_11499 === 7))
{var inst_11494 = (state_11498[2]);var state_11498__$1 = state_11498;var statearr_11506_11528 = state_11498__$1;(statearr_11506_11528[2] = inst_11494);
(statearr_11506_11528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 8))
{var inst_11481 = cljs.core.async.close_BANG_.call(null,to);var state_11498__$1 = state_11498;var statearr_11507_11529 = state_11498__$1;(statearr_11507_11529[2] = inst_11481);
(statearr_11507_11529[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 9))
{var state_11498__$1 = state_11498;var statearr_11508_11530 = state_11498__$1;(statearr_11508_11530[2] = null);
(statearr_11508_11530[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 10))
{var inst_11484 = (state_11498[2]);var state_11498__$1 = state_11498;var statearr_11509_11531 = state_11498__$1;(statearr_11509_11531[2] = inst_11484);
(statearr_11509_11531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 11))
{var inst_11487 = (state_11498[2]);var state_11498__$1 = state_11498;if(cljs.core.truth_(inst_11487))
{var statearr_11510_11532 = state_11498__$1;(statearr_11510_11532[1] = 12);
} else
{var statearr_11511_11533 = state_11498__$1;(statearr_11511_11533[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 12))
{var state_11498__$1 = state_11498;var statearr_11512_11534 = state_11498__$1;(statearr_11512_11534[2] = null);
(statearr_11512_11534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 13))
{var state_11498__$1 = state_11498;var statearr_11513_11535 = state_11498__$1;(statearr_11513_11535[2] = null);
(statearr_11513_11535[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11499 === 14))
{var inst_11492 = (state_11498[2]);var state_11498__$1 = state_11498;var statearr_11514_11536 = state_11498__$1;(statearr_11514_11536[2] = inst_11492);
(statearr_11514_11536[1] = 7);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11518 = [null,null,null,null,null,null,null,null];(statearr_11518[0] = state_machine__6218__auto__);
(statearr_11518[1] = 1);
return statearr_11518;
});
var state_machine__6218__auto____1 = (function (state_11498){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11498);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11519){if((e11519 instanceof Object))
{var ex__6221__auto__ = e11519;var statearr_11520_11537 = state_11498;(statearr_11520_11537[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11498);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11538 = state_11498;
state_11498 = G__11538;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11498){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_11521 = f__6233__auto__.call(null);(statearr_11521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___11522);
return statearr_11521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6232__auto___11639 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_11614){var state_val_11615 = (state_11614[1]);if((state_val_11615 === 1))
{var state_11614__$1 = state_11614;var statearr_11616_11640 = state_11614__$1;(statearr_11616_11640[2] = null);
(statearr_11616_11640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 2))
{var state_11614__$1 = state_11614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11614__$1,4,ch);
} else
{if((state_val_11615 === 3))
{var inst_11612 = (state_11614[2]);var state_11614__$1 = state_11614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11614__$1,inst_11612);
} else
{if((state_val_11615 === 4))
{var inst_11591 = (state_11614[7]);var inst_11591__$1 = (state_11614[2]);var inst_11592 = (inst_11591__$1 == null);var state_11614__$1 = (function (){var statearr_11617 = state_11614;(statearr_11617[7] = inst_11591__$1);
return statearr_11617;
})();if(cljs.core.truth_(inst_11592))
{var statearr_11618_11641 = state_11614__$1;(statearr_11618_11641[1] = 5);
} else
{var statearr_11619_11642 = state_11614__$1;(statearr_11619_11642[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 5))
{var inst_11594 = cljs.core.async.close_BANG_.call(null,tc);var inst_11595 = cljs.core.async.close_BANG_.call(null,fc);var state_11614__$1 = (function (){var statearr_11620 = state_11614;(statearr_11620[8] = inst_11594);
return statearr_11620;
})();var statearr_11621_11643 = state_11614__$1;(statearr_11621_11643[2] = inst_11595);
(statearr_11621_11643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 6))
{var inst_11591 = (state_11614[7]);var inst_11597 = p.call(null,inst_11591);var state_11614__$1 = state_11614;if(cljs.core.truth_(inst_11597))
{var statearr_11622_11644 = state_11614__$1;(statearr_11622_11644[1] = 9);
} else
{var statearr_11623_11645 = state_11614__$1;(statearr_11623_11645[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 7))
{var inst_11610 = (state_11614[2]);var state_11614__$1 = state_11614;var statearr_11624_11646 = state_11614__$1;(statearr_11624_11646[2] = inst_11610);
(statearr_11624_11646[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 8))
{var inst_11603 = (state_11614[2]);var state_11614__$1 = state_11614;if(cljs.core.truth_(inst_11603))
{var statearr_11625_11647 = state_11614__$1;(statearr_11625_11647[1] = 12);
} else
{var statearr_11626_11648 = state_11614__$1;(statearr_11626_11648[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 9))
{var state_11614__$1 = state_11614;var statearr_11627_11649 = state_11614__$1;(statearr_11627_11649[2] = tc);
(statearr_11627_11649[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 10))
{var state_11614__$1 = state_11614;var statearr_11628_11650 = state_11614__$1;(statearr_11628_11650[2] = fc);
(statearr_11628_11650[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 11))
{var inst_11591 = (state_11614[7]);var inst_11601 = (state_11614[2]);var state_11614__$1 = state_11614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11614__$1,8,inst_11601,inst_11591);
} else
{if((state_val_11615 === 12))
{var state_11614__$1 = state_11614;var statearr_11629_11651 = state_11614__$1;(statearr_11629_11651[2] = null);
(statearr_11629_11651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 13))
{var state_11614__$1 = state_11614;var statearr_11630_11652 = state_11614__$1;(statearr_11630_11652[2] = null);
(statearr_11630_11652[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11615 === 14))
{var inst_11608 = (state_11614[2]);var state_11614__$1 = state_11614;var statearr_11631_11653 = state_11614__$1;(statearr_11631_11653[2] = inst_11608);
(statearr_11631_11653[1] = 7);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11635 = [null,null,null,null,null,null,null,null,null];(statearr_11635[0] = state_machine__6218__auto__);
(statearr_11635[1] = 1);
return statearr_11635;
});
var state_machine__6218__auto____1 = (function (state_11614){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11614);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11636){if((e11636 instanceof Object))
{var ex__6221__auto__ = e11636;var statearr_11637_11654 = state_11614;(statearr_11637_11654[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11655 = state_11614;
state_11614 = G__11655;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11614){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_11638 = f__6233__auto__.call(null);(statearr_11638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___11639);
return statearr_11638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_11702){var state_val_11703 = (state_11702[1]);if((state_val_11703 === 7))
{var inst_11698 = (state_11702[2]);var state_11702__$1 = state_11702;var statearr_11704_11720 = state_11702__$1;(statearr_11704_11720[2] = inst_11698);
(statearr_11704_11720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11703 === 6))
{var inst_11691 = (state_11702[7]);var inst_11688 = (state_11702[8]);var inst_11695 = f.call(null,inst_11688,inst_11691);var inst_11688__$1 = inst_11695;var state_11702__$1 = (function (){var statearr_11705 = state_11702;(statearr_11705[8] = inst_11688__$1);
return statearr_11705;
})();var statearr_11706_11721 = state_11702__$1;(statearr_11706_11721[2] = null);
(statearr_11706_11721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11703 === 5))
{var inst_11688 = (state_11702[8]);var state_11702__$1 = state_11702;var statearr_11707_11722 = state_11702__$1;(statearr_11707_11722[2] = inst_11688);
(statearr_11707_11722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11703 === 4))
{var inst_11691 = (state_11702[7]);var inst_11691__$1 = (state_11702[2]);var inst_11692 = (inst_11691__$1 == null);var state_11702__$1 = (function (){var statearr_11708 = state_11702;(statearr_11708[7] = inst_11691__$1);
return statearr_11708;
})();if(cljs.core.truth_(inst_11692))
{var statearr_11709_11723 = state_11702__$1;(statearr_11709_11723[1] = 5);
} else
{var statearr_11710_11724 = state_11702__$1;(statearr_11710_11724[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11703 === 3))
{var inst_11700 = (state_11702[2]);var state_11702__$1 = state_11702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11702__$1,inst_11700);
} else
{if((state_val_11703 === 2))
{var state_11702__$1 = state_11702;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11702__$1,4,ch);
} else
{if((state_val_11703 === 1))
{var inst_11688 = init;var state_11702__$1 = (function (){var statearr_11711 = state_11702;(statearr_11711[8] = inst_11688);
return statearr_11711;
})();var statearr_11712_11725 = state_11702__$1;(statearr_11712_11725[2] = null);
(statearr_11712_11725[1] = 2);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11716 = [null,null,null,null,null,null,null,null,null];(statearr_11716[0] = state_machine__6218__auto__);
(statearr_11716[1] = 1);
return statearr_11716;
});
var state_machine__6218__auto____1 = (function (state_11702){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11702);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11717){if((e11717 instanceof Object))
{var ex__6221__auto__ = e11717;var statearr_11718_11726 = state_11702;(statearr_11718_11726[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11702);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11727 = state_11702;
state_11702 = G__11727;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11702){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_11719 = f__6233__auto__.call(null);(statearr_11719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_11719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
return c__6232__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6232__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_11801){var state_val_11802 = (state_11801[1]);if((state_val_11802 === 1))
{var inst_11777 = cljs.core.seq.call(null,coll);var inst_11778 = inst_11777;var state_11801__$1 = (function (){var statearr_11803 = state_11801;(statearr_11803[7] = inst_11778);
return statearr_11803;
})();var statearr_11804_11826 = state_11801__$1;(statearr_11804_11826[2] = null);
(statearr_11804_11826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11802 === 2))
{var inst_11778 = (state_11801[7]);var state_11801__$1 = state_11801;if(cljs.core.truth_(inst_11778))
{var statearr_11805_11827 = state_11801__$1;(statearr_11805_11827[1] = 4);
} else
{var statearr_11806_11828 = state_11801__$1;(statearr_11806_11828[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11802 === 3))
{var inst_11799 = (state_11801[2]);var state_11801__$1 = state_11801;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11801__$1,inst_11799);
} else
{if((state_val_11802 === 4))
{var inst_11778 = (state_11801[7]);var inst_11781 = cljs.core.first.call(null,inst_11778);var state_11801__$1 = state_11801;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11801__$1,7,ch,inst_11781);
} else
{if((state_val_11802 === 5))
{var inst_11778 = (state_11801[7]);var state_11801__$1 = state_11801;var statearr_11807_11829 = state_11801__$1;(statearr_11807_11829[2] = inst_11778);
(statearr_11807_11829[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11802 === 6))
{var inst_11786 = (state_11801[2]);var state_11801__$1 = state_11801;if(cljs.core.truth_(inst_11786))
{var statearr_11808_11830 = state_11801__$1;(statearr_11808_11830[1] = 8);
} else
{var statearr_11809_11831 = state_11801__$1;(statearr_11809_11831[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11802 === 7))
{var inst_11783 = (state_11801[2]);var state_11801__$1 = state_11801;var statearr_11810_11832 = state_11801__$1;(statearr_11810_11832[2] = inst_11783);
(statearr_11810_11832[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11802 === 8))
{var inst_11778 = (state_11801[7]);var inst_11788 = cljs.core.next.call(null,inst_11778);var inst_11778__$1 = inst_11788;var state_11801__$1 = (function (){var statearr_11811 = state_11801;(statearr_11811[7] = inst_11778__$1);
return statearr_11811;
})();var statearr_11812_11833 = state_11801__$1;(statearr_11812_11833[2] = null);
(statearr_11812_11833[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11802 === 9))
{var state_11801__$1 = state_11801;if(cljs.core.truth_(close_QMARK_))
{var statearr_11813_11834 = state_11801__$1;(statearr_11813_11834[1] = 11);
} else
{var statearr_11814_11835 = state_11801__$1;(statearr_11814_11835[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11802 === 10))
{var inst_11797 = (state_11801[2]);var state_11801__$1 = state_11801;var statearr_11815_11836 = state_11801__$1;(statearr_11815_11836[2] = inst_11797);
(statearr_11815_11836[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11802 === 11))
{var inst_11792 = cljs.core.async.close_BANG_.call(null,ch);var state_11801__$1 = state_11801;var statearr_11816_11837 = state_11801__$1;(statearr_11816_11837[2] = inst_11792);
(statearr_11816_11837[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11802 === 12))
{var state_11801__$1 = state_11801;var statearr_11817_11838 = state_11801__$1;(statearr_11817_11838[2] = null);
(statearr_11817_11838[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11802 === 13))
{var inst_11795 = (state_11801[2]);var state_11801__$1 = state_11801;var statearr_11818_11839 = state_11801__$1;(statearr_11818_11839[2] = inst_11795);
(statearr_11818_11839[1] = 10);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_11822 = [null,null,null,null,null,null,null,null];(statearr_11822[0] = state_machine__6218__auto__);
(statearr_11822[1] = 1);
return statearr_11822;
});
var state_machine__6218__auto____1 = (function (state_11801){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_11801);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e11823){if((e11823 instanceof Object))
{var ex__6221__auto__ = e11823;var statearr_11824_11840 = state_11801;(statearr_11824_11840[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11801);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11841 = state_11801;
state_11801 = G__11841;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_11801){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_11801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_11825 = f__6233__auto__.call(null);(statearr_11825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto__);
return statearr_11825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
return c__6232__auto__;
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
cljs.core.async.Mux = (function (){var obj11843 = {};return obj11843;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11845 = {};return obj11845;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12067 = (function (cs,ch,mult,meta12068){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12068 = meta12068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12067.cljs$lang$type = true;
cljs.core.async.t12067.cljs$lang$ctorStr = "cljs.core.async/t12067";
cljs.core.async.t12067.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12067");
});})(cs))
;
cljs.core.async.t12067.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12067.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12067.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12067.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12067.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12069){var self__ = this;
var _12069__$1 = this;return self__.meta12068;
});})(cs))
;
cljs.core.async.t12067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12069,meta12068__$1){var self__ = this;
var _12069__$1 = this;return (new cljs.core.async.t12067(self__.cs,self__.ch,self__.mult,meta12068__$1));
});})(cs))
;
cljs.core.async.__GT_t12067 = ((function (cs){
return (function __GT_t12067(cs__$1,ch__$1,mult__$1,meta12068){return (new cljs.core.async.t12067(cs__$1,ch__$1,mult__$1,meta12068));
});})(cs))
;
}
return (new cljs.core.async.t12067(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6232__auto___12288 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_12200){var state_val_12201 = (state_12200[1]);if((state_val_12201 === 32))
{var inst_12143 = (state_12200[7]);var inst_12141 = (state_12200[8]);var inst_12142 = (state_12200[9]);var inst_12140 = (state_12200[10]);var inst_12155 = (state_12200[2]);var inst_12156 = (inst_12143 + 1);var tmp12202 = inst_12141;var tmp12203 = inst_12142;var tmp12204 = inst_12140;var inst_12140__$1 = tmp12204;var inst_12141__$1 = tmp12202;var inst_12142__$1 = tmp12203;var inst_12143__$1 = inst_12156;var state_12200__$1 = (function (){var statearr_12205 = state_12200;(statearr_12205[7] = inst_12143__$1);
(statearr_12205[8] = inst_12141__$1);
(statearr_12205[9] = inst_12142__$1);
(statearr_12205[10] = inst_12140__$1);
(statearr_12205[11] = inst_12155);
return statearr_12205;
})();var statearr_12206_12289 = state_12200__$1;(statearr_12206_12289[2] = null);
(statearr_12206_12289[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 1))
{var state_12200__$1 = state_12200;var statearr_12207_12290 = state_12200__$1;(statearr_12207_12290[2] = null);
(statearr_12207_12290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 33))
{var inst_12159 = (state_12200[12]);var inst_12161 = cljs.core.chunked_seq_QMARK_.call(null,inst_12159);var state_12200__$1 = state_12200;if(inst_12161)
{var statearr_12208_12291 = state_12200__$1;(statearr_12208_12291[1] = 36);
} else
{var statearr_12209_12292 = state_12200__$1;(statearr_12209_12292[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 2))
{var state_12200__$1 = state_12200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12200__$1,4,ch);
} else
{if((state_val_12201 === 34))
{var state_12200__$1 = state_12200;var statearr_12210_12293 = state_12200__$1;(statearr_12210_12293[2] = null);
(statearr_12210_12293[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 3))
{var inst_12198 = (state_12200[2]);var state_12200__$1 = state_12200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12200__$1,inst_12198);
} else
{if((state_val_12201 === 35))
{var inst_12182 = (state_12200[2]);var state_12200__$1 = state_12200;var statearr_12211_12294 = state_12200__$1;(statearr_12211_12294[2] = inst_12182);
(statearr_12211_12294[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 4))
{var inst_12072 = (state_12200[13]);var inst_12072__$1 = (state_12200[2]);var inst_12073 = (inst_12072__$1 == null);var state_12200__$1 = (function (){var statearr_12212 = state_12200;(statearr_12212[13] = inst_12072__$1);
return statearr_12212;
})();if(cljs.core.truth_(inst_12073))
{var statearr_12213_12295 = state_12200__$1;(statearr_12213_12295[1] = 5);
} else
{var statearr_12214_12296 = state_12200__$1;(statearr_12214_12296[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 36))
{var inst_12159 = (state_12200[12]);var inst_12163 = cljs.core.chunk_first.call(null,inst_12159);var inst_12164 = cljs.core.chunk_rest.call(null,inst_12159);var inst_12165 = cljs.core.count.call(null,inst_12163);var inst_12140 = inst_12164;var inst_12141 = inst_12163;var inst_12142 = inst_12165;var inst_12143 = 0;var state_12200__$1 = (function (){var statearr_12215 = state_12200;(statearr_12215[7] = inst_12143);
(statearr_12215[8] = inst_12141);
(statearr_12215[9] = inst_12142);
(statearr_12215[10] = inst_12140);
return statearr_12215;
})();var statearr_12216_12297 = state_12200__$1;(statearr_12216_12297[2] = null);
(statearr_12216_12297[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 5))
{var inst_12079 = cljs.core.deref.call(null,cs);var inst_12080 = cljs.core.seq.call(null,inst_12079);var inst_12081 = inst_12080;var inst_12082 = null;var inst_12083 = 0;var inst_12084 = 0;var state_12200__$1 = (function (){var statearr_12217 = state_12200;(statearr_12217[14] = inst_12081);
(statearr_12217[15] = inst_12083);
(statearr_12217[16] = inst_12082);
(statearr_12217[17] = inst_12084);
return statearr_12217;
})();var statearr_12218_12298 = state_12200__$1;(statearr_12218_12298[2] = null);
(statearr_12218_12298[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 37))
{var inst_12159 = (state_12200[12]);var inst_12072 = (state_12200[13]);var inst_12168 = (state_12200[18]);var inst_12168__$1 = cljs.core.first.call(null,inst_12159);var inst_12169 = cljs.core.async.put_BANG_.call(null,inst_12168__$1,inst_12072,done);var state_12200__$1 = (function (){var statearr_12219 = state_12200;(statearr_12219[18] = inst_12168__$1);
return statearr_12219;
})();if(cljs.core.truth_(inst_12169))
{var statearr_12220_12299 = state_12200__$1;(statearr_12220_12299[1] = 39);
} else
{var statearr_12221_12300 = state_12200__$1;(statearr_12221_12300[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 6))
{var inst_12132 = (state_12200[19]);var inst_12131 = cljs.core.deref.call(null,cs);var inst_12132__$1 = cljs.core.keys.call(null,inst_12131);var inst_12133 = cljs.core.count.call(null,inst_12132__$1);var inst_12134 = cljs.core.reset_BANG_.call(null,dctr,inst_12133);var inst_12139 = cljs.core.seq.call(null,inst_12132__$1);var inst_12140 = inst_12139;var inst_12141 = null;var inst_12142 = 0;var inst_12143 = 0;var state_12200__$1 = (function (){var statearr_12222 = state_12200;(statearr_12222[7] = inst_12143);
(statearr_12222[8] = inst_12141);
(statearr_12222[9] = inst_12142);
(statearr_12222[10] = inst_12140);
(statearr_12222[20] = inst_12134);
(statearr_12222[19] = inst_12132__$1);
return statearr_12222;
})();var statearr_12223_12301 = state_12200__$1;(statearr_12223_12301[2] = null);
(statearr_12223_12301[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 38))
{var inst_12179 = (state_12200[2]);var state_12200__$1 = state_12200;var statearr_12224_12302 = state_12200__$1;(statearr_12224_12302[2] = inst_12179);
(statearr_12224_12302[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 7))
{var inst_12196 = (state_12200[2]);var state_12200__$1 = state_12200;var statearr_12225_12303 = state_12200__$1;(statearr_12225_12303[2] = inst_12196);
(statearr_12225_12303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 39))
{var state_12200__$1 = state_12200;var statearr_12226_12304 = state_12200__$1;(statearr_12226_12304[2] = null);
(statearr_12226_12304[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 8))
{var inst_12083 = (state_12200[15]);var inst_12084 = (state_12200[17]);var inst_12086 = (inst_12084 < inst_12083);var inst_12087 = inst_12086;var state_12200__$1 = state_12200;if(cljs.core.truth_(inst_12087))
{var statearr_12227_12305 = state_12200__$1;(statearr_12227_12305[1] = 10);
} else
{var statearr_12228_12306 = state_12200__$1;(statearr_12228_12306[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 40))
{var inst_12168 = (state_12200[18]);var inst_12172 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12173 = cljs.core.async.untap_STAR_.call(null,m,inst_12168);var state_12200__$1 = (function (){var statearr_12229 = state_12200;(statearr_12229[21] = inst_12172);
return statearr_12229;
})();var statearr_12230_12307 = state_12200__$1;(statearr_12230_12307[2] = inst_12173);
(statearr_12230_12307[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 9))
{var inst_12129 = (state_12200[2]);var state_12200__$1 = state_12200;var statearr_12231_12308 = state_12200__$1;(statearr_12231_12308[2] = inst_12129);
(statearr_12231_12308[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 41))
{var inst_12159 = (state_12200[12]);var inst_12175 = (state_12200[2]);var inst_12176 = cljs.core.next.call(null,inst_12159);var inst_12140 = inst_12176;var inst_12141 = null;var inst_12142 = 0;var inst_12143 = 0;var state_12200__$1 = (function (){var statearr_12232 = state_12200;(statearr_12232[7] = inst_12143);
(statearr_12232[8] = inst_12141);
(statearr_12232[9] = inst_12142);
(statearr_12232[10] = inst_12140);
(statearr_12232[22] = inst_12175);
return statearr_12232;
})();var statearr_12233_12309 = state_12200__$1;(statearr_12233_12309[2] = null);
(statearr_12233_12309[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 10))
{var inst_12082 = (state_12200[16]);var inst_12084 = (state_12200[17]);var inst_12090 = cljs.core._nth.call(null,inst_12082,inst_12084);var inst_12091 = cljs.core.nth.call(null,inst_12090,0,null);var inst_12092 = cljs.core.nth.call(null,inst_12090,1,null);var state_12200__$1 = (function (){var statearr_12234 = state_12200;(statearr_12234[23] = inst_12091);
return statearr_12234;
})();if(cljs.core.truth_(inst_12092))
{var statearr_12235_12310 = state_12200__$1;(statearr_12235_12310[1] = 13);
} else
{var statearr_12236_12311 = state_12200__$1;(statearr_12236_12311[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 42))
{var state_12200__$1 = state_12200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12200__$1,45,dchan);
} else
{if((state_val_12201 === 11))
{var inst_12081 = (state_12200[14]);var inst_12101 = (state_12200[24]);var inst_12101__$1 = cljs.core.seq.call(null,inst_12081);var state_12200__$1 = (function (){var statearr_12237 = state_12200;(statearr_12237[24] = inst_12101__$1);
return statearr_12237;
})();if(inst_12101__$1)
{var statearr_12238_12312 = state_12200__$1;(statearr_12238_12312[1] = 16);
} else
{var statearr_12239_12313 = state_12200__$1;(statearr_12239_12313[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 43))
{var state_12200__$1 = state_12200;var statearr_12240_12314 = state_12200__$1;(statearr_12240_12314[2] = null);
(statearr_12240_12314[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 12))
{var inst_12127 = (state_12200[2]);var state_12200__$1 = state_12200;var statearr_12241_12315 = state_12200__$1;(statearr_12241_12315[2] = inst_12127);
(statearr_12241_12315[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 44))
{var inst_12193 = (state_12200[2]);var state_12200__$1 = (function (){var statearr_12242 = state_12200;(statearr_12242[25] = inst_12193);
return statearr_12242;
})();var statearr_12243_12316 = state_12200__$1;(statearr_12243_12316[2] = null);
(statearr_12243_12316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 13))
{var inst_12091 = (state_12200[23]);var inst_12094 = cljs.core.async.close_BANG_.call(null,inst_12091);var state_12200__$1 = state_12200;var statearr_12244_12317 = state_12200__$1;(statearr_12244_12317[2] = inst_12094);
(statearr_12244_12317[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 45))
{var inst_12190 = (state_12200[2]);var state_12200__$1 = state_12200;var statearr_12248_12318 = state_12200__$1;(statearr_12248_12318[2] = inst_12190);
(statearr_12248_12318[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 14))
{var state_12200__$1 = state_12200;var statearr_12249_12319 = state_12200__$1;(statearr_12249_12319[2] = null);
(statearr_12249_12319[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 15))
{var inst_12081 = (state_12200[14]);var inst_12083 = (state_12200[15]);var inst_12082 = (state_12200[16]);var inst_12084 = (state_12200[17]);var inst_12097 = (state_12200[2]);var inst_12098 = (inst_12084 + 1);var tmp12245 = inst_12081;var tmp12246 = inst_12083;var tmp12247 = inst_12082;var inst_12081__$1 = tmp12245;var inst_12082__$1 = tmp12247;var inst_12083__$1 = tmp12246;var inst_12084__$1 = inst_12098;var state_12200__$1 = (function (){var statearr_12250 = state_12200;(statearr_12250[14] = inst_12081__$1);
(statearr_12250[15] = inst_12083__$1);
(statearr_12250[16] = inst_12082__$1);
(statearr_12250[17] = inst_12084__$1);
(statearr_12250[26] = inst_12097);
return statearr_12250;
})();var statearr_12251_12320 = state_12200__$1;(statearr_12251_12320[2] = null);
(statearr_12251_12320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 16))
{var inst_12101 = (state_12200[24]);var inst_12103 = cljs.core.chunked_seq_QMARK_.call(null,inst_12101);var state_12200__$1 = state_12200;if(inst_12103)
{var statearr_12252_12321 = state_12200__$1;(statearr_12252_12321[1] = 19);
} else
{var statearr_12253_12322 = state_12200__$1;(statearr_12253_12322[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 17))
{var state_12200__$1 = state_12200;var statearr_12254_12323 = state_12200__$1;(statearr_12254_12323[2] = null);
(statearr_12254_12323[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 18))
{var inst_12125 = (state_12200[2]);var state_12200__$1 = state_12200;var statearr_12255_12324 = state_12200__$1;(statearr_12255_12324[2] = inst_12125);
(statearr_12255_12324[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 19))
{var inst_12101 = (state_12200[24]);var inst_12105 = cljs.core.chunk_first.call(null,inst_12101);var inst_12106 = cljs.core.chunk_rest.call(null,inst_12101);var inst_12107 = cljs.core.count.call(null,inst_12105);var inst_12081 = inst_12106;var inst_12082 = inst_12105;var inst_12083 = inst_12107;var inst_12084 = 0;var state_12200__$1 = (function (){var statearr_12256 = state_12200;(statearr_12256[14] = inst_12081);
(statearr_12256[15] = inst_12083);
(statearr_12256[16] = inst_12082);
(statearr_12256[17] = inst_12084);
return statearr_12256;
})();var statearr_12257_12325 = state_12200__$1;(statearr_12257_12325[2] = null);
(statearr_12257_12325[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 20))
{var inst_12101 = (state_12200[24]);var inst_12111 = cljs.core.first.call(null,inst_12101);var inst_12112 = cljs.core.nth.call(null,inst_12111,0,null);var inst_12113 = cljs.core.nth.call(null,inst_12111,1,null);var state_12200__$1 = (function (){var statearr_12258 = state_12200;(statearr_12258[27] = inst_12112);
return statearr_12258;
})();if(cljs.core.truth_(inst_12113))
{var statearr_12259_12326 = state_12200__$1;(statearr_12259_12326[1] = 22);
} else
{var statearr_12260_12327 = state_12200__$1;(statearr_12260_12327[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 21))
{var inst_12122 = (state_12200[2]);var state_12200__$1 = state_12200;var statearr_12261_12328 = state_12200__$1;(statearr_12261_12328[2] = inst_12122);
(statearr_12261_12328[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 22))
{var inst_12112 = (state_12200[27]);var inst_12115 = cljs.core.async.close_BANG_.call(null,inst_12112);var state_12200__$1 = state_12200;var statearr_12262_12329 = state_12200__$1;(statearr_12262_12329[2] = inst_12115);
(statearr_12262_12329[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 23))
{var state_12200__$1 = state_12200;var statearr_12263_12330 = state_12200__$1;(statearr_12263_12330[2] = null);
(statearr_12263_12330[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 24))
{var inst_12101 = (state_12200[24]);var inst_12118 = (state_12200[2]);var inst_12119 = cljs.core.next.call(null,inst_12101);var inst_12081 = inst_12119;var inst_12082 = null;var inst_12083 = 0;var inst_12084 = 0;var state_12200__$1 = (function (){var statearr_12264 = state_12200;(statearr_12264[14] = inst_12081);
(statearr_12264[15] = inst_12083);
(statearr_12264[16] = inst_12082);
(statearr_12264[17] = inst_12084);
(statearr_12264[28] = inst_12118);
return statearr_12264;
})();var statearr_12265_12331 = state_12200__$1;(statearr_12265_12331[2] = null);
(statearr_12265_12331[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 25))
{var inst_12143 = (state_12200[7]);var inst_12142 = (state_12200[9]);var inst_12145 = (inst_12143 < inst_12142);var inst_12146 = inst_12145;var state_12200__$1 = state_12200;if(cljs.core.truth_(inst_12146))
{var statearr_12266_12332 = state_12200__$1;(statearr_12266_12332[1] = 27);
} else
{var statearr_12267_12333 = state_12200__$1;(statearr_12267_12333[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 26))
{var inst_12132 = (state_12200[19]);var inst_12186 = (state_12200[2]);var inst_12187 = cljs.core.seq.call(null,inst_12132);var state_12200__$1 = (function (){var statearr_12268 = state_12200;(statearr_12268[29] = inst_12186);
return statearr_12268;
})();if(inst_12187)
{var statearr_12269_12334 = state_12200__$1;(statearr_12269_12334[1] = 42);
} else
{var statearr_12270_12335 = state_12200__$1;(statearr_12270_12335[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 27))
{var inst_12143 = (state_12200[7]);var inst_12141 = (state_12200[8]);var inst_12072 = (state_12200[13]);var inst_12148 = (state_12200[30]);var inst_12148__$1 = cljs.core._nth.call(null,inst_12141,inst_12143);var inst_12149 = cljs.core.async.put_BANG_.call(null,inst_12148__$1,inst_12072,done);var state_12200__$1 = (function (){var statearr_12271 = state_12200;(statearr_12271[30] = inst_12148__$1);
return statearr_12271;
})();if(cljs.core.truth_(inst_12149))
{var statearr_12272_12336 = state_12200__$1;(statearr_12272_12336[1] = 30);
} else
{var statearr_12273_12337 = state_12200__$1;(statearr_12273_12337[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 28))
{var inst_12159 = (state_12200[12]);var inst_12140 = (state_12200[10]);var inst_12159__$1 = cljs.core.seq.call(null,inst_12140);var state_12200__$1 = (function (){var statearr_12274 = state_12200;(statearr_12274[12] = inst_12159__$1);
return statearr_12274;
})();if(inst_12159__$1)
{var statearr_12275_12338 = state_12200__$1;(statearr_12275_12338[1] = 33);
} else
{var statearr_12276_12339 = state_12200__$1;(statearr_12276_12339[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 29))
{var inst_12184 = (state_12200[2]);var state_12200__$1 = state_12200;var statearr_12277_12340 = state_12200__$1;(statearr_12277_12340[2] = inst_12184);
(statearr_12277_12340[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 30))
{var state_12200__$1 = state_12200;var statearr_12278_12341 = state_12200__$1;(statearr_12278_12341[2] = null);
(statearr_12278_12341[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12201 === 31))
{var inst_12148 = (state_12200[30]);var inst_12152 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12153 = cljs.core.async.untap_STAR_.call(null,m,inst_12148);var state_12200__$1 = (function (){var statearr_12279 = state_12200;(statearr_12279[31] = inst_12152);
return statearr_12279;
})();var statearr_12280_12342 = state_12200__$1;(statearr_12280_12342[2] = inst_12153);
(statearr_12280_12342[1] = 32);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12284[0] = state_machine__6218__auto__);
(statearr_12284[1] = 1);
return statearr_12284;
});
var state_machine__6218__auto____1 = (function (state_12200){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12200);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12285){if((e12285 instanceof Object))
{var ex__6221__auto__ = e12285;var statearr_12286_12343 = state_12200;(statearr_12286_12343[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12285;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12344 = state_12200;
state_12200 = G__12344;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12200){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_12287 = f__6233__auto__.call(null);(statearr_12287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12288);
return statearr_12287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj12346 = {};return obj12346;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t12466 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12466 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12467){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12467 = meta12467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12466.cljs$lang$type = true;
cljs.core.async.t12466.cljs$lang$ctorStr = "cljs.core.async/t12466";
cljs.core.async.t12466.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12466");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12466.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12466.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12466.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12466.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12466.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12466.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12466.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12466.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12468){var self__ = this;
var _12468__$1 = this;return self__.meta12467;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12468,meta12467__$1){var self__ = this;
var _12468__$1 = this;return (new cljs.core.async.t12466(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12467__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12466 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12466(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12467){return (new cljs.core.async.t12466(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12467));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12466(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6232__auto___12585 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_12538){var state_val_12539 = (state_12538[1]);if((state_val_12539 === 1))
{var inst_12472 = (state_12538[7]);var inst_12472__$1 = calc_state.call(null);var inst_12473 = cljs.core.seq_QMARK_.call(null,inst_12472__$1);var state_12538__$1 = (function (){var statearr_12540 = state_12538;(statearr_12540[7] = inst_12472__$1);
return statearr_12540;
})();if(inst_12473)
{var statearr_12541_12586 = state_12538__$1;(statearr_12541_12586[1] = 2);
} else
{var statearr_12542_12587 = state_12538__$1;(statearr_12542_12587[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 2))
{var inst_12472 = (state_12538[7]);var inst_12475 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12472);var state_12538__$1 = state_12538;var statearr_12543_12588 = state_12538__$1;(statearr_12543_12588[2] = inst_12475);
(statearr_12543_12588[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 3))
{var inst_12472 = (state_12538[7]);var state_12538__$1 = state_12538;var statearr_12544_12589 = state_12538__$1;(statearr_12544_12589[2] = inst_12472);
(statearr_12544_12589[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 4))
{var inst_12472 = (state_12538[7]);var inst_12478 = (state_12538[2]);var inst_12479 = cljs.core.get.call(null,inst_12478,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12480 = cljs.core.get.call(null,inst_12478,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12481 = cljs.core.get.call(null,inst_12478,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12482 = inst_12472;var state_12538__$1 = (function (){var statearr_12545 = state_12538;(statearr_12545[8] = inst_12482);
(statearr_12545[9] = inst_12481);
(statearr_12545[10] = inst_12480);
(statearr_12545[11] = inst_12479);
return statearr_12545;
})();var statearr_12546_12590 = state_12538__$1;(statearr_12546_12590[2] = null);
(statearr_12546_12590[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 5))
{var inst_12482 = (state_12538[8]);var inst_12485 = cljs.core.seq_QMARK_.call(null,inst_12482);var state_12538__$1 = state_12538;if(inst_12485)
{var statearr_12547_12591 = state_12538__$1;(statearr_12547_12591[1] = 7);
} else
{var statearr_12548_12592 = state_12538__$1;(statearr_12548_12592[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 6))
{var inst_12536 = (state_12538[2]);var state_12538__$1 = state_12538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12538__$1,inst_12536);
} else
{if((state_val_12539 === 7))
{var inst_12482 = (state_12538[8]);var inst_12487 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12482);var state_12538__$1 = state_12538;var statearr_12549_12593 = state_12538__$1;(statearr_12549_12593[2] = inst_12487);
(statearr_12549_12593[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 8))
{var inst_12482 = (state_12538[8]);var state_12538__$1 = state_12538;var statearr_12550_12594 = state_12538__$1;(statearr_12550_12594[2] = inst_12482);
(statearr_12550_12594[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 9))
{var inst_12490 = (state_12538[12]);var inst_12490__$1 = (state_12538[2]);var inst_12491 = cljs.core.get.call(null,inst_12490__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12492 = cljs.core.get.call(null,inst_12490__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12493 = cljs.core.get.call(null,inst_12490__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12538__$1 = (function (){var statearr_12551 = state_12538;(statearr_12551[13] = inst_12493);
(statearr_12551[12] = inst_12490__$1);
(statearr_12551[14] = inst_12492);
return statearr_12551;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12538__$1,10,inst_12491);
} else
{if((state_val_12539 === 10))
{var inst_12498 = (state_12538[15]);var inst_12497 = (state_12538[16]);var inst_12496 = (state_12538[2]);var inst_12497__$1 = cljs.core.nth.call(null,inst_12496,0,null);var inst_12498__$1 = cljs.core.nth.call(null,inst_12496,1,null);var inst_12499 = (inst_12497__$1 == null);var inst_12500 = cljs.core._EQ_.call(null,inst_12498__$1,change);var inst_12501 = (inst_12499) || (inst_12500);var state_12538__$1 = (function (){var statearr_12552 = state_12538;(statearr_12552[15] = inst_12498__$1);
(statearr_12552[16] = inst_12497__$1);
return statearr_12552;
})();if(cljs.core.truth_(inst_12501))
{var statearr_12553_12595 = state_12538__$1;(statearr_12553_12595[1] = 11);
} else
{var statearr_12554_12596 = state_12538__$1;(statearr_12554_12596[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 11))
{var inst_12497 = (state_12538[16]);var inst_12503 = (inst_12497 == null);var state_12538__$1 = state_12538;if(cljs.core.truth_(inst_12503))
{var statearr_12555_12597 = state_12538__$1;(statearr_12555_12597[1] = 14);
} else
{var statearr_12556_12598 = state_12538__$1;(statearr_12556_12598[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 12))
{var inst_12498 = (state_12538[15]);var inst_12493 = (state_12538[13]);var inst_12512 = (state_12538[17]);var inst_12512__$1 = inst_12493.call(null,inst_12498);var state_12538__$1 = (function (){var statearr_12557 = state_12538;(statearr_12557[17] = inst_12512__$1);
return statearr_12557;
})();if(cljs.core.truth_(inst_12512__$1))
{var statearr_12558_12599 = state_12538__$1;(statearr_12558_12599[1] = 17);
} else
{var statearr_12559_12600 = state_12538__$1;(statearr_12559_12600[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 13))
{var inst_12534 = (state_12538[2]);var state_12538__$1 = state_12538;var statearr_12560_12601 = state_12538__$1;(statearr_12560_12601[2] = inst_12534);
(statearr_12560_12601[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 14))
{var inst_12498 = (state_12538[15]);var inst_12505 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12498);var state_12538__$1 = state_12538;var statearr_12561_12602 = state_12538__$1;(statearr_12561_12602[2] = inst_12505);
(statearr_12561_12602[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 15))
{var state_12538__$1 = state_12538;var statearr_12562_12603 = state_12538__$1;(statearr_12562_12603[2] = null);
(statearr_12562_12603[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 16))
{var inst_12508 = (state_12538[2]);var inst_12509 = calc_state.call(null);var inst_12482 = inst_12509;var state_12538__$1 = (function (){var statearr_12563 = state_12538;(statearr_12563[8] = inst_12482);
(statearr_12563[18] = inst_12508);
return statearr_12563;
})();var statearr_12564_12604 = state_12538__$1;(statearr_12564_12604[2] = null);
(statearr_12564_12604[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 17))
{var inst_12512 = (state_12538[17]);var state_12538__$1 = state_12538;var statearr_12565_12605 = state_12538__$1;(statearr_12565_12605[2] = inst_12512);
(statearr_12565_12605[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 18))
{var inst_12498 = (state_12538[15]);var inst_12493 = (state_12538[13]);var inst_12492 = (state_12538[14]);var inst_12515 = cljs.core.empty_QMARK_.call(null,inst_12493);var inst_12516 = inst_12492.call(null,inst_12498);var inst_12517 = cljs.core.not.call(null,inst_12516);var inst_12518 = (inst_12515) && (inst_12517);var state_12538__$1 = state_12538;var statearr_12566_12606 = state_12538__$1;(statearr_12566_12606[2] = inst_12518);
(statearr_12566_12606[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 19))
{var inst_12520 = (state_12538[2]);var state_12538__$1 = state_12538;if(cljs.core.truth_(inst_12520))
{var statearr_12567_12607 = state_12538__$1;(statearr_12567_12607[1] = 20);
} else
{var statearr_12568_12608 = state_12538__$1;(statearr_12568_12608[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 20))
{var inst_12497 = (state_12538[16]);var state_12538__$1 = state_12538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12538__$1,23,out,inst_12497);
} else
{if((state_val_12539 === 21))
{var inst_12490 = (state_12538[12]);var inst_12482 = inst_12490;var state_12538__$1 = (function (){var statearr_12569 = state_12538;(statearr_12569[8] = inst_12482);
return statearr_12569;
})();var statearr_12570_12609 = state_12538__$1;(statearr_12570_12609[2] = null);
(statearr_12570_12609[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 22))
{var inst_12532 = (state_12538[2]);var state_12538__$1 = state_12538;var statearr_12571_12610 = state_12538__$1;(statearr_12571_12610[2] = inst_12532);
(statearr_12571_12610[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 23))
{var inst_12523 = (state_12538[2]);var state_12538__$1 = state_12538;if(cljs.core.truth_(inst_12523))
{var statearr_12572_12611 = state_12538__$1;(statearr_12572_12611[1] = 24);
} else
{var statearr_12573_12612 = state_12538__$1;(statearr_12573_12612[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 24))
{var inst_12490 = (state_12538[12]);var inst_12482 = inst_12490;var state_12538__$1 = (function (){var statearr_12574 = state_12538;(statearr_12574[8] = inst_12482);
return statearr_12574;
})();var statearr_12575_12613 = state_12538__$1;(statearr_12575_12613[2] = null);
(statearr_12575_12613[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 25))
{var state_12538__$1 = state_12538;var statearr_12576_12614 = state_12538__$1;(statearr_12576_12614[2] = null);
(statearr_12576_12614[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12539 === 26))
{var inst_12528 = (state_12538[2]);var state_12538__$1 = state_12538;var statearr_12577_12615 = state_12538__$1;(statearr_12577_12615[2] = inst_12528);
(statearr_12577_12615[1] = 22);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12581[0] = state_machine__6218__auto__);
(statearr_12581[1] = 1);
return statearr_12581;
});
var state_machine__6218__auto____1 = (function (state_12538){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12538);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12582){if((e12582 instanceof Object))
{var ex__6221__auto__ = e12582;var statearr_12583_12616 = state_12538;(statearr_12583_12616[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12538);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12617 = state_12538;
state_12538 = G__12617;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12538){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_12584 = f__6233__auto__.call(null);(statearr_12584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12585);
return statearr_12584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj12619 = {};return obj12619;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__12620_SHARP_){if(cljs.core.truth_(p1__12620_SHARP_.call(null,topic)))
{return p1__12620_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12620_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12735 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12735 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12736){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12736 = meta12736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12735.cljs$lang$type = true;
cljs.core.async.t12735.cljs$lang$ctorStr = "cljs.core.async/t12735";
cljs.core.async.t12735.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12735");
});})(mults,ensure_mult))
;
cljs.core.async.t12735.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12735.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12735.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12735.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12735.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12735.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12737){var self__ = this;
var _12737__$1 = this;return self__.meta12736;
});})(mults,ensure_mult))
;
cljs.core.async.t12735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12737,meta12736__$1){var self__ = this;
var _12737__$1 = this;return (new cljs.core.async.t12735(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12736__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12735 = ((function (mults,ensure_mult){
return (function __GT_t12735(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12736){return (new cljs.core.async.t12735(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12736));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12735(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6232__auto___12849 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_12805){var state_val_12806 = (state_12805[1]);if((state_val_12806 === 1))
{var state_12805__$1 = state_12805;var statearr_12807_12850 = state_12805__$1;(statearr_12807_12850[2] = null);
(statearr_12807_12850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 2))
{var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12805__$1,4,ch);
} else
{if((state_val_12806 === 3))
{var inst_12803 = (state_12805[2]);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12805__$1,inst_12803);
} else
{if((state_val_12806 === 4))
{var inst_12740 = (state_12805[7]);var inst_12740__$1 = (state_12805[2]);var inst_12741 = (inst_12740__$1 == null);var state_12805__$1 = (function (){var statearr_12808 = state_12805;(statearr_12808[7] = inst_12740__$1);
return statearr_12808;
})();if(cljs.core.truth_(inst_12741))
{var statearr_12809_12851 = state_12805__$1;(statearr_12809_12851[1] = 5);
} else
{var statearr_12810_12852 = state_12805__$1;(statearr_12810_12852[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 5))
{var inst_12747 = cljs.core.deref.call(null,mults);var inst_12748 = cljs.core.vals.call(null,inst_12747);var inst_12749 = cljs.core.seq.call(null,inst_12748);var inst_12750 = inst_12749;var inst_12751 = null;var inst_12752 = 0;var inst_12753 = 0;var state_12805__$1 = (function (){var statearr_12811 = state_12805;(statearr_12811[8] = inst_12753);
(statearr_12811[9] = inst_12752);
(statearr_12811[10] = inst_12751);
(statearr_12811[11] = inst_12750);
return statearr_12811;
})();var statearr_12812_12853 = state_12805__$1;(statearr_12812_12853[2] = null);
(statearr_12812_12853[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 6))
{var inst_12788 = (state_12805[12]);var inst_12740 = (state_12805[7]);var inst_12788__$1 = topic_fn.call(null,inst_12740);var inst_12789 = cljs.core.deref.call(null,mults);var inst_12790 = cljs.core.get.call(null,inst_12789,inst_12788__$1);var inst_12791 = cljs.core.async.muxch_STAR_.call(null,inst_12790);var state_12805__$1 = (function (){var statearr_12813 = state_12805;(statearr_12813[12] = inst_12788__$1);
return statearr_12813;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12805__$1,19,inst_12791,inst_12740);
} else
{if((state_val_12806 === 7))
{var inst_12801 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12814_12854 = state_12805__$1;(statearr_12814_12854[2] = inst_12801);
(statearr_12814_12854[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 8))
{var inst_12753 = (state_12805[8]);var inst_12752 = (state_12805[9]);var inst_12755 = (inst_12753 < inst_12752);var inst_12756 = inst_12755;var state_12805__$1 = state_12805;if(cljs.core.truth_(inst_12756))
{var statearr_12818_12855 = state_12805__$1;(statearr_12818_12855[1] = 10);
} else
{var statearr_12819_12856 = state_12805__$1;(statearr_12819_12856[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 9))
{var inst_12786 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12820_12857 = state_12805__$1;(statearr_12820_12857[2] = inst_12786);
(statearr_12820_12857[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 10))
{var inst_12753 = (state_12805[8]);var inst_12752 = (state_12805[9]);var inst_12751 = (state_12805[10]);var inst_12750 = (state_12805[11]);var inst_12758 = cljs.core._nth.call(null,inst_12751,inst_12753);var inst_12759 = cljs.core.async.muxch_STAR_.call(null,inst_12758);var inst_12760 = cljs.core.async.close_BANG_.call(null,inst_12759);var inst_12761 = (inst_12753 + 1);var tmp12815 = inst_12752;var tmp12816 = inst_12751;var tmp12817 = inst_12750;var inst_12750__$1 = tmp12817;var inst_12751__$1 = tmp12816;var inst_12752__$1 = tmp12815;var inst_12753__$1 = inst_12761;var state_12805__$1 = (function (){var statearr_12821 = state_12805;(statearr_12821[8] = inst_12753__$1);
(statearr_12821[9] = inst_12752__$1);
(statearr_12821[10] = inst_12751__$1);
(statearr_12821[11] = inst_12750__$1);
(statearr_12821[13] = inst_12760);
return statearr_12821;
})();var statearr_12822_12858 = state_12805__$1;(statearr_12822_12858[2] = null);
(statearr_12822_12858[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 11))
{var inst_12750 = (state_12805[11]);var inst_12764 = (state_12805[14]);var inst_12764__$1 = cljs.core.seq.call(null,inst_12750);var state_12805__$1 = (function (){var statearr_12823 = state_12805;(statearr_12823[14] = inst_12764__$1);
return statearr_12823;
})();if(inst_12764__$1)
{var statearr_12824_12859 = state_12805__$1;(statearr_12824_12859[1] = 13);
} else
{var statearr_12825_12860 = state_12805__$1;(statearr_12825_12860[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 12))
{var inst_12784 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12826_12861 = state_12805__$1;(statearr_12826_12861[2] = inst_12784);
(statearr_12826_12861[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 13))
{var inst_12764 = (state_12805[14]);var inst_12766 = cljs.core.chunked_seq_QMARK_.call(null,inst_12764);var state_12805__$1 = state_12805;if(inst_12766)
{var statearr_12827_12862 = state_12805__$1;(statearr_12827_12862[1] = 16);
} else
{var statearr_12828_12863 = state_12805__$1;(statearr_12828_12863[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 14))
{var state_12805__$1 = state_12805;var statearr_12829_12864 = state_12805__$1;(statearr_12829_12864[2] = null);
(statearr_12829_12864[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 15))
{var inst_12782 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12830_12865 = state_12805__$1;(statearr_12830_12865[2] = inst_12782);
(statearr_12830_12865[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 16))
{var inst_12764 = (state_12805[14]);var inst_12768 = cljs.core.chunk_first.call(null,inst_12764);var inst_12769 = cljs.core.chunk_rest.call(null,inst_12764);var inst_12770 = cljs.core.count.call(null,inst_12768);var inst_12750 = inst_12769;var inst_12751 = inst_12768;var inst_12752 = inst_12770;var inst_12753 = 0;var state_12805__$1 = (function (){var statearr_12831 = state_12805;(statearr_12831[8] = inst_12753);
(statearr_12831[9] = inst_12752);
(statearr_12831[10] = inst_12751);
(statearr_12831[11] = inst_12750);
return statearr_12831;
})();var statearr_12832_12866 = state_12805__$1;(statearr_12832_12866[2] = null);
(statearr_12832_12866[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 17))
{var inst_12764 = (state_12805[14]);var inst_12773 = cljs.core.first.call(null,inst_12764);var inst_12774 = cljs.core.async.muxch_STAR_.call(null,inst_12773);var inst_12775 = cljs.core.async.close_BANG_.call(null,inst_12774);var inst_12776 = cljs.core.next.call(null,inst_12764);var inst_12750 = inst_12776;var inst_12751 = null;var inst_12752 = 0;var inst_12753 = 0;var state_12805__$1 = (function (){var statearr_12833 = state_12805;(statearr_12833[8] = inst_12753);
(statearr_12833[9] = inst_12752);
(statearr_12833[10] = inst_12751);
(statearr_12833[11] = inst_12750);
(statearr_12833[15] = inst_12775);
return statearr_12833;
})();var statearr_12834_12867 = state_12805__$1;(statearr_12834_12867[2] = null);
(statearr_12834_12867[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 18))
{var inst_12779 = (state_12805[2]);var state_12805__$1 = state_12805;var statearr_12835_12868 = state_12805__$1;(statearr_12835_12868[2] = inst_12779);
(statearr_12835_12868[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 19))
{var inst_12793 = (state_12805[2]);var state_12805__$1 = state_12805;if(cljs.core.truth_(inst_12793))
{var statearr_12836_12869 = state_12805__$1;(statearr_12836_12869[1] = 20);
} else
{var statearr_12837_12870 = state_12805__$1;(statearr_12837_12870[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 20))
{var state_12805__$1 = state_12805;var statearr_12838_12871 = state_12805__$1;(statearr_12838_12871[2] = null);
(statearr_12838_12871[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 21))
{var inst_12788 = (state_12805[12]);var inst_12796 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12788);var state_12805__$1 = state_12805;var statearr_12839_12872 = state_12805__$1;(statearr_12839_12872[2] = inst_12796);
(statearr_12839_12872[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12806 === 22))
{var inst_12798 = (state_12805[2]);var state_12805__$1 = (function (){var statearr_12840 = state_12805;(statearr_12840[16] = inst_12798);
return statearr_12840;
})();var statearr_12841_12873 = state_12805__$1;(statearr_12841_12873[2] = null);
(statearr_12841_12873[1] = 2);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_12845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12845[0] = state_machine__6218__auto__);
(statearr_12845[1] = 1);
return statearr_12845;
});
var state_machine__6218__auto____1 = (function (state_12805){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12805);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e12846){if((e12846 instanceof Object))
{var ex__6221__auto__ = e12846;var statearr_12847_12874 = state_12805;(statearr_12847_12874[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12875 = state_12805;
state_12805 = G__12875;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12805){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_12848 = f__6233__auto__.call(null);(statearr_12848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___12849);
return statearr_12848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
,cljs.core.range.call(null,cnt));var c__6232__auto___13012 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_12982){var state_val_12983 = (state_12982[1]);if((state_val_12983 === 1))
{var state_12982__$1 = state_12982;var statearr_12984_13013 = state_12982__$1;(statearr_12984_13013[2] = null);
(statearr_12984_13013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 2))
{var inst_12945 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12946 = 0;var state_12982__$1 = (function (){var statearr_12985 = state_12982;(statearr_12985[7] = inst_12946);
(statearr_12985[8] = inst_12945);
return statearr_12985;
})();var statearr_12986_13014 = state_12982__$1;(statearr_12986_13014[2] = null);
(statearr_12986_13014[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 3))
{var inst_12980 = (state_12982[2]);var state_12982__$1 = state_12982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12982__$1,inst_12980);
} else
{if((state_val_12983 === 4))
{var inst_12946 = (state_12982[7]);var inst_12948 = (inst_12946 < cnt);var state_12982__$1 = state_12982;if(cljs.core.truth_(inst_12948))
{var statearr_12987_13015 = state_12982__$1;(statearr_12987_13015[1] = 6);
} else
{var statearr_12988_13016 = state_12982__$1;(statearr_12988_13016[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 5))
{var inst_12966 = (state_12982[2]);var state_12982__$1 = (function (){var statearr_12989 = state_12982;(statearr_12989[9] = inst_12966);
return statearr_12989;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12982__$1,12,dchan);
} else
{if((state_val_12983 === 6))
{var state_12982__$1 = state_12982;var statearr_12990_13017 = state_12982__$1;(statearr_12990_13017[2] = null);
(statearr_12990_13017[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 7))
{var state_12982__$1 = state_12982;var statearr_12991_13018 = state_12982__$1;(statearr_12991_13018[2] = null);
(statearr_12991_13018[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 8))
{var inst_12964 = (state_12982[2]);var state_12982__$1 = state_12982;var statearr_12992_13019 = state_12982__$1;(statearr_12992_13019[2] = inst_12964);
(statearr_12992_13019[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 9))
{var inst_12946 = (state_12982[7]);var inst_12959 = (state_12982[2]);var inst_12960 = (inst_12946 + 1);var inst_12946__$1 = inst_12960;var state_12982__$1 = (function (){var statearr_12993 = state_12982;(statearr_12993[10] = inst_12959);
(statearr_12993[7] = inst_12946__$1);
return statearr_12993;
})();var statearr_12994_13020 = state_12982__$1;(statearr_12994_13020[2] = null);
(statearr_12994_13020[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 10))
{var inst_12950 = (state_12982[2]);var inst_12951 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12982__$1 = (function (){var statearr_12995 = state_12982;(statearr_12995[11] = inst_12950);
return statearr_12995;
})();var statearr_12996_13021 = state_12982__$1;(statearr_12996_13021[2] = inst_12951);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12982__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 11))
{var inst_12946 = (state_12982[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12982,10,Object,null,9);var inst_12955 = chs__$1.call(null,inst_12946);var inst_12956 = done.call(null,inst_12946);var inst_12957 = cljs.core.async.take_BANG_.call(null,inst_12955,inst_12956);var state_12982__$1 = state_12982;var statearr_12997_13022 = state_12982__$1;(statearr_12997_13022[2] = inst_12957);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12982__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 12))
{var inst_12968 = (state_12982[12]);var inst_12968__$1 = (state_12982[2]);var inst_12969 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12968__$1);var state_12982__$1 = (function (){var statearr_12998 = state_12982;(statearr_12998[12] = inst_12968__$1);
return statearr_12998;
})();if(cljs.core.truth_(inst_12969))
{var statearr_12999_13023 = state_12982__$1;(statearr_12999_13023[1] = 13);
} else
{var statearr_13000_13024 = state_12982__$1;(statearr_13000_13024[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 13))
{var inst_12971 = cljs.core.async.close_BANG_.call(null,out);var state_12982__$1 = state_12982;var statearr_13001_13025 = state_12982__$1;(statearr_13001_13025[2] = inst_12971);
(statearr_13001_13025[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 14))
{var inst_12968 = (state_12982[12]);var inst_12973 = cljs.core.apply.call(null,f,inst_12968);var state_12982__$1 = state_12982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12982__$1,16,out,inst_12973);
} else
{if((state_val_12983 === 15))
{var inst_12978 = (state_12982[2]);var state_12982__$1 = state_12982;var statearr_13002_13026 = state_12982__$1;(statearr_13002_13026[2] = inst_12978);
(statearr_13002_13026[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12983 === 16))
{var inst_12975 = (state_12982[2]);var state_12982__$1 = (function (){var statearr_13003 = state_12982;(statearr_13003[13] = inst_12975);
return statearr_13003;
})();var statearr_13004_13027 = state_12982__$1;(statearr_13004_13027[2] = null);
(statearr_13004_13027[1] = 2);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13008[0] = state_machine__6218__auto__);
(statearr_13008[1] = 1);
return statearr_13008;
});
var state_machine__6218__auto____1 = (function (state_12982){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_12982);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13009){if((e13009 instanceof Object))
{var ex__6221__auto__ = e13009;var statearr_13010_13028 = state_12982;(statearr_13010_13028[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12982);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13029 = state_12982;
state_12982 = G__13029;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_12982){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_12982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_13011 = f__6233__auto__.call(null);(statearr_13011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13012);
return statearr_13011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___13137 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_13113){var state_val_13114 = (state_13113[1]);if((state_val_13114 === 1))
{var inst_13084 = cljs.core.vec.call(null,chs);var inst_13085 = inst_13084;var state_13113__$1 = (function (){var statearr_13115 = state_13113;(statearr_13115[7] = inst_13085);
return statearr_13115;
})();var statearr_13116_13138 = state_13113__$1;(statearr_13116_13138[2] = null);
(statearr_13116_13138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13114 === 2))
{var inst_13085 = (state_13113[7]);var inst_13087 = cljs.core.count.call(null,inst_13085);var inst_13088 = (inst_13087 > 0);var state_13113__$1 = state_13113;if(cljs.core.truth_(inst_13088))
{var statearr_13117_13139 = state_13113__$1;(statearr_13117_13139[1] = 4);
} else
{var statearr_13118_13140 = state_13113__$1;(statearr_13118_13140[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13114 === 3))
{var inst_13111 = (state_13113[2]);var state_13113__$1 = state_13113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13113__$1,inst_13111);
} else
{if((state_val_13114 === 4))
{var inst_13085 = (state_13113[7]);var state_13113__$1 = state_13113;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13113__$1,7,inst_13085);
} else
{if((state_val_13114 === 5))
{var inst_13107 = cljs.core.async.close_BANG_.call(null,out);var state_13113__$1 = state_13113;var statearr_13119_13141 = state_13113__$1;(statearr_13119_13141[2] = inst_13107);
(statearr_13119_13141[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13114 === 6))
{var inst_13109 = (state_13113[2]);var state_13113__$1 = state_13113;var statearr_13120_13142 = state_13113__$1;(statearr_13120_13142[2] = inst_13109);
(statearr_13120_13142[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13114 === 7))
{var inst_13092 = (state_13113[8]);var inst_13093 = (state_13113[9]);var inst_13092__$1 = (state_13113[2]);var inst_13093__$1 = cljs.core.nth.call(null,inst_13092__$1,0,null);var inst_13094 = cljs.core.nth.call(null,inst_13092__$1,1,null);var inst_13095 = (inst_13093__$1 == null);var state_13113__$1 = (function (){var statearr_13121 = state_13113;(statearr_13121[8] = inst_13092__$1);
(statearr_13121[9] = inst_13093__$1);
(statearr_13121[10] = inst_13094);
return statearr_13121;
})();if(cljs.core.truth_(inst_13095))
{var statearr_13122_13143 = state_13113__$1;(statearr_13122_13143[1] = 8);
} else
{var statearr_13123_13144 = state_13113__$1;(statearr_13123_13144[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13114 === 8))
{var inst_13092 = (state_13113[8]);var inst_13093 = (state_13113[9]);var inst_13085 = (state_13113[7]);var inst_13094 = (state_13113[10]);var inst_13097 = (function (){var c = inst_13094;var v = inst_13093;var vec__13090 = inst_13092;var cs = inst_13085;return ((function (c,v,vec__13090,cs,inst_13092,inst_13093,inst_13085,inst_13094,state_val_13114){
return (function (p1__13030_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13030_SHARP_);
});
;})(c,v,vec__13090,cs,inst_13092,inst_13093,inst_13085,inst_13094,state_val_13114))
})();var inst_13098 = cljs.core.filterv.call(null,inst_13097,inst_13085);var inst_13085__$1 = inst_13098;var state_13113__$1 = (function (){var statearr_13124 = state_13113;(statearr_13124[7] = inst_13085__$1);
return statearr_13124;
})();var statearr_13125_13145 = state_13113__$1;(statearr_13125_13145[2] = null);
(statearr_13125_13145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13114 === 9))
{var inst_13093 = (state_13113[9]);var state_13113__$1 = state_13113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13113__$1,11,out,inst_13093);
} else
{if((state_val_13114 === 10))
{var inst_13105 = (state_13113[2]);var state_13113__$1 = state_13113;var statearr_13127_13146 = state_13113__$1;(statearr_13127_13146[2] = inst_13105);
(statearr_13127_13146[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13114 === 11))
{var inst_13085 = (state_13113[7]);var inst_13102 = (state_13113[2]);var tmp13126 = inst_13085;var inst_13085__$1 = tmp13126;var state_13113__$1 = (function (){var statearr_13128 = state_13113;(statearr_13128[7] = inst_13085__$1);
(statearr_13128[11] = inst_13102);
return statearr_13128;
})();var statearr_13129_13147 = state_13113__$1;(statearr_13129_13147[2] = null);
(statearr_13129_13147[1] = 2);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13133 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13133[0] = state_machine__6218__auto__);
(statearr_13133[1] = 1);
return statearr_13133;
});
var state_machine__6218__auto____1 = (function (state_13113){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13113);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13134){if((e13134 instanceof Object))
{var ex__6221__auto__ = e13134;var statearr_13135_13148 = state_13113;(statearr_13135_13148[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13149 = state_13113;
state_13113 = G__13149;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13113){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_13136 = f__6233__auto__.call(null);(statearr_13136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13137);
return statearr_13136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___13242 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_13219){var state_val_13220 = (state_13219[1]);if((state_val_13220 === 1))
{var inst_13196 = 0;var state_13219__$1 = (function (){var statearr_13221 = state_13219;(statearr_13221[7] = inst_13196);
return statearr_13221;
})();var statearr_13222_13243 = state_13219__$1;(statearr_13222_13243[2] = null);
(statearr_13222_13243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 2))
{var inst_13196 = (state_13219[7]);var inst_13198 = (inst_13196 < n);var state_13219__$1 = state_13219;if(cljs.core.truth_(inst_13198))
{var statearr_13223_13244 = state_13219__$1;(statearr_13223_13244[1] = 4);
} else
{var statearr_13224_13245 = state_13219__$1;(statearr_13224_13245[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 3))
{var inst_13216 = (state_13219[2]);var inst_13217 = cljs.core.async.close_BANG_.call(null,out);var state_13219__$1 = (function (){var statearr_13225 = state_13219;(statearr_13225[8] = inst_13216);
return statearr_13225;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13219__$1,inst_13217);
} else
{if((state_val_13220 === 4))
{var state_13219__$1 = state_13219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13219__$1,7,ch);
} else
{if((state_val_13220 === 5))
{var state_13219__$1 = state_13219;var statearr_13226_13246 = state_13219__$1;(statearr_13226_13246[2] = null);
(statearr_13226_13246[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 6))
{var inst_13214 = (state_13219[2]);var state_13219__$1 = state_13219;var statearr_13227_13247 = state_13219__$1;(statearr_13227_13247[2] = inst_13214);
(statearr_13227_13247[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 7))
{var inst_13201 = (state_13219[9]);var inst_13201__$1 = (state_13219[2]);var inst_13202 = (inst_13201__$1 == null);var inst_13203 = cljs.core.not.call(null,inst_13202);var state_13219__$1 = (function (){var statearr_13228 = state_13219;(statearr_13228[9] = inst_13201__$1);
return statearr_13228;
})();if(inst_13203)
{var statearr_13229_13248 = state_13219__$1;(statearr_13229_13248[1] = 8);
} else
{var statearr_13230_13249 = state_13219__$1;(statearr_13230_13249[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 8))
{var inst_13201 = (state_13219[9]);var state_13219__$1 = state_13219;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13219__$1,11,out,inst_13201);
} else
{if((state_val_13220 === 9))
{var state_13219__$1 = state_13219;var statearr_13231_13250 = state_13219__$1;(statearr_13231_13250[2] = null);
(statearr_13231_13250[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 10))
{var inst_13211 = (state_13219[2]);var state_13219__$1 = state_13219;var statearr_13232_13251 = state_13219__$1;(statearr_13232_13251[2] = inst_13211);
(statearr_13232_13251[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 11))
{var inst_13196 = (state_13219[7]);var inst_13206 = (state_13219[2]);var inst_13207 = (inst_13196 + 1);var inst_13196__$1 = inst_13207;var state_13219__$1 = (function (){var statearr_13233 = state_13219;(statearr_13233[7] = inst_13196__$1);
(statearr_13233[10] = inst_13206);
return statearr_13233;
})();var statearr_13234_13252 = state_13219__$1;(statearr_13234_13252[2] = null);
(statearr_13234_13252[1] = 2);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13238 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13238[0] = state_machine__6218__auto__);
(statearr_13238[1] = 1);
return statearr_13238;
});
var state_machine__6218__auto____1 = (function (state_13219){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13219);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13239){if((e13239 instanceof Object))
{var ex__6221__auto__ = e13239;var statearr_13240_13253 = state_13219;(statearr_13240_13253[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13219);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13254 = state_13219;
state_13219 = G__13254;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13219){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_13241 = f__6233__auto__.call(null);(statearr_13241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13242);
return statearr_13241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___13351 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_13326){var state_val_13327 = (state_13326[1]);if((state_val_13327 === 1))
{var inst_13303 = null;var state_13326__$1 = (function (){var statearr_13328 = state_13326;(statearr_13328[7] = inst_13303);
return statearr_13328;
})();var statearr_13329_13352 = state_13326__$1;(statearr_13329_13352[2] = null);
(statearr_13329_13352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 2))
{var state_13326__$1 = state_13326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13326__$1,4,ch);
} else
{if((state_val_13327 === 3))
{var inst_13323 = (state_13326[2]);var inst_13324 = cljs.core.async.close_BANG_.call(null,out);var state_13326__$1 = (function (){var statearr_13330 = state_13326;(statearr_13330[8] = inst_13323);
return statearr_13330;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13326__$1,inst_13324);
} else
{if((state_val_13327 === 4))
{var inst_13306 = (state_13326[9]);var inst_13306__$1 = (state_13326[2]);var inst_13307 = (inst_13306__$1 == null);var inst_13308 = cljs.core.not.call(null,inst_13307);var state_13326__$1 = (function (){var statearr_13331 = state_13326;(statearr_13331[9] = inst_13306__$1);
return statearr_13331;
})();if(inst_13308)
{var statearr_13332_13353 = state_13326__$1;(statearr_13332_13353[1] = 5);
} else
{var statearr_13333_13354 = state_13326__$1;(statearr_13333_13354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 5))
{var inst_13306 = (state_13326[9]);var inst_13303 = (state_13326[7]);var inst_13310 = cljs.core._EQ_.call(null,inst_13306,inst_13303);var state_13326__$1 = state_13326;if(inst_13310)
{var statearr_13334_13355 = state_13326__$1;(statearr_13334_13355[1] = 8);
} else
{var statearr_13335_13356 = state_13326__$1;(statearr_13335_13356[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 6))
{var state_13326__$1 = state_13326;var statearr_13337_13357 = state_13326__$1;(statearr_13337_13357[2] = null);
(statearr_13337_13357[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 7))
{var inst_13321 = (state_13326[2]);var state_13326__$1 = state_13326;var statearr_13338_13358 = state_13326__$1;(statearr_13338_13358[2] = inst_13321);
(statearr_13338_13358[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 8))
{var inst_13303 = (state_13326[7]);var tmp13336 = inst_13303;var inst_13303__$1 = tmp13336;var state_13326__$1 = (function (){var statearr_13339 = state_13326;(statearr_13339[7] = inst_13303__$1);
return statearr_13339;
})();var statearr_13340_13359 = state_13326__$1;(statearr_13340_13359[2] = null);
(statearr_13340_13359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 9))
{var inst_13306 = (state_13326[9]);var state_13326__$1 = state_13326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13326__$1,11,out,inst_13306);
} else
{if((state_val_13327 === 10))
{var inst_13318 = (state_13326[2]);var state_13326__$1 = state_13326;var statearr_13341_13360 = state_13326__$1;(statearr_13341_13360[2] = inst_13318);
(statearr_13341_13360[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 11))
{var inst_13306 = (state_13326[9]);var inst_13315 = (state_13326[2]);var inst_13303 = inst_13306;var state_13326__$1 = (function (){var statearr_13342 = state_13326;(statearr_13342[10] = inst_13315);
(statearr_13342[7] = inst_13303);
return statearr_13342;
})();var statearr_13343_13361 = state_13326__$1;(statearr_13343_13361[2] = null);
(statearr_13343_13361[1] = 2);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13347 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13347[0] = state_machine__6218__auto__);
(statearr_13347[1] = 1);
return statearr_13347;
});
var state_machine__6218__auto____1 = (function (state_13326){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13326);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13348){if((e13348 instanceof Object))
{var ex__6221__auto__ = e13348;var statearr_13349_13362 = state_13326;(statearr_13349_13362[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13363 = state_13326;
state_13326 = G__13363;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13326){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_13350 = f__6233__auto__.call(null);(statearr_13350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13351);
return statearr_13350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___13498 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_13468){var state_val_13469 = (state_13468[1]);if((state_val_13469 === 1))
{var inst_13431 = (new Array(n));var inst_13432 = inst_13431;var inst_13433 = 0;var state_13468__$1 = (function (){var statearr_13470 = state_13468;(statearr_13470[7] = inst_13433);
(statearr_13470[8] = inst_13432);
return statearr_13470;
})();var statearr_13471_13499 = state_13468__$1;(statearr_13471_13499[2] = null);
(statearr_13471_13499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 2))
{var state_13468__$1 = state_13468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13468__$1,4,ch);
} else
{if((state_val_13469 === 3))
{var inst_13466 = (state_13468[2]);var state_13468__$1 = state_13468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13468__$1,inst_13466);
} else
{if((state_val_13469 === 4))
{var inst_13436 = (state_13468[9]);var inst_13436__$1 = (state_13468[2]);var inst_13437 = (inst_13436__$1 == null);var inst_13438 = cljs.core.not.call(null,inst_13437);var state_13468__$1 = (function (){var statearr_13472 = state_13468;(statearr_13472[9] = inst_13436__$1);
return statearr_13472;
})();if(inst_13438)
{var statearr_13473_13500 = state_13468__$1;(statearr_13473_13500[1] = 5);
} else
{var statearr_13474_13501 = state_13468__$1;(statearr_13474_13501[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 5))
{var inst_13436 = (state_13468[9]);var inst_13441 = (state_13468[10]);var inst_13433 = (state_13468[7]);var inst_13432 = (state_13468[8]);var inst_13440 = (inst_13432[inst_13433] = inst_13436);var inst_13441__$1 = (inst_13433 + 1);var inst_13442 = (inst_13441__$1 < n);var state_13468__$1 = (function (){var statearr_13475 = state_13468;(statearr_13475[10] = inst_13441__$1);
(statearr_13475[11] = inst_13440);
return statearr_13475;
})();if(cljs.core.truth_(inst_13442))
{var statearr_13476_13502 = state_13468__$1;(statearr_13476_13502[1] = 8);
} else
{var statearr_13477_13503 = state_13468__$1;(statearr_13477_13503[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 6))
{var inst_13433 = (state_13468[7]);var inst_13454 = (inst_13433 > 0);var state_13468__$1 = state_13468;if(cljs.core.truth_(inst_13454))
{var statearr_13479_13504 = state_13468__$1;(statearr_13479_13504[1] = 12);
} else
{var statearr_13480_13505 = state_13468__$1;(statearr_13480_13505[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 7))
{var inst_13464 = (state_13468[2]);var state_13468__$1 = state_13468;var statearr_13481_13506 = state_13468__$1;(statearr_13481_13506[2] = inst_13464);
(statearr_13481_13506[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 8))
{var inst_13441 = (state_13468[10]);var inst_13432 = (state_13468[8]);var tmp13478 = inst_13432;var inst_13432__$1 = tmp13478;var inst_13433 = inst_13441;var state_13468__$1 = (function (){var statearr_13482 = state_13468;(statearr_13482[7] = inst_13433);
(statearr_13482[8] = inst_13432__$1);
return statearr_13482;
})();var statearr_13483_13507 = state_13468__$1;(statearr_13483_13507[2] = null);
(statearr_13483_13507[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 9))
{var inst_13432 = (state_13468[8]);var inst_13446 = cljs.core.vec.call(null,inst_13432);var state_13468__$1 = state_13468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13468__$1,11,out,inst_13446);
} else
{if((state_val_13469 === 10))
{var inst_13452 = (state_13468[2]);var state_13468__$1 = state_13468;var statearr_13484_13508 = state_13468__$1;(statearr_13484_13508[2] = inst_13452);
(statearr_13484_13508[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 11))
{var inst_13448 = (state_13468[2]);var inst_13449 = (new Array(n));var inst_13432 = inst_13449;var inst_13433 = 0;var state_13468__$1 = (function (){var statearr_13485 = state_13468;(statearr_13485[7] = inst_13433);
(statearr_13485[8] = inst_13432);
(statearr_13485[12] = inst_13448);
return statearr_13485;
})();var statearr_13486_13509 = state_13468__$1;(statearr_13486_13509[2] = null);
(statearr_13486_13509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 12))
{var inst_13432 = (state_13468[8]);var inst_13456 = cljs.core.vec.call(null,inst_13432);var state_13468__$1 = state_13468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13468__$1,15,out,inst_13456);
} else
{if((state_val_13469 === 13))
{var state_13468__$1 = state_13468;var statearr_13487_13510 = state_13468__$1;(statearr_13487_13510[2] = null);
(statearr_13487_13510[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 14))
{var inst_13461 = (state_13468[2]);var inst_13462 = cljs.core.async.close_BANG_.call(null,out);var state_13468__$1 = (function (){var statearr_13488 = state_13468;(statearr_13488[13] = inst_13461);
return statearr_13488;
})();var statearr_13489_13511 = state_13468__$1;(statearr_13489_13511[2] = inst_13462);
(statearr_13489_13511[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13469 === 15))
{var inst_13458 = (state_13468[2]);var state_13468__$1 = state_13468;var statearr_13490_13512 = state_13468__$1;(statearr_13490_13512[2] = inst_13458);
(statearr_13490_13512[1] = 14);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13494[0] = state_machine__6218__auto__);
(statearr_13494[1] = 1);
return statearr_13494;
});
var state_machine__6218__auto____1 = (function (state_13468){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13468);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13495){if((e13495 instanceof Object))
{var ex__6221__auto__ = e13495;var statearr_13496_13513 = state_13468;(statearr_13496_13513[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13468);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13514 = state_13468;
state_13468 = G__13514;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13468){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_13497 = f__6233__auto__.call(null);(statearr_13497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13498);
return statearr_13497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6232__auto___13657 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6233__auto__ = (function (){var switch__6217__auto__ = (function (state_13627){var state_val_13628 = (state_13627[1]);if((state_val_13628 === 1))
{var inst_13586 = [];var inst_13587 = inst_13586;var inst_13588 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13627__$1 = (function (){var statearr_13629 = state_13627;(statearr_13629[7] = inst_13588);
(statearr_13629[8] = inst_13587);
return statearr_13629;
})();var statearr_13630_13658 = state_13627__$1;(statearr_13630_13658[2] = null);
(statearr_13630_13658[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 2))
{var state_13627__$1 = state_13627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13627__$1,4,ch);
} else
{if((state_val_13628 === 3))
{var inst_13625 = (state_13627[2]);var state_13627__$1 = state_13627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13627__$1,inst_13625);
} else
{if((state_val_13628 === 4))
{var inst_13591 = (state_13627[9]);var inst_13591__$1 = (state_13627[2]);var inst_13592 = (inst_13591__$1 == null);var inst_13593 = cljs.core.not.call(null,inst_13592);var state_13627__$1 = (function (){var statearr_13631 = state_13627;(statearr_13631[9] = inst_13591__$1);
return statearr_13631;
})();if(inst_13593)
{var statearr_13632_13659 = state_13627__$1;(statearr_13632_13659[1] = 5);
} else
{var statearr_13633_13660 = state_13627__$1;(statearr_13633_13660[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 5))
{var inst_13595 = (state_13627[10]);var inst_13591 = (state_13627[9]);var inst_13588 = (state_13627[7]);var inst_13595__$1 = f.call(null,inst_13591);var inst_13596 = cljs.core._EQ_.call(null,inst_13595__$1,inst_13588);var inst_13597 = cljs.core.keyword_identical_QMARK_.call(null,inst_13588,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13598 = (inst_13596) || (inst_13597);var state_13627__$1 = (function (){var statearr_13634 = state_13627;(statearr_13634[10] = inst_13595__$1);
return statearr_13634;
})();if(cljs.core.truth_(inst_13598))
{var statearr_13635_13661 = state_13627__$1;(statearr_13635_13661[1] = 8);
} else
{var statearr_13636_13662 = state_13627__$1;(statearr_13636_13662[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 6))
{var inst_13587 = (state_13627[8]);var inst_13612 = inst_13587.length;var inst_13613 = (inst_13612 > 0);var state_13627__$1 = state_13627;if(cljs.core.truth_(inst_13613))
{var statearr_13638_13663 = state_13627__$1;(statearr_13638_13663[1] = 12);
} else
{var statearr_13639_13664 = state_13627__$1;(statearr_13639_13664[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 7))
{var inst_13623 = (state_13627[2]);var state_13627__$1 = state_13627;var statearr_13640_13665 = state_13627__$1;(statearr_13640_13665[2] = inst_13623);
(statearr_13640_13665[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 8))
{var inst_13595 = (state_13627[10]);var inst_13591 = (state_13627[9]);var inst_13587 = (state_13627[8]);var inst_13600 = inst_13587.push(inst_13591);var tmp13637 = inst_13587;var inst_13587__$1 = tmp13637;var inst_13588 = inst_13595;var state_13627__$1 = (function (){var statearr_13641 = state_13627;(statearr_13641[11] = inst_13600);
(statearr_13641[7] = inst_13588);
(statearr_13641[8] = inst_13587__$1);
return statearr_13641;
})();var statearr_13642_13666 = state_13627__$1;(statearr_13642_13666[2] = null);
(statearr_13642_13666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 9))
{var inst_13587 = (state_13627[8]);var inst_13603 = cljs.core.vec.call(null,inst_13587);var state_13627__$1 = state_13627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13627__$1,11,out,inst_13603);
} else
{if((state_val_13628 === 10))
{var inst_13610 = (state_13627[2]);var state_13627__$1 = state_13627;var statearr_13643_13667 = state_13627__$1;(statearr_13643_13667[2] = inst_13610);
(statearr_13643_13667[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 11))
{var inst_13595 = (state_13627[10]);var inst_13591 = (state_13627[9]);var inst_13605 = (state_13627[2]);var inst_13606 = [];var inst_13607 = inst_13606.push(inst_13591);var inst_13587 = inst_13606;var inst_13588 = inst_13595;var state_13627__$1 = (function (){var statearr_13644 = state_13627;(statearr_13644[12] = inst_13605);
(statearr_13644[13] = inst_13607);
(statearr_13644[7] = inst_13588);
(statearr_13644[8] = inst_13587);
return statearr_13644;
})();var statearr_13645_13668 = state_13627__$1;(statearr_13645_13668[2] = null);
(statearr_13645_13668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 12))
{var inst_13587 = (state_13627[8]);var inst_13615 = cljs.core.vec.call(null,inst_13587);var state_13627__$1 = state_13627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13627__$1,15,out,inst_13615);
} else
{if((state_val_13628 === 13))
{var state_13627__$1 = state_13627;var statearr_13646_13669 = state_13627__$1;(statearr_13646_13669[2] = null);
(statearr_13646_13669[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 14))
{var inst_13620 = (state_13627[2]);var inst_13621 = cljs.core.async.close_BANG_.call(null,out);var state_13627__$1 = (function (){var statearr_13647 = state_13627;(statearr_13647[14] = inst_13620);
return statearr_13647;
})();var statearr_13648_13670 = state_13627__$1;(statearr_13648_13670[2] = inst_13621);
(statearr_13648_13670[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13628 === 15))
{var inst_13617 = (state_13627[2]);var state_13627__$1 = state_13627;var statearr_13649_13671 = state_13627__$1;(statearr_13649_13671[2] = inst_13617);
(statearr_13649_13671[1] = 14);
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
});return ((function (switch__6217__auto__){
return (function() {
var state_machine__6218__auto__ = null;
var state_machine__6218__auto____0 = (function (){var statearr_13653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13653[0] = state_machine__6218__auto__);
(statearr_13653[1] = 1);
return statearr_13653;
});
var state_machine__6218__auto____1 = (function (state_13627){while(true){
var ret_value__6219__auto__ = (function (){try{while(true){
var result__6220__auto__ = switch__6217__auto__.call(null,state_13627);if(cljs.core.keyword_identical_QMARK_.call(null,result__6220__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6220__auto__;
}
break;
}
}catch (e13654){if((e13654 instanceof Object))
{var ex__6221__auto__ = e13654;var statearr_13655_13672 = state_13627;(statearr_13655_13672[5] = ex__6221__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6219__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13673 = state_13627;
state_13627 = G__13673;
continue;
}
} else
{return ret_value__6219__auto__;
}
break;
}
});
state_machine__6218__auto__ = function(state_13627){
switch(arguments.length){
case 0:
return state_machine__6218__auto____0.call(this);
case 1:
return state_machine__6218__auto____1.call(this,state_13627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6218__auto____0;
state_machine__6218__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6218__auto____1;
return state_machine__6218__auto__;
})()
;})(switch__6217__auto__))
})();var state__6234__auto__ = (function (){var statearr_13656 = f__6233__auto__.call(null);(statearr_13656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6232__auto___13657);
return statearr_13656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6234__auto__);
}));
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

//# sourceMappingURL=async.js.map