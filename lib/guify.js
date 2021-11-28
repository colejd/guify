(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/add-px-to-style/index.js":
/*!***********************************************!*\
  !*** ./node_modules/add-px-to-style/index.js ***!
  \***********************************************/
/***/ ((module) => {

/* The following list is defined in React's core */
var IS_UNITLESS = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

module.exports = function(name, value) {
  if(typeof value === 'number' && !IS_UNITLESS[ name ]) {
    return value + 'px';
  } else {
    return value;
  }
};

/***/ }),

/***/ "./src/component-manager.js":
/*!**********************************!*\
  !*** ./src/component-manager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentManager": () => (/* binding */ ComponentManager)
/* harmony export */ });
/* harmony import */ var _components_public_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/public/title */ "./src/components/public/title.js");
/* harmony import */ var _components_public_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/public/range */ "./src/components/public/range.js");
/* harmony import */ var _components_public_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/public/button */ "./src/components/public/button.js");
/* harmony import */ var _components_public_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/public/checkbox */ "./src/components/public/checkbox.js");
/* harmony import */ var _components_public_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/public/select */ "./src/components/public/select.js");
/* harmony import */ var _components_public_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/public/text */ "./src/components/public/text.js");
/* harmony import */ var _components_public_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/public/color */ "./src/components/public/color.js");
/* harmony import */ var _components_public_folder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/public/folder */ "./src/components/public/folder.js");
/* harmony import */ var _components_public_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/public/file */ "./src/components/public/file.js");
/* harmony import */ var _components_public_display__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/public/display */ "./src/components/public/display.js");
/* harmony import */ var _components_public_interval__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/public/interval */ "./src/components/public/interval.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












/**
 * Manages the loading and instantiation of Components.
 */

var ComponentManager = /*#__PURE__*/function () {
  function ComponentManager(theme) {
    _classCallCheck(this, ComponentManager);

    this.theme = theme;
    this.components = {
      "title": _components_public_title__WEBPACK_IMPORTED_MODULE_0__["default"],
      "range": _components_public_range__WEBPACK_IMPORTED_MODULE_1__["default"],
      "button": _components_public_button__WEBPACK_IMPORTED_MODULE_2__["default"],
      "checkbox": _components_public_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"],
      "select": _components_public_select__WEBPACK_IMPORTED_MODULE_4__["default"],
      "text": _components_public_text__WEBPACK_IMPORTED_MODULE_5__["default"],
      "color": _components_public_color__WEBPACK_IMPORTED_MODULE_6__["default"],
      "folder": _components_public_folder__WEBPACK_IMPORTED_MODULE_7__["default"],
      "file": _components_public_file__WEBPACK_IMPORTED_MODULE_8__["default"],
      "display": _components_public_display__WEBPACK_IMPORTED_MODULE_9__["default"],
      "interval": _components_public_interval__WEBPACK_IMPORTED_MODULE_10__["default"]
    };
  }
  /**
   * Creates the component specified by `opts` and appends it to the
   * document as a child of `root`.
   *
   * @param {HTMLElement} [root] Parent of the created component
   * @param {Object} [opts] Options used to create the component
   */


  _createClass(ComponentManager, [{
    key: "Create",
    value: function Create(root, opts) {
      var initializer = this.components[opts.type];

      if (initializer === undefined) {
        throw new Error("No component type named '".concat(opts.type, "' exists."));
      }

      var newComponent = new initializer(root, opts, this.theme);
      return newComponent;
    }
  }]);

  return ComponentManager;
}();

/***/ }),

/***/ "./src/components/component-base.js":
/*!******************************************!*\
  !*** ./src/components/component-base.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComponentBase)
/* harmony export */ });
/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wolfy87-eventemitter */ "./node_modules/wolfy87-eventemitter/EventEmitter.js");
/* harmony import */ var wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/container */ "./src/components/partials/container.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ComponentBase = /*#__PURE__*/function (_EventEmitter) {
  _inherits(ComponentBase, _EventEmitter);

  var _super = _createSuper(ComponentBase);

  function ComponentBase(root, opts, theme) {
    var _this;

    var makeContainer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, ComponentBase);

    _this = _super.call(this);
    _this.root = root;
    _this.opts = opts;
    _this.theme = theme;
    _this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();

    if (makeContainer) {
      _this.container = (0,_partials_container__WEBPACK_IMPORTED_MODULE_2__["default"])(root, opts.label, theme);
    }

    _this.SetEnabled(opts.enabled || true);

    return _this;
  }

  _createClass(ComponentBase, [{
    key: "SetEnabled",
    value: function SetEnabled(enabled) {
      this.enabled = enabled;

      if (enabled) {
        var _this$container;

        (_this$container = this.container) === null || _this$container === void 0 ? void 0 : _this$container.classList.remove("disabled");
      } else {
        var _this$container2;

        (_this$container2 = this.container) === null || _this$container2 === void 0 ? void 0 : _this$container2.classList.add("disabled");
      }
    }
  }, {
    key: "Remove",
    value: function Remove() {
      if (this.container) {
        this.container.parentNode.removeChild(this.container);
      }
    }
  }]);

  return ComponentBase;
}((wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_0___default()));



/***/ }),

/***/ "./src/components/internal/menu-bar.js":
/*!*********************************************!*\
  !*** ./src/components/internal/menu-bar.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuBar": () => (/* binding */ MenuBar)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_bar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-bar.css */ "./src/components/internal/menu-bar.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var MenuBar = /*#__PURE__*/function (_ComponentBase) {
  _inherits(MenuBar, _ComponentBase);

  var _super = _createSuper(MenuBar);

  function MenuBar(root, opts, theme) {
    var _this;

    _classCallCheck(this, MenuBar);

    _this = _super.call(this, root, opts, theme, false); // Create menu bar

    _this.element = document.createElement("div");

    _this.element.classList.add("guify-bar");

    root.appendChild(_this.element);

    if (opts.title) {
      // Create a text label inside of the bar
      var text = _this.element.appendChild(document.createElement("div"));

      text.classList.add("guify-bar-title");
      text.innerHTML = opts.title;
      _this.label = text;
    } // Make the menu collapse button


    var menuButton = _this.element.appendChild(document.createElement("button"));

    menuButton.classList.add("guify-bar-button");
    menuButton.innerHTML = "Controls";
    dom_css__WEBPACK_IMPORTED_MODULE_1___default()(menuButton, {
      left: opts.align == "left" ? "0" : "unset",
      right: opts.align == "left" ? "unset" : "0"
    });

    menuButton.onclick = function () {
      _this.emit("ontogglepanel");
    }; // Make the fullscreen button


    if ((screenfull__WEBPACK_IMPORTED_MODULE_2___default().isEnabled)) {
      var fullscreenButton = _this.element.appendChild(document.createElement("button"));

      fullscreenButton.classList.add("guify-bar-button");
      fullscreenButton.innerHTML = "「　」";
      fullscreenButton.setAttribute("aria-label", "Toggle Fullscreen");
      dom_css__WEBPACK_IMPORTED_MODULE_1___default()(fullscreenButton, {
        left: opts.align == "left" ? "unset" : "0",
        // Place on opposite side from menuButton
        right: opts.align == "left" ? "0" : "unset"
      });

      fullscreenButton.onclick = function () {
        _this.emit("onfullscreenrequested");
      };
    }

    return _this;
  }

  _createClass(MenuBar, [{
    key: "SetVisible",
    value: function SetVisible(show) {
      this.element.style.display = show ? "block" : "none";
    }
  }]);

  return MenuBar;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/internal/panel.js":
/*!******************************************!*\
  !*** ./src/components/internal/panel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Panel": () => (/* binding */ Panel)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _panel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel.css */ "./src/components/internal/panel.css");
/* harmony import */ var _partials_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/header */ "./src/components/partials/header.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Panel = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Panel, _ComponentBase);

  var _super = _createSuper(Panel);

  function Panel(root, opts, theme) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _super.call(this, root, opts, theme, false); // Container the panel will sit in

    _this.container = root.appendChild(document.createElement("div"));

    _this.container.classList.add("guify-panel-container");

    dom_css__WEBPACK_IMPORTED_MODULE_1___default()(_this.container, {
      width: opts.width,
      opacity: opts.opacity || 1.0
    });

    if (opts.align == "left") {
      if (opts.panelMode == "outer") {
        _this.container.classList.add("guify-panel-container-left-outer");
      } else if (opts.panelMode == "inner") {
        _this.container.classList.add("guify-panel-container-left-inner");
      }
    } else {
      if (opts.panelMode == "outer") {
        _this.container.classList.add("guify-panel-container-right-outer");
      } else if (opts.panelMode == "inner") {
        _this.container.classList.add("guify-panel-container-right-inner");
      }
    }

    if (opts.panelOverflowBehavior == "scroll") {
      _this.container.classList.add("guify-panel-container-scrollable");
    }

    if (opts.barMode === "none") {
      // this._MakeToggleButton();
      dom_css__WEBPACK_IMPORTED_MODULE_1___default()(_this.container, {
        maxHeight: "100%"
      });
    } // Create panel inside container


    _this.panel = _this.container.appendChild(document.createElement("div"));

    _this.panel.classList.add("guify-panel"); // Add a title to the panel


    if (opts.barMode === "none" && opts.title) (0,_partials_header__WEBPACK_IMPORTED_MODULE_3__["default"])(_this.panel, opts.title, theme);
    return _this;
  }
  /**
   * Makes the panel visible based on the truthiness of `show`.
   * @param {Bool} [show]
   */


  _createClass(Panel, [{
    key: "SetVisible",
    value: function SetVisible(show) {
      if (show) {
        // this.panel.style.height = Array.prototype.reduce.call(this.panel.childNodes, function(p, c) {return p + (c.offsetHeight || 0) + 5 + 1;}, 0) + 'px';
        // this.panel.style.paddingTop = '14px';
        // this.panel.style.paddingBottom = '8px';
        this.panel.classList.remove("guify-panel-hidden");
        if (this.menuButton) this.menuButton.setAttribute("alt", "Close GUI");
      } else {
        // this.panel.style.height = '0px';
        // this.panel.style.paddingTop = '0px';
        // this.panel.style.paddingBottom = '0px';
        this.panel.classList.add("guify-panel-hidden");
        if (this.menuButton) this.menuButton.setAttribute("alt", "Open GUI");
      }
    }
    /**
     * Toggles the visibility of the panel.
     */

  }, {
    key: "ToggleVisible",
    value: function ToggleVisible() {
      if (this.panel.classList.contains("guify-panel-hidden")) this.SetVisible(true);else this.SetVisible(false);
    }
    /**
     * Makes a show/hide button that sits at the bottom of the panel.
     */

  }, {
    key: "_MakeToggleButton",
    value: function _MakeToggleButton() {
      var _this2 = this;

      // Make the menu collapse button
      this.menuButton = this.container.appendChild(document.createElement("button"));
      this.menuButton.className = "guify-panel-toggle-button";
      dom_css__WEBPACK_IMPORTED_MODULE_1___default()(this.menuButton, {
        left: this.opts.align == "left" ? "0px" : "unset",
        right: this.opts.align == "left" ? "unset" : "0px"
      });

      this.menuButton.onclick = function () {
        _this2.ToggleVisible();
      }; // Defocus on mouse up (for non-accessibility users)


      this.menuButton.addEventListener("mouseup", function () {
        _this2.menuButton.blur();
      });
      this.menuButton.innerHTML = "\n        <svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n            <rect x=\"10%\" y=\"10%\" width=\"80%\" height=\"80%\"/>\n        </svg>\n        ";
    }
  }]);

  return Panel;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/internal/toast-area.js":
/*!***********************************************!*\
  !*** ./src/components/internal/toast-area.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastArea": () => (/* binding */ ToastArea)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toast_area_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast-area.css */ "./src/components/internal/toast-area.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Represents a container div that creates and holds toast notifications.
 */

var ToastArea = /*#__PURE__*/function (_ComponentBase) {
  _inherits(ToastArea, _ComponentBase);

  var _super = _createSuper(ToastArea);

  function ToastArea(root, opts, theme) {
    var _this;

    _classCallCheck(this, ToastArea);

    _this = _super.call(this, root, opts, theme, false); // Make toast area

    _this.element = root.appendChild(document.createElement("div"));

    _this.element.classList.add("guify-toast-area");

    dom_css__WEBPACK_IMPORTED_MODULE_1___default()(_this.element, {
      position: "absolute",
      "width": "100%"
    });
    return _this;
  }
  /**
   * Makes a message that appears under the menu bar. Transitions out
   * over `transitionMS` milliseconds after `stayMS` milliseconds have passed.
   */


  _createClass(ToastArea, [{
    key: "CreateToast",
    value: function CreateToast(message) {
      var stayMS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
      var transitionMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      console.log("[Toast] " + message);
      var toast = this.element.appendChild(document.createElement("div"));
      toast.classList.add("guify-toast-notification");
      toast.setAttribute("aria-live", "polite");
      toast.innerHTML = message;
      dom_css__WEBPACK_IMPORTED_MODULE_1___default()(toast, {// Animation stuff
        // '-webkit-transition': 'opacity ' + transitionMS + 'ms linear',
        // 'transition': 'opacity ' + transitionMS + 'ms linear',
      }); // Make close button in toast

      var closeButton = toast.appendChild(document.createElement("button"));
      closeButton.innerHTML = "&#10006;";
      closeButton.classList.add("guify-toast-close-button");
      var timeout;

      var TransitionOut = function TransitionOut() {
        toast.blur();
        dom_css__WEBPACK_IMPORTED_MODULE_1___default()(toast, {
          //'transform-style': 'flat',
          //'transform-style': 'preserve-3d',
          // Slide up
          // '-webkit-transition': '-webkit-transform ' + transitionMS + 'ms linear',
          // 'transition': 'transform ' + transitionMS + 'ms linear',
          // '-webkit-transform': 'translate3d(0, -100%, 0)',
          // 'transform:': 'translate3d(0, -100%, 0)',
          // Fade out
          //'-webkit-transition': '-webkit-opacity ' + transitionMS + 'ms linear',
          //'transition': 'opacity ' + transitionMS + 'ms linear',
          "opacity": "0"
        });
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          if (toast) toast.parentNode.removeChild(toast);
        }, transitionMS);
      };

      timeout = setTimeout(TransitionOut, stayMS);
      closeButton.onclick = TransitionOut;
    }
  }]);

  return ToastArea;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/partials/container.js":
/*!**********************************************!*\
  !*** ./src/components/partials/container.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _container_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.css */ "./src/components/partials/container.css");
 // eslint-disable-next-line no-unused-vars

var Container = function Container(root, label, theme) {
  var container = root.appendChild(document.createElement("div"));
  container.classList.add("guify-component-container");
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/components/partials/header.js":
/*!*******************************************!*\
  !*** ./src/components/partials/header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_css__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(root, text, theme) {
  var title = root.appendChild(document.createElement("div"));
  title.innerHTML = text;
  dom_css__WEBPACK_IMPORTED_MODULE_0___default()(title, {
    width: "100%",
    textAlign: "center",
    color: theme.colors.textSecondary,
    height: "20px",
    marginBottom: "4px"
  });
  return title;
}

/***/ }),

/***/ "./src/components/partials/label.js":
/*!******************************************!*\
  !*** ./src/components/partials/label.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _label_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label.css */ "./src/components/partials/label.css");
 // eslint-disable-next-line no-unused-vars

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (root, text, theme) {
  var label = root.appendChild(document.createElement("div"));
  label.classList.add("guify-component-label");
  label.innerHTML = text;
  return label;
});

/***/ }),

/***/ "./src/components/partials/value.js":
/*!******************************************!*\
  !*** ./src/components/partials/value.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _value_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value.css */ "./src/components/partials/value.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (root, text, theme, width, left) {
  var input = root.appendChild(document.createElement("input"));
  input.type = "text";
  input.classList.add("guify-value-input");
  input.value = text;

  if (!left) {
    input.classList.add("guify-value-input-right");
  }

  dom_css__WEBPACK_IMPORTED_MODULE_0___default()(input, {
    "width": width
  });
  return input;
});

/***/ }),

/***/ "./src/components/public/button.js":
/*!*****************************************!*\
  !*** ./src/components/public/button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var _partials_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/label */ "./src/components/partials/label.js");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.css */ "./src/components/public/button.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Button = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Button, _ComponentBase);

  var _super = _createSuper(Button);

  function Button(root, opts, theme) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, root, opts, theme);
    _this.label = (0,_partials_label__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.container, "", theme);
    _this.input = _this.container.appendChild(document.createElement("button"));

    _this.input.classList.add("guify-button");

    _this.input.textContent = opts.label;
    _this.button = _this.input;

    _this.input.addEventListener("click", opts.action); // Defocus on mouse up (for non-accessibility users)


    _this.input.addEventListener("mouseup", function () {
      _this.input.blur();
    });

    return _this;
  }

  return Button;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/public/checkbox.js":
/*!*******************************************!*\
  !*** ./src/components/public/checkbox.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var _partials_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/label */ "./src/components/partials/label.js");
/* harmony import */ var _checkbox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.css */ "./src/components/public/checkbox.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Checkbox = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Checkbox, _ComponentBase);

  var _super = _createSuper(Checkbox);

  function Checkbox(root, opts, theme) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _super.call(this, root, opts, theme);
    _this.label = (0,_partials_label__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.container, opts.label, theme);
    _this.input = _this.container.appendChild(document.createElement("input"));
    _this.input.id = "guify-checkbox-" + opts.label + _this.uuid;
    _this.input.type = "checkbox";
    _this.input.checked = opts.initial;

    _this.input.classList.add("guify-checkbox"); // Add ARIA attribute to input based on label text


    if (opts.label) _this.input.setAttribute("aria-label", opts.label); // This is a HTML `<label>` element, not a LabelPartial.

    var labelElement = _this.container.appendChild(document.createElement("label"));

    labelElement.htmlFor = _this.input.id;
    setTimeout(function () {
      _this.emit("initialized", _this.input.checked);
    });

    _this.input.onchange = function (data) {
      _this.emit("input", data.target.checked);
    };

    return _this;
  }

  _createClass(Checkbox, [{
    key: "SetValue",
    value: function SetValue(value) {
      this.input.checked = value;
    }
  }, {
    key: "GetValue",
    value: function GetValue() {
      return this.input.checked;
    }
  }]);

  return Checkbox;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/public/color.js":
