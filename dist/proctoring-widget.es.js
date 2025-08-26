import tn, { useState as E, useRef as _, useCallback as te, useEffect as ze, useMemo as on } from "react";
var $t = { exports: {} }, Tt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function an() {
  if (Jt) return Tt;
  Jt = 1;
  var t = tn, s = Symbol.for("react.element"), o = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(M, l, h) {
    var i, y = {}, D = null, P = null;
    h !== void 0 && (D = "" + h), l.key !== void 0 && (D = "" + l.key), l.ref !== void 0 && (P = l.ref);
    for (i in l) d.call(l, i) && !T.hasOwnProperty(i) && (y[i] = l[i]);
    if (M && M.defaultProps) for (i in l = M.defaultProps, l) y[i] === void 0 && (y[i] = l[i]);
    return { $$typeof: s, type: M, key: D, ref: P, props: y, _owner: x.current };
  }
  return Tt.Fragment = o, Tt.jsx = R, Tt.jsxs = R, Tt;
}
var At = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function sn() {
  return Zt || (Zt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = tn, s = Symbol.for("react.element"), o = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), M = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), K = Symbol.iterator, ce = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = K && e[K] || e[ce];
      return typeof n == "function" ? n : null;
    }
    var U = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(e) {
      {
        for (var n = arguments.length, c = new Array(n > 1 ? n - 1 : 0), b = 1; b < n; b++)
          c[b - 1] = arguments[b];
        Ae("error", e, c);
      }
    }
    function Ae(e, n, c) {
      {
        var b = U.ReactDebugCurrentFrame, C = b.getStackAddendum();
        C !== "" && (n += "%s", c = c.concat([C]));
        var B = c.map(function(k) {
          return String(k);
        });
        B.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, B);
      }
    }
    var ve = !1, Se = !1, Ne = !1, F = !1, w = !1, oe;
    oe = Symbol.for("react.module.reference");
    function V(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === T || w || e === x || e === h || e === i || F || e === P || ve || Se || Ne || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === y || e.$$typeof === R || e.$$typeof === M || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Re(e, n, c) {
      var b = e.displayName;
      if (b)
        return b;
      var C = n.displayName || n.name || "";
      return C !== "" ? c + "(" + C + ")" : c;
    }
    function Ve(e) {
      return e.displayName || "Context";
    }
    function ne(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case o:
          return "Portal";
        case T:
          return "Profiler";
        case x:
          return "StrictMode";
        case h:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            var n = e;
            return Ve(n) + ".Consumer";
          case R:
            var c = e;
            return Ve(c._context) + ".Provider";
          case l:
            return Re(e, e.render, "ForwardRef");
          case y:
            var b = e.displayName || null;
            return b !== null ? b : ne(e.type) || "Memo";
          case D: {
            var C = e, B = C._payload, k = C._init;
            try {
              return ne(k(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var le = Object.assign, pe = 0, We, $e, Be, qe, r, u, m;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function j() {
      {
        if (pe === 0) {
          We = console.log, $e = console.info, Be = console.warn, qe = console.error, r = console.group, u = console.groupCollapsed, m = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: O,
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
        pe++;
      }
    }
    function we() {
      {
        if (pe--, pe === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: le({}, e, {
              value: We
            }),
            info: le({}, e, {
              value: $e
            }),
            warn: le({}, e, {
              value: Be
            }),
            error: le({}, e, {
              value: qe
            }),
            group: le({}, e, {
              value: r
            }),
            groupCollapsed: le({}, e, {
              value: u
            }),
            groupEnd: le({}, e, {
              value: m
            })
          });
        }
        pe < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = U.ReactCurrentDispatcher, re;
    function Ee(e, n, c) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (C) {
            var b = C.stack.trim().match(/\n( *(at )?)/);
            re = b && b[1] || "";
          }
        return `
` + re + e;
      }
    }
    var ue = !1, fe;
    {
      var yt = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new yt();
    }
    function ct(e, n) {
      if (!e || ue)
        return "";
      {
        var c = fe.get(e);
        if (c !== void 0)
          return c;
      }
      var b;
      ue = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = ge.current, ge.current = null, j();
      try {
        if (n) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (p) {
              b = p;
            }
            Reflect.construct(e, [], k);
          } else {
            try {
              k.call();
            } catch (p) {
              b = p;
            }
            e.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            b = p;
          }
          e();
        }
      } catch (p) {
        if (p && b && typeof p.stack == "string") {
          for (var S = p.stack.split(`
`), me = b.stack.split(`
`), J = S.length - 1, Z = me.length - 1; J >= 1 && Z >= 0 && S[J] !== me[Z]; )
            Z--;
          for (; J >= 1 && Z >= 0; J--, Z--)
            if (S[J] !== me[Z]) {
              if (J !== 1 || Z !== 1)
                do
                  if (J--, Z--, Z < 0 || S[J] !== me[Z]) {
                    var Pe = `
` + S[J].replace(" at new ", " at ");
                    return e.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", e.displayName)), typeof e == "function" && fe.set(e, Pe), Pe;
                  }
                while (J >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ge.current = B, we(), Error.prepareStackTrace = C;
      }
      var a = e ? e.displayName || e.name : "", g = a ? Ee(a) : "";
      return typeof e == "function" && fe.set(e, g), g;
    }
    function vt(e, n, c) {
      return ct(e, !1);
    }
    function et(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ke(e, n, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ct(e, et(e));
      if (typeof e == "string")
        return Ee(e);
      switch (e) {
        case h:
          return Ee("Suspense");
        case i:
          return Ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return vt(e.render);
          case y:
            return ke(e.type, n, c);
          case D: {
            var b = e, C = b._payload, B = b._init;
            try {
              return ke(B(C), n, c);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, ae = {}, Ke = U.ReactDebugCurrentFrame;
    function tt(e) {
      if (e) {
        var n = e._owner, c = ke(e.type, e._source, n ? n.type : null);
        Ke.setExtraStackFrame(c);
      } else
        Ke.setExtraStackFrame(null);
    }
    function lt(e, n, c, b, C) {
      {
        var B = Function.call.bind(xe);
        for (var k in e)
          if (B(e, k)) {
            var S = void 0;
            try {
              if (typeof e[k] != "function") {
                var me = Error((b || "React class") + ": " + c + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw me.name = "Invariant Violation", me;
              }
              S = e[k](n, k, b, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              S = J;
            }
            S && !(S instanceof Error) && (tt(C), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", c, k, typeof S), tt(null)), S instanceof Error && !(S.message in ae) && (ae[S.message] = !0, tt(C), N("Failed %s type: %s", c, S.message), tt(null));
          }
      }
    }
    var wt = Array.isArray;
    function ot(e) {
      return wt(e);
    }
    function De(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, c = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function at(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function He(e) {
      if (at(e))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", De(e)), Oe(e);
    }
    var Ge = U.ReactCurrentOwner, ut = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, I, L;
    function z(e) {
      if (xe.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ue(e) {
      if (xe.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Fe(e, n) {
      typeof e.ref == "string" && Ge.current;
    }
    function de(e, n) {
      {
        var c = function() {
          I || (I = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function W(e, n) {
      {
        var c = function() {
          L || (L = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var se = function(e, n, c, b, C, B, k) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: c,
        props: k,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function he(e, n, c, b, C) {
      {
        var B, k = {}, S = null, me = null;
        c !== void 0 && (He(c), S = "" + c), Ue(n) && (He(n.key), S = "" + n.key), z(n) && (me = n.ref, Fe(n, C));
        for (B in n)
          xe.call(n, B) && !ut.hasOwnProperty(B) && (k[B] = n[B]);
        if (e && e.defaultProps) {
          var J = e.defaultProps;
          for (B in J)
            k[B] === void 0 && (k[B] = J[B]);
        }
        if (S || me) {
          var Z = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          S && de(k, Z), me && W(k, Z);
        }
        return se(e, S, me, C, b, Ge.current, k);
      }
    }
    var Et = U.ReactCurrentOwner, Dt = U.ReactDebugCurrentFrame;
    function nt(e) {
      if (e) {
        var n = e._owner, c = ke(e.type, e._source, n ? n.type : null);
        Dt.setExtraStackFrame(c);
      } else
        Dt.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function ft(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function xt() {
      {
        if (Et.current) {
          var e = ne(Et.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function bt(e) {
      return "";
    }
    var je = {};
    function be(e) {
      {
        var n = xt();
        if (!n) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (n = `

Check the top-level render call using <` + c + ">.");
        }
        return n;
      }
    }
    function kt(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = be(n);
        if (je[c])
          return;
        je[c] = !0;
        var b = "";
        e && e._owner && e._owner !== Et.current && (b = " It was passed a child from " + ne(e._owner.type) + "."), nt(e), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, b), nt(null);
      }
    }
    function st(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ot(e))
          for (var c = 0; c < e.length; c++) {
            var b = e[c];
            ft(b) && kt(b, n);
          }
        else if (ft(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var C = X(e);
          if (typeof C == "function" && C !== e.entries)
            for (var B = C.call(e), k; !(k = B.next()).done; )
              ft(k.value) && kt(k.value, n);
        }
      }
    }
    function Ot(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var c;
        if (typeof n == "function")
          c = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === y))
          c = n.propTypes;
        else
          return;
        if (c) {
          var b = ne(n);
          lt(c, e.props, "prop", b, e);
        } else if (n.PropTypes !== void 0 && !pt) {
          pt = !0;
          var C = ne(n);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jt(e) {
      {
        for (var n = Object.keys(e.props), c = 0; c < n.length; c++) {
          var b = n[c];
          if (b !== "children" && b !== "key") {
            nt(e), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), nt(null);
            break;
          }
        }
        e.ref !== null && (nt(e), N("Invalid attribute `ref` supplied to `React.Fragment`."), nt(null));
      }
    }
    var Pt = {};
    function It(e, n, c, b, C, B) {
      {
        var k = V(e);
        if (!k) {
          var S = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = bt();
          me ? S += me : S += xt();
          var J;
          e === null ? J = "null" : ot(e) ? J = "array" : e !== void 0 && e.$$typeof === s ? (J = "<" + (ne(e.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : J = typeof e, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, S);
        }
        var Z = he(e, n, c, C, B);
        if (Z == null)
          return Z;
        if (k) {
          var Pe = n.children;
          if (Pe !== void 0)
            if (b)
              if (ot(Pe)) {
                for (var a = 0; a < Pe.length; a++)
                  st(Pe[a], e);
                Object.freeze && Object.freeze(Pe);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              st(Pe, e);
        }
        if (xe.call(n, "key")) {
          var g = ne(e), p = Object.keys(n).filter(function(A) {
            return A !== "key";
          }), G = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pt[g + G]) {
            var Y = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, G, g, Y, g), Pt[g + G] = !0;
          }
        }
        return e === d ? jt(Z) : Ot(Z), Z;
      }
    }
    function Lt(e, n, c) {
      return It(e, n, c, !0);
    }
    function zt(e, n, c) {
      return It(e, n, c, !1);
    }
    var Nt = zt, dt = Lt;
    At.Fragment = d, At.jsx = Nt, At.jsxs = dt;
  }()), At;
}
process.env.NODE_ENV === "production" ? $t.exports = an() : $t.exports = sn();
var f = $t.exports;
function nn(t) {
  const s = window.AudioContext || window.webkitAudioContext, o = new s(), d = o.createMediaStreamSource(t), x = o.createAnalyser();
  x.fftSize = 2048, x.smoothingTimeConstant = 0.85, d.connect(x);
  const T = new Uint8Array(x.fftSize);
  function R() {
    x.getByteTimeDomainData(T);
    let M = 0;
    for (let l = 0; l < T.length; l++) {
      const h = (T[l] - 128) / 128;
      M += h * h;
    }
    return Math.sqrt(M / T.length);
  }
  return {
    getLevel: () => R(),
    dispose: async () => {
      try {
        d.disconnect();
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
let Gt = null;
async function cn() {
  if (Gt) return Gt;
  const t = await import("./blazeface.esm-D5KORnOe.js"), s = await import("./index-2kM27Pi_.js");
  return s.ready && await s.ready(), Gt = await t.load(), Gt;
}
function Qt(t, s, o) {
  if (t.width <= 0 || t.height <= 0 || s <= 0 || o <= 0) return !1;
  const d = Math.max(6, Math.floor(s * 0.06)), x = Math.max(6, Math.floor(o * 0.06));
  if (t.x < d || t.y < x || t.x + t.width > s - d || t.y + t.height > o - x) return !1;
  const T = t.width * t.height, R = s * o, M = T / R;
  if (M < 0.04 || M > 0.65) return !1;
  const l = t.width / t.height;
  return !(l < 0.6 || l > 1.6);
}
async function ln(t) {
  if ("FaceDetector" in window)
    try {
      const o = await new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }).detect(t);
      if (o && o.length > 0) {
        const d = o[0]?.boundingBox, x = t.videoWidth || t.width || 0, T = t.videoHeight || t.height || 0;
        if (d) {
          const R = { x: d.x, y: d.y, width: d.width, height: d.height };
          if (Qt(R, x, T)) return { present: !0, confidence: 0.85 };
        }
      }
      return { present: !1, confidence: 0 };
    } catch {
    }
  try {
    const o = await (await cn()).estimateFaces(t, !1);
    if (o && o.length > 0) {
      const d = t.videoWidth || t.width || 0, x = t.videoHeight || t.height || 0;
      for (const T of o) {
        const [R, M] = T.topLeft, [l, h] = T.bottomRight, i = { x: R, y: M, width: l - R, height: h - M };
        if (Qt(i, d, x)) {
          const y = T.probability ? T.probability[0] : 0.75;
          return { present: !0, confidence: Math.max(0.6, Math.min(1, y)) };
        }
      }
    }
  } catch {
  }
  return { present: !1, confidence: 0 };
}
function un({ onComplete: t, onError: s }) {
  const o = ["camera", "microphone", "face", "monitor", "browser"], [d, x] = E({
    camera: "pending",
    microphone: "pending",
    face: "pending",
    monitor: "pending",
    browser: "pending"
  }), [T, R] = E(0), [M, l] = E(0), [h, i] = E({}), [y, D] = E({}), P = _(null), K = _(null), ce = _(null), X = _(null), U = _(null), N = () => {
    try {
      P.current?.getTracks().forEach((r) => r.stop());
    } catch {
    }
    try {
      K.current?.getTracks().forEach((r) => r.stop());
    } catch {
    }
    P.current = null, K.current = null, ce.current && (ce.current.dispose().catch(() => {
    }), ce.current = null), X.current && (cancelAnimationFrame(X.current), X.current = null);
  }, Ae = async (r) => {
    try {
      const u = window.AudioContext || window.webkitAudioContext;
      if (!u) throw new Error("AudioContext not supported");
      const m = new u(), O = m.createMediaStreamSource(r), j = m.createAnalyser();
      j.fftSize = 256, j.smoothingTimeConstant = 0.8, O.connect(j);
      const we = new Uint8Array(j.frequencyBinCount);
      j.getByteFrequencyData(we), sessionStorage.setItem("audio-context-initialized", "true"), O.disconnect(), await m.close(), typeof window < "u" && (window.precheckAudioStream = r);
    } catch {
      sessionStorage.setItem("audio-context-initialized", "false");
    }
  }, ve = async (r) => {
    const u = U.current;
    let m = 0, O = 0, j = 0;
    const we = 30;
    for (; j < we && m < 5; ) {
      try {
        const re = await ln(u);
        re.present && (m += 1, O = Math.max(O, re.confidence));
      } catch {
      }
      j++, R(j), await new Promise((re) => setTimeout(re, 100));
    }
    return { status: m >= 5, confidence: O, timestamp: Date.now() };
  }, Se = () => {
    try {
      const r = window.screen.width, u = window.screen.height, m = window.screen.availWidth;
      return r / u > 3 || r > m * 1.5 || [3840, 3360, 2560, 4480, 5120].includes(r) ? 2 : 1;
    } catch {
      return 1;
    }
  }, Ne = async () => Se(), F = () => [
    "navigator.mediaDevices",
    "navigator.mediaDevices.getUserMedia",
    "requestAnimationFrame",
    "WebAssembly"
  ].every((u) => {
    const m = u.split(".");
    let O = window;
    for (const j of m) {
      if (!(j in O)) return !1;
      O = O[j];
    }
    return !0;
  }), w = (r, u) => {
    x((m) => ({ ...m, [r]: u }));
  }, oe = te(async () => {
    w("camera", "running"), i((r) => ({ ...r, camera: "" }));
    try {
      try {
        P.current?.getTracks().forEach((u) => u.stop());
      } catch {
      }
      const r = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } }
      });
      if (P.current = r, !U.current) {
        const u = document.createElement("video");
        u.muted = !0, u.playsInline = !0, U.current = u;
      }
      U.current.srcObject = r;
      try {
        await U.current.play();
      } catch {
      }
      return D((u) => ({ ...u, cameraAccess: !0 })), w("camera", "passed"), !0;
    } catch (r) {
      const u = r?.name === "NotAllowedError" ? "Camera permission denied" : r?.message || "Camera access failed";
      return i((m) => ({ ...m, camera: u })), w("camera", "failed"), !1;
    }
  }, []), V = te(async () => {
    w("microphone", "running"), i((r) => ({ ...r, microphone: "" }));
    try {
      try {
        K.current?.getTracks().forEach((u) => u.stop());
      } catch {
      }
      const r = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      K.current = r, D((u) => ({ ...u, microphoneAccess: !0 })), await Ae(r);
      try {
        const u = nn(r);
        ce.current = u;
        const m = () => {
          l(u.getLevel()), X.current = requestAnimationFrame(m);
        };
        X.current = requestAnimationFrame(m);
      } catch {
      }
      return w("microphone", "passed"), !0;
    } catch (r) {
      const u = r?.name === "NotAllowedError" ? "Microphone permission denied" : r?.message || "Microphone access failed";
      return i((m) => ({ ...m, microphone: u })), w("microphone", "failed"), !1;
    }
  }, []), Re = te(async () => {
    w("face", "running"), i((r) => ({ ...r, face: "" }));
    try {
      if (!P.current) throw new Error("Camera is not initialized");
      const r = await ve(P.current);
      if (D((u) => ({ ...u, faceDetection: r })), r.status)
        return w("face", "passed"), !0;
      throw new Error("No face detected. Please align your face within the frame and retry.");
    } catch (r) {
      const u = r?.message || "Face detection failed";
      return i((m) => ({ ...m, face: u })), w("face", "failed"), !1;
    }
  }, []), Ve = te(async () => {
    w("monitor", "running"), i((r) => ({ ...r, monitor: "" }));
    try {
      const r = await Ne();
      if (r && r > 1)
        throw D((u) => ({ ...u, monitorCount: r })), new Error("Multiple displays detected. Please remove external screens and keep only one display connected, then press Retry.");
      if (r === 1)
        return D((u) => ({ ...u, monitorCount: r })), w("monitor", "passed"), !0;
      throw new Error("Could not verify displays");
    } catch (r) {
      return i((u) => ({ ...u, monitor: r?.message || "Monitor verification failed" })), w("monitor", "failed"), !1;
    }
  }, []), ne = te(async () => {
    w("browser", "running"), i((r) => ({ ...r, browser: "" }));
    try {
      const r = F();
      if (D((u) => ({ ...u, browserSupport: r })), !r) throw new Error("Required browser features are unavailable");
      return w("browser", "passed"), !0;
    } catch (r) {
      return i((u) => ({ ...u, browser: r?.message || "Browser not supported" })), w("browser", "failed"), !1;
    }
  }, []), le = {
    camera: oe,
    microphone: V,
    face: Re,
    monitor: Ve,
    browser: ne
  }, pe = te(async (r) => {
    for (let u = r; u < o.length; u++) {
      const m = o[u];
      if (!await le[m]()) break;
    }
  }, [le]);
  ze(() => {
    if (!o.every((m) => d[m] === "passed")) return;
    const u = {
      cameraAccess: !!y.cameraAccess,
      microphoneAccess: !!y.microphoneAccess,
      faceDetection: y.faceDetection || { status: !1, confidence: 0, timestamp: Date.now() },
      monitorCount: y.monitorCount || 1,
      browserSupport: !!y.browserSupport,
      codeEditorReady: !0
    };
    t(u), N();
  }, [d, y]), ze(() => (pe(0), () => N()), []);
  const We = (r) => {
    const u = o.indexOf(r);
    x((m) => {
      const O = { ...m };
      for (let j = u; j < o.length; j++) O[o[j]] = "pending";
      return O;
    }), i((m) => ({ ...m, [r]: "" })), pe(u);
  }, $e = o.filter((r) => d[r] === "passed").length, Be = o.some((r) => d[r] === "running"), qe = Math.round(($e + (Be ? 0.5 : 0)) / o.length * 100);
  return /* @__PURE__ */ f.jsx("div", { style: { fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#eff6ff,#eef2ff)" }, children: /* @__PURE__ */ f.jsxs("div", { style: { width: 720, maxWidth: "95vw", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { textAlign: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ f.jsx("h2", { style: { margin: 0, fontSize: 20, fontWeight: 700 }, children: "System Pre-Check" }),
      /* @__PURE__ */ f.jsx("p", { style: { color: "#6b7280" }, children: "Verifying your system for proctored assessment" })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
        /* @__PURE__ */ f.jsx("span", { children: "Overall Progress" }),
        /* @__PURE__ */ f.jsxs("span", { children: [
          qe,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("div", { style: { height: 8, background: "#f3f4f6", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ f.jsx("div", { style: { width: `${qe}%`, height: 8, background: "#3b82f6" } }) })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: { display: "grid", gap: 8 }, children: o.map((r) => {
      const u = r === "camera" ? "Camera Access" : r === "microphone" ? "Microphone Access" : r === "face" ? "Face Detection" : r === "monitor" ? "Single Monitor Check" : "Browser Support", m = d[r], O = m === "passed" ? "#ecfdf5" : m === "running" ? "#eff6ff" : m === "failed" ? "#fef2f2" : "#f9fafb", j = m === "passed" ? "#10b981" : m === "running" ? "#3b82f6" : m === "failed" ? "#dc2626" : "#9ca3af";
      return /* @__PURE__ */ f.jsxs("div", { style: { display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 12, alignItems: "center", padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", background: O }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { width: 12, height: 12, borderRadius: 9999, background: j } }),
        /* @__PURE__ */ f.jsxs("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ f.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: /* @__PURE__ */ f.jsx("div", { style: { fontWeight: 600, fontSize: 14 }, children: u }) }),
          r === "face" && /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center", marginTop: 8 }, children: [
            /* @__PURE__ */ f.jsx("video", { ref: U, muted: !0, playsInline: !0, autoPlay: !0, style: { width: 180, height: 112, background: "#000", borderRadius: 6 } }),
            m === "running" && /* @__PURE__ */ f.jsxs("div", { style: { color: "#6b7280", fontSize: 12 }, children: [
              "Analyzing frames: ",
              T
            ] })
          ] }),
          r === "microphone" && m !== "pending" && /* @__PURE__ */ f.jsx("div", { style: { marginTop: 6, width: 220, height: 8, background: "#e5e7eb", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ f.jsx("div", { style: { width: `${Math.min(100, Math.round(M * 200))}%`, height: 8, background: "#10b981", transition: "width 150ms" } }) }),
          h[r] && /* @__PURE__ */ f.jsx("div", { style: { marginTop: 6, color: "#dc2626", fontSize: 12 }, children: h[r] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ f.jsx("div", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 9999, background: m === "passed" ? "#111827" : m === "failed" ? "#fee2e2" : "#e5e7eb", color: m === "passed" ? "#fff" : "#111827" }, children: m === "passed" ? "Passed" : m === "running" ? "Checking…" : m === "failed" ? "Failed" : "Pending" }),
          m === "failed" && /* @__PURE__ */ f.jsx("button", { onClick: () => We(r), style: { fontSize: 12, padding: "6px 10px", borderRadius: 6, background: "#111827", color: "#fff", border: 0 }, children: "Retry" })
        ] })
      ] }, r);
    }) })
  ] }) });
}
function fn(t) {
  const { onEvent: s, context: o = "coding" } = t || {}, [d, x] = E("idle"), [T, R] = E(void 0), [M, l] = E(0), [h, i] = E(0), y = _(null), D = _(null), P = _(null), K = _(!1), ce = _(0), X = _(0), U = _(null), N = te(() => {
    P.current && cancelAnimationFrame(P.current), P.current = null;
    try {
      y.current?.dispose();
    } catch {
    }
    y.current = null;
    try {
      D.current?.getTracks().forEach((F) => F.stop());
    } catch {
    }
    D.current = null, x("idle");
  }, []), Ae = te(
    (F) => {
      const w = Date.now(), oe = K.current;
      F > 18 && w - ce.current > 2e3 && (i((V) => V + 1), ce.current = w, s?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: o,
        data: { level: F, reason: "audio_spike", faceDetected: oe }
      })), oe && F < 3 ? U.current == null ? U.current = w : w - U.current > 15e3 && (i((V) => V + 1), U.current = null, s?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: o,
        data: { level: F, reason: "extended_silence_with_face" }
      })) : F >= 3 && (U.current = null), !oe && F > 12 && w - X.current > 3e3 && (i((V) => V + 1), X.current = w, s?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: o,
        data: { level: F, reason: "audio_without_face" }
      }));
    },
    [o, s]
  ), ve = te(() => {
    try {
      if (!y.current) return;
      const F = y.current.getLevel(), w = Math.max(0, Math.min(100, Math.round(F * 160)));
      l(w), Ae(w);
    } finally {
      P.current = requestAnimationFrame(ve);
    }
  }, [Ae]), Se = te(
    async (F) => {
      try {
        R(void 0), i(0), ce.current = 0, X.current = 0, U.current = null;
        let w = F;
        if (!w && typeof window < "u" && window.precheckAudioStream) {
          const Re = window.precheckAudioStream;
          Re?.active && Re.getAudioTracks().length > 0 && (w = Re);
        }
        w || (w = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0, sampleRate: 44100 }
        })), D.current = w;
        const oe = w.getAudioTracks(), V = oe.length ? new MediaStream(oe) : w;
        y.current = nn(V), x("running"), P.current = requestAnimationFrame(ve);
      } catch (w) {
        x("error"), R(w instanceof Error ? w.message : String(w));
      }
    },
    [ve]
  ), Ne = te((F) => {
    K.current = F;
  }, []);
  return ze(() => N, [N]), { status: d, error: T, level: M, anomalyCount: h, start: Se, stop: N, setFaceDetected: Ne };
}
function Rt(t) {
  return Math.max(0, Math.min(1, t));
}
function en(t) {
  let s = 0;
  for (const d in t) s += t[d];
  if (s <= 0) return t;
  const o = {};
  for (const d in t) o[d] = t[d] / s;
  return o;
}
function dn(t = {}) {
  const s = t.alpha ?? 0.45;
  let o = null;
  const d = ["neutral", "happy", "surprised", "focused", "concerned"];
  function x(T, R = {}) {
    const { landmarks: M, headPose: l } = R, { data: h, width: i, height: y } = T;
    let D = 0, P = 0, K = 0;
    for (let I = 0; I < y; I++)
      for (let L = 0; L < i; L++) {
        const z = (I * i + L) * 4, Ue = h[z], Fe = h[z + 1], de = h[z + 2], W = (Ue + Fe + de) / 3;
        if (D += W, L > 0) {
          const se = (I * i + (L - 1)) * 4, he = (h[se] + h[se + 1] + h[se + 2]) / 3;
          P += Math.abs(W - he);
        }
        if (I > 0) {
          const se = ((I - 1) * i + L) * 4, he = (h[se] + h[se + 1] + h[se + 2]) / 3;
          Math.abs(W - he) > 26 && K++;
        }
      }
    const ce = Math.max(1, h.length / 4), X = D / ce, U = P / ce, N = K / ce, Ae = Math.floor(y * 0.6), ve = Math.floor(i * 0.22), Se = Math.ceil(i * 0.78);
    let Ne = 0, F = 0, w = 0, oe = 0, V = 0, Re = 0, Ve = 0, ne = 0;
    const le = Math.max(2, Math.floor((Se - ve) * 0.18));
    let pe = 0, We = 0, $e = 0, Be = 0;
    for (let I = Ae; I < y; I++)
      for (let L = ve; L < Se; L++) {
        const z = (I * i + L) * 4, Ue = h[z], Fe = h[z + 1], de = h[z + 2], W = (Ue + Fe + de) / 3, se = (h[z - 4] + h[z - 3] + h[z - 2]) / 3, he = (h[z + 4] + h[z + 5] + h[z + 6]) / 3;
        (Math.abs(W - se) > 24 || Math.abs(W - he) > 24) && Ne++, W < 70 && w++, W > 165 && oe++, I < Ae + Math.floor((y - Ae) * 0.4) ? (V += W, Re++) : (Ve += W, ne++), L < ve + le && ((Math.abs(W - se) > 24 || Math.abs(W - he) > 24) && pe++, We++), L > Se - le && ((Math.abs(W - se) > 24 || Math.abs(W - he) > 24) && $e++, Be++), F++;
      }
    const qe = F ? Ne / F : 0, r = F ? w / F : 0, u = F ? oe / F : 0, m = Rt((qe - 0.012) / 0.06), O = Re ? V / Re : 0, j = ne ? Ve / ne : 0, we = Rt((O - j - 6) / 28), ge = We ? pe / We : 0, re = Be ? $e / Be : 0, Ee = Rt(((ge + re) / 2 - 0.018) / 0.05);
    let ue = 0, fe = 0;
    const yt = Math.max(0, Math.floor(y * 0.18)), ct = Math.floor(y * 0.38);
    for (let I = yt; I < ct; I++)
      for (let L = 1; L < i - 1; L++) {
        const z = (I * i + L) * 4, Ue = (h[z] + h[z + 1] + h[z + 2]) / 3, Fe = (h[z - 4] + h[z - 3] + h[z - 2]) / 3, de = (h[z + 4] + h[z + 5] + h[z + 6]) / 3;
        (Math.abs(Ue - Fe) > 26 || Math.abs(Ue - de) > 26) && ue++, fe++;
      }
    const vt = fe ? ue / fe : 0, et = Rt((vt - 0.012) / 0.06);
    let ke = 0.5;
    if (M && M.length >= 2) {
      const I = M[0], L = M[1], z = Math.abs(L[1] - I[1]);
      ke = Rt(1 - z / Math.max(1, y * 0.25));
    }
    const xe = l ? Math.min(45, Math.abs(l.yaw)) : 0, ae = l ? Math.min(45, Math.abs(l.pitch)) : 0, Ke = Math.max(0, 1 - (xe / 35 + ae / 30) / 2), tt = Rt((U - 12) / 18), lt = m > 0.22, wt = r > 0.12, ot = et > 0.2, De = !lt && !ot, at = {
      neutral: Math.max(1e-3, 0.28 + 0.28 * Ke + 0.06 * ke - 0.16 * m - 0.06 * N + (De ? 0.08 : 0)),
      happy: Math.max(1e-3, 0.1 + 0.62 * m + 0.08 * we + 0.06 * Ee + (wt ? 0.04 : 0) + (u > 0.15 ? 0.04 : 0) - 0.1 * (1 - Ke)),
      surprised: Math.max(1e-3, 0.06 + (lt && wt ? 0.16 : 0.02) + 0.45 * m + (l && l.pitch > 10 ? 0.1 : 0)),
      focused: Math.max(1e-3, 0.18 + 0.6 * Ke + 0.22 * tt + 0.06 * ke - 0.08 * m + (De ? 0.06 : 0)),
      concerned: Math.max(1e-3, 0.06 + (ot ? 0.16 : 0.02) + 0.45 * et + (X < 100 ? 0.06 : 0) + (l && l.pitch < -10 ? 0.06 : 0) - 0.06 * (we + m))
    };
    let Oe = en(at);
    if (o) {
      const I = { ...o };
      for (const L of d)
        I[L] = (1 - s) * o[L] + s * Oe[L];
      Oe = en(I);
    }
    o = Oe;
    let He = "neutral", Ge = -1;
    for (const I of d) {
      const L = Oe[I];
      L > Ge && (Ge = L, He = I);
    }
    const ut = Oe[He];
    return { dominant: He, confidence: ut, emotions: Oe };
  }
  return { analyze: x };
}
let Ut, Yt;
async function hn(t) {
  if (Ut && Yt) return { FaceLandmarker: Ut, FilesetResolver: Yt };
  const s = await import("./vision_bundle-DrVqKEBn.js");
  return Ut = s.FaceLandmarker, Yt = s.FilesetResolver, { FaceLandmarker: Ut, FilesetResolver: Yt };
}
async function mn(t = {}) {
  const s = t.wasmRoot || "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.15/wasm", o = t.modelAssetPath || "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task", d = t.runningMode || "VIDEO", { FaceLandmarker: x, FilesetResolver: T } = await hn(), R = await T.forVisionTasks(s), M = await x.createFromOptions(R, {
    baseOptions: { modelAssetPath: o },
    runningMode: d,
    numFaces: 1,
    outputFaceBlendshapes: !0,
    outputFacialTransformationMatrixes: !0
  }), l = {
    horiz: t.thresholds?.horiz ?? 0.6,
    vert: t.thresholds?.vert ?? 0.75,
    yaw: t.thresholds?.yaw ?? 28,
    pitch: t.thresholds?.pitch ?? 26,
    offDwell: t.thresholds?.offDwell ?? 8,
    onDwell: t.thresholds?.onDwell ?? 5,
    calibFrames: t.thresholds?.calibFrames ?? 45
  };
  let h = { x: 0, y: 0 };
  const i = 0.35;
  let y = 0, D = 0, P = !0, K = 0;
  const ce = l.calibFrames;
  let X = { x: 0, y: 0 };
  const U = l.offDwell, N = l.onDwell;
  async function Ae(Se, Ne) {
    if (!Se || !M) return null;
    const F = Ne ?? performance.now(), w = M.detectForVideo(Se, F);
    if (!w || !w.faceLandmarks || w.faceLandmarks.length === 0) return null;
    const oe = w.faceBlendshapes?.[0]?.categories || [], V = (xe) => oe.find((ae) => ae.categoryName === xe)?.score || 0, Re = V("eyeLookInLeft"), Ve = V("eyeLookOutLeft"), ne = V("eyeLookUpLeft"), le = V("eyeLookDownLeft"), pe = V("eyeLookInRight"), We = V("eyeLookOutRight"), $e = V("eyeLookUpRight"), Be = V("eyeLookDownRight"), qe = We - pe, r = Re - Ve, u = $e - Be, m = ne - le;
    let O = (qe + r) / 2, j = (u + m) / 2;
    O = Math.max(-1, Math.min(1, O)), j = Math.max(-1, Math.min(1, j)), h.x = i * O + (1 - i) * h.x, h.y = i * j + (1 - i) * h.y, P && (Math.abs(h.x) < 0.6 && Math.abs(h.y) < 0.6 && (X.x = (X.x * K + h.x) / (K + 1), X.y = (X.y * K + h.y) / (K + 1), K += 1), K >= ce && (P = !1));
    const we = h.x - X.x, ge = h.y - X.y;
    let re, Ee;
    try {
      const xe = w.facialTransformationMatrixes?.[0];
      if (xe && xe.rows === 4 && xe.columns === 4) {
        const ae = xe.data, Ke = ae[0], tt = ae[1], lt = ae[2], wt = ae[4], ot = ae[5], De = ae[6], at = ae[8], Oe = ae[9], He = ae[10];
        Ee = Math.atan2(-Oe, He) * (180 / Math.PI), re = Math.atan2(-lt, Ke) * (180 / Math.PI);
      }
    } catch {
    }
    const ue = Math.abs(we), fe = Math.abs(ge), yt = ue > l.horiz, ct = fe > l.vert, vt = re !== void 0 && Math.abs(re) > l.yaw || Ee !== void 0 && Math.abs(Ee) > l.pitch, et = yt || ct || vt;
    let ke = !0;
    return et ? (y += 1, D = Math.max(0, D - 1)) : (D += 1, y = Math.max(0, y - 1)), y >= U && (ke = !1), D >= N && (ke = !0), {
      onScreen: ke,
      gaze: { x: we, y: ge },
      confidence: Math.min(1, 0.65 + 0.35 * Math.max(ue, fe)),
      head: { yaw: re, pitch: Ee },
      debug: {
        lIn: Re,
        lOut: Ve,
        lUp: ne,
        lDn: le,
        rIn: pe,
        rOut: We,
        rUp: $e,
        rDn: Be,
        gx: O,
        gy: j,
        emaX: h.x,
        emaY: h.y,
        yaw: re ?? 0,
        pitch: Ee ?? 0,
        offFrames: y,
        onFrames: D,
        baseX: X.x,
        baseY: X.y,
        absX: ue,
        absY: fe
      }
    };
  }
  async function ve() {
    try {
      M?.close?.();
    } catch {
    }
  }
  return { ready: !0, estimate: Ae, close: ve };
}
function pn({ monitoringStatus: t, sessionData: s, onStatusChange: o, onUpdateSession: d, onAddEvent: x, onAddSnapshot: T, gazeThresholds: R }) {
  const [M, l] = E({ x: typeof window < "u" ? window.innerWidth - 280 : 0, y: typeof window < "u" ? window.innerHeight - 400 : 0 }), [h, i] = E(!1), [y, D] = E({ x: 0, y: 0 }), [P, K] = E(0), [ce, X] = E(!1), [U, N] = E(null), [Ae, ve] = E(null), [Se, Ne] = E(null), [F, w] = E(0), [oe, V] = E(0), [Re, Ve] = E([]), [ne, le] = E(0), [pe, We] = E(0), [$e, Be] = E(0), [qe, r] = E(0), [u, m] = E(0), [O, j] = E(!1), [we, ge] = E(null), [re, Ee] = E(null), [ue, fe] = E(null), [yt, ct] = E(0), [vt, et] = E(0), [ke, xe] = E(0), [ae, Ke] = E(null), [tt, lt] = E(0), [wt, ot] = E(0), De = _(null), at = _(null), Oe = _(null), He = _(null), Ge = _(null), ut = _(null), I = _(null), L = _(!1), z = _(0), Ue = _(0), Fe = _("none"), de = _({ noFace: 0, multipleFaces: 0 }), W = _({ noFace: !1, multipleFaces: !1, gazeOff: !1 }), se = _(!1), he = _({ offFrames: 0, onFrames: 0 }), Et = R?.fallback?.offFrames ?? 8, Dt = R?.fallback?.onFrames ?? 5, nt = {
    yaw: R?.fallback?.yaw ?? 32,
    pitch: R?.fallback?.pitch ?? 26,
    centerOffset: R?.fallback?.centerOffset ?? 0.35
  }, pt = _(null), ft = _([]), xt = _(0), bt = _(!1), je = _({ yaw: 0, pitch: 0, roll: 0, initialized: !1 }), be = _({ isGood: !0, goodStreak: 0, poorStreak: 0 }), kt = 8, st = 0.25, { level: Ot, anomalyCount: jt, start: Pt, stop: It, setFaceDetected: Lt } = fn({
    context: "coding",
    onEvent: (a) => x?.({ ...a, timestamp: Date.now() })
  });
  ze(() => w(Ot), [Ot]), ze(() => V(jt), [jt]), ze(() => {
    pt.current = dn({ alpha: 0.5 });
  }, []);
  const zt = te((a, g) => {
    const p = g.data, G = g.width, Y = g.height, A = Math.max(0, Math.floor(a.x - a.width * 0.2)), Q = Math.min(G, Math.floor(a.x + a.width * 1.2)), ye = Math.min(Y - 1, Math.floor(a.y + a.height * 1.05)), Ie = Math.min(Y, ye + Math.floor(a.height * 1.6));
    if (Ie <= ye || Q <= A) return { isProfessional: !1, hasShirt: !1, confidence: 0.4, details: "Insufficient torso ROI" };
    let $ = 0, q = 0, Xe = 0, rt = 0, ht = 0;
    const Ft = Math.floor((A + Q) / 2);
    for (let ee = ye; ee < Ie; ee++)
      for (let Te = A; Te < Q; Te++) {
        const mt = (ee * G + Te) * 4, Le = p[mt], Me = p[mt + 1], Ye = p[mt + 2], ie = Math.max(Le, Me, Ye), Qe = Math.min(Le, Me, Ye), it = ie, gt = ie ? (ie - Qe) / ie : 0;
        if (it > 60 && it < 210 && gt < 0.45 && Le > 40 && Me > 20 && Ye > 20 && Le > Ye) continue;
        if ((Le + Me + Ye) / 3 < 105 && $++, (Math.abs(Le - Me) > 28 || Math.abs(Me - Ye) > 28) && q++, Xe += gt, rt++, ee < ye + (Ie - ye) * 0.35 && Math.abs(Te - Ft) < Math.max(6, Math.floor(a.width * 0.08)) && Te > A + 1 && Te < Q - 1) {
          const Ct = (ee * G + (Te - 1)) * 4, St = (ee * G + (Te + 1)) * 4, Wt = (Le + Me + Ye) / 3, Kt = (p[Ct] + p[Ct + 1] + p[Ct + 2]) / 3, Bt = (p[St] + p[St + 1] + p[St + 2]) / 3;
          (Math.abs(Wt - Kt) > 28 || Math.abs(Wt - Bt) > 28) && ht++;
        }
      }
    if (!rt) return { isProfessional: !1, hasShirt: !1, confidence: 0.4, details: "Insufficient torso pixels" };
    const Mt = $ / rt, Ce = q / rt, v = Xe / rt, H = ht / rt, _e = Mt > 0.18 || v < 0.35, Je = Mt > 0.35 && Ce < 0.22 || v < 0.28 && Ce < 0.18 || H > 2e-3, Ze = Math.max(0.5, Math.min(0.95, 0.55 + (_e ? 0.15 : 0) + (Je ? 0.15 : 0) - Ce * 0.2));
    return { isProfessional: Je, hasShirt: _e, confidence: Ze, details: Je ? "Professional attire (solid/low-saturation)" : _e ? "Casual attire" : "Torso not clearly visible" };
  }, []), Nt = te((a) => {
    if (!a.landmarks || a.landmarks.length < 4) return null;
    const g = a.landmarks, p = g[0], G = g[1], Y = g[2], A = g[3] ?? [(G[0] + p[0]) / 2, Math.max(G[1], p[1]) + a.height * 0.2], Q = [(G[0] + p[0]) / 2, (G[1] + p[1]) / 2], ye = G[0] - p[0], Ie = G[1] - p[1], $ = Math.max(1, Math.hypot(ye, Ie)), q = Math.atan2(Ie, ye) * 180 / Math.PI, Xe = Math.hypot(Y[0] - p[0], Y[1] - p[1]), rt = Math.hypot(Y[0] - G[0], Y[1] - G[1]), ht = (Xe - rt) / $, Ft = Math.max(-45, Math.min(45, ht * 90)), Mt = Math.max(1, Y[1] - Q[1]), Ce = Math.max(1, (A[1] ?? Q[1]) - Y[1]), v = (Mt - Ce) / a.height, H = Math.max(-45, Math.min(45, v * 180)), _e = Math.abs(q) > 20, Je = Math.abs(ht) > 0.18, Ze = Math.abs(H) > 15, ee = Je || Ze || _e, Te = Math.max(0.5, Math.min(1, Math.max(
      Math.abs(ht) * 2,
      Math.abs(q) / 30,
      Math.abs(H) / 30
    )));
    return { yaw: Ft, pitch: H, roll: q, isHeadTurned: ee, confidence: Te };
  }, []), dt = te((a = 0.8) => {
    const g = De.current, p = at.current;
    if (!g || !p) return null;
    const G = g.videoWidth || 320, Y = g.videoHeight || 240;
    if (g.readyState < 2) return null;
    p.width = G, p.height = Y;
    const A = p.getContext("2d");
    if (!A) return null;
    A.drawImage(g, 0, 0, G, Y);
    try {
      return p.toDataURL("image/jpeg", a);
    } catch {
      return null;
    }
  }, []), e = te((a) => {
    if (T) {
      T(a);
      return;
    }
    if (d) {
      let p = [...s?.snapshots || [], a];
      p.length > 50 && (p = p.slice(p.length - 50)), d({ snapshots: p });
    }
  }, [T, d, s?.snapshots]), n = te(() => {
    if (xt.current >= 5 || bt.current) return;
    bt.current = !0;
    const a = dt(0.85);
    if (a) {
      e({ timestamp: Date.now(), type: "random_webcam", image: a, context: "Random webcam snapshot during coding" }), xt.current += 1, bt.current = !1;
      return;
    }
    const g = window.setTimeout(() => {
      const p = dt(0.85);
      p && (e({ timestamp: Date.now(), type: "random_webcam", image: p, context: "Random webcam snapshot (retry) during coding" }), xt.current += 1), bt.current = !1;
    }, 3e3);
    ft.current.push(g);
  }, [e, dt]), c = te(async () => {
    try {
      const a = await import("./index-2kM27Pi_.js"), g = await import("./blazeface.esm-D5KORnOe.js");
      a.ready && await a.ready();
      const p = await g.load();
      return He.current = p, !0;
    } catch (a) {
      return console.error("[widget] Failed to init face detection:", a), !1;
    }
  }, []), b = (a, g) => {
    const p = Math.max(a.x, g.x), G = Math.max(a.y, g.y), Y = Math.min(a.x + a.width, g.x + g.width), A = Math.min(a.y + a.height, g.y + g.height), Q = Math.max(0, Y - p), ye = Math.max(0, A - G), Ie = Q * ye, $ = a.width * a.height + g.width * g.height - Ie;
    return $ > 0 ? Ie / $ : 0;
  }, C = te(async () => {
    if (se.current) {
      Ge.current = requestAnimationFrame(C);
      return;
    }
    if (se.current = !0, !De.current || !at.current || !He.current) {
      Ge.current = requestAnimationFrame(C), se.current = !1;
      return;
    }
    const a = De.current, g = at.current;
    if (a.readyState !== 4) {
      Ge.current = requestAnimationFrame(C), se.current = !1;
      return;
    }
    try {
      const p = await He.current.estimateFaces(a, !1), G = a.videoWidth || a.width || g.width, Y = a.videoHeight || a.height || g.height, A = 0.02, Q = 0.6, Ie = p.map((v) => {
        const [H, _e] = v.topLeft, [Je, Ze] = v.bottomRight;
        return { x: H, y: _e, width: Je - H, height: Ze - _e, confidence: v.probability?.[0] || 0.8, landmarks: v.landmarks };
      }).filter((v) => {
        if (v.width <= 0 || v.height <= 0 || (v.confidence || 0) < 0.6) return !1;
        const H = v.width * v.height, _e = H / (G * Y);
        if (_e < A || _e > Q) return !1;
        const Je = Math.max(0, v.x), Ze = Math.max(0, v.y), ee = Math.min(G, v.x + v.width), Te = Math.min(Y, v.y + v.height), mt = Math.max(0, ee - Je), Le = Math.max(0, Te - Ze);
        if (mt * Le / Math.max(1, H) < 0.5) return !1;
        const Ye = v.width / v.height;
        return !(Ye < 0.5 || Ye > 2);
      });
      Ie.sort((v, H) => H.confidence - v.confidence);
      const $ = [];
      Ie.forEach((v) => {
        $.some((_e) => b(v, _e) > 0.45) || $.push(v);
      }), K($.length), Ve($), X($.length === 1), Lt($.length > 0);
      const q = Date.now(), Xe = $.length === 0 ? "none" : $.length === 1 ? "single" : "multiple";
      Xe === "multiple" ? de.current.multipleFaces += 1 : de.current.multipleFaces = Math.max(0, de.current.multipleFaces - 1), Xe === "none" ? de.current.noFace += 1 : de.current.noFace = Math.max(0, de.current.noFace - 1);
      const rt = 3, ht = 2, Ft = 3, Mt = 2;
      let Ce = Fe.current;
      if (Fe.current !== "multiple" ? de.current.multipleFaces >= rt ? Ce = "multiple" : Ce = Xe === "none" ? "single" : Xe : de.current.multipleFaces <= ht && (Ce = Xe === "multiple" ? "multiple" : "single"), Ce !== "none" ? de.current.noFace >= Ft && (Ce = "none") : de.current.noFace <= Mt && (Ce = Xe === "none" ? "none" : "single"), Ce === "multiple") {
        if (Fe.current !== "multiple" && (Ee(q), xe((v) => v + 1), !W.current.multipleFaces)) {
          W.current.multipleFaces = !0, x?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: $.length }, timestamp: q });
          const v = dt(0.85);
          v && e({ timestamp: q, type: "violation_trigger", image: v, context: "Multiple faces detected" });
        }
      } else {
        if (Fe.current === "multiple" && re !== null) {
          const v = q - re;
          ct((H) => H + v), Ee(null);
        }
        W.current.multipleFaces = !1;
      }
      if (Ce === "none") {
        if (Fe.current !== "none" && (Ke(q), lt((v) => v + 1), !W.current.noFace)) {
          W.current.noFace = !0, x?.({ eventType: "face_detection", severity: "critical", context: "coding", data: { reason: "no_face" }, timestamp: q });
          const v = dt(0.85);
          v && e({ timestamp: q, type: "violation_trigger", image: v, context: "No face detected" });
        }
      } else {
        if (Fe.current === "none" && ae !== null) {
          const v = q - ae;
          ot((H) => H + v), Ke(null);
        }
        W.current.noFace = !1;
      }
      if (Fe.current = Ce, $.length === 1) {
        const v = $[0], H = g.getContext("2d");
        if (H) {
          H.drawImage(a, 0, 0, g.width, g.height);
          const _e = H.getImageData(0, 0, g.width, g.height), Je = H.getImageData(v.x, v.y, v.width, v.height);
          let Ze = { isGoodPosture: !0, shoulderAlignment: 0, headTilt: 0, confidence: 0.7 };
          const ee = Nt(v);
          if (ee) {
            je.current.initialized ? (je.current.yaw = st * ee.yaw + (1 - st) * je.current.yaw, je.current.pitch = st * ee.pitch + (1 - st) * je.current.pitch, je.current.roll = st * ee.roll + (1 - st) * je.current.roll) : je.current = { yaw: ee.yaw, pitch: ee.pitch, roll: ee.roll, initialized: !0 };
            const ie = je.current.yaw, Qe = je.current.pitch, it = je.current.roll, gt = Math.abs(it) <= 10 && Math.abs(Qe) <= 12 && Math.abs(ie) <= 18;
            gt !== be.current.isGood ? gt ? (be.current.goodStreak += 1, be.current.poorStreak = 0, be.current.goodStreak >= kt && (be.current.isGood = !0, be.current.goodStreak = 0)) : (be.current.poorStreak += 1, be.current.goodStreak = 0, be.current.poorStreak >= kt && (be.current.isGood = !1, be.current.poorStreak = 0)) : (be.current.goodStreak = 0, be.current.poorStreak = 0), Ze = {
              isGoodPosture: be.current.isGood,
              // Use roll (tilt) as a proxy for shoulder alignment; smaller magnitude means better alignment
              shoulderAlignment: -it,
              headTilt: Qe,
              confidence: Math.min(1, 0.6 + 0.4 * ee.confidence)
            };
          }
          let Te = null;
          if (pt.current) {
            const ie = pt.current.analyze(Je, { landmarks: v.landmarks, headPose: ee ?? null });
            Te = { dominant: ie.dominant, confidence: ie.confidence, emotions: ie.emotions };
          }
          const mt = zt(v, _e), Le = ee ?? Nt(v);
          N(Ze), ve(Te), Ne(mt);
          let Me = null;
          if (I.current && a)
            try {
              const ie = await I.current.estimate(a, performance?.now?.() || void 0);
              if (Me = ie?.onScreen ?? null, Me !== null && ge(Me), Me === !1 && !O && Date.now() - Ue.current > 3e3)
                m((Qe) => Qe + 1), j(!0), fe(q), Ue.current = Date.now(), ge(!1), W.current.gazeOff || (W.current.gazeOff = !0, x?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0, headPose: Le, gaze: ie }, timestamp: q }));
              else if (Me === !0 && O) {
                if (ue !== null) {
                  const Qe = q - ue;
                  et((it) => it + Qe), fe(null);
                }
                j(!1), W.current.gazeOff = !1, ge(!0);
              }
            } catch {
              Me = null;
            }
          if (Me === null) {
            const ie = g.width, Qe = g.height, it = v.x + v.width / 2, gt = v.y + v.height / 2, qt = Math.hypot((it - ie / 2) / ie, (gt - Qe / 2) / Qe), Ht = Le?.yaw ?? 0, Ct = Le?.pitch ?? 0, St = Math.abs(Ht) > nt.yaw || Math.abs(Ct) > nt.pitch, Wt = qt > nt.centerOffset;
            St || Wt ? (he.current.offFrames += 1, he.current.onFrames = Math.max(0, he.current.onFrames - 1)) : (he.current.onFrames += 1, he.current.offFrames = Math.max(0, he.current.offFrames - 1));
            const Bt = he.current.offFrames >= Et, Xt = he.current.onFrames >= Dt;
            if (ge((_t) => Xt ? !0 : Bt ? !1 : _t), Bt && !O && Date.now() - Ue.current > 3e3)
              m((_t) => _t + 1), j(!0), fe(q), Ue.current = Date.now(), ge(!1), W.current.gazeOff || (W.current.gazeOff = !0, x?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0, reason: St ? "head_pose" : "center_offset", headPose: Le }, timestamp: q }));
            else if (Xt && O) {
              if (ue !== null) {
                const _t = q - ue;
                et((rn) => rn + _t), fe(null);
              }
              j(!1), W.current.gazeOff = !1, ge(!0);
            }
          }
          const Ye = $.length === 0 || $.length > 1;
          if (d && (Ye || q - z.current >= 5e3)) {
            if (Ye) {
              const ie = dt(0.85);
              ie && e({ timestamp: q, type: "violation_trigger", image: ie, context: $.length === 0 ? "No face detected" : "Multiple faces detected" });
            }
            d({ postureAnalysis: Ze, attireAnalysis: mt }), z.current = q;
          }
        }
      } else {
        if (N(null), ve(null), Ne(null), O) {
          if (ue !== null) {
            const v = q - ue;
            et((H) => H + v), fe(null);
          }
          j(!1);
        }
        ge(null);
      }
      $.length === 0 ? o?.("violation") : $.length > 1 ? o?.("warning") : o?.("optimal");
    } catch (p) {
      console.error("[widget] Face detection error:", p);
    } finally {
      Ge.current = requestAnimationFrame(C), se.current = !1;
    }
  }, [zt, o, d, s?.snapshots, O, re, ue, Lt]);
  ze(() => {
    V(0);
  }, []), ze(() => {
    (async () => {
      try {
        const A = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 320 }, height: { ideal: 240 }, frameRate: { ideal: 15 } },
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
        });
        De.current && (De.current.srcObject = A);
        let Q = null;
        const ye = A.getAudioTracks();
        ye.length > 0 && (Q = new MediaStream(ye), ut.current = Q), await c();
        try {
          I.current = await mn({ thresholds: R?.mediapipe });
        } catch {
        }
        Q && await Pt(Q), Ge.current = requestAnimationFrame(C);
      } catch {
        o?.("violation");
      }
    })();
    const g = 5, p = [60 * 1e3, 5 * 60 * 1e3], G = Math.max(0, g - p.length), Y = [...p];
    if (G > 0)
      for (let ye = 0; ye < G; ye++) {
        const Ie = 42e4 + Math.random() * 18e4, $ = (Math.random() - 0.5) * 30 * 1e3;
        Y.push(Math.max(0, Math.floor(Ie + $)));
      }
    Y.sort((A, Q) => A - Q);
    for (let A = 1; A < Y.length; A++)
      Math.abs(Y[A] - Y[A - 1]) < 10 * 1e3 && (Y[A] += 12 * 1e3);
    return Y.forEach((A) => {
      const Q = window.setTimeout(() => n(), A);
      ft.current.push(Q);
    }), () => {
      L.current = !0, Ge.current && cancelAnimationFrame(Ge.current), De.current?.srcObject && De.current.srcObject.getTracks().forEach((Q) => Q.stop()), ut.current && ut.current.getTracks().forEach((A) => A.stop()), It(), ut.current = null, I.current?.close?.(), ft.current.forEach((A) => window.clearTimeout(A)), ft.current = [];
    };
  }, []);
  const B = (a) => {
    i(!0);
    const g = Oe.current?.getBoundingClientRect();
    g && D({ x: a.clientX - g.left, y: a.clientY - g.top });
  }, k = (a) => {
    if (h) {
      const g = Math.max(0, Math.min((typeof window < "u" ? window.innerWidth : 0) - 280, a.clientX - y.x)), p = Math.max(0, Math.min((typeof window < "u" ? window.innerHeight : 0) - 400, a.clientY - y.y));
      l({ x: g, y: p });
    }
  }, S = () => i(!1);
  ze(() => {
    if (h)
      return document.addEventListener("mousemove", k), document.addEventListener("mouseup", S), () => {
        document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", S);
      };
  }, [h, y]);
  const me = () => {
    document.hidden && We((a) => {
      const g = a + 1;
      return x?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { when: Date.now() }, timestamp: Date.now() }), g;
    });
  }, J = () => le((a) => a + 1), Z = (a) => {
    Be((g) => g + 1), x?.({ eventType: "keystroke", severity: "info", context: "coding", data: {}, timestamp: Date.now() }), (a.ctrlKey || a.metaKey) && (a.key === "c" || a.key === "x" || a.key === "v") && (r((g) => g + 1), a.preventDefault(), x?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, key: a.key }, timestamp: Date.now() }));
  };
  ze(() => (document.addEventListener("visibilitychange", me), window.addEventListener("blur", J), document.addEventListener("keydown", Z), () => {
    document.removeEventListener("visibilitychange", me), window.removeEventListener("blur", J), document.removeEventListener("keydown", Z);
  }), []);
  const Pe = P === 0 ? "#ef4444" : P > 1 ? "#f59e0b" : "#22c55e";
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      ref: Oe,
      onMouseDown: B,
      style: {
        position: "fixed",
        left: M.x,
        top: M.y,
        zIndex: 9999,
        width: 288,
        cursor: "move",
        border: `2px solid ${Pe}`,
        borderRadius: 8,
        background: "#fff",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        padding: 12,
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ f.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: /* @__PURE__ */ f.jsx("div", { style: { fontSize: 12, fontWeight: 600 }, children: P === 0 ? "No Face" : P > 1 ? "Multiple Faces" : ce ? "Optimal" : "Good" }) }),
        /* @__PURE__ */ f.jsxs("div", { style: { position: "relative", background: "#000", borderRadius: 4, overflow: "hidden" }, children: [
          /* @__PURE__ */ f.jsx("video", { ref: De, autoPlay: !0, muted: !0, playsInline: !0, style: { width: "100%", height: 128, objectFit: "cover" } }),
          /* @__PURE__ */ f.jsx("canvas", { ref: at, width: 320, height: 240, style: { display: "none" } })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { style: { marginTop: 8, fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }, children: [
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Faces: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: P === 1 ? "#16a34a" : "#ef4444" }, children: P })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "No Face: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: tt > 0 ? "#ef4444" : "#16a34a" }, children: tt })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Multiple: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: ke > 0 ? "#ef4444" : "#16a34a" }, children: ke })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Posture: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: U?.isGoodPosture ? "#16a34a" : "#f59e0b" }, children: U?.isGoodPosture ? "Good" : "Poor" })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Attire: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: Se?.isProfessional ? "#16a34a" : "#f59e0b" }, children: Se?.isProfessional ? "Professional" : "Casual" })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Emotion: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: "#3b82f6" }, children: Ae?.dominant || "Unknown" })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Gaze: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: we === null ? "#9ca3af" : we ? "#16a34a" : "#ef4444" }, children: we === null ? "--" : we ? "On" : "Off" })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Audio: ",
            /* @__PURE__ */ f.jsxs("span", { style: { color: F > 50 ? "#16a34a" : F > 20 ? "#f59e0b" : "#ef4444" }, children: [
              F,
              "%"
            ] }),
            /* @__PURE__ */ f.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ f.jsx("div", { style: { width: `${Math.min(F, 100)}%`, height: 6, transition: "width 100ms", background: F > 50 ? "#16a34a" : F > 20 ? "#f59e0b" : "#ef4444" } }) })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Audio Alerts: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: oe > 0 ? "#ef4444" : "#16a34a" }, children: oe })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Unfocus: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: ne > 0 ? "#ef4444" : "#16a34a" }, children: ne })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Tab Switch: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: pe > 0 ? "#ef4444" : "#16a34a" }, children: pe })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Keystrokes: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: "#3b82f6" }, children: $e })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Copy Attempts: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: qe > 0 ? "#ef4444" : "#16a34a" }, children: qe })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            "Gaze Off: ",
            /* @__PURE__ */ f.jsx("strong", { style: { color: u > 0 ? "#ef4444" : "#16a34a" }, children: u })
          ] })
        ] })
      ]
    }
  );
}
const Vt = (t, s) => t.length > s ? t.slice(t.length - s) : t, gn = (t, s) => ({
  sessionId: t,
  sessionType: "coding-assessment",
  startTime: Date.now(),
  preCheckResults: s,
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
function yn(t, s) {
  switch (s.eventType) {
    case "tab_switch":
      return { ...t, tabSwitches: t.tabSwitches + 1, violationCount: t.violationCount + 1 };
    case "audio_anomaly":
      return { ...t, audioAnomalies: t.audioAnomalies + 1, violationCount: t.violationCount + 1 };
    case "code_execution":
      return { ...t, codeExecutionCount: t.codeExecutionCount + 1 };
    case "face_detection": {
      const o = s.data?.reason;
      return o === "no_face" ? { ...t, noFaceIncidents: t.noFaceIncidents + 1, violationCount: t.violationCount + 1 } : o === "multiple_faces" ? { ...t, multipleFaceIncidents: t.multipleFaceIncidents + 1, violationCount: t.violationCount + 1 } : t;
    }
    case "gaze_tracking": {
      const o = s.data?.type === "focus_break", d = Number(s.data?.focusTimeMs) || 0, x = s.data?.offscreen === !0;
      return {
        ...t,
        focusBreaks: t.focusBreaks + (o ? 1 : 0),
        gazeDuration: t.gazeDuration + d,
        unfocusEvents: t.unfocusEvents + (o ? 1 : 0),
        gazeOffScreenIncidents: t.gazeOffScreenIncidents + (x ? 1 : 0),
        violationCount: t.violationCount + (o || x ? 1 : 0)
      };
    }
    case "keystroke": {
      const o = s.data?.copyCutPaste === !0;
      return {
        ...t,
        keystrokes: t.keystrokes + 1,
        copyCutPasteAttempts: t.copyCutPasteAttempts + (o ? 1 : 0),
        violationCount: t.violationCount + (o ? 1 : 0)
      };
    }
    default:
      return t;
  }
}
function vn(t, s) {
  switch (s.type) {
    case "INIT":
      return { ...s.payload };
    case "SET_FIELDS": {
      const o = { ...t, ...s.payload };
      return o.snapshots && (o.snapshots = Vt(o.snapshots, 50)), o.liveEvents && (o.liveEvents = Vt(o.liveEvents, 200)), o;
    }
    case "ADD_EVENTS": {
      const o = Vt([...t.liveEvents, ...s.events], 200), d = s.events.reduce(yn, t.sessionStats);
      return { ...t, liveEvents: o, sessionStats: d };
    }
    case "ADD_SNAPSHOT": {
      const o = Vt([...t.snapshots, s.snapshot], 50);
      return { ...t, snapshots: o };
    }
    case "TICK": {
      const o = Math.max(0, s.now - t.startTime);
      return o === t.sessionStats.totalDuration ? t : { ...t, sessionStats: { ...t.sessionStats, totalDuration: o } };
    }
    case "COMPLETE": {
      const o = s.endTime ?? Date.now();
      return { ...t, sessionStats: { ...t.sessionStats, totalDuration: Math.max(0, o - t.startTime) } };
    }
    default:
      return t;
  }
}
function wn(t) {
  const [s, o] = E(null), d = te((i) => {
    o((y) => y && vn(y, i));
  }, []), x = _(null), T = _(0), R = _(null), M = te((i) => {
    const y = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    x.current = y;
    const D = sessionStorage.getItem(y);
    if (D)
      try {
        const K = JSON.parse(D);
        return o(K), y;
      } catch {
      }
    const P = gn(y, i);
    return o(P), sessionStorage.setItem(y, JSON.stringify(P)), y;
  }, [t?.sessionId]), l = te((i) => {
    const y = i ?? s;
    if (!(!y || !x.current))
      try {
        sessionStorage.setItem(x.current, JSON.stringify(y)), T.current = Date.now();
      } catch (D) {
        console.error("[session] persist failed", D);
      }
  }, [s]);
  return ze(() => {
    if (!s) return;
    const y = Date.now() - T.current;
    return y < 1e3 ? (R.current && clearTimeout(R.current), R.current = setTimeout(() => l(), 1e3 - y)) : l(), () => {
      R.current && clearTimeout(R.current);
    };
  }, [s, l]), ze(() => {
    const i = () => l();
    return window.addEventListener("visibilitychange", i), window.addEventListener("beforeunload", i), () => {
      window.removeEventListener("visibilitychange", i), window.removeEventListener("beforeunload", i);
    };
  }, [l]), ze(() => {
    if (!s) return;
    const i = setInterval(() => d({ type: "TICK", now: Date.now() }), 1e3);
    return () => clearInterval(i);
  }, [s, d]), on(() => ({
    state: s,
    sessionId: x.current,
    init: M,
    setFields: (i) => d({ type: "SET_FIELDS", payload: i }),
    addEvents: (i) => d({ type: "ADD_EVENTS", events: i }),
    addSnapshot: (i) => d({ type: "ADD_SNAPSHOT", snapshot: i }),
    complete: () => d({ type: "COMPLETE" })
  }), [s, d, M]);
}
function bn({ onSessionStart: t, onSessionUpdate: s, onEvent: o }) {
  const [d, x] = E(null), [T, R] = E("optimal"), M = wn();
  return ze(() => {
    if (d && !M.state) {
      const l = M.init(d);
      t?.(l, d);
    }
  }, [d, M]), d ? /* @__PURE__ */ f.jsx(
    pn,
    {
      monitoringStatus: T,
      sessionData: M.state ?? void 0,
      onStatusChange: (l) => R(l),
      onUpdateSession: (l) => {
        M.setFields(l), s?.(l);
      },
      onAddSnapshot: (l) => M.addSnapshot(l),
      onAddEvent: (l) => {
        M.addEvents([{ ...l, timestamp: l.timestamp ?? Date.now() }]), o?.(l);
      },
      gazeThresholds: {
        mediapipe: { horiz: 0.35, vert: 0.5, yaw: 20, pitch: 18, offDwell: 5, onDwell: 3, calibFrames: 24 },
        fallback: { yaw: 24, pitch: 20, centerOffset: 0.22, offFrames: 5, onFrames: 3 }
      }
    }
  ) : /* @__PURE__ */ f.jsx(
    un,
    {
      onComplete: (l) => x(l),
      onError: () => x(null)
    }
  );
}
export {
  pn as FloatingVideo,
  un as Prechecks,
  bn as ProctoringWidget
};
