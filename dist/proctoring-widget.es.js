import on, { useState as k, useRef as j, useCallback as Y, useEffect as he, useMemo as un } from "react";
var Xt = { exports: {} }, Rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function ln() {
  if (tn) return Rt;
  tn = 1;
  var n = on, l = Symbol.for("react.element"), i = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(F, y, O) {
    var p, M = {}, I = null, q = null;
    O !== void 0 && (I = "" + O), y.key !== void 0 && (I = "" + y.key), y.ref !== void 0 && (q = y.ref);
    for (p in y) g.call(y, p) && !C.hasOwnProperty(p) && (M[p] = y[p]);
    if (F && F.defaultProps) for (p in y = F.defaultProps, y) M[p] === void 0 && (M[p] = y[p]);
    return { $$typeof: l, type: F, key: I, ref: q, props: M, _owner: m.current };
  }
  return Rt.Fragment = i, Rt.jsx = D, Rt.jsxs = D, Rt;
}
var Ct = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function dn() {
  return nn || (nn = 1, process.env.NODE_ENV !== "production" && function() {
    var n = on, l = Symbol.for("react.element"), i = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), F = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), ce = Symbol.iterator, me = "@@iterator";
    function ue(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ce && e[ce] || e[me];
      return typeof t == "function" ? t : null;
    }
    var $ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function B(e) {
      {
        for (var t = arguments.length, u = new Array(t > 1 ? t - 1 : 0), b = 1; b < t; b++)
          u[b - 1] = arguments[b];
        Fe("error", e, u);
      }
    }
    function Fe(e, t, u) {
      {
        var b = $.ReactDebugCurrentFrame, A = b.getStackAddendum();
        A !== "" && (t += "%s", u = u.concat([A]));
        var z = u.map(function(_) {
          return String(_);
        });
        z.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, z);
      }
    }
    var Me = !1, Be = !1, pe = !1, V = !1, R = !1, le;
    le = Symbol.for("react.module.reference");
    function ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === C || R || e === m || e === O || e === p || V || e === q || Me || Be || pe || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === M || e.$$typeof === D || e.$$typeof === F || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function je(e, t, u) {
      var b = e.displayName;
      if (b)
        return b;
      var A = t.displayName || t.name || "";
      return A !== "" ? u + "(" + A + ")" : u;
    }
    function Je(e) {
      return e.displayName || "Context";
    }
    function ye(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case i:
          return "Portal";
        case C:
          return "Profiler";
        case m:
          return "StrictMode";
        case O:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case F:
            var t = e;
            return Je(t) + ".Consumer";
          case D:
            var u = e;
            return Je(u._context) + ".Provider";
          case y:
            return je(e, e.render, "ForwardRef");
          case M:
            var b = e.displayName || null;
            return b !== null ? b : ye(e.type) || "Memo";
          case I: {
            var A = e, z = A._payload, _ = A._init;
            try {
              return ye(_(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, Re = 0, st, ct, Xe, Ze, o, f, v;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function W() {
      {
        if (Re === 0) {
          st = console.log, ct = console.info, Xe = console.warn, Ze = console.error, o = console.group, f = console.groupCollapsed, v = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Re++;
      }
    }
    function Ge() {
      {
        if (Re--, Re === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, e, {
              value: st
            }),
            info: de({}, e, {
              value: ct
            }),
            warn: de({}, e, {
              value: Xe
            }),
            error: de({}, e, {
              value: Ze
            }),
            group: de({}, e, {
              value: o
            }),
            groupCollapsed: de({}, e, {
              value: f
            }),
            groupEnd: de({}, e, {
              value: v
            })
          });
        }
        Re < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = $.ReactCurrentDispatcher, ve;
    function pt(e, t, u) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (A) {
            var b = A.stack.trim().match(/\n( *(at )?)/);
            ve = b && b[1] || "";
          }
        return `
` + ve + e;
      }
    }
    var gt = !1, yt;
    {
      var Tt = typeof WeakMap == "function" ? WeakMap : Map;
      yt = new Tt();
    }
    function vt(e, t) {
      if (!e || gt)
        return "";
      {
        var u = yt.get(e);
        if (u !== void 0)
          return u;
      }
      var b;
      gt = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = Ce.current, Ce.current = null, W();
      try {
        if (t) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (S) {
              b = S;
            }
            Reflect.construct(e, [], _);
          } else {
            try {
              _.call();
            } catch (S) {
              b = S;
            }
            e.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            b = S;
          }
          e();
        }
      } catch (S) {
        if (S && b && typeof S.stack == "string") {
          for (var T = S.stack.split(`
`), r = b.stack.split(`
`), a = T.length - 1, s = r.length - 1; a >= 1 && s >= 0 && T[a] !== r[s]; )
            s--;
          for (; a >= 1 && s >= 0; a--, s--)
            if (T[a] !== r[s]) {
              if (a !== 1 || s !== 1)
                do
                  if (a--, s--, s < 0 || T[a] !== r[s]) {
                    var c = `
` + T[a].replace(" at new ", " at ");
                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), typeof e == "function" && yt.set(e, c), c;
                  }
                while (a >= 1 && s >= 0);
              break;
            }
        }
      } finally {
        gt = !1, Ce.current = z, Ge(), Error.prepareStackTrace = A;
      }
      var x = e ? e.displayName || e.name : "", w = x ? pt(x) : "";
      return typeof e == "function" && yt.set(e, w), w;
    }
    function Gt(e, t, u) {
      return vt(e, !1);
    }
    function _t(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Qe(e, t, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return vt(e, _t(e));
      if (typeof e == "string")
        return pt(e);
      switch (e) {
        case O:
          return pt("Suspense");
        case p:
          return pt("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Gt(e.render);
          case M:
            return Qe(e.type, t, u);
          case I: {
            var b = e, A = b._payload, z = b._init;
            try {
              return Qe(z(A), t, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, kt = {}, Yt = $.ReactDebugCurrentFrame;
    function ut(e) {
      if (e) {
        var t = e._owner, u = Qe(e.type, e._source, t ? t.type : null);
        Yt.setExtraStackFrame(u);
      } else
        Yt.setExtraStackFrame(null);
    }
    function Te(e, t, u, b, A) {
      {
        var z = Function.call.bind(Ye);
        for (var _ in e)
          if (z(e, _)) {
            var T = void 0;
            try {
              if (typeof e[_] != "function") {
                var r = Error((b || "React class") + ": " + u + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw r.name = "Invariant Violation", r;
              }
              T = e[_](t, _, b, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (a) {
              T = a;
            }
            T && !(T instanceof Error) && (ut(A), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", u, _, typeof T), ut(null)), T instanceof Error && !(T.message in kt) && (kt[T.message] = !0, ut(A), B("Failed %s type: %s", u, T.message), ut(null));
          }
      }
    }
    var lt = Array.isArray;
    function dt(e) {
      return lt(e);
    }
    function wt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, u = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function $e(e) {
      try {
        return et(e), !1;
      } catch {
        return !0;
      }
    }
    function et(e) {
      return "" + e;
    }
    function Ft(e) {
      if ($e(e))
        return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wt(e)), et(e);
    }
    var xt = $.ReactCurrentOwner, jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, fe;
    function Se(e) {
      if (Ye.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function bt(e) {
      if (Ye.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Dt(e, t) {
      typeof e.ref == "string" && xt.current;
    }
    function At(e, t) {
      {
        var u = function() {
          _e || (_e = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function ft(e, t) {
      {
        var u = function() {
          fe || (fe = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var St = function(e, t, u, b, A, z, _) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: u,
        props: _,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function ht(e, t, u, b, A) {
      {
        var z, _ = {}, T = null, r = null;
        u !== void 0 && (Ft(u), T = "" + u), bt(t) && (Ft(t.key), T = "" + t.key), Se(t) && (r = t.ref, Dt(t, A));
        for (z in t)
          Ye.call(t, z) && !jt.hasOwnProperty(z) && (_[z] = t[z]);
        if (e && e.defaultProps) {
          var a = e.defaultProps;
          for (z in a)
            _[z] === void 0 && (_[z] = a[z]);
        }
        if (T || r) {
          var s = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          T && At(_, s), r && ft(_, s);
        }
        return St(e, T, r, A, b, xt.current, _);
      }
    }
    var se = $.ReactCurrentOwner, ne = $.ReactDebugCurrentFrame;
    function De(e) {
      if (e) {
        var t = e._owner, u = Qe(e.type, e._source, t ? t.type : null);
        ne.setExtraStackFrame(u);
      } else
        ne.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function mt(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Et() {
      {
        if (se.current) {
          var e = ye(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function $t(e) {
      return "";
    }
    var Ot = {};
    function Pt(e) {
      {
        var t = Et();
        if (!t) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (t = `

Check the top-level render call using <` + u + ">.");
        }
        return t;
      }
    }
    function tt(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Pt(t);
        if (Ot[u])
          return;
        Ot[u] = !0;
        var b = "";
        e && e._owner && e._owner !== se.current && (b = " It was passed a child from " + ye(e._owner.type) + "."), De(e), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, b), De(null);
      }
    }
    function Mt(e, t) {
      {
        if (typeof e != "object")
          return;
        if (dt(e))
          for (var u = 0; u < e.length; u++) {
            var b = e[u];
            mt(b) && tt(b, t);
          }
        else if (mt(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var A = ue(e);
          if (typeof A == "function" && A !== e.entries)
            for (var z = A.call(e), _; !(_ = z.next()).done; )
              mt(_.value) && tt(_.value, t);
        }
      }
    }
    function It(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var u;
        if (typeof t == "function")
          u = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === M))
          u = t.propTypes;
        else
          return;
        if (u) {
          var b = ye(t);
          Te(u, e.props, "prop", b, e);
        } else if (t.PropTypes !== void 0 && !ke) {
          ke = !0;
          var A = ye(t);
          B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zt(e) {
      {
        for (var t = Object.keys(e.props), u = 0; u < t.length; u++) {
          var b = t[u];
          if (b !== "children" && b !== "key") {
            De(e), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), De(null);
            break;
          }
        }
        e.ref !== null && (De(e), B("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    var Ae = {};
    function Oe(e, t, u, b, A, z) {
      {
        var _ = ge(e);
        if (!_) {
          var T = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var r = $t();
          r ? T += r : T += Et();
          var a;
          e === null ? a = "null" : dt(e) ? a = "array" : e !== void 0 && e.$$typeof === l ? (a = "<" + (ye(e.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, B("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", a, T);
        }
        var s = ht(e, t, u, A, z);
        if (s == null)
          return s;
        if (_) {
          var c = t.children;
          if (c !== void 0)
            if (b)
              if (dt(c)) {
                for (var x = 0; x < c.length; x++)
                  Mt(c[x], e);
                Object.freeze && Object.freeze(c);
              } else
                B("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mt(c, e);
        }
        if (Ye.call(t, "key")) {
          var w = ye(e), S = Object.keys(t).filter(function(Z) {
            return Z !== "key";
          }), L = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[w + L]) {
            var J = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            B(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, L, w, J, w), Ae[w + L] = !0;
          }
        }
        return e === g ? zt(s) : It(s), s;
      }
    }
    function Ut(e, t, u) {
      return Oe(e, t, u, !0);
    }
    function Lt(e, t, u) {
      return Oe(e, t, u, !1);
    }
    var qt = Lt, Ht = Ut;
    Ct.Fragment = g, Ct.jsx = qt, Ct.jsxs = Ht;
  }()), Ct;
}
process.env.NODE_ENV === "production" ? Xt.exports = ln() : Xt.exports = dn();
var d = Xt.exports;
function an(n) {
  const l = window.AudioContext || window.webkitAudioContext, i = new l(), g = i.createMediaStreamSource(n), m = i.createAnalyser();
  m.fftSize = 2048, m.smoothingTimeConstant = 0.85, g.connect(m);
  const C = new Uint8Array(m.fftSize);
  function D() {
    m.getByteTimeDomainData(C);
    let F = 0;
    for (let y = 0; y < C.length; y++) {
      const O = (C[y] - 128) / 128;
      F += O * O;
    }
    return Math.sqrt(F / C.length);
  }
  return {
    getLevel: () => D(),
    dispose: async () => {
      try {
        g.disconnect();
      } catch {
      }
      try {
        m.disconnect();
      } catch {
      }
      try {
        await i.close();
      } catch {
      }
    }
  };
}
let Wt = null;
async function fn() {
  if (Wt) return Wt;
  const n = await import("./blazeface.esm-D5KORnOe.js"), l = await import("./index-2kM27Pi_.js");
  return l.ready && await l.ready(), Wt = await n.load(), Wt;
}
function rn(n, l, i) {
  if (n.width <= 0 || n.height <= 0 || l <= 0 || i <= 0) return !1;
  const g = Math.max(6, Math.floor(l * 0.06)), m = Math.max(6, Math.floor(i * 0.06));
  if (n.x < g || n.y < m || n.x + n.width > l - g || n.y + n.height > i - m) return !1;
  const C = n.width * n.height, D = l * i, F = C / D;
  if (F < 0.04 || F > 0.65) return !1;
  const y = n.width / n.height;
  return !(y < 0.6 || y > 1.6);
}
async function hn(n) {
  if ("FaceDetector" in window)
    try {
      const i = await new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }).detect(n);
      if (i && i.length > 0) {
        const g = i[0]?.boundingBox, m = n.videoWidth || n.width || 0, C = n.videoHeight || n.height || 0;
        if (g) {
          const D = { x: g.x, y: g.y, width: g.width, height: g.height };
          if (rn(D, m, C)) return { present: !0, confidence: 0.85 };
        }
      }
      return { present: !1, confidence: 0 };
    } catch {
    }
  try {
    const i = await (await fn()).estimateFaces(n, !1);
    if (i && i.length > 0) {
      const g = n.videoWidth || n.width || 0, m = n.videoHeight || n.height || 0;
      for (const C of i) {
        const [D, F] = C.topLeft, [y, O] = C.bottomRight, p = { x: D, y: F, width: y - D, height: O - F };
        if (rn(p, g, m)) {
          const M = C.probability ? C.probability[0] : 0.75;
          return { present: !0, confidence: Math.max(0.6, Math.min(1, M)) };
        }
      }
    }
  } catch {
  }
  return { present: !1, confidence: 0 };
}
function mn({ onComplete: n, onError: l }) {
  const i = ["camera", "microphone", "face", "monitor", "browser"], [g, m] = k({
    camera: "pending",
    microphone: "pending",
    face: "pending",
    monitor: "pending",
    browser: "pending"
  }), [C, D] = k(0), [F, y] = k(0), [O, p] = k({}), [M, I] = k({}), q = j(null), ce = j(null), me = j(null), ue = j(null), $ = j(null), B = () => {
    try {
      q.current?.getTracks().forEach((o) => o.stop());
    } catch {
    }
    try {
      ce.current?.getTracks().forEach((o) => o.stop());
    } catch {
    }
    q.current = null, ce.current = null, me.current && (me.current.dispose().catch(() => {
    }), me.current = null), ue.current && (cancelAnimationFrame(ue.current), ue.current = null);
  }, Fe = async (o) => {
    try {
      const f = window.AudioContext || window.webkitAudioContext;
      if (!f) throw new Error("AudioContext not supported");
      const v = new f(), G = v.createMediaStreamSource(o), W = v.createAnalyser();
      W.fftSize = 256, W.smoothingTimeConstant = 0.8, G.connect(W);
      const Ge = new Uint8Array(W.frequencyBinCount);
      W.getByteFrequencyData(Ge), sessionStorage.setItem("audio-context-initialized", "true"), G.disconnect(), await v.close(), typeof window < "u" && (window.precheckAudioStream = o);
    } catch {
      sessionStorage.setItem("audio-context-initialized", "false");
    }
  }, Me = async (o) => {
    const f = $.current;
    let v = 0, G = 0, W = 0;
    const Ge = 30;
    for (; W < Ge && v < 5; ) {
      try {
        const ve = await hn(f);
        ve.present && (v += 1, G = Math.max(G, ve.confidence));
      } catch {
      }
      W++, D(W), await new Promise((ve) => setTimeout(ve, 100));
    }
    return { status: v >= 5, confidence: G, timestamp: Date.now() };
  }, Be = () => {
    try {
      const o = window.screen.width, f = window.screen.height, v = window.screen.availWidth;
      return o / f > 3 || o > v * 1.5 || [3840, 3360, 2560, 4480, 5120].includes(o) ? 2 : 1;
    } catch {
      return 1;
    }
  }, pe = async () => Be(), V = () => [
    "navigator.mediaDevices",
    "navigator.mediaDevices.getUserMedia",
    "requestAnimationFrame",
    "WebAssembly"
  ].every((f) => {
    const v = f.split(".");
    let G = window;
    for (const W of v) {
      if (!(W in G)) return !1;
      G = G[W];
    }
    return !0;
  }), R = (o, f) => {
    m((v) => ({ ...v, [o]: f }));
  }, le = Y(async () => {
    R("camera", "running"), p((o) => ({ ...o, camera: "" }));
    try {
      try {
        q.current?.getTracks().forEach((f) => f.stop());
      } catch {
      }
      const o = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } }
      });
      if (q.current = o, !$.current) {
        const f = document.createElement("video");
        f.muted = !0, f.playsInline = !0, $.current = f;
      }
      $.current.srcObject = o;
      try {
        await $.current.play();
      } catch {
      }
      return I((f) => ({ ...f, cameraAccess: !0 })), R("camera", "passed"), !0;
    } catch (o) {
      const f = o?.name === "NotAllowedError" ? "Camera permission denied" : o?.message || "Camera access failed";
      return p((v) => ({ ...v, camera: f })), R("camera", "failed"), !1;
    }
  }, []), ge = Y(async () => {
    R("microphone", "running"), p((o) => ({ ...o, microphone: "" }));
    try {
      try {
        ce.current?.getTracks().forEach((f) => f.stop());
      } catch {
      }
      const o = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      ce.current = o, I((f) => ({ ...f, microphoneAccess: !0 })), await Fe(o);
      try {
        const f = an(o);
        me.current = f;
        const v = () => {
          y(f.getLevel()), ue.current = requestAnimationFrame(v);
        };
        ue.current = requestAnimationFrame(v);
      } catch {
      }
      return R("microphone", "passed"), !0;
    } catch (o) {
      const f = o?.name === "NotAllowedError" ? "Microphone permission denied" : o?.message || "Microphone access failed";
      return p((v) => ({ ...v, microphone: f })), R("microphone", "failed"), !1;
    }
  }, []), je = Y(async () => {
    R("face", "running"), p((o) => ({ ...o, face: "" }));
    try {
      if (!q.current) throw new Error("Camera is not initialized");
      const o = await Me(q.current);
      if (I((f) => ({ ...f, faceDetection: o })), o.status)
        return R("face", "passed"), !0;
      throw new Error("No face detected. Please align your face within the frame and retry.");
    } catch (o) {
      const f = o?.message || "Face detection failed";
      return p((v) => ({ ...v, face: f })), R("face", "failed"), !1;
    }
  }, []), Je = Y(async () => {
    R("monitor", "running"), p((o) => ({ ...o, monitor: "" }));
    try {
      const o = await pe();
      if (o && o > 1)
        throw I((f) => ({ ...f, monitorCount: o })), new Error("Multiple displays detected. Please remove external screens and keep only one display connected, then press Retry.");
      if (o === 1)
        return I((f) => ({ ...f, monitorCount: o })), R("monitor", "passed"), !0;
      throw new Error("Could not verify displays");
    } catch (o) {
      return p((f) => ({ ...f, monitor: o?.message || "Monitor verification failed" })), R("monitor", "failed"), !1;
    }
  }, []), ye = Y(async () => {
    R("browser", "running"), p((o) => ({ ...o, browser: "" }));
    try {
      const o = V();
      if (I((f) => ({ ...f, browserSupport: o })), !o) throw new Error("Required browser features are unavailable");
      return R("browser", "passed"), !0;
    } catch (o) {
      return p((f) => ({ ...f, browser: o?.message || "Browser not supported" })), R("browser", "failed"), !1;
    }
  }, []), de = {
    camera: le,
    microphone: ge,
    face: je,
    monitor: Je,
    browser: ye
  }, Re = Y(async (o) => {
    for (let f = o; f < i.length; f++) {
      const v = i[f];
      if (!await de[v]()) break;
    }
  }, [de]);
  he(() => {
    if (!i.every((v) => g[v] === "passed")) return;
    const f = {
      cameraAccess: !!M.cameraAccess,
      microphoneAccess: !!M.microphoneAccess,
      faceDetection: M.faceDetection || { status: !1, confidence: 0, timestamp: Date.now() },
      monitorCount: M.monitorCount || 1,
      browserSupport: !!M.browserSupport,
      codeEditorReady: !0
    };
    n(f), B();
  }, [g, M]), he(() => (Re(0), () => B()), []);
  const st = (o) => {
    const f = i.indexOf(o);
    m((v) => {
      const G = { ...v };
      for (let W = f; W < i.length; W++) G[i[W]] = "pending";
      return G;
    }), p((v) => ({ ...v, [o]: "" })), Re(f);
  }, ct = i.filter((o) => g[o] === "passed").length, Xe = i.some((o) => g[o] === "running"), Ze = Math.round((ct + (Xe ? 0.5 : 0)) / i.length * 100);
  return /* @__PURE__ */ d.jsx("div", { style: { fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#eff6ff,#eef2ff)" }, children: /* @__PURE__ */ d.jsxs("div", { style: { width: 720, maxWidth: "95vw", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { textAlign: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ d.jsx("h2", { style: { margin: 0, fontSize: 20, fontWeight: 700 }, children: "System Pre-Check" }),
      /* @__PURE__ */ d.jsx("p", { style: { color: "#6b7280" }, children: "Verifying your system for proctored assessment" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
        /* @__PURE__ */ d.jsx("span", { children: "Overall Progress" }),
        /* @__PURE__ */ d.jsxs("span", { children: [
          Ze,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ d.jsx("div", { style: { height: 8, background: "#f3f4f6", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ d.jsx("div", { style: { width: `${Ze}%`, height: 8, background: "#3b82f6" } }) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: { display: "grid", gap: 8 }, children: i.map((o) => {
      const f = o === "camera" ? "Camera Access" : o === "microphone" ? "Microphone Access" : o === "face" ? "Face Detection" : o === "monitor" ? "Single Monitor Check" : "Browser Support", v = g[o], G = v === "passed" ? "#ecfdf5" : v === "running" ? "#eff6ff" : v === "failed" ? "#fef2f2" : "#f9fafb", W = v === "passed" ? "#10b981" : v === "running" ? "#3b82f6" : v === "failed" ? "#dc2626" : "#9ca3af";
      return /* @__PURE__ */ d.jsxs("div", { style: { display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 12, alignItems: "center", padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", background: G }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { width: 12, height: 12, borderRadius: 9999, background: W } }),
        /* @__PURE__ */ d.jsxs("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: /* @__PURE__ */ d.jsx("div", { style: { fontWeight: 600, fontSize: 14 }, children: f }) }),
          o === "face" && /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center", marginTop: 8 }, children: [
            /* @__PURE__ */ d.jsx("video", { ref: $, muted: !0, playsInline: !0, autoPlay: !0, style: { width: 180, height: 112, background: "#000", borderRadius: 6 } }),
            v === "running" && /* @__PURE__ */ d.jsxs("div", { style: { color: "#6b7280", fontSize: 12 }, children: [
              "Analyzing frames: ",
              C
            ] })
          ] }),
          o === "microphone" && v !== "pending" && /* @__PURE__ */ d.jsx("div", { style: { marginTop: 6, width: 220, height: 8, background: "#e5e7eb", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ d.jsx("div", { style: { width: `${Math.min(100, Math.round(F * 200))}%`, height: 8, background: "#10b981", transition: "width 150ms" } }) }),
          O[o] && /* @__PURE__ */ d.jsx("div", { style: { marginTop: 6, color: "#dc2626", fontSize: 12 }, children: O[o] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 9999, background: v === "passed" ? "#111827" : v === "failed" ? "#fee2e2" : "#e5e7eb", color: v === "passed" ? "#fff" : "#111827" }, children: v === "passed" ? "Passed" : v === "running" ? "Checking…" : v === "failed" ? "Failed" : "Pending" }),
          v === "failed" && /* @__PURE__ */ d.jsx("button", { onClick: () => st(o), style: { fontSize: 12, padding: "6px 10px", borderRadius: 6, background: "#111827", color: "#fff", border: 0 }, children: "Retry" })
        ] })
      ] }, o);
    }) })
  ] }) });
}
let Jt = null;
async function pn() {
  return Jt || (Jt = (async () => {
    const n = globalThis;
    let l = n.Human || n.human || null;
    if (!l)
      try {
        const m = await new Function("m", "return import(m)")("@vladmandic/human");
        l = m?.default || m;
      } catch {
        return null;
      }
    const i = new l({
      backend: "webgl",
      cacheModels: !0,
      modelBasePath: "https://vladmandic.github.io/human/models",
      face: { enabled: !0, mesh: !0, iris: !1, attention: !0, description: !0, emotion: { enabled: !0 } },
      body: { enabled: !1 },
      hand: { enabled: !1 },
      object: { enabled: !1 },
      filter: { enabled: !0, equalization: !0, flip: !1, return: !0 },
      async: !0
    });
    try {
      await i.load();
    } catch {
      return null;
    }
    return i;
  })()), Jt;
}
async function gn(n) {
  try {
    const l = await pn();
    if (!l) return null;
    const g = (await l.detect(n)).face?.[0];
    if (!g || !g.emotion) return null;
    const m = {};
    for (const O of g.emotion)
      m[O.emotion] = O.score;
    const C = {
      happy: (m.happy || 0) + (m.joy || 0),
      surprised: m.surprised || 0,
      concerned: (m.sad || 0) + (m.angry || 0) + (m.fear || 0) + (m.disgust || 0),
      focused: (m.neutral || 0) * 0.6 + (m.surprised || 0) * 0.05,
      neutral: m.neutral || 0
    };
    let D = 0;
    if (Object.values(C).forEach((O) => {
      D += O;
    }), D <= 0) return null;
    Object.keys(C).forEach((O) => {
      C[O] = C[O] / D;
    });
    const F = Object.entries(C).reduce((O, p) => C[O[0]] > C[p[0]] ? O : p)[0], y = C[F];
    return { dominant: F, confidence: y, emotions: C };
  } catch {
    return null;
  }
}
function yn(n) {
  const { onEvent: l, context: i = "coding" } = n || {}, [g, m] = k("idle"), [C, D] = k(void 0), [F, y] = k(0), [O, p] = k(0), M = j(null), I = j(null), q = j(null), ce = j(!1), me = j(0), ue = j(0), $ = j(null), B = Y(() => {
    q.current && cancelAnimationFrame(q.current), q.current = null;
    try {
      M.current?.dispose();
    } catch {
    }
    M.current = null;
    try {
      I.current?.getTracks().forEach((V) => V.stop());
    } catch {
    }
    I.current = null, m("idle");
  }, []), Fe = Y(
    (V) => {
      const R = Date.now(), le = ce.current;
      V > 18 && R - me.current > 2e3 && (p((ge) => ge + 1), me.current = R, l?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: i,
        data: { level: V, reason: "audio_spike", faceDetected: le }
      })), le && V < 3 ? $.current == null ? $.current = R : R - $.current > 15e3 && (p((ge) => ge + 1), $.current = null, l?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: i,
        data: { level: V, reason: "extended_silence_with_face" }
      })) : V >= 3 && ($.current = null), !le && V > 12 && R - ue.current > 3e3 && (p((ge) => ge + 1), ue.current = R, l?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: i,
        data: { level: V, reason: "audio_without_face" }
      }));
    },
    [i, l]
  ), Me = Y(() => {
    try {
      if (!M.current) return;
      const V = M.current.getLevel(), R = Math.max(0, Math.min(100, Math.round(V * 160)));
      y(R), Fe(R);
    } finally {
      q.current = requestAnimationFrame(Me);
    }
  }, [Fe]), Be = Y(
    async (V) => {
      try {
        D(void 0), p(0), me.current = 0, ue.current = 0, $.current = null;
        let R = V;
        if (!R && typeof window < "u" && window.precheckAudioStream) {
          const je = window.precheckAudioStream;
          je?.active && je.getAudioTracks().length > 0 && (R = je);
        }
        R || (R = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0, sampleRate: 44100 }
        })), I.current = R;
        const le = R.getAudioTracks(), ge = le.length ? new MediaStream(le) : R;
        M.current = an(ge), m("running"), q.current = requestAnimationFrame(Me);
      } catch (R) {
        m("error"), D(R instanceof Error ? R.message : String(R));
      }
    },
    [Me]
  ), pe = Y((V) => {
    ce.current = V;
  }, []);
  return he(() => B, [B]), { status: g, error: C, level: F, anomalyCount: O, start: Be, stop: B, setFaceDetected: pe };
}
function vn({ monitoringStatus: n, sessionData: l, onStatusChange: i, onUpdateSession: g, onAddEvent: m, onAddSnapshot: C }) {
  const [D, F] = k({ x: typeof window < "u" ? window.innerWidth - 280 : 0, y: typeof window < "u" ? window.innerHeight - 400 : 0 }), [y, O] = k(!1), [p, M] = k({ x: 0, y: 0 }), [I, q] = k(0), [ce, me] = k(!1), [ue, $] = k(null), [B, Fe] = k(null), [Me, Be] = k(null), [pe, V] = k(0), [R, le] = k(0), [ge, je] = k([]), [Je, ye] = k(0), [de, Re] = k(0), [st, ct] = k(0), [Xe, Ze] = k(0), [o, f] = k(0), [v, G] = k(!1), [W, Ge] = k(null), [Ce, ve] = k(null), [pt, gt] = k(0), [yt, Tt] = k(0), [vt, Gt] = k(0), [_t, Qe] = k(null), [Ye, kt] = k(0), [Yt, ut] = k(0), Te = j(null), lt = j(null), dt = j(null), wt = j(null), $e = j(null), et = j(null), Ft = j(!1), xt = j(0), jt = j(0), _e = j("none"), fe = j({ noFace: 0, multipleFaces: 0 }), Se = j({ noFace: !1, multipleFaces: !1, gazeOff: !1 }), bt = j(null), Dt = j(0), At = j(null), ft = j([]), St = j(0), ht = j(!1), se = j({ yaw: 0, pitch: 0, roll: 0, initialized: !1 }), ne = j({ isGood: !0, goodStreak: 0, poorStreak: 0 }), De = 8, ke = 0.25, { level: mt, anomalyCount: Et, start: $t, stop: Ot, setFaceDetected: Pt } = yn({
    context: "coding",
    onEvent: (r) => m?.({ ...r, timestamp: Date.now() })
  });
  he(() => V(mt), [mt]), he(() => le(Et), [Et]);
  const tt = Y((r, a, s) => {
    const c = r.data, x = r.width, w = r.height;
    let S = 0, L = 0, J = 0;
    for (let E = 0; E < c.length; E += 4) {
      const be = c[E], K = c[E + 1], We = c[E + 2], Ke = (be + K + We) / 3;
      if (S += Ke, E > 0) {
        const it = (c[E - 4] + c[E - 3] + c[E - 2]) / 3;
        L += Math.abs(Ke - it);
      }
      if (E > x * 4 && E < c.length - x * 4) {
        const it = (c[E - x * 4] + c[E - x * 4 + 1] + c[E - x * 4 + 2]) / 3, cn = (c[E + x * 4] + c[E + x * 4 + 1] + c[E + x * 4 + 2]) / 3;
        (Math.abs(Ke - it) > 26 || Math.abs(Ke - cn) > 26) && J++;
      }
    }
    const Z = Math.max(1, c.length / 4), Ee = S / Z, U = L / Z, N = J / Z, H = s || null, Ue = H ? Math.min(45, Math.abs(H.yaw)) : 0, qe = H ? Math.min(45, Math.abs(H.pitch)) : 0, Pe = Math.floor(w * 0.62), He = Math.floor(x * 0.25), re = Math.ceil(x * 0.75);
    let h = 0, P = 0, ae = 0, X = 0;
    for (let E = Pe; E < w; E++)
      for (let be = He; be < re; be++) {
        const K = (E * x + be) * 4, We = (c[K] + c[K + 1] + c[K + 2]) / 3, Ke = (c[K - 4] + c[K - 3] + c[K - 2]) / 3, it = (c[K + 4] + c[K + 5] + c[K + 6]) / 3;
        (Math.abs(We - Ke) > 24 || Math.abs(We - it) > 24) && h++, We < 65 && ae++, We > 160 && X++, P++;
      }
    const Q = P ? h / P : 0, ee = P ? ae / P : 0, ie = P ? X / P : 0, oe = Math.max(0, Math.min(1, (Q - 0.01) / 0.07)), we = Math.floor(w * 0.38);
    let Ie = 0, ze = 0;
    for (let E = Math.max(0, Math.floor(w * 0.18)); E < we; E++)
      for (let be = 1; be < x - 1; be++) {
        const K = (E * x + be) * 4, We = (c[K] + c[K + 1] + c[K + 2]) / 3, Ke = (c[K - 4] + c[K - 3] + c[K - 2]) / 3, it = (c[K + 4] + c[K + 5] + c[K + 6]) / 3;
        (Math.abs(We - Ke) > 26 || Math.abs(We - it) > 26) && Ie++, ze++;
      }
    const nt = ze ? Ie / ze : 0, Le = Math.max(0, Math.min(1, (nt - 0.012) / 0.06)), te = Math.max(0, 1 - (Ue / 35 + qe / 30) / 2), rt = Math.max(0, Math.min(1, (U - 12) / 18)), Ne = oe > 0.22, Ve = ee > 0.12, Nt = Le > 0.2, ot = {
      neutral: 0.35 + 0.25 * te - 0.2 * Math.max(oe, Le) - 0.12 * N,
      happy: (Ne ? 0.18 : 0.05) + 0.55 * oe + (ie > 0.18 ? 0.05 : 0) - 0.15 * (1 - te),
      surprised: (Ne && Ve ? 0.16 : 0.04) + 0.5 * oe + (H && H.pitch > 10 ? 0.12 : 0) - 0.12 * (Ue / 45),
      focused: 0.18 + 0.55 * te + 0.2 * rt - 0.15 * oe,
      concerned: (Nt ? 0.16 : 0.06) + 0.55 * Le + (Ee < 110 ? 0.1 : 0) + (H && H.pitch < -10 ? 0.1 : 0) - 0.08 * oe
    }, at = Object.keys(ot);
    let Zt = 0;
    at.forEach((E) => {
      ot[E] = Math.max(1e-3, ot[E]), Zt += ot[E];
    });
    const Vt = {};
    at.forEach((E) => {
      Vt[E] = Math.max(0.02, Math.min(0.98, ot[E] / Zt));
    });
    const Qt = 0.35;
    let xe;
    bt.current ? (xe = {}, at.forEach((E) => {
      xe[E] = (1 - Qt) * bt.current[E] + Qt * Vt[E];
    })) : xe = { ...Vt };
    let Kt = 0;
    at.forEach((E) => {
      Kt += xe[E];
    }), Kt > 0 && at.forEach((E) => {
      xe[E] = xe[E] / Kt;
    }), bt.current = xe;
    const en = Object.entries(xe).reduce((E, be) => xe[E[0]] > xe[be[0]] ? E : be)[0], sn = xe[en];
    return { dominant: en, confidence: sn, emotions: xe };
  }, []), Mt = Y((r, a) => {
    const s = a.data, c = a.width, x = a.height, w = Math.max(0, Math.floor(r.x - r.width * 0.2)), S = Math.min(c, Math.floor(r.x + r.width * 1.2)), L = Math.min(x - 1, Math.floor(r.y + r.height * 1.05)), J = Math.min(x, L + Math.floor(r.height * 1.6));
    if (J <= L || S <= w) return { isProfessional: !1, hasShirt: !1, confidence: 0.4, details: "Insufficient torso ROI" };
    let Z = 0, Ee = 0, U = 0, N = 0, H = 0;
    const Ue = Math.floor((w + S) / 2);
    for (let X = L; X < J; X++)
      for (let Q = w; Q < S; Q++) {
        const ee = (X * c + Q) * 4, ie = s[ee], oe = s[ee + 1], we = s[ee + 2], Ie = Math.max(ie, oe, we), ze = Math.min(ie, oe, we), nt = Ie, Le = Ie ? (Ie - ze) / Ie : 0;
        if (nt > 60 && nt < 210 && Le < 0.45 && ie > 40 && oe > 20 && we > 20 && ie > we) continue;
        if ((ie + oe + we) / 3 < 105 && Z++, (Math.abs(ie - oe) > 28 || Math.abs(oe - we) > 28) && Ee++, U += Le, N++, X < L + (J - L) * 0.35 && Math.abs(Q - Ue) < Math.max(6, Math.floor(r.width * 0.08)) && Q > w + 1 && Q < S - 1) {
          const Ne = (X * c + (Q - 1)) * 4, Ve = (X * c + (Q + 1)) * 4, Nt = (ie + oe + we) / 3, ot = (s[Ne] + s[Ne + 1] + s[Ne + 2]) / 3, at = (s[Ve] + s[Ve + 1] + s[Ve + 2]) / 3;
          (Math.abs(Nt - ot) > 28 || Math.abs(Nt - at) > 28) && H++;
        }
      }
    if (!N) return { isProfessional: !1, hasShirt: !1, confidence: 0.4, details: "Insufficient torso pixels" };
    const qe = Z / N, Pe = Ee / N, He = U / N, re = H / N, h = qe > 0.18 || He < 0.35, P = qe > 0.35 && Pe < 0.22 || He < 0.28 && Pe < 0.18 || re > 2e-3, ae = Math.max(0.5, Math.min(0.95, 0.55 + (h ? 0.15 : 0) + (P ? 0.15 : 0) - Pe * 0.2));
    return { isProfessional: P, hasShirt: h, confidence: ae, details: P ? "Professional attire (solid/low-saturation)" : h ? "Casual attire" : "Torso not clearly visible" };
  }, []), It = Y((r, a, s) => {
    const c = r.x + r.width / 2, x = r.y + r.height / 2, w = (c - a / 2) / a, S = (x - s / 2) / s, L = Math.sqrt(w * w + S * S), J = L < 0.15, Z = Math.max(0, 1 - L * 2);
    return { isLookingAtCamera: J, gazeDirection: { x: w, y: S }, confidence: 0.8, attentionScore: Z };
  }, []), zt = Y((r) => {
    if (!r.landmarks || r.landmarks.length < 4) return null;
    const a = r.landmarks, s = a[0], c = a[1], x = a[2], w = a[3] ?? [(c[0] + s[0]) / 2, Math.max(c[1], s[1]) + r.height * 0.2], S = [(c[0] + s[0]) / 2, (c[1] + s[1]) / 2], L = c[0] - s[0], J = c[1] - s[1], Z = Math.max(1, Math.hypot(L, J)), Ee = Math.atan2(J, L) * 180 / Math.PI, U = Math.hypot(x[0] - s[0], x[1] - s[1]), N = Math.hypot(x[0] - c[0], x[1] - c[1]), H = (U - N) / Z, Ue = Math.max(-45, Math.min(45, H * 90)), qe = Math.max(1, x[1] - S[1]), Pe = Math.max(1, (w[1] ?? S[1]) - x[1]), He = (qe - Pe) / r.height, re = Math.max(-45, Math.min(45, He * 180)), h = Math.abs(Ee) > 20, P = Math.abs(H) > 0.18, ae = Math.abs(re) > 15, X = P || ae || h, Q = Math.max(0.5, Math.min(1, Math.max(
      Math.abs(H) * 2,
      Math.abs(Ee) / 30,
      Math.abs(re) / 30
    )));
    return { yaw: Ue, pitch: re, roll: Ee, isHeadTurned: X, confidence: Q };
  }, []), Ae = Y((r = 0.8) => {
    const a = Te.current, s = lt.current;
    if (!a || !s) return null;
    const c = a.videoWidth || 320, x = a.videoHeight || 240;
    if (a.readyState < 2) return null;
    s.width = c, s.height = x;
    const w = s.getContext("2d");
    if (!w) return null;
    w.drawImage(a, 0, 0, c, x);
    try {
      return s.toDataURL("image/jpeg", r);
    } catch {
      return null;
    }
  }, []), Oe = Y((r) => {
    if (C) {
      C(r);
      return;
    }
    if (g) {
      let s = [...l?.snapshots || [], r];
      s.length > 50 && (s = s.slice(s.length - 50)), g({ snapshots: s });
    }
  }, [C, g, l?.snapshots]), Ut = Y(() => {
    if (St.current >= 5 || ht.current) return;
    ht.current = !0;
    const r = Ae(0.85);
    if (r) {
      Oe({ timestamp: Date.now(), type: "random_webcam", image: r, context: "Random webcam snapshot during coding" }), St.current += 1, ht.current = !1;
      return;
    }
    const a = window.setTimeout(() => {
      const s = Ae(0.85);
      s && (Oe({ timestamp: Date.now(), type: "random_webcam", image: s, context: "Random webcam snapshot (retry) during coding" }), St.current += 1), ht.current = !1;
    }, 3e3);
    ft.current.push(a);
  }, [Oe, Ae]), Lt = Y((r, a) => {
    const { gazeDirection: s, attentionScore: c, isLookingAtCamera: x } = r, w = Math.sqrt(s.x * s.x + s.y * s.y), S = !x && w > 0.5 && c < 0.3;
    return a && a.isHeadTurned && a.confidence >= 0.6 ? !0 : S;
  }, []), qt = Y(async () => {
    try {
      const r = await import("./index-2kM27Pi_.js"), a = await import("./blazeface.esm-D5KORnOe.js");
      r.ready && await r.ready();
      const s = await a.load();
      return wt.current = s, !0;
    } catch (r) {
      return console.error("[widget] Failed to init face detection:", r), !1;
    }
  }, []), Ht = (r, a) => {
    const s = Math.max(r.x, a.x), c = Math.max(r.y, a.y), x = Math.min(r.x + r.width, a.x + a.width), w = Math.min(r.y + r.height, a.y + a.height), S = Math.max(0, x - s), L = Math.max(0, w - c), J = S * L, Z = r.width * r.height + a.width * a.height - J;
    return Z > 0 ? J / Z : 0;
  }, e = Y(async () => {
    if (!Te.current || !lt.current || !wt.current) {
      $e.current = requestAnimationFrame(e);
      return;
    }
    const r = Te.current, a = lt.current;
    if (r.readyState !== 4) {
      $e.current = requestAnimationFrame(e);
      return;
    }
    try {
      const s = await wt.current.estimateFaces(r, !1), c = r.videoWidth || r.width || a.width, x = r.videoHeight || r.height || a.height, w = Math.max(6, Math.floor(c * 0.04)), S = Math.max(6, Math.floor(x * 0.04)), L = 0.03, J = 0.6, Ee = s.map((h) => {
        const [P, ae] = h.topLeft, [X, Q] = h.bottomRight;
        return { x: P, y: ae, width: X - P, height: Q - ae, confidence: h.probability?.[0] || 0.8, landmarks: h.landmarks };
      }).filter((h) => {
        if (h.width <= 0 || h.height <= 0 || (h.confidence || 0) < 0.6 || h.x < w || h.y < S || h.x + h.width > c - w || h.y + h.height > x - S) return !1;
        const ae = h.width * h.height / (c * x);
        if (ae < L || ae > J) return !1;
        const X = h.width / h.height;
        return !(X < 0.6 || X > 1.6);
      });
      Ee.sort((h, P) => P.confidence - h.confidence);
      const U = [];
      Ee.forEach((h) => {
        U.some((ae) => Ht(h, ae) > 0.45) || U.push(h);
      }), q(U.length), je(U), me(U.length === 1), Pt(U.length > 0);
      const N = Date.now(), H = U.length === 0 ? "none" : U.length === 1 ? "single" : "multiple";
      H === "multiple" ? fe.current.multipleFaces += 1 : fe.current.multipleFaces = Math.max(0, fe.current.multipleFaces - 1), H === "none" ? fe.current.noFace += 1 : fe.current.noFace = Math.max(0, fe.current.noFace - 1);
      const Ue = 3, qe = 2, Pe = 3, He = 2;
      let re = _e.current;
      if (_e.current !== "multiple" ? fe.current.multipleFaces >= Ue ? re = "multiple" : re = H === "none" ? "single" : H : fe.current.multipleFaces <= qe && (re = H === "multiple" ? "multiple" : "single"), re !== "none" ? fe.current.noFace >= Pe && (re = "none") : fe.current.noFace <= He && (re = H === "none" ? "none" : "single"), re === "multiple") {
        if (_e.current !== "multiple" && (Ge(N), Gt((h) => h + 1), !Se.current.multipleFaces)) {
          Se.current.multipleFaces = !0, m?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: U.length }, timestamp: N });
          const h = Ae(0.85);
          h && Oe({ timestamp: N, type: "violation_trigger", image: h, context: "Multiple faces detected" });
        }
      } else {
        if (_e.current === "multiple" && W !== null) {
          const h = N - W;
          gt((P) => P + h), Ge(null);
        }
        Se.current.multipleFaces = !1;
      }
      if (re === "none") {
        if (_e.current !== "none" && (Qe(N), kt((h) => h + 1), !Se.current.noFace)) {
          Se.current.noFace = !0, m?.({ eventType: "face_detection", severity: "critical", context: "coding", data: { reason: "no_face" }, timestamp: N });
          const h = Ae(0.85);
          h && Oe({ timestamp: N, type: "violation_trigger", image: h, context: "No face detected" });
        }
      } else {
        if (_e.current === "none" && _t !== null) {
          const h = N - _t;
          ut((P) => P + h), Qe(null);
        }
        Se.current.noFace = !1;
      }
      if (_e.current = re, U.length === 1) {
        const h = U[0], P = a.getContext("2d");
        if (P) {
          P.drawImage(r, 0, 0, a.width, a.height);
          const ae = P.getImageData(0, 0, a.width, a.height), X = P.getImageData(h.x, h.y, h.width, h.height);
          let Q = { isGoodPosture: !0, shoulderAlignment: 0, headTilt: 0, confidence: 0.7 };
          const ee = zt(h);
          if (ee) {
            se.current.initialized ? (se.current.yaw = ke * ee.yaw + (1 - ke) * se.current.yaw, se.current.pitch = ke * ee.pitch + (1 - ke) * se.current.pitch, se.current.roll = ke * ee.roll + (1 - ke) * se.current.roll) : se.current = { yaw: ee.yaw, pitch: ee.pitch, roll: ee.roll, initialized: !0 };
            const te = se.current.yaw, rt = se.current.pitch, Ne = se.current.roll, Ve = Math.abs(Ne) <= 10 && Math.abs(rt) <= 12 && Math.abs(te) <= 18;
            Ve !== ne.current.isGood ? Ve ? (ne.current.goodStreak += 1, ne.current.poorStreak = 0, ne.current.goodStreak >= De && (ne.current.isGood = !0, ne.current.goodStreak = 0)) : (ne.current.poorStreak += 1, ne.current.goodStreak = 0, ne.current.poorStreak >= De && (ne.current.isGood = !1, ne.current.poorStreak = 0)) : (ne.current.goodStreak = 0, ne.current.poorStreak = 0), Q = {
              isGoodPosture: ne.current.isGood,
              // Use roll (tilt) as a proxy for shoulder alignment; smaller magnitude means better alignment
              shoulderAlignment: -Ne,
              headTilt: rt,
              confidence: Math.min(1, 0.6 + 0.4 * ee.confidence)
            };
          }
          let ie;
          const oe = Date.now();
          if (oe - Dt.current > 500) {
            Dt.current = oe;
            try {
              const te = await gn(a);
              te ? (ie = { dominant: te.dominant, confidence: te.confidence, emotions: te.emotions }, At.current = ie) : ie = tt(X, h, ee);
            } catch {
              ie = tt(X, h, ee);
            }
          } else
            ie = At.current ?? tt(X, h, ee);
          const we = Mt(h, ae), Ie = It(h, a.width, a.height), ze = ee ?? zt(h);
          $(Q), Fe(ie), Be(we);
          const nt = Lt(Ie, ze);
          if (nt && !v && Date.now() - jt.current > 3e3)
            f((te) => te + 1), G(!0), ve(N), jt.current = Date.now(), Se.current.gazeOff || (Se.current.gazeOff = !0, m?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0, reason: ze?.isHeadTurned ? "head_movement" : "center_offset", headPose: ze }, timestamp: N }));
          else if (!nt && v) {
            if (Ce !== null) {
              const te = N - Ce;
              Tt((rt) => rt + te), ve(null);
            }
            G(!1), Se.current.gazeOff = !1;
          }
          const Le = U.length === 0 || U.length > 1;
          if (g && (Le || N - xt.current >= 5e3)) {
            if (Le) {
              const te = Ae(0.85);
              te && Oe({ timestamp: N, type: "violation_trigger", image: te, context: U.length === 0 ? "No face detected" : "Multiple faces detected" });
            }
            g({ postureAnalysis: Q, attireAnalysis: we }), xt.current = N;
          }
        }
      } else if ($(null), Fe(null), Be(null), v) {
        if (Ce !== null) {
          const h = N - Ce;
          Tt((P) => P + h), ve(null);
        }
        G(!1);
      }
      U.length === 0 ? i?.("violation") : U.length > 1 ? i?.("warning") : i?.("optimal");
    } catch (s) {
      console.error("[widget] Face detection error:", s);
    }
    $e.current = requestAnimationFrame(e);
  }, [tt, Mt, It, Lt, i, g, l?.snapshots, v, W, Ce, Pt]);
  he(() => {
    le(0);
  }, []), he(() => {
    (async () => {
      try {
        const w = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 320 }, height: { ideal: 240 }, frameRate: { ideal: 15 } },
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
        });
        Te.current && (Te.current.srcObject = w);
        let S = null;
        const L = w.getAudioTracks();
        L.length > 0 && (S = new MediaStream(L), et.current = S), await qt(), S && await $t(S), $e.current = requestAnimationFrame(e);
      } catch {
        i?.("violation");
      }
    })();
    const a = 5, s = [60 * 1e3, 5 * 60 * 1e3], c = Math.max(0, a - s.length), x = [...s];
    if (c > 0)
      for (let L = 0; L < c; L++) {
        const J = 42e4 + Math.random() * 18e4, Z = (Math.random() - 0.5) * 30 * 1e3;
        x.push(Math.max(0, Math.floor(J + Z)));
      }
    x.sort((w, S) => w - S);
    for (let w = 1; w < x.length; w++)
      Math.abs(x[w] - x[w - 1]) < 10 * 1e3 && (x[w] += 12 * 1e3);
    return x.forEach((w) => {
      const S = window.setTimeout(() => Ut(), w);
      ft.current.push(S);
    }), () => {
      Ft.current = !0, $e.current && cancelAnimationFrame($e.current), Te.current?.srcObject && Te.current.srcObject.getTracks().forEach((S) => S.stop()), et.current && et.current.getTracks().forEach((w) => w.stop()), Ot(), et.current = null, ft.current.forEach((w) => window.clearTimeout(w)), ft.current = [];
    };
  }, []);
  const t = (r) => {
    O(!0);
    const a = dt.current?.getBoundingClientRect();
    a && M({ x: r.clientX - a.left, y: r.clientY - a.top });
  }, u = (r) => {
    if (y) {
      const a = Math.max(0, Math.min((typeof window < "u" ? window.innerWidth : 0) - 280, r.clientX - p.x)), s = Math.max(0, Math.min((typeof window < "u" ? window.innerHeight : 0) - 400, r.clientY - p.y));
      F({ x: a, y: s });
    }
  }, b = () => O(!1);
  he(() => {
    if (y)
      return document.addEventListener("mousemove", u), document.addEventListener("mouseup", b), () => {
        document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", b);
      };
  }, [y, p]);
  const A = () => {
    document.hidden && Re((r) => {
      const a = r + 1;
      return m?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { when: Date.now() }, timestamp: Date.now() }), a;
    });
  }, z = () => ye((r) => r + 1), _ = (r) => {
    ct((a) => a + 1), m?.({ eventType: "keystroke", severity: "info", context: "coding", data: {}, timestamp: Date.now() }), (r.ctrlKey || r.metaKey) && (r.key === "c" || r.key === "x" || r.key === "v") && (Ze((a) => a + 1), r.preventDefault(), m?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, key: r.key }, timestamp: Date.now() }));
  };
  he(() => (document.addEventListener("visibilitychange", A), window.addEventListener("blur", z), document.addEventListener("keydown", _), () => {
    document.removeEventListener("visibilitychange", A), window.removeEventListener("blur", z), document.removeEventListener("keydown", _);
  }), []);
  const T = I === 0 ? "#ef4444" : I > 1 ? "#f59e0b" : "#22c55e";
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: dt,
      onMouseDown: t,
      style: {
        position: "fixed",
        left: D.x,
        top: D.y,
        zIndex: 9999,
        width: 288,
        cursor: "move",
        border: `2px solid ${T}`,
        borderRadius: 8,
        background: "#fff",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        padding: 12,
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ d.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: /* @__PURE__ */ d.jsx("div", { style: { fontSize: 12, fontWeight: 600 }, children: I === 0 ? "No Face" : I > 1 ? "Multiple Faces" : ce ? "Optimal" : "Good" }) }),
        /* @__PURE__ */ d.jsxs("div", { style: { position: "relative", background: "#000", borderRadius: 4, overflow: "hidden" }, children: [
          /* @__PURE__ */ d.jsx("video", { ref: Te, autoPlay: !0, muted: !0, playsInline: !0, style: { width: "100%", height: 128, objectFit: "cover" } }),
          /* @__PURE__ */ d.jsx("canvas", { ref: lt, width: 320, height: 240, style: { display: "none" } })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { style: { marginTop: 8, fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }, children: [
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Faces: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: I === 1 ? "#16a34a" : "#ef4444" }, children: I })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "No Face: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: Ye > 0 ? "#ef4444" : "#16a34a" }, children: Ye })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Multiple: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: vt > 0 ? "#ef4444" : "#16a34a" }, children: vt })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Posture: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: ue?.isGoodPosture ? "#16a34a" : "#f59e0b" }, children: ue?.isGoodPosture ? "Good" : "Poor" })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Attire: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: Me?.isProfessional ? "#16a34a" : "#f59e0b" }, children: Me?.isProfessional ? "Professional" : "Casual" })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Emotion: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: "#3b82f6" }, children: B?.dominant || "Unknown" })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Audio: ",
            /* @__PURE__ */ d.jsxs("span", { style: { color: pe > 50 ? "#16a34a" : pe > 20 ? "#f59e0b" : "#ef4444" }, children: [
              pe,
              "%"
            ] }),
            /* @__PURE__ */ d.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ d.jsx("div", { style: { width: `${Math.min(pe, 100)}%`, height: 6, transition: "width 100ms", background: pe > 50 ? "#16a34a" : pe > 20 ? "#f59e0b" : "#ef4444" } }) })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Audio Alerts: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: R > 0 ? "#ef4444" : "#16a34a" }, children: R })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Unfocus: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: Je > 0 ? "#ef4444" : "#16a34a" }, children: Je })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Tab Switch: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: de > 0 ? "#ef4444" : "#16a34a" }, children: de })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Keystrokes: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: "#3b82f6" }, children: st })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Copy Attempts: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: Xe > 0 ? "#ef4444" : "#16a34a" }, children: Xe })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Gaze Off: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: o > 0 ? "#ef4444" : "#16a34a" }, children: o })
          ] })
        ] })
      ]
    }
  );
}
const Bt = (n, l) => n.length > l ? n.slice(n.length - l) : n, wn = (n, l) => ({
  sessionId: n,
  sessionType: "coding-assessment",
  startTime: Date.now(),
  preCheckResults: l,
  liveEvents: [],
  codingMetrics: {
    totalKeystrokes: 0,
    linesOfCode: 0,
    codeExecutions: 0,
    externalCopyEvents: 0,
    languageSwitches: 0,
    averageTypingSpeed: 0,
    codingTimeVsReadingTime: { coding: 0, reading: 0 }
  },
  questionProgress: [],
  snapshots: [],
  sessionStats: {
    totalDuration: 0,
    questionsAttempted: 0,
    violationCount: 0,
    tabSwitches: 0,
    audioAnomalies: 0,
    gazeDuration: 0,
    focusBreaks: 0,
    codeExecutionCount: 0,
    noFaceIncidents: 0,
    multipleFaceIncidents: 0,
    unfocusEvents: 0,
    gazeOffScreenIncidents: 0,
    keystrokes: 0,
    copyCutPasteAttempts: 0
  }
});
function xn(n, l) {
  switch (l.eventType) {
    case "tab_switch":
      return { ...n, tabSwitches: n.tabSwitches + 1, violationCount: n.violationCount + 1 };
    case "audio_anomaly":
      return { ...n, audioAnomalies: n.audioAnomalies + 1, violationCount: n.violationCount + 1 };
    case "code_execution":
      return { ...n, codeExecutionCount: n.codeExecutionCount + 1 };
    case "face_detection": {
      const i = l.data?.reason;
      return i === "no_face" ? { ...n, noFaceIncidents: n.noFaceIncidents + 1, violationCount: n.violationCount + 1 } : i === "multiple_faces" ? { ...n, multipleFaceIncidents: n.multipleFaceIncidents + 1, violationCount: n.violationCount + 1 } : n;
    }
    case "gaze_tracking": {
      const i = l.data?.type === "focus_break", g = Number(l.data?.focusTimeMs) || 0, m = l.data?.offscreen === !0;
      return {
        ...n,
        focusBreaks: n.focusBreaks + (i ? 1 : 0),
        gazeDuration: n.gazeDuration + g,
        unfocusEvents: n.unfocusEvents + (i ? 1 : 0),
        gazeOffScreenIncidents: n.gazeOffScreenIncidents + (m ? 1 : 0),
        violationCount: n.violationCount + (i || m ? 1 : 0)
      };
    }
    case "keystroke": {
      const i = l.data?.copyCutPaste === !0;
      return {
        ...n,
        keystrokes: n.keystrokes + 1,
        copyCutPasteAttempts: n.copyCutPasteAttempts + (i ? 1 : 0),
        violationCount: n.violationCount + (i ? 1 : 0)
      };
    }
    default:
      return n;
  }
}
function bn(n, l) {
  switch (l.type) {
    case "INIT":
      return { ...l.payload };
    case "SET_FIELDS": {
      const i = { ...n, ...l.payload };
      return i.snapshots && (i.snapshots = Bt(i.snapshots, 50)), i.liveEvents && (i.liveEvents = Bt(i.liveEvents, 200)), i;
    }
    case "ADD_EVENTS": {
      const i = Bt([...n.liveEvents, ...l.events], 200), g = l.events.reduce(xn, n.sessionStats);
      return { ...n, liveEvents: i, sessionStats: g };
    }
    case "ADD_SNAPSHOT": {
      const i = Bt([...n.snapshots, l.snapshot], 50);
      return { ...n, snapshots: i };
    }
    case "TICK": {
      const i = Math.max(0, l.now - n.startTime);
      return i === n.sessionStats.totalDuration ? n : { ...n, sessionStats: { ...n.sessionStats, totalDuration: i } };
    }
    case "COMPLETE": {
      const i = l.endTime ?? Date.now();
      return { ...n, sessionStats: { ...n.sessionStats, totalDuration: Math.max(0, i - n.startTime) } };
    }
    default:
      return n;
  }
}
function Sn(n) {
  const [l, i] = k(null), g = Y((p) => {
    i((M) => M && bn(M, p));
  }, []), m = j(null), C = j(0), D = j(null), F = Y((p) => {
    const M = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    m.current = M;
    const I = sessionStorage.getItem(M);
    if (I)
      try {
        const ce = JSON.parse(I);
        return i(ce), M;
      } catch {
      }
    const q = wn(M, p);
    return i(q), sessionStorage.setItem(M, JSON.stringify(q)), M;
  }, [n?.sessionId]), y = Y((p) => {
    const M = p ?? l;
    if (!(!M || !m.current))
      try {
        sessionStorage.setItem(m.current, JSON.stringify(M)), C.current = Date.now();
      } catch (I) {
        console.error("[session] persist failed", I);
      }
  }, [l]);
  return he(() => {
    if (!l) return;
    const M = Date.now() - C.current;
    return M < 1e3 ? (D.current && clearTimeout(D.current), D.current = setTimeout(() => y(), 1e3 - M)) : y(), () => {
      D.current && clearTimeout(D.current);
    };
  }, [l, y]), he(() => {
    const p = () => y();
    return window.addEventListener("visibilitychange", p), window.addEventListener("beforeunload", p), () => {
      window.removeEventListener("visibilitychange", p), window.removeEventListener("beforeunload", p);
    };
  }, [y]), he(() => {
    if (!l) return;
    const p = setInterval(() => g({ type: "TICK", now: Date.now() }), 1e3);
    return () => clearInterval(p);
  }, [l, g]), un(() => ({
    state: l,
    sessionId: m.current,
    init: F,
    setFields: (p) => g({ type: "SET_FIELDS", payload: p }),
    addEvents: (p) => g({ type: "ADD_EVENTS", events: p }),
    addSnapshot: (p) => g({ type: "ADD_SNAPSHOT", snapshot: p }),
    complete: () => g({ type: "COMPLETE" })
  }), [l, g, F]);
}
function Mn({ onSessionStart: n, onSessionUpdate: l, onEvent: i }) {
  const [g, m] = k(null), [C, D] = k("optimal"), F = Sn();
  return he(() => {
    if (g && !F.state) {
      const y = F.init(g);
      n?.(y, g);
    }
  }, [g, F]), g ? /* @__PURE__ */ d.jsx(
    vn,
    {
      monitoringStatus: C,
      sessionData: F.state ?? void 0,
      onStatusChange: (y) => D(y),
      onUpdateSession: (y) => {
        F.setFields(y), l?.(y);
      },
      onAddSnapshot: (y) => F.addSnapshot(y),
      onAddEvent: (y) => {
        F.addEvents([{ ...y, timestamp: y.timestamp ?? Date.now() }]), i?.(y);
      }
    }
  ) : /* @__PURE__ */ d.jsx(
    mn,
    {
      onComplete: (y) => m(y),
      onError: () => m(null)
    }
  );
}
export {
  vn as FloatingVideo,
  mn as Prechecks,
  Mn as ProctoringWidget
};
