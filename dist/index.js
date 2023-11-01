/*
* mind-plugins-core 1.1.4
* Licensed under MIT
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Object$assign = _interopDefault(require('@babel/runtime-corejs2/core-js/object/assign'));
var _Object$keys = _interopDefault(require('@babel/runtime-corejs2/core-js/object/keys'));
var _Promise = _interopDefault(require('@babel/runtime-corejs2/core-js/promise'));
var _Array$isArray = _interopDefault(require('@babel/runtime-corejs2/core-js/array/is-array'));
var mindDiagram = require('mind-diagram');
var core = require('@meta2d/core');

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
function _wrapRegExp() {
  _wrapRegExp = function (e, r) {
    return new BabelRegExp(e, void 0, r);
  };
  var e = RegExp.prototype,
    r = new WeakMap();
  function BabelRegExp(e, t, p) {
    var o = new RegExp(e, t);
    return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
  }
  function buildGroups(e, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function (r, t) {
      var o = p[t];
      if ("number" == typeof o) r[t] = e[o];else {
        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
        r[t] = e[o[i]];
      }
      return r;
    }, Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
    var t = e.exec.call(this, r);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
    if ("string" == typeof p) {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function (e, r) {
        var t = o[r];
        return "$" + (Array.isArray(t) ? t.join("$") : t);
      }));
    }
    if ("function" == typeof p) {
      var i = this;
      return e[Symbol.replace].call(this, t, function () {
        var e = arguments;
        return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
      });
    }
    return e[Symbol.replace].call(this, t, p);
  }, _wrapRegExp.apply(this, arguments);
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
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
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
    _Object$assign(dom.style, style);
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
    _Object$keys(style).forEach(function (i) {
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
    var dom = document.createElement('div');
    // 构建update方法 用于局部更新
    item.update = function (target, keepOpen) {
      if (target === 'title') {
        renderTitle(item, pen, dom.titleDom);
        return;
      } else if (target === 'child') {
        renderChildDom(item, pen, dom, dom.childrenDom, keepOpen);
        return;
      }
      // 清空列表  初始化列表
      renderInit(item, pen, dom);
      item.init == null || item.init(item, pen, dom);

      // 初始化titleDOM
      var title = createDom('div', {}, undefined, undefined, 'toolbox_title');
      // 执行titleDom
      title = renderTitle(item, pen, title);
      // titleDom添加到dom中
      dom.shadowRoot.appendChild(title);

      // 渲染下拉列表
      var containerDom = null;
      renderChildDom(item, pen, dom, containerDom);
      item.dom = dom;
      item.dom.titleDom = title;
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
    this.renderChildren();
  };
  _proto.clearFuncList = function clearFuncList() {
    this.setFuncList([]);
  };
  return ToolBox;
}();
function renderInit(item, pen, dom) {
  if (dom.shadowRoot) {
    // 清空
    dom.shadowRoot.innerHTML = '';
  } else {
    dom.attachShadow({
      mode: "open"
    });
  }

  //设置样式与事件
  typeof item.style === 'object' && toolbox.setStyle(dom, item.style);
  if (item.event) {
    var eventFunc = function eventFunc(e) {
      // 绑定事件
      item.func(item, this, dom);
    };
    dom.addEventListener(item.event, eventFunc.bind(pen));
  }
  return dom;
}
function renderTitle(item, pen, title) {
  title.innerHTML = '';
  if (typeof item.setDom === 'function') {
    var re = item.setDom(item, title);
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
  title.addEventListener(item.openChildDomEvent || 'click', function () {
    // 关闭其他选项
    if (toolbox.curItem !== item && toolbox.curItem) {
      (item.closeChildDom == null ? void 0 : item.closeChildDom(item, pen, item.dom.childrenDom)) || toolbox.curItem.dom.childrenDom && (toolbox.curItem.dom.childrenDom.style.visibility = 'hidden');
    }
    // 将打开逻辑交给用户 或者
    (item.openChildDom == null ? void 0 : item.openChildDom(item, pen, item.dom.childrenDom)) || item.dom.childrenDom && (item.dom.childrenDom.style.visibility = 'visible');

    // 执行打开下拉菜单回调函数 TODO 传参应该怎么传
    item.onOpenChildDom == null || item.onOpenChildDom(item, pen, item.dom.childrenDom);
    toolbox.curItem = item;
  });
  return title;
}
function renderChildDom(item, pen, dom, containerDom, keepOpen) {
  if (keepOpen === void 0) {
    keepOpen = false;
  }
  if (dom.childrenDom) dom.shadowRoot.removeChild(dom.childrenDom);
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
        keepOpen ? (item.openChildDom == null ? void 0 : item.openChildDom()) || (div.style.visibility = 'visible') : (item.closeChildDom == null ? void 0 : item.closeChildDom()) || (div.style.visibility = 'hidden');
        div.innerHTML = childDom;
        dom.shadowRoot.appendChild(div);
        containerDom = div;
      } else {
        containerDom = childDom;
        keepOpen ? (item.openChildDom == null ? void 0 : item.openChildDom()) || (childDom.style.visibility = 'visible') : (item.closeChildDom == null ? void 0 : item.closeChildDom()) || (childDom.style.visibility = 'hidden');
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
      keepOpen ? (item.openChildDom == null ? void 0 : item.openChildDom()) || (containerDom.style.visibility = 'visible') : (item.closeChildDom == null ? void 0 : item.closeChildDom()) || (containerDom.style.visibility = 'hidden');
    }
    var fragment = new DocumentFragment();
    var _loop = function _loop() {
      var i = _step.value;
      var node = createDom('div', {
        margin: '5px 8px'
      }, i.event, function (e) {
        i.stopPropagation ? e.stopPropagation() : '';
        i.func(i, this, dom, item);
      }.bind(pen), 'children_item');

      //TODO 执行时机是否正确？？？
      i.init == null || i.init(i, pen, node);
      if (i.setDom) {
        var re = i.setDom(i, node);
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
        node.innerHTML = i.icon && i.name ? '<span style="padding-right: 30px;width: max-content" >' + i.icon + '</span> <span>' + i.name + '</span>' : '<span>' + (i.name || i.icon) + '</span>';
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
    dom.shadowRoot.appendChild(containerDom);
    dom.childrenDom = containerDom;
    // 添加样式到元素
  }

  if (item.children || item.setChildrenDom || item.closeOther) {
    // 关闭下拉菜单
    !item.closeOther && dom.childrenDom.addEventListener(item.closeChildDomEvent || 'click', function () {
      var _toolbox$curItem;
      // 可手动派发隐藏函数
      (_toolbox$curItem = toolbox.curItem) == null || _toolbox$curItem.onHideChildDom == null || _toolbox$curItem.onHideChildDom();
      (item.closeChildDom == null ? void 0 : item.closeChildDom(item, pen, containerDom)) || item.dom.childrenDom && (item.dom.childrenDom.style.visibility = 'hidden');
      toolbox.curItem = null;
    });
  }
  return containerDom;
}

// 模板解析，注册函数并返回返回dom对象
// TODO 此处只能处理返回字符串的信息

var LifeCycle = ['mounted'];
function template(config, _ref) {
  var template = _ref.template,
    scripts = _ref.scripts,
    style = _ref.style;
  var namespace = config.key;
  if (!namespace) throw new Error('The name attribute is not configured');
  MindManager._env[namespace] ? '' : MindManager._env[namespace] = {};
  var _parse = parse(template),
    dom = _parse.dom,
    funcObjs = _parse.funcObjs;
  var keys = _Object$keys(scripts);

  // 暂不考虑 传其他参数情况
  keys.forEach(function (i) {
    // 将script的函数传递到全局环境
    MindManager._env[namespace][i] = scripts[i];

    // 执行生命周期函数 放入微队列依次执行
    LifeCycle.includes(i) ? _Promise.resolve().then(function () {
      scripts[i]();
    }) : '';
  });
  funcObjs.forEach(function (i) {
    // 出现的函数在script中定义了 则转换
    if (keys.indexOf(i.name) !== -1) {
      dom = dom.replaceAll(i.name + "(", "MindManager._env." + namespace + "." + i.name + "(");
      i.params.forEach(function (j) {
        //TODO 应该还要过滤一遍字面量  此处仅仅处理了变量
        if (!j.startsWith('this') && j !== 'event' && !isLiteral(j)) {
          dom = dom.replaceAll(j, "MindManager._env." + namespace + "." + j);
        }
      });
    }
  });
  var sty = '';
  if (style) {
    style.startsWith('<style>') ? sty = style : sty = "<style>" + style + "</style>";
  }
  return dom + sty;
}
function parse(html) {
  // 函数匹配式
  var reg = /*#__PURE__*/_wrapRegExp(/([a-zA-Z][a-zA-z0-9]+)\((.*?)\)/g, {
    name: 1,
    param: 2
  });
  var reHtml = html.replaceAll('\n', '');
  var groups = reHtml.matchAll(reg, 'g');
  var result = [];
  for (var _iterator = _createForOfIteratorHelperLoose(groups), _step; !(_step = _iterator()).done;) {
    var i = _step.value;
    var m = i.groups;
    var param = m.param;
    var params = param.replace(' ', '').split(',');
    var re = {
      name: m.name,
      params: params
    };
    result.push(re);
  }

  // 去重
  var obj = {};
  result = result.reduce(function (total, next) {
    obj[next.name] ? '' : obj[next.name] = true && total.push(next);
    return total;
  }, []);
  return {
    dom: reHtml,
    funcObjs: result
  };
}