/*!****************************************!*\
  !*** ./src/components/public/color.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Color)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var simple_color_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simple-color-picker */ "./node_modules/simple-color-picker/dist/simple-color-picker.module.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _color_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color.css */ "./src/components/public/color.css");
/* harmony import */ var _partials_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partials/label */ "./src/components/partials/label.js");
/* harmony import */ var _partials_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../partials/value */ "./src/components/partials/value.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Color = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Color, _ComponentBase);

  var _super = _createSuper(Color);

  function Color(root, opts, theme) {
    var _this;

    _classCallCheck(this, Color);

    _this = _super.call(this, root, opts, theme);
    opts.format = opts.format || "rgb";
    opts.initial = opts.initial || "#123456";
    _this.label = (0,_partials_label__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.container, opts.label, theme);

    var icon = _this.container.appendChild(document.createElement("span"));

    icon.classList.add("guify-color");
    var value = (0,_partials_value__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.container, "", theme, "calc(100% - ".concat(theme.sizing.labelWidth, " - 12% - 0.5em)"));
    value.setAttribute("readonly", "true");

    icon.onmouseover = function () {
      _this.picker.$el.style.display = "";
    };

    var initial = opts.initial;

    switch (opts.format) {
      case "rgb":
        initial = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(initial).toHexString();
        break;

      case "hex":
        initial = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(initial).toHexString();
        break;

      case "array":
        initial = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default().fromRatio({
          r: initial[0],
          g: initial[1],
          b: initial[2]
        }).toHexString();
        break;

      default:
        break;
    }

    _this.picker = new simple_color_picker__WEBPACK_IMPORTED_MODULE_1__["default"]({
      el: icon,
      color: initial,
      background: theme.colors.componentBackground,
      width: 125,
      height: 100
    });
    dom_css__WEBPACK_IMPORTED_MODULE_3___default()(_this.picker.$el, {
      marginTop: theme.sizing.componentHeight,
      display: "none",
      position: "absolute"
    });
    dom_css__WEBPACK_IMPORTED_MODULE_3___default()(icon, {
      position: "absolute",
      // Fixes extra height being applied below for some reason
      display: "inline-block",
      width: "12.5%",
      height: theme.sizing.componentHeight,
      backgroundColor: _this.picker.getHexString()
    });

    icon.onmouseout = function () {
      _this.picker.$el.style.display = "none";
    };

    setTimeout(function () {
      _this.emit("initialized", initial);
    });

    _this.picker.onChange(function (hex) {
      value.value = _this.Format(hex);
      dom_css__WEBPACK_IMPORTED_MODULE_3___default()(icon, {
        backgroundColor: hex
      });

      _this.emit("input", _this.Format(hex));
    });

    return _this;
  }

  _createClass(Color, [{
    key: "Format",
    value: function Format(hex) {
      switch (this.opts.format) {
        case "rgb":
          return tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(hex).toRgbString();

        case "hex":
          return tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(hex).toHexString();

        case "array":
          var rgb = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(hex).toRgb();
          return [rgb.r / 255, rgb.g / 255, rgb.b / 255].map(function (x) {
            return x.toFixed(2);
          });

        default:
          return hex;
      }
    }
  }, {
    key: "SetValue",
    value: function SetValue(value) {
      if (!this.picker.isChoosing) {
        this.picker.setColor(value);
      }
    }
  }, {
    key: "GetValue",
    value: function GetValue() {
      return this.Format(this.picker.getColor());
    }
  }]);

  return Color;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/public/display.js":
/*!******************************************!*\
  !*** ./src/components/public/display.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var _display_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.css */ "./src/components/public/display.css");
/* harmony import */ var _partials_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/label */ "./src/components/partials/label.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Display component. Shows the state of a variable.
 */

var Display = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Display, _ComponentBase);

  var _super = _createSuper(Display);

  function Display(root, opts, theme) {
    var _this;

    _classCallCheck(this, Display);

    _this = _super.call(this, root, opts, theme);
    _this.label = (0,_partials_label__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.container, opts.label, theme);
    _this.text = _this.container.appendChild(document.createElement("div"));

    _this.text.classList.add("guify-display");

    if (opts.initial) {
      _this.SetValue(opts.initial);
    } // Add ARIA attribute to text based on label text


    if (opts.label) _this.text.setAttribute("aria-label", opts.label);
    return _this;
  }

  _createClass(Display, [{
    key: "SetValue",
    value: function SetValue(value) {
      this.text.innerHTML = value.toString();
    }
  }, {
    key: "GetValue",
    value: function GetValue() {
      return this.text.innerHTML.toString();
    }
  }]);

  return Display;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/public/file.js":
/*!***************************************!*\
  !*** ./src/components/public/file.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file.css */ "./src/components/public/file.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * File component. Drag and drop a file or click to choose a file.
 */

var File = /*#__PURE__*/function (_ComponentBase) {
  _inherits(File, _ComponentBase);

  var _super = _createSuper(File);

  function File(root, opts, theme) {
    var _this;

    _classCallCheck(this, File);

    _this = _super.call(this, root, opts, theme);
    _this.opts.fileReadFunc = _this.opts.fileReadFunc || "readAsDataURL";
    _this.file = null;
    _this.fileName = null;

    _this.container.classList.add("guify-file-container");

    _this.container.setAttribute("role", "button");

    _this.container.setAttribute("tabIndex", "0"); // Make tabbable


    dom_css__WEBPACK_IMPORTED_MODULE_1___default()(_this.container, {
      width: "100%",
      "box-sizing": "border-box",
      "-moz-box-sizing": "border-box",
      "-webkit-box-sizing": "border-box",
      height: "unset",
      // Grow with content
      padding: "8px"
    });

    var label = _this.container.appendChild(document.createElement("div"));

    label.innerHTML = opts.label;
    dom_css__WEBPACK_IMPORTED_MODULE_1___default()(label, "padding-bottom", "5px");
    _this.input = _this.container.appendChild(document.createElement("input"));

    _this.input.setAttribute("type", "file");

    _this.input.setAttribute("multiple", false);

    _this.input.style.display = "none"; // Add ARIA attribute to input based on label text

    if (opts.label) _this.input.setAttribute("aria-label", opts.label);
    _this.fileLabel = _this.container.appendChild(document.createElement("div"));
    _this.fileLabel.innerHTML = "Choose a file..."; //css(this.fileLabel, 'color', theme.colors.textSecondary);

    var FileDropped = function FileDropped(event) {
      var files;

      if (event.dataTransfer) {
        files = event.dataTransfer.files;
      } else if (event.target) {
        files = event.target.files;
      }

      var reader = new FileReader();

      reader.onload = function () {
        _this.file = reader.result;
        _this.fileLabel.innerHTML = files[0].name;

        _this.emit("input", _this.file);
      };

      reader[_this.opts.fileReadFunc](files[0]);
    };

    _this.input.addEventListener("change", FileDropped);

    _this.container.addEventListener("dragover", function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.container.classList.add("guify-dragover");
    });

    _this.container.addEventListener("dragleave", function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.container.classList.remove("guify-dragover");
    });

    _this.container.addEventListener("drop", function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.container.classList.remove("guify-dragover");

      FileDropped(event);
    });

    _this.container.onclick = function () {
      _this.input.click();
    };

    _this.container.addEventListener("keydown", function (event) {
      if (event.code === "Enter" || event.code === "Space") {
        event.preventDefault();

        _this.input.click();
      }
    }); // Defocus on mouse up (for non-accessibility users)


    _this.container.addEventListener("mouseup", function () {
      _this.container.blur();
    });

    return _this;
  } // eslint-disable-next-line no-unused-vars


  _createClass(File, [{
    key: "SetValue",
    value: function SetValue(value) {
      return;
    }
  }, {
    key: "GetValue",
    value: function GetValue() {
      return this.file;
    }
  }]);

  return File;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/public/folder.js":
/*!*****************************************!*\
  !*** ./src/components/public/folder.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Folder)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var _folder_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.css */ "./src/components/public/folder.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Folder = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Folder, _ComponentBase);

  var _super = _createSuper(Folder);

  function Folder(root, opts, theme) {
    var _this;

    _classCallCheck(this, Folder);

    _this = _super.call(this, root, opts, theme);

    _this.container.classList.add("guify-folder");

    _this.container.setAttribute("role", "button");

    _this.container.setAttribute("tabIndex", "0"); // Make tabbable
    // css(container, {
    //     color: theme.colors.text1,
    // })


    _this.arrow = _this.container.appendChild(document.createElement("div"));

    _this.arrow.classList.add("guify-folder-arrow");

    _this.arrow.innerHTML = "&#9662;";
    _this.label = _this.container.appendChild(document.createElement("div"));

    _this.label.classList.add("guify-folder-text");

    _this.label.innerHTML = opts.label;

    _this.container.onclick = function () {
      _this.Toggle();
    }; // Defocus on mouse up (for non-accessibility users)


    _this.container.addEventListener("mouseup", function () {
      _this.container.blur();
    });

    _this.container.addEventListener("keydown", function (event) {
      if (event.code === "Enter" || event.code === "Space") {
        event.preventDefault();

        _this.Toggle();
      }
    });

    _this.folderContainer = root.appendChild(document.createElement("div"));

    _this.folderContainer.classList.add("guify-folder-contents");

    _this.open = _this.opts.open || false;

    _this.SetOpen(_this.open);

    return _this;
  }

  _createClass(Folder, [{
    key: "SetEnabled",
    value: function SetEnabled(enabled) {
      _get(_getPrototypeOf(Folder.prototype), "SetEnabled", this).call(this, enabled); // Disable everything in the folder


      if (enabled) {
        var _this$folderContainer;

        (_this$folderContainer = this.folderContainer) === null || _this$folderContainer === void 0 ? void 0 : _this$folderContainer.classList.remove("disabled");
      } else {
        var _this$folderContainer2;

        (_this$folderContainer2 = this.folderContainer) === null || _this$folderContainer2 === void 0 ? void 0 : _this$folderContainer2.classList.add("disabled");
      }
    } // Toggle visibility

  }, {
    key: "Toggle",
    value: function Toggle() {
      this.open = !this.open;
      this.SetOpen(this.open);
    } // Show or hide the contents

  }, {
    key: "SetOpen",
    value: function SetOpen(show) {
      this.open = show;

      if (show) {
        this.folderContainer.classList.remove("guify-folder-closed");
        this.arrow.innerHTML = "&#9662;"; // Down triangle
      } else {
        this.folderContainer.classList.add("guify-folder-closed");
        this.arrow.innerHTML = "&#9656;"; // Right triangle
      }
    }
  }, {
    key: "Remove",
    value: function Remove() {
      if (this.folderContainer) {
        this.folderContainer.parentNode.removeChild(this.folderContainer);
      }

      _get(_getPrototypeOf(Folder.prototype), "Remove", this).call(this);
    }
  }]);

  return Folder;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/public/interval.js":
/*!*******************************************!*\
  !*** ./src/components/public/interval.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Interval)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_numeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-numeric */ "./node_modules/is-numeric/is-numeric.js");
/* harmony import */ var is_numeric__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_numeric__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interval_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interval.css */ "./src/components/public/interval.css");
/* harmony import */ var _partials_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/label */ "./src/components/partials/label.js");
/* harmony import */ var _partials_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partials/value */ "./src/components/partials/value.js");
/* harmony import */ var _utils_math_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/math-utils */ "./src/utils/math-utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









function clamp(x, min, max) {
  return Math.min(Math.max(x, min), max);
}

