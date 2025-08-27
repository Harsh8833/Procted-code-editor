import cn, { useState as S, useRef as E, useCallback as se, useEffect as Be, useMemo as dn } from "react";
var Qt = { exports: {} }, Wt = {};
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
  if (rn) return Wt;
  rn = 1;
  var t = cn, s = Symbol.for("react.element"), o = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, g = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(w, f, d) {
    var i, p = {}, j = null, P = null;
    d !== void 0 && (j = "" + d), f.key !== void 0 && (j = "" + f.key), f.ref !== void 0 && (P = f.ref);
    for (i in f) m.call(f, i) && !k.hasOwnProperty(i) && (p[i] = f[i]);
    if (w && w.defaultProps) for (i in f = w.defaultProps, f) p[i] === void 0 && (p[i] = f[i]);
    return { $$typeof: s, type: w, key: j, ref: P, props: p, _owner: g.current };
  }
  return Wt.Fragment = o, Wt.jsx = R, Wt.jsxs = R, Wt;
}
var Ut = {};
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
    var t = cn, s = Symbol.for("react.element"), o = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), w = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), J = Symbol.iterator, le = "@@iterator";
    function de(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = J && e[J] || e[le];
      return typeof n == "function" ? n : null;
    }
    var V = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(e) {
      {
        for (var n = arguments.length, c = new Array(n > 1 ? n - 1 : 0), v = 1; v < n; v++)
          c[v - 1] = arguments[v];
        _e("error", e, c);
      }
    }
    function _e(e, n, c) {
      {
        var v = V.ReactDebugCurrentFrame, D = v.getStackAddendum();
        D !== "" && (n += "%s", c = c.concat([D]));
        var B = c.map(function(_) {
          return String(_);
        });
        B.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, B);
      }
    }
    var be = !1, Oe = !1, Te = !1, Z = !1, we = !1, G;
    G = Symbol.for("react.module.reference");
    function C(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === k || we || e === g || e === d || e === i || Z || e === P || be || Oe || Te || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === p || e.$$typeof === R || e.$$typeof === w || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === G || e.getModuleId !== void 0));
    }
    function W(e, n, c) {
      var v = e.displayName;
      if (v)
        return v;
      var D = n.displayName || n.name || "";
      return D !== "" ? c + "(" + D + ")" : c;
    }
    function Me(e) {
      return e.displayName || "Context";
    }
    function Y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case o:
          return "Portal";
        case k:
          return "Profiler";
        case g:
          return "StrictMode";
        case d:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var n = e;
            return Me(n) + ".Consumer";
          case R:
            var c = e;
            return Me(c._context) + ".Provider";
          case f:
            return W(e, e.render, "ForwardRef");
          case p:
            var v = e.displayName || null;
            return v !== null ? v : Y(e.type) || "Memo";
          case j: {
            var D = e, B = D._payload, _ = D._init;
            try {
              return Y(_(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, $ = 0, Pe, Ve, qe, Je, Ze, r, u;
    function a() {
    }
    a.__reactDisabledLog = !0;
    function U() {
      {
        if ($ === 0) {
          Pe = console.log, Ve = console.info, qe = console.warn, Je = console.error, Ze = console.group, r = console.groupCollapsed, u = console.groupEnd;
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
        $++;
      }
    }
    function z() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, e, {
              value: Pe
            }),
            info: ne({}, e, {
              value: Ve
            }),
            warn: ne({}, e, {
              value: qe
            }),
            error: ne({}, e, {
              value: Je
            }),
            group: ne({}, e, {
              value: Ze
            }),
            groupCollapsed: ne({}, e, {
              value: r
            }),
            groupEnd: ne({}, e, {
              value: u
            })
          });
        }
        $ < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = V.ReactCurrentDispatcher, Le;
    function Se(e, n, c) {
      {
        if (Le === void 0)
          try {
            throw Error();
          } catch (D) {
            var v = D.stack.trim().match(/\n( *(at )?)/);
            Le = v && v[1] || "";
          }
        return `
` + Le + e;
      }
    }
    var Ke = !1, Ge;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      Ge = new He();
    }
    function vt(e, n) {
      if (!e || Ke)
        return "";
      {
        var c = Ge.get(e);
        if (c !== void 0)
          return c;
      }
      var v;
      Ke = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = ue.current, ue.current = null, U();
      try {
        if (n) {
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
            } catch (Ee) {
              v = Ee;
            }
            Reflect.construct(e, [], _);
          } else {
            try {
              _.call();
            } catch (Ee) {
              v = Ee;
            }
            e.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ee) {
            v = Ee;
          }
          e();
        }
      } catch (Ee) {
        if (Ee && v && typeof Ee.stack == "string") {
          for (var F = Ee.stack.split(`
`), re = v.stack.split(`
`), H = F.length - 1, oe = re.length - 1; H >= 1 && oe >= 0 && F[H] !== re[oe]; )
            oe--;
          for (; H >= 1 && oe >= 0; H--, oe--)
            if (F[H] !== re[oe]) {
              if (H !== 1 || oe !== 1)
                do
                  if (H--, oe--, oe < 0 || F[H] !== re[oe]) {
                    var Ue = `
` + F[H].replace(" at new ", " at ");
                    return e.displayName && Ue.includes("<anonymous>") && (Ue = Ue.replace("<anonymous>", e.displayName)), typeof e == "function" && Ge.set(e, Ue), Ue;
                  }
                while (H >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        Ke = !1, ue.current = B, z(), Error.prepareStackTrace = D;
      }
      var St = e ? e.displayName || e.name : "", Ye = St ? Se(St) : "";
      return typeof e == "function" && Ge.set(e, Ye), Ye;
    }
    function dt(e, n, c) {
      return vt(e, !1);
    }
    function ht(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function me(e, n, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return vt(e, ht(e));
      if (typeof e == "string")
        return Se(e);
      switch (e) {
        case d:
          return Se("Suspense");
        case i:
          return Se("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return dt(e.render);
          case p:
            return me(e.type, n, c);
          case j: {
            var v = e, D = v._payload, B = v._init;
            try {
              return me(B(D), n, c);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, at = {}, Xe = V.ReactDebugCurrentFrame;
    function Qe(e) {
      if (e) {
        var n = e._owner, c = me(e.type, e._source, n ? n.type : null);
        Xe.setExtraStackFrame(c);
      } else
        Xe.setExtraStackFrame(null);
    }
    function st(e, n, c, v, D) {
      {
        var B = Function.call.bind(pe);
        for (var _ in e)
          if (B(e, _)) {
            var F = void 0;
            try {
              if (typeof e[_] != "function") {
                var re = Error((v || "React class") + ": " + c + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              F = e[_](n, _, v, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              F = H;
            }
            F && !(F instanceof Error) && (Qe(D), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", c, _, typeof F), Qe(null)), F instanceof Error && !(F.message in at) && (at[F.message] = !0, Qe(D), A("Failed %s type: %s", c, F.message), Qe(null));
          }
      }
    }
    var mt = Array.isArray;
    function it(e) {
      return mt(e);
    }
    function pt(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, c = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function wt(e) {
      try {
        return Ie(e), !1;
      } catch {
        return !0;
      }
    }
    function Ie(e) {
      return "" + e;
    }
    function ct(e) {
      if (wt(e))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), Ie(e);
    }
    var xt = V.ReactCurrentOwner, bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, M, T;
    function L(e) {
      if (pe.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Re(e) {
      if (pe.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ge(e, n) {
      typeof e.ref == "string" && xt.current;
    }
    function ie(e, n) {
      {
        var c = function() {
          M || (M = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Q(e, n) {
      {
        var c = function() {
          T || (T = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var ye = function(e, n, c, v, D, B, _) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: c,
        props: _,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(F, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function ze(e, n, c, v, D) {
      {
        var B, _ = {}, F = null, re = null;
        c !== void 0 && (ct(c), F = "" + c), Re(n) && (ct(n.key), F = "" + n.key), L(n) && (re = n.ref, ge(n, D));
        for (B in n)
          pe.call(n, B) && !bt.hasOwnProperty(B) && (_[B] = n[B]);
        if (e && e.defaultProps) {
          var H = e.defaultProps;
          for (B in H)
            _[B] === void 0 && (_[B] = H[B]);
        }
        if (F || re) {
          var oe = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          F && ie(_, oe), re && Q(_, oe);
        }
        return ye(e, F, re, D, v, xt.current, _);
      }
    }
    var kt = V.ReactCurrentOwner, Ct = V.ReactDebugCurrentFrame;
    function Ne(e) {
      if (e) {
        var n = e._owner, c = me(e.type, e._source, n ? n.type : null);
        Ct.setExtraStackFrame(c);
      } else
        Ct.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function ce() {
      {
        if (kt.current) {
          var e = Y(kt.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function et(e) {
      return "";
    }
    var Ae = {};
    function It(e) {
      {
        var n = ce();
        if (!n) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (n = `

Check the top-level render call using <` + c + ">.");
        }
        return n;
      }
    }
    function Tt(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = It(n);
        if (Ae[c])
          return;
        Ae[c] = !0;
        var v = "";
        e && e._owner && e._owner !== kt.current && (v = " It was passed a child from " + Y(e._owner.type) + "."), Ne(e), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, v), Ne(null);
      }
    }
    function Mt(e, n) {
      {
        if (typeof e != "object")
          return;
        if (it(e))
          for (var c = 0; c < e.length; c++) {
            var v = e[c];
            fe(v) && Tt(v, n);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var D = de(e);
          if (typeof D == "function" && D !== e.entries)
            for (var B = D.call(e), _; !(_ = B.next()).done; )
              fe(_.value) && Tt(_.value, n);
        }
      }
    }
    function _t(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var c;
        if (typeof n == "function")
          c = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === p))
          c = n.propTypes;
        else
          return;
        if (c) {
          var v = Y(n);
          st(c, e.props, "prop", v, e);
        } else if (n.PropTypes !== void 0 && !We) {
          We = !0;
          var D = Y(n);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lt(e) {
      {
        for (var n = Object.keys(e.props), c = 0; c < n.length; c++) {
          var v = n[c];
          if (v !== "children" && v !== "key") {
            Ne(e), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Ne(null);
            break;
          }
        }
        e.ref !== null && (Ne(e), A("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var ve = {};
    function he(e, n, c, v, D, B) {
      {
        var _ = C(e);
        if (!_) {
          var F = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = et();
          re ? F += re : F += ce();
          var H;
          e === null ? H = "null" : it(e) ? H = "array" : e !== void 0 && e.$$typeof === s ? (H = "<" + (Y(e.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : H = typeof e, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, F);
        }
        var oe = ze(e, n, c, D, B);
        if (oe == null)
          return oe;
        if (_) {
          var Ue = n.children;
          if (Ue !== void 0)
            if (v)
              if (it(Ue)) {
                for (var St = 0; St < Ue.length; St++)
                  Mt(Ue[St], e);
                Object.freeze && Object.freeze(Ue);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mt(Ue, e);
        }
        if (pe.call(n, "key")) {
          var Ye = Y(e), Ee = Object.keys(n).filter(function(Vt) {
            return Vt !== "key";
          }), Dt = Ee.length > 0 ? "{key: someKey, " + Ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ve[Ye + Dt]) {
            var Bt = Ee.length > 0 ? "{" + Ee.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Dt, Ye, Bt, Ye), ve[Ye + Dt] = !0;
          }
        }
        return e === m ? lt(oe) : _t(oe), oe;
      }
    }
    function De(e, n, c) {
      return he(e, n, c, !0);
    }
    function xe(e, n, c) {
      return he(e, n, c, !1);
    }
    var At = xe, gt = De;
    Ut.Fragment = m, Ut.jsx = At, Ut.jsxs = gt;
  }()), Ut;
}
process.env.NODE_ENV === "production" ? Qt.exports = hn() : Qt.exports = mn();
var l = Qt.exports;
function ln(t) {
  const s = window.AudioContext || window.webkitAudioContext, o = new s(), m = o.createMediaStreamSource(t), g = o.createAnalyser();
  g.fftSize = 2048, g.smoothingTimeConstant = 0.85, m.connect(g);
  const k = new Uint8Array(g.fftSize);
  function R() {
    g.getByteTimeDomainData(k);
    let w = 0;
    for (let f = 0; f < k.length; f++) {
      const d = (k[f] - 128) / 128;
      w += d * d;
    }
    return Math.sqrt(w / k.length);
  }
  return {
    getLevel: () => R(),
    dispose: async () => {
      try {
        m.disconnect();
      } catch {
      }
      try {
        g.disconnect();
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
  const t = await import("./blazeface.esm-D5KORnOe.js"), s = await import("./index-2kM27Pi_.js");
  return s.ready && await s.ready(), qt = await t.load(), qt;
}
function an(t, s, o) {
  if (t.width <= 0 || t.height <= 0 || s <= 0 || o <= 0) return !1;
  const m = Math.max(12, Math.floor(s * 0.08)), g = Math.max(12, Math.floor(o * 0.08));
  if (t.x < m || t.y < g || t.x + t.width > s - m || t.y + t.height > o - g) return !1;
  const k = t.width * t.height, R = s * o, w = k / R;
  if (w < 0.08 || w > 0.55) return !1;
  const f = t.width / s, d = t.height / o;
  if (f < 0.18 || d < 0.18) return !1;
  const i = t.width / t.height;
  return !(i < 0.7 || i > 1.5);
}
async function gn(t) {
  if ("FaceDetector" in window)
    try {
      const o = await new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }).detect(t);
      if (o && o.length > 0) {
        const m = o[0]?.boundingBox, g = t.videoWidth || t.width || 0, k = t.videoHeight || t.height || 0;
        if (m) {
          const R = { x: m.x, y: m.y, width: m.width, height: m.height };
          if (an(R, g, k)) return { present: !0, confidence: 0.85 };
        }
      }
      return { present: !1, confidence: 0 };
    } catch {
    }
  try {
    const o = await (await pn()).estimateFaces(t, !1);
    if (o && o.length > 0) {
      const m = t.videoWidth || t.width || 0, g = t.videoHeight || t.height || 0;
      for (const k of o) {
        const [R, w] = k.topLeft, [f, d] = k.bottomRight, i = { x: R, y: w, width: f - R, height: d - w };
        if (an(i, m, g)) {
          const p = k.probability ? k.probability[0] : 0.75;
          return { present: !0, confidence: Math.max(0.6, Math.min(1, p)) };
        }
      }
    }
  } catch {
  }
  return { present: !1, confidence: 0 };
}
function yn({ onComplete: t, onError: s }) {
  const o = ["camera", "microphone", "face", "monitor", "browser"], [m, g] = S({
    camera: "pending",
    microphone: "pending",
    face: "pending",
    monitor: "pending",
    browser: "pending"
  }), [k, R] = S(0), [w, f] = S(0), [d, i] = S({}), [p, j] = S({}), P = E(null), J = E(null), le = E(null), de = E(null), V = E(null), A = () => {
    try {
      P.current?.getTracks().forEach((r) => r.stop());
    } catch {
    }
    try {
      J.current?.getTracks().forEach((r) => r.stop());
    } catch {
    }
    P.current = null, J.current = null, le.current && (le.current.dispose().catch(() => {
    }), le.current = null), de.current && (cancelAnimationFrame(de.current), de.current = null);
  }, _e = async (r) => {
    try {
      const u = window.AudioContext || window.webkitAudioContext;
      if (!u) throw new Error("AudioContext not supported");
      const a = new u(), U = a.createMediaStreamSource(r), z = a.createAnalyser();
      z.fftSize = 256, z.smoothingTimeConstant = 0.8, U.connect(z);
      const ue = new Uint8Array(z.frequencyBinCount);
      z.getByteFrequencyData(ue), sessionStorage.setItem("audio-context-initialized", "true"), U.disconnect(), await a.close(), typeof window < "u" && (window.precheckAudioStream = r);
    } catch {
      sessionStorage.setItem("audio-context-initialized", "false");
    }
  }, be = async (r) => {
    const u = V.current;
    let a = 0, U = 0, z = 0;
    const ue = 30;
    for (; z < ue && a < 5; ) {
      try {
        const Se = await gn(u);
        Se.present && (a += 1, U = Math.max(U, Se.confidence));
      } catch {
      }
      z++, R(z), await new Promise((Se) => setTimeout(Se, 100));
    }
    return { status: a >= 5, confidence: U, timestamp: Date.now() };
  };
  function Oe() {
    return "isExtended" in window.screen ? window.screen.isExtended : window.screen.availWidth > window.screen.width || window.screenLeft !== 0 || window.screenTop !== 0 || window.matchMedia("(display-mode: extended)").matches;
  }
  const Te = () => {
    try {
      const r = window.screen.width, u = window.screen.height, a = window.screen.availWidth;
      return r / u > 3 || r > a * 1.5 || [3840, 3360, 2560, 4480, 5120].includes(r) ? 2 : 1;
    } catch {
      return 1;
    }
  }, Z = async () => Te(), we = () => [
    "navigator.mediaDevices",
    "navigator.mediaDevices.getUserMedia",
    "requestAnimationFrame",
    "WebAssembly"
  ].every((u) => {
    const a = u.split(".");
    let U = window;
    for (const z of a) {
      if (!(z in U)) return !1;
      U = U[z];
    }
    return !0;
  }), G = (r, u) => {
    g((a) => ({ ...a, [r]: u }));
  }, C = se(async () => {
    G("camera", "running"), i((r) => ({ ...r, camera: "" }));
    try {
      try {
        P.current?.getTracks().forEach((u) => u.stop());
      } catch {
      }
      const r = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } }
      });
      if (P.current = r, !V.current) {
        const u = document.createElement("video");
        u.muted = !0, u.playsInline = !0, V.current = u;
      }
      V.current.srcObject = r;
      try {
        await V.current.play();
      } catch {
      }
      return j((u) => ({ ...u, cameraAccess: !0 })), G("camera", "passed"), !0;
    } catch (r) {
      const u = r?.name === "NotAllowedError" ? "Camera permission denied" : r?.message || "Camera access failed";
      return i((a) => ({ ...a, camera: u })), G("camera", "failed"), !1;
    }
  }, []), W = se(async () => {
    G("microphone", "running"), i((r) => ({ ...r, microphone: "" }));
    try {
      try {
        J.current?.getTracks().forEach((u) => u.stop());
      } catch {
      }
      const r = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      J.current = r, j((u) => ({ ...u, microphoneAccess: !0 })), await _e(r);
      try {
        const u = ln(r);
        le.current = u;
        const a = () => {
          f(u.getLevel()), de.current = requestAnimationFrame(a);
        };
        de.current = requestAnimationFrame(a);
      } catch {
      }
      return G("microphone", "passed"), !0;
    } catch (r) {
      const u = r?.name === "NotAllowedError" ? "Microphone permission denied" : r?.message || "Microphone access failed";
      return i((a) => ({ ...a, microphone: u })), G("microphone", "failed"), !1;
    }
  }, []), Me = se(async () => {
    G("face", "running"), i((r) => ({ ...r, face: "" }));
    try {
      if (!P.current) throw new Error("Camera is not initialized");
      const r = await be(P.current);
      if (j((u) => ({ ...u, faceDetection: r })), r.status)
        return G("face", "passed"), !0;
      throw new Error("No face detected. Please ensure your full face is entirely within the camera frame and retry.");
    } catch (r) {
      const u = r?.message || "Face detection failed";
      return i((a) => ({ ...a, face: u })), G("face", "failed"), !1;
    }
  }, []), Y = se(async () => {
    G("monitor", "running"), i((r) => ({ ...r, monitor: "" }));
    try {
      const r = await Z();
      if (r && r > 1 || Oe())
        throw j((u) => ({ ...u, monitorCount: r })), new Error("Multiple displays detected. Please remove external screens and keep only one display connected, then press Retry.");
      if (r === 1)
        return j((u) => ({ ...u, monitorCount: r })), G("monitor", "passed"), !0;
      throw new Error("Could not verify displays");
    } catch (r) {
      return i((u) => ({ ...u, monitor: r?.message || "Monitor verification failed" })), G("monitor", "failed"), !1;
    }
  }, []), ne = se(async () => {
    G("browser", "running"), i((r) => ({ ...r, browser: "" }));
    try {
      const r = we();
      if (j((u) => ({ ...u, browserSupport: r })), !r) throw new Error("Required browser features are unavailable");
      return G("browser", "passed"), !0;
    } catch (r) {
      return i((u) => ({ ...u, browser: r?.message || "Browser not supported" })), G("browser", "failed"), !1;
    }
  }, []), $ = {
    camera: C,
    microphone: W,
    face: Me,
    monitor: Y,
    browser: ne
  }, Pe = se(async (r) => {
    for (let u = r; u < o.length; u++) {
      const a = o[u];
      if (!await $[a]()) break;
    }
  }, [$]);
  Be(() => {
    if (!o.every((a) => m[a] === "passed")) return;
    const u = {
      cameraAccess: !!p.cameraAccess,
      microphoneAccess: !!p.microphoneAccess,
      faceDetection: p.faceDetection || { status: !1, confidence: 0, timestamp: Date.now() },
      monitorCount: p.monitorCount || 1,
      browserSupport: !!p.browserSupport,
      codeEditorReady: !0
    };
    t(u), A();
  }, [m, p]), Be(() => (Pe(0), () => A()), []);
  const Ve = (r) => {
    const u = o.indexOf(r);
    g((a) => {
      const U = { ...a };
      for (let z = u; z < o.length; z++) U[o[z]] = "pending";
      return U;
    }), i((a) => ({ ...a, [r]: "" })), Pe(u);
  }, qe = o.filter((r) => m[r] === "passed").length, Je = o.some((r) => m[r] === "running"), Ze = Math.round((qe + (Je ? 0.5 : 0)) / o.length * 100);
  return /* @__PURE__ */ l.jsx("div", { style: { fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#eff6ff,#eef2ff)" }, children: /* @__PURE__ */ l.jsxs("div", { style: { width: 720, maxWidth: "95vw", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }, children: [
    /* @__PURE__ */ l.jsxs("div", { style: { textAlign: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ l.jsx("h2", { style: { margin: 0, fontSize: 20, fontWeight: 700 }, children: "System Pre-Check" }),
      /* @__PURE__ */ l.jsx("p", { style: { color: "#6b7280" }, children: "Verifying your system for proctored assessment" })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
        /* @__PURE__ */ l.jsx("span", { children: "Overall Progress" }),
        /* @__PURE__ */ l.jsxs("span", { children: [
          Ze,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("div", { style: { height: 8, background: "#f3f4f6", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ l.jsx("div", { style: { width: `${Ze}%`, height: 8, background: "#3b82f6" } }) })
    ] }),
    /* @__PURE__ */ l.jsx("div", { style: { display: "grid", gap: 8 }, children: o.map((r) => {
      const u = r === "camera" ? "Camera Access" : r === "microphone" ? "Microphone Access" : r === "face" ? "Face Detection" : r === "monitor" ? "Single Monitor Check" : "Browser Support", a = m[r], U = a === "passed" ? "#ecfdf5" : a === "running" ? "#eff6ff" : a === "failed" ? "#fef2f2" : "#f9fafb", z = a === "passed" ? "#10b981" : a === "running" ? "#3b82f6" : a === "failed" ? "#dc2626" : "#9ca3af";
      return /* @__PURE__ */ l.jsxs("div", { style: { display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 12, alignItems: "center", padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", background: U }, children: [
        /* @__PURE__ */ l.jsx("div", { style: { width: 12, height: 12, borderRadius: 9999, background: z } }),
        /* @__PURE__ */ l.jsxs("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ l.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: /* @__PURE__ */ l.jsx("div", { style: { fontWeight: 600, fontSize: 14 }, children: u }) }),
          r === "face" && /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center", marginTop: 8 }, children: [
            /* @__PURE__ */ l.jsx("video", { ref: V, muted: !0, playsInline: !0, autoPlay: !0, style: { width: 180, height: 112, background: "#000", borderRadius: 6 } }),
            a === "running" && /* @__PURE__ */ l.jsxs("div", { style: { color: "#6b7280", fontSize: 12 }, children: [
              "Analyzing frames: ",
              k
            ] })
          ] }),
          r === "microphone" && a !== "pending" && /* @__PURE__ */ l.jsx("div", { style: { marginTop: 6, width: 220, height: 8, background: "#e5e7eb", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ l.jsx("div", { style: { width: `${Math.min(100, Math.round(w * 200))}%`, height: 8, background: "#10b981", transition: "width 150ms" } }) }),
          d[r] && /* @__PURE__ */ l.jsx("div", { style: { marginTop: 6, color: "#dc2626", fontSize: 12 }, children: d[r] })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ l.jsx("div", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 9999, background: a === "passed" ? "#111827" : a === "failed" ? "#fee2e2" : "#e5e7eb", color: a === "passed" ? "#fff" : "#111827" }, children: a === "passed" ? "Passed" : a === "running" ? "Checking…" : a === "failed" ? "Failed" : "Pending" }),
          a === "failed" && /* @__PURE__ */ l.jsx("button", { onClick: () => Ve(r), style: { fontSize: 12, padding: "6px 10px", borderRadius: 6, background: "#111827", color: "#fff", border: 0 }, children: "Retry" })
        ] })
      ] }, r);
    }) })
  ] }) });
}
function vn(t) {
  const { onEvent: s, context: o = "coding" } = t || {}, [m, g] = S("idle"), [k, R] = S(void 0), [w, f] = S(0), [d, i] = S(0), p = E(null), j = E(null), P = E(null), J = E(!1), le = E(!1), de = E(null), V = E(0), A = E(null), _e = E(0), be = se(() => {
    P.current && cancelAnimationFrame(P.current), P.current = null;
    try {
      p.current?.dispose();
    } catch {
    }
    p.current = null;
    try {
      j.current?.getTracks().forEach((C) => C.stop());
    } catch {
    }
    j.current = null, g("idle");
  }, []), Oe = se(
    (C) => {
      const W = Date.now(), Me = 10, Y = 30, ne = le.current || !!de.current && V.current > Y || V.current > Y, $ = C >= Me;
      ne && $ ? (A.current == null && (A.current = W), W - (A.current ?? W) > 100 && W - _e.current > 2e3 && (i((Ve) => Ve + 1), _e.current = W, A.current = null, s?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: o,
        data: { level: C, lipsActivityPct: V.current, reason: "audio_with_lips" }
      }))) : A.current = null;
    },
    [o, s]
  ), Te = se(() => {
    try {
      if (!p.current) return;
      const C = p.current.getLevel(), W = Math.max(0, Math.min(100, Math.round(C * 160)));
      f(W), Oe(W);
    } finally {
      P.current = requestAnimationFrame(Te);
    }
  }, [Oe]), Z = se(
    async (C) => {
      try {
        R(void 0), i(0), A.current = null, _e.current = 0;
        let W = C;
        if (!W && typeof window < "u" && window.precheckAudioStream) {
          const ne = window.precheckAudioStream;
          ne?.active && ne.getAudioTracks().length > 0 && (W = ne);
        }
        W || (W = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0, sampleRate: 44100 }
        })), j.current = W;
        const Me = W.getAudioTracks(), Y = Me.length ? new MediaStream(Me) : W;
        p.current = ln(Y), g("running"), P.current = requestAnimationFrame(Te);
      } catch (W) {
        g("error"), R(W instanceof Error ? W.message : String(W));
      }
    },
    [Te]
  ), we = se((C) => {
    J.current = C;
  }, []), G = se((C) => {
    typeof C.moving == "boolean" && (le.current = C.moving), typeof C.open < "u" && (de.current = C.open), typeof C.activityPct == "number" && !Number.isNaN(C.activityPct) && (V.current = Math.max(0, Math.min(100, Math.round(C.activityPct))));
  }, []);
  return Be(() => be, [be]), { status: m, error: k, level: w, anomalyCount: d, start: Z, stop: be, setFaceDetected: we, setMouthState: G };
}
function Lt(t) {
  return Math.max(0, Math.min(1, t));
}
function sn(t) {
  let s = 0;
  for (const m in t) s += t[m];
  if (s <= 0) return t;
  const o = {};
  for (const m in t) o[m] = t[m] / s;
  return o;
}
function wn(t = {}) {
  const s = t.alpha ?? 0.45;
  let o = null;
  const m = ["neutral", "happy", "surprised", "focused", "concerned"];
  function g(k, R = {}) {
    const { landmarks: w, headPose: f } = R, { data: d, width: i, height: p } = k;
    let j = 0, P = 0, J = 0;
    for (let M = 0; M < p; M++)
      for (let T = 0; T < i; T++) {
        const L = (M * i + T) * 4, Re = d[L], ge = d[L + 1], ie = d[L + 2], Q = (Re + ge + ie) / 3;
        if (j += Q, T > 0) {
          const ye = (M * i + (T - 1)) * 4, ze = (d[ye] + d[ye + 1] + d[ye + 2]) / 3;
          P += Math.abs(Q - ze);
        }
        if (M > 0) {
          const ye = ((M - 1) * i + T) * 4, ze = (d[ye] + d[ye + 1] + d[ye + 2]) / 3;
          Math.abs(Q - ze) > 26 && J++;
        }
      }
    const le = Math.max(1, d.length / 4), de = j / le, V = P / le, A = J / le, _e = Math.floor(p * 0.6), be = Math.floor(i * 0.22), Oe = Math.ceil(i * 0.78);
    let Te = 0, Z = 0, we = 0, G = 0, C = 0, W = 0, Me = 0, Y = 0;
    const ne = Math.max(2, Math.floor((Oe - be) * 0.18));
    let $ = 0, Pe = 0, Ve = 0, qe = 0;
    for (let M = _e; M < p; M++)
      for (let T = be; T < Oe; T++) {
        const L = (M * i + T) * 4, Re = d[L], ge = d[L + 1], ie = d[L + 2], Q = (Re + ge + ie) / 3, ye = (d[L - 4] + d[L - 3] + d[L - 2]) / 3, ze = (d[L + 4] + d[L + 5] + d[L + 6]) / 3;
        (Math.abs(Q - ye) > 24 || Math.abs(Q - ze) > 24) && Te++, Q < 70 && we++, Q > 165 && G++, M < _e + Math.floor((p - _e) * 0.4) ? (C += Q, W++) : (Me += Q, Y++), T < be + ne && ((Math.abs(Q - ye) > 24 || Math.abs(Q - ze) > 24) && $++, Pe++), T > Oe - ne && ((Math.abs(Q - ye) > 24 || Math.abs(Q - ze) > 24) && Ve++, qe++), Z++;
      }
    const Je = Z ? Te / Z : 0, Ze = Z ? we / Z : 0, r = Z ? G / Z : 0, u = Lt((Je - 0.012) / 0.06), a = W ? C / W : 0, U = Y ? Me / Y : 0, z = Lt((a - U - 6) / 28), ue = Pe ? $ / Pe : 0, Le = qe ? Ve / qe : 0, Se = Lt(((ue + Le) / 2 - 0.018) / 0.05);
    let Ke = 0, Ge = 0;
    const He = Math.max(0, Math.floor(p * 0.18)), vt = Math.floor(p * 0.38);
    for (let M = He; M < vt; M++)
      for (let T = 1; T < i - 1; T++) {
        const L = (M * i + T) * 4, Re = (d[L] + d[L + 1] + d[L + 2]) / 3, ge = (d[L - 4] + d[L - 3] + d[L - 2]) / 3, ie = (d[L + 4] + d[L + 5] + d[L + 6]) / 3;
        (Math.abs(Re - ge) > 26 || Math.abs(Re - ie) > 26) && Ke++, Ge++;
      }
    const dt = Ge ? Ke / Ge : 0, ht = Lt((dt - 0.012) / 0.06);
    let me = 0.5;
    if (w && w.length >= 2) {
      const M = w[0], T = w[1], L = Math.abs(T[1] - M[1]);
      me = Lt(1 - L / Math.max(1, p * 0.25));
    }
    const pe = f ? Math.min(45, Math.abs(f.yaw)) : 0, at = f ? Math.min(45, Math.abs(f.pitch)) : 0, Xe = Math.max(0, 1 - (pe / 35 + at / 30) / 2), Qe = Lt((V - 12) / 18), st = u > 0.22, mt = Ze > 0.12, it = ht > 0.2, pt = !st && !it, wt = {
      neutral: Math.max(1e-3, 0.28 + 0.28 * Xe + 0.06 * me - 0.16 * u - 0.06 * A + (pt ? 0.08 : 0)),
      happy: Math.max(1e-3, 0.1 + 0.62 * u + 0.08 * z + 0.06 * Se + (mt ? 0.04 : 0) + (r > 0.15 ? 0.04 : 0) - 0.1 * (1 - Xe)),
      surprised: Math.max(1e-3, 0.06 + (st && mt ? 0.16 : 0.02) + 0.45 * u + (f && f.pitch > 10 ? 0.1 : 0)),
      focused: Math.max(1e-3, 0.18 + 0.6 * Xe + 0.22 * Qe + 0.06 * me - 0.08 * u + (pt ? 0.06 : 0)),
      concerned: Math.max(1e-3, 0.06 + (it ? 0.16 : 0.02) + 0.45 * ht + (de < 100 ? 0.06 : 0) + (f && f.pitch < -10 ? 0.06 : 0) - 0.06 * (z + u))
    };
    let Ie = sn(wt);
    if (o) {
      const M = { ...o };
      for (const T of m)
        M[T] = (1 - s) * o[T] + s * Ie[T];
      Ie = sn(M);
    }
    o = Ie;
    let ct = "neutral", xt = -1;
    for (const M of m) {
      const T = Ie[M];
      T > xt && (xt = T, ct = M);
    }
    const bt = Ie[ct];
    return { dominant: ct, confidence: bt, emotions: Ie };
  }
  return { analyze: g };
}
let Kt, Xt;
async function xn(t) {
  if (Kt && Xt) return { FaceLandmarker: Kt, FilesetResolver: Xt };
  const s = await import("./vision_bundle-DrVqKEBn.js");
  return Kt = s.FaceLandmarker, Xt = s.FilesetResolver, { FaceLandmarker: Kt, FilesetResolver: Xt };
}
async function bn(t = {}) {
  const s = t.wasmRoot || "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.15/wasm", o = t.modelAssetPath || "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task", m = t.runningMode || "VIDEO", { FaceLandmarker: g, FilesetResolver: k } = await xn(), R = await k.forVisionTasks(s), w = await g.createFromOptions(R, {
    baseOptions: { modelAssetPath: o },
    runningMode: m,
    numFaces: 1,
    minFaceDetectionConfidence: 0.2,
    minFacePresenceConfidence: 0.2,
    minTrackingConfidence: 0.2,
    outputFaceBlendshapes: !0,
    outputFacialTransformationMatrixes: !0
  }), f = {
    horiz: t.thresholds?.horiz ?? 0.4,
    vert: t.thresholds?.vert ?? 0.55,
    yaw: t.thresholds?.yaw ?? 19,
    pitch: t.thresholds?.pitch ?? 24,
    offDwell: t.thresholds?.offDwell ?? 4,
    onDwell: t.thresholds?.onDwell ?? 3,
    calibFrames: t.thresholds?.calibFrames ?? 45
  };
  let d = { x: 0, y: 0 };
  const i = 0.35;
  let p = 0, j = 0, P = null, J = 0, le = 0, de = 0, V = 0, A = 0;
  const _e = 3, be = 2, Oe = 3, Te = 2;
  let Z = !0, we = 0;
  const G = f.calibFrames;
  let C = { x: 0, y: 0 };
  const W = f.offDwell, Me = f.onDwell;
  async function Y($, Pe) {
    if (!$ || !w) return null;
    const Ve = Pe ?? performance.now(), qe = $.videoWidth || $.width || 0, Je = $.videoHeight || $.height || 0, Ze = $.readyState ?? 0;
    if (!qe || !Je || Ze < 2)
      return null;
    const r = w.detectForVideo($, Ve);
    if (!r || !r.faceLandmarks || r.faceLandmarks.length === 0)
      return null;
    const u = r.faceBlendshapes?.[0]?.categories || [], a = (ve) => u.find((he) => he.categoryName === ve)?.score || 0, U = a("eyeLookInLeft"), z = a("eyeLookOutLeft"), ue = a("eyeLookUpLeft"), Le = a("eyeLookDownLeft"), Se = a("eyeLookInRight"), Ke = a("eyeLookOutRight"), Ge = a("eyeLookUpRight"), He = a("eyeLookDownRight"), vt = Ke - Se, dt = U - z, ht = Ge - He, me = ue - Le;
    let pe = (vt + dt) / 2, at = (ht + me) / 2;
    pe = Math.max(-1, Math.min(1, pe)), at = Math.max(-1, Math.min(1, at)), d.x = i * pe + (1 - i) * d.x, d.y = i * at + (1 - i) * d.y;
    const Xe = a("jawOpen"), Qe = a("mouthOpen"), st = a("mouthFunnel"), mt = a("mouthPucker"), it = a("mouthSmileLeft"), pt = a("mouthSmileRight"), wt = a("mouthPressLeft"), Ie = a("mouthPressRight"), ct = a("mouthStretchLeft"), xt = a("mouthStretchRight"), bt = a("mouthLowerDownLeft"), M = a("mouthLowerDownRight"), T = a("mouthUpperUpLeft"), L = a("mouthUpperUpRight"), Re = [
      Xe,
      Qe,
      st,
      mt,
      it,
      pt,
      wt,
      Ie,
      ct,
      xt,
      bt,
      M,
      T,
      L
    ];
    let ge = 0;
    if (P != null)
      for (let ve = 0; ve < Re.length; ve++) ge += Math.abs(Re[ve] - P[ve]);
    P = Re, J = 0.3 * ge + 0.7 * J;
    let ie = Math.max(Qe, Xe);
    const Q = Math.max(0, (bt + M + T + L) / 4);
    ie = Math.max(ie, Q), ie = Math.max(0, Math.min(1, ie));
    const ye = ie > 0.35, ze = J > 0.06;
    ye ? (le++, de = Math.max(0, de - 1)) : (de++, le = Math.max(0, le - 1)), ze ? (V++, A = Math.max(0, A - 1)) : (A++, V = Math.max(0, V - 1));
    const kt = le >= _e ? !0 : de >= be ? !1 : void 0, Ct = V >= Oe ? !0 : A >= Te ? !1 : void 0;
    Z && (Math.abs(d.x) < 0.6 && Math.abs(d.y) < 0.6 && (C.x = (C.x * we + d.x) / (we + 1), C.y = (C.y * we + d.y) / (we + 1), we += 1), we >= G && (Z = !1));
    const Ne = d.x - C.x, We = d.y - C.y;
    let fe, ce;
    try {
      const ve = r.facialTransformationMatrixes?.[0];
      if (ve && ve.rows === 4 && ve.columns === 4) {
        const he = ve.data, De = he[0], xe = he[1], At = he[2], gt = he[4], e = he[5], n = he[6], c = he[8], v = he[9], D = he[10];
        ce = Math.atan2(-v, D) * (180 / Math.PI), fe = Math.atan2(-At, De) * (180 / Math.PI);
      }
    } catch {
    }
    const et = Math.abs(Ne), Ae = Math.abs(We), It = et > f.horiz, Tt = Ae > f.vert, Mt = fe !== void 0 && Math.abs(fe) > f.yaw || ce !== void 0 && Math.abs(ce) > f.pitch, _t = It || Tt || Mt;
    let lt = !0;
    return _t ? (p += 1, j = Math.max(0, j - 1)) : (j += 1, p = Math.max(0, p - 1)), p >= W && (lt = !1), j >= Me && (lt = !0), {
      onScreen: lt,
      gaze: { x: Ne, y: We },
      confidence: Math.min(1, 0.65 + 0.35 * Math.max(et, Ae)),
      head: { yaw: fe, pitch: ce },
      debug: {
        lIn: U,
        lOut: z,
        lUp: ue,
        lDn: Le,
        rIn: Se,
        rOut: Ke,
        rUp: Ge,
        rDn: He,
        gx: pe,
        gy: at,
        emaX: d.x,
        emaY: d.y,
        yaw: fe ?? 0,
        pitch: ce ?? 0,
        offFrames: p,
        onFrames: j,
        baseX: C.x,
        baseY: C.y,
        absX: et,
        absY: Ae,
        jawOpen: Xe,
        mouthOpenBS: Qe,
        activity: J,
        openScore: ie
      },
      mouth: {
        open: kt ?? ie > 0.5,
        openScore: ie,
        moving: Ct ?? J > 0.08,
        activity: J
      }
    };
  }
  async function ne() {
    try {
      w?.close?.();
    } catch {
    }
  }
  return { ready: !0, estimate: Y, close: ne };
}
const Mn = (t, s, o) => {
  if (t.width <= 0 || t.height <= 0 || s <= 0 || o <= 0) return !1;
  const m = Math.max(8, Math.floor(s * 0.05)), g = Math.max(12, Math.floor(o * 0.08));
  if (t.x < m || t.y < g || t.x + t.width > s - m || t.y + t.height > o - g) return !1;
  const k = t.width * t.height, R = s * o, w = k / R;
  if (w < 0.08 || w > 0.55) return !1;
  const f = t.width / s, d = t.height / o;
  if (f < 0.15 || d < 0.18) return !1;
  const i = t.width / t.height;
  return !(i < 0.7 || i > 1.5);
};
function Sn({ monitoringStatus: t, sessionData: s, onStatusChange: o, onUpdateSession: m, onAddEvent: g, onAddSnapshot: k, gazeThresholds: R }) {
  const [w, f] = S({ x: typeof window < "u" ? window.innerWidth - 280 : 0, y: typeof window < "u" ? window.innerHeight - 400 : 0 }), [d, i] = S(!1), [p, j] = S({ x: 0, y: 0 }), [P, J] = S(0), [le, de] = S(!1), [V, A] = S(null), [_e, be] = S(null), [Oe, Te] = S(null), [Z, we] = S(0), [G, C] = S(0), [W, Me] = S([]), [Y, ne] = S(0), [$, Pe] = S(0), [Ve, qe] = S(0), [Je, Ze] = S(0), [r, u] = S(0), [a, U] = S(!1), [z, ue] = S(null), [Le, Se] = S(null), [Ke, Ge] = S(!1), [He, vt] = S(0), [dt, ht] = S(null), [me, pe] = S(null), [at, Xe] = S(0), [Qe, st] = S(0), [mt, it] = S(0), [pt, wt] = S(null), [Ie, ct] = S(0), [xt, bt] = S(0), M = E(null), T = E(null), L = E(null), Re = E(null), ge = E(null), ie = E(null), Q = E(null), ye = E(0), ze = E(null), kt = E(!1), Ct = E(0), Ne = E(0), We = E("none"), fe = E({ noFace: 0, multipleFaces: 0 }), ce = E({ noFace: !1, multipleFaces: !1, gazeOff: !1 }), et = E(!1), Ae = E({ offFrames: 0, onFrames: 0 }), It = R?.fallback?.offFrames ?? 8, Tt = R?.fallback?.onFrames ?? 5, Mt = {
    yaw: R?.fallback?.yaw ?? 32,
    pitch: R?.fallback?.pitch ?? 26,
    centerOffset: R?.fallback?.centerOffset ?? 0.35
  }, _t = E(null), lt = E([]), ve = E(0), he = E(!1), De = E({ yaw: 0, pitch: 0, roll: 0, initialized: !1 }), xe = E({ isGood: !0, goodStreak: 0, poorStreak: 0 }), At = 8, gt = 0.25, { level: e, anomalyCount: n, start: c, stop: v, setFaceDetected: D, setMouthState: B } = vn({
    context: "coding",
    onEvent: (h) => g?.({ ...h, timestamp: Date.now() })
  });
  Be(() => we(e), [e]), Be(() => C(n), [n]), Be(() => {
    _t.current = wn({ alpha: 0.5 });
  }, []);
  const _ = se((h, y) => {
    const x = y.data, ee = y.width, q = y.height, N = Math.max(0, Math.floor(h.x - h.width * 0.2)), K = Math.min(ee, Math.floor(h.x + h.width * 1.2)), I = Math.min(q - 1, Math.floor(h.y + h.height * 1.05)), O = Math.min(q, I + Math.floor(h.height * 1.6));
    if (O <= I || K <= N) return { isProfessional: !1, hasShirt: !1, confidence: 0.4, details: "Insufficient torso ROI" };
    let Fe = 0, Rt = 0, jt = 0, ut = 0, Et = 0;
    const $e = Math.floor((N + K) / 2);
    for (let rt = I; rt < O; rt++)
      for (let je = N; je < K; je++) {
        const ot = (rt * ee + je) * 4, ft = x[ot], te = x[ot + 1], X = x[ot + 2], Ce = Math.max(ft, te, X), Ft = Math.min(ft, te, X), Gt = Ce, Ht = Ce ? (Ce - Ft) / Ce : 0;
        if (Gt > 60 && Gt < 210 && Ht < 0.45 && ft > 40 && te > 20 && X > 20 && ft > X) continue;
        if ((ft + te + X) / 3 < 105 && Fe++, (Math.abs(ft - te) > 28 || Math.abs(te - X) > 28) && Rt++, jt += Ht, ut++, rt < I + (O - I) * 0.35 && Math.abs(je - $e) < Math.max(6, Math.floor(h.width * 0.08)) && je > N + 1 && je < K - 1) {
          const zt = (rt * ee + (je - 1)) * 4, Yt = (rt * ee + (je + 1)) * 4, Nt = (ft + te + X) / 3, $t = (x[zt] + x[zt + 1] + x[zt + 2]) / 3, Ot = (x[Yt] + x[Yt + 1] + x[Yt + 2]) / 3;
          (Math.abs(Nt - $t) > 28 || Math.abs(Nt - Ot) > 28) && Et++;
        }
      }
    if (!ut) return { isProfessional: !1, hasShirt: !1, confidence: 0.4, details: "Insufficient torso pixels" };
    const b = Fe / ut, ae = Rt / ut, tt = jt / ut, yt = Et / ut, nt = b > 0.18 || tt < 0.35, ke = b > 0.35 && ae < 0.22 || tt < 0.28 && ae < 0.18 || yt > 2e-3, Pt = Math.max(0.5, Math.min(0.95, 0.55 + (nt ? 0.15 : 0) + (ke ? 0.15 : 0) - ae * 0.2));
    return { isProfessional: ke, hasShirt: nt, confidence: Pt, details: ke ? "Professional attire (solid/low-saturation)" : nt ? "Casual attire" : "Torso not clearly visible" };
  }, []), F = se((h) => {
    if (!h.landmarks || h.landmarks.length < 4) return null;
    const y = h.landmarks, x = y[0], ee = y[1], q = y[2], N = y[3] ?? [(ee[0] + x[0]) / 2, Math.max(ee[1], x[1]) + h.height * 0.2], K = [(ee[0] + x[0]) / 2, (ee[1] + x[1]) / 2], I = ee[0] - x[0], O = ee[1] - x[1], Fe = Math.max(1, Math.hypot(I, O)), Rt = Math.atan2(O, I) * 180 / Math.PI, jt = Math.hypot(q[0] - x[0], q[1] - x[1]), ut = Math.hypot(q[0] - ee[0], q[1] - ee[1]), Et = (jt - ut) / Fe, $e = Math.max(-45, Math.min(45, Et * 90)), b = Math.max(1, q[1] - K[1]), ae = Math.max(1, (N[1] ?? K[1]) - q[1]), tt = (b - ae) / h.height, yt = Math.max(-45, Math.min(45, tt * 180)), nt = Math.abs(Rt) > 20, ke = Math.abs(Et) > 0.18, Pt = Math.abs(yt) > 15, rt = ke || Pt || nt, je = Math.max(0.5, Math.min(1, Math.max(
      Math.abs(Et) * 2,
      Math.abs(Rt) / 30,
      Math.abs(yt) / 30
    )));
    return { yaw: $e, pitch: yt, roll: Rt, isHeadTurned: rt, confidence: je };
  }, []), re = se((h = 0.8) => {
    const y = M.current, x = T.current;
    if (!y || !x) return null;
    const ee = y.videoWidth || 320, q = y.videoHeight || 240;
    if (y.readyState < 2) return null;
    x.width = ee, x.height = q;
    const N = x.getContext("2d", { willReadFrequently: !0 });
    if (!N) return null;
    N.drawImage(y, 0, 0, ee, q);
    try {
      return x.toDataURL("image/jpeg", h);
    } catch {
      return null;
    }
  }, []), H = se((h) => {
    if (k) {
      k(h);
      return;
    }
    if (m) {
      let x = [...s?.snapshots || [], h];
      x.length > 50 && (x = x.slice(x.length - 50)), m({ snapshots: x });
    }
  }, [k, m, s?.snapshots]), oe = se(() => {
    if (ve.current >= 5 || he.current) return;
    he.current = !0;
    const h = re(0.85);
    if (h) {
      H({ timestamp: Date.now(), type: "random_webcam", image: h, context: "Random webcam snapshot during coding" }), ve.current += 1, he.current = !1;
      return;
    }
    const y = window.setTimeout(() => {
      const x = re(0.85);
      x && (H({ timestamp: Date.now(), type: "random_webcam", image: x, context: "Random webcam snapshot (retry) during coding" }), ve.current += 1), he.current = !1;
    }, 3e3);
    lt.current.push(y);
  }, [H, re]), Ue = se(async () => {
    try {
      const h = await import("./index-2kM27Pi_.js"), y = await import("./blazeface.esm-D5KORnOe.js");
      h.ready && await h.ready();
      const x = await y.load();
      return Re.current = x, !0;
    } catch (h) {
      return console.error("[widget] Failed to init face detection:", h), !1;
    }
  }, []), St = (h, y) => {
    const x = Math.max(h.x, y.x), ee = Math.max(h.y, y.y), q = Math.min(h.x + h.width, y.x + y.width), N = Math.min(h.y + h.height, y.y + y.height), K = Math.max(0, q - x), I = Math.max(0, N - ee), O = K * I, Fe = h.width * h.height + y.width * y.height - O;
    return Fe > 0 ? O / Fe : 0;
  }, Ye = se(async () => {
    if (et.current) {
      ge.current = requestAnimationFrame(Ye);
      return;
    }
    if (et.current = !0, !M.current || !T.current || !Re.current) {
      ge.current = requestAnimationFrame(Ye), et.current = !1;
      return;
    }
    const h = M.current, y = T.current;
    if (h.readyState !== 4) {
      ge.current = requestAnimationFrame(Ye), et.current = !1;
      return;
    }
    try {
      const x = await Re.current.estimateFaces(h, !1), ee = h.videoWidth || h.width || y.width, q = h.videoHeight || h.height || y.height, K = x.map((b) => {
        const [ae, tt] = b.topLeft, [yt, nt] = b.bottomRight;
        return { x: ae, y: tt, width: yt - ae, height: nt - tt, confidence: b.probability?.[0] || 0.8, landmarks: b.landmarks };
      }).filter((b) => (b.confidence || 0) < 0.6 ? !1 : Mn(b, ee, q));
      K.sort((b, ae) => ae.confidence - b.confidence);
      const I = [];
      K.forEach((b) => {
        I.some((tt) => St(b, tt) > 0.45) || I.push(b);
      }), J(I.length), Me(I), de(I.length === 1), D(I.length > 0);
      const O = Date.now(), Fe = I.length === 0 ? "none" : I.length === 1 ? "single" : "multiple";
      Fe === "multiple" ? fe.current.multipleFaces += 1 : fe.current.multipleFaces = Math.max(0, fe.current.multipleFaces - 1), Fe === "none" ? fe.current.noFace += 1 : fe.current.noFace = Math.max(0, fe.current.noFace - 1);
      const Rt = 3, jt = 2, ut = 3, Et = 2;
      let $e = We.current;
      if (We.current !== "multiple" ? fe.current.multipleFaces >= Rt ? $e = "multiple" : $e = Fe === "none" ? "single" : Fe : fe.current.multipleFaces <= jt && ($e = Fe === "multiple" ? "multiple" : "single"), $e !== "none" ? fe.current.noFace >= ut && ($e = "none") : fe.current.noFace <= Et && ($e = Fe === "none" ? "none" : "single"), $e === "multiple") {
        if (We.current !== "multiple" && (ht(O), it((b) => b + 1), !ce.current.multipleFaces)) {
          ce.current.multipleFaces = !0, g?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: I.length }, timestamp: O });
          const b = re(0.85);
          b && H({ timestamp: O, type: "violation_trigger", image: b, context: "Multiple faces detected" });
        }
      } else {
        if (We.current === "multiple" && dt !== null) {
          const b = O - dt;
          Xe((ae) => ae + b), ht(null);
        }
        ce.current.multipleFaces = !1;
      }
      if ($e === "none") {
        if (We.current !== "none" && (wt(O), ct((b) => b + 1), !ce.current.noFace)) {
          ce.current.noFace = !0, g?.({ eventType: "face_detection", severity: "critical", context: "coding", data: { reason: "no_face" }, timestamp: O });
          const b = re(0.85);
          b && H({ timestamp: O, type: "violation_trigger", image: b, context: "No face detected" });
        }
      } else {
        if (We.current === "none" && pt !== null) {
          const b = O - pt;
          bt((ae) => ae + b), wt(null);
        }
        ce.current.noFace = !1;
      }
      if (We.current = $e, I.length === 1) {
        const b = I[0], ae = y.getContext("2d", { willReadFrequently: !0 });
        if (ae) {
          ae.drawImage(h, 0, 0, y.width, y.height);
          const tt = ae.getImageData(0, 0, y.width, y.height), yt = ae.getImageData(b.x, b.y, b.width, b.height);
          let nt = { isGoodPosture: !0, shoulderAlignment: 0, headTilt: 0, confidence: 0.7 };
          const ke = F(b);
          if (ke) {
            De.current.initialized ? (De.current.yaw = gt * ke.yaw + (1 - gt) * De.current.yaw, De.current.pitch = gt * ke.pitch + (1 - gt) * De.current.pitch, De.current.roll = gt * ke.roll + (1 - gt) * De.current.roll) : De.current = { yaw: ke.yaw, pitch: ke.pitch, roll: ke.roll, initialized: !0 };
            const te = De.current.yaw, X = De.current.pitch, Ce = De.current.roll, Ft = Math.abs(Ce) <= 10 && Math.abs(X) <= 12 && Math.abs(te) <= 18;
            Ft !== xe.current.isGood ? Ft ? (xe.current.goodStreak += 1, xe.current.poorStreak = 0, xe.current.goodStreak >= At && (xe.current.isGood = !0, xe.current.goodStreak = 0)) : (xe.current.poorStreak += 1, xe.current.goodStreak = 0, xe.current.poorStreak >= At && (xe.current.isGood = !1, xe.current.poorStreak = 0)) : (xe.current.goodStreak = 0, xe.current.poorStreak = 0), nt = {
              isGoodPosture: xe.current.isGood,
              // Use roll (tilt) as a proxy for shoulder alignment; smaller magnitude means better alignment
              shoulderAlignment: -Ce,
              headTilt: X,
              confidence: Math.min(1, 0.6 + 0.4 * ke.confidence)
            };
          }
          let Pt = null;
          if (_t.current) {
            const te = _t.current.analyze(yt, { landmarks: b.landmarks, headPose: ke ?? null });
            Pt = { dominant: te.dominant, confidence: te.confidence, emotions: te.emotions };
          }
          const rt = _(b, tt), je = ke ?? F(b);
          A(nt), be(Pt), Te(rt);
          let ot = null;
          if (Q.current && h)
            try {
              const te = performance?.now?.() || Date.now();
              let X = ze.current;
              if (te - ye.current >= 70 && (X = await Q.current.estimate(h, te), ye.current = te, ze.current = X), ot = X?.onScreen ?? null, X?.mouth) {
                Se(X.mouth.open), Ge(X.mouth.moving);
                const Ce = Math.round(Math.min(1, Math.max(0, X.mouth.activity)) * 100);
                vt(Ce);
                try {
                  B({ open: X.mouth.open, moving: X.mouth.moving, activityPct: Ce });
                } catch {
                }
              }
              if (ot !== null && ue(ot), ot === !1 && !a && Date.now() - Ne.current > 3e3)
                u((Ce) => Ce + 1), U(!0), pe(O), Ne.current = Date.now(), ue(!1), ce.current.gazeOff || (ce.current.gazeOff = !0, g?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0, headPose: je, gaze: X }, timestamp: O }));
              else if (ot === !0 && a) {
                if (me !== null) {
                  const Ce = O - me;
                  st((Ft) => Ft + Ce), pe(null);
                }
                U(!1), ce.current.gazeOff = !1, ue(!0);
              }
            } catch {
              ot = null;
            }
          if (ot === null) {
            const te = y.width, X = y.height, Ce = b.x + b.width / 2, Ft = b.y + b.height / 2, Gt = Math.hypot((Ce - te / 2) / te, (Ft - X / 2) / X), Ht = je?.yaw ?? 0, nn = je?.pitch ?? 0, Zt = Math.abs(Ht) > Mt.yaw || Math.abs(nn) > Mt.pitch, zt = Gt > Mt.centerOffset;
            Zt || zt ? (Ae.current.offFrames += 1, Ae.current.onFrames = Math.max(0, Ae.current.onFrames - 1)) : (Ae.current.onFrames += 1, Ae.current.offFrames = Math.max(0, Ae.current.offFrames - 1));
            const Nt = Ae.current.offFrames >= It, $t = Ae.current.onFrames >= Tt;
            if (ue((Ot) => $t ? !0 : Nt ? !1 : Ot), Nt && !a && Date.now() - Ne.current > 3e3)
              u((Ot) => Ot + 1), U(!0), pe(O), Ne.current = Date.now(), ue(!1), ce.current.gazeOff || (ce.current.gazeOff = !0, g?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0, reason: Zt ? "head_pose" : "center_offset", headPose: je }, timestamp: O }));
            else if ($t && a) {
              if (me !== null) {
                const Ot = O - me;
                st((fn) => fn + Ot), pe(null);
              }
              U(!1), ce.current.gazeOff = !1, ue(!0);
            }
          }
          const ft = I.length === 0 || I.length > 1;
          if (m && (ft || O - Ct.current >= 5e3)) {
            if (ft) {
              const te = re(0.85);
              te && H({ timestamp: O, type: "violation_trigger", image: te, context: I.length === 0 ? "No face detected" : "Multiple faces detected" });
            }
            m({ postureAnalysis: nt, attireAnalysis: rt }), Ct.current = O;
          }
        }
      } else {
        if (A(null), be(null), Te(null), a) {
          if (me !== null) {
            const b = O - me;
            st((ae) => ae + b), pe(null);
          }
          U(!1);
        }
        ue(null);
      }
      I.length === 0 ? o?.("violation") : I.length > 1 ? o?.("warning") : o?.("optimal");
    } catch (x) {
      console.error("[widget] Face detection error:", x);
    } finally {
      ge.current = requestAnimationFrame(Ye), et.current = !1;
    }
  }, [_, o, m, s?.snapshots, a, dt, me, D]);
  Be(() => {
    C(0);
  }, []), Be(() => {
    (async () => {
      try {
        const N = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } },
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
        });
        M.current && (M.current.srcObject = N, M.current.onloadedmetadata = async () => {
          try {
            await M.current.play?.();
          } catch {
          }
          try {
            const O = M.current;
            O?.videoWidth && O?.videoHeight && (O.width = O.videoWidth, O.height = O.videoHeight);
          } catch {
          }
        });
        let K = null;
        const I = N.getAudioTracks();
        I.length > 0 && (K = new MediaStream(I), ie.current = K), await Ue();
        try {
          Q.current = await bn({ thresholds: R?.mediapipe });
        } catch {
        }
        K && await c(K), ge.current = requestAnimationFrame(Ye);
      } catch {
        o?.("violation");
      }
    })();
    const y = 5, x = [60 * 1e3, 5 * 60 * 1e3], ee = Math.max(0, y - x.length), q = [...x];
    if (ee > 0)
      for (let I = 0; I < ee; I++) {
        const O = 42e4 + Math.random() * 18e4, Fe = (Math.random() - 0.5) * 30 * 1e3;
        q.push(Math.max(0, Math.floor(O + Fe)));
      }
    q.sort((N, K) => N - K);
    for (let N = 1; N < q.length; N++)
      Math.abs(q[N] - q[N - 1]) < 10 * 1e3 && (q[N] += 12 * 1e3);
    return q.forEach((N) => {
      const K = window.setTimeout(() => oe(), N);
      lt.current.push(K);
    }), () => {
      kt.current = !0, ge.current && cancelAnimationFrame(ge.current), M.current?.srcObject && M.current.srcObject.getTracks().forEach((K) => K.stop()), ie.current && ie.current.getTracks().forEach((N) => N.stop()), v(), ie.current = null, Q.current?.close?.(), lt.current.forEach((N) => window.clearTimeout(N)), lt.current = [];
    };
  }, []);
  const Ee = (h) => {
    i(!0);
    const y = L.current?.getBoundingClientRect();
    y && j({ x: h.clientX - y.left, y: h.clientY - y.top });
  }, Dt = (h) => {
    if (d) {
      const y = Math.max(0, Math.min((typeof window < "u" ? window.innerWidth : 0) - 280, h.clientX - p.x)), x = Math.max(0, Math.min((typeof window < "u" ? window.innerHeight : 0) - 400, h.clientY - p.y));
      f({ x: y, y: x });
    }
  }, Bt = () => i(!1);
  Be(() => {
    if (d)
      return document.addEventListener("mousemove", Dt), document.addEventListener("mouseup", Bt), () => {
        document.removeEventListener("mousemove", Dt), document.removeEventListener("mouseup", Bt);
      };
  }, [d, p]);
  const Vt = () => {
    document.hidden && Pe((h) => {
      const y = h + 1;
      return g?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { when: Date.now() }, timestamp: Date.now() }), y;
    });
  }, en = () => ne((h) => h + 1), tn = (h) => {
    qe((y) => y + 1), g?.({ eventType: "keystroke", severity: "info", context: "coding", data: {}, timestamp: Date.now() }), (h.ctrlKey || h.metaKey) && (h.key === "c" || h.key === "x" || h.key === "v") && (Ze((y) => y + 1), h.preventDefault(), g?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, key: h.key }, timestamp: Date.now() }));
  };
  Be(() => (document.addEventListener("visibilitychange", Vt), window.addEventListener("blur", en), document.addEventListener("keydown", tn), () => {
    document.removeEventListener("visibilitychange", Vt), window.removeEventListener("blur", en), document.removeEventListener("keydown", tn);
  }), []);
  const un = P === 0 ? "#ef4444" : P > 1 ? "#f59e0b" : "#22c55e";
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      ref: L,
      onMouseDown: Ee,
      style: {
        position: "fixed",
        left: w.x,
        top: w.y,
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
        /* @__PURE__ */ l.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: /* @__PURE__ */ l.jsx("div", { style: { fontSize: 12, fontWeight: 600 }, children: P === 0 ? "No Face" : P > 1 ? "Multiple Faces" : le ? "Optimal" : "Good" }) }),
        /* @__PURE__ */ l.jsxs("div", { style: { position: "relative", background: "#000", borderRadius: 4, overflow: "hidden" }, children: [
          /* @__PURE__ */ l.jsx("video", { ref: M, autoPlay: !0, muted: !0, playsInline: !0, style: { width: "100%", height: 128, objectFit: "cover" } }),
          /* @__PURE__ */ l.jsx("canvas", { ref: T, width: 320, height: 240, style: { display: "none" } })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { style: { marginTop: 8, fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }, children: [
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Faces: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: P === 1 ? "#16a34a" : "#ef4444" }, children: P })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "No Face: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: Ie > 0 ? "#ef4444" : "#16a34a" }, children: Ie })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Multiple: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: mt > 0 ? "#ef4444" : "#16a34a" }, children: mt })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Posture: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: V?.isGoodPosture ? "#16a34a" : "#f59e0b" }, children: V?.isGoodPosture ? "Good" : "Poor" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Attire: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: Oe?.isProfessional ? "#16a34a" : "#f59e0b" }, children: Oe?.isProfessional ? "Professional" : "Casual" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Emotion: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: "#3b82f6" }, children: _e?.dominant || "Unknown" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Gaze: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: z === null ? "#9ca3af" : z ? "#16a34a" : "#ef4444" }, children: z === null ? "--" : z ? "On" : "Off" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Mouth: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: Le === null ? "#9ca3af" : Le ? "#16a34a" : "#111827" }, children: Le === null ? "--" : Le ? Ke ? "Open+Moving" : "Open" : Ke ? "Closed+Moving" : "Closed" })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Lip Act: ",
            /* @__PURE__ */ l.jsxs("span", { style: { color: He > 30 ? "#16a34a" : He > 10 ? "#f59e0b" : "#9ca3af" }, children: [
              He,
              "%"
            ] }),
            /* @__PURE__ */ l.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ l.jsx("div", { style: { width: `${Math.min(He, 100)}%`, height: 6, transition: "width 100ms", background: He > 30 ? "#16a34a" : He > 10 ? "#f59e0b" : "#9ca3af" } }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Audio: ",
            /* @__PURE__ */ l.jsxs("span", { style: { color: Z > 50 ? "#16a34a" : Z > 20 ? "#f59e0b" : "#ef4444" }, children: [
              Z,
              "%"
            ] }),
            /* @__PURE__ */ l.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ l.jsx("div", { style: { width: `${Math.min(Z, 100)}%`, height: 6, transition: "width 100ms", background: Z > 50 ? "#16a34a" : Z > 20 ? "#f59e0b" : "#ef4444" } }) })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Audio Alerts: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: G > 0 ? "#ef4444" : "#16a34a" }, children: G })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Unfocus: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: Y > 0 ? "#ef4444" : "#16a34a" }, children: Y })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Tab Switch: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: $ > 0 ? "#ef4444" : "#16a34a" }, children: $ })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Keystrokes: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: "#3b82f6" }, children: Ve })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Copy Attempts: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: Je > 0 ? "#ef4444" : "#16a34a" }, children: Je })
          ] }),
          /* @__PURE__ */ l.jsxs("div", { children: [
            "Gaze Off: ",
            /* @__PURE__ */ l.jsx("strong", { style: { color: r > 0 ? "#ef4444" : "#16a34a" }, children: r })
          ] })
        ] })
      ]
    }
  );
}
const Jt = (t, s) => t.length > s ? t.slice(t.length - s) : t, Rn = (t, s) => ({
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
function En(t, s) {
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
      const o = s.data?.type === "focus_break", m = Number(s.data?.focusTimeMs) || 0, g = s.data?.offscreen === !0;
      return {
        ...t,
        focusBreaks: t.focusBreaks + (o ? 1 : 0),
        gazeDuration: t.gazeDuration + m,
        unfocusEvents: t.unfocusEvents + (o ? 1 : 0),
        gazeOffScreenIncidents: t.gazeOffScreenIncidents + (g ? 1 : 0),
        violationCount: t.violationCount + (o || g ? 1 : 0)
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
function Fn(t, s) {
  switch (s.type) {
    case "INIT":
      return { ...s.payload };
    case "SET_FIELDS": {
      const o = { ...t, ...s.payload };
      return o.snapshots && (o.snapshots = Jt(o.snapshots, 50)), o.liveEvents && (o.liveEvents = Jt(o.liveEvents, 200)), o;
    }
    case "ADD_EVENTS": {
      const o = Jt([...t.liveEvents, ...s.events], 200), m = s.events.reduce(En, t.sessionStats);
      return { ...t, liveEvents: o, sessionStats: m };
    }
    case "ADD_SNAPSHOT": {
      const o = Jt([...t.snapshots, s.snapshot], 50);
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
function kn(t) {
  const [s, o] = S(null), m = se((i) => {
    o((p) => p && Fn(p, i));
  }, []), g = E(null), k = E(0), R = E(null), w = se((i) => {
    const p = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    g.current = p;
    const j = sessionStorage.getItem(p);
    if (j)
      try {
        const J = JSON.parse(j);
        return o(J), p;
      } catch {
      }
    const P = Rn(p, i);
    return o(P), sessionStorage.setItem(p, JSON.stringify(P)), p;
  }, [t?.sessionId]), f = se((i) => {
    const p = i ?? s;
    if (!(!p || !g.current))
      try {
        sessionStorage.setItem(g.current, JSON.stringify(p)), k.current = Date.now();
      } catch (j) {
        console.error("[session] persist failed", j);
      }
  }, [s]);
  return Be(() => {
    if (!s) return;
    const p = Date.now() - k.current;
    return p < 1e3 ? (R.current && clearTimeout(R.current), R.current = setTimeout(() => f(), 1e3 - p)) : f(), () => {
      R.current && clearTimeout(R.current);
    };
  }, [s, f]), Be(() => {
    const i = () => f();
    return window.addEventListener("visibilitychange", i), window.addEventListener("beforeunload", i), () => {
      window.removeEventListener("visibilitychange", i), window.removeEventListener("beforeunload", i);
    };
  }, [f]), Be(() => {
    if (!s) return;
    const i = setInterval(() => m({ type: "TICK", now: Date.now() }), 1e3);
    return () => clearInterval(i);
  }, [s, m]), dn(() => ({
    state: s,
    sessionId: g.current,
    init: w,
    setFields: (i) => m({ type: "SET_FIELDS", payload: i }),
    addEvents: (i) => m({ type: "ADD_EVENTS", events: i }),
    addSnapshot: (i) => m({ type: "ADD_SNAPSHOT", snapshot: i }),
    complete: () => m({ type: "COMPLETE" })
  }), [s, m, w]);
}
function _n({ onSessionStart: t, onSessionUpdate: s, onEvent: o }) {
  const [m, g] = S(null), [k, R] = S("optimal"), w = kn();
  return Be(() => {
    if (m && !w.state) {
      const f = w.init(m);
      t?.(f, m);
    }
  }, [m, w]), m ? /* @__PURE__ */ l.jsx(
    Sn,
    {
      monitoringStatus: k,
      sessionData: w.state ?? void 0,
      onStatusChange: (f) => R(f),
      onUpdateSession: (f) => {
        w.setFields(f), s?.(f);
      },
      onAddSnapshot: (f) => w.addSnapshot(f),
      onAddEvent: (f) => {
        w.addEvents([{ ...f, timestamp: f.timestamp ?? Date.now() }]), o?.(f);
      },
      gazeThresholds: {
        mediapipe: { horiz: 0.35, vert: 0.5, yaw: 20, pitch: 18, offDwell: 5, onDwell: 3, calibFrames: 24 },
        fallback: { yaw: 24, pitch: 20, centerOffset: 0.22, offFrames: 5, onFrames: 3 }
      }
    }
  ) : /* @__PURE__ */ l.jsx(
    yn,
    {
      onComplete: (f) => g(f),
      onError: () => g(null)
    }
  );
}
export {
  Sn as FloatingVideo,
  yn as Prechecks,
  _n as ProctoringWidget
};
