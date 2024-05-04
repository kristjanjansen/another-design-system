"use client";
import ie, { useRef as ae, useCallback as se, useContext as rt, useState as xe, useEffect as ge, useMemo as nt, forwardRef as Kr } from "react";
import ot from "react-dom";
function Hr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nt = { exports: {} }, Ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function Vn() {
  if (hr)
    return Ye;
  hr = 1;
  var e = ie, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, c, f) {
    var p, h = {}, E = null, m = null;
    f !== void 0 && (E = "" + f), c.key !== void 0 && (E = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (p in c)
      r.call(c, p) && !a.hasOwnProperty(p) && (h[p] = c[p]);
    if (l && l.defaultProps)
      for (p in c = l.defaultProps, c)
        h[p] === void 0 && (h[p] = c[p]);
    return { $$typeof: t, type: l, key: E, ref: m, props: h, _owner: i.current };
  }
  return Ye.Fragment = n, Ye.jsx = o, Ye.jsxs = o, Ye;
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
var yr;
function Yn() {
  return yr || (yr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ie, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), D = Symbol.iterator, P = "@@iterator";
    function S(s) {
      if (s === null || typeof s != "object")
        return null;
      var v = D && s[D] || s[P];
      return typeof v == "function" ? v : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(s) {
      {
        for (var v = arguments.length, _ = new Array(v > 1 ? v - 1 : 0), w = 1; w < v; w++)
          _[w - 1] = arguments[w];
        C("error", s, _);
      }
    }
    function C(s, v, _) {
      {
        var w = R.ReactDebugCurrentFrame, B = w.getStackAddendum();
        B !== "" && (v += "%s", _ = _.concat([B]));
        var J = _.map(function(V) {
          return String(V);
        });
        J.unshift("Warning: " + v), Function.prototype.apply.call(console[s], console, J);
      }
    }
    var H = !1, y = !1, Q = !1, ve = !1, u = !1, j;
    j = Symbol.for("react.module.reference");
    function ee(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === a || u || s === i || s === f || s === p || ve || s === m || H || y || Q || typeof s == "object" && s !== null && (s.$$typeof === E || s.$$typeof === h || s.$$typeof === o || s.$$typeof === l || s.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === j || s.getModuleId !== void 0));
    }
    function x(s, v, _) {
      var w = s.displayName;
      if (w)
        return w;
      var B = v.displayName || v.name || "";
      return B !== "" ? _ + "(" + B + ")" : _;
    }
    function q(s) {
      return s.displayName || "Context";
    }
    function d(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            var v = s;
            return q(v) + ".Consumer";
          case o:
            var _ = s;
            return q(_._context) + ".Provider";
          case c:
            return x(s, s.render, "ForwardRef");
          case h:
            var w = s.displayName || null;
            return w !== null ? w : d(s.type) || "Memo";
          case E: {
            var B = s, J = B._payload, V = B._init;
            try {
              return d(V(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, G = 0, re, be, Pe, je, b, T, I;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function L() {
      {
        if (G === 0) {
          re = console.log, be = console.info, Pe = console.warn, je = console.error, b = console.group, T = console.groupCollapsed, I = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        G++;
      }
    }
    function U() {
      {
        if (G--, G === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, s, {
              value: re
            }),
            info: g({}, s, {
              value: be
            }),
            warn: g({}, s, {
              value: Pe
            }),
            error: g({}, s, {
              value: je
            }),
            group: g({}, s, {
              value: b
            }),
            groupCollapsed: g({}, s, {
              value: T
            }),
            groupEnd: g({}, s, {
              value: I
            })
          });
        }
        G < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = R.ReactCurrentDispatcher, A;
    function N(s, v, _) {
      {
        if (A === void 0)
          try {
            throw Error();
          } catch (B) {
            var w = B.stack.trim().match(/\n( *(at )?)/);
            A = w && w[1] || "";
          }
        return `
` + A + s;
      }
    }
    var Y = !1, W;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      W = new oe();
    }
    function $(s, v) {
      if (!s || Y)
        return "";
      {
        var _ = W.get(s);
        if (_ !== void 0)
          return _;
      }
      var w;
      Y = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = M.current, M.current = null, L();
      try {
        if (v) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (ye) {
              w = ye;
            }
            Reflect.construct(s, [], V);
          } else {
            try {
              V.call();
            } catch (ye) {
              w = ye;
            }
            s.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            w = ye;
          }
          s();
        }
      } catch (ye) {
        if (ye && w && typeof ye.stack == "string") {
          for (var K = ye.stack.split(`
`), le = w.stack.split(`
`), te = K.length - 1, ne = le.length - 1; te >= 1 && ne >= 0 && K[te] !== le[ne]; )
            ne--;
          for (; te >= 1 && ne >= 0; te--, ne--)
            if (K[te] !== le[ne]) {
              if (te !== 1 || ne !== 1)
                do
                  if (te--, ne--, ne < 0 || K[te] !== le[ne]) {
                    var de = `
` + K[te].replace(" at new ", " at ");
                    return s.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", s.displayName)), typeof s == "function" && W.set(s, de), de;
                  }
                while (te >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        Y = !1, M.current = J, U(), Error.prepareStackTrace = B;
      }
      var Fe = s ? s.displayName || s.name : "", mr = Fe ? N(Fe) : "";
      return typeof s == "function" && W.set(s, mr), mr;
    }
    function fe(s, v, _) {
      return $(s, !1);
    }
    function Me(s) {
      var v = s.prototype;
      return !!(v && v.isReactComponent);
    }
    function we(s, v, _) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return $(s, Me(s));
      if (typeof s == "string")
        return N(s);
      switch (s) {
        case f:
          return N("Suspense");
        case p:
          return N("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            return fe(s.render);
          case h:
            return we(s.type, v, _);
          case E: {
            var w = s, B = w._payload, J = w._init;
            try {
              return we(J(B), v, _);
            } catch {
            }
          }
        }
      return "";
    }
    var it = Object.prototype.hasOwnProperty, ar = {}, or = R.ReactDebugCurrentFrame;
    function at(s) {
      if (s) {
        var v = s._owner, _ = we(s.type, s._source, v ? v.type : null);
        or.setExtraStackFrame(_);
      } else
        or.setExtraStackFrame(null);
    }
    function Tn(s, v, _, w, B) {
      {
        var J = Function.call.bind(it);
        for (var V in s)
          if (J(s, V)) {
            var K = void 0;
            try {
              if (typeof s[V] != "function") {
                var le = Error((w || "React class") + ": " + _ + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              K = s[V](v, V, w, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              K = te;
            }
            K && !(K instanceof Error) && (at(B), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", _, V, typeof K), at(null)), K instanceof Error && !(K.message in ar) && (ar[K.message] = !0, at(B), k("Failed %s type: %s", _, K.message), at(null));
          }
      }
    }
    var Pn = Array.isArray;
    function $t(s) {
      return Pn(s);
    }
    function wn(s) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, _ = v && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return _;
      }
    }
    function Sn(s) {
      try {
        return sr(s), !1;
      } catch {
        return !0;
      }
    }
    function sr(s) {
      return "" + s;
    }
    function lr(s) {
      if (Sn(s))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wn(s)), sr(s);
    }
    var Ve = R.ReactCurrentOwner, Cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ur, cr, xt;
    xt = {};
    function On(s) {
      if (it.call(s, "ref")) {
        var v = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Rn(s) {
      if (it.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Dn(s, v) {
      if (typeof s.ref == "string" && Ve.current && v && Ve.current.stateNode !== v) {
        var _ = d(Ve.current.type);
        xt[_] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', d(Ve.current.type), s.ref), xt[_] = !0);
      }
    }
    function kn(s, v) {
      {
        var _ = function() {
          ur || (ur = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        _.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Ln(s, v) {
      {
        var _ = function() {
          cr || (cr = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        _.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var jn = function(s, v, _, w, B, J, V) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: v,
        ref: _,
        props: V,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function Mn(s, v, _, w, B) {
      {
        var J, V = {}, K = null, le = null;
        _ !== void 0 && (lr(_), K = "" + _), Rn(v) && (lr(v.key), K = "" + v.key), On(v) && (le = v.ref, Dn(v, B));
        for (J in v)
          it.call(v, J) && !Cn.hasOwnProperty(J) && (V[J] = v[J]);
        if (s && s.defaultProps) {
          var te = s.defaultProps;
          for (J in te)
            V[J] === void 0 && (V[J] = te[J]);
        }
        if (K || le) {
          var ne = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          K && kn(V, ne), le && Ln(V, ne);
        }
        return jn(s, K, le, B, w, Ve.current, V);
      }
    }
    var Tt = R.ReactCurrentOwner, fr = R.ReactDebugCurrentFrame;
    function Ae(s) {
      if (s) {
        var v = s._owner, _ = we(s.type, s._source, v ? v.type : null);
        fr.setExtraStackFrame(_);
      } else
        fr.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function wt(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function dr() {
      {
        if (Tt.current) {
          var s = d(Tt.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function An(s) {
      {
        if (s !== void 0) {
          var v = s.fileName.replace(/^.*[\\\/]/, ""), _ = s.lineNumber;
          return `

Check your code at ` + v + ":" + _ + ".";
        }
        return "";
      }
    }
    var pr = {};
    function Fn(s) {
      {
        var v = dr();
        if (!v) {
          var _ = typeof s == "string" ? s : s.displayName || s.name;
          _ && (v = `

Check the top-level render call using <` + _ + ">.");
        }
        return v;
      }
    }
    function vr(s, v) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var _ = Fn(v);
        if (pr[_])
          return;
        pr[_] = !0;
        var w = "";
        s && s._owner && s._owner !== Tt.current && (w = " It was passed a child from " + d(s._owner.type) + "."), Ae(s), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, w), Ae(null);
      }
    }
    function gr(s, v) {
      {
        if (typeof s != "object")
          return;
        if ($t(s))
          for (var _ = 0; _ < s.length; _++) {
            var w = s[_];
            wt(w) && vr(w, v);
          }
        else if (wt(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var B = S(s);
          if (typeof B == "function" && B !== s.entries)
            for (var J = B.call(s), V; !(V = J.next()).done; )
              wt(V.value) && vr(V.value, v);
        }
      }
    }
    function In(s) {
      {
        var v = s.type;
        if (v == null || typeof v == "string")
          return;
        var _;
        if (typeof v == "function")
          _ = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === h))
          _ = v.propTypes;
        else
          return;
        if (_) {
          var w = d(v);
          Tn(_, s.props, "prop", w, s);
        } else if (v.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var B = d(v);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nn(s) {
      {
        for (var v = Object.keys(s.props), _ = 0; _ < v.length; _++) {
          var w = v[_];
          if (w !== "children" && w !== "key") {
            Ae(s), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), Ae(null);
            break;
          }
        }
        s.ref !== null && (Ae(s), k("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null));
      }
    }
    function br(s, v, _, w, B, J) {
      {
        var V = ee(s);
        if (!V) {
          var K = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = An(B);
          le ? K += le : K += dr();
          var te;
          s === null ? te = "null" : $t(s) ? te = "array" : s !== void 0 && s.$$typeof === t ? (te = "<" + (d(s.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : te = typeof s, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, K);
        }
        var ne = Mn(s, v, _, B, J);
        if (ne == null)
          return ne;
        if (V) {
          var de = v.children;
          if (de !== void 0)
            if (w)
              if ($t(de)) {
                for (var Fe = 0; Fe < de.length; Fe++)
                  gr(de[Fe], s);
                Object.freeze && Object.freeze(de);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gr(de, s);
        }
        return s === r ? Nn(ne) : In(ne), ne;
      }
    }
    function Wn(s, v, _) {
      return br(s, v, _, !0);
    }
    function Kn(s, v, _) {
      return br(s, v, _, !1);
    }
    var Hn = Kn, Un = Wn;
    qe.Fragment = r, qe.jsx = Hn, qe.jsxs = Un;
  }()), qe;
}
process.env.NODE_ENV === "production" ? Nt.exports = Vn() : Nt.exports = Yn();
var Z = Nt.exports;
const _t = typeof document < "u" ? ie.useLayoutEffect : () => {
};
function De(e) {
  const t = ae(null);
  return _t(() => {
    t.current = e;
  }, [
    e
  ]), se((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const vt = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Ur = /* @__PURE__ */ ie.createContext(vt), qn = /* @__PURE__ */ ie.createContext(!1);
let Bn = !!(typeof window < "u" && window.document && window.document.createElement), St = /* @__PURE__ */ new WeakMap();
function Gn(e = !1) {
  let t = rt(Ur), n = ae(null);
  if (n.current === null && !e) {
    var r, i;
    let a = (i = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || i === void 0 || (r = i.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (a) {
      let o = St.get(a);
      o == null ? St.set(a, {
        id: t.current,
        state: a.memoizedState
      }) : a.memoizedState !== o.state && (t.current = o.id, St.delete(a));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function zn(e) {
  let t = rt(Ur);
  t === vt && !Bn && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = Gn(!!e), r = t === vt && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function Xn(e) {
  let t = ie.useId(), [n] = xe(ti()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${vt.prefix}`;
  return e || `${r}-${t}`;
}
const Jn = typeof ie.useId == "function" ? Xn : zn;
function Zn() {
  return !1;
}
function Qn() {
  return !0;
}
function ei(e) {
  return () => {
  };
}
function ti() {
  return typeof ie.useSyncExternalStore == "function" ? ie.useSyncExternalStore(ei, Zn, Qn) : rt(qn);
}
let ri = !!(typeof window < "u" && window.document && window.document.createElement), gt = /* @__PURE__ */ new Map();
function Vr(e) {
  let [t, n] = xe(e), r = ae(null), i = Jn(t), a = se((o) => {
    r.current = o;
  }, []);
  return ri && gt.set(i, a), _t(() => {
    let o = i;
    return () => {
      gt.delete(o);
    };
  }, [
    i
  ]), ge(() => {
    let o = r.current;
    o && (r.current = null, n(o));
  }), i;
}
function ni(e, t) {
  if (e === t)
    return e;
  let n = gt.get(e);
  if (n)
    return n(t), t;
  let r = gt.get(t);
  return r ? (r(e), e) : t;
}
function Yr(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const ce = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, he = (e) => e && "window" in e && e.window === e ? e : ce(e).defaultView || window;
function qr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = qr(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function ii() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = qr(e)) && (r && (r += " "), r += t);
  return r;
}
function ue(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let i in r) {
      let a = t[i], o = r[i];
      typeof a == "function" && typeof o == "function" && // This is a lot faster than a regex.
      i[0] === "o" && i[1] === "n" && i.charCodeAt(2) >= /* 'A' */
      65 && i.charCodeAt(2) <= /* 'Z' */
      90 ? t[i] = Yr(a, o) : (i === "className" || i === "UNSAFE_className") && typeof a == "string" && typeof o == "string" ? t[i] = ii(a, o) : i === "id" && a && o ? t.id = ni(a, o) : t[i] = o !== void 0 ? o : a;
    }
  }
  return t;
}
const ai = /* @__PURE__ */ new Set([
  "id"
]), oi = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), si = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), li = /^(data-.*)$/;
function Jt(e, t = {}) {
  let { labelable: n, isLink: r, propNames: i } = t, a = {};
  for (const o in e)
    Object.prototype.hasOwnProperty.call(e, o) && (ai.has(o) || n && oi.has(o) || r && si.has(o) || i != null && i.has(o) || li.test(o)) && (a[o] = e[o]);
  return a;
}
function ke(e) {
  if (ui())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = ci(e);
    e.focus(), fi(t);
  }
}
let st = null;
function ui() {
  if (st == null) {
    st = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return st = !0, !0;
        }
      });
    } catch {
    }
  }
  return st;
}
function ci(e) {
  let t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n;
}
function fi(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Et(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Zt(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function et() {
  return Zt(/^Mac/i);
}
function di() {
  return Zt(/^iPhone/i);
}
function Br() {
  return Zt(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  et() && navigator.maxTouchPoints > 1;
}
function Gr() {
  return di() || Br();
}
function pi() {
  return Et(/AppleWebKit/i) && !vi();
}
function vi() {
  return Et(/Chrome/i);
}
function zr() {
  return Et(/Android/i);
}
function gi() {
  return Et(/Firefox/i);
}
function tt(e, t, n = !0) {
  var r, i;
  let { metaKey: a, ctrlKey: o, altKey: l, shiftKey: c } = t;
  gi() && (!((i = window.event) === null || i === void 0 || (r = i.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (et() ? a = !0 : o = !0);
  let f = pi() && et() && !Br() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: a,
    ctrlKey: o,
    altKey: l,
    shiftKey: c
  }) : new MouseEvent("click", {
    metaKey: a,
    ctrlKey: o,
    altKey: l,
    shiftKey: c,
    bubbles: !0,
    cancelable: !0
  });
  tt.isOpening = n, ke(e), e.dispatchEvent(f), tt.isOpening = !1;
}
tt.isOpening = !1;
let We = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Set();
function _r() {
  if (typeof window > "u")
    return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target)
      return;
    let i = We.get(r.target);
    i || (i = /* @__PURE__ */ new Set(), We.set(r.target, i), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), i.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target)
      return;
    let i = We.get(r.target);
    if (i && (i.delete(r.propertyName), i.size === 0 && (r.target.removeEventListener("transitioncancel", n), We.delete(r.target)), We.size === 0)) {
      for (let a of Wt)
        a();
      Wt.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? _r() : document.addEventListener("DOMContentLoaded", _r));
function Xr(e) {
  requestAnimationFrame(() => {
    We.size === 0 ? e() : Wt.add(e);
  });
}
function bi() {
  let e = ae(/* @__PURE__ */ new Map()), t = se((i, a, o, l) => {
    let c = l != null && l.once ? (...f) => {
      e.current.delete(o), o(...f);
    } : o;
    e.current.set(o, {
      type: a,
      eventTarget: i,
      fn: c,
      options: l
    }), i.addEventListener(a, o, l);
  }, []), n = se((i, a, o, l) => {
    var c;
    let f = ((c = e.current.get(o)) === null || c === void 0 ? void 0 : c.fn) || o;
    i.removeEventListener(a, f, l), e.current.delete(o);
  }, []), r = se(() => {
    e.current.forEach((i, a) => {
      n(i.eventTarget, i.type, a, i.options);
    });
  }, [
    n
  ]);
  return ge(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Jr(e) {
  const t = ae(null);
  return nt(() => ({
    get current() {
      return t.current;
    },
    set current(n) {
      t.current = n, typeof e == "function" ? e(n) : e && (e.current = n);
    }
  }), [
    e
  ]);
}
function Zr(e, t) {
  _t(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Kt(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : zr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function mi(e) {
  return !zr() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function hi(e, t, n) {
  let r = ae(t), i = De(() => {
    n && n(r.current);
  });
  ge(() => {
    var a;
    let o = e == null || (a = e.current) === null || a === void 0 ? void 0 : a.form;
    return o == null || o.addEventListener("reset", i), () => {
      o == null || o.removeEventListener("reset", i);
    };
  }, [
    e,
    i
  ]);
}
function Qr(e, t, n) {
  let [r, i] = xe(e || t), a = ae(e !== void 0), o = e !== void 0;
  ge(() => {
    let f = a.current;
    f !== o && console.warn(`WARN: A component changed from ${f ? "controlled" : "uncontrolled"} to ${o ? "controlled" : "uncontrolled"}.`), a.current = o;
  }, [
    o
  ]);
  let l = o ? e : r, c = se((f, ...p) => {
    let h = (E, ...m) => {
      n && (Object.is(l, E) || n(E, ...m)), o || (l = E);
    };
    typeof f == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), i((m, ...D) => {
      let P = f(o ? l : m, ...D);
      return h(P, ...p), o ? m : P;
    })) : (o || i(f), h(f, ...p));
  }, [
    o,
    l,
    n
  ]);
  return [
    l,
    c
  ];
}
let He = "default", Ht = "", pt = /* @__PURE__ */ new WeakMap();
function Er(e) {
  if (Gr()) {
    if (He === "default") {
      const t = ce(e);
      Ht = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    He = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) && (pt.set(e, e.style.userSelect), e.style.userSelect = "none");
}
function lt(e) {
  if (Gr()) {
    if (He !== "disabled")
      return;
    He = "restoring", setTimeout(() => {
      Xr(() => {
        if (He === "restoring") {
          const t = ce(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = Ht || ""), Ht = "", He = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && pt.has(e)) {
    let t = pt.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), pt.delete(e);
  }
}
const en = ie.createContext({
  register: () => {
  }
});
en.displayName = "PressResponderContext";
function yi(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function tn(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function _i(e, t) {
  var n = tn(e, t, "get");
  return yi(e, n);
}
function Ei(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $i(e, t, n) {
  Ei(e, t), t.set(e, n);
}
function xi(e, t, n) {
  if (t.set)
    t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function $r(e, t, n) {
  var r = tn(e, t, "set");
  return xi(e, r, n), n;
}
function Ti(e) {
  let t = rt(en);
  if (t) {
    let { register: n, ...r } = t;
    e = ue(r, e), n();
  }
  return Zr(t, e.ref), e;
}
var ut = /* @__PURE__ */ new WeakMap();
class ct {
  continuePropagation() {
    $r(this, ut, !1);
  }
  get shouldStopPropagation() {
    return _i(this, ut);
  }
  constructor(t, n, r) {
    $i(this, ut, {
      writable: !0,
      value: void 0
    }), $r(this, ut, !0), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey;
  }
}
const xr = Symbol("linkClicked");
function Ut(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: r,
    onPressEnd: i,
    onPressUp: a,
    isDisabled: o,
    isPressed: l,
    preventFocusOnPress: c,
    shouldCancelOnPointerExit: f,
    allowTextSelectionOnPress: p,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: h,
    ...E
  } = Ti(e), [m, D] = xe(!1), P = ae({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: S, removeAllGlobalListeners: R } = bi(), k = De((u, j) => {
    let ee = P.current;
    if (o || ee.didFirePressStart)
      return !1;
    let x = !0;
    if (ee.isTriggeringEvent = !0, r) {
      let q = new ct("pressstart", j, u);
      r(q), x = q.shouldStopPropagation;
    }
    return n && n(!0), ee.isTriggeringEvent = !1, ee.didFirePressStart = !0, D(!0), x;
  }), C = De((u, j, ee = !0) => {
    let x = P.current;
    if (!x.didFirePressStart)
      return !1;
    x.ignoreClickAfterPress = !0, x.didFirePressStart = !1, x.isTriggeringEvent = !0;
    let q = !0;
    if (i) {
      let d = new ct("pressend", j, u);
      i(d), q = d.shouldStopPropagation;
    }
    if (n && n(!1), D(!1), t && ee && !o) {
      let d = new ct("press", j, u);
      t(d), q && (q = d.shouldStopPropagation);
    }
    return x.isTriggeringEvent = !1, q;
  }), H = De((u, j) => {
    let ee = P.current;
    if (o)
      return !1;
    if (a) {
      ee.isTriggeringEvent = !0;
      let x = new ct("pressup", j, u);
      return a(x), ee.isTriggeringEvent = !1, x.shouldStopPropagation;
    }
    return !0;
  }), y = De((u) => {
    let j = P.current;
    j.isPressed && j.target && (j.isOverTarget && j.pointerType != null && C(_e(j.target, u), j.pointerType, !1), j.isPressed = !1, j.isOverTarget = !1, j.activePointerId = null, j.pointerType = null, R(), p || lt(j.target));
  }), Q = De((u) => {
    f && y(u);
  }), ve = nt(() => {
    let u = P.current, j = {
      onKeyDown(x) {
        if (Ct(x.nativeEvent, x.currentTarget) && x.currentTarget.contains(x.target)) {
          var q;
          Pr(x.target, x.key) && x.preventDefault();
          let d = !0;
          if (!u.isPressed && !x.repeat) {
            u.target = x.currentTarget, u.isPressed = !0, d = k(x, "keyboard");
            let g = x.currentTarget, G = (re) => {
              Ct(re, g) && !re.repeat && g.contains(re.target) && u.target && H(_e(u.target, re), "keyboard");
            };
            S(ce(x.currentTarget), "keyup", Yr(G, ee), !0);
          }
          d && x.stopPropagation(), x.metaKey && et() && ((q = u.metaKeyEvents) === null || q === void 0 || q.set(x.key, x.nativeEvent));
        } else
          x.key === "Meta" && (u.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(x) {
        if (!(x && !x.currentTarget.contains(x.target)) && x && x.button === 0 && !u.isTriggeringEvent && !tt.isOpening) {
          let q = !0;
          if (o && x.preventDefault(), !u.ignoreClickAfterPress && !u.ignoreEmulatedMouseEvents && !u.isPressed && (u.pointerType === "virtual" || Kt(x.nativeEvent))) {
            !o && !c && ke(x.currentTarget);
            let d = k(x, "virtual"), g = H(x, "virtual"), G = C(x, "virtual");
            q = d && g && G;
          }
          u.ignoreEmulatedMouseEvents = !1, u.ignoreClickAfterPress = !1, q && x.stopPropagation();
        }
      }
    }, ee = (x) => {
      var q;
      if (u.isPressed && u.target && Ct(x, u.target)) {
        var d;
        Pr(x.target, x.key) && x.preventDefault();
        let G = x.target;
        C(_e(u.target, x), "keyboard", u.target.contains(G)), R(), x.key !== "Enter" && Qt(u.target) && u.target.contains(G) && !x[xr] && (x[xr] = !0, tt(u.target, x, !1)), u.isPressed = !1, (d = u.metaKeyEvents) === null || d === void 0 || d.delete(x.key);
      } else if (x.key === "Meta" && (!((q = u.metaKeyEvents) === null || q === void 0) && q.size)) {
        var g;
        let G = u.metaKeyEvents;
        u.metaKeyEvents = void 0;
        for (let re of G.values())
          (g = u.target) === null || g === void 0 || g.dispatchEvent(new KeyboardEvent("keyup", re));
      }
    };
    if (typeof PointerEvent < "u") {
      j.onPointerDown = (g) => {
        if (g.button !== 0 || !g.currentTarget.contains(g.target))
          return;
        if (mi(g.nativeEvent)) {
          u.pointerType = "virtual";
          return;
        }
        Ot(g.currentTarget) && g.preventDefault(), u.pointerType = g.pointerType;
        let G = !0;
        u.isPressed || (u.isPressed = !0, u.isOverTarget = !0, u.activePointerId = g.pointerId, u.target = g.currentTarget, !o && !c && ke(g.currentTarget), p || Er(u.target), G = k(g, u.pointerType), S(ce(g.currentTarget), "pointermove", x, !1), S(ce(g.currentTarget), "pointerup", q, !1), S(ce(g.currentTarget), "pointercancel", d, !1)), G && g.stopPropagation();
      }, j.onMouseDown = (g) => {
        g.currentTarget.contains(g.target) && g.button === 0 && (Ot(g.currentTarget) && g.preventDefault(), g.stopPropagation());
      }, j.onPointerUp = (g) => {
        !g.currentTarget.contains(g.target) || u.pointerType === "virtual" || g.button === 0 && Ie(g, g.currentTarget) && H(g, u.pointerType || g.pointerType);
      };
      let x = (g) => {
        g.pointerId === u.activePointerId && (u.target && Ie(g, u.target) ? !u.isOverTarget && u.pointerType != null && (u.isOverTarget = !0, k(_e(u.target, g), u.pointerType)) : u.target && u.isOverTarget && u.pointerType != null && (u.isOverTarget = !1, C(_e(u.target, g), u.pointerType, !1), Q(g)));
      }, q = (g) => {
        g.pointerId === u.activePointerId && u.isPressed && g.button === 0 && u.target && (Ie(g, u.target) && u.pointerType != null ? C(_e(u.target, g), u.pointerType) : u.isOverTarget && u.pointerType != null && C(_e(u.target, g), u.pointerType, !1), u.isPressed = !1, u.isOverTarget = !1, u.activePointerId = null, u.pointerType = null, R(), p || lt(u.target));
      }, d = (g) => {
        y(g);
      };
      j.onDragStart = (g) => {
        g.currentTarget.contains(g.target) && y(g);
      };
    } else {
      j.onMouseDown = (d) => {
        if (d.button !== 0 || !d.currentTarget.contains(d.target))
          return;
        if (Ot(d.currentTarget) && d.preventDefault(), u.ignoreEmulatedMouseEvents) {
          d.stopPropagation();
          return;
        }
        u.isPressed = !0, u.isOverTarget = !0, u.target = d.currentTarget, u.pointerType = Kt(d.nativeEvent) ? "virtual" : "mouse", !o && !c && ke(d.currentTarget), k(d, u.pointerType) && d.stopPropagation(), S(ce(d.currentTarget), "mouseup", x, !1);
      }, j.onMouseEnter = (d) => {
        if (!d.currentTarget.contains(d.target))
          return;
        let g = !0;
        u.isPressed && !u.ignoreEmulatedMouseEvents && u.pointerType != null && (u.isOverTarget = !0, g = k(d, u.pointerType)), g && d.stopPropagation();
      }, j.onMouseLeave = (d) => {
        if (!d.currentTarget.contains(d.target))
          return;
        let g = !0;
        u.isPressed && !u.ignoreEmulatedMouseEvents && u.pointerType != null && (u.isOverTarget = !1, g = C(d, u.pointerType, !1), Q(d)), g && d.stopPropagation();
      }, j.onMouseUp = (d) => {
        d.currentTarget.contains(d.target) && !u.ignoreEmulatedMouseEvents && d.button === 0 && H(d, u.pointerType || "mouse");
      };
      let x = (d) => {
        if (d.button === 0) {
          if (u.isPressed = !1, R(), u.ignoreEmulatedMouseEvents) {
            u.ignoreEmulatedMouseEvents = !1;
            return;
          }
          u.target && Ie(d, u.target) && u.pointerType != null ? C(_e(u.target, d), u.pointerType) : u.target && u.isOverTarget && u.pointerType != null && C(_e(u.target, d), u.pointerType, !1), u.isOverTarget = !1;
        }
      };
      j.onTouchStart = (d) => {
        if (!d.currentTarget.contains(d.target))
          return;
        let g = Pi(d.nativeEvent);
        if (!g)
          return;
        u.activePointerId = g.identifier, u.ignoreEmulatedMouseEvents = !0, u.isOverTarget = !0, u.isPressed = !0, u.target = d.currentTarget, u.pointerType = "touch", !o && !c && ke(d.currentTarget), p || Er(u.target), k(d, u.pointerType) && d.stopPropagation(), S(he(d.currentTarget), "scroll", q, !0);
      }, j.onTouchMove = (d) => {
        if (!d.currentTarget.contains(d.target))
          return;
        if (!u.isPressed) {
          d.stopPropagation();
          return;
        }
        let g = Tr(d.nativeEvent, u.activePointerId), G = !0;
        g && Ie(g, d.currentTarget) ? !u.isOverTarget && u.pointerType != null && (u.isOverTarget = !0, G = k(d, u.pointerType)) : u.isOverTarget && u.pointerType != null && (u.isOverTarget = !1, G = C(d, u.pointerType, !1), Q(d)), G && d.stopPropagation();
      }, j.onTouchEnd = (d) => {
        if (!d.currentTarget.contains(d.target))
          return;
        if (!u.isPressed) {
          d.stopPropagation();
          return;
        }
        let g = Tr(d.nativeEvent, u.activePointerId), G = !0;
        g && Ie(g, d.currentTarget) && u.pointerType != null ? (H(d, u.pointerType), G = C(d, u.pointerType)) : u.isOverTarget && u.pointerType != null && (G = C(d, u.pointerType, !1)), G && d.stopPropagation(), u.isPressed = !1, u.activePointerId = null, u.isOverTarget = !1, u.ignoreEmulatedMouseEvents = !0, u.target && !p && lt(u.target), R();
      }, j.onTouchCancel = (d) => {
        d.currentTarget.contains(d.target) && (d.stopPropagation(), u.isPressed && y(d));
      };
      let q = (d) => {
        u.isPressed && d.target.contains(u.target) && y({
          currentTarget: u.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      j.onDragStart = (d) => {
        d.currentTarget.contains(d.target) && y(d);
      };
    }
    return j;
  }, [
    S,
    o,
    c,
    R,
    p,
    y,
    Q,
    C,
    k,
    H
  ]);
  return ge(() => () => {
    var u;
    p || lt((u = P.current.target) !== null && u !== void 0 ? u : void 0);
  }, [
    p
  ]), {
    isPressed: l || m,
    pressProps: ue(E, ve)
  };
}
function Qt(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Ct(e, t) {
  const { key: n, code: r } = e, i = t, a = i.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(i instanceof he(i).HTMLInputElement && !rn(i, n) || i instanceof he(i).HTMLTextAreaElement || i.isContentEditable) && // Links should only trigger with Enter key
  !((a === "link" || !a && Qt(i)) && n !== "Enter");
}
function Pi(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Tr(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (i.identifier === t)
      return i;
  }
  return null;
}
function _e(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  };
}
function wi(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function Si(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Ie(e, t) {
  let n = t.getBoundingClientRect(), r = wi(e);
  return Si(n, r);
}
function Ot(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function Pr(e, t) {
  return e instanceof HTMLInputElement ? !rn(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Qt(e);
}
const Ci = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function rn(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : Ci.has(e.type);
}
class Oi {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = t;
  }
}
function nn(e) {
  let t = ae({
    isFocused: !1,
    observer: null
  });
  _t(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = De((r) => {
    e == null || e(r);
  });
  return se((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let i = r.target, a = (o) => {
        t.current.isFocused = !1, i.disabled && n(new Oi("blur", o)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      i.addEventListener("focusout", a, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && i.disabled) {
          var o;
          (o = t.current.observer) === null || o === void 0 || o.disconnect();
          let l = i === document.activeElement ? null : document.activeElement;
          i.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), i.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
          }));
        }
      }), t.current.observer.observe(i, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
function an(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e;
  const a = se((c) => {
    if (c.target === c.currentTarget)
      return r && r(c), i && i(!1), !0;
  }, [
    r,
    i
  ]), o = nn(a), l = se((c) => {
    const f = ce(c.target);
    c.target === c.currentTarget && f.activeElement === c.target && (n && n(c), i && i(!0), o(c));
  }, [
    i,
    n,
    o
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || i || r) ? l : void 0,
      onBlur: !t && (r || i) ? a : void 0
    }
  };
}
let Ue = null, Vt = /* @__PURE__ */ new Set(), Qe = /* @__PURE__ */ new Map(), Le = !1, Yt = !1;
const Ri = {
  Tab: !0,
  Escape: !0
};
function er(e, t) {
  for (let n of Vt)
    n(e, t);
}
function Di(e) {
  return !(e.metaKey || !et() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function bt(e) {
  Le = !0, Di(e) && (Ue = "keyboard", er("keyboard", e));
}
function pe(e) {
  Ue = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Le = !0, er("pointer", e));
}
function on(e) {
  Kt(e) && (Le = !0, Ue = "virtual");
}
function sn(e) {
  e.target === window || e.target === document || (!Le && !Yt && (Ue = "virtual", er("virtual", e)), Le = !1, Yt = !1);
}
function ln() {
  Le = !1, Yt = !0;
}
function qt(e) {
  if (typeof window > "u" || Qe.get(he(e)))
    return;
  const t = he(e), n = ce(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Le = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", bt, !0), n.addEventListener("keyup", bt, !0), n.addEventListener("click", on, !0), t.addEventListener("focus", sn, !0), t.addEventListener("blur", ln, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", pe, !0), n.addEventListener("pointermove", pe, !0), n.addEventListener("pointerup", pe, !0)) : (n.addEventListener("mousedown", pe, !0), n.addEventListener("mousemove", pe, !0), n.addEventListener("mouseup", pe, !0)), t.addEventListener("beforeunload", () => {
    un(e);
  }, {
    once: !0
  }), Qe.set(t, {
    focus: r
  });
}
const un = (e, t) => {
  const n = he(e), r = ce(e);
  t && r.removeEventListener("DOMContentLoaded", t), Qe.has(n) && (n.HTMLElement.prototype.focus = Qe.get(n).focus, r.removeEventListener("keydown", bt, !0), r.removeEventListener("keyup", bt, !0), r.removeEventListener("click", on, !0), n.removeEventListener("focus", sn, !0), n.removeEventListener("blur", ln, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", pe, !0), r.removeEventListener("pointermove", pe, !0), r.removeEventListener("pointerup", pe, !0)) : (r.removeEventListener("mousedown", pe, !0), r.removeEventListener("mousemove", pe, !0), r.removeEventListener("mouseup", pe, !0)), Qe.delete(n));
};
function ki(e) {
  const t = ce(e);
  let n;
  return t.readyState !== "loading" ? qt(e) : (n = () => {
    qt(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => un(e, n);
}
typeof document < "u" && ki();
function tr() {
  return Ue !== "pointer";
}
function cn() {
  return Ue;
}
const Li = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function ji(e, t, n) {
  var r;
  const i = typeof window < "u" ? he(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? he(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, o = typeof window < "u" ? he(n == null ? void 0 : n.target).HTMLElement : HTMLElement, l = typeof window < "u" ? he(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof i && !Li.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof a || (n == null ? void 0 : n.target) instanceof o && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof l && !Ri[n.key]);
}
function Mi(e, t, n) {
  qt(), ge(() => {
    let r = (i, a) => {
      ji(!!(n != null && n.isTextInput), i, a) && e(tr());
    };
    return Vt.add(r), () => {
      Vt.delete(r);
    };
  }, t);
}
function fn(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: i } = e, a = ae({
    isFocusWithin: !1
  }), o = se((f) => {
    a.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (a.current.isFocusWithin = !1, n && n(f), i && i(!1));
  }, [
    n,
    i,
    a
  ]), l = nn(o), c = se((f) => {
    !a.current.isFocusWithin && document.activeElement === f.target && (r && r(f), i && i(!0), a.current.isFocusWithin = !0, l(f));
  }, [
    r,
    i,
    l
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: c,
      onBlur: o
    }
  };
}
let mt = !1, Rt = 0;
function Bt() {
  mt = !0, setTimeout(() => {
    mt = !1;
  }, 50);
}
function wr(e) {
  e.pointerType === "touch" && Bt();
}
function Ai() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", wr) : document.addEventListener("touchend", Bt), Rt++, () => {
      Rt--, !(Rt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", wr) : document.removeEventListener("touchend", Bt));
    };
}
function dn(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e, [a, o] = xe(!1), l = ae({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ge(Ai, []);
  let { hoverProps: c, triggerHoverEnd: f } = nt(() => {
    let p = (m, D) => {
      if (l.pointerType = D, i || D === "touch" || l.isHovered || !m.currentTarget.contains(m.target))
        return;
      l.isHovered = !0;
      let P = m.currentTarget;
      l.target = P, t && t({
        type: "hoverstart",
        target: P,
        pointerType: D
      }), n && n(!0), o(!0);
    }, h = (m, D) => {
      if (l.pointerType = "", l.target = null, D === "touch" || !l.isHovered)
        return;
      l.isHovered = !1;
      let P = m.currentTarget;
      r && r({
        type: "hoverend",
        target: P,
        pointerType: D
      }), n && n(!1), o(!1);
    }, E = {};
    return typeof PointerEvent < "u" ? (E.onPointerEnter = (m) => {
      mt && m.pointerType === "mouse" || p(m, m.pointerType);
    }, E.onPointerLeave = (m) => {
      !i && m.currentTarget.contains(m.target) && h(m, m.pointerType);
    }) : (E.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, E.onMouseEnter = (m) => {
      !l.ignoreEmulatedMouseEvents && !mt && p(m, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, E.onMouseLeave = (m) => {
      !i && m.currentTarget.contains(m.target) && h(m, "mouse");
    }), {
      hoverProps: E,
      triggerHoverEnd: h
    };
  }, [
    t,
    n,
    r,
    i,
    l
  ]);
  return ge(() => {
    i && f({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    i
  ]), {
    hoverProps: c,
    isHovered: a
  };
}
function Sr(e) {
  if (!e)
    return;
  let t = !0;
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault();
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        t = !1;
      }
    };
    e(r), t && n.stopPropagation();
  };
}
function Fi(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Sr(e.onKeyDown),
      onKeyUp: Sr(e.onKeyUp)
    }
  };
}
function Ii(e) {
  const t = ce(e);
  if (cn() === "virtual") {
    let n = t.activeElement;
    Xr(() => {
      t.activeElement === n && e.isConnected && ke(e);
    });
  } else
    ke(e);
}
function pn(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, i = ae({
    isFocused: !1,
    isFocusVisible: t || tr()
  }), [a, o] = xe(!1), [l, c] = xe(() => i.current.isFocused && i.current.isFocusVisible), f = se(() => c(i.current.isFocused && i.current.isFocusVisible), []), p = se((m) => {
    i.current.isFocused = m, o(m), f();
  }, [
    f
  ]);
  Mi((m) => {
    i.current.isFocusVisible = m, f();
  }, [], {
    isTextInput: n
  });
  let { focusProps: h } = an({
    isDisabled: r,
    onFocusChange: p
  }), { focusWithinProps: E } = fn({
    isDisabled: !r,
    onFocusWithinChange: p
  });
  return {
    isFocused: a,
    isFocusVisible: l,
    focusProps: r ? E : h
  };
}
let Ni = /* @__PURE__ */ ie.createContext(null);
function Wi(e) {
  let t = rt(Ni) || {};
  Zr(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function rr(e, t) {
  let { focusProps: n } = an(e), { keyboardProps: r } = Fi(e), i = ue(n, r), a = Wi(t), o = e.isDisabled ? {} : a, l = ae(e.autoFocus);
  return ge(() => {
    l.current && t.current && Ii(t.current), l.current = !1;
  }, [
    t
  ]), {
    focusableProps: ue({
      ...i,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, o)
  };
}
function Ki(e, t) {
  let {
    elementType: n = "button",
    isDisabled: r,
    onPress: i,
    onPressStart: a,
    onPressEnd: o,
    onPressUp: l,
    onPressChange: c,
    preventFocusOnPress: f,
    allowFocusWhenDisabled: p,
    // @ts-ignore
    onClick: h,
    href: E,
    target: m,
    rel: D,
    type: P = "button"
  } = e, S;
  n === "button" ? S = {
    type: P,
    disabled: r
  } : S = {
    role: "button",
    tabIndex: r ? void 0 : 0,
    href: n === "a" && r ? void 0 : E,
    target: n === "a" ? m : void 0,
    type: n === "input" ? P : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? D : void 0
  };
  let { pressProps: R, isPressed: k } = Ut({
    onPressStart: a,
    onPressEnd: o,
    onPressChange: c,
    onPress: i,
    onPressUp: l,
    isDisabled: r,
    preventFocusOnPress: f,
    ref: t
  }), { focusableProps: C } = rr(e, t);
  p && (C.tabIndex = r ? -1 : C.tabIndex);
  let H = ue(C, R, Jt(e, {
    labelable: !0
  }));
  return {
    isPressed: k,
    buttonProps: ue(S, H, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      onClick: (y) => {
        h && (h(y), console.warn("onClick is deprecated, please use onPress"));
      }
    })
  };
}
function Hi(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: i = !1, value: a, name: o, children: l, "aria-label": c, "aria-labelledby": f, validationState: p = "valid", isInvalid: h } = e, E = (Q) => {
    Q.stopPropagation(), t.setSelected(Q.target.checked);
  }, m = l != null, D = c != null || f != null;
  !m && !D && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: P, isPressed: S } = Ut({
    isDisabled: r
  }), { pressProps: R, isPressed: k } = Ut({
    isDisabled: r || i,
    onPress() {
      t.toggle();
    }
  }), { focusableProps: C } = rr(e, n), H = ue(P, C), y = Jt(e, {
    labelable: !0
  });
  return hi(n, t.isSelected, t.setSelected), {
    labelProps: ue(R, {
      onClick: (Q) => Q.preventDefault()
    }),
    inputProps: ue(y, {
      "aria-invalid": h || p === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": i || void 0,
      onChange: E,
      disabled: r,
      ...a == null ? {} : {
        value: a
      },
      name: o,
      type: "checkbox",
      ...H
    }),
    isSelected: t.isSelected,
    isPressed: S || k,
    isDisabled: r,
    isReadOnly: i,
    isInvalid: h || p === "invalid"
  };
}
function Ui(e = {}) {
  let { isReadOnly: t } = e, [n, r] = Qr(e.isSelected, e.defaultSelected || !1, e.onChange);
  function i(o) {
    t || r(o);
  }
  function a() {
    t || r(!n);
  }
  return {
    isSelected: n,
    setSelected: i,
    toggle: a
  };
}
const Cr = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function Vi(e = {}) {
  let { style: t, isFocusable: n } = e, [r, i] = xe(!1), { focusWithinProps: a } = fn({
    isDisabled: !n,
    onFocusWithinChange: (l) => i(l)
  }), o = nt(() => r ? t : t ? {
    ...Cr,
    ...t
  } : Cr, [
    r
  ]);
  return {
    visuallyHiddenProps: {
      ...a,
      style: o
    }
  };
}
function Yi(e) {
  let { children: t, elementType: n = "div", isFocusable: r, style: i, ...a } = e, { visuallyHiddenProps: o } = Vi(e);
  return /* @__PURE__ */ ie.createElement(n, ue(a, o), t);
}
function qi(e, t, n) {
  let { labelProps: r, inputProps: i, isSelected: a, isPressed: o, isDisabled: l, isReadOnly: c } = Hi(e, t, n);
  return {
    labelProps: r,
    inputProps: {
      ...i,
      role: "switch",
      checked: a
    },
    isSelected: a,
    isPressed: o,
    isDisabled: l,
    isReadOnly: c
  };
}
function Bi(e, t) {
  let n = Jt(e, {
    labelable: !0
  }), { hoverProps: r } = dn({
    onHoverStart: () => t == null ? void 0 : t.open(!0),
    onHoverEnd: () => t == null ? void 0 : t.close()
  });
  return {
    tooltipProps: ue(n, r, {
      role: "tooltip"
    })
  };
}
function Gi(e, t, n) {
  let { isDisabled: r, trigger: i } = e, a = Vr(), o = ae(!1), l = ae(!1), c = () => {
    (o.current || l.current) && t.open(l.current);
  }, f = (R) => {
    !o.current && !l.current && t.close(R);
  };
  ge(() => {
    let R = (k) => {
      n && n.current && k.key === "Escape" && (k.stopPropagation(), t.close(!0));
    };
    if (t.isOpen)
      return document.addEventListener("keydown", R, !0), () => {
        document.removeEventListener("keydown", R, !0);
      };
  }, [
    n,
    t
  ]);
  let p = () => {
    i !== "focus" && (cn() === "pointer" ? o.current = !0 : o.current = !1, c());
  }, h = () => {
    i !== "focus" && (l.current = !1, o.current = !1, f());
  }, E = () => {
    l.current = !1, o.current = !1, f(!0);
  }, m = () => {
    tr() && (l.current = !0, c());
  }, D = () => {
    l.current = !1, o.current = !1, f(!0);
  }, { hoverProps: P } = dn({
    isDisabled: r,
    onHoverStart: p,
    onHoverEnd: h
  }), { focusableProps: S } = rr({
    isDisabled: r,
    onFocus: m,
    onBlur: D
  }, n);
  return {
    triggerProps: {
      "aria-describedby": t.isOpen ? a : void 0,
      ...ue(S, P, {
        onPointerDown: E,
        onKeyDown: E
      })
    },
    tooltipProps: {
      id: a
    }
  };
}
function zi(e) {
  let [t, n] = Qr(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const r = se(() => {
    n(!0);
  }, [
    n
  ]), i = se(() => {
    n(!1);
  }, [
    n
  ]), a = se(() => {
    n(!t);
  }, [
    n,
    t
  ]);
  return {
    isOpen: t,
    setOpen: n,
    open: r,
    close: i,
    toggle: a
  };
}
const Xi = 1500, Or = 500;
let Se = {}, Ji = 0, Be = !1, Ee = null, Ce = null;
function Zi(e = {}) {
  let { delay: t = Xi, closeDelay: n = Or } = e, { isOpen: r, open: i, close: a } = zi(e), o = nt(() => `${++Ji}`, []), l = ae(), c = () => {
    Se[o] = h;
  }, f = () => {
    for (let m in Se)
      m !== o && (Se[m](!0), delete Se[m]);
  }, p = () => {
    clearTimeout(l.current), l.current = null, f(), c(), Be = !0, i(), Ee && (clearTimeout(Ee), Ee = null), Ce && (clearTimeout(Ce), Ce = null);
  }, h = (m) => {
    m || n <= 0 ? (clearTimeout(l.current), l.current = null, a()) : l.current || (l.current = setTimeout(() => {
      l.current = null, a();
    }, n)), Ee && (clearTimeout(Ee), Ee = null), Be && (Ce && clearTimeout(Ce), Ce = setTimeout(() => {
      delete Se[o], Ce = null, Be = !1;
    }, Math.max(Or, n)));
  }, E = () => {
    f(), c(), !r && !Ee && !Be ? Ee = setTimeout(() => {
      Ee = null, Be = !0, p();
    }, t) : r || p();
  };
  return ge(() => () => {
    clearTimeout(l.current), Se[o] && delete Se[o];
  }, [
    o
  ]), {
    isOpen: r,
    open: (m) => {
      !m && t > 0 && !l.current ? E() : p();
    },
    close: h
  };
}
var vn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = "", o = 0; o < arguments.length; o++) {
        var l = arguments[o];
        l && (a = i(a, r(l)));
      }
      return a;
    }
    function r(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return n.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var o = "";
      for (var l in a)
        t.call(a, l) && a[l] && (o = i(o, l));
      return o;
    }
    function i(a, o) {
      return o ? a ? a + " " + o : a + o : a;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(vn);
var Qi = vn.exports;
const ht = /* @__PURE__ */ Hr(Qi);
function yt() {
  return yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yt.apply(this, arguments);
}
function gn(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Gt(e, t) {
  return Gt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Gt(e, t);
}
function bn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Gt(e, t);
}
var zt = { exports: {} }, ft = { exports: {} }, z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function ea() {
  if (Rr)
    return z;
  Rr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, E = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function C(y) {
    if (typeof y == "object" && y !== null) {
      var Q = y.$$typeof;
      switch (Q) {
        case t:
          switch (y = y.type, y) {
            case c:
            case f:
            case r:
            case a:
            case i:
            case h:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case p:
                case D:
                case m:
                case o:
                  return y;
                default:
                  return Q;
              }
          }
        case n:
          return Q;
      }
    }
  }
  function H(y) {
    return C(y) === f;
  }
  return z.AsyncMode = c, z.ConcurrentMode = f, z.ContextConsumer = l, z.ContextProvider = o, z.Element = t, z.ForwardRef = p, z.Fragment = r, z.Lazy = D, z.Memo = m, z.Portal = n, z.Profiler = a, z.StrictMode = i, z.Suspense = h, z.isAsyncMode = function(y) {
    return H(y) || C(y) === c;
  }, z.isConcurrentMode = H, z.isContextConsumer = function(y) {
    return C(y) === l;
  }, z.isContextProvider = function(y) {
    return C(y) === o;
  }, z.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, z.isForwardRef = function(y) {
    return C(y) === p;
  }, z.isFragment = function(y) {
    return C(y) === r;
  }, z.isLazy = function(y) {
    return C(y) === D;
  }, z.isMemo = function(y) {
    return C(y) === m;
  }, z.isPortal = function(y) {
    return C(y) === n;
  }, z.isProfiler = function(y) {
    return C(y) === a;
  }, z.isStrictMode = function(y) {
    return C(y) === i;
  }, z.isSuspense = function(y) {
    return C(y) === h;
  }, z.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === f || y === a || y === i || y === h || y === E || typeof y == "object" && y !== null && (y.$$typeof === D || y.$$typeof === m || y.$$typeof === o || y.$$typeof === l || y.$$typeof === p || y.$$typeof === S || y.$$typeof === R || y.$$typeof === k || y.$$typeof === P);
  }, z.typeOf = C, z;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function ta() {
  return Dr || (Dr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, E = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function C($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === r || $ === f || $ === a || $ === i || $ === h || $ === E || typeof $ == "object" && $ !== null && ($.$$typeof === D || $.$$typeof === m || $.$$typeof === o || $.$$typeof === l || $.$$typeof === p || $.$$typeof === S || $.$$typeof === R || $.$$typeof === k || $.$$typeof === P);
    }
    function H($) {
      if (typeof $ == "object" && $ !== null) {
        var fe = $.$$typeof;
        switch (fe) {
          case t:
            var Me = $.type;
            switch (Me) {
              case c:
              case f:
              case r:
              case a:
              case i:
              case h:
                return Me;
              default:
                var we = Me && Me.$$typeof;
                switch (we) {
                  case l:
                  case p:
                  case D:
                  case m:
                  case o:
                    return we;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var y = c, Q = f, ve = l, u = o, j = t, ee = p, x = r, q = D, d = m, g = n, G = a, re = i, be = h, Pe = !1;
    function je($) {
      return Pe || (Pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b($) || H($) === c;
    }
    function b($) {
      return H($) === f;
    }
    function T($) {
      return H($) === l;
    }
    function I($) {
      return H($) === o;
    }
    function F($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function L($) {
      return H($) === p;
    }
    function U($) {
      return H($) === r;
    }
    function M($) {
      return H($) === D;
    }
    function A($) {
      return H($) === m;
    }
    function N($) {
      return H($) === n;
    }
    function Y($) {
      return H($) === a;
    }
    function W($) {
      return H($) === i;
    }
    function oe($) {
      return H($) === h;
    }
    X.AsyncMode = y, X.ConcurrentMode = Q, X.ContextConsumer = ve, X.ContextProvider = u, X.Element = j, X.ForwardRef = ee, X.Fragment = x, X.Lazy = q, X.Memo = d, X.Portal = g, X.Profiler = G, X.StrictMode = re, X.Suspense = be, X.isAsyncMode = je, X.isConcurrentMode = b, X.isContextConsumer = T, X.isContextProvider = I, X.isElement = F, X.isForwardRef = L, X.isFragment = U, X.isLazy = M, X.isMemo = A, X.isPortal = N, X.isProfiler = Y, X.isStrictMode = W, X.isSuspense = oe, X.isValidElementType = C, X.typeOf = H;
  }()), X;
}
var kr;
function mn() {
  return kr || (kr = 1, process.env.NODE_ENV === "production" ? ft.exports = ea() : ft.exports = ta()), ft.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Dt, Lr;
function ra() {
  if (Lr)
    return Dt;
  Lr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, l = 0; l < 10; l++)
        o["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(o).map(function(p) {
        return o[p];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Dt = i() ? Object.assign : function(a, o) {
    for (var l, c = r(a), f, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var h in l)
        t.call(l, h) && (c[h] = l[h]);
      if (e) {
        f = e(l);
        for (var E = 0; E < f.length; E++)
          n.call(l, f[E]) && (c[f[E]] = l[f[E]]);
      }
    }
    return c;
  }, Dt;
}
var kt, jr;
function nr() {
  if (jr)
    return kt;
  jr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kt = e, kt;
}
var Lt, Mr;
function hn() {
  return Mr || (Mr = 1, Lt = Function.call.bind(Object.prototype.hasOwnProperty)), Lt;
}
var jt, Ar;
function na() {
  if (Ar)
    return jt;
  Ar = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = nr(), n = {}, r = hn();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, l, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (r(a, p)) {
          var h;
          try {
            if (typeof a[p] != "function") {
              var E = Error(
                (c || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw E.name = "Invariant Violation", E;
            }
            h = a[p](o, p, c, l, null, t);
          } catch (D) {
            h = D;
          }
          if (h && !(h instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var m = f ? f() : "";
            e(
              "Failed " + l + " type: " + h.message + (m ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, jt = i, jt;
}
var Mt, Fr;
function ia() {
  if (Fr)
    return Mt;
  Fr = 1;
  var e = mn(), t = ra(), n = nr(), r = hn(), i = na(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Mt = function(l, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(b) {
      var T = b && (f && b[f] || b[p]);
      if (typeof T == "function")
        return T;
    }
    var E = "<<anonymous>>", m = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: k(),
      arrayOf: C,
      element: H(),
      elementType: y(),
      instanceOf: Q,
      node: ee(),
      objectOf: u,
      oneOf: ve,
      oneOfType: j,
      shape: q,
      exact: d
    };
    function D(b, T) {
      return b === T ? b !== 0 || 1 / b === 1 / T : b !== b && T !== T;
    }
    function P(b, T) {
      this.message = b, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function S(b) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, I = 0;
      function F(U, M, A, N, Y, W, oe) {
        if (N = N || E, W = W || A, oe !== n) {
          if (c) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = N + ":" + A;
            !T[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + N + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[fe] = !0, I++);
          }
        }
        return M[A] == null ? U ? M[A] === null ? new P("The " + Y + " `" + W + "` is marked as required " + ("in `" + N + "`, but its value is `null`.")) : new P("The " + Y + " `" + W + "` is marked as required in " + ("`" + N + "`, but its value is `undefined`.")) : null : b(M, A, N, Y, W);
      }
      var L = F.bind(null, !1);
      return L.isRequired = F.bind(null, !0), L;
    }
    function R(b) {
      function T(I, F, L, U, M, A) {
        var N = I[F], Y = re(N);
        if (Y !== b) {
          var W = be(N);
          return new P(
            "Invalid " + U + " `" + M + "` of type " + ("`" + W + "` supplied to `" + L + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return S(T);
    }
    function k() {
      return S(o);
    }
    function C(b) {
      function T(I, F, L, U, M) {
        if (typeof b != "function")
          return new P("Property `" + M + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var A = I[F];
        if (!Array.isArray(A)) {
          var N = re(A);
          return new P("Invalid " + U + " `" + M + "` of type " + ("`" + N + "` supplied to `" + L + "`, expected an array."));
        }
        for (var Y = 0; Y < A.length; Y++) {
          var W = b(A, Y, L, U, M + "[" + Y + "]", n);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return S(T);
    }
    function H() {
      function b(T, I, F, L, U) {
        var M = T[I];
        if (!l(M)) {
          var A = re(M);
          return new P("Invalid " + L + " `" + U + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(b);
    }
    function y() {
      function b(T, I, F, L, U) {
        var M = T[I];
        if (!e.isValidElementType(M)) {
          var A = re(M);
          return new P("Invalid " + L + " `" + U + "` of type " + ("`" + A + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(b);
    }
    function Q(b) {
      function T(I, F, L, U, M) {
        if (!(I[F] instanceof b)) {
          var A = b.name || E, N = je(I[F]);
          return new P("Invalid " + U + " `" + M + "` of type " + ("`" + N + "` supplied to `" + L + "`, expected ") + ("instance of `" + A + "`."));
        }
        return null;
      }
      return S(T);
    }
    function ve(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function T(I, F, L, U, M) {
        for (var A = I[F], N = 0; N < b.length; N++)
          if (D(A, b[N]))
            return null;
        var Y = JSON.stringify(b, function(oe, $) {
          var fe = be($);
          return fe === "symbol" ? String($) : $;
        });
        return new P("Invalid " + U + " `" + M + "` of value `" + String(A) + "` " + ("supplied to `" + L + "`, expected one of " + Y + "."));
      }
      return S(T);
    }
    function u(b) {
      function T(I, F, L, U, M) {
        if (typeof b != "function")
          return new P("Property `" + M + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var A = I[F], N = re(A);
        if (N !== "object")
          return new P("Invalid " + U + " `" + M + "` of type " + ("`" + N + "` supplied to `" + L + "`, expected an object."));
        for (var Y in A)
          if (r(A, Y)) {
            var W = b(A, Y, L, U, M + "." + Y, n);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return S(T);
    }
    function j(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var T = 0; T < b.length; T++) {
        var I = b[T];
        if (typeof I != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Pe(I) + " at index " + T + "."
          ), o;
      }
      function F(L, U, M, A, N) {
        for (var Y = [], W = 0; W < b.length; W++) {
          var oe = b[W], $ = oe(L, U, M, A, N, n);
          if ($ == null)
            return null;
          $.data && r($.data, "expectedType") && Y.push($.data.expectedType);
        }
        var fe = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new P("Invalid " + A + " `" + N + "` supplied to " + ("`" + M + "`" + fe + "."));
      }
      return S(F);
    }
    function ee() {
      function b(T, I, F, L, U) {
        return g(T[I]) ? null : new P("Invalid " + L + " `" + U + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return S(b);
    }
    function x(b, T, I, F, L) {
      return new P(
        (b || "React class") + ": " + T + " type `" + I + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function q(b) {
      function T(I, F, L, U, M) {
        var A = I[F], N = re(A);
        if (N !== "object")
          return new P("Invalid " + U + " `" + M + "` of type `" + N + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var Y in b) {
          var W = b[Y];
          if (typeof W != "function")
            return x(L, U, M, Y, be(W));
          var oe = W(A, Y, L, U, M + "." + Y, n);
          if (oe)
            return oe;
        }
        return null;
      }
      return S(T);
    }
    function d(b) {
      function T(I, F, L, U, M) {
        var A = I[F], N = re(A);
        if (N !== "object")
          return new P("Invalid " + U + " `" + M + "` of type `" + N + "` " + ("supplied to `" + L + "`, expected `object`."));
        var Y = t({}, I[F], b);
        for (var W in Y) {
          var oe = b[W];
          if (r(b, W) && typeof oe != "function")
            return x(L, U, M, W, be(oe));
          if (!oe)
            return new P(
              "Invalid " + U + " `" + M + "` key `" + W + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(I[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var $ = oe(A, W, L, U, M + "." + W, n);
          if ($)
            return $;
        }
        return null;
      }
      return S(T);
    }
    function g(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(g);
          if (b === null || l(b))
            return !0;
          var T = h(b);
          if (T) {
            var I = T.call(b), F;
            if (T !== b.entries) {
              for (; !(F = I.next()).done; )
                if (!g(F.value))
                  return !1;
            } else
              for (; !(F = I.next()).done; ) {
                var L = F.value;
                if (L && !g(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(b, T) {
      return b === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function re(b) {
      var T = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : G(T, b) ? "symbol" : T;
    }
    function be(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var T = re(b);
      if (T === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function Pe(b) {
      var T = be(b);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function je(b) {
      return !b.constructor || !b.constructor.name ? E : b.constructor.name;
    }
    return m.checkPropTypes = i, m.resetWarningCache = i.resetWarningCache, m.PropTypes = m, m;
  }, Mt;
}
var At, Ir;
function aa() {
  if (Ir)
    return At;
  Ir = 1;
  var e = nr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, At = function() {
    function r(o, l, c, f, p, h) {
      if (h !== e) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, At;
}
if (process.env.NODE_ENV !== "production") {
  var oa = mn(), sa = !0;
  zt.exports = ia()(oa.isElement, sa);
} else
  zt.exports = aa()();
var la = zt.exports;
const O = /* @__PURE__ */ Hr(la);
function ua(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function ca(e, t) {
  e.classList ? e.classList.add(t) : ua(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function Nr(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function fa(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Nr(e.className, t) : e.setAttribute("class", Nr(e.className && e.className.baseVal || "", t));
}
const Wr = {
  disabled: !1
};
var da = process.env.NODE_ENV !== "production" ? O.oneOfType([O.number, O.shape({
  enter: O.number,
  exit: O.number,
  appear: O.number
}).isRequired]) : null, pa = process.env.NODE_ENV !== "production" ? O.oneOfType([O.string, O.shape({
  enter: O.string,
  exit: O.string,
  active: O.string
}), O.shape({
  enter: O.string,
  enterDone: O.string,
  enterActive: O.string,
  exit: O.string,
  exitDone: O.string,
  exitActive: O.string
})]) : null;
const yn = ie.createContext(null);
var _n = function(t) {
  return t.scrollTop;
}, Ze = "unmounted", Oe = "exited", Re = "entering", Ke = "entered", Xt = "exiting", Te = /* @__PURE__ */ function(e) {
  bn(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, l = o && !o.isMounting ? r.enter : r.appear, c;
    return a.appearStatus = null, r.in ? l ? (c = Oe, a.appearStatus = Re) : c = Ke : r.unmountOnExit || r.mountOnEnter ? c = Ze : c = Oe, a.state = {
      status: c
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === Ze ? {
      status: Oe
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== Re && o !== Ke && (a = Re) : (o === Re || o === Ke) && (a = Xt);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, o, l;
    return a = o = l = i, i != null && typeof i != "number" && (a = i.exit, o = i.enter, l = i.appear !== void 0 ? i.appear : o), {
      exit: a,
      enter: o,
      appear: l
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === Re) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : ot.findDOMNode(this);
          o && _n(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Oe && this.setState({
        status: Ze
      });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [ot.findDOMNode(this), l], f = c[0], p = c[1], h = this.getTimeouts(), E = l ? h.appear : h.enter;
    if (!i && !o || Wr.disabled) {
      this.safeSetState({
        status: Ke
      }, function() {
        a.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, p), this.safeSetState({
      status: Re
    }, function() {
      a.props.onEntering(f, p), a.onTransitionEnd(E, function() {
        a.safeSetState({
          status: Ke
        }, function() {
          a.props.onEntered(f, p);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), l = this.props.nodeRef ? void 0 : ot.findDOMNode(this);
    if (!a || Wr.disabled) {
      this.safeSetState({
        status: Oe
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Xt
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: Oe
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, o = !0;
    return this.nextCallback = function(l) {
      o && (o = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      o = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var o = this.props.nodeRef ? this.props.nodeRef.current : ot.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!o || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], f = c[0], p = c[1];
      this.props.addEndListener(f, p);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Ze)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = gn(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ie.createElement(yn.Provider, {
        value: null
      }, typeof o == "function" ? o(i, l) : ie.cloneElement(ie.Children.only(o), l))
    );
  }, t;
}(ie.Component);
Te.contextType = yn;
Te.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: O.shape({
    current: typeof Element > "u" ? O.any : function(e, t, n, r, i, a) {
      var o = e[t];
      return O.instanceOf(o && "ownerDocument" in o ? o.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: O.oneOfType([O.func.isRequired, O.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: O.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: O.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: O.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: O.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: O.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: O.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = da;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: O.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: O.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: O.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: O.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: O.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: O.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: O.func
} : {};
function Ne() {
}
Te.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ne,
  onEntering: Ne,
  onEntered: Ne,
  onExit: Ne,
  onExiting: Ne,
  onExited: Ne
};
Te.UNMOUNTED = Ze;
Te.EXITED = Oe;
Te.ENTERING = Re;
Te.ENTERED = Ke;
Te.EXITING = Xt;
const En = Te;
var va = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return ca(t, r);
  });
}, Ft = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return fa(t, r);
  });
}, ir = /* @__PURE__ */ function(e) {
  bn(t, e);
  function t() {
    for (var r, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r = e.call.apply(e, [this].concat(a)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(l, c) {
      var f = r.resolveArguments(l, c), p = f[0], h = f[1];
      r.removeClasses(p, "exit"), r.addClass(p, h ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(l, c);
    }, r.onEntering = function(l, c) {
      var f = r.resolveArguments(l, c), p = f[0], h = f[1], E = h ? "appear" : "enter";
      r.addClass(p, E, "active"), r.props.onEntering && r.props.onEntering(l, c);
    }, r.onEntered = function(l, c) {
      var f = r.resolveArguments(l, c), p = f[0], h = f[1], E = h ? "appear" : "enter";
      r.removeClasses(p, E), r.addClass(p, E, "done"), r.props.onEntered && r.props.onEntered(l, c);
    }, r.onExit = function(l) {
      var c = r.resolveArguments(l), f = c[0];
      r.removeClasses(f, "appear"), r.removeClasses(f, "enter"), r.addClass(f, "exit", "base"), r.props.onExit && r.props.onExit(l);
    }, r.onExiting = function(l) {
      var c = r.resolveArguments(l), f = c[0];
      r.addClass(f, "exit", "active"), r.props.onExiting && r.props.onExiting(l);
    }, r.onExited = function(l) {
      var c = r.resolveArguments(l), f = c[0];
      r.removeClasses(f, "exit"), r.addClass(f, "exit", "done"), r.props.onExited && r.props.onExited(l);
    }, r.resolveArguments = function(l, c) {
      return r.props.nodeRef ? [r.props.nodeRef.current, l] : [l, c];
    }, r.getClassNames = function(l) {
      var c = r.props.classNames, f = typeof c == "string", p = f && c ? c + "-" : "", h = f ? "" + p + l : c[l], E = f ? h + "-active" : c[l + "Active"], m = f ? h + "-done" : c[l + "Done"];
      return {
        baseClassName: h,
        activeClassName: E,
        doneClassName: m
      };
    }, r;
  }
  var n = t.prototype;
  return n.addClass = function(i, a, o) {
    var l = this.getClassNames(a)[o + "ClassName"], c = this.getClassNames("enter"), f = c.doneClassName;
    a === "appear" && o === "done" && f && (l += " " + f), o === "active" && i && _n(i), l && (this.appliedClasses[a][o] = l, va(i, l));
  }, n.removeClasses = function(i, a) {
    var o = this.appliedClasses[a], l = o.base, c = o.active, f = o.done;
    this.appliedClasses[a] = {}, l && Ft(i, l), c && Ft(i, c), f && Ft(i, f);
  }, n.render = function() {
    var i = this.props;
    i.classNames;
    var a = gn(i, ["classNames"]);
    return /* @__PURE__ */ ie.createElement(En, yt({}, a, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(ie.Component);
ir.defaultProps = {
  classNames: ""
};
ir.propTypes = process.env.NODE_ENV !== "production" ? yt({}, En.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: pa,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: O.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: O.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: O.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: O.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: O.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: O.func
}) : {};
const ga = ir, ba = "_tooltip_6yv7z_1", Ge = {
  tooltip: ba,
  "tooltip--appear": "_tooltip--appear_6yv7z_15",
  "tooltip--appear-done": "_tooltip--appear-done_6yv7z_19",
  "tooltip--exit": "_tooltip--exit_6yv7z_23",
  "tooltip--exit-active": "_tooltip--exit-active_6yv7z_27"
}, ma = ({ state: e, ...t }) => {
  const n = ae(null), { tooltipProps: r } = Bi(t, e), { isOpen: i } = e, [a, o] = xe(!i);
  return i || !a ? /* @__PURE__ */ Z.jsx(
    ga,
    {
      in: i,
      appear: !0,
      onEntered: () => o(!1),
      onExited: () => o(!0),
      timeout: { appear: 0, exit: 100 },
      classNames: {
        appear: Ge["tooltip--appear"],
        appearDone: Ge["tooltip--appear-done"],
        exit: Ge["mtooltip--exit"],
        exitActive: Ge["tooltip--exit-active"]
      },
      nodeRef: n,
      children: /* @__PURE__ */ Z.jsx(
        "span",
        {
          ...ue(t, r),
          className: Ge.tooltip,
          ref: n,
          "aria-hidden": "true",
          children: t.children
        }
      )
    }
  ) : null;
}, ha = "_base_14ytm_1", ya = "_btn_14ytm_6", _a = "_label_14ytm_24", me = {
  base: ha,
  btn: ya,
  label: _a,
  "btn--has-icons": "_btn--has-icons_14ytm_31",
  "btn--full-width": "_btn--full-width_14ytm_34",
  "btn--primary": "_btn--primary_14ytm_37",
  "btn--secondary": "_btn--secondary_14ytm_54",
  "btn--tertiary": "_btn--tertiary_14ytm_71",
  "btn--alert": "_btn--alert_14ytm_88",
  "btn--inverted": "_btn--inverted_14ytm_108",
  "btn--icon-only": "_btn--icon-only_14ytm_183",
  "focus-ring": "_focus-ring_14ytm_270"
}, Ea = Kr(
  (e, t) => {
    const {
      children: n,
      className: r,
      variant: i = "primary",
      inverted: a,
      isIcon: o,
      isFullWidth: l,
      tooltipLabel: c,
      tooltipWrapperClassName: f,
      iconLeft: p,
      iconRight: h,
      element: E = "button"
    } = e, m = Jr(t), D = ae(
      null
    ), P = m || D, { buttonProps: S } = Ki(
      { elementType: E, ...e },
      P
    ), { isFocusVisible: R, focusProps: k } = pn(), C = { delay: 0, closeDelay: 0, ...e }, H = Zi(C), { triggerProps: y, tooltipProps: Q } = Gi(
      C,
      H,
      P
    ), ve = ht(me.btn, r, {
      [me[`btn--${i}`]]: i,
      [me["btn--inverted"]]: a,
      [me["btn--full-width"]]: l,
      [me["btn--icon-only"]]: o,
      [me["btn--has-icons"]]: p || h,
      [me["focus-ring"]]: R
    }), u = ht(
      me.base,
      f
    ), ee = ue(S, k, o && c ? y : {}), x = /* @__PURE__ */ Z.jsxs(
      "button",
      {
        ...ee,
        ref: P,
        className: ve,
        children: [
          p,
          /* @__PURE__ */ Z.jsx("span", { className: me.label, children: n }),
          h
        ]
      }
    ), q = /* @__PURE__ */ Z.jsx(
      "button",
      {
        ...ee,
        ref: P,
        className: ve,
        children: n
      }
    ), d = /* @__PURE__ */ Z.jsxs("span", { className: u, children: [
      q,
      /* @__PURE__ */ Z.jsx(ma, { state: H, ...Q, children: c })
    ] }), g = /* @__PURE__ */ Z.jsxs(
      "a",
      {
        ...ee,
        role: void 0,
        ref: P,
        className: ve,
        children: [
          p,
          /* @__PURE__ */ Z.jsx("span", { className: me.label, children: n }),
          h
        ]
      }
    );
    switch (E) {
      case "a":
        return g;
      case "button":
        return o && !c ? q : o && c !== void 0 ? d : x;
      default:
        return x;
    }
  }
);
Ea.displayName = "Button";
const dt = (e) => ({
  0: "var(--eds-spacing-none)",
  1: "var(--eds-spacing-small-1)",
  2: "var(--eds-spacing-small-2)",
  3: "var(--eds-spacing-small-3)",
  4: "var(--eds-spacing-small-4)",
  5: "var(--eds-spacing-small-5)",
  6: "var(--eds-spacing-medium-1)",
  7: "var(--eds-spacing-medium-2)",
  8: "var(--eds-spacing-medium-3)",
  9: "var(--eds-spacing-medium-4)",
  10: "var(--eds-spacing-medium-5)",
  11: "var(--eds-spacing-medium-6)",
  12: "var(--eds-spacing-medium-7)",
  13: "var(--eds-spacing-medium-8)",
  14: "var(--eds-spacing-large-1)",
  15: "var(--eds-spacing-large-2)",
  16: "var(--eds-spacing-large-3)",
  17: "var(--eds-spacing-large-4)",
  18: "var(--eds-spacing-large-5)"
})[e] || "0px", $n = ({
  mt: e,
  mb: t,
  my: n
}) => {
  const r = e !== void 0 ? dt(e) : n !== void 0 ? dt(n) : void 0, i = t !== void 0 ? dt(t) : n !== void 0 ? dt(n) : void 0;
  return {
    marginTop: r,
    marginBottom: i
  };
}, ze = {
  "heading-h1": "_heading-h1_i3pn5_1",
  "heading-h2": "_heading-h2_i3pn5_21",
  "heading-h3": "_heading-h3_i3pn5_41",
  "heading-h4": "_heading-h4_i3pn5_61",
  "heading-h5": "_heading-h5_i3pn5_81",
  "heading-h6": "_heading-h6_i3pn5_101",
  "heading-display": "_heading-display_i3pn5_121",
  "heading-leadtext": "_heading-leadtext_i3pn5_141",
  "heading-subheadline": "_heading-subheadline_i3pn5_161",
  "text-p-small": "_text-p-small_i3pn5_181",
  "text-p-default": "_text-p-default_i3pn5_192",
  "text-p-large": "_text-p-large_i3pn5_203",
  "text-line-tiny": "_text-line-tiny_i3pn5_214",
  "text-line-small": "_text-line-small_i3pn5_225",
  "text-line-default": "_text-line-default_i3pn5_236",
  "text-line-large": "_text-line-large_i3pn5_247",
  "text-list-default": "_text-list-default_i3pn5_258",
  "label-tiny": "_label-tiny_i3pn5_269",
  "label-small": "_label-small_i3pn5_280",
  "label-default": "_label-default_i3pn5_291",
  "label-large": "_label-large_i3pn5_302",
  "text-italic": "_text-italic_i3pn5_313",
  "text-underline": "_text-underline_i3pn5_317",
  "text-uppercase": "_text-uppercase_i3pn5_321",
  "text-400": "_text-400_i3pn5_325",
  "text-600": "_text-600_i3pn5_329"
};
function $a(e) {
  switch (e) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "p":
    case "ol":
    case "ul":
      return e;
    case "line":
      return "p";
    case "list":
      return "ol";
    default:
      return "div";
  }
}
const ka = ({
  id: e,
  variant: t,
  as: n,
  italic: r = !1,
  underline: i = !1,
  weight: a = "600",
  uppercase: o = !1,
  children: l,
  className: c,
  dangerouslySetInnerHTML: f,
  mt: p,
  mb: h,
  my: E,
  ...m
}) => {
  const D = n || $a(t), S = `
        ${ze[`heading-${t}`]}
        ${c}
        ${r ? ze["text-italic"] : ""}
        ${i ? ze["text-underline"] : ""}
        ${a ? ze[`text-${a}`] : ""}
        ${o ? ze["text-uppercase"] : ""}
    `, R = $n({ mt: p, mb: h, my: E });
  return f ? /* @__PURE__ */ Z.jsx(
    D,
    {
      id: e,
      className: S,
      style: { ...R },
      dangerouslySetInnerHTML: f,
      ...m
    }
  ) : /* @__PURE__ */ Z.jsx(D, { id: e, className: S, style: { ...R }, ...m, children: l });
}, Xe = {
  "heading-h1": "_heading-h1_i3pn5_1",
  "heading-h2": "_heading-h2_i3pn5_21",
  "heading-h3": "_heading-h3_i3pn5_41",
  "heading-h4": "_heading-h4_i3pn5_61",
  "heading-h5": "_heading-h5_i3pn5_81",
  "heading-h6": "_heading-h6_i3pn5_101",
  "heading-display": "_heading-display_i3pn5_121",
  "heading-leadtext": "_heading-leadtext_i3pn5_141",
  "heading-subheadline": "_heading-subheadline_i3pn5_161",
  "text-p-small": "_text-p-small_i3pn5_181",
  "text-p-default": "_text-p-default_i3pn5_192",
  "text-p-large": "_text-p-large_i3pn5_203",
  "text-line-tiny": "_text-line-tiny_i3pn5_214",
  "text-line-small": "_text-line-small_i3pn5_225",
  "text-line-default": "_text-line-default_i3pn5_236",
  "text-line-large": "_text-line-large_i3pn5_247",
  "text-list-default": "_text-list-default_i3pn5_258",
  "label-tiny": "_label-tiny_i3pn5_269",
  "label-small": "_label-small_i3pn5_280",
  "label-default": "_label-default_i3pn5_291",
  "label-large": "_label-large_i3pn5_302",
  "text-italic": "_text-italic_i3pn5_313",
  "text-underline": "_text-underline_i3pn5_317",
  "text-uppercase": "_text-uppercase_i3pn5_321",
  "text-400": "_text-400_i3pn5_325",
  "text-600": "_text-600_i3pn5_329"
}, xa = ({
  id: e,
  size: t = "default",
  children: n,
  italic: r = !1,
  underline: i = !1,
  weight: a = "400",
  uppercase: o = !1,
  className: l,
  ...c
}) => {
  const p = `
        ${Xe[`label-${t}`]}
        ${l}
        ${r ? Xe["text-italic"] : ""}
        ${i ? Xe["text-underline"] : ""}
        ${a ? Xe[`text-${a}`] : ""}
        ${o ? Xe["text-uppercase"] : ""}
    `;
  return /* @__PURE__ */ Z.jsx("label", { id: e, className: p, ...c, children: n });
}, Ta = "_stack_1ism4_1", It = {
  stack: Ta,
  "direction-xsmall-column": "_direction-xsmall-column_1ism4_9",
  "direction-xsmall-row": "_direction-xsmall-row_1ism4_12",
  "direction-small-column": "_direction-small-column_1ism4_17",
  "direction-small-row": "_direction-small-row_1ism4_20",
  "direction-medium-column": "_direction-medium-column_1ism4_25",
  "direction-medium-row": "_direction-medium-row_1ism4_28",
  "direction-large-column": "_direction-large-column_1ism4_33",
  "direction-large-row": "_direction-large-row_1ism4_36",
  "gap-xsmall-1": "_gap-xsmall-1_1ism4_41",
  "gap-xsmall-2": "_gap-xsmall-2_1ism4_46",
  "gap-xsmall-3": "_gap-xsmall-3_1ism4_51",
  "gap-xsmall-4": "_gap-xsmall-4_1ism4_56",
  "gap-small-1": "_gap-small-1_1ism4_61",
  "gap-small-2": "_gap-small-2_1ism4_66",
  "gap-small-3": "_gap-small-3_1ism4_71",
  "gap-small-4": "_gap-small-4_1ism4_76",
  "gap-medium-1": "_gap-medium-1_1ism4_81",
  "gap-medium-2": "_gap-medium-2_1ism4_86",
  "gap-medium-3": "_gap-medium-3_1ism4_91",
  "gap-medium-4": "_gap-medium-4_1ism4_96",
  "gap-large-1": "_gap-large-1_1ism4_101",
  "gap-large-2": "_gap-large-2_1ism4_106",
  "gap-large-3": "_gap-large-3_1ism4_111",
  "gap-large-4": "_gap-large-4_1ism4_116"
}, xn = ({
  direction: e = {
    xsmall: "column",
    small: "column",
    medium: "column",
    large: "column"
  },
  gap: t = {
    xsmall: 1,
    small: 1,
    medium: 1,
    large: 1
  },
  children: n
}) => {
  const r = Object.entries(e).map(([a, o]) => It[`direction-${a}-${o}`]).join(" "), i = Object.entries(t).map(([a, o]) => It[`gap-${a}-${o}`]).join(" ");
  return /* @__PURE__ */ Z.jsx("div", { className: `${It.stack} ${r} ${i}`, children: n });
};
xn.displayName = "Stack";
const Pa = "_switch__label_vjmyd_6", wa = "_switch__indicator_vjmyd_11", Sa = "_messages_vjmyd_88", $e = {
  switch: "_switch_vjmyd_1",
  switch__label: Pa,
  switch__indicator: wa,
  "switch--pressed": "_switch--pressed_vjmyd_44",
  "switch--focused": "_switch--focused_vjmyd_48",
  "switch--selected": "_switch--selected_vjmyd_58",
  messages: Sa,
  "messages__description--regular": "_messages__description--regular_vjmyd_91",
  "messages__description--warning": "_messages__description--warning_vjmyd_94"
}, Ca = Kr((e, t) => {
  const n = Jr(t), r = ae(null), i = n || r, a = Ui(e), { inputProps: o, labelProps: l, isPressed: c, isSelected: f } = qi(
    e,
    a,
    i
  ), { isFocusVisible: p, focusProps: h } = pn(), E = Vr(), { description: m, children: D, descriptionSeverity: P = "regular" } = e, S = ht($e.switch, {
    [$e["switch--pressed"]]: c,
    [$e["switch--selected"]]: f,
    [$e["switch--focused"]]: p
  }), R = ht({
    [$e["messages__description--regular"]]: P === "regular",
    [$e["messages__description--warning"]]: P === "warning"
  }), { "aria-describedby": k, ...C } = o;
  return /* @__PURE__ */ Z.jsxs(xn, { children: [
    /* @__PURE__ */ Z.jsxs(xa, { weight: "400", className: S, ...l, children: [
      /* @__PURE__ */ Z.jsx(Yi, { children: /* @__PURE__ */ Z.jsx(
        "input",
        {
          ...ue(C, h),
          ref: i,
          "aria-describedby": `${E} ${k}`
        }
      ) }),
      /* @__PURE__ */ Z.jsx("span", { className: $e.switch__indicator }),
      /* @__PURE__ */ Z.jsx("div", { className: $e.switch__label, children: D })
    ] }),
    m && /* @__PURE__ */ Z.jsx("div", { className: $e.messages, children: /* @__PURE__ */ Z.jsx(
      Oa,
      {
        variant: "line",
        size: "small",
        id: E,
        className: R,
        children: m
      }
    ) })
  ] });
});
Ca.displayName = "Switch";
const Je = {
  "text-p-small": "_text-p-small_4uasb_1",
  "text-p-default": "_text-p-default_4uasb_12",
  "text-p-large": "_text-p-large_4uasb_23",
  "text-line-tiny": "_text-line-tiny_4uasb_34",
  "text-line-small": "_text-line-small_4uasb_45",
  "text-line-default": "_text-line-default_4uasb_56",
  "text-line-large": "_text-line-large_4uasb_67",
  "text-list-default": "_text-list-default_4uasb_78",
  "label-tiny": "_label-tiny_4uasb_89",
  "label-small": "_label-small_4uasb_100",
  "label-default": "_label-default_4uasb_111",
  "label-large": "_label-large_4uasb_122",
  "text-italic": "_text-italic_4uasb_133",
  "text-underline": "_text-underline_4uasb_137",
  "text-uppercase": "_text-uppercase_4uasb_141",
  "text-400": "_text-400_4uasb_145",
  "text-600": "_text-600_4uasb_149"
}, Oa = ({
  variant: e = "p",
  size: t = "default",
  italic: n = !1,
  underline: r = !1,
  weight: i = "400",
  uppercase: a = !1,
  children: o,
  className: l,
  dangerouslySetInnerHTML: c,
  mt: f,
  mb: p,
  my: h,
  ...E
}) => {
  const m = e === "p" ? "p" : e === "list" ? "ul" : "div", P = `
        ${Je[`text-${e}-${t}`]}
        ${l}
        ${n ? Je["text-italic"] : ""}
        ${r ? Je["text-underline"] : ""}
        ${i ? Je[`text-${i}`] : ""}
        ${a ? Je["text-uppercase"] : ""}
    `, S = $n({ mt: f, mb: p, my: h });
  return c ? /* @__PURE__ */ Z.jsx(
    m,
    {
      className: P,
      dangerouslySetInnerHTML: c,
      style: { ...S },
      ...E
    }
  ) : /* @__PURE__ */ Z.jsx(m, { className: P, style: { ...S }, ...E, children: o });
};
export {
  Ea as Button,
  ka as Heading,
  xa as Label,
  xn as Stack,
  Ca as Switch,
  Oa as Text
};