var Interval = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Interval, _ComponentBase);

  var _super = _createSuper(Interval);

  function Interval(root, opts, theme) {
    var _this;

    _classCallCheck(this, Interval);

    _this = _super.call(this, root, opts, theme);
    _this.label = (0,_partials_label__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.container, opts.label, theme);

    if (!!opts.step && !!opts.steps) {
      throw new Error("Cannot specify both step and steps. Got step = " + opts.step + ", steps = ", opts.steps);
    }

    _this.input = _this.container.appendChild(document.createElement("span"));

    _this.input.classList.add("guify-interval");

    _this.handle = document.createElement("span");

    _this.handle.classList.add("guify-interval-handle");

    _this.input.appendChild(_this.handle);

    if (!Array.isArray(opts.initial)) {
      opts.initial = [];
    }

    _this.scale = opts.scale; // Get initial value:

    if (opts.scale === "log") {
      // If logarithmic, we're going to set the slider to a known linear range. Then we'll
      // map that linear range to the user-set range using a log scale.
      // Check if all signs are valid
      if (opts.min * opts.max <= 0) {
        throw new Error("Log range min/max must have the same sign and not equal zero. Got min = " + opts.min + ", max = " + opts.max);
      } // Step is invalid for log scale slider


      if (is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.step)) {
        console.warn("Step is unused for log scale sliders.");
      } // Warn that `steps` was removed


      if (is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.steps)) {
        console.warn("\"steps\" option for log scale sliders has been removed.");
      } // Min/max are forced to a known range, and log value will be derived from slider position within.


      _this.minPos = 0;
      _this.maxPos = 1000000;
      _this.min = Math.log(is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.min) ? opts.min : 0.000001); // This cannot be 0

      _this.max = Math.log(is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.max) ? opts.max : 100);
      _this.precision = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.precision) ? opts.precision : 3;
      _this.logScale = (_this.max - _this.min) / (_this.maxPos - _this.minPos);
      _this.initial = [is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.initial[0]) ? opts.initial[0] : _this.min, is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.initial[1]) ? opts.initial[1] : _this.max];
    } else {
      // If linear, this is much simpler. Pos and value can directly match.
      _this.minPos = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.min) ? opts.min : 0;
      _this.maxPos = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.max) ? opts.max : 100;
      _this.min = _this.minPos;
      _this.max = _this.maxPos;
      _this.precision = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.precision) ? opts.precision : 3;
      _this.step = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.step) ? opts.step : 10 / Math.pow(10, 3); // Default is the lowest possible number given the precision. When precision = 3, step = 0.01.

      _this.initial = [is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.initial[0]) ? opts.initial[0] : _this.min, is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.initial[1]) ? opts.initial[1] : _this.max]; // Quantize the initial value to the nearest step:

      if (_this.step != 0) {
        _this.initial = _this.initial.map(function (value) {
          return _this.min + _this.step * Math.round((value - _this.min) / _this.step);
        });
      }
    }

    _this.value = opts.initial; // Set handle positions from value

    _this._RefreshHandles(); // Display the values:


    _this.lValue = (0,_partials_value__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.container, _this.value[0], theme, "11%", true);
    _this.rValue = (0,_partials_value__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.container, _this.value[1], theme, "11%", false); // Add ARIA attribute to input based on label text

    if (opts.label) _this.lValue.setAttribute("aria-label", opts.label + " lower value");
    if (opts.label) _this.lValue.setAttribute("aria-label", opts.label + " upper value"); // An index to track what's being dragged:

    _this.activeIndex = -1;
    setTimeout(function () {
      _this.emit("initialized", _this.value);
    }); // // Gain focus
    // this.input.addEventListener("focus", () => {
    //     this.focused = true;
    // });
    // // Lose focus
    // this.input.addEventListener("blur", () => {
    //     this.focused = false;
    // });

    var mouseX = function mouseX(ev) {
      // Get mouse position in page coords relative to the container:
      return ev.pageX - _this.input.getBoundingClientRect().left;
    };

    var mouseMoveListener = function mouseMoveListener(ev) {
      var fraction = clamp(mouseX(ev) / _this.input.offsetWidth, 0, 1);

      _this._SetFromMousePosition(fraction);
    };

    var mouseUpListener = function mouseUpListener(ev) {
      var fraction = clamp(mouseX(ev) / _this.input.offsetWidth, 0, 1);

      _this._SetFromMousePosition(fraction);

      document.removeEventListener("mousemove", mouseMoveListener);
      document.removeEventListener("mouseup", mouseUpListener);
      _this.activeIndex = -1;
    };

    _this.input.addEventListener("mousedown", function (ev) {
      // Get mouse position fraction:
      var fraction = clamp(mouseX(ev) / _this.input.offsetWidth, 0, 1);

      var posForLeftValue = _this._Position(_this.value[0]);

      var posForRightValue = _this._Position(_this.value[1]); // Get the current fraction of position --> [0, 1]:


      var lofrac = (posForLeftValue - _this.minPos) / (_this.maxPos - _this.minPos);
      var hifrac = (posForRightValue - _this.minPos) / (_this.maxPos - _this.minPos); // This is just for making decisions, so perturb it ever
      // so slightly just in case the bounds are numerically equal:

      lofrac -= Math.abs(_this.maxPos - _this.minPos) * 1e-15;
      hifrac += Math.abs(_this.maxPos - _this.minPos) * 1e-15; // Figure out which is closer:

      var lodiff = Math.abs(lofrac - fraction);
      var hidiff = Math.abs(hifrac - fraction);
      _this.activeIndex = lodiff < hidiff ? 0 : 1;
      console.log(_this.activeIndex); // Attach this to *document* so that we can still drag if the mouse
      // passes outside the container:

      document.addEventListener("mousemove", mouseMoveListener);
      document.addEventListener("mouseup", mouseUpListener);
    }); // Defocus on mouse up (for non-accessibility users)


    _this.input.addEventListener("mouseup", function () {
      _this.input.blur();
    });

    _this.input.oninput = function () {
      // let position = parseFloat(data.target.value);
      // var scaledValue = this._Value(position);
      // this.valueComponent.value = this._RoundNumber(scaledValue, this.precision);
      _this.lValue.value = _this.value[0];
      _this.rValue.value = _this.value[1];

      _this.emit("input", _this.value);
    }; // Handle lower bound input box changes


    _this.lValue.onchange = function () {
      var rawValue = _this.lValue.value;
      var otherValue = parseFloat(_this.rValue.value);

      if (Number(parseFloat(rawValue)) == rawValue) {
        var min = _this.scale == "log" ? Math.exp(_this.min) : _this.min;
        var max = _this.scale == "log" ? Math.exp(_this.max) : _this.max; // Input number is valid

        var value = parseFloat(rawValue); // Clamp to input range

        value = Math.min(Math.max(value, min), max); // Map to nearest step

        if (_this.step) {
          value = Math.ceil((value - min) / _this.step) * _this.step + min;
        } // Prevent value from going beyond interval upper value


        value = Math.min(value, otherValue);
        value = _this._RoundNumber(value, _this.precision);
        _this.lValue.value = value;
        _this.value = [value, otherValue];

        _this.emit("input", [value, otherValue]);

        _this._RefreshHandles([value, otherValue]);
      } else {
        // Input number is invalid
        // Go back to before input change
        _this.lValue.value = _this.lastValue[0];
      }
    }; // Handle upper bound input box changes


    _this.rValue.onchange = function () {
      var rawValue = _this.rValue.value;
      var otherValue = parseFloat(_this.lValue.value);

      if (Number(parseFloat(rawValue)) == rawValue) {
        var min = _this.scale == "log" ? Math.exp(_this.min) : _this.min;
        var max = _this.scale == "log" ? Math.exp(_this.max) : _this.max; // Input number is valid

        var value = parseFloat(rawValue); // Clamp to input range

        value = Math.min(Math.max(value, min), max); // Map to nearest step

        if (_this.step) {
          value = Math.ceil((value - min) / _this.step) * _this.step + min;
        } // Prevent value from going below interval lower value


        value = Math.max(value, otherValue);
        value = _this._RoundNumber(value, _this.precision);
        _this.rValue.value = value;
        _this.value = [otherValue, value];

        _this.emit("input", [otherValue, value]);

        _this._RefreshHandles();
      } else {
        // Input number is invalid
        // Go back to before input change
        _this.rValue.value = _this.lastValue[1];
      }
    };

    return _this;
  }
  /**
   * Calculate value from slider position
   */


  _createClass(Interval, [{
    key: "_Value",
    value: function _Value(position) {
      if (this.scale === "log") {
        // Map from slider position range to log value range
        // Map from slider range to min-max value range
        var rangePos = (position - this.minPos) * this.logScale + this.min; // Now convert to log space

        return Math.exp(rangePos);
      } else {
        // Position and value are equivalent
        return position;
      }
    }
    /**
     * Calculate slider position from value
     */

  }, {
    key: "_Position",
    value: function _Position(value) {
      if (this.scale === "log") {
        // Map from log value range to the slider's position range
        return this.minPos + (Math.log(value) - this.min) / this.logScale;
      } else {
        // Value and position are equivalent
        return value;
      }
    }
    /**
     * Updates the current value given a mouse X position normalized from 0 to 1.
     */

  }, {
    key: "_SetFromMousePosition",
    value: function _SetFromMousePosition(fraction) {
      if (this.activeIndex === -1) {
        return;
      } // Clip against the other bound:


      if (this.activeIndex === 0) {
        // Get the right side in position-space [0, 1]:
        var hifrac = (this._Position(this.value[1]) - this.minPos) / (this.maxPos - this.minPos); // Prevent fraction from exceeding right-side position

        fraction = Math.min(hifrac, fraction);
      } else {
        // Get the right side in position-space [0, 1]:
        var lofrac = (this._Position(this.value[0]) - this.minPos) / (this.maxPos - this.minPos); // Prevent fraction from going below left-side position

        fraction = Math.max(lofrac, fraction);
      } // Map from 0-1 scale to position-scale


      var position = (0,_utils_math_utils__WEBPACK_IMPORTED_MODULE_6__.lerp)(this.minPos, this.maxPos, fraction); // Map from position-scale to value-scale and assign to values

      var newValue = this._Value(position); // Quantize the value


      if (this.step) {
        newValue = this.min + this.step * Math.round((newValue - this.min) / this.step);
      }

      this.value[this.activeIndex] = this._RoundNumber(newValue, this.precision); // Update and send the event:

      this._RefreshHandles();

      this.input.oninput();
    }
  }, {
    key: "SetValue",
    value: function SetValue(value) {
      if (this.focused !== true) {
        this.lValue.value = this._RoundNumber(parseFloat(value[0]), this.precision);
        this.rValue.value = this._RoundNumber(parseFloat(value[1]), this.precision);
        this.lastValue = [parseFloat(value[0]), parseFloat(value[1])];
      }
    } // Formats the number for display.
    // `opts.precision` lets you customize how many decimal places you want here at most.
    // The default is 3.

  }, {
    key: "_RoundNumber",
    value: function _RoundNumber(value, precision) {
      // https://stackoverflow.com/a/12830454/7138792
      return +parseFloat(value).toFixed(precision);
    }
  }, {
    key: "GetValue",
    value: function GetValue() {
      return [this.lValue.value, this.rValue.value];
    }
  }, {
    key: "_RefreshHandles",
    value: function _RefreshHandles() {
      var leftPercent = (this._Position(this.value[0]) - this.minPos) / (this.maxPos - this.minPos) * 100;
      var rightPercent = 100 - (this._Position(this.value[1]) - this.minPos) / (this.maxPos - this.minPos) * 100;
      dom_css__WEBPACK_IMPORTED_MODULE_1___default()(this.handle, {
        left: "".concat(leftPercent, "%"),
        right: "".concat(rightPercent, "%")
      });
    }
  }]);

  return Interval;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/public/range.js":
/*!****************************************!*\
  !*** ./src/components/public/range.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Range)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_numeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-numeric */ "./node_modules/is-numeric/is-numeric.js");
/* harmony import */ var is_numeric__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_numeric__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _range_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range.css */ "./src/components/public/range.css");
/* harmony import */ var _partials_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/label */ "./src/components/partials/label.js");
/* harmony import */ var _partials_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partials/value */ "./src/components/partials/value.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Range = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Range, _ComponentBase);

  var _super = _createSuper(Range);

  function Range(root, opts, theme) {
    var _this;

    _classCallCheck(this, Range);

    _this = _super.call(this, root, opts, theme);
    _this.scale = opts.scale;
    _this.label = (0,_partials_label__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.container, opts.label, theme);
    _this.input = _this.container.appendChild(document.createElement("input"));
    _this.input.type = "range";

    _this.input.classList.add("guify-range"); // Add ARIA attribute to input based on label text


    if (opts.label) _this.input.setAttribute("aria-label", opts.label + " input"); // Get initial value:

    if (opts.scale === "log") {
      // If logarithmic, we're going to set the slider to a known linear range. Then we'll
      // map that linear range to the user-set range using a log scale.
      // Check if all signs are valid
      if (opts.min * opts.max <= 0) {
        throw new Error("Log range min/max must have the same sign and not equal zero. Got min = " + opts.min + ", max = " + opts.max);
      } // Step is invalid for log scale slider


      if (is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.step)) {
        console.warn("Step is unused for log scale sliders.");
      } // Warn that `steps` was removed


      if (is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.steps)) {
        console.warn("\"steps\" option for log scale sliders has been removed.");
      } // Min/max are forced to a known range, and log value will be derived from slider position within.


      _this.minPos = 0;
      _this.maxPos = 1000000;
      _this.min = Math.log(is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.min) ? opts.min : 0.000001); // This cannot be 0

      _this.max = Math.log(is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.max) ? opts.max : 100);
      _this.precision = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.precision) ? opts.precision : 3;
      _this.logScale = (_this.max - _this.min) / (_this.maxPos - _this.minPos);
      _this.initial = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.initial) ? opts.initial : _this.min;

      if (opts.initial < 0) {
        throw new Error("Log range initial value must be > 0. Got initial value = ".concat(opts.initial));
      }
    } else {
      // If linear, this is much simpler. Pos and value can directly match.
      _this.minPos = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.min) ? opts.min : 0;
      _this.maxPos = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.max) ? opts.max : 100;
      _this.min = _this.minPos;
      _this.max = _this.maxPos;
      _this.precision = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.precision) ? opts.precision : 3;
      _this.step = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.step) ? opts.step : 10 / Math.pow(10, 3); // Default is the lowest possible number given the precision. When precision = 3, step = 0.01.

      _this.initial = is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(opts.initial) ? opts.initial : _this.min; // Quantize the initial value to the nearest step:

      if (_this.step != 0) {
        var initialStep = Math.round((_this.initial - _this.min) / _this.step);
        _this.initial = _this.min + _this.step * initialStep;
      }
    } // Set value on the this.input itself:


    _this.input.min = _this.minPos;
    _this.input.max = _this.maxPos;

    if (is_numeric__WEBPACK_IMPORTED_MODULE_2___default()(_this.step)) {
      _this.input.step = _this.step;
    }

    _this.input.value = _this._Position(_this.initial);
    dom_css__WEBPACK_IMPORTED_MODULE_1___default()(_this.input, {
      width: "calc(100% - ".concat(theme.sizing.labelWidth, " - 16% - 0.5em)")
    });
    _this.valueComponent = (0,_partials_value__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.container, _this.initial, theme, "16%"); // Add ARIA attribute to input based on label text

    if (opts.label) _this.valueComponent.setAttribute("aria-label", opts.label + " value");
    setTimeout(function () {
      _this.emit("initialized", parseFloat(_this.input.value));
    });
    _this.userIsModifying = false; // Gain focus

    _this.input.addEventListener("focus", function () {
      _this.focused = true;
    }); // Lose focus


    _this.input.addEventListener("blur", function () {
      _this.focused = false;
    }); // Defocus on mouse up (for non-accessibility users)


    _this.input.addEventListener("mouseup", function () {
      _this.input.blur();
    });

    _this.input.oninput = function (data) {
      var position = parseFloat(data.target.value);

      var scaledValue = _this._Value(position);

      _this.valueComponent.value = _this._FormatNumber(scaledValue, _this.precision);

      _this.emit("input", scaledValue);
    };

    _this.valueComponent.onchange = function () {
      var rawValue = _this.valueComponent.value;

      if (Number(parseFloat(rawValue)) == rawValue) {
        // Input number is valid
        var value = parseFloat(rawValue); // Ensure number fits slider properties

        value = _this._ValidatedInputValue(value);
        _this.valueComponent.value = value;

        _this.emit("input", value);

        _this.lastValue = value;
      } else {
        // Input number is invalid
        // Go back to before input change
        _this.valueComponent.value = _this.lastValue;
      }
    };

    return _this;
  }
  /**
   * Calculate value from slider position
   */


  _createClass(Range, [{
    key: "_Value",
    value: function _Value(position) {
      if (this.scale === "log") {
        // Map from slider position range to log value range
        // Map from slider range to min-max value range
        var rangePos = (position - this.minPos) * this.logScale + this.min; // Now convert to log space

        return Math.exp(rangePos);
      } else {
        // Position and value are equivalent
        return position;
      }
    }
    /**
     * Calculate slider position from value
     */

  }, {
    key: "_Position",
    value: function _Position(value) {
      if (this.scale === "log") {
        // Map from log value range to the slider's position range
        return this.minPos + (Math.log(value) - this.min) / this.logScale;
      } else {
        // Value and position are equivalent
        return value;
      }
    }
  }, {
    key: "_ValidatedInputValue",
    value: function _ValidatedInputValue(value) {
      var newValue;

      if (this.scale === "log") {
        // Clamp to input range, turning logmin and logmax back into min/max in linear space
        newValue = Math.min(Math.max(value, Math.exp(this.min)), Math.exp(this.max));
      } else {
        // Clamp to input range
        newValue = Math.min(Math.max(value, this.min), this.max); // Quantize to step

        newValue = Math.ceil((newValue - this.min) / this.step) * this.step + this.min;
      }

      return this._FormatNumber(newValue, this.precision);
    }
  }, {
    key: "SetValue",
    value: function SetValue(value) {
      var validated = this._ValidatedInputValue(value);

      if (this.focused !== true) {
        this.valueComponent.value = this._FormatNumber(validated, this.precision);
        this.input.value = this._Position(validated);
        this.lastValue = validated;
      }
    }
  }, {
    key: "GetValue",
    value: function GetValue() {
      return this._Value(this.input.value);
    } // Formats the number for display.
    // `opts.precision` lets you customize how many decimal places you want here.
    // The default is 3.

  }, {
    key: "_FormatNumber",
    value: function _FormatNumber(value, precision) {
      // https://stackoverflow.com/a/29249277
      return +parseFloat(value).toFixed(precision);
    }
  }]);

  return Range;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/public/select.js":
/*!*****************************************!*\
  !*** ./src/components/public/select.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var _select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.css */ "./src/components/public/select.css");
/* harmony import */ var _partials_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/label */ "./src/components/partials/label.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Select = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Select, _ComponentBase);

  var _super = _createSuper(Select);

  function Select(root, opts, theme) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, root, opts, theme);
    var i, downTriangle, upTriangle, key, option, el, keys;
    _this.label = (0,_partials_label__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.container, opts.label, theme);
    _this.input = document.createElement("select");

    _this.input.classList.add("guify-select-dropdown"); // Add ARIA attribute to input based on label text


    if (opts.label) _this.input.setAttribute("aria-label", opts.label);
    downTriangle = document.createElement("span");
    downTriangle.classList.add("guify-select-triangle", "guify-select-triangle--down");
    upTriangle = document.createElement("span");
    upTriangle.classList.add("guify-select-triangle", "guify-select-triangle--up");

    _this.container.appendChild(downTriangle);

    _this.container.appendChild(upTriangle);

    if (Array.isArray(opts.options)) {
      for (i = 0; i < opts.options.length; i++) {
        option = opts.options[i];
        el = document.createElement("option");
        el.value = el.textContent = option;

        if (opts.initial === option) {
          el.selected = "selected";
        }

        _this.input.appendChild(el);
      }
    } else {
      keys = Object.keys(opts.options);

      for (i = 0; i < keys.length; i++) {
        key = keys[i];
        el = document.createElement("option");
        el.value = key;

        if (opts.initial === key) {
          el.selected = "selected";
        }

        el.textContent = opts.options[key];

        _this.input.appendChild(el);
      }
    }

    _this.container.appendChild(_this.input);

    _this.input.onchange = function (data) {
      _this.emit("input", data.target.value);
    }; // Style the arrows based on mouse / focus behavior (and unfocus on mouse leave).
    // I'd like to do this through CSS :focus/:hover selectors but I just couldn't figure it out.
    // It could be done easily if CSS had a "general previous sibling" selector.


    var StyleFocus = function StyleFocus() {
      downTriangle.classList.add("guify-select-triangle--down-highlight");
      upTriangle.classList.add("guify-select-triangle--up-highlight");
    };

    var StyleUnfocus = function StyleUnfocus() {
      downTriangle.classList.remove("guify-select-triangle--down-highlight");
      upTriangle.classList.remove("guify-select-triangle--up-highlight");
    };

    var focused = false;

    _this.input.addEventListener("mouseover", StyleFocus);

    _this.input.addEventListener("focus", function () {
      focused = true;
      StyleFocus();
    });

    _this.input.addEventListener("blur", function () {
      focused = false;
      StyleUnfocus();
    });

    _this.input.addEventListener("mouseleave", function () {
      if (!focused) StyleUnfocus();
    });

    return _this;
  }

  _createClass(Select, [{
    key: "SetValue",
    value: function SetValue(value) {
      this.input.value = value;
    }
  }, {
    key: "GetValue",
    value: function GetValue() {
      return this.input.value;
    }
  }]);

  return Select;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/public/text.js":
/*!***************************************!*\
  !*** ./src/components/public/text.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var _text_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.css */ "./src/components/public/text.css");
/* harmony import */ var _partials_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/label */ "./src/components/partials/label.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }





var Text = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Text, _ComponentBase);

  var _super = _createSuper(Text);

  function Text(root, opts, theme) {
    var _this;

    _classCallCheck(this, Text);

    _this = _super.call(this, root, opts, theme);
    _this.listenMode = opts.listenMode || "input";

    if (!_classStaticPrivateFieldSpecGet(Text, Text, _supportedInputListenModes).includes(_this.listenMode)) {
      console.error("listenMode \"".concat(_this.listenMode, "\" is not supported for text component \"").concat(opts.label, "\"! Falling back on \"input\"."));
    }

    _this.label = (0,_partials_label__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.container, opts.label, theme);
    _this.input = _this.container.appendChild(document.createElement("input"));
    _this.input.type = "text";

    _this.input.classList.add("guify-text-input");

    if (opts.initial) _this.input.value = opts.initial; // Add ARIA attribute to input based on label text

    if (opts.label) _this.input.setAttribute("aria-label", opts.label);
    setTimeout(function () {
      _this.emit("initialized", _this.input.value);
    });

    _this.input.addEventListener(_this.listenMode, function (data) {
      console.log(data);

      _this.emit("input", data.target.value);
    }); // Gain focus


    _this.input.addEventListener("focus", function () {
      _this.focused = true;
    }); // Lose focus


    _this.input.addEventListener("blur", function () {
      _this.focused = false;
    });

    return _this;
  }

  _createClass(Text, [{
    key: "SetValue",
    value: function SetValue(value) {
      if (this.focused !== true) this.input.value = value;
    }
  }, {
    key: "GetValue",
    value: function GetValue() {
      return this.input.value;
    }
  }]);

  return Text;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

