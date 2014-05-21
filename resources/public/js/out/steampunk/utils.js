// Compiled by ClojureScript 0.0-2173
goog.provide('steampunk.utils');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
steampunk.utils.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
steampunk.utils.handle_change = (function handle_change(e,data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (_){return e.target.value;
}));
});
steampunk.utils.end_edit = (function end_edit(data,edit_key,text,owner,cb){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",3420907786),false);
om.core.transact_BANG_.call(null,data,edit_key,(function (_){return text;
}),new cljs.core.Keyword(null,"update","update",4470025275));
if(cljs.core.truth_(cb))
{return cb.call(null,text);
} else
{return null;
}
});
steampunk.utils.update_user = (function (){var method_table__4312__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4313__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4314__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4315__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4316__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("update-user",(function (k,_){return k;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4316__auto__,method_table__4312__auto__,prefer_table__4313__auto__,method_cache__4314__auto__,cached_hierarchy__4315__auto__));
})();
cljs.core._add_method.call(null,steampunk.utils.update_user,new cljs.core.Keyword(null,"extra","extra",1110869890),(function (k,m){return Hull.api("/me","put",{"extra": m}).then((function (p1__11436_SHARP_){return cljs.core.print.call(null,"server response:",p1__11436_SHARP_);
}));
}));
steampunk.utils.update_extra = (function update_extra(m){cljs.core.print.call(null,m);
return Hull.api("/me","put",{"extra": cljs.core.clj__GT_js.call(null,m)}).then((function (p1__11437_SHARP_){return cljs.core.print.call(null,"server response:",p1__11437_SHARP_);
}));
});

//# sourceMappingURL=utils.js.map