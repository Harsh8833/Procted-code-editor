import cn, { useState as E, useRef as k, useCallback as se, useEffect as He, useMemo as dn } from "react";
var Zt = { exports: {} }, Bt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function hn() {
  if (rn) return Bt;
  rn = 1;
  var t = cn, i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, w = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(b, u, m) {
    var f, p = {}, D = null, j = null;
    m !== void 0 && (D = "" + m), u.key !== void 0 && (D = "" + u.key), u.ref !== void 0 && (j = u.ref);
    for (f in u) h.call(u, f) && !O.hasOwnProperty(f) && (p[f] = u[f]);
    if (b && b.defaultProps) for (f in u = b.defaultProps, u) p[f] === void 0 && (p[f] = u[f]);
    return { $$typeof: i, type: b, key: D, ref: j, props: p, _owner: w.current };
  }
  return Bt.Fragment = o, Bt.jsx = F, Bt.jsxs = F, Bt;
}
var Ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function mn() {
  return on || (on = 1, process.env.NODE_ENV !== "production" && function() {
    var t = cn, i = Symbol.for("react.element"), o = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), b = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), Q = Symbol.iterator, ue = "@@iterator";
    function he(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = Q && e[Q] || e[ue];
      return typeof n == "function" ? n : null;
    }
    var B = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), v = 1; v < n; v++)
          s[v - 1] = arguments[v];
        Oe("error", e, s);
      }
    }
    function Oe(e, n, s) {
      {
        var v = B.ReactDebugCurrentFrame, A = v.getStackAddendum();
        A !== "" && (n += "%s", s = s.concat([A]));
        var W = s.map(function(R) {
          return String(R);
        });
        W.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, W);
      }
    }
    var Ee = !1, Te = !1, Ae = !1, ee = !1, we = !1, H;
    H = Symbol.for("react.module.reference");
    function C(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === O || we || e === w || e === m || e === f || ee || e === j || Ee || Te || Ae || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === p || e.$$typeof === F || e.$$typeof === b || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === H || e.getModuleId !== void 0));
    }
    function z(e, n, s) {
      var v = e.displayName;
      if (v)
        return v;
      var A = n.displayName || n.name || "";
      return A !== "" ? s + "(" + A + ")" : s;
    }
    function Fe(e) {
      return e.displayName || "Context";
    }
    function X(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case o:
          return "Portal";
        case O:
          return "Profiler";
        case w:
          return "StrictMode";
        case m:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var n = e;
            return Fe(n) + ".Consumer";
          case F:
            var s = e;
            return Fe(s._context) + ".Provider";
          case u:
            return z(e, e.render, "ForwardRef");
          case p:
            var v = e.displayName || null;
            return v !== null ? v : X(e.type) || "Memo";
          case D: {
            var A = e, W = A._payload, R = A._init;
            try {
              return X(R(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oe = Object.assign, J = 0, Ie, Ve, qe, Ze, Qe, r, l;
    function a() {
    }
    a.__reactDisabledLog = !0;
    function N() {
      {
        if (J === 0) {
          Ie = console.log, Ve = console.info, qe = console.warn, Ze = console.error, Qe = console.group, r = console.groupCollapsed, l = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: a,
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
        J++;
      }
    }
    function I() {
      {
        if (J--, J === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: oe({}, e, {
              value: Ie
            }),
            info: oe({}, e, {
              value: Ve
            }),
            warn: oe({}, e, {
              value: qe
            }),
            error: oe({}, e, {
              value: Ze
            }),
            group: oe({}, e, {
              value: Qe
            }),
            groupCollapsed: oe({}, e, {
              value: r
            }),
            groupEnd: oe({}, e, {
              value: l
            })
          });
        }
        J < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = B.ReactCurrentDispatcher, ze;
    function ke(e, n, s) {
      {
        if (ze === void 0)
          try {
            throw Error();
          } catch (A) {
            var v = A.stack.trim().match(/\n( *(at )?)/);
            ze = v && v[1] || "";
          }
        return `
` + ze + e;
      }
    }
    var Ke = !1, Ge;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      Ge = new Ye();
    }
    function wt(e, n) {
      if (!e || Ke)
        return "";
      {
        var s = Ge.get(e);
        if (s !== void 0)
          return s;
      }
      var v;
      Ke = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = fe.current, fe.current = null, N();
      try {
        if (n) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (Se) {
              v = Se;
            }
            Reflect.construct(e, [], R);
          } else {
            try {
              R.call();
            } catch (Se) {
              v = Se;
            }
            e.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Se) {
            v = Se;
          }
          e();
        }
      } catch (Se) {
        if (Se && v && typeof Se.stack == "string") {
          for (var M = Se.stack.split(`
`), Me = v.stack.split(`
`), ne = M.length - 1, ae = Me.length - 1; ne >= 1 && ae >= 0 && M[ne] !== Me[ae]; )
            ae--;
          for (; ne >= 1 && ae >= 0; ne--, ae--)
            if (M[ne] !== Me[ae]) {
              if (ne !== 1 || ae !== 1)
                do
                  if (ne--, ae--, ae < 0 || M[ne] !== Me[ae]) {
                    var ve = `
` + M[ne].replace(" at new ", " at ");
                    return e.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", e.displayName)), typeof e == "function" && Ge.set(e, ve), ve;
                  }
                while (ne >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        Ke = !1, fe.current = W, I(), Error.prepareStackTrace = A;
      }
      var Et = e ? e.displayName || e.name : "", ut = Et ? ke(Et) : "";
      return typeof e == "function" && Ge.set(e, ut), ut;
    }
    function dt(e, n, s) {
      return wt(e, !1);
    }
    function ht(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function pe(e, n, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return wt(e, ht(e));
      if (typeof e == "string")
        return ke(e);
      switch (e) {
        case m:
          return ke("Suspense");
        case f:
          return ke("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return dt(e.render);
          case p:
            return pe(e.type, n, s);
          case D: {
            var v = e, A = v._payload, W = v._init;
            try {
              return pe(W(A), n, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, ot = {}, Xe = B.ReactDebugCurrentFrame;
    function et(e) {
      if (e) {
        var n = e._owner, s = pe(e.type, e._source, n ? n.type : null);
        Xe.setExtraStackFrame(s);
      } else
        Xe.setExtraStackFrame(null);
    }
    function at(e, n, s, v, A) {
      {
        var W = Function.call.bind(ge);
        for (var R in e)
          if (W(e, R)) {
            var M = void 0;
            try {
              if (typeof e[R] != "function") {
                var Me = Error((v || "React class") + ": " + s + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Me.name = "Invariant Violation", Me;
              }
              M = e[R](n, R, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              M = ne;
            }
            M && !(M instanceof Error) && (et(A), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, R, typeof M), et(null)), M instanceof Error && !(M.message in ot) && (ot[M.message] = !0, et(A), T("Failed %s type: %s", s, M.message), et(null));
          }
      }
    }
    var mt = Array.isArray;
    function st(e) {
      return mt(e);
    }
    function pt(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, s = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function xt(e) {
      try {
        return Ne(e), !1;
      } catch {
        return !0;
      }
    }
    function Ne(e) {
      return "" + e;
    }
    function it(e) {
      if (xt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), Ne(e);
    }
    var bt = B.ReactCurrentOwner, Mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, S, _;
    function P(e) {
      if (ge.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ce(e) {
      if (ge.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ye(e, n) {
      typeof e.ref == "string" && bt.current;
    }
    function ie(e, n) {
      {
        var s = function() {
          S || (S = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function te(e, n) {
      {
        var s = function() {
          _ || (_ = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var xe = function(e, n, s, v, A, W, R) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: s,
        props: R,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function We(e, n, s, v, A) {
      {
        var W, R = {}, M = null, Me = null;
        s !== void 0 && (it(s), M = "" + s), Ce(n) && (it(n.key), M = "" + n.key), P(n) && (Me = n.ref, ye(n, A));
        for (W in n)
          ge.call(n, W) && !Mt.hasOwnProperty(W) && (R[W] = n[W]);
        if (e && e.defaultProps) {
          var ne = e.defaultProps;
          for (W in ne)
            R[W] === void 0 && (R[W] = ne[W]);
        }
        if (M || Me) {
          var ae = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          M && ie(R, ae), Me && te(R, ae);
        }
        return xe(e, M, Me, A, v, bt.current, R);
      }
    }
    var ct = B.ReactCurrentOwner, Je = B.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var n = e._owner, s = pe(e.type, e._source, n ? n.type : null);
        Je.setExtraStackFrame(s);
      } else
        Je.setExtraStackFrame(null);
    }
    var me;
    me = !1;
    function De(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function be() {
      {
        if (ct.current) {
          var e = X(ct.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ct(e) {
      return "";
    }
    var St = {};
    function _t(e) {
      {
        var n = be();
        if (!n) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (n = `

Check the top-level render call using <` + s + ">.");
        }
        return n;
      }
    }
    function Rt(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = _t(n);
        if (St[s])
          return;
        St[s] = !0;
        var v = "";
        e && e._owner && e._owner !== ct.current && (v = " It was passed a child from " + X(e._owner.type) + "."), de(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), de(null);
      }
    }
    function gt(e, n) {
      {
        if (typeof e != "object")
          return;
        if (st(e))
          for (var s = 0; s < e.length; s++) {
            var v = e[s];
            De(v) && Rt(v, n);
          }
        else if (De(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var A = he(e);
          if (typeof A == "function" && A !== e.entries)
            for (var W = A.call(e), R; !(R = W.next()).done; )
              De(R.value) && Rt(R.value, n);
        }
      }
    }
    function Ot(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var s;
        if (typeof n == "function")
          s = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === p))
          s = n.propTypes;
        else
          return;
        if (s) {
          var v = X(n);
          at(s, e.props, "prop", v, e);
        } else if (n.PropTypes !== void 0 && !me) {
          me = !0;
          var A = X(n);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lt(e) {
      {
        for (var n = Object.keys(e.props), s = 0; s < n.length; s++) {
          var v = n[s];
          if (v !== "children" && v !== "key") {
            de(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), de(null);
            break;
          }
        }
        e.ref !== null && (de(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), de(null));
      }
    }
    var V = {};
    function U(e, n, s, v, A, W) {
      {
        var R = C(e);
        if (!R) {
          var M = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Me = Ct();
          Me ? M += Me : M += be();
          var ne;
          e === null ? ne = "null" : st(e) ? ne = "array" : e !== void 0 && e.$$typeof === i ? (ne = "<" + (X(e.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, M);
        }
        var ae = We(e, n, s, A, W);
        if (ae == null)
          return ae;
        if (R) {
          var ve = n.children;
          if (ve !== void 0)
            if (v)
              if (st(ve)) {
                for (var Et = 0; Et < ve.length; Et++)
                  gt(ve[Et], e);
                Object.freeze && Object.freeze(ve);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gt(ve, e);
        }
        if (ge.call(n, "key")) {
          var ut = X(e), Se = Object.keys(n).filter(function(Gt) {
            return Gt !== "key";
          }), jt = Se.length > 0 ? "{key: someKey, " + Se.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!V[ut + jt]) {
            var Vt = Se.length > 0 ? "{" + Se.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, jt, ut, Vt, ut), V[ut + jt] = !0;
          }
        }
        return e === h ? lt(ae) : Ot(ae), ae;
      }
    }
    function At(e, n, s) {
      return U(e, n, s, !0);
    }
    function yt(e, n, s) {
      return U(e, n, s, !1);
    }
    var Dt = yt, zt = At;
    Ht.Fragment = h, Ht.jsx = Dt, Ht.jsxs = zt;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? Zt.exports = hn() : Zt.exports = mn();
var c = Zt.exports;
function ln(t) {
  const i = window.AudioContext || window.webkitAudioContext, o = new i(), h = o.createMediaStreamSource(t), w = o.createAnalyser();
  w.fftSize = 2048, w.smoothingTimeConstant = 0.85, h.connect(w);
  const O = new Uint8Array(w.fftSize);
  function F() {
    w.getByteTimeDomainData(O);
    let b = 0;
    for (let u = 0; u < O.length; u++) {
      const m = (O[u] - 128) / 128;
      b += m * m;
    }
    return Math.sqrt(b / O.length);
  }
  return {
    getLevel: () => F(),
    dispose: async () => {
      try {
        h.disconnect();
      } catch {
      }
      try {
        w.disconnect();
      } catch {
      }
      try {
        await o.close();
      } catch {
      }
    }
  };
}
let qt = null;
async function pn() {
  if (qt) return qt;
  const t = await import("./blazeface.esm-D5KORnOe.js"), i = await import("./index-2kM27Pi_.js");
  return i.ready && await i.ready(), qt = await t.load(), qt;
}
function an(t, i, o) {
  if (t.width <= 0 || t.height <= 0 || i <= 0 || o <= 0) return !1;
  const h = Math.max(6, Math.floor(i * 0.06)), w = Math.max(6, Math.floor(o * 0.06));
  if (t.x < h || t.y < w || t.x + t.width > i - h || t.y + t.height > o - w) return !1;
  const O = t.width * t.height, F = i * o, b = O / F;
  if (b < 0.04 || b > 0.65) return !1;
  const u = t.width / t.height;
  return !(u < 0.6 || u > 1.6);
}
async function gn(t) {
  if ("FaceDetector" in window)
    try {
      const o = await new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }).detect(t);
      if (o && o.length > 0) {
        const h = o[0]?.boundingBox, w = t.videoWidth || t.width || 0, O = t.videoHeight || t.height || 0;
        if (h) {
          const F = { x: h.x, y: h.y, width: h.width, height: h.height };
          if (an(F, w, O)) return { present: !0, confidence: 0.85 };
        }
      }
      return { present: !1, confidence: 0 };
    } catch {
    }
  try {
    const o = await (await pn()).estimateFaces(t, !1);
    if (o && o.length > 0) {
      const h = t.videoWidth || t.width || 0, w = t.videoHeight || t.height || 0;
      for (const O of o) {
        const [F, b] = O.topLeft, [u, m] = O.bottomRight, f = { x: F, y: b, width: u - F, height: m - b };
        if (an(f, h, w)) {
          const p = O.probability ? O.probability[0] : 0.75;
          return { present: !0, confidence: Math.max(0.6, Math.min(1, p)) };
        }
      }
    }
  } catch {
  }
  return { present: !1, confidence: 0 };
}
function yn({ onComplete: t, onError: i }) {
  const o = ["camera", "microphone", "face", "monitor", "browser"], [h, w] = E({
    camera: "pending",
    microphone: "pending",
    face: "pending",
    monitor: "pending",
    browser: "pending"
  }), [O, F] = E(0), [b, u] = E(0), [m, f] = E({}), [p, D] = E({}), j = k(null), Q = k(null), ue = k(null), he = k(null), B = k(null), T = () => {
    try {
      j.current?.getTracks().forEach((r) => r.stop());
    } catch {
    }
    try {
      Q.current?.getTracks().forEach((r) => r.stop());
    } catch {
    }
    j.current = null, Q.current = null, ue.current && (ue.current.dispose().catch(() => {
    }), ue.current = null), he.current && (cancelAnimationFrame(he.current), he.current = null);
  }, Oe = async (r) => {
    try {
      const l = window.AudioContext || window.webkitAudioContext;
      if (!l) throw new Error("AudioContext not supported");
      const a = new l(), N = a.createMediaStreamSource(r), I = a.createAnalyser();
      I.fftSize = 256, I.smoothingTimeConstant = 0.8, N.connect(I);
      const fe = new Uint8Array(I.frequencyBinCount);
      I.getByteFrequencyData(fe), sessionStorage.setItem("audio-context-initialized", "true"), N.disconnect(), await a.close(), typeof window < "u" && (window.precheckAudioStream = r);
    } catch {
      sessionStorage.setItem("audio-context-initialized", "false");
    }
  }, Ee = async (r) => {
    const l = B.current;
    let a = 0, N = 0, I = 0;
    const fe = 30;
    for (; I < fe && a < 5; ) {
      try {
        const ke = await gn(l);
        ke.present && (a += 1, N = Math.max(N, ke.confidence));
      } catch {
      }
      I++, F(I), await new Promise((ke) => setTimeout(ke, 100));
    }
    return { status: a >= 5, confidence: N, timestamp: Date.now() };
  };
  function Te() {
    return "isExtended" in window.screen ? window.screen.isExtended : window.screen.availWidth > window.screen.width || window.screenLeft !== 0 || window.screenTop !== 0 || window.matchMedia("(display-mode: extended)").matches;
  }
  const Ae = () => {
    try {
      const r = window.screen.width, l = window.screen.height, a = window.screen.availWidth;
      return r / l > 3 || r > a * 1.5 || [3840, 3360, 2560, 4480, 5120].includes(r) ? 2 : 1;
    } catch {
      return 1;
    }
  }, ee = async () => Ae(), we = () => [
    "navigator.mediaDevices",
    "navigator.mediaDevices.getUserMedia",
    "requestAnimationFrame",
    "WebAssembly"
  ].every((l) => {
    const a = l.split(".");
    let N = window;
    for (const I of a) {
      if (!(I in N)) return !1;
      N = N[I];
    }
    return !0;
  }), H = (r, l) => {
    w((a) => ({ ...a, [r]: l }));
  }, C = se(async () => {
    H("camera", "running"), f((r) => ({ ...r, camera: "" }));
    try {
      try {
        j.current?.getTracks().forEach((l) => l.stop());
      } catch {
      }
      const r = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } }
      });
      if (j.current = r, !B.current) {
        const l = document.createElement("video");
        l.muted = !0, l.playsInline = !0, B.current = l;
      }
      B.current.srcObject = r;
      try {
        await B.current.play();
      } catch {
      }
      return D((l) => ({ ...l, cameraAccess: !0 })), H("camera", "passed"), !0;
    } catch (r) {
      const l = r?.name === "NotAllowedError" ? "Camera permission denied" : r?.message || "Camera access failed";
      return f((a) => ({ ...a, camera: l })), H("camera", "failed"), !1;
    }
  }, []), z = se(async () => {
    H("microphone", "running"), f((r) => ({ ...r, microphone: "" }));
    try {
      try {
        Q.current?.getTracks().forEach((l) => l.stop());
      } catch {
      }
      const r = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      Q.current = r, D((l) => ({ ...l, microphoneAccess: !0 })), await Oe(r);
      try {
        const l = ln(r);
        ue.current = l;
        const a = () => {
          u(l.getLevel()), he.current = requestAnimationFrame(a);
        };
        he.current = requestAnimationFrame(a);
      } catch {
      }
      return H("microphone", "passed"), !0;
    } catch (r) {
      const l = r?.name === "NotAllowedError" ? "Microphone permission denied" : r?.message || "Microphone access failed";
      return f((a) => ({ ...a, microphone: l })), H("microphone", "failed"), !1;
    }
  }, []), Fe = se(async () => {
    H("face", "running"), f((r) => ({ ...r, face: "" }));
    try {
      if (!j.current) throw new Error("Camera is not initialized");
      const r = await Ee(j.current);
      if (D((l) => ({ ...l, faceDetection: r })), r.status)
        return H("face", "passed"), !0;
      throw new Error("No face detected. Please align your face within the frame and retry.");
    } catch (r) {
      const l = r?.message || "Face detection failed";
      return f((a) => ({ ...a, face: l })), H("face", "failed"), !1;
    }
  }, []), X = se(async () => {
    H("monitor", "running"), f((r) => ({ ...r, monitor: "" }));
    try {
      const r = await ee();
      if (r && r > 1 || Te())
        throw D((l) => ({ ...l, monitorCount: r })), new Error("Multiple displays detected. Please remove external screens and keep only one display connected, then press Retry.");
      if (r === 1)
        return D((l) => ({ ...l, monitorCount: r })), H("monitor", "passed"), !0;
      throw new Error("Could not verify displays");
    } catch (r) {
      return f((l) => ({ ...l, monitor: r?.message || "Monitor verification failed" })), H("monitor", "failed"), !1;
    }
  }, []), oe = se(async () => {
    H("browser", "running"), f((r) => ({ ...r, browser: "" }));
    try {
      const r = we();
      if (D((l) => ({ ...l, browserSupport: r })), !r) throw new Error("Required browser features are unavailable");
      return H("browser", "passed"), !0;
    } catch (r) {
      return f((l) => ({ ...l, browser: r?.message || "Browser not supported" })), H("browser", "failed"), !1;
    }
  }, []), J = {
    camera: C,
    microphone: z,
    face: Fe,
    monitor: X,
    browser: oe
  }, Ie = se(async (r) => {
    for (let l = r; l < o.length; l++) {
      const a = o[l];
      if (!await J[a]()) break;
    }
  }, [J]);
  He(() => {
    if (!o.every((a) => h[a] === "passed")) return;
    const l = {
      cameraAccess: !!p.cameraAccess,
      microphoneAccess: !!p.microphoneAccess,
      faceDetection: p.faceDetection || { status: !1, confidence: 0, timestamp: Date.now() },
      monitorCount: p.monitorCount || 1,
      browserSupport: !!p.browserSupport,
      codeEditorReady: !0
    };
    t(l), T();
  }, [h, p]), He(() => (Ie(0), () => T()), []);
  const Ve = (r) => {
    const l = o.indexOf(r);
    w((a) => {
      const N = { ...a };
      for (let I = l; I < o.length; I++) N[o[I]] = "pending";
      return N;
    }), f((a) => ({ ...a, [r]: "" })), Ie(l);
  }, qe = o.filter((r) => h[r] === "passed").length, Ze = o.some((r) => h[r] === "running"), Qe = Math.round((qe + (Ze ? 0.5 : 0)) / o.length * 100);
  return /* @__PURE__ */ c.jsx("div", { style: { fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#eff6ff,#eef2ff)" }, children: /* @__PURE__ */ c.jsxs("div", { style: { width: 720, maxWidth: "95vw", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }, children: [
    /* @__PURE__ */ c.jsxs("div", { style: { textAlign: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ c.jsx("h2", { style: { margin: 0, fontSize: 20, fontWeight: 700 }, children: "System Pre-Check" }),
      /* @__PURE__ */ c.jsx("p", { style: { color: "#6b7280" }, children: "Verifying your system for proctored assessment" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
        /* @__PURE__ */ c.jsx("span", { children: "Overall Progress" }),
        /* @__PURE__ */ c.jsxs("span", { children: [
          Qe,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { style: { height: 8, background: "#f3f4f6", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ c.jsx("div", { style: { width: `${Qe}%`, height: 8, background: "#3b82f6" } }) })
    ] }),
    /* @__PURE__ */ c.jsx("div", { style: { display: "grid", gap: 8 }, children: o.map((r) => {
      const l = r === "camera" ? "Camera Access" : r === "microphone" ? "Microphone Access" : r === "face" ? "Face Detection" : r === "monitor" ? "Single Monitor Check" : "Browser Support", a = h[r], N = a === "passed" ? "#ecfdf5" : a === "running" ? "#eff6ff" : a === "failed" ? "#fef2f2" : "#f9fafb", I = a === "passed" ? "#10b981" : a === "running" ? "#3b82f6" : a === "failed" ? "#dc2626" : "#9ca3af";
      return /* @__PURE__ */ c.jsxs("div", { style: { display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 12, alignItems: "center", padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", background: N }, children: [
        /* @__PURE__ */ c.jsx("div", { style: { width: 12, height: 12, borderRadius: 9999, background: I } }),
        /* @__PURE__ */ c.jsxs("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: /* @__PURE__ */ c.jsx("div", { style: { fontWeight: 600, fontSize: 14 }, children: l }) }),
          r === "face" && /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center", marginTop: 8 }, children: [
            /* @__PURE__ */ c.jsx("video", { ref: B, muted: !0, playsInline: !0, autoPlay: !0, style: { width: 180, height: 112, background: "#000", borderRadius: 6 } }),
            a === "running" && /* @__PURE__ */ c.jsxs("div", { style: { color: "#6b7280", fontSize: 12 }, children: [
              "Analyzing frames: ",
              O
            ] })
          ] }),
          r === "microphone" && a !== "pending" && /* @__PURE__ */ c.jsx("div", { style: { marginTop: 6, width: 220, height: 8, background: "#e5e7eb", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ c.jsx("div", { style: { width: `${Math.min(100, Math.round(b * 200))}%`, height: 8, background: "#10b981", transition: "width 150ms" } }) }),
          m[r] && /* @__PURE__ */ c.jsx("div", { style: { marginTop: 6, color: "#dc2626", fontSize: 12 }, children: m[r] })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ c.jsx("div", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 9999, background: a === "passed" ? "#111827" : a === "failed" ? "#fee2e2" : "#e5e7eb", color: a === "passed" ? "#fff" : "#111827" }, children: a === "passed" ? "Passed" : a === "running" ? "Checking…" : a === "failed" ? "Failed" : "Pending" }),
          a === "failed" && /* @__PURE__ */ c.jsx("button", { onClick: () => Ve(r), style: { fontSize: 12, padding: "6px 10px", borderRadius: 6, background: "#111827", color: "#fff", border: 0 }, children: "Retry" })
        ] })
      ] }, r);
    }) })
  ] }) });
}
function vn(t) {
  const { onEvent: i, context: o = "coding" } = t || {}, [h, w] = E("idle"), [O, F] = E(void 0), [b, u] = E(0), [m, f] = E(0), p = k(null), D = k(null), j = k(null), Q = k(!1), ue = k(!1), he = k(null), B = k(0), T = k(null), Oe = k(0), Ee = se(() => {
    j.current && cancelAnimationFrame(j.current), j.current = null;
    try {
      p.current?.dispose();
    } catch {
    }
    p.current = null;
    try {
      D.current?.getTracks().forEach((C) => C.stop());
    } catch {
    }
    D.current = null, w("idle");
  }, []), Te = se(
    (C) => {
      const z = Date.now(), Fe = 4, X = 30, oe = ue.current || !!he.current && B.current > X || B.current > X, J = C >= Fe;
      oe && J ? (T.current == null && (T.current = z), z - (T.current ?? z) > 1200 && z - Oe.current > 2e3 && (f((Ve) => Ve + 1), Oe.current = z, T.current = null, i?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: o,
        data: { level: C, lipsActivityPct: B.current, reason: "audio_with_lips" }
      }))) : T.current = null;
    },
    [o, i]
  ), Ae = se(() => {
    try {
      if (!p.current) return;
      const C = p.current.getLevel(), z = Math.max(0, Math.min(100, Math.round(C * 160)));
      u(z), Te(z);
    } finally {
      j.current = requestAnimationFrame(Ae);
    }
  }, [Te]), ee = se(
    async (C) => {
      try {
        F(void 0), f(0), T.current = null, Oe.current = 0;
        let z = C;
        if (!z && typeof window < "u" && window.precheckAudioStream) {
          const oe = window.precheckAudioStream;
          oe?.active && oe.getAudioTracks().length > 0 && (z = oe);
        }
        z || (z = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0, sampleRate: 44100 }
        })), D.current = z;
        const Fe = z.getAudioTracks(), X = Fe.length ? new MediaStream(Fe) : z;
        p.current = ln(X), w("running"), j.current = requestAnimationFrame(Ae);
      } catch (z) {
        w("error"), F(z instanceof Error ? z.message : String(z));
      }
    },
    [Ae]
  ), we = se((C) => {
    Q.current = C;
  }, []), H = se((C) => {
    typeof C.moving == "boolean" && (ue.current = C.moving), typeof C.open < "u" && (he.current = C.open), typeof C.activityPct == "number" && !Number.isNaN(C.activityPct) && (B.current = Math.max(0, Math.min(100, Math.round(C.activityPct))));
  }, []);
  return He(() => Ee, [Ee]), { status: h, error: O, level: b, anomalyCount: m, start: ee, stop: Ee, setFaceDetected: we, setMouthState: H };
}
function It(t) {
  return Math.max(0, Math.min(1, t));
}
function sn(t) {
  let i = 0;
  for (const h in t) i += t[h];
  if (i <= 0) return t;
  const o = {};
  for (const h in t) o[h] = t[h] / i;
  return o;
}
function wn(t = {}) {
  const i = t.alpha ?? 0.45;
  let o = null;
  const h = ["neutral", "happy", "surprised", "focused", "concerned"];
  function w(O, F = {}) {
    const { landmarks: b, headPose: u } = F, { data: m, width: f, height: p } = O;
    let D = 0, j = 0, Q = 0;
    for (let S = 0; S < p; S++)
      for (let _ = 0; _ < f; _++) {
        const P = (S * f + _) * 4, Ce = m[P], ye = m[P + 1], ie = m[P + 2], te = (Ce + ye + ie) / 3;
        if (D += te, _ > 0) {
          const xe = (S * f + (_ - 1)) * 4, We = (m[xe] + m[xe + 1] + m[xe + 2]) / 3;
          j += Math.abs(te - We);
        }
        if (S > 0) {
          const xe = ((S - 1) * f + _) * 4, We = (m[xe] + m[xe + 1] + m[xe + 2]) / 3;
          Math.abs(te - We) > 26 && Q++;
        }
      }
    const ue = Math.max(1, m.length / 4), he = D / ue, B = j / ue, T = Q / ue, Oe = Math.floor(p * 0.6), Ee = Math.floor(f * 0.22), Te = Math.ceil(f * 0.78);
    let Ae = 0, ee = 0, we = 0, H = 0, C = 0, z = 0, Fe = 0, X = 0;
    const oe = Math.max(2, Math.floor((Te - Ee) * 0.18));
    let J = 0, Ie = 0, Ve = 0, qe = 0;
    for (let S = Oe; S < p; S++)
      for (let _ = Ee; _ < Te; _++) {
        const P = (S * f + _) * 4, Ce = m[P], ye = m[P + 1], ie = m[P + 2], te = (Ce + ye + ie) / 3, xe = (m[P - 4] + m[P - 3] + m[P - 2]) / 3, We = (m[P + 4] + m[P + 5] + m[P + 6]) / 3;
        (Math.abs(te - xe) > 24 || Math.abs(te - We) > 24) && Ae++, te < 70 && we++, te > 165 && H++, S < Oe + Math.floor((p - Oe) * 0.4) ? (C += te, z++) : (Fe += te, X++), _ < Ee + oe && ((Math.abs(te - xe) > 24 || Math.abs(te - We) > 24) && J++, Ie++), _ > Te - oe && ((Math.abs(te - xe) > 24 || Math.abs(te - We) > 24) && Ve++, qe++), ee++;
      }
    const Ze = ee ? Ae / ee : 0, Qe = ee ? we / ee : 0, r = ee ? H / ee : 0, l = It((Ze - 0.012) / 0.06), a = z ? C / z : 0, N = X ? Fe / X : 0, I = It((a - N - 6) / 28), fe = Ie ? J / Ie : 0, ze = qe ? Ve / qe : 0, ke = It(((fe + ze) / 2 - 0.018) / 0.05);
    let Ke = 0, Ge = 0;
    const Ye = Math.max(0, Math.floor(p * 0.18)), wt = Math.floor(p * 0.38);
    for (let S = Ye; S < wt; S++)
      for (let _ = 1; _ < f - 1; _++) {
        const P = (S * f + _) * 4, Ce = (m[P] + m[P + 1] + m[P + 2]) / 3, ye = (m[P - 4] + m[P - 3] + m[P - 2]) / 3, ie = (m[P + 4] + m[P + 5] + m[P + 6]) / 3;
        (Math.abs(Ce - ye) > 26 || Math.abs(Ce - ie) > 26) && Ke++, Ge++;
      }
    const dt = Ge ? Ke / Ge : 0, ht = It((dt - 0.012) / 0.06);
    let pe = 0.5;
    if (b && b.length >= 2) {
      const S = b[0], _ = b[1], P = Math.abs(_[1] - S[1]);
      pe = It(1 - P / Math.max(1, p * 0.25));
    }
    const ge = u ? Math.min(45, Math.abs(u.yaw)) : 0, ot = u ? Math.min(45, Math.abs(u.pitch)) : 0, Xe = Math.max(0, 1 - (ge / 35 + ot / 30) / 2), et = It((B - 12) / 18), at = l > 0.22, mt = Qe > 0.12, st = ht > 0.2, pt = !at && !st, xt = {
      neutral: Math.max(1e-3, 0.28 + 0.28 * Xe + 0.06 * pe - 0.16 * l - 0.06 * T + (pt ? 0.08 : 0)),
      happy: Math.max(1e-3, 0.1 + 0.62 * l + 0.08 * I + 0.06 * ke + (mt ? 0.04 : 0) + (r > 0.15 ? 0.04 : 0) - 0.1 * (1 - Xe)),
      surprised: Math.max(1e-3, 0.06 + (at && mt ? 0.16 : 0.02) + 0.45 * l + (u && u.pitch > 10 ? 0.1 : 0)),
      focused: Math.max(1e-3, 0.18 + 0.6 * Xe + 0.22 * et + 0.06 * pe - 0.08 * l + (pt ? 0.06 : 0)),
      concerned: Math.max(1e-3, 0.06 + (st ? 0.16 : 0.02) + 0.45 * ht + (he < 100 ? 0.06 : 0) + (u && u.pitch < -10 ? 0.06 : 0) - 0.06 * (I + l))
    };
    let Ne = sn(xt);
    if (o) {
      const S = { ...o };
      for (const _ of h)
        S[_] = (1 - i) * o[_] + i * Ne[_];
      Ne = sn(S);
    }
    o = Ne;
    let it = "neutral", bt = -1;
    for (const S of h) {
      const _ = Ne[S];
      _ > bt && (bt = _, it = S);
    }
    const Mt = Ne[it];
    return { dominant: it, confidence: Mt, emotions: Ne };
  }
  return { analyze: w };
}
let Kt, Xt;
async function xn(t) {
  if (Kt && Xt) return { FaceLandmarker: Kt, FilesetResolver: Xt };
  const i = await import("./vision_bundle-DrVqKEBn.js");
  return Kt = i.FaceLandmarker, Xt = i.FilesetResolver, { FaceLandmarker: Kt, FilesetResolver: Xt };
}
async function bn(t = {}) {
  const i = t.wasmRoot || "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.15/wasm", o = t.modelAssetPath || "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task", h = t.runningMode || "VIDEO", { FaceLandmarker: w, FilesetResolver: O } = await xn(), F = await O.forVisionTasks(i), b = await w.createFromOptions(F, {
    baseOptions: { modelAssetPath: o },
    runningMode: h,
    numFaces: 1,
    minFaceDetectionConfidence: 0.2,
    minFacePresenceConfidence: 0.2,
    minTrackingConfidence: 0.2,
    outputFaceBlendshapes: !0,
    outputFacialTransformationMatrixes: !0
  }), u = {
    horiz: t.thresholds?.horiz ?? 0.45,
    vert: t.thresholds?.vert ?? 0.65,
    yaw: t.thresholds?.yaw ?? 21,
    pitch: t.thresholds?.pitch ?? 24,
    offDwell: t.thresholds?.offDwell ?? 6,
    onDwell: t.thresholds?.onDwell ?? 5,
    calibFrames: t.thresholds?.calibFrames ?? 45
  };
  let m = { x: 0, y: 0 };
  const f = 0.35;
  let p = 0, D = 0, j = null, Q = 0, ue = 0, he = 0, B = 0, T = 0;
  const Oe = 3, Ee = 2, Te = 3, Ae = 2;
  let ee = !0, we = 0;
  const H = u.calibFrames;
  let C = { x: 0, y: 0 };
  const z = u.offDwell, Fe = u.onDwell;
  async function X(J, Ie) {
    if (!J || !b) return null;
    const Ve = Ie ?? performance.now(), qe = J.videoWidth || J.width || 0, Ze = J.videoHeight || J.height || 0, Qe = J.readyState ?? 0;
    if (!qe || !Ze || Qe < 2)
      return null;
    const r = b.detectForVideo(J, Ve);
    if (!r || !r.faceLandmarks || r.faceLandmarks.length === 0)
      return null;
    const l = r.faceBlendshapes?.[0]?.categories || [], a = (V) => l.find((U) => U.categoryName === V)?.score || 0, N = a("eyeLookInLeft"), I = a("eyeLookOutLeft"), fe = a("eyeLookUpLeft"), ze = a("eyeLookDownLeft"), ke = a("eyeLookInRight"), Ke = a("eyeLookOutRight"), Ge = a("eyeLookUpRight"), Ye = a("eyeLookDownRight"), wt = Ke - ke, dt = N - I, ht = Ge - Ye, pe = fe - ze;
    let ge = (wt + dt) / 2, ot = (ht + pe) / 2;
    ge = Math.max(-1, Math.min(1, ge)), ot = Math.max(-1, Math.min(1, ot)), m.x = f * ge + (1 - f) * m.x, m.y = f * ot + (1 - f) * m.y;
    const Xe = a("jawOpen"), et = a("mouthOpen"), at = a("mouthFunnel"), mt = a("mouthPucker"), st = a("mouthSmileLeft"), pt = a("mouthSmileRight"), xt = a("mouthPressLeft"), Ne = a("mouthPressRight"), it = a("mouthStretchLeft"), bt = a("mouthStretchRight"), Mt = a("mouthLowerDownLeft"), S = a("mouthLowerDownRight"), _ = a("mouthUpperUpLeft"), P = a("mouthUpperUpRight"), Ce = [
      Xe,
      et,
      at,
      mt,
      st,
      pt,
      xt,
      Ne,
      it,
      bt,
      Mt,
      S,
      _,
      P
    ];
    let ye = 0;
    if (j != null)
      for (let V = 0; V < Ce.length; V++) ye += Math.abs(Ce[V] - j[V]);
    j = Ce, Q = 0.3 * ye + 0.7 * Q;
    let ie = Math.max(et, Xe);
    const te = Math.max(0, (Mt + S + _ + P) / 4);
    ie = Math.max(ie, te), ie = Math.max(0, Math.min(1, ie));
    const xe = ie > 0.35, We = Q > 0.06;
    xe ? (ue++, he = Math.max(0, he - 1)) : (he++, ue = Math.max(0, ue - 1)), We ? (B++, T = Math.max(0, T - 1)) : (T++, B = Math.max(0, B - 1));
    const ct = ue >= Oe ? !0 : he >= Ee ? !1 : void 0, Je = B >= Te ? !0 : T >= Ae ? !1 : void 0;
    ee && (Math.abs(m.x) < 0.6 && Math.abs(m.y) < 0.6 && (C.x = (C.x * we + m.x) / (we + 1), C.y = (C.y * we + m.y) / (we + 1), we += 1), we >= H && (ee = !1));
    const de = m.x - C.x, me = m.y - C.y;
    let De, be;
    try {
      const V = r.facialTransformationMatrixes?.[0];
      if (V && V.rows === 4 && V.columns === 4) {
        const U = V.data, At = U[0], yt = U[1], Dt = U[2], zt = U[4], e = U[5], n = U[6], s = U[8], v = U[9], A = U[10];
        be = Math.atan2(-v, A) * (180 / Math.PI), De = Math.atan2(-Dt, At) * (180 / Math.PI);
      }
    } catch {
    }
    const Ct = Math.abs(de), St = Math.abs(me), _t = Ct > u.horiz, Rt = St > u.vert, gt = De !== void 0 && Math.abs(De) > u.yaw || be !== void 0 && Math.abs(be) > u.pitch, Ot = _t || Rt || gt;
    let lt = !0;
    return Ot ? (p += 1, D = Math.max(0, D - 1)) : (D += 1, p = Math.max(0, p - 1)), p >= z && (lt = !1), D >= Fe && (lt = !0), {
      onScreen: lt,
      gaze: { x: de, y: me },
      confidence: Math.min(1, 0.65 + 0.35 * Math.max(Ct, St)),
      head: { yaw: De, pitch: be },
      debug: {
        lIn: N,
        lOut: I,
        lUp: fe,
        lDn: ze,
        rIn: ke,
        rOut: Ke,
        rUp: Ge,
        rDn: Ye,
        gx: ge,
        gy: ot,
        emaX: m.x,
        emaY: m.y,
        yaw: De ?? 0,
        pitch: be ?? 0,
        offFrames: p,
        onFrames: D,
        baseX: C.x,
        baseY: C.y,
        absX: Ct,
        absY: St,
        jawOpen: Xe,
        mouthOpenBS: et,
        activity: Q,
        openScore: ie
      },
      mouth: {
        open: ct ?? ie > 0.5,
        openScore: ie,
        moving: Je ?? Q > 0.08,
        activity: Q
      }
    };
  }
  async function oe() {
    try {
      b?.close?.();
    } catch {
    }
  }
  return { ready: !0, estimate: X, close: oe };
}
function Mn({ monitoringStatus: t, sessionData: i, onStatusChange: o, onUpdateSession: h, onAddEvent: w, onAddSnapshot: O, gazeThresholds: F }) {
  const [b, u] = E({ x: typeof window < "u" ? window.innerWidth - 280 : 0, y: typeof window < "u" ? window.innerHeight - 400 : 0 }), [m, f] = E(!1), [p, D] = E({ x: 0, y: 0 }), [j, Q] = E(0), [ue, he] = E(!1), [B, T] = E(null), [Oe, Ee] = E(null), [Te, Ae] = E(null), [ee, we] = E(0), [H, C] = E(0), [z, Fe] = E([]), [X, oe] = E(0), [J, Ie] = E(0), [Ve, qe] = E(0), [Ze, Qe] = E(0), [r, l] = E(0), [a, N] = E(!1), [I, fe] = E(null), [ze, ke] = E(null), [Ke, Ge] = E(!1), [Ye, wt] = E(0), [dt, ht] = E(null), [pe, ge] = E(null), [ot, Xe] = E(0), [et, at] = E(0), [mt, st] = E(0), [pt, xt] = E(null), [Ne, it] = E(0), [bt, Mt] = E(0), S = k(null), _ = k(null), P = k(null), Ce = k(null), ye = k(null), ie = k(null), te = k(null), xe = k(!1), We = k(0), ct = k(0), Je = k("none"), de = k({ noFace: 0, multipleFaces: 0 }), me = k({ noFace: !1, multipleFaces: !1, gazeOff: !1 }), De = k(!1), be = k({ offFrames: 0, onFrames: 0 }), Ct = F?.fallback?.offFrames ?? 8, St = F?.fallback?.onFrames ?? 5, _t = {
    yaw: F?.fallback?.yaw ?? 32,
    pitch: F?.fallback?.pitch ?? 26,
    centerOffset: F?.fallback?.centerOffset ?? 0.35
  }, Rt = k(null), gt = k([]), Ot = k(0), lt = k(!1), V = k({ yaw: 0, pitch: 0, roll: 0, initialized: !1 }), U = k({ isGood: !0, goodStreak: 0, poorStreak: 0 }), At = 8, yt = 0.25, { level: Dt, anomalyCount: zt, start: e, stop: n, setFaceDetected: s, setMouthState: v } = vn({
    context: "coding",
    onEvent: (d) => w?.({ ...d, timestamp: Date.now() })
  });
  He(() => we(Dt), [Dt]), He(() => C(zt), [zt]), He(() => {
    Rt.current = wn({ alpha: 0.5 });
  }, []);
  const A = se((d, y) => {
    const x = y.data, Z = y.width, Y = y.height, L = Math.max(0, Math.floor(d.x - d.width * 0.2)), re = Math.min(Z, Math.floor(d.x + d.width * 1.2)), Re = Math.min(Y - 1, Math.floor(d.y + d.height * 1.05)), ce = Math.min(Y, Re + Math.floor(d.height * 1.6));
    if (ce <= Re || re <= L) return { isProfessional: !1, hasShirt: !1, confidence: 0.4, details: "Insufficient torso ROI" };
    let G = 0, $ = 0, tt = 0, ft = 0, Ft = 0;
    const Nt = Math.floor((L + re) / 2);
    for (let le = Re; le < ce; le++)
      for (let Le = L; Le < re; Le++) {
        const kt = (le * Z + Le) * 4, Ue = x[kt], _e = x[kt + 1], $e = x[kt + 2], K = Math.max(Ue, _e, $e), Be = Math.min(Ue, _e, $e), vt = K, Tt = K ? (K - Be) / K : 0;
        if (vt > 60 && vt < 210 && Tt < 0.45 && Ue > 40 && _e > 20 && $e > 20 && Ue > $e) continue;
        if ((Ue + _e + $e) / 3 < 105 && G++, (Math.abs(Ue - _e) > 28 || Math.abs(_e - $e) > 28) && $++, tt += Tt, ft++, le < Re + (ce - Re) * 0.35 && Math.abs(Le - Nt) < Math.max(6, Math.floor(d.width * 0.08)) && Le > L + 1 && Le < re - 1) {
          const Wt = (le * Z + (Le - 1)) * 4, Lt = (le * Z + (Le + 1)) * 4, Yt = (Ue + _e + $e) / 3, tn = (x[Wt] + x[Wt + 1] + x[Wt + 2]) / 3, $t = (x[Lt] + x[Lt + 1] + x[Lt + 2]) / 3;
          (Math.abs(Yt - tn) > 28 || Math.abs(Yt - $t) > 28) && Ft++;
        }
      }
    if (!ft) return { isProfessional: !1, hasShirt: !1, confidence: 0.4, details: "Insufficient torso pixels" };
    const Pt = G / ft, je = $ / ft, g = tt / ft, q = Ft / ft, Pe = Pt > 0.18 || g < 0.35, nt = Pt > 0.35 && je < 0.22 || g < 0.28 && je < 0.18 || q > 2e-3, rt = Math.max(0.5, Math.min(0.95, 0.55 + (Pe ? 0.15 : 0) + (nt ? 0.15 : 0) - je * 0.2));
    return { isProfessional: nt, hasShirt: Pe, confidence: rt, details: nt ? "Professional attire (solid/low-saturation)" : Pe ? "Casual attire" : "Torso not clearly visible" };
  }, []), W = se((d) => {
    if (!d.landmarks || d.landmarks.length < 4) return null;
    const y = d.landmarks, x = y[0], Z = y[1], Y = y[2], L = y[3] ?? [(Z[0] + x[0]) / 2, Math.max(Z[1], x[1]) + d.height * 0.2], re = [(Z[0] + x[0]) / 2, (Z[1] + x[1]) / 2], Re = Z[0] - x[0], ce = Z[1] - x[1], G = Math.max(1, Math.hypot(Re, ce)), $ = Math.atan2(ce, Re) * 180 / Math.PI, tt = Math.hypot(Y[0] - x[0], Y[1] - x[1]), ft = Math.hypot(Y[0] - Z[0], Y[1] - Z[1]), Ft = (tt - ft) / G, Nt = Math.max(-45, Math.min(45, Ft * 90)), Pt = Math.max(1, Y[1] - re[1]), je = Math.max(1, (L[1] ?? re[1]) - Y[1]), g = (Pt - je) / d.height, q = Math.max(-45, Math.min(45, g * 180)), Pe = Math.abs($) > 20, nt = Math.abs(Ft) > 0.18, rt = Math.abs(q) > 15, le = nt || rt || Pe, Le = Math.max(0.5, Math.min(1, Math.max(
      Math.abs(Ft) * 2,
      Math.abs($) / 30,
      Math.abs(q) / 30
    )));
    return { yaw: Nt, pitch: q, roll: $, isHeadTurned: le, confidence: Le };
  }, []), R = se((d = 0.8) => {
    const y = S.current, x = _.current;
    if (!y || !x) return null;
    const Z = y.videoWidth || 320, Y = y.videoHeight || 240;
    if (y.readyState < 2) return null;
    x.width = Z, x.height = Y;
    const L = x.getContext("2d", { willReadFrequently: !0 });
    if (!L) return null;
    L.drawImage(y, 0, 0, Z, Y);
    try {
      return x.toDataURL("image/jpeg", d);
    } catch {
      return null;
    }
  }, []), M = se((d) => {
    if (O) {
      O(d);
      return;
    }
    if (h) {
      let x = [...i?.snapshots || [], d];
      x.length > 50 && (x = x.slice(x.length - 50)), h({ snapshots: x });
    }
  }, [O, h, i?.snapshots]), Me = se(() => {
    if (Ot.current >= 5 || lt.current) return;
    lt.current = !0;
    const d = R(0.85);
    if (d) {
      M({ timestamp: Date.now(), type: "random_webcam", image: d, context: "Random webcam snapshot during coding" }), Ot.current += 1, lt.current = !1;
      return;
    }
    const y = window.setTimeout(() => {
      const x = R(0.85);
      x && (M({ timestamp: Date.now(), type: "random_webcam", image: x, context: "Random webcam snapshot (retry) during coding" }), Ot.current += 1), lt.current = !1;
    }, 3e3);
    gt.current.push(y);
  }, [M, R]), ne = se(async () => {
    try {
      const d = await import("./index-2kM27Pi_.js"), y = await import("./blazeface.esm-D5KORnOe.js");
      d.ready && await d.ready();
      const x = await y.load();
      return Ce.current = x, !0;
    } catch (d) {
      return console.error("[widget] Failed to init face detection:", d), !1;
    }
  }, []), ae = (d, y) => {
    const x = Math.max(d.x, y.x), Z = Math.max(d.y, y.y), Y = Math.min(d.x + d.width, y.x + y.width), L = Math.min(d.y + d.height, y.y + y.height), re = Math.max(0, Y - x), Re = Math.max(0, L - Z), ce = re * Re, G = d.width * d.height + y.width * y.height - ce;
    return G > 0 ? ce / G : 0;
  }, ve = se(async () => {
    if (De.current) {
      ye.current = requestAnimationFrame(ve);
      return;
    }
    if (De.current = !0, !S.current || !_.current || !Ce.current) {
      ye.current = requestAnimationFrame(ve), De.current = !1;
      return;
    }
    const d = S.current, y = _.current;
    if (d.readyState !== 4) {
      ye.current = requestAnimationFrame(ve), De.current = !1;
      return;
    }
    try {
      const x = await Ce.current.estimateFaces(d, !1), Z = d.videoWidth || d.width || y.width, Y = d.videoHeight || d.height || y.height, L = 0.02, re = 0.6, ce = x.map((g) => {
        const [q, Pe] = g.topLeft, [nt, rt] = g.bottomRight;
        return { x: q, y: Pe, width: nt - q, height: rt - Pe, confidence: g.probability?.[0] || 0.8, landmarks: g.landmarks };
      }).filter((g) => {
        if (g.width <= 0 || g.height <= 0 || (g.confidence || 0) < 0.6) return !1;
        const q = g.width * g.height, Pe = q / (Z * Y);
        if (Pe < L || Pe > re) return !1;
        const nt = Math.max(0, g.x), rt = Math.max(0, g.y), le = Math.min(Z, g.x + g.width), Le = Math.min(Y, g.y + g.height), kt = Math.max(0, le - nt), Ue = Math.max(0, Le - rt);
        if (kt * Ue / Math.max(1, q) < 0.5) return !1;
        const $e = g.width / g.height;
        return !($e < 0.5 || $e > 2);
      });
      ce.sort((g, q) => q.confidence - g.confidence);
      const G = [];
      ce.forEach((g) => {
        G.some((Pe) => ae(g, Pe) > 0.45) || G.push(g);
      }), Q(G.length), Fe(G), he(G.length === 1), s(G.length > 0);
      const $ = Date.now(), tt = G.length === 0 ? "none" : G.length === 1 ? "single" : "multiple";
      tt === "multiple" ? de.current.multipleFaces += 1 : de.current.multipleFaces = Math.max(0, de.current.multipleFaces - 1), tt === "none" ? de.current.noFace += 1 : de.current.noFace = Math.max(0, de.current.noFace - 1);
      const ft = 3, Ft = 2, Nt = 3, Pt = 2;
      let je = Je.current;
      if (Je.current !== "multiple" ? de.current.multipleFaces >= ft ? je = "multiple" : je = tt === "none" ? "single" : tt : de.current.multipleFaces <= Ft && (je = tt === "multiple" ? "multiple" : "single"), je !== "none" ? de.current.noFace >= Nt && (je = "none") : de.current.noFace <= Pt && (je = tt === "none" ? "none" : "single"), je === "multiple") {
        if (Je.current !== "multiple" && (ht($), st((g) => g + 1), !me.current.multipleFaces)) {
          me.current.multipleFaces = !0, w?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: G.length }, timestamp: $ });
          const g = R(0.85);
          g && M({ timestamp: $, type: "violation_trigger", image: g, context: "Multiple faces detected" });
        }
      } else {
        if (Je.current === "multiple" && dt !== null) {
          const g = $ - dt;
          Xe((q) => q + g), ht(null);
        }
        me.current.multipleFaces = !1;
      }
      if (je === "none") {
        if (Je.current !== "none" && (xt($), it((g) => g + 1), !me.current.noFace)) {
          me.current.noFace = !0, w?.({ eventType: "face_detection", severity: "critical", context: "coding", data: { reason: "no_face" }, timestamp: $ });
          const g = R(0.85);
          g && M({ timestamp: $, type: "violation_trigger", image: g, context: "No face detected" });
        }
      } else {
        if (Je.current === "none" && pt !== null) {
          const g = $ - pt;
          Mt((q) => q + g), xt(null);
        }
        me.current.noFace = !1;
      }
      if (Je.current = je, G.length === 1) {
        const g = G[0], q = y.getContext("2d", { willReadFrequently: !0 });
        if (q) {
          q.drawImage(d, 0, 0, y.width, y.height);
          const Pe = q.getImageData(0, 0, y.width, y.height), nt = q.getImageData(g.x, g.y, g.width, g.height);
          let rt = { isGoodPosture: !0, shoulderAlignment: 0, headTilt: 0, confidence: 0.7 };
          const le = W(g);
          if (le) {
            V.current.initialized ? (V.current.yaw = yt * le.yaw + (1 - yt) * V.current.yaw, V.current.pitch = yt * le.pitch + (1 - yt) * V.current.pitch, V.current.roll = yt * le.roll + (1 - yt) * V.current.roll) : V.current = { yaw: le.yaw, pitch: le.pitch, roll: le.roll, initialized: !0 };
            const K = V.current.yaw, Be = V.current.pitch, vt = V.current.roll, Tt = Math.abs(vt) <= 10 && Math.abs(Be) <= 12 && Math.abs(K) <= 18;
            Tt !== U.current.isGood ? Tt ? (U.current.goodStreak += 1, U.current.poorStreak = 0, U.current.goodStreak >= At && (U.current.isGood = !0, U.current.goodStreak = 0)) : (U.current.poorStreak += 1, U.current.goodStreak = 0, U.current.poorStreak >= At && (U.current.isGood = !1, U.current.poorStreak = 0)) : (U.current.goodStreak = 0, U.current.poorStreak = 0), rt = {
              isGoodPosture: U.current.isGood,
              // Use roll (tilt) as a proxy for shoulder alignment; smaller magnitude means better alignment
              shoulderAlignment: -vt,
              headTilt: Be,
              confidence: Math.min(1, 0.6 + 0.4 * le.confidence)
            };
          }
          let Le = null;
          if (Rt.current) {
            const K = Rt.current.analyze(nt, { landmarks: g.landmarks, headPose: le ?? null });
            Le = { dominant: K.dominant, confidence: K.confidence, emotions: K.emotions };
          }
          const kt = A(g, Pe), Ue = le ?? W(g);
          T(rt), Ee(Le), Ae(kt);
          let _e = null;
          if (te.current && d)
            try {
              const K = await te.current.estimate(d, performance?.now?.() || void 0);
              if (_e = K?.onScreen ?? null, K?.mouth) {
                ke(K.mouth.open), Ge(K.mouth.moving);
                const Be = Math.round(Math.min(1, Math.max(0, K.mouth.activity)) * 100);
                wt(Be);
                try {
                  v({ open: K.mouth.open, moving: K.mouth.moving, activityPct: Be });
                } catch {
                }
              }
              if (_e !== null && fe(_e), _e === !1 && !a && Date.now() - ct.current > 3e3)
                l((Be) => Be + 1), N(!0), ge($), ct.current = Date.now(), fe(!1), me.current.gazeOff || (me.current.gazeOff = !0, w?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0, headPose: Ue, gaze: K }, timestamp: $ }));
              else if (_e === !0 && a) {
                if (pe !== null) {
                  const Be = $ - pe;
                  at((vt) => vt + Be), ge(null);
                }
                N(!1), me.current.gazeOff = !1, fe(!0);
              }
            } catch {
              _e = null;
            }
          if (_e === null) {
            const K = y.width, Be = y.height, vt = g.x + g.width / 2, Tt = g.y + g.height / 2, Qt = Math.hypot((vt - K / 2) / K, (Tt - Be / 2) / Be), en = Ue?.yaw ?? 0, Wt = Ue?.pitch ?? 0, Lt = Math.abs(en) > _t.yaw || Math.abs(Wt) > _t.pitch, Yt = Qt > _t.centerOffset;
            Lt || Yt ? (be.current.offFrames += 1, be.current.onFrames = Math.max(0, be.current.onFrames - 1)) : (be.current.onFrames += 1, be.current.offFrames = Math.max(0, be.current.offFrames - 1));
            const $t = be.current.offFrames >= Ct, nn = be.current.onFrames >= St;
            if (fe((Ut) => nn ? !0 : $t ? !1 : Ut), $t && !a && Date.now() - ct.current > 3e3)
              l((Ut) => Ut + 1), N(!0), ge($), ct.current = Date.now(), fe(!1), me.current.gazeOff || (me.current.gazeOff = !0, w?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0, reason: Lt ? "head_pose" : "center_offset", headPose: Ue }, timestamp: $ }));
            else if (nn && a) {
              if (pe !== null) {
                const Ut = $ - pe;
                at((fn) => fn + Ut), ge(null);
              }
              N(!1), me.current.gazeOff = !1, fe(!0);
            }
          }
          const $e = G.length === 0 || G.length > 1;
          if (h && ($e || $ - We.current >= 5e3)) {
            if ($e) {
              const K = R(0.85);
              K && M({ timestamp: $, type: "violation_trigger", image: K, context: G.length === 0 ? "No face detected" : "Multiple faces detected" });
            }
            h({ postureAnalysis: rt, attireAnalysis: kt }), We.current = $;
          }
        }
      } else {
        if (T(null), Ee(null), Ae(null), a) {
          if (pe !== null) {
            const g = $ - pe;
            at((q) => q + g), ge(null);
          }
          N(!1);
        }
        fe(null);
      }
      G.length === 0 ? o?.("violation") : G.length > 1 ? o?.("warning") : o?.("optimal");
    } catch (x) {
      console.error("[widget] Face detection error:", x);
    } finally {
      ye.current = requestAnimationFrame(ve), De.current = !1;
    }
  }, [A, o, h, i?.snapshots, a, dt, pe, s]);
  He(() => {
    C(0);
  }, []), He(() => {
    (async () => {
      try {
        const L = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } },
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
        });
        S.current && (S.current.srcObject = L, S.current.onloadedmetadata = async () => {
          try {
            await S.current.play?.();
          } catch {
          }
          try {
            const ce = S.current;
            ce?.videoWidth && ce?.videoHeight && (ce.width = ce.videoWidth, ce.height = ce.videoHeight);
          } catch {
          }
        });
        let re = null;
        const Re = L.getAudioTracks();
        Re.length > 0 && (re = new MediaStream(Re), ie.current = re), await ne();
        try {
          te.current = await bn({ thresholds: F?.mediapipe });
        } catch {
        }
        re && await e(re), ye.current = requestAnimationFrame(ve);
      } catch {
        o?.("violation");
      }
    })();
    const y = 5, x = [60 * 1e3, 5 * 60 * 1e3], Z = Math.max(0, y - x.length), Y = [...x];
    if (Z > 0)
      for (let Re = 0; Re < Z; Re++) {
        const ce = 42e4 + Math.random() * 18e4, G = (Math.random() - 0.5) * 30 * 1e3;
        Y.push(Math.max(0, Math.floor(ce + G)));
      }
    Y.sort((L, re) => L - re);
    for (let L = 1; L < Y.length; L++)
      Math.abs(Y[L] - Y[L - 1]) < 10 * 1e3 && (Y[L] += 12 * 1e3);
    return Y.forEach((L) => {
      const re = window.setTimeout(() => Me(), L);
      gt.current.push(re);
    }), () => {
      xe.current = !0, ye.current && cancelAnimationFrame(ye.current), S.current?.srcObject && S.current.srcObject.getTracks().forEach((re) => re.stop()), ie.current && ie.current.getTracks().forEach((L) => L.stop()), n(), ie.current = null, te.current?.close?.(), gt.current.forEach((L) => window.clearTimeout(L)), gt.current = [];
    };
  }, []);
  const Et = (d) => {
    f(!0);
    const y = P.current?.getBoundingClientRect();
    y && D({ x: d.clientX - y.left, y: d.clientY - y.top });
  }, ut = (d) => {
    if (m) {
      const y = Math.max(0, Math.min((typeof window < "u" ? window.innerWidth : 0) - 280, d.clientX - p.x)), x = Math.max(0, Math.min((typeof window < "u" ? window.innerHeight : 0) - 400, d.clientY - p.y));
      u({ x: y, y: x });
    }
  }, Se = () => f(!1);
  He(() => {
    if (m)
      return document.addEventListener("mousemove", ut), document.addEventListener("mouseup", Se), () => {
        document.removeEventListener("mousemove", ut), document.removeEventListener("mouseup", Se);
      };
  }, [m, p]);
  const jt = () => {
    document.hidden && Ie((d) => {
      const y = d + 1;
      return w?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { when: Date.now() }, timestamp: Date.now() }), y;
    });
  }, Vt = () => oe((d) => d + 1), Gt = (d) => {
    qe((y) => y + 1), w?.({ eventType: "keystroke", severity: "info", context: "coding", data: {}, timestamp: Date.now() }), (d.ctrlKey || d.metaKey) && (d.key === "c" || d.key === "x" || d.key === "v") && (Qe((y) => y + 1), d.preventDefault(), w?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, key: d.key }, timestamp: Date.now() }));
  };
  He(() => (document.addEventListener("visibilitychange", jt), window.addEventListener("blur", Vt), document.addEventListener("keydown", Gt), () => {
    document.removeEventListener("visibilitychange", jt), window.removeEventListener("blur", Vt), document.removeEventListener("keydown", Gt);
  }), []);
  const un = j === 0 ? "#ef4444" : j > 1 ? "#f59e0b" : "#22c55e";
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: P,
      onMouseDown: Et,
      style: {
        position: "fixed",
        left: b.x,
        top: b.y,
        zIndex: 9999,
        width: 288,
        cursor: "move",
        border: `2px solid ${un}`,
        borderRadius: 8,
        background: "#fff",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        padding: 12,
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ c.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: /* @__PURE__ */ c.jsx("div", { style: { fontSize: 12, fontWeight: 600 }, children: j === 0 ? "No Face" : j > 1 ? "Multiple Faces" : ue ? "Optimal" : "Good" }) }),
        /* @__PURE__ */ c.jsxs("div", { style: { position: "relative", background: "#000", borderRadius: 4, overflow: "hidden" }, children: [
          /* @__PURE__ */ c.jsx("video", { ref: S, autoPlay: !0, muted: !0, playsInline: !0, style: { width: "100%", height: 128, objectFit: "cover" } }),
          /* @__PURE__ */ c.jsx("canvas", { ref: _, width: 320, height: 240, style: { display: "none" } })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { style: { marginTop: 8, fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }, children: [
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Faces: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: j === 1 ? "#16a34a" : "#ef4444" }, children: j })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "No Face: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: Ne > 0 ? "#ef4444" : "#16a34a" }, children: Ne })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Multiple: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: mt > 0 ? "#ef4444" : "#16a34a" }, children: mt })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Posture: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: B?.isGoodPosture ? "#16a34a" : "#f59e0b" }, children: B?.isGoodPosture ? "Good" : "Poor" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Attire: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: Te?.isProfessional ? "#16a34a" : "#f59e0b" }, children: Te?.isProfessional ? "Professional" : "Casual" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Emotion: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: "#3b82f6" }, children: Oe?.dominant || "Unknown" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Gaze: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: I === null ? "#9ca3af" : I ? "#16a34a" : "#ef4444" }, children: I === null ? "--" : I ? "On" : "Off" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Mouth: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: ze === null ? "#9ca3af" : ze ? "#16a34a" : "#111827" }, children: ze === null ? "--" : ze ? Ke ? "Open+Moving" : "Open" : Ke ? "Closed+Moving" : "Closed" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Lip Act: ",
            /* @__PURE__ */ c.jsxs("span", { style: { color: Ye > 30 ? "#16a34a" : Ye > 10 ? "#f59e0b" : "#9ca3af" }, children: [
              Ye,
              "%"
            ] }),
            /* @__PURE__ */ c.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ c.jsx("div", { style: { width: `${Math.min(Ye, 100)}%`, height: 6, transition: "width 100ms", background: Ye > 30 ? "#16a34a" : Ye > 10 ? "#f59e0b" : "#9ca3af" } }) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Audio: ",
            /* @__PURE__ */ c.jsxs("span", { style: { color: ee > 50 ? "#16a34a" : ee > 20 ? "#f59e0b" : "#ef4444" }, children: [
              ee,
              "%"
            ] }),
            /* @__PURE__ */ c.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ c.jsx("div", { style: { width: `${Math.min(ee, 100)}%`, height: 6, transition: "width 100ms", background: ee > 50 ? "#16a34a" : ee > 20 ? "#f59e0b" : "#ef4444" } }) })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Audio Alerts: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: H > 0 ? "#ef4444" : "#16a34a" }, children: H })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Unfocus: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: X > 0 ? "#ef4444" : "#16a34a" }, children: X })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Tab Switch: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: J > 0 ? "#ef4444" : "#16a34a" }, children: J })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Keystrokes: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: "#3b82f6" }, children: Ve })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Copy Attempts: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: Ze > 0 ? "#ef4444" : "#16a34a" }, children: Ze })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            "Gaze Off: ",
            /* @__PURE__ */ c.jsx("strong", { style: { color: r > 0 ? "#ef4444" : "#16a34a" }, children: r })
          ] })
        ] })
      ]
    }
  );
}
const Jt = (t, i) => t.length > i ? t.slice(t.length - i) : t, Sn = (t, i) => ({
  sessionId: t,
  sessionType: "coding-assessment",
  startTime: Date.now(),
  preCheckResults: i,
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
function Rn(t, i) {
  switch (i.eventType) {
    case "tab_switch":
      return { ...t, tabSwitches: t.tabSwitches + 1, violationCount: t.violationCount + 1 };
    case "audio_anomaly":
      return { ...t, audioAnomalies: t.audioAnomalies + 1, violationCount: t.violationCount + 1 };
    case "code_execution":
      return { ...t, codeExecutionCount: t.codeExecutionCount + 1 };
    case "face_detection": {
      const o = i.data?.reason;
      return o === "no_face" ? { ...t, noFaceIncidents: t.noFaceIncidents + 1, violationCount: t.violationCount + 1 } : o === "multiple_faces" ? { ...t, multipleFaceIncidents: t.multipleFaceIncidents + 1, violationCount: t.violationCount + 1 } : t;
    }
    case "gaze_tracking": {
      const o = i.data?.type === "focus_break", h = Number(i.data?.focusTimeMs) || 0, w = i.data?.offscreen === !0;
      return {
        ...t,
        focusBreaks: t.focusBreaks + (o ? 1 : 0),
        gazeDuration: t.gazeDuration + h,
        unfocusEvents: t.unfocusEvents + (o ? 1 : 0),
        gazeOffScreenIncidents: t.gazeOffScreenIncidents + (w ? 1 : 0),
        violationCount: t.violationCount + (o || w ? 1 : 0)
      };
    }
    case "keystroke": {
      const o = i.data?.copyCutPaste === !0;
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
function En(t, i) {
  switch (i.type) {
    case "INIT":
      return { ...i.payload };
    case "SET_FIELDS": {
      const o = { ...t, ...i.payload };
      return o.snapshots && (o.snapshots = Jt(o.snapshots, 50)), o.liveEvents && (o.liveEvents = Jt(o.liveEvents, 200)), o;
    }
    case "ADD_EVENTS": {
      const o = Jt([...t.liveEvents, ...i.events], 200), h = i.events.reduce(Rn, t.sessionStats);
      return { ...t, liveEvents: o, sessionStats: h };
    }
    case "ADD_SNAPSHOT": {
      const o = Jt([...t.snapshots, i.snapshot], 50);
      return { ...t, snapshots: o };
    }
    case "TICK": {
      const o = Math.max(0, i.now - t.startTime);
      return o === t.sessionStats.totalDuration ? t : { ...t, sessionStats: { ...t.sessionStats, totalDuration: o } };
    }
    case "COMPLETE": {
      const o = i.endTime ?? Date.now();
      return { ...t, sessionStats: { ...t.sessionStats, totalDuration: Math.max(0, o - t.startTime) } };
    }
    default:
      return t;
  }
}
function Fn(t) {
  const [i, o] = E(null), h = se((f) => {
    o((p) => p && En(p, f));
  }, []), w = k(null), O = k(0), F = k(null), b = se((f) => {
    const p = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    w.current = p;
    const D = sessionStorage.getItem(p);
    if (D)
      try {
        const Q = JSON.parse(D);
        return o(Q), p;
      } catch {
      }
    const j = Sn(p, f);
    return o(j), sessionStorage.setItem(p, JSON.stringify(j)), p;
  }, [t?.sessionId]), u = se((f) => {
    const p = f ?? i;
    if (!(!p || !w.current))
      try {
        sessionStorage.setItem(w.current, JSON.stringify(p)), O.current = Date.now();
      } catch (D) {
        console.error("[session] persist failed", D);
      }
  }, [i]);
  return He(() => {
    if (!i) return;
    const p = Date.now() - O.current;
    return p < 1e3 ? (F.current && clearTimeout(F.current), F.current = setTimeout(() => u(), 1e3 - p)) : u(), () => {
      F.current && clearTimeout(F.current);
    };
  }, [i, u]), He(() => {
    const f = () => u();
    return window.addEventListener("visibilitychange", f), window.addEventListener("beforeunload", f), () => {
      window.removeEventListener("visibilitychange", f), window.removeEventListener("beforeunload", f);
    };
  }, [u]), He(() => {
    if (!i) return;
    const f = setInterval(() => h({ type: "TICK", now: Date.now() }), 1e3);
    return () => clearInterval(f);
  }, [i, h]), dn(() => ({
    state: i,
    sessionId: w.current,
    init: b,
    setFields: (f) => h({ type: "SET_FIELDS", payload: f }),
    addEvents: (f) => h({ type: "ADD_EVENTS", events: f }),
    addSnapshot: (f) => h({ type: "ADD_SNAPSHOT", snapshot: f }),
    complete: () => h({ type: "COMPLETE" })
  }), [i, h, b]);
}
function Cn({ onSessionStart: t, onSessionUpdate: i, onEvent: o }) {
  const [h, w] = E(null), [O, F] = E("optimal"), b = Fn();
  return He(() => {
    if (h && !b.state) {
      const u = b.init(h);
      t?.(u, h);
    }
  }, [h, b]), h ? /* @__PURE__ */ c.jsx(
    Mn,
    {
      monitoringStatus: O,
      sessionData: b.state ?? void 0,
      onStatusChange: (u) => F(u),
      onUpdateSession: (u) => {
        b.setFields(u), i?.(u);
      },
      onAddSnapshot: (u) => b.addSnapshot(u),
      onAddEvent: (u) => {
        b.addEvents([{ ...u, timestamp: u.timestamp ?? Date.now() }]), o?.(u);
      },
      gazeThresholds: {
        mediapipe: { horiz: 0.35, vert: 0.5, yaw: 20, pitch: 18, offDwell: 5, onDwell: 3, calibFrames: 24 },
        fallback: { yaw: 24, pitch: 20, centerOffset: 0.22, offFrames: 5, onFrames: 3 }
      }
    }
  ) : /* @__PURE__ */ c.jsx(
    yn,
    {
      onComplete: (u) => w(u),
      onError: () => w(null)
    }
  );
}
export {
  Mn as FloatingVideo,
  yn as Prechecks,
  Cn as ProctoringWidget
};