var _supportedInputListenModes = {
  writable: true,
  value: ["input", "change"]
};


/***/ }),

/***/ "./src/components/public/title.js":
/*!****************************************!*\
  !*** ./src/components/public/title.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var _component_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-base.js */ "./src/components/component-base.js");
/* harmony import */ var _title_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.css */ "./src/components/public/title.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Title = /*#__PURE__*/function (_ComponentBase) {
  _inherits(Title, _ComponentBase);

  var _super = _createSuper(Title);

  function Title(root, opts, theme) {
    var _this;

    _classCallCheck(this, Title);

    _this = _super.call(this, root, opts, theme);

    var background = _this.container.appendChild(document.createElement("div"));

    background.classList.add("guify-title");
    var label = background.appendChild(document.createElement("div"));
    label.classList.add("guify-title-text");
    label.innerHTML = "&#9632; ".concat(opts.label, " &#9632;");
    return _this;
  }

  return Title;
}(_component_base_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/gui.js":
/*!********************!*\
  !*** ./src/gui.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GUI)
/* harmony export */ });
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");
/* harmony import */ var dom_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./src/theme.js");
/* harmony import */ var _gui_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gui.css */ "./src/gui.css");
/* harmony import */ var _component_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-manager */ "./src/component-manager.js");
/* harmony import */ var _components_internal_menu_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/internal/menu-bar */ "./src/components/internal/menu-bar.js");
/* harmony import */ var _components_internal_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/internal/panel */ "./src/components/internal/panel.js");
/* harmony import */ var _components_internal_toast_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/internal/toast-area */ "./src/components/internal/toast-area.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_7__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var GUI = /*#__PURE__*/function () {
  function GUI(opts) {
    var _this = this;

    _classCallCheck(this, GUI);

    this.opts = opts;
    this.hasRoot = opts.root !== undefined;
    opts.width = opts.width || 300;
    opts.root = opts.root || document.body;
    opts.align = opts.align || "left"; // Can be 'left' or 'right'

    opts.opacity = opts.opacity || 1.0;
    opts.barMode = opts.barMode || "offset"; // Can be 'none', 'above', 'offset', or 'overlay'

    opts.panelMode = opts.panelMode || "inner";
    opts.panelOverflowBehavior = opts.panelOverflowBehavior || "scroll";
    opts.pollRateMS = opts.pollRateMS || 100;
    opts.open = opts.open || false; // Set theme from opts

    var themeName = opts.theme || "dark";
    this.theme = new _theme__WEBPACK_IMPORTED_MODULE_1__["default"](themeName);
    this.theme.Apply();

    this._ConstructElements();

    this._LoadStyles();

    if ((screenfull__WEBPACK_IMPORTED_MODULE_7___default().isEnabled)) {
      screenfull__WEBPACK_IMPORTED_MODULE_7___default().on("change", function () {
        _this.opts.root.classList.toggle("guify-fullscreen", (screenfull__WEBPACK_IMPORTED_MODULE_7___default().isFullscreen));
      });
    }

    this.componentManager = new _component_manager__WEBPACK_IMPORTED_MODULE_3__.ComponentManager(this.theme);
    this.loadedComponents = []; // Begin component update loop

    this._UpdateComponents();
  }
  /**
   * Load any runtime styling information needed here.
   */


  _createClass(GUI, [{
    key: "_LoadStyles",
    value: function _LoadStyles() {
      // Loads a font and appends it to the head
      var AppendFont = function AppendFont(href) {
        var elem = document.createElement("style");
        elem.setAttribute("type", "text/css");
        elem.setAttribute("rel", "stylesheet");
        elem.setAttribute("href", href);
        document.getElementsByTagName("head")[0].appendChild(elem);
      }; // Load the fonts we'll be using


      if (this.theme.font && this.theme.font.fontURL) {
        // Load theme font
        AppendFont(this.theme.font.fontURL);
      } else {
        // Fall back on "bundled" font
        AppendFont("//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css");
      }
    }
    /**
     * Create container, MenuBar, Panel, and ToastArea
     */

  }, {
    key: "_ConstructElements",
    value: function _ConstructElements() {
      var _this2 = this;

      // Create the container that all the other elements will be contained within
      this.container = document.createElement("div");
      this.container.classList.add("guify-container"); // Position the container relative to the root based on `opts`

      if (this.hasRoot && this.opts.barMode == "above") {
        this.container.classList.add("guify-container-above");
      } else if (this.hasRoot && this.opts.barMode == "overlay") {
        this.container.classList.add("guify-container-overlay");
      } else if (this.hasRoot && this.opts.barMode == "offset") {
        // Acts like "above", but adds top margin to the root to offset the title bar.
        this.container.classList.add("guify-container-above"); // Add top margin to the root to offset for the menu bar.

        console.log(window.getComputedStyle(this.opts.root).getPropertyValue("margin-top"));
        var topMargin = window.getComputedStyle(this.opts.root).getPropertyValue("margin-top") || "0px";
        dom_css__WEBPACK_IMPORTED_MODULE_0___default()(this.opts.root, {
          marginTop: "calc(".concat(topMargin, " + var(--size-menu-bar-height))")
        });
      } // Insert the container into the root as the first element


      this.opts.root.insertBefore(this.container, this.opts.root.childNodes[0]); // Create a menu bar if specified in `opts`

      if (this.opts.barMode !== "none") {
        this.bar = new _components_internal_menu_bar__WEBPACK_IMPORTED_MODULE_4__.MenuBar(this.container, this.opts, this.theme);
        this.bar.addListener("ontogglepanel", function () {
          _this2.panel.ToggleVisible();
        });
        this.bar.addListener("onfullscreenrequested", function () {
          _this2.ToggleFullscreen();
        });
      } // Create panel


      this.panel = new _components_internal_panel__WEBPACK_IMPORTED_MODULE_5__.Panel(this.container, this.opts, this.theme); // Show the panel by default if there's no menu bar or it's requested

      if (this.opts.barMode === "none" || this.opts.open === true) {
        this.panel.SetVisible(true);
      } else {
        // Otherwise hide it by default
        this.panel.SetVisible(false);
      } // Create toast area


      this.toaster = new _components_internal_toast_area__WEBPACK_IMPORTED_MODULE_6__.ToastArea(this.container, this.opts, this.theme);
    }
    /**
     * Polling loop that allows our components to update themselves.
     * You can set the frequency of this using `this.opts.pollRateMS`.
     */

  }, {
    key: "_UpdateComponents",
    value: function _UpdateComponents() {
      var _this3 = this;

      this.loadedComponents.forEach(function (component) {
        if (component.binding) {
          // Update the component from its bound value if the value has changed
          if (component.binding.object[component.binding.property] != component.oldValue) {
            component.SetValue(component.binding.object[component.binding.property]);
            component.oldValue = component.binding.object[component.binding.property];
          }
        }
      });
      setTimeout(function () {
        window.requestAnimationFrame(function () {
          _this3._UpdateComponents();
        });
      }, this.opts.pollRateMS);
    }
    /**
     * Creates a new component in the panel based on the provided options.
     * @param {*} [obj] Either an opts object or an array of opts objects
     * @param {Object} [applyToAll] Each property of this object will be applied to all opts objects
     */

  }, {
    key: "Register",
    value: function Register(obj) {
      var _this4 = this;

      var applyToAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (Array.isArray(obj)) {
        obj.forEach(function (item) {
          var merged = Object.assign(item, applyToAll);

          _this4._Register(merged);
        });
      } else {
        var merged = Object.assign(obj, applyToAll);
        return this._Register(merged);
      }
    }
  }, {
    key: "Remove",
    value: function Remove(obj) {
      obj.Remove();
      this.loadedComponents = this.loadedComponents.filter(function (item) {
        return item !== obj;
      });
    }
    /**
     * Creates new component in the panel based on the options provided.
     *
     * @param {Object} [opts] Options for the component
     */

  }, {
    key: "_Register",
    value: function _Register(opts) {
      if (opts.object && opts.property) if (opts.object[opts.property] === undefined) throw new Error("Object ".concat(opts.object, " has no property '").concat(opts.property, "'")); // Set opts properties from the input

      if (opts.object && opts.property) {
        opts.initial = opts.object[opts.property]; // If no label is specified, generate it from property name
        //opts.label = opts.label || property;
      }

      var root = this.panel.panel; // If a folder was specified, try to find a folder component with that name
      // and get its folderContainer.

      if (opts.folder) {
        var folderComp = this.loadedComponents.find(function (cmp) {
          return cmp === opts.folder || cmp.opts.type === "folder" && cmp.opts.label === opts.folder;
        });
        if (folderComp) root = folderComp.folderContainer;else throw new Error("No folder exists with the name ".concat(opts.folder));
      }

      var component = this.componentManager.Create(root, opts); // Add binding properties if specified

      if (opts.object && opts.property) {
        component["binding"] = {
          object: opts.object,
          property: opts.property
        };
      } // If the component has events, add listeners for those events.


      if (component.on) {
        component.on("initialized", function (data) {
          if (opts.onInitialize) opts.onInitialize(data);
        });
        component.on("input", function (data) {
          if (opts.object && opts.property) opts.object[opts.property] = data;

          if (opts.onChange) {
            opts.onChange(data);
          }
        });
      }

      this.loadedComponents.push(component);
      return component;
    }
    /**
     * Displays a toast notification under the MenuBar at the top of the root.
     *
     * @param {String} [message] The string you want displayed in the notification.
     * @param {Integer} [stayMS] The number of milliseconds to display the notification for
     * @param {Integer} [transitionMS] The number of milliseconds it takes for the notification to transition into disappearing
     */

  }, {
    key: "Toast",
    value: function Toast(message) {
      var stayMS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
      var transitionMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.toaster.CreateToast(message, stayMS, transitionMS);
    }
  }, {
    key: "ToggleFullscreen",
    value: function ToggleFullscreen() {
      var isFullscreen = (screenfull__WEBPACK_IMPORTED_MODULE_7___default().isFullscreen);

      if (isFullscreen) {
        screenfull__WEBPACK_IMPORTED_MODULE_7___default().exit();
      } else {
        console.log("Request fullscreen");
        screenfull__WEBPACK_IMPORTED_MODULE_7___default().request(this.opts.root);
      }
    } // Just for debugging.

  }, {
    key: "_SetAllEnabled",
    value: function _SetAllEnabled(enabled) {
      this.loadedComponents.forEach(function (item) {
        item.SetEnabled(enabled);
      });
    }
  }]);

  return GUI;
}();



/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Theme)
/* harmony export */ });
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes */ "./src/themes.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_themes__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Theme = /*#__PURE__*/function () {
  function Theme(themeName) {
    _classCallCheck(this, Theme);

    var theme = (_themes__WEBPACK_IMPORTED_MODULE_0___default())[themeName];

    if (theme === undefined) {
      console.error("There is no theme preset with the name '".concat(themeName, "'! Defaulting to dark theme."));
      theme = (_themes__WEBPACK_IMPORTED_MODULE_0___default().dark);
    } // Merge the base theme with the theme parameters and make
    // the result properties of this object


    Object.assign(this, baseTheme, theme);
  }
  /**
   * Takes the values from the theme object and applies them as CSS variables to the page.
   */


  _createClass(Theme, [{
    key: "Apply",
    value: function Apply() {
      console.log(this);
      var root = document.documentElement;
      root.style.setProperty("--color-menu-bar-background", this.colors.menuBarBackground);
      root.style.setProperty("--color-menu-bar-text", this.colors.menuBarText);
      root.style.setProperty("--color-panel-background", this.colors.panelBackground);
      root.style.setProperty("--color-component-background", this.colors.componentBackground);
      root.style.setProperty("--color-component-background-hover", this.colors.componentBackgroundHover);
      root.style.setProperty("--color-component-background-disabled", this.colors.componentBackgroundDisabled);
      root.style.setProperty("--color-component-foreground", this.colors.componentForeground);
      root.style.setProperty("--color-component-active", this.colors.componentActive);
      root.style.setProperty("--color-text-primary", this.colors.textPrimary);
      root.style.setProperty("--color-text-secondary", this.colors.textSecondary);
      root.style.setProperty("--color-text-hover", this.colors.textHover);
      root.style.setProperty("--color-text-active", this.colors.textActive);
      root.style.setProperty("--color-text-disabled", this.colors.textDisabled);
      root.style.setProperty("--size-menu-bar-height", this.sizing.menuBarHeight);
      root.style.setProperty("--size-component-height", this.sizing.componentHeight);
      root.style.setProperty("--size-component-spacing", this.sizing.componentSpacing);
      root.style.setProperty("--size-label-width", this.sizing.labelWidth);
      root.style.setProperty("--font-family", this.font.fontFamily);
      root.style.setProperty("--font-size", this.font.fontSize);
      root.style.setProperty("--font-weight", this.font.fontWeight);
      root.style.setProperty("--font-family-for-input", this.font.inputFontFamily);
    }
  }]);

  return Theme;
}();


var baseTheme = {
  name: "BaseTheme",
  colors: {
    menuBarBackground: "black",
    menuBarText: "black",
    panelBackground: "black",
    componentBackground: "black",
    componentBackgroundHover: "black",
    componentBackgroundDisabled: "black",
    componentForeground: "black",
    componentActive: "black",
    textPrimary: "black",
    textSecondary: "black",
    textHover: "black",
    textActive: "black",
    textDisabled: "black"
  },
  sizing: {
    menuBarHeight: "25px",
    componentHeight: "20px",
    componentSpacing: "5px",
    labelWidth: "42%"
  },
  font: {
    fontFamily: "'Hack', ui-monospace, monospace",
    fontSize: "11px",
    fontWeight: "400",
    // The font family used for `value` components.
    inputFontFamily: "'Hack', ui-monospace, monospace"
  }
};

/***/ }),

/***/ "./src/themes.js":
/*!***********************!*\
  !*** ./src/themes.js ***!
  \***********************/
/***/ ((module) => {

module.exports = {
  light: {
    name: "Light",
    colors: {
      menuBarBackground: "rgb(227, 227, 227)",
      menuBarText: "rgb(36, 36, 36)",
      panelBackground: "rgb(227, 227, 227)",
      componentBackground: "rgb(204, 204, 204)",
      componentBackgroundHover: "rgb(190, 190, 190)",
      componentBackgroundDisabled: "rgb(200, 200, 200)",
      componentForeground: "rgb(105, 105, 105)",
      componentActive: "rgb(36, 36, 36)",
      textPrimary: "rgb(36, 36, 36)",
      textSecondary: "rgb(87, 87, 87)",
      textHover: "rgb(204, 204, 204)",
      textActive: "rgb(204, 204, 204)",
      textDisabled: "rgb(180, 180, 180)"
    }
  },
  dark: {
    name: "Dark",
    colors: {
      menuBarBackground: "rgb(35, 35, 35)",
      menuBarText: "rgb(235, 235, 235)",
      panelBackground: "rgb(35, 35, 35)",
      componentBackground: "rgb(54, 54, 54)",
      componentBackgroundHover: "rgb(76, 76, 76)",
      componentBackgroundDisabled: "rgb(24, 24, 24)",
      componentForeground: "rgb(112, 112, 112)",
      componentActive: "rgb(202, 202, 202)",
      textPrimary: "rgb(235, 235, 235)",
      textSecondary: "rgb(181, 181, 181)",
      textHover: "rgb(235, 235, 235)",
      textActive: "rgb(54, 54, 54)",
      textDisabled: "rgb(54, 54, 54)"
    }
  },
  // Color scheme from https://metakirby5.github.io/yorha/
  yorha: {
    name: "YoRHa",
    colors: {
      menuBarBackground: "#CCC8B1",
      menuBarText: "#454138",
      panelBackground: "#CCC8B1",
      componentBackground: "#BAB5A1",
      componentBackgroundHover: "#877F6E",
      componentBackgroundDisabled: "#DED8C7",
      componentForeground: "#454138",
      componentActive: "#978F7E",
      textPrimary: "#454138",
      textSecondary: "#454138",
      textHover: "#CCC8B1",
      textActive: "#CCC8B1",
      textDisabled: "#BAB5A6"
    },
    //Optional
    font: {
      fontFamily: "helvetica, sans-serif",
      fontSize: "14px",
      fontWeight: "100",
      inputFontFamily: "ui-monospace, monospace"
    }
  }
};

/***/ }),

/***/ "./src/utils/math-utils.js":
/*!*********************************!*\
  !*** ./src/utils/math-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lerp": () => (/* binding */ lerp)
/* harmony export */ });
/**
     * Linearly interpolates `t` between `v0` and `v1`.
     * https://en.wikipedia.org/wiki/Linear_interpolation
     * @param {*} v0 Lower bound
     * @param {*} v1 Upper bound
     * @param {*} t Progress (value between 0 and 1)
     * @returns Mapped number
     */
