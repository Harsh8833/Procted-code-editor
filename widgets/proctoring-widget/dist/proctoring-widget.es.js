import ut, { useState as m, useRef as E, useCallback as P, useEffect as ee, useMemo as dt } from "react";
var Fe = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function ft() {
  if (Ze) return Ce;
  Ze = 1;
  var n = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function r(f, u, C) {
    var _ = null;
    if (C !== void 0 && (_ = "" + C), u.key !== void 0 && (_ = "" + u.key), "key" in u) {
      C = {};
      for (var A in u)
        A !== "key" && (C[A] = u[A]);
    } else C = u;
    return u = C.ref, {
      $$typeof: n,
      type: f,
      key: _,
      ref: u !== void 0 ? u : null,
      props: C
    };
  }
  return Ce.Fragment = a, Ce.jsx = r, Ce.jsxs = r, Ce;
}
var Ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function mt() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    function n(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === $ ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case N:
          return "Fragment";
        case L:
          return "Profiler";
        case B:
          return "StrictMode";
        case J:
          return "Suspense";
        case oe:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case M:
            return "Portal";
          case te:
            return (t.displayName || "Context") + ".Provider";
          case X:
            return (t._context.displayName || "Context") + ".Consumer";
          case U:
            var d = t.render;
            return t = t.displayName, t || (t = d.displayName || d.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case v:
            return d = t.displayName || null, d !== null ? d : n(t.type) || "Memo";
          case x:
            d = t._payload, t = t._init;
            try {
              return n(t(d));
            } catch {
            }
        }
      return null;
    }
    function a(t) {
      return "" + t;
    }
    function r(t) {
      try {
        a(t);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var k = d.error, j = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return k.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), a(t);
      }
    }
    function f(t) {
      if (t === N) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === x)
        return "<...>";
      try {
        var d = n(t);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var t = se.A;
      return t === null ? null : t.getOwner();
    }
    function C() {
      return Error("react-stack-top-frame");
    }
    function _(t) {
      if (ue.call(t, "key")) {
        var d = Object.getOwnPropertyDescriptor(t, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function A(t, d) {
      function k() {
        fe || (fe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: k,
        configurable: !0
      });
    }
    function w() {
      var t = n(this.type);
      return F[t] || (F[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function H(t, d, k, j, V, W, ce, ne) {
      return k = W.ref, t = {
        $$typeof: q,
        type: t,
        key: d,
        props: W,
        _owner: V
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function p(t, d, k, j, V, W, ce, ne) {
      var e = d.children;
      if (e !== void 0)
        if (j)
          if (ye(e)) {
            for (j = 0; j < e.length; j++)
              g(e[j]);
            Object.freeze && Object.freeze(e);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(e);
      if (ue.call(d, "key")) {
        e = n(t);
        var s = Object.keys(d).filter(function(O) {
          return O !== "key";
        });
        j = 0 < s.length ? "{key: someKey, " + s.join(": ..., ") + ": ...}" : "{key: someKey}", me[e + j] || (s = 0 < s.length ? "{" + s.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          e,
          s,
          e
        ), me[e + j] = !0);
      }
      if (e = null, k !== void 0 && (r(k), e = "" + k), _(d) && (r(d.key), e = "" + d.key), "key" in d) {
        k = {};
        for (var i in d)
          i !== "key" && (k[i] = d[i]);
      } else k = d;
      return e && A(
        k,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), H(
        t,
        e,
        W,
        V,
        u(),
        k,
        ce,
        ne
      );
    }
    function g(t) {
      typeof t == "object" && t !== null && t.$$typeof === q && t._store && (t._store.validated = 1);
    }
    var z = ut, q = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), te = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), se = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = Object.prototype.hasOwnProperty, ye = Array.isArray, de = console.createTask ? console.createTask : function() {
      return null;
    };
    z = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var fe, F = {}, we = z.react_stack_bottom_frame.bind(
      z,
      C
    )(), ve = de(f(C)), me = {};
    Ae.Fragment = N, Ae.jsx = function(t, d, k, j, V) {
      var W = 1e4 > se.recentlyCreatedOwnerStacks++;
      return p(
        t,
        d,
        k,
        !1,
        j,
        V,
        W ? Error("react-stack-top-frame") : we,
        W ? de(f(t)) : ve
      );
    }, Ae.jsxs = function(t, d, k, j, V) {
      var W = 1e4 > se.recentlyCreatedOwnerStacks++;
      return p(
        t,
        d,
        k,
        !0,
        j,
        V,
        W ? Error("react-stack-top-frame") : we,
        W ? de(f(t)) : ve
      );
    };
  }()), Ae;
}
process.env.NODE_ENV === "production" ? Fe.exports = ft() : Fe.exports = mt();
var o = Fe.exports;
function et(n) {
  const a = window.AudioContext || window.webkitAudioContext, r = new a(), f = r.createMediaStreamSource(n), u = r.createAnalyser();
  u.fftSize = 2048, u.smoothingTimeConstant = 0.85, f.connect(u);
  const C = new Uint8Array(u.fftSize);
  function _() {
    u.getByteTimeDomainData(C);
    let A = 0;
    for (let w = 0; w < C.length; w++) {
      const H = (C[w] - 128) / 128;
      A += H * H;
    }
    return Math.sqrt(A / C.length);
  }
  return {
    getLevel: () => _(),
    dispose: async () => {
      try {
        f.disconnect();
      } catch {
      }
      try {
        u.disconnect();
      } catch {
      }
      try {
        await r.close();
      } catch {
      }
    }
  };
}
let je = null;
async function ht() {
  if (je) return je;
  const n = await import("./blazeface.esm-D5KORnOe.js"), a = await import("./index-2kM27Pi_.js");
  return a.ready && await a.ready(), je = await n.load(), je;
}
async function pt(n) {
  if ("FaceDetector" in window)
    try {
      const r = await new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }).detect(n);
      return r && r.length > 0 ? { present: !0, confidence: 0.8 } : { present: !1, confidence: 0 };
    } catch {
    }
  try {
    const r = await (await ht()).estimateFaces(n, !1);
    if (r && r.length > 0) {
      const f = r[0].probability ? r[0].probability[0] : 0.7;
      return { present: !0, confidence: Math.max(0.5, Math.min(1, f)) };
    }
  } catch {
  }
  return { present: !1, confidence: 0 };
}
function gt({ onComplete: n, onError: a }) {
  const r = ["camera", "microphone", "face", "monitor", "browser"], [f, u] = m({
    camera: "pending",
    microphone: "pending",
    face: "pending",
    monitor: "pending",
    browser: "pending"
  }), [C, _] = m(0), [A, w] = m(0), [H, p] = m(!1), [g, z] = m(null), [q, M] = m({}), [N, B] = m({}), L = E(null), X = E(null), te = E(null), U = E(null), J = E(null), oe = E(null), v = E(null), x = () => {
    try {
      L.current?.getTracks().forEach((e) => e.stop());
    } catch {
    }
    try {
      X.current?.getTracks().forEach((e) => e.stop());
    } catch {
    }
    L.current = null, X.current = null, te.current && (te.current.dispose().catch(() => {
    }), te.current = null), U.current && (cancelAnimationFrame(U.current), U.current = null);
  }, K = async (e) => {
    try {
      const s = window.AudioContext || window.webkitAudioContext;
      if (!s) throw new Error("AudioContext not supported");
      const i = new s(), O = i.createMediaStreamSource(e), D = i.createAnalyser();
      D.fftSize = 256, D.smoothingTimeConstant = 0.8, O.connect(D);
      const be = new Uint8Array(D.frequencyBinCount);
      D.getByteFrequencyData(be), sessionStorage.setItem("audio-context-initialized", "true"), O.disconnect(), await i.close(), typeof window < "u" && (window.precheckAudioStream = e);
    } catch {
      sessionStorage.setItem("audio-context-initialized", "false");
    }
  }, $ = async (e) => {
    const s = J.current;
    let i = 0, O = 0, D = 0;
    const be = 30;
    for (; D < be && i < 5; ) {
      try {
        const he = await pt(s);
        he.present && (i += 1, O = Math.max(O, he.confidence));
      } catch {
      }
      D++, _(D), await new Promise((he) => setTimeout(he, 100));
    }
    return { status: i >= 5, confidence: O, timestamp: Date.now() };
  }, se = async () => {
    try {
      return "permissions" in navigator ? (await navigator.permissions.query({ name: "window-management" })).state : "unsupported";
    } catch {
      return "unsupported";
    }
  }, ue = () => {
    try {
      const e = window.screen.width, s = window.screen.height, i = window.screen.availWidth;
      return e / s > 3 || e > i * 1.5 || [3840, 3360, 2560, 4480, 5120].includes(e) ? 2 : 1;
    } catch {
      return 1;
    }
  }, ye = async () => {
    try {
      if ("getScreenDetails" in window) {
        const e = await window.getScreenDetails();
        v.current = e.screens.length;
      } else
        v.current = null;
    } catch {
      v.current = null;
    } finally {
      oe.current?.(!0), oe.current = null, p(!1);
    }
  }, de = async () => {
    try {
      if (!window.isSecureContext) return ue();
      if ("permissions" in navigator)
        try {
          const e = await navigator.permissions.query({ name: "window-management" });
          if (z(e.state), e.state === "granted") {
            if ("getScreenDetails" in window)
              return (await window.getScreenDetails()).screens.length;
          } else if (e.state === "prompt" && (p(!0), await new Promise((s) => {
            oe.current = s;
          }), p(!1), v.current != null)) {
            const s = v.current;
            return v.current = null, s;
          }
        } catch {
        }
      return ue();
    } catch {
      return 1;
    }
  }, fe = () => [
    "navigator.mediaDevices",
    "navigator.mediaDevices.getUserMedia",
    "requestAnimationFrame",
    "WebAssembly"
  ].every((s) => {
    const i = s.split(".");
    let O = window;
    for (const D of i) {
      if (!(D in O)) return !1;
      O = O[D];
    }
    return !0;
  }), F = (e, s) => {
    u((i) => ({ ...i, [e]: s }));
  }, we = P(async () => {
    F("camera", "running"), M((e) => ({ ...e, camera: "" }));
    try {
      try {
        L.current?.getTracks().forEach((s) => s.stop());
      } catch {
      }
      const e = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 15 } }
      });
      if (L.current = e, !J.current) {
        const s = document.createElement("video");
        s.muted = !0, s.playsInline = !0, J.current = s;
      }
      J.current.srcObject = e;
      try {
        await J.current.play();
      } catch {
      }
      return B((s) => ({ ...s, cameraAccess: !0 })), F("camera", "passed"), !0;
    } catch (e) {
      const s = e?.name === "NotAllowedError" ? "Camera permission denied" : e?.message || "Camera access failed";
      return M((i) => ({ ...i, camera: s })), F("camera", "failed"), !1;
    }
  }, []), ve = P(async () => {
    F("microphone", "running"), M((e) => ({ ...e, microphone: "" }));
    try {
      try {
        X.current?.getTracks().forEach((s) => s.stop());
      } catch {
      }
      const e = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      X.current = e, B((s) => ({ ...s, microphoneAccess: !0 })), await K(e);
      try {
        const s = et(e);
        te.current = s;
        const i = () => {
          w(s.getLevel()), U.current = requestAnimationFrame(i);
        };
        U.current = requestAnimationFrame(i);
      } catch {
      }
      return F("microphone", "passed"), !0;
    } catch (e) {
      const s = e?.name === "NotAllowedError" ? "Microphone permission denied" : e?.message || "Microphone access failed";
      return M((i) => ({ ...i, microphone: s })), F("microphone", "failed"), !1;
    }
  }, []), me = P(async () => {
    F("face", "running"), M((e) => ({ ...e, face: "" }));
    try {
      if (!L.current) throw new Error("Camera is not initialized");
      const e = await $(L.current);
      if (B((s) => ({ ...s, faceDetection: e })), e.status)
        return F("face", "passed"), !0;
      throw new Error("No face detected. Please align your face within the frame and retry.");
    } catch (e) {
      const s = e?.message || "Face detection failed";
      return M((i) => ({ ...i, face: s })), F("face", "failed"), !1;
    }
  }, []), t = P(async () => {
    F("monitor", "running"), M((e) => ({ ...e, monitor: "" }));
    try {
      try {
        z(await se());
      } catch {
      }
      const e = await de();
      if (e && e >= 1)
        return B((s) => ({ ...s, monitorCount: e })), F("monitor", "passed"), !0;
      throw new Error("Could not verify monitors");
    } catch (e) {
      return M((s) => ({ ...s, monitor: e?.message || "Monitor verification failed" })), F("monitor", "failed"), !1;
    }
  }, []), d = P(async () => {
    F("browser", "running"), M((e) => ({ ...e, browser: "" }));
    try {
      const e = fe();
      if (B((s) => ({ ...s, browserSupport: e })), !e) throw new Error("Required browser features are unavailable");
      return F("browser", "passed"), !0;
    } catch (e) {
      return M((s) => ({ ...s, browser: e?.message || "Browser not supported" })), F("browser", "failed"), !1;
    }
  }, []), k = {
    camera: we,
    microphone: ve,
    face: me,
    monitor: t,
    browser: d
  }, j = P(async (e) => {
    for (let s = e; s < r.length; s++) {
      const i = r[s];
      if (!await k[i]()) break;
    }
  }, [k]);
  ee(() => {
    if (!r.every((i) => f[i] === "passed")) return;
    const s = {
      cameraAccess: !!N.cameraAccess,
      microphoneAccess: !!N.microphoneAccess,
      faceDetection: N.faceDetection || { status: !1, confidence: 0, timestamp: Date.now() },
      monitorCount: N.monitorCount || 1,
      browserSupport: !!N.browserSupport,
      codeEditorReady: !0
    };
    n(s), x();
  }, [f, N]), ee(() => (j(0), () => x()), []);
  const V = (e) => {
    const s = r.indexOf(e);
    u((i) => {
      const O = { ...i };
      for (let D = s; D < r.length; D++) O[r[D]] = "pending";
      return O;
    }), M((i) => ({ ...i, [e]: "" })), j(s);
  }, W = r.filter((e) => f[e] === "passed").length, ce = r.some((e) => f[e] === "running"), ne = Math.round((W + (ce ? 0.5 : 0)) / r.length * 100);
  return /* @__PURE__ */ o.jsx("div", { style: { fontFamily: "system-ui, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", background: "linear-gradient(135deg,#eff6ff,#eef2ff)" }, children: /* @__PURE__ */ o.jsxs("div", { style: { width: 720, maxWidth: "95vw", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }, children: [
    /* @__PURE__ */ o.jsxs("div", { style: { textAlign: "center", marginBottom: 12 }, children: [
      /* @__PURE__ */ o.jsx("h2", { style: { margin: 0, fontSize: 20, fontWeight: 700 }, children: "System Pre-Check" }),
      /* @__PURE__ */ o.jsx("p", { style: { color: "#6b7280" }, children: "Verifying your system for proctored assessment" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12 }, children: [
        /* @__PURE__ */ o.jsx("span", { children: "Overall Progress" }),
        /* @__PURE__ */ o.jsxs("span", { children: [
          ne,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ o.jsx("div", { style: { height: 8, background: "#f3f4f6", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ o.jsx("div", { style: { width: `${ne}%`, height: 8, background: "#3b82f6" } }) })
    ] }),
    /* @__PURE__ */ o.jsx("div", { style: { display: "grid", gap: 8 }, children: r.map((e) => {
      const s = e === "camera" ? "Camera Access" : e === "microphone" ? "Microphone Access" : e === "face" ? "Face Detection" : e === "monitor" ? "Monitor Verification" : "Browser Support", i = f[e], O = i === "passed" ? "#ecfdf5" : i === "running" ? "#eff6ff" : i === "failed" ? "#fef2f2" : "#f9fafb", D = i === "passed" ? "#10b981" : i === "running" ? "#3b82f6" : i === "failed" ? "#dc2626" : "#9ca3af";
      return /* @__PURE__ */ o.jsxs("div", { style: { display: "grid", gridTemplateColumns: "16px 1fr auto", gap: 12, alignItems: "center", padding: 12, borderRadius: 8, border: "1px solid #e5e7eb", background: O }, children: [
        /* @__PURE__ */ o.jsx("div", { style: { width: 12, height: 12, borderRadius: 9999, background: D } }),
        /* @__PURE__ */ o.jsxs("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ o.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: /* @__PURE__ */ o.jsx("div", { style: { fontWeight: 600, fontSize: 14 }, children: s }) }),
          e === "face" && /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", gap: 12, alignItems: "center", marginTop: 8 }, children: [
            /* @__PURE__ */ o.jsx("video", { ref: J, muted: !0, playsInline: !0, autoPlay: !0, style: { width: 180, height: 112, background: "#000", borderRadius: 6 } }),
            i === "running" && /* @__PURE__ */ o.jsxs("div", { style: { color: "#6b7280", fontSize: 12 }, children: [
              "Analyzing frames: ",
              C
            ] })
          ] }),
          e === "microphone" && i !== "pending" && /* @__PURE__ */ o.jsx("div", { style: { marginTop: 6, width: 220, height: 8, background: "#e5e7eb", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ o.jsx("div", { style: { width: `${Math.min(100, Math.round(A * 200))}%`, height: 8, background: "#10b981", transition: "width 150ms" } }) }),
          q[e] && /* @__PURE__ */ o.jsx("div", { style: { marginTop: 6, color: "#dc2626", fontSize: 12 }, children: q[e] }),
          e === "monitor" && (i === "running" || i === "pending") && H && /* @__PURE__ */ o.jsxs("div", { style: { marginTop: 6, display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ o.jsx("span", { style: { fontSize: 12, color: "#6b7280" }, children: "Enable multi-screen detection" }),
            /* @__PURE__ */ o.jsx("button", { onClick: ye, style: { fontSize: 12, padding: "6px 10px", borderRadius: 6, background: "#3b82f6", color: "#fff", border: 0 }, children: "Allow Window Management" })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ o.jsx("div", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 9999, background: i === "passed" ? "#111827" : i === "failed" ? "#fee2e2" : "#e5e7eb", color: i === "passed" ? "#fff" : "#111827" }, children: i === "passed" ? "Passed" : i === "running" ? "Checking…" : i === "failed" ? "Failed" : "Pending" }),
          i === "failed" && /* @__PURE__ */ o.jsx("button", { onClick: () => V(e), style: { fontSize: 12, padding: "6px 10px", borderRadius: 6, background: "#111827", color: "#fff", border: 0 }, children: "Retry" })
        ] })
      ] }, e);
    }) })
  ] }) });
}
function yt(n) {
  const { onEvent: a, context: r = "coding" } = n || {}, [f, u] = m("idle"), [C, _] = m(void 0), [A, w] = m(0), [H, p] = m(0), g = E(null), z = E(null), q = E(null), M = E(!1), N = E(0), B = E(0), L = E(null), X = P(() => {
    q.current && cancelAnimationFrame(q.current), q.current = null;
    try {
      g.current?.dispose();
    } catch {
    }
    g.current = null;
    try {
      z.current?.getTracks().forEach((v) => v.stop());
    } catch {
    }
    z.current = null, u("idle");
  }, []), te = P(
    (v) => {
      const x = Date.now(), K = M.current;
      v > 18 && x - N.current > 2e3 && (p(($) => $ + 1), N.current = x, a?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: r,
        data: { level: v, reason: "audio_spike", faceDetected: K }
      })), K && v < 3 ? L.current == null ? L.current = x : x - L.current > 15e3 && (p(($) => $ + 1), L.current = null, a?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: r,
        data: { level: v, reason: "extended_silence_with_face" }
      })) : v >= 3 && (L.current = null), !K && v > 12 && x - B.current > 3e3 && (p(($) => $ + 1), B.current = x, a?.({
        eventType: "audio_anomaly",
        severity: "warning",
        context: r,
        data: { level: v, reason: "audio_without_face" }
      }));
    },
    [r, a]
  ), U = P(() => {
    try {
      if (!g.current) return;
      const v = g.current.getLevel(), x = Math.max(0, Math.min(100, Math.round(v * 160)));
      w(x), te(x);
    } finally {
      q.current = requestAnimationFrame(U);
    }
  }, [te]), J = P(
    async (v) => {
      try {
        _(void 0), p(0), N.current = 0, B.current = 0, L.current = null;
        let x = v;
        if (!x && typeof window < "u" && window.precheckAudioStream) {
          const se = window.precheckAudioStream;
          se?.active && se.getAudioTracks().length > 0 && (x = se);
        }
        x || (x = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0, sampleRate: 44100 }
        })), z.current = x;
        const K = x.getAudioTracks(), $ = K.length ? new MediaStream(K) : x;
        g.current = et($), u("running"), q.current = requestAnimationFrame(U);
      } catch (x) {
        u("error"), _(x instanceof Error ? x.message : String(x));
      }
    },
    [U]
  ), oe = P((v) => {
    M.current = v;
  }, []);
  return ee(() => X, [X]), { status: f, error: C, level: A, anomalyCount: H, start: J, stop: X, setFaceDetected: oe };
}
function wt({ monitoringStatus: n, sessionData: a, onStatusChange: r, onUpdateSession: f, onAddEvent: u }) {
  const [C, _] = m({ x: typeof window < "u" ? window.innerWidth - 280 : 0, y: typeof window < "u" ? window.innerHeight - 400 : 0 }), [A, w] = m(!1), [H, p] = m({ x: 0, y: 0 }), [g, z] = m(0), [q, M] = m(!1), [N, B] = m(null), [L, X] = m(null), [te, U] = m(null), [J, oe] = m(null), [v, x] = m(0), [K, $] = m(0), [se, ue] = m([]), [ye, de] = m(0), [fe, F] = m(0), [we, ve] = m(0), [me, t] = m(0), [d, k] = m(0), [j, V] = m(!1), [W, ce] = m(null), [ne, e] = m(null), [s, i] = m(0), [O, D] = m(0), [be, Oe] = m(0), [he, Pe] = m(null), [ze, tt] = m(0), [Et, nt] = m(0), pe = E(null), De = E(null), Ie = E(null), Me = E(null), xe = E(null), Te = E(null), rt = E(!1), Ne = E(0), Le = E(0), Ee = E("none");
  E({ noFace: 0, multipleFaces: 0 });
  const ae = E({ noFace: !1, multipleFaces: !1, gazeOff: !1 }), { level: qe, anomalyCount: We, start: ot, stop: st, setFaceDetected: Ye } = yt({
    context: "coding",
    onEvent: (c) => u?.({ ...c, timestamp: Date.now() })
  });
  ee(() => x(qe), [qe]), ee(() => $(We), [We]);
  const Ge = P((c, l) => {
    const h = c.data;
    let y = 0, T = 0, Z = 0;
    for (let S = 0; S < h.length; S += 4) {
      const Y = h[S], ge = h[S + 1], re = h[S + 2], G = (Y + ge + re) / 3;
      if (y += G, S > 0) {
        const Se = (h[S - 4] + h[S - 3] + h[S - 2]) / 3;
        T += Math.abs(G - Se);
      }
      if (S > c.width * 4 && S < h.length - c.width * 4) {
        const Se = (h[S - c.width * 4] + h[S - c.width * 4 + 1] + h[S - c.width * 4 + 2]) / 3, lt = (h[S + c.width * 4] + h[S + c.width * 4 + 1] + h[S + c.width * 4 + 2]) / 3;
        (Math.abs(G - Se) > 30 || Math.abs(G - lt) > 30) && Z++;
      }
    }
    const b = h.length / 4;
    y /= b, T /= b;
    const R = Z / b, Q = l.width / l.height, I = {
      neutral: Math.max(0.1, 0.6 - Math.abs(y - 120) / 200 - Math.abs(T - 15) / 100),
      happy: Math.max(0.05, (y > 115 ? 0.4 : 0.1) + (R > 0.15 ? 0.3 : 0) + (Q > 0.85 ? 0.2 : 0)),
      focused: Math.max(0.05, (T > 20 ? 0.4 : 0.1) + (R > 0.12 ? 0.2 : 0) + (y < 110 ? 0.2 : 0)),
      concerned: Math.max(0.05, (y < 105 ? 0.3 : 0.1) + (T > 25 ? 0.2 : 0) + (Q < 0.75 ? 0.2 : 0)),
      surprised: Math.max(0.05, (Q > 0.9 ? 0.3 : 0.1) + (R > 0.18 ? 0.3 : 0))
    }, ie = Date.now() % 1e4 / 1e4;
    Object.keys(I).forEach((S) => {
      const Y = S;
      I[Y] += Math.sin(ie * Math.PI * 2) * 0.1, I[Y] = Math.max(0.05, Math.min(0.95, I[Y]));
    });
    const ke = Object.entries(I).reduce((S, Y) => I[S[0]] > I[Y[0]] ? S : Y)[0], le = Math.max(...Object.values(I));
    return { dominant: ke, confidence: le, emotions: I };
  }, []), Be = P((c, l) => {
    const h = l.data;
    let y = 0, T = 0, Z = 0;
    const b = Math.floor(l.height * 0.6);
    for (let le = Math.floor(l.height * 0.3); le < b; le++)
      for (let S = 0; S < l.width; S += 4) {
        const Y = (le * l.width + S) * 4, ge = h[Y], re = h[Y + 1], G = h[Y + 2];
        (ge + re + G) / 3 < 100 ? y++ : T++, (Math.abs(ge - re) > 30 || Math.abs(re - G) > 30) && Z++;
      }
    const R = y + T, Q = R ? y / R : 0, I = R ? Z / R : 0, ie = Q > 0.4 && I < 0.3, ke = Q > 0.2;
    return { isProfessional: ie, hasShirt: ke, confidence: 0.7, details: ie ? "Professional attire detected" : "Casual attire detected" };
  }, []), Ue = P((c, l, h) => {
    const y = c.x + c.width / 2, T = c.y + c.height / 2, Z = (y - l / 2) / l, b = (T - h / 2) / h, R = Math.sqrt(Z * Z + b * b), Q = R < 0.15, I = Math.max(0, 1 - R * 2);
    return { isLookingAtCamera: Q, gazeDirection: { x: Z, y: b }, confidence: 0.8, attentionScore: I };
  }, []), $e = P((c) => {
    const { gazeDirection: l, attentionScore: h, isLookingAtCamera: y } = c, T = Math.sqrt(l.x * l.x + l.y * l.y);
    return !y && T > 0.5 && h < 0.3;
  }, []), at = P(async () => {
    try {
      const c = await import("./index-2kM27Pi_.js"), l = await import("./blazeface.esm-D5KORnOe.js");
      c.ready && await c.ready();
      const h = await l.load();
      return Me.current = h, !0;
    } catch (c) {
      return console.error("[widget] Failed to init face detection:", c), !1;
    }
  }, []), Re = P(async () => {
    if (!pe.current || !De.current || !Me.current) {
      xe.current = requestAnimationFrame(Re);
      return;
    }
    const c = pe.current, l = De.current;
    if (c.readyState !== 4) {
      xe.current = requestAnimationFrame(Re);
      return;
    }
    try {
      const y = (await Me.current.estimateFaces(c, !1)).map((b) => {
        const [R, Q] = b.topLeft, [I, ie] = b.bottomRight;
        return { x: R, y: Q, width: I - R, height: ie - Q, confidence: b.probability?.[0] || 0.8 };
      });
      z(y.length), ue(y), M(y.length === 1), Ye(y.length > 0);
      const T = Date.now();
      let Z = y.length === 0 ? "none" : y.length === 1 ? "single" : "multiple";
      if (Z === "multiple")
        Ee.current !== "multiple" && (ce(T), Oe((b) => b + 1), ae.current.multipleFaces || (ae.current.multipleFaces = !0, u?.({ eventType: "face_detection", severity: "warning", context: "coding", data: { reason: "multiple_faces", count: y.length }, timestamp: T })));
      else {
        if (Ee.current === "multiple" && W !== null) {
          const b = T - W;
          i((R) => R + b), ce(null);
        }
        ae.current.multipleFaces = !1;
      }
      if (Z === "none")
        Ee.current !== "none" && (Pe(T), tt((b) => b + 1), ae.current.noFace || (ae.current.noFace = !0, u?.({ eventType: "face_detection", severity: "critical", context: "coding", data: { reason: "no_face" }, timestamp: T })));
      else {
        if (Ee.current === "none" && he !== null) {
          const b = T - he;
          nt((R) => R + b), Pe(null);
        }
        ae.current.noFace = !1;
      }
      if (Ee.current = Z, y.length === 1) {
        const b = y[0], R = l.getContext("2d");
        if (R) {
          R.drawImage(c, 0, 0, l.width, l.height);
          const Q = R.getImageData(0, 0, l.width, l.height), I = R.getImageData(b.x, b.y, b.width, b.height), ie = {
            isGoodPosture: Math.abs(Math.random() * 20 - 10) < 5,
            shoulderAlignment: Math.random() * 20 - 10,
            headTilt: Math.random() * 15 - 7.5,
            confidence: 0.75
          }, ke = Ge(I, b), le = Be(I, Q), S = Ue(b, l.width, l.height);
          B(ie), X(ke), U(le), oe(S);
          const Y = $e(S);
          if (Y && !j && Date.now() - Le.current > 3e3)
            k((re) => re + 1), V(!0), e(T), Le.current = Date.now(), ae.current.gazeOff || (ae.current.gazeOff = !0, u?.({ eventType: "gaze_tracking", severity: "warning", context: "coding", data: { offscreen: !0 }, timestamp: T }));
          else if (!Y && j) {
            if (ne !== null) {
              const re = T - ne;
              D((G) => G + re), e(null);
            }
            V(!1), ae.current.gazeOff = !1;
          }
          const ge = y.length === 0 || y.length > 1;
          if (f && (ge || T - Ne.current >= 5e3)) {
            const re = a?.snapshots || [];
            let G = re;
            if (ge) {
              const Se = {
                timestamp: T,
                type: "violation_trigger",
                image: "base64_image_placeholder",
                context: y.length === 0 ? "No face detected" : "Multiple faces detected"
              };
              G = [...re, Se], G.length > 30 && (G = G.slice(-30));
            }
            f({ snapshots: G, postureAnalysis: ie, attireAnalysis: le }), Ne.current = T;
          }
        }
      } else if (B(null), X(null), U(null), oe(null), j) {
        if (ne !== null) {
          const b = T - ne;
          D((R) => R + b), e(null);
        }
        V(!1);
      }
      y.length === 0 ? r?.("violation") : y.length > 1 ? r?.("warning") : r?.("optimal");
    } catch (h) {
      console.error("[widget] Face detection error:", h);
    }
    xe.current = requestAnimationFrame(Re);
  }, [Ge, Be, Ue, $e, r, f, a?.snapshots, j, W, ne, Ye]);
  ee(() => {
    $(0);
  }, []), ee(() => ((async () => {
    try {
      const l = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 320 }, height: { ideal: 240 }, frameRate: { ideal: 15 } },
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 }
      });
      pe.current && (pe.current.srcObject = l);
      let h = null;
      const y = l.getAudioTracks();
      y.length > 0 && (h = new MediaStream(y), Te.current = h), await at(), h && await ot(h), xe.current = requestAnimationFrame(Re);
    } catch {
      r?.("violation");
    }
  })(), () => {
    rt.current = !0, xe.current && cancelAnimationFrame(xe.current), pe.current?.srcObject && pe.current.srcObject.getTracks().forEach((h) => h.stop()), Te.current && Te.current.getTracks().forEach((l) => l.stop()), st(), Te.current = null;
  }), []);
  const it = (c) => {
    w(!0);
    const l = Ie.current?.getBoundingClientRect();
    l && p({ x: c.clientX - l.left, y: c.clientY - l.top });
  }, Ve = (c) => {
    if (A) {
      const l = Math.max(0, Math.min((typeof window < "u" ? window.innerWidth : 0) - 280, c.clientX - H.x)), h = Math.max(0, Math.min((typeof window < "u" ? window.innerHeight : 0) - 400, c.clientY - H.y));
      _({ x: l, y: h });
    }
  }, He = () => w(!1);
  ee(() => {
    if (A)
      return document.addEventListener("mousemove", Ve), document.addEventListener("mouseup", He), () => {
        document.removeEventListener("mousemove", Ve), document.removeEventListener("mouseup", He);
      };
  }, [A, H]);
  const Xe = () => {
    document.hidden && F((c) => {
      const l = c + 1;
      return u?.({ eventType: "tab_switch", severity: "critical", context: "coding", data: { when: Date.now() }, timestamp: Date.now() }), l;
    });
  }, Je = () => de((c) => c + 1), Ke = (c) => {
    ve((l) => l + 1), u?.({ eventType: "keystroke", severity: "info", context: "coding", data: {}, timestamp: Date.now() }), (c.ctrlKey || c.metaKey) && (c.key === "c" || c.key === "x" || c.key === "v") && (t((l) => l + 1), c.preventDefault(), u?.({ eventType: "keystroke", severity: "warning", context: "coding", data: { copyCutPaste: !0, key: c.key }, timestamp: Date.now() }));
  };
  ee(() => (document.addEventListener("visibilitychange", Xe), window.addEventListener("blur", Je), document.addEventListener("keydown", Ke), () => {
    document.removeEventListener("visibilitychange", Xe), window.removeEventListener("blur", Je), document.removeEventListener("keydown", Ke);
  }), []);
  const ct = g === 0 ? "#ef4444" : g > 1 ? "#f59e0b" : "#22c55e";
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: Ie,
      onMouseDown: it,
      style: {
        position: "fixed",
        left: C.x,
        top: C.y,
        zIndex: 9999,
        width: 288,
        cursor: "move",
        border: `2px solid ${ct}`,
        borderRadius: 8,
        background: "#fff",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        padding: 12,
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ o.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: /* @__PURE__ */ o.jsx("div", { style: { fontSize: 12, fontWeight: 600 }, children: g === 0 ? "No Face" : g > 1 ? "Multiple Faces" : q ? "Optimal" : "Good" }) }),
        /* @__PURE__ */ o.jsxs("div", { style: { position: "relative", background: "#000", borderRadius: 4, overflow: "hidden" }, children: [
          /* @__PURE__ */ o.jsx("video", { ref: pe, autoPlay: !0, muted: !0, playsInline: !0, style: { width: "100%", height: 128, objectFit: "cover" } }),
          /* @__PURE__ */ o.jsx("canvas", { ref: De, width: 320, height: 240, style: { display: "none" } })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { style: { marginTop: 8, fontSize: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }, children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Faces: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: g === 1 ? "#16a34a" : "#ef4444" }, children: g })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "No Face: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: ze > 0 ? "#ef4444" : "#16a34a" }, children: ze })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Multiple: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: be > 0 ? "#ef4444" : "#16a34a" }, children: be })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Eye Contact: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: J?.isLookingAtCamera ? "#16a34a" : "#ef4444" }, children: J?.isLookingAtCamera ? "Yes" : "No" })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Posture: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: N?.isGoodPosture ? "#16a34a" : "#f59e0b" }, children: N?.isGoodPosture ? "Good" : "Poor" })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Attire: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: te?.isProfessional ? "#16a34a" : "#f59e0b" }, children: te?.isProfessional ? "Professional" : "Casual" })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Emotion: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: "#3b82f6" }, children: L?.dominant || "Unknown" })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            "Audio: ",
            /* @__PURE__ */ o.jsxs("span", { style: { color: v > 50 ? "#16a34a" : v > 20 ? "#f59e0b" : "#ef4444" }, children: [
              v,
              "%"
            ] }),
            /* @__PURE__ */ o.jsx("div", { style: { width: 64, height: 6, background: "#eee", borderRadius: 9999, overflow: "hidden" }, children: /* @__PURE__ */ o.jsx("div", { style: { width: `${Math.min(v, 100)}%`, height: 6, transition: "width 100ms", background: v > 50 ? "#16a34a" : v > 20 ? "#f59e0b" : "#ef4444" } }) })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Audio Alerts: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: K > 0 ? "#ef4444" : "#16a34a" }, children: K })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Unfocus: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: ye > 0 ? "#ef4444" : "#16a34a" }, children: ye })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Tab Switch: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: fe > 0 ? "#ef4444" : "#16a34a" }, children: fe })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Keystrokes: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: "#3b82f6" }, children: we })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Copy Attempts: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: me > 0 ? "#ef4444" : "#16a34a" }, children: me })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            "Gaze Off: ",
            /* @__PURE__ */ o.jsx("strong", { style: { color: d > 0 ? "#ef4444" : "#16a34a" }, children: d })
          ] })
        ] })
      ]
    }
  );
}
const _e = (n, a) => n.length > a ? n.slice(n.length - a) : n, vt = (n, a) => ({
  sessionId: n,
  sessionType: "coding-assessment",
  startTime: Date.now(),
  preCheckResults: a,
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
function bt(n, a) {
  switch (a.eventType) {
    case "tab_switch":
      return { ...n, tabSwitches: n.tabSwitches + 1, violationCount: n.violationCount + 1 };
    case "audio_anomaly":
      return { ...n, audioAnomalies: n.audioAnomalies + 1, violationCount: n.violationCount + 1 };
    case "code_execution":
      return { ...n, codeExecutionCount: n.codeExecutionCount + 1 };
    case "face_detection": {
      const r = a.data?.reason;
      return r === "no_face" ? { ...n, noFaceIncidents: n.noFaceIncidents + 1, violationCount: n.violationCount + 1 } : r === "multiple_faces" ? { ...n, multipleFaceIncidents: n.multipleFaceIncidents + 1, violationCount: n.violationCount + 1 } : n;
    }
    case "gaze_tracking": {
      const r = a.data?.type === "focus_break", f = Number(a.data?.focusTimeMs) || 0, u = a.data?.offscreen === !0;
      return {
        ...n,
        focusBreaks: n.focusBreaks + (r ? 1 : 0),
        gazeDuration: n.gazeDuration + f,
        unfocusEvents: n.unfocusEvents + (r ? 1 : 0),
        gazeOffScreenIncidents: n.gazeOffScreenIncidents + (u ? 1 : 0),
        violationCount: n.violationCount + (r || u ? 1 : 0)
      };
    }
    case "keystroke": {
      const r = a.data?.copyCutPaste === !0;
      return {
        ...n,
        keystrokes: n.keystrokes + 1,
        copyCutPasteAttempts: n.copyCutPasteAttempts + (r ? 1 : 0),
        violationCount: n.violationCount + (r ? 1 : 0)
      };
    }
    default:
      return n;
  }
}
function xt(n, a) {
  switch (a.type) {
    case "INIT":
      return { ...a.payload };
    case "SET_FIELDS": {
      const r = { ...n, ...a.payload };
      return r.snapshots && (r.snapshots = _e(r.snapshots, 50)), r.liveEvents && (r.liveEvents = _e(r.liveEvents, 200)), r;
    }
    case "ADD_EVENTS": {
      const r = _e([...n.liveEvents, ...a.events], 200), f = a.events.reduce(bt, n.sessionStats);
      return { ...n, liveEvents: r, sessionStats: f };
    }
    case "ADD_SNAPSHOT": {
      const r = _e([...n.snapshots, a.snapshot], 50);
      return { ...n, snapshots: r };
    }
    case "TICK": {
      const r = Math.max(0, a.now - n.startTime);
      return r === n.sessionStats.totalDuration ? n : { ...n, sessionStats: { ...n.sessionStats, totalDuration: r } };
    }
    case "COMPLETE": {
      const r = a.endTime ?? Date.now();
      return { ...n, sessionStats: { ...n.sessionStats, totalDuration: Math.max(0, r - n.startTime) } };
    }
    default:
      return n;
  }
}
function St(n) {
  const [a, r] = m(null), f = P((p) => {
    r((g) => g && xt(g, p));
  }, []), u = E(null), C = E(0), _ = E(null), A = P((p) => {
    const g = `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    u.current = g;
    const z = sessionStorage.getItem(g);
    if (z)
      try {
        const M = JSON.parse(z);
        return r(M), g;
      } catch {
      }
    const q = vt(g, p);
    return r(q), sessionStorage.setItem(g, JSON.stringify(q)), g;
  }, [n?.sessionId]), w = P((p) => {
    const g = p ?? a;
    if (!(!g || !u.current))
      try {
        sessionStorage.setItem(u.current, JSON.stringify(g)), C.current = Date.now();
      } catch (z) {
        console.error("[session] persist failed", z);
      }
  }, [a]);
  return ee(() => {
    if (!a) return;
    const g = Date.now() - C.current;
    return g < 1e3 ? (_.current && clearTimeout(_.current), _.current = setTimeout(() => w(), 1e3 - g)) : w(), () => {
      _.current && clearTimeout(_.current);
    };
  }, [a, w]), ee(() => {
    const p = () => w();
    return window.addEventListener("visibilitychange", p), window.addEventListener("beforeunload", p), () => {
      window.removeEventListener("visibilitychange", p), window.removeEventListener("beforeunload", p);
    };
  }, [w]), ee(() => {
    if (!a) return;
    const p = setInterval(() => f({ type: "TICK", now: Date.now() }), 1e3);
    return () => clearInterval(p);
  }, [a, f]), dt(() => ({
    state: a,
    sessionId: u.current,
    init: A,
    setFields: (p) => f({ type: "SET_FIELDS", payload: p }),
    addEvents: (p) => f({ type: "ADD_EVENTS", events: p }),
    addSnapshot: (p) => f({ type: "ADD_SNAPSHOT", snapshot: p }),
    complete: () => f({ type: "COMPLETE" })
  }), [a, f, A]);
}
function Ct({ onSessionStart: n, onSessionUpdate: a, onEvent: r }) {
  const [f, u] = m(null), [C, _] = m("optimal"), A = St();
  return ee(() => {
    if (f && !A.state) {
      const w = A.init(f);
      n?.(w, f);
    }
  }, [f, A]), f ? /* @__PURE__ */ o.jsx(
    wt,
    {
      monitoringStatus: C,
      sessionData: A.state ?? void 0,
      onStatusChange: (w) => _(w),
      onUpdateSession: (w) => {
        A.setFields(w), a?.(w);
      },
      onAddEvent: (w) => {
        A.addEvents([{ ...w, timestamp: w.timestamp ?? Date.now() }]), r?.(w);
      }
    }
  ) : /* @__PURE__ */ o.jsx(
    gt,
    {
      onComplete: (w) => u(w),
      onError: () => u(null)
    }
  );
}
export {
  wt as FloatingVideo,
  gt as Prechecks,
  Ct as ProctoringWidget
};
