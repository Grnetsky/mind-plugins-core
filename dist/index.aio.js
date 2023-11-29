/*
* mind-plugins-core 1.0.26
* Licensed under MIT
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@meta2d/core'), require('mind-diagram')) :
  typeof define === 'function' && define.amd ? define(['exports', '@meta2d/core', 'mind-diagram'], factory) :
  (factory((global.clone = {}),global.core,global.mindDiagram));
}(this, (function (exports,core,mindDiagram) { 'use strict';

  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _library = true;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
  var core$$1 = module.exports = { version: '2.6.12' };
  if (typeof __e == 'number') __e = core$$1; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive$1 = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive$1(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE];
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && _has(exports, key)) continue;
      // export native or passed
      out = own ? target[key] : source[key];
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
      // bind timers to global for call from export context
      : IS_BIND && own ? _ctx(out, _global)
      // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? (function (C) {
        var F = function (a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0: return new C();
              case 1: return new C(a);
              case 2: return new C(a, b);
            } return new C(a, b, c);
          } return C.apply(this, arguments);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      // make static versions for prototype methods
      })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
      }
    }
  };
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  var _redefine = _hide;

  var _iterators = {};

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: _library ? 'pure' : 'global',
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id$1 = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px).toString(36));
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  var def = _objectDp.f;

  var TAG = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  var _iterStep = function (done, value) {
    return { value: value, done: !!done };
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  _iterators.Arguments = _iterators.Array;

  var TO_STRING_TAG = _wks('toStringTag');

  var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
    'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
    'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
    'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
    'TextTrackList,TouchList').split(',');

  for (var i = 0; i < DOMIterables.length; i++) {
    var NAME = DOMIterables[i];
    var Collection = _global[NAME];
    var proto = Collection && Collection.prototype;
    if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
    _iterators[NAME] = _iterators.Array;
  }

  var _redefineAll = function (target, src, safe) {
    for (var key in src) {
      if (safe && target[key]) target[key] = src[key];
      else _hide(target, key, src[key]);
    } return target;
  };

  var _anInstance = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
      throw TypeError(name + ': incorrect invocation!');
    } return it;
  };

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG$1 = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
      // builtinTag case
      : ARG ? _cof(O)
      // ES3 arguments fallback
      : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2]
      || it['@@iterator']
      || _iterators[_classof(it)];
  };

  var _forOf = createCommonjsModule(function (module) {
  var BREAK = {};
  var RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
    var f = _ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
      result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = _iterCall(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
  });

  var SPECIES = _wks('species');

  var _setSpecies = function (KEY) {
    var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
    if (_descriptors && C && !C[SPECIES]) _objectDp.f(C, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  };

  var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');


  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var _validateCollection = function (it, TYPE) {
    if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var dP$1 = _objectDp.f;









  var fastKey = _meta.fastKey;

  var SIZE = _descriptors ? '_s' : 'size';

  var getEntry = function (that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F') return that._i[index];
    // frozen object case
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  var _collectionStrong = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');
        that._t = NAME;         // collection type
        that._i = _objectCreate(null); // index
        that._f = undefined;    // first entry
        that._l = undefined;    // last entry
        that[SIZE] = 0;         // size
        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = _validateCollection(this, NAME);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          } return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /* , that = undefined */) {
          _validateCollection(this, NAME);
          var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            // revert to the last existing entry
            while (entry && entry.r) entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(_validateCollection(this, NAME), key);
        }
      });
      if (_descriptors) dP$1(C.prototype, 'size', {
        get: function () {
          return _validateCollection(this, NAME)[SIZE];
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var entry = getEntry(that, key);
      var prev, index;
      // change existing entry
      if (entry) {
        entry.v = value;
      // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true), // <- index
          k: key,                        // <- key
          v: value,                      // <- value
          p: prev = that._l,             // <- previous entry
          n: undefined,                  // <- next entry
          r: false                       // <- removed
        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++;
        // add to index
        if (index !== 'F') that._i[index] = entry;
      } return that;
    },
    getEntry: getEntry,
    setStrong: function (C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      _iterDefine(C, NAME, function (iterated, kind) {
        this._t = _validateCollection(iterated, NAME); // target
        this._k = kind;                     // kind
        this._l = undefined;                // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l;
        // revert to the last existing entry
        while (entry && entry.r) entry = entry.p;
        // get next entry
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return _iterStep(1);
        }
        // return step by kind
        if (kind == 'keys') return _iterStep(0, entry.k);
        if (kind == 'values') return _iterStep(0, entry.v);
        return _iterStep(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // add [@@species], 23.1.2.2, 23.2.2.2
      _setSpecies(NAME);
    }
  };

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  var SPECIES$1 = _wks('species');

  var _arraySpeciesConstructor = function (original) {
    var C;
    if (_isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
      if (_isObject(C)) {
        C = C[SPECIES$1];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


  var _arraySpeciesCreate = function (original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex





  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;   // map
          else if (res) switch (TYPE) {
            case 3: return true;             // some
            case 5: return val;              // find
            case 6: return index;            // findIndex
            case 2: result.push(val);        // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  var dP$2 = _objectDp.f;
  var each = _arrayMethods(0);


  var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};
    if (!_descriptors || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      _redefineAll(C.prototype, methods);
      _meta.NEED = true;
    } else {
      C = wrapper(function (target, iterable) {
        _anInstance(target, C, NAME, '_c');
        target._c = new Base();
        if (iterable != undefined) _forOf(iterable, IS_MAP, target[ADDER], target);
      });
      each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide(C.prototype, KEY, function (a, b) {
          _anInstance(this, C, KEY);
          if (!IS_ADDER && IS_WEAK && !_isObject(a)) return KEY == 'get' ? undefined : false;
          var result = this._c[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      });
      IS_WEAK || dP$2(C.prototype, 'size', {
        get: function () {
          return this._c.size;
        }
      });
    }

    _setToStringTag(C, NAME);

    O[NAME] = C;
    _export(_export.G + _export.W + _export.F, O);

    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

    return C;
  };

  var MAP = 'Map';

  // 23.1 Map Objects
  var es6_map = _collection(MAP, function (get) {
    return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
      var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
      return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
    }
  }, _collectionStrong, true);

  var _arrayFromIterable = function (iter, ITERATOR) {
    var result = [];
    _forOf(iter, false, result.push, result, ITERATOR);
    return result;
  };

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON


  var _collectionToJson = function (NAME) {
    return function toJSON() {
      if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      return _arrayFromIterable(this);
    };
  };

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON


  _export(_export.P + _export.R, 'Map', { toJSON: _collectionToJson('Map') });

  // https://tc39.github.io/proposal-setmap-offrom/


  var _setCollectionOf = function (COLLECTION) {
    _export(_export.S, COLLECTION, { of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) A[length] = arguments[length];
      return new this(A);
    } });
  };

  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
  _setCollectionOf('Map');

  // https://tc39.github.io/proposal-setmap-offrom/





  var _setCollectionFrom = function (COLLECTION) {
    _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      _aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) _aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = _ctx(mapFn, arguments[2], 2);
        _forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        _forOf(source, false, A.push, A);
      }
      return new this(A);
    } });
  };

  // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
  _setCollectionFrom('Map');

  var map = _core.Map;

  var map$1 = map;

  // most Object methods by ES6 should accept primitives



  var _objectSap = function (KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
  };

  // 19.1.2.14 Object.keys(O)



  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  var keys = _core.Object.keys;

  var keys$1 = keys;

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$2
  };

  // 19.1.2.1 Object.assign(target, source, ...)






  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) { B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

  var assign = _core.Object.assign;

  var assign$1 = assign;

  function createDom(tag, style, event, func, className) {
    if (style === void 0) {
      style = {};
    }
    if (event === void 0) {
      event = undefined;
    }
    if (func === void 0) {
      func = undefined;
    }
    if (className === void 0) {
      className = undefined;
    }
    // 创建dom
    var dom = document.createElement(tag);
    // 设置dom样式
    if (style && typeof style === 'object') {
      assign$1(dom.style, style);
      className && dom.classList.add(className);
    } else {
      throw new Error('createDom error: parma "style" must be a Object');
    }
    // 绑定dom事件；
    if (typeof event === 'string' && typeof func === 'function') {
      dom.addEventListener(event, function (e) {
        func(e);
      });
    }
    return dom;
  }
  function debounce(fn, delay) {
    var timer = null;
    return function (pen, recursion) {
      var _this = this;
      if (recursion === void 0) {
        recursion = true;
      }
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.call(_this, pen, recursion);
      }, delay);
    };
  }
  function deepMerge(obj1, obj2) {
    var newObj = assign$1({}, obj1);
    for (var key in obj2) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        newObj[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        newObj[key] = obj2[key];
      }
    }
    return newObj;
  }
  function replaceAfterPosition(str, position, regex, replacement) {
    // 判断位置是否超出字符串长度
    if (position >= str.length) return str;

    // 截取从指定位置开始到字符串末尾的子字符串
    var substringToReplace = str.slice(position);

    // 在子字符串中执行替换操作
    var replacedSubstring = substringToReplace.replace(regex, replacement);

    // 将替换后的子字符串与前面的部分结合
    var resultString = str.slice(0, position) + replacedSubstring;
    return resultString;
  }
  function debounceFirstOnly(func, wait) {
    var timeout;
    var executed = false; // 标志是否已经执行过一次

    return function () {
      var context = this;
      if (!executed) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        func.apply(context, args);
        executed = true;
      }
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        executed = false; // 重置执行标志，使得函数可以在下一次防抖周期首次被触发时执行
      }, wait);
    };
  }

  var ToolBox = /*#__PURE__*/function () {
    function ToolBox(parentHtml, style, dom) {
      if (style === void 0) {
        style = {};
      }
      if (dom === void 0) {
        dom = null;
      }
      this.animate = false;
      this.curItem = null;
      // 单例模式
      if (!ToolBox.instance) {
        ToolBox.instance = this;
      } else {
        return ToolBox.instance;
      }
      this.box = document.createElement('div');
      this.box.style.boxSizing = "content-box";
      this.box.style.backgroundColor = '#fff';
      this.box.style.borderRadius = '5px';
      this.box.style.boxShadow = '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)';
      this.box.style.width = 'max-content';
      this.box.style.height = '40px';
      this.box.style.padding = '6px';
      this.box.className = 'toolBox';
      this.box.style.zIndex = '999';
      this.box.style.display = 'flex';
      this.box.style.visibility = 'hidden';
      this.box.style.justifyContent = 'center';
      this.box.style.alignItems = 'center';
      // this.box.style.transition = 'all 1s ease';
      this.box.style.position = 'relative';
      this.box.style.transform = 'translateX(-50%)';
      this.setStyle(style);
      var stylesheet = document.styleSheets[0]; // 选择第一个样式表
      stylesheet.insertRule(".toolbox_item {" + "display: flex;" + "justify-content: center;" + "align-items: center;" + "height: 100%;" + "margin: 0 1px;" + "cursor: pointer;" + "border-radius: 5px;" + "padding: 0 5px;" + "}", 0);
      stylesheet.insertRule(".toolbox_item:hover {" + "background-color: #eee;" + "}", 0);
      stylesheet.insertRule(".toolbox_slider_item:hover {" + "background-color: #eee;" + "}", 0);
      parentHtml.appendChild(this.box);
    }
    var _proto = ToolBox.prototype;
    _proto.setStyle = function setStyle(style) {
      var _this = this;
      keys$1(style).forEach(function (i) {
        _this.box.style[i] = style[i];
      });
    }
    // 重写dom函数
    ;
    _proto._rewriteDom = function _rewriteDom(dom) {
      this.dom = dom;
      return dom;
    };
    _proto.hide = function hide() {
      this.box.style.visibility = 'hidden';
    };
    _proto.bindPen = function bindPen(pen) {
      this.pen = pen;
    };
    _proto.show = function show() {
      this.box.style.visibility = 'visible';
    };
    _proto.destroy = function destroy() {
      this.box.parentNode.removeChild(this.box);
    };
    _proto.translateWithPen = function translateWithPen(pen) {
      if (!this.animate) this.hide();
      var store = pen.calculative.canvas.store;
      var worldRect = pen.calculative.worldRect;
      this.box.style.position = 'absolute';
      this.box.style.outline = 'none';
      this.box.style.left = worldRect.x + store.data.x + worldRect.width / 2 + 'px';
      this.box.style.top = worldRect.y + store.data.y + -80 + 'px';
      this.box.style.userSelect = 'none';
      if (!this.animate) this.show();
    };
    _proto.renderFuncList = function renderFuncList() {
      var _this2 = this;
      var fragmentChild = new DocumentFragment();
      this.box.innerHTML = '';
      this.funcList.forEach(function (i) {
        preprocess(i, _this2.pen);
        if (i.name) {
          var itemsSpan = _this2.setChildDom(_this2.pen, i);
          itemsSpan.className = 'toolbox_item';
          fragmentChild.appendChild(itemsSpan);
        }
      });
      this.box.appendChild(fragmentChild);
    }
    /**
     * @description 创造子节点  设置样式 配置事件函数等；
     * @param pen 操作的图元
     * @param item 该toolItem配置项 包含 显示name 事件event 回调函数func 和该按钮的样式style 与setDom自定义样式
     * */;
    _proto.setChildDom = function setChildDom(pen, item) {
      var dom = document.createElement('div');
      // 构建update方法 用于局部更新
      item.update = function (target, keepOpen) {
        if (keepOpen === void 0) {
          keepOpen = false;
        }
        // update 局部更新
        if (target === 'title') {
          renderTitle(item, pen, dom.titleDom);
          return;
        } else if (target === 'child') {
          renderChildDom(item, pen, dom, dom.childrenDom, keepOpen);
          return;
        }
        // 清空列表  初始化列表
        renderInit(item, pen, dom);
        // 执行配置项初始化函数
        item.init == null || item.init(item, pen, dom);

        // 初始化titleDOM
        var title = createDom('div', {}, undefined, undefined, 'toolbox_title');
        // 执行titleDom
        title = renderTitle(item, pen, title);
        item.dom = dom;
        item.dom.titleDom = title;
        if (item.children || item.setChildrenDom) {
          // 打开函数
          title['on' + (item.openChildDomEvent || 'click')] = function () {
            // 关闭其他选项
            if (toolbox.curItem !== item) {
              toolbox.funcList.filter(function (i) {
                return i.isOpen;
              }).forEach(function (i) {
                i.close();
              });
              // toolbox.curItem?.closeChildDom?.(toolbox.curItem,pen,toolbox.curItem.dom.childrenDom) || (toolbox.curItem?.dom.childrenDom && ( toolbox.curItem.dom.childrenDom.style.visibility = 'hidden' ))
              // toolbox.curItem?.isOpen? (toolbox.curItem.isOpen = false): ''
            }

            if (toolbox.curItem === item && item.isOpen) return;
            // 将打开逻辑交给用户 或者
            (item.openChildDom == null ? void 0 : item.openChildDom(item, pen, item.dom.childrenDom)) || item.dom.childrenDom && (item.dom.childrenDom.style.visibility = 'visible');

            // 执行打开下拉菜单回调函数 TODO 传参应该怎么传
            item.onOpenChildDom == null || item.onOpenChildDom(item, pen, item.dom.childrenDom);
            item.isOpen = true;
            toolbox.curItem = item;
          };
        }

        // titleDom添加到dom中
        item.closeShadowDom ? dom.appendChild(title) : dom.shadowRoot.appendChild(title);

        // 渲染下拉列表
        var containerDom = null;
        renderChildDom(item, pen, dom, containerDom);
        // 事件处理
      };

      item.updateAll = function (keepOpen) {
        if (keepOpen === void 0) {
          keepOpen = true;
        }
        item.update('title');
        item.update('child', keepOpen);
      };
      item.update();
      return dom;
    };
    _proto.setFuncList = function setFuncList(funcList) {
      this.funcList = funcList;
      this.renderFuncList();
    };
    _proto.clearFuncList = function clearFuncList() {
      this.setFuncList([]);
    };
    return ToolBox;
  }();
  ToolBox.instance = null;
  function renderInit(item, pen, dom) {
    if (dom.shadowRoot) {
      // 清空
      dom.shadowRoot.innerHTML = '';
    } else {
      item.closeShadowDom ? dom.innerHTML = '' : dom.attachShadow({
        mode: "open"
      });
    }

    //设置样式与事件
    typeof item.style === 'object' && toolbox.setStyle(dom, item.style);

    // 绑定事件，绑定在dom上
    if (item.event) {
      var eventFunc = function eventFunc(e) {
        // 绑定事件
        if (item.closeOther) {
          toolbox.funcList.filter(function (i) {
            return i.isOpen;
          }).forEach(function (i) {
            i.close();
          });
        }
        item.func(item, this, dom, e);
      };
      dom.addEventListener(item.event, eventFunc.bind(pen));
    }
    return dom;
  }
  function renderTitle(item, pen, title) {
    title.innerHTML = '';
    if (typeof item.setDom === 'function') {
      var re = item.setDom(item, pen, title);
      switch (typeof re) {
        case "string":
          title.innerHTML = re;
          break;
        case "object":
          title.appendChild(re);
          break;
        default:
          throw new Error('function setDom must return string or node object');
      }
    } else {
      title.innerHTML = item.icon ? item.icon : item.img ? "<img src=\"" + item.img + "\" title=\"" + item.name + "\" />" : item.name;
    }
    return title;
  }
  function renderChildDom(item, pen, dom, containerDom, keepOpen) {
    if (keepOpen === void 0) {
      keepOpen = false;
    }
    if (dom.childrenDom) dom.shadowRoot ? dom.shadowRoot.removeChild(dom.childrenDom) : dom.removeChild(dom.childrenDom);
    if (item.children && item.children.length > 0 || item.setChildrenDom) {
      var _containerDom;
      // 是否重写dom
      if (typeof item.setChildrenDom === 'function') {
        // 重新childDom

        var childDom = item.setChildrenDom(item, pen, dom);

        /**
         * @description 若返回的是字符串，则在外部包裹一层div作为其container
         * */
        if (typeof childDom === 'string') {
          var div = document.createElement('div');
          // 默认隐藏节点
          keepOpen ? (item.openChildDom == null ? void 0 : item.openChildDom(item, pen, item.dom.childrenDom)) || (div.style.visibility = 'visible') : (item.closeChildDom == null ? void 0 : item.closeChildDom(item, pen, div)) || (div.style.visibility = 'hidden');
          div.innerHTML = childDom;
          dom.shadowRoot ? dom.shadowRoot.appendChild(div) : dom.appendChild(div);
          containerDom = div;
        } else {
          containerDom = childDom;
          keepOpen ? (item.openChildDom == null ? void 0 : item.openChildDom(item, pen, item.dom.childrenDom)) || (childDom.style.visibility = 'visible') : (item.closeChildDom == null ? void 0 : item.closeChildDom(item, pen, childDom)) || (childDom.style.visibility = 'hidden');
        }
      } else {
        containerDom = createDom('div', {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'absolute',
          top: '50px',
          backgroundColor: '#fff',
          borderRadius: '5px',
          padding: '3px',
          width: 'max-content',
          boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
        });
        var gap = createDom('div', {
          position: 'absolute',
          height: '10px',
          bottom: '-10px',
          backgroundColor: '#eee',
          width: '100%',
          opacity: 0
        });
        dom.appendChild(gap);
        keepOpen ? (item.openChildDom == null ? void 0 : item.openChildDom(item, pen, containerDom)) || (containerDom.style.visibility = 'visible') : (item.closeChildDom == null ? void 0 : item.closeChildDom(item, pen, containerDom)) || (containerDom.style.visibility = 'hidden');
      }
      var fragment = new DocumentFragment();
      var _loop = function _loop() {
        var i = _step.value;
        var node = createDom('div', {
          margin: '5px 8px'
        }, i.event, function (e) {
          i.stopPropagation ? e.stopPropagation() : '';
          i.func(i, this, dom, item, e);
        }.bind(pen), 'toolbox_item');

        //TODO 执行时机是否正确？？？
        i.init == null || i.init(i, pen, node);
        if (i.setDom) {
          var re = i.setDom(i, pen, node);
          switch (typeof re) {
            case "string":
              node.innerHTML = re;
              break;
            case "object":
              node.appendChild(re);
              break;
            default:
              throw new Error('function setDom must return string or node object');
          }
        } else {
          node.innerHTML = i.icon && i.name || i.img && i.name ? '<span style="padding-right: 30px;width: max-content" >' + (i.icon || "<img src=\"" + i.img + "\"/>") + '</span> <span>' + i.name + '</span>' : '<span>' + (i.name || i.icon) + '</span>';
        }
        fragment.appendChild(node);
      };
      for (var _iterator = _createForOfIteratorHelperLoose(item.children || []), _step; !(_step = _iterator()).done;) {
        _loop();
      }
      dom.style.position = 'relative';
      (_containerDom = containerDom) == null || _containerDom.appendChild(fragment);
      containerDom.classList.add('toolbox_container');
      containerDom.style.position = 'absolute';
      item.closeShadowDom ? dom.appendChild(containerDom) : dom.shadowRoot.appendChild(containerDom);
      dom.childrenDom = containerDom;
      // 添加样式到元素
    }

    if (item.children || item.setChildrenDom || item.closeOther) {
      // 关闭下拉菜单
      if (!item.closeOther) {
        item.closeChildDomEvent ? (item.closeEventOnChild ? dom.childrenDom : dom)['on' + item.closeChildDomEvent] = function () {
          dom.offsetHeight;
          // 可手动派发隐藏函数
          item.onCloseChildDom == null || item.onCloseChildDom(item, pen, item.dom.childrenDom);
          item.close();
          toolbox.curItem = null;
        } : '';
      }
    }
    return containerDom;
  }

  // 配置项预处理
  function preprocess(item, pen) {
    if (item.openEventOnTitle == null) {
      item.openEventOnTitle = true;
    }
    if (item.children || item.setChildrenDom) {
      item.isOpen = false;
      item.closeOther = false;
      item.close = function () {
        (item.closeChildDom == null ? void 0 : item.closeChildDom(item, pen, item.dom.childrenDom)) || item.dom.childrenDom && (item.dom.childrenDom.style.visibility = 'hidden');
        item.isOpen = false;
      };
      item.open = function () {
        (item.openChildDom == null ? void 0 : item.openChildDom(item, pen, item.dom.childrenDom)) || item.dom.childrenDom && (item.dom.childrenDom.style.visibility = 'visible');
        item.isOpen = true;
      };
    }
  }

  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


  _export(_export.S, 'Array', { isArray: _isArray });

  var isArray = _core.Array.isArray;

  var isArray$1 = isArray;

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)


  var SPECIES$2 = _wks('species');
  var _speciesConstructor = function (O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES$2]) == undefined ? D : _aFunction(S);
  };

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke = function (fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0: return un ? fn()
                        : fn.call(that);
      case 1: return un ? fn(args[0])
                        : fn.call(that, args[0]);
      case 2: return un ? fn(args[0], args[1])
                        : fn.call(that, args[0], args[1]);
      case 3: return un ? fn(args[0], args[1], args[2])
                        : fn.call(that, args[0], args[1], args[2]);
      case 4: return un ? fn(args[0], args[1], args[2], args[3])
                        : fn.call(that, args[0], args[1], args[2], args[3]);
    } return fn.apply(that, args);
  };

  var process = _global.process;
  var setTask = _global.setImmediate;
  var clearTask = _global.clearImmediate;
  var MessageChannel = _global.MessageChannel;
  var Dispatch = _global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;
  var run = function () {
    var id = +this;
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function (event) {
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [];
      var i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        _invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if (_cof(process) == 'process') {
      defer = function (id) {
        process.nextTick(_ctx(run, id, 1));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(_ctx(run, id, 1));
      };
    // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = _ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
      defer = function (id) {
        _global.postMessage(id + '', '*');
      };
      _global.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in _domCreate('script')) {
      defer = function (id) {
        _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
          _html.removeChild(this);
          run.call(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(_ctx(run, id, 1), 0);
      };
    }
  }
  var _task = {
    set: setTask,
    clear: clearTask
  };

  var macrotask = _task.set;
  var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
  var process$1 = _global.process;
  var Promise$1 = _global.Promise;
  var isNode = _cof(process$1) == 'process';

  var _microtask = function () {
    var head, last, notify;

    var flush = function () {
      var parent, fn;
      if (isNode && (parent = process$1.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (e) {
          if (head) notify();
          else last = undefined;
          throw e;
        }
      } last = undefined;
      if (parent) parent.enter();
    };

    // Node.js
    if (isNode) {
      notify = function () {
        process$1.nextTick(flush);
      };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
    } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
      notify = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise$1.resolve(undefined);
      notify = function () {
        promise.then(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else {
      notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(_global, flush);
      };
    }

    return function (fn) {
      var task = { fn: fn, next: undefined };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      } last = task;
    };
  };

  // 25.4.1.5 NewPromiseCapability(C)


  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction(resolve);
    this.reject = _aFunction(reject);
  }

  var f$3 = function (C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
  	f: f$3
  };

  var _perform = function (exec) {
    try {
      return { e: false, v: exec() };
    } catch (e) {
      return { e: true, v: e };
    }
  };

  var navigator = _global.navigator;

  var _userAgent = navigator && navigator.userAgent || '';

  var _promiseResolve = function (C, x) {
    _anObject(C);
    if (_isObject(x) && x.constructor === C) return x;
    var promiseCapability = _newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function () { SAFE_CLOSING = true; };
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$3] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  var task = _task.set;
  var microtask = _microtask();




  var PROMISE = 'Promise';
  var TypeError$1 = _global.TypeError;
  var process$2 = _global.process;
  var versions = process$2 && process$2.versions;
  var v8 = versions && versions.v8 || '';
  var $Promise = _global[PROMISE];
  var isNode$1 = _classof(process$2) == 'process';
  var empty = function () { /* empty */ };
  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

  var USE_NATIVE = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);
      var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
        exec(empty, empty);
      };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode$1 || typeof PromiseRejectionEvent == 'function')
        && promise.then(empty) instanceof FakePromise
        // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
        // we can't detect it synchronously, so just check versions
        && v8.indexOf('6.6') !== 0
        && _userAgent.indexOf('Chrome/66') === -1;
    } catch (e) { /* empty */ }
  }();

  // helpers
  var isThenable = function (it) {
    var then;
    return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var notify = function (promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;
      var run = function (reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }
            if (handler === true) result = value;
            else {
              if (domain) domain.enter();
              result = handler(value); // may throw
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };
      while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };
  var onUnhandled = function (promise) {
    task.call(_global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;
      if (unhandled) {
        result = _perform(function () {
          if (isNode$1) {
            process$2.emit('unhandledRejection', value, promise);
          } else if (handler = _global.onunhandledrejection) {
            handler({ promise: promise, reason: value });
          } else if ((console = _global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
      } promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };
  var isUnhandled = function (promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };
  var onHandleUnhandled = function (promise) {
    task.call(_global, function () {
      var handler;
      if (isNode$1) {
        process$2.emit('rejectionHandled', promise);
      } else if (handler = _global.onrejectionhandled) {
        handler({ promise: promise, reason: promise._v });
      }
    });
  };
  var $reject = function (value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };
  var $resolve = function (value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");
      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = { _w: promise, _d: false }; // wrap
          try {
            then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({ _w: promise, _d: false }, e); // wrap
    }
  };

  // constructor polyfill
  if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      _anInstance(this, $Promise, PROMISE, '_h');
      _aFunction(executor);
      Internal.call(this);
      try {
        executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    };
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
      this._c = [];             // <- awaiting reactions
      this._a = undefined;      // <- checked in isUnhandled reactions
      this._s = 0;              // <- state
      this._d = false;          // <- done
      this._v = undefined;      // <- value
      this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false;          // <- notify
    };
    Internal.prototype = _redefineAll($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode$1 ? process$2.domain : undefined;
        this._c.push(reaction);
        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function () {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = _ctx($resolve, promise, 1);
      this.reject = _ctx($reject, promise, 1);
    };
    _newPromiseCapability.f = newPromiseCapability = function (C) {
      return C === $Promise || C === Wrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
  _setToStringTag($Promise, PROMISE);
  _setSpecies(PROMISE);
  Wrapper = _core[PROMISE];

  // statics
  _export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
    }
  });
  _export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = _perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        _forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = _perform(function () {
        _forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  });

  _export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
    var C = _speciesConstructor(this, _core.Promise || _global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return _promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return _promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  } });

  // https://github.com/tc39/proposal-promise-try




  _export(_export.S, 'Promise', { 'try': function (callbackfn) {
    var promiseCapability = _newPromiseCapability.f(this);
    var result = _perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  } });

  var promise = _core.Promise;

  var promise$1 = promise;

  var SET = 'Set';

  // 23.2 Set Objects
  var es6_set = _collection(SET, function (get) {
    return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
    }
  }, _collectionStrong);

  // https://github.com/DavidBruant/Map-Set.prototype.toJSON


  _export(_export.P + _export.R, 'Set', { toJSON: _collectionToJson('Set') });

  // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
  _setCollectionOf('Set');

  // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
  _setCollectionFrom('Set');

  var set$1 = _core.Set;

  var set$2 = set$1;

  // 20.1.2.4 Number.isNaN(number)


  _export(_export.S, 'Number', {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare
      return number != number;
    }
  });

  var isNan = _core.Number.isNaN;

  var isNan$1 = isNan;

  // 模板解析，注册函数并返回返回dom对象
  // TODO 此处只能处理返回字符串的信息

  var EVENTTAG = ['@', 'on'];
  var LifeCycle = ['mounted'];
  /**
   * @description 通过此函数你可以自由地自定义工具栏的样式 采用影子dom 使得style相互隔离
   * @param self 此配置项自身
   * @param dom 插件提供的包含容器 即你创建的dom的外部div对象
   * @return string dom字符串
   * */

  function template(config, _ref, output) {
    var template = _ref.template,
      scripts = _ref.scripts,
      style = _ref.style;
    if (output === void 0) {
      output = 'string';
    }
    var namespace = config.key;
    if (!namespace) throw new Error('The name attribute is not configured');
    PluginManager._env[namespace] ? '' : PluginManager._env[namespace] = {};
    var _parse = parse(template),
      dom = _parse.dom,
      funcObjs = _parse.funcObjs;
    var keys = keys$1(scripts);

    // 暂不考虑 传其他参数情况
    keys.forEach(function (i) {
      // 将script的函数传递到全局环境
      PluginManager._env[namespace][i] = scripts[i];

      // 执行生命周期函数 放入微队列依次执行
      LifeCycle.includes(i) ? promise$1.resolve().then(function () {
        scripts[i]();
      }) : '';
    });
    funcObjs.forEach(function (i) {
      // 出现的函数在script中定义了 则转换
      if (keys.indexOf(i.name) !== -1) {
        i.params.forEach(function (j) {
          //TODO 应该还要过滤一遍字面量  此处仅仅处理了变量
          if (!j.param.startsWith('this') && j.param !== 'event' && !isLiteral(j.param)) {
            // TODO 此处应当根据字符的具体位置来替换，而非全部替换
            // dom = dom.replaceAll(j.param,`PluginManager._env.${namespace}.${j}`)
            dom = replaceAfterPosition(dom, j.index, j.param, "PluginManager._env." + namespace + "." + j.param);
          }
        });
        dom = dom.replaceAll(i.name + "(", "PluginManager._env." + namespace + "." + i.name + "(");
      }
    });
    var sty = '';
    if (style) {
      style.startsWith('<style>') ? sty = style : sty = "<style>" + style + "</style>";
    }
    if (output === 'string') {
      return dom + sty;
    } else if (output === 'dom') {
      var res = createDom('div');
      res.innerHTML = dom + sty;
      return res;
    }
  }
  function parse(html) {
    // 函数匹配式
    var funcReg = new RegExp("(" + EVENTTAG.join('|') + ")(?<event>\\w+)\\s*=\\s*[\"'](?<name>[a-zA-Z][a-zA-Z0-9]*)\\s*\\(\\s*(?<param>[^)]*)\\s*\\)[\"']", 'g');
    // let varReg = new RegExp()
    // 变量匹配

    //(@|on)(?<event>w+)\s*=s*["'](?<name>[a-zA-Z][a-zA-Z0-9]*)s*(s*(?<param>[w.]*)s*)["']
    //(@|on)(?<event>\w+)\s*=\s*["'](?<name>[a-zA-Z][a-zA-Z0-9]*)\s*\(\s*(?<param>[\w\.]*)\s*\)["']// 替换空格 替换@符号
    var reHtml = html.replaceAll('\n', '').replaceAll(/@(\w+)="([^"]+)"/g, 'on$1="$2"');

    // 使用 matchAll 来匹配所有结果
    var funcMatchs = reHtml.matchAll(funcReg);
    // let varMatchs = reHtml.matchAll(varReg);

    // 请注意，没有传递 'g' 标志给 matchAll，因为 reg 已经带有 'g' 标志

    var result = [];
    var _loop = function _loop() {
      var match = _step.value;
      var _match$groups = match.groups,
        event = _match$groups.event,
        name = _match$groups.name,
        param = _match$groups.param;

      // 获取参数的具体位置

      var params = param.replace(/\s/g, '').split(',');
      var lastIndex = 0;
      params = params.map(function (i) {
        var strIndex = match[0].indexOf(i, lastIndex);
        var index = match.index + strIndex;
        lastIndex = strIndex + i.length;
        return {
          param: i,
          index: index
        };
      });
      // 去除 param 中的空格并按逗号分割参数
      var re = {
        event: event,
        name: name,
        params: params,
        index: match.index
      };
      result.push(re);
    };
    for (var _iterator = _createForOfIteratorHelperLoose(funcMatchs), _step; !(_step = _iterator()).done;) {
      _loop();
    }

    // 去重逻辑
    var uniqueResults = [];
    var uniqueNames = new set$2();
    for (var _i = 0, _result = result; _i < _result.length; _i++) {
      var res = _result[_i];
      if (!uniqueNames.has(res.name)) {
        uniqueNames.add(res.name);
        uniqueResults.push(res);
      }
    }
    return {
      dom: reHtml,
      funcObjs: uniqueResults
    };
  }

  // 该数据是否为字面量
  function isLiteral(_) {
    // 判断是否为字符串
    if (_.startsWith('"') || _.startsWith("'")) return true;
    // 判断是否为数字
    // if(typeof (+ _) === "number")return true
    if (!isNan$1(+_)) return true;
    if (_ === "true" || _ === "false") return true;

    // 还未考虑是否为对象
    return false;
  }

  var _marked = /*#__PURE__*/_regeneratorRuntime().mark(generateColor);
  var colorList = ['#FF2318', '#9C64A2', '#B4C926', '#0191B3', '#6F6EB9', '#9C64A2', '#FF291B', '#F4AE3C'];
  function generateColor() {
    var index;
    return _regeneratorRuntime().wrap(function generateColor$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          index = 0;
        case 1:
          _context.next = 4;
          return mindBoxPlugin.colorList[index];
        case 4:
          index = (index + 1) % mindBoxPlugin.colorList.length;
          _context.next = 1;
          break;
        case 7:
        case "end":
          return _context.stop();
      }
    }, _marked);
  }
  var funcList = [
  //   {
  // key: "id",
  //     name:'id',
  // setDom(self,pen) {
  //   return pen.id
  // }
  //   },
  {
    key: 'addChildNode',
    name: '新增子级节点',
    // 该选项的选项名，当无icon或者img或者setDom时，会以此为准  优先级：setDom>icon>img>name
    // 监听事件名
    // event: 'click',
    /**
     * @description 事件对应的回调函数
     * @param self 返回该选项自身
     * @param pen 返回当前操作的pen对象
     * */
    // func: async (self,pen)=>{
    //   mindBoxPlugin.bottomChildren(pen,0);
    //   },
    openChildDomEvent: 'mouseenter',
    closeShadowDom: true,
    closeEventOnChild: false,
    // 是否在childrenDom中触发事件
    stopPropagation: true,
    closeChildDom: function closeChildDom(self, pen, dom) {
      // dom.style.height = 'max-height'
      // dom.style.visibility = 'hidden'
      // dom.style.overflow = 'hidden'
      // dom.style.transition = '.3s'
      // dom.style.height = 0'
      dom.style.transformOrigin = 'top';
      dom.offsetHeight;
      dom.style.transition = 'all .3s';
      dom.style.transform = 'scaleY(0)';
      return true;
    },
    openChildDom: function openChildDom(self, pen, dom) {
      dom.style.transform = 'scaleY(1)';
      return true;
    },
    children: [{
      name: '',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1698915834790" class="icon" viewBox="0 0 1365 1024" version="1.1" p-id="13181" width="50" height="30"><path d="M920.32924106 188.22098215H435.74469865c-178.43219866 0-323.49023438 145.05719866-323.49023438 323.49023436 0 178.43219866 145.05803572 323.49023438 323.49023438 323.49023439h484.58454241c178.43303572 0 323.49023438-145.05803572 323.49023437-323.49023439 0.14481026-178.28822544-144.91322544-323.49023438-323.49023437-323.49023436z m2.65345982 603.01339285H439.05440848c-145.05719866 0-281.40652902-137.4375-281.40652903-281.19475447 0-145.05803572 132.71735492-270.29966518 277.77455357-270.29966518h489.52064732c145.05803572 0 272.32700893 131.98995536 272.32700893 275.74720983 0 143.61328125-129.22935267 275.74720982-274.28738839 275.74720982z" p-id="13182"/></svg>',
      event: 'click',
      func: function func(self, pen, dom) {
        mindBoxPlugin.addNode(pen, 0, 'mindNode2', {
          width: 200,
          height: 50
        });
      }
    }, {
      name: '',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1698916220010" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="13326" width="50" height="30"><path d="M485.213 869.904c6.744 4.822 18.199 8.603 26.787 8.603 8.588 0 21.779-2.476 28.32-7.442l467.957-336.878c13.427-9.665 13.47-26.284 0-35.915l-469.49-335.716c-6.726-4.81-19.733-10.927-28.321-10.927-8.588 0-23.313 7.122-29.855 12.088L15.723 498.272c-13.43 9.664-13.47 26.284 0 35.915z m23.719-671.51l452.01 322.481L512 835.227 63.058 518.553z" p-id="13327"/></svg>',
      event: 'click',
      func: function func(self, pen, dom) {
        mindBoxPlugin.addNode(pen, 0, 'diamond', {
          width: 200,
          height: 120
        });
      }
    }, {
      name: '',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="30px" viewBox="0 0 140 53" version="1.1">\n' + '    <title>椭圆形备份 12</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-372.000000, -738.000000)" stroke="#000000" stroke-width="2">\n' + '            <ellipse id="椭圆形备份-12" cx="442" cy="764.5" rx="69" ry="25.5"/>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
      event: 'click',
      func: function func(self, pen, dom) {
        mindBoxPlugin.addNode(pen, 0, 'circle', {
          width: 200,
          height: 75
        });
      }
    }],
    img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5LiL57qn6IqC54K5PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjE0IiB5PSIxOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjciIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5Zu65a6aIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzM2LjAwMDAwMCwgLTI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTLlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Mi4wMDAwMDAsIDI0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuS4i+e6p+iKgueCuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU0LjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i6YCP5piO5bqV5Zu+IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70tNiIgc3Ryb2tlPSIjODE4MTg3IiB4PSI0LjUiIHk9IjguNSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjYiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMjIiIHgyPSIxNCIgeTI9IjIyIiBpZD0i55u057q/LTciIHN0cm9rZT0iIzgxODE4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMTUiIHgyPSIxMiIgeTI9IjIyIiBpZD0i55u057q/LTYiIHN0cm9rZT0iIzgxODE4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0i55+p5b2i5aSH5Lu9LTUiIHN0cm9rZT0iIzlDOUNBNSIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
  }, {
    key: 'relayout',
    name: '重新布局',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">\n' + '    <title>重新布局</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-577.000000, -138.000000)" stroke="#818187">\n' + '            <g id="编组-2" transform="translate(253.000000, 135.000000)">\n' + '                <g id="仅重布局子集" transform="translate(324.000000, 3.000000)">\n' + '                    <rect id="矩形备份-6" x="7.5" y="7.5" width="19" height="19" rx="1"/>\n' + '                    <line x1="7.5" y1="13.5" x2="26.5" y2="13.5" id="直线-11" stroke-linecap="square"/>\n' + '                    <line x1="14.325" y1="18.5" x2="26.325" y2="18.5" id="直线-11备份-4" stroke-linecap="square"/>\n' + '                    <line x1="14.325" y1="23.5" x2="26.325" y2="23.5" id="直线-11备份-5" stroke-linecap="square"/>\n' + '                    <line x1="13.5" y1="13.5" x2="13.5" y2="25.5" id="直线-11备份" stroke-linecap="square"/>\n' + '                    <line x1="17.5" y1="13.5" x2="17.5" y2="25.5" id="直线-11备份-2" stroke-linecap="square"/>\n' + '                    <line x1="22.5" y1="13.5" x2="22.5" y2="25.5" id="直线-11备份-3" stroke-linecap="square"/>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
    event: 'click',
    func: function func(self, pen, dom, e) {
      var _pen$mind;
      var children = ((_pen$mind = pen.mind) == null ? void 0 : _pen$mind.children) || [];
      if (children.length > 0) {
        mindBoxPlugin.update(pen, true);
      }
    },
    // setDom(self,dom){
    //   // draw your dom freeDom！！！
    //   let result =  `<span>${self.name}</span>`;
    //   return result;
    // }
    closeOther: true
  }, {
    key: 'relayoutNext',
    description: '',
    closeOther: true,
    name: '重新布局下一级',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">\n' + '    <title>重新布局下一级</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-531.000000, -138.000000)" stroke="#818187">\n' + '            <g id="编组-2" transform="translate(253.000000, 135.000000)">\n' + '                <g id="重新布局" transform="translate(278.000000, 3.000000)">\n' + '                    <rect id="矩形备份-6" x="7.5" y="7.5" width="19" height="19" rx="1"/>\n' + '                    <line x1="7.5" y1="13.5" x2="26.5" y2="13.5" id="直线-11" stroke-linecap="square"/>\n' + '                    <line x1="13.5" y1="13.5" x2="13.5" y2="25.5" id="直线-11备份" stroke-linecap="square"/>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
    event: 'click',
    func: function func(self, pen) {
      var _pen$mind2;
      var children = ((_pen$mind2 = pen.mind) == null ? void 0 : _pen$mind2.children) || [];
      if (children.length > 0) {
        mindBoxPlugin.update(pen, false);
      }
    }
  }, {
    key: 'nodeStyle',
    name: '边框样式',
    color: '#4D4DFF',
    dash: '5,5',
    width: 4,
    colorList: ['#5757F3', '#FD42DD', '#8C8CFF', '#19f1cc', '#6ffd97', '#efe864', '#ff931a', '#fa7878'],
    openChildDomEvent: 'mouseenter',
    /**
     * @description 初始化函数
     * @param self 配置项本身
     * @param pen 木匾画笔
     */
    init: function init(self, pen) {
      self.dash = pen.lineDash ? pen.lineDash[0] + "," + pen.lineDash[1] : '0,0';
      self.width = (+pen.lineWidth).toFixed(0);
      self.color = pen.mind.color || pen.calculative.color || '#000000';
    },
    setDom: function setDom(self) {
      var color = self.color;
      var dash = self.dash;
      var width = self.width;
      var HTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34px\" height=\"34px\" viewBox=\"0 0 34 34\" version=\"1.1\">\n                    <title>\u8FB9\u6846\u6837\u5F0F</title>\n                    <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-628.000000, -138.000000)\">\n                            <g id=\"\u7F16\u7EC4-2\" transform=\"translate(253.000000, 135.000000)\">\n                                <g id=\"\u8FB9\u6846\u989C\u8272\" transform=\"translate(375.000000, 3.000000)\">\n                                    <rect id=\"\u900F\u660E\u5E95\u56FE\" fill-opacity=\"0\" fill=\"#FFFFFF\" x=\"0\" y=\"0\" width=\"34\" height=\"34\"/>\n                                    <circle id=\"\u692D\u5706\u5F62\" stroke=\"" + color + "\" stroke-width=\"" + width + "\" cx=\"17\" cy=\"17\" r=\"8\" stroke-dasharray=\"" + dash + "\"/>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </svg>";
      return HTML;
    },
    stopPropagation: true,
    closeChildDom: function closeChildDom(self, pen, dom) {
      // dom.style.height = 'max-height'
      // dom.style.visibility = 'hidden'
      // dom.style.overflow = 'hidden'
      // dom.style.transition = '.3s'
      // dom.style.height = 0'
      dom.style.transformOrigin = 'top';
      dom.offsetHeight;
      dom.style.transition = 'all .3s';
      dom.style.transform = 'scaleY(0)';
      return true;
    },
    openChildDom: function openChildDom(self, pen, dom) {
      dom.style.transform = 'scaleY(1)';
      return true;
    },
    setChildrenDom: function setChildrenDom(self, pen) {
      var dom = createDom('div', {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: '50px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        width: '140px',
        boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
      });
      dom.attachShadow({
        mode: 'open'
      });
      var gap = createDom('div', {
        width: '100%',
        height: '20px',
        backgroundColor: 'red',
        position: 'absolute',
        top: '-10px',
        opacity: 0
      });
      dom.shadowRoot.appendChild(gap);
      /**
       * @description 通过此函数你可以自由地自定义工具栏的样式 采用影子dom 使得style相互隔离
       * @param self 此配置项自身
       * @param dom 插件提供的包含容器 即你创建的dom的外部div对象
       * @return string dom字符串
       * */
      var str = template(self, {
        template: "\n          <div class=\"container\">\n              <div class=\"item\">\n                <div class=\"title\">\u8FB9\u6846\u7C97\u7EC6</div>\n                <div class=\"main\">\n                  <input type=\"range\" min=\"1\" max=\"10\" style=\"width: 81px\" @change=\"sliderChange(this.value)\" id=\"width\" value=\"" + self.width + "\">  <span id=\"t\" style=\"display:block;vertical-align: top;margin-left: 10px;width: 41px;height: 20px;background-color:#f7f7f9;text-align: center;line-height: 20px\">" + self.width + "</span>\n                </div>\n              </div>\n                  <div class=\"item\">\n                <div class=\"title\">\u8FB9\u6846\u6837\u5F0F</div>\n                <div class=\"main_style \">\n                  <div class=\"style_item " + (self.dash === '0,0' ? 'style_active' : '') + "\" data-style=\"\u76F4\u7EBF\" @click=\"setOutLineStyle(true)\">\n                     <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"50px\" height=\"2px\" viewBox=\"0 0 78 2\" version=\"1.1\">\n                        <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\">\n                            <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-402.000000, -306.000000)\" stroke=\"#000000\" stroke-width=\"2\">\n                                <line x1=\"403\" y1=\"307\" x2=\"479\" y2=\"307\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-9\"/>\n                            </g>\n                        </g>\n                    </svg>\n                  </div>\n                  <div class=\"style_item " + (self.dash !== '0,0' ? 'style_active' : '') + "\" data-style=\"\u865A\u7EBF\" @click=\"setOutLineStyle(false)\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"50px\" height=\"2px\" viewBox=\"0 0 78 2\" version=\"1.1\">\n                        <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-dasharray=\"4\" stroke-linecap=\"round\">\n                            <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-402.000000, -306.000000)\" stroke=\"#000000\" stroke-width=\"2\">\n                                <line x1=\"403\" y1=\"307\" x2=\"479\" y2=\"307\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-9\"/>\n                            </g>\n                        </g>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"title\">\u8FB9\u6846\u989C\u8272                     \n                <label for=\"color\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"18px\" height=\"17px\" viewBox=\"0 0 18 17\" version=\"1.1\">\n    <title>\u5438\u7BA1</title>\n    <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-279.000000, -349.000000)\" stroke=\"#818187\">\n            <g id=\"\u7F16\u7EC4-6\u5907\u4EFD-2\" transform=\"translate(208.000000, 188.000000)\">\n                <g id=\"\u5438\u7BA1\" transform=\"translate(72.062370, 161.000000)\">\n                    <g id=\"\u7F16\u7EC4-8\" transform=\"translate(7.937630, 8.095196) rotate(-315.000000) translate(-7.937630, -8.095196) translate(4.036351, 0.770971)\">\n                        <path d=\"M4.96179031,5.89679753 L4.96179031,10.0040546 C4.96179031,10.4930202 4.63081262,10.9045357 4.18105852,11.0275164 L4.18153455,13.8681947 L3.62149907,11.0275164 C3.17174496,10.9045357 2.84076728,10.4930202 2.84076728,10.0040546 L2.84076728,5.89679753 L4.96179031,5.89679753 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"/>\n                        <path d=\"M3.90127879,0.5 C4.40959264,0.5 4.86978446,0.706034895 5.20289782,1.03914825 C5.53601117,1.37226161 5.74204607,1.83245343 5.74204607,2.34076728 L5.74204607,5.66776861 L2.06051152,5.66776861 L2.06051152,2.34076728 C2.06051152,1.83245343 2.26654641,1.37226161 2.59965977,1.03914825 C2.93277313,0.706034895 3.39296495,0.5 3.90127879,0.5 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"/>\n                        <line x1=\"0.390127879\" y1=\"5.78228307\" x2=\"7.41242971\" y2=\"5.78228307\" id=\"\u76F4\u7EBF-13\" stroke-linecap=\"round\"/>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>                  \n                  </div>\n                  <input id=\"color\" style=\"display: none\" type=\"color\"  @change=\"setColor(event,this.value)\" value=\"" + self.color + "\">\n                </label>                \n                     <div class=\"main\">\n\n                     <div class=\"colorList\" onclick=\"setColor(event)\">\n                     " + self.colorList.map(function (i, index) {
          return "<span class=\"color_item " + (self.color === i ? 'active' : '') + "\" style=\"background-color: " + i + ";border: 3px solid " + i + "\" data-color=\"" + i + "\"></span>";
        }).join('') + "\n                     </div>\n                </div>\n              </div>\n          </div>",
        scripts: {
          // 能在这里面获取到dom
          mounted: function mounted() {// 生命周期函数
          },
          value: 10,
          setOutLineStyle: function setOutLineStyle(style) {
            var res = style ? [0, 0] : [5, 5];
            meta2d.setValue({
              id: pen.id,
              lineDash: res
            }, {
              render: true
            });
            // toolbox.renderFuncList()
            self.dash = res.join(',');
            self.update('title');
            self.update('child', true);
            self.close();
          },
          sliderChange: function sliderChange(value) {
            self.width = value;
            // toolbox.renderFuncList()
            meta2d.setValue({
              id: pen.id,
              lineWidth: value
            }, {
              render: true
            });
            self.update('title');
            self.update('child', true);
          },
          setColor: function setColor(e, value) {
            var color = '';
            if (!value) {
              var t = e.target;
              var list = dom.shadowRoot.querySelector('.colorList');
              if (t === list) return;
              color = t.dataset.color;
            } else {
              color = value;
            }
            if (color === self.color) {
              color = undefined;
            } else {
              meta2d.setValue({
                id: pen.id,
                color: color
              }, {
                render: false
              });
            }
            pen.mind.color = color;
            mindBoxPlugin.calcChildrenColor(meta2d.store.pens[pen.mind.preNodeId] || pen);
            mindBoxPlugin.resetLinesColor(pen);
            mindBoxPlugin.render();
            self.color = color || pen.calculative.color;
            self.updateAll();
          }
        },
        style: "<style>\n        .container {\n            overflow: hidden;\n        }\n        .main {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-around;\n            align-items: center;\n        }\n        .style_active{\n            width: 30%;\n            background-color:#fff;\n            height: 20px;\n            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\n            border-radius: 3px;\n        }\n        .active{\n            border: 3px solid deepskyblue !important;\n        }\n        .colorList {\n            display: flex;\n            justify-content: space-between;\n            align-content: space-between;\n            flex-wrap: wrap;\n        }       \n        .main_style {\n            display: flex;\n            width: 100%;\n            height: 30px;\n            justify-content: space-around;\n            align-items: center;\n            border-radius: 3px;\n            background-color:#f7f7f9;\n        }\n        .style_item {\n            width:47%;\n            height: 22px;\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n            justify-content: center;\n        }\n        .color_item {\n            width: 20px;\n            height: 20px;\n            border: 3px solid;\n            margin: 5px 5px 5px 0;\n            border-radius: 2px;\n        }\n        .color_item:hover {\n            border: 3px solid rgba(128,128,128,0.5) !important;\n        }\n       .item {\n          display:flex;\n          justify-content: flex-start;\n          align-items: flex-start;\n          flex-direction: column;\n          margin-bottom: 14px;\n       }\n       .title {\n          width: 100%;\n          height: 17px;\n          font-size: 16px;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          font-family: PingFang SC, PingFang SC-Regular;\n          font-weight: 400;\n          text-align: left;\n          color: #7d7878;\n          line-height: 17px;\n          margin-bottom: 14px;\n        }\n    </style> \n        "
      }, 'dom');
      dom.shadowRoot.appendChild(str);
      return dom;
    } // children: [
    //   {
    //     name:'直线',
    //     event: 'click',
    //     func(self, pen, dom, father) {
    //       meta2d.setValue({id:pen.id,lineDash:[0,0]})
    //       father.dash = '0,0';
    //       toolbox.renderFuncList()
    //     }
    //   },
    //   {
    //     name:'虚线',
    //     event: 'click',
    //     func(self, pen, dom, father) {
    //       meta2d.setValue({id:pen.id,lineDash:[5,5]})
    //       father.dash = '5,5';
    //       toolbox.renderFuncList()
    //     }
    //   }
    // ]
  }, {
    key: 'lineStyle',
    name: '线条样式',
    color: '#4D4DFF',
    lineStyle: 'mind',
    width: 3,
    init: function init(self, pen) {
      self.color = pen.mind.lineColor || pen.calculative.color || '#000000';
      self.lineStyle = pen.mind.lineStyle || meta2d.findOne(pen.mind.rootId).mind.lineStyle;
      self.width = meta2d.findOne(pen.mind.rootId).mind.lineWidth;
    },
    setDom: function setDom(self, pen) {
      var html = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34px\" height=\"34px\" viewBox=\"0 0 34 34\" version=\"1.1\">\n        <title>\u8FDE\u7EBF\u6837\u5F0F</title>\n        <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-674.000000, -138.000000)\">\n            <g id=\"\u7F16\u7EC4-2\" transform=\"translate(253.000000, 135.000000)\">\n              <g id=\"\u8FDE\u7EBF\u989C\u8272\" transform=\"translate(421.000000, 3.000000)\">\n                <rect id=\"\u900F\u660E\u5E95\u56FE\" fill-opacity=\"0\" fill=\"#FFFFFF\" x=\"0\" y=\"0\" width=\"34\" height=\"34\"/>\n                <line x1=\"7.5\" y1=\"17.5\" x2=\"27.5\" y2=\"17.5\" id=\"\u76F4\u7EBF-9\" stroke=\"" + (self.color || pen.color) + "\" stroke-dasharray=\"" + self.dash + "\" stroke-width=\"" + self.width + "\" stroke-linecap=\"round\"/>\n              </g>\n            </g>\n          </g>\n        </g>\n      </svg>";
      return html;
    },
    /**
     * @description 设置下拉框的样式，你也可以使用webComponent，或者将vue组件转换为webComponent
     * @param self 本配置对象
     * @param pen 返回当前pen对象
     * @param dom 返回此容器dom
     * */
    colorList: ['#f13097', '#5757F3', '#fa7878', '#8C8CFF', '#19f1cc', '#6ffd97', '#efe864', '#ff931a'],
    closeShadowDom: true,
    closeEventOnChild: false,
    openEventOnTitle: true,
    openChildDomEvent: 'mouseenter',
    closeChildDomEvent: 'mouseleave',
    closeChildDom: function closeChildDom(self, pen, dom) {
      // dom.style.height = 'max-height'
      // dom.style.visibility = 'hidden'
      // dom.style.overflow = 'hidden'
      // dom.style.transition = '.3s'
      // dom.style.height = 0'
      dom.style.transformOrigin = 'top';
      dom.offsetHeight;
      dom.style.transition = 'all .3s';
      dom.style.transform = 'scaleY(0)';
      return true;
    },
    openChildDom: function openChildDom(self, pen, dom) {
      dom.style.transform = 'scaleY(1)';
      return true;
    },
    setChildrenDom: function setChildrenDom(self, pen) {
      var dom = createDom('div', {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: '50px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        width: '140px',
        boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
      });
      dom.attachShadow({
        mode: 'open'
      });
      var str = template(self, {
        template: "\n          <div class=\"container\">\n                <div class=\"item\">\n                <div class=\"title\">\u7EBF\u6761\u7C97\u7EC6</div>\n                <div class=\"main\">\n                  <input type=\"range\" min=\"1\" max=\"10\" style=\"width: 81px\" onchange=\"sliderChange(this.value)\" id=\"width\" value=\"" + self.width + "\">  <span id=\"t\" style=\"display:block;vertical-align: top;margin-left: 10px;width: 41px;height: 20px;background-color:#f7f7f9;text-align: center;line-height: 20px\">" + self.width + "</span>\n                </div>\n              </div>\n            <div class=\"item\">\n                <div class=\"title\">\u8FDE\u7EBF\u6837\u5F0F</div>\n                <div class=\"main_style \">\n                  <div class=\"style_item " + (self.lineStyle === 'mind' ? 'style_active' : '') + "\" data-style=\"\u66F2\u7EBF\" onclick=\"setLineStyle(true)\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"50px\" height=\"20px\">\n                  <g fill=\"none\" stroke=\"black\" stroke-width=\"1\">\n                    <path d=\"M0 9 a100,50 0 0,1 85,0\"></path>\n                  </g>\n                </svg>\n                  </div>\n                  <div class=\"style_item " + (self.lineStyle === 'polyline' ? 'style_active' : '') + "\" data-style=\"\u6298\u7EBF\" onclick=\"setLineStyle(false)\">\n                     <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"50px\" height=\"20px\">\n                    <g fill=\"none\" stroke=\"black\" stroke-width=\"1\">\n                      <path d=\"M0 4 l25 0 l0 12 l40 0\"></path>\n                    </g>\n                  </svg>\n                  </div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"title\">\u8FDE\u7EBF\u989C\u8272                     \n                <label for=\"color\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"18px\" height=\"17px\" viewBox=\"0 0 18 17\" version=\"1.1\">\n    <title>\u5438\u7BA1</title>\n    <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-279.000000, -349.000000)\" stroke=\"#818187\">\n            <g id=\"\u7F16\u7EC4-6\u5907\u4EFD-2\" transform=\"translate(208.000000, 188.000000)\">\n                <g id=\"\u5438\u7BA1\" transform=\"translate(72.062370, 161.000000)\">\n                    <g id=\"\u7F16\u7EC4-8\" transform=\"translate(7.937630, 8.095196) rotate(-315.000000) translate(-7.937630, -8.095196) translate(4.036351, 0.770971)\">\n                        <path d=\"M4.96179031,5.89679753 L4.96179031,10.0040546 C4.96179031,10.4930202 4.63081262,10.9045357 4.18105852,11.0275164 L4.18153455,13.8681947 L3.62149907,11.0275164 C3.17174496,10.9045357 2.84076728,10.4930202 2.84076728,10.0040546 L2.84076728,5.89679753 L4.96179031,5.89679753 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"/>\n                        <path d=\"M3.90127879,0.5 C4.40959264,0.5 4.86978446,0.706034895 5.20289782,1.03914825 C5.53601117,1.37226161 5.74204607,1.83245343 5.74204607,2.34076728 L5.74204607,5.66776861 L2.06051152,5.66776861 L2.06051152,2.34076728 C2.06051152,1.83245343 2.26654641,1.37226161 2.59965977,1.03914825 C2.93277313,0.706034895 3.39296495,0.5 3.90127879,0.5 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"/>\n                        <line x1=\"0.390127879\" y1=\"5.78228307\" x2=\"7.41242971\" y2=\"5.78228307\" id=\"\u76F4\u7EBF-13\" stroke-linecap=\"round\"/>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>                  \n                  </div>\n                  <input id=\"color\" style=\"display: none\" type=\"color\" onchange=\"setColor(event,this.value)\" value=\"" + self.color + "\">\n                </label>                \n                     <div class=\"main\">\n\n                     <div class=\"colorList\" onclick=\"setColor(event)\">\n                     " + self.colorList.map(function (i, index) {
          return "<span class=\"color_item " + (self.color === i ? 'active' : '') + "\" style=\"background-color: " + i + ";border: 3px solid " + i + "\" data-color=\"" + i + "\"></span>";
        }).join('') + "\n                     </div>\n                </div>\n              </div>\n          </div>",
        scripts: {
          sliderChange: function sliderChange(value) {
            dom.shadowRoot.querySelector('#t').innerHTML = value;
            self.width = value;
            // toolbox.renderFuncList()
            // pen.connectedLines?.forEach(i=>{
            //   meta2d.setValue({
            //     id:i.lineId,
            //     lineWidth: value
            //   })
            // })
            var root = meta2d.findOne(pen.mind.rootId);
            root.mind.lineWidth = value;
            mindBoxPlugin.resetLinesStyle(root);
            self.update('title');
          },
          setLineStyle: function setLineStyle(value) {
            var res = value ? 'mind' : 'polyline';
            // toolbox.renderFuncList()

            var root = window.meta2d.findOne(pen.mind.rootId);
            root.mind.lineStyle = res;
            mindBoxPlugin.resetLinesStyle(root);
            self.lineStyle = res;
            // mindBoxPlugin.update(root);
            self.updateAll();
          },
          setColor: function setColor(e, value) {
            var _pen$connectedLines;
            var color = '';
            if (!value) {
              var t = e.target;
              var list = dom.shadowRoot.querySelector('.colorList');
              if (t === list) return;
              color = t.dataset.color;
            } else {
              color = value;
            }
            if (color === self.color) {
              color = undefined;
            }
            (_pen$connectedLines = pen.connectedLines) == null || _pen$connectedLines.forEach(function (i) {
              meta2d.setValue({
                id: pen.id,
                'mind.lineColor': color
              }, {
                render: true
              });
            });
            self.color = color;
            mindBoxPlugin.resetLinesColor(pen, true);
            self.updateAll();
          }
        },
        style: "<style>\n        .container {\n            overflow: hidden;\n        }\n        .main {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-around;\n            align-items: center;\n        }\n        .style_active{\n            width: 30%;\n            background-color:#fff;\n            height: 20px;\n            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\n            border-radius: 3px;\n        }\n        .active{\n            border: 3px solid deepskyblue !important;\n        }\n        .colorList {\n            display: flex;\n            justify-content: space-between;\n            align-content: space-between;\n            flex-wrap: wrap;\n        }       \n        .main_style {\n            display: flex;\n            width: 100%;\n            height: 30px;\n            justify-content: space-around;\n            align-items: center;\n            border-radius: 3px;\n            background-color:#f7f7f9;\n        }\n        .style_item {\n            width:47%;\n            height: 22px;\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n            justify-content: center;\n        }\n        .color_item {\n            width: 20px;\n            height: 20px;\n            border: 3px solid;\n            margin: 5px 5px 5px 0;\n            border-radius: 2px;\n        }\n        .color_item:hover {\n            border: 3px solid rgba(128,128,128,0.5) !important;\n        }\n       .item {\n          display:flex;\n          justify-content: flex-start;\n          align-items: flex-start;\n          flex-direction: column;\n          margin-bottom: 14px;\n       }\n       .title {\n          width: 100%;\n          height: 17px;\n          font-size: 16px;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          font-family: PingFang SC, PingFang SC-Regular;\n          font-weight: 400;\n          text-align: left;\n          color: #7d7878;\n          line-height: 17px;\n          margin-bottom: 14px;\n        }\n    </style> \n        "
      });
      var gap = createDom('div', {
        width: '100%',
        height: '20px',
        backgroundColor: 'red',
        position: 'absolute',
        top: '-10px',
        opacity: 0
      });
      dom.shadowRoot.innerHTML = str;
      dom.shadowRoot.appendChild(gap);
      return dom;
    },
    event: 'mouseenter',
    func: function func(self, pen, dom) {
      self.open = true;
    }
  }, {
    key: 'layoutDirection',
    name: '布局方式',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1698740367149" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="13181" width="34" height="20"><path d="M914.752 292.608c26.112 0 47.232 21.12 47.232 47.296v577.088c0 26.112-21.12 47.232-47.232 47.232H110.4a47.232 47.232 0 0 1-47.296-47.232V339.904c0-26.112 21.12-47.296 47.296-47.296h804.352z m-6.72 54.016H117.12v563.648h790.848V346.624z" p-id="13182"/><path d="M957.44 484.992v64H62.08v-64z" p-id="13183"/><path d="M957.44 484.992v64H62.08v-64zM409.536 735.36l63.104-0.128 0.896 198.528-63.104 0.192zM561.472 600.32l63.168-0.064 0.832 333.568-63.232 0.128zM578.368 62.016c8.704 0 15.744 7.04 15.744 15.744v268.864H430.976V77.76c0-8.704 7.04-15.744 15.744-15.744h131.648z m-38.272 54.016h-55.04v176.64h55.04v-176.64z" p-id="13184"/></svg>',
    direction: 'right',
    childrenGap: 20,
    levelGap: 0,
    init: function init(self, pen) {
      self.direction = pen.mind.direction;
      self.childrenGap = mindBoxPlugin.childrenGap;
      self.levelGap = mindBoxPlugin.levelGap;
      self.animate = mindBoxPlugin.animate;
    },
    activeDirection: function activeDirection(self, pen, dom) {
      var rootDom = dom.querySelector('.main');
      var divs = rootDom.querySelectorAll('div');
      var index = ['right', 'left', 'top', 'bottom', 'butterfly', 'sandglass'].findIndex(function (i) {
        return i === self.direction;
      });
      divs.forEach(function (i) {
        i.querySelectorAll('.toolbox_direction_svg').forEach(function (i) {
          i.setAttribute('fill', '#DDDDE1');
        });
        i.querySelectorAll('.toolbox_direction_svg_base').forEach(function (i) {
          i.setAttribute('fill', '#F8F8FC');
        });
        i.querySelectorAll('.toolbox_direction_svg_line').forEach(function (i) {
          i.setAttribute('stroke', '#818187');
        });
      });
      divs[index].querySelector('.toolbox_direction_svg_base').setAttribute('fill', '#CDCDFC');
      divs[index].querySelector('.toolbox_direction_svg_line').setAttribute('stroke', '#7878FF');
      divs[index].querySelectorAll('.toolbox_direction_svg').forEach(function (i) {
        return i.setAttribute('fill', '#7878FF');
      });
    },
    onOpenChildDom: function onOpenChildDom(self, pen, dom) {
      self.activeDirection(self, pen, dom);
      self.childrenGap = mindBoxPlugin.childrenGap;
      self.levelGap = mindBoxPlugin.levelGap;
    },
    openChildDomEvent: 'mouseenter',
    closeEventOnChild: false,
    // 是否在childrenDom中触发事件
    closeChildDomEvent: 'none',
    stopPropagation: true,
    animate: false,
    closeChildDom: function closeChildDom(self, pen, dom) {
      // dom.style.height = 'max-height'
      // dom.style.visibility = 'hidden'
      // dom.style.overflow = 'hidden'
      // dom.style.transition = '.3s'
      // dom.style.height = 0'
      dom.style.transformOrigin = 'top';
      dom.offsetHeight;
      dom.style.transition = 'all .3s';
      dom.style.transform = 'scaleY(0)';
      return true;
    },
    openChildDom: function openChildDom(self, pen, dom) {
      dom.style.transform = 'scaleY(1)';
      return true;
    },
    status: '已开启',
    // 设置下拉列表的样式和子元素布局
    setChildrenDom: function setChildrenDom(self, pen) {
      var dom = createDom('div', {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: '50px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        zIndex: 999,
        width: '170px',
        boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
      }, '', undefined, 'root');
      var str = template(self, {
        template: "\n          <div class=\"container\">\n              <div class=\"item\">\n                <div class=\"title\">\u5E03\u5C40\u65B9\u5411</div>\n                <div class=\"main\" >\n                    <div onclick=\"setDirection('right')\" >\n                        <svg class=\"main_item\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"76px\" height=\"50px\" viewBox=\"0 0 76 50\" version=\"1.1\">\n                          <title>\u5411\u53F3\u5E03\u5C40</title>\n                         <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                              <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-633.000000, -684.000000)\">\n                                <g id=\"\u7F16\u7EC4-6\u5907\u4EFD\" transform=\"translate(525.000000, 423.000000)\">\n                                     <g id=\"\u5E03\u5C40\u5907\u4EFD-9\" transform=\"translate(108.000000, 261.000000)\">\n                                          <rect class=\"toolbox_direction_svg_base\" id=\"\u5077\u6478\u5E95\u56FE\" fill=\"#F8F8FC\" x=\"0\" y=\"0\" width=\"76\" height=\"50\" rx=\"2\"/>\n                                          <g id=\"\u7F16\u7EC4-3\" transform=\"translate(20.000000, 7.000000)\">\n                                              <line class=\"toolbox_direction_svg\" x1=\"13.5\" y1=\"18.5\" x2=\"22.969697\" y2=\"18.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-2\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                              <rect class=\"toolbox_direction_svg_line\" id=\"\u77E9\u5F62\" stroke=\"#818187\" x=\"0.5\" y=\"15.5\" width=\"13\" height=\"5\" rx=\"2\"/>\n                                              <path class=\"toolbox_direction_svg_line\" d=\"M28,35 C22.4771525,35 18,27.836556 18,19 C18,10.163444 22.4771525,3 28,3\" id=\"\u8DEF\u5F84\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-11\" fill=\"#DDDDE1\" x=\"25\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-12\" fill=\"#DDDDE1\" x=\"25\" y=\"16\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-13\" fill=\"#DDDDE1\" x=\"25\" y=\"32\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                          </g>\n                                      </g>\n                                 </g>\n                              </g>\n                          </g>\n                        </svg>\n                    </div>\n                    \n                    <div onclick=\"setDirection('left')\"  >                    \n                      <svg class=\"main_item\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"76px\" height=\"50px\" viewBox=\"0 0 76 50\" version=\"1.1\">\n                          <title>\u5411\u5DE6\u5E03\u5C40</title>\n                          <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                              <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-541.000000, -684.000000)\">\n                                  <g id=\"\u7F16\u7EC4-6\u5907\u4EFD\" transform=\"translate(525.000000, 423.000000)\">\n                                      <g id=\"\u5E03\u5C40\u5907\u4EFD-8\" transform=\"translate(16.000000, 261.000000)\">\n                                          <rect class=\"toolbox_direction_svg_base\" id=\"\u900F\u660E\u5E95\u56FE\" fill=\"#F8F8FC\" x=\"0\" y=\"0\" width=\"76\" height=\"50\" rx=\"2\"/>\n                                          <g id=\"\u7F16\u7EC4-3\" transform=\"translate(37.500000, 25.500000) scale(-1, 1) translate(-37.500000, -25.500000) translate(20.000000, 7.000000)\">\n                                             <line class=\"toolbox_direction_svg\" x1=\"13.5\" y1=\"18.5\" x2=\"22.969697\" y2=\"18.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-2\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                              <rect class=\"toolbox_direction_svg_line\" id=\"\u77E9\u5F62\" stroke=\"#818187\" x=\"0.5\" y=\"15.5\" width=\"13\" height=\"5\" rx=\"2\"/>\n                                              <path class=\"toolbox_direction_svg_line\" d=\"M28,35 C22.4771525,35 18,27.836556 18,19 C18,10.163444 22.4771525,3 28,3\" id=\"\u8DEF\u5F84\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-11\" fill=\"#DDDDE1\" x=\"25\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-12\" fill=\"#DDDDE1\" x=\"25\" y=\"16\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-13\" fill=\"#DDDDE1\" x=\"25\" y=\"32\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                          </g>\n                                      </g>\n                                  </g>+\n                              </g>\n                          </g>\n                      </svg>                           \n                    </div>\n                    \n                    <div onclick=\"setDirection('top')\" >\n                      <svg class=\"main_item\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"76px\" height=\"50px\" viewBox=\"0 0 76 50\" version=\"1.1\">\n                        <title>\u5411\u4E0A\u5E03\u5C40</title>\n                        <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                            <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-633.000000, -616.000000)\">\n                                <g id=\"\u7F16\u7EC4-6\u5907\u4EFD\" transform=\"translate(525.000000, 423.000000)\">\n                                    <g id=\"\u5E03\u5C40\u5907\u4EFD-7\" transform=\"translate(108.000000, 193.000000)\">\n                                        <rect class=\"toolbox_direction_svg_base\" id=\"\u900F\u660E\u5E95\u56FE\" fill=\"#F8F8FC\" x=\"0\" y=\"0\" width=\"76\" height=\"50\" rx=\"2\"/>\n                                        <g id=\"\u7F16\u7EC4-3\" transform=\"translate(38.000000, 25.250000) scale(1, -1) rotate(-270.000000) translate(-38.000000, -25.250000) translate(25.750000, 0.750000)\">\n                                            <line class=\"toolbox_direction_svg\" x1=\"6.06363636\" y1=\"25.5\" x2=\"15.5333333\" y2=\"25.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-2\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                            <rect class=\"toolbox_direction_svg_line\" id=\"\u77E9\u5F62\" stroke=\"#818187\" transform=\"translate(3.000000, 25.500000) rotate(-90.000000) translate(-3.000000, -25.500000) \" x=\"-3.5\" y=\"23\" width=\"13\" height=\"5\" rx=\"2\"/>\n                                            <path class=\"toolbox_direction_svg_line\" d=\"M17.8386311,43 C15.0303966,40.513797 13,33.3135934 13,24.8187892 C13,16.7047472 14.8524591,9.77185117 17.465812,7\" id=\"\u8DEF\u5F84\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-11\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 44.000000) rotate(-90.000000) translate(-22.000000, -44.000000) \" x=\"17\" y=\"41.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-12\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) \" x=\"17\" y=\"22.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-13\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 5.000000) rotate(-90.000000) translate(-22.000000, -5.000000) \" x=\"17\" y=\"2.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                      </svg>\n                    </div>\n                    \n                    <div onclick=\"setDirection('bottom')\">                  \n                      <svg class=\"main_item\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"76px\" height=\"50px\" viewBox=\"0 0 76 50\" version=\"1.1\">\n                        <title>\u5411\u4E0B\u5E03\u5C40</title>\n                        <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                           <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-725.000000, -480.000000)\">\n                                <g id=\"\u7F16\u7EC4-6\u5907\u4EFD\" transform=\"translate(525.000000, 423.000000)\">\n                                    <g id=\"\u5E03\u5C40\u5907\u4EFD-2\" transform=\"translate(200.000000, 57.000000)\">\n                                        <rect class=\"toolbox_direction_svg_base\" id=\"\u900F\u660E\u5E95\u56FE\" fill=\"#F8F8FC\" x=\"0\" y=\"0\" width=\"76\" height=\"50\" rx=\"2\"/>\n                                        <g id=\"\u7F16\u7EC4-3\" transform=\"translate(38.000000, 25.250000) rotate(-270.000000) translate(-38.000000, -25.250000) translate(25.750000, 0.750000)\">\n                                            <line x1=\"6.06363636\" y1=\"25.5\" x2=\"15.5333333\" y2=\"25.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-2\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                            <rect class=\"toolbox_direction_svg_line\" id=\"\u77E9\u5F62\" stroke=\"#818187\" transform=\"translate(3.000000, 25.500000) rotate(-90.000000) translate(-3.000000, -25.500000) \" x=\"-3.5\" y=\"23\" width=\"13\" height=\"5\" rx=\"2\"/>\n                                            <path class=\"toolbox_direction_svg_line\" d=\"M17.8386311,43 C15.0303966,40.513797 13,33.3135934 13,24.8187892 C13,16.7047472 14.8524591,9.77185117 17.465812,7\" id=\"\u8DEF\u5F84\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-11\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 44.000000) rotate(-90.000000) translate(-22.000000, -44.000000) \" x=\"17\" y=\"41.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-12\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) \" x=\"17\" y=\"22.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-13\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 5.000000) rotate(-90.000000) translate(-22.000000, -5.000000) \" x=\"17\" y=\"2.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                        </g>\n                                   </g>\n                                </g>\n                            </g>\n                        </g>\n                      </svg>\n                    </div>\n                   \n                    <div onclick=\"setDirection('butterfly')\">\n                    <svg class=\"main_item\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"76px\" height=\"50px\" viewBox=\"0 0 76 50\" version=\"1.1\">\n                      <title>\u8776\u5F62\u5E03\u5C40</title>\n                      <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                          <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-541.000000, -480.000000)\">\n                              <g id=\"\u7F16\u7EC4-6\u5907\u4EFD\" transform=\"translate(525.000000, 423.000000)\">\n                                  <g id=\"\u5E03\u5C40\" transform=\"translate(16.000000, 57.000000)\">\n                                      <rect class=\"toolbox_direction_svg_base\" id=\"\u900F\u660E\u5E95\u56FE\" fill=\"#F8F8FC\" x=\"0.5\" y=\"0.5\" width=\"76\" height=\"50\" rx=\"2\"/>\n                                      <g id=\"\u7F16\u7EC4-3\" transform=\"translate(10.000000, 7.000000)\">\n                                          <line x1=\"12.5\" y1=\"18.5\" x2=\"21.969697\" y2=\"18.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                          <line x1=\"35.5\" y1=\"18.5\" x2=\"44.969697\" y2=\"18.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-2\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                          <rect class=\"toolbox_direction_svg_line\" id=\"\u77E9\u5F62\" stroke=\"#818187\" x=\"22.5\" y=\"15.5\" width=\"13\" height=\"5\" rx=\"2\"/>\n                                          <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-8\" fill=\"#DDDDE1\" x=\"0\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                          <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-11\" fill=\"#DDDDE1\" x=\"47\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                          <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-9\" fill=\"#DDDDE1\" x=\"0\" y=\"16\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                          <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-12\" fill=\"#DDDDE1\" x=\"47\" y=\"16\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                          <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-10\" fill=\"#DDDDE1\" x=\"0\" y=\"32\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                          <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-13\" fill=\"#DDDDE1\" x=\"47\" y=\"32\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                          <path class=\"toolbox_direction_svg_line\" d=\"M11,3 C18.5461417,3 24.8721456,8.22403061 26.5588129,15.2528929 M26.9076362,20.7292725 C26.0454005,28.7525241 19.2522884,35 11,35\" id=\"\u5F62\u72B6\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                          <path class=\"toolbox_direction_svg_line\" d=\"M30,3 C37.6543889,3 44.0533839,8.37497993 45.6285232,15.5564778 M45.9076362,20.7292725 C45.0454005,28.7525241 38.2522884,35 30,35\" id=\"\u5F62\u72B6\" stroke=\"#818187\" transform=\"translate(37.953818, 19.000000) scale(-1, 1) translate(-37.953818, -19.000000) \"/>\n                                      </g>\n                                  </g>\n                              </g>\n                          </g>\n                      </g>\n                    </svg>\n                    </div>\n                    \n                    <div onclick=\"setDirection('sandglass')\">\n                    <svg class=\"main_item\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"76px\" height=\"50px\" viewBox=\"0 0 76 50\" version=\"1.1\">\n                    <title>\u6C99\u6F0F\u5E03\u5C40</title>\n                    <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-725.000000, -616.000000)\">\n                            <g id=\"\u7F16\u7EC4-6\u5907\u4EFD\" transform=\"translate(525.000000, 423.000000)\">\n                                <g id=\"\u7F16\u7EC4-10\" transform=\"translate(200.000000, 193.000000)\">\n                                    <rect class=\"toolbox_direction_svg_base\" id=\"\u900F\u660E\u5E95\u56FE\" fill=\"#F8F8FC\" x=\"0\" y=\"0\" width=\"76\" height=\"50\" rx=\"2\"/>\n                                    <g id=\"\u7F16\u7EC4-3\" transform=\"translate(17.000000, 6.000000)\">\n                                        <g id=\"\u7F16\u7EC4-9\" transform=\"translate(0.000000, 0.000000)\">\n                                            <line x1=\"21.5\" y1=\"7.5\" x2=\"21.5\" y2=\"16.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-8\" fill=\"#DDDDE1\" x=\"0\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-9\" fill=\"#DDDDE1\" x=\"16\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-10\" fill=\"#DDDDE1\" x=\"32\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <path d=\"M15.5,-3.5 C20.402536,-3.5 24.6208608,0.196011148 26.5,5.5 M26.5,19.5 C24.5749169,24.8145404 20.3733294,28.5 15.5,28.5\" id=\"\u5F62\u72B6\" stroke=\"#818187\" stroke-linecap=\"round\" transform=\"translate(21.000000, 12.500000) rotate(-270.000000) translate(-21.000000, -12.500000) \"/>\n                                        </g>\n                                        <g id=\"\u7F16\u7EC4-9\" transform=\"translate(21.000000, 29.000000) scale(1, -1) translate(-21.000000, -29.000000) translate(0.000000, 20.000000)\">\n                                            <line x1=\"21.5\" y1=\"7.5\" x2=\"21.5\" y2=\"16.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-8\" fill=\"#DDDDE1\" x=\"0\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-9\" fill=\"#DDDDE1\" x=\"16\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-10\" fill=\"#DDDDE1\" x=\"32\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <path d=\"M15.5,-3.5 C20.402536,-3.5 24.6208608,0.196011148 26.5,5.5 M26.5,19.5 C24.5749169,24.8145404 20.3733294,28.5 15.5,28.5\" id=\"\u5F62\u72B6\" stroke=\"#818187\" stroke-linecap=\"round\" transform=\"translate(21.000000, 12.500000) rotate(-270.000000) translate(-21.000000, -12.500000) \"/>\n                                        </g>\n                                        <rect class=\"toolbox_direction_svg_line\" id=\"\u77E9\u5F62\" stroke=\"#818187\" x=\"14.5\" y=\"16.5\" width=\"13\" height=\"5\" rx=\"2\"/>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </svg>\n                    </div>\n                </div>\n              </div>\n              \n              <div class=\"item\">\n                <div class=\"title\">\u95F4\u9694\u8BBE\u7F6E</div>\n                <div class=\"main\">\n                    <div class=\"number_container\">\n                     <div class=\"number_item\" onclick=\"(e=>{e.stopPropagation()})(event)\">\n                        <div class=\"flag\">\u540C\u7EA7\u95F4\u9694</div>\n                        <div class=\"number\">                        \n                            <input type=\"number\" onchange=\"setChildGap(this.value)\" value=\"" + self.childrenGap + "\"/>\n                        </div>\n                    </div>\n                     <div class=\"number_item\" onclick=\"(e=>{e.stopPropagation()})(event)\">\n                        <div class=\"flag\">\u5B50\u7EA7\u95F4\u9694</div>\n                        <div class=\"number\">                        \n                            <input type=\"number\" onchange=\"setLevelGap(this.value)\" value=\"" + self.levelGap + "\"/>\n                        </div>\n                    </div>\n                     <div class=\"number_item\" onclick=\"(e=>{e.stopPropagation()})(event)\">\n                        <div class=\"flag\">\u662F\u5426\u5F00\u542F\u52A8\u753B</div>\n                        <div class=\"button\">                        \n                            <input type=\"button\" onclick=\"setAnimate()\" value=\"" + self.status + "\"/>\n                        </div>\n                    </div>\n                  </div>\n                   \n                </div>\n              </div>\n          </div>",
        scripts: {
          // 能在这里面获取到dom
          mounted: function mounted() {// 生命周期函数
            // self.animate = mindBoxPlugin.animate
          },
          setAnimate: function setAnimate() {
            mindBoxPlugin.animate = !mindBoxPlugin.animate;
            self.animate = mindBoxPlugin.animate;
            self.animate ? self.status = '已开启' : self.status = '已关闭';
            self.updateAll();
          },
          setChildGap: function setChildGap(value) {
            self.childrenGap = value;
            mindBoxPlugin.childrenGap = value;
            mindBoxPlugin.update(meta2d.findOne(pen.mind.rootId));
          },
          setLevelGap: function setLevelGap(value) {
            self.levelGap = value;
            mindBoxPlugin.levelGap = value;
            mindBoxPlugin.update(meta2d.findOne(pen.mind.rootId));
          },
          setDirection: function setDirection(e) {
            mindBoxPlugin.record(pen);
            var root = window.meta2d.findOne(pen.mind.rootId);
            mindBoxPlugin.resetLayOut(root, e, true);
            mindBoxPlugin.update(root);
            self.direction = e;
            self.activeDirection(self, pen, dom);
            self.close();
          }
        },
        style: "<style>\n        .container {\n            overflow: hidden;\n        }\n        .flag{\n            font-size: 14px;\n        }\n        .number{\n            height:30px;\n            display: flex;\n            border: 1px solid #f7f7f9;\n            border-radius: 5px;\n            justify-content: space-around;\n            align-items: center;\n            background-color: #f7f7f9;\n        }\n        .button {\n        \n        }\n        .number_container{\n            display: flex;\n            width: 100%;\n            justify-content: space-between;\n            align-items: center;\n            flex-direction: column;\n        }\n        .number_item{\n            width: 100%;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            margin-top: 14px;\n        }\n        .number input{\n            width: 70px;\n            height: 100%;\n            outline: none;\n            background-color:#f7f7f9;\n            border: 1px solid #f7f7f9;\n            border-radius: 5px;            \n            font-size: 16px;\n            text-indent: 10px;\n        }\n        .number_control{\n            width: 20%;\n            display: flex;\n            flex-direction: column;\n            transform: translateY(-3px);\n            margin-right: 6px;\n        }\n        .number_control_item{\n            display:block;\n            flex:1;\n            font-size: 25px;\n            width: 30px;\n            height: 15px;\n        }\n        .number_control_item:hover {\n            color: #484848;\n        }\n        .main {\n            display: flex;\n            flex-direction: row;\n            width: 100%;\n            flex-wrap: wrap;\n            justify-content: space-around;\n            align-content: center;\n        }\n        .main_item{\n            margin-top: 5px;\n        }\n        .main_item:hover{\n            outline: 3px solid rgba(87,87,243,0.51);\n        }\n        .active{\n        }\n       .item {\n          display:flex;\n          justify-content: flex-start;\n          align-items: flex-start;\n          flex-direction: column;\n          margin-bottom: 14px;\n       }\n       .title {\n          width: 100%;\n          height: 17px;\n          font-size: 16px;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          font-family: PingFang SC, PingFang SC-Regular;\n          font-weight: 400;\n          text-align: left;\n          color: #7d7878;\n          line-height: 17px;\n          margin-bottom: 14px;\n        }\n    </style> \n        "
      });
      dom.innerHTML = str;
      // dom.addEventListener('click',(e)=>{
      //   dom.childNodes.forEach((i)=>{
      //     if(i.tagName !== 'style' && i.nodeType == 1){
      //       i.classList.remove('active');
      //     }
      //   });
      //   e.target.classList.add('active');
      // });
      return dom;
    }
  }, {
    key: 'addSiblingNode',
    name: '新增同级节点',
    // 监听事件名
    // event: 'click',
    /**
     * @description 事件对应的回调函数
     * @param self 返回该选项自身
     * @param pen 返回当前操作的pen对象
     * */
    // func: async (self,pen)=>{
    //   mindBoxPlugin.bottomChildren(pen,0);
    //   },
    openChildDomEvent: 'mouseenter',
    closeShadowDom: true,
    closeEventOnChild: false,
    // 是否在childrenDom中触发事件
    stopPropagation: true,
    closeChildDom: function closeChildDom(self, pen, dom) {
      // dom.style.height = 'max-height'
      // dom.style.visibility = 'hidden'
      // dom.style.overflow = 'hidden'
      // dom.style.transition = '.3s'
      // dom.style.height = 0'
      dom.style.transformOrigin = 'top';
      dom.offsetHeight;
      dom.style.transition = 'all .3s';
      dom.style.transform = 'scaleY(0)';
      return true;
    },
    openChildDom: function openChildDom(self, pen, dom) {
      dom.style.transform = 'scaleY(1)';
      return true;
    },
    children: [{
      name: '',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1698915834790" class="icon" viewBox="0 0 1365 1024" version="1.1" p-id="13181" width="50" height="30"><path d="M920.32924106 188.22098215H435.74469865c-178.43219866 0-323.49023438 145.05719866-323.49023438 323.49023436 0 178.43219866 145.05803572 323.49023438 323.49023438 323.49023439h484.58454241c178.43303572 0 323.49023438-145.05803572 323.49023437-323.49023439 0.14481026-178.28822544-144.91322544-323.49023438-323.49023437-323.49023436z m2.65345982 603.01339285H439.05440848c-145.05719866 0-281.40652902-137.4375-281.40652903-281.19475447 0-145.05803572 132.71735492-270.29966518 277.77455357-270.29966518h489.52064732c145.05803572 0 272.32700893 131.98995536 272.32700893 275.74720983 0 143.61328125-129.22935267 275.74720982-274.28738839 275.74720982z" p-id="13182"/></svg>',
      event: 'click',
      func: function func(self, pen, dom) {
        var parent = window.meta2d.findOne(pen.mind.preNodeId);
        var index = parent.mind.children.indexOf(pen.id);
        mindBoxPlugin.addNode(parent, index + 1, 'mindNode2', {
          width: 200,
          height: 50
        });
      }
    }, {
      name: '',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1698916220010" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="13326" width="50" height="30"><path d="M485.213 869.904c6.744 4.822 18.199 8.603 26.787 8.603 8.588 0 21.779-2.476 28.32-7.442l467.957-336.878c13.427-9.665 13.47-26.284 0-35.915l-469.49-335.716c-6.726-4.81-19.733-10.927-28.321-10.927-8.588 0-23.313 7.122-29.855 12.088L15.723 498.272c-13.43 9.664-13.47 26.284 0 35.915z m23.719-671.51l452.01 322.481L512 835.227 63.058 518.553z" p-id="13327"/></svg>',
      event: 'click',
      func: function func(self, pen, dom) {
        var parent = window.meta2d.findOne(pen.mind.preNodeId);
        var index = parent.mind.children.indexOf(pen.id);
        mindBoxPlugin.addNode(parent, index + 1, 'diamond', {
          width: 200,
          height: 120
        });
      }
    }, {
      name: '',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="30px" viewBox="0 0 140 53" version="1.1">\n' + '    <title>椭圆形备份 12</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-372.000000, -738.000000)" stroke="#000000" stroke-width="2">\n' + '            <ellipse id="椭圆形备份-12" cx="442" cy="764.5" rx="69" ry="25.5"/>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
      event: 'click',
      func: function func(self, pen, dom) {
        var parent = window.meta2d.findOne(pen.mind.preNodeId);
        var index = parent.mind.children.indexOf(pen.id);
        mindBoxPlugin.addNode(parent, index + 1, 'circle', {
          width: 200,
          height: 75
        });
      }
    }],
    img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5ZCM57qn6IqC54K5PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjkiIHk9IjgiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3Ij48L3JlY3Q+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5Zu65a6aIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjkwLjAwMDAwMCwgLTI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTLlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Mi4wMDAwMDAsIDI0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuWQjOe6p+iKgueCuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4LjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i6YCP5piO5bqV5Zu+IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHN0cm9rZT0iIzgxODE4NyIgeD0iOS41IiB5PSIxOC41IiB3aWR0aD0iMTUiIGhlaWdodD0iNiIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iMTciIHkxPSIxNSIgeDI9IjE3IiB5Mj0iMTgiIGlkPSLnm7Tnur8tNiIgc3Ryb2tlPSIjODE4MTg3IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSLnn6nlvaLlpIfku70tNCIgc3Ryb2tlPSIjOUM5Q0E1IiBtYXNrPSJ1cmwoI21hc2stMikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iMiIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='
  }
  // {
  //   name:'button',
  //   event: 'click',
  //   func(){
  //   },
  //   openChildDomEvent:'mouseenter',
  //   closeChildDomEvent: 'mouseleave',
  //
  //  setChildrenDom(){
  //    // return '<ele-button></ele-button'
  //    return "<my-count name='caicai' onclick='(e)=>{e.stopPropagation()}' ></my-count>"
  //  },
  // }
  ];

  var defaultFuncs = {
    funcList: funcList,
    getAllFuncDocs: function getAllFuncDocs() {
      return this.funcList.map(function (i) {
        return {
          name: i.name,
          key: i.key,
          description: i.description || '暂无描述'
        };
      });
    },
    getFunc: function getFunc() {
      var _this = this;
      var result = [];
      for (var _len = arguments.length, key = new Array(_len), _key = 0; _key < _len; _key++) {
        key[_key] = arguments[_key];
      }
      if (isArray$1(key)) {
        key.forEach(function (i) {
          var func = _this.funcList.find(function (j) {
            return j.key === i;
          });
          func ? result.push(func) : console.warn("[defaultFuncs warn]\uFF1ANo matching options " + i);
        });
      }
      return result;
    }
  };
  var defaultFuncList = {
    'root': funcList.filter(function (i) {
      return i.key !== 'addSiblingNode';
    }),
    'leaf': defaultFuncs.getFunc('id', 'addChildNode', 'addSiblingNode', 'relayout', 'relayoutNext', 'nodeStyle', 'lineStyle')
  };
  var childrenGap = 20;
  var levelGap = 200;
  var defaultFuncConfig = {
    key: "",
    name: "",
    img: undefined,
    icon: undefined,
    setDom: undefined
  };
  var config = {
    childrenGap: childrenGap,
    levelGap: levelGap,
    funcList: funcList,
    colorList: colorList,
    defaultFuncList: defaultFuncList
  };

  function right(pen, recursion) {
    if (recursion === void 0) {
      recursion = true;
    }
    pen.mind.direction = 'right';
    var childrenGap = mindBoxPlugin.childrenGap;
    var levelGap = mindBoxPlugin.levelGap;
    var children = pen.mind.children || [];
    var worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    var topHeight = 0;
    var topWidth = 0;
    mindBoxPlugin.calcChildWandH(pen);
    for (var i = 0; i < children.length; i++) {
      var _meta2d$store$pens$ch, _meta2d$store$pens$ch2;
      var child = meta2d.store.pens[children[i]];
      if (!child) continue;
      var childRect = meta2d.getPenRect(child);
      topHeight += (((_meta2d$store$pens$ch = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch = _meta2d$store$pens$ch.mind) == null ? void 0 : _meta2d$store$pens$ch.maxHeight) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
      topWidth += (((_meta2d$store$pens$ch2 = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch2 = _meta2d$store$pens$ch2.mind) == null ? void 0 : _meta2d$store$pens$ch2.maxWidth) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
      child.mind.connect = right.connectRule(pen, child);
      child.mind.x = worldReact.x + worldReact.width + +levelGap;
      if (worldReact.height > pen.mind.childHeight) {
        var _child$mind;
        child.mind.y = worldReact.y + 1 / 2 * pen.mind.maxHeight + topHeight - 1 / 2 * pen.mind.childHeight + (((_child$mind = child.mind) == null ? void 0 : _child$mind.maxHeight) / 2 - 1 / 2 * childRect.height || 0);
      } else {
        var _child$mind2;
        child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1 / 2 * worldReact.height + (((_child$mind2 = child.mind) == null ? void 0 : _child$mind2.maxHeight) / 2 - 1 / 2 * childRect.height || 0);
      }
      meta2d.setValue({
        id: child.id,
        x: child.mind.x,
        y: child.mind.y
      }, {
        render: false
      });
      if (recursion) right(child, true);
    }
  }
  right.connectRule = function (pen, child) {
    return {
      from: pen.id,
      to: child.id,
      startIndex: 1,
      fromAnchor: pen.anchors[1],
      endIndex: 3,
      toAnchor: child.anchors[3]
    };
  };

  function left(pen, recursion) {
    if (recursion === void 0) {
      recursion = true;
    }
    pen.mind.direction = 'left';
    var childrenGap = mindBoxPlugin.childrenGap;
    var levelGap = mindBoxPlugin.levelGap;
    var children = pen.mind.children || [];
    var worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    var topHeight = 0;
    var topWidth = 0;
    mindBoxPlugin.calcChildWandH(pen);
    for (var i = 0; i < children.length; i++) {
      var _meta2d$store$pens$ch, _meta2d$store$pens$ch2;
      var child = meta2d.store.pens[children[i]];
      if (!child) continue;
      var childRect = meta2d.getPenRect(child);
      topHeight += (((_meta2d$store$pens$ch = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch = _meta2d$store$pens$ch.mind) == null ? void 0 : _meta2d$store$pens$ch.maxHeight) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
      topWidth += (((_meta2d$store$pens$ch2 = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch2 = _meta2d$store$pens$ch2.mind) == null ? void 0 : _meta2d$store$pens$ch2.maxWidth) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
      child.mind.connect = left.connectRule(pen, child);
      child.mind.x = worldReact.x - childRect.width - +levelGap;
      if (worldReact.height > pen.mind.childHeight) {
        var _child$mind;
        child.mind.y = worldReact.y + 1 / 2 * pen.mind.maxHeight + topHeight - 1 / 2 * pen.mind.childHeight + (((_child$mind = child.mind) == null ? void 0 : _child$mind.maxHeight) / 2 - 1 / 2 * childRect.height || 0);
      } else {
        var _child$mind2;
        child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1 / 2 * worldReact.height + (((_child$mind2 = child.mind) == null ? void 0 : _child$mind2.maxHeight) / 2 - 1 / 2 * childRect.height || 0);
      }
      meta2d.setValue({
        id: child.id,
        x: child.mind.x,
        y: child.mind.y,
        color: child.mind.color
      }, {
        render: false
      });
      if (recursion) left(child, true);
    }
  }
  left.connectRule = function (pen, child) {
    return {
      from: pen.id,
      to: child.id,
      startIndex: 3,
      fromAnchor: pen.anchors[3],
      endIndex: 1,
      toAnchor: child.anchors[1]
    };
  };

  function top(pen, recursion) {
    if (recursion === void 0) {
      recursion = true;
    }
    pen.mind.direction = 'top';
    var childrenGap = mindBoxPlugin.childrenGap;
    var levelGap = mindBoxPlugin.levelGap;
    var children = pen.mind.children;
    var worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    var topHeight = 0;
    var topWidth = 0;
    mindBoxPlugin.calcChildWandH(pen);
    for (var i = 0; i < children.length; i++) {
      var _meta2d$store$pens$ch, _meta2d$store$pens$ch2;
      var child = meta2d.store.pens[children[i]];
      if (!child) continue;
      var childRect = meta2d.getPenRect(child);
      topHeight += (((_meta2d$store$pens$ch = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch = _meta2d$store$pens$ch.mind) == null ? void 0 : _meta2d$store$pens$ch.maxHeight) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
      topWidth += (((_meta2d$store$pens$ch2 = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch2 = _meta2d$store$pens$ch2.mind) == null ? void 0 : _meta2d$store$pens$ch2.maxWidth) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
      child.mind.connect = top.connectRule(pen, child);
      if (worldReact.width > pen.mind.childWidth) {
        var _child$mind;
        child.mind.x = worldReact.x + 1 / 2 * pen.mind.maxWidth + topWidth - 1 / 2 * pen.mind.childWidth + (((_child$mind = child.mind) == null ? void 0 : _child$mind.maxWidth) / 2 - 1 / 2 * childRect.width || 0);
      } else {
        var _child$mind2;
        child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1 / 2 * worldReact.width + (((_child$mind2 = child.mind) == null ? void 0 : _child$mind2.maxWidth) / 2 - 1 / 2 * childRect.width || 0);
      }
      // child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1/2 * worldReact.width + ((child.mind?.maxWidth / 2 - 1 / 2 * childRect.width) || 0);
      child.mind.y = worldReact.y - 1 / 2 * meta2d.getPenRect(child).height - +levelGap;
      meta2d.setValue({
        id: child.id,
        x: child.mind.x,
        y: child.mind.y,
        color: child.mind.color
      }, {
        render: false
      });
      if (recursion) top(child, true);
    }
  }
  top.connectRule = function (pen, child) {
    return {
      from: pen.id,
      to: child.id,
      startIndex: 0,
      fromAnchor: pen.anchors[0],
      endIndex: 2,
      toAnchor: child.anchors[2]
    };
  };

  function bottom(pen, recursion) {
    if (recursion === void 0) {
      recursion = true;
    }
    pen.mind.direction = 'bottom';
    var childrenGap = mindBoxPlugin.childrenGap;
    var levelGap = mindBoxPlugin.levelGap;
    var children = pen.mind.children || [];
    var worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    var topHeight = 0;
    var topWidth = 0;
    mindBoxPlugin.calcChildWandH(pen);
    for (var i = 0; i < children.length; i++) {
      var _meta2d$store$pens$ch, _meta2d$store$pens$ch2;
      var child = meta2d.store.pens[children[i]];
      var childRect = meta2d.getPenRect(child);
      topHeight += (((_meta2d$store$pens$ch = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch = _meta2d$store$pens$ch.mind) == null ? void 0 : _meta2d$store$pens$ch.maxHeight) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
      topWidth += (((_meta2d$store$pens$ch2 = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch2 = _meta2d$store$pens$ch2.mind) == null ? void 0 : _meta2d$store$pens$ch2.maxWidth) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
      child.mind.connect = bottom.connectRule(pen, child);
      if (worldReact.width > pen.mind.childWidth) {
        var _child$mind;
        child.mind.x = worldReact.x + 1 / 2 * pen.mind.maxWidth + topWidth - 1 / 2 * pen.mind.childWidth + (((_child$mind = child.mind) == null ? void 0 : _child$mind.maxWidth) / 2 - 1 / 2 * childRect.width || 0);
      } else {
        var _child$mind2;
        child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1 / 2 * worldReact.width + (((_child$mind2 = child.mind) == null ? void 0 : _child$mind2.maxWidth) / 2 - 1 / 2 * childRect.width || 0);
      }
      child.mind.y = worldReact.y + worldReact.height - 1 / 2 * meta2d.getPenRect(child).height + +levelGap;
      meta2d.setValue({
        id: child.id,
        x: child.mind.x,
        y: child.mind.y,
        color: child.mind.color
      }, {
        render: false
      });
      if (recursion) bottom(child, true);
    }
  }
  bottom.connectRule = function (pen, child) {
    return {
      from: pen.id,
      to: child.id,
      startIndex: 2,
      fromAnchor: pen.anchors[2],
      endIndex: 0,
      toAnchor: child.anchors[0]
    };
  };

  var $JSON = _core.JSON || (_core.JSON = { stringify: JSON.stringify });
  var stringify = function stringify(it) { // eslint-disable-line no-unused-vars
    return $JSON.stringify.apply($JSON, arguments);
  };

  var stringify$1 = stringify;

  function butterfly(pen, recursion) {
    if (recursion === void 0) {
      recursion = true;
    }
    pen.mind.direction = 'butterfly';
    var childrenGap = mindBoxPlugin.childrenGap;
    var levelGap = mindBoxPlugin.levelGap;
    var children = JSON.parse(stringify$1(pen.mind.children || []));
    var worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    var topHeight = 0;
    var topWidth = 0;
    var rightChildren = pen.mind.children.splice(0, butterfly.MAXLENGTH);
    var leftChildren = pen.mind.children;
    pen.mind.children = rightChildren;
    mindBoxPlugin.calcChildWandH(pen);
    // let childrenLen = children.length;
    // let cutValue = childrenLen / 2
    for (var i = 0; i < children.length; i++) {
      var child = meta2d.store.pens[children[i]];
      if (!child) continue;
      var childRect = meta2d.getPenRect(child);
      if (i < butterfly.MAXLENGTH) {
        var _meta2d$store$pens$ch, _meta2d$store$pens$ch2, _child$mind;
        topHeight += (((_meta2d$store$pens$ch = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch = _meta2d$store$pens$ch.mind) == null ? void 0 : _meta2d$store$pens$ch.maxHeight) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
        topWidth += (((_meta2d$store$pens$ch2 = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch2 = _meta2d$store$pens$ch2.mind) == null ? void 0 : _meta2d$store$pens$ch2.maxWidth) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
        child.mind.connect = butterfly.connectRule(pen, child, i);
        child.mind.x = worldReact.x + worldReact.width + +levelGap;
        child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1 / 2 * worldReact.height + (((_child$mind = child.mind) == null ? void 0 : _child$mind.maxHeight) / 2 - 1 / 2 * childRect.height || 0);
        meta2d.setValue({
          id: child.id,
          x: child.mind.x,
          y: child.mind.y,
          color: child.mind.color
        }, {
          render: false
        });
        if (recursion) right(child, recursion);
        if (i === butterfly.MAXLENGTH - 1) {
          topHeight = 0;
          topWidth = 0;
          pen.mind.children = leftChildren;
          mindBoxPlugin.calcChildWandH(pen);
        }
      } else {
        var _meta2d$store$pens$ch3, _meta2d$store$pens$ch4, _child$mind2;
        topHeight += (((_meta2d$store$pens$ch3 = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch3 = _meta2d$store$pens$ch3.mind) == null ? void 0 : _meta2d$store$pens$ch3.maxHeight) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
        topWidth += (((_meta2d$store$pens$ch4 = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch4 = _meta2d$store$pens$ch4.mind) == null ? void 0 : _meta2d$store$pens$ch4.maxWidth) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
        if (i === butterfly.MAXLENGTH) {
          topHeight = 0;
          topWidth = 0;
        }
        child.mind.connect = butterfly.connectRule(pen, child, i);
        child.mind.x = worldReact.x - childRect.width - +levelGap;
        child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1 / 2 * worldReact.height + (((_child$mind2 = child.mind) == null ? void 0 : _child$mind2.maxHeight) / 2 - 1 / 2 * childRect.height || 0);
        meta2d.setValue({
          id: child.id,
          x: child.mind.x,
          y: child.mind.y,
          color: child.mind.color
        }, {
          render: false
        });
        if (recursion) left(child, recursion);
      }
      pen.mind.children = children;
    }
  }
  butterfly.connectRule = function (pen, child, index) {
    return index < butterfly.MAXLENGTH ? right.connectRule(pen, child) : left.connectRule(pen, child);
  };
  butterfly.MAXLENGTH = 8;

  function sandglass(pen, recursion) {
    if (recursion === void 0) {
      recursion = true;
    }
    pen.mind.direction = 'sandglass';
    var childrenGap = mindBoxPlugin.childrenGap;
    var levelGap = mindBoxPlugin.levelGap;
    var children = JSON.parse(stringify$1(pen.mind.children || []));
    var worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
    var topHeight = 0;
    var topWidth = 0;
    var bottomChildren = pen.mind.children.splice(0, sandglass.MAXLENGTH);
    var leftChildren = pen.mind.children;
    pen.mind.children = bottomChildren;
    mindBoxPlugin.calcChildWandH(pen);
    // let childrenLen = children.length;
    // let cutValue = childrenLen / 2
    for (var i = 0; i < children.length; i++) {
      var child = meta2d.store.pens[children[i]];
      if (!child) continue;
      var childRect = meta2d.getPenRect(child);
      if (i < sandglass.MAXLENGTH) {
        var _meta2d$store$pens$ch, _meta2d$store$pens$ch2, _child$mind;
        child.mind.connect = sandglass.connectRule(pen, child, i);
        topHeight += (((_meta2d$store$pens$ch = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch = _meta2d$store$pens$ch.mind) == null ? void 0 : _meta2d$store$pens$ch.maxHeight) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
        topWidth += (((_meta2d$store$pens$ch2 = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch2 = _meta2d$store$pens$ch2.mind) == null ? void 0 : _meta2d$store$pens$ch2.maxWidth) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
        child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1 / 2 * worldReact.width + (((_child$mind = child.mind) == null ? void 0 : _child$mind.maxWidth) / 2 - 1 / 2 * childRect.width || 0);
        child.mind.y = worldReact.y - 1 / 2 * meta2d.getPenRect(child).height + +levelGap;
        meta2d.setValue({
          id: child.id,
          x: child.mind.x,
          y: child.mind.y,
          color: child.mind.color
        }, {
          render: false
        });
        if (recursion) bottom(child, recursion);
        if (i === sandglass.MAXLENGTH - 1) {
          topHeight = 0;
          topWidth = 0;
          pen.mind.children = leftChildren;
          mindBoxPlugin.calcChildWandH(pen);
        }
      } else {
        var _meta2d$store$pens$ch3, _meta2d$store$pens$ch4, _child$mind2;
        topHeight += (((_meta2d$store$pens$ch3 = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch3 = _meta2d$store$pens$ch3.mind) == null ? void 0 : _meta2d$store$pens$ch3.maxHeight) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
        topWidth += (((_meta2d$store$pens$ch4 = meta2d.store.pens[children[i - 1]]) == null || (_meta2d$store$pens$ch4 = _meta2d$store$pens$ch4.mind) == null ? void 0 : _meta2d$store$pens$ch4.maxWidth) || 0) + (meta2d.store.pens[children[i - 1]] ? +childrenGap : 0);
        if (i === sandglass.MAXLENGTH) {
          topHeight = 0;
          topWidth = 0;
        }
        child.mind.connect = sandglass.connectRule(pen, child, i);
        child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1 / 2 * worldReact.width + (((_child$mind2 = child.mind) == null ? void 0 : _child$mind2.maxWidth) / 2 - 1 / 2 * childRect.width || 0);
        child.mind.y = worldReact.y - 1 / 2 * meta2d.getPenRect(child).height - +levelGap;
        if (child.mind.visible) {
          meta2d.setValue({
            id: child.id,
            x: child.mind.x,
            y: child.mind.y,
            color: child.mind.color
          }, {
            render: false
          });
          // meta2d.setVisible(child,true,false);
        } else {
          meta2d.setVisible(child, false, false);
        }
        if (recursion) top(child, recursion);
      }
      pen.mind.children = children;
    }
  }
  sandglass.connectRule = function (pen, child, index) {
    return index < sandglass.MAXLENGTH ? bottom.connectRule(pen, child) : top.connectRule(pen, child);
  };
  sandglass.MAXLENGTH = 8;

  function defaultColorRule(pen, recursion) {
    if (recursion === void 0) {
      recursion = true;
    }
    var children = pen.mind.children || [];
    var generateColorFunc = generateColor();
    for (var i = 0; i < children.length; i++) {
      var child = meta2d.store.pens[children[i]];
      if (!child) continue;
      var nodeColor = undefined;
      if (pen.mind.level === 0) {
        var nextColor = generateColorFunc.next().value;
        nodeColor = child.mind.color || nextColor;
      } else {
        nodeColor = child.mind.color || pen.mind.color || pen.color;
      }
      meta2d.setValue({
        id: child.id,
        color: nodeColor
      }, {
        render: false
      });
      if (recursion) defaultColorRule(child, true);
    }
  }

  var mindBoxPlugin = {
    name: 'toolBox',
    status: false,
    colorList: colorList,
    childrenGap: config.childrenGap,
    // 子节点间的间距
    levelGap: config.levelGap,
    // 子级间的间距
    layoutFunc: new map$1(),
    // 布局位置函数map
    colorFunc: new map$1(),
    // 布局颜色函数map
    _history: [],
    activePens: [],
    animate: true,
    animateDuration: 200,
    oldPens: [],
    // 计算子节点的颜色和位置
    calcChildrenPosAndColor: function calcChildrenPosAndColor(pen, position, color, recursion) {
      if (position === void 0) {
        position = pen.mind.direction || 'right';
      }
      if (color === void 0) {
        color = 'default';
      }
      if (recursion === void 0) {
        recursion = true;
      }
      if (!pen) return;
      var layoutFunc = mindBoxPlugin.layoutFunc.get(position);
      var colorFunc = mindBoxPlugin.colorFunc.get(color);
      if (!layoutFunc) throw new Error('mindBoxPlugin error : The layout function does not exist');
      try {
        layoutFunc(pen, recursion);
        colorFunc(pen, recursion);
      } catch (e) {
        throw new Error("mindBoxPlugin error : " + e.message);
      }
    },
    calcChildrenColor: function calcChildrenColor(pen, type, recursion) {
      if (type === void 0) {
        type = 'default';
      }
      if (recursion === void 0) {
        recursion = true;
      }
      var colorFunc = mindBoxPlugin.colorFunc.get(type);
      if (!colorFunc) return;
      try {
        colorFunc(pen, recursion);
      } catch (e) {
        throw new Error("mindBoxPlugin error : " + e.message);
      }
    },
    calcChildrenPos: function calcChildrenPos(pen, position, recursion) {
      if (position === void 0) {
        position = pen.mind.direction || 'right';
      }
      if (recursion === void 0) {
        recursion = true;
      }
      var layoutFunc = mindBoxPlugin.layoutFunc.get(position);
      if (!layoutFunc) return;
      // try{
      layoutFunc(pen, recursion);
      // }catch (e){
      //     throw new Error(`[mindBoxPlugin calcChildrenPos] error : ${e.message}`)
      // }
    },
    connectLine: function connectLine(pen, newPen, style) {
      if (style === void 0) {
        style = 'polyline';
      }
      // let line = null;
      // switch (option.position){
      //     case 'right':
      //         line = meta2d.connectLine(pen, newPen, pen.anchors[1], newPen.anchors[3], false);
      //         break;
      //     case 'left':
      //         line = meta2d.connectLine(newPen, pen, newPen.anchors[1],pen.anchors[3] , false);
      //         break;
      //     case 'bottom':
      //         line = meta2d.connectLine(pen, newPen, pen.anchors[2],newPen.anchors[0] , false);
      //         break;
      //     case 'top':
      //         line = meta2d.connectLine(newPen, pen, newPen.anchors[2],pen.anchors[0] , false);
      //         break;
      // }
      var from = meta2d.store.pens[newPen.mind.connect.from];
      var to = meta2d.store.pens[newPen.mind.connect.to];
      var line = meta2d.connectLine(from, to, newPen.mind.connect.fromAnchor, newPen.mind.connect.toAnchor, false, true);
      line.mind = {
        type: 'line',
        from: from.id,
        fromAnchor: newPen.mind.connect.fromAnchor,
        to: to.id,
        toAnchor: newPen.mind.connect.toAnchor,
        rootId: newPen.mind.rootId
      };
      newPen.mind.lineId = line.id;
      meta2d.setValue({
        id: line.id,
        lineWidth: meta2d.findOne(pen.mind.rootId).mind.lineWidth,
        locked: 2
      }, {
        render: false
      });
      meta2d.updateLineType(line, style);
      return line;
    },
    // 重新设置线颜色
    resetLinesColor: function resetLinesColor(pen, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      var colors = generateColor();
      var children = pen.mind.children || [];
      if (!children || children.length === 0) return;
      for (var i = 0; i < children.length; i++) {
        var _child$connectedLines;
        var child = meta2d.store.pens[children[i]];
        if (!child) continue;
        var line = (_child$connectedLines = child.connectedLines) == null ? void 0 : _child$connectedLines[0];
        if (line) {
          line.mind ? '' : line.mind = {};
          if (child.mind.level > 1) {
            line.mind.color = pen.mind.lineColor || pen.mind.color || pen.calculative.color;
          } else {
            line.mind.color = pen.mind.lineColor || colors.next().value;
          }
          meta2d.setValue({
            id: line.lineId,
            color: line.mind.color
          }, {
            render: false
          });
        }
        if (recursion) {
          mindBoxPlugin.resetLinesColor(child, true);
        }
      }
    },
    // 重新递归设置连线的样式
    resetLinesStyle: function resetLinesStyle(pen, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      var children = pen.mind.children || [];
      if (!children || children.length === 0) return;
      var root = meta2d.findOne(pen.mind.rootId);
      if (!root) return;
      for (var i = 0; i < children.length; i++) {
        var _child$connectedLines2;
        var child = meta2d.store.pens[children[i]];
        if (!child) continue;
        child.mind.lineStyle = pen.mind.lineStyle;
        var line = meta2d.findOne((_child$connectedLines2 = child.connectedLines) == null || (_child$connectedLines2 = _child$connectedLines2[0]) == null ? void 0 : _child$connectedLines2.lineId);
        if (line) {
          meta2d.updateLineType(line, meta2d.findOne(pen.mind.rootId).mind.lineStyle);
          meta2d.setValue({
            id: line.id,
            lineWidth: root.mind.lineWidth
          }, {
            render: false
          });
        }
        if (recursion) {
          mindBoxPlugin.resetLinesStyle(child, true);
        }
      }
    },
    disconnectLines: function disconnectLines(pen, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      var children = pen.mind.children || [];
      if (!children || children.length === 0) {
        return;
      }
      for (var i = 0; i < children.length; i++) {
        var _child$connectedLines3;
        var child = meta2d.store.pens[children[i]];
        if (!child) continue;
        if (!child.connectedLines || child.connectedLines.length === 0) return;
        // 保留lineId
        var line = meta2d.findOne((_child$connectedLines3 = child.connectedLines[0]) == null ? void 0 : _child$connectedLines3.lineId);
        if (!line) continue;
        var lineAnchor1 = line.anchors[0];
        var lineAnchor2 = line.anchors[line.anchors.length - 1];
        var from = meta2d.store.pens[child.mind.connect.from];
        var to = meta2d.store.pens[child.mind.connect.to];
        var fromAnchor = child.mind.connect.fromAnchor;
        var toAnchor = child.mind.connect.toAnchor;

        // 断开连线
        core.disconnectLine(from, fromAnchor, line, lineAnchor1);
        core.disconnectLine(to, toAnchor, line, lineAnchor2);
        if (recursion) {
          mindBoxPlugin.disconnectLines(child, true);
        }
      }
    },
    reconnectLines: function reconnectLines(pen, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      var children = pen.mind.children || [];
      if (!children || children.length === 0) {
        return;
      }
      for (var i = 0; i < children.length; i++) {
        var child = meta2d.store.pens[children[i]];
        if (!child) continue;
        var line = meta2d.findOne(child.mind.lineId);
        if (!line) continue;
        var lineAnchor1 = line.anchors[0];
        var lineAnchor2 = line.anchors[line.anchors.length - 1];
        var from = meta2d.store.pens[child.mind.connect.from];
        var to = meta2d.store.pens[child.mind.connect.to];
        var fromAnchor = child.mind.connect.fromAnchor;
        var toAnchor = child.mind.connect.toAnchor;
        core.connectLine(from, fromAnchor, line, lineAnchor1);
        core.connectLine(to, toAnchor, line, lineAnchor2);
        meta2d.canvas.updateLines(child);
        if (recursion) {
          mindBoxPlugin.reconnectLines(child, true);
        }
      }
      meta2d.canvas.updateLines(pen);
    },
    // 重新设置连线的位置
    resetLayOut: function resetLayOut(pen, pos, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      if (!pen) return;
      if (!pos) pos = pen.mind.direction;
      // 断开连线
      mindBoxPlugin.disconnectLines(pen, recursion);
      // 执行布局函数
      // let layoutFunc = mindBoxPlugin.layoutFunc.get(pos)
      // layoutFunc(pen,recursion)

      // 计算子级节点位置
      mindBoxPlugin.calcChildrenPos(pen, pos, recursion);

      // 重新连线
      mindBoxPlugin.reconnectLines(pen, recursion);

      // 计算子级节点颜色  按默认颜色规则进行配置
      mindBoxPlugin.calcChildrenColor(pen, 'default', recursion);
      // 重新设置连线样式
      mindBoxPlugin.resetLinesStyle(pen, recursion);
      mindBoxPlugin.resetLinesColor(pen, recursion);
      mindBoxPlugin.render(pen.mind.rootId);

      // 更新连线
    },
    // 递归修改子节点的direction属性
    // resetDirection(pen,direction,recursion = true){
    //     let children = pen.mind.children;
    //     if(!children || children.length === 0 )return;
    //     for(let i = 0 ;i<children.length;i++){
    //         const child = children[i];
    //         child.mind.direction = direction;
    //         this.connectLine()
    //         if(recursion){
    //             mindBoxPlugin.resetDirection(child,direction,true);
    //         }
    //     }
    // },
    /**
     * @description 删除连线
     * @param pen {Object} 图元对象
     * @param recursion {Boolean} 是否递归
     * @example
     * deleteLines(pen,true)
     */
    deleteLines: function deleteLines(pen, recursion) {
      var _pen$connectedLines;
      if (recursion === void 0) {
        recursion = false;
      }
      if (!pen) return;
      var lines = [];
      (_pen$connectedLines = pen.connectedLines) == null || _pen$connectedLines.forEach(function (i) {
        var line = meta2d.findOne(i.lineId);
        if (!line) return;
        line.locked = 0;
        line && lines.push(line);
      });
      meta2d["delete"](lines, false);
    },
    getLines: function getLines(pen) {
      var _pen$connectedLines2;
      if (!pen) return;
      var lines = [];
      (_pen$connectedLines2 = pen.connectedLines) == null || _pen$connectedLines2.forEach(function (i) {
        var line = meta2d.findOne(i.lineId);
        if (!line) return;
        line.locked = 0;
        line && lines.push(line);
      });
      return lines;
    },
    // 删除node下的子节点
    deleteChildrenNode: function deleteChildrenNode(pen) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _pen$mind;
        var lines, parent;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // 删除与之相关的线
              lines = mindBoxPlugin.getLines(pen); // 查找到对应的父级，删除其在父级中的子级列表数据
              parent = meta2d.findOne(pen.mind.preNodeId);
              parent && (pen.mind.preNodeChildren = core.deepClone(parent.mind.children));
              parent && parent.mind.children.splice(parent.mind.children.indexOf(pen.id), 1);

              // 刷新界面

              // 删除meta2d数据
              // 删除数据单不追加到历史记录
              _context.next = 6;
              return meta2d["delete"](((_pen$mind = pen.mind) == null ? void 0 : _pen$mind.children.map(function (i) {
                return meta2d.store.pens[i];
              }).filter(Boolean).concat(lines)) || [], true, false);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getChildrenList: function getChildrenList(pen, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      if (pen || !pen.mind) return [];
      var childrenId = pen.mind.children;
      if (!childrenId || childrenId.length === 0) return [];
      var collect = [];
      childrenId.forEach(function (i) {
        var child = meta2d.store.pens[i];
        if (!child) return;
        collect.push(child);
        if (recursion) collect.concat(mindBoxPlugin.getChildrenList(child));
      });
      return collect;
    },
    install: function install() {
      var toolbox = null;
      if (!globalThis.toolbox) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        toolbox = _construct(ToolBox, [meta2d.canvas.externalElements.parentElement].concat(args));
        globalThis.toolbox = toolbox;
      }

      // 初始化布局函数
      mindBoxPlugin.layoutFunc.set('right', right);
      mindBoxPlugin.layoutFunc.set('left', left);
      mindBoxPlugin.layoutFunc.set('top', top);
      mindBoxPlugin.layoutFunc.set('bottom', bottom);
      mindBoxPlugin.layoutFunc.set('butterfly', butterfly);
      mindBoxPlugin.layoutFunc.set('sandglass', sandglass);

      // 设置颜色生成函数
      mindBoxPlugin.colorFunc.set('default', defaultColorRule);
      // 打开时进行初始化
      document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
          // 阻止默认的撤销行为
          e.preventDefault();
          console.log('Ctrl + Z 被按下');

          // 在这里执行你想要的操作
        }
      });

      meta2d.on('opened', function () {
        var _meta2d$data = meta2d.data(),
          pens = _meta2d$data.pens;
        pens.forEach(function (i) {
          if (i.mind && i.mind.type === 'node') {
            var pen = meta2d.findOne(i.id);
            mindBoxPlugin.combineToolBox(pen);
            mindBoxPlugin.combineLifeCircle(pen);
            i.mind.isRoot ? window.PluginManager.rootIds.push(pen.id) : '';
          }
        });
      });
      // meta2d.on('resize',(pen)=>{
      //     if(pen.mind && pen.mind.rootId) mindBoxPlugin.record(meta2d.store.pens[pen.mind.rootId])
      // })
      meta2d.on('undo', function (e) {
        // TODO 删除顺序有问题
        e.pens.reverse().forEach(function (i) {
          if (i.mind) {
            // 撤回节点
            if (i.mind.type === 'node') {
              var preNode = meta2d.findOne(i.mind.preNodeId);
              preNode && preNode.mind.children.push(i.id);
              mindBoxPlugin.update(preNode);
            } else {
              var _preNode = meta2d.findOne(i.mind.from);
              mindBoxPlugin.update(_preNode);
            }
          }
        });
      });

      // 添加根节点
      meta2d.on('add', function (pens) {
        if (pens && pens.length === 1 && (pens[0].target === 'mind' || pens[0].name === 'mindNode2') && !pens[0].mind) {
          var pen = pens[0];
          pen.disableAnchor = true;
          pen.disableRotate = true;
          pen.mind = {
            isRoot: true,
            type: 'node',
            preNodeId: null,
            rootId: pen.id,
            children: [],
            width: 0,
            height: 0,
            maxWidth: 0,
            // 包含了自己和子节点的最大宽度
            maxHeight: 0,
            // 包含了自己和子节点的最大高度
            direction: 'right',
            lineStyle: 'mind',
            lineColor: '',
            childrenVisible: true,
            visible: true,
            lineWidth: 2,
            level: 0
          };
          window.PluginManager.rootIds.push(pen.id);
          // 跟随移动
          mindBoxPlugin.combineToolBox(pen);
          mindBoxPlugin.combineLifeCircle(pen);
          meta2d.render();
        }
      });
      meta2d.on('inactive', function (targetPen) {
        var _globalThis$toolbox;
        (_globalThis$toolbox = globalThis.toolbox) == null || _globalThis$toolbox.hide();
      });
    },
    uninstall: function uninstall() {
      var _window$PluginManager$r,
        _this = this;
      globalThis.toolbox.destroy();
      globalThis.toolbox = null;
      // 解绑生命周期
      (_window$PluginManager$r = window.PluginManager.rootIds) == null || _window$PluginManager$r.forEach(function (i) {
        var root = meta2d.findOne(i);
        _this.unCombineToolBox(root);
      });
    },
    unCombineToolBox: function unCombineToolBox(pen) {
      var _this2 = this;
      if (!pen.mind.children || pen.mind.children.length === 0) return;
      this.combineToolBox(pen, true);
      pen.mind.children.forEach(function (i) {
        var child = meta2d.store.pens[i];
        _this2.unCombineToolBox(child);
      });
    },
    funcList: defaultFuncList,
    setFuncList: function setFuncList(funcList) {
      if (Object.prototype.toString.call(funcList) !== '[object Object]') {
        throw new Error('The setFuncList function must take function arguments\n');
      }
      this.funcList = funcList;
    },
    calcChildWandH: function calcChildWandH(pen) {
      if (!pen || !pen.mind) return {
        maxHeight: 0,
        childHeight: 0,
        childWidth: 0,
        maxWidth: 0
      };
      var position = pen.mind.direction;
      var children = pen.mind.children || [];
      var worldRect = meta2d.getPenRect(pen);
      if (children.length === 0 || !pen.mind.childrenVisible) {
        var _pen$mind$height, _pen$mind$width;
        pen.mind.maxHeight = (_pen$mind$height = pen.mind.height) != null ? _pen$mind$height : worldRect.height;
        pen.mind.maxWidth = (_pen$mind$width = pen.mind.width) != null ? _pen$mind$width : worldRect.width;
        return {
          maxHeight: pen.mind.maxHeight,
          maxWidth: pen.mind.maxWidth,
          childHeight: 0,
          childWidth: 0
        };
      }
      var maxHeight = 0;
      var maxWidth = 0;
      var maxH = 0;
      var maxW = 0;
      if (position === 'right' || position === 'left' || position === 'butterfly') {
        for (var i = 0; i < children.length; i++) {
          var child = meta2d.store.pens[children[i]];
          var maxObj = mindBoxPlugin.calcChildWandH(child, position);
          maxHeight += maxObj.maxHeight;
          maxWidth = maxWidth > maxObj.maxWidth ? maxWidth : maxObj.maxWidth;
        }
        maxHeight += +mindBoxPlugin.childrenGap * (children.length - 1);
        maxH = maxHeight > worldRect.height ? maxHeight : worldRect.height;
        pen.mind.maxWidth = maxWidth;
        pen.mind.maxHeight = maxH;
        pen.mind.childHeight = maxHeight;
        pen.mind.childWidth = maxWidth;
        return {
          maxHeight: maxH,
          maxWidth: maxWidth,
          childHeight: maxHeight,
          childWidth: maxWidth
        };
      } else {
        for (var _i = 0; _i < children.length; _i++) {
          var _child = meta2d.store.pens[children[_i]];
          var _maxObj = mindBoxPlugin.calcChildWandH(_child, position);
          maxWidth += _maxObj.maxWidth;
          maxHeight = maxHeight > _maxObj.maxHeight ? maxHeight : _maxObj.maxHeight;
        }
        maxWidth += +mindBoxPlugin.childrenGap * (children.length - 1);
        maxW = maxWidth > worldRect.width ? maxWidth : worldRect.width;
        pen.mind.maxHeight = maxHeight;
        pen.mind.maxWidth = maxW;
        pen.mind.childWidth = maxWidth;
        return {
          maxHeight: maxHeight,
          maxWidth: maxW,
          childWidth: maxWidth,
          childHeight: maxHeight
        };
      }
    },
    /**
     * @description 自定义获取功能列表函数  返回值为最终展示的列表
     * @param pen 当前pen图元*/
    getFuncList: function getFuncList(pen) {
      return pen.mind.isRoot ? mindBoxPlugin.funcList['root'] : mindBoxPlugin.funcList['leaf'];
    },
    /**
     * @description 动态添加方法函数
     * @param tag 添加到目标种类上
     * @param func 方法函数
     * @param pos 插入的目标位置
     * */
    appendFuncList: function appendFuncList(tag, func, pos) {
      if (typeof tag !== "string" || typeof func !== "function") {
        throw new Error('appendFuncList error: appendFuncList parma error ');
      }
      var funcList = this.funcList[tag];
      if (Object.prototype.toString.call(funcList) === '[object Array]') {
        if (pos == null) {
          funcList.push(func);
        } else {
          funcList.splice(pos, 0, func);
        }
      } else {
        throw new Error('appendFuncList error: no such tag');
      }
    },
    //
    combineLifeCircle: function combineLifeCircle(target, del) {
      var _this3 = this;
      if (del === void 0) {
        del = false;
      }
      var onDestroy = function onDestroy(targetPen) {
        var _toolbox;
        (_toolbox = toolbox) == null || _toolbox.hide();
        mindBoxPlugin.deleteChildrenNode(targetPen);
        // mindBoxPlugin.deleteNodeOnlyOnce(targetPen);
        if (targetPen.mind.isRoot) {
          var index = PluginManager.rootIds.indexOf(targetPen.id);
          if (index === -1) return;
          PluginManager.rootIds.splice(index, 1);
        }
        mindBoxPlugin.update(meta2d.store.pens[targetPen.mind.rootId]);
      };
      // const onBeforeDestroy = (pen)=>{
      //     if(pen.mind.isRoot)return
      //    let parent = meta2d.store.pens[pen.mind.preNodeId]
      //     parent.mind.children.splice(parent.mind.children.indexOf(pen.id),1);
      // }
      var onAdd = function onAdd(targetPen) {
        if (!meta2d.store.data.locked) {
          toolbox.bindPen(targetPen);
          toolbox.setFuncList(_this3.getFuncList(target));
          toolbox.translateWithPen(targetPen);
          toolbox.show();
        }
      };
      var onResize = debounce(function (pen) {
        mindBoxPlugin.record(pen.mind.rootId);
      }, 500);
      // setLifeCycleFunc(target,'onDestroy',onDestroy,del);
      mindDiagram.setLifeCycleFunc(target, 'onAdd', onAdd, del);
      mindDiagram.setLifeCycleFunc(target, 'onDestroy', onDestroy, del);
      mindDiagram.setLifeCycleFunc(target, 'onResize', onResize);
    },
    deleteNodeOnlyOnce: debounceFirstOnly( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pen) {
        var children;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              children = mindBoxPlugin.getChildrenList(pen);
              if (!(!children || children.length === 0)) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              _context2.next = 5;
              return mate2d["delete"](children, true, false);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), 1000),
    combineToolBox: function combineToolBox(target, del) {
      var _this4 = this;
      if (del === void 0) {
        del = false;
      }
      var toolbox = globalThis.toolbox;
      // const onMove = (targetPen)=>{
      //     toolbox.hide();
      // };

      var onMouseUp = function onMouseUp(targetPen) {
        if (!meta2d.store.data.locked) {
          toolbox.bindPen(targetPen);
          toolbox.setFuncList(_this4.getFuncList(target));
          toolbox.translateWithPen(targetPen);
          toolbox.show();
        }
      };
      var onMouseDown = function onMouseDown(targetPen) {
        toolbox.hide();
      };
      // setLifeCycleFunc(target,'onMove',onMove,del);
      mindDiagram.setLifeCycleFunc(target, 'onMouseUp', onMouseUp, del);
      mindDiagram.setLifeCycleFunc(target, 'onMouseDown', onMouseDown, del);
    },
    // setDirection(pen,direction){
    //   return pen.mind?.direction? pen.mind.direction = direction:((pen.mind = {}) && (pen.mind.direction = direction));
    // },
    // 增加节点  同级设level为true
    /**
     * @description 添加节点
     * @param pen 添加节点的目标节点
     * @param position 添加节点的位置 默认为追加*/
    addNode: function addNode(pen, position, type, option) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var opt, scale, newPen, rootNode, line, list;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (position === void 0) {
                position = 0;
              }
              if (type === void 0) {
                type = "mindNode2";
              }
              if (option === void 0) {
                option = {};
              }
              opt = {
                name: type,
                disableAnchor: true,
                disableRotate: true,
                mind: {
                  type: 'node',
                  isRoot: false,
                  rootId: pen.mind.rootId,
                  preNodeId: pen.id,
                  children: [],
                  width: undefined,
                  height: undefined,
                  maxHeight: 0,
                  // 包含了自己和子节点的最大高度
                  maxWidth: 0,
                  // 包含了自己和子节点的最大宽度
                  direction: pen.mind.direction,
                  childrenVisible: true,
                  visible: true,
                  lineStyle: pen.mind.lineStyle || '',
                  lineColor: '',
                  level: pen.mind.level + 1
                },
                calculative: {
                  x: pen.x,
                  y: pen.y
                },
                x: pen.x,
                y: pen.y,
                width: pen.width,
                height: pen.height,
                text: '分支主题',
                // color:generateColor((pen.mind.children[pen.mind.children.length-1])?.calculative.color),
                textColor: '#000',
                lineWidth: 3,
                fontSize: 14,
                borderRadius: pen.borderRadius
              };
              scale = pen.calculative.canvas.store.data.scale;
              option.width && (option.width *= scale);
              option.height && (option.height *= scale);
              opt = deepMerge(opt, option);
              _context3.next = 10;
              return meta2d.addPen(opt, false);
            case 10:
              newPen = _context3.sent;
              // 设置连接关系
              newPen.mind.connect = pen.mind.level === 0 ? mindBoxPlugin.layoutFunc.get(pen.mind.direction).connectRule(pen, newPen) : pen.mind.connect;
              window.PluginManager.messageChannel.publish('addNode', {
                plugin: 'toolBox',
                pen: pen,
                newPen: newPen
              });
              // 添加节点
              if (position) {
                pen.mind.children.splice(position, 0, newPen.id);
              } else {
                pen.mind.children.push(newPen.id);
              }
              mindBoxPlugin.combineToolBox(newPen); // 重写生命周期
              mindBoxPlugin.combineLifeCircle(newPen);
              rootNode = meta2d.findOne(pen.mind.rootId); //TODO 这里似乎性能不太好 待优化
              mindBoxPlugin.record(pen.mind.rootId);
              // 连线
              mindBoxPlugin.calcChildrenPos(pen, pen.mind.direction, true);
              line = mindBoxPlugin.connectLine(pen, newPen, {
                position: pen.mind.direction,
                style: rootNode.mind.lineStyle
              });
              mindBoxPlugin.resetLayOut(rootNode);
              // mindBoxPlugin.resetLayOut(rootNode)
              // 从根节点更新
              // mindBoxPlugin.update(rootNode,true);
              if (mindBoxPlugin.animate) {
                setTimeout(function () {
                  globalThis.toolbox.bindPen(newPen);
                  globalThis.toolbox.setFuncList(_this5.getFuncList(newPen));
                  globalThis.toolbox.translateWithPen(newPen);
                }, mindBoxPlugin.animateDuration + 100);
              } else {
                globalThis.toolbox.bindPen(newPen);
                globalThis.toolbox.setFuncList(_this5.getFuncList(newPen));
                globalThis.toolbox.translateWithPen(newPen);
              }

              // mindBoxPlugin.update(rootNode)
              list = [newPen, line];
              meta2d.canvas.pushHistory({
                type: 0,
                pens: core.deepClone(list, true)
              });
              return _context3.abrupt("return", newPen);
            case 25:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    update: debounce(function (pen, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      if (!pen) return;
      mindBoxPlugin.record(pen);
      mindBoxPlugin.resetLayOut(pen, pen.mind.direction, recursion);
      mindDiagram.messageChannel.publish('update', {
        form: 'toolBox'
      });
    }, 50),
    // root 为根节点id
    render: function render(root) {
      if (mindBoxPlugin.animate) {
        var pens = [];
        if (root) {
          pens = meta2d.store.data.pens.filter(function (i) {
            var _i$mind;
            return ((_i$mind = i.mind) == null ? void 0 : _i$mind.rootId) === root && i.mind.type === 'node';
          });
        } else {
          pens = meta2d.store.data.pens.filter(function (i) {
            return i.mind && i.mind.type === 'node';
          });
        }
        var scale = meta2d.store.data.scale;
        pens.forEach(function (pen) {
          var source = core.deepClone(meta2d.getPenRect(pen));
          var origin = meta2d.store.data.origin;
          var x = source.x - pen.mind.oldWorldRect.x;
          var y = source.y - pen.mind.oldWorldRect.y;
          pen.calculative.worldRect.x = pen.mind.oldWorldRect.x * scale + origin.x;
          pen.calculative.worldRect.y = pen.mind.oldWorldRect.y * scale + origin.y;
          pen.calculative.worldRect.ex = pen.calculative.worldRect.x + pen.mind.oldWorldRect.width * scale;
          pen.calculative.worldRect.ey = pen.calculative.worldRect.y + pen.mind.oldWorldRect.height * scale;
          pen.animateCycle = 1;
          pen.keepAnimateState = true;
          pen.frames = [{
            duration: mindBoxPlugin.animateDuration,
            // 帧时长
            x: x,
            y: y // 变化属性,
          }];

          pen.showDuration = meta2d.calcAnimateDuration(pen);
          //
        });

        meta2d.startAnimate(pens);
        mindBoxPlugin.record(root);
      } else {
        meta2d.render();
      }
      mindDiagram.messageChannel.publish('render');
    },
    /**
     * @description 该方法用于记录节点位置坐标信息，用于动画过渡的初始状态
     * @param {string} root 根节点的id值*/
    record: function record(root) {
      var pens = [];
      if (root) pens = meta2d.store.data.pens.filter(function (i) {
        var _i$mind2;
        return ((_i$mind2 = i.mind) == null ? void 0 : _i$mind2.rootId) === root && i.mind.type === 'node';
      });else pens = meta2d.store.data.pens.filter(function (i) {
        return i.mind && i.mind.type === 'node';
      });
      pens.forEach(function (i) {
        i.mind.oldWorldRect = core.deepClone(meta2d.getPenRect(i));
      });
    }
  };

  exports.mindBoxPlugin = mindBoxPlugin;
  exports.ToolBox = ToolBox;
  exports.colorList = colorList;
  exports.generateColor = generateColor;
  exports.defaultFuncs = defaultFuncs;
  exports.defaultFuncList = defaultFuncList;
  exports.childrenGap = childrenGap;
  exports.levelGap = levelGap;
  exports.defaultFuncConfig = defaultFuncConfig;
  exports.right = right;
  exports.left = left;
  exports.top = top;
  exports.bottom = bottom;
  exports.butterfly = butterfly;
  exports.sandglass = sandglass;
  exports.template = template;
  exports.createDom = createDom;
  exports.debounce = debounce;
  exports.deepMerge = deepMerge;
  exports.replaceAfterPosition = replaceAfterPosition;
  exports.debounceFirstOnly = debounceFirstOnly;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