function lerp(v0, v1, t) {
  return (1 - t) * v0 + t * v1;
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/internal/menu-bar.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/internal/menu-bar.css ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-bar {\n    background-color: var(--color-menu-bar-background);\n    height: var(--size-menu-bar-height);\n    width: 100%;\n    opacity: 1.0;\n    position: relative;\n    top: 0;\n    cursor: default;\n}\n\n.guify-bar-title {\n    color: var(--color-menu-bar-text);\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    line-height: var(--size-menu-bar-height);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.guify-bar-button {\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    margin: 0;\n\n}\n\n/* Hide default accessibility outlines since we're providing our own visual feedback */\n.guify-bar-button:focus {\n    outline: none;\n}\n.guify-bar-button::-moz-focus-inner {\n    border: 0;\n}\n\n.guify-bar-button:hover,\n.guify-bar-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.guify-bar-button:active {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}", "",{"version":3,"sources":["webpack://./src/components/internal/menu-bar.css"],"names":[],"mappings":"AAEA;IACI,kDAAkD;IAClD,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,wCAAwC;IACxC,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,gCAAgC;IAChC,mDAAmD;IACnD,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,SAAS;;AAEb;;AAEA,sFAAsF;AACtF;IACI,aAAa;AACjB;AACA;IACI,SAAS;AACb;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,0CAA0C;IAC1C,0DAA0D;AAC9D","sourcesContent":["@import \"../variables.css\";\n\n.guify-bar {\n    background-color: var(--color-menu-bar-background);\n    height: var(--size-menu-bar-height);\n    width: 100%;\n    opacity: 1.0;\n    position: relative;\n    top: 0;\n    cursor: default;\n}\n\n.guify-bar-title {\n    color: var(--color-menu-bar-text);\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    line-height: var(--size-menu-bar-height);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.guify-bar-button {\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    margin: 0;\n\n}\n\n/* Hide default accessibility outlines since we're providing our own visual feedback */\n.guify-bar-button:focus {\n    outline: none;\n}\n.guify-bar-button::-moz-focus-inner {\n    border: 0;\n}\n\n.guify-bar-button:hover,\n.guify-bar-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.guify-bar-button:active {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/internal/panel.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/internal/panel.css ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Container */\n\n.guify-panel-container {\n    position: absolute;\n    background: var(--color-panel-background);\n}\n\n.guify-panel-container-scrollable {\n    max-height: calc(100% - var(--size-menu-bar-height));\n    overflow: scroll;\n}\n\n/* Container modes (i.e. inner, outer) */\n\n.guify-panel-container-right-inner {\n    right: 0;\n    left: unset;\n}\n\n.guify-panel-container-left-inner {\n    right: unset;\n    left: 0;\n}\n\n.guify-panel-container-right-outer {\n    right: unset;\n    left: 100%;\n}\n\n.guify-panel-container-left-outer {\n    right: 100%;\n    left: unset;\n}\n\n.guify-fullscreen .guify-panel-container-right-inner,\n.guify-fullscreen .guify-panel-container-right-outer {\n    right: 0;\n    left: unset;\n}\n\n.guify-fullscreen .guify-panel-container-left-inner,\n.guify-fullscreen .guify-panel-container-left-outer {\n    right: unset;\n    left: 0;\n}\n\n/* Panel (in container) */\n\n.guify-panel {\n    padding: 14px;\n    /* Last component will have a margin, so reduce padding to account for this */\n    padding-bottom: calc(14px - var(--size-component-spacing));\n\n    /* all: initial;  */\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.guify-panel.guify-panel-hidden {\n    height: 0px;\n    display: none;\n}\n\n.guify-panel * {\n    box-sizing: content-box;\n    box-sizing: initial;\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n}\n\n.guify-panel input {\n    display: inline;\n}\n\n.guify-panel a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.guify-panel-toggle-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 15px;\n    height: 15px;\n    line-height: 15px;\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n}\n\n/* Open/Close button styling */\n.guify-panel-toggle-button svg {\n    fill-opacity: 0;\n    stroke-width: 3;\n    stroke: var(--color-component-foreground);\n}\n\n/* Remove browser default outlines since we're providing our own */\n.guify-panel-toggle-button:focus {\n    outline:none;\n}\n.guify-panel-toggle-button::-moz-focus-inner {\n    border: 0;\n}\n\n.guify-panel-toggle-button:hover,\n.guify-panel-toggle-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.guify-panel-toggle-button:active {\n    color: var(--color-text-active);\n    background-color:var(--color-component-active);\n}", "",{"version":3,"sources":["webpack://./src/components/internal/panel.css"],"names":[],"mappings":"AAEA,cAAc;;AAEd;IACI,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,oDAAoD;IACpD,gBAAgB;AACpB;;AAEA,wCAAwC;;AAExC;IACI,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;AACf;;AAEA;;IAEI,QAAQ;IACR,WAAW;AACf;;AAEA;;IAEI,YAAY;IACZ,OAAO;AACX;;AAEA,yBAAyB;;AAEzB;IACI,aAAa;IACb,6EAA6E;IAC7E,0DAA0D;;IAE1D,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,uBAAmB;IAAnB,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,gCAAgC;IAChC,mDAAmD;;IAEnD,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;;AAErB;;AAEA,8BAA8B;AAC9B;IACI,eAAe;IACf,eAAe;IACf,yCAAyC;AAC7C;;AAEA,kEAAkE;AAClE;IACI,YAAY;AAChB;AACA;IACI,SAAS;AACb;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,+BAA+B;IAC/B,8CAA8C;AAClD","sourcesContent":["@import \"../variables.css\";\n\n/* Container */\n\n.guify-panel-container {\n    position: absolute;\n    background: var(--color-panel-background);\n}\n\n.guify-panel-container-scrollable {\n    max-height: calc(100% - var(--size-menu-bar-height));\n    overflow: scroll;\n}\n\n/* Container modes (i.e. inner, outer) */\n\n.guify-panel-container-right-inner {\n    right: 0;\n    left: unset;\n}\n\n.guify-panel-container-left-inner {\n    right: unset;\n    left: 0;\n}\n\n.guify-panel-container-right-outer {\n    right: unset;\n    left: 100%;\n}\n\n.guify-panel-container-left-outer {\n    right: 100%;\n    left: unset;\n}\n\n.guify-fullscreen .guify-panel-container-right-inner,\n.guify-fullscreen .guify-panel-container-right-outer {\n    right: 0;\n    left: unset;\n}\n\n.guify-fullscreen .guify-panel-container-left-inner,\n.guify-fullscreen .guify-panel-container-left-outer {\n    right: unset;\n    left: 0;\n}\n\n/* Panel (in container) */\n\n.guify-panel {\n    padding: 14px;\n    /* Last component will have a margin, so reduce padding to account for this */\n    padding-bottom: calc(14px - var(--size-component-spacing));\n\n    /* all: initial;  */\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.guify-panel.guify-panel-hidden {\n    height: 0px;\n    display: none;\n}\n\n.guify-panel * {\n    box-sizing: initial;\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n}\n\n.guify-panel input {\n    display: inline;\n}\n\n.guify-panel a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.guify-panel-toggle-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 15px;\n    height: 15px;\n    line-height: 15px;\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n}\n\n/* Open/Close button styling */\n.guify-panel-toggle-button svg {\n    fill-opacity: 0;\n    stroke-width: 3;\n    stroke: var(--color-component-foreground);\n}\n\n/* Remove browser default outlines since we're providing our own */\n.guify-panel-toggle-button:focus {\n    outline:none;\n}\n.guify-panel-toggle-button::-moz-focus-inner {\n    border: 0;\n}\n\n.guify-panel-toggle-button:hover,\n.guify-panel-toggle-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.guify-panel-toggle-button:active {\n    color: var(--color-text-active);\n    background-color:var(--color-component-active);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/internal/toast-area.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/internal/toast-area.css ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-toast-notification {\n    box-sizing: border-box;\n    position: relative;\n    width: 100%;\n    /* height: 20px; */\n    padding: 8px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    font-weight: var(--font-weight);\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(odd) {\n    color: var(--color-text-primary);\n    background-color:var(--color-panel-background);\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(even) {\n    color: var(--color-text-primary);\n    background-color: var(--color-menu-bar-background);\n}\n\n.guify-toast-close-button {\n    color: var(--color-text-primary);\n    background: transparent;\n    position: absolute;\n    text-align: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    border: none;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 8px;\n}", "",{"version":3,"sources":["webpack://./src/components/internal/toast-area.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;;IAElB,+BAA+B;IAC/B,2BAA2B;IAC3B,+BAA+B;AACnC;;AAEA;IACI,gCAAgC;IAChC,8CAA8C;AAClD;;AAEA;IACI,gCAAgC;IAChC,kDAAkD;AACtD;;AAEA;IACI,gCAAgC;IAChC,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,MAAM;IACN,SAAS;IACT,UAAU;AACd","sourcesContent":["@import \"../variables.css\";\n\n.guify-toast-notification {\n    box-sizing: border-box;\n    position: relative;\n    width: 100%;\n    /* height: 20px; */\n    padding: 8px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    font-weight: var(--font-weight);\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(odd) {\n    color: var(--color-text-primary);\n    background-color:var(--color-panel-background);\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(even) {\n    color: var(--color-text-primary);\n    background-color: var(--color-menu-bar-background);\n}\n\n.guify-toast-close-button {\n    color: var(--color-text-primary);\n    background: transparent;\n    position: absolute;\n    text-align: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    border: none;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 8px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/partials/container.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/partials/container.css ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-component-container {\n    position: relative;\n    min-height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    margin-bottom: var(--size-component-spacing);\n}", "",{"version":3,"sources":["webpack://./src/components/partials/container.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,wCAAwC;IACxC,yCAAyC;IACzC,4CAA4C;AAChD","sourcesContent":["@import \"../variables.css\";\n\n.guify-component-container {\n    position: relative;\n    min-height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    margin-bottom: var(--size-component-spacing);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/partials/label.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/partials/label.css ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-component-label {\n    left: 0;\n    width: calc(var(--size-label-width) - 2%);\n    display: inline-block;\n    margin-right: 2%;\n    vertical-align: top;\n    min-height: var(--size-component-height);\n    line-height: var(--size-component-height);\n\n    color: var(--color-text-primary);\n}\n\n/* Disabled styles */\n.disabled .guify-component-label {\n    color: var(--color-text-disabled);\n}", "",{"version":3,"sources":["webpack://./src/components/partials/label.css"],"names":[],"mappings":"AAEA;IACI,OAAO;IACP,yCAAyC;IACzC,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;IACnB,wCAAwC;IACxC,yCAAyC;;IAEzC,gCAAgC;AACpC;;AAEA,oBAAoB;AACpB;IACI,iCAAiC;AACrC","sourcesContent":["@import \"../variables.css\";\n\n.guify-component-label {\n    left: 0;\n    width: calc(var(--size-label-width) - 2%);\n    display: inline-block;\n    margin-right: 2%;\n    vertical-align: top;\n    min-height: var(--size-component-height);\n    line-height: var(--size-component-height);\n\n    color: var(--color-text-primary);\n}\n\n/* Disabled styles */\n.disabled .guify-component-label {\n    color: var(--color-text-disabled);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/partials/value.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/partials/value.css ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-value-input {\n    position: absolute;\n    background-color: var(--color-component-background);\n    padding-left: 1%;\n    height: var(--size-component-height);\n    display: inline-block;\n    overflow: hidden;\n    border: none;\n\n    color: var(--color-text-secondary);\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n    cursor: text;\n    line-height: var(--size-component-height);\n    word-break: break-all;\n\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n\n    font-family: var(--font-family-for-input);\n\n    border-radius: 0;\n}\n\n.guify-value-input-right {\n    right: 0 !important;\n}\n\n.disabled .guify-value-input {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n    color: var(--color-text-disabled);\n}", "",{"version":3,"sources":["webpack://./src/components/partials/value.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,mDAAmD;IACnD,gBAAgB;IAChB,oCAAoC;IACpC,qBAAqB;IACrB,gBAAgB;IAChB,YAAY;;IAEZ,kCAAkC;IAClC,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;IACjB,YAAY;IACZ,yCAAyC;IACzC,qBAAqB;;IAErB,iCAAiC;IACjC,sCAAsC;IACtC,yCAAyC;;IAEzC,yCAAyC;;IAEzC,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,4DAA4D;IAC5D,iCAAiC;AACrC","sourcesContent":["@import \"../variables.css\";\n\n.guify-value-input {\n    position: absolute;\n    background-color: var(--color-component-background);\n    padding-left: 1%;\n    height: var(--size-component-height);\n    display: inline-block;\n    overflow: hidden;\n    border: none;\n\n    color: var(--color-text-secondary);\n    user-select: text;\n    cursor: text;\n    line-height: var(--size-component-height);\n    word-break: break-all;\n\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n\n    font-family: var(--font-family-for-input);\n\n    border-radius: 0;\n}\n\n.guify-value-input-right {\n    right: 0 !important;\n}\n\n.disabled .guify-value-input {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n    color: var(--color-text-disabled);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/button.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/button.css ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-button {\n    box-sizing: border-box !important;\n    color: var(--color-text-secondary);\n    background-color: var(--color-component-background);\n\n    position: absolute;\n    text-align: center;\n    height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    padding-top: 0px;\n    padding-bottom: 0px;\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    cursor: pointer;\n    right: 0;\n    font-family: inherit;\n}\n\n.guify-button:focus {\n    outline:none;\n}\n.guify-button::-moz-focus-inner {\n    border:0;\n}\n\n.guify-button:hover,\n.guify-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.guify-button:active {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}\n\n*.disabled > .guify-button {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n    color: var(--color-text-disabled);\n}", "",{"version":3,"sources":["webpack://./src/components/public/button.css"],"names":[],"mappings":"AAEA;IACI,iCAAiC;IACjC,kCAAkC;IAClC,mDAAmD;;IAEnD,kBAAkB;IAClB,kBAAkB;IAClB,oCAAoC;IACpC,yCAAyC;IACzC,gBAAgB;IAChB,mBAAmB;IACnB,2CAA2C;IAC3C,YAAY;IACZ,eAAe;IACf,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;AACA;IACI,QAAQ;AACZ;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,0CAA0C;IAC1C,0DAA0D;AAC9D;;AAEA;IACI,oBAAoB;IACpB,4DAA4D;IAC5D,iCAAiC;AACrC","sourcesContent":["@import \"../variables.css\";\n\n.guify-button {\n    box-sizing: border-box !important;\n    color: var(--color-text-secondary);\n    background-color: var(--color-component-background);\n\n    position: absolute;\n    text-align: center;\n    height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    padding-top: 0px;\n    padding-bottom: 0px;\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    cursor: pointer;\n    right: 0;\n    font-family: inherit;\n}\n\n.guify-button:focus {\n    outline:none;\n}\n.guify-button::-moz-focus-inner {\n    border:0;\n}\n\n.guify-button:hover,\n.guify-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.guify-button:active {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}\n\n*.disabled > .guify-button {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n    color: var(--color-text-disabled);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/checkbox.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/checkbox.css ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --checkbox-border-width: 4px;\n}\n\ninput[type=checkbox].guify-checkbox {\n    opacity: 0;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n}\n\ninput[type=checkbox].guify-checkbox + label {\n    margin: 0;\n}\n\ninput[type=checkbox].guify-checkbox + label:before {\n    content: \"\";\n    display: inline-block;\n    width: var(--size-component-height);\n    height: var(--size-component-height);\n    padding: 0;\n    margin: 0;\n    vertical-align: middle;\n    background-color: var(--color-component-background);\n    border-radius: 0px;\n    cursor: pointer;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n\n}\n\n/* Hover style */\ninput[type=checkbox].guify-checkbox:hover:not(:disabled) + label:before {\n    width: calc(var(--size-component-height) - (4px * 2));\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (4px * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-background-hover);\n    border: solid 4px var(--color-component-background);\n}\n\n/* Checked style */\ninput[type=checkbox]:checked.guify-checkbox + label:before {\n    width: calc(var(--size-component-height) - (4px * 2));\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (4px * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-foreground);\n    border: solid 4px var(--color-component-background);\n    border: solid var(--checkbox-border-width) var(--color-component-background);\n}\n\n/* Focused and checked */\ninput[type=checkbox]:checked.guify-checkbox:focus + label:before {\n    width: calc(var(--size-component-height) - (4px * 2));\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (4px * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-foreground);\n    border: solid 4px var(--color-component-background-hover);\n    border: solid var(--checkbox-border-width) var(--color-component-background-hover);\n}\n\n/* Focus and unchecked */\ninput[type=checkbox].guify-checkbox:focus + label:before {\n    background-color: var(--color-component-background-hover);\n}\n\n/* Disabled styles */\n.disabled input[type=checkbox].guify-checkbox + label {\n    pointer-events: none;\n}\n.disabled input[type=\"checkbox\"].guify-checkbox + label::before {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n}", "",{"version":3,"sources":["webpack://./src/components/public/checkbox.css"],"names":[],"mappings":"AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,qBAAqB;IACrB,wBAAwB;IACxB,SAAS;IACT,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,mCAAmC;IACnC,oCAAoC;IACpC,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,mDAAmD;IACnD,kBAAkB;IAClB,eAAe;IACf,uBAAuB;IACvB,4BAA4B;IAC5B,+BAA+B;;AAEnC;;AAEA,gBAAgB;AAChB;IACI,qDAA8E;IAA9E,8EAA8E;IAC9E,sDAA+E;IAA/E,+EAA+E;IAC/E,yDAAyD;IACzD,mDAAmD;AACvD;;AAEA,kBAAkB;AAClB;IACI,qDAA8E;IAA9E,8EAA8E;IAC9E,sDAA+E;IAA/E,+EAA+E;IAC/E,mDAAmD;IACnD,mDAA4E;IAA5E,4EAA4E;AAChF;;AAEA,wBAAwB;AACxB;IACI,qDAA8E;IAA9E,8EAA8E;IAC9E,sDAA+E;IAA/E,+EAA+E;IAC/E,mDAAmD;IACnD,yDAAkF;IAAlF,kFAAkF;AACtF;;AAEA,wBAAwB;AACxB;IACI,yDAAyD;AAC7D;;AAEA,oBAAoB;AACpB;IACI,oBAAoB;AACxB;AACA;IACI,oBAAoB;IACpB,4DAA4D;AAChE","sourcesContent":["@import \"../variables.css\";\n\n:root {\n    --checkbox-border-width: 4px;\n}\n\ninput[type=checkbox].guify-checkbox {\n    opacity: 0;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n}\n\ninput[type=checkbox].guify-checkbox + label {\n    margin: 0;\n}\n\ninput[type=checkbox].guify-checkbox + label:before {\n    content: \"\";\n    display: inline-block;\n    width: var(--size-component-height);\n    height: var(--size-component-height);\n    padding: 0;\n    margin: 0;\n    vertical-align: middle;\n    background-color: var(--color-component-background);\n    border-radius: 0px;\n    cursor: pointer;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n\n}\n\n/* Hover style */\ninput[type=checkbox].guify-checkbox:hover:not(:disabled) + label:before {\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-background-hover);\n    border: solid 4px var(--color-component-background);\n}\n\n/* Checked style */\ninput[type=checkbox]:checked.guify-checkbox + label:before {\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-foreground);\n    border: solid var(--checkbox-border-width) var(--color-component-background);\n}\n\n/* Focused and checked */\ninput[type=checkbox]:checked.guify-checkbox:focus + label:before {\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-foreground);\n    border: solid var(--checkbox-border-width) var(--color-component-background-hover);\n}\n\n/* Focus and unchecked */\ninput[type=checkbox].guify-checkbox:focus + label:before {\n    background-color: var(--color-component-background-hover);\n}\n\n/* Disabled styles */\n.disabled input[type=checkbox].guify-checkbox + label {\n    pointer-events: none;\n}\n.disabled input[type=\"checkbox\"].guify-checkbox + label::before {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/color.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/color.css ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styling for simple-color-picker */\n\n.guify-color .Scp {\n    width: 125px;\n    height: 100px;\n    -webkit-user-select: none;\n        -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n    position: relative;\n    z-index: 1000;\n    cursor: pointer;\n}\n.guify-color .Scp-saturation {\n    position: relative;\n    width: calc(100% - 25px);\n    height: 100%;\n    background: linear-gradient(to right, #fff 0%, #f00 100%);\n    float: left;\n    margin-right: 5px;\n}\n.guify-color .Scp-brightness {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to top, #000 0%, rgba(255,255,255,0) 100%);\n}\n.guify-color .Scp-sbSelector {\n    border: 1px solid;\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    background: #fff;\n    border-radius: 10px;\n    top: -7px;\n    left: -7px;\n    box-sizing: border-box;\n    z-index: 10;\n}\n.guify-color .Scp-hue {\n    width: 20px;\n    height: 100%;\n    position: relative;\n    float: left;\n    background: linear-gradient(to bottom, #f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);\n}\n.guify-color .Scp-hSelector {\n    position: absolute;\n    background: #fff;\n    border-bottom: 1px solid #000;\n    right: -3px;\n    width: 10px;\n    height: 2px;\n}\n\n/* Disabled styles */\n.disabled .guify-color {\n    pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/components/public/color.css"],"names":[],"mappings":"AAEA,oCAAoC;;AAEpC;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;QACrB,sBAAsB;YAClB,qBAAqB;gBACjB,iBAAiB;IAC7B,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,YAAY;IACZ,yDAAyD;IACzD,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,sEAAsE;AAC1E;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,4GAA4G;AAChH;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,6BAA6B;IAC7B,WAAW;IACX,WAAW;IACX,WAAW;AACf;;AAEA,oBAAoB;AACpB;IACI,oBAAoB;AACxB","sourcesContent":["@import \"../variables.css\";\n\n/* Styling for simple-color-picker */\n\n.guify-color .Scp {\n    width: 125px;\n    height: 100px;\n    -webkit-user-select: none;\n        -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n    position: relative;\n    z-index: 1000;\n    cursor: pointer;\n}\n.guify-color .Scp-saturation {\n    position: relative;\n    width: calc(100% - 25px);\n    height: 100%;\n    background: linear-gradient(to right, #fff 0%, #f00 100%);\n    float: left;\n    margin-right: 5px;\n}\n.guify-color .Scp-brightness {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to top, #000 0%, rgba(255,255,255,0) 100%);\n}\n.guify-color .Scp-sbSelector {\n    border: 1px solid;\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    background: #fff;\n    border-radius: 10px;\n    top: -7px;\n    left: -7px;\n    box-sizing: border-box;\n    z-index: 10;\n}\n.guify-color .Scp-hue {\n    width: 20px;\n    height: 100%;\n    position: relative;\n    float: left;\n    background: linear-gradient(to bottom, #f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);\n}\n.guify-color .Scp-hSelector {\n    position: absolute;\n    background: #fff;\n    border-bottom: 1px solid #000;\n    right: -3px;\n    width: 10px;\n    height: 2px;\n}\n\n/* Disabled styles */\n.disabled .guify-color {\n    pointer-events: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/display.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/display.css ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-display {\n    display: inline-block;\n    height: unset;\n    min-height: var(--size-component-height);\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    color: var(--color-text-secondary);\n    font-family: inherit;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    vertical-align: sub;\n    line-height: 1rem;\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n}\n\n.disabled .guify-display {\n    color: var(--color-text-disabled);\n}", "",{"version":3,"sources":["webpack://./src/components/public/display.css"],"names":[],"mappings":"AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,wCAAwC;IACxC,2CAA2C;IAC3C,YAAY;IACZ,kCAAkC;IAClC,oBAAoB;IACpB,sBAAsB;IACtB,2BAA2B;IAC3B,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":["@import \"../variables.css\";\n\n.guify-display {\n    display: inline-block;\n    height: unset;\n    min-height: var(--size-component-height);\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    color: var(--color-text-secondary);\n    font-family: inherit;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    vertical-align: sub;\n    line-height: 1rem;\n    user-select: text;\n}\n\n.disabled .guify-display {\n    color: var(--color-text-disabled);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/file.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/file.css ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-file-container {\n    display: inline-block;\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n    cursor: pointer;\n}\n\n.guify-file-container:hover:not(:disabled),\n.guify-file-container:focus:not(:disabled) {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.guify-file-container:active:not(:disabled) {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}\n\n.guify-dragover:not(:disabled) {\n    background-color: var(--color-component-background);\n    box-shadow: inset 0 0 0 3px var(--color-component-foreground);\n}\n\n.disabled.guify-file-container {\n    pointer-events: none;\n    color: var(--color-text-disabled) !important;\n    background-color: var(--color-component-background-disabled) !important;\n    box-shadow: inset 0 0 0 3px var(--color-component-background-disabled) !important;\n}", "",{"version":3,"sources":["webpack://./src/components/public/file.css"],"names":[],"mappings":"AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,gCAAgC;IAChC,mDAAmD;IACnD,eAAe;AACnB;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,0CAA0C;IAC1C,0DAA0D;AAC9D;;AAEA;IACI,mDAAmD;IACnD,6DAA6D;AACjE;;AAEA;IACI,oBAAoB;IACpB,4CAA4C;IAC5C,uEAAuE;IACvE,iFAAiF;AACrF","sourcesContent":["@import \"../variables.css\";\n\n.guify-file-container {\n    display: inline-block;\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n    cursor: pointer;\n}\n\n.guify-file-container:hover:not(:disabled),\n.guify-file-container:focus:not(:disabled) {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.guify-file-container:active:not(:disabled) {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}\n\n.guify-dragover:not(:disabled) {\n    background-color: var(--color-component-background);\n    box-shadow: inset 0 0 0 3px var(--color-component-foreground);\n}\n\n.disabled.guify-file-container {\n    pointer-events: none;\n    color: var(--color-text-disabled) !important;\n    background-color: var(--color-component-background-disabled) !important;\n    box-shadow: inset 0 0 0 3px var(--color-component-background-disabled) !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/folder.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/folder.css ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-folder {\n    cursor: pointer;\n    padding-left: 0.5em;\n    color: var(--color-text-primary);\n}\n\n.guify-folder div {\n    display: inline-block;\n    vertical-align: sub;\n    line-height: var(--size-component-height);\n}\n\n.guify-folder:hover,\n.guify-folder:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n    outline: none;\n}\n\n\n.guify-folder-contents {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 14px;\n    margin-bottom: 5px;\n    border-left: 2px solid var(--color-component-background);\n}\n\n.guify-folder-contents.guify-folder-closed {\n    height: 0;\n    display: none;\n}\n\n.guify-folder .guify-folder-arrow {\n    width: 1.5em;\n    vertical-align: middle;\n}\n\n/* Disabled styles */\n\n.guify-folder.disabled {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n}\n\n.guify-folder.disabled + .guify-folder-contents {\n    pointer-events: none;\n}", "",{"version":3,"sources":["webpack://./src/components/public/folder.css"],"names":[],"mappings":"AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;IACnD,aAAa;AACjB;;;AAGA;IACI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,wDAAwD;AAC5D;;AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA,oBAAoB;;AAEpB;IACI,oBAAoB;IACpB,iCAAiC;AACrC;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":["@import \"../variables.css\";\n\n.guify-folder {\n    cursor: pointer;\n    padding-left: 0.5em;\n    color: var(--color-text-primary);\n}\n\n.guify-folder div {\n    display: inline-block;\n    vertical-align: sub;\n    line-height: var(--size-component-height);\n}\n\n.guify-folder:hover,\n.guify-folder:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n    outline: none;\n}\n\n\n.guify-folder-contents {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 14px;\n    margin-bottom: 5px;\n    border-left: 2px solid var(--color-component-background);\n}\n\n.guify-folder-contents.guify-folder-closed {\n    height: 0;\n    display: none;\n}\n\n.guify-folder .guify-folder-arrow {\n    width: 1.5em;\n    vertical-align: middle;\n}\n\n/* Disabled styles */\n\n.guify-folder.disabled {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n}\n\n.guify-folder.disabled + .guify-folder-contents {\n    pointer-events: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/interval.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/interval.css ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --interval-track-color: var(--color-component-background);\n    --interval-thumb-color: var(--color-component-foreground);\n    --interval-thumb-highlight: var(--color-component-active);\n\n    --interval-track-color-disabled: var(--color-component-background-disabled);\n    --interval-thumb-color-disabled: var(--color-text-disabled);\n}\n\n.guify-interval {\n    -webkit-appearance: none;\n    position: absolute;\n    height: var(--size-component-height);\n    margin: 0px 0;\n    width: 33%;\n    left: 54.5%;\n    background-color: var(--color-component-background);\n    background-color: var(--interval-track-color);\n    cursor: ew-resize;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.guify-interval-handle {\n    background-color: var(--color-component-foreground);\n    background-color: var(--interval-thumb-color);\n    position: absolute;\n    height: var(--size-component-height);\n    min-width: 1px;\n}\n.guify-interval-handle:focus {\n    background: var(--color-component-active);\n    background: var(--interval-thumb-highlight);\n}\n\n.disabled .guify-interval {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n    background-color: var(--interval-track-color-disabled);\n}\n\n.disabled .guify-interval .guify-interval-handle {\n    background: var(--color-text-disabled);\n    background: var(--interval-thumb-color-disabled);\n}", "",{"version":3,"sources":["webpack://./src/components/public/interval.css"],"names":[],"mappings":"AAEA;IACI,yDAAyD;IACzD,yDAAyD;IACzD,yDAAyD;;IAEzD,2EAA2E;IAC3E,2DAA2D;AAC/D;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,oCAAoC;IACpC,aAAa;IACb,UAAU;IACV,WAAW;IACX,mDAA6C;IAA7C,6CAA6C;IAC7C,iBAAiB;;IAEjB,2BAA2B;IAC3B,yBAAyB;IAEzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,mDAA6C;IAA7C,6CAA6C;IAC7C,kBAAkB;IAClB,oCAAoC;IACpC,cAAc;AAClB;AACA;IACI,yCAA2C;IAA3C,2CAA2C;AAC/C;;AAEA;IACI,oBAAoB;IACpB,4DAAsD;IAAtD,sDAAsD;AAC1D;;AAEA;IACI,sCAAgD;IAAhD,gDAAgD;AACpD","sourcesContent":["@import \"../variables.css\";\n\n:root {\n    --interval-track-color: var(--color-component-background);\n    --interval-thumb-color: var(--color-component-foreground);\n    --interval-thumb-highlight: var(--color-component-active);\n\n    --interval-track-color-disabled: var(--color-component-background-disabled);\n    --interval-thumb-color-disabled: var(--color-text-disabled);\n}\n\n.guify-interval {\n    -webkit-appearance: none;\n    position: absolute;\n    height: var(--size-component-height);\n    margin: 0px 0;\n    width: 33%;\n    left: 54.5%;\n    background-color: var(--interval-track-color);\n    cursor: ew-resize;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.guify-interval-handle {\n    background-color: var(--interval-thumb-color);\n    position: absolute;\n    height: var(--size-component-height);\n    min-width: 1px;\n}\n.guify-interval-handle:focus {\n    background: var(--interval-thumb-highlight);\n}\n\n.disabled .guify-interval {\n    pointer-events: none;\n    background-color: var(--interval-track-color-disabled);\n}\n\n.disabled .guify-interval .guify-interval-handle {\n    background: var(--interval-thumb-color-disabled);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/range.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/range.css ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --range-track-color: var(--color-component-background);\n    --range-thumb-color: var(--color-component-foreground);\n    --range-thumb-highlight: var(--color-component-active);\n\n    --range-track-color-disabled: var(--color-component-background-disabled);\n    --range-thumb-color-disabled: var(--color-text-disabled);\n}\n\ninput[type=range].guify-range {\n    position: absolute; /* Gets rid of weird spacing below slider that I can't figure out the source of, seems internal */\n    -webkit-appearance: none;\n    width: 100%;\n    height: var(--size-component-height);\n    margin: 0px 0;\n    padding: 0;\n    display: inline-block;\n\n    /* Fixes for Safari iOS */\n    border-radius: 0;\n    border: none;\n    background-color: transparent;\n}\n\n.disabled input[type=range].guify-range {\n    pointer-events: none;\n}\n\n/* Remove outlines since we'll be adding our own */\ninput[type=range].guify-range:focus {\n    outline: none;\n}\ninput[type=range].guify-range::-moz-focus-outer {\n    border: 0;\n}\n\n/* Webkit */\ninput[type=range].guify-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: var(--size-component-height);\n    cursor: ew-resize;\n    background: var(--color-component-background);\n    background: var(--range-track-color);\n}\ninput[type=range].guify-range::-webkit-slider-thumb {\n    height: var(--size-component-height);\n    width: 10px;\n    background: var(--color-component-foreground);\n    background: var(--range-thumb-color);\n    cursor: ew-resize;\n    -webkit-appearance: none;\n    margin-top: 0px;\n    border: 0;\n}\ninput[type=range].guify-range:focus::-webkit-slider-runnable-track {\n    background: var(--color-component-active);\n    background: var(--range-thumb-highlight);\n    outline: none;\n}\n\n.disabled input[type=range].guify-range::-webkit-slider-runnable-track { /* Disabled track */\n    pointer-events: none;\n    background: var(--color-component-background-disabled);\n    background: var(--range-track-color-disabled);\n}\n\n.disabled input[type=range].guify-range::-webkit-slider-thumb { /* Disabled thumb */\n    pointer-events: none;\n    background: var(--color-text-disabled);\n}\n\n/* Gecko */\ninput[type=range].guify-range::-moz-range-track {\n    width: 100%;\n    height: var(--size-component-height);\n    cursor: ew-resize;\n    background: var(--color-component-background);\n    background: var(--range-track-color);\n}\ninput[type=range].guify-range:focus::-moz-range-track {\n    background: var(--color-component-active);\n    background: var(--range-thumb-highlight);\n}\ninput[type=range].guify-range::-moz-range-thumb {\n    height: var(--size-component-height);\n    width: 10px;\n    background: var(--color-component-foreground);\n    background: var(--range-thumb-color);\n    cursor: ew-resize;\n    border: none;\n    border-radius: 0;\n}\n\n.disabled input[type=range].guify-range::-moz-range-track { /* Disabled track */\n    pointer-events: none;\n    background: var(--color-component-background-disabled);\n    background: var(--range-track-color-disabled);\n}\n\n.disabled input[type=range].guify-range::-moz-range-thumb { /* Disabled thumb */\n    pointer-events: none;\n    background: var(--color-text-disabled);\n    background: var(--range-thumb-color-disabled);\n}", "",{"version":3,"sources":["webpack://./src/components/public/range.css"],"names":[],"mappings":"AAEA;IACI,sDAAsD;IACtD,sDAAsD;IACtD,sDAAsD;;IAEtD,wEAAwE;IACxE,wDAAwD;AAC5D;;AAEA;IACI,kBAAkB,EAAE,iGAAiG;IACrH,wBAAwB;IACxB,WAAW;IACX,oCAAoC;IACpC,aAAa;IACb,UAAU;IACV,qBAAqB;;IAErB,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;AACxB;;AAEA,kDAAkD;AAClD;IACI,aAAa;AACjB;AACA;IACI,SAAS;AACb;;AAEA,WAAW;AACX;IACI,WAAW;IACX,oCAAoC;IACpC,iBAAiB;IACjB,6CAAoC;IAApC,oCAAoC;AACxC;AACA;IACI,oCAAoC;IACpC,WAAW;IACX,6CAAoC;IAApC,oCAAoC;IACpC,iBAAiB;IACjB,wBAAwB;IACxB,eAAe;IACf,SAAS;AACb;AACA;IACI,yCAAwC;IAAxC,wCAAwC;IACxC,aAAa;AACjB;;AAEA,yEAAyE,mBAAmB;IACxF,oBAAoB;IACpB,sDAA6C;IAA7C,6CAA6C;AACjD;;AAEA,gEAAgE,mBAAmB;IAC/E,oBAAoB;IACpB,sCAAsC;AAC1C;;AAEA,UAAU;AACV;IACI,WAAW;IACX,oCAAoC;IACpC,iBAAiB;IACjB,6CAAoC;IAApC,oCAAoC;AACxC;AACA;IACI,yCAAwC;IAAxC,wCAAwC;AAC5C;AACA;IACI,oCAAoC;IACpC,WAAW;IACX,6CAAoC;IAApC,oCAAoC;IACpC,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;AACpB;;AAEA,4DAA4D,mBAAmB;IAC3E,oBAAoB;IACpB,sDAA6C;IAA7C,6CAA6C;AACjD;;AAEA,4DAA4D,mBAAmB;IAC3E,oBAAoB;IACpB,sCAA6C;IAA7C,6CAA6C;AACjD","sourcesContent":["@import \"../variables.css\";\n\n:root {\n    --range-track-color: var(--color-component-background);\n    --range-thumb-color: var(--color-component-foreground);\n    --range-thumb-highlight: var(--color-component-active);\n\n    --range-track-color-disabled: var(--color-component-background-disabled);\n    --range-thumb-color-disabled: var(--color-text-disabled);\n}\n\ninput[type=range].guify-range {\n    position: absolute; /* Gets rid of weird spacing below slider that I can't figure out the source of, seems internal */\n    -webkit-appearance: none;\n    width: 100%;\n    height: var(--size-component-height);\n    margin: 0px 0;\n    padding: 0;\n    display: inline-block;\n\n    /* Fixes for Safari iOS */\n    border-radius: 0;\n    border: none;\n    background-color: transparent;\n}\n\n.disabled input[type=range].guify-range {\n    pointer-events: none;\n}\n\n/* Remove outlines since we'll be adding our own */\ninput[type=range].guify-range:focus {\n    outline: none;\n}\ninput[type=range].guify-range::-moz-focus-outer {\n    border: 0;\n}\n\n/* Webkit */\ninput[type=range].guify-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: var(--size-component-height);\n    cursor: ew-resize;\n    background: var(--range-track-color);\n}\ninput[type=range].guify-range::-webkit-slider-thumb {\n    height: var(--size-component-height);\n    width: 10px;\n    background: var(--range-thumb-color);\n    cursor: ew-resize;\n    -webkit-appearance: none;\n    margin-top: 0px;\n    border: 0;\n}\ninput[type=range].guify-range:focus::-webkit-slider-runnable-track {\n    background: var(--range-thumb-highlight);\n    outline: none;\n}\n\n.disabled input[type=range].guify-range::-webkit-slider-runnable-track { /* Disabled track */\n    pointer-events: none;\n    background: var(--range-track-color-disabled);\n}\n\n.disabled input[type=range].guify-range::-webkit-slider-thumb { /* Disabled thumb */\n    pointer-events: none;\n    background: var(--color-text-disabled);\n}\n\n/* Gecko */\ninput[type=range].guify-range::-moz-range-track {\n    width: 100%;\n    height: var(--size-component-height);\n    cursor: ew-resize;\n    background: var(--range-track-color);\n}\ninput[type=range].guify-range:focus::-moz-range-track {\n    background: var(--range-thumb-highlight);\n}\ninput[type=range].guify-range::-moz-range-thumb {\n    height: var(--size-component-height);\n    width: 10px;\n    background: var(--range-thumb-color);\n    cursor: ew-resize;\n    border: none;\n    border-radius: 0;\n}\n\n.disabled input[type=range].guify-range::-moz-range-track { /* Disabled track */\n    pointer-events: none;\n    background: var(--range-track-color-disabled);\n}\n\n.disabled input[type=range].guify-range::-moz-range-thumb { /* Disabled thumb */\n    pointer-events: none;\n    background: var(--range-thumb-color-disabled);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/select.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/select.css ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-select-dropdown {\n    display: inline-block;\n    position: absolute;\n    width: calc(100% - var(--size-label-width));\n    padding-left: 1.5%;\n    height: var(--size-component-height);\n    border: none;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance:none;\n    appearance: none;\n    font-family: inherit;\n    background-color: var(--color-component-background);\n    color: var(--color-text-secondary);\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n}\n\n/* Disable default outline since we're providing our own */\n.guify-select-dropdown:focus {\n    outline: none;\n}\n.guify-select-dropdown::-moz-focus-inner {\n    border: 0;\n}\n\n\n.guify-select-dropdown:focus,\n.guify-select-dropdown:hover {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.guify-select-dropdown::-ms-expand {\n    display:none;\n}\n.guify-select-triangle {\n    content: ' ';\n    border-right: 3px solid transparent;\n    border-left: 3px solid transparent;\n    line-height: var(--size-component-height);\n    position: absolute;\n    right: 2.5%;\n    z-index: 1;\n    pointer-events: none;\n}\n\n.guify-select-triangle--up {\n    bottom: 55%;\n    border-bottom: 5px solid var(--color-text-secondary);\n    border-top: 0px transparent;\n}\n\n.guify-select-triangle--down {\n    top: 55%;\n    border-top: 5px solid var(--color-text-secondary);\n    border-bottom: 0px transparent;\n}\n\n.guify-select-triangle--up-highlight {\n    border-bottom-color: var(--color-text-hover);\n}\n\n.guify-select-triangle--down-highlight {\n    border-top-color: var(--color-text-hover);\n}\n\n/* Disabled styles */\n\n.disabled .guify-select-dropdown {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n    background-color: var(--color-component-background-disabled);\n}\n\n.disabled *[class^=\"guify-select-triangle\"] {\n    border-color: var(--color-text-disabled);\n}\n", "",{"version":3,"sources":["webpack://./src/components/public/select.css"],"names":[],"mappings":"AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,2CAA2C;IAC3C,kBAAkB;IAClB,oCAAoC;IACpC,YAAY;IACZ,gBAAgB;IAChB,wBAAwB;IACxB,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,oBAAoB;IACpB,mDAAmD;IACnD,kCAAkC;IAClC,iCAAiC;IACjC,sCAAsC;IACtC,yCAAyC;AAC7C;;AAEA,0DAA0D;AAC1D;IACI,aAAa;AACjB;AACA;IACI,SAAS;AACb;;;AAGA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,kCAAkC;IAClC,yCAAyC;IACzC,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,oDAAoD;IACpD,2BAA2B;AAC/B;;AAEA;IACI,QAAQ;IACR,iDAAiD;IACjD,8BAA8B;AAClC;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,yCAAyC;AAC7C;;AAEA,oBAAoB;;AAEpB;IACI,oBAAoB;IACpB,iCAAiC;IACjC,4DAA4D;AAChE;;AAEA;IACI,wCAAwC;AAC5C","sourcesContent":["@import \"../variables.css\";\n\n.guify-select-dropdown {\n    display: inline-block;\n    position: absolute;\n    width: calc(100% - var(--size-label-width));\n    padding-left: 1.5%;\n    height: var(--size-component-height);\n    border: none;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance:none;\n    appearance: none;\n    font-family: inherit;\n    background-color: var(--color-component-background);\n    color: var(--color-text-secondary);\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n}\n\n/* Disable default outline since we're providing our own */\n.guify-select-dropdown:focus {\n    outline: none;\n}\n.guify-select-dropdown::-moz-focus-inner {\n    border: 0;\n}\n\n\n.guify-select-dropdown:focus,\n.guify-select-dropdown:hover {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.guify-select-dropdown::-ms-expand {\n    display:none;\n}\n.guify-select-triangle {\n    content: ' ';\n    border-right: 3px solid transparent;\n    border-left: 3px solid transparent;\n    line-height: var(--size-component-height);\n    position: absolute;\n    right: 2.5%;\n    z-index: 1;\n    pointer-events: none;\n}\n\n.guify-select-triangle--up {\n    bottom: 55%;\n    border-bottom: 5px solid var(--color-text-secondary);\n    border-top: 0px transparent;\n}\n\n.guify-select-triangle--down {\n    top: 55%;\n    border-top: 5px solid var(--color-text-secondary);\n    border-bottom: 0px transparent;\n}\n\n.guify-select-triangle--up-highlight {\n    border-bottom-color: var(--color-text-hover);\n}\n\n.guify-select-triangle--down-highlight {\n    border-top-color: var(--color-text-hover);\n}\n\n/* Disabled styles */\n\n.disabled .guify-select-dropdown {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n    background-color: var(--color-component-background-disabled);\n}\n\n.disabled *[class^=\"guify-select-triangle\"] {\n    border-color: var(--color-text-disabled);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/text.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/text.css ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-text-input {\n    position: absolute;\n    padding-left: 6px;\n    height: var(--size-component-height);\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    background: var(--color-component-background);\n    color: var(--color-text-secondary);\n    font-family: inherit;\n    box-sizing: border-box !important;\n    resize: vertical;\n\n    /* Fixes for Safari iOS */\n    border-radius: 0;\n}\n\n.guify-text-input:focus {\n    outline: none;\n}\n\n.disabled .guify-text-input {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n    background-color: var(--color-component-background-disabled);\n}", "",{"version":3,"sources":["webpack://./src/components/public/text.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,oCAAoC;IACpC,2CAA2C;IAC3C,YAAY;IACZ,6CAA6C;IAC7C,kCAAkC;IAClC,oBAAoB;IACpB,iCAAiC;IACjC,gBAAgB;;IAEhB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,iCAAiC;IACjC,4DAA4D;AAChE","sourcesContent":["@import \"../variables.css\";\n\n.guify-text-input {\n    position: absolute;\n    padding-left: 6px;\n    height: var(--size-component-height);\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    background: var(--color-component-background);\n    color: var(--color-text-secondary);\n    font-family: inherit;\n    box-sizing: border-box !important;\n    resize: vertical;\n\n    /* Fixes for Safari iOS */\n    border-radius: 0;\n}\n\n.guify-text-input:focus {\n    outline: none;\n}\n\n.disabled .guify-text-input {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n    background-color: var(--color-component-background-disabled);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/title.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/title.css ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-title {\n    box-sizing: border-box;\n    width: 100%;\n    display: inline-block;\n    height: var(--size-component-height);\n    vertical-align: top;\n}\n\n.guify-title-text {\n    display: inline-block;\n    height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    padding-left: 5px;\n    padding-right: 5px;\n    background-color: var(--color-text-primary);\n    color: var(--color-panel-background);\n}\n\n/* Disabled style */\n\n.disabled .guify-title-text {\n    background-color: var(--color-text-disabled);\n}\n\n/* Add a bit of top margin if immediately after another component */\n\n.guify-component-container > .guify-title {\n    margin-top: 0.5em;\n}", "",{"version":3,"sources":["webpack://./src/components/public/title.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,qBAAqB;IACrB,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,oCAAoC;IACpC,yCAAyC;IACzC,iBAAiB;IACjB,kBAAkB;IAClB,2CAA2C;IAC3C,oCAAoC;AACxC;;AAEA,mBAAmB;;AAEnB;IACI,4CAA4C;AAChD;;AAEA,mEAAmE;;AAEnE;IACI,iBAAiB;AACrB","sourcesContent":["@import \"../variables.css\";\n\n.guify-title {\n    box-sizing: border-box;\n    width: 100%;\n    display: inline-block;\n    height: var(--size-component-height);\n    vertical-align: top;\n}\n\n.guify-title-text {\n    display: inline-block;\n    height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    padding-left: 5px;\n    padding-right: 5px;\n    background-color: var(--color-text-primary);\n    color: var(--color-panel-background);\n}\n\n/* Disabled style */\n\n.disabled .guify-title-text {\n    background-color: var(--color-text-disabled);\n}\n\n/* Add a bit of top margin if immediately after another component */\n\n.guify-component-container > .guify-title {\n    margin-top: 0.5em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/gui.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/gui.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".guify-container {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9999;\n}\n\n.guify-container, .guify-container * {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    font-weight: var(--font-weight);\n}\n\n.guify-container-overlay {\n    height: 100%;\n}\n\n.guify-container-above {\n    height: calc(100% + var(--size-menu-bar-height));\n    bottom: 0;\n}\n\n/* Overlay container when fullscreen */\n.guify-fullscreen .guify-container {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/gui.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,2BAA2B;IAC3B,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gDAAgD;IAChD,SAAS;AACb;;AAEA,sCAAsC;AACtC;IACI,eAAe;IACf,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;AAChB","sourcesContent":["@import \"./components/variables.css\";\n\n.guify-container {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9999;\n}\n\n.guify-container, .guify-container * {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    font-weight: var(--font-weight);\n}\n\n.guify-container-overlay {\n    height: 100%;\n}\n\n.guify-container-above {\n    height: calc(100% + var(--size-menu-bar-height));\n    bottom: 0;\n}\n\n/* Overlay container when fullscreen */\n.guify-fullscreen .guify-container {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/variables.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/variables.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-menu-bar-background: \"black\";\n    --color-menu-bar-text: \"black\";\n    --color-panel-background: \"black\";\n\n    --color-component-background: \"black\";\n    --color-component-background-hover: \"black\";\n    --color-component-background-disabled: \"black\";\n    --color-component-foreground: \"black\";\n    --color-component-active: \"black\";\n\n    --color-text-primary: \"black\";\n    --color-text-secondary: \"black\";\n    --color-text-hover: \"black\";\n    --color-text-active: \"black\";\n    --color-text-disabled: \"black\";\n\n    --size-menu-bar-height: 25px;\n    --size-component-height: 2rem;\n    --size-component-spacing: 5px;\n    --size-label-width: 42%;\n\n    --font-family: ui-monospace, monospace;\n    --font-height: 11px;\n    --font-weight: 400;\n}\n", "",{"version":3,"sources":["webpack://./src/components/variables.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,8BAA8B;IAC9B,iCAAiC;;IAEjC,qCAAqC;IACrC,2CAA2C;IAC3C,8CAA8C;IAC9C,qCAAqC;IACrC,iCAAiC;;IAEjC,6BAA6B;IAC7B,+BAA+B;IAC/B,2BAA2B;IAC3B,4BAA4B;IAC5B,8BAA8B;;IAE9B,4BAA4B;IAC5B,6BAA6B;IAC7B,6BAA6B;IAC7B,uBAAuB;;IAEvB,sCAAsC;IACtC,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":[":root {\n    --color-menu-bar-background: \"black\";\n    --color-menu-bar-text: \"black\";\n    --color-panel-background: \"black\";\n\n    --color-component-background: \"black\";\n    --color-component-background-hover: \"black\";\n    --color-component-background-disabled: \"black\";\n    --color-component-foreground: \"black\";\n    --color-component-active: \"black\";\n\n    --color-text-primary: \"black\";\n    --color-text-secondary: \"black\";\n    --color-text-hover: \"black\";\n    --color-text-active: \"black\";\n    --color-text-disabled: \"black\";\n\n    --size-menu-bar-height: 25px;\n    --size-component-height: 2rem;\n    --size-component-spacing: 5px;\n    --size-label-width: 42%;\n\n    --font-family: ui-monospace, monospace;\n    --font-height: 11px;\n    --font-weight: 400;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dom-css/index.js":
/*!***************************************!*\
  !*** ./node_modules/dom-css/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var prefix = __webpack_require__(/*! prefix-style */ "./node_modules/prefix-style/index.js")
var toCamelCase = __webpack_require__(/*! to-camel-case */ "./node_modules/to-camel-case/index.js")
var cache = { 'float': 'cssFloat' }
var addPxToStyle = __webpack_require__(/*! add-px-to-style */ "./node_modules/add-px-to-style/index.js")

function style (element, property, value) {
  var camel = cache[property]
  if (typeof camel === 'undefined') {
    camel = detect(property)
  }

  // may be false if CSS prop is unsupported
  if (camel) {
    if (value === undefined) {
      return element.style[camel]
    }

    element.style[camel] = addPxToStyle(camel, value)
  }
}

function each (element, properties) {
  for (var k in properties) {
    if (properties.hasOwnProperty(k)) {
      style(element, k, properties[k])
    }
  }
}

function detect (cssProp) {
  var camel = toCamelCase(cssProp)
  var result = prefix(camel)
  cache[camel] = cache[cssProp] = cache[result] = result
  return result
}

function set () {
  if (arguments.length === 2) {
    if (typeof arguments[1] === 'string') {
      arguments[0].style.cssText = arguments[1]
    } else {
      each(arguments[0], arguments[1])
    }
  } else {
    style(arguments[0], arguments[1], arguments[2])
  }
}

module.exports = set
module.exports.set = set

module.exports.get = function (element, properties) {
  if (Array.isArray(properties)) {
    return properties.reduce(function (obj, prop) {
      obj[prop] = style(element, prop || '')
      return obj
    }, {})
  } else {
    return style(element, properties || '')
  }
}


/***/ }),

