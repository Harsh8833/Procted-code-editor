import gt, { useState as S, useRef as P, useCallback as Y, useEffect as te, useMemo as vt } from "react";
var dt = { exports: {} }, Ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function wt() {
  if (ht) return Ye;
  ht = 1;
  var r = gt, d = Symbol.for("react.element"), i = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(C, y, W) {
    var m, b = {}, N = null, L = null;
    W !== void 0 && (N = "" + W), y.key !== void 0 && (N = "" + y.key), y.ref !== void 0 && (L = y.ref);
    for (m in y) g.call(y, m) && !k.hasOwnProperty(m) && (b[m] = y[m]);
    if (C && C.defaultProps) for (m in y = C.defaultProps, y) b[m] === void 0 && (b[m] = y[m]);
    return { $$typeof: d, type: C, key: N, ref: L, props: b, _owner: w.current };
  }
  return Ye.Fragment = i, Ye.jsx = j, Ye.jsxs = j, Ye;
}
var qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function bt() {
  return mt || (mt = 1, process.env.NODE_ENV !== "production" && function() {
    var r = gt, d = Symbol.for("react.element"), i = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), C = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), V = Symbol.iterator, G = "@@iterator";
    function Q(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = V && e[V] || e[G];
      return typeof t == "function" ? t : null;
    }
    var B = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
          n[u - 1] = arguments[u];
        H("error", e, n);
      }
    }
    function H(e, t, n) {
      {
        var u = B.ReactDebugCurrentFrame, E = u.getStackAddendum();
        E !== "" && (t += "%s", n = n.concat([E]));
        var s = n.map(function(a) {
          return String(a);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ne = !1, pe = !1, ge = !1, D = !1, O = !1, J;
    J = Symbol.for("react.module.reference");
    function F(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === k || O || e === w || e === W || e === m || D || e === L || ne || pe || ge || typeof e == "object" && e !== null && (e.$$typeof === N || e.$$typeof === b || e.$$typeof === j || e.$$typeof === C || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === J || e.getModuleId !== void 0));
    }
    function ye(e, t, n) {
      var u = e.displayName;
      if (u)
        return u;
      var E = t.displayName || t.name || "";
      return E !== "" ? n + "(" + E + ")" : n;
    }
    function Te(e) {
      return e.displayName || "Context";
    }
    function ee(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case i:
          return "Portal";
        case k:
          return "Profiler";
        case w:
          return "StrictMode";
        case W:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var t = e;
            return Te(t) + ".Consumer";
          case j:
            var n = e;
            return Te(n._context) + ".Provider";
          case y:
            return ye(e, e.render, "ForwardRef");
          case b:
            var u = e.displayName || null;
            return u !== null ? u : ee(e.type) || "Memo";
          case N: {
            var E = e, s = E._payload, a = E._init;
            try {
              return ee(a(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, se = 0, Se, Ee, je, Ce, Ae, ve, o;
    function l() {
    }
    l.__reactDisabledLog = !0;
    function h() {
      {
        if (se === 0) {
          Se = console.log, Ee = console.info, je = console.warn, Ce = console.error, Ae = console.group, ve = console.groupCollapsed, o = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: l,
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
        se++;
      }
    }
    function I() {
      {
        if (se--, se === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, e, {
              value: Se
            }),
            info: re({}, e, {
              value: Ee
            }),
            warn: re({}, e, {
              value: je
            }),
            error: re({}, e, {
              value: Ce
            }),
            group: re({}, e, {
              value: Ae
            }),
            groupCollapsed: re({}, e, {
              value: ve
            }),
            groupEnd: re({}, e, {
              value: o
            })
          });
        }
        se < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _ = B.ReactCurrentDispatcher, K;
    function oe(e, t, n) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (E) {
            var u = E.stack.trim().match(/\n( *(at )?)/);
            K = u && u[1] || "";
          }
        return `
` + K + e;
      }
    }
    var le = !1, De;
    {
      var ft = typeof WeakMap == "function" ? WeakMap : Map;
      De = new ft();
    }
    function Me(e, t) {
      if (!e || le)
        return "";
      {
        var n = De.get(e);
        if (n !== void 0)
          return n;
      }
      var u;
      le = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = _.current, _.current = null, h();
      try {
        if (t) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (U) {
              u = U;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (U) {
              u = U;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            u = U;
          }
          e();
        }
      } catch (U) {
        if (U && u && typeof U.stack == "string") {
          for (var f = U.stack.split(`
`), M = u.stack.split(`
`), R = f.length - 1, T = M.length - 1; R >= 1 && T >= 0 && f[R] !== M[T]; )
            T--;
          for (; R >= 1 && T >= 0; R--, T--)
            if (f[R] !== M[T]) {
              if (R !== 1 || T !== 1)
                do
                  if (R--, T--, T < 0 || f[R] !== M[T]) {
                    var $ = `
` + f[R].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && De.set(e, $), $;
                  }
                while (R >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        le = !1, _.current = s, I(), Error.prepareStackTrace = E;
      }
      var ie = e ? e.displayName || e.name : "", ce = ie ? oe(ie) : "";
      return typeof e == "function" && De.set(e, ce), ce;
    }
    function Ue(e, t, n) {
      return Me(e, !1);
    }
    function at(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Re(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Me(e, at(e));
      if (typeof e == "string")
        return oe(e);
      switch (e) {
        case W:
          return oe("Suspense");
        case m:
          return oe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Ue(e.render);
          case b:
            return Re(e.type, t, n);
          case N: {
            var u = e, E = u._payload, s = u._init;
            try {
              return Re(s(E), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Oe = {}, Ve = B.ReactDebugCurrentFrame;
    function Pe(e) {
      if (e) {
        var t = e._owner, n = Re(e.type, e._source, t ? t.type : null);
        Ve.setExtraStackFrame(n);
      } else
        Ve.setExtraStackFrame(null);
    }
    function it(e, t, n, u, E) {
      {
        var s = Function.call.bind(we);
        for (var a in e)
          if (s(e, a)) {
            var f = void 0;
            try {
              if (typeof e[a] != "function") {
                var M = Error((u || "React class") + ": " + n + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              f = e[a](t, a, u, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              f = R;
            }
            f && !(f instanceof Error) && (Pe(E), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", n, a, typeof f), Pe(null)), f instanceof Error && !(f.message in Oe) && (Oe[f.message] = !0, Pe(E), A("Failed %s type: %s", n, f.message), Pe(null));
          }
      }
    }
    var de = Array.isArray;
    function _e(e) {
      return de(e);
    }
    function Ge(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Ie(e) {
      try {
        return fe(e), !1;
      } catch {
        return !0;
      }
    }
    function fe(e) {
      return "" + e;
    }
    function ke(e) {
      if (Ie(e))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), fe(e);
    }
    var Ke = B.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, be;
    function ae(e) {
      if (we.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (we.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, t) {
      typeof e.ref == "string" && Ke.current;
    }
    function st(e, t) {
      {
        var n = function() {
          ze || (ze = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function ct(e, t) {
      {
        var n = function() {
          be || (be = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var Ze = function(e, t, n, u, E, s, a) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: a,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function Qe(e, t, n, u, E) {
      {
        var s, a = {}, f = null, M = null;
        n !== void 0 && (ke(n), f = "" + n), Je(t) && (ke(t.key), f = "" + t.key), ae(t) && (M = t.ref, Xe(t, E));
        for (s in t)
          we.call(t, s) && !He.hasOwnProperty(s) && (a[s] = t[s]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (s in R)
            a[s] === void 0 && (a[s] = R[s]);
        }
        if (f || M) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && st(a, T), M && ct(a, T);
        }
        return Ze(e, f, M, E, u, Ke.current, a);
      }
    }
    var Fe = B.ReactCurrentOwner, Le = B.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var t = e._owner, n = Re(e.type, e._source, t ? t.type : null);
        Le.setExtraStackFrame(n);
      } else
        Le.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function xe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function et() {
      {
        if (Fe.current) {
          var e = ee(Fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tt(e) {
      return "";
    }
    var Ne = {};
    function nt(e) {
      {
        var t = et();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Be(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = nt(t);
        if (Ne[n])
          return;
        Ne[n] = !0;
        var u = "";
        e && e._owner && e._owner !== Fe.current && (u = " It was passed a child from " + ee(e._owner.type) + "."), he(e), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, u), he(null);
      }
    }
    function $e(e, t) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var n = 0; n < e.length; n++) {
            var u = e[n];
            xe(u) && Be(u, t);
          }
        else if (xe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = Q(e);
          if (typeof E == "function" && E !== e.entries)
            for (var s = E.call(e), a; !(a = s.next()).done; )
              xe(a.value) && Be(a.value, t);
        }
      }
    }
    function ut(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === b))
          n = t.propTypes;
        else
          return;
        if (n) {
          var u = ee(t);
          it(n, e.props, "prop", u, e);
        } else if (t.PropTypes !== void 0 && !We) {
          We = !0;
          var E = ee(t);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function p(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var u = t[n];
          if (u !== "children" && u !== "key") {
            he(e), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), he(null);
            break;
          }
        }
        e.ref !== null && (he(e), A("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    var v = {};
    function x(e, t, n, u, E, s) {
      {
        var a = F(e);
        if (!a) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = tt();
          M ? f += M : f += et();
          var R;
          e === null ? R = "null" : _e(e) ? R = "array" : e !== void 0 && e.$$typeof === d ? (R = "<" + (ee(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, f);
        }
        var T = Qe(e, t, n, E, s);
        if (T == null)
          return T;
        if (a) {
          var $ = t.children;
          if ($ !== void 0)
            if (u)
              if (_e($)) {
                for (var ie = 0; ie < $.length; ie++)
                  $e($[ie], e);
                Object.freeze && Object.freeze($);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e($, e);
        }
        if (we.call(t, "key")) {
          var ce = ee(e), U = Object.keys(t).filter(function(lt) {
            return lt !== "key";
          }), ue = U.length > 0 ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!v[ce + ue]) {
            var me = U.length > 0 ? "{" + U.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, ce, me, ce), v[ce + ue] = !0;
          }
        }
        return e === g ? p(T) : ut(T), T;
      }
    }
    function z(e, t, n) {
      return x(e, t, n, !0);
    }
    function q(e, t, n) {
      return x(e, t, n, !1);
    }
    var X = q, Z = z;
    qe.Fragment = g, qe.jsx = X, qe.jsxs = Z;
  }()), qe;
}
process.env.NODE_ENV === "production" ? dt.exports = wt() : dt.exports = bt();
var c = dt.exports;
function yt(r) {
  const d = window.AudioContext || window.webkitAudioContext, i = new d(), g = i.createMediaStreamSource(r), w = i.createAnalyser();
  w.fftSize = 2048, w.smoothingTimeConstant = 0.85, g.connect(w);
  const k = new Uint8Array(w.fftSize);
  function j() {
    w.getByteTimeDomainData(k);
    let C = 0;
    for (let y = 0; y < k.length; y++) {
      const W = (k[y] - 128) / 128;
      C += W * W;
    }
    return Math.sqrt(C / k.length);
  }
  return {
    getLevel: () => j(),
    dispose: async () => {
      try {
        g.disconnect();
      } catch {
      }
      try {
        w.disconnect();
      } catch {
      }
      try {
        await i.close();
      } catch {
      }
    }
  };
}
let rt = null;
async function xt() {
  if (rt) return rt;
  const r = await import("./blazeface.esm-D5KORnOe.js"), d = await import("./index-2kM27Pi_.js");
  return d.ready && await d.ready(), rt = await r.load(), rt;
}
function pt(r, d, i) {
  if (r.width <= 0 || r.height <= 0 || d <= 0 || i <= 0) return !1;
  const g = Math.max(6, Math.floor(d * 0.06)), w = Math.max(6, Math.floor(i * 0.06));
  if (r.x < g || r.y < w || r.x + r.width > d - g || r.y + r.height > i - w) return !1;
  const k = r.width * r.height, j = d * i, C = k / j;
  if (C < 0.04 || C > 0.65) return !1;
  const y = r.width / r.height;
  return !(y < 0.6 || y > 1.6);
}
async function St(r) {
  if ("FaceDetector" in window)
    try {
      const i = await new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }).detect(r);
      if (i && i.length > 0) {
        const g = i[0]?.boundingBox, w = r.videoWidth || r.width || 0, k = r.videoHeight || r.height || 0;
        if (g) {
          const j = { x: g.x, y: g.y, width: g.width, height: g.height };
          if (pt(j, w, k)) return { present: !0, confidence: 0.85 };
        }
      }
      return { present: !1, confidence: 0 };
    } catch {
    }
  try {
    const i = await (await xt()).estimateFaces(r, !1);
    if (i && i.length > 0) {
      const g = r.videoWidth || r.width || 0, w = r.videoHeight || r.height || 0;
      for (const k of i) {
        const [j, C] = k.topLeft, [y, W] = k.bottomRight, m = { x: j, y: C, width: y - j, height: W - C };
        if (pt(m, g, w)) {
          const b = k.probability ? k.probability[0] : 0.75;
          return { present: !0, confidence: Math.max(0.6, Math.min(1, b)) };
        }
      }
    }
  } catch {
  }
  return { present: !1, confidence: 0 };
}
function Et({ onComplete: r, onError: d }) {
  const i = ["camera", "microphone", "face", "monitor", "browser"], [g, w] = S({
    camera: "pending",
    microphone: "pending",
    face: "pending",
    monitor: "pending",
    browser: "pending"
  }), [k, j] = S(0), [C, y] = S(0), [W, m] = S({}), [b, N] = S(!1), [L, V] = S({}), G = P(null), Q = P(null), B = P(null), A = P(null), H = P(null), ne = () => {
    try {
      G.current?.getTracks().forEach((o) => o.stop());
    } catch {
    }
    try {
      Q.current?.getTracks().forEach((o) => o.stop());
    } catch {
    }
    G.current = null, Q.current = null, B.current && (B.current.dispose().catch(() => {
    }), B.current = null), A.current && (cancelAnimationFrame(A.current), A.current = null);
  }, pe = async (o) => {
    try {
      const l = window.AudioContext || window.webkitAudioContext;
      if (!l) throw new Error("AudioContext not supported");
      const h = new l(), I = h.createMediaStreamSource(o), _ = h.createAnalyser();
      _.fftSize = 256, _.smoothingTimeConstant = 0.8, I.connect(_);
      const K = new Uint8Array(_.frequencyBinCount);
      _.getByteFrequencyData(K), sessionStorage.setItem("audio-context-initialized", "true"), I.disconnect(), await h.close(), typeof window < "u" && (window.precheckAudioStream = o);
    } catch {
      sessionStorage.setItem("audio-context-initialized", "false");
    }
  }, ge = async (o) => {
    const l = H.current;
    let h = 0, I = 0, _ = 0;
    const K = 30;
    for (; _ < K && h < 5; ) {
      try {
        const le = await St(l);
        le.present && (h += 1, I = Math.max(I, le.confidence));
      } catch {
      }
      _++, j(_), await new Promise((le) => setTimeout(le, 100));
    }
    return { status: h >= 5, confidence: I, timestamp: Date.now() };
  }, D = () => {
    try {
      const o = window.screen.width, l = window.screen.height, h = window.screen.availWidth;
      return o / l > 3 || o > h * 1.5 || [3840, 3360, 2560, 4480, 5120].includes(o) ? 2 : 1;
    } catch {
      return 1;
    }
  }, O = async () => {
    try {
      if (!window.isSecureContext) return D();
      if ("getScreenDetails" in window)
        try {
          return (await window.getScreenDetails()).screens.length;
        } catch (o) {
          if (o?.name === "NotAllowedError" || o?.name === "SecurityError") {
            N(!0);
            try {
              return await new Promise((I) => {
                const _ = async () => {
                  K();
                  try {
                    const oe = await window.getScreenDetails();
                    I(oe.screens.length);
                  } catch {
                    I(D());
                  }
                }, K = () => {
                  window.removeEventListener("pointerdown", _), window.removeEventListener("keydown", _);
                };
                window.addEventListener("pointerdown", _, { once: !0 }), window.addEventListener("keydown", _, { once: !0 });
              });
            } finally {
              N(!1);
            }
          }
        }
      return D();
    } catch {
      return 1;
    }
  }, J = () => [
    "navigator.mediaDevices",
    "navigator.mediaDevices.getUserMedia",
    "requestAnimationFrame",
    "WebAssembly"
  ].every((l) => {
    const h = l.split(".");
    let I = window;
    for (const _ of h) {
      if (!(_ in I)) return !1;
      I = I[_];
    }
    return !0;
  }), F = (o, l) => {
    w((h) => ({ ...h, [o]: l }));
  }, ye = Y(async () => {
    F("camera", "running"), m((o) => ({ ...o, camera: "" }));
    try {
      try {
        G.current?.getTracks().forEach((l) => l.stop());
      } catch {
      }
      const o = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } }
      });
      if (G.current = o, !H.current) {
        const l = document.createElement("video");
        l.muted = !0, l.playsInline = !0, H.current = l;
      }
      H.current.srcObject = o;
      try {
        await H.current.play();
      } catch {
      }
      return V((l) => ({ ...l, cameraAccess: !0 })), F("camera", "passed"), !0;
    } catch (o) {
      const l = o?.name === "NotAllowedError" ? "Camera permission denied" : o?.message || "Camera access failed";
      return m((h) => ({ ...h, camera: l })), F("camera", "failed"), !1;
    }
  }, []), Te = Y(async () => {
    F("microphone", "running"), m((o) => ({ ...o, microphone: "" }));
    try {
      try {
        Q.current?.getTracks().forEach((l) => l.stop());
      } catch {
      }
      const o = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      Q.current = o, V((l) => ({ ...l, microphoneAccess: !0 })), await pe(o);
      try {
        const l = yt(o);
        B.current = l;
        const h = () => {
          y(l.getLevel()), A.current = requestAnimationFrame(h);
        };
        A.current = requestAnimationFrame(h);
      } catch {
      }
      return F("microphone", "passed"), !0;
    } catch (o) {
      const l = o?.name === "NotAllowedError" ? "Microphone permission denied" : o?.message || "Microphone access failed";
      return m((h) => ({ ...h, microphone: l })), F("microphone", "failed"), !1;
    }
  }, []), ee = Y(async () => {
    F("face", "running"), m((o) => ({ ...o, face: "" }));
    try {
      if (!G.current) throw new Error("Camera is not initialized");
      const o = await ge(G.current);
      if (V((l) => ({ ...l, faceDetection: o })), o.status)
        return F("face", "passed"), !0;
      throw new Error("No face detected. Please align your face within the frame and retry.");
    } catch (o) {
      const l = o?.message || "Face detection failed";
      return m((h) => ({ ...h, face: l })), F("face", "failed"), !1;
    }
  }, []), re = Y(async () => {
    F("monitor", "running"), m((o) => ({ ...o, monitor: "" }));
    try {
      const o = await O();
      if (o && o > 1)
        throw V((l) => ({ ...l, monitorCount: o })), new Error("Multiple displays detected. Please remove external screens and keep only one display connected, then press Retry.");
      if (o === 1)
        return V((l) => ({ ...l, monitorCount: o })), F("monitor", "passed"), !0;
      throw new Error("Could not verify displays");
    } catch (o) {
      return m((l) => ({ ...l, monitor: o?.message || "Monitor verification failed" })), F("monitor", "failed"), !1;
    }
  }, []), se = Y(async () => {
    F("browser", "running"), m((o) => ({ ...o, browser: "" }));
    try {
      const o = J();
      if (V((l) => ({ ...l, browserSupport: o })), !o) throw new Error("Required browser features are unavailable");
      return F("browser", "passed"), !0;
    } catch (o) {
      return m((l) => ({ ...l, browser: o?.message || "Browser not supported" })), F("browser", "failed"), !1;
    }
  }, []), Se = {
    camera: ye,
    microphone: Te,
    face: ee,
    monitor: re,
    browser: se
  }, Ee = Y(async (o) => {
    for (let l = o; l < i.length; l++) {
      const h = i[l];
      if (!await Se[h]()) break;
    }
  }, [Se]);
  te(() => {
    if (!i.every((h) => g[h] === "passed")) return;
    const l = {
      cameraAccess: !!L.cameraAccess,
      microphoneAccess: !!L.microphoneAccess,
      faceDetection: L.faceDetection || { status: !1, confidence: 0, timestamp: Date.now() },
      monitorCount: L.monitorCount || 1,
      browserSupport: !!L.browserSupport,
      codeEditorReady: !0
    };
    r(l), ne();
  }, [g, L]), te(() => (Ee(0), () => ne()), []);
  const je = (o) => {
    const l = i.indexOf(o);
    w((h) => {
      const I = { ...h };
      for (let _ = l; _ < i.length; _++) I[i[_]] = "pending";
      return I;
    }), m((h) => ({ ...h, [o]: "" })), Ee(l);
  }, Ce = i.filter((o) => g[o] === "passed").length, Ae = i.some((o) => g[o] === "running"), ve = Math.round((Ce + (Ae ? 0.5 : 0)) / i.length * 100);
  return /* @__PURE__ */ c.jsx("div", { style: { fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#eff6ff,#eef2ff)" }, children: /* @__PURE__ */ c.jsxs("div", { style: { width: 720, maxWidth: "95vw", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }, children: [
    /* @__PURE__ */ c.jsxs("div", { style: { textAlign: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ c.jsx("h2", { style: { margin: 0, fontSize: 20, fontWeight: 700 }, children: "System Pre-Check" }),
      /* @__PURE__ */ c.jsx("p", { style: { color: "#6b7280" }, children: "Verifying your system for proctored assessment" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
        /* @__PURE__ */ c.jsx("span", { children: "Overall Progress" }),
        /* @__PURE__ */ c.jsxs("span", { children: [
          ve,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { style: { height: 8, background: "#f3f4f6", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ c.jsx("div", { style: { width: `${ve}%`, height: 8, background: "#3b82f6" } }) })
    ] }),
    /* @__PURE__ */ c.jsx("div", { style: { display: "grid", gap: 8 }, children: i.map((o) => {
      const l = o === "camera" ? "Camera Access" : o === "microphone" ? "Microphone Access" : o === "face" ? "Face Detection" : o === "monitor" ? "Single Monitor Check" : "Browser Support", h = g[o], I = h === "passed" ? "#ecfdf5" : h === "running" ? "#eff6ff" : h === "failed" ? "#fef2f2" : "#f9fafb", _ = h === "passed" ? "#10b981" : h === "running" ? "#3b82f6" : h === "failed" ? "#dc2626" : "#9ca3af";
      return /* @__PURE__ */ c.jsxs("div", { style: { display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 12, alignItems: "center", padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", background: I }, children: [
        /* @__PURE__ */ c.jsx("div", { style: { width: 12, height: 12, borderRadius: 9999, background: _ } }),
        /* @__PURE__ */ c.jsxs("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: /* @__PURE__ */ c.jsx("div", { style: { fontWeight: 600, fontSize: 14 }, children: l }) }),
          o === "face" && /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center", marginTop: 8 }, children: [
            /* @__PURE__ */ c.jsx("video", { ref: H, muted: !0, playsInline: !0, autoPlay: !0, style: { width: 180, height: 112, background: "#000", borderRadius: 6 } }),
            h === "running" && /* @__PURE__ */ c.jsxs("div", { style: { color: "#6b7280", fontSize: 12 }, children: [
              "Analyzing frames: ",
              k
            ] })
          ] }),
          o === "microphone" && h !== "pending" && /* @__PURE__ */ c.jsx("div", { style: { marginTop: 6, width: 220, height: 8, background: "#e5e7eb", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ c.jsx("div", { style: { width: `${Math.min(100, Math.round(C * 200))}%`, height: 8, background: "#10b981", transition: "width 150ms" } }) }),
          b && o === "monitor" && (h === "running" || h === "pending") && /* @__PURE__ */ c.jsx("div", { style: { marginTop: 6, color: "#6b7280", fontSize: 12 }, children: "Requesting display info… click anywhere or press a key to continue." }),
          W[o] && /* @__PURE__ */ c.jsx("div", { style: { marginTop: 6, color: "#dc2626", fontSize: 12 }, children: W[o] })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ c.jsx("div", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 9999, background: h === "passed" ? "#111827" : h === "failed" ? "#fee2e2" : "#e5e7eb", color: h === "passed" ? "#fff" : "#111827" }, children: h === "passed" ? "Passed" : h === "running" ? "Checking…" : h === "failed" ? "Failed" : "Pending" }),
          h === "failed" && /* @__PURE__ */ c.jsx("button", { onClick: () => je(o), style: { fontSize: 12, padding: "6px 10px", borderRadius: 6, background: "#111827", color: "#fff", border: 0 }, children: "Retry" })
        ] })
      ] }, o);
    }) })
  ] }) });
}
function Ct(r) {
  const { onEvent: d, context: i = "coding" } = r || {}, [g, w] = S("idle"), [k, j] = S(void 0), [C, y] = S(0), [W, m] = S(0), b = P(null), N = P(null), L = P(null), V = P(!1), G = P(0), Q = P(0), B = P(null), A = Y(() => {
    L.current && cancelAnimationFrame(L.current), L.current = null;
    try {
      b.current?.dispose();
    } catch {
    }
    b.current = null;
    try {
      N.current?.getTracks().forEach((D) => D.stop());
    } catch {
    }
    N.current = null, w("idle");
  }, []), H = Y(
    (D) => {
      const O = Date.now(), J = V.current;
      D > 18 && O - G.current > 2e3 && (m((F) => F + 1), G.current = O, d?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: i,
        data: { level: D, reason: "audio_spike", faceDetected: J }
      })), J && D < 3 ? B.current == null ? B.current = O : O - B.current > 15e3 && (m((F) => F + 1), B.current = null, d?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: i,
        data: { level: D, reason: "extended_silence_with_face" }
      })) : D >= 3 && (B.current = null), !J && D > 12 && O - Q.current > 3e3 && (m((F) => F + 1), Q.current = O, d?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: i,
        data: { level: D, reason: "audio_without_face" }
      }));
    },
    [i, d]
  ), ne = Y(() => {
    try {
      if (!b.current) return;
      const D = b.current.getLevel(), O = Math.max(0, Math.min(100, Math.round(D * 160)));
      y(O), H(O);
    } finally {
      L.current = requestAnimationFrame(ne);
    }
  }, [H]), pe = Y(
    async (D) => {
      try {
        j(void 0), m(0), G.current = 0, Q.current = 0, B.current = null;
        let O = D;
        if (!O && typeof window < "u" && window.precheckAudioStream) {
          const ye = window.precheckAudioStream;
          ye?.active && ye.getAudioTracks().length > 0 && (O = ye);
        }
        O || (O = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0, sampleRate: 44100 }
        })), N.current = O;
        const J = O.getAudioTracks(), F = J.length ? new MediaStream(J) : O;
        b.current = yt(F), w("running"), L.current = requestAnimationFrame(ne);
      } catch (O) {
        w("error"), j(O instanceof Error ? O.message : String(O));
      }
    },
    [ne]
  ), ge = Y((D) => {
    V.current = D;
  }, []);
  return te(() => A, [A]), { status: g, error: k, level: C, anomalyCount: W, start: pe, stop: A, setFaceDetected: ge };
}
function Rt({ monitoringStatus: r, sessionData: d, onStatusChange: i, onUpdateSession: g, onAddEvent: w }) {
  const [k, j] = S({ x: typeof window < "u" ? window.innerWidth - 280 : 0, y: typeof window < "u" ? window.innerHeight - 400 : 0 }), [C, y] = S(!1), [W, m] = S({ x: 0, y: 0 }), [b, N] = S(0), [L, V] = S(!1), [G, Q] = S(null), [B, A] = S(null), [H, ne] = S(null), [pe, ge] = S(null), [D, O] = S(0), [J, F] = S(0), [ye, Te] = S([]), [ee, re] = S(0), [se, Se] = S(0), [Ee, je] = S(0), [Ce, Ae] = S(0), [ve, o] = S(0), [l, h] = S(!1), [I, _] = S(null), [K, oe] = S(null), [le, De] = S(0), [ft, Me] = S(0), [Ue, at] = S(0), [Re, we] = S(null), [Oe, Ve] = S(0), [Pe, it] = S(0), de = P(null), _e = P(null), Ge = P(null), Ie = P(null), fe = P(null), ke = P(null), Ke = P(!1), He = P(0), ze = P(0), be = P("none");
  P({ noFace: 0, multipleFaces: 0 });
  const ae = P({ noFace: !1, multipleFaces: !1, gazeOff: !1 }), { level: Je, anomalyCount: Xe, start: st, stop: ct, setFaceDetected: Ze } = Ct({
    context: "coding",
    onEvent: (p) => w?.({ ...p, timestamp: Date.now() })
  });
  te(() => O(Je), [Je]), te(() => F(Xe), [Xe]);
  const Qe = Y((p, v) => {
    const x = p.data;
    let z = 0, q = 0, X = 0;
    for (let a = 0; a < x.length; a += 4) {
      const f = x[a], M = x[a + 1], R = x[a + 2], T = (f + M + R) / 3;
      if (z += T, a > 0) {
        const $ = (x[a - 4] + x[a - 3] + x[a - 2]) / 3;
        q += Math.abs(T - $);
      }
      if (a > p.width * 4 && a < x.length - p.width * 4) {
        const $ = (x[a - p.width * 4] + x[a - p.width * 4 + 1] + x[a - p.width * 4 + 2]) / 3, ie = (x[a + p.width * 4] + x[a + p.width * 4 + 1] + x[a + p.width * 4 + 2]) / 3;
        (Math.abs(T - $) > 30 || Math.abs(T - ie) > 30) && X++;
      }
    }
    const Z = x.length / 4;
    z /= Z, q /= Z;
    const e = X / Z, t = v.width / v.height, n = {
      neutral: Math.max(0.1, 0.6 - Math.abs(z - 120) / 200 - Math.abs(q - 15) / 100),
      happy: Math.max(0.05, (z > 115 ? 0.4 : 0.1) + (e > 0.15 ? 0.3 : 0) + (t > 0.85 ? 0.2 : 0)),
      focused: Math.max(0.05, (q > 20 ? 0.4 : 0.1) + (e > 0.12 ? 0.2 : 0) + (z < 110 ? 0.2 : 0)),
      concerned: Math.max(0.05, (z < 105 ? 0.3 : 0.1) + (q > 25 ? 0.2 : 0) + (t < 0.75 ? 0.2 : 0)),
      surprised: Math.max(0.05, (t > 0.9 ? 0.3 : 0.1) + (e > 0.18 ? 0.3 : 0))
    }, u = Date.now() % 1e4 / 1e4;
    Object.keys(n).forEach((a) => {
      const f = a;
      n[f] += Math.sin(u * Math.PI * 2) * 0.1, n[f] = Math.max(0.05, Math.min(0.95, n[f]));
    });
    const E = Object.entries(n).reduce((a, f) => n[a[0]] > n[f[0]] ? a : f)[0], s = Math.max(...Object.values(n));
    return { dominant: E, confidence: s, emotions: n };
  }, []), Fe = Y((p, v) => {
    const x = v.data;
    let z = 0, q = 0, X = 0;
    const Z = Math.floor(v.height * 0.6);
    for (let s = Math.floor(v.height * 0.3); s < Z; s++)
      for (let a = 0; a < v.width; a += 4) {
        const f = (s * v.width + a) * 4, M = x[f], R = x[f + 1], T = x[f + 2];
        (M + R + T) / 3 < 100 ? z++ : q++, (Math.abs(M - R) > 30 || Math.abs(R - T) > 30) && X++;
      }
    const e = z + q, t = e ? z / e : 0, n = e ? X / e : 0, u = t > 0.4 && n < 0.3, E = t > 0.2;
    return { isProfessional: u, hasShirt: E, confidence: 0.7, details: u ? "Professional attire detected" : "Casual attire detected" };
  }, []), Le = Y((p, v, x) => {
    const z = p.x + p.width / 2, q = p.y + p.height / 2, X = (z - v / 2) / v, Z = (q - x / 2) / x, e = Math.sqrt(X * X + Z * Z), t = e < 0.15, n = Math.max(0, 1 - e * 2);
    return { isLookingAtCamera: t, gazeDirection: { x: X, y: Z }, confidence: 0.8, attentionScore: n };
  }, []), he = Y((p) => {
    const { gazeDirection: v, attentionScore: x, isLookingAtCamera: z } = p, q = Math.sqrt(v.x * v.x + v.y * v.y);
    return !z && q > 0.5 && x < 0.3;
  }, []), We = Y(async () => {
    try {
      const p = await import("./index-2kM27Pi_.js"), v = await import("./blazeface.esm-D5KORnOe.js");
      p.ready && await p.ready();
      const x = await v.load();
      return Ie.current = x, !0;
    } catch (p) {
      return console.error("[widget] Failed to init face detection:", p), !1;
    }
  }, []), xe = Y(async () => {
    if (!de.current || !_e.current || !Ie.current) {
      fe.current = requestAnimationFrame(xe);
      return;
    }
    const p = de.current, v = _e.current;
    if (p.readyState !== 4) {
      fe.current = requestAnimationFrame(xe);
      return;
    }
    try {
      const x = await Ie.current.estimateFaces(p, !1), z = p.videoWidth || p.width || v.width, q = p.videoHeight || p.height || v.height, X = Math.max(6, Math.floor(z * 0.06)), Z = Math.max(6, Math.floor(q * 0.06)), e = 0.04, t = 0.65, n = x.map((s) => {
        const [a, f] = s.topLeft, [M, R] = s.bottomRight;
        return { x: a, y: f, width: M - a, height: R - f, confidence: s.probability?.[0] || 0.8 };
      }).filter((s) => {
        if (s.width <= 0 || s.height <= 0 || s.x < X || s.y < Z || s.x + s.width > z - X || s.y + s.height > q - Z) return !1;
        const f = s.width * s.height / (z * q);
        if (f < e || f > t) return !1;
        const M = s.width / s.height;
        return !(M < 0.6 || M > 1.6);
      });
      N(n.length), Te(n), V(n.length === 1), Ze(n.length > 0);
      const u = Date.now();
      let E = n.length === 0 ? "none" : n.length === 1 ? "single" : "multiple";
      if (E === "multiple")
        be.current !== "multiple" && (_(u), at((s) => s + 1), ae.current.multipleFaces || (ae.current.multipleFaces = !0, w?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: n.length }, timestamp: u })));
      else {
        if (be.current === "multiple" && I !== null) {
          const s = u - I;
          De((a) => a + s), _(null);
        }
        ae.current.multipleFaces = !1;
      }
      if (E === "none")
        be.current !== "none" && (we(u), Ve((s) => s + 1), ae.current.noFace || (ae.current.noFace = !0, w?.({ eventType: "face_detection", severity: "critical", context: "coding", data: { reason: "no_face" }, timestamp: u })));
      else {
        if (be.current === "none" && Re !== null) {
          const s = u - Re;
          it((a) => a + s), we(null);
        }
        ae.current.noFace = !1;
      }
      if (be.current = E, n.length === 1) {
        const s = n[0], a = v.getContext("2d");
        if (a) {
          a.drawImage(p, 0, 0, v.width, v.height);
          const f = a.getImageData(0, 0, v.width, v.height), M = a.getImageData(s.x, s.y, s.width, s.height), R = {
            isGoodPosture: Math.abs(Math.random() * 20 - 10) < 5,
            shoulderAlignment: Math.random() * 20 - 10,
            headTilt: Math.random() * 15 - 7.5,
            confidence: 0.75
          }, T = Qe(M, s), $ = Fe(M, f), ie = Le(s, v.width, v.height);
          Q(R), A(T), ne($), ge(ie);
          const ce = he(ie);
          if (ce && !l && Date.now() - ze.current > 3e3)
            o((ue) => ue + 1), h(!0), oe(u), ze.current = Date.now(), ae.current.gazeOff || (ae.current.gazeOff = !0, w?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0 }, timestamp: u }));
          else if (!ce && l) {
            if (K !== null) {
              const ue = u - K;
              Me((me) => me + ue), oe(null);
            }
            h(!1), ae.current.gazeOff = !1;
          }
          const U = n.length === 0 || n.length > 1;
          if (g && (U || u - He.current >= 5e3)) {
            const ue = d?.snapshots || [];
            let me = ue;
            if (U) {
              const lt = {
                timestamp: u,
                type: "violation_trigger",
                image: "base64_image_placeholder",
                context: n.length === 0 ? "No face detected" : "Multiple faces detected"
              };
              me = [...ue, lt], me.length > 30 && (me = me.slice(-30));
            }
            g({ snapshots: me, postureAnalysis: R, attireAnalysis: $ }), He.current = u;
          }
        }
      } else if (Q(null), A(null), ne(null), ge(null), l) {
        if (K !== null) {
          const s = u - K;
          Me((a) => a + s), oe(null);
        }
        h(!1);
      }
      n.length === 0 ? i?.("violation") : n.length > 1 ? i?.("warning") : i?.("optimal");
    } catch (x) {
      console.error("[widget] Face detection error:", x);
    }
    fe.current = requestAnimationFrame(xe);
  }, [Qe, Fe, Le, he, i, g, d?.snapshots, l, I, K, Ze]);
  te(() => {
    F(0);
  }, []), te(() => ((async () => {
    try {
      const v = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 320 }, height: { ideal: 240 }, frameRate: { ideal: 15 } },
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      de.current && (de.current.srcObject = v);
      let x = null;
      const z = v.getAudioTracks();
      z.length > 0 && (x = new MediaStream(z), ke.current = x), await We(), x && await st(x), fe.current = requestAnimationFrame(xe);
    } catch {
      i?.("violation");
    }
  })(), () => {
    Ke.current = !0, fe.current && cancelAnimationFrame(fe.current), de.current?.srcObject && de.current.srcObject.getTracks().forEach((x) => x.stop()), ke.current && ke.current.getTracks().forEach((v) => v.stop()), ct(), ke.current = null;
  }), []);
  const et = (p) => {
    y(!0);
    const v = Ge.current?.getBoundingClientRect();
    v && m({ x: p.clientX - v.left, y: p.clientY - v.top });
  }, tt = (p) => {
    if (C) {
      const v = Math.max(0, Math.min((typeof window < "u" ? window.innerWidth : 0) - 280, p.clientX - W.x)), x = Math.max(0, Math.min((typeof window < "u" ? window.innerHeight : 0) - 400, p.clientY - W.y));
      j({ x: v, y: x });
    }
  }, Ne = () => y(!1);
  te(() => {
    if (C)
      return document.addEventListener("mousemove", tt), document.addEventListener("mouseup", Ne), () => {
        document.removeEventListener("mousemove", tt), document.removeEventListener("mouseup", Ne);
      };
  }, [C, W]);
  const nt = () => {
    document.hidden && Se((p) => {
      const v = p + 1;
      return w?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { when: Date.now() }, timestamp: Date.now() }), v;
    });
  }, Be = () => re((p) => p + 1), $e = (p) => {
    je((v) => v + 1), w?.({ eventType: "keystroke", severity: "info", context: "coding", data: {}, timestamp: Date.now() }), (p.ctrlKey || p.metaKey) && (p.key === "c" || p.key === "x" || p.key === "v") && (Ae((v) => v + 1), p.preventDefault(), w?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, key: p.key }, timestamp: Date.now() }));
  };
  te(() => (document.addEventListener("visibilitychange", nt), window.addEventListener("blur", Be), document.addEventListener("keydown", $e), () => {
    document.removeEventListener("visibilitychange", nt), window.removeEventListener("blur", Be), document.removeEventListener("keydown", $e);
  }), []);
  const ut = b === 0 ? "#ef4444" : b > 1 ? "#f59e0b" : "#22c55e";
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: Ge,
      onMouseDown: et,
      style: {
        position: "fixed",
        left: k.x,
        top: k.y,
        zIndex: 9999,
        width: 288,
        cursor: "move",
        border: `2px solid ${ut}`,
        borderRadius: 8,
        background: "#fff",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        padding: 12,
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ c.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: /* @__PURE__ */ c.jsx("div", { style: { fontSize: 12, fontWeight: 600 }, children: b === 0 ? "No Face" : b > 1 ? "Multiple Faces" : L ? "Optimal" : "Good" }) }),
        /* @__PURE__ */ c.jsxs("div", { style: { position: "relative", background: "#000", borderRadius: 4, overflow: "hidden" }, children: [
          /* @__PURE__ */ c.jsx("video", { ref: de, autoPlay: !0, muted: !0, playsInline: !0, style: { width: "100%", height: 128, objectFit: "cover" } }),
          /* @__PURE__ */ c.jsx("canvas", { ref: _e, width: 320, height: 240, style: { display: "none" } })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { style: { marginTop: 8, fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }, children: [
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Faces: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: b === 1 ? "#16a34a" : "#ef4444" }, children: b })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "No Face: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: Oe > 0 ? "#ef4444" : "#16a34a" }, children: Oe })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Multiple: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: Ue > 0 ? "#ef4444" : "#16a34a" }, children: Ue })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Eye Contact: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: pe?.isLookingAtCamera ? "#16a34a" : "#ef4444" }, children: pe?.isLookingAtCamera ? "Yes" : "No" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Posture: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: G?.isGoodPosture ? "#16a34a" : "#f59e0b" }, children: G?.isGoodPosture ? "Good" : "Poor" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Attire: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: H?.isProfessional ? "#16a34a" : "#f59e0b" }, children: H?.isProfessional ? "Professional" : "Casual" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Emotion: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: "#3b82f6" }, children: B?.dominant || "Unknown" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Audio: ",
            /* @__PURE__ */ c.jsxs("span", { style: { color: D > 50 ? "#16a34a" : D > 20 ? "#f59e0b" : "#ef4444" }, children: [
              D,
              "%"
            ] }),
            /* @__PURE__ */ c.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ c.jsx("div", { style: { width: `${Math.min(D, 100)}%`, height: 6, transition: "width 100ms", background: D > 50 ? "#16a34a" : D > 20 ? "#f59e0b" : "#ef4444" } }) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Audio Alerts: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: J > 0 ? "#ef4444" : "#16a34a" }, children: J })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Unfocus: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: ee > 0 ? "#ef4444" : "#16a34a" }, children: ee })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Tab Switch: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: se > 0 ? "#ef4444" : "#16a34a" }, children: se })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Keystrokes: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: "#3b82f6" }, children: Ee })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Copy Attempts: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: Ce > 0 ? "#ef4444" : "#16a34a" }, children: Ce })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Gaze Off: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: ve > 0 ? "#ef4444" : "#16a34a" }, children: ve })
          ] })
        ] })
      ]
    }
  );
}
const ot = (r, d) => r.length > d ? r.slice(r.length - d) : r, _t = (r, d) => ({
  sessionId: r,
  sessionType: "coding-assessment",
  startTime: Date.now(),
  preCheckResults: d,
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
function kt(r, d) {
  switch (d.eventType) {
    case "tab_switch":
      return { ...r, tabSwitches: r.tabSwitches + 1, violationCount: r.violationCount + 1 };
    case "audio_anomaly":
      return { ...r, audioAnomalies: r.audioAnomalies + 1, violationCount: r.violationCount + 1 };
    case "code_execution":
      return { ...r, codeExecutionCount: r.codeExecutionCount + 1 };
    case "face_detection": {
      const i = d.data?.reason;
      return i === "no_face" ? { ...r, noFaceIncidents: r.noFaceIncidents + 1, violationCount: r.violationCount + 1 } : i === "multiple_faces" ? { ...r, multipleFaceIncidents: r.multipleFaceIncidents + 1, violationCount: r.violationCount + 1 } : r;
    }
    case "gaze_tracking": {
      const i = d.data?.type === "focus_break", g = Number(d.data?.focusTimeMs) || 0, w = d.data?.offscreen === !0;
      return {
        ...r,
        focusBreaks: r.focusBreaks + (i ? 1 : 0),
        gazeDuration: r.gazeDuration + g,
        unfocusEvents: r.unfocusEvents + (i ? 1 : 0),
        gazeOffScreenIncidents: r.gazeOffScreenIncidents + (w ? 1 : 0),
        violationCount: r.violationCount + (i || w ? 1 : 0)
      };
    }
    case "keystroke": {
      const i = d.data?.copyCutPaste === !0;
      return {
        ...r,
        keystrokes: r.keystrokes + 1,
        copyCutPasteAttempts: r.copyCutPasteAttempts + (i ? 1 : 0),
        violationCount: r.violationCount + (i ? 1 : 0)
      };
    }
    default:
      return r;
  }
}
function Tt(r, d) {
  switch (d.type) {
    case "INIT":
      return { ...d.payload };
    case "SET_FIELDS": {
      const i = { ...r, ...d.payload };
      return i.snapshots && (i.snapshots = ot(i.snapshots, 50)), i.liveEvents && (i.liveEvents = ot(i.liveEvents, 200)), i;
    }
    case "ADD_EVENTS": {
      const i = ot([...r.liveEvents, ...d.events], 200), g = d.events.reduce(kt, r.sessionStats);
      return { ...r, liveEvents: i, sessionStats: g };
    }
    case "ADD_SNAPSHOT": {
      const i = ot([...r.snapshots, d.snapshot], 50);
      return { ...r, snapshots: i };
    }
    case "TICK": {
      const i = Math.max(0, d.now - r.startTime);
      return i === r.sessionStats.totalDuration ? r : { ...r, sessionStats: { ...r.sessionStats, totalDuration: i } };
    }
    case "COMPLETE": {
      const i = d.endTime ?? Date.now();
      return { ...r, sessionStats: { ...r.sessionStats, totalDuration: Math.max(0, i - r.startTime) } };
    }
    default:
      return r;
  }
}
function jt(r) {
  const [d, i] = S(null), g = Y((m) => {
    i((b) => b && Tt(b, m));
  }, []), w = P(null), k = P(0), j = P(null), C = Y((m) => {
    const b = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    w.current = b;
    const N = sessionStorage.getItem(b);
    if (N)
      try {
        const V = JSON.parse(N);
        return i(V), b;
      } catch {
      }
    const L = _t(b, m);
    return i(L), sessionStorage.setItem(b, JSON.stringify(L)), b;
  }, [r?.sessionId]), y = Y((m) => {
    const b = m ?? d;
    if (!(!b || !w.current))
      try {
        sessionStorage.setItem(w.current, JSON.stringify(b)), k.current = Date.now();
      } catch (N) {
        console.error("[session] persist failed", N);
      }
  }, [d]);
  return te(() => {
    if (!d) return;
    const b = Date.now() - k.current;
    return b < 1e3 ? (j.current && clearTimeout(j.current), j.current = setTimeout(() => y(), 1e3 - b)) : y(), () => {
      j.current && clearTimeout(j.current);
    };
  }, [d, y]), te(() => {
    const m = () => y();
    return window.addEventListener("visibilitychange", m), window.addEventListener("beforeunload", m), () => {
      window.removeEventListener("visibilitychange", m), window.removeEventListener("beforeunload", m);
    };
  }, [y]), te(() => {
    if (!d) return;
    const m = setInterval(() => g({ type: "TICK", now: Date.now() }), 1e3);
    return () => clearInterval(m);
  }, [d, g]), vt(() => ({
    state: d,
    sessionId: w.current,
    init: C,
    setFields: (m) => g({ type: "SET_FIELDS", payload: m }),
    addEvents: (m) => g({ type: "ADD_EVENTS", events: m }),
    addSnapshot: (m) => g({ type: "ADD_SNAPSHOT", snapshot: m }),
    complete: () => g({ type: "COMPLETE" })
  }), [d, g, C]);
}
function Dt({ onSessionStart: r, onSessionUpdate: d, onEvent: i }) {
  const [g, w] = S(null), [k, j] = S("optimal"), C = jt();
  return te(() => {
    if (g && !C.state) {
      const y = C.init(g);
      r?.(y, g);
    }
  }, [g, C]), g ? /* @__PURE__ */ c.jsx(
    Rt,
    {
      monitoringStatus: k,
      sessionData: C.state ?? void 0,
      onStatusChange: (y) => j(y),
      onUpdateSession: (y) => {
        C.setFields(y), d?.(y);
      },
      onAddEvent: (y) => {
        C.addEvents([{ ...y, timestamp: y.timestamp ?? Date.now() }]), i?.(y);
      }
    }
  ) : /* @__PURE__ */ c.jsx(
    Et,
    {
      onComplete: (y) => w(y),
      onError: () => w(null)
    }
  );
}
export {
  Rt as FloatingVideo,
  Et as Prechecks,
  Dt as ProctoringWidget
};
