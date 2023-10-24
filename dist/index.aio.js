/*
* mind-plugins-core 1.1.4
* Licensed under MIT
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('mind-diagram'), require('@meta2d/core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'mind-diagram', '@meta2d/core'], factory) :
  (factory((global.clone = {}),global.mindDiagram,global.core));
}(this, (function (exports,mindDiagram,core) { 'use strict';

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

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
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

  var _library = true;

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

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$2
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
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

  function createDom(name, style, even, func, className) {
    if (even === void 0) {
      even = undefined;
    }
    if (func === void 0) {
      func = undefined;
    }
    if (className === void 0) {
      className = undefined;
    }
    // 创建dom
    var dom = document.createElement(name);
    // 设置dom样式
    if (style && typeof style === 'object') {
      assign$1(dom.style, style);
      className && dom.classList.add(className);
    } else {
      throw new Error('createDom error: parma "style" must be a Object');
    }
    // 绑定dom事件；
    if (typeof even === 'string' && typeof func === 'function') {
      dom.addEventListener(even, function (e) {
        func();
      });
    }
    return dom;
  }
  var ToolBox = /*#__PURE__*/function () {
    function ToolBox(parentHtml, style) {
      if (style === void 0) {
        style = {};
      }
      this.curItem = null;
      this.box = document.createElement('div');
      this.box.style.backgroundColor = '#fff';
      this.box.style.borderRadius = '5px';
      this.box.style.boxShadow = '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)';
      this.box.style.width = 'max-content';
      this.box.style.height = '40px';
      this.box.style.padding = '6px';
      this.box.className = 'toolBox';
      this.box.style.display = 'none';
      this.box.style.zIndex = '999';
      this.box.style.display = 'flex';
      this.box.style.justifyContent = 'center';
      this.box.style.alignItems = 'center';
      // this.box.style.overflow = 'hidden';
      this.box.style.position = 'relative';
      this.box.style.transform = 'translateX(-50%)';
      this.setStyle(this.box, style);
      var stylesheet = document.styleSheets[0]; // 选择第一个样式表
      stylesheet.insertRule(".toolbox_item {" + "display: flex;" + "justify-content: center;" + "align-items: center;" + "height: 100%;" + "margin: 0 1px;" + "cursor: pointer;" + "transition: all .3s ease;" + "border-radius: 5px;" + "padding: 0 5px;" + "}", 0);
      stylesheet.insertRule(".toolbox_item:hover {" + "background-color: #eee;" + "}", 0);
      parentHtml.appendChild(this.box);
    }
    var _proto = ToolBox.prototype;
    _proto.setStyle = function setStyle(box, style) {
      keys$1(style).forEach(function (i) {
        box.style[i] = style[i];
      });
    };
    _proto.hide = function hide() {
      this.box.style.display = 'none';
    };
    _proto.bindPen = function bindPen(pen) {
      this.pen = pen;
    };
    _proto.show = function show() {
      this.box.style.display = 'flex';
      this.box.style.flexDirection = 'row';
    };
    _proto.translatePosition = function translatePosition(pen) {
      this.hide();
      var store = pen.calculative.canvas.store;
      var worldRect = pen.calculative.worldRect;
      this.box.style.position = 'absolute';
      this.box.style.outline = 'none';
      this.box.style.left = worldRect.x + store.data.x + worldRect.width / 2 + 'px';
      this.box.style.top = worldRect.y + store.data.y + -80 + 'px';
      this.box.style.userSelect = 'none';
      this.show();
    };
    _proto.renderChildren = function renderChildren() {
      var _this = this;
      var fragmentChild = new DocumentFragment();
      this.box.innerHTML = '';
      this.funcList.forEach(function (i) {
        if (i.name) {
          var itemsSpan = _this.setChildDom(_this.pen, i);
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
      var _this2 = this;
      // 是否应该在这设置为WebComponent？
      var dom = document.createElement('div');
      // TODO 影子DOM 实现 自定义工具栏item样式
      if (typeof item.setDom === 'function') {
        var re = item.setDom(item, dom);
        switch (typeof re) {
          case "string":
            dom.attachShadow({
              mode: "open"
            }).innerHTML = re;
            break;
          case "object":
            dom.attachShadow({
              mode: "open"
            }).appendChild(re);
            break;
          default:
            throw new Error('function setDom must return string or node object');
        }
      } else {
        dom.attachShadow({
          mode: "open"
        }).innerHTML = item.icon ? item.icon : item.img ? "<img src=\"" + item.img + "\" title=\"" + item.name + "\" />" : item.name;
      }

      // 设置style样式
      typeof item.style === 'object' && this.setStyle(dom, item.style);
      if (item.event) {
        var eventFunc = function eventFunc() {
          // 绑定事件
          item.func(item, this, dom);
        };
        dom.addEventListener(item.event, eventFunc.bind(pen));
      }
      if (item.children || item.setChildrenDom) {
        // TODO 这里触发隐藏事件有问题
        dom.addEventListener('click', function () {
          // TODO 应当关闭其他的菜单项
          _this2.funcList.filter(function (i) {
            return i !== item;
          }).forEach(function (i) {
            if (i.dom.childrenDom) {
              var _this2$curItem;
              // onHideChildDom 返回true为手动关闭，否则将自动关闭
              ((_this2$curItem = _this2.curItem) == null || _this2$curItem.onHideChildDom == null ? void 0 : _this2$curItem.onHideChildDom()) || (i.dom.childrenDom.style.visibility = 'hidden');
            }
          });
          dom.childrenDom.style.visibility === 'visible' ? dom.childrenDom.style.visibility = 'hidden' : (dom.childrenDom.style.visibility = 'visible') && (_this2.curItem = item);
        });
      }
      var containerDom = null;
      if (item.children && item.children.length > 0 || item.setChildrenDom) {
        var _containerDom;
        // 是否重写dom
        if (typeof item.setChildrenDom === 'function') {
          // 重新childDom

          var childDom = item.setChildrenDom(item, pen);
          if (typeof childDom === 'string') {
            var div = document.createElement('div');
            div.innerHTML = childDom;
            dom.shadowRoot.appendChild(div);
            containerDom = div.childNodes[0];
          } else {
            containerDom = childDom;
          }
        } else {
          containerDom = createDom('div', {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'absolute',
            visibility: 'hidden',
            top: '50px',
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding: '3px',
            width: 'max-content',
            boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
          });
        }
        var fragment = new DocumentFragment();
        var _loop = function _loop() {
          var i = _step.value;
          var node = createDom('div', {
            padding: '5px 8px'
          }, i.event, function () {
            i.func(i, this);
          }.bind(pen), 'toolbox_item');
          if (i.setDom) {
            var _re = i.setDom(i, node);
            switch (typeof _re) {
              case "string":
                node.innerHTML = _re;
                break;
              case "object":
                node.appendChild(_re);
                break;
              default:
                throw new Error('function setDom must return string or node object');
            }
          } else {
            node.innerHTML = i.icon && i.name ? '<span style="padding-right: 30px">' + i.icon + '</span> <span>' + i.name + '</span>' : '<span>' + (i.name || i.icon) + '</span>';
          }
          fragment.appendChild(node);
        };
        for (var _iterator = _createForOfIteratorHelperLoose(item.children || []), _step; !(_step = _iterator()).done;) {
          _loop();
        }
        dom.style.position = 'relative';
        (_containerDom = containerDom) == null || _containerDom.appendChild(fragment);
        containerDom.style.position = 'absolute';
        dom.shadowRoot.appendChild(containerDom);
        dom.childrenDom = containerDom;

        // 添加样式到元素
      }

      item.dom = dom;
      return dom;
    };
    _proto.setFuncList = function setFuncList(funcList) {
      this.funcList = funcList;
      this.renderChildren();
    };
    _proto.clearFuncList = function clearFuncList() {
      this.setFuncList([]);
    };
    return ToolBox;
  }();

  // 隐藏dom逻辑

  var _marked = /*#__PURE__*/_regeneratorRuntime().mark(generateColor$$1);
  var colorList = ['#FF2318', '#9C64A2', '#B4C926', '#0191B3', '#6F6EB9', '#9C64A2', '#FF291B', '#F4AE3C'];
  function generateColor$$1() {
    var index;
    return _regeneratorRuntime().wrap(function generateColor$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          index = 0;
        case 1:
          _context.next = 4;
          return colorList[index];
        case 4:
          index = (index + 1) % colorList.length;
          _context.next = 1;
          break;
        case 7:
        case "end":
          return _context.stop();
      }
    }, _marked);
  }
  var funcList = [{
    name: '新增子级节点',
    // 该选项的选项名，当无icon或者img或者setDom时，会以此为准  优先级：setDom>icon>img>name
    // 监听事件名
    event: 'click',
    /**
     * @description 事件对应的回调函数
     * @param self 返回该选项自身
     * @param pen 返回当前操作的pen对象
     * */
    func: function () {
      var _func = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(self, pen) {
        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              toolBoxPlugin.addNode(pen, 0);
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee);
      }));
      function func(_x, _x2) {
        return _func.apply(this, arguments);
      }
      return func;
    }(),
    // 显示的图标
    img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5LiL57qn6IqC54K5PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjE0IiB5PSIxOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjciIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5Zu65a6aIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzM2LjAwMDAwMCwgLTI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTLlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Mi4wMDAwMDAsIDI0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuS4i+e6p+iKgueCuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU0LjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i6YCP5piO5bqV5Zu+IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70tNiIgc3Ryb2tlPSIjODE4MTg3IiB4PSI0LjUiIHk9IjguNSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjYiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMjIiIHgyPSIxNCIgeTI9IjIyIiBpZD0i55u057q/LTciIHN0cm9rZT0iIzgxODE4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMTUiIHgyPSIxMiIgeTI9IjIyIiBpZD0i55u057q/LTYiIHN0cm9rZT0iIzgxODE4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0i55+p5b2i5aSH5Lu9LTUiIHN0cm9rZT0iIzlDOUNBNSIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
    /**
     * @description 通过此函数你可以自由地自定义工具栏的样式 采用影子dom 使得style相互隔离
     * @param self 此配置项自身
     * @param dom 插件提供的包含容器 即你创建的dom的外部div对象
     * @return string dom字符串
     * */
  }, {
    name: '重新布局',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">\n' + '    <title>重新布局</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-531.000000, -138.000000)" stroke="#818187">\n' + '            <g id="编组-2" transform="translate(253.000000, 135.000000)">\n' + '                <g id="重新布局" transform="translate(278.000000, 3.000000)">\n' + '                    <rect id="矩形备份-6" x="7.5" y="7.5" width="19" height="19" rx="1"/>\n' + '                    <line x1="7.5" y1="13.5" x2="26.5" y2="13.5" id="直线-11" stroke-linecap="square"/>\n' + '                    <line x1="13.5" y1="13.5" x2="13.5" y2="25.5" id="直线-11备份" stroke-linecap="square"/>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
    event: 'click',
    func: function func(self, pen) {
      var _pen$mind;
      var children = ((_pen$mind = pen.mind) == null ? void 0 : _pen$mind.children) || [];
      if (children.length > 0) {
        toolBoxPlugin.update(pen, true);
      }
    } // setDom(self,dom){
    //   // draw your dom freeDom！！！
    //   let result =  `<span>${self.name}</span>`;
    //   return result;
    // }
  }, {
    name: '重新布局下一级',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">\n' + '    <title>重新布局下一级</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-577.000000, -138.000000)" stroke="#818187">\n' + '            <g id="编组-2" transform="translate(253.000000, 135.000000)">\n' + '                <g id="仅重布局子集" transform="translate(324.000000, 3.000000)">\n' + '                    <rect id="矩形备份-6" x="7.5" y="7.5" width="19" height="19" rx="1"/>\n' + '                    <line x1="7.5" y1="13.5" x2="26.5" y2="13.5" id="直线-11" stroke-linecap="square"/>\n' + '                    <line x1="14.325" y1="18.5" x2="26.325" y2="18.5" id="直线-11备份-4" stroke-linecap="square"/>\n' + '                    <line x1="14.325" y1="23.5" x2="26.325" y2="23.5" id="直线-11备份-5" stroke-linecap="square"/>\n' + '                    <line x1="13.5" y1="13.5" x2="13.5" y2="25.5" id="直线-11备份" stroke-linecap="square"/>\n' + '                    <line x1="17.5" y1="13.5" x2="17.5" y2="25.5" id="直线-11备份-2" stroke-linecap="square"/>\n' + '                    <line x1="22.5" y1="13.5" x2="22.5" y2="25.5" id="直线-11备份-3" stroke-linecap="square"/>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
    event: 'click',
    func: function func(self, pen) {
      var _pen$mind2;
      var children = ((_pen$mind2 = pen.mind) == null ? void 0 : _pen$mind2.children) || [];
      if (children.length > 0) {
        toolBoxPlugin.update(pen, false);
      }
    }
  }, {
    name: '线条颜色',
    /**
     * @description 设置下拉框的样式，你也可以使用webComponent，或者将vue组件转换为webComponent
     * @param self 本配置对象
     * @param pen 返回当前pen对象
     * @param dom 返回此容器dom
     * */
    children: [{
      name: '红色'
    }, {
      name: '绿色'
    }],
    setChildrenDom: function setChildrenDom(self, pen) {
      var dom = createDom('div', {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        position: 'absolute',
        visibility: 'hidden',
        top: '50px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '3px',
        width: '185px',
        boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
      });
      return dom;
    }
  }, {
    name: '连线方式',
    // 隐藏下拉列表是触发
    onHideChildDom: function onHideChildDom() {
      return false;
    },
    // 下拉框元素列表  可通过setDom方法改变自身
    children: [{
      name: '脑图曲线',
      event: 'click',
      func: function func(self, pen) {
        var root = window.meta2d.findOne(pen.mind.rootId);
        root.mind.lineStyle = 'curve';
        toolBoxPlugin.resetLineStyle(root);
        toolBoxPlugin.update(root);
      }
    }, {
      name: '折线',
      event: 'click',
      func: function func(self, pen) {
        var root = window.meta2d.findOne(pen.mind.rootId);
        root.mind.lineStyle = 'polyline';
        toolBoxPlugin.resetLineStyle(root);
        toolBoxPlugin.update(root);
      }
    }]
  }, {
    name: '布局方式',
    event: 'click',
    onHideChildDom: function onHideChildDom() {
      console.log('hide');
    },
    func: function func(self, pen, dom) {
      var root = dom.shadowRoot.querySelector('.root');
      var divs = root.querySelectorAll('div');
      var index = self.children.findIndex(function (i) {
        return i.key === pen.mind.direction;
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
    children: [{
      key: 'right',
      name: '',
      event: 'click',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' + '    <title>向右布局 9</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-633.000000, -684.000000)">\n' + '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' + '                <g id="布局备份-9" transform="translate(108.000000, 261.000000)">\n' + '                    <rect class="toolbox_direction_svg_base" id="偷摸底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' + '                    <g id="编组-3" transform="translate(20.000000, 7.000000)">\n' + '                        <line class="toolbox_direction_svg" x1="13.5" y1="18.5" x2="22.969697" y2="18.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect class="toolbox_direction_svg_line" id="矩形" stroke="#818187" x="0.5" y="15.5" width="13" height="5" rx="2"/>\n' + '                        <path class="toolbox_direction_svg_line" d="M28,35 C22.4771525,35 18,27.836556 18,19 C18,10.163444 22.4771525,3 28,3" id="路径" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-11" fill="#DDDDE1" x="25" y="0" width="10" height="5" rx="2"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-12" fill="#DDDDE1" x="25" y="16" width="10" height="5" rx="2"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-13" fill="#DDDDE1" x="25" y="32" width="10" height="5" rx="2"/>\n' + '                    </g>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
      func: function func(self, pen) {
        var root = window.meta2d.findOne(pen.mind.rootId);
        root.mind.direction = 'right';
        toolBoxPlugin.resetDirection(root, 'right', true);
        toolBoxPlugin.update(root);
      }
    }, {
      name: '',
      key: 'left',
      event: 'click',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' + '    <title>布局备份 8</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-541.000000, -684.000000)">\n' + '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' + '                <g id="布局备份-8" transform="translate(16.000000, 261.000000)">\n' + '                    <rect class="toolbox_direction_svg_base" id="透明底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' + '                    <g id="编组-3" transform="translate(37.500000, 25.500000) scale(-1, 1) translate(-37.500000, -25.500000) translate(20.000000, 7.000000)">\n' + '                        <line class="toolbox_direction_svg" x1="13.5" y1="18.5" x2="22.969697" y2="18.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect class="toolbox_direction_svg_line" id="矩形" stroke="#818187" x="0.5" y="15.5" width="13" height="5" rx="2"/>\n' + '                        <path class="toolbox_direction_svg_line" d="M28,35 C22.4771525,35 18,27.836556 18,19 C18,10.163444 22.4771525,3 28,3" id="路径" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-11" fill="#DDDDE1" x="25" y="0" width="10" height="5" rx="2"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-12" fill="#DDDDE1" x="25" y="16" width="10" height="5" rx="2"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-13" fill="#DDDDE1" x="25" y="32" width="10" height="5" rx="2"/>\n' + '                    </g>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
      func: function func(self, pen) {
        var root = window.meta2d.findOne(pen.mind.rootId);
        root.mind.direction = 'left';
        toolBoxPlugin.resetDirection(root, 'left', true);
        toolBoxPlugin.update(root);
      }
    }, {
      name: '',
      key: 'top',
      event: 'click',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' + '    <title>布局备份 7</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-633.000000, -616.000000)">\n' + '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' + '                <g id="布局备份-7" transform="translate(108.000000, 193.000000)">\n' + '                    <rect class="toolbox_direction_svg_base" id="透明底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' + '                    <g id="编组-3" transform="translate(38.000000, 25.250000) scale(1, -1) rotate(-270.000000) translate(-38.000000, -25.250000) translate(25.750000, 0.750000)">\n' + '                        <line class="toolbox_direction_svg" x1="6.06363636" y1="25.5" x2="15.5333333" y2="25.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect class="toolbox_direction_svg_line" id="矩形" stroke="#818187" transform="translate(3.000000, 25.500000) rotate(-90.000000) translate(-3.000000, -25.500000) " x="-3.5" y="23" width="13" height="5" rx="2"/>\n' + '                        <path class="toolbox_direction_svg_line" d="M17.8386311,43 C15.0303966,40.513797 13,33.3135934 13,24.8187892 C13,16.7047472 14.8524591,9.77185117 17.465812,7" id="路径" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-11" fill="#DDDDE1" transform="translate(22.000000, 44.000000) rotate(-90.000000) translate(-22.000000, -44.000000) " x="17" y="41.5" width="10" height="5" rx="2"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-12" fill="#DDDDE1" transform="translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) " x="17" y="22.5" width="10" height="5" rx="2"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-13" fill="#DDDDE1" transform="translate(22.000000, 5.000000) rotate(-90.000000) translate(-22.000000, -5.000000) " x="17" y="2.5" width="10" height="5" rx="2"/>\n' + '                    </g>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
      func: function func(self, pen) {
        var root = window.meta2d.findOne(pen.mind.rootId);
        root.mind.direction = 'top';
        toolBoxPlugin.resetDirection(root, 'top', true);
        toolBoxPlugin.update(root);
      }
    }, {
      name: '',
      key: 'bottom',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' + '    <title>布局备份 2</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-725.000000, -480.000000)">\n' + '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' + '                <g id="布局备份-2" transform="translate(200.000000, 57.000000)">\n' + '                    <rect class="toolbox_direction_svg_base" id="透明底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' + '                    <g id="编组-3" transform="translate(38.000000, 25.250000) rotate(-270.000000) translate(-38.000000, -25.250000) translate(25.750000, 0.750000)">\n' + '                        <line x1="6.06363636" y1="25.5" x2="15.5333333" y2="25.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect class="toolbox_direction_svg_line" id="矩形" stroke="#818187" transform="translate(3.000000, 25.500000) rotate(-90.000000) translate(-3.000000, -25.500000) " x="-3.5" y="23" width="13" height="5" rx="2"/>\n' + '                        <path class="toolbox_direction_svg_line" d="M17.8386311,43 C15.0303966,40.513797 13,33.3135934 13,24.8187892 C13,16.7047472 14.8524591,9.77185117 17.465812,7" id="路径" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-11" fill="#DDDDE1" transform="translate(22.000000, 44.000000) rotate(-90.000000) translate(-22.000000, -44.000000) " x="17" y="41.5" width="10" height="5" rx="2"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-12" fill="#DDDDE1" transform="translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) " x="17" y="22.5" width="10" height="5" rx="2"/>\n' + '                        <rect class="toolbox_direction_svg" id="矩形备份-13" fill="#DDDDE1" transform="translate(22.000000, 5.000000) rotate(-90.000000) translate(-22.000000, -5.000000) " x="17" y="2.5" width="10" height="5" rx="2"/>\n' + '                    </g>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
      event: 'click',
      func: function func(self, pen) {
        var root = window.meta2d.findOne(pen.mind.rootId);
        root.mind.direction = 'bottom';
        toolBoxPlugin.resetDirection(root, 'bottom', true);
        toolBoxPlugin.update(root);
      }
    }],
    // 设置下拉列表的样式和子元素布局
    setChildrenDom: function setChildrenDom(self, pen) {
      var dom = createDom('div', {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        position: 'absolute',
        visibility: 'hidden',
        top: '50px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '3px',
        zIndex: 999,
        width: '185px',
        boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
      }, '', undefined, 'root');
      dom.innerHTML = "\n        <style>\n         .active {\n          border-color: red;\n          border-width: 5px;\n        }\n        </style>\n       ";
      dom.addEventListener('click', function (e) {
        dom.childNodes.forEach(function (i) {
          if (i.tagName !== 'style' && i.nodeType == 1) {
            i.classList.remove('active');
          }
        });
        e.target.classList.add('active');
      });
      return dom;
    }
  }];
  var defaultFuncList$$1 = {
    'root': funcList,
    'leaf': [{
      name: '新增同级节点',
      event: 'click',
      func: function () {
        var _func2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(self, pen) {
          var parent, index;
          return _regeneratorRuntime().wrap(function _callee2$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                parent = window.meta2d.findOne(pen.mind.preNodeId);
                index = parent.mind.children.indexOf(pen);
                _context3.next = 4;
                return toolBoxPlugin.addNode(parent, index + 1);
              case 4:
              case "end":
                return _context3.stop();
            }
          }, _callee2);
        }));
        function func(_x3, _x4) {
          return _func2.apply(this, arguments);
        }
        return func;
      }(),
      img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5ZCM57qn6IqC54K5PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjkiIHk9IjgiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3Ij48L3JlY3Q+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5Zu65a6aIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjkwLjAwMDAwMCwgLTI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTLlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Mi4wMDAwMDAsIDI0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuWQjOe6p+iKgueCuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4LjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i6YCP5piO5bqV5Zu+IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHN0cm9rZT0iIzgxODE4NyIgeD0iOS41IiB5PSIxOC41IiB3aWR0aD0iMTUiIGhlaWdodD0iNiIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iMTciIHkxPSIxNSIgeDI9IjE3IiB5Mj0iMTgiIGlkPSLnm7Tnur8tNiIgc3Ryb2tlPSIjODE4MTg3IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSLnn6nlvaLlpIfku70tNCIgc3Ryb2tlPSIjOUM5Q0E1IiBtYXNrPSJ1cmwoI21hc2stMikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iMiIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='
    }, {
      name: '新增子级节点',
      event: 'click',
      func: function () {
        var _func3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(self, pen) {
          return _regeneratorRuntime().wrap(function _callee3$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return toolBoxPlugin.addNode(pen, 0);
              case 2:
              case "end":
                return _context4.stop();
            }
          }, _callee3);
        }));
        function func(_x5, _x6) {
          return _func3.apply(this, arguments);
        }
        return func;
      }(),
      img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5LiL57qn6IqC54K5PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjE0IiB5PSIxOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjciIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5Zu65a6aIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzM2LjAwMDAwMCwgLTI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTLlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Mi4wMDAwMDAsIDI0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuS4i+e6p+iKgueCuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU0LjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i6YCP5piO5bqV5Zu+IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70tNiIgc3Ryb2tlPSIjODE4MTg3IiB4PSI0LjUiIHk9IjguNSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjYiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMjIiIHgyPSIxNCIgeTI9IjIyIiBpZD0i55u057q/LTciIHN0cm9rZT0iIzgxODE4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMTUiIHgyPSIxMiIgeTI9IjIyIiBpZD0i55u057q/LTYiIHN0cm9rZT0iIzgxODE4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0i55+p5b2i5aSH5Lu9LTUiIHN0cm9rZT0iIzlDOUNBNSIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
    }, {
      name: '重新布局下一级',
      event: 'click',
      func: function func(self, pen) {
        if (pen.mind.children.length > 0) {
          toolBoxPlugin.update(pen, false);
        }
      },
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">\n' + '    <title>重新布局下一级</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-577.000000, -138.000000)" stroke="#818187">\n' + '            <g id="编组-2" transform="translate(253.000000, 135.000000)">\n' + '                <g id="仅重布局子集" transform="translate(324.000000, 3.000000)">\n' + '                    <rect id="矩形备份-6" x="7.5" y="7.5" width="19" height="19" rx="1"/>\n' + '                    <line x1="7.5" y1="13.5" x2="26.5" y2="13.5" id="直线-11" stroke-linecap="square"/>\n' + '                    <line x1="14.325" y1="18.5" x2="26.325" y2="18.5" id="直线-11备份-4" stroke-linecap="square"/>\n' + '                    <line x1="14.325" y1="23.5" x2="26.325" y2="23.5" id="直线-11备份-5" stroke-linecap="square"/>\n' + '                    <line x1="13.5" y1="13.5" x2="13.5" y2="25.5" id="直线-11备份" stroke-linecap="square"/>\n' + '                    <line x1="17.5" y1="13.5" x2="17.5" y2="25.5" id="直线-11备份-2" stroke-linecap="square"/>\n' + '                    <line x1="22.5" y1="13.5" x2="22.5" y2="25.5" id="直线-11备份-3" stroke-linecap="square"/>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>'
    }, {
      name: '连线方式',
      children: [{
        name: '脑图曲线',
        event: 'click',
        func: function func(self, pen) {
          var root = window.meta2d.findOne(pen.mind.rootId);
          root.mind.lineStyle = 'curve';
          toolBoxPlugin.resetLineStyle(root);
          // toolBoxPlugin.update(root);
        }
      }, {
        name: '折线',
        event: 'click',
        func: function func(self, pen) {
          var root = window.meta2d.findOne(pen.mind.rootId);
          root.mind.lineStyle = 'polyline';
          toolBoxPlugin.resetLineStyle(root);
          // toolBoxPlugin.update(root);
        }
      }]
    }, {
      name: '布局方式',
      children: [{
        name: '',
        event: 'click',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' + '    <title>布局备份 9</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-633.000000, -684.000000)">\n' + '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' + '                <g id="布局备份-9" transform="translate(108.000000, 261.000000)">\n' + '                    <rect id="透明底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' + '                    <g id="编组-3" transform="translate(20.000000, 7.000000)">\n' + '                        <line x1="13.5" y1="18.5" x2="22.969697" y2="18.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect id="矩形" stroke="#818187" x="0.5" y="15.5" width="13" height="5" rx="2"/>\n' + '                        <path d="M28,35 C22.4771525,35 18,27.836556 18,19 C18,10.163444 22.4771525,3 28,3" id="路径" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect id="矩形备份-11" fill="#DDDDE1" x="25" y="0" width="10" height="5" rx="2"/>\n' + '                        <rect id="矩形备份-12" fill="#DDDDE1" x="25" y="16" width="10" height="5" rx="2"/>\n' + '                        <rect id="矩形备份-13" fill="#DDDDE1" x="25" y="32" width="10" height="5" rx="2"/>\n' + '                    </g>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
        func: function func(self, pen) {
          var root = window.meta2d.findOne(pen.mind.rootId);
          root.mind.direction = 'right';
          toolBoxPlugin.resetDirection(root, 'right', true);
          toolBoxPlugin.resetLinePos(root, true);
          toolBoxPlugin.update(root);
        },
        /**
         * @description 设置子元素的样式
         * @param self 该配置项自身
         * @param dom 返回该子元素所在的外部container容器
         * */
        setDom: function setDom(self, dom) {
          console.log(self, dom);
          return '5666';
        }
      }, {
        name: '',
        event: 'click',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' + '    <title>布局备份 8</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-541.000000, -684.000000)">\n' + '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' + '                <g id="布局备份-8" transform="translate(16.000000, 261.000000)">\n' + '                    <rect id="透明底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' + '                    <g id="编组-3" transform="translate(37.500000, 25.500000) scale(-1, 1) translate(-37.500000, -25.500000) translate(20.000000, 7.000000)">\n' + '                        <line x1="13.5" y1="18.5" x2="22.969697" y2="18.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect id="矩形" stroke="#818187" x="0.5" y="15.5" width="13" height="5" rx="2"/>\n' + '                        <path d="M28,35 C22.4771525,35 18,27.836556 18,19 C18,10.163444 22.4771525,3 28,3" id="路径" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect id="矩形备份-11" fill="#DDDDE1" x="25" y="0" width="10" height="5" rx="2"/>\n' + '                        <rect id="矩形备份-12" fill="#DDDDE1" x="25" y="16" width="10" height="5" rx="2"/>\n' + '                        <rect id="矩形备份-13" fill="#DDDDE1" x="25" y="32" width="10" height="5" rx="2"/>\n' + '                    </g>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
        func: function func(self, pen) {
          var root = window.meta2d.findOne(pen.mind.rootId);
          root.mind.direction = 'left';
          toolBoxPlugin.resetDirection(root, 'left', true);
          toolBoxPlugin.resetLinePos(root, true);
          toolBoxPlugin.update(root);
        }
      }, {
        name: '',
        event: 'click',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' + '    <title>布局备份 7</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-633.000000, -616.000000)">\n' + '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' + '                <g id="布局备份-7" transform="translate(108.000000, 193.000000)">\n' + '                    <rect id="透明底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' + '                    <g id="编组-3" transform="translate(38.000000, 25.250000) scale(1, -1) rotate(-270.000000) translate(-38.000000, -25.250000) translate(25.750000, 0.750000)">\n' + '                        <line x1="6.06363636" y1="25.5" x2="15.5333333" y2="25.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect id="矩形" stroke="#818187" transform="translate(3.000000, 25.500000) rotate(-90.000000) translate(-3.000000, -25.500000) " x="-3.5" y="23" width="13" height="5" rx="2"/>\n' + '                        <path d="M17.8386311,43 C15.0303966,40.513797 13,33.3135934 13,24.8187892 C13,16.7047472 14.8524591,9.77185117 17.465812,7" id="路径" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect id="矩形备份-11" fill="#DDDDE1" transform="translate(22.000000, 44.000000) rotate(-90.000000) translate(-22.000000, -44.000000) " x="17" y="41.5" width="10" height="5" rx="2"/>\n' + '                        <rect id="矩形备份-12" fill="#DDDDE1" transform="translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) " x="17" y="22.5" width="10" height="5" rx="2"/>\n' + '                        <rect id="矩形备份-13" fill="#DDDDE1" transform="translate(22.000000, 5.000000) rotate(-90.000000) translate(-22.000000, -5.000000) " x="17" y="2.5" width="10" height="5" rx="2"/>\n' + '                    </g>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
        func: function func(self, pen) {
          var root = window.meta2d.findOne(pen.mind.rootId);
          root.mind.direction = 'top';
          toolBoxPlugin.resetDirection(root, 'top', true);
          toolBoxPlugin.resetLinePos(root, true);
          toolBoxPlugin.update(root);
        }
      }, {
        name: '',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76px" height="50px" viewBox="0 0 76 50" version="1.1">\n' + '    <title>布局备份 2</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-725.000000, -480.000000)">\n' + '            <g id="编组-6备份" transform="translate(525.000000, 423.000000)">\n' + '                <g id="布局备份-2" transform="translate(200.000000, 57.000000)">\n' + '                    <rect id="透明底图" fill="#F8F8FC" x="0" y="0" width="76" height="50" rx="2"/>\n' + '                    <g id="编组-3" transform="translate(38.000000, 25.250000) rotate(-270.000000) translate(-38.000000, -25.250000) translate(25.750000, 0.750000)">\n' + '                        <line x1="6.06363636" y1="25.5" x2="15.5333333" y2="25.5" id="直线-12备份-2" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect id="矩形" stroke="#818187" transform="translate(3.000000, 25.500000) rotate(-90.000000) translate(-3.000000, -25.500000) " x="-3.5" y="23" width="13" height="5" rx="2"/>\n' + '                        <path d="M17.8386311,43 C15.0303966,40.513797 13,33.3135934 13,24.8187892 C13,16.7047472 14.8524591,9.77185117 17.465812,7" id="路径" stroke="#818187" stroke-linecap="round"/>\n' + '                        <rect id="矩形备份-11" fill="#DDDDE1" transform="translate(22.000000, 44.000000) rotate(-90.000000) translate(-22.000000, -44.000000) " x="17" y="41.5" width="10" height="5" rx="2"/>\n' + '                        <rect id="矩形备份-12" fill="#DDDDE1" transform="translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) " x="17" y="22.5" width="10" height="5" rx="2"/>\n' + '                        <rect id="矩形备份-13" fill="#DDDDE1" transform="translate(22.000000, 5.000000) rotate(-90.000000) translate(-22.000000, -5.000000) " x="17" y="2.5" width="10" height="5" rx="2"/>\n' + '                    </g>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
        event: 'click',
        func: function func(self, pen) {
          var root = window.meta2d.findOne(pen.mind.rootId);
          root.mind.direction = 'bottom';
          toolBoxPlugin.resetDirection(root, 'bottom', true);
          toolBoxPlugin.resetLinePos(root, true);
          toolBoxPlugin.update(root);
        }
      }],
      setChildrenDom: function setChildrenDom(self) {
        var dom = createDom('div', {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          position: 'absolute',
          visibility: 'hidden',
          top: '50px',
          backgroundColor: '#fff',
          borderRadius: '5px',
          padding: '3px',
          width: '185px',
          boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
        });
        return dom;
      }
    }]
  };

  var toolBoxPlugin = {
    name: 'toolBox',
    status: false,
    childrenGap: 20,
    // 子节点间的间距
    levelGap: 200,
    // 子级间的间距
    // 计算子节点的颜色和位置
    calChildrenPosAndColor: function calChildrenPosAndColor(pen, recursion, position) {
      var _pen$mind, _child$mind, _child$mind2, _child$mind3, _child$mind4;
      if (recursion === void 0) {
        recursion = true;
      }
      if (position === void 0) {
        position = 'right';
      }
      if (!pen) return;
      var children = (_pen$mind = pen.mind) == null ? void 0 : _pen$mind.children;
      if (!children) return;
      var worldReact = meta2d.getPenRect(pen); //获取该节点的世界坐标宽度信息
      // 子节点的世界坐标信息集合
      var penRects = [];
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var childWorldRect = meta2d.getPenRect(child);
        penRects.push(childWorldRect);
      }
      var topHeight = 0;
      var topWidth = 0;
      // 设置值
      var generateColorFunc = generateColor$$1();
      toolBoxPlugin.calcChildWandH(pen, position);
      for (var _i = 0; _i < children.length; _i++) {
        var _children, _children2;
        // 循环设置每个
        var _child = children[_i]; // 获取子元素
        topHeight += (((_children = children[_i - 1]) == null || (_children = _children.mind) == null ? void 0 : _children.maxHeight) || 0) + (children[_i - 1] ? toolBoxPlugin.childrenGap : 0);
        topWidth += (((_children2 = children[_i - 1]) == null || (_children2 = _children2.mind) == null ? void 0 : _children2.maxWidth) || 0) + (children[_i - 1] ? toolBoxPlugin.childrenGap : 0);
        var nodeColor = pen.mind.color || generateColorFunc.next().value;
        switch (position) {
          case 'right':
            _child.mind.x = worldReact.x + worldReact.width + toolBoxPlugin.levelGap;
            _child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1 / 2 * worldReact.height + (((_child$mind = _child.mind) == null ? void 0 : _child$mind.maxHeight) / 2 - 1 / 2 * penRects[_i].height || 0);
            break;
          case 'left':
            _child.mind.x = worldReact.x - _child.width - toolBoxPlugin.levelGap;
            _child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1 / 2 * worldReact.height + (((_child$mind2 = _child.mind) == null ? void 0 : _child$mind2.maxHeight) / 2 - 1 / 2 * penRects[_i].height || 0);
            break;
          case 'bottom':
            _child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1 / 2 * worldReact.width + (((_child$mind3 = _child.mind) == null ? void 0 : _child$mind3.maxWidth) / 2 - 1 / 2 * penRects[_i].width || 0);
            _child.mind.y = worldReact.y + _child.height + toolBoxPlugin.levelGap;
            break;
          case 'top':
            _child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1 / 2 * worldReact.width + (((_child$mind4 = _child.mind) == null ? void 0 : _child$mind4.maxWidth) / 2 - 1 / 2 * penRects[_i].width || 0);
            _child.mind.y = worldReact.y - _child.height - toolBoxPlugin.levelGap;
        }
        _child.mind.color = nodeColor;
        if (_child.mind.visible) {
          meta2d.setValue({
            id: _child.id,
            x: _child.mind.x,
            y: _child.mind.y,
            color: nodeColor
          }, {
            render: false
          });
          meta2d.setVisible(_child, true, false);
        } else {
          meta2d.setVisible(_child, false, false);
        }
        if (recursion) toolBoxPlugin.calChildrenPosAndColor(_child, true, _child.mind.direction);

        // meta2d.setValue({
        //   id:child.id,
        //   x: worldReact.x + pen.mind.maxWidth + toolBoxPlugin.levelGap ,
        //   y:worldReact.y  - 1 / 2 * pen.mind.maxHeight + topHeight + 1/2*worldReact.height+((child.mind?.maxHeight / 2 - 1 / 2 * penRects[i].height) || 0),
        //   color:nodeColor
        // },{render:false});
        // meta2d.setValue({id:child.connectedLines[0].id,color:nodeColor,},{render:false});
      }
      // 最后添加的图元
      // let lastChild = children.find(child=>!child.connectedLines || child.connectedLines.length === 0);
      // if(lastChild && (!lastChild.connectedLines || lastChild.connectedLines?.length === 0)) {
      //   meta2d.updateLineType(line, 'curve');
      //   meta2d.setValue({id: line.id, color: lastChild.calculative.color, lineWidth: 2}, {render: false});
      // }
    },
    connectLine: function connectLine(pen, newPen, option) {
      if (option === void 0) {
        option = {
          position: 'top',
          style: 'polyline'
        };
      }
      var line = null;
      switch (option.position) {
        case 'right':
          line = meta2d.connectLine(pen, newPen, pen.anchors[1], newPen.anchors[3], false);
          break;
        case 'left':
          line = meta2d.connectLine(newPen, pen, newPen.anchors[1], pen.anchors[3], false);
          break;
        case 'bottom':
          line = meta2d.connectLine(pen, newPen, pen.anchors[2], newPen.anchors[0], false);
          break;
        case 'top':
          line = meta2d.connectLine(newPen, pen, newPen.anchors[2], pen.anchors[0], false);
          break;
      }
      meta2d.updateLineType(line, option.style);
    },
    // 重新设置线颜色
    reSetLinesColor: function reSetLinesColor(pen, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      var colors = generateColor$$1();
      var children = pen.mind.children;
      if (!children || children.length === 0) return;
      for (var i = 0; i < children.length; i++) {
        var _child$connectedLines;
        var child = children[i];
        var line = (_child$connectedLines = child.connectedLines) == null ? void 0 : _child$connectedLines[0];
        if (line) {
          line.mind ? '' : line.mind = {};
          line.mind.color = pen.mind.color || colors.next().value;
          meta2d.setValue({
            id: line.lineId,
            color: line.mind.color
          }, {
            render: false
          });
        }
        if (recursion) {
          toolBoxPlugin.reSetLinesColor(child, true);
        }
      }
    },
    // 重新递归设置连线的样式
    resetLineStyle: function resetLineStyle(pen, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      var children = pen.mind.children;
      if (!children || children.length === 0) return;
      for (var i = 0; i < children.length; i++) {
        var _child$connectedLines2;
        var child = children[i];
        var line = meta2d.findOne((_child$connectedLines2 = child.connectedLines) == null ? void 0 : _child$connectedLines2[0].lineId);
        if (line) {
          meta2d.updateLineType(line, meta2d.findOne(pen.mind.rootId).mind.lineStyle);
        }
        if (recursion) {
          toolBoxPlugin.resetLineStyle(child, true);
        }
      }
    },
    // 重新设置连线的位置
    resetLinePos: function resetLinePos(pen, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      var children = pen.mind.children;
      if (!children || children.length === 0) return;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (!child.connectedLines || child.connectedLines.length === 0) return;
        var line = meta2d.findOne(child.connectedLines[0].lineId);
        var prePen = meta2d.findOne(child.mind.preNodeId);
        var prePenAnchor = null;
        var lineAnchor1 = line.anchors[0];
        var penAnchor = null;
        var lineAnchor2 = line.anchors[line.anchors.length - 1];
        switch (prePen.mind.direction) {
          case 'right':
            prePenAnchor = prePen.anchors[1];
            penAnchor = pen.anchors[3];
            break;
          case 'left':
            prePenAnchor = prePen.anchors[3];
            penAnchor = pen.anchors[1];
            break;
          case 'bottom':
            prePenAnchor = prePen.anchors[2];
            penAnchor = pen.anchors[0];
            break;
          case 'top':
            prePenAnchor = prePen.anchors[0];
            penAnchor = pen.anchors[2];
            break;
        }
        // debugger
        core.disconnectLine(pen, penAnchor, line, lineAnchor2);
        core.disconnectLine(prePen, prePenAnchor, line, lineAnchor1);
        console.log('disconnectLine');
        if (recursion) {
          toolBoxPlugin.resetLinePos(child, true);
        }
      }
    },
    // 递归修改子节点的direction属性
    resetDirection: function resetDirection(pen, direction, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      var children = pen.mind.children;
      if (!children || children.length === 0) return;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        child.mind.direction = direction;
        if (recursion) {
          toolBoxPlugin.resetDirection(child, direction, true);
        }
      }
    },
    // 删除连线
    deleteLines: function deleteLines(pen) {
      var _pen$connectedLines;
      if (!pen) return;
      var lines = [];
      (_pen$connectedLines = pen.connectedLines) == null || _pen$connectedLines.forEach(function (i) {
        var line = meta2d.findOne(i.lineId);
        line && lines.push(line);
      });
      meta2d["delete"](lines);
    },
    // 删除node
    deleteNode: function deleteNode(pen) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var parent;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // 删除与之相关的线
              toolBoxPlugin.deleteLines(pen);

              // 查找到对应的父级，删除其在父级中的子级列表数据
              parent = meta2d.findOne(pen.mind.preNodeId);
              parent && parent.mind.children.splice(parent.mind.children.indexOf(pen), 1);

              // 刷新界面

              // 删除meta2d数据
              _context.next = 5;
              return meta2d["delete"](pen.mind.children);
            case 5:
              toolBoxPlugin.update(meta2d.findOne(pen.mind.rootId));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    install: function install() {
      var toolbox = null;
      if (!globalThis.toolbox) {
        toolbox = new ToolBox(meta2d.canvas.externalElements.parentElement, {});
        globalThis.toolbox = toolbox;
      }
      meta2d.on('add', function (pens) {
        if (pens && pens.length === 1 && pens[0].name === 'mindNode2' && !pens[0].mind) {
          var pen = pens[0];
          pen.mind = {
            isRoot: true,
            preNodeId: null,
            rootId: pen.id,
            children: [],
            width: 0,
            // 包含了自己和子节点的最大宽度
            height: 0,
            // 包含了自己和子节点的最大高度
            direction: 'right',
            lineStyle: 'polyline',
            childrenVisible: true,
            visible: true
          };
          window.MindManager.rootIds.push(pen);
          // 跟随移动
          toolBoxPlugin.combineLifeCycle(pen);
        }
      });
      meta2d.on('inactive', function (targetPen) {
        globalThis.toolbox.hide();
      });
    },
    uninstall: function uninstall() {
      var _window$MindManager$r,
        _this = this;
      globalThis.toolbox = null;
      // 解绑生命周期
      (_window$MindManager$r = window.MindManager.rootIds) == null || _window$MindManager$r.forEach(function (i) {
        var root = meta2d.findOne(i);
        _this.unCombineLifeCycle(root);
      });
    },
    unCombineLifeCycle: function unCombineLifeCycle(pen) {
      var _this2 = this;
      if (!pen.mind.children || pen.mind.children.length === 0) return;
      this.combineLifeCycle(pen, true);
      pen.mind.children.forEach(function (i) {
        _this2.unCombineLifeCycle(i);
      });
    },
    funcList: defaultFuncList$$1,
    setFuncList: function setFuncList(funcList) {
      if (Object.prototype.toString.call(funcList) !== '[object Object]') {
        throw new Error('The setFuncList function must take function arguments\n');
      }
      this.funcList = funcList;
    },
    calcChildWandH: function calcChildWandH(pen, position) {
      if (position === void 0) {
        position = 'right';
      }
      var children = pen.mind.children || [];
      var worldRect = meta2d.getPenRect(pen);
      if (children.length === 0 || !pen.mind.childrenVisible) {
        pen.mind.maxHeight = worldRect.height;
        pen.mind.maxWidth = worldRect.width;
        return {
          maxHeight: worldRect.height,
          maxWidth: worldRect.width
        };
      }
      var maxHeight = 0;
      var maxWidth = 0;
      var maxH = 0;
      var maxW = 0;
      if (position === 'right' || position === 'left') {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          var maxObj = toolBoxPlugin.calcChildWandH(child, position);
          maxHeight += maxObj.maxHeight;
          maxWidth = maxWidth > maxObj.maxWidth ? maxWidth : maxObj.maxWidth;
        }
        maxHeight += toolBoxPlugin.childrenGap * (children.length - 1);
        maxH = maxHeight > worldRect.height ? maxHeight : worldRect.height;
        pen.mind.maxHeight = maxH;
        pen.mind.maxWidth = maxWidth;
        return {
          maxHeight: maxH,
          maxWidth: maxWidth
        };
      } else {
        for (var _i2 = 0; _i2 < children.length; _i2++) {
          var _child2 = children[_i2];
          var _maxObj = toolBoxPlugin.calcChildWandH(_child2, position);
          maxWidth += _maxObj.maxWidth;
          maxHeight = maxHeight > _maxObj.maxHeight ? maxHeight : _maxObj.maxHeight;
        }
        maxWidth += toolBoxPlugin.childrenGap * (children.length - 1);
        maxW = maxWidth > worldRect.width ? maxWidth : worldRect.width;
        pen.mind.maxHeight = maxHeight;
        pen.mind.maxWidth = maxW;
        return {
          maxHeight: maxHeight,
          maxWidth: maxW
        };
      }
    },
    /**
     * @param target 当前pen图元*/
    getFuncList: function getFuncList(target) {
      // 手写funclist返回功能列表的校验规则  可被重写
      return target.mind.isRoot ? toolBoxPlugin.funcList['root'] : toolBoxPlugin.funcList['leaf'];
    },
    appendFuncList: function appendFuncList(kind, func) {
      if (typeof kind !== "string" || typeof func !== "function") {
        throw new Error('appendFuncList error: appendFuncList parma error ');
      }
      var funcList = this.funcList[kind];
      if (Object.prototype.toString.call(funcList) === '[object Array]') {
        funcList.push(func);
      } else {
        throw new Error('appendFuncList error: no such kind');
      }
    },
    combineLifeCycle: function combineLifeCycle(target, del) {
      var _this3 = this;
      if (del === void 0) {
        del = false;
      }
      var toolbox = globalThis.toolbox;
      var onMove = function onMove(targetPen) {
        toolbox.hide();
      };
      var onDestroy = function onDestroy(targetPen) {
        toolbox.hide();
        toolBoxPlugin.deleteNode(targetPen);
      };
      var onMouseUp = function onMouseUp(targetPen) {
        toolbox.bindPen(targetPen);
        toolbox.setFuncList(_this3.getFuncList(target));
        toolbox.translatePosition(targetPen);
      };
      var onMouseDown = function onMouseDown(targetPen) {
        toolbox.hide();
      };
      mindDiagram.setLifeCycleFunc(target, 'onMove', onMove, del);
      mindDiagram.setLifeCycleFunc(target, 'onDestroy', onDestroy, del);
      mindDiagram.setLifeCycleFunc(target, 'onMouseUp', onMouseUp, del);
      mindDiagram.setLifeCycleFunc(target, 'onMouseDown', onMouseDown, del);
    },
    // setDirection(pen,direction){
    //   return pen.mind?.direction? pen.mind.direction = direction:((pen.mind = {}) && (pen.mind.direction = direction));
    // },
    // 增加节点  同级设level为true
    addNode: function addNode(pen, position, type) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var newPen, rootNode;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (position === void 0) {
                position = 0;
              }
              if (type === void 0) {
                type = "mindNode2";
              }
              _context2.next = 4;
              return meta2d.addPen({
                name: type,
                mind: {
                  isRoot: false,
                  rootId: pen.mind.rootId,
                  preNodeId: pen.id,
                  children: [],
                  width: 0,
                  // 包含了自己和子节点的最大宽度
                  height: 0,
                  // 包含了自己和子节点的最大高度
                  direction: pen.mind.direction,
                  childrenVisible: true,
                  visible: true
                },
                x: pen.x,
                y: pen.y,
                width: pen.width,
                height: pen.height,
                text: '分支主题',
                // color:generateColor((pen.mind.children[pen.mind.children.length-1])?.calculative.color),
                textColor: '#000',
                lineWidth: 3,
                fontSize: 16,
                borderRadius: pen.borderRadius
              });
            case 4:
              newPen = _context2.sent;
              window.MindManager.pluginsMessageChannels.publish('addNode', newPen);
              // 添加节点
              if (position) {
                pen.mind.children.splice(position, 0, newPen);
              } else {
                pen.mind.children.push(newPen);
              }
              toolBoxPlugin.combineLifeCycle(newPen); // 重写生命周期
              rootNode = meta2d.findOne(pen.mind.rootId); // 连线
              toolBoxPlugin.connectLine(pen, newPen, {
                position: pen.mind.direction,
                style: rootNode.mind.lineStyle
              });

              // 从根节点更新
              toolBoxPlugin.update(rootNode, true);
              globalThis.toolbox.bindPen(newPen);
              globalThis.toolbox.setFuncList(_this4.getFuncList(newPen));
              globalThis.toolbox.translatePosition(newPen);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    update: function update(pen, recursion) {
      if (recursion === void 0) {
        recursion = true;
      }
      if (!pen) return;
      toolBoxPlugin.calChildrenPosAndColor(pen, recursion, pen.mind.direction);
      toolBoxPlugin.reSetLinesColor(pen, recursion);
      toolBoxPlugin.resetLineStyle(pen, recursion);
      toolBoxPlugin.render();
      mindDiagram.pluginsMessageChannels.publish('update');
    },
    render: function render() {
      meta2d.render();
      mindDiagram.pluginsMessageChannels.publish('render');
    }
  };

  exports.toolBoxPlugin = toolBoxPlugin;
  exports.generateColor = generateColor$$1;
  exports.defaultFuncList = defaultFuncList$$1;
  exports.createDom = createDom;
  exports.ToolBox = ToolBox;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