/***/ "./node_modules/insert-css/index.js":
/*!******************************************!*\
  !*** ./node_modules/insert-css/index.js ***!
  \******************************************/
/***/ ((module) => {

var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
        throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) { css = css.substr(1, css.length); }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
};

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;


/***/ }),

/***/ "./node_modules/is-numeric/is-numeric.js":
/*!***********************************************!*\
  !*** ./node_modules/is-numeric/is-numeric.js ***!
  \***********************************************/
/***/ (function(module, exports) {

(function(root) {
  'use strict';

  function isNumeric(v) {
    if (typeof v === 'number' && !isNaN(v)) return true;
    v = (v||'').toString().trim();
    if (!v) return false;
    return !isNaN(v);
  }

  if (true) {
    if ( true && module.exports) {
      exports = module.exports = isNumeric;
    }
    exports.isNumeric = isNumeric;
  } else {}

})(this);


/***/ }),

/***/ "./node_modules/prefix-style/index.js":
/*!********************************************!*\
  !*** ./node_modules/prefix-style/index.js ***!
  \********************************************/
/***/ ((module) => {

var div = null
var prefixes = [ 'Webkit', 'Moz', 'O', 'ms' ]

module.exports = function prefixStyle (prop) {
  // re-use a dummy div
  if (!div) {
    div = document.createElement('div')
  }

  var style = div.style

  // prop exists without prefix
  if (prop in style) {
    return prop
  }

  // borderRadius -> BorderRadius
  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1)

  // find the vendor-prefixed prop
  for (var i = prefixes.length; i >= 0; i--) {
    var name = prefixes[i] + titleCase
    // e.g. WebkitBorderRadius or webkitBorderRadius
    if (name in style) {
      return name
    }
  }

  return false
}


/***/ }),

