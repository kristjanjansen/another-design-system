import we from "react";
var ae = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function fr() {
  if (Pe)
    return Y;
  Pe = 1;
  var c = we, p = Symbol.for("react.element"), g = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, h = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(b, l, E) {
    var d, x = {}, R = null, C = null;
    E !== void 0 && (R = "" + E), l.key !== void 0 && (R = "" + l.key), l.ref !== void 0 && (C = l.ref);
    for (d in l)
      m.call(l, d) && !y.hasOwnProperty(d) && (x[d] = l[d]);
    if (b && b.defaultProps)
      for (d in l = b.defaultProps, l)
        x[d] === void 0 && (x[d] = l[d]);
    return { $$typeof: p, type: b, key: R, ref: C, props: x, _owner: h.current };
  }
  return Y.Fragment = g, Y.jsx = j, Y.jsxs = j, Y;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function dr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var c = we, p = Symbol.for("react.element"), g = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), b = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), D = Symbol.iterator, N = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[N];
      return typeof r == "function" ? r : null;
    }
    var P = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var a = P.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var o = t.map(function(i) {
          return String(i);
        });
        o.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, o);
      }
    }
    var De = !1, Fe = !1, Ae = !1, Ne = !1, Ie = !1, ne;
    ne = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === y || Ie || e === h || e === E || e === d || Ne || e === C || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === x || e.$$typeof === j || e.$$typeof === b || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case g:
          return "Portal";
        case y:
          return "Profiler";
        case h:
          return "StrictMode";
        case E:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ie(r) + ".Consumer";
          case j:
            var t = e;
            return ie(t._context) + ".Provider";
          case l:
            return Ye(e, e.render, "ForwardRef");
          case x:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case R: {
            var s = e, o = s._payload, i = s._init;
            try {
              return S(i(o));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, se, oe, le, ue, ce, fe, de;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ve() {
      {
        if (I === 0) {
          se = console.log, oe = console.info, le = console.warn, ue = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
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
        I++;
      }
    }
    function Le() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: se
            }),
            info: k({}, e, {
              value: oe
            }),
            warn: k({}, e, {
              value: le
            }),
            error: k({}, e, {
              value: ue
            }),
            group: k({}, e, {
              value: ce
            }),
            groupCollapsed: k({}, e, {
              value: fe
            }),
            groupEnd: k({}, e, {
              value: de
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = P.ReactCurrentDispatcher, X;
    function U(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            X = a && a[1] || "";
          }
        return `
` + X + e;
      }
    }
    var H = !1, B;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Me();
    }
    function ve(e, r) {
      if (!e || H)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      H = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var o;
      o = K.current, K.current = null, Ve();
      try {
        if (r) {
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
`), _ = a.stack.split(`
`), u = n.length - 1, f = _.length - 1; u >= 1 && f >= 0 && n[u] !== _[f]; )
            f--;
          for (; u >= 1 && f >= 0; u--, f--)
            if (n[u] !== _[f]) {
              if (u !== 1 || f !== 1)
                do
                  if (u--, f--, f < 0 || n[u] !== _[f]) {
                    var T = `
` + n[u].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, T), T;
                  }
                while (u >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        H = !1, K.current = o, Le(), Error.prepareStackTrace = s;
      }
      var A = e ? e.displayName || e.name : "", Oe = A ? U(A) : "";
      return typeof e == "function" && B.set(e, Oe), Oe;
    }
    function Ue(e, r, t) {
      return ve(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Be(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case E:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ue(e.render);
          case x:
            return q(e.type, r, t);
          case R: {
            var a = e, s = a._payload, o = a._init;
            try {
              return q(o(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, _e = {}, ge = P.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function qe(e, r, t, a, s) {
      {
        var o = Function.call.bind(J);
        for (var i in e)
          if (o(e, i)) {
            var n = void 0;
            try {
              if (typeof e[i] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              n = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              n = u;
            }
            n && !(n instanceof Error) && (G(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof n), G(null)), n instanceof Error && !(n.message in _e) && (_e[n.message] = !0, G(s), v("Failed %s type: %s", t, n.message), G(null));
          }
      }
    }
    var Je = Array.isArray;
    function Z(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function he(e) {
      if (ze(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), me(e);
    }
    var W = P.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, xe, Q;
    Q = {};
    function Xe(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = S(W.current.type);
        Q[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(W.current.type), e.ref), Q[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          xe || (xe = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, a, s, o, i) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: o
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
        value: s
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function tr(e, r, t, a, s) {
      {
        var o, i = {}, n = null, _ = null;
        t !== void 0 && (he(t), n = "" + t), He(r) && (he(r.key), n = "" + r.key), Xe(r) && (_ = r.ref, Ze(r, s));
        for (o in r)
          J.call(r, o) && !Ke.hasOwnProperty(o) && (i[o] = r[o]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (o in u)
            i[o] === void 0 && (i[o] = u[o]);
        }
        if (n || _) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Qe(i, f), _ && er(i, f);
        }
        return rr(e, n, _, s, a, W.current, i);
      }
    }
    var ee = P.ReactCurrentOwner, ye = P.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function Ee() {
      {
        if (ee.current) {
          var e = S(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function nr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ee.current && (a = " It was passed a child from " + S(e._owner.type) + "."), F(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), F(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            te(a) && Te(a, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = $(e);
          if (typeof s == "function" && s !== e.entries)
            for (var o = s.call(e), i; !(i = o.next()).done; )
              te(i.value) && Te(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = S(r);
          qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var s = S(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            F(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Ce(e, r, t, a, s, o) {
      {
        var i = We(e);
        if (!i) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ar(s);
          _ ? n += _ : n += Ee();
          var u;
          e === null ? u = "null" : Z(e) ? u = "array" : e !== void 0 && e.$$typeof === p ? (u = "<" + (S(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, n);
        }
        var f = tr(e, r, t, s, o);
        if (f == null)
          return f;
        if (i) {
          var T = r.children;
          if (T !== void 0)
            if (a)
              if (Z(T)) {
                for (var A = 0; A < T.length; A++)
                  je(T[A], e);
                Object.freeze && Object.freeze(T);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(T, e);
        }
        return e === m ? sr(f) : ir(f), f;
      }
    }
    function or(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var ur = lr, cr = or;
    V.Fragment = m, V.jsx = ur, V.jsxs = cr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ae.exports = fr() : ae.exports = dr();
var M = ae.exports;
const z = (c) => ({
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
})[c] || "0px", $e = ({
  mt: c,
  mb: p,
  my: g
}) => {
  const m = c !== void 0 ? z(c) : g !== void 0 ? z(g) : void 0, h = p !== void 0 ? z(p) : g !== void 0 ? z(g) : void 0;
  return {
    marginTop: m,
    marginBottom: h
  };
};
function pr(c) {
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
const O = {
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
}, _r = ({
  id: c,
  variant: p,
  as: g,
  italic: m = !1,
  underline: h = !1,
  weight: y = "600",
  uppercase: j = !1,
  children: b,
  className: l,
  dangerouslySetInnerHTML: E,
  mt: d,
  mb: x,
  my: R,
  ...C
}) => {
  const D = g || pr(p), $ = `
        ${O[`heading-${p}`]}
        ${l}
        ${m ? O["text-italic"] : ""}
        ${h ? O["text-underline"] : ""}
        ${y ? O[`text-${y}`] : ""}
        ${j ? O["text-uppercase"] : ""}
    `, P = $e({ mt: d, mb: x, my: R });
  return E ? /* @__PURE__ */ M.jsx(
    D,
    {
      id: c,
      className: $,
      style: { ...P },
      dangerouslySetInnerHTML: E,
      ...C
    }
  ) : /* @__PURE__ */ M.jsx(
    D,
    {
      id: c,
      className: $,
      style: { ...P },
      ...C,
      children: b
    }
  );
}, gr = ({
  id: c,
  size: p = "default",
  children: g,
  italic: m = !1,
  underline: h = !1,
  weight: y = "400",
  uppercase: j = !1,
  className: b,
  ...l
}) => {
  const d = `
        ${O[`label-${p}`]}
        ${b}
        ${m ? O["text-italic"] : ""}
        ${h ? O["text-underline"] : ""}
        ${y ? O[`text-${y}`] : ""}
        ${j ? O["text-uppercase"] : ""}
    `;
  return /* @__PURE__ */ M.jsx("label", { id: c, className: d, ...l, children: g });
}, L = {
  "text-p-small": "_text-p-small_j4j3p_1",
  "text-p-default": "_text-p-default_j4j3p_12",
  "text-p-large": "_text-p-large_j4j3p_23",
  "text-line-tiny": "_text-line-tiny_j4j3p_34",
  "text-line-small": "_text-line-small_j4j3p_45",
  "text-line-default": "_text-line-default_j4j3p_56",
  "text-line-large": "_text-line-large_j4j3p_67",
  "text-list-default": "_text-list-default_j4j3p_78"
}, mr = ({
  variant: c = "p",
  size: p = "default",
  italic: g = !1,
  underline: m = !1,
  weight: h = "400",
  uppercase: y = !1,
  children: j,
  className: b,
  dangerouslySetInnerHTML: l,
  mt: E,
  mb: d,
  my: x,
  ...R
}) => {
  const C = c === "p" ? "p" : c === "list" ? "ul" : "div", N = `
        ${L[`text-${c}-${p}`]}
        ${b}
        ${g ? L["text-italic"] : ""}
        ${m ? L["text-underline"] : ""}
        ${h ? L[`text-${h}`] : ""}
        ${y ? L["text-uppercase"] : ""}
    `, $ = $e({ mt: E, mb: d, my: x });
  return l ? /* @__PURE__ */ M.jsx(
    C,
    {
      className: N,
      dangerouslySetInnerHTML: l,
      style: { ...$ },
      ...R
    }
  ) : /* @__PURE__ */ M.jsx(C, { className: N, style: { ...$ }, ...R, children: j });
};
export {
  _r as Heading,
  gr as Label,
  mr as Text
};
