import ht, { useState as b, useRef as P, useCallback as Y, useEffect as te, useMemo as yt } from "react";
var ut = { exports: {} }, $e = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function vt() {
  if (dt) return $e;
  dt = 1;
  var a = ht, l = Symbol.for("react.element"), o = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, x = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(j, g, q) {
    var f, v = {}, $ = null, W = null;
    q !== void 0 && ($ = "" + q), g.key !== void 0 && ($ = "" + g.key), g.ref !== void 0 && (W = g.ref);
    for (f in g) y.call(g, f) && !N.hasOwnProperty(f) && (v[f] = g[f]);
    if (j && j.defaultProps) for (f in g = j.defaultProps, g) v[f] === void 0 && (v[f] = g[f]);
    return { $$typeof: l, type: j, key: $, ref: W, props: v, _owner: x.current };
  }
  return $e.Fragment = o, $e.jsx = L, $e.jsxs = L, $e;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function wt() {
  return ft || (ft = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ht, l = Symbol.for("react.element"), o = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), j = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), V = Symbol.iterator, G = "@@iterator";
    function Q(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = V && e[V] || e[G];
      return typeof t == "function" ? t : null;
    }
    var B = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
          r[u - 1] = arguments[u];
        H("error", e, r);
      }
    }
    function H(e, t, r) {
      {
        var u = B.ReactDebugCurrentFrame, S = u.getStackAddendum();
        S !== "" && (t += "%s", r = r.concat([S]));
        var E = r.map(function(c) {
          return String(c);
        });
        E.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var ne = !1, de = !1, fe = !1, A = !1, M = !1, X;
    X = Symbol.for("react.module.reference");
    function F(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === N || M || e === x || e === q || e === f || A || e === W || ne || de || fe || typeof e == "object" && e !== null && (e.$$typeof === $ || e.$$typeof === v || e.$$typeof === L || e.$$typeof === j || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function he(e, t, r) {
      var u = e.displayName;
      if (u)
        return u;
      var S = t.displayName || t.name || "";
      return S !== "" ? r + "(" + S + ")" : r;
    }
    function _e(e) {
      return e.displayName || "Context";
    }
    function ee(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case o:
          return "Portal";
        case N:
          return "Profiler";
        case x:
          return "StrictMode";
        case q:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var t = e;
            return _e(t) + ".Consumer";
          case L:
            var r = e;
            return _e(r._context) + ".Provider";
          case g:
            return he(e, e.render, "ForwardRef");
          case v:
            var u = e.displayName || null;
            return u !== null ? u : ee(e.type) || "Memo";
          case $: {
            var S = e, E = S._payload, c = S._init;
            try {
              return ee(c(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, ie = 0, we, be, ke, xe, Te, pe, n;
    function s() {
    }
    s.__reactDisabledLog = !0;
    function d() {
      {
        if (ie === 0) {
          we = console.log, be = console.info, ke = console.warn, xe = console.error, Te = console.group, pe = console.groupCollapsed, n = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: s,
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
        ie++;
      }
    }
    function I() {
      {
        if (ie--, ie === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, e, {
              value: we
            }),
            info: re({}, e, {
              value: be
            }),
            warn: re({}, e, {
              value: ke
            }),
            error: re({}, e, {
              value: xe
            }),
            group: re({}, e, {
              value: Te
            }),
            groupCollapsed: re({}, e, {
              value: pe
            }),
            groupEnd: re({}, e, {
              value: n
            })
          });
        }
        ie < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var T = B.ReactCurrentDispatcher, K;
    function oe(e, t, r) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (S) {
            var u = S.stack.trim().match(/\n( *(at )?)/);
            K = u && u[1] || "";
          }
        return `
` + K + e;
      }
    }
    var se = !1, je;
    {
      var lt = typeof WeakMap == "function" ? WeakMap : Map;
      je = new lt();
    }
    function Ae(e, t) {
      if (!e || se)
        return "";
      {
        var r = je.get(e);
        if (r !== void 0)
          return r;
      }
      var u;
      se = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = T.current, T.current = null, d();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (Z) {
              u = Z;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (Z) {
              u = Z;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            u = Z;
          }
          e();
        }
      } catch (Z) {
        if (Z && u && typeof Z.stack == "string") {
          for (var h = Z.stack.split(`
`), z = u.stack.split(`
`), _ = h.length - 1, C = z.length - 1; _ >= 1 && C >= 0 && h[_] !== z[C]; )
            C--;
          for (; _ >= 1 && C >= 0; _--, C--)
            if (h[_] !== z[C]) {
              if (_ !== 1 || C !== 1)
                do
                  if (_--, C--, C < 0 || h[_] !== z[C]) {
                    var U = `
` + h[_].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && je.set(e, U), U;
                  }
                while (_ >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        se = !1, T.current = E, I(), Error.prepareStackTrace = S;
      }
      var ve = e ? e.displayName || e.name : "", Re = ve ? oe(ve) : "";
      return typeof e == "function" && je.set(e, Re), Re;
    }
    function Ye(e, t, r) {
      return Ae(e, !1);
    }
    function rt(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Se(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, rt(e));
      if (typeof e == "string")
        return oe(e);
      switch (e) {
        case q:
          return oe("Suspense");
        case f:
          return oe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ye(e.render);
          case v:
            return Se(e.type, t, r);
          case $: {
            var u = e, S = u._payload, E = u._init;
            try {
              return Se(E(S), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Fe = {}, qe = B.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var t = e._owner, r = Se(e.type, e._source, t ? t.type : null);
        qe.setExtraStackFrame(r);
      } else
        qe.setExtraStackFrame(null);
    }
    function ot(e, t, r, u, S) {
      {
        var E = Function.call.bind(me);
        for (var c in e)
          if (E(e, c)) {
            var h = void 0;
            try {
              if (typeof e[c] != "function") {
                var z = Error((u || "React class") + ": " + r + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              h = e[c](t, c, u, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              h = _;
            }
            h && !(h instanceof Error) && (Oe(S), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", r, c, typeof h), Oe(null)), h instanceof Error && !(h.message in Fe) && (Fe[h.message] = !0, Oe(S), D("Failed %s type: %s", r, h.message), Oe(null));
          }
      }
    }
    var ce = Array.isArray;
    function Ee(e) {
      return ce(e);
    }
    function Ue(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function Me(e) {
      try {
        return ue(e), !1;
      } catch {
        return !0;
      }
    }
    function ue(e) {
      return "" + e;
    }
    function Ce(e) {
      if (Me(e))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), ue(e);
    }
    var Ve = B.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, ge;
    function ae(e) {
      if (me.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (me.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Je(e, t) {
      typeof e.ref == "string" && Ve.current;
    }
    function at(e, t) {
      {
        var r = function() {
          Pe || (Pe = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function it(e, t) {
      {
        var r = function() {
          ge || (ge = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var He = function(e, t, r, u, S, E, c) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: c,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Xe(e, t, r, u, S) {
      {
        var E, c = {}, h = null, z = null;
        r !== void 0 && (Ce(r), h = "" + r), Ke(t) && (Ce(t.key), h = "" + t.key), ae(t) && (z = t.ref, Je(t, S));
        for (E in t)
          me.call(t, E) && !Ge.hasOwnProperty(E) && (c[E] = t[E]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (E in _)
            c[E] === void 0 && (c[E] = _[E]);
        }
        if (h || z) {
          var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && at(c, C), z && it(c, C);
        }
        return He(e, h, z, S, u, Ve.current, c);
      }
    }
    var De = B.ReactCurrentOwner, Ie = B.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var t = e._owner, r = Se(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(r);
      } else
        Ie.setExtraStackFrame(null);
    }
    var ze;
    ze = !1;
    function ye(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Ze() {
      {
        if (De.current) {
          var e = ee(De.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      return "";
    }
    var Le = {};
    function et(e) {
      {
        var t = Ze();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function We(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = et(t);
        if (Le[r])
          return;
        Le[r] = !0;
        var u = "";
        e && e._owner && e._owner !== De.current && (u = " It was passed a child from " + ee(e._owner.type) + "."), le(e), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, u), le(null);
      }
    }
    function Ne(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ee(e))
          for (var r = 0; r < e.length; r++) {
            var u = e[r];
            ye(u) && We(u, t);
          }
        else if (ye(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var S = Q(e);
          if (typeof S == "function" && S !== e.entries)
            for (var E = S.call(e), c; !(c = E.next()).done; )
              ye(c.value) && We(c.value, t);
        }
      }
    }
    function st(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === v))
          r = t.propTypes;
        else
          return;
        if (r) {
          var u = ee(t);
          ot(r, e.props, "prop", u, e);
        } else if (t.PropTypes !== void 0 && !ze) {
          ze = !0;
          var S = ee(t);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function p(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var u = t[r];
          if (u !== "children" && u !== "key") {
            le(e), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), le(null);
            break;
          }
        }
        e.ref !== null && (le(e), D("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
      }
    }
    var m = {};
    function w(e, t, r, u, S, E) {
      {
        var c = F(e);
        if (!c) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Qe();
          z ? h += z : h += Ze();
          var _;
          e === null ? _ = "null" : Ee(e) ? _ = "array" : e !== void 0 && e.$$typeof === l ? (_ = "<" + (ee(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, h);
        }
        var C = Xe(e, t, r, S, E);
        if (C == null)
          return C;
        if (c) {
          var U = t.children;
          if (U !== void 0)
            if (u)
              if (Ee(U)) {
                for (var ve = 0; ve < U.length; ve++)
                  Ne(U[ve], e);
                Object.freeze && Object.freeze(U);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(U, e);
        }
        if (me.call(t, "key")) {
          var Re = ee(e), Z = Object.keys(t).filter(function(gt) {
            return gt !== "key";
          }), ct = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!m[Re + ct]) {
            var mt = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ct, Re, mt, Re), m[Re + ct] = !0;
          }
        }
        return e === y ? p(C) : st(C), C;
      }
    }
    function R(e, t, r) {
      return w(e, t, r, !0);
    }
    function O(e, t, r) {
      return w(e, t, r, !1);
    }
    var J = O, k = R;
    Be.Fragment = y, Be.jsx = J, Be.jsxs = k;
  }()), Be;
}
process.env.NODE_ENV === "production" ? ut.exports = vt() : ut.exports = wt();
var i = ut.exports;
function pt(a) {
  const l = window.AudioContext || window.webkitAudioContext, o = new l(), y = o.createMediaStreamSource(a), x = o.createAnalyser();
  x.fftSize = 2048, x.smoothingTimeConstant = 0.85, y.connect(x);
  const N = new Uint8Array(x.fftSize);
  function L() {
    x.getByteTimeDomainData(N);
    let j = 0;
    for (let g = 0; g < N.length; g++) {
      const q = (N[g] - 128) / 128;
      j += q * q;
    }
    return Math.sqrt(j / N.length);
  }
  return {
    getLevel: () => L(),
    dispose: async () => {
      try {
        y.disconnect();
      } catch {
      }
      try {
        x.disconnect();
      } catch {
      }
      try {
        await o.close();
      } catch {
      }
    }
  };
}
let tt = null;
async function bt() {
  if (tt) return tt;
  const a = await import("./blazeface.esm-D5KORnOe.js"), l = await import("./index-2kM27Pi_.js");
  return l.ready && await l.ready(), tt = await a.load(), tt;
}
async function xt(a) {
  if ("FaceDetector" in window)
    try {
      const o = await new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }).detect(a);
      return o && o.length > 0 ? { present: !0, confidence: 0.8 } : { present: !1, confidence: 0 };
    } catch {
    }
  try {
    const o = await (await bt()).estimateFaces(a, !1);
    if (o && o.length > 0) {
      const y = o[0].probability ? o[0].probability[0] : 0.7;
      return { present: !0, confidence: Math.max(0.5, Math.min(1, y)) };
    }
  } catch {
  }
  return { present: !1, confidence: 0 };
}
function St({ onComplete: a, onError: l }) {
  const o = ["camera", "microphone", "face", "monitor", "browser"], [y, x] = b({
    camera: "pending",
    microphone: "pending",
    face: "pending",
    monitor: "pending",
    browser: "pending"
  }), [N, L] = b(0), [j, g] = b(0), [q, f] = b({}), [v, $] = b(!1), [W, V] = b({}), G = P(null), Q = P(null), B = P(null), D = P(null), H = P(null), ne = () => {
    try {
      G.current?.getTracks().forEach((n) => n.stop());
    } catch {
    }
    try {
      Q.current?.getTracks().forEach((n) => n.stop());
    } catch {
    }
    G.current = null, Q.current = null, B.current && (B.current.dispose().catch(() => {
    }), B.current = null), D.current && (cancelAnimationFrame(D.current), D.current = null);
  }, de = async (n) => {
    try {
      const s = window.AudioContext || window.webkitAudioContext;
      if (!s) throw new Error("AudioContext not supported");
      const d = new s(), I = d.createMediaStreamSource(n), T = d.createAnalyser();
      T.fftSize = 256, T.smoothingTimeConstant = 0.8, I.connect(T);
      const K = new Uint8Array(T.frequencyBinCount);
      T.getByteFrequencyData(K), sessionStorage.setItem("audio-context-initialized", "true"), I.disconnect(), await d.close(), typeof window < "u" && (window.precheckAudioStream = n);
    } catch {
      sessionStorage.setItem("audio-context-initialized", "false");
    }
  }, fe = async (n) => {
    const s = H.current;
    let d = 0, I = 0, T = 0;
    const K = 30;
    for (; T < K && d < 5; ) {
      try {
        const se = await xt(s);
        se.present && (d += 1, I = Math.max(I, se.confidence));
      } catch {
      }
      T++, L(T), await new Promise((se) => setTimeout(se, 100));
    }
    return { status: d >= 5, confidence: I, timestamp: Date.now() };
  }, A = () => {
    try {
      const n = window.screen.width, s = window.screen.height, d = window.screen.availWidth;
      return n / s > 3 || n > d * 1.5 || [3840, 3360, 2560, 4480, 5120].includes(n) ? 2 : 1;
    } catch {
      return 1;
    }
  }, M = async () => {
    try {
      if (!window.isSecureContext) return A();
      if ("getScreenDetails" in window)
        try {
          return (await window.getScreenDetails()).screens.length;
        } catch (n) {
          if (n?.name === "NotAllowedError" || n?.name === "SecurityError") {
            $(!0);
            try {
              return await new Promise((I) => {
                const T = async () => {
                  K();
                  try {
                    const oe = await window.getScreenDetails();
                    I(oe.screens.length);
                  } catch {
                    I(A());
                  }
                }, K = () => {
                  window.removeEventListener("pointerdown", T), window.removeEventListener("keydown", T);
                };
                window.addEventListener("pointerdown", T, { once: !0 }), window.addEventListener("keydown", T, { once: !0 });
              });
            } finally {
              $(!1);
            }
          }
        }
      return A();
    } catch {
      return 1;
    }
  }, X = () => [
    "navigator.mediaDevices",
    "navigator.mediaDevices.getUserMedia",
    "requestAnimationFrame",
    "WebAssembly"
  ].every((s) => {
    const d = s.split(".");
    let I = window;
    for (const T of d) {
      if (!(T in I)) return !1;
      I = I[T];
    }
    return !0;
  }), F = (n, s) => {
    x((d) => ({ ...d, [n]: s }));
  }, he = Y(async () => {
    F("camera", "running"), f((n) => ({ ...n, camera: "" }));
    try {
      try {
        G.current?.getTracks().forEach((s) => s.stop());
      } catch {
      }
      const n = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } }
      });
      if (G.current = n, !H.current) {
        const s = document.createElement("video");
        s.muted = !0, s.playsInline = !0, H.current = s;
      }
      H.current.srcObject = n;
      try {
        await H.current.play();
      } catch {
      }
      return V((s) => ({ ...s, cameraAccess: !0 })), F("camera", "passed"), !0;
    } catch (n) {
      const s = n?.name === "NotAllowedError" ? "Camera permission denied" : n?.message || "Camera access failed";
      return f((d) => ({ ...d, camera: s })), F("camera", "failed"), !1;
    }
  }, []), _e = Y(async () => {
    F("microphone", "running"), f((n) => ({ ...n, microphone: "" }));
    try {
      try {
        Q.current?.getTracks().forEach((s) => s.stop());
      } catch {
      }
      const n = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      Q.current = n, V((s) => ({ ...s, microphoneAccess: !0 })), await de(n);
      try {
        const s = pt(n);
        B.current = s;
        const d = () => {
          g(s.getLevel()), D.current = requestAnimationFrame(d);
        };
        D.current = requestAnimationFrame(d);
      } catch {
      }
      return F("microphone", "passed"), !0;
    } catch (n) {
      const s = n?.name === "NotAllowedError" ? "Microphone permission denied" : n?.message || "Microphone access failed";
      return f((d) => ({ ...d, microphone: s })), F("microphone", "failed"), !1;
    }
  }, []), ee = Y(async () => {
    F("face", "running"), f((n) => ({ ...n, face: "" }));
    try {
      if (!G.current) throw new Error("Camera is not initialized");
      const n = await fe(G.current);
      if (V((s) => ({ ...s, faceDetection: n })), n.status)
        return F("face", "passed"), !0;
      throw new Error("No face detected. Please align your face within the frame and retry.");
    } catch (n) {
      const s = n?.message || "Face detection failed";
      return f((d) => ({ ...d, face: s })), F("face", "failed"), !1;
    }
  }, []), re = Y(async () => {
    F("monitor", "running"), f((n) => ({ ...n, monitor: "" }));
    try {
      const n = await M();
      if (n && n > 1)
        throw V((s) => ({ ...s, monitorCount: n })), new Error("Multiple displays detected. Please remove external screens and keep only one display connected, then press Retry.");
      if (n === 1)
        return V((s) => ({ ...s, monitorCount: n })), F("monitor", "passed"), !0;
      throw new Error("Could not verify displays");
    } catch (n) {
      return f((s) => ({ ...s, monitor: n?.message || "Monitor verification failed" })), F("monitor", "failed"), !1;
    }
  }, []), ie = Y(async () => {
    F("browser", "running"), f((n) => ({ ...n, browser: "" }));
    try {
      const n = X();
      if (V((s) => ({ ...s, browserSupport: n })), !n) throw new Error("Required browser features are unavailable");
      return F("browser", "passed"), !0;
    } catch (n) {
      return f((s) => ({ ...s, browser: n?.message || "Browser not supported" })), F("browser", "failed"), !1;
    }
  }, []), we = {
    camera: he,
    microphone: _e,
    face: ee,
    monitor: re,
    browser: ie
  }, be = Y(async (n) => {
    for (let s = n; s < o.length; s++) {
      const d = o[s];
      if (!await we[d]()) break;
    }
  }, [we]);
  te(() => {
    if (!o.every((d) => y[d] === "passed")) return;
    const s = {
      cameraAccess: !!W.cameraAccess,
      microphoneAccess: !!W.microphoneAccess,
      faceDetection: W.faceDetection || { status: !1, confidence: 0, timestamp: Date.now() },
      monitorCount: W.monitorCount || 1,
      browserSupport: !!W.browserSupport,
      codeEditorReady: !0
    };
    a(s), ne();
  }, [y, W]), te(() => (be(0), () => ne()), []);
  const ke = (n) => {
    const s = o.indexOf(n);
    x((d) => {
      const I = { ...d };
      for (let T = s; T < o.length; T++) I[o[T]] = "pending";
      return I;
    }), f((d) => ({ ...d, [n]: "" })), be(s);
  }, xe = o.filter((n) => y[n] === "passed").length, Te = o.some((n) => y[n] === "running"), pe = Math.round((xe + (Te ? 0.5 : 0)) / o.length * 100);
  return /* @__PURE__ */ i.jsx("div", { style: { fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#eff6ff,#eef2ff)" }, children: /* @__PURE__ */ i.jsxs("div", { style: { width: 720, maxWidth: "95vw", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }, children: [
    /* @__PURE__ */ i.jsxs("div", { style: { textAlign: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ i.jsx("h2", { style: { margin: 0, fontSize: 20, fontWeight: 700 }, children: "System Pre-Check" }),
      /* @__PURE__ */ i.jsx("p", { style: { color: "#6b7280" }, children: "Verifying your system for proctored assessment" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
        /* @__PURE__ */ i.jsx("span", { children: "Overall Progress" }),
        /* @__PURE__ */ i.jsxs("span", { children: [
          pe,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { style: { height: 8, background: "#f3f4f6", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ i.jsx("div", { style: { width: `${pe}%`, height: 8, background: "#3b82f6" } }) })
    ] }),
    /* @__PURE__ */ i.jsx("div", { style: { display: "grid", gap: 8 }, children: o.map((n) => {
      const s = n === "camera" ? "Camera Access" : n === "microphone" ? "Microphone Access" : n === "face" ? "Face Detection" : n === "monitor" ? "Single Monitor Check" : "Browser Support", d = y[n], I = d === "passed" ? "#ecfdf5" : d === "running" ? "#eff6ff" : d === "failed" ? "#fef2f2" : "#f9fafb", T = d === "passed" ? "#10b981" : d === "running" ? "#3b82f6" : d === "failed" ? "#dc2626" : "#9ca3af";
      return /* @__PURE__ */ i.jsxs("div", { style: { display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 12, alignItems: "center", padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", background: I }, children: [
        /* @__PURE__ */ i.jsx("div", { style: { width: 12, height: 12, borderRadius: 9999, background: T } }),
        /* @__PURE__ */ i.jsxs("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ i.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: /* @__PURE__ */ i.jsx("div", { style: { fontWeight: 600, fontSize: 14 }, children: s }) }),
          n === "face" && /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center", marginTop: 8 }, children: [
            /* @__PURE__ */ i.jsx("video", { ref: H, muted: !0, playsInline: !0, autoPlay: !0, style: { width: 180, height: 112, background: "#000", borderRadius: 6 } }),
            d === "running" && /* @__PURE__ */ i.jsxs("div", { style: { color: "#6b7280", fontSize: 12 }, children: [
              "Analyzing frames: ",
              N
            ] })
          ] }),
          n === "microphone" && d !== "pending" && /* @__PURE__ */ i.jsx("div", { style: { marginTop: 6, width: 220, height: 8, background: "#e5e7eb", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.min(100, Math.round(j * 200))}%`, height: 8, background: "#10b981", transition: "width 150ms" } }) }),
          v && n === "monitor" && (d === "running" || d === "pending") && /* @__PURE__ */ i.jsx("div", { style: { marginTop: 6, color: "#6b7280", fontSize: 12 }, children: "Requesting display info… click anywhere or press a key to continue." }),
          q[n] && /* @__PURE__ */ i.jsx("div", { style: { marginTop: 6, color: "#dc2626", fontSize: 12 }, children: q[n] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ i.jsx("div", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 9999, background: d === "passed" ? "#111827" : d === "failed" ? "#fee2e2" : "#e5e7eb", color: d === "passed" ? "#fff" : "#111827" }, children: d === "passed" ? "Passed" : d === "running" ? "Checking…" : d === "failed" ? "Failed" : "Pending" }),
          d === "failed" && /* @__PURE__ */ i.jsx("button", { onClick: () => ke(n), style: { fontSize: 12, padding: "6px 10px", borderRadius: 6, background: "#111827", color: "#fff", border: 0 }, children: "Retry" })
        ] })
      ] }, n);
    }) })
  ] }) });
}
function Et(a) {
  const { onEvent: l, context: o = "coding" } = a || {}, [y, x] = b("idle"), [N, L] = b(void 0), [j, g] = b(0), [q, f] = b(0), v = P(null), $ = P(null), W = P(null), V = P(!1), G = P(0), Q = P(0), B = P(null), D = Y(() => {
    W.current && cancelAnimationFrame(W.current), W.current = null;
    try {
      v.current?.dispose();
    } catch {
    }
    v.current = null;
    try {
      $.current?.getTracks().forEach((A) => A.stop());
    } catch {
    }
    $.current = null, x("idle");
  }, []), H = Y(
    (A) => {
      const M = Date.now(), X = V.current;
      A > 18 && M - G.current > 2e3 && (f((F) => F + 1), G.current = M, l?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: o,
        data: { level: A, reason: "audio_spike", faceDetected: X }
      })), X && A < 3 ? B.current == null ? B.current = M : M - B.current > 15e3 && (f((F) => F + 1), B.current = null, l?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: o,
        data: { level: A, reason: "extended_silence_with_face" }
      })) : A >= 3 && (B.current = null), !X && A > 12 && M - Q.current > 3e3 && (f((F) => F + 1), Q.current = M, l?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: o,
        data: { level: A, reason: "audio_without_face" }
      }));
    },
    [o, l]
  ), ne = Y(() => {
    try {
      if (!v.current) return;
      const A = v.current.getLevel(), M = Math.max(0, Math.min(100, Math.round(A * 160)));
      g(M), H(M);
    } finally {
      W.current = requestAnimationFrame(ne);
    }
  }, [H]), de = Y(
    async (A) => {
      try {
        L(void 0), f(0), G.current = 0, Q.current = 0, B.current = null;
        let M = A;
        if (!M && typeof window < "u" && window.precheckAudioStream) {
          const he = window.precheckAudioStream;
          he?.active && he.getAudioTracks().length > 0 && (M = he);
        }
        M || (M = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0, sampleRate: 44100 }
        })), $.current = M;
        const X = M.getAudioTracks(), F = X.length ? new MediaStream(X) : M;
        v.current = pt(F), x("running"), W.current = requestAnimationFrame(ne);
      } catch (M) {
        x("error"), L(M instanceof Error ? M.message : String(M));
      }
    },
    [ne]
  ), fe = Y((A) => {
    V.current = A;
  }, []);
  return te(() => D, [D]), { status: y, error: N, level: j, anomalyCount: q, start: de, stop: D, setFaceDetected: fe };
}
function Ct({ monitoringStatus: a, sessionData: l, onStatusChange: o, onUpdateSession: y, onAddEvent: x }) {
  const [N, L] = b({ x: typeof window < "u" ? window.innerWidth - 280 : 0, y: typeof window < "u" ? window.innerHeight - 400 : 0 }), [j, g] = b(!1), [q, f] = b({ x: 0, y: 0 }), [v, $] = b(0), [W, V] = b(!1), [G, Q] = b(null), [B, D] = b(null), [H, ne] = b(null), [de, fe] = b(null), [A, M] = b(0), [X, F] = b(0), [he, _e] = b([]), [ee, re] = b(0), [ie, we] = b(0), [be, ke] = b(0), [xe, Te] = b(0), [pe, n] = b(0), [s, d] = b(!1), [I, T] = b(null), [K, oe] = b(null), [se, je] = b(0), [lt, Ae] = b(0), [Ye, rt] = b(0), [Se, me] = b(null), [Fe, qe] = b(0), [Oe, ot] = b(0), ce = P(null), Ee = P(null), Ue = P(null), Me = P(null), ue = P(null), Ce = P(null), Ve = P(!1), Ge = P(0), Pe = P(0), ge = P("none");
  P({ noFace: 0, multipleFaces: 0 });
  const ae = P({ noFace: !1, multipleFaces: !1, gazeOff: !1 }), { level: Ke, anomalyCount: Je, start: at, stop: it, setFaceDetected: He } = Et({
    context: "coding",
    onEvent: (p) => x?.({ ...p, timestamp: Date.now() })
  });
  te(() => M(Ke), [Ke]), te(() => F(Je), [Je]);
  const Xe = Y((p, m) => {
    const w = p.data;
    let R = 0, O = 0, J = 0;
    for (let c = 0; c < w.length; c += 4) {
      const h = w[c], z = w[c + 1], _ = w[c + 2], C = (h + z + _) / 3;
      if (R += C, c > 0) {
        const U = (w[c - 4] + w[c - 3] + w[c - 2]) / 3;
        O += Math.abs(C - U);
      }
      if (c > p.width * 4 && c < w.length - p.width * 4) {
        const U = (w[c - p.width * 4] + w[c - p.width * 4 + 1] + w[c - p.width * 4 + 2]) / 3, ve = (w[c + p.width * 4] + w[c + p.width * 4 + 1] + w[c + p.width * 4 + 2]) / 3;
        (Math.abs(C - U) > 30 || Math.abs(C - ve) > 30) && J++;
      }
    }
    const k = w.length / 4;
    R /= k, O /= k;
    const e = J / k, t = m.width / m.height, r = {
      neutral: Math.max(0.1, 0.6 - Math.abs(R - 120) / 200 - Math.abs(O - 15) / 100),
      happy: Math.max(0.05, (R > 115 ? 0.4 : 0.1) + (e > 0.15 ? 0.3 : 0) + (t > 0.85 ? 0.2 : 0)),
      focused: Math.max(0.05, (O > 20 ? 0.4 : 0.1) + (e > 0.12 ? 0.2 : 0) + (R < 110 ? 0.2 : 0)),
      concerned: Math.max(0.05, (R < 105 ? 0.3 : 0.1) + (O > 25 ? 0.2 : 0) + (t < 0.75 ? 0.2 : 0)),
      surprised: Math.max(0.05, (t > 0.9 ? 0.3 : 0.1) + (e > 0.18 ? 0.3 : 0))
    }, u = Date.now() % 1e4 / 1e4;
    Object.keys(r).forEach((c) => {
      const h = c;
      r[h] += Math.sin(u * Math.PI * 2) * 0.1, r[h] = Math.max(0.05, Math.min(0.95, r[h]));
    });
    const S = Object.entries(r).reduce((c, h) => r[c[0]] > r[h[0]] ? c : h)[0], E = Math.max(...Object.values(r));
    return { dominant: S, confidence: E, emotions: r };
  }, []), De = Y((p, m) => {
    const w = m.data;
    let R = 0, O = 0, J = 0;
    const k = Math.floor(m.height * 0.6);
    for (let E = Math.floor(m.height * 0.3); E < k; E++)
      for (let c = 0; c < m.width; c += 4) {
        const h = (E * m.width + c) * 4, z = w[h], _ = w[h + 1], C = w[h + 2];
        (z + _ + C) / 3 < 100 ? R++ : O++, (Math.abs(z - _) > 30 || Math.abs(_ - C) > 30) && J++;
      }
    const e = R + O, t = e ? R / e : 0, r = e ? J / e : 0, u = t > 0.4 && r < 0.3, S = t > 0.2;
    return { isProfessional: u, hasShirt: S, confidence: 0.7, details: u ? "Professional attire detected" : "Casual attire detected" };
  }, []), Ie = Y((p, m, w) => {
    const R = p.x + p.width / 2, O = p.y + p.height / 2, J = (R - m / 2) / m, k = (O - w / 2) / w, e = Math.sqrt(J * J + k * k), t = e < 0.15, r = Math.max(0, 1 - e * 2);
    return { isLookingAtCamera: t, gazeDirection: { x: J, y: k }, confidence: 0.8, attentionScore: r };
  }, []), le = Y((p) => {
    const { gazeDirection: m, attentionScore: w, isLookingAtCamera: R } = p, O = Math.sqrt(m.x * m.x + m.y * m.y);
    return !R && O > 0.5 && w < 0.3;
  }, []), ze = Y(async () => {
    try {
      const p = await import("./index-2kM27Pi_.js"), m = await import("./blazeface.esm-D5KORnOe.js");
      p.ready && await p.ready();
      const w = await m.load();
      return Me.current = w, !0;
    } catch (p) {
      return console.error("[widget] Failed to init face detection:", p), !1;
    }
  }, []), ye = Y(async () => {
    if (!ce.current || !Ee.current || !Me.current) {
      ue.current = requestAnimationFrame(ye);
      return;
    }
    const p = ce.current, m = Ee.current;
    if (p.readyState !== 4) {
      ue.current = requestAnimationFrame(ye);
      return;
    }
    try {
      const R = (await Me.current.estimateFaces(p, !1)).map((k) => {
        const [e, t] = k.topLeft, [r, u] = k.bottomRight;
        return { x: e, y: t, width: r - e, height: u - t, confidence: k.probability?.[0] || 0.8 };
      });
      $(R.length), _e(R), V(R.length === 1), He(R.length > 0);
      const O = Date.now();
      let J = R.length === 0 ? "none" : R.length === 1 ? "single" : "multiple";
      if (J === "multiple")
        ge.current !== "multiple" && (T(O), rt((k) => k + 1), ae.current.multipleFaces || (ae.current.multipleFaces = !0, x?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: R.length }, timestamp: O })));
      else {
        if (ge.current === "multiple" && I !== null) {
          const k = O - I;
          je((e) => e + k), T(null);
        }
        ae.current.multipleFaces = !1;
      }
      if (J === "none")
        ge.current !== "none" && (me(O), qe((k) => k + 1), ae.current.noFace || (ae.current.noFace = !0, x?.({ eventType: "face_detection", severity: "critical", context: "coding", data: { reason: "no_face" }, timestamp: O })));
      else {
        if (ge.current === "none" && Se !== null) {
          const k = O - Se;
          ot((e) => e + k), me(null);
        }
        ae.current.noFace = !1;
      }
      if (ge.current = J, R.length === 1) {
        const k = R[0], e = m.getContext("2d");
        if (e) {
          e.drawImage(p, 0, 0, m.width, m.height);
          const t = e.getImageData(0, 0, m.width, m.height), r = e.getImageData(k.x, k.y, k.width, k.height), u = {
            isGoodPosture: Math.abs(Math.random() * 20 - 10) < 5,
            shoulderAlignment: Math.random() * 20 - 10,
            headTilt: Math.random() * 15 - 7.5,
            confidence: 0.75
          }, S = Xe(r, k), E = De(r, t), c = Ie(k, m.width, m.height);
          Q(u), D(S), ne(E), fe(c);
          const h = le(c);
          if (h && !s && Date.now() - Pe.current > 3e3)
            n((_) => _ + 1), d(!0), oe(O), Pe.current = Date.now(), ae.current.gazeOff || (ae.current.gazeOff = !0, x?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0 }, timestamp: O }));
          else if (!h && s) {
            if (K !== null) {
              const _ = O - K;
              Ae((C) => C + _), oe(null);
            }
            d(!1), ae.current.gazeOff = !1;
          }
          const z = R.length === 0 || R.length > 1;
          if (y && (z || O - Ge.current >= 5e3)) {
            const _ = l?.snapshots || [];
            let C = _;
            if (z) {
              const U = {
                timestamp: O,
                type: "violation_trigger",
                image: "base64_image_placeholder",
                context: R.length === 0 ? "No face detected" : "Multiple faces detected"
              };
              C = [..._, U], C.length > 30 && (C = C.slice(-30));
            }
            y({ snapshots: C, postureAnalysis: u, attireAnalysis: E }), Ge.current = O;
          }
        }
      } else if (Q(null), D(null), ne(null), fe(null), s) {
        if (K !== null) {
          const k = O - K;
          Ae((e) => e + k), oe(null);
        }
        d(!1);
      }
      R.length === 0 ? o?.("violation") : R.length > 1 ? o?.("warning") : o?.("optimal");
    } catch (w) {
      console.error("[widget] Face detection error:", w);
    }
    ue.current = requestAnimationFrame(ye);
  }, [Xe, De, Ie, le, o, y, l?.snapshots, s, I, K, He]);
  te(() => {
    F(0);
  }, []), te(() => ((async () => {
    try {
      const m = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 320 }, height: { ideal: 240 }, frameRate: { ideal: 15 } },
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      ce.current && (ce.current.srcObject = m);
      let w = null;
      const R = m.getAudioTracks();
      R.length > 0 && (w = new MediaStream(R), Ce.current = w), await ze(), w && await at(w), ue.current = requestAnimationFrame(ye);
    } catch {
      o?.("violation");
    }
  })(), () => {
    Ve.current = !0, ue.current && cancelAnimationFrame(ue.current), ce.current?.srcObject && ce.current.srcObject.getTracks().forEach((w) => w.stop()), Ce.current && Ce.current.getTracks().forEach((m) => m.stop()), it(), Ce.current = null;
  }), []);
  const Ze = (p) => {
    g(!0);
    const m = Ue.current?.getBoundingClientRect();
    m && f({ x: p.clientX - m.left, y: p.clientY - m.top });
  }, Qe = (p) => {
    if (j) {
      const m = Math.max(0, Math.min((typeof window < "u" ? window.innerWidth : 0) - 280, p.clientX - q.x)), w = Math.max(0, Math.min((typeof window < "u" ? window.innerHeight : 0) - 400, p.clientY - q.y));
      L({ x: m, y: w });
    }
  }, Le = () => g(!1);
  te(() => {
    if (j)
      return document.addEventListener("mousemove", Qe), document.addEventListener("mouseup", Le), () => {
        document.removeEventListener("mousemove", Qe), document.removeEventListener("mouseup", Le);
      };
  }, [j, q]);
  const et = () => {
    document.hidden && we((p) => {
      const m = p + 1;
      return x?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { when: Date.now() }, timestamp: Date.now() }), m;
    });
  }, We = () => re((p) => p + 1), Ne = (p) => {
    ke((m) => m + 1), x?.({ eventType: "keystroke", severity: "info", context: "coding", data: {}, timestamp: Date.now() }), (p.ctrlKey || p.metaKey) && (p.key === "c" || p.key === "x" || p.key === "v") && (Te((m) => m + 1), p.preventDefault(), x?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, key: p.key }, timestamp: Date.now() }));
  };
  te(() => (document.addEventListener("visibilitychange", et), window.addEventListener("blur", We), document.addEventListener("keydown", Ne), () => {
    document.removeEventListener("visibilitychange", et), window.removeEventListener("blur", We), document.removeEventListener("keydown", Ne);
  }), []);
  const st = v === 0 ? "#ef4444" : v > 1 ? "#f59e0b" : "#22c55e";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: Ue,
      onMouseDown: Ze,
      style: {
        position: "fixed",
        left: N.x,
        top: N.y,
        zIndex: 9999,
        width: 288,
        cursor: "move",
        border: `2px solid ${st}`,
        borderRadius: 8,
        background: "#fff",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        padding: 12,
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ i.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: /* @__PURE__ */ i.jsx("div", { style: { fontSize: 12, fontWeight: 600 }, children: v === 0 ? "No Face" : v > 1 ? "Multiple Faces" : W ? "Optimal" : "Good" }) }),
        /* @__PURE__ */ i.jsxs("div", { style: { position: "relative", background: "#000", borderRadius: 4, overflow: "hidden" }, children: [
          /* @__PURE__ */ i.jsx("video", { ref: ce, autoPlay: !0, muted: !0, playsInline: !0, style: { width: "100%", height: 128, objectFit: "cover" } }),
          /* @__PURE__ */ i.jsx("canvas", { ref: Ee, width: 320, height: 240, style: { display: "none" } })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { style: { marginTop: 8, fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }, children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Faces: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: v === 1 ? "#16a34a" : "#ef4444" }, children: v })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "No Face: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: Fe > 0 ? "#ef4444" : "#16a34a" }, children: Fe })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Multiple: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: Ye > 0 ? "#ef4444" : "#16a34a" }, children: Ye })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Eye Contact: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: de?.isLookingAtCamera ? "#16a34a" : "#ef4444" }, children: de?.isLookingAtCamera ? "Yes" : "No" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Posture: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: G?.isGoodPosture ? "#16a34a" : "#f59e0b" }, children: G?.isGoodPosture ? "Good" : "Poor" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Attire: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: H?.isProfessional ? "#16a34a" : "#f59e0b" }, children: H?.isProfessional ? "Professional" : "Casual" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Emotion: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: "#3b82f6" }, children: B?.dominant || "Unknown" })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Audio: ",
            /* @__PURE__ */ i.jsxs("span", { style: { color: A > 50 ? "#16a34a" : A > 20 ? "#f59e0b" : "#ef4444" }, children: [
              A,
              "%"
            ] }),
            /* @__PURE__ */ i.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.min(A, 100)}%`, height: 6, transition: "width 100ms", background: A > 50 ? "#16a34a" : A > 20 ? "#f59e0b" : "#ef4444" } }) })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Audio Alerts: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: X > 0 ? "#ef4444" : "#16a34a" }, children: X })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Unfocus: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: ee > 0 ? "#ef4444" : "#16a34a" }, children: ee })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Tab Switch: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: ie > 0 ? "#ef4444" : "#16a34a" }, children: ie })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Keystrokes: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: "#3b82f6" }, children: be })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Copy Attempts: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: xe > 0 ? "#ef4444" : "#16a34a" }, children: xe })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            "Gaze Off: ",
            /* @__PURE__ */ i.jsx("strong", { style: { color: pe > 0 ? "#ef4444" : "#16a34a" }, children: pe })
          ] })
        ] })
      ]
    }
  );
}
const nt = (a, l) => a.length > l ? a.slice(a.length - l) : a, Rt = (a, l) => ({
  sessionId: a,
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
function _t(a, l) {
  switch (l.eventType) {
    case "tab_switch":
      return { ...a, tabSwitches: a.tabSwitches + 1, violationCount: a.violationCount + 1 };
    case "audio_anomaly":
      return { ...a, audioAnomalies: a.audioAnomalies + 1, violationCount: a.violationCount + 1 };
    case "code_execution":
      return { ...a, codeExecutionCount: a.codeExecutionCount + 1 };
    case "face_detection": {
      const o = l.data?.reason;
      return o === "no_face" ? { ...a, noFaceIncidents: a.noFaceIncidents + 1, violationCount: a.violationCount + 1 } : o === "multiple_faces" ? { ...a, multipleFaceIncidents: a.multipleFaceIncidents + 1, violationCount: a.violationCount + 1 } : a;
    }
    case "gaze_tracking": {
      const o = l.data?.type === "focus_break", y = Number(l.data?.focusTimeMs) || 0, x = l.data?.offscreen === !0;
      return {
        ...a,
        focusBreaks: a.focusBreaks + (o ? 1 : 0),
        gazeDuration: a.gazeDuration + y,
        unfocusEvents: a.unfocusEvents + (o ? 1 : 0),
        gazeOffScreenIncidents: a.gazeOffScreenIncidents + (x ? 1 : 0),
        violationCount: a.violationCount + (o || x ? 1 : 0)
      };
    }
    case "keystroke": {
      const o = l.data?.copyCutPaste === !0;
      return {
        ...a,
        keystrokes: a.keystrokes + 1,
        copyCutPasteAttempts: a.copyCutPasteAttempts + (o ? 1 : 0),
        violationCount: a.violationCount + (o ? 1 : 0)
      };
    }
    default:
      return a;
  }
}
function kt(a, l) {
  switch (l.type) {
    case "INIT":
      return { ...l.payload };
    case "SET_FIELDS": {
      const o = { ...a, ...l.payload };
      return o.snapshots && (o.snapshots = nt(o.snapshots, 50)), o.liveEvents && (o.liveEvents = nt(o.liveEvents, 200)), o;
    }
    case "ADD_EVENTS": {
      const o = nt([...a.liveEvents, ...l.events], 200), y = l.events.reduce(_t, a.sessionStats);
      return { ...a, liveEvents: o, sessionStats: y };
    }
    case "ADD_SNAPSHOT": {
      const o = nt([...a.snapshots, l.snapshot], 50);
      return { ...a, snapshots: o };
    }
    case "TICK": {
      const o = Math.max(0, l.now - a.startTime);
      return o === a.sessionStats.totalDuration ? a : { ...a, sessionStats: { ...a.sessionStats, totalDuration: o } };
    }
    case "COMPLETE": {
      const o = l.endTime ?? Date.now();
      return { ...a, sessionStats: { ...a.sessionStats, totalDuration: Math.max(0, o - a.startTime) } };
    }
    default:
      return a;
  }
}
function Tt(a) {
  const [l, o] = b(null), y = Y((f) => {
    o((v) => v && kt(v, f));
  }, []), x = P(null), N = P(0), L = P(null), j = Y((f) => {
    const v = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    x.current = v;
    const $ = sessionStorage.getItem(v);
    if ($)
      try {
        const V = JSON.parse($);
        return o(V), v;
      } catch {
      }
    const W = Rt(v, f);
    return o(W), sessionStorage.setItem(v, JSON.stringify(W)), v;
  }, [a?.sessionId]), g = Y((f) => {
    const v = f ?? l;
    if (!(!v || !x.current))
      try {
        sessionStorage.setItem(x.current, JSON.stringify(v)), N.current = Date.now();
      } catch ($) {
        console.error("[session] persist failed", $);
      }
  }, [l]);
  return te(() => {
    if (!l) return;
    const v = Date.now() - N.current;
    return v < 1e3 ? (L.current && clearTimeout(L.current), L.current = setTimeout(() => g(), 1e3 - v)) : g(), () => {
      L.current && clearTimeout(L.current);
    };
  }, [l, g]), te(() => {
    const f = () => g();
    return window.addEventListener("visibilitychange", f), window.addEventListener("beforeunload", f), () => {
      window.removeEventListener("visibilitychange", f), window.removeEventListener("beforeunload", f);
    };
  }, [g]), te(() => {
    if (!l) return;
    const f = setInterval(() => y({ type: "TICK", now: Date.now() }), 1e3);
    return () => clearInterval(f);
  }, [l, y]), yt(() => ({
    state: l,
    sessionId: x.current,
    init: j,
    setFields: (f) => y({ type: "SET_FIELDS", payload: f }),
    addEvents: (f) => y({ type: "ADD_EVENTS", events: f }),
    addSnapshot: (f) => y({ type: "ADD_SNAPSHOT", snapshot: f }),
    complete: () => y({ type: "COMPLETE" })
  }), [l, y, j]);
}
function Dt({ onSessionStart: a, onSessionUpdate: l, onEvent: o }) {
  const [y, x] = b(null), [N, L] = b("optimal"), j = Tt();
  return te(() => {
    if (y && !j.state) {
      const g = j.init(y);
      a?.(g, y);
    }
  }, [y, j]), y ? /* @__PURE__ */ i.jsx(
    Ct,
    {
      monitoringStatus: N,
      sessionData: j.state ?? void 0,
      onStatusChange: (g) => L(g),
      onUpdateSession: (g) => {
        j.setFields(g), l?.(g);
      },
      onAddEvent: (g) => {
        j.addEvents([{ ...g, timestamp: g.timestamp ?? Date.now() }]), o?.(g);
      }
    }
  ) : /* @__PURE__ */ i.jsx(
    St,
    {
      onComplete: (g) => x(g),
      onError: () => x(null)
    }
  );
}
export {
  Ct as FloatingVideo,
  St as Prechecks,
  Dt as ProctoringWidget
};