/***/ "./node_modules/screenfull/dist/screenfull.js":
/*!****************************************************!*\
  !*** ./node_modules/screenfull/dist/screenfull.js ***!
  \****************************************************/
/***/ ((module) => {

/*!
* screenfull
* v5.0.0 - 2019-09-09
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				Promise.resolve(element[fn.requestFullscreen]()).catch(reject);
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				Promise.resolve(document[fn.exitFullscreen]()).catch(reject);
			}.bind(this));
		},
		toggle: function (element) {
			return this.isFullscreen ? this.exit() : this.request(element);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "./node_modules/simple-color-picker/dist/simple-color-picker.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/simple-color-picker/dist/simple-color-picker.module.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var insert_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! insert-css */ "./node_modules/insert-css/index.js");
/* harmony import */ var insert_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(insert_css__WEBPACK_IMPORTED_MODULE_0__);
function e(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}function o(t){return"number"==typeof t&&!isNaN(t)}function s(t,e,i){return Math.min(Math.max(t,e),i)}function n(t){if(0===t.type.indexOf("touch")){var e=t.touches[0];return{x:e.clientX,y:e.clientY}}return{x:t.clientX,y:t.clientY}}function r(t){return 1==t.length?"0"+t:""+t}var h=function(){function t(t){this._rgba={r:0,g:0,b:0,a:1},this._hsva={h:0,s:0,v:0,a:1},this.fromHex(t)}var e=t.prototype;return e.fromHex=function(t){t||(t=0),o(t)?(this._hexNumber=t,this._hexString=function(t){return"#"+("00000"+(0|t).toString(16)).substr(-6).toUpperCase()}(this._hexNumber)):(this._hexString=t.toUpperCase(),this._hexNumber=u(this._hexString));var e=function(t){return{r:(t>>16&255)/255,g:(t>>8&255)/255,b:(255&t)/255}}(this._hexNumber),i=e.g,s=e.b;this._rgba.r=e.r,this._rgba.g=i,this._rgba.b=s;var n=function(t){var e,i=t.r,o=t.g,s=t.b,n=Math.max(i,o,s),r=Math.min(i,o,s),h=n-r,u=0===n?0:h/n,a=n;if(n==r)e=0;else{switch(n){case i:e=(o-s)/h+(o<s?6:0);break;case o:e=(s-i)/h+2;break;case s:e=(i-o)/h+4}e/=6}return{h:e,s:u,v:a}}(this._rgba),r=n.s,h=n.v;this._hsva.h=n.h,this._hsva.s=r,this._hsva.v=h,this._updateBrightness()},e.fromHsv=function(t){var e=t.s,i=t.v;this._hsva.h=t.h,this._hsva.s=e,this._hsva.v=i;var o=function(t){var e=t.h,i=t.s,o=t.v;e*=6;var s=Math.floor(e),n=e-s,r=o*(1-i),h=o*(1-n*i),u=o*(1-(1-n)*i),a=s%6;return{r:[o,h,r,r,u,o][a],g:[u,o,o,h,r,r][a],b:[r,r,u,o,o,h][a]}}(this._hsva),s=o.g,n=o.b;this._rgba.r=o.r,this._rgba.g=s,this._rgba.b=n,this._hexString=function(t){var e=t.g,i=t.b;return["#",r(Math.round(255*t.r).toString(16)),r(Math.round(255*e).toString(16)),r(Math.round(255*i).toString(16))].join("").toUpperCase()}(this._rgba),this._hexNumber=u(this._hexString),this._updateBrightness()},e._updateBrightness=function(){var t=this._rgba;this._brightness=(299*t.r+587*t.g+114*t.b)/1e3,this._isDark=this._brightness<.5,this._isLight=!this._isDark},i(t,[{key:"rgb",get:function(){return this._rgba}},{key:"hsv",get:function(){return this._hsva}},{key:"hex",get:function(){return this._hexNumber}},{key:"hexString",get:function(){return this._hexString}},{key:"brightness",get:function(){return this._brightness}},{key:"isDark",get:function(){return this._isDark}},{key:"isLight",get:function(){return this._isLight}}]),t}();function u(t){return parseInt(t.replace("#",""),16)}var a=function(){function t(t){var e=this;void 0===t&&(t={}),this._widthUnits="px",this._heightUnits="px",this._huePosition=0,this._hueHeight=0,this._maxHue=0,this._inputIsNumber=!1,this._saturationWidth=0,this._isChoosing=!1,this._callbacks=[],this.width=0,this.height=0,this.hue=0,this.position={x:0,y:0},this.color=new h(0),this.backgroundColor=new h(0),this.hueColor=new h(0),this._onSaturationMouseDown=function(t){var i=e.$saturation.getBoundingClientRect(),o=n(t),s=o.x,r=o.y;e._isChoosing=!0,e._moveSelectorTo(s-i.left,r-i.top),e._updateColorFromPosition(),e._window.addEventListener("mouseup",e._onSaturationMouseUp),e._window.addEventListener("touchend",e._onSaturationMouseUp),e._window.addEventListener("mousemove",e._onSaturationMouseMove),e._window.addEventListener("touchmove",e._onSaturationMouseMove),t.preventDefault()},this._onSaturationMouseMove=function(t){var i=e.$saturation.getBoundingClientRect(),o=n(t);e._moveSelectorTo(o.x-i.left,o.y-i.top),e._updateColorFromPosition()},this._onSaturationMouseUp=function(){e._isChoosing=!1,e._window.removeEventListener("mouseup",e._onSaturationMouseUp),e._window.removeEventListener("touchend",e._onSaturationMouseUp),e._window.removeEventListener("mousemove",e._onSaturationMouseMove),e._window.removeEventListener("touchmove",e._onSaturationMouseMove)},this._onHueMouseDown=function(t){var i=e.$hue.getBoundingClientRect(),o=n(t).y;e._isChoosing=!0,e._moveHueTo(o-i.top),e._updateHueFromPosition(),e._window.addEventListener("mouseup",e._onHueMouseUp),e._window.addEventListener("touchend",e._onHueMouseUp),e._window.addEventListener("mousemove",e._onHueMouseMove),e._window.addEventListener("touchmove",e._onHueMouseMove),t.preventDefault()},this._onHueMouseMove=function(t){var i=e.$hue.getBoundingClientRect(),o=n(t);e._moveHueTo(o.y-i.top),e._updateHueFromPosition()},this._onHueMouseUp=function(){e._isChoosing=!1,e._window.removeEventListener("mouseup",e._onHueMouseUp),e._window.removeEventListener("touchend",e._onHueMouseUp),e._window.removeEventListener("mousemove",e._onHueMouseMove),e._window.removeEventListener("touchmove",e._onHueMouseMove)},this._window=t.window||window,this._document=this._window.document,this.$el=this._document.createElement("div"),this.$el.className="Scp",this.$el.innerHTML='\n      <div class="Scp-saturation">\n        <div class="Scp-brightness"></div>\n        <div class="Scp-sbSelector"></div>\n      </div>\n      <div class="Scp-hue">\n        <div class="Scp-hSelector"></div>\n      </div>\n    ',this.$saturation=this.$el.querySelector(".Scp-saturation"),this.$hue=this.$el.querySelector(".Scp-hue"),this.$sbSelector=this.$el.querySelector(".Scp-sbSelector"),this.$hSelector=this.$el.querySelector(".Scp-hSelector"),this.$saturation.addEventListener("mousedown",this._onSaturationMouseDown),this.$saturation.addEventListener("touchstart",this._onSaturationMouseDown),this.$hue.addEventListener("mousedown",this._onHueMouseDown),this.$hue.addEventListener("touchstart",this._onHueMouseDown),t.el&&this.appendTo(t.el),t.background&&this.setBackgroundColor(t.background),t.widthUnits&&(this._widthUnits=t.widthUnits),t.heightUnits&&(this._heightUnits=t.heightUnits),this.setSize(t.width||175,t.height||150),this.setColor(t.color)}var e=t.prototype;return e.appendTo=function(t){return"string"==typeof t?document.querySelector(t).appendChild(this.$el):t.appendChild(this.$el),this},e.remove=function(){this._callbacks=[],this._onSaturationMouseUp(),this._onHueMouseUp(),this.$saturation.removeEventListener("mousedown",this._onSaturationMouseDown),this.$saturation.removeEventListener("touchstart",this._onSaturationMouseDown),this.$hue.removeEventListener("mousedown",this._onHueMouseDown),this.$hue.removeEventListener("touchstart",this._onHueMouseDown),this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},e.setColor=function(t){this._inputIsNumber=o(t),this.color.fromHex(t);var e=this.color.hsv,i=e.h,s=e.s,n=e.v;return isNaN(i)||(this.hue=i),this._moveSelectorTo(this._saturationWidth*s,(1-n)*this._hueHeight),this._moveHueTo((1-this.hue)*this._hueHeight),this._updateHue(),this},e.setSize=function(t,e){return this.width=t,this.height=e,this.$el.style.width=this.width+this._widthUnits,this.$el.style.height=this.height+this._heightUnits,this._saturationWidth=this.width-25,this.$saturation.style.width=this._saturationWidth+"px",this._hueHeight=this.height,this._maxHue=this._hueHeight-2,this},e.setBackgroundColor=function(t){return this.backgroundColor.fromHex(t),this.$el.style.padding="5px",this.$el.style.background=this.backgroundColor.hexString,this},e.setNoBackground=function(){return this.$el.style.padding="0px",this.$el.style.background="none",this},e.onChange=function(t){return this._callbacks.indexOf(t)<0&&(this._callbacks.push(t),t(this.getHexString())),this},e.getColor=function(){return this._inputIsNumber?this.getHexNumber():this.getHexString()},e.getHexString=function(){return this.color.hexString.toUpperCase()},e.getHexNumber=function(){return this.color.hex},e.getRGB=function(){return this.color.rgb},e.getHSV=function(){return this.color.hsv},e.isDark=function(){return this.color.isDark},e.isLight=function(){return this.color.isLight},e._moveSelectorTo=function(t,e){this.position.x=s(t,0,this._saturationWidth),this.position.y=s(e,0,this._hueHeight),this.$sbSelector.style.transform="translate("+this.position.x+"px, "+this.position.y+"px)"},e._updateColorFromPosition=function(){this.color.fromHsv({h:this.hue,s:this.position.x/this._saturationWidth,v:1-this.position.y/this._hueHeight}),this._updateColor()},e._moveHueTo=function(t){this._huePosition=s(t,0,this._maxHue),this.$hSelector.style.transform="translateY("+this._huePosition+"px)"},e._updateHueFromPosition=function(){var t=this.getHSV();this.hue=1-this._huePosition/this._maxHue,this.color.fromHsv({h:this.hue,s:t.s,v:t.v}),this._updateHue()},e._updateHue=function(){this.hueColor.fromHsv({h:this.hue,s:1,v:1}),this.$saturation.style.background="linear-gradient(to right, #fff, "+this.hueColor.hexString+")",this._updateColor()},e._updateColor=function(){this.$sbSelector.style.background=this.getHexString(),this.$sbSelector.style.borderColor=this.isDark()?"#fff":"#000",this._triggerChange()},e._triggerChange=function(){var t=this;this._callbacks.forEach(function(e){return e(t.getHexString())})},i(t,[{key:"isChoosing",get:function(){return this._isChoosing}}]),t}();(0,insert_css__WEBPACK_IMPORTED_MODULE_0__.insertCss)(".Scp{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.Scp-saturation{position:relative;height:100%;background:linear-gradient(90deg,#fff,red);float:left;margin-right:5px}.Scp-brightness{width:100%;height:100%;background:linear-gradient(hsla(0,0%,100%,0),#000)}.Scp-sbSelector{border:2px solid #fff;position:absolute;width:14px;height:14px;background:#fff;border-radius:10px;top:-7px;left:-7px;box-sizing:border-box;z-index:10}.Scp-hue{width:20px;height:100%;position:relative;float:left;background:linear-gradient(red,#f0f 17%,#00f 34%,#0ff 50%,#0f0 67%,#ff0 84%,red)}.Scp-hSelector{position:absolute;background:#fff;border-bottom:1px solid #000;right:-3px;width:10px;height:2px}");/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (a);
//# sourceMappingURL=simple-color-picker.module.js.map


/***/ }),

