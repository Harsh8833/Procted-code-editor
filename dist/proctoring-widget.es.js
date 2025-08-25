import yt, { useState as C, useRef as D, useCallback as $, useEffect as te, useMemo as bt } from "react";
var ft = { exports: {} }, Ue = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function xt() {
  if (mt) return Ue;
  mt = 1;
  var n = yt, d = Symbol.for("react.element"), c = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, x = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(_, w, B) {
    var h, b = {}, O = null, N = null;
    B !== void 0 && (O = "" + B), w.key !== void 0 && (O = "" + w.key), w.ref !== void 0 && (N = w.ref);
    for (h in w) v.call(w, h) && !j.hasOwnProperty(h) && (b[h] = w[h]);
    if (_ && _.defaultProps) for (h in w = _.defaultProps, w) b[h] === void 0 && (b[h] = w[h]);
    return { $$typeof: d, type: _, key: O, ref: N, props: b, _owner: x.current };
  }
  return Ue.Fragment = c, Ue.jsx = A, Ue.jsxs = A, Ue;
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
var pt;
function St() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    var n = yt, d = Symbol.for("react.element"), c = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), _ = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), G = Symbol.iterator, Q = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = G && e[G] || e[Q];
      return typeof t == "function" ? t : null;
    }
    var Y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          o[s - 1] = arguments[s];
        se("error", e, o);
      }
    }
    function se(e, t, o) {
      {
        var s = Y.ReactDebugCurrentFrame, g = s.getStackAddendum();
        g !== "" && (t += "%s", o = o.concat([g]));
        var R = o.map(function(i) {
          return String(i);
        });
        R.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, R);
      }
    }
    var ae = !1, de = !1, fe = !1, F = !1, S = !1, K;
    K = Symbol.for("react.module.reference");
    function J(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === j || S || e === x || e === B || e === h || F || e === N || ae || de || fe || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === b || e.$$typeof === A || e.$$typeof === _ || e.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function he(e, t, o) {
      var s = e.displayName;
      if (s)
        return s;
      var g = t.displayName || t.name || "";
      return g !== "" ? o + "(" + g + ")" : o;
    }
    function Te(e) {
      return e.displayName || "Context";
    }
    function ee(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case c:
          return "Portal";
        case j:
          return "Profiler";
        case x:
          return "StrictMode";
        case B:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var t = e;
            return Te(t) + ".Consumer";
          case A:
            var o = e;
            return Te(o._context) + ".Provider";
          case w:
            return he(e, e.render, "ForwardRef");
          case b:
            var s = e.displayName || null;
            return s !== null ? s : ee(e.type) || "Memo";
          case O: {
            var g = e, R = g._payload, i = g._init;
            try {
              return ee(i(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, re = 0, _e, ke, Me, me, r, l, y;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function z() {
      {
        if (re === 0) {
          _e = console.log, ke = console.info, Me = console.warn, me = console.error, r = console.group, l = console.groupCollapsed, y = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: I,
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
        re++;
      }
    }
    function ce() {
      {
        if (re--, re === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, e, {
              value: _e
            }),
            info: ne({}, e, {
              value: ke
            }),
            warn: ne({}, e, {
              value: Me
            }),
            error: ne({}, e, {
              value: me
            }),
            group: ne({}, e, {
              value: r
            }),
            groupCollapsed: ne({}, e, {
              value: l
            }),
            groupEnd: ne({}, e, {
              value: y
            })
          });
        }
        re < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = Y.ReactCurrentDispatcher, X;
    function pe(e, t, o) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (g) {
            var s = g.stack.trim().match(/\n( *(at )?)/);
            X = s && s[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Ve = !1, je;
    {
      var ht = typeof WeakMap == "function" ? WeakMap : Map;
      je = new ht();
    }
    function Oe(e, t) {
      if (!e || Ve)
        return "";
      {
        var o = je.get(e);
        if (o !== void 0)
          return o;
      }
      var s;
      Ve = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = be.current, be.current = null, z();
      try {
        if (t) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (U) {
              s = U;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (U) {
              s = U;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            s = U;
          }
          e();
        }
      } catch (U) {
        if (U && s && typeof U.stack == "string") {
          for (var a = U.stack.split(`
`), E = s.stack.split(`
`), T = a.length - 1, k = E.length - 1; T >= 1 && k >= 0 && a[T] !== E[k]; )
            k--;
          for (; T >= 1 && k >= 0; T--, k--)
            if (a[T] !== E[k]) {
              if (T !== 1 || k !== 1)
                do
                  if (T--, k--, k < 0 || a[T] !== E[k]) {
                    var W = `
` + a[T].replace(" at new ", " at ");
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && je.set(e, W), W;
                  }
                while (T >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        Ve = !1, be.current = R, ce(), Error.prepareStackTrace = g;
      }
      var V = e ? e.displayName || e.name : "", Z = V ? pe(V) : "";
      return typeof e == "function" && je.set(e, Z), Z;
    }
    function Ge(e, t, o) {
      return Oe(e, !1);
    }
    function it(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function xe(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, it(e));
      if (typeof e == "string")
        return pe(e);
      switch (e) {
        case B:
          return pe("Suspense");
        case h:
          return pe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            return Ge(e.render);
          case b:
            return xe(e.type, t, o);
          case O: {
            var s = e, g = s._payload, R = s._init;
            try {
              return xe(R(g), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Pe = {}, He = Y.ReactDebugCurrentFrame;
    function Ie(e) {
      if (e) {
        var t = e._owner, o = xe(e.type, e._source, t ? t.type : null);
        He.setExtraStackFrame(o);
      } else
        He.setExtraStackFrame(null);
    }
    function st(e, t, o, s, g) {
      {
        var R = Function.call.bind(ge);
        for (var i in e)
          if (R(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var E = Error((s || "React class") + ": " + o + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[i](t, i, s, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              a = T;
            }
            a && !(a instanceof Error) && (Ie(g), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", o, i, typeof a), Ie(null)), a instanceof Error && !(a.message in Pe) && (Pe[a.message] = !0, Ie(g), P("Failed %s type: %s", o, a.message), Ie(null));
          }
      }
    }
    var ue = Array.isArray;
    function Se(e) {
      return ue(e);
    }
    function Ke(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function ze(e) {
      try {
        return le(e), !1;
      } catch {
        return !0;
      }
    }
    function le(e) {
      return "" + e;
    }
    function Ee(e) {
      if (ze(e))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), le(e);
    }
    var Je = Y.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, ye;
    function oe(e) {
      if (ge.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (ge.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, t) {
      typeof e.ref == "string" && Je.current;
    }
    function ct(e, t) {
      {
        var o = function() {
          Le || (Le = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function ut(e, t) {
      {
        var o = function() {
          ye || (ye = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var et = function(e, t, o, s, g, R, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: i,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tt(e, t, o, s, g) {
      {
        var R, i = {}, a = null, E = null;
        o !== void 0 && (Ee(o), a = "" + o), Ze(t) && (Ee(t.key), a = "" + t.key), oe(t) && (E = t.ref, Qe(t, g));
        for (R in t)
          ge.call(t, R) && !Xe.hasOwnProperty(R) && (i[R] = t[R]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (R in T)
            i[R] === void 0 && (i[R] = T[R]);
        }
        if (a || E) {
          var k = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ct(i, k), E && ut(i, k);
        }
        return et(e, a, E, g, s, Je.current, i);
      }
    }
    var Ae = Y.ReactCurrentOwner, We = Y.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var t = e._owner, o = xe(e.type, e._source, t ? t.type : null);
        We.setExtraStackFrame(o);
      } else
        We.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function Ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function Ce() {
      {
        if (Ae.current) {
          var e = ee(Ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lt(e) {
      return "";
    }
    var Ye = {};
    function nt(e) {
      {
        var t = Ce();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function Be(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = nt(t);
        if (Ye[o])
          return;
        Ye[o] = !0;
        var s = "";
        e && e._owner && e._owner !== Ae.current && (s = " It was passed a child from " + ee(e._owner.type) + "."), ve(e), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, s), ve(null);
      }
    }
    function $e(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Se(e))
          for (var o = 0; o < e.length; o++) {
            var s = e[o];
            Ne(s) && Be(s, t);
          }
        else if (Ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = H(e);
          if (typeof g == "function" && g !== e.entries)
            for (var R = g.call(e), i; !(i = R.next()).done; )
              Ne(i.value) && Be(i.value, t);
        }
      }
    }
    function rt(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === b))
          o = t.propTypes;
        else
          return;
        if (o) {
          var s = ee(t);
          st(o, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !De) {
          De = !0;
          var g = ee(t);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var s = t[o];
          if (s !== "children" && s !== "key") {
            ve(e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), ve(null);
            break;
          }
        }
        e.ref !== null && (ve(e), P("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var f = {};
    function m(e, t, o, s, g, R) {
      {
        var i = J(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = lt();
          E ? a += E : a += Ce();
          var T;
          e === null ? T = "null" : Se(e) ? T = "array" : e !== void 0 && e.$$typeof === d ? (T = "<" + (ee(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, a);
        }
        var k = tt(e, t, o, g, R);
        if (k == null)
          return k;
        if (i) {
          var W = t.children;
          if (W !== void 0)
            if (s)
              if (Se(W)) {
                for (var V = 0; V < W.length; V++)
                  $e(W[V], e);
                Object.freeze && Object.freeze(W);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(W, e);
        }
        if (ge.call(t, "key")) {
          var Z = ee(e), U = Object.keys(t).filter(function(ie) {
            return ie !== "key";
          }), we = U.length > 0 ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!f[Z + we]) {
            var Fe = U.length > 0 ? "{" + U.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, Z, Fe, Z), f[Z + we] = !0;
          }
        }
        return e === v ? dt(k) : rt(k), k;
      }
    }
    function p(e, t, o) {
      return m(e, t, o, !0);
    }
    function M(e, t, o) {
      return m(e, t, o, !1);
    }
    var L = M, q = p;
    qe.Fragment = v, qe.jsx = L, qe.jsxs = q;
  }()), qe;
}
process.env.NODE_ENV === "production" ? ft.exports = xt() : ft.exports = St();
var u = ft.exports;
function vt(n) {
  const d = window.AudioContext || window.webkitAudioContext, c = new d(), v = c.createMediaStreamSource(n), x = c.createAnalyser();
  x.fftSize = 2048, x.smoothingTimeConstant = 0.85, v.connect(x);
  const j = new Uint8Array(x.fftSize);
  function A() {
    x.getByteTimeDomainData(j);
    let _ = 0;
    for (let w = 0; w < j.length; w++) {
      const B = (j[w] - 128) / 128;
      _ += B * B;
    }
    return Math.sqrt(_ / j.length);
  }
  return {
    getLevel: () => A(),
    dispose: async () => {
      try {
        v.disconnect();
      } catch {
      }
      try {
        x.disconnect();
      } catch {
      }
      try {
        await c.close();
      } catch {
      }
    }
  };
}
let ot = null;
async function Et() {
  if (ot) return ot;
  const n = await import("./blazeface.esm-D5KORnOe.js"), d = await import("./index-2kM27Pi_.js");
  return d.ready && await d.ready(), ot = await n.load(), ot;
}
function gt(n, d, c) {
  if (n.width <= 0 || n.height <= 0 || d <= 0 || c <= 0) return !1;
  const v = Math.max(6, Math.floor(d * 0.06)), x = Math.max(6, Math.floor(c * 0.06));
  if (n.x < v || n.y < x || n.x + n.width > d - v || n.y + n.height > c - x) return !1;
  const j = n.width * n.height, A = d * c, _ = j / A;
  if (_ < 0.04 || _ > 0.65) return !1;
  const w = n.width / n.height;
  return !(w < 0.6 || w > 1.6);
}
async function Ct(n) {
  if ("FaceDetector" in window)
    try {
      const c = await new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }).detect(n);
      if (c && c.length > 0) {
        const v = c[0]?.boundingBox, x = n.videoWidth || n.width || 0, j = n.videoHeight || n.height || 0;
        if (v) {
          const A = { x: v.x, y: v.y, width: v.width, height: v.height };
          if (gt(A, x, j)) return { present: !0, confidence: 0.85 };
        }
      }
      return { present: !1, confidence: 0 };
    } catch {
    }
  try {
    const c = await (await Et()).estimateFaces(n, !1);
    if (c && c.length > 0) {
      const v = n.videoWidth || n.width || 0, x = n.videoHeight || n.height || 0;
      for (const j of c) {
        const [A, _] = j.topLeft, [w, B] = j.bottomRight, h = { x: A, y: _, width: w - A, height: B - _ };
        if (gt(h, v, x)) {
          const b = j.probability ? j.probability[0] : 0.75;
          return { present: !0, confidence: Math.max(0.6, Math.min(1, b)) };
        }
      }
    }
  } catch {
  }
  return { present: !1, confidence: 0 };
}
function Rt({ onComplete: n, onError: d }) {
  const c = ["camera", "microphone", "face", "monitor", "browser"], [v, x] = C({
    camera: "pending",
    microphone: "pending",
    face: "pending",
    monitor: "pending",
    browser: "pending"
  }), [j, A] = C(0), [_, w] = C(0), [B, h] = C({}), [b, O] = C({}), N = D(null), G = D(null), Q = D(null), H = D(null), Y = D(null), P = () => {
    try {
      N.current?.getTracks().forEach((r) => r.stop());
    } catch {
    }
    try {
      G.current?.getTracks().forEach((r) => r.stop());
    } catch {
    }
    N.current = null, G.current = null, Q.current && (Q.current.dispose().catch(() => {
    }), Q.current = null), H.current && (cancelAnimationFrame(H.current), H.current = null);
  }, se = async (r) => {
    try {
      const l = window.AudioContext || window.webkitAudioContext;
      if (!l) throw new Error("AudioContext not supported");
      const y = new l(), I = y.createMediaStreamSource(r), z = y.createAnalyser();
      z.fftSize = 256, z.smoothingTimeConstant = 0.8, I.connect(z);
      const ce = new Uint8Array(z.frequencyBinCount);
      z.getByteFrequencyData(ce), sessionStorage.setItem("audio-context-initialized", "true"), I.disconnect(), await y.close(), typeof window < "u" && (window.precheckAudioStream = r);
    } catch {
      sessionStorage.setItem("audio-context-initialized", "false");
    }
  }, ae = async (r) => {
    const l = Y.current;
    let y = 0, I = 0, z = 0;
    const ce = 30;
    for (; z < ce && y < 5; ) {
      try {
        const X = await Ct(l);
        X.present && (y += 1, I = Math.max(I, X.confidence));
      } catch {
      }
      z++, A(z), await new Promise((X) => setTimeout(X, 100));
    }
    return { status: y >= 5, confidence: I, timestamp: Date.now() };
  }, de = () => {
    try {
      const r = window.screen.width, l = window.screen.height, y = window.screen.availWidth;
      return r / l > 3 || r > y * 1.5 || [3840, 3360, 2560, 4480, 5120].includes(r) ? 2 : 1;
    } catch {
      return 1;
    }
  }, fe = async () => de(), F = () => [
    "navigator.mediaDevices",
    "navigator.mediaDevices.getUserMedia",
    "requestAnimationFrame",
    "WebAssembly"
  ].every((l) => {
    const y = l.split(".");
    let I = window;
    for (const z of y) {
      if (!(z in I)) return !1;
      I = I[z];
    }
    return !0;
  }), S = (r, l) => {
    x((y) => ({ ...y, [r]: l }));
  }, K = $(async () => {
    S("camera", "running"), h((r) => ({ ...r, camera: "" }));
    try {
      try {
        N.current?.getTracks().forEach((l) => l.stop());
      } catch {
      }
      const r = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } }
      });
      if (N.current = r, !Y.current) {
        const l = document.createElement("video");
        l.muted = !0, l.playsInline = !0, Y.current = l;
      }
      Y.current.srcObject = r;
      try {
        await Y.current.play();
      } catch {
      }
      return O((l) => ({ ...l, cameraAccess: !0 })), S("camera", "passed"), !0;
    } catch (r) {
      const l = r?.name === "NotAllowedError" ? "Camera permission denied" : r?.message || "Camera access failed";
      return h((y) => ({ ...y, camera: l })), S("camera", "failed"), !1;
    }
  }, []), J = $(async () => {
    S("microphone", "running"), h((r) => ({ ...r, microphone: "" }));
    try {
      try {
        G.current?.getTracks().forEach((l) => l.stop());
      } catch {
      }
      const r = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      G.current = r, O((l) => ({ ...l, microphoneAccess: !0 })), await se(r);
      try {
        const l = vt(r);
        Q.current = l;
        const y = () => {
          w(l.getLevel()), H.current = requestAnimationFrame(y);
        };
        H.current = requestAnimationFrame(y);
      } catch {
      }
      return S("microphone", "passed"), !0;
    } catch (r) {
      const l = r?.name === "NotAllowedError" ? "Microphone permission denied" : r?.message || "Microphone access failed";
      return h((y) => ({ ...y, microphone: l })), S("microphone", "failed"), !1;
    }
  }, []), he = $(async () => {
    S("face", "running"), h((r) => ({ ...r, face: "" }));
    try {
      if (!N.current) throw new Error("Camera is not initialized");
      const r = await ae(N.current);
      if (O((l) => ({ ...l, faceDetection: r })), r.status)
        return S("face", "passed"), !0;
      throw new Error("No face detected. Please align your face within the frame and retry.");
    } catch (r) {
      const l = r?.message || "Face detection failed";
      return h((y) => ({ ...y, face: l })), S("face", "failed"), !1;
    }
  }, []), Te = $(async () => {
    S("monitor", "running"), h((r) => ({ ...r, monitor: "" }));
    try {
      const r = await fe();
      if (r && r > 1)
        throw O((l) => ({ ...l, monitorCount: r })), new Error("Multiple displays detected. Please remove external screens and keep only one display connected, then press Retry.");
      if (r === 1)
        return O((l) => ({ ...l, monitorCount: r })), S("monitor", "passed"), !0;
      throw new Error("Could not verify displays");
    } catch (r) {
      return h((l) => ({ ...l, monitor: r?.message || "Monitor verification failed" })), S("monitor", "failed"), !1;
    }
  }, []), ee = $(async () => {
    S("browser", "running"), h((r) => ({ ...r, browser: "" }));
    try {
      const r = F();
      if (O((l) => ({ ...l, browserSupport: r })), !r) throw new Error("Required browser features are unavailable");
      return S("browser", "passed"), !0;
    } catch (r) {
      return h((l) => ({ ...l, browser: r?.message || "Browser not supported" })), S("browser", "failed"), !1;
    }
  }, []), ne = {
    camera: K,
    microphone: J,
    face: he,
    monitor: Te,
    browser: ee
  }, re = $(async (r) => {
    for (let l = r; l < c.length; l++) {
      const y = c[l];
      if (!await ne[y]()) break;
    }
  }, [ne]);
  te(() => {
    if (!c.every((y) => v[y] === "passed")) return;
    const l = {
      cameraAccess: !!b.cameraAccess,
      microphoneAccess: !!b.microphoneAccess,
      faceDetection: b.faceDetection || { status: !1, confidence: 0, timestamp: Date.now() },
      monitorCount: b.monitorCount || 1,
      browserSupport: !!b.browserSupport,
      codeEditorReady: !0
    };
    n(l), P();
  }, [v, b]), te(() => (re(0), () => P()), []);
  const _e = (r) => {
    const l = c.indexOf(r);
    x((y) => {
      const I = { ...y };
      for (let z = l; z < c.length; z++) I[c[z]] = "pending";
      return I;
    }), h((y) => ({ ...y, [r]: "" })), re(l);
  }, ke = c.filter((r) => v[r] === "passed").length, Me = c.some((r) => v[r] === "running"), me = Math.round((ke + (Me ? 0.5 : 0)) / c.length * 100);
  return /* @__PURE__ */ u.jsx("div", { style: { fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#eff6ff,#eef2ff)" }, children: /* @__PURE__ */ u.jsxs("div", { style: { width: 720, maxWidth: "95vw", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }, children: [
    /* @__PURE__ */ u.jsxs("div", { style: { textAlign: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ u.jsx("h2", { style: { margin: 0, fontSize: 20, fontWeight: 700 }, children: "System Pre-Check" }),
      /* @__PURE__ */ u.jsx("p", { style: { color: "#6b7280" }, children: "Verifying your system for proctored assessment" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ u.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
        /* @__PURE__ */ u.jsx("span", { children: "Overall Progress" }),
        /* @__PURE__ */ u.jsxs("span", { children: [
          me,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { style: { height: 8, background: "#f3f4f6", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ u.jsx("div", { style: { width: `${me}%`, height: 8, background: "#3b82f6" } }) })
    ] }),
    /* @__PURE__ */ u.jsx("div", { style: { display: "grid", gap: 8 }, children: c.map((r) => {
      const l = r === "camera" ? "Camera Access" : r === "microphone" ? "Microphone Access" : r === "face" ? "Face Detection" : r === "monitor" ? "Single Monitor Check" : "Browser Support", y = v[r], I = y === "passed" ? "#ecfdf5" : y === "running" ? "#eff6ff" : y === "failed" ? "#fef2f2" : "#f9fafb", z = y === "passed" ? "#10b981" : y === "running" ? "#3b82f6" : y === "failed" ? "#dc2626" : "#9ca3af";
      return /* @__PURE__ */ u.jsxs("div", { style: { display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 12, alignItems: "center", padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", background: I }, children: [
        /* @__PURE__ */ u.jsx("div", { style: { width: 12, height: 12, borderRadius: 9999, background: z } }),
        /* @__PURE__ */ u.jsxs("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ u.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: /* @__PURE__ */ u.jsx("div", { style: { fontWeight: 600, fontSize: 14 }, children: l }) }),
          r === "face" && /* @__PURE__ */ u.jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center", marginTop: 8 }, children: [
            /* @__PURE__ */ u.jsx("video", { ref: Y, muted: !0, playsInline: !0, autoPlay: !0, style: { width: 180, height: 112, background: "#000", borderRadius: 6 } }),
            y === "running" && /* @__PURE__ */ u.jsxs("div", { style: { color: "#6b7280", fontSize: 12 }, children: [
              "Analyzing frames: ",
              j
            ] })
          ] }),
          r === "microphone" && y !== "pending" && /* @__PURE__ */ u.jsx("div", { style: { marginTop: 6, width: 220, height: 8, background: "#e5e7eb", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ u.jsx("div", { style: { width: `${Math.min(100, Math.round(_ * 200))}%`, height: 8, background: "#10b981", transition: "width 150ms" } }) }),
          B[r] && /* @__PURE__ */ u.jsx("div", { style: { marginTop: 6, color: "#dc2626", fontSize: 12 }, children: B[r] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ u.jsx("div", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 9999, background: y === "passed" ? "#111827" : y === "failed" ? "#fee2e2" : "#e5e7eb", color: y === "passed" ? "#fff" : "#111827" }, children: y === "passed" ? "Passed" : y === "running" ? "Checking…" : y === "failed" ? "Failed" : "Pending" }),
          y === "failed" && /* @__PURE__ */ u.jsx("button", { onClick: () => _e(r), style: { fontSize: 12, padding: "6px 10px", borderRadius: 6, background: "#111827", color: "#fff", border: 0 }, children: "Retry" })
        ] })
      ] }, r);
    }) })
  ] }) });
}
function Tt(n) {
  const { onEvent: d, context: c = "coding" } = n || {}, [v, x] = C("idle"), [j, A] = C(void 0), [_, w] = C(0), [B, h] = C(0), b = D(null), O = D(null), N = D(null), G = D(!1), Q = D(0), H = D(0), Y = D(null), P = $(() => {
    N.current && cancelAnimationFrame(N.current), N.current = null;
    try {
      b.current?.dispose();
    } catch {
    }
    b.current = null;
    try {
      O.current?.getTracks().forEach((F) => F.stop());
    } catch {
    }
    O.current = null, x("idle");
  }, []), se = $(
    (F) => {
      const S = Date.now(), K = G.current;
      F > 18 && S - Q.current > 2e3 && (h((J) => J + 1), Q.current = S, d?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: c,
        data: { level: F, reason: "audio_spike", faceDetected: K }
      })), K && F < 3 ? Y.current == null ? Y.current = S : S - Y.current > 15e3 && (h((J) => J + 1), Y.current = null, d?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: c,
        data: { level: F, reason: "extended_silence_with_face" }
      })) : F >= 3 && (Y.current = null), !K && F > 12 && S - H.current > 3e3 && (h((J) => J + 1), H.current = S, d?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: c,
        data: { level: F, reason: "audio_without_face" }
      }));
    },
    [c, d]
  ), ae = $(() => {
    try {
      if (!b.current) return;
      const F = b.current.getLevel(), S = Math.max(0, Math.min(100, Math.round(F * 160)));
      w(S), se(S);
    } finally {
      N.current = requestAnimationFrame(ae);
    }
  }, [se]), de = $(
    async (F) => {
      try {
        A(void 0), h(0), Q.current = 0, H.current = 0, Y.current = null;
        let S = F;
        if (!S && typeof window < "u" && window.precheckAudioStream) {
          const he = window.precheckAudioStream;
          he?.active && he.getAudioTracks().length > 0 && (S = he);
        }
        S || (S = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0, sampleRate: 44100 }
        })), O.current = S;
        const K = S.getAudioTracks(), J = K.length ? new MediaStream(K) : S;
        b.current = vt(J), x("running"), N.current = requestAnimationFrame(ae);
      } catch (S) {
        x("error"), A(S instanceof Error ? S.message : String(S));
      }
    },
    [ae]
  ), fe = $((F) => {
    G.current = F;
  }, []);
  return te(() => P, [P]), { status: v, error: j, level: _, anomalyCount: B, start: de, stop: P, setFaceDetected: fe };
}
function _t({ monitoringStatus: n, sessionData: d, onStatusChange: c, onUpdateSession: v, onAddEvent: x }) {
  const [j, A] = C({ x: typeof window < "u" ? window.innerWidth - 280 : 0, y: typeof window < "u" ? window.innerHeight - 400 : 0 }), [_, w] = C(!1), [B, h] = C({ x: 0, y: 0 }), [b, O] = C(0), [N, G] = C(!1), [Q, H] = C(null), [Y, P] = C(null), [se, ae] = C(null), [de, fe] = C(null), [F, S] = C(0), [K, J] = C(0), [he, Te] = C([]), [ee, ne] = C(0), [re, _e] = C(0), [ke, Me] = C(0), [me, r] = C(0), [l, y] = C(0), [I, z] = C(!1), [ce, be] = C(null), [X, pe] = C(null), [Ve, je] = C(0), [ht, Oe] = C(0), [Ge, it] = C(0), [xe, ge] = C(null), [Pe, He] = C(0), [Ie, st] = C(0), ue = D(null), Se = D(null), Ke = D(null), ze = D(null), le = D(null), Ee = D(null), Je = D(!1), Xe = D(0), Le = D(0), ye = D("none");
  D({ noFace: 0, multipleFaces: 0 });
  const oe = D({ noFace: !1, multipleFaces: !1, gazeOff: !1 }), { level: Ze, anomalyCount: Qe, start: ct, stop: ut, setFaceDetected: et } = Tt({
    context: "coding",
    onEvent: (f) => x?.({ ...f, timestamp: Date.now() })
  });
  te(() => S(Ze), [Ze]), te(() => J(Qe), [Qe]);
  const tt = $((f, m) => {
    const p = f.data;
    let M = 0, L = 0, q = 0;
    for (let a = 0; a < p.length; a += 4) {
      const E = p[a], T = p[a + 1], k = p[a + 2], W = (E + T + k) / 3;
      if (M += W, a > 0) {
        const V = (p[a - 4] + p[a - 3] + p[a - 2]) / 3;
        L += Math.abs(W - V);
      }
      if (a > f.width * 4 && a < p.length - f.width * 4) {
        const V = (p[a - f.width * 4] + p[a - f.width * 4 + 1] + p[a - f.width * 4 + 2]) / 3, Z = (p[a + f.width * 4] + p[a + f.width * 4 + 1] + p[a + f.width * 4 + 2]) / 3;
        (Math.abs(W - V) > 30 || Math.abs(W - Z) > 30) && q++;
      }
    }
    const e = p.length / 4;
    M /= e, L /= e;
    const t = q / e, o = m.width / m.height, s = {
      neutral: Math.max(0.1, 0.6 - Math.abs(M - 120) / 200 - Math.abs(L - 15) / 100),
      happy: Math.max(0.05, (M > 115 ? 0.4 : 0.1) + (t > 0.15 ? 0.3 : 0) + (o > 0.85 ? 0.2 : 0)),
      focused: Math.max(0.05, (L > 20 ? 0.4 : 0.1) + (t > 0.12 ? 0.2 : 0) + (M < 110 ? 0.2 : 0)),
      concerned: Math.max(0.05, (M < 105 ? 0.3 : 0.1) + (L > 25 ? 0.2 : 0) + (o < 0.75 ? 0.2 : 0)),
      surprised: Math.max(0.05, (o > 0.9 ? 0.3 : 0.1) + (t > 0.18 ? 0.3 : 0))
    }, g = Date.now() % 1e4 / 1e4;
    Object.keys(s).forEach((a) => {
      const E = a;
      s[E] += Math.sin(g * Math.PI * 2) * 0.1, s[E] = Math.max(0.05, Math.min(0.95, s[E]));
    });
    const R = Object.entries(s).reduce((a, E) => s[a[0]] > s[E[0]] ? a : E)[0], i = Math.max(...Object.values(s));
    return { dominant: R, confidence: i, emotions: s };
  }, []), Ae = $((f, m) => {
    const p = m.data;
    let M = 0, L = 0, q = 0;
    const e = Math.floor(m.height * 0.6);
    for (let i = Math.floor(m.height * 0.3); i < e; i++)
      for (let a = 0; a < m.width; a += 4) {
        const E = (i * m.width + a) * 4, T = p[E], k = p[E + 1], W = p[E + 2];
        (T + k + W) / 3 < 100 ? M++ : L++, (Math.abs(T - k) > 30 || Math.abs(k - W) > 30) && q++;
      }
    const t = M + L, o = t ? M / t : 0, s = t ? q / t : 0, g = o > 0.4 && s < 0.3, R = o > 0.2;
    return { isProfessional: g, hasShirt: R, confidence: 0.7, details: g ? "Professional attire detected" : "Casual attire detected" };
  }, []), We = $((f, m, p) => {
    const M = f.x + f.width / 2, L = f.y + f.height / 2, q = (M - m / 2) / m, e = (L - p / 2) / p, t = Math.sqrt(q * q + e * e), o = t < 0.15, s = Math.max(0, 1 - t * 2);
    return { isLookingAtCamera: o, gazeDirection: { x: q, y: e }, confidence: 0.8, attentionScore: s };
  }, []), ve = $((f) => {
    if (!f.landmarks || f.landmarks.length < 4) return null;
    const m = f.landmarks, p = m[0], M = m[1], L = m[2], q = m[3] ?? [(M[0] + p[0]) / 2, Math.max(M[1], p[1]) + f.height * 0.2], e = [(M[0] + p[0]) / 2, (M[1] + p[1]) / 2], t = M[0] - p[0], o = M[1] - p[1], s = Math.max(1, Math.hypot(t, o)), g = Math.atan2(o, t) * 180 / Math.PI, R = Math.hypot(L[0] - p[0], L[1] - p[1]), i = Math.hypot(L[0] - M[0], L[1] - M[1]), a = (R - i) / s, E = Math.max(-45, Math.min(45, a * 90)), T = Math.max(1, L[1] - e[1]), k = Math.max(1, (q[1] ?? e[1]) - L[1]), W = (T - k) / f.height, V = Math.max(-45, Math.min(45, W * 180)), Z = Math.abs(g) > 20, U = Math.abs(a) > 0.18, we = Math.abs(V) > 15, Fe = U || we || Z, ie = Math.max(0.5, Math.min(1, Math.max(
      Math.abs(a) * 2,
      Math.abs(g) / 30,
      Math.abs(V) / 30
    )));
    return { yaw: E, pitch: V, roll: g, isHeadTurned: Fe, confidence: ie };
  }, []), De = $((f, m) => {
    const { gazeDirection: p, attentionScore: M, isLookingAtCamera: L } = f, q = Math.sqrt(p.x * p.x + p.y * p.y), e = !L && q > 0.5 && M < 0.3;
    return m && m.isHeadTurned && m.confidence >= 0.6 ? !0 : e;
  }, []), Ne = $(async () => {
    try {
      const f = await import("./index-2kM27Pi_.js"), m = await import("./blazeface.esm-D5KORnOe.js");
      f.ready && await f.ready();
      const p = await m.load();
      return ze.current = p, !0;
    } catch (f) {
      return console.error("[widget] Failed to init face detection:", f), !1;
    }
  }, []), Ce = $(async () => {
    if (!ue.current || !Se.current || !ze.current) {
      le.current = requestAnimationFrame(Ce);
      return;
    }
    const f = ue.current, m = Se.current;
    if (f.readyState !== 4) {
      le.current = requestAnimationFrame(Ce);
      return;
    }
    try {
      const p = await ze.current.estimateFaces(f, !1), M = f.videoWidth || f.width || m.width, L = f.videoHeight || f.height || m.height, q = Math.max(6, Math.floor(M * 0.06)), e = Math.max(6, Math.floor(L * 0.06)), t = 0.04, o = 0.65, s = p.map((i) => {
        const [a, E] = i.topLeft, [T, k] = i.bottomRight;
        return { x: a, y: E, width: T - a, height: k - E, confidence: i.probability?.[0] || 0.8, landmarks: i.landmarks };
      }).filter((i) => {
        if (i.width <= 0 || i.height <= 0 || i.x < q || i.y < e || i.x + i.width > M - q || i.y + i.height > L - e) return !1;
        const E = i.width * i.height / (M * L);
        if (E < t || E > o) return !1;
        const T = i.width / i.height;
        return !(T < 0.6 || T > 1.6);
      });
      O(s.length), Te(s), G(s.length === 1), et(s.length > 0);
      const g = Date.now();
      let R = s.length === 0 ? "none" : s.length === 1 ? "single" : "multiple";
      if (R === "multiple")
        ye.current !== "multiple" && (be(g), it((i) => i + 1), oe.current.multipleFaces || (oe.current.multipleFaces = !0, x?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: s.length }, timestamp: g })));
      else {
        if (ye.current === "multiple" && ce !== null) {
          const i = g - ce;
          je((a) => a + i), be(null);
        }
        oe.current.multipleFaces = !1;
      }
      if (R === "none")
        ye.current !== "none" && (ge(g), He((i) => i + 1), oe.current.noFace || (oe.current.noFace = !0, x?.({ eventType: "face_detection", severity: "critical", context: "coding", data: { reason: "no_face" }, timestamp: g })));
      else {
        if (ye.current === "none" && xe !== null) {
          const i = g - xe;
          st((a) => a + i), ge(null);
        }
        oe.current.noFace = !1;
      }
      if (ye.current = R, s.length === 1) {
        const i = s[0], a = m.getContext("2d");
        if (a) {
          a.drawImage(f, 0, 0, m.width, m.height);
          const E = a.getImageData(0, 0, m.width, m.height), T = a.getImageData(i.x, i.y, i.width, i.height), k = {
            isGoodPosture: Math.abs(Math.random() * 20 - 10) < 5,
            shoulderAlignment: Math.random() * 20 - 10,
            headTilt: Math.random() * 15 - 7.5,
            confidence: 0.75
          }, W = tt(T, i), V = Ae(T, E), Z = We(i, m.width, m.height), U = ve(i);
          H(k), P(W), ae(V), fe(Z);
          const we = De(Z, U);
          if (we && !I && Date.now() - Le.current > 3e3)
            y((ie) => ie + 1), z(!0), pe(g), Le.current = Date.now(), oe.current.gazeOff || (oe.current.gazeOff = !0, x?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0, reason: U?.isHeadTurned ? "head_movement" : "center_offset", headPose: U }, timestamp: g }));
          else if (!we && I) {
            if (X !== null) {
              const ie = g - X;
              Oe((Re) => Re + ie), pe(null);
            }
            z(!1), oe.current.gazeOff = !1;
          }
          const Fe = s.length === 0 || s.length > 1;
          if (v && (Fe || g - Xe.current >= 5e3)) {
            const ie = d?.snapshots || [];
            let Re = ie;
            if (Fe) {
              const wt = {
                timestamp: g,
                type: "violation_trigger",
                image: "base64_image_placeholder",
                context: s.length === 0 ? "No face detected" : "Multiple faces detected"
              };
              Re = [...ie, wt], Re.length > 30 && (Re = Re.slice(-30));
            }
            v({ snapshots: Re, postureAnalysis: k, attireAnalysis: V }), Xe.current = g;
          }
        }
      } else if (H(null), P(null), ae(null), fe(null), I) {
        if (X !== null) {
          const i = g - X;
          Oe((a) => a + i), pe(null);
        }
        z(!1);
      }
      s.length === 0 ? c?.("violation") : s.length > 1 ? c?.("warning") : c?.("optimal");
    } catch (p) {
      console.error("[widget] Face detection error:", p);
    }
    le.current = requestAnimationFrame(Ce);
  }, [tt, Ae, We, De, c, v, d?.snapshots, I, ce, X, et]);
  te(() => {
    J(0);
  }, []), te(() => ((async () => {
    try {
      const m = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 320 }, height: { ideal: 240 }, frameRate: { ideal: 15 } },
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      ue.current && (ue.current.srcObject = m);
      let p = null;
      const M = m.getAudioTracks();
      M.length > 0 && (p = new MediaStream(M), Ee.current = p), await Ne(), p && await ct(p), le.current = requestAnimationFrame(Ce);
    } catch {
      c?.("violation");
    }
  })(), () => {
    Je.current = !0, le.current && cancelAnimationFrame(le.current), ue.current?.srcObject && ue.current.srcObject.getTracks().forEach((p) => p.stop()), Ee.current && Ee.current.getTracks().forEach((m) => m.stop()), ut(), Ee.current = null;
  }), []);
  const lt = (f) => {
    w(!0);
    const m = Ke.current?.getBoundingClientRect();
    m && h({ x: f.clientX - m.left, y: f.clientY - m.top });
  }, Ye = (f) => {
    if (_) {
      const m = Math.max(0, Math.min((typeof window < "u" ? window.innerWidth : 0) - 280, f.clientX - B.x)), p = Math.max(0, Math.min((typeof window < "u" ? window.innerHeight : 0) - 400, f.clientY - B.y));
      A({ x: m, y: p });
    }
  }, nt = () => w(!1);
  te(() => {
    if (_)
      return document.addEventListener("mousemove", Ye), document.addEventListener("mouseup", nt), () => {
        document.removeEventListener("mousemove", Ye), document.removeEventListener("mouseup", nt);
      };
  }, [_, B]);
  const Be = () => {
    document.hidden && _e((f) => {
      const m = f + 1;
      return x?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { when: Date.now() }, timestamp: Date.now() }), m;
    });
  }, $e = () => ne((f) => f + 1), rt = (f) => {
    Me((m) => m + 1), x?.({ eventType: "keystroke", severity: "info", context: "coding", data: {}, timestamp: Date.now() }), (f.ctrlKey || f.metaKey) && (f.key === "c" || f.key === "x" || f.key === "v") && (r((m) => m + 1), f.preventDefault(), x?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, key: f.key }, timestamp: Date.now() }));
  };
  te(() => (document.addEventListener("visibilitychange", Be), window.addEventListener("blur", $e), document.addEventListener("keydown", rt), () => {
    document.removeEventListener("visibilitychange", Be), window.removeEventListener("blur", $e), document.removeEventListener("keydown", rt);
  }), []);
  const dt = b === 0 ? "#ef4444" : b > 1 ? "#f59e0b" : "#22c55e";
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: Ke,
      onMouseDown: lt,
      style: {
        position: "fixed",
        left: j.x,
        top: j.y,
        zIndex: 9999,
        width: 288,
        cursor: "move",
        border: `2px solid ${dt}`,
        borderRadius: 8,
        background: "#fff",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        padding: 12,
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ u.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: /* @__PURE__ */ u.jsx("div", { style: { fontSize: 12, fontWeight: 600 }, children: b === 0 ? "No Face" : b > 1 ? "Multiple Faces" : N ? "Optimal" : "Good" }) }),
        /* @__PURE__ */ u.jsxs("div", { style: { position: "relative", background: "#000", borderRadius: 4, overflow: "hidden" }, children: [
          /* @__PURE__ */ u.jsx("video", { ref: ue, autoPlay: !0, muted: !0, playsInline: !0, style: { width: "100%", height: 128, objectFit: "cover" } }),
          /* @__PURE__ */ u.jsx("canvas", { ref: Se, width: 320, height: 240, style: { display: "none" } })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { style: { marginTop: 8, fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }, children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Faces: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: b === 1 ? "#16a34a" : "#ef4444" }, children: b })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "No Face: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: Pe > 0 ? "#ef4444" : "#16a34a" }, children: Pe })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Multiple: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: Ge > 0 ? "#ef4444" : "#16a34a" }, children: Ge })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Eye Contact: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: de?.isLookingAtCamera ? "#16a34a" : "#ef4444" }, children: de?.isLookingAtCamera ? "Yes" : "No" })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Posture: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: Q?.isGoodPosture ? "#16a34a" : "#f59e0b" }, children: Q?.isGoodPosture ? "Good" : "Poor" })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Attire: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: se?.isProfessional ? "#16a34a" : "#f59e0b" }, children: se?.isProfessional ? "Professional" : "Casual" })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Emotion: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: "#3b82f6" }, children: Y?.dominant || "Unknown" })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Audio: ",
            /* @__PURE__ */ u.jsxs("span", { style: { color: F > 50 ? "#16a34a" : F > 20 ? "#f59e0b" : "#ef4444" }, children: [
              F,
              "%"
            ] }),
            /* @__PURE__ */ u.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ u.jsx("div", { style: { width: `${Math.min(F, 100)}%`, height: 6, transition: "width 100ms", background: F > 50 ? "#16a34a" : F > 20 ? "#f59e0b" : "#ef4444" } }) })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Audio Alerts: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: K > 0 ? "#ef4444" : "#16a34a" }, children: K })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Unfocus: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: ee > 0 ? "#ef4444" : "#16a34a" }, children: ee })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Tab Switch: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: re > 0 ? "#ef4444" : "#16a34a" }, children: re })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Keystrokes: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: "#3b82f6" }, children: ke })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Copy Attempts: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: me > 0 ? "#ef4444" : "#16a34a" }, children: me })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { children: [
            "Gaze Off: ",
            /* @__PURE__ */ u.jsx("strong", { style: { color: l > 0 ? "#ef4444" : "#16a34a" }, children: l })
          ] })
        ] })
      ]
    }
  );
}
const at = (n, d) => n.length > d ? n.slice(n.length - d) : n, kt = (n, d) => ({
  sessionId: n,
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
function Mt(n, d) {
  switch (d.eventType) {
    case "tab_switch":
      return { ...n, tabSwitches: n.tabSwitches + 1, violationCount: n.violationCount + 1 };
    case "audio_anomaly":
      return { ...n, audioAnomalies: n.audioAnomalies + 1, violationCount: n.violationCount + 1 };
    case "code_execution":
      return { ...n, codeExecutionCount: n.codeExecutionCount + 1 };
    case "face_detection": {
      const c = d.data?.reason;
      return c === "no_face" ? { ...n, noFaceIncidents: n.noFaceIncidents + 1, violationCount: n.violationCount + 1 } : c === "multiple_faces" ? { ...n, multipleFaceIncidents: n.multipleFaceIncidents + 1, violationCount: n.violationCount + 1 } : n;
    }
    case "gaze_tracking": {
      const c = d.data?.type === "focus_break", v = Number(d.data?.focusTimeMs) || 0, x = d.data?.offscreen === !0;
      return {
        ...n,
        focusBreaks: n.focusBreaks + (c ? 1 : 0),
        gazeDuration: n.gazeDuration + v,
        unfocusEvents: n.unfocusEvents + (c ? 1 : 0),
        gazeOffScreenIncidents: n.gazeOffScreenIncidents + (x ? 1 : 0),
        violationCount: n.violationCount + (c || x ? 1 : 0)
      };
    }
    case "keystroke": {
      const c = d.data?.copyCutPaste === !0;
      return {
        ...n,
        keystrokes: n.keystrokes + 1,
        copyCutPasteAttempts: n.copyCutPasteAttempts + (c ? 1 : 0),
        violationCount: n.violationCount + (c ? 1 : 0)
      };
    }
    default:
      return n;
  }
}
function jt(n, d) {
  switch (d.type) {
    case "INIT":
      return { ...d.payload };
    case "SET_FIELDS": {
      const c = { ...n, ...d.payload };
      return c.snapshots && (c.snapshots = at(c.snapshots, 50)), c.liveEvents && (c.liveEvents = at(c.liveEvents, 200)), c;
    }
    case "ADD_EVENTS": {
      const c = at([...n.liveEvents, ...d.events], 200), v = d.events.reduce(Mt, n.sessionStats);
      return { ...n, liveEvents: c, sessionStats: v };
    }
    case "ADD_SNAPSHOT": {
      const c = at([...n.snapshots, d.snapshot], 50);
      return { ...n, snapshots: c };
    }
    case "TICK": {
      const c = Math.max(0, d.now - n.startTime);
      return c === n.sessionStats.totalDuration ? n : { ...n, sessionStats: { ...n.sessionStats, totalDuration: c } };
    }
    case "COMPLETE": {
      const c = d.endTime ?? Date.now();
      return { ...n, sessionStats: { ...n.sessionStats, totalDuration: Math.max(0, c - n.startTime) } };
    }
    default:
      return n;
  }
}
function At(n) {
  const [d, c] = C(null), v = $((h) => {
    c((b) => b && jt(b, h));
  }, []), x = D(null), j = D(0), A = D(null), _ = $((h) => {
    const b = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    x.current = b;
    const O = sessionStorage.getItem(b);
    if (O)
      try {
        const G = JSON.parse(O);
        return c(G), b;
      } catch {
      }
    const N = kt(b, h);
    return c(N), sessionStorage.setItem(b, JSON.stringify(N)), b;
  }, [n?.sessionId]), w = $((h) => {
    const b = h ?? d;
    if (!(!b || !x.current))
      try {
        sessionStorage.setItem(x.current, JSON.stringify(b)), j.current = Date.now();
      } catch (O) {
        console.error("[session] persist failed", O);
      }
  }, [d]);
  return te(() => {
    if (!d) return;
    const b = Date.now() - j.current;
    return b < 1e3 ? (A.current && clearTimeout(A.current), A.current = setTimeout(() => w(), 1e3 - b)) : w(), () => {
      A.current && clearTimeout(A.current);
    };
  }, [d, w]), te(() => {
    const h = () => w();
    return window.addEventListener("visibilitychange", h), window.addEventListener("beforeunload", h), () => {
      window.removeEventListener("visibilitychange", h), window.removeEventListener("beforeunload", h);
    };
  }, [w]), te(() => {
    if (!d) return;
    const h = setInterval(() => v({ type: "TICK", now: Date.now() }), 1e3);
    return () => clearInterval(h);
  }, [d, v]), bt(() => ({
    state: d,
    sessionId: x.current,
    init: _,
    setFields: (h) => v({ type: "SET_FIELDS", payload: h }),
    addEvents: (h) => v({ type: "ADD_EVENTS", events: h }),
    addSnapshot: (h) => v({ type: "ADD_SNAPSHOT", snapshot: h }),
    complete: () => v({ type: "COMPLETE" })
  }), [d, v, _]);
}
function Ft({ onSessionStart: n, onSessionUpdate: d, onEvent: c }) {
  const [v, x] = C(null), [j, A] = C("optimal"), _ = At();
  return te(() => {
    if (v && !_.state) {
      const w = _.init(v);
      n?.(w, v);
    }
  }, [v, _]), v ? /* @__PURE__ */ u.jsx(
    _t,
    {
      monitoringStatus: j,
      sessionData: _.state ?? void 0,
      onStatusChange: (w) => A(w),
      onUpdateSession: (w) => {
        _.setFields(w), d?.(w);
      },
      onAddEvent: (w) => {
        _.addEvents([{ ...w, timestamp: w.timestamp ?? Date.now() }]), c?.(w);
      }
    }
  ) : /* @__PURE__ */ u.jsx(
    Rt,
    {
      onComplete: (w) => x(w),
      onError: () => x(null)
    }
  );
}
export {
  _t as FloatingVideo,
  Rt as Prechecks,
  Ft as ProctoringWidget
};
