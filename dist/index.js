import $e from "react";
var ne = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function dt() {
  if (we)
    return W;
  we = 1;
  var c = $e, _ = Symbol.for("react.element"), g = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, b = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(m, o, E) {
    var d, x = {}, R = null, O = null;
    E !== void 0 && (R = "" + E), o.key !== void 0 && (R = "" + o.key), o.ref !== void 0 && (O = o.ref);
    for (d in o)
      h.call(o, d) && !y.hasOwnProperty(d) && (x[d] = o[d]);
    if (m && m.defaultProps)
      for (d in o = m.defaultProps, o)
        x[d] === void 0 && (x[d] = o[d]);
    return { $$typeof: _, type: m, key: R, ref: O, props: x, _owner: b.current };
  }
  return W.Fragment = g, W.jsx = C, W.jsxs = C, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function _t() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var c = $e, _ = Symbol.for("react.element"), g = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), m = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), k = Symbol.iterator, A = "@@iterator";
    function j(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = k && e[k] || e[A];
      return typeof t == "function" ? t : null;
    }
    var P = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          r[a - 1] = arguments[a];
        De("error", e, r);
      }
    }
    function De(e, t, r) {
      {
        var a = P.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (t += "%s", r = r.concat([l]));
        var s = r.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Fe = !1, Ae = !1, Ne = !1, Ie = !1, We = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === y || We || e === b || e === E || e === d || Ie || e === O || Fe || Ae || Ne || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === x || e.$$typeof === C || e.$$typeof === m || e.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ve(e, t, r) {
      var a = e.displayName;
      if (a)
        return a;
      var l = t.displayName || t.name || "";
      return l !== "" ? r + "(" + l + ")" : r;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case g:
          return "Portal";
        case y:
          return "Profiler";
        case b:
          return "StrictMode";
        case E:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var t = e;
            return le(t) + ".Consumer";
          case C:
            var r = e;
            return le(r._context) + ".Provider";
          case o:
            return Ve(e, e.render, "ForwardRef");
          case x:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case R: {
            var l = e, s = l._payload, i = l._init;
            try {
              return S(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, N = 0, se, oe, ue, ce, fe, de, _e;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Le() {
      {
        if (N === 0) {
          se = console.log, oe = console.info, ue = console.warn, ce = console.error, fe = console.group, de = console.groupCollapsed, _e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        N++;
      }
    }
    function Me() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: se
            }),
            info: $({}, e, {
              value: oe
            }),
            warn: $({}, e, {
              value: ue
            }),
            error: $({}, e, {
              value: ce
            }),
            group: $({}, e, {
              value: fe
            }),
            groupCollapsed: $({}, e, {
              value: de
            }),
            groupEnd: $({}, e, {
              value: _e
            })
          });
        }
        N < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = P.ReactCurrentDispatcher, H;
    function B(e, t, r) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            H = a && a[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, q;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Ue();
    }
    function ve(e, t) {
      if (!e || Z)
        return "";
      {
        var r = q.get(e);
        if (r !== void 0)
          return r;
      }
      var a;
      Z = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = X.current, X.current = null, Le();
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
            } catch (w) {
              a = w;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (w) {
              a = w;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            a = w;
          }
          e();
        }
      } catch (w) {
        if (w && a && typeof w.stack == "string") {
          for (var n = w.stack.split(`
`), v = a.stack.split(`
`), u = n.length - 1, f = v.length - 1; u >= 1 && f >= 0 && n[u] !== v[f]; )
            f--;
          for (; u >= 1 && f >= 0; u--, f--)
            if (n[u] !== v[f]) {
              if (u !== 1 || f !== 1)
                do
                  if (u--, f--, f < 0 || n[u] !== v[f]) {
                    var T = `
` + n[u].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, T), T;
                  }
                while (u >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = s, Me(), Error.prepareStackTrace = l;
      }
      var F = e ? e.displayName || e.name : "", Se = F ? B(F) : "";
      return typeof e == "function" && q.set(e, Se), Se;
    }
    function Be(e, t, r) {
      return ve(e, !1);
    }
    function qe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function J(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, qe(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case E:
          return B("Suspense");
        case d:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            return Be(e.render);
          case x:
            return J(e.type, t, r);
          case R: {
            var a = e, l = a._payload, s = a._init;
            try {
              return J(s(l), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, ge = {}, he = P.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var t = e._owner, r = J(e.type, e._source, t ? t.type : null);
        he.setExtraStackFrame(r);
      } else
        he.setExtraStackFrame(null);
    }
    function Je(e, t, r, a, l) {
      {
        var s = Function.call.bind(G);
        for (var i in e)
          if (s(e, i)) {
            var n = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((a || "React class") + ": " + r + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              n = e[i](t, i, a, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              n = u;
            }
            n && !(n instanceof Error) && (z(l), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", r, i, typeof n), z(null)), n instanceof Error && !(n.message in ge) && (ge[n.message] = !0, z(l), p("Failed %s type: %s", r, n.message), z(null));
          }
      }
    }
    var Ge = Array.isArray;
    function Q(e) {
      return Ge(e);
    }
    function ze(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function Ke(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function me(e) {
      if (Ke(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), be(e);
    }
    var I = P.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, ye, ee;
    ee = {};
    function He(e) {
      if (G.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (G.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, t) {
      if (typeof e.ref == "string" && I.current && t && I.current.stateNode !== t) {
        var r = S(I.current.type);
        ee[r] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(I.current.type), e.ref), ee[r] = !0);
      }
    }
    function et(e, t) {
      {
        var r = function() {
          xe || (xe = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function tt(e, t) {
      {
        var r = function() {
          ye || (ye = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var rt = function(e, t, r, a, l, s, i) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function at(e, t, r, a, l) {
      {
        var s, i = {}, n = null, v = null;
        r !== void 0 && (me(r), n = "" + r), Ze(t) && (me(t.key), n = "" + t.key), He(t) && (v = t.ref, Qe(t, l));
        for (s in t)
          G.call(t, s) && !Xe.hasOwnProperty(s) && (i[s] = t[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            i[s] === void 0 && (i[s] = u[s]);
        }
        if (n || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && et(i, f), v && tt(i, f);
        }
        return rt(e, n, v, l, a, I.current, i);
      }
    }
    var te = P.ReactCurrentOwner, Ee = P.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var t = e._owner, r = J(e.type, e._source, t ? t.type : null);
        Ee.setExtraStackFrame(r);
      } else
        Ee.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _;
    }
    function Re() {
      {
        if (te.current) {
          var e = S(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nt(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), r = e.lineNumber;
          return `

Check your code at ` + t + ":" + r + ".";
        }
        return "";
      }
    }
    var Te = {};
    function it(e) {
      {
        var t = Re();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function Ce(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = it(t);
        if (Te[r])
          return;
        Te[r] = !0;
        var a = "";
        e && e._owner && e._owner !== te.current && (a = " It was passed a child from " + S(e._owner.type) + "."), D(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, a), D(null);
      }
    }
    function Oe(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var r = 0; r < e.length; r++) {
            var a = e[r];
            ae(a) && Ce(a, t);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = j(e);
          if (typeof l == "function" && l !== e.entries)
            for (var s = l.call(e), i; !(i = s.next()).done; )
              ae(i.value) && Ce(i.value, t);
        }
      }
    }
    function lt(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === x))
          r = t.propTypes;
        else
          return;
        if (r) {
          var a = S(t);
          Je(r, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !re) {
          re = !0;
          var l = S(t);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function st(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var a = t[r];
          if (a !== "children" && a !== "key") {
            D(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Pe(e, t, r, a, l, s) {
      {
        var i = Ye(e);
        if (!i) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = nt(l);
          v ? n += v : n += Re();
          var u;
          e === null ? u = "null" : Q(e) ? u = "array" : e !== void 0 && e.$$typeof === _ ? (u = "<" + (S(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, n);
        }
        var f = at(e, t, r, l, s);
        if (f == null)
          return f;
        if (i) {
          var T = t.children;
          if (T !== void 0)
            if (a)
              if (Q(T)) {
                for (var F = 0; F < T.length; F++)
                  Oe(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(T, e);
        }
        return e === h ? st(f) : lt(f), f;
      }
    }
    function ot(e, t, r) {
      return Pe(e, t, r, !0);
    }
    function ut(e, t, r) {
      return Pe(e, t, r, !1);
    }
    var ct = ut, ft = ot;
    Y.Fragment = h, Y.jsx = ct, Y.jsxs = ft;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ne.exports = dt() : ne.exports = _t();
var U = ne.exports;
const K = (c) => ({
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
})[c] || "0px", ke = ({
  mt: c,
  mb: _,
  my: g
}) => {
  const h = c !== void 0 ? K(c) : g !== void 0 ? K(g) : void 0, b = _ !== void 0 ? K(_) : g !== void 0 ? K(g) : void 0;
  return {
    marginTop: h,
    marginBottom: b
  };
}, V = {
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
function pt(c) {
  switch (c) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    case "p":
    case "ol":
    case "ul":
      return c;
    case "line":
      return "p";
    case "list":
      return "ol";
    default:
      return "div";
  }
}
const gt = ({
  id: c,
  variant: _,
  as: g,
  italic: h = !1,
  underline: b = !1,
  weight: y = "600",
  uppercase: C = !1,
  children: m,
  className: o,
  dangerouslySetInnerHTML: E,
  mt: d,
  mb: x,
  my: R,
  ...O
}) => {
  const k = g || pt(_), j = `
        ${V[`heading-${_}`]}
        ${o}
        ${h ? V["text-italic"] : ""}
        ${b ? V["text-underline"] : ""}
        ${y ? V[`text-${y}`] : ""}
        ${C ? V["text-uppercase"] : ""}
    `, P = ke({ mt: d, mb: x, my: R });
  return E ? /* @__PURE__ */ U.jsx(
    k,
    {
      id: c,
      className: j,
      style: { ...P },
      dangerouslySetInnerHTML: E,
      ...O
    }
  ) : /* @__PURE__ */ U.jsx(k, { id: c, className: j, style: { ...P }, ...O, children: m });
}, L = {
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
}, ht = ({
  variant: c = "p",
  size: _ = "default",
  italic: g = !1,
  underline: h = !1,
  weight: b = "400",
  uppercase: y = !1,
  children: C,
  className: m,
  dangerouslySetInnerHTML: o,
  mt: E,
  mb: d,
  my: x,
  ...R
}) => {
  const O = c === "p" ? "p" : c === "list" ? "ul" : "div", A = `
        ${L[`text-${c}-${_}`]}
        ${m}
        ${g ? L["text-italic"] : ""}
        ${h ? L["text-underline"] : ""}
        ${b ? L[`text-${b}`] : ""}
        ${y ? L["text-uppercase"] : ""}
    `, j = ke({ mt: E, mb: d, my: x });
  return o ? /* @__PURE__ */ U.jsx(
    O,
    {
      className: A,
      dangerouslySetInnerHTML: o,
      style: { ...j },
      ...R
    }
  ) : /* @__PURE__ */ U.jsx(O, { className: A, style: { ...j }, ...R, children: C });
}, M = {
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
}, bt = ({
  id: c,
  size: _ = "default",
  children: g,
  italic: h = !1,
  underline: b = !1,
  weight: y = "400",
  uppercase: C = !1,
  className: m,
  ...o
}) => {
  const d = `
        ${M[`label-${_}`]}
        ${m}
        ${h ? M["text-italic"] : ""}
        ${b ? M["text-underline"] : ""}
        ${y ? M[`text-${y}`] : ""}
        ${C ? M["text-uppercase"] : ""}
    `;
  return /* @__PURE__ */ U.jsx("label", { id: c, className: d, ...o, children: g });
};
export {
  gt as Heading,
  bt as Label,
  ht as Text
};