// 该数据是否为字面量
function isLiteral(_) {
  // 判断是否为字符串
  if (_.startsWith('"') || _.startsWith("'")) return true;
  // 判断是否为数字
  if (typeof +_ === "number") return true;
  if (_ === "true" || _ === "false") return true;

  // 还未考虑是否为对象
  return false;
}

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
  key: 'addChildNode',
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
  img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMzQgMzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5LiL57qn6IqC54K5PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjE0IiB5PSIxOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjciIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgbWFza0NvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIG1hc2tVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHg9IjAiIHk9IjAiIHdpZHRoPSIxNiIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5Zu65a6aIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzM2LjAwMDAwMCwgLTI3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTLlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Mi4wMDAwMDAsIDI0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuS4i+e6p+iKgueCuSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU0LjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i6YCP5piO5bqV5Zu+IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70tNiIgc3Ryb2tlPSIjODE4MTg3IiB4PSI0LjUiIHk9IjguNSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjYiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMjIiIHgyPSIxNCIgeTI9IjIyIiBpZD0i55u057q/LTciIHN0cm9rZT0iIzgxODE4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMTUiIHgyPSIxMiIgeTI9IjIyIiBpZD0i55u057q/LTYiIHN0cm9rZT0iIzgxODE4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0i55+p5b2i5aSH5Lu9LTUiIHN0cm9rZT0iIzlDOUNBNSIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
  /**
   * @description 通过此函数你可以自由地自定义工具栏的样式 采用影子dom 使得style相互隔离
   * @param self 此配置项自身
   * @param dom 插件提供的包含容器 即你创建的dom的外部div对象
   * @return string dom字符串
   * */
  closeOther: true
}, {
  key: 'relayout',
  name: '重新布局',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">\n' + '    <title>重新布局下一级</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-577.000000, -138.000000)" stroke="#818187">\n' + '            <g id="编组-2" transform="translate(253.000000, 135.000000)">\n' + '                <g id="仅重布局子集" transform="translate(324.000000, 3.000000)">\n' + '                    <rect id="矩形备份-6" x="7.5" y="7.5" width="19" height="19" rx="1"/>\n' + '                    <line x1="7.5" y1="13.5" x2="26.5" y2="13.5" id="直线-11" stroke-linecap="square"/>\n' + '                    <line x1="14.325" y1="18.5" x2="26.325" y2="18.5" id="直线-11备份-4" stroke-linecap="square"/>\n' + '                    <line x1="14.325" y1="23.5" x2="26.325" y2="23.5" id="直线-11备份-5" stroke-linecap="square"/>\n' + '                    <line x1="13.5" y1="13.5" x2="13.5" y2="25.5" id="直线-11备份" stroke-linecap="square"/>\n' + '                    <line x1="17.5" y1="13.5" x2="17.5" y2="25.5" id="直线-11备份-2" stroke-linecap="square"/>\n' + '                    <line x1="22.5" y1="13.5" x2="22.5" y2="25.5" id="直线-11备份-3" stroke-linecap="square"/>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
  event: 'click',
  func: function func(self, pen, dom, father) {
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
  key: 'relayoutNext',
  description: '',
  name: '重新布局下一级',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 34 34" version="1.1">\n' + '    <title>重新布局</title>\n' + '    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' + '        <g id="未固定" transform="translate(-531.000000, -138.000000)" stroke="#818187">\n' + '            <g id="编组-2" transform="translate(253.000000, 135.000000)">\n' + '                <g id="重新布局" transform="translate(278.000000, 3.000000)">\n' + '                    <rect id="矩形备份-6" x="7.5" y="7.5" width="19" height="19" rx="1"/>\n' + '                    <line x1="7.5" y1="13.5" x2="26.5" y2="13.5" id="直线-11" stroke-linecap="square"/>\n' + '                    <line x1="13.5" y1="13.5" x2="13.5" y2="25.5" id="直线-11备份" stroke-linecap="square"/>\n' + '                </g>\n' + '            </g>\n' + '        </g>\n' + '    </g>\n' + '</svg>',
  event: 'click',
  func: function func(self, pen) {
    var _pen$mind2;
    var children = ((_pen$mind2 = pen.mind) == null ? void 0 : _pen$mind2.children) || [];
    if (children.length > 0) {
      toolBoxPlugin.update(pen, false);
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
  closeChildDomEvent: 'mouseleave',
  /**
   * @description 初始化函数
   * @param self 配置项本身
   * @param pen 木匾画笔
   */
  init: function init(self, pen) {
    self.dash = pen.lineDash ? pen.lineDash[0] + "," + pen.lineDash[1] : '0,0';
    self.width = pen.lineWidth;
    self.color = pen.color || '#000';
  },
  setDom: function setDom(self) {
    var color = self.color;
    var dash = self.dash;
    var width = self.width;
    var HTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34px\" height=\"34px\" viewBox=\"0 0 34 34\" version=\"1.1\">\n                    <title>\u8FB9\u6846\u6837\u5F0F</title>\n                    <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                        <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-628.000000, -138.000000)\">\n                            <g id=\"\u7F16\u7EC4-2\" transform=\"translate(253.000000, 135.000000)\">\n                                <g id=\"\u8FB9\u6846\u989C\u8272\" transform=\"translate(375.000000, 3.000000)\">\n                                    <rect id=\"\u900F\u660E\u5E95\u56FE\" fill-opacity=\"0\" fill=\"#FFFFFF\" x=\"0\" y=\"0\" width=\"34\" height=\"34\"/>\n                                    <circle id=\"\u692D\u5706\u5F62\" stroke=\"" + color + "\" stroke-width=\"" + width + "\" cx=\"17\" cy=\"17\" r=\"8\" stroke-dasharray=\"" + dash + "\"/>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </svg>";
    return HTML;
  },
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
      padding: '16px',
      width: '140px',
      boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
    });
    dom.attachShadow({
      mode: 'open'
    });
    var str = template(self, {
      template: "\n          <div class=\"container\">\n              <div class=\"item\">\n                <div class=\"title\">\u8FB9\u6846\u7C97\u7EC6</div>\n                <div class=\"main\">\n                  <input type=\"range\" max=\"10\" style=\"width: 81px\" onchange=\"sliderChange(this.value)\" id=\"width\" value=\"" + self.width + "\">  <span id=\"t\" style=\"display:block;vertical-align: top;margin-left: 10px;width: 41px;height: 20px;background-color:#f7f7f9;text-align: center;line-height: 20px\">" + self.width + "</span>\n                </div>\n              </div>\n                  <div class=\"item\">\n                <div class=\"title\">\u8FB9\u6846\u6837\u5F0F</div>\n                <div class=\"main_style \">\n                  <div class=\"style_item " + (self.dash === '0,0' ? 'style_active' : '') + "\" data-style=\"\u76F4\u7EBF\" onclick=\"setOutLineStyle(true)\">\n                     <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"50px\" height=\"2px\" viewBox=\"0 0 78 2\" version=\"1.1\">\n                        <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\">\n                            <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-402.000000, -306.000000)\" stroke=\"#000000\" stroke-width=\"2\">\n                                <line x1=\"403\" y1=\"307\" x2=\"479\" y2=\"307\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-9\"/>\n                            </g>\n                        </g>\n                    </svg>\n                  </div>\n                  <div class=\"style_item " + (self.dash !== '0,0' ? 'style_active' : '') + "\" data-style=\"\u865A\u7EBF\" onclick=\"setOutLineStyle(false)\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"50px\" height=\"2px\" viewBox=\"0 0 78 2\" version=\"1.1\">\n                        <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-dasharray=\"4\" stroke-linecap=\"round\">\n                            <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-402.000000, -306.000000)\" stroke=\"#000000\" stroke-width=\"2\">\n                                <line x1=\"403\" y1=\"307\" x2=\"479\" y2=\"307\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-9\"/>\n                            </g>\n                        </g>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"title\">\u8FB9\u6846\u989C\u8272                     \n                <label for=\"color\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"18px\" height=\"17px\" viewBox=\"0 0 18 17\" version=\"1.1\">\n    <title>\u5438\u7BA1</title>\n    <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-279.000000, -349.000000)\" stroke=\"#818187\">\n            <g id=\"\u7F16\u7EC4-6\u5907\u4EFD-2\" transform=\"translate(208.000000, 188.000000)\">\n                <g id=\"\u5438\u7BA1\" transform=\"translate(72.062370, 161.000000)\">\n                    <g id=\"\u7F16\u7EC4-8\" transform=\"translate(7.937630, 8.095196) rotate(-315.000000) translate(-7.937630, -8.095196) translate(4.036351, 0.770971)\">\n                        <path d=\"M4.96179031,5.89679753 L4.96179031,10.0040546 C4.96179031,10.4930202 4.63081262,10.9045357 4.18105852,11.0275164 L4.18153455,13.8681947 L3.62149907,11.0275164 C3.17174496,10.9045357 2.84076728,10.4930202 2.84076728,10.0040546 L2.84076728,5.89679753 L4.96179031,5.89679753 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"/>\n                        <path d=\"M3.90127879,0.5 C4.40959264,0.5 4.86978446,0.706034895 5.20289782,1.03914825 C5.53601117,1.37226161 5.74204607,1.83245343 5.74204607,2.34076728 L5.74204607,5.66776861 L2.06051152,5.66776861 L2.06051152,2.34076728 C2.06051152,1.83245343 2.26654641,1.37226161 2.59965977,1.03914825 C2.93277313,0.706034895 3.39296495,0.5 3.90127879,0.5 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"/>\n                        <line x1=\"0.390127879\" y1=\"5.78228307\" x2=\"7.41242971\" y2=\"5.78228307\" id=\"\u76F4\u7EBF-13\" stroke-linecap=\"round\"/>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>                  \n                  </div>\n                  <input id=\"color\" style=\"display: none\" type=\"color\" onchange=\"setColor(event,this.value)\" value=\"" + self.color + "\">\n                </label>                \n                     <div class=\"main\">\n\n                     <div class=\"colorList\" onclick=\"setColor(event)\">\n                     " + self.colorList.map(function (i, index) {
        return "<span class=\"color_item " + (self.color === i ? 'active' : '') + "\" style=\"background-color: " + i + ";border: 3px solid " + i + "\" data-color=\"" + i + "\"></span>";
      }).join('') + "\n                     </div>\n                </div>\n              </div>\n          </div>",
      scripts: {
        // 能在这里面获取到dom
        mounted: function mounted() {// 生命周期函数
        },
        setOutLineStyle: function setOutLineStyle(style) {
          var res = style ? [0, 0] : [5, 5];
          meta2d.setValue({
            id: pen.id,
            lineDash: res
          });
          // toolbox.renderChildren()
          self.dash = res.join(',');
          self.update('title');
          self.update('child', true);
        },
        sliderChange: function sliderChange(value) {
          self.width = value;
          // toolbox.renderChildren()
          meta2d.setValue({
            id: pen.id,
            lineWidth: value
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
          meta2d.setValue({
            id: pen.id,
            color: color
          });
          pen.mind.color = color;
          self.color = color;
          self.updateAll();
        }
      },
      style: "<style>\n        .container {\n            overflow: hidden;\n        }\n        .main {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-around;\n            align-items: center;\n        }\n        .style_active{\n            width: 30%;\n            background-color:#fff;\n            height: 20px;\n            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\n            border-radius: 3px;\n        }\n        .active{\n            border: 3px solid deepskyblue !important;\n        }\n        .colorList {\n            display: flex;\n            justify-content: space-between;\n            align-content: space-between;\n            flex-wrap: wrap;\n        }       \n        .main_style {\n            display: flex;\n            width: 100%;\n            height: 30px;\n            justify-content: space-around;\n            align-items: center;\n            border-radius: 3px;\n            background-color:#f7f7f9;\n        }\n        .style_item {\n            width:47%;\n            height: 22px;\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n            justify-content: center;\n        }\n        .color_item {\n            width: 20px;\n            height: 20px;\n            border: 3px solid;\n            margin: 5px 5px 5px 0;\n            border-radius: 2px;\n        }\n        .color_item:hover {\n            border: 3px solid rgba(128,128,128,0.5) !important;\n        }\n       .item {\n          display:flex;\n          justify-content: flex-start;\n          align-items: flex-start;\n          flex-direction: column;\n          margin-bottom: 14px;\n       }\n       .title {\n          width: 100%;\n          height: 17px;\n          font-size: 16px;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          font-family: PingFang SC, PingFang SC-Regular;\n          font-weight: 400;\n          text-align: left;\n          color: #7d7878;\n          line-height: 17px;\n          margin-bottom: 14px;\n        }\n    </style> \n        "
    });
    dom.shadowRoot.innerHTML = str;
    return dom;
  } // children: [
  //   {
  //     name:'直线',
  //     event: 'click',
  //     func(self, pen, dom, father) {
  //       meta2d.setValue({id:pen.id,lineDash:[0,0]})
  //       father.dash = '0,0';
  //       toolbox.renderChildren()
  //     }
  //   },
  //   {
  //     name:'虚线',
  //     event: 'click',
  //     func(self, pen, dom, father) {
  //       meta2d.setValue({id:pen.id,lineDash:[5,5]})
  //       father.dash = '5,5';
  //       toolbox.renderChildren()
  //     }
  //   }
  // ]
}, {
  key: 'lineStyle',
  name: '线条样式',
  color: '#4D4DFF',
  lineStyle: 'curve',
  width: 3,
  init: function init(self, pen) {
    self.color = pen.mind.lineColor || pen.calculative.color || '#000';
    self.lineStyle = pen.mind.lineStyle || meta2d.findOne(pen.mind.rootId).mind.lineStyle;
    self.width = meta2d.findOne(pen.mind.rootId).mind.lineWidth;
  },
  setDom: function setDom(self) {
    var html = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"34px\" height=\"34px\" viewBox=\"0 0 34 34\" version=\"1.1\">\n        <title>\u8FDE\u7EBF\u6837\u5F0F</title>\n        <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-674.000000, -138.000000)\">\n            <g id=\"\u7F16\u7EC4-2\" transform=\"translate(253.000000, 135.000000)\">\n              <g id=\"\u8FDE\u7EBF\u989C\u8272\" transform=\"translate(421.000000, 3.000000)\">\n                <rect id=\"\u900F\u660E\u5E95\u56FE\" fill-opacity=\"0\" fill=\"#FFFFFF\" x=\"0\" y=\"0\" width=\"34\" height=\"34\"/>\n                <line x1=\"7.5\" y1=\"17.5\" x2=\"27.5\" y2=\"17.5\" id=\"\u76F4\u7EBF-9\" stroke=\"" + self.color + "\" stroke-dasharray=\"" + self.dash + "\" stroke-width=\"" + self.width + "\" stroke-linecap=\"round\"/>\n              </g>\n            </g>\n          </g>\n        </g>\n      </svg>";
    return html;
  },
  /**
   * @description 设置下拉框的样式，你也可以使用webComponent，或者将vue组件转换为webComponent
   * @param self 本配置对象
   * @param pen 返回当前pen对象
   * @param dom 返回此容器dom
   * */
  colorList: ['#00000000', '#5757F3', '#fa7878', '#8C8CFF', '#19f1cc', '#6ffd97', '#efe864', '#ff931a'],
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
      padding: '16px',
      width: '140px',
      boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
    });
    dom.attachShadow({
      mode: 'open'
    });
    var str = template(self, {
      template: "\n          <div class=\"container\">\n                <div class=\"item\">\n                <div class=\"title\">\u7EBF\u6761\u7C97\u7EC6</div>\n                <div class=\"main\">\n                  <input type=\"range\" max=\"10\" style=\"width: 81px\" onchange=\"sliderChange(this.value)\" id=\"width\" value=\"" + self.width + "\">  <span id=\"t\" style=\"display:block;vertical-align: top;margin-left: 10px;width: 41px;height: 20px;background-color:#f7f7f9;text-align: center;line-height: 20px\">" + self.width + "</span>\n                </div>\n              </div>\n            <div class=\"item\">\n                <div class=\"title\">\u8FDE\u7EBF\u6837\u5F0F</div>\n                <div class=\"main_style \">\n                  <div class=\"style_item " + (self.lineStyle === 'curve' ? 'style_active' : '') + "\" data-style=\"\u66F2\u7EBF\" onclick=\"setLineStyle(true)\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"50px\" height=\"20px\">\n                  <g fill=\"none\" stroke=\"black\" stroke-width=\"1\">\n                    <path d=\"M0 9 a100,50 0 0,1 85,0\"></path>\n                  </g>\n                </svg>\n                  </div>\n                  <div class=\"style_item " + (self.lineStyle === 'polyline' ? 'style_active' : '') + "\" data-style=\"\u6298\u7EBF\" onclick=\"setLineStyle(false)\">\n                     <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"50px\" height=\"20px\">\n                    <g fill=\"none\" stroke=\"black\" stroke-width=\"1\">\n                      <path d=\"M0 4 l25 0 l0 12 l40 0\"></path>\n                    </g>\n                  </svg>\n                  </div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"title\">\u8FDE\u7EBF\u989C\u8272                     \n                <label for=\"color\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"18px\" height=\"17px\" viewBox=\"0 0 18 17\" version=\"1.1\">\n    <title>\u5438\u7BA1</title>\n    <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-279.000000, -349.000000)\" stroke=\"#818187\">\n            <g id=\"\u7F16\u7EC4-6\u5907\u4EFD-2\" transform=\"translate(208.000000, 188.000000)\">\n                <g id=\"\u5438\u7BA1\" transform=\"translate(72.062370, 161.000000)\">\n                    <g id=\"\u7F16\u7EC4-8\" transform=\"translate(7.937630, 8.095196) rotate(-315.000000) translate(-7.937630, -8.095196) translate(4.036351, 0.770971)\">\n                        <path d=\"M4.96179031,5.89679753 L4.96179031,10.0040546 C4.96179031,10.4930202 4.63081262,10.9045357 4.18105852,11.0275164 L4.18153455,13.8681947 L3.62149907,11.0275164 C3.17174496,10.9045357 2.84076728,10.4930202 2.84076728,10.0040546 L2.84076728,5.89679753 L4.96179031,5.89679753 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"/>\n                        <path d=\"M3.90127879,0.5 C4.40959264,0.5 4.86978446,0.706034895 5.20289782,1.03914825 C5.53601117,1.37226161 5.74204607,1.83245343 5.74204607,2.34076728 L5.74204607,5.66776861 L2.06051152,5.66776861 L2.06051152,2.34076728 C2.06051152,1.83245343 2.26654641,1.37226161 2.59965977,1.03914825 C2.93277313,0.706034895 3.39296495,0.5 3.90127879,0.5 Z\" id=\"\u5F62\u72B6\u7ED3\u5408\"/>\n                        <line x1=\"0.390127879\" y1=\"5.78228307\" x2=\"7.41242971\" y2=\"5.78228307\" id=\"\u76F4\u7EBF-13\" stroke-linecap=\"round\"/>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>                  \n                  </div>\n                  <input id=\"color\" style=\"display: none\" type=\"color\" onchange=\"setColor(event,this.value)\" value=\"" + self.color + "\">\n                </label>                \n                     <div class=\"main\">\n\n                     <div class=\"colorList\" onclick=\"setColor(event)\">\n                     " + self.colorList.map(function (i, index) {
        return "<span class=\"color_item " + (self.color === i ? 'active' : '') + "\" style=\"background-color: " + i + ";border: 3px solid " + i + "\" data-color=\"" + i + "\"></span>";
      }).join('') + "\n                     </div>\n                </div>\n              </div>\n          </div>",
      scripts: {
        sliderChange: function sliderChange(value) {
          dom.shadowRoot.querySelector('#t').innerHTML = value;
          self.width = value;
          // toolbox.renderChildren()
          // pen.connectedLines?.forEach(i=>{
          //   meta2d.setValue({
          //     id:i.lineId,
          //     lineWidth: value
          //   })
          // })
          var root = meta2d.findOne(pen.mind.rootId);
          root.mind.lineWidth = value;
          toolBoxPlugin.resetLineStyle(root);
          self.update('title');
        },
        setLineStyle: function setLineStyle(value) {
          var res = value ? 'curve' : 'polyline';
          // toolbox.renderChildren()

          var root = window.meta2d.findOne(pen.mind.rootId);
          root.mind.lineStyle = res;
          toolBoxPlugin.resetLineStyle(root);
          self.lineStyle = res;
          // toolBoxPlugin.update(root);
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
          (_pen$connectedLines = pen.connectedLines) == null || _pen$connectedLines.forEach(function (i) {
            meta2d.setValue({
              id: pen.id,
              'mind.lineColor': color
            });
          });
          self.color = color;
          toolBoxPlugin.update(pen);
          self.updateAll();
        }
      },
      style: "<style>\n        .container {\n            overflow: hidden;\n        }\n        .main {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-around;\n            align-items: center;\n        }\n        .style_active{\n            width: 30%;\n            background-color:#fff;\n            height: 20px;\n            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\n            border-radius: 3px;\n        }\n        .active{\n            border: 3px solid deepskyblue !important;\n        }\n        .colorList {\n            display: flex;\n            justify-content: space-between;\n            align-content: space-between;\n            flex-wrap: wrap;\n        }       \n        .main_style {\n            display: flex;\n            width: 100%;\n            height: 30px;\n            justify-content: space-around;\n            align-items: center;\n            border-radius: 3px;\n            background-color:#f7f7f9;\n        }\n        .style_item {\n            width:47%;\n            height: 22px;\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n            justify-content: center;\n        }\n        .color_item {\n            width: 20px;\n            height: 20px;\n            border: 3px solid;\n            margin: 5px 5px 5px 0;\n            border-radius: 2px;\n        }\n        .color_item:hover {\n            border: 3px solid rgba(128,128,128,0.5) !important;\n        }\n       .item {\n          display:flex;\n          justify-content: flex-start;\n          align-items: flex-start;\n          flex-direction: column;\n          margin-bottom: 14px;\n       }\n       .title {\n          width: 100%;\n          height: 17px;\n          font-size: 16px;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          font-family: PingFang SC, PingFang SC-Regular;\n          font-weight: 400;\n          text-align: left;\n          color: #7d7878;\n          line-height: 17px;\n          margin-bottom: 14px;\n        }\n    </style> \n        "
    });
    dom.shadowRoot.innerHTML = str;
    return dom;
  },
  closeChildDomEvent: 'none',
  event: 'mouseenter',
  func: function func(self, pen, dom) {
    self.open = true;
  }
}, {
  key: 'layoutDirection',
  name: '布局方式',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1698740367149" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="13181" width="34" height="20"><path d="M914.752 292.608c26.112 0 47.232 21.12 47.232 47.296v577.088c0 26.112-21.12 47.232-47.232 47.232H110.4a47.232 47.232 0 0 1-47.296-47.232V339.904c0-26.112 21.12-47.296 47.296-47.296h804.352z m-6.72 54.016H117.12v563.648h790.848V346.624z" p-id="13182"/><path d="M957.44 484.992v64H62.08v-64z" p-id="13183"/><path d="M957.44 484.992v64H62.08v-64zM409.536 735.36l63.104-0.128 0.896 198.528-63.104 0.192zM561.472 600.32l63.168-0.064 0.832 333.568-63.232 0.128zM578.368 62.016c8.704 0 15.744 7.04 15.744 15.744v268.864H430.976V77.76c0-8.704 7.04-15.744 15.744-15.744h131.648z m-38.272 54.016h-55.04v176.64h55.04v-176.64z" p-id="13184"/></svg>',
  closeChildDom: function closeChildDom(dom) {
    // dom.style.top = 0
    // dom.style.opacity = 0
    return false;
  },
  onHideChildDom: function onHideChildDom() {},
  direction: 'right',
  childrenGap: 20,
  levelGap: 0,
  init: function init(self, pen) {
    self.direction = pen.mind.direction;
    self.childrenGap = toolBoxPlugin.childrenGap;
    self.levelGap = toolBoxPlugin.levelGap;
  },
  activeDirection: function activeDirection(self, pen, dom) {
    var rootDom = dom.querySelector('.main');
    var divs = rootDom.querySelectorAll('div');
    var index = ['right', 'left', 'top', 'bottom'].findIndex(function (i) {
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
    self.childrenGap = toolBoxPlugin.childrenGap;
    self.levelGap = toolBoxPlugin.levelGap;
  },
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
      padding: '16px',
      zIndex: 999,
      width: '170px',
      boxShadow: '0px 6px 20px rgba(25,25,26,.06), 0px 2px 12px rgba(25,25,26,.04)'
    }, '', undefined, 'root');
    var str = template(self, {
      template: "\n          <div class=\"container\">\n              <div class=\"item\">\n                <div class=\"title\">\u5E03\u5C40\u65B9\u5411</div>\n                <div class=\"main\" >\n                    <div onclick=\"setDirection('right')\" >\n                        <svg class=\"main_item\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"76px\" height=\"50px\" viewBox=\"0 0 76 50\" version=\"1.1\">\n                          <title>\u5411\u53F3\u5E03\u5C40</title>\n                         <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                              <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-633.000000, -684.000000)\">\n                                <g id=\"\u7F16\u7EC4-6\u5907\u4EFD\" transform=\"translate(525.000000, 423.000000)\">\n                                     <g id=\"\u5E03\u5C40\u5907\u4EFD-9\" transform=\"translate(108.000000, 261.000000)\">\n                                          <rect class=\"toolbox_direction_svg_base\" id=\"\u5077\u6478\u5E95\u56FE\" fill=\"#F8F8FC\" x=\"0\" y=\"0\" width=\"76\" height=\"50\" rx=\"2\"/>\n                                          <g id=\"\u7F16\u7EC4-3\" transform=\"translate(20.000000, 7.000000)\">\n                                              <line class=\"toolbox_direction_svg\" x1=\"13.5\" y1=\"18.5\" x2=\"22.969697\" y2=\"18.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-2\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                              <rect class=\"toolbox_direction_svg_line\" id=\"\u77E9\u5F62\" stroke=\"#818187\" x=\"0.5\" y=\"15.5\" width=\"13\" height=\"5\" rx=\"2\"/>\n                                              <path class=\"toolbox_direction_svg_line\" d=\"M28,35 C22.4771525,35 18,27.836556 18,19 C18,10.163444 22.4771525,3 28,3\" id=\"\u8DEF\u5F84\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-11\" fill=\"#DDDDE1\" x=\"25\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-12\" fill=\"#DDDDE1\" x=\"25\" y=\"16\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-13\" fill=\"#DDDDE1\" x=\"25\" y=\"32\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                          </g>\n                                      </g>\n                                 </g>\n                              </g>\n                          </g>\n                        </svg>\n                    </div>\n                    \n                    <div onclick=\"setDirection('left')\"  >                    \n                      <svg class=\"main_item\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"76px\" height=\"50px\" viewBox=\"0 0 76 50\" version=\"1.1\">\n                          <title>\u5411\u5DE6\u5E03\u5C40</title>\n                          <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                              <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-541.000000, -684.000000)\">\n                                  <g id=\"\u7F16\u7EC4-6\u5907\u4EFD\" transform=\"translate(525.000000, 423.000000)\">\n                                      <g id=\"\u5E03\u5C40\u5907\u4EFD-8\" transform=\"translate(16.000000, 261.000000)\">\n                                          <rect class=\"toolbox_direction_svg_base\" id=\"\u900F\u660E\u5E95\u56FE\" fill=\"#F8F8FC\" x=\"0\" y=\"0\" width=\"76\" height=\"50\" rx=\"2\"/>\n                                          <g id=\"\u7F16\u7EC4-3\" transform=\"translate(37.500000, 25.500000) scale(-1, 1) translate(-37.500000, -25.500000) translate(20.000000, 7.000000)\">\n                                             <line class=\"toolbox_direction_svg\" x1=\"13.5\" y1=\"18.5\" x2=\"22.969697\" y2=\"18.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-2\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                              <rect class=\"toolbox_direction_svg_line\" id=\"\u77E9\u5F62\" stroke=\"#818187\" x=\"0.5\" y=\"15.5\" width=\"13\" height=\"5\" rx=\"2\"/>\n                                              <path class=\"toolbox_direction_svg_line\" d=\"M28,35 C22.4771525,35 18,27.836556 18,19 C18,10.163444 22.4771525,3 28,3\" id=\"\u8DEF\u5F84\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-11\" fill=\"#DDDDE1\" x=\"25\" y=\"0\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-12\" fill=\"#DDDDE1\" x=\"25\" y=\"16\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                              <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-13\" fill=\"#DDDDE1\" x=\"25\" y=\"32\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                          </g>\n                                      </g>\n                                  </g>+\n                              </g>\n                          </g>\n                      </svg>                           \n                    </div>\n                    \n                    <div onclick=\"setDirection('top')\" >\n                      <svg class=\"main_item\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"76px\" height=\"50px\" viewBox=\"0 0 76 50\" version=\"1.1\">\n                        <title>\u5411\u4E0A\u5E03\u5C40</title>\n                        <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                            <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-633.000000, -616.000000)\">\n                                <g id=\"\u7F16\u7EC4-6\u5907\u4EFD\" transform=\"translate(525.000000, 423.000000)\">\n                                    <g id=\"\u5E03\u5C40\u5907\u4EFD-7\" transform=\"translate(108.000000, 193.000000)\">\n                                        <rect class=\"toolbox_direction_svg_base\" id=\"\u900F\u660E\u5E95\u56FE\" fill=\"#F8F8FC\" x=\"0\" y=\"0\" width=\"76\" height=\"50\" rx=\"2\"/>\n                                        <g id=\"\u7F16\u7EC4-3\" transform=\"translate(38.000000, 25.250000) scale(1, -1) rotate(-270.000000) translate(-38.000000, -25.250000) translate(25.750000, 0.750000)\">\n                                            <line class=\"toolbox_direction_svg\" x1=\"6.06363636\" y1=\"25.5\" x2=\"15.5333333\" y2=\"25.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-2\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                            <rect class=\"toolbox_direction_svg_line\" id=\"\u77E9\u5F62\" stroke=\"#818187\" transform=\"translate(3.000000, 25.500000) rotate(-90.000000) translate(-3.000000, -25.500000) \" x=\"-3.5\" y=\"23\" width=\"13\" height=\"5\" rx=\"2\"/>\n                                            <path class=\"toolbox_direction_svg_line\" d=\"M17.8386311,43 C15.0303966,40.513797 13,33.3135934 13,24.8187892 C13,16.7047472 14.8524591,9.77185117 17.465812,7\" id=\"\u8DEF\u5F84\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-11\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 44.000000) rotate(-90.000000) translate(-22.000000, -44.000000) \" x=\"17\" y=\"41.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-12\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) \" x=\"17\" y=\"22.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-13\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 5.000000) rotate(-90.000000) translate(-22.000000, -5.000000) \" x=\"17\" y=\"2.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                        </g>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                      </svg>\n                    </div>\n                    \n                    <div onclick=\"setDirection('bottom')\">                  \n                      <svg class=\"main_item\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"76px\" height=\"50px\" viewBox=\"0 0 76 50\" version=\"1.1\">\n                        <title>\u5411\u4E0B\u5E03\u5C40</title>\n                        <g id=\"\u9875\u9762-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                           <g id=\"\u672A\u56FA\u5B9A\" transform=\"translate(-725.000000, -480.000000)\">\n                                <g id=\"\u7F16\u7EC4-6\u5907\u4EFD\" transform=\"translate(525.000000, 423.000000)\">\n                                    <g id=\"\u5E03\u5C40\u5907\u4EFD-2\" transform=\"translate(200.000000, 57.000000)\">\n                                        <rect class=\"toolbox_direction_svg_base\" id=\"\u900F\u660E\u5E95\u56FE\" fill=\"#F8F8FC\" x=\"0\" y=\"0\" width=\"76\" height=\"50\" rx=\"2\"/>\n                                        <g id=\"\u7F16\u7EC4-3\" transform=\"translate(38.000000, 25.250000) rotate(-270.000000) translate(-38.000000, -25.250000) translate(25.750000, 0.750000)\">\n                                            <line x1=\"6.06363636\" y1=\"25.5\" x2=\"15.5333333\" y2=\"25.5\" id=\"\u76F4\u7EBF-12\u5907\u4EFD-2\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                            <rect class=\"toolbox_direction_svg_line\" id=\"\u77E9\u5F62\" stroke=\"#818187\" transform=\"translate(3.000000, 25.500000) rotate(-90.000000) translate(-3.000000, -25.500000) \" x=\"-3.5\" y=\"23\" width=\"13\" height=\"5\" rx=\"2\"/>\n                                            <path class=\"toolbox_direction_svg_line\" d=\"M17.8386311,43 C15.0303966,40.513797 13,33.3135934 13,24.8187892 C13,16.7047472 14.8524591,9.77185117 17.465812,7\" id=\"\u8DEF\u5F84\" stroke=\"#818187\" stroke-linecap=\"round\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-11\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 44.000000) rotate(-90.000000) translate(-22.000000, -44.000000) \" x=\"17\" y=\"41.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-12\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 25.000000) rotate(-90.000000) translate(-22.000000, -25.000000) \" x=\"17\" y=\"22.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                            <rect class=\"toolbox_direction_svg\" id=\"\u77E9\u5F62\u5907\u4EFD-13\" fill=\"#DDDDE1\" transform=\"translate(22.000000, 5.000000) rotate(-90.000000) translate(-22.000000, -5.000000) \" x=\"17\" y=\"2.5\" width=\"10\" height=\"5\" rx=\"2\"/>\n                                        </g>\n                                   </g>\n                                </g>\n                            </g>\n                        </g>\n                      </svg>\n                    </div>\n                </div>\n              </div>\n              \n              <div class=\"item\">\n                <div class=\"title\">\u95F4\u9694\u8BBE\u7F6E</div>\n                <div class=\"main\">\n                    <div class=\"number_container\">\n                     <div class=\"number_item\">\n                        <div class=\"flag\">\u540C\u7EA7\u95F4\u9694</div>\n                        <div class=\"number\">                        \n                            <input type=\"number\" onchange=\"setChildGap(this.value)\" value=\"" + self.childrenGap + "\"/>\n                        </div>\n                    </div>\n                     <div class=\"number_item\">\n                        <div class=\"flag\">\u5B50\u7EA7\u95F4\u9694</div>\n                        <div class=\"number\">                        \n                            <input type=\"number\" onchange=\"setLevelGap(this.value)\" value=\"" + self.levelGap + "\"/>\n                        </div>\n                    </div>\n                  </div>\n                   \n                </div>\n              </div>\n          </div>",
      scripts: {
        // 能在这里面获取到dom
        mounted: function mounted() {// 生命周期函数
        },
        setChildGap: function setChildGap(value) {
          self.childrenGap = value;
          toolBoxPlugin.childrenGap = value;
          toolBoxPlugin.update(meta2d.findOne(pen.mind.rootId));
        },
        setLevelGap: function setLevelGap(value) {
          self.levelGap = value;
          toolBoxPlugin.levelGap = value;
          toolBoxPlugin.update(meta2d.findOne(pen.mind.rootId));
        },
        setDirection: function setDirection(e) {
          var root = window.meta2d.findOne(pen.mind.rootId);
          toolBoxPlugin.resetLinePos(root, e, true);
          toolBoxPlugin.update(root);
          self.direction = e;
          self.activeDirection(self, pen, dom);
        }
      },
      style: "<style>\n        .container {\n            overflow: hidden;\n        }\n        .flag{\n            font-size: 14px;\n        }\n        .number{\n            height:30px;\n            display: flex;\n            border: 1px solid #f7f7f9;\n            border-radius: 5px;\n            justify-content: space-around;\n            align-items: center;\n            background-color: #f7f7f9;\n        }\n        .number_container{\n            display: flex;\n            width: 100%;\n            justify-content: space-between;\n            align-items: center;\n            flex-direction: column;\n        }\n        .number_item{\n            width: 100%;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            margin-top: 14px;\n        }\n        .number input{\n            width: 70px;\n            height: 100%;\n            outline: none;\n            background-color:#f7f7f9;\n            border: 1px solid #f7f7f9;\n            border-radius: 5px;            \n            font-size: 16px;\n            text-indent: 10px;\n        }\n        .number_control{\n            width: 20%;\n            display: flex;\n            flex-direction: column;\n            transform: translateY(-3px);\n            margin-right: 6px;\n        }\n        .number_control_item{\n            display:block;\n            flex:1;\n            font-size: 25px;\n            width: 30px;\n            height: 15px;\n        }\n        .number_control_item:hover {\n            color: #484848;\n        }\n        .main {\n            display: flex;\n            flex-direction: row;\n            width: 100%;\n            flex-wrap: wrap;\n            justify-content: space-around;\n            align-content: center;\n        }\n        .main_item{\n            margin-top: 5px;\n        }\n        .main_item:hover{\n            outline: 3px solid rgba(87,87,243,0.51);\n        }\n        .active{\n        }\n       .item {\n          display:flex;\n          justify-content: flex-start;\n          align-items: flex-start;\n          flex-direction: column;\n          margin-bottom: 14px;\n       }\n       .title {\n          width: 100%;\n          height: 17px;\n          font-size: 16px;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          font-family: PingFang SC, PingFang SC-Regular;\n          font-weight: 400;\n          text-align: left;\n          color: #7d7878;\n          line-height: 17px;\n          margin-bottom: 14px;\n        }\n    </style> \n        "
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
  },
  closeChildDomEvent: 'none'
}, {
  key: 'addSiblingNode',
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

var defaultFuncs$$1 = {
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
    if (_Array$isArray(key)) {
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
var defaultFuncList$$1 = {
  'root': funcList.filter(function (i) {
    return i.key !== 'addSiblingNode';
  }),
  'leaf': defaultFuncs$$1.getFunc('addChildNode', 'addSiblingNode', 'relayout', 'relayoutNext', 'nodeStyle', 'lineStyle')
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
      topHeight += (((_children = children[_i - 1]) == null || (_children = _children.mind) == null ? void 0 : _children.maxHeight) || 0) + (children[_i - 1] ? +toolBoxPlugin.childrenGap : 0);
      topWidth += (((_children2 = children[_i - 1]) == null || (_children2 = _children2.mind) == null ? void 0 : _children2.maxWidth) || 0) + (children[_i - 1] ? +toolBoxPlugin.childrenGap : 0);
      var nodeColor = pen.mind.color || generateColorFunc.next().value;
      switch (position) {
        case 'right':
          _child.mind.x = worldReact.x + worldReact.width + +toolBoxPlugin.levelGap;
          _child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1 / 2 * worldReact.height + (((_child$mind = _child.mind) == null ? void 0 : _child$mind.maxHeight) / 2 - 1 / 2 * penRects[_i].height || 0);
          break;
        case 'left':
          _child.mind.x = worldReact.x - penRects[_i].width - +toolBoxPlugin.levelGap;
          _child.mind.y = worldReact.y - 1 / 2 * pen.mind.maxHeight + topHeight + 1 / 2 * worldReact.height + (((_child$mind2 = _child.mind) == null ? void 0 : _child$mind2.maxHeight) / 2 - 1 / 2 * penRects[_i].height || 0);
          break;
        case 'bottom':
          _child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1 / 2 * worldReact.width + (((_child$mind3 = _child.mind) == null ? void 0 : _child$mind3.maxWidth) / 2 - 1 / 2 * penRects[_i].width || 0);
          _child.mind.y = worldReact.y + _child.height + +toolBoxPlugin.levelGap;
          break;
        case 'top':
          _child.mind.x = worldReact.x - 1 / 2 * pen.mind.maxWidth + topWidth + 1 / 2 * worldReact.width + (((_child$mind4 = _child.mind) == null ? void 0 : _child$mind4.maxWidth) / 2 - 1 / 2 * penRects[_i].width || 0);
          _child.mind.y = worldReact.y - _child.height - +toolBoxPlugin.levelGap;
      }
      if (!_child.mind.color) _child.mind.color = nodeColor;
      if (_child.mind.visible) {
        meta2d.setValue({
          id: _child.id,
          x: _child.mind.x,
          y: _child.mind.y,
          color: _child.mind.color
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
    meta2d.setValue({
      id: line.id,
      lineWidth: meta2d.findOne(pen.mind.rootId).mind.lineWidth
    }, {
      render: false
    });
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
        line.mind.color = pen.mind.lineColor || pen.mind.color || colors.next().value;
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
    var root = meta2d.findOne(pen.mind.rootId);
    for (var i = 0; i < children.length; i++) {
      var _child$connectedLines2;
      var child = children[i];
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
        toolBoxPlugin.resetLineStyle(child, true);
      }
    }
  },
  // 重新设置连线的位置 TODO 有问题
  resetLinePos: function resetLinePos(pen, pos, recursion) {
    if (recursion === void 0) {
      recursion = true;
    }
    var children = pen.mind.children;
    if (!children || children.length === 0) {
      pen.mind.direction = pos;
      return;
    }
    for (var i = 0; i < children.length; i++) {
      var _child$connectedLines3;
      var child = children[i];
      if (!child.connectedLines || child.connectedLines.length === 0) return;
      var line = meta2d.findOne((_child$connectedLines3 = child.connectedLines[0]) == null ? void 0 : _child$connectedLines3.lineId);
      var penAnchor = null;
      var lineAnchor1 = line.anchors[0];
      var childAnchor = null;
      var lineAnchor2 = line.anchors[line.anchors.length - 1];

      // 改变之前是什么方向 来按要求断开
      switch (pen.mind.direction) {
        case 'right':
          penAnchor = pen.anchors[1];
          childAnchor = child.anchors[3];
          core.disconnectLine(child, childAnchor, line, lineAnchor2);
          core.disconnectLine(pen, penAnchor, line, lineAnchor1);
          break;
        case 'left':
          penAnchor = pen.anchors[3];
          childAnchor = child.anchors[1];
          core.disconnectLine(child, childAnchor, line, lineAnchor1);
          core.disconnectLine(pen, penAnchor, line, lineAnchor2);
          break;
        case 'bottom':
          penAnchor = pen.anchors[2];
          childAnchor = child.anchors[0];
          core.disconnectLine(child, childAnchor, line, lineAnchor2);
          core.disconnectLine(pen, penAnchor, line, lineAnchor1);
          break;
        case 'top':
          penAnchor = pen.anchors[0];
          childAnchor = child.anchors[2];
          core.disconnectLine(child, childAnchor, line, lineAnchor1);
          core.disconnectLine(pen, penAnchor, line, lineAnchor2);
          break;
      }
      switch (pos) {
        case 'right':
          penAnchor = pen.anchors[1];
          childAnchor = child.anchors[3];
          core.connectLine(pen, penAnchor, line, lineAnchor1);
          core.connectLine(child, childAnchor, line, lineAnchor2);
          break;
        case 'left':
          penAnchor = pen.anchors[3];
          childAnchor = child.anchors[1];
          core.connectLine(pen, penAnchor, line, lineAnchor2);
          core.connectLine(child, childAnchor, line, lineAnchor1);
          break;
        case 'bottom':
          penAnchor = pen.anchors[2];
          childAnchor = child.anchors[0];
          core.connectLine(pen, penAnchor, line, lineAnchor1);
          core.connectLine(child, childAnchor, line, lineAnchor2);
          break;
        case 'top':
          penAnchor = pen.anchors[0];
          childAnchor = child.anchors[2];
          core.connectLine(pen, penAnchor, line, lineAnchor2);
          core.connectLine(child, childAnchor, line, lineAnchor1);
          break;
      }
      if (recursion) {
        toolBoxPlugin.resetLinePos(child, pos, true);
        child.mind.direction = pos;
      }
    }
    pen.mind.direction = pos;
    meta2d.canvas.updateLines(pen);
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
  //             toolBoxPlugin.resetDirection(child,direction,true);
  //         }
  //     }
  // },
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
      if (pens && pens.length === 1 && pens[0].target === 'mind' && !pens[0].mind) {
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
          lineStyle: 'curve',
          childrenVisible: true,
          visible: true,
          lineWidth: 2
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
      maxHeight += +toolBoxPlugin.childrenGap * (children.length - 1);
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
      maxWidth += +toolBoxPlugin.childrenGap * (children.length - 1);
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
   * @description 自定义获取功能列表函数  返回值为最终展示的列表
   * @param target 当前pen图元*/
  getFuncList: function getFuncList(target) {
    return target.mind.isRoot ? toolBoxPlugin.funcList['root'] : toolBoxPlugin.funcList['leaf'];
  },
  /**
   * @description 动态添加方法函数
   * @param kind 添加到目标种类上
   * @param func 方法函数
   * */
  appendFuncList: function appendFuncList(kind) {
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
  //
  combineLifeCycle: function combineLifeCycle(target, del) {
    var _this3 = this;
    if (del === void 0) {
      del = false;
    }
    var toolbox = globalThis.toolbox;
    // const onMove = (targetPen)=>{
    //     toolbox.hide();
    // };
    var onDestroy = function onDestroy(targetPen) {
      toolbox.hide();
      toolBoxPlugin.deleteNode(targetPen);
    };
    var onMouseUp = function onMouseUp(targetPen) {
      toolbox.bindPen(targetPen);
      toolbox.setFuncList(_this3.getFuncList(target));
      toolbox.translatePosition(targetPen);
      toolbox.show();
    };
    var onMouseDown = function onMouseDown(targetPen) {
      toolbox.hide();
    };
    // setLifeCycleFunc(target,'onMove',onMove,del);
    mindDiagram.setLifeCycleFunc(target, 'onDestroy', onDestroy, del);
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
   * @param position 添加节点的位置 默认*/
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
exports.defaultFuncs = defaultFuncs$$1;
exports.defaultFuncList = defaultFuncList$$1;
exports.createDom = createDom;
exports.ToolBox = ToolBox;