/***/ "./src/components/internal/menu-bar.css":
/*!**********************************************!*\
  !*** ./src/components/internal/menu-bar.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_menu_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./menu-bar.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/internal/menu-bar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_menu_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_menu_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_menu_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_menu_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/internal/panel.css":
/*!*******************************************!*\
  !*** ./src/components/internal/panel.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_panel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./panel.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/internal/panel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_panel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_panel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_panel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_panel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/internal/toast-area.css":
/*!************************************************!*\
  !*** ./src/components/internal/toast-area.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_toast_area_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./toast-area.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/internal/toast-area.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_toast_area_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_toast_area_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_toast_area_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_toast_area_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/partials/container.css":
/*!***********************************************!*\
  !*** ./src/components/partials/container.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./container.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/partials/container.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/partials/label.css":
/*!*******************************************!*\
  !*** ./src/components/partials/label.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_label_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./label.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/partials/label.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_label_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_label_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_label_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_label_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/partials/value.css":
/*!*******************************************!*\
  !*** ./src/components/partials/value.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_value_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./value.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/partials/value.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_value_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_value_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_value_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_value_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/button.css":
/*!******************************************!*\
  !*** ./src/components/public/button.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/checkbox.css":
/*!********************************************!*\
  !*** ./src/components/public/checkbox.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./checkbox.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/checkbox.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_checkbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/color.css":
/*!*****************************************!*\
  !*** ./src/components/public/color.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./color.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/color.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_color_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/display.css":
/*!*******************************************!*\
  !*** ./src/components/public/display.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_display_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./display.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/display.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_display_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_display_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_display_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_display_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/file.css":
/*!****************************************!*\
  !*** ./src/components/public/file.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_file_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./file.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/file.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_file_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_file_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_file_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_file_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/folder.css":
/*!******************************************!*\
  !*** ./src/components/public/folder.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_folder_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./folder.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/folder.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_folder_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_folder_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_folder_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_folder_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/interval.css":
/*!********************************************!*\
  !*** ./src/components/public/interval.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_interval_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./interval.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/interval.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_interval_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_interval_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_interval_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_interval_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/range.css":
/*!*****************************************!*\
  !*** ./src/components/public/range.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_range_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./range.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/range.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_range_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_range_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_range_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_range_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/select.css":
/*!******************************************!*\
  !*** ./src/components/public/select.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_select_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./select.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/select.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_select_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_select_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_select_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_select_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/text.css":
/*!****************************************!*\
  !*** ./src/components/public/text.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_text_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./text.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/text.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_text_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_text_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_text_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_text_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/public/title.css":
/*!*****************************************!*\
  !*** ./src/components/public/title.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_title_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./title.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/public/title.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_title_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_title_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_title_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_title_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/gui.css":
/*!*********************!*\
  !*** ./src/gui.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_gui_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./gui.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/gui.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_gui_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_gui_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_gui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_gui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/tinycolor2/tinycolor.js":
/*!**********************************************!*\
  !*** ./node_modules/tinycolor2/tinycolor.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "./node_modules/to-camel-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-camel-case/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var space = __webpack_require__(/*! to-space-case */ "./node_modules/to-space-case/index.js")

/**
 * Export.
 */

module.exports = toCamelCase

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return space(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}


/***/ }),

/***/ "./node_modules/to-no-case/index.js":
/*!******************************************!*\
  !*** ./node_modules/to-no-case/index.js ***!
  \******************************************/
/***/ ((module) => {


/**
 * Export.
 */

module.exports = toNoCase

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/
var hasSeparator = /(_|-|\.|:)/
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}


/***/ }),

/***/ "./node_modules/to-space-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-space-case/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var clean = __webpack_require__(/*! to-no-case */ "./node_modules/to-no-case/index.js")

/**
 * Export.
 */

module.exports = toSpaceCase

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}


/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/***/ ((module) => {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/wolfy87-eventemitter/EventEmitter.js":
/*!***********************************************************!*\
  !*** ./node_modules/wolfy87-eventemitter/EventEmitter.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * EventEmitter v5.2.8 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - https://oli.me.uk/
 * @preserve
 */

;(function (exports) {
    'use strict';

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    function isValidListener (listener) {
        if (typeof listener === 'function' || listener instanceof RegExp) {
            return true
        } else if (listener && typeof listener === 'object') {
            return isValidListener(listener.listener)
        } else {
            return false
        }
    }

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        if (!isValidListener(listener)) {
            throw new TypeError('listener must be a function');
        }

        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the first argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the first argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listenersMap = this.getListenersAsObject(evt);
        var listeners;
        var listener;
        var i;
        var key;
        var response;

        for (key in listenersMap) {
            if (listenersMap.hasOwnProperty(key)) {
                listeners = listenersMap[key].slice(0);

                for (i = 0; i < listeners.length; i++) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return EventEmitter;
        }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
}(typeof window !== 'undefined' ? window : this || {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/guify.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "guify": () => (/* binding */ guify)
/* harmony export */ });
/* harmony import */ var _gui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gui.js */ "./src/gui.js");
// Export GUI class as 'guify'.
// Make sure Webpack is assigning the export to the global scope (don't set library.name)

var guify = _gui_js__WEBPACK_IMPORTED_MODULE_0__["default"];

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=guify.js.map