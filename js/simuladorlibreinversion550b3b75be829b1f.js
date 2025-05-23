"use strict";
(self.webpackChunklibreInversion = self.webpackChunklibreInversion || []).push([
  [429],
  {
    1808: ($e, nt, pt) => {
      const Ce = ":";
      class Pt extends Error {
        constructor(n) {
          super(`No translation found for ${ht(n)}.`),
            (this.parsedMessage = n),
            (this.type = "MissingTranslationError");
        }
      }
      const Je = function (a, ...n) {
          if (Je.translate) {
            const h = Je.translate(a, n);
            (a = h[0]), (n = h[1]);
          }
          let u = kt(a[0], a.raw[0]);
          for (let h = 1; h < a.length; h++) u += n[h - 1] + kt(a[h], a.raw[h]);
          return u;
        },
        Dt = ":";
      function kt(a, n) {
        return n.charAt(0) === Dt
          ? a.substring(
              (function Ye(a, n) {
                for (let u = 1, h = 1; u < a.length; u++, h++)
                  if ("\\" === n[h]) h++;
                  else if (a[u] === Ce) return u;
                throw new Error(
                  `Unterminated $localize metadata block in "${n}".`
                );
              })(a, n) + 1
            )
          : a;
      }
      ((() =>
        (typeof globalThis < "u" && globalThis) ||
        (typeof global < "u" && global) ||
        (typeof window < "u" && window) ||
        (typeof self < "u" &&
          typeof WorkerGlobalScope < "u" &&
          self instanceof WorkerGlobalScope &&
          self))().$localize = Je),
        pt(609);
    },
    609: function ($e, nt, pt) {
      var Ce,
        ot,
        be =
          (this && this.__spreadArray) ||
          function (ke, _e, xe) {
            if (xe || 2 === arguments.length)
              for (var Me, Ie = 0, De = _e.length; Ie < De; Ie++)
                (Me || !(Ie in _e)) &&
                  (Me || (Me = Array.prototype.slice.call(_e, 0, Ie)),
                  (Me[Ie] = _e[Ie]));
            return ke.concat(Me || Array.prototype.slice.call(_e));
          };
      (Ce = function () {
        !(function (e) {
          var t = e.performance;
          function r(_) {
            t && t.mark && t.mark(_);
          }
          function o(_, i) {
            t && t.measure && t.measure(_, i);
          }
          r("Zone");
          var l = e.__Zone_symbol_prefix || "__zone_symbol__";
          function f(_) {
            return l + _;
          }
          var p = !0 === e[f("forceDuplicateZoneCheck")];
          if (e.Zone) {
            if (p || "function" != typeof e.Zone.__symbol__)
              throw new Error("Zone already loaded.");
            return e.Zone;
          }
          var E = (function () {
            function _(i, s) {
              (this._parent = i),
                (this._name = s ? s.name || "unnamed" : "<root>"),
                (this._properties = (s && s.properties) || {}),
                (this._zoneDelegate = new S(
                  this,
                  this._parent && this._parent._zoneDelegate,
                  s
                ));
            }
            return (
              (_.assertZonePatched = function () {
                if (e.Promise !== N.ZoneAwarePromise)
                  throw new Error(
                    "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                  );
              }),
              Object.defineProperty(_, "root", {
                get: function () {
                  for (var i = _.current; i.parent; ) i = i.parent;
                  return i;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(_, "current", {
                get: function () {
                  return Q.zone;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(_, "currentTask", {
                get: function () {
                  return ye;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (_.__load_patch = function (i, s, c) {
                if ((void 0 === c && (c = !1), N.hasOwnProperty(i))) {
                  if (!c && p) throw Error("Already loaded patch: " + i);
                } else if (!e["__Zone_disable_" + i]) {
                  var I = "Zone:" + i;
                  r(I), (N[i] = s(e, _, te)), o(I, I);
                }
              }),
              Object.defineProperty(_.prototype, "parent", {
                get: function () {
                  return this._parent;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(_.prototype, "name", {
                get: function () {
                  return this._name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (_.prototype.get = function (i) {
                var s = this.getZoneWith(i);
                if (s) return s._properties[i];
              }),
              (_.prototype.getZoneWith = function (i) {
                for (var s = this; s; ) {
                  if (s._properties.hasOwnProperty(i)) return s;
                  s = s._parent;
                }
                return null;
              }),
              (_.prototype.fork = function (i) {
                if (!i) throw new Error("ZoneSpec required!");
                return this._zoneDelegate.fork(this, i);
              }),
              (_.prototype.wrap = function (i, s) {
                if ("function" != typeof i)
                  throw new Error("Expecting function got: " + i);
                var c = this._zoneDelegate.intercept(this, i, s),
                  I = this;
                return function () {
                  return I.runGuarded(c, this, arguments, s);
                };
              }),
              (_.prototype.run = function (i, s, c, I) {
                Q = { parent: Q, zone: this };
                try {
                  return this._zoneDelegate.invoke(this, i, s, c, I);
                } finally {
                  Q = Q.parent;
                }
              }),
              (_.prototype.runGuarded = function (i, s, c, I) {
                void 0 === s && (s = null), (Q = { parent: Q, zone: this });
                try {
                  try {
                    return this._zoneDelegate.invoke(this, i, s, c, I);
                  } catch (ne) {
                    if (this._zoneDelegate.handleError(this, ne)) throw ne;
                  }
                } finally {
                  Q = Q.parent;
                }
              }),
              (_.prototype.runTask = function (i, s, c) {
                if (i.zone != this)
                  throw new Error(
                    "A task can only be run in the zone of creation! (Creation: " +
                      (i.zone || R).name +
                      "; Execution: " +
                      this.name +
                      ")"
                  );
                if (i.state !== J || (i.type !== F && i.type !== M)) {
                  var I = i.state != q;
                  I && i._transitionTo(q, X), i.runCount++;
                  var ne = ye;
                  (ye = i), (Q = { parent: Q, zone: this });
                  try {
                    i.type == M &&
                      i.data &&
                      !i.data.isPeriodic &&
                      (i.cancelFn = void 0);
                    try {
                      return this._zoneDelegate.invokeTask(this, i, s, c);
                    } catch (Re) {
                      if (this._zoneDelegate.handleError(this, Re)) throw Re;
                    }
                  } finally {
                    i.state !== J &&
                      i.state !== ee &&
                      (i.type == F || (i.data && i.data.isPeriodic)
                        ? I && i._transitionTo(X, q)
                        : ((i.runCount = 0),
                          this._updateTaskCount(i, -1),
                          I && i._transitionTo(J, q, J))),
                      (Q = Q.parent),
                      (ye = ne);
                  }
                }
              }),
              (_.prototype.scheduleTask = function (i) {
                if (i.zone && i.zone !== this)
                  for (var s = this; s; ) {
                    if (s === i.zone)
                      throw Error(
                        "can not reschedule task to "
                          .concat(
                            this.name,
                            " which is descendants of the original zone "
                          )
                          .concat(i.zone.name)
                      );
                    s = s.parent;
                  }
                i._transitionTo(G, J);
                var c = [];
                (i._zoneDelegates = c), (i._zone = this);
                try {
                  i = this._zoneDelegate.scheduleTask(this, i);
                } catch (I) {
                  throw (
                    (i._transitionTo(ee, G, J),
                    this._zoneDelegate.handleError(this, I),
                    I)
                  );
                }
                return (
                  i._zoneDelegates === c && this._updateTaskCount(i, 1),
                  i.state == G && i._transitionTo(X, G),
                  i
                );
              }),
              (_.prototype.scheduleMicroTask = function (i, s, c, I) {
                return this.scheduleTask(new T(x, i, s, c, I, void 0));
              }),
              (_.prototype.scheduleMacroTask = function (i, s, c, I, ne) {
                return this.scheduleTask(new T(M, i, s, c, I, ne));
              }),
              (_.prototype.scheduleEventTask = function (i, s, c, I, ne) {
                return this.scheduleTask(new T(F, i, s, c, I, ne));
              }),
              (_.prototype.cancelTask = function (i) {
                if (i.zone != this)
                  throw new Error(
                    "A task can only be cancelled in the zone of creation! (Creation: " +
                      (i.zone || R).name +
                      "; Execution: " +
                      this.name +
                      ")"
                  );
                i._transitionTo(C, X, q);
                try {
                  this._zoneDelegate.cancelTask(this, i);
                } catch (s) {
                  throw (
                    (i._transitionTo(ee, C),
                    this._zoneDelegate.handleError(this, s),
                    s)
                  );
                }
                return (
                  this._updateTaskCount(i, -1),
                  i._transitionTo(J, C),
                  (i.runCount = 0),
                  i
                );
              }),
              (_.prototype._updateTaskCount = function (i, s) {
                var c = i._zoneDelegates;
                -1 == s && (i._zoneDelegates = null);
                for (var I = 0; I < c.length; I++)
                  c[I]._updateTaskCount(i.type, s);
              }),
              _
            );
          })();
          E.__symbol__ = f;
          var ce,
            b = {
              name: "",
              onHasTask: function (_, i, s, c) {
                return _.hasTask(s, c);
              },
              onScheduleTask: function (_, i, s, c) {
                return _.scheduleTask(s, c);
              },
              onInvokeTask: function (_, i, s, c, I, ne) {
                return _.invokeTask(s, c, I, ne);
              },
              onCancelTask: function (_, i, s, c) {
                return _.cancelTask(s, c);
              },
            },
            S = (function () {
              function _(i, s, c) {
                (this._taskCounts = {
                  microTask: 0,
                  macroTask: 0,
                  eventTask: 0,
                }),
                  (this.zone = i),
                  (this._parentDelegate = s),
                  (this._forkZS = c && (c && c.onFork ? c : s._forkZS)),
                  (this._forkDlgt = c && (c.onFork ? s : s._forkDlgt)),
                  (this._forkCurrZone =
                    c && (c.onFork ? this.zone : s._forkCurrZone)),
                  (this._interceptZS =
                    c && (c.onIntercept ? c : s._interceptZS)),
                  (this._interceptDlgt =
                    c && (c.onIntercept ? s : s._interceptDlgt)),
                  (this._interceptCurrZone =
                    c && (c.onIntercept ? this.zone : s._interceptCurrZone)),
                  (this._invokeZS = c && (c.onInvoke ? c : s._invokeZS)),
                  (this._invokeDlgt = c && (c.onInvoke ? s : s._invokeDlgt)),
                  (this._invokeCurrZone =
                    c && (c.onInvoke ? this.zone : s._invokeCurrZone)),
                  (this._handleErrorZS =
                    c && (c.onHandleError ? c : s._handleErrorZS)),
                  (this._handleErrorDlgt =
                    c && (c.onHandleError ? s : s._handleErrorDlgt)),
                  (this._handleErrorCurrZone =
                    c &&
                    (c.onHandleError ? this.zone : s._handleErrorCurrZone)),
                  (this._scheduleTaskZS =
                    c && (c.onScheduleTask ? c : s._scheduleTaskZS)),
                  (this._scheduleTaskDlgt =
                    c && (c.onScheduleTask ? s : s._scheduleTaskDlgt)),
                  (this._scheduleTaskCurrZone =
                    c &&
                    (c.onScheduleTask ? this.zone : s._scheduleTaskCurrZone)),
                  (this._invokeTaskZS =
                    c && (c.onInvokeTask ? c : s._invokeTaskZS)),
                  (this._invokeTaskDlgt =
                    c && (c.onInvokeTask ? s : s._invokeTaskDlgt)),
                  (this._invokeTaskCurrZone =
                    c && (c.onInvokeTask ? this.zone : s._invokeTaskCurrZone)),
                  (this._cancelTaskZS =
                    c && (c.onCancelTask ? c : s._cancelTaskZS)),
                  (this._cancelTaskDlgt =
                    c && (c.onCancelTask ? s : s._cancelTaskDlgt)),
                  (this._cancelTaskCurrZone =
                    c && (c.onCancelTask ? this.zone : s._cancelTaskCurrZone)),
                  (this._hasTaskZS = null),
                  (this._hasTaskDlgt = null),
                  (this._hasTaskDlgtOwner = null),
                  (this._hasTaskCurrZone = null);
                var I = c && c.onHasTask;
                (I || (s && s._hasTaskZS)) &&
                  ((this._hasTaskZS = I ? c : b),
                  (this._hasTaskDlgt = s),
                  (this._hasTaskDlgtOwner = this),
                  (this._hasTaskCurrZone = i),
                  c.onScheduleTask ||
                    ((this._scheduleTaskZS = b),
                    (this._scheduleTaskDlgt = s),
                    (this._scheduleTaskCurrZone = this.zone)),
                  c.onInvokeTask ||
                    ((this._invokeTaskZS = b),
                    (this._invokeTaskDlgt = s),
                    (this._invokeTaskCurrZone = this.zone)),
                  c.onCancelTask ||
                    ((this._cancelTaskZS = b),
                    (this._cancelTaskDlgt = s),
                    (this._cancelTaskCurrZone = this.zone)));
              }
              return (
                (_.prototype.fork = function (i, s) {
                  return this._forkZS
                    ? this._forkZS.onFork(this._forkDlgt, this.zone, i, s)
                    : new E(i, s);
                }),
                (_.prototype.intercept = function (i, s, c) {
                  return this._interceptZS
                    ? this._interceptZS.onIntercept(
                        this._interceptDlgt,
                        this._interceptCurrZone,
                        i,
                        s,
                        c
                      )
                    : s;
                }),
                (_.prototype.invoke = function (i, s, c, I, ne) {
                  return this._invokeZS
                    ? this._invokeZS.onInvoke(
                        this._invokeDlgt,
                        this._invokeCurrZone,
                        i,
                        s,
                        c,
                        I,
                        ne
                      )
                    : s.apply(c, I);
                }),
                (_.prototype.handleError = function (i, s) {
                  return (
                    !this._handleErrorZS ||
                    this._handleErrorZS.onHandleError(
                      this._handleErrorDlgt,
                      this._handleErrorCurrZone,
                      i,
                      s
                    )
                  );
                }),
                (_.prototype.scheduleTask = function (i, s) {
                  var c = s;
                  if (this._scheduleTaskZS)
                    this._hasTaskZS &&
                      c._zoneDelegates.push(this._hasTaskDlgtOwner),
                      (c = this._scheduleTaskZS.onScheduleTask(
                        this._scheduleTaskDlgt,
                        this._scheduleTaskCurrZone,
                        i,
                        s
                      )) || (c = s);
                  else if (s.scheduleFn) s.scheduleFn(s);
                  else {
                    if (s.type != x)
                      throw new Error("Task is missing scheduleFn.");
                    ie(s);
                  }
                  return c;
                }),
                (_.prototype.invokeTask = function (i, s, c, I) {
                  return this._invokeTaskZS
                    ? this._invokeTaskZS.onInvokeTask(
                        this._invokeTaskDlgt,
                        this._invokeTaskCurrZone,
                        i,
                        s,
                        c,
                        I
                      )
                    : s.callback.apply(c, I);
                }),
                (_.prototype.cancelTask = function (i, s) {
                  var c;
                  if (this._cancelTaskZS)
                    c = this._cancelTaskZS.onCancelTask(
                      this._cancelTaskDlgt,
                      this._cancelTaskCurrZone,
                      i,
                      s
                    );
                  else {
                    if (!s.cancelFn) throw Error("Task is not cancelable");
                    c = s.cancelFn(s);
                  }
                  return c;
                }),
                (_.prototype.hasTask = function (i, s) {
                  try {
                    this._hasTaskZS &&
                      this._hasTaskZS.onHasTask(
                        this._hasTaskDlgt,
                        this._hasTaskCurrZone,
                        i,
                        s
                      );
                  } catch (c) {
                    this.handleError(i, c);
                  }
                }),
                (_.prototype._updateTaskCount = function (i, s) {
                  var c = this._taskCounts,
                    I = c[i],
                    ne = (c[i] = I + s);
                  if (ne < 0)
                    throw new Error("More tasks executed then were scheduled.");
                  (0 != I && 0 != ne) ||
                    this.hasTask(this.zone, {
                      microTask: c.microTask > 0,
                      macroTask: c.macroTask > 0,
                      eventTask: c.eventTask > 0,
                      change: i,
                    });
                }),
                _
              );
            })(),
            T = (function () {
              function _(i, s, c, I, ne, Re) {
                if (
                  ((this._zone = null),
                  (this.runCount = 0),
                  (this._zoneDelegates = null),
                  (this._state = "notScheduled"),
                  (this.type = i),
                  (this.source = s),
                  (this.data = I),
                  (this.scheduleFn = ne),
                  (this.cancelFn = Re),
                  !c)
                )
                  throw new Error("callback is not defined");
                this.callback = c;
                var d = this;
                this.invoke =
                  i === F && I && I.useG
                    ? _.invokeTask
                    : function () {
                        return _.invokeTask.call(e, d, this, arguments);
                      };
              }
              return (
                (_.invokeTask = function (i, s, c) {
                  i || (i = this), ae++;
                  try {
                    return i.runCount++, i.zone.runTask(i, s, c);
                  } finally {
                    1 == ae && U(), ae--;
                  }
                }),
                Object.defineProperty(_.prototype, "zone", {
                  get: function () {
                    return this._zone;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(_.prototype, "state", {
                  get: function () {
                    return this._state;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (_.prototype.cancelScheduleRequest = function () {
                  this._transitionTo(J, G);
                }),
                (_.prototype._transitionTo = function (i, s, c) {
                  if (this._state !== s && this._state !== c)
                    throw new Error(
                      ""
                        .concat(this.type, " '")
                        .concat(this.source, "': can not transition to '")
                        .concat(i, "', expecting state '")
                        .concat(s, "'")
                        .concat(c ? " or '" + c + "'" : "", ", was '")
                        .concat(this._state, "'.")
                    );
                  (this._state = i), i == J && (this._zoneDelegates = null);
                }),
                (_.prototype.toString = function () {
                  return this.data && typeof this.data.handleId < "u"
                    ? this.data.handleId.toString()
                    : Object.prototype.toString.call(this);
                }),
                (_.prototype.toJSON = function () {
                  return {
                    type: this.type,
                    state: this.state,
                    source: this.source,
                    zone: this.zone.name,
                    runCount: this.runCount,
                  };
                }),
                _
              );
            })(),
            P = f("setTimeout"),
            O = f("Promise"),
            A = f("then"),
            L = [],
            $ = !1;
          function K(_) {
            if ((ce || (e[O] && (ce = e[O].resolve(0))), ce)) {
              var i = ce[A];
              i || (i = ce.then), i.call(ce, _);
            } else e[P](_, 0);
          }
          function ie(_) {
            0 === ae && 0 === L.length && K(U), _ && L.push(_);
          }
          function U() {
            if (!$) {
              for ($ = !0; L.length; ) {
                var _ = L;
                L = [];
                for (var i = 0; i < _.length; i++) {
                  var s = _[i];
                  try {
                    s.zone.runTask(s, null, null);
                  } catch (c) {
                    te.onUnhandledError(c);
                  }
                }
              }
              te.microtaskDrainDone(), ($ = !1);
            }
          }
          var R = { name: "NO ZONE" },
            J = "notScheduled",
            G = "scheduling",
            X = "scheduled",
            q = "running",
            C = "canceling",
            ee = "unknown",
            x = "microTask",
            M = "macroTask",
            F = "eventTask",
            N = {},
            te = {
              symbol: f,
              currentZoneFrame: function () {
                return Q;
              },
              onUnhandledError: re,
              microtaskDrainDone: re,
              scheduleMicroTask: ie,
              showUncaughtError: function () {
                return !E[f("ignoreConsoleErrorUncaughtError")];
              },
              patchEventTarget: function () {
                return [];
              },
              patchOnProperties: re,
              patchMethod: function () {
                return re;
              },
              bindArguments: function () {
                return [];
              },
              patchThen: function () {
                return re;
              },
              patchMacroTask: function () {
                return re;
              },
              patchEventPrototype: function () {
                return re;
              },
              isIEOrEdge: function () {
                return !1;
              },
              getGlobalObjects: function () {},
              ObjectDefineProperty: function () {
                return re;
              },
              ObjectGetOwnPropertyDescriptor: function () {},
              ObjectCreate: function () {},
              ArraySlice: function () {
                return [];
              },
              patchClass: function () {
                return re;
              },
              wrapWithCurrentZone: function () {
                return re;
              },
              filterProperties: function () {
                return [];
              },
              attachOriginToPatched: function () {
                return re;
              },
              _redefineProperty: function () {
                return re;
              },
              patchCallbacks: function () {
                return re;
              },
              nativeScheduleMicroTask: K,
            },
            Q = { parent: null, zone: new E(null, null) },
            ye = null,
            ae = 0;
          function re() {}
          o("Zone", "Zone"), (e.Zone = E);
        })(
          (typeof window < "u" && window) ||
            (typeof self < "u" && self) ||
            global
        );
        var ke = Object.getOwnPropertyDescriptor,
          _e = Object.defineProperty,
          xe = Object.getPrototypeOf,
          Ie = Object.create,
          De = Array.prototype.slice,
          Me = "addEventListener",
          it = "removeEventListener",
          _t = Zone.__symbol__(Me),
          at = Zone.__symbol__(it),
          we = "true",
          Se = "false",
          Be = Zone.__symbol__("");
        function st(e, t) {
          return Zone.current.wrap(e, t);
        }
        function ct(e, t, r, o, l) {
          return Zone.current.scheduleMacroTask(e, t, r, o, l);
        }
        var V = Zone.__symbol__,
          Ge = typeof window < "u",
          Ne = Ge ? window : void 0,
          se = (Ge && Ne) || ("object" == typeof self && self) || global,
          gt = "removeAttribute";
        function We(e, t) {
          for (var r = e.length - 1; r >= 0; r--)
            "function" == typeof e[r] && (e[r] = st(e[r], t + "_" + r));
          return e;
        }
        function Oe(e) {
          return (
            !e ||
            (!1 !== e.writable &&
              !("function" == typeof e.get && typeof e.set > "u"))
          );
        }
        var ut =
            typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
          Xe =
            !("nw" in se) &&
            typeof se.process < "u" &&
            "[object process]" === {}.toString.call(se.process),
          Fe = !Xe && !ut && !(!Ge || !Ne.HTMLElement),
          Et =
            typeof se.process < "u" &&
            "[object process]" === {}.toString.call(se.process) &&
            !ut &&
            !(!Ge || !Ne.HTMLElement),
          qe = {},
          lt = function (e) {
            if ((e = e || se.event)) {
              var t = qe[e.type];
              t || (t = qe[e.type] = V("ON_PROPERTY" + e.type));
              var l,
                r = this || e.target || se,
                o = r[t];
              return (
                Fe && r === Ne && "error" === e.type
                  ? !0 ===
                      (l =
                        o &&
                        o.call(
                          this,
                          e.message,
                          e.filename,
                          e.lineno,
                          e.colno,
                          e.error
                        )) && e.preventDefault()
                  : null != (l = o && o.apply(this, arguments)) &&
                    !l &&
                    e.preventDefault(),
                l
              );
            }
          };
        function mt(e, t, r) {
          var o = ke(e, t);
          if (
            (!o && r && ke(r, t) && (o = { enumerable: !0, configurable: !0 }),
            o && o.configurable)
          ) {
            var f = V("on" + t + "patched");
            if (!e.hasOwnProperty(f) || !e[f]) {
              delete o.writable, delete o.value;
              var p = o.get,
                E = o.set,
                b = t.slice(2),
                S = qe[b];
              S || (S = qe[b] = V("ON_PROPERTY" + b)),
                (o.set = function (T) {
                  var P = this;
                  !P && e === se && (P = se),
                    P &&
                      ("function" == typeof P[S] &&
                        P.removeEventListener(b, lt),
                      E && E.call(P, null),
                      (P[S] = T),
                      "function" == typeof T && P.addEventListener(b, lt, !1));
                }),
                (o.get = function () {
                  var T = this;
                  if ((!T && e === se && (T = se), !T)) return null;
                  var P = T[S];
                  if (P) return P;
                  if (p) {
                    var O = p.call(this);
                    if (O)
                      return (
                        o.set.call(this, O),
                        "function" == typeof T[gt] && T.removeAttribute(t),
                        O
                      );
                  }
                  return null;
                }),
                _e(e, t, o),
                (e[f] = !0);
            }
          }
        }
        function ft(e, t, r) {
          if (t) for (var o = 0; o < t.length; o++) mt(e, "on" + t[o], r);
          else {
            var l = [];
            for (var f in e) "on" == f.slice(0, 2) && l.push(f);
            for (var p = 0; p < l.length; p++) mt(e, l[p], r);
          }
        }
        var Ee = V("originalInstance");
        function Ue(e) {
          var t = se[e];
          if (t) {
            (se[V(e)] = t),
              (se[e] = function () {
                var l = We(arguments, e);
                switch (l.length) {
                  case 0:
                    this[Ee] = new t();
                    break;
                  case 1:
                    this[Ee] = new t(l[0]);
                    break;
                  case 2:
                    this[Ee] = new t(l[0], l[1]);
                    break;
                  case 3:
                    this[Ee] = new t(l[0], l[1], l[2]);
                    break;
                  case 4:
                    this[Ee] = new t(l[0], l[1], l[2], l[3]);
                    break;
                  default:
                    throw new Error("Arg list too long.");
                }
              }),
              Te(se[e], t);
            var o,
              r = new t(function () {});
            for (o in r)
              ("XMLHttpRequest" === e && "responseBlob" === o) ||
                (function (l) {
                  "function" == typeof r[l]
                    ? (se[e].prototype[l] = function () {
                        return this[Ee][l].apply(this[Ee], arguments);
                      })
                    : _e(se[e].prototype, l, {
                        set: function (f) {
                          "function" == typeof f
                            ? ((this[Ee][l] = st(f, e + "." + l)),
                              Te(this[Ee][l], f))
                            : (this[Ee][l] = f);
                        },
                        get: function () {
                          return this[Ee][l];
                        },
                      });
                })(o);
            for (o in t)
              "prototype" !== o && t.hasOwnProperty(o) && (se[e][o] = t[o]);
          }
        }
        function Pe(e, t, r) {
          for (var o = e; o && !o.hasOwnProperty(t); ) o = xe(o);
          !o && e[t] && (o = e);
          var l = V(t),
            f = null;
          if (
            o &&
            (!(f = o[l]) || !o.hasOwnProperty(l)) &&
            ((f = o[l] = o[t]), Oe(o && ke(o, t)))
          ) {
            var E = r(f, l, t);
            (o[t] = function () {
              return E(this, arguments);
            }),
              Te(o[t], f);
          }
          return f;
        }
        function Ot(e, t, r) {
          var o = null;
          function l(f) {
            var p = f.data;
            return (
              (p.args[p.cbIdx] = function () {
                f.invoke.apply(this, arguments);
              }),
              o.apply(p.target, p.args),
              f
            );
          }
          o = Pe(e, t, function (f) {
            return function (p, E) {
              var b = r(p, E);
              return b.cbIdx >= 0 && "function" == typeof E[b.cbIdx]
                ? ct(b.name, E[b.cbIdx], b, l)
                : f.apply(p, E);
            };
          });
        }
        function Te(e, t) {
          e[V("OriginalDelegate")] = t;
        }
        var Tt = !1,
          Ye = !1;
        function xt() {
          if (Tt) return Ye;
          Tt = !0;
          try {
            var e = Ne.navigator.userAgent;
            (-1 !== e.indexOf("MSIE ") ||
              -1 !== e.indexOf("Trident/") ||
              -1 !== e.indexOf("Edge/")) &&
              (Ye = !0);
          } catch {}
          return Ye;
        }
        Zone.__load_patch("ZoneAwarePromise", function (e, t, r) {
          var o = Object.getOwnPropertyDescriptor,
            l = Object.defineProperty;
          var p = r.symbol,
            E = [],
            b = !0 === e[p("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
            S = p("Promise"),
            T = p("then"),
            P = "__creationTrace__";
          (r.onUnhandledError = function (d) {
            if (r.showUncaughtError()) {
              var m = d && d.rejection;
              m
                ? console.error(
                    "Unhandled Promise rejection:",
                    m instanceof Error ? m.message : m,
                    "; Zone:",
                    d.zone.name,
                    "; Task:",
                    d.task && d.task.source,
                    "; Value:",
                    m,
                    m instanceof Error ? m.stack : void 0
                  )
                : console.error(d);
            }
          }),
            (r.microtaskDrainDone = function () {
              for (
                var d = function () {
                  var m = E.shift();
                  try {
                    m.zone.runGuarded(function () {
                      throw m.throwOriginal ? m.rejection : m;
                    });
                  } catch (y) {
                    !(function A(d) {
                      r.onUnhandledError(d);
                      try {
                        var m = t[O];
                        "function" == typeof m && m.call(this, d);
                      } catch {}
                    })(y);
                  }
                };
                E.length;

              )
                d();
            });
          var O = p("unhandledPromiseRejectionHandler");
          function L(d) {
            return d && d.then;
          }
          function $(d) {
            return d;
          }
          function ce(d) {
            return s.reject(d);
          }
          var K = p("state"),
            ie = p("value"),
            U = p("finally"),
            R = p("parentPromiseValue"),
            J = p("parentPromiseState"),
            G = "Promise.then",
            X = null,
            q = !0,
            C = !1,
            ee = 0;
          function x(d, m) {
            return function (y) {
              try {
                te(d, m, y);
              } catch (v) {
                te(d, !1, v);
              }
            };
          }
          var M = function () {
              var d = !1;
              return function (y) {
                return function () {
                  d || ((d = !0), y.apply(null, arguments));
                };
              };
            },
            F = "Promise resolved with itself",
            N = p("currentTaskTrace");
          function te(d, m, y) {
            var v = M();
            if (d === y) throw new TypeError(F);
            if (d[K] === X) {
              var w = null;
              try {
                ("object" == typeof y || "function" == typeof y) &&
                  (w = y && y.then);
              } catch (B) {
                return (
                  v(function () {
                    te(d, !1, B);
                  })(),
                  d
                );
              }
              if (
                m !== C &&
                y instanceof s &&
                y.hasOwnProperty(K) &&
                y.hasOwnProperty(ie) &&
                y[K] !== X
              )
                ye(y), te(d, y[K], y[ie]);
              else if (m !== C && "function" == typeof w)
                try {
                  w.call(y, v(x(d, m)), v(x(d, !1)));
                } catch (B) {
                  v(function () {
                    te(d, !1, B);
                  })();
                }
              else {
                d[K] = m;
                var Z = d[ie];
                if (
                  ((d[ie] = y),
                  d[U] === U && m === q && ((d[K] = d[J]), (d[ie] = d[R])),
                  m === C && y instanceof Error)
                ) {
                  var D =
                    t.currentTask &&
                    t.currentTask.data &&
                    t.currentTask.data[P];
                  D &&
                    l(y, N, {
                      configurable: !0,
                      enumerable: !1,
                      writable: !0,
                      value: D,
                    });
                }
                for (var j = 0; j < Z.length; )
                  ae(d, Z[j++], Z[j++], Z[j++], Z[j++]);
                if (0 == Z.length && m == C) {
                  d[K] = ee;
                  var H = y;
                  try {
                    throw new Error(
                      "Uncaught (in promise): " +
                        (function f(d) {
                          return d && d.toString === Object.prototype.toString
                            ? ((d.constructor && d.constructor.name) || "") +
                                ": " +
                                JSON.stringify(d)
                            : d
                            ? d.toString()
                            : Object.prototype.toString.call(d);
                        })(y) +
                        (y && y.stack ? "\n" + y.stack : "")
                    );
                  } catch (B) {
                    H = B;
                  }
                  b && (H.throwOriginal = !0),
                    (H.rejection = y),
                    (H.promise = d),
                    (H.zone = t.current),
                    (H.task = t.currentTask),
                    E.push(H),
                    r.scheduleMicroTask();
                }
              }
            }
            return d;
          }
          var Q = p("rejectionHandledHandler");
          function ye(d) {
            if (d[K] === ee) {
              try {
                var m = t[Q];
                m &&
                  "function" == typeof m &&
                  m.call(this, { rejection: d[ie], promise: d });
              } catch {}
              d[K] = C;
              for (var y = 0; y < E.length; y++)
                d === E[y].promise && E.splice(y, 1);
            }
          }
          function ae(d, m, y, v, w) {
            ye(d);
            var Z = d[K],
              D = Z
                ? "function" == typeof v
                  ? v
                  : $
                : "function" == typeof w
                ? w
                : ce;
            m.scheduleMicroTask(
              G,
              function () {
                try {
                  var j = d[ie],
                    H = !!y && U === y[U];
                  H && ((y[R] = j), (y[J] = Z));
                  var B = m.run(D, void 0, H && D !== ce && D !== $ ? [] : [j]);
                  te(y, !0, B);
                } catch (z) {
                  te(y, !1, z);
                }
              },
              y
            );
          }
          var _ = function () {},
            i = e.AggregateError,
            s = (function () {
              function d(m) {
                var y = this;
                if (!(y instanceof d))
                  throw new Error("Must be an instanceof Promise.");
                (y[K] = X), (y[ie] = []);
                try {
                  var v = M();
                  m && m(v(x(y, q)), v(x(y, C)));
                } catch (w) {
                  te(y, !1, w);
                }
              }
              return (
                (d.toString = function () {
                  return "function ZoneAwarePromise() { [native code] }";
                }),
                (d.resolve = function (m) {
                  return te(new this(null), q, m);
                }),
                (d.reject = function (m) {
                  return te(new this(null), C, m);
                }),
                (d.any = function (m) {
                  if (!m || "function" != typeof m[Symbol.iterator])
                    return Promise.reject(
                      new i([], "All promises were rejected")
                    );
                  var y = [],
                    v = 0;
                  try {
                    for (var w = 0, Z = m; w < Z.length; w++)
                      v++, y.push(d.resolve(Z[w]));
                  } catch {
                    return Promise.reject(
                      new i([], "All promises were rejected")
                    );
                  }
                  if (0 === v)
                    return Promise.reject(
                      new i([], "All promises were rejected")
                    );
                  var j = !1,
                    H = [];
                  return new d(function (B, z) {
                    for (var oe = 0; oe < y.length; oe++)
                      y[oe].then(
                        function (pe) {
                          j || ((j = !0), B(pe));
                        },
                        function (pe) {
                          H.push(pe),
                            0 == --v &&
                              ((j = !0),
                              z(new i(H, "All promises were rejected")));
                        }
                      );
                  });
                }),
                (d.race = function (m) {
                  var y,
                    v,
                    w = new this(function (z, oe) {
                      (y = z), (v = oe);
                    });
                  function Z(z) {
                    y(z);
                  }
                  function D(z) {
                    v(z);
                  }
                  for (var j = 0, H = m; j < H.length; j++) {
                    var B = H[j];
                    L(B) || (B = this.resolve(B)), B.then(Z, D);
                  }
                  return w;
                }),
                (d.all = function (m) {
                  return d.allWithCallback(m);
                }),
                (d.allSettled = function (m) {
                  return (
                    this && this.prototype instanceof d ? this : d
                  ).allWithCallback(m, {
                    thenCallback: function (v) {
                      return { status: "fulfilled", value: v };
                    },
                    errorCallback: function (v) {
                      return { status: "rejected", reason: v };
                    },
                  });
                }),
                (d.allWithCallback = function (m, y) {
                  for (
                    var v,
                      w,
                      Z = new this(function (he, de) {
                        (v = he), (w = de);
                      }),
                      D = 2,
                      j = 0,
                      H = [],
                      B = function (he) {
                        L(he) || (he = z.resolve(he));
                        var de = j;
                        try {
                          he.then(
                            function (ue) {
                              (H[de] = y ? y.thenCallback(ue) : ue),
                                0 == --D && v(H);
                            },
                            function (ue) {
                              y
                                ? ((H[de] = y.errorCallback(ue)),
                                  0 == --D && v(H))
                                : w(ue);
                            }
                          );
                        } catch (ue) {
                          w(ue);
                        }
                        D++, j++;
                      },
                      z = this,
                      oe = 0,
                      pe = m;
                    oe < pe.length;
                    oe++
                  )
                    B(pe[oe]);
                  return 0 == (D -= 2) && v(H), Z;
                }),
                Object.defineProperty(d.prototype, Symbol.toStringTag, {
                  get: function () {
                    return "Promise";
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(d.prototype, Symbol.species, {
                  get: function () {
                    return d;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (d.prototype.then = function (m, y) {
                  var v,
                    w =
                      null === (v = this.constructor) || void 0 === v
                        ? void 0
                        : v[Symbol.species];
                  (!w || "function" != typeof w) && (w = this.constructor || d);
                  var Z = new w(_),
                    D = t.current;
                  return (
                    this[K] == X
                      ? this[ie].push(D, Z, m, y)
                      : ae(this, D, Z, m, y),
                    Z
                  );
                }),
                (d.prototype.catch = function (m) {
                  return this.then(null, m);
                }),
                (d.prototype.finally = function (m) {
                  var y,
                    v =
                      null === (y = this.constructor) || void 0 === y
                        ? void 0
                        : y[Symbol.species];
                  (!v || "function" != typeof v) && (v = d);
                  var w = new v(_);
                  w[U] = U;
                  var Z = t.current;
                  return (
                    this[K] == X
                      ? this[ie].push(Z, w, m, m)
                      : ae(this, Z, w, m, m),
                    w
                  );
                }),
                d
              );
            })();
          (s.resolve = s.resolve),
            (s.reject = s.reject),
            (s.race = s.race),
            (s.all = s.all);
          var c = (e[S] = e.Promise);
          e.Promise = s;
          var I = p("thenPatched");
          function ne(d) {
            var m = d.prototype,
              y = o(m, "then");
            if (!y || (!1 !== y.writable && y.configurable)) {
              var v = m.then;
              (m[T] = v),
                (d.prototype.then = function (w, Z) {
                  var D = this;
                  return new s(function (H, B) {
                    v.call(D, H, B);
                  }).then(w, Z);
                }),
                (d[I] = !0);
            }
          }
          return (
            (r.patchThen = ne),
            c &&
              (ne(c),
              Pe(e, "fetch", function (d) {
                return (function Re(d) {
                  return function (m, y) {
                    var v = d.apply(m, y);
                    if (v instanceof s) return v;
                    var w = v.constructor;
                    return w[I] || ne(w), v;
                  };
                })(d);
              })),
            (Promise[t.__symbol__("uncaughtPromiseErrors")] = E),
            s
          );
        }),
          Zone.__load_patch("toString", function (e) {
            var t = Function.prototype.toString,
              r = V("OriginalDelegate"),
              o = V("Promise"),
              l = V("Error"),
              f = function () {
                if ("function" == typeof this) {
                  var S = this[r];
                  if (S)
                    return "function" == typeof S
                      ? t.call(S)
                      : Object.prototype.toString.call(S);
                  if (this === Promise) {
                    var T = e[o];
                    if (T) return t.call(T);
                  }
                  if (this === Error) {
                    var P = e[l];
                    if (P) return t.call(P);
                  }
                }
                return t.call(this);
              };
            (f[r] = t), (Function.prototype.toString = f);
            var p = Object.prototype.toString;
            Object.prototype.toString = function () {
              return "function" == typeof Promise && this instanceof Promise
                ? "[object Promise]"
                : p.call(this);
            };
          });
        var je = !1;
        if (typeof window < "u")
          try {
            var Ke = Object.defineProperty({}, "passive", {
              get: function () {
                je = !0;
              },
            });
            window.addEventListener("test", Ke, Ke),
              window.removeEventListener("test", Ke, Ke);
          } catch {
            je = !1;
          }
        var h,
          g,
          k,
          le,
          W,
          jt = { useG: !0 },
          ge = {},
          ht = {},
          Rt = new RegExp("^" + Be + "(\\w+)(true|false)$"),
          Ct = V("propagationStopped");
        function bt(e, t) {
          var r = (t ? t(e) : e) + Se,
            o = (t ? t(e) : e) + we,
            l = Be + r,
            f = Be + o;
          (ge[e] = {}), (ge[e][Se] = l), (ge[e][we] = f);
        }
        function It(e, t, r, o) {
          var l = (o && o.add) || Me,
            f = (o && o.rm) || it,
            p = (o && o.listeners) || "eventListeners",
            E = (o && o.rmAll) || "removeAllListeners",
            b = V(l),
            S = "." + l + ":",
            T = "prependListener",
            P = "." + T + ":",
            O = function (U, R, J) {
              if (!U.isRemoved) {
                var X,
                  G = U.callback;
                "object" == typeof G &&
                  G.handleEvent &&
                  ((U.callback = function (ee) {
                    return G.handleEvent(ee);
                  }),
                  (U.originalDelegate = G));
                try {
                  U.invoke(U, R, [J]);
                } catch (ee) {
                  X = ee;
                }
                var q = U.options;
                return (
                  q &&
                    "object" == typeof q &&
                    q.once &&
                    R[f].call(
                      R,
                      J.type,
                      U.originalDelegate ? U.originalDelegate : U.callback,
                      q
                    ),
                  X
                );
              }
            };
          function A(U, R, J) {
            if ((R = R || e.event)) {
              var G = U || R.target || e,
                X = G[ge[R.type][J ? we : Se]];
              if (X) {
                var q = [];
                if (1 === X.length) (C = O(X[0], G, R)) && q.push(C);
                else
                  for (
                    var ee = X.slice(), x = 0;
                    x < ee.length && (!R || !0 !== R[Ct]);
                    x++
                  ) {
                    var C;
                    (C = O(ee[x], G, R)) && q.push(C);
                  }
                if (1 === q.length) throw q[0];
                var M = function (F) {
                  var N = q[F];
                  t.nativeScheduleMicroTask(function () {
                    throw N;
                  });
                };
                for (x = 0; x < q.length; x++) M(x);
              }
            }
          }
          var L = function (U) {
              return A(this, U, !1);
            },
            $ = function (U) {
              return A(this, U, !0);
            };
          function ce(U, R) {
            if (!U) return !1;
            var J = !0;
            R && void 0 !== R.useG && (J = R.useG);
            var G = R && R.vh,
              X = !0;
            R && void 0 !== R.chkDup && (X = R.chkDup);
            var q = !1;
            R && void 0 !== R.rt && (q = R.rt);
            for (var C = U; C && !C.hasOwnProperty(l); ) C = xe(C);
            if ((!C && U[l] && (C = U), !C || C[b])) return !1;
            var Q,
              ee = R && R.eventNameToString,
              x = {},
              M = (C[b] = C[l]),
              F = (C[V(f)] = C[f]),
              N = (C[V(p)] = C[p]),
              te = (C[V(E)] = C[E]);
            R && R.prepend && (Q = C[V(R.prepend)] = C[R.prepend]);
            var c = J
                ? function (v) {
                    if (!x.isExisting)
                      return M.call(
                        x.target,
                        x.eventName,
                        x.capture ? $ : L,
                        x.options
                      );
                  }
                : function (v) {
                    return M.call(x.target, x.eventName, v.invoke, x.options);
                  },
              I = J
                ? function (v) {
                    if (!v.isRemoved) {
                      var w = ge[v.eventName],
                        Z = void 0;
                      w && (Z = w[v.capture ? we : Se]);
                      var D = Z && v.target[Z];
                      if (D)
                        for (var j = 0; j < D.length; j++)
                          if (D[j] === v) {
                            D.splice(j, 1),
                              (v.isRemoved = !0),
                              0 === D.length &&
                                ((v.allRemoved = !0), (v.target[Z] = null));
                            break;
                          }
                    }
                    if (v.allRemoved)
                      return F.call(
                        v.target,
                        v.eventName,
                        v.capture ? $ : L,
                        v.options
                      );
                  }
                : function (v) {
                    return F.call(v.target, v.eventName, v.invoke, v.options);
                  },
              Re =
                R && R.diff
                  ? R.diff
                  : function (v, w) {
                      var Z = typeof w;
                      return (
                        ("function" === Z && v.callback === w) ||
                        ("object" === Z && v.originalDelegate === w)
                      );
                    },
              d = Zone[V("UNPATCHED_EVENTS")],
              m = e[V("PASSIVE_EVENTS")],
              y = function (v, w, Z, D, j, H) {
                return (
                  void 0 === j && (j = !1),
                  void 0 === H && (H = !1),
                  function () {
                    var B = this || e,
                      z = arguments[0];
                    R && R.transferEventName && (z = R.transferEventName(z));
                    var oe = arguments[1];
                    if (!oe) return v.apply(this, arguments);
                    if (Xe && "uncaughtException" === z)
                      return v.apply(this, arguments);
                    var pe = !1;
                    if ("function" != typeof oe) {
                      if (!oe.handleEvent) return v.apply(this, arguments);
                      pe = !0;
                    }
                    if (!G || G(v, oe, B, arguments)) {
                      var Le = je && !!m && -1 !== m.indexOf(z),
                        he = (function ye(v, w) {
                          return !je && "object" == typeof v && v
                            ? !!v.capture
                            : je && w
                            ? "boolean" == typeof v
                              ? { capture: v, passive: !0 }
                              : v
                              ? "object" == typeof v && !1 !== v.passive
                                ? Object.assign(Object.assign({}, v), {
                                    passive: !0,
                                  })
                                : v
                              : { passive: !0 }
                            : v;
                        })(arguments[2], Le);
                      if (d)
                        for (var de = 0; de < d.length; de++)
                          if (z === d[de])
                            return Le
                              ? v.call(B, z, oe, he)
                              : v.apply(this, arguments);
                      var ue = !!he && ("boolean" == typeof he || he.capture),
                        tt = !(!he || "object" != typeof he) && he.once,
                        Qt = Zone.current,
                        Lt = ge[z];
                      Lt || (bt(z, ee), (Lt = ge[z]));
                      var Bt = Lt[ue ? we : Se],
                        rt = B[Bt],
                        Ft = !1;
                      if (rt) {
                        if (((Ft = !0), X))
                          for (de = 0; de < rt.length; de++)
                            if (Re(rt[de], oe)) return;
                      } else rt = B[Bt] = [];
                      var St,
                        Ut = B.constructor.name,
                        zt = ht[Ut];
                      zt && (St = zt[z]),
                        St || (St = Ut + w + (ee ? ee(z) : z)),
                        (x.options = he),
                        tt && (x.options.once = !1),
                        (x.target = B),
                        (x.capture = ue),
                        (x.eventName = z),
                        (x.isExisting = Ft);
                      var dt = J ? jt : void 0;
                      dt && (dt.taskData = x);
                      var He = Qt.scheduleEventTask(St, oe, dt, Z, D);
                      if (
                        ((x.target = null),
                        dt && (dt.taskData = null),
                        tt && (he.once = !0),
                        (!je && "boolean" == typeof He.options) ||
                          (He.options = he),
                        (He.target = B),
                        (He.capture = ue),
                        (He.eventName = z),
                        pe && (He.originalDelegate = oe),
                        H ? rt.unshift(He) : rt.push(He),
                        j)
                      )
                        return B;
                    }
                  }
                );
              };
            return (
              (C[l] = y(M, S, c, I, q)),
              Q &&
                (C[T] = y(
                  Q,
                  P,
                  function (v) {
                    return Q.call(x.target, x.eventName, v.invoke, x.options);
                  },
                  I,
                  q,
                  !0
                )),
              (C[f] = function () {
                var v = this || e,
                  w = arguments[0];
                R && R.transferEventName && (w = R.transferEventName(w));
                var Z = arguments[2],
                  D = !!Z && ("boolean" == typeof Z || Z.capture),
                  j = arguments[1];
                if (!j) return F.apply(this, arguments);
                if (!G || G(F, j, v, arguments)) {
                  var B,
                    H = ge[w];
                  H && (B = H[D ? we : Se]);
                  var z = B && v[B];
                  if (z)
                    for (var oe = 0; oe < z.length; oe++) {
                      var pe = z[oe];
                      if (Re(pe, j))
                        return (
                          z.splice(oe, 1),
                          (pe.isRemoved = !0),
                          0 === z.length &&
                            ((pe.allRemoved = !0),
                            (v[B] = null),
                            "string" == typeof w) &&
                            (v[Be + "ON_PROPERTY" + w] = null),
                          pe.zone.cancelTask(pe),
                          q ? v : void 0
                        );
                    }
                  return F.apply(this, arguments);
                }
              }),
              (C[p] = function () {
                var v = this || e,
                  w = arguments[0];
                R && R.transferEventName && (w = R.transferEventName(w));
                for (
                  var Z = [], D = Je(v, ee ? ee(w) : w), j = 0;
                  j < D.length;
                  j++
                ) {
                  var H = D[j];
                  Z.push(H.originalDelegate ? H.originalDelegate : H.callback);
                }
                return Z;
              }),
              (C[E] = function () {
                var v = this || e,
                  w = arguments[0];
                if (w) {
                  R && R.transferEventName && (w = R.transferEventName(w));
                  var z = ge[w];
                  if (z) {
                    var Le = v[z[Se]],
                      he = v[z[we]];
                    if (Le)
                      for (var de = Le.slice(), D = 0; D < de.length; D++)
                        this[f].call(
                          this,
                          w,
                          (ue = de[D]).originalDelegate
                            ? ue.originalDelegate
                            : ue.callback,
                          ue.options
                        );
                    if (he)
                      for (de = he.slice(), D = 0; D < de.length; D++) {
                        var ue;
                        this[f].call(
                          this,
                          w,
                          (ue = de[D]).originalDelegate
                            ? ue.originalDelegate
                            : ue.callback,
                          ue.options
                        );
                      }
                  }
                } else {
                  var Z = Object.keys(v);
                  for (D = 0; D < Z.length; D++) {
                    var H = Rt.exec(Z[D]),
                      B = H && H[1];
                    B && "removeListener" !== B && this[E].call(this, B);
                  }
                  this[E].call(this, "removeListener");
                }
                if (q) return this;
              }),
              Te(C[l], M),
              Te(C[f], F),
              te && Te(C[E], te),
              N && Te(C[p], N),
              !0
            );
          }
          for (var K = [], ie = 0; ie < r.length; ie++) K[ie] = ce(r[ie], o);
          return K;
        }
        function Je(e, t) {
          if (!t) {
            var r = [];
            for (var o in e) {
              var l = Rt.exec(o),
                f = l && l[1];
              if (f && (!t || f === t)) {
                var p = e[o];
                if (p) for (var E = 0; E < p.length; E++) r.push(p[E]);
              }
            }
            return r;
          }
          var b = ge[t];
          b || (bt(t), (b = ge[t]));
          var S = e[b[Se]],
            T = e[b[we]];
          return S ? (T ? S.concat(T) : S.slice()) : T ? T.slice() : [];
        }
        function Dt(e, t) {
          var r = e.Event;
          r &&
            r.prototype &&
            t.patchMethod(
              r.prototype,
              "stopImmediatePropagation",
              function (o) {
                return function (l, f) {
                  (l[Ct] = !0), o && o.apply(l, f);
                };
              }
            );
        }
        function kt(e, t, r, o, l) {
          var f = Zone.__symbol__(o);
          if (!t[f]) {
            var p = (t[f] = t[o]);
            (t[o] = function (E, b, S) {
              return (
                b &&
                  b.prototype &&
                  l.forEach(function (T) {
                    var P = "".concat(r, ".").concat(o, "::") + T,
                      O = b.prototype;
                    try {
                      if (O.hasOwnProperty(T)) {
                        var A = e.ObjectGetOwnPropertyDescriptor(O, T);
                        A && A.value
                          ? ((A.value = e.wrapWithCurrentZone(A.value, P)),
                            e._redefineProperty(b.prototype, T, A))
                          : O[T] && (O[T] = e.wrapWithCurrentZone(O[T], P));
                      } else O[T] && (O[T] = e.wrapWithCurrentZone(O[T], P));
                    } catch {}
                  }),
                p.call(t, E, b, S)
              );
            }),
              e.attachOriginToPatched(t[o], p);
          }
        }
        function Mt(e, t, r) {
          if (!r || 0 === r.length) return t;
          var o = r.filter(function (f) {
            return f.target === e;
          });
          if (!o || 0 === o.length) return t;
          var l = o[0].ignoreProperties;
          return t.filter(function (f) {
            return -1 === l.indexOf(f);
          });
        }
        function a(e, t, r, o) {
          e && ft(e, Mt(e, t, r), o);
        }
        function n(e) {
          return Object.getOwnPropertyNames(e)
            .filter(function (t) {
              return t.startsWith("on") && t.length > 2;
            })
            .map(function (t) {
              return t.substring(2);
            });
        }
        function u(e, t) {
          if ((!Xe || Et) && !Zone[e.symbol("patchEvents")]) {
            var r = t.__Zone_ignore_on_properties,
              o = [];
            if (Fe) {
              var l = window;
              o = o.concat([
                "Document",
                "SVGElement",
                "Element",
                "HTMLElement",
                "HTMLBodyElement",
                "HTMLMediaElement",
                "HTMLFrameSetElement",
                "HTMLFrameElement",
                "HTMLIFrameElement",
                "HTMLMarqueeElement",
                "Worker",
              ]);
              var f = (function Pt() {
                try {
                  var e = Ne.navigator.userAgent;
                  if (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/"))
                    return !0;
                } catch {}
                return !1;
              })()
                ? [{ target: l, ignoreProperties: ["error"] }]
                : [];
              a(l, n(l), r && r.concat(f), xe(l));
            }
            o = o.concat([
              "XMLHttpRequest",
              "XMLHttpRequestEventTarget",
              "IDBIndex",
              "IDBRequest",
              "IDBOpenDBRequest",
              "IDBDatabase",
              "IDBTransaction",
              "IDBCursor",
              "WebSocket",
            ]);
            for (var p = 0; p < o.length; p++) {
              var E = t[o[p]];
              E && E.prototype && a(E.prototype, n(E.prototype), r);
            }
          }
        }
        function ve(e, t, r) {
          var o = r.configurable;
          return ze(e, t, (r = Ae(e, t, r)), o);
        }
        function Ze(e, t) {
          return e && e[W] && e[W][t];
        }
        function Ae(e, t, r) {
          return (
            Object.isFrozen(r) || (r.configurable = !0),
            r.configurable ||
              (!e[W] &&
                !Object.isFrozen(e) &&
                g(e, W, { writable: !0, value: {} }),
              e[W] && (e[W][t] = !0)),
            r
          );
        }
        function ze(e, t, r, o) {
          try {
            return g(e, t, r);
          } catch (p) {
            if (!r.configurable) throw p;
            typeof o > "u" ? delete r.configurable : (r.configurable = o);
            try {
              return g(e, t, r);
            } catch (E) {
              var l = !1;
              if (
                (("createdCallback" === t ||
                  "attachedCallback" === t ||
                  "detachedCallback" === t ||
                  "attributeChangedCallback" === t) &&
                  (l = !0),
                !l)
              )
                throw E;
              var f = null;
              try {
                f = JSON.stringify(r);
              } catch {
                f = r.toString();
              }
              console.log(
                "Attempting to configure '"
                  .concat(t, "' with descriptor '")
                  .concat(f, "' on object '")
                  .concat(e, "' and got error, giving up: ")
                  .concat(E)
              );
            }
          }
        }
        function Qe(e, t) {
          var r = e.getGlobalObjects();
          if (
            (!r.isNode || r.isMix) &&
            !(function fe(e, t) {
              var r = e.getGlobalObjects();
              if (
                (r.isBrowser || r.isMix) &&
                !e.ObjectGetOwnPropertyDescriptor(
                  HTMLElement.prototype,
                  "onclick"
                ) &&
                typeof Element < "u"
              ) {
                var f = e.ObjectGetOwnPropertyDescriptor(
                  Element.prototype,
                  "onclick"
                );
                if (f && !f.configurable) return !1;
                if (f) {
                  e.ObjectDefineProperty(Element.prototype, "onclick", {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                      return !0;
                    },
                  });
                  var E = !!document.createElement("div").onclick;
                  return (
                    e.ObjectDefineProperty(Element.prototype, "onclick", f), E
                  );
                }
              }
              var b = t.XMLHttpRequest;
              if (!b) return !1;
              var S = "onreadystatechange",
                T = b.prototype,
                P = e.ObjectGetOwnPropertyDescriptor(T, S);
              if (P)
                return (
                  e.ObjectDefineProperty(T, S, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                      return !0;
                    },
                  }),
                  (E = !!(O = new b()).onreadystatechange),
                  e.ObjectDefineProperty(T, S, P || {}),
                  E
                );
              var A = e.symbol("fake");
              e.ObjectDefineProperty(T, S, {
                enumerable: !0,
                configurable: !0,
                get: function () {
                  return this[A];
                },
                set: function (K) {
                  this[A] = K;
                },
              });
              var O,
                L = function () {};
              return (
                ((O = new b()).onreadystatechange = L),
                (E = O[A] === L),
                (O.onreadystatechange = null),
                E
              );
            })(e, t)
          ) {
            var f = typeof WebSocket < "u";
            (function Xt(e) {
              for (
                var t = e.symbol("unbound"),
                  r = function (l) {
                    var f = Ht[l],
                      p = "on" + f;
                    self.addEventListener(
                      f,
                      function (E) {
                        var S,
                          T,
                          b = E.target;
                        for (
                          T = b ? b.constructor.name + "." + p : "unknown." + p;
                          b;

                        )
                          b[p] &&
                            !b[p][t] &&
                            (((S = e.wrapWithCurrentZone(b[p], T))[t] = b[p]),
                            (b[p] = S)),
                            (b = b.parentElement);
                      },
                      !0
                    );
                  },
                  o = 0;
                o < Ht.length;
                o++
              )
                r(o);
            })(e),
              e.patchClass("XMLHttpRequest"),
              f &&
                (function me(e, t) {
                  var r = e.getGlobalObjects(),
                    o = r.ADD_EVENT_LISTENER_STR,
                    l = r.REMOVE_EVENT_LISTENER_STR,
                    f = t.WebSocket;
                  t.EventTarget || e.patchEventTarget(t, e, [f.prototype]),
                    (t.WebSocket = function (b, S) {
                      var P,
                        O,
                        T = arguments.length > 1 ? new f(b, S) : new f(b),
                        A = e.ObjectGetOwnPropertyDescriptor(T, "onmessage");
                      return (
                        A && !1 === A.configurable
                          ? ((P = e.ObjectCreate(T)),
                            (O = T),
                            [o, l, "send", "close"].forEach(function (L) {
                              P[L] = function () {
                                var $ = e.ArraySlice.call(arguments);
                                if (L === o || L === l) {
                                  var ce = $.length > 0 ? $[0] : void 0;
                                  if (ce) {
                                    var K = Zone.__symbol__("ON_PROPERTY" + ce);
                                    T[K] = P[K];
                                  }
                                }
                                return T[L].apply(T, $);
                              };
                            }))
                          : (P = T),
                        e.patchOnProperties(
                          P,
                          ["close", "error", "message", "open"],
                          O
                        ),
                        P
                      );
                    });
                  var p = t.WebSocket;
                  for (var E in f) p[E] = f[E];
                })(e, t),
              (Zone[e.symbol("patchEvents")] = !0);
          }
        }
        Zone.__load_patch("util", function (e, t, r) {
          var o = n(e);
          (r.patchOnProperties = ft),
            (r.patchMethod = Pe),
            (r.bindArguments = We),
            (r.patchMacroTask = Ot);
          var l = t.__symbol__("BLACK_LISTED_EVENTS"),
            f = t.__symbol__("UNPATCHED_EVENTS");
          e[f] && (e[l] = e[f]),
            e[l] && (t[l] = t[f] = e[l]),
            (r.patchEventPrototype = Dt),
            (r.patchEventTarget = It),
            (r.isIEOrEdge = xt),
            (r.ObjectDefineProperty = _e),
            (r.ObjectGetOwnPropertyDescriptor = ke),
            (r.ObjectCreate = Ie),
            (r.ArraySlice = De),
            (r.patchClass = Ue),
            (r.wrapWithCurrentZone = st),
            (r.filterProperties = Mt),
            (r.attachOriginToPatched = Te),
            (r._redefineProperty = Object.defineProperty),
            (r.patchCallbacks = kt),
            (r.getGlobalObjects = function () {
              return {
                globalSources: ht,
                zoneSymbolEventNames: ge,
                eventNames: o,
                isBrowser: Fe,
                isMix: Et,
                isNode: Xe,
                TRUE_STR: we,
                FALSE_STR: Se,
                ZONE_SYMBOL_PREFIX: Be,
                ADD_EVENT_LISTENER_STR: Me,
                REMOVE_EVENT_LISTENER_STR: it,
              };
            });
        });
        var e,
          t,
          Ht = be(
            be(
              be(
                be(
                  be(
                    be(
                      be(
                        be(
                          [],
                          [
                            "abort",
                            "animationcancel",
                            "animationend",
                            "animationiteration",
                            "auxclick",
                            "beforeinput",
                            "blur",
                            "cancel",
                            "canplay",
                            "canplaythrough",
                            "change",
                            "compositionstart",
                            "compositionupdate",
                            "compositionend",
                            "cuechange",
                            "click",
                            "close",
                            "contextmenu",
                            "curechange",
                            "dblclick",
                            "drag",
                            "dragend",
                            "dragenter",
                            "dragexit",
                            "dragleave",
                            "dragover",
                            "drop",
                            "durationchange",
                            "emptied",
                            "ended",
                            "error",
                            "focus",
                            "focusin",
                            "focusout",
                            "gotpointercapture",
                            "input",
                            "invalid",
                            "keydown",
                            "keypress",
                            "keyup",
                            "load",
                            "loadstart",
                            "loadeddata",
                            "loadedmetadata",
                            "lostpointercapture",
                            "mousedown",
                            "mouseenter",
                            "mouseleave",
                            "mousemove",
                            "mouseout",
                            "mouseover",
                            "mouseup",
                            "mousewheel",
                            "orientationchange",
                            "pause",
                            "play",
                            "playing",
                            "pointercancel",
                            "pointerdown",
                            "pointerenter",
                            "pointerleave",
                            "pointerlockchange",
                            "mozpointerlockchange",
                            "webkitpointerlockerchange",
                            "pointerlockerror",
                            "mozpointerlockerror",
                            "webkitpointerlockerror",
                            "pointermove",
                            "pointout",
                            "pointerover",
                            "pointerup",
                            "progress",
                            "ratechange",
                            "reset",
                            "resize",
                            "scroll",
                            "seeked",
                            "seeking",
                            "select",
                            "selectionchange",
                            "selectstart",
                            "show",
                            "sort",
                            "stalled",
                            "submit",
                            "suspend",
                            "timeupdate",
                            "volumechange",
                            "touchcancel",
                            "touchmove",
                            "touchstart",
                            "touchend",
                            "transitioncancel",
                            "transitionend",
                            "waiting",
                            "wheel",
                          ],
                          !0
                        ),
                        [
                          "webglcontextrestored",
                          "webglcontextlost",
                          "webglcontextcreationerror",
                        ],
                        !0
                      ),
                      ["autocomplete", "autocompleteerror"],
                      !0
                    ),
                    ["toggle"],
                    !0
                  ),
                  [
                    "afterscriptexecute",
                    "beforescriptexecute",
                    "DOMContentLoaded",
                    "freeze",
                    "fullscreenchange",
                    "mozfullscreenchange",
                    "webkitfullscreenchange",
                    "msfullscreenchange",
                    "fullscreenerror",
                    "mozfullscreenerror",
                    "webkitfullscreenerror",
                    "msfullscreenerror",
                    "readystatechange",
                    "visibilitychange",
                    "resume",
                  ],
                  !0
                ),
                [
                  "absolutedeviceorientation",
                  "afterinput",
                  "afterprint",
                  "appinstalled",
                  "beforeinstallprompt",
                  "beforeprint",
                  "beforeunload",
                  "devicelight",
                  "devicemotion",
                  "deviceorientation",
                  "deviceorientationabsolute",
                  "deviceproximity",
                  "hashchange",
                  "languagechange",
                  "message",
                  "mozbeforepaint",
                  "offline",
                  "online",
                  "paint",
                  "pageshow",
                  "pagehide",
                  "popstate",
                  "rejectionhandled",
                  "storage",
                  "unhandledrejection",
                  "unload",
                  "userproximity",
                  "vrdisplayconnected",
                  "vrdisplaydisconnected",
                  "vrdisplaypresentchange",
                ],
                !0
              ),
              [
                "beforecopy",
                "beforecut",
                "beforepaste",
                "copy",
                "cut",
                "paste",
                "dragstart",
                "loadend",
                "animationstart",
                "search",
                "transitionrun",
                "transitionstart",
                "webkitanimationend",
                "webkitanimationiteration",
                "webkitanimationstart",
                "webkittransitionend",
              ],
              !0
            ),
            [
              "activate",
              "afterupdate",
              "ariarequest",
              "beforeactivate",
              "beforedeactivate",
              "beforeeditfocus",
              "beforeupdate",
              "cellchange",
              "controlselect",
              "dataavailable",
              "datasetchanged",
              "datasetcomplete",
              "errorupdate",
              "filterchange",
              "layoutcomplete",
              "losecapture",
              "move",
              "moveend",
              "movestart",
              "propertychange",
              "resizeend",
              "resizestart",
              "rowenter",
              "rowexit",
              "rowsdelete",
              "rowsinserted",
              "command",
              "compassneedscalibration",
              "deactivate",
              "help",
              "mscontentzoom",
              "msmanipulationstatechanged",
              "msgesturechange",
              "msgesturedoubletap",
              "msgestureend",
              "msgesturehold",
              "msgesturestart",
              "msgesturetap",
              "msgotpointercapture",
              "msinertiastart",
              "mslostpointercapture",
              "mspointercancel",
              "mspointerdown",
              "mspointerenter",
              "mspointerhover",
              "mspointerleave",
              "mspointermove",
              "mspointerout",
              "mspointerover",
              "mspointerup",
              "pointerout",
              "mssitemodejumplistitemremoved",
              "msthumbnailclick",
              "stop",
              "storagecommit",
            ],
            !0
          );
        (e =
          typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : typeof self < "u"
            ? self
            : {}),
          (t = e.__Zone_symbol_prefix || "__zone_symbol__"),
          (e[
            (function r(o) {
              return t + o;
            })("legacyPatch")
          ] = function () {
            var o = e.Zone;
            o.__load_patch("defineProperty", function (l, f, p) {
              (p._redefineProperty = ve),
                (function Y() {
                  (h = Zone.__symbol__),
                    (g = Object[h("defineProperty")] = Object.defineProperty),
                    (k = Object[h("getOwnPropertyDescriptor")] =
                      Object.getOwnPropertyDescriptor),
                    (le = Object.create),
                    (W = h("unconfigurables")),
                    (Object.defineProperty = function (e, t, r) {
                      if (Ze(e, t))
                        throw new TypeError(
                          "Cannot assign to read only property '" +
                            t +
                            "' of " +
                            e
                        );
                      var o = r.configurable;
                      return (
                        "prototype" !== t && (r = Ae(e, t, r)), ze(e, t, r, o)
                      );
                    }),
                    (Object.defineProperties = function (e, t) {
                      Object.keys(t).forEach(function (p) {
                        Object.defineProperty(e, p, t[p]);
                      });
                      for (
                        var r = 0, o = Object.getOwnPropertySymbols(t);
                        r < o.length;
                        r++
                      ) {
                        var l = o[r];
                        Object.getOwnPropertyDescriptor(t, l)?.enumerable &&
                          Object.defineProperty(e, l, t[l]);
                      }
                      return e;
                    }),
                    (Object.create = function (e, t) {
                      return (
                        "object" == typeof t &&
                          !Object.isFrozen(t) &&
                          Object.keys(t).forEach(function (r) {
                            t[r] = Ae(e, r, t[r]);
                          }),
                        le(e, t)
                      );
                    }),
                    (Object.getOwnPropertyDescriptor = function (e, t) {
                      var r = k(e, t);
                      return r && Ze(e, t) && (r.configurable = !1), r;
                    });
                })();
            }),
              o.__load_patch("registerElement", function (l, f, p) {
                !(function qt(e, t) {
                  var r = t.getGlobalObjects();
                  (r.isBrowser || r.isMix) &&
                    "registerElement" in e.document &&
                    t.patchCallbacks(
                      t,
                      document,
                      "Document",
                      "registerElement",
                      [
                        "createdCallback",
                        "attachedCallback",
                        "detachedCallback",
                        "attributeChangedCallback",
                      ]
                    );
                })(l, p);
              }),
              o.__load_patch("EventTargetLegacy", function (l, f, p) {
                (function vt(e, t) {
                  var r = t.getGlobalObjects(),
                    o = r.eventNames,
                    l = r.globalSources,
                    f = r.zoneSymbolEventNames,
                    p = r.TRUE_STR,
                    E = r.FALSE_STR,
                    b = r.ZONE_SYMBOL_PREFIX,
                    T =
                      "ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(
                        ","
                      ),
                    P = "EventTarget",
                    O = [],
                    A = e.wtf,
                    L =
                      "Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video".split(
                        ","
                      );
                  A
                    ? (O = L.map(function (ae) {
                        return "HTML" + ae + "Element";
                      }).concat(T))
                    : e[P]
                    ? O.push(P)
                    : (O = T);
                  for (
                    var $ = e.__Zone_disable_IE_check || !1,
                      ce = e.__Zone_enable_cross_context_check || !1,
                      K = t.isIEOrEdge(),
                      U = "[object FunctionWrapper]",
                      R =
                        "function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }",
                      J = {
                        MSPointerCancel: "pointercancel",
                        MSPointerDown: "pointerdown",
                        MSPointerEnter: "pointerenter",
                        MSPointerHover: "pointerhover",
                        MSPointerLeave: "pointerleave",
                        MSPointerMove: "pointermove",
                        MSPointerOut: "pointerout",
                        MSPointerOver: "pointerover",
                        MSPointerUp: "pointerup",
                      },
                      G = 0;
                    G < o.length;
                    G++
                  ) {
                    var ee = b + ((X = o[G]) + E),
                      x = b + (X + p);
                    (f[X] = {}), (f[X][E] = ee), (f[X][p] = x);
                  }
                  for (G = 0; G < L.length; G++)
                    for (
                      var M = L[G], F = (l[M] = {}), N = 0;
                      N < o.length;
                      N++
                    ) {
                      var X;
                      F[(X = o[N])] = M + ".addEventListener:" + X;
                    }
                  var Q = [];
                  for (G = 0; G < O.length; G++) {
                    var ye = e[O[G]];
                    Q.push(ye && ye.prototype);
                  }
                  return (
                    t.patchEventTarget(e, t, Q, {
                      vh: function (ae, re, _, i) {
                        if (!$ && K)
                          if (ce)
                            try {
                              if ((s = re.toString()) === U || s == R)
                                return ae.apply(_, i), !1;
                            } catch {
                              return ae.apply(_, i), !1;
                            }
                          else {
                            var s;
                            if ((s = re.toString()) === U || s == R)
                              return ae.apply(_, i), !1;
                          }
                        else if (ce)
                          try {
                            re.toString();
                          } catch {
                            return ae.apply(_, i), !1;
                          }
                        return !0;
                      },
                      transferEventName: function (ae) {
                        return J[ae] || ae;
                      },
                    }),
                    (Zone[t.symbol("patchEventTarget")] = !!e[P]),
                    !0
                  );
                })(l, p),
                  Qe(p, l);
              });
          });
        var wt = V("zoneTask");
        function et(e, t, r, o) {
          var l = null,
            f = null;
          r += o;
          var p = {};
          function E(S) {
            var T = S.data;
            return (
              (T.args[0] = function () {
                return S.invoke.apply(this, arguments);
              }),
              (T.handleId = l.apply(e, T.args)),
              S
            );
          }
          function b(S) {
            return f.call(e, S.data.handleId);
          }
          (l = Pe(e, (t += o), function (S) {
            return function (T, P) {
              if ("function" == typeof P[0]) {
                var O = {
                    isPeriodic: "Interval" === o,
                    delay:
                      "Timeout" === o || "Interval" === o ? P[1] || 0 : void 0,
                    args: P,
                  },
                  A = P[0];
                P[0] = function () {
                  try {
                    return A.apply(this, arguments);
                  } finally {
                    O.isPeriodic ||
                      ("number" == typeof O.handleId
                        ? delete p[O.handleId]
                        : O.handleId && (O.handleId[wt] = null));
                  }
                };
                var L = ct(t, P[0], O, E, b);
                if (!L) return L;
                var $ = L.data.handleId;
                return (
                  "number" == typeof $ ? (p[$] = L) : $ && ($[wt] = L),
                  $ &&
                    $.ref &&
                    $.unref &&
                    "function" == typeof $.ref &&
                    "function" == typeof $.unref &&
                    ((L.ref = $.ref.bind($)), (L.unref = $.unref.bind($))),
                  "number" == typeof $ || $ ? $ : L
                );
              }
              return S.apply(e, P);
            };
          })),
            (f = Pe(e, r, function (S) {
              return function (T, P) {
                var A,
                  O = P[0];
                "number" == typeof O ? (A = p[O]) : (A = O && O[wt]) || (A = O),
                  A && "string" == typeof A.type
                    ? "notScheduled" !== A.state &&
                      ((A.cancelFn && A.data.isPeriodic) || 0 === A.runCount) &&
                      ("number" == typeof O ? delete p[O] : O && (O[wt] = null),
                      A.zone.cancelTask(A))
                    : S.apply(e, P);
              };
            }));
        }
        Zone.__load_patch("legacy", function (e) {
          var t = e[Zone.__symbol__("legacyPatch")];
          t && t();
        }),
          Zone.__load_patch("queueMicrotask", function (e, t, r) {
            r.patchMethod(e, "queueMicrotask", function (o) {
              return function (l, f) {
                t.current.scheduleMicroTask("queueMicrotask", f[0]);
              };
            });
          }),
          Zone.__load_patch("timers", function (e) {
            var t = "set",
              r = "clear";
            et(e, t, r, "Timeout"),
              et(e, t, r, "Interval"),
              et(e, t, r, "Immediate");
          }),
          Zone.__load_patch("requestAnimationFrame", function (e) {
            et(e, "request", "cancel", "AnimationFrame"),
              et(e, "mozRequest", "mozCancel", "AnimationFrame"),
              et(e, "webkitRequest", "webkitCancel", "AnimationFrame");
          }),
          Zone.__load_patch("blocking", function (e, t) {
            for (
              var r = ["alert", "prompt", "confirm"], o = 0;
              o < r.length;
              o++
            )
              Pe(e, r[o], function (f, p, E) {
                return function (b, S) {
                  return t.current.run(f, e, S, E);
                };
              });
          }),
          Zone.__load_patch("EventTarget", function (e, t, r) {
            (function Jt(e, t) {
              t.patchEventPrototype(e, t);
            })(e, r),
              (function Kt(e, t) {
                if (!Zone[t.symbol("patchEventTarget")]) {
                  for (
                    var r = t.getGlobalObjects(),
                      o = r.eventNames,
                      l = r.zoneSymbolEventNames,
                      f = r.TRUE_STR,
                      p = r.FALSE_STR,
                      E = r.ZONE_SYMBOL_PREFIX,
                      b = 0;
                    b < o.length;
                    b++
                  ) {
                    var S = o[b],
                      O = E + (S + p),
                      A = E + (S + f);
                    (l[S] = {}), (l[S][p] = O), (l[S][f] = A);
                  }
                  var L = e.EventTarget;
                  if (L && L.prototype)
                    return t.patchEventTarget(e, t, [L && L.prototype]), !0;
                }
              })(e, r);
            var o = e.XMLHttpRequestEventTarget;
            o && o.prototype && r.patchEventTarget(e, r, [o.prototype]);
          }),
          Zone.__load_patch("MutationObserver", function (e, t, r) {
            Ue("MutationObserver"), Ue("WebKitMutationObserver");
          }),
          Zone.__load_patch("IntersectionObserver", function (e, t, r) {
            Ue("IntersectionObserver");
          }),
          Zone.__load_patch("FileReader", function (e, t, r) {
            Ue("FileReader");
          }),
          Zone.__load_patch("on_property", function (e, t, r) {
            u(r, e);
          }),
          Zone.__load_patch("customElements", function (e, t, r) {
            !(function Yt(e, t) {
              var r = t.getGlobalObjects();
              (r.isBrowser || r.isMix) &&
                e.customElements &&
                "customElements" in e &&
                t.patchCallbacks(
                  t,
                  e.customElements,
                  "customElements",
                  "define",
                  [
                    "connectedCallback",
                    "disconnectedCallback",
                    "adoptedCallback",
                    "attributeChangedCallback",
                  ]
                );
            })(e, r);
          }),
          Zone.__load_patch("XHR", function (e, t) {
            !(function b(S) {
              var T = S.XMLHttpRequest;
              if (T) {
                var P = T.prototype,
                  A = P[_t],
                  L = P[at];
                if (!A) {
                  var $ = S.XMLHttpRequestEventTarget;
                  if ($) {
                    var ce = $.prototype;
                    (A = ce[_t]), (L = ce[at]);
                  }
                }
                var K = "readystatechange",
                  ie = "scheduled",
                  G = Pe(P, "open", function () {
                    return function (M, F) {
                      return (M[o] = 0 == F[2]), (M[p] = F[1]), G.apply(M, F);
                    };
                  }),
                  q = V("fetchTaskAborting"),
                  C = V("fetchTaskScheduling"),
                  ee = Pe(P, "send", function () {
                    return function (M, F) {
                      if (!0 === t.current[C] || M[o]) return ee.apply(M, F);
                      var N = {
                          target: M,
                          url: M[p],
                          isPeriodic: !1,
                          args: F,
                          aborted: !1,
                        },
                        te = ct("XMLHttpRequest.send", R, N, U, J);
                      M &&
                        !0 === M[E] &&
                        !N.aborted &&
                        te.state === ie &&
                        te.invoke();
                    };
                  }),
                  x = Pe(P, "abort", function () {
                    return function (M, F) {
                      var N = (function O(M) {
                        return M[r];
                      })(M);
                      if (N && "string" == typeof N.type) {
                        if (null == N.cancelFn || (N.data && N.data.aborted))
                          return;
                        N.zone.cancelTask(N);
                      } else if (!0 === t.current[q]) return x.apply(M, F);
                    };
                  });
              }
              function U(M) {
                var F = M.data,
                  N = F.target;
                (N[f] = !1), (N[E] = !1);
                var te = N[l];
                A || ((A = N[_t]), (L = N[at])), te && L.call(N, K, te);
                var Q = (N[l] = function () {
                  if (N.readyState === N.DONE)
                    if (!F.aborted && N[f] && M.state === ie) {
                      var ae = N[t.__symbol__("loadfalse")];
                      if (0 !== N.status && ae && ae.length > 0) {
                        var re = M.invoke;
                        (M.invoke = function () {
                          for (
                            var _ = N[t.__symbol__("loadfalse")], i = 0;
                            i < _.length;
                            i++
                          )
                            _[i] === M && _.splice(i, 1);
                          !F.aborted && M.state === ie && re.call(M);
                        }),
                          ae.push(M);
                      } else M.invoke();
                    } else !F.aborted && !1 === N[f] && (N[E] = !0);
                });
                return (
                  A.call(N, K, Q),
                  N[r] || (N[r] = M),
                  ee.apply(N, F.args),
                  (N[f] = !0),
                  M
                );
              }
              function R() {}
              function J(M) {
                var F = M.data;
                return (F.aborted = !0), x.apply(F.target, F.args);
              }
            })(e);
            var r = V("xhrTask"),
              o = V("xhrSync"),
              l = V("xhrListener"),
              f = V("xhrScheduled"),
              p = V("xhrURL"),
              E = V("xhrErrorBeforeScheduled");
          }),
          Zone.__load_patch("geolocation", function (e) {
            e.navigator &&
              e.navigator.geolocation &&
              (function yt(e, t) {
                for (
                  var r = e.constructor.name,
                    o = function (f) {
                      var S,
                        T,
                        p = t[f],
                        E = e[p];
                      if (E) {
                        if (!Oe(ke(e, p))) return "continue";
                        e[p] =
                          ((T = function () {
                            return S.apply(this, We(arguments, r + "." + p));
                          }),
                          Te(T, (S = E)),
                          T);
                      }
                    },
                    l = 0;
                  l < t.length;
                  l++
                )
                  o(l);
              })(e.navigator.geolocation, [
                "getCurrentPosition",
                "watchPosition",
              ]);
          }),
          Zone.__load_patch("PromiseRejectionEvent", function (e, t) {
            function r(o) {
              return function (l) {
                Je(e, o).forEach(function (p) {
                  var E = e.PromiseRejectionEvent;
                  if (E) {
                    var b = new E(o, {
                      promise: l.promise,
                      reason: l.rejection,
                    });
                    p.invoke(b);
                  }
                });
              };
            }
            e.PromiseRejectionEvent &&
              ((t[V("unhandledPromiseRejectionHandler")] =
                r("unhandledrejection")),
              (t[V("rejectionHandledHandler")] = r("rejectionhandled")));
          });
      }),
        void 0 !== (ot = Ce.call(nt, pt, nt, $e)) && ($e.exports = ot);
    },
  },
  ($e) => {
    $e(($e.s = 1808));
  },
]);
