// Compiled by ClojureScript 0.0-2202
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18626 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18626 = (function (f,fn_handler,meta18627){
this.f = f;
this.fn_handler = fn_handler;
this.meta18627 = meta18627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18626.cljs$lang$type = true;
cljs.core.async.t18626.cljs$lang$ctorStr = "cljs.core.async/t18626";
cljs.core.async.t18626.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t18626");
});
cljs.core.async.t18626.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18628){var self__ = this;
var _18628__$1 = this;return self__.meta18627;
});
cljs.core.async.t18626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18628,meta18627__$1){var self__ = this;
var _18628__$1 = this;return (new cljs.core.async.t18626(self__.f,self__.fn_handler,meta18627__$1));
});
cljs.core.async.__GT_t18626 = (function __GT_t18626(f__$1,fn_handler__$1,meta18627){return (new cljs.core.async.t18626(f__$1,fn_handler__$1,meta18627));
});
}
return (new cljs.core.async.t18626(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18630 = buff;if(G__18630)
{var bit__8530__auto__ = null;if(cljs.core.truth_((function (){var or__7880__auto__ = bit__8530__auto__;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return G__18630.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18630.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18630);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18630);
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
{var val_18631 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18631);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18631,ret){
return (function (){return fn1.call(null,val_18631);
});})(val_18631,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8728__auto___18632 = n;var x_18633 = 0;while(true){
if((x_18633 < n__8728__auto___18632))
{(a[x_18633] = 0);
{
var G__18634 = (x_18633 + 1);
x_18633 = G__18634;
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
var G__18635 = (i + 1);
i = G__18635;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18639 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18639 = (function (flag,alt_flag,meta18640){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18640 = meta18640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18639.cljs$lang$type = true;
cljs.core.async.t18639.cljs$lang$ctorStr = "cljs.core.async/t18639";
cljs.core.async.t18639.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t18639");
});})(flag))
;
cljs.core.async.t18639.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t18639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t18639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18641){var self__ = this;
var _18641__$1 = this;return self__.meta18640;
});})(flag))
;
cljs.core.async.t18639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18641,meta18640__$1){var self__ = this;
var _18641__$1 = this;return (new cljs.core.async.t18639(self__.flag,self__.alt_flag,meta18640__$1));
});})(flag))
;
cljs.core.async.__GT_t18639 = ((function (flag){
return (function __GT_t18639(flag__$1,alt_flag__$1,meta18640){return (new cljs.core.async.t18639(flag__$1,alt_flag__$1,meta18640));
});})(flag))
;
}
return (new cljs.core.async.t18639(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18645 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18645 = (function (cb,flag,alt_handler,meta18646){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18646 = meta18646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18645.cljs$lang$type = true;
cljs.core.async.t18645.cljs$lang$ctorStr = "cljs.core.async/t18645";
cljs.core.async.t18645.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t18645");
});
cljs.core.async.t18645.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18647){var self__ = this;
var _18647__$1 = this;return self__.meta18646;
});
cljs.core.async.t18645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18647,meta18646__$1){var self__ = this;
var _18647__$1 = this;return (new cljs.core.async.t18645(self__.cb,self__.flag,self__.alt_handler,meta18646__$1));
});
cljs.core.async.__GT_t18645 = (function __GT_t18645(cb__$1,flag__$1,alt_handler__$1,meta18646){return (new cljs.core.async.t18645(cb__$1,flag__$1,alt_handler__$1,meta18646));
});
}
return (new cljs.core.async.t18645(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18648_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18648_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18649_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18649_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7880__auto__ = wport;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18650 = (i + 1);
i = G__18650;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7880__auto__ = ret;if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7868__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7868__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7868__auto__;
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
var alts_BANG___delegate = function (ports,p__18651){var map__18653 = p__18651;var map__18653__$1 = ((cljs.core.seq_QMARK_.call(null,map__18653))?cljs.core.apply.call(null,cljs.core.hash_map,map__18653):map__18653);var opts = map__18653__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__18651 = null;if (arguments.length > 1) {
  p__18651 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18651);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18654){
var ports = cljs.core.first(arglist__18654);
var p__18651 = cljs.core.rest(arglist__18654);
return alts_BANG___delegate(ports,p__18651);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18662 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18662 = (function (ch,f,map_LT_,meta18663){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18663 = meta18663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18662.cljs$lang$type = true;
cljs.core.async.t18662.cljs$lang$ctorStr = "cljs.core.async/t18662";
cljs.core.async.t18662.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t18662");
});
cljs.core.async.t18662.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t18662.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18665 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18665 = (function (fn1,_,meta18663,ch,f,map_LT_,meta18666){
this.fn1 = fn1;
this._ = _;
this.meta18663 = meta18663;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18666 = meta18666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18665.cljs$lang$type = true;
cljs.core.async.t18665.cljs$lang$ctorStr = "cljs.core.async/t18665";
cljs.core.async.t18665.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t18665");
});})(___$1))
;
cljs.core.async.t18665.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18665.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__18655_SHARP_){return f1.call(null,(((p1__18655_SHARP_ == null))?null:self__.f.call(null,p1__18655_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t18665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18667){var self__ = this;
var _18667__$1 = this;return self__.meta18666;
});})(___$1))
;
cljs.core.async.t18665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18667,meta18666__$1){var self__ = this;
var _18667__$1 = this;return (new cljs.core.async.t18665(self__.fn1,self__._,self__.meta18663,self__.ch,self__.f,self__.map_LT_,meta18666__$1));
});})(___$1))
;
cljs.core.async.__GT_t18665 = ((function (___$1){
return (function __GT_t18665(fn1__$1,___$2,meta18663__$1,ch__$2,f__$2,map_LT___$2,meta18666){return (new cljs.core.async.t18665(fn1__$1,___$2,meta18663__$1,ch__$2,f__$2,map_LT___$2,meta18666));
});})(___$1))
;
}
return (new cljs.core.async.t18665(fn1,___$1,self__.meta18663,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7868__auto__ = ret;if(cljs.core.truth_(and__7868__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7868__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t18662.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18662.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18664){var self__ = this;
var _18664__$1 = this;return self__.meta18663;
});
cljs.core.async.t18662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18664,meta18663__$1){var self__ = this;
var _18664__$1 = this;return (new cljs.core.async.t18662(self__.ch,self__.f,self__.map_LT_,meta18663__$1));
});
cljs.core.async.__GT_t18662 = (function __GT_t18662(ch__$1,f__$1,map_LT___$1,meta18663){return (new cljs.core.async.t18662(ch__$1,f__$1,map_LT___$1,meta18663));
});
}
return (new cljs.core.async.t18662(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18671 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18671 = (function (ch,f,map_GT_,meta18672){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18672 = meta18672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18671.cljs$lang$type = true;
cljs.core.async.t18671.cljs$lang$ctorStr = "cljs.core.async/t18671";
cljs.core.async.t18671.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t18671");
});
cljs.core.async.t18671.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t18671.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18671.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18673){var self__ = this;
var _18673__$1 = this;return self__.meta18672;
});
cljs.core.async.t18671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18673,meta18672__$1){var self__ = this;
var _18673__$1 = this;return (new cljs.core.async.t18671(self__.ch,self__.f,self__.map_GT_,meta18672__$1));
});
cljs.core.async.__GT_t18671 = (function __GT_t18671(ch__$1,f__$1,map_GT___$1,meta18672){return (new cljs.core.async.t18671(ch__$1,f__$1,map_GT___$1,meta18672));
});
}
return (new cljs.core.async.t18671(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18677 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18677 = (function (ch,p,filter_GT_,meta18678){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18678 = meta18678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18677.cljs$lang$type = true;
cljs.core.async.t18677.cljs$lang$ctorStr = "cljs.core.async/t18677";
cljs.core.async.t18677.cljs$lang$ctorPrWriter = (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t18677");
});
cljs.core.async.t18677.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t18677.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18677.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18677.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18679){var self__ = this;
var _18679__$1 = this;return self__.meta18678;
});
cljs.core.async.t18677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18679,meta18678__$1){var self__ = this;
var _18679__$1 = this;return (new cljs.core.async.t18677(self__.ch,self__.p,self__.filter_GT_,meta18678__$1));
});
cljs.core.async.__GT_t18677 = (function __GT_t18677(ch__$1,p__$1,filter_GT___$1,meta18678){return (new cljs.core.async.t18677(ch__$1,p__$1,filter_GT___$1,meta18678));
});
}
return (new cljs.core.async.t18677(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9731__auto___18762 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___18762,out){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___18762,out){
return (function (state_18741){var state_val_18742 = (state_18741[1]);if((state_val_18742 === 7))
{var inst_18737 = (state_18741[2]);var state_18741__$1 = state_18741;var statearr_18743_18763 = state_18741__$1;(statearr_18743_18763[2] = inst_18737);
(statearr_18743_18763[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18742 === 1))
{var state_18741__$1 = state_18741;var statearr_18744_18764 = state_18741__$1;(statearr_18744_18764[2] = null);
(statearr_18744_18764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18742 === 4))
{var inst_18723 = (state_18741[7]);var inst_18723__$1 = (state_18741[2]);var inst_18724 = (inst_18723__$1 == null);var state_18741__$1 = (function (){var statearr_18745 = state_18741;(statearr_18745[7] = inst_18723__$1);
return statearr_18745;
})();if(cljs.core.truth_(inst_18724))
{var statearr_18746_18765 = state_18741__$1;(statearr_18746_18765[1] = 5);
} else
{var statearr_18747_18766 = state_18741__$1;(statearr_18747_18766[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18742 === 6))
{var inst_18723 = (state_18741[7]);var inst_18728 = p.call(null,inst_18723);var state_18741__$1 = state_18741;if(cljs.core.truth_(inst_18728))
{var statearr_18748_18767 = state_18741__$1;(statearr_18748_18767[1] = 8);
} else
{var statearr_18749_18768 = state_18741__$1;(statearr_18749_18768[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18742 === 3))
{var inst_18739 = (state_18741[2]);var state_18741__$1 = state_18741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18741__$1,inst_18739);
} else
{if((state_val_18742 === 2))
{var state_18741__$1 = state_18741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18741__$1,4,ch);
} else
{if((state_val_18742 === 11))
{var inst_18731 = (state_18741[2]);var state_18741__$1 = state_18741;var statearr_18750_18769 = state_18741__$1;(statearr_18750_18769[2] = inst_18731);
(statearr_18750_18769[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18742 === 9))
{var state_18741__$1 = state_18741;var statearr_18751_18770 = state_18741__$1;(statearr_18751_18770[2] = null);
(statearr_18751_18770[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18742 === 5))
{var inst_18726 = cljs.core.async.close_BANG_.call(null,out);var state_18741__$1 = state_18741;var statearr_18752_18771 = state_18741__$1;(statearr_18752_18771[2] = inst_18726);
(statearr_18752_18771[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18742 === 10))
{var inst_18734 = (state_18741[2]);var state_18741__$1 = (function (){var statearr_18753 = state_18741;(statearr_18753[8] = inst_18734);
return statearr_18753;
})();var statearr_18754_18772 = state_18741__$1;(statearr_18754_18772[2] = null);
(statearr_18754_18772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18742 === 8))
{var inst_18723 = (state_18741[7]);var state_18741__$1 = state_18741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18741__$1,11,out,inst_18723);
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
});})(c__9731__auto___18762,out))
;return ((function (switch__9716__auto__,c__9731__auto___18762,out){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_18758 = [null,null,null,null,null,null,null,null,null];(statearr_18758[0] = state_machine__9717__auto__);
(statearr_18758[1] = 1);
return statearr_18758;
});
var state_machine__9717__auto____1 = (function (state_18741){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_18741);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e18759){if((e18759 instanceof Object))
{var ex__9720__auto__ = e18759;var statearr_18760_18773 = state_18741;(statearr_18760_18773[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18774 = state_18741;
state_18741 = G__18774;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_18741){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_18741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___18762,out))
})();var state__9733__auto__ = (function (){var statearr_18761 = f__9732__auto__.call(null);(statearr_18761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___18762);
return statearr_18761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___18762,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__){
return (function (state_18940){var state_val_18941 = (state_18940[1]);if((state_val_18941 === 7))
{var inst_18936 = (state_18940[2]);var state_18940__$1 = state_18940;var statearr_18942_18983 = state_18940__$1;(statearr_18942_18983[2] = inst_18936);
(statearr_18942_18983[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 20))
{var inst_18906 = (state_18940[7]);var inst_18917 = (state_18940[2]);var inst_18918 = cljs.core.next.call(null,inst_18906);var inst_18892 = inst_18918;var inst_18893 = null;var inst_18894 = 0;var inst_18895 = 0;var state_18940__$1 = (function (){var statearr_18943 = state_18940;(statearr_18943[8] = inst_18917);
(statearr_18943[9] = inst_18894);
(statearr_18943[10] = inst_18893);
(statearr_18943[11] = inst_18892);
(statearr_18943[12] = inst_18895);
return statearr_18943;
})();var statearr_18944_18984 = state_18940__$1;(statearr_18944_18984[2] = null);
(statearr_18944_18984[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 1))
{var state_18940__$1 = state_18940;var statearr_18945_18985 = state_18940__$1;(statearr_18945_18985[2] = null);
(statearr_18945_18985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 4))
{var inst_18881 = (state_18940[13]);var inst_18881__$1 = (state_18940[2]);var inst_18882 = (inst_18881__$1 == null);var state_18940__$1 = (function (){var statearr_18946 = state_18940;(statearr_18946[13] = inst_18881__$1);
return statearr_18946;
})();if(cljs.core.truth_(inst_18882))
{var statearr_18947_18986 = state_18940__$1;(statearr_18947_18986[1] = 5);
} else
{var statearr_18948_18987 = state_18940__$1;(statearr_18948_18987[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 15))
{var state_18940__$1 = state_18940;var statearr_18952_18988 = state_18940__$1;(statearr_18952_18988[2] = null);
(statearr_18952_18988[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 21))
{var state_18940__$1 = state_18940;var statearr_18953_18989 = state_18940__$1;(statearr_18953_18989[2] = null);
(statearr_18953_18989[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 13))
{var inst_18894 = (state_18940[9]);var inst_18893 = (state_18940[10]);var inst_18892 = (state_18940[11]);var inst_18895 = (state_18940[12]);var inst_18902 = (state_18940[2]);var inst_18903 = (inst_18895 + 1);var tmp18949 = inst_18894;var tmp18950 = inst_18893;var tmp18951 = inst_18892;var inst_18892__$1 = tmp18951;var inst_18893__$1 = tmp18950;var inst_18894__$1 = tmp18949;var inst_18895__$1 = inst_18903;var state_18940__$1 = (function (){var statearr_18954 = state_18940;(statearr_18954[14] = inst_18902);
(statearr_18954[9] = inst_18894__$1);
(statearr_18954[10] = inst_18893__$1);
(statearr_18954[11] = inst_18892__$1);
(statearr_18954[12] = inst_18895__$1);
return statearr_18954;
})();var statearr_18955_18990 = state_18940__$1;(statearr_18955_18990[2] = null);
(statearr_18955_18990[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 22))
{var state_18940__$1 = state_18940;var statearr_18956_18991 = state_18940__$1;(statearr_18956_18991[2] = null);
(statearr_18956_18991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 6))
{var inst_18881 = (state_18940[13]);var inst_18890 = f.call(null,inst_18881);var inst_18891 = cljs.core.seq.call(null,inst_18890);var inst_18892 = inst_18891;var inst_18893 = null;var inst_18894 = 0;var inst_18895 = 0;var state_18940__$1 = (function (){var statearr_18957 = state_18940;(statearr_18957[9] = inst_18894);
(statearr_18957[10] = inst_18893);
(statearr_18957[11] = inst_18892);
(statearr_18957[12] = inst_18895);
return statearr_18957;
})();var statearr_18958_18992 = state_18940__$1;(statearr_18958_18992[2] = null);
(statearr_18958_18992[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 17))
{var inst_18906 = (state_18940[7]);var inst_18910 = cljs.core.chunk_first.call(null,inst_18906);var inst_18911 = cljs.core.chunk_rest.call(null,inst_18906);var inst_18912 = cljs.core.count.call(null,inst_18910);var inst_18892 = inst_18911;var inst_18893 = inst_18910;var inst_18894 = inst_18912;var inst_18895 = 0;var state_18940__$1 = (function (){var statearr_18959 = state_18940;(statearr_18959[9] = inst_18894);
(statearr_18959[10] = inst_18893);
(statearr_18959[11] = inst_18892);
(statearr_18959[12] = inst_18895);
return statearr_18959;
})();var statearr_18960_18993 = state_18940__$1;(statearr_18960_18993[2] = null);
(statearr_18960_18993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 3))
{var inst_18938 = (state_18940[2]);var state_18940__$1 = state_18940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18940__$1,inst_18938);
} else
{if((state_val_18941 === 12))
{var inst_18926 = (state_18940[2]);var state_18940__$1 = state_18940;var statearr_18961_18994 = state_18940__$1;(statearr_18961_18994[2] = inst_18926);
(statearr_18961_18994[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 2))
{var state_18940__$1 = state_18940;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18940__$1,4,in$);
} else
{if((state_val_18941 === 23))
{var inst_18934 = (state_18940[2]);var state_18940__$1 = state_18940;var statearr_18962_18995 = state_18940__$1;(statearr_18962_18995[2] = inst_18934);
(statearr_18962_18995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 19))
{var inst_18921 = (state_18940[2]);var state_18940__$1 = state_18940;var statearr_18963_18996 = state_18940__$1;(statearr_18963_18996[2] = inst_18921);
(statearr_18963_18996[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 11))
{var inst_18906 = (state_18940[7]);var inst_18892 = (state_18940[11]);var inst_18906__$1 = cljs.core.seq.call(null,inst_18892);var state_18940__$1 = (function (){var statearr_18964 = state_18940;(statearr_18964[7] = inst_18906__$1);
return statearr_18964;
})();if(inst_18906__$1)
{var statearr_18965_18997 = state_18940__$1;(statearr_18965_18997[1] = 14);
} else
{var statearr_18966_18998 = state_18940__$1;(statearr_18966_18998[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 9))
{var inst_18928 = (state_18940[2]);var inst_18929 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_18940__$1 = (function (){var statearr_18967 = state_18940;(statearr_18967[15] = inst_18928);
return statearr_18967;
})();if(cljs.core.truth_(inst_18929))
{var statearr_18968_18999 = state_18940__$1;(statearr_18968_18999[1] = 21);
} else
{var statearr_18969_19000 = state_18940__$1;(statearr_18969_19000[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 5))
{var inst_18884 = cljs.core.async.close_BANG_.call(null,out);var state_18940__$1 = state_18940;var statearr_18970_19001 = state_18940__$1;(statearr_18970_19001[2] = inst_18884);
(statearr_18970_19001[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 14))
{var inst_18906 = (state_18940[7]);var inst_18908 = cljs.core.chunked_seq_QMARK_.call(null,inst_18906);var state_18940__$1 = state_18940;if(inst_18908)
{var statearr_18971_19002 = state_18940__$1;(statearr_18971_19002[1] = 17);
} else
{var statearr_18972_19003 = state_18940__$1;(statearr_18972_19003[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 16))
{var inst_18924 = (state_18940[2]);var state_18940__$1 = state_18940;var statearr_18973_19004 = state_18940__$1;(statearr_18973_19004[2] = inst_18924);
(statearr_18973_19004[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18941 === 10))
{var inst_18893 = (state_18940[10]);var inst_18895 = (state_18940[12]);var inst_18900 = cljs.core._nth.call(null,inst_18893,inst_18895);var state_18940__$1 = state_18940;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18940__$1,13,out,inst_18900);
} else
{if((state_val_18941 === 18))
{var inst_18906 = (state_18940[7]);var inst_18915 = cljs.core.first.call(null,inst_18906);var state_18940__$1 = state_18940;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18940__$1,20,out,inst_18915);
} else
{if((state_val_18941 === 8))
{var inst_18894 = (state_18940[9]);var inst_18895 = (state_18940[12]);var inst_18897 = (inst_18895 < inst_18894);var inst_18898 = inst_18897;var state_18940__$1 = state_18940;if(cljs.core.truth_(inst_18898))
{var statearr_18974_19005 = state_18940__$1;(statearr_18974_19005[1] = 10);
} else
{var statearr_18975_19006 = state_18940__$1;(statearr_18975_19006[1] = 11);
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
});})(c__9731__auto__))
;return ((function (switch__9716__auto__,c__9731__auto__){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_18979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18979[0] = state_machine__9717__auto__);
(statearr_18979[1] = 1);
return statearr_18979;
});
var state_machine__9717__auto____1 = (function (state_18940){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_18940);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e18980){if((e18980 instanceof Object))
{var ex__9720__auto__ = e18980;var statearr_18981_19007 = state_18940;(statearr_18981_19007[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18940);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19008 = state_18940;
state_18940 = G__19008;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_18940){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_18940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__))
})();var state__9733__auto__ = (function (){var statearr_18982 = f__9732__auto__.call(null);(statearr_18982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_18982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__))
);
return c__9731__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__9731__auto___19103 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___19103){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___19103){
return (function (state_19079){var state_val_19080 = (state_19079[1]);if((state_val_19080 === 7))
{var inst_19075 = (state_19079[2]);var state_19079__$1 = state_19079;var statearr_19081_19104 = state_19079__$1;(statearr_19081_19104[2] = inst_19075);
(statearr_19081_19104[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19080 === 1))
{var state_19079__$1 = state_19079;var statearr_19082_19105 = state_19079__$1;(statearr_19082_19105[2] = null);
(statearr_19082_19105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19080 === 4))
{var inst_19058 = (state_19079[7]);var inst_19058__$1 = (state_19079[2]);var inst_19059 = (inst_19058__$1 == null);var state_19079__$1 = (function (){var statearr_19083 = state_19079;(statearr_19083[7] = inst_19058__$1);
return statearr_19083;
})();if(cljs.core.truth_(inst_19059))
{var statearr_19084_19106 = state_19079__$1;(statearr_19084_19106[1] = 5);
} else
{var statearr_19085_19107 = state_19079__$1;(statearr_19085_19107[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19080 === 13))
{var state_19079__$1 = state_19079;var statearr_19086_19108 = state_19079__$1;(statearr_19086_19108[2] = null);
(statearr_19086_19108[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19080 === 6))
{var inst_19058 = (state_19079[7]);var state_19079__$1 = state_19079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19079__$1,11,to,inst_19058);
} else
{if((state_val_19080 === 3))
{var inst_19077 = (state_19079[2]);var state_19079__$1 = state_19079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19079__$1,inst_19077);
} else
{if((state_val_19080 === 12))
{var state_19079__$1 = state_19079;var statearr_19087_19109 = state_19079__$1;(statearr_19087_19109[2] = null);
(statearr_19087_19109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19080 === 2))
{var state_19079__$1 = state_19079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19079__$1,4,from);
} else
{if((state_val_19080 === 11))
{var inst_19068 = (state_19079[2]);var state_19079__$1 = state_19079;if(cljs.core.truth_(inst_19068))
{var statearr_19088_19110 = state_19079__$1;(statearr_19088_19110[1] = 12);
} else
{var statearr_19089_19111 = state_19079__$1;(statearr_19089_19111[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19080 === 9))
{var state_19079__$1 = state_19079;var statearr_19090_19112 = state_19079__$1;(statearr_19090_19112[2] = null);
(statearr_19090_19112[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19080 === 5))
{var state_19079__$1 = state_19079;if(cljs.core.truth_(close_QMARK_))
{var statearr_19091_19113 = state_19079__$1;(statearr_19091_19113[1] = 8);
} else
{var statearr_19092_19114 = state_19079__$1;(statearr_19092_19114[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19080 === 14))
{var inst_19073 = (state_19079[2]);var state_19079__$1 = state_19079;var statearr_19093_19115 = state_19079__$1;(statearr_19093_19115[2] = inst_19073);
(statearr_19093_19115[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19080 === 10))
{var inst_19065 = (state_19079[2]);var state_19079__$1 = state_19079;var statearr_19094_19116 = state_19079__$1;(statearr_19094_19116[2] = inst_19065);
(statearr_19094_19116[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19080 === 8))
{var inst_19062 = cljs.core.async.close_BANG_.call(null,to);var state_19079__$1 = state_19079;var statearr_19095_19117 = state_19079__$1;(statearr_19095_19117[2] = inst_19062);
(statearr_19095_19117[1] = 10);
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
});})(c__9731__auto___19103))
;return ((function (switch__9716__auto__,c__9731__auto___19103){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_19099 = [null,null,null,null,null,null,null,null];(statearr_19099[0] = state_machine__9717__auto__);
(statearr_19099[1] = 1);
return statearr_19099;
});
var state_machine__9717__auto____1 = (function (state_19079){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_19079);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e19100){if((e19100 instanceof Object))
{var ex__9720__auto__ = e19100;var statearr_19101_19118 = state_19079;(statearr_19101_19118[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19119 = state_19079;
state_19079 = G__19119;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_19079){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_19079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___19103))
})();var state__9733__auto__ = (function (){var statearr_19102 = f__9732__auto__.call(null);(statearr_19102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___19103);
return statearr_19102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___19103))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9731__auto___19220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___19220,tc,fc){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___19220,tc,fc){
return (function (state_19195){var state_val_19196 = (state_19195[1]);if((state_val_19196 === 7))
{var inst_19191 = (state_19195[2]);var state_19195__$1 = state_19195;var statearr_19197_19221 = state_19195__$1;(statearr_19197_19221[2] = inst_19191);
(statearr_19197_19221[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 1))
{var state_19195__$1 = state_19195;var statearr_19198_19222 = state_19195__$1;(statearr_19198_19222[2] = null);
(statearr_19198_19222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 4))
{var inst_19172 = (state_19195[7]);var inst_19172__$1 = (state_19195[2]);var inst_19173 = (inst_19172__$1 == null);var state_19195__$1 = (function (){var statearr_19199 = state_19195;(statearr_19199[7] = inst_19172__$1);
return statearr_19199;
})();if(cljs.core.truth_(inst_19173))
{var statearr_19200_19223 = state_19195__$1;(statearr_19200_19223[1] = 5);
} else
{var statearr_19201_19224 = state_19195__$1;(statearr_19201_19224[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 13))
{var state_19195__$1 = state_19195;var statearr_19202_19225 = state_19195__$1;(statearr_19202_19225[2] = null);
(statearr_19202_19225[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 6))
{var inst_19172 = (state_19195[7]);var inst_19178 = p.call(null,inst_19172);var state_19195__$1 = state_19195;if(cljs.core.truth_(inst_19178))
{var statearr_19203_19226 = state_19195__$1;(statearr_19203_19226[1] = 9);
} else
{var statearr_19204_19227 = state_19195__$1;(statearr_19204_19227[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 3))
{var inst_19193 = (state_19195[2]);var state_19195__$1 = state_19195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19195__$1,inst_19193);
} else
{if((state_val_19196 === 12))
{var state_19195__$1 = state_19195;var statearr_19205_19228 = state_19195__$1;(statearr_19205_19228[2] = null);
(statearr_19205_19228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 2))
{var state_19195__$1 = state_19195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19195__$1,4,ch);
} else
{if((state_val_19196 === 11))
{var inst_19172 = (state_19195[7]);var inst_19182 = (state_19195[2]);var state_19195__$1 = state_19195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19195__$1,8,inst_19182,inst_19172);
} else
{if((state_val_19196 === 9))
{var state_19195__$1 = state_19195;var statearr_19206_19229 = state_19195__$1;(statearr_19206_19229[2] = tc);
(statearr_19206_19229[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 5))
{var inst_19175 = cljs.core.async.close_BANG_.call(null,tc);var inst_19176 = cljs.core.async.close_BANG_.call(null,fc);var state_19195__$1 = (function (){var statearr_19207 = state_19195;(statearr_19207[8] = inst_19175);
return statearr_19207;
})();var statearr_19208_19230 = state_19195__$1;(statearr_19208_19230[2] = inst_19176);
(statearr_19208_19230[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 14))
{var inst_19189 = (state_19195[2]);var state_19195__$1 = state_19195;var statearr_19209_19231 = state_19195__$1;(statearr_19209_19231[2] = inst_19189);
(statearr_19209_19231[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 10))
{var state_19195__$1 = state_19195;var statearr_19210_19232 = state_19195__$1;(statearr_19210_19232[2] = fc);
(statearr_19210_19232[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 8))
{var inst_19184 = (state_19195[2]);var state_19195__$1 = state_19195;if(cljs.core.truth_(inst_19184))
{var statearr_19211_19233 = state_19195__$1;(statearr_19211_19233[1] = 12);
} else
{var statearr_19212_19234 = state_19195__$1;(statearr_19212_19234[1] = 13);
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
});})(c__9731__auto___19220,tc,fc))
;return ((function (switch__9716__auto__,c__9731__auto___19220,tc,fc){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_19216 = [null,null,null,null,null,null,null,null,null];(statearr_19216[0] = state_machine__9717__auto__);
(statearr_19216[1] = 1);
return statearr_19216;
});
var state_machine__9717__auto____1 = (function (state_19195){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_19195);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e19217){if((e19217 instanceof Object))
{var ex__9720__auto__ = e19217;var statearr_19218_19235 = state_19195;(statearr_19218_19235[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19236 = state_19195;
state_19195 = G__19236;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_19195){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_19195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___19220,tc,fc))
})();var state__9733__auto__ = (function (){var statearr_19219 = f__9732__auto__.call(null);(statearr_19219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___19220);
return statearr_19219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___19220,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__){
return (function (state_19283){var state_val_19284 = (state_19283[1]);if((state_val_19284 === 7))
{var inst_19279 = (state_19283[2]);var state_19283__$1 = state_19283;var statearr_19285_19301 = state_19283__$1;(statearr_19285_19301[2] = inst_19279);
(statearr_19285_19301[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19284 === 6))
{var inst_19269 = (state_19283[7]);var inst_19272 = (state_19283[8]);var inst_19276 = f.call(null,inst_19269,inst_19272);var inst_19269__$1 = inst_19276;var state_19283__$1 = (function (){var statearr_19286 = state_19283;(statearr_19286[7] = inst_19269__$1);
return statearr_19286;
})();var statearr_19287_19302 = state_19283__$1;(statearr_19287_19302[2] = null);
(statearr_19287_19302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19284 === 5))
{var inst_19269 = (state_19283[7]);var state_19283__$1 = state_19283;var statearr_19288_19303 = state_19283__$1;(statearr_19288_19303[2] = inst_19269);
(statearr_19288_19303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19284 === 4))
{var inst_19272 = (state_19283[8]);var inst_19272__$1 = (state_19283[2]);var inst_19273 = (inst_19272__$1 == null);var state_19283__$1 = (function (){var statearr_19289 = state_19283;(statearr_19289[8] = inst_19272__$1);
return statearr_19289;
})();if(cljs.core.truth_(inst_19273))
{var statearr_19290_19304 = state_19283__$1;(statearr_19290_19304[1] = 5);
} else
{var statearr_19291_19305 = state_19283__$1;(statearr_19291_19305[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19284 === 3))
{var inst_19281 = (state_19283[2]);var state_19283__$1 = state_19283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19283__$1,inst_19281);
} else
{if((state_val_19284 === 2))
{var state_19283__$1 = state_19283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19283__$1,4,ch);
} else
{if((state_val_19284 === 1))
{var inst_19269 = init;var state_19283__$1 = (function (){var statearr_19292 = state_19283;(statearr_19292[7] = inst_19269);
return statearr_19292;
})();var statearr_19293_19306 = state_19283__$1;(statearr_19293_19306[2] = null);
(statearr_19293_19306[1] = 2);
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
var state_machine__9717__auto____0 = (function (){var statearr_19297 = [null,null,null,null,null,null,null,null,null];(statearr_19297[0] = state_machine__9717__auto__);
(statearr_19297[1] = 1);
return statearr_19297;
});
var state_machine__9717__auto____1 = (function (state_19283){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_19283);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e19298){if((e19298 instanceof Object))
{var ex__9720__auto__ = e19298;var statearr_19299_19307 = state_19283;(statearr_19299_19307[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19283);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19308 = state_19283;
state_19283 = G__19308;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_19283){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_19283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__))
})();var state__9733__auto__ = (function (){var statearr_19300 = f__9732__auto__.call(null);(statearr_19300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_19300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__))
);
return c__9731__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__9731__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto__){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto__){
return (function (state_19382){var state_val_19383 = (state_19382[1]);if((state_val_19383 === 7))
{var inst_19364 = (state_19382[2]);var state_19382__$1 = state_19382;var statearr_19384_19407 = state_19382__$1;(statearr_19384_19407[2] = inst_19364);
(statearr_19384_19407[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19383 === 1))
{var inst_19358 = cljs.core.seq.call(null,coll);var inst_19359 = inst_19358;var state_19382__$1 = (function (){var statearr_19385 = state_19382;(statearr_19385[7] = inst_19359);
return statearr_19385;
})();var statearr_19386_19408 = state_19382__$1;(statearr_19386_19408[2] = null);
(statearr_19386_19408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19383 === 4))
{var inst_19359 = (state_19382[7]);var inst_19362 = cljs.core.first.call(null,inst_19359);var state_19382__$1 = state_19382;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19382__$1,7,ch,inst_19362);
} else
{if((state_val_19383 === 13))
{var inst_19376 = (state_19382[2]);var state_19382__$1 = state_19382;var statearr_19387_19409 = state_19382__$1;(statearr_19387_19409[2] = inst_19376);
(statearr_19387_19409[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19383 === 6))
{var inst_19367 = (state_19382[2]);var state_19382__$1 = state_19382;if(cljs.core.truth_(inst_19367))
{var statearr_19388_19410 = state_19382__$1;(statearr_19388_19410[1] = 8);
} else
{var statearr_19389_19411 = state_19382__$1;(statearr_19389_19411[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19383 === 3))
{var inst_19380 = (state_19382[2]);var state_19382__$1 = state_19382;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19382__$1,inst_19380);
} else
{if((state_val_19383 === 12))
{var state_19382__$1 = state_19382;var statearr_19390_19412 = state_19382__$1;(statearr_19390_19412[2] = null);
(statearr_19390_19412[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19383 === 2))
{var inst_19359 = (state_19382[7]);var state_19382__$1 = state_19382;if(cljs.core.truth_(inst_19359))
{var statearr_19391_19413 = state_19382__$1;(statearr_19391_19413[1] = 4);
} else
{var statearr_19392_19414 = state_19382__$1;(statearr_19392_19414[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19383 === 11))
{var inst_19373 = cljs.core.async.close_BANG_.call(null,ch);var state_19382__$1 = state_19382;var statearr_19393_19415 = state_19382__$1;(statearr_19393_19415[2] = inst_19373);
(statearr_19393_19415[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19383 === 9))
{var state_19382__$1 = state_19382;if(cljs.core.truth_(close_QMARK_))
{var statearr_19394_19416 = state_19382__$1;(statearr_19394_19416[1] = 11);
} else
{var statearr_19395_19417 = state_19382__$1;(statearr_19395_19417[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19383 === 5))
{var inst_19359 = (state_19382[7]);var state_19382__$1 = state_19382;var statearr_19396_19418 = state_19382__$1;(statearr_19396_19418[2] = inst_19359);
(statearr_19396_19418[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19383 === 10))
{var inst_19378 = (state_19382[2]);var state_19382__$1 = state_19382;var statearr_19397_19419 = state_19382__$1;(statearr_19397_19419[2] = inst_19378);
(statearr_19397_19419[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19383 === 8))
{var inst_19359 = (state_19382[7]);var inst_19369 = cljs.core.next.call(null,inst_19359);var inst_19359__$1 = inst_19369;var state_19382__$1 = (function (){var statearr_19398 = state_19382;(statearr_19398[7] = inst_19359__$1);
return statearr_19398;
})();var statearr_19399_19420 = state_19382__$1;(statearr_19399_19420[2] = null);
(statearr_19399_19420[1] = 2);
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
});})(c__9731__auto__))
;return ((function (switch__9716__auto__,c__9731__auto__){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_19403 = [null,null,null,null,null,null,null,null];(statearr_19403[0] = state_machine__9717__auto__);
(statearr_19403[1] = 1);
return statearr_19403;
});
var state_machine__9717__auto____1 = (function (state_19382){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_19382);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e19404){if((e19404 instanceof Object))
{var ex__9720__auto__ = e19404;var statearr_19405_19421 = state_19382;(statearr_19405_19421[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19382);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19422 = state_19382;
state_19382 = G__19422;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_19382){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_19382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto__))
})();var state__9733__auto__ = (function (){var statearr_19406 = f__9732__auto__.call(null);(statearr_19406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto__);
return statearr_19406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto__))
);
return c__9731__auto__;
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
cljs.core.async.Mux = (function (){var obj19424 = {};return obj19424;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7868__auto__ = _;if(and__7868__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7868__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8507__auto__ = (((_ == null))?null:_);return (function (){var or__7880__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19426 = {};return obj19426;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19648 = (function (cs,ch,mult,meta19649){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19649 = meta19649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19648.cljs$lang$type = true;
cljs.core.async.t19648.cljs$lang$ctorStr = "cljs.core.async/t19648";
cljs.core.async.t19648.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t19648");
});})(cs))
;
cljs.core.async.t19648.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19648.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19648.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19648.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19648.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19650){var self__ = this;
var _19650__$1 = this;return self__.meta19649;
});})(cs))
;
cljs.core.async.t19648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19650,meta19649__$1){var self__ = this;
var _19650__$1 = this;return (new cljs.core.async.t19648(self__.cs,self__.ch,self__.mult,meta19649__$1));
});})(cs))
;
cljs.core.async.__GT_t19648 = ((function (cs){
return (function __GT_t19648(cs__$1,ch__$1,mult__$1,meta19649){return (new cljs.core.async.t19648(cs__$1,ch__$1,mult__$1,meta19649));
});})(cs))
;
}
return (new cljs.core.async.t19648(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9731__auto___19869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___19869,cs,m,dchan,dctr,done){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___19869,cs,m,dchan,dctr,done){
return (function (state_19781){var state_val_19782 = (state_19781[1]);if((state_val_19782 === 7))
{var inst_19777 = (state_19781[2]);var state_19781__$1 = state_19781;var statearr_19783_19870 = state_19781__$1;(statearr_19783_19870[2] = inst_19777);
(statearr_19783_19870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 20))
{var inst_19682 = (state_19781[7]);var inst_19692 = cljs.core.first.call(null,inst_19682);var inst_19693 = cljs.core.nth.call(null,inst_19692,0,null);var inst_19694 = cljs.core.nth.call(null,inst_19692,1,null);var state_19781__$1 = (function (){var statearr_19784 = state_19781;(statearr_19784[8] = inst_19693);
return statearr_19784;
})();if(cljs.core.truth_(inst_19694))
{var statearr_19785_19871 = state_19781__$1;(statearr_19785_19871[1] = 22);
} else
{var statearr_19786_19872 = state_19781__$1;(statearr_19786_19872[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 27))
{var inst_19653 = (state_19781[9]);var inst_19722 = (state_19781[10]);var inst_19729 = (state_19781[11]);var inst_19724 = (state_19781[12]);var inst_19729__$1 = cljs.core._nth.call(null,inst_19722,inst_19724);var inst_19730 = cljs.core.async.put_BANG_.call(null,inst_19729__$1,inst_19653,done);var state_19781__$1 = (function (){var statearr_19787 = state_19781;(statearr_19787[11] = inst_19729__$1);
return statearr_19787;
})();if(cljs.core.truth_(inst_19730))
{var statearr_19788_19873 = state_19781__$1;(statearr_19788_19873[1] = 30);
} else
{var statearr_19789_19874 = state_19781__$1;(statearr_19789_19874[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 1))
{var state_19781__$1 = state_19781;var statearr_19790_19875 = state_19781__$1;(statearr_19790_19875[2] = null);
(statearr_19790_19875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 24))
{var inst_19682 = (state_19781[7]);var inst_19699 = (state_19781[2]);var inst_19700 = cljs.core.next.call(null,inst_19682);var inst_19662 = inst_19700;var inst_19663 = null;var inst_19664 = 0;var inst_19665 = 0;var state_19781__$1 = (function (){var statearr_19791 = state_19781;(statearr_19791[13] = inst_19663);
(statearr_19791[14] = inst_19662);
(statearr_19791[15] = inst_19665);
(statearr_19791[16] = inst_19699);
(statearr_19791[17] = inst_19664);
return statearr_19791;
})();var statearr_19792_19876 = state_19781__$1;(statearr_19792_19876[2] = null);
(statearr_19792_19876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 39))
{var state_19781__$1 = state_19781;var statearr_19796_19877 = state_19781__$1;(statearr_19796_19877[2] = null);
(statearr_19796_19877[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 4))
{var inst_19653 = (state_19781[9]);var inst_19653__$1 = (state_19781[2]);var inst_19654 = (inst_19653__$1 == null);var state_19781__$1 = (function (){var statearr_19797 = state_19781;(statearr_19797[9] = inst_19653__$1);
return statearr_19797;
})();if(cljs.core.truth_(inst_19654))
{var statearr_19798_19878 = state_19781__$1;(statearr_19798_19878[1] = 5);
} else
{var statearr_19799_19879 = state_19781__$1;(statearr_19799_19879[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 15))
{var inst_19663 = (state_19781[13]);var inst_19662 = (state_19781[14]);var inst_19665 = (state_19781[15]);var inst_19664 = (state_19781[17]);var inst_19678 = (state_19781[2]);var inst_19679 = (inst_19665 + 1);var tmp19793 = inst_19663;var tmp19794 = inst_19662;var tmp19795 = inst_19664;var inst_19662__$1 = tmp19794;var inst_19663__$1 = tmp19793;var inst_19664__$1 = tmp19795;var inst_19665__$1 = inst_19679;var state_19781__$1 = (function (){var statearr_19800 = state_19781;(statearr_19800[13] = inst_19663__$1);
(statearr_19800[14] = inst_19662__$1);
(statearr_19800[18] = inst_19678);
(statearr_19800[15] = inst_19665__$1);
(statearr_19800[17] = inst_19664__$1);
return statearr_19800;
})();var statearr_19801_19880 = state_19781__$1;(statearr_19801_19880[2] = null);
(statearr_19801_19880[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 21))
{var inst_19703 = (state_19781[2]);var state_19781__$1 = state_19781;var statearr_19805_19881 = state_19781__$1;(statearr_19805_19881[2] = inst_19703);
(statearr_19805_19881[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 31))
{var inst_19729 = (state_19781[11]);var inst_19733 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19734 = cljs.core.async.untap_STAR_.call(null,m,inst_19729);var state_19781__$1 = (function (){var statearr_19806 = state_19781;(statearr_19806[19] = inst_19733);
return statearr_19806;
})();var statearr_19807_19882 = state_19781__$1;(statearr_19807_19882[2] = inst_19734);
(statearr_19807_19882[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 32))
{var inst_19722 = (state_19781[10]);var inst_19721 = (state_19781[20]);var inst_19723 = (state_19781[21]);var inst_19724 = (state_19781[12]);var inst_19736 = (state_19781[2]);var inst_19737 = (inst_19724 + 1);var tmp19802 = inst_19722;var tmp19803 = inst_19721;var tmp19804 = inst_19723;var inst_19721__$1 = tmp19803;var inst_19722__$1 = tmp19802;var inst_19723__$1 = tmp19804;var inst_19724__$1 = inst_19737;var state_19781__$1 = (function (){var statearr_19808 = state_19781;(statearr_19808[10] = inst_19722__$1);
(statearr_19808[20] = inst_19721__$1);
(statearr_19808[22] = inst_19736);
(statearr_19808[21] = inst_19723__$1);
(statearr_19808[12] = inst_19724__$1);
return statearr_19808;
})();var statearr_19809_19883 = state_19781__$1;(statearr_19809_19883[2] = null);
(statearr_19809_19883[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 40))
{var inst_19749 = (state_19781[23]);var inst_19753 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19754 = cljs.core.async.untap_STAR_.call(null,m,inst_19749);var state_19781__$1 = (function (){var statearr_19810 = state_19781;(statearr_19810[24] = inst_19753);
return statearr_19810;
})();var statearr_19811_19884 = state_19781__$1;(statearr_19811_19884[2] = inst_19754);
(statearr_19811_19884[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 33))
{var inst_19740 = (state_19781[25]);var inst_19742 = cljs.core.chunked_seq_QMARK_.call(null,inst_19740);var state_19781__$1 = state_19781;if(inst_19742)
{var statearr_19812_19885 = state_19781__$1;(statearr_19812_19885[1] = 36);
} else
{var statearr_19813_19886 = state_19781__$1;(statearr_19813_19886[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 13))
{var inst_19672 = (state_19781[26]);var inst_19675 = cljs.core.async.close_BANG_.call(null,inst_19672);var state_19781__$1 = state_19781;var statearr_19814_19887 = state_19781__$1;(statearr_19814_19887[2] = inst_19675);
(statearr_19814_19887[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 22))
{var inst_19693 = (state_19781[8]);var inst_19696 = cljs.core.async.close_BANG_.call(null,inst_19693);var state_19781__$1 = state_19781;var statearr_19815_19888 = state_19781__$1;(statearr_19815_19888[2] = inst_19696);
(statearr_19815_19888[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 36))
{var inst_19740 = (state_19781[25]);var inst_19744 = cljs.core.chunk_first.call(null,inst_19740);var inst_19745 = cljs.core.chunk_rest.call(null,inst_19740);var inst_19746 = cljs.core.count.call(null,inst_19744);var inst_19721 = inst_19745;var inst_19722 = inst_19744;var inst_19723 = inst_19746;var inst_19724 = 0;var state_19781__$1 = (function (){var statearr_19816 = state_19781;(statearr_19816[10] = inst_19722);
(statearr_19816[20] = inst_19721);
(statearr_19816[21] = inst_19723);
(statearr_19816[12] = inst_19724);
return statearr_19816;
})();var statearr_19817_19889 = state_19781__$1;(statearr_19817_19889[2] = null);
(statearr_19817_19889[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 41))
{var inst_19740 = (state_19781[25]);var inst_19756 = (state_19781[2]);var inst_19757 = cljs.core.next.call(null,inst_19740);var inst_19721 = inst_19757;var inst_19722 = null;var inst_19723 = 0;var inst_19724 = 0;var state_19781__$1 = (function (){var statearr_19818 = state_19781;(statearr_19818[10] = inst_19722);
(statearr_19818[20] = inst_19721);
(statearr_19818[27] = inst_19756);
(statearr_19818[21] = inst_19723);
(statearr_19818[12] = inst_19724);
return statearr_19818;
})();var statearr_19819_19890 = state_19781__$1;(statearr_19819_19890[2] = null);
(statearr_19819_19890[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 43))
{var state_19781__$1 = state_19781;var statearr_19820_19891 = state_19781__$1;(statearr_19820_19891[2] = null);
(statearr_19820_19891[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 29))
{var inst_19765 = (state_19781[2]);var state_19781__$1 = state_19781;var statearr_19821_19892 = state_19781__$1;(statearr_19821_19892[2] = inst_19765);
(statearr_19821_19892[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 44))
{var inst_19774 = (state_19781[2]);var state_19781__$1 = (function (){var statearr_19822 = state_19781;(statearr_19822[28] = inst_19774);
return statearr_19822;
})();var statearr_19823_19893 = state_19781__$1;(statearr_19823_19893[2] = null);
(statearr_19823_19893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 6))
{var inst_19713 = (state_19781[29]);var inst_19712 = cljs.core.deref.call(null,cs);var inst_19713__$1 = cljs.core.keys.call(null,inst_19712);var inst_19714 = cljs.core.count.call(null,inst_19713__$1);var inst_19715 = cljs.core.reset_BANG_.call(null,dctr,inst_19714);var inst_19720 = cljs.core.seq.call(null,inst_19713__$1);var inst_19721 = inst_19720;var inst_19722 = null;var inst_19723 = 0;var inst_19724 = 0;var state_19781__$1 = (function (){var statearr_19824 = state_19781;(statearr_19824[29] = inst_19713__$1);
(statearr_19824[30] = inst_19715);
(statearr_19824[10] = inst_19722);
(statearr_19824[20] = inst_19721);
(statearr_19824[21] = inst_19723);
(statearr_19824[12] = inst_19724);
return statearr_19824;
})();var statearr_19825_19894 = state_19781__$1;(statearr_19825_19894[2] = null);
(statearr_19825_19894[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 28))
{var inst_19740 = (state_19781[25]);var inst_19721 = (state_19781[20]);var inst_19740__$1 = cljs.core.seq.call(null,inst_19721);var state_19781__$1 = (function (){var statearr_19826 = state_19781;(statearr_19826[25] = inst_19740__$1);
return statearr_19826;
})();if(inst_19740__$1)
{var statearr_19827_19895 = state_19781__$1;(statearr_19827_19895[1] = 33);
} else
{var statearr_19828_19896 = state_19781__$1;(statearr_19828_19896[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 25))
{var inst_19723 = (state_19781[21]);var inst_19724 = (state_19781[12]);var inst_19726 = (inst_19724 < inst_19723);var inst_19727 = inst_19726;var state_19781__$1 = state_19781;if(cljs.core.truth_(inst_19727))
{var statearr_19829_19897 = state_19781__$1;(statearr_19829_19897[1] = 27);
} else
{var statearr_19830_19898 = state_19781__$1;(statearr_19830_19898[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 34))
{var state_19781__$1 = state_19781;var statearr_19831_19899 = state_19781__$1;(statearr_19831_19899[2] = null);
(statearr_19831_19899[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 17))
{var state_19781__$1 = state_19781;var statearr_19832_19900 = state_19781__$1;(statearr_19832_19900[2] = null);
(statearr_19832_19900[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 3))
{var inst_19779 = (state_19781[2]);var state_19781__$1 = state_19781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19781__$1,inst_19779);
} else
{if((state_val_19782 === 12))
{var inst_19708 = (state_19781[2]);var state_19781__$1 = state_19781;var statearr_19833_19901 = state_19781__$1;(statearr_19833_19901[2] = inst_19708);
(statearr_19833_19901[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 2))
{var state_19781__$1 = state_19781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19781__$1,4,ch);
} else
{if((state_val_19782 === 23))
{var state_19781__$1 = state_19781;var statearr_19834_19902 = state_19781__$1;(statearr_19834_19902[2] = null);
(statearr_19834_19902[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 35))
{var inst_19763 = (state_19781[2]);var state_19781__$1 = state_19781;var statearr_19835_19903 = state_19781__$1;(statearr_19835_19903[2] = inst_19763);
(statearr_19835_19903[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 19))
{var inst_19682 = (state_19781[7]);var inst_19686 = cljs.core.chunk_first.call(null,inst_19682);var inst_19687 = cljs.core.chunk_rest.call(null,inst_19682);var inst_19688 = cljs.core.count.call(null,inst_19686);var inst_19662 = inst_19687;var inst_19663 = inst_19686;var inst_19664 = inst_19688;var inst_19665 = 0;var state_19781__$1 = (function (){var statearr_19836 = state_19781;(statearr_19836[13] = inst_19663);
(statearr_19836[14] = inst_19662);
(statearr_19836[15] = inst_19665);
(statearr_19836[17] = inst_19664);
return statearr_19836;
})();var statearr_19837_19904 = state_19781__$1;(statearr_19837_19904[2] = null);
(statearr_19837_19904[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 11))
{var inst_19682 = (state_19781[7]);var inst_19662 = (state_19781[14]);var inst_19682__$1 = cljs.core.seq.call(null,inst_19662);var state_19781__$1 = (function (){var statearr_19838 = state_19781;(statearr_19838[7] = inst_19682__$1);
return statearr_19838;
})();if(inst_19682__$1)
{var statearr_19839_19905 = state_19781__$1;(statearr_19839_19905[1] = 16);
} else
{var statearr_19840_19906 = state_19781__$1;(statearr_19840_19906[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 9))
{var inst_19710 = (state_19781[2]);var state_19781__$1 = state_19781;var statearr_19841_19907 = state_19781__$1;(statearr_19841_19907[2] = inst_19710);
(statearr_19841_19907[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 5))
{var inst_19660 = cljs.core.deref.call(null,cs);var inst_19661 = cljs.core.seq.call(null,inst_19660);var inst_19662 = inst_19661;var inst_19663 = null;var inst_19664 = 0;var inst_19665 = 0;var state_19781__$1 = (function (){var statearr_19842 = state_19781;(statearr_19842[13] = inst_19663);
(statearr_19842[14] = inst_19662);
(statearr_19842[15] = inst_19665);
(statearr_19842[17] = inst_19664);
return statearr_19842;
})();var statearr_19843_19908 = state_19781__$1;(statearr_19843_19908[2] = null);
(statearr_19843_19908[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 14))
{var state_19781__$1 = state_19781;var statearr_19844_19909 = state_19781__$1;(statearr_19844_19909[2] = null);
(statearr_19844_19909[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 45))
{var inst_19771 = (state_19781[2]);var state_19781__$1 = state_19781;var statearr_19845_19910 = state_19781__$1;(statearr_19845_19910[2] = inst_19771);
(statearr_19845_19910[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 26))
{var inst_19713 = (state_19781[29]);var inst_19767 = (state_19781[2]);var inst_19768 = cljs.core.seq.call(null,inst_19713);var state_19781__$1 = (function (){var statearr_19846 = state_19781;(statearr_19846[31] = inst_19767);
return statearr_19846;
})();if(inst_19768)
{var statearr_19847_19911 = state_19781__$1;(statearr_19847_19911[1] = 42);
} else
{var statearr_19848_19912 = state_19781__$1;(statearr_19848_19912[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 16))
{var inst_19682 = (state_19781[7]);var inst_19684 = cljs.core.chunked_seq_QMARK_.call(null,inst_19682);var state_19781__$1 = state_19781;if(inst_19684)
{var statearr_19849_19913 = state_19781__$1;(statearr_19849_19913[1] = 19);
} else
{var statearr_19850_19914 = state_19781__$1;(statearr_19850_19914[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 38))
{var inst_19760 = (state_19781[2]);var state_19781__$1 = state_19781;var statearr_19851_19915 = state_19781__$1;(statearr_19851_19915[2] = inst_19760);
(statearr_19851_19915[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 30))
{var state_19781__$1 = state_19781;var statearr_19852_19916 = state_19781__$1;(statearr_19852_19916[2] = null);
(statearr_19852_19916[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 10))
{var inst_19663 = (state_19781[13]);var inst_19665 = (state_19781[15]);var inst_19671 = cljs.core._nth.call(null,inst_19663,inst_19665);var inst_19672 = cljs.core.nth.call(null,inst_19671,0,null);var inst_19673 = cljs.core.nth.call(null,inst_19671,1,null);var state_19781__$1 = (function (){var statearr_19853 = state_19781;(statearr_19853[26] = inst_19672);
return statearr_19853;
})();if(cljs.core.truth_(inst_19673))
{var statearr_19854_19917 = state_19781__$1;(statearr_19854_19917[1] = 13);
} else
{var statearr_19855_19918 = state_19781__$1;(statearr_19855_19918[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 18))
{var inst_19706 = (state_19781[2]);var state_19781__$1 = state_19781;var statearr_19856_19919 = state_19781__$1;(statearr_19856_19919[2] = inst_19706);
(statearr_19856_19919[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 42))
{var state_19781__$1 = state_19781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19781__$1,45,dchan);
} else
{if((state_val_19782 === 37))
{var inst_19653 = (state_19781[9]);var inst_19749 = (state_19781[23]);var inst_19740 = (state_19781[25]);var inst_19749__$1 = cljs.core.first.call(null,inst_19740);var inst_19750 = cljs.core.async.put_BANG_.call(null,inst_19749__$1,inst_19653,done);var state_19781__$1 = (function (){var statearr_19857 = state_19781;(statearr_19857[23] = inst_19749__$1);
return statearr_19857;
})();if(cljs.core.truth_(inst_19750))
{var statearr_19858_19920 = state_19781__$1;(statearr_19858_19920[1] = 39);
} else
{var statearr_19859_19921 = state_19781__$1;(statearr_19859_19921[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19782 === 8))
{var inst_19665 = (state_19781[15]);var inst_19664 = (state_19781[17]);var inst_19667 = (inst_19665 < inst_19664);var inst_19668 = inst_19667;var state_19781__$1 = state_19781;if(cljs.core.truth_(inst_19668))
{var statearr_19860_19922 = state_19781__$1;(statearr_19860_19922[1] = 10);
} else
{var statearr_19861_19923 = state_19781__$1;(statearr_19861_19923[1] = 11);
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
});})(c__9731__auto___19869,cs,m,dchan,dctr,done))
;return ((function (switch__9716__auto__,c__9731__auto___19869,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_19865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19865[0] = state_machine__9717__auto__);
(statearr_19865[1] = 1);
return statearr_19865;
});
var state_machine__9717__auto____1 = (function (state_19781){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_19781);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e19866){if((e19866 instanceof Object))
{var ex__9720__auto__ = e19866;var statearr_19867_19924 = state_19781;(statearr_19867_19924[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19781);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19925 = state_19781;
state_19781 = G__19925;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_19781){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_19781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___19869,cs,m,dchan,dctr,done))
})();var state__9733__auto__ = (function (){var statearr_19868 = f__9732__auto__.call(null);(statearr_19868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___19869);
return statearr_19868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___19869,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj19927 = {};return obj19927;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7868__auto__ = m;if(and__7868__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8507__auto__ = (((m == null))?null:m);return (function (){var or__7880__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t20047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20047 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20048){
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
this.meta20048 = meta20048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20047.cljs$lang$type = true;
cljs.core.async.t20047.cljs$lang$ctorStr = "cljs.core.async/t20047";
cljs.core.async.t20047.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t20047");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20047.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20047.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20047.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20047.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20047.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20047.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20047.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20047.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20049){var self__ = this;
var _20049__$1 = this;return self__.meta20048;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20049,meta20048__$1){var self__ = this;
var _20049__$1 = this;return (new cljs.core.async.t20047(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20048__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20047 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20047(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20048){return (new cljs.core.async.t20047(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20048));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20047(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9731__auto___20166 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___20166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___20166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20119){var state_val_20120 = (state_20119[1]);if((state_val_20120 === 7))
{var inst_20063 = (state_20119[7]);var inst_20068 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20063);var state_20119__$1 = state_20119;var statearr_20121_20167 = state_20119__$1;(statearr_20121_20167[2] = inst_20068);
(statearr_20121_20167[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 20))
{var inst_20078 = (state_20119[8]);var state_20119__$1 = state_20119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20119__$1,23,out,inst_20078);
} else
{if((state_val_20120 === 1))
{var inst_20053 = (state_20119[9]);var inst_20053__$1 = calc_state.call(null);var inst_20054 = cljs.core.seq_QMARK_.call(null,inst_20053__$1);var state_20119__$1 = (function (){var statearr_20122 = state_20119;(statearr_20122[9] = inst_20053__$1);
return statearr_20122;
})();if(inst_20054)
{var statearr_20123_20168 = state_20119__$1;(statearr_20123_20168[1] = 2);
} else
{var statearr_20124_20169 = state_20119__$1;(statearr_20124_20169[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 24))
{var inst_20071 = (state_20119[10]);var inst_20063 = inst_20071;var state_20119__$1 = (function (){var statearr_20125 = state_20119;(statearr_20125[7] = inst_20063);
return statearr_20125;
})();var statearr_20126_20170 = state_20119__$1;(statearr_20126_20170[2] = null);
(statearr_20126_20170[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 4))
{var inst_20053 = (state_20119[9]);var inst_20059 = (state_20119[2]);var inst_20060 = cljs.core.get.call(null,inst_20059,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_20061 = cljs.core.get.call(null,inst_20059,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_20062 = cljs.core.get.call(null,inst_20059,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_20063 = inst_20053;var state_20119__$1 = (function (){var statearr_20127 = state_20119;(statearr_20127[7] = inst_20063);
(statearr_20127[11] = inst_20060);
(statearr_20127[12] = inst_20062);
(statearr_20127[13] = inst_20061);
return statearr_20127;
})();var statearr_20128_20171 = state_20119__$1;(statearr_20128_20171[2] = null);
(statearr_20128_20171[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 15))
{var state_20119__$1 = state_20119;var statearr_20129_20172 = state_20119__$1;(statearr_20129_20172[2] = null);
(statearr_20129_20172[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 21))
{var inst_20071 = (state_20119[10]);var inst_20063 = inst_20071;var state_20119__$1 = (function (){var statearr_20130 = state_20119;(statearr_20130[7] = inst_20063);
return statearr_20130;
})();var statearr_20131_20173 = state_20119__$1;(statearr_20131_20173[2] = null);
(statearr_20131_20173[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 13))
{var inst_20115 = (state_20119[2]);var state_20119__$1 = state_20119;var statearr_20132_20174 = state_20119__$1;(statearr_20132_20174[2] = inst_20115);
(statearr_20132_20174[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 22))
{var inst_20113 = (state_20119[2]);var state_20119__$1 = state_20119;var statearr_20133_20175 = state_20119__$1;(statearr_20133_20175[2] = inst_20113);
(statearr_20133_20175[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 6))
{var inst_20117 = (state_20119[2]);var state_20119__$1 = state_20119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20119__$1,inst_20117);
} else
{if((state_val_20120 === 25))
{var state_20119__$1 = state_20119;var statearr_20134_20176 = state_20119__$1;(statearr_20134_20176[2] = null);
(statearr_20134_20176[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 17))
{var inst_20093 = (state_20119[14]);var state_20119__$1 = state_20119;var statearr_20135_20177 = state_20119__$1;(statearr_20135_20177[2] = inst_20093);
(statearr_20135_20177[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 3))
{var inst_20053 = (state_20119[9]);var state_20119__$1 = state_20119;var statearr_20136_20178 = state_20119__$1;(statearr_20136_20178[2] = inst_20053);
(statearr_20136_20178[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 12))
{var inst_20093 = (state_20119[14]);var inst_20079 = (state_20119[15]);var inst_20074 = (state_20119[16]);var inst_20093__$1 = inst_20074.call(null,inst_20079);var state_20119__$1 = (function (){var statearr_20137 = state_20119;(statearr_20137[14] = inst_20093__$1);
return statearr_20137;
})();if(cljs.core.truth_(inst_20093__$1))
{var statearr_20138_20179 = state_20119__$1;(statearr_20138_20179[1] = 17);
} else
{var statearr_20139_20180 = state_20119__$1;(statearr_20139_20180[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 2))
{var inst_20053 = (state_20119[9]);var inst_20056 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20053);var state_20119__$1 = state_20119;var statearr_20140_20181 = state_20119__$1;(statearr_20140_20181[2] = inst_20056);
(statearr_20140_20181[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 23))
{var inst_20104 = (state_20119[2]);var state_20119__$1 = state_20119;if(cljs.core.truth_(inst_20104))
{var statearr_20141_20182 = state_20119__$1;(statearr_20141_20182[1] = 24);
} else
{var statearr_20142_20183 = state_20119__$1;(statearr_20142_20183[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 19))
{var inst_20101 = (state_20119[2]);var state_20119__$1 = state_20119;if(cljs.core.truth_(inst_20101))
{var statearr_20143_20184 = state_20119__$1;(statearr_20143_20184[1] = 20);
} else
{var statearr_20144_20185 = state_20119__$1;(statearr_20144_20185[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 11))
{var inst_20078 = (state_20119[8]);var inst_20084 = (inst_20078 == null);var state_20119__$1 = state_20119;if(cljs.core.truth_(inst_20084))
{var statearr_20145_20186 = state_20119__$1;(statearr_20145_20186[1] = 14);
} else
{var statearr_20146_20187 = state_20119__$1;(statearr_20146_20187[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 9))
{var inst_20071 = (state_20119[10]);var inst_20071__$1 = (state_20119[2]);var inst_20072 = cljs.core.get.call(null,inst_20071__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_20073 = cljs.core.get.call(null,inst_20071__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_20074 = cljs.core.get.call(null,inst_20071__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_20119__$1 = (function (){var statearr_20147 = state_20119;(statearr_20147[17] = inst_20073);
(statearr_20147[10] = inst_20071__$1);
(statearr_20147[16] = inst_20074);
return statearr_20147;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20119__$1,10,inst_20072);
} else
{if((state_val_20120 === 5))
{var inst_20063 = (state_20119[7]);var inst_20066 = cljs.core.seq_QMARK_.call(null,inst_20063);var state_20119__$1 = state_20119;if(inst_20066)
{var statearr_20148_20188 = state_20119__$1;(statearr_20148_20188[1] = 7);
} else
{var statearr_20149_20189 = state_20119__$1;(statearr_20149_20189[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 14))
{var inst_20079 = (state_20119[15]);var inst_20086 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20079);var state_20119__$1 = state_20119;var statearr_20150_20190 = state_20119__$1;(statearr_20150_20190[2] = inst_20086);
(statearr_20150_20190[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 26))
{var inst_20109 = (state_20119[2]);var state_20119__$1 = state_20119;var statearr_20151_20191 = state_20119__$1;(statearr_20151_20191[2] = inst_20109);
(statearr_20151_20191[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 16))
{var inst_20089 = (state_20119[2]);var inst_20090 = calc_state.call(null);var inst_20063 = inst_20090;var state_20119__$1 = (function (){var statearr_20152 = state_20119;(statearr_20152[18] = inst_20089);
(statearr_20152[7] = inst_20063);
return statearr_20152;
})();var statearr_20153_20192 = state_20119__$1;(statearr_20153_20192[2] = null);
(statearr_20153_20192[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 10))
{var inst_20079 = (state_20119[15]);var inst_20078 = (state_20119[8]);var inst_20077 = (state_20119[2]);var inst_20078__$1 = cljs.core.nth.call(null,inst_20077,0,null);var inst_20079__$1 = cljs.core.nth.call(null,inst_20077,1,null);var inst_20080 = (inst_20078__$1 == null);var inst_20081 = cljs.core._EQ_.call(null,inst_20079__$1,change);var inst_20082 = (inst_20080) || (inst_20081);var state_20119__$1 = (function (){var statearr_20154 = state_20119;(statearr_20154[15] = inst_20079__$1);
(statearr_20154[8] = inst_20078__$1);
return statearr_20154;
})();if(cljs.core.truth_(inst_20082))
{var statearr_20155_20193 = state_20119__$1;(statearr_20155_20193[1] = 11);
} else
{var statearr_20156_20194 = state_20119__$1;(statearr_20156_20194[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 18))
{var inst_20073 = (state_20119[17]);var inst_20079 = (state_20119[15]);var inst_20074 = (state_20119[16]);var inst_20096 = cljs.core.empty_QMARK_.call(null,inst_20074);var inst_20097 = inst_20073.call(null,inst_20079);var inst_20098 = cljs.core.not.call(null,inst_20097);var inst_20099 = (inst_20096) && (inst_20098);var state_20119__$1 = state_20119;var statearr_20157_20195 = state_20119__$1;(statearr_20157_20195[2] = inst_20099);
(statearr_20157_20195[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20120 === 8))
{var inst_20063 = (state_20119[7]);var state_20119__$1 = state_20119;var statearr_20158_20196 = state_20119__$1;(statearr_20158_20196[2] = inst_20063);
(statearr_20158_20196[1] = 9);
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
});})(c__9731__auto___20166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9716__auto__,c__9731__auto___20166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_20162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20162[0] = state_machine__9717__auto__);
(statearr_20162[1] = 1);
return statearr_20162;
});
var state_machine__9717__auto____1 = (function (state_20119){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_20119);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e20163){if((e20163 instanceof Object))
{var ex__9720__auto__ = e20163;var statearr_20164_20197 = state_20119;(statearr_20164_20197[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20198 = state_20119;
state_20119 = G__20198;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_20119){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_20119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___20166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9733__auto__ = (function (){var statearr_20165 = f__9732__auto__.call(null);(statearr_20165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___20166);
return statearr_20165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___20166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj20200 = {};return obj20200;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7868__auto__ = p;if(and__7868__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7868__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8507__auto__ = (((p == null))?null:p);return (function (){var or__7880__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7868__auto__ = p;if(and__7868__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7868__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8507__auto__ = (((p == null))?null:p);return (function (){var or__7880__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7868__auto__ = p;if(and__7868__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7868__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8507__auto__ = (((p == null))?null:p);return (function (){var or__7880__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7868__auto__ = p;if(and__7868__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7868__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8507__auto__ = (((p == null))?null:p);return (function (){var or__7880__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8507__auto__)]);if(or__7880__auto__)
{return or__7880__auto__;
} else
{var or__7880__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7880__auto____$1)
{return or__7880__auto____$1;
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
return (function (topic){var or__7880__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7880__auto__))
{return or__7880__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7880__auto__,mults){
return (function (p1__20201_SHARP_){if(cljs.core.truth_(p1__20201_SHARP_.call(null,topic)))
{return p1__20201_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20201_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7880__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20316 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20316 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20317){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20317 = meta20317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20316.cljs$lang$type = true;
cljs.core.async.t20316.cljs$lang$ctorStr = "cljs.core.async/t20316";
cljs.core.async.t20316.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8447__auto__,writer__8448__auto__,opt__8449__auto__){return cljs.core._write.call(null,writer__8448__auto__,"cljs.core.async/t20316");
});})(mults,ensure_mult))
;
cljs.core.async.t20316.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20316.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20316.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20316.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20318){var self__ = this;
var _20318__$1 = this;return self__.meta20317;
});})(mults,ensure_mult))
;
cljs.core.async.t20316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20318,meta20317__$1){var self__ = this;
var _20318__$1 = this;return (new cljs.core.async.t20316(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20317__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20316 = ((function (mults,ensure_mult){
return (function __GT_t20316(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20317){return (new cljs.core.async.t20316(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20317));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20316(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9731__auto___20430 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___20430,mults,ensure_mult,p){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___20430,mults,ensure_mult,p){
return (function (state_20386){var state_val_20387 = (state_20386[1]);if((state_val_20387 === 7))
{var inst_20382 = (state_20386[2]);var state_20386__$1 = state_20386;var statearr_20388_20431 = state_20386__$1;(statearr_20388_20431[2] = inst_20382);
(statearr_20388_20431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 20))
{var state_20386__$1 = state_20386;var statearr_20389_20432 = state_20386__$1;(statearr_20389_20432[2] = null);
(statearr_20389_20432[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 1))
{var state_20386__$1 = state_20386;var statearr_20390_20433 = state_20386__$1;(statearr_20390_20433[2] = null);
(statearr_20390_20433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 4))
{var inst_20321 = (state_20386[7]);var inst_20321__$1 = (state_20386[2]);var inst_20322 = (inst_20321__$1 == null);var state_20386__$1 = (function (){var statearr_20391 = state_20386;(statearr_20391[7] = inst_20321__$1);
return statearr_20391;
})();if(cljs.core.truth_(inst_20322))
{var statearr_20392_20434 = state_20386__$1;(statearr_20392_20434[1] = 5);
} else
{var statearr_20393_20435 = state_20386__$1;(statearr_20393_20435[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 15))
{var inst_20363 = (state_20386[2]);var state_20386__$1 = state_20386;var statearr_20394_20436 = state_20386__$1;(statearr_20394_20436[2] = inst_20363);
(statearr_20394_20436[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 21))
{var inst_20369 = (state_20386[8]);var inst_20377 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20369);var state_20386__$1 = state_20386;var statearr_20395_20437 = state_20386__$1;(statearr_20395_20437[2] = inst_20377);
(statearr_20395_20437[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 13))
{var inst_20345 = (state_20386[9]);var inst_20347 = cljs.core.chunked_seq_QMARK_.call(null,inst_20345);var state_20386__$1 = state_20386;if(inst_20347)
{var statearr_20396_20438 = state_20386__$1;(statearr_20396_20438[1] = 16);
} else
{var statearr_20397_20439 = state_20386__$1;(statearr_20397_20439[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 22))
{var inst_20379 = (state_20386[2]);var state_20386__$1 = (function (){var statearr_20398 = state_20386;(statearr_20398[10] = inst_20379);
return statearr_20398;
})();var statearr_20399_20440 = state_20386__$1;(statearr_20399_20440[2] = null);
(statearr_20399_20440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 6))
{var inst_20321 = (state_20386[7]);var inst_20369 = (state_20386[8]);var inst_20369__$1 = topic_fn.call(null,inst_20321);var inst_20370 = cljs.core.deref.call(null,mults);var inst_20371 = cljs.core.get.call(null,inst_20370,inst_20369__$1);var inst_20372 = cljs.core.async.muxch_STAR_.call(null,inst_20371);var state_20386__$1 = (function (){var statearr_20400 = state_20386;(statearr_20400[8] = inst_20369__$1);
return statearr_20400;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20386__$1,19,inst_20372,inst_20321);
} else
{if((state_val_20387 === 17))
{var inst_20345 = (state_20386[9]);var inst_20354 = cljs.core.first.call(null,inst_20345);var inst_20355 = cljs.core.async.muxch_STAR_.call(null,inst_20354);var inst_20356 = cljs.core.async.close_BANG_.call(null,inst_20355);var inst_20357 = cljs.core.next.call(null,inst_20345);var inst_20331 = inst_20357;var inst_20332 = null;var inst_20333 = 0;var inst_20334 = 0;var state_20386__$1 = (function (){var statearr_20401 = state_20386;(statearr_20401[11] = inst_20331);
(statearr_20401[12] = inst_20334);
(statearr_20401[13] = inst_20332);
(statearr_20401[14] = inst_20333);
(statearr_20401[15] = inst_20356);
return statearr_20401;
})();var statearr_20402_20441 = state_20386__$1;(statearr_20402_20441[2] = null);
(statearr_20402_20441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 3))
{var inst_20384 = (state_20386[2]);var state_20386__$1 = state_20386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20386__$1,inst_20384);
} else
{if((state_val_20387 === 12))
{var inst_20365 = (state_20386[2]);var state_20386__$1 = state_20386;var statearr_20403_20442 = state_20386__$1;(statearr_20403_20442[2] = inst_20365);
(statearr_20403_20442[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 2))
{var state_20386__$1 = state_20386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20386__$1,4,ch);
} else
{if((state_val_20387 === 19))
{var inst_20374 = (state_20386[2]);var state_20386__$1 = state_20386;if(cljs.core.truth_(inst_20374))
{var statearr_20404_20443 = state_20386__$1;(statearr_20404_20443[1] = 20);
} else
{var statearr_20405_20444 = state_20386__$1;(statearr_20405_20444[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 11))
{var inst_20331 = (state_20386[11]);var inst_20345 = (state_20386[9]);var inst_20345__$1 = cljs.core.seq.call(null,inst_20331);var state_20386__$1 = (function (){var statearr_20406 = state_20386;(statearr_20406[9] = inst_20345__$1);
return statearr_20406;
})();if(inst_20345__$1)
{var statearr_20407_20445 = state_20386__$1;(statearr_20407_20445[1] = 13);
} else
{var statearr_20408_20446 = state_20386__$1;(statearr_20408_20446[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 9))
{var inst_20367 = (state_20386[2]);var state_20386__$1 = state_20386;var statearr_20409_20447 = state_20386__$1;(statearr_20409_20447[2] = inst_20367);
(statearr_20409_20447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 5))
{var inst_20328 = cljs.core.deref.call(null,mults);var inst_20329 = cljs.core.vals.call(null,inst_20328);var inst_20330 = cljs.core.seq.call(null,inst_20329);var inst_20331 = inst_20330;var inst_20332 = null;var inst_20333 = 0;var inst_20334 = 0;var state_20386__$1 = (function (){var statearr_20410 = state_20386;(statearr_20410[11] = inst_20331);
(statearr_20410[12] = inst_20334);
(statearr_20410[13] = inst_20332);
(statearr_20410[14] = inst_20333);
return statearr_20410;
})();var statearr_20411_20448 = state_20386__$1;(statearr_20411_20448[2] = null);
(statearr_20411_20448[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 14))
{var state_20386__$1 = state_20386;var statearr_20415_20449 = state_20386__$1;(statearr_20415_20449[2] = null);
(statearr_20415_20449[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 16))
{var inst_20345 = (state_20386[9]);var inst_20349 = cljs.core.chunk_first.call(null,inst_20345);var inst_20350 = cljs.core.chunk_rest.call(null,inst_20345);var inst_20351 = cljs.core.count.call(null,inst_20349);var inst_20331 = inst_20350;var inst_20332 = inst_20349;var inst_20333 = inst_20351;var inst_20334 = 0;var state_20386__$1 = (function (){var statearr_20416 = state_20386;(statearr_20416[11] = inst_20331);
(statearr_20416[12] = inst_20334);
(statearr_20416[13] = inst_20332);
(statearr_20416[14] = inst_20333);
return statearr_20416;
})();var statearr_20417_20450 = state_20386__$1;(statearr_20417_20450[2] = null);
(statearr_20417_20450[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 10))
{var inst_20331 = (state_20386[11]);var inst_20334 = (state_20386[12]);var inst_20332 = (state_20386[13]);var inst_20333 = (state_20386[14]);var inst_20339 = cljs.core._nth.call(null,inst_20332,inst_20334);var inst_20340 = cljs.core.async.muxch_STAR_.call(null,inst_20339);var inst_20341 = cljs.core.async.close_BANG_.call(null,inst_20340);var inst_20342 = (inst_20334 + 1);var tmp20412 = inst_20331;var tmp20413 = inst_20332;var tmp20414 = inst_20333;var inst_20331__$1 = tmp20412;var inst_20332__$1 = tmp20413;var inst_20333__$1 = tmp20414;var inst_20334__$1 = inst_20342;var state_20386__$1 = (function (){var statearr_20418 = state_20386;(statearr_20418[11] = inst_20331__$1);
(statearr_20418[16] = inst_20341);
(statearr_20418[12] = inst_20334__$1);
(statearr_20418[13] = inst_20332__$1);
(statearr_20418[14] = inst_20333__$1);
return statearr_20418;
})();var statearr_20419_20451 = state_20386__$1;(statearr_20419_20451[2] = null);
(statearr_20419_20451[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 18))
{var inst_20360 = (state_20386[2]);var state_20386__$1 = state_20386;var statearr_20420_20452 = state_20386__$1;(statearr_20420_20452[2] = inst_20360);
(statearr_20420_20452[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20387 === 8))
{var inst_20334 = (state_20386[12]);var inst_20333 = (state_20386[14]);var inst_20336 = (inst_20334 < inst_20333);var inst_20337 = inst_20336;var state_20386__$1 = state_20386;if(cljs.core.truth_(inst_20337))
{var statearr_20421_20453 = state_20386__$1;(statearr_20421_20453[1] = 10);
} else
{var statearr_20422_20454 = state_20386__$1;(statearr_20422_20454[1] = 11);
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
});})(c__9731__auto___20430,mults,ensure_mult,p))
;return ((function (switch__9716__auto__,c__9731__auto___20430,mults,ensure_mult,p){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_20426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20426[0] = state_machine__9717__auto__);
(statearr_20426[1] = 1);
return statearr_20426;
});
var state_machine__9717__auto____1 = (function (state_20386){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_20386);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e20427){if((e20427 instanceof Object))
{var ex__9720__auto__ = e20427;var statearr_20428_20455 = state_20386;(statearr_20428_20455[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20386);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20456 = state_20386;
state_20386 = G__20456;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_20386){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_20386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___20430,mults,ensure_mult,p))
})();var state__9733__auto__ = (function (){var statearr_20429 = f__9732__auto__.call(null);(statearr_20429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___20430);
return statearr_20429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___20430,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__9731__auto___20593 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___20593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___20593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20563){var state_val_20564 = (state_20563[1]);if((state_val_20564 === 7))
{var state_20563__$1 = state_20563;var statearr_20565_20594 = state_20563__$1;(statearr_20565_20594[2] = null);
(statearr_20565_20594[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 1))
{var state_20563__$1 = state_20563;var statearr_20566_20595 = state_20563__$1;(statearr_20566_20595[2] = null);
(statearr_20566_20595[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 4))
{var inst_20527 = (state_20563[7]);var inst_20529 = (inst_20527 < cnt);var state_20563__$1 = state_20563;if(cljs.core.truth_(inst_20529))
{var statearr_20567_20596 = state_20563__$1;(statearr_20567_20596[1] = 6);
} else
{var statearr_20568_20597 = state_20563__$1;(statearr_20568_20597[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 15))
{var inst_20559 = (state_20563[2]);var state_20563__$1 = state_20563;var statearr_20569_20598 = state_20563__$1;(statearr_20569_20598[2] = inst_20559);
(statearr_20569_20598[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 13))
{var inst_20552 = cljs.core.async.close_BANG_.call(null,out);var state_20563__$1 = state_20563;var statearr_20570_20599 = state_20563__$1;(statearr_20570_20599[2] = inst_20552);
(statearr_20570_20599[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 6))
{var state_20563__$1 = state_20563;var statearr_20571_20600 = state_20563__$1;(statearr_20571_20600[2] = null);
(statearr_20571_20600[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 3))
{var inst_20561 = (state_20563[2]);var state_20563__$1 = state_20563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20563__$1,inst_20561);
} else
{if((state_val_20564 === 12))
{var inst_20549 = (state_20563[8]);var inst_20549__$1 = (state_20563[2]);var inst_20550 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20549__$1);var state_20563__$1 = (function (){var statearr_20572 = state_20563;(statearr_20572[8] = inst_20549__$1);
return statearr_20572;
})();if(cljs.core.truth_(inst_20550))
{var statearr_20573_20601 = state_20563__$1;(statearr_20573_20601[1] = 13);
} else
{var statearr_20574_20602 = state_20563__$1;(statearr_20574_20602[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 2))
{var inst_20526 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20527 = 0;var state_20563__$1 = (function (){var statearr_20575 = state_20563;(statearr_20575[9] = inst_20526);
(statearr_20575[7] = inst_20527);
return statearr_20575;
})();var statearr_20576_20603 = state_20563__$1;(statearr_20576_20603[2] = null);
(statearr_20576_20603[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 11))
{var inst_20527 = (state_20563[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20563,10,Object,null,9);var inst_20536 = chs__$1.call(null,inst_20527);var inst_20537 = done.call(null,inst_20527);var inst_20538 = cljs.core.async.take_BANG_.call(null,inst_20536,inst_20537);var state_20563__$1 = state_20563;var statearr_20577_20604 = state_20563__$1;(statearr_20577_20604[2] = inst_20538);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20563__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 9))
{var inst_20527 = (state_20563[7]);var inst_20540 = (state_20563[2]);var inst_20541 = (inst_20527 + 1);var inst_20527__$1 = inst_20541;var state_20563__$1 = (function (){var statearr_20578 = state_20563;(statearr_20578[10] = inst_20540);
(statearr_20578[7] = inst_20527__$1);
return statearr_20578;
})();var statearr_20579_20605 = state_20563__$1;(statearr_20579_20605[2] = null);
(statearr_20579_20605[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 5))
{var inst_20547 = (state_20563[2]);var state_20563__$1 = (function (){var statearr_20580 = state_20563;(statearr_20580[11] = inst_20547);
return statearr_20580;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20563__$1,12,dchan);
} else
{if((state_val_20564 === 14))
{var inst_20549 = (state_20563[8]);var inst_20554 = cljs.core.apply.call(null,f,inst_20549);var state_20563__$1 = state_20563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20563__$1,16,out,inst_20554);
} else
{if((state_val_20564 === 16))
{var inst_20556 = (state_20563[2]);var state_20563__$1 = (function (){var statearr_20581 = state_20563;(statearr_20581[12] = inst_20556);
return statearr_20581;
})();var statearr_20582_20606 = state_20563__$1;(statearr_20582_20606[2] = null);
(statearr_20582_20606[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 10))
{var inst_20531 = (state_20563[2]);var inst_20532 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20563__$1 = (function (){var statearr_20583 = state_20563;(statearr_20583[13] = inst_20531);
return statearr_20583;
})();var statearr_20584_20607 = state_20563__$1;(statearr_20584_20607[2] = inst_20532);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20563__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20564 === 8))
{var inst_20545 = (state_20563[2]);var state_20563__$1 = state_20563;var statearr_20585_20608 = state_20563__$1;(statearr_20585_20608[2] = inst_20545);
(statearr_20585_20608[1] = 5);
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
});})(c__9731__auto___20593,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9716__auto__,c__9731__auto___20593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_20589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20589[0] = state_machine__9717__auto__);
(statearr_20589[1] = 1);
return statearr_20589;
});
var state_machine__9717__auto____1 = (function (state_20563){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_20563);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e20590){if((e20590 instanceof Object))
{var ex__9720__auto__ = e20590;var statearr_20591_20609 = state_20563;(statearr_20591_20609[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20563);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20590;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20610 = state_20563;
state_20563 = G__20610;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_20563){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_20563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___20593,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9733__auto__ = (function (){var statearr_20592 = f__9732__auto__.call(null);(statearr_20592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___20593);
return statearr_20592;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___20593,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9731__auto___20718 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___20718,out){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___20718,out){
return (function (state_20694){var state_val_20695 = (state_20694[1]);if((state_val_20695 === 7))
{var inst_20674 = (state_20694[7]);var inst_20673 = (state_20694[8]);var inst_20673__$1 = (state_20694[2]);var inst_20674__$1 = cljs.core.nth.call(null,inst_20673__$1,0,null);var inst_20675 = cljs.core.nth.call(null,inst_20673__$1,1,null);var inst_20676 = (inst_20674__$1 == null);var state_20694__$1 = (function (){var statearr_20696 = state_20694;(statearr_20696[7] = inst_20674__$1);
(statearr_20696[8] = inst_20673__$1);
(statearr_20696[9] = inst_20675);
return statearr_20696;
})();if(cljs.core.truth_(inst_20676))
{var statearr_20697_20719 = state_20694__$1;(statearr_20697_20719[1] = 8);
} else
{var statearr_20698_20720 = state_20694__$1;(statearr_20698_20720[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20695 === 1))
{var inst_20665 = cljs.core.vec.call(null,chs);var inst_20666 = inst_20665;var state_20694__$1 = (function (){var statearr_20699 = state_20694;(statearr_20699[10] = inst_20666);
return statearr_20699;
})();var statearr_20700_20721 = state_20694__$1;(statearr_20700_20721[2] = null);
(statearr_20700_20721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20695 === 4))
{var inst_20666 = (state_20694[10]);var state_20694__$1 = state_20694;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20694__$1,7,inst_20666);
} else
{if((state_val_20695 === 6))
{var inst_20690 = (state_20694[2]);var state_20694__$1 = state_20694;var statearr_20701_20722 = state_20694__$1;(statearr_20701_20722[2] = inst_20690);
(statearr_20701_20722[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20695 === 3))
{var inst_20692 = (state_20694[2]);var state_20694__$1 = state_20694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20694__$1,inst_20692);
} else
{if((state_val_20695 === 2))
{var inst_20666 = (state_20694[10]);var inst_20668 = cljs.core.count.call(null,inst_20666);var inst_20669 = (inst_20668 > 0);var state_20694__$1 = state_20694;if(cljs.core.truth_(inst_20669))
{var statearr_20703_20723 = state_20694__$1;(statearr_20703_20723[1] = 4);
} else
{var statearr_20704_20724 = state_20694__$1;(statearr_20704_20724[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20695 === 11))
{var inst_20666 = (state_20694[10]);var inst_20683 = (state_20694[2]);var tmp20702 = inst_20666;var inst_20666__$1 = tmp20702;var state_20694__$1 = (function (){var statearr_20705 = state_20694;(statearr_20705[10] = inst_20666__$1);
(statearr_20705[11] = inst_20683);
return statearr_20705;
})();var statearr_20706_20725 = state_20694__$1;(statearr_20706_20725[2] = null);
(statearr_20706_20725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20695 === 9))
{var inst_20674 = (state_20694[7]);var state_20694__$1 = state_20694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20694__$1,11,out,inst_20674);
} else
{if((state_val_20695 === 5))
{var inst_20688 = cljs.core.async.close_BANG_.call(null,out);var state_20694__$1 = state_20694;var statearr_20707_20726 = state_20694__$1;(statearr_20707_20726[2] = inst_20688);
(statearr_20707_20726[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20695 === 10))
{var inst_20686 = (state_20694[2]);var state_20694__$1 = state_20694;var statearr_20708_20727 = state_20694__$1;(statearr_20708_20727[2] = inst_20686);
(statearr_20708_20727[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20695 === 8))
{var inst_20674 = (state_20694[7]);var inst_20673 = (state_20694[8]);var inst_20666 = (state_20694[10]);var inst_20675 = (state_20694[9]);var inst_20678 = (function (){var c = inst_20675;var v = inst_20674;var vec__20671 = inst_20673;var cs = inst_20666;return ((function (c,v,vec__20671,cs,inst_20674,inst_20673,inst_20666,inst_20675,state_val_20695,c__9731__auto___20718,out){
return (function (p1__20611_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20611_SHARP_);
});
;})(c,v,vec__20671,cs,inst_20674,inst_20673,inst_20666,inst_20675,state_val_20695,c__9731__auto___20718,out))
})();var inst_20679 = cljs.core.filterv.call(null,inst_20678,inst_20666);var inst_20666__$1 = inst_20679;var state_20694__$1 = (function (){var statearr_20709 = state_20694;(statearr_20709[10] = inst_20666__$1);
return statearr_20709;
})();var statearr_20710_20728 = state_20694__$1;(statearr_20710_20728[2] = null);
(statearr_20710_20728[1] = 2);
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
});})(c__9731__auto___20718,out))
;return ((function (switch__9716__auto__,c__9731__auto___20718,out){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_20714 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20714[0] = state_machine__9717__auto__);
(statearr_20714[1] = 1);
return statearr_20714;
});
var state_machine__9717__auto____1 = (function (state_20694){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_20694);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e20715){if((e20715 instanceof Object))
{var ex__9720__auto__ = e20715;var statearr_20716_20729 = state_20694;(statearr_20716_20729[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20694);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20730 = state_20694;
state_20694 = G__20730;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_20694){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_20694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___20718,out))
})();var state__9733__auto__ = (function (){var statearr_20717 = f__9732__auto__.call(null);(statearr_20717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___20718);
return statearr_20717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___20718,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9731__auto___20823 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___20823,out){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___20823,out){
return (function (state_20800){var state_val_20801 = (state_20800[1]);if((state_val_20801 === 7))
{var inst_20782 = (state_20800[7]);var inst_20782__$1 = (state_20800[2]);var inst_20783 = (inst_20782__$1 == null);var inst_20784 = cljs.core.not.call(null,inst_20783);var state_20800__$1 = (function (){var statearr_20802 = state_20800;(statearr_20802[7] = inst_20782__$1);
return statearr_20802;
})();if(inst_20784)
{var statearr_20803_20824 = state_20800__$1;(statearr_20803_20824[1] = 8);
} else
{var statearr_20804_20825 = state_20800__$1;(statearr_20804_20825[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20801 === 1))
{var inst_20777 = 0;var state_20800__$1 = (function (){var statearr_20805 = state_20800;(statearr_20805[8] = inst_20777);
return statearr_20805;
})();var statearr_20806_20826 = state_20800__$1;(statearr_20806_20826[2] = null);
(statearr_20806_20826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20801 === 4))
{var state_20800__$1 = state_20800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20800__$1,7,ch);
} else
{if((state_val_20801 === 6))
{var inst_20795 = (state_20800[2]);var state_20800__$1 = state_20800;var statearr_20807_20827 = state_20800__$1;(statearr_20807_20827[2] = inst_20795);
(statearr_20807_20827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20801 === 3))
{var inst_20797 = (state_20800[2]);var inst_20798 = cljs.core.async.close_BANG_.call(null,out);var state_20800__$1 = (function (){var statearr_20808 = state_20800;(statearr_20808[9] = inst_20797);
return statearr_20808;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20800__$1,inst_20798);
} else
{if((state_val_20801 === 2))
{var inst_20777 = (state_20800[8]);var inst_20779 = (inst_20777 < n);var state_20800__$1 = state_20800;if(cljs.core.truth_(inst_20779))
{var statearr_20809_20828 = state_20800__$1;(statearr_20809_20828[1] = 4);
} else
{var statearr_20810_20829 = state_20800__$1;(statearr_20810_20829[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20801 === 11))
{var inst_20777 = (state_20800[8]);var inst_20787 = (state_20800[2]);var inst_20788 = (inst_20777 + 1);var inst_20777__$1 = inst_20788;var state_20800__$1 = (function (){var statearr_20811 = state_20800;(statearr_20811[10] = inst_20787);
(statearr_20811[8] = inst_20777__$1);
return statearr_20811;
})();var statearr_20812_20830 = state_20800__$1;(statearr_20812_20830[2] = null);
(statearr_20812_20830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20801 === 9))
{var state_20800__$1 = state_20800;var statearr_20813_20831 = state_20800__$1;(statearr_20813_20831[2] = null);
(statearr_20813_20831[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20801 === 5))
{var state_20800__$1 = state_20800;var statearr_20814_20832 = state_20800__$1;(statearr_20814_20832[2] = null);
(statearr_20814_20832[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20801 === 10))
{var inst_20792 = (state_20800[2]);var state_20800__$1 = state_20800;var statearr_20815_20833 = state_20800__$1;(statearr_20815_20833[2] = inst_20792);
(statearr_20815_20833[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20801 === 8))
{var inst_20782 = (state_20800[7]);var state_20800__$1 = state_20800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20800__$1,11,out,inst_20782);
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
});})(c__9731__auto___20823,out))
;return ((function (switch__9716__auto__,c__9731__auto___20823,out){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_20819 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20819[0] = state_machine__9717__auto__);
(statearr_20819[1] = 1);
return statearr_20819;
});
var state_machine__9717__auto____1 = (function (state_20800){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_20800);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e20820){if((e20820 instanceof Object))
{var ex__9720__auto__ = e20820;var statearr_20821_20834 = state_20800;(statearr_20821_20834[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20800);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20835 = state_20800;
state_20800 = G__20835;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_20800){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_20800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___20823,out))
})();var state__9733__auto__ = (function (){var statearr_20822 = f__9732__auto__.call(null);(statearr_20822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___20823);
return statearr_20822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___20823,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9731__auto___20932 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___20932,out){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___20932,out){
return (function (state_20907){var state_val_20908 = (state_20907[1]);if((state_val_20908 === 7))
{var inst_20902 = (state_20907[2]);var state_20907__$1 = state_20907;var statearr_20909_20933 = state_20907__$1;(statearr_20909_20933[2] = inst_20902);
(statearr_20909_20933[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20908 === 1))
{var inst_20884 = null;var state_20907__$1 = (function (){var statearr_20910 = state_20907;(statearr_20910[7] = inst_20884);
return statearr_20910;
})();var statearr_20911_20934 = state_20907__$1;(statearr_20911_20934[2] = null);
(statearr_20911_20934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20908 === 4))
{var inst_20887 = (state_20907[8]);var inst_20887__$1 = (state_20907[2]);var inst_20888 = (inst_20887__$1 == null);var inst_20889 = cljs.core.not.call(null,inst_20888);var state_20907__$1 = (function (){var statearr_20912 = state_20907;(statearr_20912[8] = inst_20887__$1);
return statearr_20912;
})();if(inst_20889)
{var statearr_20913_20935 = state_20907__$1;(statearr_20913_20935[1] = 5);
} else
{var statearr_20914_20936 = state_20907__$1;(statearr_20914_20936[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20908 === 6))
{var state_20907__$1 = state_20907;var statearr_20915_20937 = state_20907__$1;(statearr_20915_20937[2] = null);
(statearr_20915_20937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20908 === 3))
{var inst_20904 = (state_20907[2]);var inst_20905 = cljs.core.async.close_BANG_.call(null,out);var state_20907__$1 = (function (){var statearr_20916 = state_20907;(statearr_20916[9] = inst_20904);
return statearr_20916;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20907__$1,inst_20905);
} else
{if((state_val_20908 === 2))
{var state_20907__$1 = state_20907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20907__$1,4,ch);
} else
{if((state_val_20908 === 11))
{var inst_20887 = (state_20907[8]);var inst_20896 = (state_20907[2]);var inst_20884 = inst_20887;var state_20907__$1 = (function (){var statearr_20917 = state_20907;(statearr_20917[10] = inst_20896);
(statearr_20917[7] = inst_20884);
return statearr_20917;
})();var statearr_20918_20938 = state_20907__$1;(statearr_20918_20938[2] = null);
(statearr_20918_20938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20908 === 9))
{var inst_20887 = (state_20907[8]);var state_20907__$1 = state_20907;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20907__$1,11,out,inst_20887);
} else
{if((state_val_20908 === 5))
{var inst_20887 = (state_20907[8]);var inst_20884 = (state_20907[7]);var inst_20891 = cljs.core._EQ_.call(null,inst_20887,inst_20884);var state_20907__$1 = state_20907;if(inst_20891)
{var statearr_20920_20939 = state_20907__$1;(statearr_20920_20939[1] = 8);
} else
{var statearr_20921_20940 = state_20907__$1;(statearr_20921_20940[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20908 === 10))
{var inst_20899 = (state_20907[2]);var state_20907__$1 = state_20907;var statearr_20922_20941 = state_20907__$1;(statearr_20922_20941[2] = inst_20899);
(statearr_20922_20941[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20908 === 8))
{var inst_20884 = (state_20907[7]);var tmp20919 = inst_20884;var inst_20884__$1 = tmp20919;var state_20907__$1 = (function (){var statearr_20923 = state_20907;(statearr_20923[7] = inst_20884__$1);
return statearr_20923;
})();var statearr_20924_20942 = state_20907__$1;(statearr_20924_20942[2] = null);
(statearr_20924_20942[1] = 2);
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
});})(c__9731__auto___20932,out))
;return ((function (switch__9716__auto__,c__9731__auto___20932,out){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_20928 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20928[0] = state_machine__9717__auto__);
(statearr_20928[1] = 1);
return statearr_20928;
});
var state_machine__9717__auto____1 = (function (state_20907){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_20907);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e20929){if((e20929 instanceof Object))
{var ex__9720__auto__ = e20929;var statearr_20930_20943 = state_20907;(statearr_20930_20943[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20944 = state_20907;
state_20907 = G__20944;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_20907){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_20907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___20932,out))
})();var state__9733__auto__ = (function (){var statearr_20931 = f__9732__auto__.call(null);(statearr_20931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___20932);
return statearr_20931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___20932,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9731__auto___21079 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___21079,out){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___21079,out){
return (function (state_21049){var state_val_21050 = (state_21049[1]);if((state_val_21050 === 7))
{var inst_21045 = (state_21049[2]);var state_21049__$1 = state_21049;var statearr_21051_21080 = state_21049__$1;(statearr_21051_21080[2] = inst_21045);
(statearr_21051_21080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21050 === 1))
{var inst_21012 = (new Array(n));var inst_21013 = inst_21012;var inst_21014 = 0;var state_21049__$1 = (function (){var statearr_21052 = state_21049;(statearr_21052[7] = inst_21013);
(statearr_21052[8] = inst_21014);
return statearr_21052;
})();var statearr_21053_21081 = state_21049__$1;(statearr_21053_21081[2] = null);
(statearr_21053_21081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21050 === 4))
{var inst_21017 = (state_21049[9]);var inst_21017__$1 = (state_21049[2]);var inst_21018 = (inst_21017__$1 == null);var inst_21019 = cljs.core.not.call(null,inst_21018);var state_21049__$1 = (function (){var statearr_21054 = state_21049;(statearr_21054[9] = inst_21017__$1);
return statearr_21054;
})();if(inst_21019)
{var statearr_21055_21082 = state_21049__$1;(statearr_21055_21082[1] = 5);
} else
{var statearr_21056_21083 = state_21049__$1;(statearr_21056_21083[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21050 === 15))
{var inst_21039 = (state_21049[2]);var state_21049__$1 = state_21049;var statearr_21057_21084 = state_21049__$1;(statearr_21057_21084[2] = inst_21039);
(statearr_21057_21084[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21050 === 13))
{var state_21049__$1 = state_21049;var statearr_21058_21085 = state_21049__$1;(statearr_21058_21085[2] = null);
(statearr_21058_21085[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21050 === 6))
{var inst_21014 = (state_21049[8]);var inst_21035 = (inst_21014 > 0);var state_21049__$1 = state_21049;if(cljs.core.truth_(inst_21035))
{var statearr_21059_21086 = state_21049__$1;(statearr_21059_21086[1] = 12);
} else
{var statearr_21060_21087 = state_21049__$1;(statearr_21060_21087[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21050 === 3))
{var inst_21047 = (state_21049[2]);var state_21049__$1 = state_21049;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21049__$1,inst_21047);
} else
{if((state_val_21050 === 12))
{var inst_21013 = (state_21049[7]);var inst_21037 = cljs.core.vec.call(null,inst_21013);var state_21049__$1 = state_21049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21049__$1,15,out,inst_21037);
} else
{if((state_val_21050 === 2))
{var state_21049__$1 = state_21049;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21049__$1,4,ch);
} else
{if((state_val_21050 === 11))
{var inst_21029 = (state_21049[2]);var inst_21030 = (new Array(n));var inst_21013 = inst_21030;var inst_21014 = 0;var state_21049__$1 = (function (){var statearr_21061 = state_21049;(statearr_21061[10] = inst_21029);
(statearr_21061[7] = inst_21013);
(statearr_21061[8] = inst_21014);
return statearr_21061;
})();var statearr_21062_21088 = state_21049__$1;(statearr_21062_21088[2] = null);
(statearr_21062_21088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21050 === 9))
{var inst_21013 = (state_21049[7]);var inst_21027 = cljs.core.vec.call(null,inst_21013);var state_21049__$1 = state_21049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21049__$1,11,out,inst_21027);
} else
{if((state_val_21050 === 5))
{var inst_21017 = (state_21049[9]);var inst_21022 = (state_21049[11]);var inst_21013 = (state_21049[7]);var inst_21014 = (state_21049[8]);var inst_21021 = (inst_21013[inst_21014] = inst_21017);var inst_21022__$1 = (inst_21014 + 1);var inst_21023 = (inst_21022__$1 < n);var state_21049__$1 = (function (){var statearr_21063 = state_21049;(statearr_21063[12] = inst_21021);
(statearr_21063[11] = inst_21022__$1);
return statearr_21063;
})();if(cljs.core.truth_(inst_21023))
{var statearr_21064_21089 = state_21049__$1;(statearr_21064_21089[1] = 8);
} else
{var statearr_21065_21090 = state_21049__$1;(statearr_21065_21090[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21050 === 14))
{var inst_21042 = (state_21049[2]);var inst_21043 = cljs.core.async.close_BANG_.call(null,out);var state_21049__$1 = (function (){var statearr_21067 = state_21049;(statearr_21067[13] = inst_21042);
return statearr_21067;
})();var statearr_21068_21091 = state_21049__$1;(statearr_21068_21091[2] = inst_21043);
(statearr_21068_21091[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21050 === 10))
{var inst_21033 = (state_21049[2]);var state_21049__$1 = state_21049;var statearr_21069_21092 = state_21049__$1;(statearr_21069_21092[2] = inst_21033);
(statearr_21069_21092[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21050 === 8))
{var inst_21022 = (state_21049[11]);var inst_21013 = (state_21049[7]);var tmp21066 = inst_21013;var inst_21013__$1 = tmp21066;var inst_21014 = inst_21022;var state_21049__$1 = (function (){var statearr_21070 = state_21049;(statearr_21070[7] = inst_21013__$1);
(statearr_21070[8] = inst_21014);
return statearr_21070;
})();var statearr_21071_21093 = state_21049__$1;(statearr_21071_21093[2] = null);
(statearr_21071_21093[1] = 2);
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
});})(c__9731__auto___21079,out))
;return ((function (switch__9716__auto__,c__9731__auto___21079,out){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_21075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21075[0] = state_machine__9717__auto__);
(statearr_21075[1] = 1);
return statearr_21075;
});
var state_machine__9717__auto____1 = (function (state_21049){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_21049);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e21076){if((e21076 instanceof Object))
{var ex__9720__auto__ = e21076;var statearr_21077_21094 = state_21049;(statearr_21077_21094[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21049);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21095 = state_21049;
state_21049 = G__21095;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_21049){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_21049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___21079,out))
})();var state__9733__auto__ = (function (){var statearr_21078 = f__9732__auto__.call(null);(statearr_21078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___21079);
return statearr_21078;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___21079,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9731__auto___21238 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__9731__auto___21238,out){
return (function (){var f__9732__auto__ = (function (){var switch__9716__auto__ = ((function (c__9731__auto___21238,out){
return (function (state_21208){var state_val_21209 = (state_21208[1]);if((state_val_21209 === 7))
{var inst_21204 = (state_21208[2]);var state_21208__$1 = state_21208;var statearr_21210_21239 = state_21208__$1;(statearr_21210_21239[2] = inst_21204);
(statearr_21210_21239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21209 === 1))
{var inst_21167 = [];var inst_21168 = inst_21167;var inst_21169 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_21208__$1 = (function (){var statearr_21211 = state_21208;(statearr_21211[7] = inst_21168);
(statearr_21211[8] = inst_21169);
return statearr_21211;
})();var statearr_21212_21240 = state_21208__$1;(statearr_21212_21240[2] = null);
(statearr_21212_21240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21209 === 4))
{var inst_21172 = (state_21208[9]);var inst_21172__$1 = (state_21208[2]);var inst_21173 = (inst_21172__$1 == null);var inst_21174 = cljs.core.not.call(null,inst_21173);var state_21208__$1 = (function (){var statearr_21213 = state_21208;(statearr_21213[9] = inst_21172__$1);
return statearr_21213;
})();if(inst_21174)
{var statearr_21214_21241 = state_21208__$1;(statearr_21214_21241[1] = 5);
} else
{var statearr_21215_21242 = state_21208__$1;(statearr_21215_21242[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21209 === 15))
{var inst_21198 = (state_21208[2]);var state_21208__$1 = state_21208;var statearr_21216_21243 = state_21208__$1;(statearr_21216_21243[2] = inst_21198);
(statearr_21216_21243[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21209 === 13))
{var state_21208__$1 = state_21208;var statearr_21217_21244 = state_21208__$1;(statearr_21217_21244[2] = null);
(statearr_21217_21244[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21209 === 6))
{var inst_21168 = (state_21208[7]);var inst_21193 = inst_21168.length;var inst_21194 = (inst_21193 > 0);var state_21208__$1 = state_21208;if(cljs.core.truth_(inst_21194))
{var statearr_21218_21245 = state_21208__$1;(statearr_21218_21245[1] = 12);
} else
{var statearr_21219_21246 = state_21208__$1;(statearr_21219_21246[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21209 === 3))
{var inst_21206 = (state_21208[2]);var state_21208__$1 = state_21208;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21208__$1,inst_21206);
} else
{if((state_val_21209 === 12))
{var inst_21168 = (state_21208[7]);var inst_21196 = cljs.core.vec.call(null,inst_21168);var state_21208__$1 = state_21208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21208__$1,15,out,inst_21196);
} else
{if((state_val_21209 === 2))
{var state_21208__$1 = state_21208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21208__$1,4,ch);
} else
{if((state_val_21209 === 11))
{var inst_21176 = (state_21208[10]);var inst_21172 = (state_21208[9]);var inst_21186 = (state_21208[2]);var inst_21187 = [];var inst_21188 = inst_21187.push(inst_21172);var inst_21168 = inst_21187;var inst_21169 = inst_21176;var state_21208__$1 = (function (){var statearr_21220 = state_21208;(statearr_21220[11] = inst_21186);
(statearr_21220[7] = inst_21168);
(statearr_21220[12] = inst_21188);
(statearr_21220[8] = inst_21169);
return statearr_21220;
})();var statearr_21221_21247 = state_21208__$1;(statearr_21221_21247[2] = null);
(statearr_21221_21247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21209 === 9))
{var inst_21168 = (state_21208[7]);var inst_21184 = cljs.core.vec.call(null,inst_21168);var state_21208__$1 = state_21208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21208__$1,11,out,inst_21184);
} else
{if((state_val_21209 === 5))
{var inst_21176 = (state_21208[10]);var inst_21172 = (state_21208[9]);var inst_21169 = (state_21208[8]);var inst_21176__$1 = f.call(null,inst_21172);var inst_21177 = cljs.core._EQ_.call(null,inst_21176__$1,inst_21169);var inst_21178 = cljs.core.keyword_identical_QMARK_.call(null,inst_21169,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_21179 = (inst_21177) || (inst_21178);var state_21208__$1 = (function (){var statearr_21222 = state_21208;(statearr_21222[10] = inst_21176__$1);
return statearr_21222;
})();if(cljs.core.truth_(inst_21179))
{var statearr_21223_21248 = state_21208__$1;(statearr_21223_21248[1] = 8);
} else
{var statearr_21224_21249 = state_21208__$1;(statearr_21224_21249[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21209 === 14))
{var inst_21201 = (state_21208[2]);var inst_21202 = cljs.core.async.close_BANG_.call(null,out);var state_21208__$1 = (function (){var statearr_21226 = state_21208;(statearr_21226[13] = inst_21201);
return statearr_21226;
})();var statearr_21227_21250 = state_21208__$1;(statearr_21227_21250[2] = inst_21202);
(statearr_21227_21250[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21209 === 10))
{var inst_21191 = (state_21208[2]);var state_21208__$1 = state_21208;var statearr_21228_21251 = state_21208__$1;(statearr_21228_21251[2] = inst_21191);
(statearr_21228_21251[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21209 === 8))
{var inst_21176 = (state_21208[10]);var inst_21172 = (state_21208[9]);var inst_21168 = (state_21208[7]);var inst_21181 = inst_21168.push(inst_21172);var tmp21225 = inst_21168;var inst_21168__$1 = tmp21225;var inst_21169 = inst_21176;var state_21208__$1 = (function (){var statearr_21229 = state_21208;(statearr_21229[7] = inst_21168__$1);
(statearr_21229[8] = inst_21169);
(statearr_21229[14] = inst_21181);
return statearr_21229;
})();var statearr_21230_21252 = state_21208__$1;(statearr_21230_21252[2] = null);
(statearr_21230_21252[1] = 2);
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
});})(c__9731__auto___21238,out))
;return ((function (switch__9716__auto__,c__9731__auto___21238,out){
return (function() {
var state_machine__9717__auto__ = null;
var state_machine__9717__auto____0 = (function (){var statearr_21234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21234[0] = state_machine__9717__auto__);
(statearr_21234[1] = 1);
return statearr_21234;
});
var state_machine__9717__auto____1 = (function (state_21208){while(true){
var ret_value__9718__auto__ = (function (){try{while(true){
var result__9719__auto__ = switch__9716__auto__.call(null,state_21208);if(cljs.core.keyword_identical_QMARK_.call(null,result__9719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__9719__auto__;
}
break;
}
}catch (e21235){if((e21235 instanceof Object))
{var ex__9720__auto__ = e21235;var statearr_21236_21253 = state_21208;(statearr_21236_21253[5] = ex__9720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21208);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21254 = state_21208;
state_21208 = G__21254;
continue;
}
} else
{return ret_value__9718__auto__;
}
break;
}
});
state_machine__9717__auto__ = function(state_21208){
switch(arguments.length){
case 0:
return state_machine__9717__auto____0.call(this);
case 1:
return state_machine__9717__auto____1.call(this,state_21208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9717__auto____0;
state_machine__9717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9717__auto____1;
return state_machine__9717__auto__;
})()
;})(switch__9716__auto__,c__9731__auto___21238,out))
})();var state__9733__auto__ = (function (){var statearr_21237 = f__9732__auto__.call(null);(statearr_21237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9731__auto___21238);
return statearr_21237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9733__auto__);
});})(c__9731__auto___21238,out))
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

//# sourceMappingURL=async.js.map