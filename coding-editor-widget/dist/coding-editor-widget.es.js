import We, { useState as P, useRef as V, useCallback as fe, useEffect as je } from "react";
var Re = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function vr() {
  if (Ae) return X;
  Ae = 1;
  var x = We, m = Symbol.for("react.element"), D = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, N = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(b, d, f) {
    var u, w = {}, k = null, F = null;
    f !== void 0 && (k = "" + f), d.key !== void 0 && (k = "" + d.key), d.ref !== void 0 && (F = d.ref);
    for (u in d) _.call(d, u) && !C.hasOwnProperty(u) && (w[u] = d[u]);
    if (b && b.defaultProps) for (u in d = b.defaultProps, d) w[u] === void 0 && (w[u] = d[u]);
    return { $$typeof: m, type: b, key: k, ref: F, props: w, _owner: N.current };
  }
  return X.Fragment = D, X.jsx = v, X.jsxs = v, X;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function gr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var x = We, m = Symbol.for("react.element"), D = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), b = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), U = Symbol.iterator, q = "@@iterator";
    function Z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[q];
      return typeof r == "function" ? r : null;
    }
    var M = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        Q("error", e, n);
      }
    }
    function Q(e, r, n) {
      {
        var a = M.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", n = n.concat([s]));
        var l = n.map(function(c) {
          return String(c);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var L = !1, ee = !1, z = !1, re = !1, te = !1, B;
    B = Symbol.for("react.module.reference");
    function T(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === C || te || e === N || e === f || e === u || re || e === F || L || ee || z || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === w || e.$$typeof === v || e.$$typeof === b || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === B || e.getModuleId !== void 0));
    }
    function ne(e, r, n) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? n + "(" + s + ")" : n;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case D:
          return "Portal";
        case C:
          return "Profiler";
        case N:
          return "StrictMode";
        case f:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ae(r) + ".Consumer";
          case v:
            var n = e;
            return ae(n._context) + ".Provider";
          case d:
            return ne(e, e.render, "ForwardRef");
          case w:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case k: {
            var s = e, l = s._payload, c = s._init;
            try {
              return S(c(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, A = 0, oe, ie, ce, o, R, I, W;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function Ye() {
      {
        if (A === 0) {
          oe = console.log, ie = console.info, ce = console.warn, o = console.error, R = console.group, I = console.groupCollapsed, W = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: $,
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
        A++;
      }
    }
    function Ve() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: oe
            }),
            info: O({}, e, {
              value: ie
            }),
            warn: O({}, e, {
              value: ce
            }),
            error: O({}, e, {
              value: o
            }),
            group: O({}, e, {
              value: R
            }),
            groupCollapsed: O({}, e, {
              value: I
            }),
            groupEnd: O({}, e, {
              value: W
            })
          });
        }
        A < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = M.ReactCurrentDispatcher, ve;
    function se(e, r, n) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            ve = a && a[1] || "";
          }
        return `
` + ve + e;
      }
    }
    var ge = !1, le;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Ue();
    }
    function Ee(e, r) {
      if (!e || ge)
        return "";
      {
        var n = le.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      ge = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = pe.current, pe.current = null, Ye();
      try {
        if (r) {
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
            } catch (j) {
              a = j;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (j) {
              a = j;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            a = j;
          }
          e();
        }
      } catch (j) {
        if (j && a && typeof j.stack == "string") {
          for (var i = j.stack.split(`
`), y = a.stack.split(`
`), p = i.length - 1, g = y.length - 1; p >= 1 && g >= 0 && i[p] !== y[g]; )
            g--;
          for (; p >= 1 && g >= 0; p--, g--)
            if (i[p] !== y[g]) {
              if (p !== 1 || g !== 1)
                do
                  if (p--, g--, g < 0 || i[p] !== y[g]) {
                    var E = `
` + i[p].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && le.set(e, E), E;
                  }
                while (p >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        ge = !1, pe.current = l, Ve(), Error.prepareStackTrace = s;
      }
      var K = e ? e.displayName || e.name : "", Y = K ? se(K) : "";
      return typeof e == "function" && le.set(e, Y), Y;
    }
    function ze(e, r, n) {
      return Ee(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ue(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Be(e));
      if (typeof e == "string")
        return se(e);
      switch (e) {
        case f:
          return se("Suspense");
        case u:
          return se("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ze(e.render);
          case w:
            return ue(e.type, r, n);
          case k: {
            var a = e, s = a._payload, l = a._init;
            try {
              return ue(l(s), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, _e = {}, we = M.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var r = e._owner, n = ue(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(n);
      } else
        we.setExtraStackFrame(null);
    }
    function Je(e, r, n, a, s) {
      {
        var l = Function.call.bind(G);
        for (var c in e)
          if (l(e, c)) {
            var i = void 0;
            try {
              if (typeof e[c] != "function") {
                var y = Error((a || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              i = e[c](r, c, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              i = p;
            }
            i && !(i instanceof Error) && (de(s), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, c, typeof i), de(null)), i instanceof Error && !(i.message in _e) && (_e[i.message] = !0, de(s), h("Failed %s type: %s", n, i.message), de(null));
          }
      }
    }
    var Ke = Array.isArray;
    function me(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Xe(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Ce(e) {
      if (Xe(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), Te(e);
    }
    var ke = M.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Ne;
    function qe(e) {
      if (G.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && ke.current;
    }
    function er(e, r) {
      {
        var n = function() {
          Se || (Se = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var n = function() {
          Ne || (Ne = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, n, a, s, l, c) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: c,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, n, a, s) {
      {
        var l, c = {}, i = null, y = null;
        n !== void 0 && (Ce(n), i = "" + n), Ze(r) && (Ce(r.key), i = "" + r.key), qe(r) && (y = r.ref, Qe(r, s));
        for (l in r)
          G.call(r, l) && !He.hasOwnProperty(l) && (c[l] = r[l]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (l in p)
            c[l] === void 0 && (c[l] = p[l]);
        }
        if (i || y) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(c, g), y && rr(c, g);
        }
        return tr(e, i, y, s, a, ke.current, c);
      }
    }
    var he = M.ReactCurrentOwner, Oe = M.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, n = ue(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(n);
      } else
        Oe.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function xe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function Pe() {
      {
        if (he.current) {
          var e = S(he.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var De = {};
    function or(e) {
      {
        var r = Pe();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Fe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = or(r);
        if (De[n])
          return;
        De[n] = !0;
        var a = "";
        e && e._owner && e._owner !== he.current && (a = " It was passed a child from " + S(e._owner.type) + "."), J(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), J(null);
      }
    }
    function Me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (me(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            xe(a) && Fe(a, r);
          }
        else if (xe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Z(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), c; !(c = l.next()).done; )
              xe(c.value) && Fe(c.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          n = r.propTypes;
        else
          return;
        if (n) {
          var a = S(r);
          Je(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !be) {
          be = !0;
          var s = S(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            J(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), J(null);
            break;
          }
        }
        e.ref !== null && (J(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    var $e = {};
    function Le(e, r, n, a, s, l) {
      {
        var c = T(e);
        if (!c) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = ar();
          y ? i += y : i += Pe();
          var p;
          e === null ? p = "null" : me(e) ? p = "array" : e !== void 0 && e.$$typeof === m ? (p = "<" + (S(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, i);
        }
        var g = nr(e, r, n, s, l);
        if (g == null)
          return g;
        if (c) {
          var E = r.children;
          if (E !== void 0)
            if (a)
              if (me(E)) {
                for (var K = 0; K < E.length; K++)
                  Me(E[K], e);
                Object.freeze && Object.freeze(E);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(E, e);
        }
        if (G.call(r, "key")) {
          var Y = S(e), j = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ye = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[Y + ye]) {
            var fr = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ye, Y, fr, Y), $e[Y + ye] = !0;
          }
        }
        return e === _ ? cr(g) : ir(g), g;
      }
    }
    function sr(e, r, n) {
      return Le(e, r, n, !0);
    }
    function lr(e, r, n) {
      return Le(e, r, n, !1);
    }
    var ur = lr, dr = sr;
    H.Fragment = _, H.jsx = ur, H.jsxs = dr;
  }()), H;
}
process.env.NODE_ENV === "production" ? Re.exports = vr() : Re.exports = gr();
var t = Re.exports;
function mr({
  questions: x,
  currentQuestionIndex: m,
  onQuestionChange: D,
  onSessionComplete: _,
  sessionData: N,
  onUpdateSession: C,
  onAddEvent: v
}) {
  const [b, d] = P(""), [f, u] = P("javascript"), [w, k] = P(""), [F, U] = P("editor"), [q, Z] = P(!1), [M, h] = P(0), Q = V(null), L = V(null), ee = V(""), z = V(0), re = V(Date.now()), te = V(Date.now()), B = V(0), T = x[m], ne = fe((o) => {
    L.current && clearTimeout(L.current), L.current = setTimeout(() => {
      o !== ee.current && o.trim().length > 0 && (ee.current = o);
    }, 2e3);
  }, []), ae = fe(
    (o) => {
      if (d(o), z.current += 1, v?.({ eventType: "keystroke", severity: "info", context: "coding", data: {} }), C) {
        const R = o.split(`
`).filter((W) => W.trim().length > 0).length, I = N?.codingMetrics ?? {
          totalKeystrokes: 0,
          linesOfCode: 0,
          codeExecutions: 0,
          externalCopyEvents: 0,
          languageSwitches: 0,
          averageTypingSpeed: 0,
          codingTimeVsReadingTime: { coding: 0, reading: 0 }
        };
        C({
          codingMetrics: {
            ...I,
            totalKeystrokes: z.current,
            linesOfCode: R,
            averageTypingSpeed: z.current / ((Date.now() - re.current) / 6e4)
          }
        });
      }
      ne(o);
    },
    [ne, C, N?.codingMetrics, v]
  ), S = fe(() => {
    te.current = Date.now();
  }, []), O = fe(() => {
    const o = Date.now() - te.current;
    B.current += o, v?.({
      eventType: "gaze_tracking",
      severity: "warning",
      context: "coding",
      data: { focusTimeMs: o, totalFocusMs: B.current, type: "focus_break" }
    });
  }, [v]);
  je(() => {
    const o = () => {
      document.hidden && v?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { timestamp: Date.now() } });
    };
    return document.addEventListener("visibilitychange", o), () => document.removeEventListener("visibilitychange", o);
  }, [v]), je(() => {
    const o = setInterval(() => h((R) => R + 1), 1e3);
    return () => {
      clearInterval(o), L.current && clearTimeout(L.current);
    };
  }, [m]);
  const A = async () => {
    Z(!0), v?.({
      eventType: "code_execution",
      severity: "info",
      context: "coding",
      data: { language: f, codeLength: b.length, linesOfCode: b.split(`
`).length }
    }), setTimeout(() => {
      k(`Code executed successfully!
Language: ${f}
Lines: ${b.split(`
`).length}`), Z(!1), U("output");
    }, 1e3);
  }, oe = () => {
    m < x.length - 1 ? (D(m + 1), d(""), k(""), h(0), z.current = 0, re.current = Date.now(), B.current = 0) : _();
  }, ie = () => {
    m > 0 && D(m - 1);
  }, ce = (o) => `${Math.floor(o / 60)}:${String(o % 60).padStart(2, "0")}`;
  return je(() => {
    const o = Q.current;
    if (!o) return;
    const R = ($) => {
      $.preventDefault(), v?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, action: "copy" } });
    }, I = ($) => {
      $.preventDefault(), v?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, action: "cut" } });
    }, W = ($) => {
      $.preventDefault(), v?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, action: "paste" } });
    };
    return o.addEventListener("copy", R), o.addEventListener("cut", I), o.addEventListener("paste", W), () => {
      o.removeEventListener("copy", R), o.removeEventListener("cut", I), o.removeEventListener("paste", W);
    };
  }, [v]), T ? /* @__PURE__ */ t.jsxs("div", { className: "ce-root", children: [
    /* @__PURE__ */ t.jsx("div", { className: "ce-topbar", children: /* @__PURE__ */ t.jsx("div", { className: "ce-container", children: /* @__PURE__ */ t.jsxs("div", { className: "ce-row", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "ce-row ce-gap-4", children: [
        /* @__PURE__ */ t.jsx("h1", { className: "ce-text-xl ce-font-semibold", children: "Coding Assessment" }),
        /* @__PURE__ */ t.jsxs("span", { className: "ce-badge", children: [
          "Question ",
          m + 1,
          " of ",
          x.length
        ] }),
        /* @__PURE__ */ t.jsx("span", { className: `ce-badge ${T.difficulty}`, children: T.difficulty })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "ce-row ce-gap-4", children: [
        /* @__PURE__ */ t.jsx("div", { className: "ce-row ce-gap-2", children: /* @__PURE__ */ t.jsx("span", { className: "ce-mono", children: ce(M) }) }),
        /* @__PURE__ */ t.jsx("div", { className: "ce-progress", children: /* @__PURE__ */ t.jsx("div", { className: "ce-progress-bar", style: { width: `${(m + 1) / x.length * 100}%` } }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "ce-main", children: [
      /* @__PURE__ */ t.jsx("div", { className: "ce-left", children: /* @__PURE__ */ t.jsxs("div", { className: "ce-p-6 ce-space-y-6", children: [
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("h2", { className: "ce-text-2xl ce-font-bold ce-mb-4", children: T.title }),
          /* @__PURE__ */ t.jsx("p", { className: "ce-text-body", children: T.description })
        ] }),
        T.constraints.length > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("h3", { className: "ce-text-lg ce-font-semibold ce-mb-3", children: "Constraints" }),
          /* @__PURE__ */ t.jsx("ul", { className: "ce-space-y-2", children: T.constraints.map((o, R) => /* @__PURE__ */ t.jsxs("li", { className: "ce-row-start", children: [
            /* @__PURE__ */ t.jsx("span", { className: "ce-bullet", children: "•" }),
            /* @__PURE__ */ t.jsx("span", { className: "ce-text-muted", children: o })
          ] }, R)) })
        ] }),
        T.examples.length > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("h3", { className: "ce-text-lg ce-font-semibold ce-mb-3", children: "Examples" }),
          /* @__PURE__ */ t.jsx("div", { className: "ce-space-y-4", children: T.examples.map((o, R) => /* @__PURE__ */ t.jsxs("div", { className: "ce-example", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "ce-grid-2 ce-gap-4", children: [
              /* @__PURE__ */ t.jsxs("div", { children: [
                /* @__PURE__ */ t.jsx("h4", { className: "ce-font-medium ce-text-sm ce-mb-2", children: "Input:" }),
                /* @__PURE__ */ t.jsx("code", { className: "ce-code-block", children: o.input })
              ] }),
              /* @__PURE__ */ t.jsxs("div", { children: [
                /* @__PURE__ */ t.jsx("h4", { className: "ce-font-medium ce-text-sm ce-mb-2", children: "Output:" }),
                /* @__PURE__ */ t.jsx("code", { className: "ce-code-block", children: o.output })
              ] })
            ] }),
            o.explanation && /* @__PURE__ */ t.jsxs("div", { className: "ce-mt-3", children: [
              /* @__PURE__ */ t.jsx("h4", { className: "ce-font-medium ce-text-sm ce-mb-1", children: "Explanation:" }),
              /* @__PURE__ */ t.jsx("p", { className: "ce-text-muted-sm", children: o.explanation })
            ] })
          ] }, R)) })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ce-row-between ce-pt-4 ce-border-top", children: [
          /* @__PURE__ */ t.jsx("button", { className: "ce-btn ce-btn-outline", onClick: ie, disabled: m === 0, children: "Previous" }),
          /* @__PURE__ */ t.jsx("button", { className: `ce-btn ${m === x.length - 1 ? "ce-btn-success" : ""}`, onClick: oe, children: m === x.length - 1 ? "Complete" : "Next" })
        ] })
      ] }) }),
      /* @__PURE__ */ t.jsxs("div", { className: "ce-right", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "ce-toolbar", children: [
          /* @__PURE__ */ t.jsx("div", { className: "ce-row ce-gap-4", children: /* @__PURE__ */ t.jsx("span", { className: "ce-font-medium", children: "Code Editor" }) }),
          /* @__PURE__ */ t.jsxs("div", { className: "ce-row ce-gap-4", children: [
            /* @__PURE__ */ t.jsxs("select", { className: "ce-select", value: f, onChange: (o) => u(o.target.value), children: [
              /* @__PURE__ */ t.jsx("option", { value: "javascript", children: "JavaScript" }),
              /* @__PURE__ */ t.jsx("option", { value: "python", children: "Python" }),
              /* @__PURE__ */ t.jsx("option", { value: "java", children: "Java" }),
              /* @__PURE__ */ t.jsx("option", { value: "cpp", children: "C++" })
            ] }),
            /* @__PURE__ */ t.jsx("button", { className: "ce-btn ce-btn-sm", onClick: A, disabled: q || !b.trim(), children: q ? "Running..." : "Run Code" })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ce-editor", children: /* @__PURE__ */ t.jsxs("div", { className: "ce-tabs", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "ce-tabs-list", children: [
            /* @__PURE__ */ t.jsx("button", { className: `ce-tab ${F === "editor" ? "ce-active" : ""}`, type: "button", onClick: () => U("editor"), children: "Editor" }),
            /* @__PURE__ */ t.jsx("button", { className: `ce-tab ${F === "output" ? "ce-active" : ""}`, type: "button", onClick: () => U("output"), children: "Output" })
          ] }),
          F === "editor" ? /* @__PURE__ */ t.jsx("div", { className: "ce-tab-panel", children: /* @__PURE__ */ t.jsx(
            "textarea",
            {
              ref: Q,
              value: b,
              onChange: (o) => ae(o.target.value),
              onFocus: S,
              onBlur: O,
              className: "ce-textarea",
              placeholder: `// Write your ${f} solution here...

function solution() {
    // Your code here
}`,
              spellCheck: !1
            }
          ) }) : /* @__PURE__ */ t.jsx("div", { className: "ce-tab-panel", children: /* @__PURE__ */ t.jsx("pre", { className: "ce-output", children: w || "Run your code to see the output here..." }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx("style", { children: `
      .ce-root { min-height: 100vh; background: var(--ce-bg, #fff); color: var(--ce-fg, #0a0a0a); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
      .ce-topbar { border-bottom: 1px solid #e5e7eb; background: var(--ce-card, #fff); }
      .ce-container { max-width: 1200px; margin: 0 auto; padding: 12px 16px; }
      .ce-row { display: flex; align-items: center; }
      .ce-row-start { display: flex; align-items: flex-start; gap: 8px; }
      .ce-row-between { display: flex; align-items: center; justify-content: space-between; }
      .ce-gap-2 { gap: 8px } .ce-gap-4 { gap: 16px }
      .ce-badge { display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 999px; border: 1px solid #e5e7eb; font-size: 12px }
      .ce-badge.medium { background:#f3f4f6 } .ce-badge.hard { background:#fee2e2; color:#991b1b }
      .ce-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
      .ce-progress { width: 128px; height: 6px; border-radius: 999px; background: #f3f4f6; overflow:hidden }
      .ce-progress-bar { height: 100%; background:#3b82f6 }
      .ce-main { display: flex; height: calc(100vh - 64px); }
      .ce-left { width: 40%; border-right: 1px solid #e5e7eb; background: var(--ce-card, #fff); overflow: auto; }
      .ce-right { flex: 1; display: flex; flex-direction: column }
      .ce-p-6 { padding: 24px } .ce-space-y-6 > * + * { margin-top: 24px }
      .ce-text-2xl { font-size: 24px } .ce-text-xl { font-size: 20px } .ce-font-bold { font-weight:700 } .ce-font-semibold { font-weight:600 }
      .ce-mb-4 { margin-bottom: 16px }
      .ce-text-body { color: #374151 }
      .ce-text-muted { color: #6b7280 }
      .ce-text-muted-sm { color:#6b7280; font-size: 14px }
      .ce-example { background: #f9fafb; border-radius: 8px; padding: 16px }
      .ce-code-block { display:block; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 13px; background:#f3f4f6; padding:8px; border-radius:6px }
      .ce-grid-2 { display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); }
      .ce-gap-4 { gap:16px }
      .ce-pt-4 { padding-top: 16px } .ce-border-top { border-top:1px solid #e5e7eb }
      .ce-btn { display:inline-flex; align-items:center; justify-content:center; height:36px; padding:0 16px; border-radius:8px; background:#0f172a; color:#fff; border:1px solid transparent; cursor:pointer }
      .ce-btn:hover { background:#1e293b }
      .ce-btn:disabled { opacity:0.5; cursor:not-allowed }
      .ce-btn-outline { background:#fff; color:#0f172a; border-color:#e5e7eb }
      .ce-btn-outline:hover { background:#f9fafb }
      .ce-btn-sm { height:32px; padding: 0 12px }
      .ce-btn-success { background:#16a34a }
      .ce-toolbar { display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #e5e7eb; background:var(--ce-card,#fff); padding:12px 16px }
      .ce-select { height:36px; border-radius:8px; border:1px solid #e5e7eb; padding:0 12px; background:#fff }
      .ce-editor { flex: 1; display:flex; flex-direction:column }
      .ce-tabs { display:flex; flex-direction:column; height:100% }
      .ce-tabs-list { display:grid; grid-template-columns: repeat(2, 1fr); border-bottom:1px solid #e5e7eb }
      .ce-tab { height:40px; background:transparent; border:0; cursor:pointer }
      .ce-active { font-weight:600 }
      .ce-tab-panel { flex:1 }
      .ce-textarea { width:100%; height:100%; padding:16px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 13px; background:#0b1020; color:#e2e8f0; border:0; resize:none; outline:none }
      .ce-output { height:100%; padding:16px; background:#0b1020; color:#e2e8f0; overflow:auto; white-space:pre-wrap }
      .ce-min-h { min-height:100vh } .ce-center { display:flex; align-items:center; justify-content:center }
      .ce-card { background:#fff; border-radius:12px; border:1px solid #e5e7eb; }
      .ce-w-md { width: 480px } .ce-card-content { padding: 16px }
      .ce-text-center { text-align:center }
      ` })
  ] }) : /* @__PURE__ */ t.jsx("div", { className: "ce-min-h ce-center", children: /* @__PURE__ */ t.jsx("div", { className: "ce-card ce-w-md", children: /* @__PURE__ */ t.jsxs("div", { className: "ce-card-content ce-p-8 ce-text-center", children: [
    /* @__PURE__ */ t.jsx("h2", { className: "ce-text-xl ce-font-semibold ce-mb-4", children: "No Questions Available" }),
    /* @__PURE__ */ t.jsx("p", { className: "ce-text-muted ce-mb-4", children: "Please load questions to begin the coding assessment." }),
    /* @__PURE__ */ t.jsx("button", { className: "ce-btn", onClick: _, children: "Complete Session" })
  ] }) }) });
}
function br({ questions: x, onSessionStart: m, onSessionUpdate: D, onEvent: _ }) {
  const [N, C] = P(0), [v] = P(() => Math.random().toString(36).slice(2)), [b, d] = P(null);
  if (!b && x?.length) {
    const f = {
      sessionId: v,
      sessionType: "coding-assessment",
      startTime: Date.now(),
      currentQuestion: { questionId: x[0].id, startTime: Date.now(), language: "javascript" },
      codingMetrics: {
        totalKeystrokes: 0,
        linesOfCode: 0,
        codeExecutions: 0,
        externalCopyEvents: 0,
        languageSwitches: 0,
        averageTypingSpeed: 0,
        codingTimeVsReadingTime: { coding: 0, reading: 0 }
      }
    };
    d(f), m?.(v);
  }
  return /* @__PURE__ */ t.jsx(
    mr,
    {
      questions: x,
      currentQuestionIndex: N,
      onQuestionChange: (f) => {
        C(f), d((u) => u && { ...u, currentQuestion: { questionId: x[f].id, startTime: Date.now(), language: u.currentQuestion?.language ?? "javascript" } });
      },
      onSessionComplete: () => {
      },
      sessionData: b ?? void 0,
      onUpdateSession: (f) => {
        d((u) => u && { ...u, ...f }), D?.(f);
      },
      onAddEvent: (f) => _?.(f)
    }
  );
}
export {
  br as CodingEditorWidget,
  mr as CodingEnvironment
};
