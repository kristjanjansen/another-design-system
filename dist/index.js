import we from "react";
var te = { exports: {} }, Y = {};
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
function cr() {
  if (Pe)
    return Y;
  Pe = 1;
  var c = we, v = Symbol.for("react.element"), m = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, b = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(y, l, x) {
    var d, E = {}, T = null, P = null;
    x !== void 0 && (T = "" + x), l.key !== void 0 && (T = "" + l.key), l.ref !== void 0 && (P = l.ref);
    for (d in l)
      h.call(l, d) && !R.hasOwnProperty(d) && (E[d] = l[d]);
    if (y && y.defaultProps)
      for (d in l = y.defaultProps, l)
        E[d] === void 0 && (E[d] = l[d]);
    return { $$typeof: v, type: y, key: T, ref: P, props: E, _owner: b.current };
  }
  return Y.Fragment = m, Y.jsx = O, Y.jsxs = O, Y;
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
function fr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var c = we, v = Symbol.for("react.element"), m = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), y = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), D = Symbol.iterator, N = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[N];
      return typeof r == "function" ? r : null;
    }
    var S = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        $e("error", e, t);
      }
    }
    function $e(e, r, t) {
      {
        var a = S.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var o = t.map(function(i) {
          return String(i);
        });
        o.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, o);
      }
    }
    var ke = !1, De = !1, Fe = !1, Ae = !1, Ne = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === R || Ne || e === b || e === x || e === d || Ae || e === P || ke || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === E || e.$$typeof === O || e.$$typeof === y || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case m:
          return "Portal";
        case R:
          return "Profiler";
        case b:
          return "StrictMode";
        case x:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ne(r) + ".Consumer";
          case O:
            var t = e;
            return ne(t._context) + ".Provider";
          case l:
            return We(e, e.render, "ForwardRef");
          case E:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case T: {
            var s = e, o = s._payload, i = s._init;
            try {
              return w(i(o));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, ie, se, oe, le, ue, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ye() {
      {
        if (I === 0) {
          ie = console.log, se = console.info, oe = console.warn, le = console.error, ue = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
    function Ve() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ie
            }),
            info: k({}, e, {
              value: se
            }),
            warn: k({}, e, {
              value: oe
            }),
            error: k({}, e, {
              value: le
            }),
            group: k({}, e, {
              value: ue
            }),
            groupCollapsed: k({}, e, {
              value: ce
            }),
            groupEnd: k({}, e, {
              value: fe
            })
          });
        }
        I < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = S.ReactCurrentDispatcher, K;
    function M(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            K = a && a[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, U;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Le();
    }
    function ve(e, r) {
      if (!e || X)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      X = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var o;
      o = z.current, z.current = null, Ye();
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
            } catch (j) {
              a = j;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (j) {
              a = j;
            }
            e.call(i.prototype);
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
          for (var n = j.stack.split(`
`), _ = a.stack.split(`
`), u = n.length - 1, f = _.length - 1; u >= 1 && f >= 0 && n[u] !== _[f]; )
            f--;
          for (; u >= 1 && f >= 0; u--, f--)
            if (n[u] !== _[f]) {
              if (u !== 1 || f !== 1)
                do
                  if (u--, f--, f < 0 || n[u] !== _[f]) {
                    var C = `
` + n[u].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, C), C;
                  }
                while (u >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        X = !1, z.current = o, Ve(), Error.prepareStackTrace = s;
      }
      var A = e ? e.displayName || e.name : "", Oe = A ? M(A) : "";
      return typeof e == "function" && U.set(e, Oe), Oe;
    }
    function Me(e, r, t) {
      return ve(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ue(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case x:
          return M("Suspense");
        case d:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Me(e.render);
          case E:
            return B(e.type, r, t);
          case T: {
            var a = e, s = a._payload, o = a._init;
            try {
              return B(o(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, pe = {}, _e = S.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function Be(e, r, t, a, s) {
      {
        var o = Function.call.bind(q);
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
            n && !(n instanceof Error) && (J(s), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof n), J(null)), n instanceof Error && !(n.message in pe) && (pe[n.message] = !0, J(s), p("Failed %s type: %s", t, n.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function H(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function me(e) {
      if (Ge(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ge(e);
    }
    var W = S.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, be, Z;
    Z = {};
    function Ke(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = w(W.current.type);
        Z[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(W.current.type), e.ref), Z[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, a, s, o, i) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
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
    function rr(e, r, t, a, s) {
      {
        var o, i = {}, n = null, _ = null;
        t !== void 0 && (me(t), n = "" + t), Xe(r) && (me(r.key), n = "" + r.key), Ke(r) && (_ = r.ref, He(r, s));
        for (o in r)
          q.call(r, o) && !ze.hasOwnProperty(o) && (i[o] = r[o]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (o in u)
            i[o] === void 0 && (i[o] = u[o]);
        }
        if (n || _) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Ze(i, f), _ && Qe(i, f);
        }
        return er(e, n, _, s, a, W.current, i);
      }
    }
    var Q = S.ReactCurrentOwner, ye = S.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function Ee() {
      {
        if (Q.current) {
          var e = w(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
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
    function ar(e) {
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
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var a = "";
        e && e._owner && e._owner !== Q.current && (a = " It was passed a child from " + w(e._owner.type) + "."), F(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), F(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            re(a) && xe(a, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = $(e);
          if (typeof s == "function" && s !== e.entries)
            for (var o = s.call(e), i; !(i = o.next()).done; )
              re(i.value) && xe(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = w(r);
          Be(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var s = w(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            F(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Ce(e, r, t, a, s, o) {
      {
        var i = Ie(e);
        if (!i) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = tr(s);
          _ ? n += _ : n += Ee();
          var u;
          e === null ? u = "null" : H(e) ? u = "array" : e !== void 0 && e.$$typeof === v ? (u = "<" + (w(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, n);
        }
        var f = rr(e, r, t, s, o);
        if (f == null)
          return f;
        if (i) {
          var C = r.children;
          if (C !== void 0)
            if (a)
              if (H(C)) {
                for (var A = 0; A < C.length; A++)
                  Te(C[A], e);
                Object.freeze && Object.freeze(C);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(C, e);
        }
        return e === h ? ir(f) : nr(f), f;
      }
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function or(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var lr = or, ur = sr;
    V.Fragment = h, V.jsx = lr, V.jsxs = ur;
  }()), V;
}
process.env.NODE_ENV === "production" ? te.exports = cr() : te.exports = fr();
var L = te.exports;
const G = (c) => ({
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
})[c] || "0px", je = ({
  mt: c,
  mb: v,
  my: m
}) => {
  const h = c !== void 0 ? G(c) : m !== void 0 ? G(m) : void 0, b = v !== void 0 ? G(v) : m !== void 0 ? G(m) : void 0;
  return {
    marginTop: h,
    marginBottom: b
  };
};
function dr(c) {
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
const g = {
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
}, pr = ({
  id: c,
  variant: v,
  as: m,
  italic: h = !1,
  underline: b = !1,
  weight: R = "600",
  uppercase: O = !1,
  children: y,
  className: l,
  dangerouslySetInnerHTML: x,
  mt: d,
  mb: E,
  my: T,
  ...P
}) => {
  const D = m || dr(v), $ = `
        ${g[`heading-${v}`]}
        ${l}
        ${h ? g["text-italic"] : ""}
        ${b ? g["text-underline"] : ""}
        ${R ? g[`text-${R}`] : ""}
        ${O ? g["text-uppercase"] : ""}
    `, S = je({ mt: d, mb: E, my: T });
  return x ? /* @__PURE__ */ L.jsx(
    D,
    {
      id: c,
      className: $,
      style: { ...S },
      dangerouslySetInnerHTML: x,
      ...P
    }
  ) : /* @__PURE__ */ L.jsx(
    D,
    {
      id: c,
      className: $,
      style: { ...S },
      ...P,
      children: y
    }
  );
}, _r = ({
  variant: c = "p",
  size: v = "default",
  italic: m = !1,
  underline: h = !1,
  weight: b = "400",
  uppercase: R = !1,
  children: O,
  className: y,
  dangerouslySetInnerHTML: l,
  mt: x,
  mb: d,
  my: E,
  ...T
}) => {
  const P = c === "p" ? "p" : c === "list" ? "ul" : "div", N = `
        ${g[`text-${c}-${v}`]}
        ${y}
        ${m ? g["text-italic"] : ""}
        ${h ? g["text-underline"] : ""}
        ${b ? g[`text-${b}`] : ""}
        ${R ? g["text-uppercase"] : ""}
    `, $ = je({ mt: x, mb: d, my: E });
  return l ? /* @__PURE__ */ L.jsx(
    P,
    {
      className: N,
      dangerouslySetInnerHTML: l,
      style: { ...$ },
      ...T
    }
  ) : /* @__PURE__ */ L.jsx(P, { className: N, style: { ...$ }, ...T, children: O });
}, gr = ({
  id: c,
  size: v = "default",
  children: m,
  italic: h = !1,
  underline: b = !1,
  weight: R = "400",
  uppercase: O = !1,
  className: y,
  ...l
}) => {
  const d = `
        ${g[`label-${v}`]}
        ${y}
        ${h ? g["text-italic"] : ""}
        ${b ? g["text-underline"] : ""}
        ${R ? g[`text-${R}`] : ""}
        ${O ? g["text-uppercase"] : ""}
    `;
  return /* @__PURE__ */ L.jsx("label", { id: c, className: d, ...l, children: m });
};
export {
  pr as Heading,
  gr as Label,
  _r as Text
};
