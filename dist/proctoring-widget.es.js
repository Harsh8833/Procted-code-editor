import Mt, { useState as k, useRef as j, useCallback as N, useEffect as ee, useMemo as At } from "react";
var Et = { exports: {} }, Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function Dt() {
  if (Tt) return Ze;
  Tt = 1;
  var r = Mt, f = Symbol.for("react.element"), s = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(_, w, G) {
    var m, E = {}, F = null, Y = null;
    G !== void 0 && (F = "" + G), w.key !== void 0 && (F = "" + w.key), w.ref !== void 0 && (Y = w.ref);
    for (m in w) v.call(w, m) && !A.hasOwnProperty(m) && (E[m] = w[m]);
    if (_ && _.defaultProps) for (m in w = _.defaultProps, w) E[m] === void 0 && (E[m] = w[m]);
    return { $$typeof: f, type: _, key: F, ref: Y, props: E, _owner: S.current };
  }
  return Ze.Fragment = s, Ze.jsx = D, Ze.jsxs = D, Ze;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function Ft() {
  return kt || (kt = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Mt, f = Symbol.for("react.element"), s = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), _ = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), V = Symbol.iterator, te = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = V && e[V] || e[te];
      return typeof n == "function" ? n : null;
    }
    var B = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(e) {
      {
        for (var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), t = 1; t < n; t++)
          u[t - 1] = arguments[t];
        fe("error", e, u);
      }
    }
    function fe(e, n, u) {
      {
        var t = B.ReactDebugCurrentFrame, a = t.getStackAddendum();
        a !== "" && (n += "%s", u = u.concat([a]));
        var o = u.map(function(l) {
          return String(l);
        });
        o.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, o);
      }
    }
    var se = !1, ge = !1, ne = !1, $ = !1, C = !1, K;
    K = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === A || C || e === S || e === G || e === m || $ || e === Y || se || ge || ne || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === E || e.$$typeof === D || e.$$typeof === _ || e.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function he(e, n, u) {
      var t = e.displayName;
      if (t)
        return t;
      var a = n.displayName || n.name || "";
      return a !== "" ? u + "(" + a + ")" : u;
    }
    function Re(e) {
      return e.displayName || "Context";
    }
    function oe(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case s:
          return "Portal";
        case A:
          return "Profiler";
        case S:
          return "StrictMode";
        case G:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var n = e;
            return Re(n) + ".Consumer";
          case D:
            var u = e;
            return Re(u._context) + ".Provider";
          case w:
            return he(e, e.render, "ForwardRef");
          case E:
            var t = e.displayName || null;
            return t !== null ? t : oe(e.type) || "Memo";
          case F: {
            var a = e, o = a._payload, l = a._init;
            try {
              return oe(l(o));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ce = 0, je, Ae, Ce, Te, i, h, g;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function P() {
      {
        if (ce === 0) {
          je = console.log, Ae = console.info, Ce = console.warn, Te = console.error, i = console.group, h = console.groupCollapsed, g = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: z,
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
        ce++;
      }
    }
    function ye() {
      {
        if (ce--, ce === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: je
            }),
            info: X({}, e, {
              value: Ae
            }),
            warn: X({}, e, {
              value: Ce
            }),
            error: X({}, e, {
              value: Te
            }),
            group: X({}, e, {
              value: i
            }),
            groupCollapsed: X({}, e, {
              value: h
            }),
            groupEnd: X({}, e, {
              value: g
            })
          });
        }
        ce < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = B.ReactCurrentDispatcher, ae;
    function Ne(e, n, u) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/);
            ae = t && t[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var Be = !1, Ye;
    {
      var et = typeof WeakMap == "function" ? WeakMap : Map;
      Ye = new et();
    }
    function $e(e, n) {
      if (!e || Be)
        return "";
      {
        var u = Ye.get(e);
        if (u !== void 0)
          return u;
      }
      var t;
      Be = !0;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var o;
      o = ue.current, ue.current = null, P();
      try {
        if (n) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (L) {
              t = L;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (L) {
              t = L;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            t = L;
          }
          e();
        }
      } catch (L) {
        if (L && t && typeof L.stack == "string") {
          for (var c = L.stack.split(`
`), p = t.stack.split(`
`), b = c.length - 1, R = p.length - 1; b >= 1 && R >= 0 && c[b] !== p[R]; )
            R--;
          for (; b >= 1 && R >= 0; b--, R--)
            if (c[b] !== p[R]) {
              if (b !== 1 || R !== 1)
                do
                  if (b--, R--, R < 0 || c[b] !== p[R]) {
                    var O = `
` + c[b].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && Ye.set(e, O), O;
                  }
                while (b >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Be = !1, ue.current = o, ye(), Error.prepareStackTrace = a;
      }
      var T = e ? e.displayName || e.name : "", M = T ? Ne(T) : "";
      return typeof e == "function" && Ye.set(e, M), M;
    }
    function vt(e, n, u) {
      return $e(e, !1);
    }
    function tt(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ke(e, n, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return $e(e, tt(e));
      if (typeof e == "string")
        return Ne(e);
      switch (e) {
        case G:
          return Ne("Suspense");
        case m:
          return Ne("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            return vt(e.render);
          case E:
            return ke(e.type, n, u);
          case F: {
            var t = e, a = t._payload, o = t._init;
            try {
              return ke(o(a), n, u);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, nt = {}, wt = B.ReactDebugCurrentFrame;
    function De(e) {
      if (e) {
        var n = e._owner, u = ke(e.type, e._source, n ? n.type : null);
        wt.setExtraStackFrame(u);
      } else
        wt.setExtraStackFrame(null);
    }
    function le(e, n, u, t, a) {
      {
        var o = Function.call.bind(ve);
        for (var l in e)
          if (o(e, l)) {
            var c = void 0;
            try {
              if (typeof e[l] != "function") {
                var p = Error((t || "React class") + ": " + u + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              c = e[l](n, l, t, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              c = b;
            }
            c && !(c instanceof Error) && (De(a), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", u, l, typeof c), De(null)), c instanceof Error && !(c.message in nt) && (nt[c.message] = !0, De(a), I("Failed %s type: %s", u, c.message), De(null));
          }
      }
    }
    var Fe = Array.isArray;
    function Oe(e) {
      return Fe(e);
    }
    function Ge(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, u = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function we(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function rt(e) {
      if (we(e))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), _e(e);
    }
    var Ue = B.ReactCurrentOwner, ot = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ie;
    function Pe(e) {
      if (ve.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function qe(e) {
      if (ve.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ie(e, n) {
      typeof e.ref == "string" && Ue.current;
    }
    function Z(e, n) {
      {
        var u = function() {
          be || (be = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function q(e, n) {
      {
        var u = function() {
          ie || (ie = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var at = function(e, n, u, t, a, o, l) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: u,
        props: l,
        // Record the component responsible for creating this element.
        _owner: o
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function xe(e, n, u, t, a) {
      {
        var o, l = {}, c = null, p = null;
        u !== void 0 && (rt(u), c = "" + u), qe(n) && (rt(n.key), c = "" + n.key), Pe(n) && (p = n.ref, Ie(n, a));
        for (o in n)
          ve.call(n, o) && !ot.hasOwnProperty(o) && (l[o] = n[o]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (o in b)
            l[o] === void 0 && (l[o] = b[o]);
        }
        if (c || p) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Z(l, R), p && q(l, R);
        }
        return at(e, c, p, a, t, Ue.current, l);
      }
    }
    var ze = B.ReactCurrentOwner, Ve = B.ReactDebugCurrentFrame;
    function Se(e) {
      if (e) {
        var n = e._owner, u = ke(e.type, e._source, n ? n.type : null);
        Ve.setExtraStackFrame(u);
      } else
        Ve.setExtraStackFrame(null);
    }
    var He;
    He = !1;
    function Le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Ke() {
      {
        if (ze.current) {
          var e = oe(ze.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function it(e) {
      return "";
    }
    var Je = {};
    function st(e) {
      {
        var n = Ke();
        if (!n) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (n = `

Check the top-level render call using <` + u + ">.");
        }
        return n;
      }
    }
    function me(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = st(n);
        if (Je[u])
          return;
        Je[u] = !0;
        var t = "";
        e && e._owner && e._owner !== ze.current && (t = " It was passed a child from " + oe(e._owner.type) + "."), Se(e), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, t), Se(null);
      }
    }
    function pe(e, n) {
      {
        if (typeof e != "object")
          return;
        if (Oe(e))
          for (var u = 0; u < e.length; u++) {
            var t = e[u];
            Le(t) && me(t, n);
          }
        else if (Le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var a = H(e);
          if (typeof a == "function" && a !== e.entries)
            for (var o = a.call(e), l; !(l = o.next()).done; )
              Le(l.value) && me(l.value, n);
        }
      }
    }
    function bt(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var u;
        if (typeof n == "function")
          u = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === E))
          u = n.propTypes;
        else
          return;
        if (u) {
          var t = oe(n);
          le(u, e.props, "prop", t, e);
        } else if (n.PropTypes !== void 0 && !He) {
          He = !0;
          var a = oe(n);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", a || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(e) {
      {
        for (var n = Object.keys(e.props), u = 0; u < n.length; u++) {
          var t = n[u];
          if (t !== "children" && t !== "key") {
            Se(e), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), Se(null);
            break;
          }
        }
        e.ref !== null && (Se(e), I("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    var ut = {};
    function Me(e, n, u, t, a, o) {
      {
        var l = re(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = it();
          p ? c += p : c += Ke();
          var b;
          e === null ? b = "null" : Oe(e) ? b = "array" : e !== void 0 && e.$$typeof === f ? (b = "<" + (oe(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, c);
        }
        var R = xe(e, n, u, a, o);
        if (R == null)
          return R;
        if (l) {
          var O = n.children;
          if (O !== void 0)
            if (t)
              if (Oe(O)) {
                for (var T = 0; T < O.length; T++)
                  pe(O[T], e);
                Object.freeze && Object.freeze(O);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pe(O, e);
        }
        if (ve.call(n, "key")) {
          var M = oe(e), L = Object.keys(n).filter(function(W) {
            return W !== "key";
          }), y = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ut[M + y]) {
            var x = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            I(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, y, M, x, M), ut[M + y] = !0;
          }
        }
        return e === v ? ct(R) : bt(R), R;
      }
    }
    function xt(e, n, u) {
      return Me(e, n, u, !0);
    }
    function lt(e, n, u) {
      return Me(e, n, u, !1);
    }
    var dt = lt, ft = xt;
    Qe.Fragment = v, Qe.jsx = dt, Qe.jsxs = ft;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? Et.exports = Dt() : Et.exports = Ft();
var d = Et.exports;
function jt(r) {
  const f = window.AudioContext || window.webkitAudioContext, s = new f(), v = s.createMediaStreamSource(r), S = s.createAnalyser();
  S.fftSize = 2048, S.smoothingTimeConstant = 0.85, v.connect(S);
  const A = new Uint8Array(S.fftSize);
  function D() {
    S.getByteTimeDomainData(A);
    let _ = 0;
    for (let w = 0; w < A.length; w++) {
      const G = (A[w] - 128) / 128;
      _ += G * G;
    }
    return Math.sqrt(_ / A.length);
  }
  return {
    getLevel: () => D(),
    dispose: async () => {
      try {
        v.disconnect();
      } catch {
      }
      try {
        S.disconnect();
      } catch {
      }
      try {
        await s.close();
      } catch {
      }
    }
  };
}
let gt = null;
async function Ot() {
  if (gt) return gt;
  const r = await import("./blazeface.esm-D5KORnOe.js"), f = await import("./index-2kM27Pi_.js");
  return f.ready && await f.ready(), gt = await r.load(), gt;
}
function _t(r, f, s) {
  if (r.width <= 0 || r.height <= 0 || f <= 0 || s <= 0) return !1;
  const v = Math.max(6, Math.floor(f * 0.06)), S = Math.max(6, Math.floor(s * 0.06));
  if (r.x < v || r.y < S || r.x + r.width > f - v || r.y + r.height > s - S) return !1;
  const A = r.width * r.height, D = f * s, _ = A / D;
  if (_ < 0.04 || _ > 0.65) return !1;
  const w = r.width / r.height;
  return !(w < 0.6 || w > 1.6);
}
async function Pt(r) {
  if ("FaceDetector" in window)
    try {
      const s = await new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }).detect(r);
      if (s && s.length > 0) {
        const v = s[0]?.boundingBox, S = r.videoWidth || r.width || 0, A = r.videoHeight || r.height || 0;
        if (v) {
          const D = { x: v.x, y: v.y, width: v.width, height: v.height };
          if (_t(D, S, A)) return { present: !0, confidence: 0.85 };
        }
      }
      return { present: !1, confidence: 0 };
    } catch {
    }
  try {
    const s = await (await Ot()).estimateFaces(r, !1);
    if (s && s.length > 0) {
      const v = r.videoWidth || r.width || 0, S = r.videoHeight || r.height || 0;
      for (const A of s) {
        const [D, _] = A.topLeft, [w, G] = A.bottomRight, m = { x: D, y: _, width: w - D, height: G - _ };
        if (_t(m, v, S)) {
          const E = A.probability ? A.probability[0] : 0.75;
          return { present: !0, confidence: Math.max(0.6, Math.min(1, E)) };
        }
      }
    }
  } catch {
  }
  return { present: !1, confidence: 0 };
}
function It({ onComplete: r, onError: f }) {
  const s = ["camera", "microphone", "face", "monitor", "browser"], [v, S] = k({
    camera: "pending",
    microphone: "pending",
    face: "pending",
    monitor: "pending",
    browser: "pending"
  }), [A, D] = k(0), [_, w] = k(0), [G, m] = k({}), [E, F] = k({}), Y = j(null), V = j(null), te = j(null), H = j(null), B = j(null), I = () => {
    try {
      Y.current?.getTracks().forEach((i) => i.stop());
    } catch {
    }
    try {
      V.current?.getTracks().forEach((i) => i.stop());
    } catch {
    }
    Y.current = null, V.current = null, te.current && (te.current.dispose().catch(() => {
    }), te.current = null), H.current && (cancelAnimationFrame(H.current), H.current = null);
  }, fe = async (i) => {
    try {
      const h = window.AudioContext || window.webkitAudioContext;
      if (!h) throw new Error("AudioContext not supported");
      const g = new h(), z = g.createMediaStreamSource(i), P = g.createAnalyser();
      P.fftSize = 256, P.smoothingTimeConstant = 0.8, z.connect(P);
      const ye = new Uint8Array(P.frequencyBinCount);
      P.getByteFrequencyData(ye), sessionStorage.setItem("audio-context-initialized", "true"), z.disconnect(), await g.close(), typeof window < "u" && (window.precheckAudioStream = i);
    } catch {
      sessionStorage.setItem("audio-context-initialized", "false");
    }
  }, se = async (i) => {
    const h = B.current;
    let g = 0, z = 0, P = 0;
    const ye = 30;
    for (; P < ye && g < 5; ) {
      try {
        const ae = await Pt(h);
        ae.present && (g += 1, z = Math.max(z, ae.confidence));
      } catch {
      }
      P++, D(P), await new Promise((ae) => setTimeout(ae, 100));
    }
    return { status: g >= 5, confidence: z, timestamp: Date.now() };
  }, ge = () => {
    try {
      const i = window.screen.width, h = window.screen.height, g = window.screen.availWidth;
      return i / h > 3 || i > g * 1.5 || [3840, 3360, 2560, 4480, 5120].includes(i) ? 2 : 1;
    } catch {
      return 1;
    }
  }, ne = async () => ge(), $ = () => [
    "navigator.mediaDevices",
    "navigator.mediaDevices.getUserMedia",
    "requestAnimationFrame",
    "WebAssembly"
  ].every((h) => {
    const g = h.split(".");
    let z = window;
    for (const P of g) {
      if (!(P in z)) return !1;
      z = z[P];
    }
    return !0;
  }), C = (i, h) => {
    S((g) => ({ ...g, [i]: h }));
  }, K = N(async () => {
    C("camera", "running"), m((i) => ({ ...i, camera: "" }));
    try {
      try {
        Y.current?.getTracks().forEach((h) => h.stop());
      } catch {
      }
      const i = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } }
      });
      if (Y.current = i, !B.current) {
        const h = document.createElement("video");
        h.muted = !0, h.playsInline = !0, B.current = h;
      }
      B.current.srcObject = i;
      try {
        await B.current.play();
      } catch {
      }
      return F((h) => ({ ...h, cameraAccess: !0 })), C("camera", "passed"), !0;
    } catch (i) {
      const h = i?.name === "NotAllowedError" ? "Camera permission denied" : i?.message || "Camera access failed";
      return m((g) => ({ ...g, camera: h })), C("camera", "failed"), !1;
    }
  }, []), re = N(async () => {
    C("microphone", "running"), m((i) => ({ ...i, microphone: "" }));
    try {
      try {
        V.current?.getTracks().forEach((h) => h.stop());
      } catch {
      }
      const i = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      V.current = i, F((h) => ({ ...h, microphoneAccess: !0 })), await fe(i);
      try {
        const h = jt(i);
        te.current = h;
        const g = () => {
          w(h.getLevel()), H.current = requestAnimationFrame(g);
        };
        H.current = requestAnimationFrame(g);
      } catch {
      }
      return C("microphone", "passed"), !0;
    } catch (i) {
      const h = i?.name === "NotAllowedError" ? "Microphone permission denied" : i?.message || "Microphone access failed";
      return m((g) => ({ ...g, microphone: h })), C("microphone", "failed"), !1;
    }
  }, []), he = N(async () => {
    C("face", "running"), m((i) => ({ ...i, face: "" }));
    try {
      if (!Y.current) throw new Error("Camera is not initialized");
      const i = await se(Y.current);
      if (F((h) => ({ ...h, faceDetection: i })), i.status)
        return C("face", "passed"), !0;
      throw new Error("No face detected. Please align your face within the frame and retry.");
    } catch (i) {
      const h = i?.message || "Face detection failed";
      return m((g) => ({ ...g, face: h })), C("face", "failed"), !1;
    }
  }, []), Re = N(async () => {
    C("monitor", "running"), m((i) => ({ ...i, monitor: "" }));
    try {
      const i = await ne();
      if (i && i > 1)
        throw F((h) => ({ ...h, monitorCount: i })), new Error("Multiple displays detected. Please remove external screens and keep only one display connected, then press Retry.");
      if (i === 1)
        return F((h) => ({ ...h, monitorCount: i })), C("monitor", "passed"), !0;
      throw new Error("Could not verify displays");
    } catch (i) {
      return m((h) => ({ ...h, monitor: i?.message || "Monitor verification failed" })), C("monitor", "failed"), !1;
    }
  }, []), oe = N(async () => {
    C("browser", "running"), m((i) => ({ ...i, browser: "" }));
    try {
      const i = $();
      if (F((h) => ({ ...h, browserSupport: i })), !i) throw new Error("Required browser features are unavailable");
      return C("browser", "passed"), !0;
    } catch (i) {
      return m((h) => ({ ...h, browser: i?.message || "Browser not supported" })), C("browser", "failed"), !1;
    }
  }, []), X = {
    camera: K,
    microphone: re,
    face: he,
    monitor: Re,
    browser: oe
  }, ce = N(async (i) => {
    for (let h = i; h < s.length; h++) {
      const g = s[h];
      if (!await X[g]()) break;
    }
  }, [X]);
  ee(() => {
    if (!s.every((g) => v[g] === "passed")) return;
    const h = {
      cameraAccess: !!E.cameraAccess,
      microphoneAccess: !!E.microphoneAccess,
      faceDetection: E.faceDetection || { status: !1, confidence: 0, timestamp: Date.now() },
      monitorCount: E.monitorCount || 1,
      browserSupport: !!E.browserSupport,
      codeEditorReady: !0
    };
    r(h), I();
  }, [v, E]), ee(() => (ce(0), () => I()), []);
  const je = (i) => {
    const h = s.indexOf(i);
    S((g) => {
      const z = { ...g };
      for (let P = h; P < s.length; P++) z[s[P]] = "pending";
      return z;
    }), m((g) => ({ ...g, [i]: "" })), ce(h);
  }, Ae = s.filter((i) => v[i] === "passed").length, Ce = s.some((i) => v[i] === "running"), Te = Math.round((Ae + (Ce ? 0.5 : 0)) / s.length * 100);
  return /* @__PURE__ */ d.jsx("div", { style: { fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#eff6ff,#eef2ff)" }, children: /* @__PURE__ */ d.jsxs("div", { style: { width: 720, maxWidth: "95vw", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { textAlign: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ d.jsx("h2", { style: { margin: 0, fontSize: 20, fontWeight: 700 }, children: "System Pre-Check" }),
      /* @__PURE__ */ d.jsx("p", { style: { color: "#6b7280" }, children: "Verifying your system for proctored assessment" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
        /* @__PURE__ */ d.jsx("span", { children: "Overall Progress" }),
        /* @__PURE__ */ d.jsxs("span", { children: [
          Te,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ d.jsx("div", { style: { height: 8, background: "#f3f4f6", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ d.jsx("div", { style: { width: `${Te}%`, height: 8, background: "#3b82f6" } }) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: { display: "grid", gap: 8 }, children: s.map((i) => {
      const h = i === "camera" ? "Camera Access" : i === "microphone" ? "Microphone Access" : i === "face" ? "Face Detection" : i === "monitor" ? "Single Monitor Check" : "Browser Support", g = v[i], z = g === "passed" ? "#ecfdf5" : g === "running" ? "#eff6ff" : g === "failed" ? "#fef2f2" : "#f9fafb", P = g === "passed" ? "#10b981" : g === "running" ? "#3b82f6" : g === "failed" ? "#dc2626" : "#9ca3af";
      return /* @__PURE__ */ d.jsxs("div", { style: { display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 12, alignItems: "center", padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", background: z }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { width: 12, height: 12, borderRadius: 9999, background: P } }),
        /* @__PURE__ */ d.jsxs("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: /* @__PURE__ */ d.jsx("div", { style: { fontWeight: 600, fontSize: 14 }, children: h }) }),
          i === "face" && /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center", marginTop: 8 }, children: [
            /* @__PURE__ */ d.jsx("video", { ref: B, muted: !0, playsInline: !0, autoPlay: !0, style: { width: 180, height: 112, background: "#000", borderRadius: 6 } }),
            g === "running" && /* @__PURE__ */ d.jsxs("div", { style: { color: "#6b7280", fontSize: 12 }, children: [
              "Analyzing frames: ",
              A
            ] })
          ] }),
          i === "microphone" && g !== "pending" && /* @__PURE__ */ d.jsx("div", { style: { marginTop: 6, width: 220, height: 8, background: "#e5e7eb", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ d.jsx("div", { style: { width: `${Math.min(100, Math.round(_ * 200))}%`, height: 8, background: "#10b981", transition: "width 150ms" } }) }),
          G[i] && /* @__PURE__ */ d.jsx("div", { style: { marginTop: 6, color: "#dc2626", fontSize: 12 }, children: G[i] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 9999, background: g === "passed" ? "#111827" : g === "failed" ? "#fee2e2" : "#e5e7eb", color: g === "passed" ? "#fff" : "#111827" }, children: g === "passed" ? "Passed" : g === "running" ? "Checking…" : g === "failed" ? "Failed" : "Pending" }),
          g === "failed" && /* @__PURE__ */ d.jsx("button", { onClick: () => je(i), style: { fontSize: 12, padding: "6px 10px", borderRadius: 6, background: "#111827", color: "#fff", border: 0 }, children: "Retry" })
        ] })
      ] }, i);
    }) })
  ] }) });
}
function zt(r) {
  const { onEvent: f, context: s = "coding" } = r || {}, [v, S] = k("idle"), [A, D] = k(void 0), [_, w] = k(0), [G, m] = k(0), E = j(null), F = j(null), Y = j(null), V = j(!1), te = j(0), H = j(0), B = j(null), I = N(() => {
    Y.current && cancelAnimationFrame(Y.current), Y.current = null;
    try {
      E.current?.dispose();
    } catch {
    }
    E.current = null;
    try {
      F.current?.getTracks().forEach(($) => $.stop());
    } catch {
    }
    F.current = null, S("idle");
  }, []), fe = N(
    ($) => {
      const C = Date.now(), K = V.current;
      $ > 18 && C - te.current > 2e3 && (m((re) => re + 1), te.current = C, f?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: s,
        data: { level: $, reason: "audio_spike", faceDetected: K }
      })), K && $ < 3 ? B.current == null ? B.current = C : C - B.current > 15e3 && (m((re) => re + 1), B.current = null, f?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: s,
        data: { level: $, reason: "extended_silence_with_face" }
      })) : $ >= 3 && (B.current = null), !K && $ > 12 && C - H.current > 3e3 && (m((re) => re + 1), H.current = C, f?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: s,
        data: { level: $, reason: "audio_without_face" }
      }));
    },
    [s, f]
  ), se = N(() => {
    try {
      if (!E.current) return;
      const $ = E.current.getLevel(), C = Math.max(0, Math.min(100, Math.round($ * 160)));
      w(C), fe(C);
    } finally {
      Y.current = requestAnimationFrame(se);
    }
  }, [fe]), ge = N(
    async ($) => {
      try {
        D(void 0), m(0), te.current = 0, H.current = 0, B.current = null;
        let C = $;
        if (!C && typeof window < "u" && window.precheckAudioStream) {
          const he = window.precheckAudioStream;
          he?.active && he.getAudioTracks().length > 0 && (C = he);
        }
        C || (C = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0, sampleRate: 44100 }
        })), F.current = C;
        const K = C.getAudioTracks(), re = K.length ? new MediaStream(K) : C;
        E.current = jt(re), S("running"), Y.current = requestAnimationFrame(se);
      } catch (C) {
        S("error"), D(C instanceof Error ? C.message : String(C));
      }
    },
    [se]
  ), ne = N(($) => {
    V.current = $;
  }, []);
  return ee(() => I, [I]), { status: v, error: A, level: _, anomalyCount: G, start: ge, stop: I, setFaceDetected: ne };
}
function Lt({ monitoringStatus: r, sessionData: f, onStatusChange: s, onUpdateSession: v, onAddEvent: S, onAddSnapshot: A }) {
  const [D, _] = k({ x: typeof window < "u" ? window.innerWidth - 280 : 0, y: typeof window < "u" ? window.innerHeight - 400 : 0 }), [w, G] = k(!1), [m, E] = k({ x: 0, y: 0 }), [F, Y] = k(0), [V, te] = k(!1), [H, B] = k(null), [I, fe] = k(null), [se, ge] = k(null), [ne, $] = k(0), [C, K] = k(0), [re, he] = k([]), [Re, oe] = k(0), [X, ce] = k(0), [je, Ae] = k(0), [Ce, Te] = k(0), [i, h] = k(0), [g, z] = k(!1), [P, ye] = k(null), [ue, ae] = k(null), [Ne, Be] = k(0), [Ye, et] = k(0), [$e, vt] = k(0), [tt, ke] = k(null), [ve, nt] = k(0), [wt, De] = k(0), le = j(null), Fe = j(null), Oe = j(null), Ge = j(null), we = j(null), _e = j(null), rt = j(!1), Ue = j(0), ot = j(0), be = j("none");
  j({ noFace: 0, multipleFaces: 0 });
  const ie = j({ noFace: !1, multipleFaces: !1, gazeOff: !1 }), Pe = j([]), qe = j(0), Ie = j(!1), Z = j({ yaw: 0, pitch: 0, roll: 0, initialized: !1 }), q = j({ isGood: !0, goodStreak: 0, poorStreak: 0 }), at = 8, xe = 0.25, { level: ze, anomalyCount: Ve, start: Se, stop: He, setFaceDetected: Le } = zt({
    context: "coding",
    onEvent: (t) => S?.({ ...t, timestamp: Date.now() })
  });
  ee(() => $(ze), [ze]), ee(() => K(Ve), [Ve]);
  const Ke = N((t, a) => {
    const o = t.data;
    let l = 0, c = 0, p = 0;
    for (let x = 0; x < o.length; x += 4) {
      const W = o[x], J = o[x + 1], Q = o[x + 2], U = (W + J + Q) / 3;
      if (l += U, x > 0) {
        const de = (o[x - 4] + o[x - 3] + o[x - 2]) / 3;
        c += Math.abs(U - de);
      }
      if (x > t.width * 4 && x < o.length - t.width * 4) {
        const de = (o[x - t.width * 4] + o[x - t.width * 4 + 1] + o[x - t.width * 4 + 2]) / 3, We = (o[x + t.width * 4] + o[x + t.width * 4 + 1] + o[x + t.width * 4 + 2]) / 3;
        (Math.abs(U - de) > 30 || Math.abs(U - We) > 30) && p++;
      }
    }
    const b = o.length / 4;
    l /= b, c /= b;
    const R = p / b, O = a.width / a.height, T = {
      neutral: Math.max(0.1, 0.6 - Math.abs(l - 120) / 200 - Math.abs(c - 15) / 100),
      happy: Math.max(0.05, (l > 115 ? 0.4 : 0.1) + (R > 0.15 ? 0.3 : 0) + (O > 0.85 ? 0.2 : 0)),
      focused: Math.max(0.05, (c > 20 ? 0.4 : 0.1) + (R > 0.12 ? 0.2 : 0) + (l < 110 ? 0.2 : 0)),
      concerned: Math.max(0.05, (l < 105 ? 0.3 : 0.1) + (c > 25 ? 0.2 : 0) + (O < 0.75 ? 0.2 : 0)),
      surprised: Math.max(0.05, (O > 0.9 ? 0.3 : 0.1) + (R > 0.18 ? 0.3 : 0))
    }, M = Date.now() % 1e4 / 1e4;
    Object.keys(T).forEach((x) => {
      const W = x;
      T[W] += Math.sin(M * Math.PI * 2) * 0.1, T[W] = Math.max(0.05, Math.min(0.95, T[W]));
    });
    const L = Object.entries(T).reduce((x, W) => T[x[0]] > T[W[0]] ? x : W)[0], y = Math.max(...Object.values(T));
    return { dominant: L, confidence: y, emotions: T };
  }, []), it = N((t, a) => {
    const o = a.data;
    let l = 0, c = 0, p = 0;
    const b = Math.floor(a.height * 0.6);
    for (let y = Math.floor(a.height * 0.3); y < b; y++)
      for (let x = 0; x < a.width; x += 4) {
        const W = (y * a.width + x) * 4, J = o[W], Q = o[W + 1], U = o[W + 2];
        (J + Q + U) / 3 < 100 ? l++ : c++, (Math.abs(J - Q) > 30 || Math.abs(Q - U) > 30) && p++;
      }
    const R = l + c, O = R ? l / R : 0, T = R ? p / R : 0, M = O > 0.4 && T < 0.3, L = O > 0.2;
    return { isProfessional: M, hasShirt: L, confidence: 0.7, details: M ? "Professional attire detected" : "Casual attire detected" };
  }, []), Je = N((t, a, o) => {
    const l = t.x + t.width / 2, c = t.y + t.height / 2, p = (l - a / 2) / a, b = (c - o / 2) / o, R = Math.sqrt(p * p + b * b), O = R < 0.15, T = Math.max(0, 1 - R * 2);
    return { isLookingAtCamera: O, gazeDirection: { x: p, y: b }, confidence: 0.8, attentionScore: T };
  }, []), st = N((t) => {
    if (!t.landmarks || t.landmarks.length < 4) return null;
    const a = t.landmarks, o = a[0], l = a[1], c = a[2], p = a[3] ?? [(l[0] + o[0]) / 2, Math.max(l[1], o[1]) + t.height * 0.2], b = [(l[0] + o[0]) / 2, (l[1] + o[1]) / 2], R = l[0] - o[0], O = l[1] - o[1], T = Math.max(1, Math.hypot(R, O)), M = Math.atan2(O, R) * 180 / Math.PI, L = Math.hypot(c[0] - o[0], c[1] - o[1]), y = Math.hypot(c[0] - l[0], c[1] - l[1]), x = (L - y) / T, W = Math.max(-45, Math.min(45, x * 90)), J = Math.max(1, c[1] - b[1]), Q = Math.max(1, (p[1] ?? b[1]) - c[1]), U = (J - Q) / t.height, de = Math.max(-45, Math.min(45, U * 180)), We = Math.abs(M) > 20, St = Math.abs(x) > 0.18, Xe = Math.abs(de) > 15, ht = St || Xe || We, mt = Math.max(0.5, Math.min(1, Math.max(
      Math.abs(x) * 2,
      Math.abs(M) / 30,
      Math.abs(de) / 30
    )));
    return { yaw: W, pitch: de, roll: M, isHeadTurned: ht, confidence: mt };
  }, []), me = N((t = 0.8) => {
    const a = le.current, o = Fe.current;
    if (!a || !o) return null;
    const l = a.videoWidth || 320, c = a.videoHeight || 240;
    if (a.readyState < 2) return null;
    o.width = l, o.height = c;
    const p = o.getContext("2d");
    if (!p) return null;
    p.drawImage(a, 0, 0, l, c);
    try {
      return o.toDataURL("image/jpeg", t);
    } catch {
      return null;
    }
  }, []), pe = N((t) => {
    if (A) {
      A(t);
      return;
    }
    if (v) {
      let o = [...f?.snapshots || [], t];
      o.length > 50 && (o = o.slice(o.length - 50)), v({ snapshots: o });
    }
  }, [A, v, f?.snapshots]), bt = N(() => {
    if (qe.current >= 5 || Ie.current) return;
    Ie.current = !0;
    const t = me(0.85);
    if (t) {
      pe({ timestamp: Date.now(), type: "random_webcam", image: t, context: "Random webcam snapshot during coding" }), qe.current += 1, Ie.current = !1;
      return;
    }
    const a = window.setTimeout(() => {
      const o = me(0.85);
      o && (pe({ timestamp: Date.now(), type: "random_webcam", image: o, context: "Random webcam snapshot (retry) during coding" }), qe.current += 1), Ie.current = !1;
    }, 3e3);
    Pe.current.push(a);
  }, [pe, me]), ct = N((t, a) => {
    const { gazeDirection: o, attentionScore: l, isLookingAtCamera: c } = t, p = Math.sqrt(o.x * o.x + o.y * o.y), b = !c && p > 0.5 && l < 0.3;
    return a && a.isHeadTurned && a.confidence >= 0.6 ? !0 : b;
  }, []), ut = N(async () => {
    try {
      const t = await import("./index-2kM27Pi_.js"), a = await import("./blazeface.esm-D5KORnOe.js");
      t.ready && await t.ready();
      const o = await a.load();
      return Ge.current = o, !0;
    } catch (t) {
      return console.error("[widget] Failed to init face detection:", t), !1;
    }
  }, []), Me = N(async () => {
    if (!le.current || !Fe.current || !Ge.current) {
      we.current = requestAnimationFrame(Me);
      return;
    }
    const t = le.current, a = Fe.current;
    if (t.readyState !== 4) {
      we.current = requestAnimationFrame(Me);
      return;
    }
    try {
      const o = await Ge.current.estimateFaces(t, !1), l = t.videoWidth || t.width || a.width, c = t.videoHeight || t.height || a.height, p = Math.max(6, Math.floor(l * 0.06)), b = Math.max(6, Math.floor(c * 0.06)), R = 0.04, O = 0.65, T = o.map((y) => {
        const [x, W] = y.topLeft, [J, Q] = y.bottomRight;
        return { x, y: W, width: J - x, height: Q - W, confidence: y.probability?.[0] || 0.8, landmarks: y.landmarks };
      }).filter((y) => {
        if (y.width <= 0 || y.height <= 0 || y.x < p || y.y < b || y.x + y.width > l - p || y.y + y.height > c - b) return !1;
        const W = y.width * y.height / (l * c);
        if (W < R || W > O) return !1;
        const J = y.width / y.height;
        return !(J < 0.6 || J > 1.6);
      });
      Y(T.length), he(T), te(T.length === 1), Le(T.length > 0);
      const M = Date.now();
      let L = T.length === 0 ? "none" : T.length === 1 ? "single" : "multiple";
      if (L === "multiple") {
        if (be.current !== "multiple" && (ye(M), vt((y) => y + 1), !ie.current.multipleFaces)) {
          ie.current.multipleFaces = !0, S?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: T.length }, timestamp: M });
          const y = me(0.85);
          y && pe({ timestamp: M, type: "violation_trigger", image: y, context: "Multiple faces detected" });
        }
      } else {
        if (be.current === "multiple" && P !== null) {
          const y = M - P;
          Be((x) => x + y), ye(null);
        }
        ie.current.multipleFaces = !1;
      }
      if (L === "none") {
        if (be.current !== "none" && (ke(M), nt((y) => y + 1), !ie.current.noFace)) {
          ie.current.noFace = !0, S?.({ eventType: "face_detection", severity: "critical", context: "coding", data: { reason: "no_face" }, timestamp: M });
          const y = me(0.85);
          y && pe({ timestamp: M, type: "violation_trigger", image: y, context: "No face detected" });
        }
      } else {
        if (be.current === "none" && tt !== null) {
          const y = M - tt;
          De((x) => x + y), ke(null);
        }
        ie.current.noFace = !1;
      }
      if (be.current = L, T.length === 1) {
        const y = T[0], x = a.getContext("2d");
        if (x) {
          x.drawImage(t, 0, 0, a.width, a.height);
          const W = x.getImageData(0, 0, a.width, a.height), J = x.getImageData(y.x, y.y, y.width, y.height);
          let Q = { isGoodPosture: !0, shoulderAlignment: 0, headTilt: 0, confidence: 0.7 };
          const U = st(y);
          if (U) {
            Z.current.initialized ? (Z.current.yaw = xe * U.yaw + (1 - xe) * Z.current.yaw, Z.current.pitch = xe * U.pitch + (1 - xe) * Z.current.pitch, Z.current.roll = xe * U.roll + (1 - xe) * Z.current.roll) : Z.current = { yaw: U.yaw, pitch: U.pitch, roll: U.roll, initialized: !0 };
            const Ee = Z.current.yaw, pt = Z.current.pitch, Rt = Z.current.roll, Ct = Math.abs(Rt) <= 10 && Math.abs(pt) <= 12 && Math.abs(Ee) <= 18;
            Ct !== q.current.isGood ? Ct ? (q.current.goodStreak += 1, q.current.poorStreak = 0, q.current.goodStreak >= at && (q.current.isGood = !0, q.current.goodStreak = 0)) : (q.current.poorStreak += 1, q.current.goodStreak = 0, q.current.poorStreak >= at && (q.current.isGood = !1, q.current.poorStreak = 0)) : (q.current.goodStreak = 0, q.current.poorStreak = 0), Q = {
              isGoodPosture: q.current.isGood,
              // Use roll (tilt) as a proxy for shoulder alignment; smaller magnitude means better alignment
              shoulderAlignment: -Rt,
              headTilt: pt,
              confidence: Math.min(1, 0.6 + 0.4 * U.confidence)
            };
          }
          const de = Ke(J, y), We = it(J, W), St = Je(y, a.width, a.height), Xe = U ?? st(y);
          B(Q), fe(de), ge(We);
          const ht = ct(St, Xe);
          if (ht && !g && Date.now() - ot.current > 3e3)
            h((Ee) => Ee + 1), z(!0), ae(M), ot.current = Date.now(), ie.current.gazeOff || (ie.current.gazeOff = !0, S?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0, reason: Xe?.isHeadTurned ? "head_movement" : "center_offset", headPose: Xe }, timestamp: M }));
          else if (!ht && g) {
            if (ue !== null) {
              const Ee = M - ue;
              et((pt) => pt + Ee), ae(null);
            }
            z(!1), ie.current.gazeOff = !1;
          }
          const mt = T.length === 0 || T.length > 1;
          if (v && (mt || M - Ue.current >= 5e3)) {
            if (mt) {
              const Ee = me(0.85);
              Ee && pe({ timestamp: M, type: "violation_trigger", image: Ee, context: T.length === 0 ? "No face detected" : "Multiple faces detected" });
            }
            v({ postureAnalysis: Q, attireAnalysis: We }), Ue.current = M;
          }
        }
      } else if (B(null), fe(null), ge(null), g) {
        if (ue !== null) {
          const y = M - ue;
          et((x) => x + y), ae(null);
        }
        z(!1);
      }
      T.length === 0 ? s?.("violation") : T.length > 1 ? s?.("warning") : s?.("optimal");
    } catch (o) {
      console.error("[widget] Face detection error:", o);
    }
    we.current = requestAnimationFrame(Me);
  }, [Ke, it, Je, ct, s, v, f?.snapshots, g, P, ue, Le]);
  ee(() => {
    K(0);
  }, []), ee(() => {
    (async () => {
      try {
        const p = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 320 }, height: { ideal: 240 }, frameRate: { ideal: 15 } },
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
        });
        le.current && (le.current.srcObject = p);
        let b = null;
        const R = p.getAudioTracks();
        R.length > 0 && (b = new MediaStream(R), _e.current = b), await ut(), b && await Se(b), we.current = requestAnimationFrame(Me);
      } catch {
        s?.("violation");
      }
    })();
    const a = 5, o = [60 * 1e3, 5 * 60 * 1e3], l = Math.max(0, a - o.length), c = [...o];
    if (l > 0)
      for (let R = 0; R < l; R++) {
        const O = 42e4 + Math.random() * 78e4, T = (Math.random() - 0.5) * 30 * 1e3;
        c.push(Math.max(0, Math.floor(O + T)));
      }
    c.sort((p, b) => p - b);
    for (let p = 1; p < c.length; p++)
      Math.abs(c[p] - c[p - 1]) < 10 * 1e3 && (c[p] += 12 * 1e3);
    return c.forEach((p) => {
      const b = window.setTimeout(() => bt(), p);
      Pe.current.push(b);
    }), () => {
      rt.current = !0, we.current && cancelAnimationFrame(we.current), le.current?.srcObject && le.current.srcObject.getTracks().forEach((b) => b.stop()), _e.current && _e.current.getTracks().forEach((p) => p.stop()), He(), _e.current = null, Pe.current.forEach((p) => window.clearTimeout(p)), Pe.current = [];
    };
  }, []);
  const xt = (t) => {
    G(!0);
    const a = Oe.current?.getBoundingClientRect();
    a && E({ x: t.clientX - a.left, y: t.clientY - a.top });
  }, lt = (t) => {
    if (w) {
      const a = Math.max(0, Math.min((typeof window < "u" ? window.innerWidth : 0) - 280, t.clientX - m.x)), o = Math.max(0, Math.min((typeof window < "u" ? window.innerHeight : 0) - 400, t.clientY - m.y));
      _({ x: a, y: o });
    }
  }, dt = () => G(!1);
  ee(() => {
    if (w)
      return document.addEventListener("mousemove", lt), document.addEventListener("mouseup", dt), () => {
        document.removeEventListener("mousemove", lt), document.removeEventListener("mouseup", dt);
      };
  }, [w, m]);
  const ft = () => {
    document.hidden && ce((t) => {
      const a = t + 1;
      return S?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { when: Date.now() }, timestamp: Date.now() }), a;
    });
  }, e = () => oe((t) => t + 1), n = (t) => {
    Ae((a) => a + 1), S?.({ eventType: "keystroke", severity: "info", context: "coding", data: {}, timestamp: Date.now() }), (t.ctrlKey || t.metaKey) && (t.key === "c" || t.key === "x" || t.key === "v") && (Te((a) => a + 1), t.preventDefault(), S?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, key: t.key }, timestamp: Date.now() }));
  };
  ee(() => (document.addEventListener("visibilitychange", ft), window.addEventListener("blur", e), document.addEventListener("keydown", n), () => {
    document.removeEventListener("visibilitychange", ft), window.removeEventListener("blur", e), document.removeEventListener("keydown", n);
  }), []);
  const u = F === 0 ? "#ef4444" : F > 1 ? "#f59e0b" : "#22c55e";
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: Oe,
      onMouseDown: xt,
      style: {
        position: "fixed",
        left: D.x,
        top: D.y,
        zIndex: 9999,
        width: 288,
        cursor: "move",
        border: `2px solid ${u}`,
        borderRadius: 8,
        background: "#fff",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        padding: 12,
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ d.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: /* @__PURE__ */ d.jsx("div", { style: { fontSize: 12, fontWeight: 600 }, children: F === 0 ? "No Face" : F > 1 ? "Multiple Faces" : V ? "Optimal" : "Good" }) }),
        /* @__PURE__ */ d.jsxs("div", { style: { position: "relative", background: "#000", borderRadius: 4, overflow: "hidden" }, children: [
          /* @__PURE__ */ d.jsx("video", { ref: le, autoPlay: !0, muted: !0, playsInline: !0, style: { width: "100%", height: 128, objectFit: "cover" } }),
          /* @__PURE__ */ d.jsx("canvas", { ref: Fe, width: 320, height: 240, style: { display: "none" } })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { style: { marginTop: 8, fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }, children: [
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Faces: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: F === 1 ? "#16a34a" : "#ef4444" }, children: F })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "No Face: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: ve > 0 ? "#ef4444" : "#16a34a" }, children: ve })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Multiple: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: $e > 0 ? "#ef4444" : "#16a34a" }, children: $e })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Posture: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: H?.isGoodPosture ? "#16a34a" : "#f59e0b" }, children: H?.isGoodPosture ? "Good" : "Poor" })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Attire: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: se?.isProfessional ? "#16a34a" : "#f59e0b" }, children: se?.isProfessional ? "Professional" : "Casual" })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Emotion: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: "#3b82f6" }, children: I?.dominant || "Unknown" })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Audio: ",
            /* @__PURE__ */ d.jsxs("span", { style: { color: ne > 50 ? "#16a34a" : ne > 20 ? "#f59e0b" : "#ef4444" }, children: [
              ne,
              "%"
            ] }),
            /* @__PURE__ */ d.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ d.jsx("div", { style: { width: `${Math.min(ne, 100)}%`, height: 6, transition: "width 100ms", background: ne > 50 ? "#16a34a" : ne > 20 ? "#f59e0b" : "#ef4444" } }) })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Audio Alerts: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: C > 0 ? "#ef4444" : "#16a34a" }, children: C })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Unfocus: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: Re > 0 ? "#ef4444" : "#16a34a" }, children: Re })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Tab Switch: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: X > 0 ? "#ef4444" : "#16a34a" }, children: X })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Keystrokes: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: "#3b82f6" }, children: je })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Copy Attempts: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: Ce > 0 ? "#ef4444" : "#16a34a" }, children: Ce })
          ] }),
          /* @__PURE__ */ d.jsxs("div", { children: [
            "Gaze Off: ",
            /* @__PURE__ */ d.jsx("strong", { style: { color: i > 0 ? "#ef4444" : "#16a34a" }, children: i })
          ] })
        ] })
      ]
    }
  );
}
const yt = (r, f) => r.length > f ? r.slice(r.length - f) : r, Wt = (r, f) => ({
  sessionId: r,
  sessionType: "coding-assessment",
  startTime: Date.now(),
  preCheckResults: f,
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
function Nt(r, f) {
  switch (f.eventType) {
    case "tab_switch":
      return { ...r, tabSwitches: r.tabSwitches + 1, violationCount: r.violationCount + 1 };
    case "audio_anomaly":
      return { ...r, audioAnomalies: r.audioAnomalies + 1, violationCount: r.violationCount + 1 };
    case "code_execution":
      return { ...r, codeExecutionCount: r.codeExecutionCount + 1 };
    case "face_detection": {
      const s = f.data?.reason;
      return s === "no_face" ? { ...r, noFaceIncidents: r.noFaceIncidents + 1, violationCount: r.violationCount + 1 } : s === "multiple_faces" ? { ...r, multipleFaceIncidents: r.multipleFaceIncidents + 1, violationCount: r.violationCount + 1 } : r;
    }
    case "gaze_tracking": {
      const s = f.data?.type === "focus_break", v = Number(f.data?.focusTimeMs) || 0, S = f.data?.offscreen === !0;
      return {
        ...r,
        focusBreaks: r.focusBreaks + (s ? 1 : 0),
        gazeDuration: r.gazeDuration + v,
        unfocusEvents: r.unfocusEvents + (s ? 1 : 0),
        gazeOffScreenIncidents: r.gazeOffScreenIncidents + (S ? 1 : 0),
        violationCount: r.violationCount + (s || S ? 1 : 0)
      };
    }
    case "keystroke": {
      const s = f.data?.copyCutPaste === !0;
      return {
        ...r,
        keystrokes: r.keystrokes + 1,
        copyCutPasteAttempts: r.copyCutPasteAttempts + (s ? 1 : 0),
        violationCount: r.violationCount + (s ? 1 : 0)
      };
    }
    default:
      return r;
  }
}
function Bt(r, f) {
  switch (f.type) {
    case "INIT":
      return { ...f.payload };
    case "SET_FIELDS": {
      const s = { ...r, ...f.payload };
      return s.snapshots && (s.snapshots = yt(s.snapshots, 50)), s.liveEvents && (s.liveEvents = yt(s.liveEvents, 200)), s;
    }
    case "ADD_EVENTS": {
      const s = yt([...r.liveEvents, ...f.events], 200), v = f.events.reduce(Nt, r.sessionStats);
      return { ...r, liveEvents: s, sessionStats: v };
    }
    case "ADD_SNAPSHOT": {
      const s = yt([...r.snapshots, f.snapshot], 50);
      return { ...r, snapshots: s };
    }
    case "TICK": {
      const s = Math.max(0, f.now - r.startTime);
      return s === r.sessionStats.totalDuration ? r : { ...r, sessionStats: { ...r.sessionStats, totalDuration: s } };
    }
    case "COMPLETE": {
      const s = f.endTime ?? Date.now();
      return { ...r, sessionStats: { ...r.sessionStats, totalDuration: Math.max(0, s - r.startTime) } };
    }
    default:
      return r;
  }
}
function Yt(r) {
  const [f, s] = k(null), v = N((m) => {
    s((E) => E && Bt(E, m));
  }, []), S = j(null), A = j(0), D = j(null), _ = N((m) => {
    const E = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    S.current = E;
    const F = sessionStorage.getItem(E);
    if (F)
      try {
        const V = JSON.parse(F);
        return s(V), E;
      } catch {
      }
    const Y = Wt(E, m);
    return s(Y), sessionStorage.setItem(E, JSON.stringify(Y)), E;
  }, [r?.sessionId]), w = N((m) => {
    const E = m ?? f;
    if (!(!E || !S.current))
      try {
        sessionStorage.setItem(S.current, JSON.stringify(E)), A.current = Date.now();
      } catch (F) {
        console.error("[session] persist failed", F);
      }
  }, [f]);
  return ee(() => {
    if (!f) return;
    const E = Date.now() - A.current;
    return E < 1e3 ? (D.current && clearTimeout(D.current), D.current = setTimeout(() => w(), 1e3 - E)) : w(), () => {
      D.current && clearTimeout(D.current);
    };
  }, [f, w]), ee(() => {
    const m = () => w();
    return window.addEventListener("visibilitychange", m), window.addEventListener("beforeunload", m), () => {
      window.removeEventListener("visibilitychange", m), window.removeEventListener("beforeunload", m);
    };
  }, [w]), ee(() => {
    if (!f) return;
    const m = setInterval(() => v({ type: "TICK", now: Date.now() }), 1e3);
    return () => clearInterval(m);
  }, [f, v]), At(() => ({
    state: f,
    sessionId: S.current,
    init: _,
    setFields: (m) => v({ type: "SET_FIELDS", payload: m }),
    addEvents: (m) => v({ type: "ADD_EVENTS", events: m }),
    addSnapshot: (m) => v({ type: "ADD_SNAPSHOT", snapshot: m }),
    complete: () => v({ type: "COMPLETE" })
  }), [f, v, _]);
}
function Gt({ onSessionStart: r, onSessionUpdate: f, onEvent: s }) {
  const [v, S] = k(null), [A, D] = k("optimal"), _ = Yt();
  return ee(() => {
    if (v && !_.state) {
      const w = _.init(v);
      r?.(w, v);
    }
  }, [v, _]), v ? /* @__PURE__ */ d.jsx(
    Lt,
    {
      monitoringStatus: A,
      sessionData: _.state ?? void 0,
      onStatusChange: (w) => D(w),
      onUpdateSession: (w) => {
        _.setFields(w), f?.(w);
      },
      onAddSnapshot: (w) => _.addSnapshot(w),
      onAddEvent: (w) => {
        _.addEvents([{ ...w, timestamp: w.timestamp ?? Date.now() }]), s?.(w);
      }
    }
  ) : /* @__PURE__ */ d.jsx(
    It,
    {
      onComplete: (w) => S(w),
      onError: () => S(null)
    }
  );
}
export {
  Lt as FloatingVideo,
  It as Prechecks,
  Gt as ProctoringWidget
};
