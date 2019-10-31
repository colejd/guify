(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("guify", [], factory);
	else if(typeof exports === 'object')
		exports["guify"] = factory();
	else
		root["guify"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(18)
var toCamelCase = __webpack_require__(19)
var cache = { 'float': 'cssFloat' }
var addPxToStyle = __webpack_require__(22)

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.theme = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _themes = __webpack_require__(9);

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
    function Theme() {
        //this.Set(themes.dark);

        _classCallCheck(this, Theme);
    }

    _createClass(Theme, [{
        key: 'Set',
        value: function Set(theme) {

            // Merge the base theme with the theme parameters and make
            // the result properties of this object
            Object.assign(this, baseTheme, theme);
        }
    }]);

    return Theme;
}();

var baseTheme = {
    name: "BaseTheme",

    colors: {
        menuBarBackground: 'black',
        menuBarText: 'black',
        panelBackground: 'black',

        componentBackground: 'black',
        componentBackgroundHover: 'black',
        componentForeground: 'black',
        componentActive: 'black',

        textPrimary: 'black',
        textSecondary: 'black',
        textHover: 'black',
        textActive: 'black'
    },

    sizing: {
        menuBarHeight: '25px',
        componentHeight: '20px',
        componentSpacing: '5px',
        labelWidth: '42%'
    }
};

// Export "singleton" instance
var theme = exports.theme = new Theme();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(root, label, theme) {
    var container = root.appendChild(document.createElement('div'));
    container.classList.add('guify-component-container');
    (0, _domCss2.default)(container, {
        position: 'relative',
        'min-height': theme.sizing.componentHeight,
        'margin-bottom': theme.sizing.componentSpacing
    });
    return container;
};

exports.default = Container;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var csjs = __webpack_require__(31);

module.exports = csjs;
module.exports.csjs = csjs;
module.exports.getCss = __webpack_require__(45);


/***/ }),
/* 4 */
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
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return EventEmitter;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = EventEmitter;
    }
    else {
        exports.EventEmitter = EventEmitter;
    }
}(typeof window !== 'undefined' ? window : this || {}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (root, text, theme) {
    var background = root.appendChild(document.createElement('div'));
    (0, _domCss2.default)(background, {
        left: 0,
        width: 'calc(' + theme.sizing.labelWidth + ' - 2%)',
        display: 'inline-block',
        'margin-right': '2%',
        verticalAlign: 'top'
    });

    var label = background.appendChild(document.createElement('div'));
    label.innerHTML = text;
    (0, _domCss2.default)(label, {
        color: theme.colors.textPrimary,
        display: 'inline-block',
        verticalAlign: 'sub',
        'min-height': theme.sizing.componentHeight,
        'line-height': theme.sizing.componentHeight
    });
    return label;
};

module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (root, text, theme, width, left) {

    var input = root.appendChild(document.createElement('input'));
    input.type = 'text';

    input.value = text;

    var inputCss = {
        position: 'absolute',
        backgroundColor: theme.colors.componentBackground,
        paddingLeft: '1%',
        height: theme.sizing.componentHeight,
        width: width,
        display: 'inline-block',
        overflow: 'hidden',
        border: 'none',

        'font-family': '\'Hack\', monospace',
        'font-size': '11px',
        color: theme.colors.textSecondary,
        userSelect: 'text',
        cursor: 'text',
        lineHeight: theme.sizing.componentHeight,
        wordBreak: 'break-all',

        'box-sizing': 'border-box',
        '-moz-box-sizing': 'border-box',
        '-webkit-box-sizing': 'border-box'
    };

    if (!left) {
        inputCss.right = 0;
    }

    (0, _domCss2.default)(input, inputCss);

    return input;
};

module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  makeComposition: makeComposition,
  isComposition: isComposition,
  ignoreComposition: ignoreComposition
};

/**
 * Returns an immutable composition object containing the given class names
 * @param  {array} classNames - The input array of class names
 * @return {Composition}      - An immutable object that holds multiple
 *                              representations of the class composition
 */
function makeComposition(classNames, unscoped, isAnimation) {
  var classString = classNames.join(' ');
  return Object.create(Composition.prototype, {
    classNames: { // the original array of class names
      value: Object.freeze(classNames),
      configurable: false,
      writable: false,
      enumerable: true
    },
    unscoped: { // the original array of class names
      value: Object.freeze(unscoped),
      configurable: false,
      writable: false,
      enumerable: true
    },
    className: { // space-separated class string for use in HTML
      value: classString,
      configurable: false,
      writable: false,
      enumerable: true
    },
    selector: { // comma-separated, period-prefixed string for use in CSS
      value: classNames.map(function(name) {
        return isAnimation ? name : '.' + name;
      }).join(', '),
      configurable: false,
      writable: false,
      enumerable: true
    },
    toString: { // toString() method, returns class string for use in HTML
      value: function() {
        return classString;
      },
      configurable: false,
      writeable: false,
      enumerable: false
    }
  });
}

/**
 * Returns whether the input value is a Composition
 * @param value      - value to check
 * @return {boolean} - whether value is a Composition or not
 */
function isComposition(value) {
  return value instanceof Composition;
}

function ignoreComposition(values) {
  return values.reduce(function(acc, val) {
    if (isComposition(val)) {
      val.classNames.forEach(function(name, i) {
        acc[name] = val.unscoped[i];
      });
    }
    return acc;
  }, {});
}

/**
 * Private constructor for use in `instanceof` checks
 */
function Composition() {}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var findClasses = /(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/.source;
var findKeyframes = /(@\S*keyframes\s*)([^{\s]*)/.source;
var ignoreComments = /(?!(?:[^*/]|\*[^/]|\/[^*])*\*+\/)/.source;

var classRegex = new RegExp(findClasses + ignoreComments, 'g');
var keyframesRegex = new RegExp(findKeyframes + ignoreComments, 'g');

module.exports = {
  classRegex: classRegex,
  keyframesRegex: keyframesRegex,
  ignoreComments: ignoreComments,
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    light: {
        name: "Light",

        colors: {
            menuBarBackground: 'rgb(227, 227, 227)',
            menuBarText: 'rgb(36, 36, 36)',
            panelBackground: 'rgb(227, 227, 227)',

            componentBackground: 'rgb(204, 204, 204)',
            componentBackgroundHover: 'rgb(190, 190, 190)',
            componentForeground: 'rgb(105, 105, 105)',
            componentActive: 'rgb(36, 36, 36)',

            textPrimary: 'rgb(36, 36, 36)',
            textSecondary: 'rgb(87, 87, 87)',
            textHover: 'rgb(204, 204, 204)',
            textActive: 'rgb(204, 204, 204)'
        }

    },

    dark: {
        name: "Dark",

        colors: {
            menuBarBackground: 'rgb(35, 35, 35)',
            menuBarText: 'rgb(235, 235, 235)',
            panelBackground: 'rgb(35, 35, 35)',

            componentBackground: 'rgb(54, 54, 54)',
            componentBackgroundHover: 'rgb(76, 76, 76)',
            componentForeground: 'rgb(112, 112, 112)',
            componentActive: 'rgb(202, 202, 202)',

            textPrimary: 'rgb(235, 235, 235)',
            textSecondary: 'rgb(181, 181, 181)',
            textHover: 'rgb(235, 235, 235)',
            textActive: 'rgb(54, 54, 54)'
        }

    },

    // Color scheme from https://metakirby5.github.io/yorha/
    yorha: {
        name: "YoRHa",

        colors: {
            menuBarBackground: '#CCC8B1',
            menuBarText: '#454138',
            panelBackground: '#CCC8B1',

            componentBackground: '#BAB5A1',
            componentBackgroundHover: '#877F6E',
            componentForeground: '#454138',
            componentActive: '#978F7E',

            textPrimary: '#454138',
            textSecondary: '#454138',
            textHover: '#CCC8B1',
            textActive: '#CCC8B1'
        },

        //Optional
        font: {
            fontFamily: 'helvetica, sans-serif',
            fontSize: '14px',
            fontWeight: '100'
        }
    }

};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

(function(root) {
  'use strict';

  function isNumeric(v) {
    if (typeof v === 'number' && !isNaN(v)) return true;
    v = (v||'').toString().trim();
    if (!v) return false;
    return !isNaN(v);
  }

  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isNumeric;
    }
    exports.isNumeric = isNumeric;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isNumeric;
    });
  } else {
    root.isNumeric = isNumeric;
  }

})(this);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * CSS identifiers with whitespace are invalid
 * Hence this key will not cause a collision
 */

module.exports = ' css ';


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(44);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

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
if (typeof module !== "undefined" && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})(Math);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*!
* screenfull
* v5.0.0 - 2019-09-09
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gui = __webpack_require__(17);

var _gui2 = _interopRequireDefault(_gui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _gui2.default; // Export GUI class as 'guify'.

module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

var _isString = __webpack_require__(23);

var _isString2 = _interopRequireDefault(_isString);

var _themes = __webpack_require__(9);

var _themes2 = _interopRequireDefault(_themes);

var _theme = __webpack_require__(1);

var _componentManager = __webpack_require__(24);

var _menuBar = __webpack_require__(72);

var _panel = __webpack_require__(74);

var _toastArea = __webpack_require__(77);

var _screenfull = __webpack_require__(15);

var _screenfull2 = _interopRequireDefault(_screenfull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var styles = __webpack_require__(79);

var GUI = function () {
    function GUI(opts) {
        _classCallCheck(this, GUI);

        this.opts = opts;

        this.hasRoot = opts.root !== undefined;

        opts.width = opts.width || 300;
        opts.root = opts.root || document.body;
        opts.align = opts.align || 'left'; // Can be 'left' or 'right'
        opts.opacity = opts.opacity || 1.0;
        opts.barMode = opts.barMode || 'offset'; // Can be 'none', 'above', 'offset', or 'overlay'
        opts.panelMode = opts.panelMode || 'inner';
        opts.pollRateMS = opts.pollRateMS || 100;
        opts.open = opts.open || false;

        // Set theme global from opts
        var chosenTheme = opts.theme;
        if (opts.theme === undefined) chosenTheme = _themes2.default.dark;
        if ((0, _isString2.default)(opts.theme)) {
            if (_themes2.default[opts.theme] === undefined) {
                console.error('There is no theme preset with the name \'' + opts.theme + '\'! Defaulting to dark theme.');
                chosenTheme = _themes2.default.dark;
            } else chosenTheme = _themes2.default[opts.theme];
        }
        _theme.theme.Set(chosenTheme);

        this._ConstructElements();
        this._LoadStyles();

        this.componentManager = new _componentManager.ComponentManager();

        this.loadedComponents = [];

        // Begin component update loop
        this._UpdateComponents();
    }

    /**
     * Load any runtime styling information needed here.
     */


    _createClass(GUI, [{
        key: '_LoadStyles',
        value: function _LoadStyles() {
            // Loads a font and appends it to the head
            var AppendFont = function AppendFont(href) {
                var elem = document.createElement('style');
                elem.setAttribute('type', 'text/css');
                elem.setAttribute('rel', 'stylesheet');
                elem.setAttribute('href', href);
                document.getElementsByTagName('head')[0].appendChild(elem);
            };
            // Load the fonts we'll be using
            // Mono font
            AppendFont('//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css');
            // Theme font
            if (_theme.theme.font) {
                // Set default font to theme font
                if (_theme.theme.font.fontURL) AppendFont(_theme.theme.font.fontURL);
                if (_theme.theme.font.fontFamily) (0, _domCss2.default)(this.container, 'font-family', _theme.theme.font.fontFamily);
                if (_theme.theme.font.fontSize) (0, _domCss2.default)(this.container, 'font-size', _theme.theme.font.fontSize);
                if (_theme.theme.font.fontWeight) (0, _domCss2.default)(this.container, 'font-weight', _theme.theme.font.fontWeight);
            } else {
                (0, _domCss2.default)(this.container, 'font-family', '\'Hack\', monospace');
            }
        }

        /**
         * Create container, MenuBar, Panel, and ToastArea
         */

    }, {
        key: '_ConstructElements',
        value: function _ConstructElements() {
            var _this = this;

            // Create the container that all the other elements will be contained within
            this.container = document.createElement('div');
            this.container.classList.add(styles['guify-container']);

            var containerCSS = {};

            // Position the container relative to the root based on `opts`
            if (this.opts.barMode == 'overlay' || this.opts.barMode == 'above' || this.opts.barMode == 'none') {
                containerCSS.position = 'absolute';
            }
            if (this.hasRoot && this.opts.barMode == 'above') {
                containerCSS.top = '-' + _theme.theme.sizing.menuBarHeight;
            }
            (0, _domCss2.default)(this.container, containerCSS);

            // Insert the container into the root as the first element
            this.opts.root.insertBefore(this.container, this.opts.root.childNodes[0]);

            // Create a menu bar if specified in `opts`
            if (this.opts.barMode !== 'none') {
                this.bar = new _menuBar.MenuBar(this.container, this.opts);
                this.bar.addListener('ontogglepanel', function () {
                    _this.panel.ToggleVisible();
                });
                this.bar.addListener('onfullscreenrequested', function () {
                    _this.ToggleFullscreen();
                });
            }

            // Create panel
            this.panel = new _panel.Panel(this.container, this.opts);

            // Show the panel by default if there's no menu bar or it's requested
            if (this.opts.barMode === 'none' || this.opts.open === true) {
                this.panel.SetVisible(true);
            } else {
                // Otherwise hide it by default
                this.panel.SetVisible(false);
            }

            // Create toast area
            this.toaster = new _toastArea.ToastArea(this.container, this.opts);
        }

        /**
         * Polling loop that allows our components to update themselves.
         * You can set the frequency of this using `this.opts.pollRateMS`.
         */

    }, {
        key: '_UpdateComponents',
        value: function _UpdateComponents() {
            var _this2 = this;

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
                    _this2._UpdateComponents();
                });
            }, this.opts.pollRateMS);
        }

        /**
         * Creates a new component in the panel based on the provided options.
         * @param {*} [obj] Either an opts object or an array of opts objects
         * @param {Object} [applyToAll] Each property of this object will be applied to all opts objects
         */

    }, {
        key: 'Register',
        value: function Register(obj) {
            var _this3 = this;

            var applyToAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (Array.isArray(obj)) {
                obj.forEach(function (item) {
                    var merged = Object.assign(item, applyToAll);
                    _this3._Register(merged);
                });
            } else {
                var merged = Object.assign(obj, applyToAll);
                return this._Register(merged);
            }
        }
    }, {
        key: 'Remove',
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
        key: '_Register',
        value: function _Register(opts) {

            if (opts.object && opts.property) if (opts.object[opts.property] === undefined) throw new Error('Object ' + opts.object + ' has no property \'' + opts.property + '\'');

            // Set opts properties from the input
            if (opts.object && opts.property) {
                opts.initial = opts.object[opts.property];
                // If no label is specified, generate it from property name
                //opts.label = opts.label || property;
            }

            var root = this.panel.panel;

            // If a folder was specified, try to find a folder component with that name
            // and get its folderContainer.
            if (opts.folder) {
                var folderComp = this.loadedComponents.find(function (cmp) {
                    return cmp.opts.type === 'folder' && cmp.opts.label === opts.folder;
                });

                if (folderComp) root = folderComp.folderContainer;else throw new Error('No folder exists with the name ' + opts.folder);
            }

            var component = this.componentManager.Create(root, opts);

            // Add binding properties if specified
            if (opts.object && opts.property) {
                component['binding'] = { object: opts.object, property: opts.property };
            }

            // If the component has events, add listeners for those events.
            if (component.on) {
                component.on('initialized', function (data) {
                    if (opts.onInitialize) opts.onInitialize(data);
                });

                component.on('input', function (data) {
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
         * @param {Integer} [transitionMS ] The number of milliseconds it takes for the notification to transition into disappearing
         */

    }, {
        key: 'Toast',
        value: function Toast(message) {
            var stayMS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
            var transitionMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            this.toaster.CreateToast(message, stayMS, transitionMS);
        }
    }, {
        key: 'ToggleFullscreen',
        value: function ToggleFullscreen() {
            var isFullscreen = _screenfull2.default.isFullscreen;
            if (isFullscreen) {
                _screenfull2.default.exit();
            } else {
                console.log("Request fullscreen");
                _screenfull2.default.request(this.opts.root);
            }
        }
    }]);

    return GUI;
}();

exports.default = GUI;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


var space = __webpack_require__(20)

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


var clean = __webpack_require__(21)

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
/* 21 */
/***/ (function(module, exports) {


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
/* 22 */
/***/ (function(module, exports) {

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComponentManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _v = __webpack_require__(25);

var _v2 = _interopRequireDefault(_v);

var _theme = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Manages the loading and instantiation of Components.
 */
var ComponentManager = exports.ComponentManager = function () {
    function ComponentManager() {
        _classCallCheck(this, ComponentManager);

        this.uuid = (0, _v2.default)();

        this.components = {
            'title': __webpack_require__(28),
            'range': __webpack_require__(29),
            'button': __webpack_require__(46),
            'checkbox': __webpack_require__(48),
            'select': __webpack_require__(50),
            'text': __webpack_require__(52),
            'color': __webpack_require__(53),
            'folder': __webpack_require__(65),
            'file': __webpack_require__(67),
            'display': __webpack_require__(69),
            'interval': __webpack_require__(70)
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
        key: 'Create',
        value: function Create(root, opts) {
            if (this.components[opts.type] === undefined) {
                throw new Error('No component type named \'' + opts.type + '\' exists.');
            }

            var newComponent = new this.components[opts.type](root, opts, _theme.theme, this.uuid);

            Object.assign(newComponent, {
                Remove: function Remove() {
                    this.container.parentNode.removeChild(this.container);
                }
            });

            return newComponent;
        }
    }]);

    return ComponentManager;
}();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(26);
var bytesToUuid = __webpack_require__(27);

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
/* 26 */
/***/ (function(module, exports) {

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
/* 27 */
/***/ (function(module, exports) {

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
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Title = function Title(root, opts, theme) {
    _classCallCheck(this, Title);

    this.opts = opts;

    this.container = __webpack_require__(2)(root, opts.label, theme);
    (0, _domCss2.default)(this.container, {
        //'font-size': '13px'
    });

    var background = this.container.appendChild(document.createElement('div'));
    (0, _domCss2.default)(background, {
        'box-sizing': 'border-box',
        width: '100%',
        display: 'inline-block',
        height: theme.sizing.componentHeight,
        verticalAlign: 'top'
    });

    var label = background.appendChild(document.createElement('div'));
    label.innerHTML = '&#9632; ' + opts.label + ' &#9632;';
    (0, _domCss2.default)(label, {
        //color: theme.text1,
        display: 'inline-block',
        verticalAlign: 'sub',
        height: theme.sizing.componentHeight,
        'line-height': theme.sizing.componentHeight,
        //'box-shadow': `inset 0 0 0 1px ${theme.background2}`,
        'padding-left': '5px',
        'padding-right': '5px',
        //"font-weight": "bold",
        'background-color': theme.colors.textPrimary,
        'color': theme.colors.panelBackground
    });
};

exports.default = Title;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wolfy87Eventemitter = __webpack_require__(4);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

var _isNumeric = __webpack_require__(10);

var _isNumeric2 = _interopRequireDefault(_isNumeric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = __webpack_require__(30);

var Range = function (_EventEmitter) {
    _inherits(Range, _EventEmitter);

    function Range(root, opts, theme, uuid) {
        _classCallCheck(this, Range);

        var _this = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this));

        _this.opts = opts;

        _this.container = __webpack_require__(2)(root, opts.label, theme);
        __webpack_require__(5)(_this.container, opts.label, theme);

        if (!!opts.step && !!opts.steps) {
            throw new Error('Cannot specify both step and steps. Got step = ' + opts.step + ', steps = ', opts.steps);
        }

        _this.input = _this.container.appendChild(document.createElement('input'));
        _this.input.type = 'range';
        _this.input.className = styles['guify-range'];
        // Add ARIA attribute to input based on label text
        if (opts.label) _this.input.setAttribute('aria-label', opts.label + ' input');

        // Get initial value:
        if (opts.scale === 'log') {
            // Get options or set defaults:
            opts.max = (0, _isNumeric2.default)(opts.max) ? opts.max : 100;
            opts.min = (0, _isNumeric2.default)(opts.min) ? opts.min : 0.1;

            // Check if all signs are valid:
            if (opts.min * opts.max <= 0) {
                throw new Error('Log range min/max must have the same sign and not equal zero. Got min = ' + opts.min + ', max = ' + opts.max);
            } else {
                // Pull these into separate variables so that opts can define the *slider* mapping
                _this.logmin = opts.min;
                _this.logmax = opts.max;
                _this.logsign = opts.min > 0 ? 1 : -1;

                // Got the sign so force these positive:
                _this.logmin = Math.abs(_this.logmin);
                _this.logmax = Math.abs(_this.logmax);

                // These are now simply 0-100 to which we map the log range:
                opts.min = 0;
                opts.max = 100;

                // Step is invalid for a log range:
                if ((0, _isNumeric2.default)(opts.step)) {
                    throw new Error('Log may only use steps (integer number of steps), not a step value. Got step =' + opts.step);
                }
                // Default step is simply 1 in linear slider space:
                opts.step = 1;
            }

            opts.initial = _this.InverseScaleValue((0, _isNumeric2.default)(opts.initial) ? opts.initial : scaleValue((opts.min + opts.max) * 0.5));

            if (opts.initial * _this.InverseScaleValue(opts.max) <= 0) {
                throw new Error('Log range initial value must have the same sign as min/max and must not equal zero. Got initial value = ' + opts.initial);
            }
        } else {
            // If linear, this is much simpler:
            opts.max = (0, _isNumeric2.default)(opts.max) ? opts.max : 100;
            opts.min = (0, _isNumeric2.default)(opts.min) ? opts.min : 0;
            opts.step = (0, _isNumeric2.default)(opts.step) ? opts.step : 0.01;

            opts.initial = (0, _isNumeric2.default)(opts.initial) ? opts.initial : (opts.min + opts.max) * 0.5;
        }

        // If we got a number of steps, use that instead:
        if ((0, _isNumeric2.default)(opts.steps)) {
            opts.step = (0, _isNumeric2.default)(opts.steps) ? (opts.max - opts.min) / opts.steps : opts.step;
        }

        // Quantize the initial value to the requested step:
        var initialStep = Math.round((opts.initial - opts.min) / opts.step);
        opts.initial = opts.min + opts.step * initialStep;

        // Set value on the this.input itself:
        _this.input.min = opts.min;
        _this.input.max = opts.max;
        _this.input.step = opts.step;
        _this.input.value = opts.initial;

        (0, _domCss2.default)(_this.input, {
            width: 'calc(100% - ' + theme.sizing.labelWidth + ' - 16% - 0.5em)'
        });

        _this.valueComponent = __webpack_require__(6)(_this.container, _this.ScaleValue(opts.initial), theme, '16%');
        // Add ARIA attribute to input based on label text
        if (opts.label) _this.valueComponent.setAttribute('aria-label', opts.label + ' value');

        setTimeout(function () {
            _this.emit('initialized', parseFloat(_this.input.value));
        });

        _this.userIsModifying = false;

        // Gain focus
        _this.input.addEventListener('focus', function () {
            _this.focused = true;
        });

        // Lose focus
        _this.input.addEventListener('blur', function () {
            _this.focused = false;
        });

        // Defocus on mouse up (for non-accessibility users)
        _this.input.addEventListener('mouseup', function () {
            _this.input.blur();
        });

        _this.input.oninput = function (data) {
            var scaledValue = _this.ScaleValue(parseFloat(data.target.value));
            _this.valueComponent.value = _this.FormatNumber(scaledValue);
            _this.lastValue = scaledValue;
            _this.emit('input', scaledValue);
        };

        _this.valueComponent.onchange = function () {
            var rawValue = _this.valueComponent.value;
            if (Number(parseFloat(rawValue)) == rawValue) {
                // Input number is valid
                var value = parseFloat(rawValue);
                // Clamp to input range
                value = Math.min(Math.max(value, opts.min), opts.max);
                value = Math.ceil((value - opts.min) / opts.step) * opts.step + opts.min;

                _this.valueComponent.value = value;
                _this.emit('input', value);
            } else {
                // Input number is invalid
                // Go back to before input change
                _this.valueComponent.value = _this.lastValue;
            }
        };

        return _this;
    }

    _createClass(Range, [{
        key: 'ScaleValue',
        value: function ScaleValue(value) {
            if (this.opts.scale === 'log') return this.logsign * Math.exp(Math.log(this.logmin) + (Math.log(this.logmax) - Math.log(this.logmin)) * value / 100);else return value;
        }
    }, {
        key: 'InverseScaleValue',
        value: function InverseScaleValue(value) {
            if (this.opts.scale === 'log') return (Math.log(value * this.logsign) - Math.log(this.logmin)) * 100 / (Math.log(this.logmax) - Math.log(this.logmin));else return value;
        }
    }, {
        key: 'SetValue',
        value: function SetValue(value) {
            if (this.focused !== true) {
                this.valueComponent.value = this.FormatNumber(value);
                this.input.value = this.InverseScaleValue(value);
                this.lastValue = this.input.value;
            }
        }
    }, {
        key: 'GetValue',
        value: function GetValue() {
            return this.input.value;
        }
    }, {
        key: 'FormatNumber',
        value: function FormatNumber(value) {
            // https://stackoverflow.com/a/29249277
            return value.toFixed(3).replace(/\.?0*$/, '');
        }
    }]);

    return Range;
}(_wolfy87Eventemitter2.default);

exports.default = Range;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\ninput[type=range].guify-range {\n    -webkit-appearance: none;\n    width: 100%;\n    height: ', ';\n    margin: 0px 0;\n    padding: 0;\n    display: inline-block;\n}\n\n/* Remove outlines since we\'ll be adding our own */\ninput[type=range].guify-range:focus {\n    outline: none;\n}\ninput[type=range].guify-range::-moz-focus-outer {\n    border: 0;\n}\n\n/* Webkit */\ninput[type=range].guify-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: ', ';\n    cursor: ew-resize;\n    background: ', ';\n}\ninput[type=range].guify-range::-webkit-slider-thumb {\n    height: ', ';\n    width: 10px;\n    background: ', ';\n    cursor: ew-resize;\n    -webkit-appearance: none;\n    margin-top: 0px;\n}\ninput[type=range].guify-range:focus::-webkit-slider-runnable-track {\n    background: ', ';\n    outline: none;\n}\n\n/* Gecko */\ninput[type=range].guify-range::-moz-range-track {\n    width: 100%;\n    height: ', ';\n    cursor: ew-resize;\n    background: ', ';\n}\ninput[type=range].guify-range:focus::-moz-range-track {\n    background: ', ';\n}\ninput[type=range].guify-range::-moz-range-thumb {\n    height: ', ';\n    width: 10px;\n    background: ', ';\n    cursor: ew-resize;\n    border: none;\n    border-radius: 0;\n}\n\n/* IE */\ninput[type=range].guify-range::-ms-track {\n    width: 100%;\n    height: ', ';\n    cursor: ew-resize;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n}\ninput[type=range].guify-range::-ms-fill-lower {\n    background: ', ';\n}\ninput[type=range].guify-range::-ms-fill-upper {\n    background: ', ';\n}\ninput[type=range].guify-range:focus::-ms-fill-lower {\n    background: ', ';\n}\ninput[type=range].guify-range:focus::-ms-fill-upper {\n    background: ', ';\n}\ninput[type=range].guify-range::-ms-thumb {\n    width: 10px;\n    border-radius: 0px;\n    background: ', ';\n    cursor: ew-resize;\n    height: ', ';\n}\ninput[type=range].guify-range:focus::-ms-fill-lower {\n    background: ', ';\n    outline: none;\n}\ninput[type=range].guify-range:focus::-ms-fill-upper {\n    background: ', ';\n    outline: none;\n}\n\n'], ['\n\ninput[type=range].guify-range {\n    -webkit-appearance: none;\n    width: 100%;\n    height: ', ';\n    margin: 0px 0;\n    padding: 0;\n    display: inline-block;\n}\n\n/* Remove outlines since we\'ll be adding our own */\ninput[type=range].guify-range:focus {\n    outline: none;\n}\ninput[type=range].guify-range::-moz-focus-outer {\n    border: 0;\n}\n\n/* Webkit */\ninput[type=range].guify-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: ', ';\n    cursor: ew-resize;\n    background: ', ';\n}\ninput[type=range].guify-range::-webkit-slider-thumb {\n    height: ', ';\n    width: 10px;\n    background: ', ';\n    cursor: ew-resize;\n    -webkit-appearance: none;\n    margin-top: 0px;\n}\ninput[type=range].guify-range:focus::-webkit-slider-runnable-track {\n    background: ', ';\n    outline: none;\n}\n\n/* Gecko */\ninput[type=range].guify-range::-moz-range-track {\n    width: 100%;\n    height: ', ';\n    cursor: ew-resize;\n    background: ', ';\n}\ninput[type=range].guify-range:focus::-moz-range-track {\n    background: ', ';\n}\ninput[type=range].guify-range::-moz-range-thumb {\n    height: ', ';\n    width: 10px;\n    background: ', ';\n    cursor: ew-resize;\n    border: none;\n    border-radius: 0;\n}\n\n/* IE */\ninput[type=range].guify-range::-ms-track {\n    width: 100%;\n    height: ', ';\n    cursor: ew-resize;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n}\ninput[type=range].guify-range::-ms-fill-lower {\n    background: ', ';\n}\ninput[type=range].guify-range::-ms-fill-upper {\n    background: ', ';\n}\ninput[type=range].guify-range:focus::-ms-fill-lower {\n    background: ', ';\n}\ninput[type=range].guify-range:focus::-ms-fill-upper {\n    background: ', ';\n}\ninput[type=range].guify-range::-ms-thumb {\n    width: 10px;\n    border-radius: 0px;\n    background: ', ';\n    cursor: ew-resize;\n    height: ', ';\n}\ninput[type=range].guify-range:focus::-ms-fill-lower {\n    background: ', ';\n    outline: none;\n}\ninput[type=range].guify-range:focus::-ms-fill-upper {\n    background: ', ';\n    outline: none;\n}\n\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

var trackColor = _theme.theme.colors.componentBackground;
var thumbColor = _theme.theme.colors.componentForeground;
var thumbHighlight = _theme.theme.colors.componentActive;

module.exports = csjs(_templateObject, _theme.theme.sizing.componentHeight, _theme.theme.sizing.componentHeight, trackColor, _theme.theme.sizing.componentHeight, thumbColor, thumbHighlight, _theme.theme.sizing.componentHeight, trackColor, thumbHighlight, _theme.theme.sizing.componentHeight, thumbColor, _theme.theme.sizing.componentHeight, trackColor, trackColor, thumbHighlight, thumbHighlight, thumbColor, _theme.theme.sizing.componentHeight, thumbHighlight, thumbHighlight);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var csjs = __webpack_require__(33);
var insertCss = __webpack_require__(13);

function csjsInserter() {
  var args = Array.prototype.slice.call(arguments);
  var result = csjs.apply(null, args);
  if (global.document) {
    insertCss(csjs.getCss(result));
  }
  return result;
}

module.exports = csjsInserter;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var csjs = __webpack_require__(34);

module.exports = csjs();
module.exports.csjs = csjs;
module.exports.noScope = csjs({ noscope: true });
module.exports.getCss = __webpack_require__(12);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(35);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extractExtends = __webpack_require__(36);
var composition = __webpack_require__(7);
var isComposition = composition.isComposition;
var ignoreComposition = composition.ignoreComposition;
var buildExports = __webpack_require__(37);
var scopify = __webpack_require__(38);
var cssKey = __webpack_require__(11);
var extractExports = __webpack_require__(43);

module.exports = function csjsTemplate(opts) {
  opts = (typeof opts === 'undefined') ? {} : opts;
  var noscope = (typeof opts.noscope === 'undefined') ? false : opts.noscope;

  return function csjsHandler(strings, values) {
    // Fast path to prevent arguments deopt
    var values = Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++) {
      values[i - 1] = arguments[i];
    }
    var css = joiner(strings, values.map(selectorize));
    var ignores = ignoreComposition(values);

    var scope = noscope ? extractExports(css) : scopify(css, ignores);
    var extracted = extractExtends(scope.css);
    var localClasses = without(scope.classes, ignores);
    var localKeyframes = without(scope.keyframes, ignores);
    var compositions = extracted.compositions;

    var exports = buildExports(localClasses, localKeyframes, compositions);

    return Object.defineProperty(exports, cssKey, {
      enumerable: false,
      configurable: false,
      writeable: false,
      value: extracted.css
    });
  }
}

/**
 * Replaces class compositions with comma seperated class selectors
 * @param  value - the potential class composition
 * @return       - the original value or the selectorized class composition
 */
function selectorize(value) {
  return isComposition(value) ? value.selector : value;
}

/**
 * Joins template string literals and values
 * @param  {array} strings - array of strings
 * @param  {array} values  - array of values
 * @return {string}        - strings and values joined
 */
function joiner(strings, values) {
  return strings.map(function(str, i) {
    return (i !== values.length) ? str + values[i] : str;
  }).join('');
}

/**
 * Returns first object without keys of second
 * @param  {object} obj      - source object
 * @param  {object} unwanted - object with unwanted keys
 * @return {object}          - first object without unwanted keys
 */
function without(obj, unwanted) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (!unwanted[key]) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var makeComposition = __webpack_require__(7).makeComposition;

var regex = /\.([^\s]+)(\s+)(extends\s+)(\.[^{]+)/g;

module.exports = function extractExtends(css) {
  var found, matches = [];
  while (found = regex.exec(css)) {
    matches.unshift(found);
  }

  function extractCompositions(acc, match) {
    var extendee = getClassName(match[1]);
    var keyword = match[3];
    var extended = match[4];

    // remove from output css
    var index = match.index + match[1].length + match[2].length;
    var len = keyword.length + extended.length;
    acc.css = acc.css.slice(0, index) + " " + acc.css.slice(index + len + 1);

    var extendedClasses = splitter(extended);

    extendedClasses.forEach(function(className) {
      if (!acc.compositions[extendee]) {
        acc.compositions[extendee] = {};
      }
      if (!acc.compositions[className]) {
        acc.compositions[className] = {};
      }
      acc.compositions[extendee][className] = acc.compositions[className];
    });
    return acc;
  }

  return matches.reduce(extractCompositions, {
    css: css,
    compositions: {}
  });

};

function splitter(match) {
  return match.split(',').map(getClassName);
}

function getClassName(str) {
  var trimmed = str.trim();
  return trimmed[0] === '.' ? trimmed.substr(1) : trimmed;
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var makeComposition = __webpack_require__(7).makeComposition;

module.exports = function createExports(classes, keyframes, compositions) {
  var keyframesObj = Object.keys(keyframes).reduce(function(acc, key) {
    var val = keyframes[key];
    acc[val] = makeComposition([key], [val], true);
    return acc;
  }, {});

  var exports = Object.keys(classes).reduce(function(acc, key) {
    var val = classes[key];
    var composition = compositions[key];
    var extended = composition ? getClassChain(composition) : [];
    var allClasses = [key].concat(extended);
    var unscoped = allClasses.map(function(name) {
      return classes[name] ? classes[name] : name;
    });
    acc[val] = makeComposition(allClasses, unscoped);
    return acc;
  }, keyframesObj);

  return exports;
}

function getClassChain(obj) {
  var visited = {}, acc = [];

  function traverse(obj) {
    return Object.keys(obj).forEach(function(key) {
      if (!visited[key]) {
        visited[key] = true;
        acc.push(key);
        traverse(obj[key]);
      }
    });
  }

  traverse(obj);
  return acc;
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fileScoper = __webpack_require__(39);
var replaceAnimations = __webpack_require__(42);
var regex = __webpack_require__(8);
var classRegex = regex.classRegex;
var keyframesRegex = regex.keyframesRegex;

module.exports = scopify;

function scopify(css, ignores) {
  var makeScopedName = fileScoper(css);
  var replacers = {
    classes: classRegex,
    keyframes: keyframesRegex
  };

  function scopeCss(result, key) {
    var replacer = replacers[key];
    function replaceFn(fullMatch, prefix, name) {
      var scopedName = ignores[name] ? name : makeScopedName(name);
      result[key][scopedName] = name;
      return prefix + scopedName;
    }
    return {
      css: result.css.replace(replacer, replaceFn),
      keyframes: result.keyframes,
      classes: result.classes
    };
  }

  var result = Object.keys(replacers).reduce(scopeCss, {
    css: css,
    keyframes: {},
    classes: {}
  });

  return replaceAnimations(result);
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(40);
var hash = __webpack_require__(41);

module.exports = function fileScoper(fileSrc) {
  var suffix = encode(hash(fileSrc));

  return function scopedName(name) {
    return name + '_' + suffix;
  }
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * base62 encode implementation based on base62 module:
 * https://github.com/andrew/base62.js
 */

var CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = function encode(integer) {
  if (integer === 0) {
    return '0';
  }
  var str = '';
  while (integer > 0) {
    str = CHARS[integer % 62] + str;
    integer = Math.floor(integer / 62);
  }
  return str;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * djb2 string hash implementation based on string-hash module:
 * https://github.com/darkskyapp/string-hash
 */

module.exports = function hashStr(str) {
  var hash = 5381;
  var i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i)
  }
  return hash >>> 0;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var ignoreComments = __webpack_require__(8).ignoreComments;

module.exports = replaceAnimations;

function replaceAnimations(result) {
  var animations = Object.keys(result.keyframes).reduce(function(acc, key) {
    acc[result.keyframes[key]] = key;
    return acc;
  }, {});
  var unscoped = Object.keys(animations);

  if (unscoped.length) {
    var regexStr = '((?:animation|animation-name)\\s*:[^};]*)('
      + unscoped.join('|') + ')([;\\s])' + ignoreComments;
    var regex = new RegExp(regexStr, 'g');

    var replaced = result.css.replace(regex, function(match, preamble, name, ending) {
      return preamble + animations[name] + ending;
    });

    return {
      css: replaced,
      keyframes: result.keyframes,
      classes: result.classes
    }
  }

  return result;
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regex = __webpack_require__(8);
var classRegex = regex.classRegex;
var keyframesRegex = regex.keyframesRegex;

module.exports = extractExports;

function extractExports(css) {
  return {
    css: css,
    keyframes: getExport(css, keyframesRegex),
    classes: getExport(css, classRegex)
  };
}

function getExport(css, regex) {
  var prop = {};
  var match;
  while((match = regex.exec(css)) !== null) {
    var name = match[2];
    prop[name] = name;
  }
  return prop;
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cssKey = __webpack_require__(11);

module.exports = function getCss(csjs) {
  return csjs[cssKey];
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(12);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wolfy87Eventemitter = __webpack_require__(4);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = __webpack_require__(47);

var Button = function (_EventEmitter) {
    _inherits(Button, _EventEmitter);

    function Button(root, opts, theme, uuid) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

        _this.opts = opts;

        _this.container = __webpack_require__(2)(root, opts.label, theme);
        __webpack_require__(5)(_this.container, '', theme);

        var input = _this.container.appendChild(document.createElement('button'));
        input.className = styles['guify-button'];

        input.textContent = opts.label;

        input.addEventListener('click', opts.action);

        // Defocus on mouse up (for non-accessibility users)
        input.addEventListener('mouseup', function () {
            input.blur();
        });
        return _this;
    }

    return Button;
}(_wolfy87Eventemitter2.default);

exports.default = Button;
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n.guify-button {\n    box-sizing: border-box !important;\n    color: ', ';\n    background-color: ', ';\n\n    position: absolute;\n    text-align: center;\n    height: ', ';\n    line-height: ', ';\n    padding-top: 0px;\n    padding-bottom: 0px;\n    width: calc(100% - ', ');\n    border: none;\n    cursor: pointer;\n    right: 0;\n    font-family: inherit;\n}\n\n\n.guify-button:focus {\n    outline:none;\n}\n.guify-button::-moz-focus-inner {\n    border:0;\n}\n\n.guify-button:hover,\n.guify-button:focus {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-button:active {\n    color: ', ' !important;\n    background-color: ', ' !important;\n}\n\n'], ['\n\n.guify-button {\n    box-sizing: border-box !important;\n    color: ', ';\n    background-color: ', ';\n\n    position: absolute;\n    text-align: center;\n    height: ', ';\n    line-height: ', ';\n    padding-top: 0px;\n    padding-bottom: 0px;\n    width: calc(100% - ', ');\n    border: none;\n    cursor: pointer;\n    right: 0;\n    font-family: inherit;\n}\n\n\n.guify-button:focus {\n    outline:none;\n}\n.guify-button::-moz-focus-inner {\n    border:0;\n}\n\n.guify-button:hover,\n.guify-button:focus {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-button:active {\n    color: ', ' !important;\n    background-color: ', ' !important;\n}\n\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

module.exports = csjs(_templateObject, _theme.theme.colors.textSecondary, _theme.theme.colors.componentBackground, _theme.theme.sizing.componentHeight, _theme.theme.sizing.componentHeight, _theme.theme.sizing.labelWidth, _theme.theme.colors.textHover, _theme.theme.colors.componentForeground, _theme.theme.colors.textActive, _theme.theme.colors.componentActive);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wolfy87Eventemitter = __webpack_require__(4);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = __webpack_require__(49);

var Checkbox = function (_EventEmitter) {
    _inherits(Checkbox, _EventEmitter);

    function Checkbox(root, opts, theme, uuid) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));

        _this.opts = opts;

        _this.container = __webpack_require__(2)(root, opts.label, theme);
        __webpack_require__(5)(_this.container, opts.label, theme);

        _this.input = _this.container.appendChild(document.createElement('input'));
        _this.input.id = 'checkbox-' + opts.label + uuid;
        _this.input.type = 'checkbox';
        _this.input.checked = opts.initial;
        _this.input.className = styles['guify-checkbox'];
        // Add ARIA attribute to input based on label text
        if (opts.label) _this.input.setAttribute('aria-label', opts.label);

        var label = _this.container.appendChild(document.createElement('label'));
        label.htmlFor = _this.input.id;

        setTimeout(function () {
            _this.emit('initialized', _this.input.checked);
        });

        _this.input.onchange = function (data) {
            _this.emit('input', data.target.checked);
        };

        return _this;
    }

    _createClass(Checkbox, [{
        key: 'SetValue',
        value: function SetValue(value) {
            this.input.checked = value;
        }
    }, {
        key: 'GetValue',
        value: function GetValue() {
            return this.input.checked;
        }
    }]);

    return Checkbox;
}(_wolfy87Eventemitter2.default);

exports.default = Checkbox;
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\ninput[type=checkbox].guify-checkbox {\n    opacity: 0;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n    border-radius: 0;\n    cursor: pointer;\n}\n\ninput[type=checkbox].guify-checkbox + label {\n    margin: 0;\n}\n\ninput[type=checkbox].guify-checkbox + label:before {\n    content: "";\n    display: inline-block;\n    width: ', ';\n    height: ', ';\n    padding: 0;\n    margin: 0;\n    vertical-align: middle;\n    background-color: ', ';\n    border-radius: 0px;\n    cursor: pointer;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n\n}\n\n/* Hover style */\ninput[type=checkbox].guify-checkbox:hover + label:before {\n    width: calc(', ' - (', ' * 2));\n    height: calc(', ' - (', ' * 2));\n    background-color: ', ';\n    border: solid 4px ', ';\n}\n\n/* Checked style */\ninput[type=checkbox]:checked.guify-checkbox + label:before {\n    width: calc(', ' - (', ' * 2));\n    height: calc(', ' - (', ' * 2));\n    background-color: ', ';\n    border: solid ', ' ', ';\n}\n\n/* Focused and checked */\ninput[type=checkbox]:checked.guify-checkbox:focus + label:before {\n    width: calc(', ' - (', ' * 2));\n    height: calc(', ' - (', ' * 2));\n    background-color: ', ';\n    border: solid ', ' ', ';\n}\n\n/* Focus and unchecked */\ninput[type=checkbox].guify-checkbox:focus + label:before {\n    background-color: ', ';\n}\n\n'], ['\n\ninput[type=checkbox].guify-checkbox {\n    opacity: 0;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n    border-radius: 0;\n    cursor: pointer;\n}\n\ninput[type=checkbox].guify-checkbox + label {\n    margin: 0;\n}\n\ninput[type=checkbox].guify-checkbox + label:before {\n    content: "";\n    display: inline-block;\n    width: ', ';\n    height: ', ';\n    padding: 0;\n    margin: 0;\n    vertical-align: middle;\n    background-color: ', ';\n    border-radius: 0px;\n    cursor: pointer;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n\n}\n\n/* Hover style */\ninput[type=checkbox].guify-checkbox:hover + label:before {\n    width: calc(', ' - (', ' * 2));\n    height: calc(', ' - (', ' * 2));\n    background-color: ', ';\n    border: solid 4px ', ';\n}\n\n/* Checked style */\ninput[type=checkbox]:checked.guify-checkbox + label:before {\n    width: calc(', ' - (', ' * 2));\n    height: calc(', ' - (', ' * 2));\n    background-color: ', ';\n    border: solid ', ' ', ';\n}\n\n/* Focused and checked */\ninput[type=checkbox]:checked.guify-checkbox:focus + label:before {\n    width: calc(', ' - (', ' * 2));\n    height: calc(', ' - (', ' * 2));\n    background-color: ', ';\n    border: solid ', ' ', ';\n}\n\n/* Focus and unchecked */\ninput[type=checkbox].guify-checkbox:focus + label:before {\n    background-color: ', ';\n}\n\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

var borderSize = '4px';

module.exports = csjs(_templateObject, _theme.theme.sizing.componentHeight, _theme.theme.sizing.componentHeight, _theme.theme.colors.componentBackground, _theme.theme.sizing.componentHeight, borderSize, _theme.theme.sizing.componentHeight, borderSize, _theme.theme.colors.componentBackgroundHover, _theme.theme.colors.componentBackground, _theme.theme.sizing.componentHeight, borderSize, _theme.theme.sizing.componentHeight, borderSize, _theme.theme.colors.componentForeground, borderSize, _theme.theme.colors.componentBackground, _theme.theme.sizing.componentHeight, borderSize, _theme.theme.sizing.componentHeight, borderSize, _theme.theme.colors.componentForeground, borderSize, _theme.theme.colors.componentBackgroundHover, _theme.theme.colors.componentBackgroundHover);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wolfy87Eventemitter = __webpack_require__(4);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = __webpack_require__(51);

var Select = function (_EventEmitter) {
    _inherits(Select, _EventEmitter);

    function Select(root, opts, theme, uuid) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this));

        _this.opts = opts;

        var i, downTriangle, upTriangle, key, option, el, keys;

        _this.container = __webpack_require__(2)(root, opts.label, theme);
        __webpack_require__(5)(_this.container, opts.label, theme);

        _this.input = document.createElement('select');
        _this.input.className = styles['guify-select-dropdown'];
        // Add ARIA attribute to input based on label text
        if (opts.label) _this.input.setAttribute('aria-label', opts.label);

        downTriangle = document.createElement('span');
        downTriangle.classList.add(styles['guify-select-triangle'], styles['guify-select-triangle--down']);

        upTriangle = document.createElement('span');
        upTriangle.classList.add(styles['guify-select-triangle'], styles['guify-select-triangle--up']);

        _this.container.appendChild(downTriangle);
        _this.container.appendChild(upTriangle);

        if (Array.isArray(opts.options)) {
            for (i = 0; i < opts.options.length; i++) {
                option = opts.options[i];
                el = document.createElement('option');
                el.value = el.textContent = option;
                if (opts.initial === option) {
                    el.selected = 'selected';
                }
                _this.input.appendChild(el);
            }
        } else {
            keys = Object.keys(opts.options);
            for (i = 0; i < keys.length; i++) {
                key = keys[i];
                el = document.createElement('option');
                el.value = key;
                if (opts.initial === key) {
                    el.selected = 'selected';
                }
                el.textContent = opts.options[key];
                _this.input.appendChild(el);
            }
        }

        _this.container.appendChild(_this.input);

        _this.input.onchange = function (data) {
            _this.emit('input', data.target.value);
        };

        // Style the arrows based on mouse / focus behavior (and unfocus on mouse leave).
        // I'd like to do this through CSS :focus/:hover selectors but I just couldn't figure it out.
        // It could be done easily if CSS had a "general previous sibling" selector.
        var StyleFocus = function StyleFocus() {
            downTriangle.classList.add(styles['guify-select-triangle--down-highlight']);
            upTriangle.classList.add(styles['guify-select-triangle--up-highlight']);
        };

        var StyleUnfocus = function StyleUnfocus() {
            downTriangle.classList.remove(styles['guify-select-triangle--down-highlight']);
            upTriangle.classList.remove(styles['guify-select-triangle--up-highlight']);
        };
        var focused = false;

        _this.input.addEventListener('mouseover', StyleFocus);
        _this.input.addEventListener('focus', function () {
            focused = true;StyleFocus();
        });
        _this.input.addEventListener('blur', function () {
            focused = false;StyleUnfocus();
        });
        _this.input.addEventListener('mouseleave', function () {
            if (!focused) StyleUnfocus();
        });

        return _this;
    }

    _createClass(Select, [{
        key: 'SetValue',
        value: function SetValue(value) {
            this.input.value = value;
        }
    }, {
        key: 'GetValue',
        value: function GetValue() {
            return this.input.value;
        }
    }]);

    return Select;
}(_wolfy87Eventemitter2.default);

exports.default = Select;
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n.guify-select-dropdown {\n    display: inline-block;\n    position: absolute;\n    width: calc(100% - ', ');\n    padding-left: 1.5%;\n    height: ', ';\n    border: none;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance:none;\n    appearance: none;\n    font-family: inherit;\n    background-color: ', ';\n    color: ', ';\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n}\n\n/* Disable default outline since we\'re providing our own */\n.guify-select-dropdown:focus {\n    outline: none;\n}\n.guify-select-dropdown::-moz-focus-inner {\n    border: 0;\n}\n\n\n.guify-select-dropdown:focus,\n.guify-select-dropdown:hover {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-select-dropdown::-ms-expand {\n    display:none;\n}\n.guify-select-triangle {\n    content: \' \';\n    border-right: 3px solid transparent;\n    border-left: 3px solid transparent;\n    line-height: ', ';\n    position: absolute;\n    right: 2.5%;\n    z-index: 1;\n    pointer-events: none;\n}\n\n.guify-select-triangle--up {\n    bottom: 55%;\n    border-bottom: 5px solid ', ';\n    border-top: 0px transparent;\n}\n\n.guify-select-triangle--down {\n    top: 55%;\n    border-top: 5px solid ', ';\n    border-bottom: 0px transparent;\n}\n\n.guify-select-triangle--up-highlight {\n    border-bottom-color: ', ';\n}\n\n.guify-select-triangle--down-highlight {\n    border-top-color: ', ';\n}\n\n'], ['\n\n.guify-select-dropdown {\n    display: inline-block;\n    position: absolute;\n    width: calc(100% - ', ');\n    padding-left: 1.5%;\n    height: ', ';\n    border: none;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance:none;\n    appearance: none;\n    font-family: inherit;\n    background-color: ', ';\n    color: ', ';\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n}\n\n/* Disable default outline since we\'re providing our own */\n.guify-select-dropdown:focus {\n    outline: none;\n}\n.guify-select-dropdown::-moz-focus-inner {\n    border: 0;\n}\n\n\n.guify-select-dropdown:focus,\n.guify-select-dropdown:hover {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-select-dropdown::-ms-expand {\n    display:none;\n}\n.guify-select-triangle {\n    content: \' \';\n    border-right: 3px solid transparent;\n    border-left: 3px solid transparent;\n    line-height: ', ';\n    position: absolute;\n    right: 2.5%;\n    z-index: 1;\n    pointer-events: none;\n}\n\n.guify-select-triangle--up {\n    bottom: 55%;\n    border-bottom: 5px solid ', ';\n    border-top: 0px transparent;\n}\n\n.guify-select-triangle--down {\n    top: 55%;\n    border-top: 5px solid ', ';\n    border-bottom: 0px transparent;\n}\n\n.guify-select-triangle--up-highlight {\n    border-bottom-color: ', ';\n}\n\n.guify-select-triangle--down-highlight {\n    border-top-color: ', ';\n}\n\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

module.exports = csjs(_templateObject, _theme.theme.sizing.labelWidth, _theme.theme.sizing.componentHeight, _theme.theme.colors.componentBackground, _theme.theme.colors.textSecondary, _theme.theme.colors.textHover, _theme.theme.colors.componentForeground, _theme.theme.sizing.componentHeight, _theme.theme.colors.textSecondary, _theme.theme.colors.textSecondary, _theme.theme.colors.textHover, _theme.theme.colors.textHover);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wolfy87Eventemitter = __webpack_require__(4);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_EventEmitter) {
    _inherits(Text, _EventEmitter);

    function Text(root, opts, theme, uuid) {
        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

        _this.opts = opts;

        _this.container = __webpack_require__(2)(root, opts.label, theme);
        __webpack_require__(5)(_this.container, opts.label, theme);

        _this.input = _this.container.appendChild(document.createElement('input'));
        _this.input.type = 'text';
        _this.input.className = 'guify-text';
        if (opts.initial) _this.input.value = opts.initial;
        // Add ARIA attribute to input based on label text
        if (opts.label) _this.input.setAttribute('aria-label', opts.label);

        (0, _domCss2.default)(_this.input, {
            position: 'absolute',
            paddingLeft: '6px',
            height: theme.sizing.componentHeight,
            width: 'calc(100% - ' + theme.sizing.labelWidth + ')',
            border: 'none',
            background: theme.colors.componentBackground,
            color: theme.colors.textSecondary,
            fontFamily: 'inherit',
            'box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            resize: 'vertical'
        });

        setTimeout(function () {
            _this.emit('initialized', _this.input.value);
        });

        _this.input.oninput = function (data) {
            _this.emit('input', data.target.value);
        };

        // Gain focus
        _this.input.addEventListener('focus', function () {
            (0, _domCss2.default)(_this.input, { outline: 'none' });
            _this.focused = true;
        });

        // Lose focus
        _this.input.addEventListener('blur', function () {
            _this.focused = false;
        });
        return _this;
    }

    _createClass(Text, [{
        key: 'SetValue',
        value: function SetValue(value) {
            if (this.focused !== true) this.input.value = value;
        }
    }, {
        key: 'GetValue',
        value: function GetValue() {
            return this.input.value;
        }
    }]);

    return Text;
}(_wolfy87Eventemitter2.default);

exports.default = Text;
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wolfy87Eventemitter = __webpack_require__(4);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _simpleColorPicker = __webpack_require__(54);

var _simpleColorPicker2 = _interopRequireDefault(_simpleColorPicker);

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

var _tinycolor = __webpack_require__(14);

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _insertCss = __webpack_require__(13);

var _insertCss2 = _interopRequireDefault(_insertCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Color = function (_EventEmitter) {
    _inherits(Color, _EventEmitter);

    function Color(root, opts, theme, uuid) {
        _classCallCheck(this, Color);

        var _this = _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).call(this));

        _this.opts = opts;
        _this.theme = theme;

        opts.format = opts.format || 'rgb';
        opts.initial = opts.initial || '#123456';

        _this.container = __webpack_require__(2)(root, opts.label, theme);
        __webpack_require__(5)(_this.container, opts.label, theme);

        var icon = _this.container.appendChild(document.createElement('span'));
        icon.className = 'guify-color-' + uuid;

        var value = __webpack_require__(6)(_this.container, '', theme, 'calc(100% - ' + theme.sizing.labelWidth + ' - 12% - 0.5em)');
        value.setAttribute('readonly', 'true');

        icon.onmouseover = function () {
            _this.picker.$el.style.display = '';
        };

        var initial = opts.initial;
        switch (opts.format) {
            case 'rgb':
                initial = (0, _tinycolor2.default)(initial).toHexString();
                break;
            case 'hex':
                initial = (0, _tinycolor2.default)(initial).toHexString();
                break;
            case 'array':
                initial = _tinycolor2.default.fromRatio({ r: initial[0], g: initial[1], b: initial[2] }).toHexString();
                break;
            default:
                break;
        }

        _this.picker = new _simpleColorPicker2.default({
            el: icon,
            color: initial,
            background: theme.colors.componentBackground,
            width: 125,
            height: 100
        });

        (0, _domCss2.default)(_this.picker.$el, {
            marginTop: theme.sizing.componentHeight,
            display: 'none',
            position: 'absolute'
        });

        (0, _domCss2.default)(icon, {
            position: 'relative',
            display: 'inline-block',
            width: '12.5%',
            height: theme.sizing.componentHeight,
            backgroundColor: _this.picker.getHexString()
        });

        _this.InjectStyles();

        icon.onmouseout = function (e) {
            _this.picker.$el.style.display = 'none';
        };

        setTimeout(function () {
            _this.emit('initialized', initial);
        });

        _this.picker.onChange(function (hex) {
            value.value = _this.Format(hex);
            (0, _domCss2.default)(icon, { backgroundColor: hex });
            _this.emit('input', _this.Format(hex));
        });
        return _this;
    }

    _createClass(Color, [{
        key: 'Format',
        value: function Format(hex) {
            switch (this.opts.format) {
                case 'rgb':
                    return (0, _tinycolor2.default)(hex).toRgbString();
                case 'hex':
                    return (0, _tinycolor2.default)(hex).toHexString();
                case 'array':
                    var rgb = (0, _tinycolor2.default)(hex).toRgb();
                    return [rgb.r / 255, rgb.g / 255, rgb.b / 255].map(function (x) {
                        return x.toFixed(2);
                    });
                default:
                    return hex;
            }
        }
    }, {
        key: 'SetValue',
        value: function SetValue(value) {
            this.picker.setColor(value);
        }
    }, {
        key: 'GetValue',
        value: function GetValue() {
            return this.Format(this.picker.getColor());
        }
    }, {
        key: 'InjectStyles',
        value: function InjectStyles() {
            (0, _insertCss2.default)('\n\n        .Scp {\n            width: 125px;\n            height: 100px;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n                -ms-user-select: none;\n                    user-select: none;\n            position: relative;\n            z-index: 1000;\n            cursor: pointer;\n        }\n        .Scp-saturation {\n            position: relative;\n            width: calc(100% - 25px);\n            height: 100%;\n            background: linear-gradient(to right, #fff 0%, #f00 100%);\n            float: left;\n            margin-right: 5px;\n        }\n        .Scp-brightness {\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(to top, #000 0%, rgba(255,255,255,0) 100%);\n        }\n        .Scp-sbSelector {\n            border: 1px solid;\n            position: absolute;\n            width: 14px;\n            height: 14px;\n            background: #fff;\n            border-radius: 10px;\n            top: -7px;\n            left: -7px;\n            box-sizing: border-box;\n            z-index: 10;\n        }\n        .Scp-hue {\n            width: 20px;\n            height: 100%;\n            position: relative;\n            float: left;\n            background: linear-gradient(to bottom, #f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);\n        }\n        .Scp-hSelector {\n            position: absolute;\n            background: #fff;\n            border-bottom: 1px solid #000;\n            right: -3px;\n            width: 10px;\n            height: 2px;\n        }\n\n        ');
        }
    }]);

    return Color;
}(_wolfy87Eventemitter2.default);

exports.default = Color;
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function() {

var Emitter = __webpack_require__(55);
var isNumber = __webpack_require__(56);
var tinycolor = __webpack_require__(14);
var transform = __webpack_require__(59);

/**
 * Creates a new SimpleColorPicker
 * @param {Object} options
 * @param {String|Number|Object} options.color The default color that the picker will display. Default is #FFFFFF. It can be a hexadecimal number or an hex String.
 * @param {String|Number|Object} options.background The background color of the picker. Default is transparent. It can be a hexadecimal number or an hex String.
 * @param {HTMLElement} options.el A dom node to add the picker to. You can also use `colorPicker.appendTo(domNode)` afterwards if you prefer.
 * @param {Number} options.width Desired width of the color picker. Default is 175.
 * @param {Number} options.height Desired height of the color picker. Default is 150.
 */
function SimpleColorPicker(options) {
  // Options
  options = options || {};

  // Properties
  this.color = null;
  this.width = 0;
  this.widthUnits = 'px';
  this.height = 0;
  this.heightUnits = 'px';
  this.hue = 0;
  this.position = {x: 0, y: 0};
  this.huePosition = 0;
  this.saturationWidth = 0;
  this.hueHeight = 0;
  this.maxHue = 0;
  this.inputIsNumber = false;

  // Bind methods to scope (if needed)
  this._onSaturationMouseDown = this._onSaturationMouseDown.bind(this);
  this._onSaturationMouseMove = this._onSaturationMouseMove.bind(this);
  this._onSaturationMouseUp = this._onSaturationMouseUp.bind(this);
  this._onHueMouseDown = this._onHueMouseDown.bind(this);
  this._onHueMouseMove = this._onHueMouseMove.bind(this);
  this._onHueMouseUp = this._onHueMouseUp.bind(this);

  // Create DOM
  this.$el = document.createElement('div');
  this.$el.className = 'Scp';
  this.$el.innerHTML = [
    '<div class="Scp-saturation">',
      '<div class="Scp-brightness"></div>',
      '<div class="Scp-sbSelector"></div>',
    '</div>',
    '<div class="Scp-hue">',
      '<div class="Scp-hSelector"></div>',
    '</div>'
  ].join('');

  // DOM accessors
  this.$saturation = this.$el.querySelector('.Scp-saturation');
  this.$hue = this.$el.querySelector('.Scp-hue');
  this.$sbSelector = this.$el.querySelector('.Scp-sbSelector');
  this.$hSelector = this.$el.querySelector('.Scp-hSelector');

  // Event listeners
  this.$saturation.addEventListener('mousedown', this._onSaturationMouseDown);
  this.$saturation.addEventListener('touchstart', this._onSaturationMouseDown);
  this.$hue.addEventListener('mousedown', this._onHueMouseDown);
  this.$hue.addEventListener('touchstart', this._onHueMouseDown);

  // Some styling and DOMing from options
  if (options.el) {
    this.appendTo(options.el);
  }
  if (options.background) {
    this.setBackgroundColor(options.background);
  }
  if (options.widthUnits) {
    this.widthUnits = options.widthUnits;
  }
  if (options.heightUnits) {
    this.heightUnits = options.heightUnits;
  }
  this.setSize(options.width || 175, options.height || 150);
  this.setColor(options.color);

  return this;
}

Emitter(SimpleColorPicker.prototype);

/* =============================================================================
  Public API
============================================================================= */
/**
 * Add the SimpleColorPicker instance to a DOM element.
 * @param  {HTMLElement} el
 * @return {SimpleColorPicker} Returns itself for chaining purpose
 */
SimpleColorPicker.prototype.appendTo = function(el) {
  el.appendChild(this.$el);
  return this;
};

/**
 * Removes picker from its parent and kill all listeners.
 * Call this method for proper destroy.
 */
SimpleColorPicker.prototype.remove = function() {
  this._onSaturationMouseUp();
  this._onHueMouseUp();

  this.$saturation.removeEventListener('mousedown', this._onSaturationMouseDown);
  this.$saturation.removeEventListener('touchstart', this._onSaturationMouseDown);
  this.$hue.removeEventListener('mousedown', this._onHueMouseDown);
  this.$hue.removeEventListener('touchstart', this._onHueMouseDown);

  this.off();

  if (this.$el.parentNode) {
    this.$el.parentNode.removeChild(this.$el);
  }
};

/**
 * Manually set the current color of the picker. This is the method
 * used on instantiation to convert `color` option to actual color for
 * the picker. Param can be a hexadecimal number or an hex String.
 * @param {String|Number} color hex color desired
 * @return {SimpleColorPicker} Returns itself for chaining purpose
 */
SimpleColorPicker.prototype.setColor = function(color) {
  if(isNumber(color)) {
    this.inputIsNumber = true;
    color = numberToHex(color);
  } else {
    this.inputIsNumber = false;
  }
  this.color = tinycolor(color);

  var hsvColor = this.color.toHsv();

  if(!isNaN(hsvColor.h)) {
    this.hue = hsvColor.h;
  }

  this._moveSelectorTo(this.saturationWidth * hsvColor.s, (1 - hsvColor.v) * this.hueHeight);
  this._moveHueTo((1 - (this.hue / 360)) * this.hueHeight);

  this._updateHue();
  return this;
};

/**
 * Set size of the color picker for a given width and height. Note that
 * a padding of 5px will be added if you chose to use the background option
 * of the constructor.
 * @param {Number} width
 * @param {Number} height
 * @return {SimpleColorPicker} Returns itself for chaining purpose
 */
SimpleColorPicker.prototype.setSize = function(width, height) {
  this.width = width;
  this.height = height;
  this.$el.style.width = this.width + this.widthUnits;
  this.$el.style.height = this.height + this.heightUnits;

  this.saturationWidth = this.width - 25;
  this.$saturation.style.width = this.saturationWidth + 'px';

  this.hueHeight = this.height;
  this.maxHue = this.hueHeight - 2;

  return this;
};

/**
 * Set the background color of the picker. It also adds a 5px padding
 * for design purpose.
 * @param {String|Number} color hex color desired for background
 * @return {SimpleColorPicker} Returns itself for chaining purpose
 */
SimpleColorPicker.prototype.setBackgroundColor = function(color) {
  if(isNumber(color)) {
    color = numberToHex(color);
  }
  this.$el.style.padding = '5px';
  this.$el.style.background = tinycolor(color).toHexString();
  return this;
};

/**
 * Removes background of the picker if previously set. It's no use
 * calling this method if you didn't set the background option on start
 * or if you didn't call setBackgroundColor previously.
 */
SimpleColorPicker.prototype.setNoBackground = function() {
  this.$el.style.padding = '0px';
  this.$el.style.background = 'none';
};

/**
 * Registers callback to the update event of the picker.
 * picker inherits from [component/emitter](https://github.com/component/emitter)
 * so you could do the same thing by calling `colorPicker.on('update');`
 * @param  {Function} callback
 * @return {SimpleColorPicker} Returns itself for chaining purpose
 */
SimpleColorPicker.prototype.onChange = function(callback) {
  this.on('update', callback);
  this.emit('update', this.getHexString());
  return this;
};

/* =============================================================================
  Color getters
============================================================================= */
/**
 * Main color getter, will return a formatted color string depending on input
 * or a number depending on the last setColor call.
 * @return {Number|String}
 */
SimpleColorPicker.prototype.getColor = function() {
  if(this.inputIsNumber) {
    return this.getHexNumber();
  }
  return this.color.toString();
};

/**
 * Returns color as css hex string (ex: '#FF0000').
 * @return {String}
 */
SimpleColorPicker.prototype.getHexString = function() {
  return this.color.toHexString().toUpperCase();
};

/**
 * Returns color as number (ex: 0xFF0000).
 * @return {Number}
 */
SimpleColorPicker.prototype.getHexNumber = function() {
  return parseInt(this.color.toHex(), 16);
};

/**
 * Returns color as {r: 255, g: 0, b: 0} object.
 * @return {Object}
 */
SimpleColorPicker.prototype.getRGB = function() {
  return this.color.toRgb();
};

/**
 * Returns color as {h: 100, s: 1, v: 1} object.
 * @return {Object}
 */
SimpleColorPicker.prototype.getHSV = function() {
  return this.color.toHsv();
};

/**
 * Returns true if color is perceived as dark
 * @return {Boolean}
 */
SimpleColorPicker.prototype.isDark = function() {
  return this.color.isDark();
};

/**
 * Returns true if color is perceived as light
 * @return {Boolean}
 */
SimpleColorPicker.prototype.isLight = function() {
  return this.color.isLight();
};

/* =============================================================================
  "Private" methods
============================================================================= */
SimpleColorPicker.prototype._moveSelectorTo = function(x, y) {
  this.position.x = clamp(x, 0, this.saturationWidth);
  this.position.y = clamp(y, 0, this.hueHeight);

  transform(this.$sbSelector, {
    x: this.position.x,
    y: this.position.y
  });
};

SimpleColorPicker.prototype._updateColorFromPosition = function() {
  this.color = tinycolor({h: this.hue, s: this.position.x / this.saturationWidth, v: 1 - (this.position.y / this.hueHeight)});
  this._updateColor();
};

SimpleColorPicker.prototype._moveHueTo = function(y) {
  this.huePosition = clamp(y, 0, this.maxHue);

  transform(this.$hSelector, {
    y: this.huePosition
  });
};

SimpleColorPicker.prototype._updateHueFromPosition = function() {
  var hsvColor = this.color.toHsv();
  this.hue = 360 * (1 - (this.huePosition / this.maxHue));
  this.color = tinycolor({h: this.hue, s: hsvColor.s, v: hsvColor.v});
  this._updateHue();
};

SimpleColorPicker.prototype._updateHue = function() {
  var hueColor = tinycolor({h: this.hue, s: 1, v: 1});
  this.$saturation.style.background = 'linear-gradient(to right, #fff, ' + hueColor.toHexString() + ')';
  this._updateColor();
};

SimpleColorPicker.prototype._updateColor = function() {
  this.$sbSelector.style.background = this.color.toHexString();
  this.$sbSelector.style.borderColor = this.color.isDark() ? '#fff' : '#000';
  this.emit('update', this.color.toHexString());
};

/* =============================================================================
  Events handlers
============================================================================= */
SimpleColorPicker.prototype._onSaturationMouseDown = function(e) {
  var sbOffset = this.$saturation.getBoundingClientRect();
  var xPos = getMousePosition(e).x;
  var yPos = getMousePosition(e).y;
  this._moveSelectorTo(xPos - sbOffset.left, yPos - sbOffset.top);
  this._updateColorFromPosition();
  window.addEventListener('mouseup', this._onSaturationMouseUp);
  window.addEventListener('touchend', this._onSaturationMouseUp);
  window.addEventListener('mousemove', this._onSaturationMouseMove);
  window.addEventListener('touchmove', this._onSaturationMouseMove);
  e.preventDefault();
};

SimpleColorPicker.prototype._onSaturationMouseMove = function(e) {
  var sbOffset = this.$saturation.getBoundingClientRect();
  var xPos = getMousePosition(e).x;
  var yPos = getMousePosition(e).y;
  this._moveSelectorTo(xPos - sbOffset.left, yPos - sbOffset.top);
  this._updateColorFromPosition();
};

SimpleColorPicker.prototype._onSaturationMouseUp = function() {
  window.removeEventListener('mouseup', this._onSaturationMouseUp);
  window.removeEventListener('touchend', this._onSaturationMouseUp);
  window.removeEventListener('mousemove', this._onSaturationMouseMove);
  window.removeEventListener('touchmove', this._onSaturationMouseMove);
};

SimpleColorPicker.prototype._onHueMouseDown = function(e) {
  var hOffset = this.$hue.getBoundingClientRect();
  var yPos = getMousePosition(e).y;
  this._moveHueTo(yPos - hOffset.top);
  this._updateHueFromPosition();
  window.addEventListener('mouseup', this._onHueMouseUp);
  window.addEventListener('touchend', this._onHueMouseUp);
  window.addEventListener('mousemove', this._onHueMouseMove);
  window.addEventListener('touchmove', this._onHueMouseMove);
  e.preventDefault();
};

SimpleColorPicker.prototype._onHueMouseMove = function(e) {
  var hOffset = this.$hue.getBoundingClientRect();
  var yPos = getMousePosition(e).y;
  this._moveHueTo(yPos - hOffset.top);
  this._updateHueFromPosition();
};

SimpleColorPicker.prototype._onHueMouseUp = function() {
  window.removeEventListener('mouseup', this._onHueMouseUp);
  window.removeEventListener('touchend', this._onHueMouseUp);
  window.removeEventListener('mousemove', this._onHueMouseMove);
  window.removeEventListener('touchmove', this._onHueMouseMove);
};

/* =============================================================================
  Helper functions
============================================================================= */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getMousePosition(e) {
  e = (e.type.indexOf('touch') === 0) ? e.touches[0] : e;
  return {
    x: e.clientX,
    y: e.clientY
  };
}

function numberToHex(color) {
  return color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SimpleColorPicker;
}

})();


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = __webpack_require__(57);

module.exports = function isNumber(num) {
  var type = typeOf(num);

  if (type === 'string') {
    if (!num.trim()) return false;
  } else if (type !== 'number') {
    return false;
  }

  return (num - num + 1) >= 0;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(58);
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prefix = __webpack_require__(60);
var isArray = __webpack_require__(61);
var properties = __webpack_require__(62);
var applyDefaultUnit = __webpack_require__(63);

var _has = Object.prototype.hasOwnProperty;
var transformProp = prefix('transform');
var propNameAliases = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ',
  origin: 'transformOrigin'
};

exports = module.exports = transform;
function transform(target, opts) {
  var transformOutput = [];
  var propName;
  var propValue;
  var propData;

  replaceAliases(opts);

  for (propName in opts) {
    if (!_has.call(opts, propName)) continue;

    propValue = opts[propName];

    // If it's a transform property.
    if (_has.call(properties.transform, propName)) {
      propData = properties.transform[propName];

      if (isArray(propValue)) {
        propValue = propValue.join(propData.separator);
      }

      transformOutput.push(
        propName + '(' + applyDefaultUnit(
          propValue,
          propData.defaultUnit,
          propData.separator
        ) + ')'
      );

      continue;
    }

    // For other properties like transform-origin.
    if (_has.call(properties, propName)) {
      propData = properties[propName];

      if (isArray(propValue)) {
        propValue = propValue.join(propData.separator);
      }

      target.style[prefix(propName)] = applyDefaultUnit(
        propValue,
        propData.defaultUnit,
        propData.separator
      );

      continue;
    }

    console.warn(
      'dom-transform: this property (`' + propName + '`) is not supported.'
    );
  }

  // Apply transform property values.
  target.style[transformProp] = transformOutput.join(' ');
}

exports.get = get;
function get(target, props) {
  var s = target.style;

  if (typeof props === 'string') {
    if (_has.call(properties.transform, props)) {
      return s[transformProp];
    }

    return s[prefix(props)];
  }

  if (!props) {
    props = getPropertiesName();
  }

  var values = {};
  props.forEach(function(propName) {
    values[propName] = s[prefix(propName)];
  });

  return values;
}

exports.reset = reset;
function reset(target, props) {
  var s = target.style;

  if (typeof props === 'string') {
    s[prefix(props)] = null;
    return;
  }

  if (!props) {
    props = getPropertiesName();
  }

  props.forEach(function(propName) {
    s[prefix(propName)] = null;
  });
}

exports.isSupported = isSupported;
function isSupported() {
  return transformProp.length > 0;
}

function replaceAliases(obj) {
  var propName;
  for (propName in obj) {
    if (_has.call(propNameAliases, propName)) {
      obj[propNameAliases[propName]] = obj[propName];
      delete obj[propName];
    }
  }
}

function getPropertiesName() {
  return Object.keys(properties).map(function(propName) {
    return propName;
  });
}


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// check document first so it doesn't error in node.js
var style = typeof document != 'undefined'
  ? document.createElement('p').style
  : {}

var prefixes = ['O', 'ms', 'Moz', 'Webkit']
var upper = /([A-Z])/g
var memo = {}

/**
 * prefix `key`
 *
 *   prefix('transform') // => WebkitTransform
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefix(key){
  // Camel case
  key = key.replace(/-([a-z])/g, function(_, char){
    return char.toUpperCase()
  })

  // Without prefix
  if (style[key] !== undefined) return key

  // With prefix
  var Key = key.charAt(0).toUpperCase() + key.slice(1)
  var i = prefixes.length
  while (i--) {
    var name = prefixes[i] + Key
    if (style[name] !== undefined) return name
  }

  return key
}

/**
 * Memoized version of `prefix`
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefixMemozied(key){
  return key in memo
    ? memo[key]
    : memo[key] = prefix(key)
}

/**
 * Create a dashed prefix
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
function prefixDashed(key){
  key = prefix(key)
  if (upper.test(key)) {
    key = '-' + key.replace(upper, '-$1')
    upper.lastIndex = 0
  }
  return key.toLowerCase()
}

module.exports = prefixMemozied
module.exports.dash = prefixDashed


/***/ }),
/* 61 */
/***/ (function(module, exports) {


/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  transform: {
    translate: {defaultUnit: 'px'},
    translate3d: {defaultUnit: 'px'},
    translateX: {defaultUnit: 'px'},
    translateY: {defaultUnit: 'px'},
    translateZ: {defaultUnit: 'px'},
    scale: {defaultUnit: ''},
    scale3d: {defaultUnit: ''},
    scaleX: {defaultUnit: ''},
    scaleY: {defaultUnit: ''},
    scaleZ: {defaultUnit: ''},
    rotate: {defaultUnit: 'deg'},
    rotate3d: {defaultUnit: ''},
    rotateX: {defaultUnit: 'deg'},
    rotateY: {defaultUnit: 'deg'},
    rotateZ: {defaultUnit: 'deg'},
    skew: {defaultUnit: 'deg'},
    skewX: {defaultUnit: 'deg'},
    skewY: {defaultUnit: 'deg'},
    perspective: {defaultUnit: 'px'},
    matrix: {defaultUnit: ''},
    matrix3d: {defaultUnit: ''}
  },

  transformOrigin: {
    defaultUnit: 'px',
    separator: ' '
  }
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(64);
var NUMBER_REGEX = /^-?\d+(\.\d+)?$/;

module.exports = function(value, unit, separator) {
  separator = separator || ',';

  if (typeof value === 'number') {
    return '' + value + unit;
  }

  // Allow to use either the defined separator or space
  // to delimitate the values.
  // Ex: '10 10' or '10, 10'.
  var separatorRegExp = new RegExp(separator, 'g');
  var values = value.split(separatorRegExp.test(value) ? separator : ' ');

  return values.map(function(v) {
    v = trim(v);

    if (NUMBER_REGEX.test(v)) {
      v += unit;
    }

    return v;
  }).join(separator);
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var styles = __webpack_require__(66);

var Folder = function () {
    function Folder(root, opts, theme, uuid) {
        var _this = this;

        _classCallCheck(this, Folder);

        this.opts = opts;

        this.container = __webpack_require__(2)(root, opts.label, theme);
        this.container.classList.add(styles['guify-folder']);
        this.container.setAttribute('role', 'button');
        this.container.setAttribute('tabIndex', '0'); // Make tabbable
        // css(container, {
        //     color: theme.colors.text1,
        // })

        this.arrow = this.container.appendChild(document.createElement('div'));
        this.arrow.innerHTML = '&#9662;';
        (0, _domCss2.default)(this.arrow, {
            'width': '1.5em'
        });

        this.label = this.container.appendChild(document.createElement('div'));
        this.label.innerHTML = opts.label;

        this.container.onclick = function () {
            _this.Toggle();
        };

        // Defocus on mouse up (for non-accessibility users)
        this.container.addEventListener('mouseup', function () {
            _this.container.blur();
        });

        this.container.addEventListener('keydown', function (e) {
            // Listen for Space or Enter
            if (e.which === 13 || e.which === 32) {
                _this.Toggle();
            }
        });

        this.folderContainer = root.appendChild(document.createElement('div'));
        this.folderContainer.classList.add(styles['guify-folder-contents']);

        this.open = this.opts.open || false;
        this.SetOpen(this.open);
    }

    // Toggle visibility


    _createClass(Folder, [{
        key: 'Toggle',
        value: function Toggle() {
            this.open = !this.open;
            this.SetOpen(this.open);
        }

        // Show or hide the contents

    }, {
        key: 'SetOpen',
        value: function SetOpen(show) {
            this.open = show;
            if (show) {
                this.folderContainer.classList.remove(styles['guify-folder-closed']);
                this.arrow.innerHTML = '&#9662;'; // Down triangle
            } else {
                this.folderContainer.classList.add(styles['guify-folder-closed']);
                this.arrow.innerHTML = '&#9656;'; // Right triangle
            }
        }
    }]);

    return Folder;
}();

exports.default = Folder;
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n.guify-folder {\n    cursor: pointer;\n    padding-left: 0.5em;\n    color: ', ';\n}\n\n.guify-folder div {\n    display: inline-block;\n    vertical-align: sub;\n    line-height: calc(', ' + 5px);\n}\n\n.guify-folder:hover,\n.guify-folder:focus {\n    color: ', ';\n    background-color: ', ';\n    outline: none;\n}\n\n\n.guify-folder-contents {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 14px;\n    margin-bottom: 5px;\n    border-left: 2px solid ', ';\n}\n\n.guify-folder-contents.guify-folder-closed {\n    height: 0;\n    display: none;\n}\n\n\n'], ['\n\n.guify-folder {\n    cursor: pointer;\n    padding-left: 0.5em;\n    color: ', ';\n}\n\n.guify-folder div {\n    display: inline-block;\n    vertical-align: sub;\n    line-height: calc(', ' + 5px);\n}\n\n.guify-folder:hover,\n.guify-folder:focus {\n    color: ', ';\n    background-color: ', ';\n    outline: none;\n}\n\n\n.guify-folder-contents {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 14px;\n    margin-bottom: 5px;\n    border-left: 2px solid ', ';\n}\n\n.guify-folder-contents.guify-folder-closed {\n    height: 0;\n    display: none;\n}\n\n\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

module.exports = csjs(_templateObject, _theme.theme.colors.textPrimary, _theme.theme.sizing.componentHeight, _theme.theme.colors.textHover, _theme.theme.colors.componentForeground, _theme.theme.colors.componentBackground);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wolfy87Eventemitter = __webpack_require__(4);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = __webpack_require__(68);

/**
 * File component. Drag and drop a file or click to choose a file.
 */

var File = function (_EventEmitter) {
    _inherits(File, _EventEmitter);

    function File(root, opts, theme, uuid) {
        _classCallCheck(this, File);

        var _this = _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).call(this));

        _this.opts = opts;

        _this.opts.fileReadFunc = _this.opts.fileReadFunc || "readAsDataURL";

        _this.file = null;
        _this.fileName = null;

        _this.container = __webpack_require__(2)(root, opts.label, theme);
        _this.container.classList.add(styles['guify-file-container']);
        _this.container.setAttribute('role', 'button');
        _this.container.setAttribute('tabIndex', '0'); // Make tabbable
        (0, _domCss2.default)(_this.container, {
            width: '100%',
            'box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            height: 'unset', // Grow with content
            padding: '8px'
        });

        var label = _this.container.appendChild(document.createElement('div'));
        label.innerHTML = opts.label;
        (0, _domCss2.default)(label, 'padding-bottom', '5px');

        var input = _this.container.appendChild(document.createElement('input'));
        input.setAttribute('type', 'file');
        input.setAttribute('multiple', false);
        input.style.display = 'none';
        // Add ARIA attribute to input based on label text
        if (opts.label) input.setAttribute('aria-label', opts.label);

        _this.fileLabel = _this.container.appendChild(document.createElement('div'));
        _this.fileLabel.innerHTML = 'Choose a file...';
        //css(this.fileLabel, 'color', theme.colors.textSecondary);

        var FileDropped = function FileDropped(event) {
            var files;
            if (event.dataTransfer) {
                files = event.dataTransfer.files;
            } else if (event.target) {
                files = event.target.files;
            }

            //this.SetValue(files[0]);
            var value = files[0];
            var reader = new FileReader();
            reader.onload = function () {
                _this.file = reader.result;
                _this.fileLabel.innerHTML = files[0].name;
                _this.emit('input', _this.file);
            };

            reader[_this.opts.fileReadFunc](files[0]);
        };

        input.addEventListener('change', FileDropped);

        _this.container.addEventListener('dragover', function (event) {
            event.preventDefault();
            event.stopPropagation();
            _this.container.classList.add(styles['guify-dragover']);
        });

        _this.container.addEventListener('dragleave', function (event) {
            event.preventDefault();
            event.stopPropagation();
            _this.container.classList.remove(styles['guify-dragover']);
        });

        _this.container.addEventListener('drop', function (event) {
            event.preventDefault();
            event.stopPropagation();
            _this.container.classList.remove(styles['guify-dragover']);
            FileDropped(event);
        });

        _this.container.onclick = function () {
            input.click();
        };

        _this.container.addEventListener('keydown', function (e) {
            // Listen for Space or Enter
            if (e.which === 13 || e.which === 32) {
                input.click();
            }
        });

        // Defocus on mouse up (for non-accessibility users)
        _this.container.addEventListener('mouseup', function () {
            _this.container.blur();
        });

        return _this;
    }

    _createClass(File, [{
        key: 'SetValue',
        value: function SetValue(value) {
            return;
            if (value === null || value === undefined) return;
        }
    }, {
        key: 'GetValue',
        value: function GetValue() {
            return this.file;
        }
    }]);

    return File;
}(_wolfy87Eventemitter2.default);

exports.default = File;
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n.guify-file-container {\n    display: inline-block;\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-file-container:hover,\n.guify-file-container:focus {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-file-container:active {\n    color: ', ' !important;\n    background-color: ', ' !important;\n}\n\n.guify-dragover {\n    background-color: ', ';\n    box-shadow: inset 0 0 0 3px ', ';\n}\n\n\n'], ['\n\n.guify-file-container {\n    display: inline-block;\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-file-container:hover,\n.guify-file-container:focus {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-file-container:active {\n    color: ', ' !important;\n    background-color: ', ' !important;\n}\n\n.guify-dragover {\n    background-color: ', ';\n    box-shadow: inset 0 0 0 3px ', ';\n}\n\n\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

module.exports = csjs(_templateObject, _theme.theme.colors.textPrimary, _theme.theme.colors.componentBackground, _theme.theme.colors.textHover, _theme.theme.colors.componentForeground, _theme.theme.colors.textActive, _theme.theme.colors.componentActive, _theme.theme.colors.componentBackground, _theme.theme.colors.componentForeground);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Display component. Shows the state of a variable.
 */
var Display = function () {
    function Display(root, opts, theme, uuid) {
        _classCallCheck(this, Display);

        this.opts = opts;

        this.container = __webpack_require__(2)(root, opts.label, theme);

        __webpack_require__(5)(this.container, opts.label, theme);

        this.text = this.container.appendChild(document.createElement('div'));
        (0, _domCss2.default)(this.text, {
            display: 'inline-block',
            height: 'unset',
            width: 'calc(100% - ' + theme.sizing.labelWidth + ')',
            border: 'none',
            //background: theme.background2,
            color: theme.colors.textSecondary,
            fontFamily: 'inherit',
            'box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            '-webkit-box-sizing': 'border-box',
            verticalAlign: 'sub',
            'line-height': theme.sizing.componentHeight,
            'user-select': 'text'
        });

        // Add ARIA attribute to text based on label text
        if (opts.label) this.text.setAttribute('aria-label', opts.label);
    }

    _createClass(Display, [{
        key: 'SetValue',
        value: function SetValue(value) {
            this.text.innerHTML = value.toString();
        }
    }, {
        key: 'GetValue',
        value: function GetValue() {
            return this.text.innerHTML.toString();
        }
    }]);

    return Display;
}();

exports.default = Display;
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wolfy87Eventemitter = __webpack_require__(4);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

var _isNumeric = __webpack_require__(10);

var _isNumeric2 = _interopRequireDefault(_isNumeric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = __webpack_require__(71);

function clamp(x, min, max) {
    return Math.min(Math.max(x, min), max);
}

var Interval = function (_EventEmitter) {
    _inherits(Interval, _EventEmitter);

    function Interval(root, opts, theme, uuid) {
        _classCallCheck(this, Interval);

        var _this = _possibleConstructorReturn(this, (Interval.__proto__ || Object.getPrototypeOf(Interval)).call(this));

        _this.opts = opts;

        _this.container = __webpack_require__(2)(root, opts.label, theme);
        __webpack_require__(5)(_this.container, opts.label, theme);

        if (!!opts.step && !!opts.steps) {
            throw new Error('Cannot specify both step and steps. Got step = ' + opts.step + ', steps = ', opts.steps);
        }

        _this.input = _this.container.appendChild(document.createElement('span'));
        _this.input.className = styles['guify-interval'];

        _this.handle = document.createElement("span");
        _this.handle.className = styles['guify-interval-handle'];
        _this.input.appendChild(_this.handle);

        if (!Array.isArray(opts.initial)) {
            opts.initial = [];
        }

        if (opts.scale === "log") {
            // Get options or set defaults:
            opts.max = (0, _isNumeric2.default)(opts.max) ? opts.max : 100;
            opts.min = (0, _isNumeric2.default)(opts.min) ? opts.min : 0.1;

            // Check if all signs are valid:
            if (opts.min * opts.max <= 0) {
                throw new Error('Log range min/max must have the same sign and not equal zero. Got min = ' + opts.min + ', max = ' + opts.max);
            } else {
                // Pull these into separate variables so that opts can define the *slider* mapping
                _this.logmin = opts.min;
                _this.logmax = opts.max;
                _this.logsign = opts.min > 0 ? 1 : -1;

                // Got the sign so force these positive:
                _this.logmin = Math.abs(_this.logmin);
                _this.logmax = Math.abs(_this.logmax);

                // These are now simply 0-100 to which we map the log range:
                opts.min = 0;
                opts.max = 100;

                // Step is invalid for a log range:
                if ((0, _isNumeric2.default)(opts.step)) {
                    throw new Error('Log may only use steps (integer number of steps), not a step value. Got step =' + opts.step);
                }
                // Default step is simply 1 in linear slider space:
                opts.step = 1;
            }

            opts.initial = [_this.InverseScaleValue((0, _isNumeric2.default)(opts.initial) ? opts.initial[0] : scaleValue(opts.min + (opts.max - opts.min) * 0.25)), _this.InverseScaleValue((0, _isNumeric2.default)(opts.initial) ? opts.initial[1] : scaleValue(opts.min + (opts.max - opts.min) * 0.75))];
            if (_this.ScaleValue(opts.initial[0]) * _this.ScaleValue(opts.max) <= 0 || scaleValue(opts.initial[1]) * _this.ScaleValue(opts.max) <= 0) {
                throw new Error('Log range initial value must have the same sign as min/max and must not equal zero. Got initial value = [' + _this.ScaleValue(opts.initial[0]) + ', ' + _this.ScaleValue(opts.initial[1]) + ']');
            }
        } else {
            // If linear, this is much simpler:
            opts.max = (0, _isNumeric2.default)(opts.max) ? opts.max : 100;
            opts.min = (0, _isNumeric2.default)(opts.min) ? opts.min : 0;
            opts.step = (0, _isNumeric2.default)(opts.step) ? opts.step : 0.01;

            opts.initial = [(0, _isNumeric2.default)(opts.initial[0]) ? opts.initial[0] : (opts.min + opts.max) * 0.25, (0, _isNumeric2.default)(opts.initial[1]) ? opts.initial[1] : (opts.min + opts.max) * 0.75];
        }

        // If we got a number of steps, use that instead:
        if ((0, _isNumeric2.default)(opts.steps)) {
            opts.step = (0, _isNumeric2.default)(opts.steps) ? (opts.max - opts.min) / opts.steps : opts.step;
        }

        // Quantize the initial value to the requested step:
        opts.initial[0] = opts.min + opts.step * Math.round((opts.initial[0] - opts.min) / opts.step);
        opts.initial[1] = opts.min + opts.step * Math.round((opts.initial[1] - opts.min) / opts.step);

        _this.value = opts.initial;

        (0, _domCss2.default)(_this.handle, {
            left: (_this.value[0] - opts.min) / (opts.max - opts.min) * 100 + '%',
            right: 100 - (_this.value[1] - opts.min) / (opts.max - opts.min) * 100 + '%'
        });

        // Display the values:
        _this.lValue = __webpack_require__(6)(_this.container, _this.ScaleValue(opts.initial[0]), theme, '11%', true);
        _this.rValue = __webpack_require__(6)(_this.container, _this.ScaleValue(opts.initial[1]), theme, '11%');

        // Add ARIA attribute to input based on label text
        if (opts.label) _this.lValue.setAttribute('aria-label', opts.label + ' lower value');
        if (opts.label) _this.lValue.setAttribute('aria-label', opts.label + ' upper value');

        // An index to track what's being dragged:
        _this.activeIndex = -1;

        setTimeout(function () {
            var scaledLValue = _this.ScaleValue(_this.value[0]);
            var scaledRValue = _this.ScaleValue(_this.value[1]);
            _this.lValue.innerHTML = scaledLValue;
            _this.rValue.innerHTML = scaledRValue;
            _this.emit('initialized', [scaledLValue, scaledRValue]);
        });

        // Gain focus
        _this.input.addEventListener('focus', function () {
            _this.focused = true;
        });

        // Lose focus
        _this.input.addEventListener('blur', function () {
            _this.focused = false;
        });

        var mouseX = function mouseX(ev) {
            // Get mouse position in page coords relative to the container:
            return ev.pageX - _this.input.getBoundingClientRect().left;
        };

        var mouseMoveListener = function mouseMoveListener(ev) {
            var fraction = clamp(mouseX(ev) / _this.input.offsetWidth, 0, 1);

            _this.setActiveValue(fraction);
        };

        var mouseUpListener = function mouseUpListener(ev) {
            var fraction = clamp(mouseX(ev) / _this.input.offsetWidth, 0, 1);

            _this.setActiveValue(fraction);

            document.removeEventListener('mousemove', mouseMoveListener);
            document.removeEventListener('mouseup', mouseUpListener);

            _this.activeIndex = -1;
        };

        _this.input.addEventListener('mousedown', function (ev) {
            // Get mouse position fraction:
            var fraction = clamp(mouseX(ev) / _this.input.offsetWidth, 0, 1);

            // Get the current fraction of position --> [0, 1]:
            var lofrac = (_this.value[0] - opts.min) / (opts.max - opts.min);
            var hifrac = (_this.value[1] - opts.min) / (opts.max - opts.min);

            // This is just for making decisions, so perturb it ever
            // so slightly just in case the bounds are numerically equal:
            lofrac -= Math.abs(opts.max - opts.min) * 1e-15;
            hifrac += Math.abs(opts.max - opts.min) * 1e-15;

            // Figure out which is closer:
            var lodiff = Math.abs(lofrac - fraction);
            var hidiff = Math.abs(hifrac - fraction);

            _this.activeIndex = lodiff < hidiff ? 0 : 1;

            console.log(_this.activeIndex);

            // Attach this to *document* so that we can still drag if the mouse
            // passes outside the container:
            document.addEventListener('mousemove', mouseMoveListener);
            document.addEventListener('mouseup', mouseUpListener);
        });

        // Defocus on mouse up (for non-accessibility users)
        _this.input.addEventListener('mouseup', function () {
            _this.input.blur();
        });

        _this.input.oninput = function () {
            var scaledLValue = _this.ScaleValue(_this.value[0]);
            var scaledRValue = _this.ScaleValue(_this.value[1]);
            _this.lValue.value = scaledLValue;
            _this.rValue.value = scaledRValue;
            _this.emit('input', [scaledLValue, scaledRValue]);
        };

        // Handle lower bound input box changes
        _this.lValue.onchange = function () {
            var rawValue = _this.lValue.value;
            var otherValue = parseFloat(_this.rValue.value);
            if (Number(parseFloat(rawValue)) == rawValue) {
                // Input number is valid
                var value = parseFloat(rawValue);
                // Clamp to input range
                value = Math.min(Math.max(value, opts.min), opts.max);
                // Map to nearest step
                value = Math.ceil((value - opts.min) / opts.step) * opts.step + opts.min;
                // Prevent value from going beyond interval upper value
                value = Math.min(value, otherValue);

                _this.lValue.value = value;
                _this.emit('input', [value, otherValue]);
                _this.RefreshHandle([value, otherValue]);
            } else {
                // Input number is invalid
                // Go back to before input change
                _this.lValue.value = _this.lastValue[0];
            }
        };

        // Handle upper bound input box changes
        _this.rValue.onchange = function () {
            var rawValue = _this.rValue.value;
            var otherValue = parseFloat(_this.lValue.value);
            if (Number(parseFloat(rawValue)) == rawValue) {
                // Input number is valid
                var value = parseFloat(rawValue);
                // Clamp to input range
                value = Math.min(Math.max(value, opts.min), opts.max);
                // Map to nearest step
                value = Math.ceil((value - opts.min) / opts.step) * opts.step + opts.min;
                // Prevent value from going below interval lower value
                value = Math.max(value, otherValue);

                _this.rValue.value = value;
                _this.emit('input', [otherValue, value]);
                _this.RefreshHandle([otherValue, value]);
            } else {
                // Input number is invalid
                // Go back to before input change
                _this.rValue.value = _this.lastValue[1];
            }
        };
        return _this;
    }

    _createClass(Interval, [{
        key: 'ScaleValue',
        value: function ScaleValue(value) {
            if (this.opts.scale === 'log') return this.logsign * Math.exp(Math.log(this.logmin) + (Math.log(this.logmax) - Math.log(this.logmin)) * value / 100);else return value;
        }
    }, {
        key: 'InverseScaleValue',
        value: function InverseScaleValue(value) {
            if (this.opts.scale === 'log') return (Math.log(value * this.logsign) - Math.log(this.logmin)) * 100 / (Math.log(this.logmax) - Math.log(this.logmin));else return value;
        }
    }, {
        key: 'setActiveValue',
        value: function setActiveValue(fraction) {
            if (this.activeIndex === -1) {
                return;
            }

            var opts = this.opts;

            // Get the position in the range [0, 1]:
            var lofrac = (this.value[0] - opts.min) / (opts.max - opts.min);
            var hifrac = (this.value[1] - opts.min) / (opts.max - opts.min);

            // Clip against the other bound:
            if (this.activeIndex === 0) {
                fraction = Math.min(hifrac, fraction);
            } else {
                fraction = Math.max(lofrac, fraction);
            }

            // Compute and quantize the new value:
            var newValue = opts.min + Math.round((opts.max - opts.min) * fraction / opts.step) * opts.step;

            // Update value, in linearized coords:
            this.value[this.activeIndex] = newValue;

            // Update and send the event:
            (0, _domCss2.default)(this.handle, {
                left: (this.value[0] - opts.min) / (opts.max - opts.min) * 100 + '%',
                right: 100 - (this.value[1] - opts.min) / (opts.max - opts.min) * 100 + '%'
            });
            this.input.oninput();
        }
    }, {
        key: 'SetValue',
        value: function SetValue(value) {
            if (this.focused !== true) {
                this.lValue.value = this.FormatNumber(value[0]);
                this.rValue.value = this.FormatNumber(value[1]);

                this.lastValue = [this.lValue.value, this.rValue.value];
            }
        }
    }, {
        key: 'FormatNumber',
        value: function FormatNumber(value) {
            // https://stackoverflow.com/a/29249277
            return value.toFixed(3).replace(/\.?0*$/, '');
        }
    }, {
        key: 'GetValue',
        value: function GetValue() {
            return [this.lValue.value, this.rValue.value];
        }
    }, {
        key: 'RefreshHandle',
        value: function RefreshHandle(interval) {
            var leftPercent = (parseFloat(interval[0]) - this.opts.min) / (this.opts.max - this.opts.min) * 100;
            var rightPercent = 100 - (parseFloat(interval[1]) - this.opts.min) / (this.opts.max - this.opts.min) * 100;
            (0, _domCss2.default)(this.handle, {
                left: leftPercent + '%',
                right: rightPercent + '%'
            });
        }
    }]);

    return Interval;
}(_wolfy87Eventemitter2.default);

exports.default = Interval;
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n.guify-interval {\n    -webkit-appearance: none;\n    position: absolute;\n    height: 20px;\n    margin: 0px 0;\n    width: 33%;\n    left: 54.5%;\n    background-color: ', ';\n    cursor: ew-resize;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.guify-interval-handle {\n    background-color: ', ';\n    position: absolute;\n    height: ', ';\n    min-width: 1px;\n}\n.guify-interval-handle:focus {\n    background: ', ';\n}\n'], ['\n.guify-interval {\n    -webkit-appearance: none;\n    position: absolute;\n    height: 20px;\n    margin: 0px 0;\n    width: 33%;\n    left: 54.5%;\n    background-color: ', ';\n    cursor: ew-resize;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.guify-interval-handle {\n    background-color: ', ';\n    position: absolute;\n    height: ', ';\n    min-width: 1px;\n}\n.guify-interval-handle:focus {\n    background: ', ';\n}\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

var trackColor = _theme.theme.colors.componentBackground;
var thumbColor = _theme.theme.colors.componentForeground;
var thumbHighlight = _theme.theme.colors.componentActive;

module.exports = csjs(_templateObject, trackColor, thumbColor, _theme.theme.sizing.componentHeight, thumbHighlight);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MenuBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

var _wolfy87Eventemitter = __webpack_require__(4);

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _theme = __webpack_require__(1);

var _screenfull = __webpack_require__(15);

var _screenfull2 = _interopRequireDefault(_screenfull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuBar = exports.MenuBar = function (_EventEmitter) {
    _inherits(MenuBar, _EventEmitter);

    function MenuBar(root, opts) {
        _classCallCheck(this, MenuBar);

        // Add menu bar styles to the head
        var _this = _possibleConstructorReturn(this, (MenuBar.__proto__ || Object.getPrototypeOf(MenuBar)).call(this));

        var styles = __webpack_require__(73);

        // Create menu bar
        _this.element = document.createElement('div');
        _this.element.className = styles['guify-bar'];
        root.appendChild(_this.element);

        if (opts.title) {
            // Create a text label inside of the bar
            var text = _this.element.appendChild(document.createElement('div'));
            text.className = styles['guify-bar-title'];
            text.innerHTML = opts.title;
        }

        // Make the menu collapse button
        var menuButton = _this.element.appendChild(document.createElement('button'));
        menuButton.className = styles['guify-bar-button'];
        menuButton.innerHTML = 'Controls';
        (0, _domCss2.default)(menuButton, {
            left: opts.align == 'left' ? '0' : 'unset',
            right: opts.align == 'left' ? 'unset' : '0'
        });
        menuButton.onclick = function () {
            _this.emit('ontogglepanel');
        };

        // Make the fullscreen button
        if (_screenfull2.default.isEnabled) {
            var fullscreenButton = _this.element.appendChild(document.createElement('button'));
            fullscreenButton.className = styles['guify-bar-button'];
            fullscreenButton.innerHTML = '「　」';
            fullscreenButton.setAttribute('aria-label', 'Toggle Fullscreen');
            (0, _domCss2.default)(fullscreenButton, {
                left: opts.align == 'left' ? 'unset' : '0', // Place on opposite side from menuButton
                right: opts.align == 'left' ? '0' : 'unset'
            });
            fullscreenButton.onclick = function () {
                _this.emit('onfullscreenrequested');
            };
        }

        return _this;
    }

    _createClass(MenuBar, [{
        key: 'SetVisible',
        value: function SetVisible(show) {
            this.element.style.display = show ? 'block' : 'none';
        }
    }]);

    return MenuBar;
}(_wolfy87Eventemitter2.default);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n.guify-bar {\n    background-color: ', ';\n    height: ', ';\n    width: 100%;\n    opacity: 1.0;\n    position: relative;\n    cursor: default;\n}\n\n.guify-bar-title {\n    color: ', ';\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    line-height: ', ';\n    color: ', ';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.guify-bar-button {\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    color: ', ';\n    background-color: ', ';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    margin: 0;\n\n}\n\n/* Hide default accessibility outlines since we\'re providing our own visual feedback */\n.guify-bar-button:focus {\n    outline:none;\n}\n.guify-bar-button::-moz-focus-inner {\n    border:0;\n}\n\n.guify-bar-button:hover,\n.guify-bar-button:focus {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-bar-button:active {\n    color: ', ' !important;\n    background-color: ', ' !important;\n}\n\n\n'], ['\n\n.guify-bar {\n    background-color: ', ';\n    height: ', ';\n    width: 100%;\n    opacity: 1.0;\n    position: relative;\n    cursor: default;\n}\n\n.guify-bar-title {\n    color: ', ';\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    line-height: ', ';\n    color: ', ';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.guify-bar-button {\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    color: ', ';\n    background-color: ', ';\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    margin: 0;\n\n}\n\n/* Hide default accessibility outlines since we\'re providing our own visual feedback */\n.guify-bar-button:focus {\n    outline:none;\n}\n.guify-bar-button::-moz-focus-inner {\n    border:0;\n}\n\n.guify-bar-button:hover,\n.guify-bar-button:focus {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-bar-button:active {\n    color: ', ' !important;\n    background-color: ', ' !important;\n}\n\n\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

module.exports = csjs(_templateObject, _theme.theme.colors.menuBarBackground, _theme.theme.sizing.menuBarHeight, _theme.theme.colors.text1, _theme.theme.sizing.menuBarHeight, _theme.theme.colors.menuBarText, _theme.theme.colors.textPrimary, _theme.theme.colors.componentBackground, _theme.theme.colors.textHover, _theme.theme.colors.componentForeground, _theme.theme.colors.textActive, _theme.theme.colors.componentActive);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Panel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

var _theme = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Panel = exports.Panel = function () {
    function Panel(root, opts) {
        _classCallCheck(this, Panel);

        this.opts = opts;

        // Add styles to the head
        this.styles = __webpack_require__(75);

        // Container the panel will sit in
        this.container = root.appendChild(document.createElement('div'));
        this.container.className = this.styles['guify-panel-container'];
        (0, _domCss2.default)(this.container, {
            width: opts.width,
            opacity: opts.opacity || 1.0,
            left: opts.align == 'left' ? '0' : 'unset',
            right: opts.align == 'left' ? 'unset' : '0'
        });

        if (opts.panelMode == 'outer') {
            (0, _domCss2.default)(this.container, {
                left: opts.align == 'left' ? 'unset' : '100%',
                right: opts.align == 'left' ? '100%' : 'unset'
            });
        }

        if (opts.barMode === 'none') {
            this._MakeToggleButton();
        }

        // Create panel inside container
        this.panel = this.container.appendChild(document.createElement('div'));
        this.panel.className = this.styles['guify-panel'];

        // Add a title to the panel
        if (opts.barMode === 'none' && opts.title) __webpack_require__(76)(this.panel, opts.title, _theme.theme);
    }

    /**
     * Makes the panel visible based on the truthiness of `show`.
     * @param {Bool} [show]
     */


    _createClass(Panel, [{
        key: 'SetVisible',
        value: function SetVisible(show) {
            if (show) {
                // this.panel.style.height = Array.prototype.reduce.call(this.panel.childNodes, function(p, c) {return p + (c.offsetHeight || 0) + 5 + 1;}, 0) + 'px';
                // this.panel.style.paddingTop = '14px';
                // this.panel.style.paddingBottom = '8px';
                this.panel.classList.remove(this.styles['guify-panel-hidden']);

                if (this.menuButton) this.menuButton.setAttribute('alt', 'Close GUI');
            } else {
                // this.panel.style.height = '0px';
                // this.panel.style.paddingTop = '0px';
                // this.panel.style.paddingBottom = '0px';
                this.panel.classList.add(this.styles['guify-panel-hidden']);

                if (this.menuButton) this.menuButton.setAttribute('alt', 'Open GUI');
            }
        }

        /**
         * Toggles the visibility of the panel.
         */

    }, {
        key: 'ToggleVisible',
        value: function ToggleVisible() {
            if (this.panel.classList.contains(this.styles['guify-panel-hidden'])) this.SetVisible(true);else this.SetVisible(false);
        }

        /**
         * Makes a show/hide button that sits at the bottom of the panel.
         */

    }, {
        key: '_MakeToggleButton',
        value: function _MakeToggleButton() {
            var _this = this;

            // Make the menu collapse button
            this.menuButton = this.container.appendChild(document.createElement('button'));
            this.menuButton.className = this.styles['guify-panel-toggle-button'];
            (0, _domCss2.default)(this.menuButton, {
                left: this.opts.align == 'left' ? '0px' : 'unset',
                right: this.opts.align == 'left' ? 'unset' : '0px'
            });

            this.menuButton.onclick = function () {
                _this.ToggleVisible();
            };

            // Defocus on mouse up (for non-accessibility users)
            this.menuButton.addEventListener('mouseup', function () {
                _this.menuButton.blur();
            });

            this.menuButton.innerHTML = '\n        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">\n            <rect x="10%" y="10%" width="80%" height="80%"/>\n        </svg>\n        ';
        }
    }]);

    return Panel;
}();

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n.guify-panel-container {\n    position: absolute;\n    background: ', ';\n}\n\n.guify-panel {\n    padding: 14px;\n    /* Last component will have a margin, so reduce padding to account for this */\n    padding-bottom: calc(14px - ', ');\n\n    /* all: initial;  */\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.guify-panel.guify-panel-hidden {\n    height: 0px;\n    display: none;\n}\n\n.guify-panel * {\n    box-sizing: initial;\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n}\n\n.guify-panel input {\n    font-family: \'Hack\';\n    font-size: 11px;\n    display: inline;\n}\n\n.guify-panel a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.guify-panel-toggle-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 15px;\n    height: 15px;\n    line-height: 15px;\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    color: ', ';\n    background-color: ', ';\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n}\n\n/* Open/Close button styling */\n.guify-panel-toggle-button svg {\n    fill-opacity: 0;\n    stroke-width: 3;\n    stroke: ', ';\n}\n\n/* Remove browser default outlines since we\'re providing our own */\n.guify-panel-toggle-button:focus {\n    outline:none;\n}\n.guify-panel-toggle-button::-moz-focus-inner {\n    border: 0;\n}\n\n.guify-panel-toggle-button:hover,\n.guify-panel-toggle-button:focus {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-panel-toggle-button:active {\n    color: ', ';\n    background-color: ', ';\n}\n\n'], ['\n\n.guify-panel-container {\n    position: absolute;\n    background: ', ';\n}\n\n.guify-panel {\n    padding: 14px;\n    /* Last component will have a margin, so reduce padding to account for this */\n    padding-bottom: calc(14px - ', ');\n\n    /* all: initial;  */\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.guify-panel.guify-panel-hidden {\n    height: 0px;\n    display: none;\n}\n\n.guify-panel * {\n    box-sizing: initial;\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n}\n\n.guify-panel input {\n    font-family: \'Hack\';\n    font-size: 11px;\n    display: inline;\n}\n\n.guify-panel a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.guify-panel-toggle-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 15px;\n    height: 15px;\n    line-height: 15px;\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    color: ', ';\n    background-color: ', ';\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n}\n\n/* Open/Close button styling */\n.guify-panel-toggle-button svg {\n    fill-opacity: 0;\n    stroke-width: 3;\n    stroke: ', ';\n}\n\n/* Remove browser default outlines since we\'re providing our own */\n.guify-panel-toggle-button:focus {\n    outline:none;\n}\n.guify-panel-toggle-button::-moz-focus-inner {\n    border: 0;\n}\n\n.guify-panel-toggle-button:hover,\n.guify-panel-toggle-button:focus {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-panel-toggle-button:active {\n    color: ', ';\n    background-color: ', ';\n}\n\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

module.exports = csjs(_templateObject, _theme.theme.colors.panelBackground, _theme.theme.sizing.componentSpacing, _theme.theme.colors.textPrimary, _theme.theme.colors.componentBackground, _theme.theme.colors.componentForeground, _theme.theme.colors.textHover, _theme.theme.colors.componentForeground, _theme.theme.colors.textActive, _theme.theme.colors.componentActive);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (root, text, theme) {
    var title = root.appendChild(document.createElement('div'));
    title.innerHTML = text;

    (0, _domCss2.default)(title, {
        width: '100%',
        textAlign: 'center',
        color: theme.colors.textSecondary,
        height: '20px',
        marginBottom: '4px'
    });

    return title;
};

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToastArea = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domCss = __webpack_require__(0);

var _domCss2 = _interopRequireDefault(_domCss);

var _theme = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a container div that creates and holds toast notifications.
 */
var ToastArea = exports.ToastArea = function () {
    function ToastArea(root, opts) {
        _classCallCheck(this, ToastArea);

        this.opts = opts;

        // Add toast area styles to the head
        this.styles = __webpack_require__(78);

        // Make toast area
        this.element = root.appendChild(document.createElement('div'));
        this.element.classList.add(this.styles['guify-toast-area']);
        (0, _domCss2.default)(this.element, {
            position: 'absolute',
            'width': '100%'
        });
    }

    /**
     * Makes a message that appears under the menu bar. Transitions out
     * over `transitionMS` milliseconds after `stayMS` milliseconds have passed.
     */


    _createClass(ToastArea, [{
        key: 'CreateToast',
        value: function CreateToast(message) {
            var stayMS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
            var transitionMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            console.log('[Toast] ' + message);

            var toast = this.element.appendChild(document.createElement('div'));
            toast.classList.add(this.styles['guify-toast-notification']);
            toast.setAttribute('aria-live', 'polite');

            toast.innerHTML = message;

            (0, _domCss2.default)(toast, {
                // Animation stuff
                // '-webkit-transition': 'opacity ' + transitionMS + 'ms linear',
                // 'transition': 'opacity ' + transitionMS + 'ms linear',
            });

            // Make close button in toast
            var closeButton = toast.appendChild(document.createElement('button'));
            closeButton.innerHTML = '&#10006;';
            closeButton.classList.add(this.styles['guify-toast-close-button']);

            var timeout = void 0;

            var TransitionOut = function TransitionOut() {
                toast.blur();
                (0, _domCss2.default)(toast, {
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
                    'opacity': '0'
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
}();

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n.guify-toast-notification {\n    box-sizing: border-box;\n    color: theme.colors.text1;\n    position: relative;\n    width: 100%;\n    /* height: 20px; */\n    padding: 8px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n    font-family: \'Hack\', monospace;\n    font-size: 11px;\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(odd) {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(even) {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-toast-close-button {\n    color: ', ';\n    background: transparent;\n    position: absolute;\n    textAlign: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    border: none;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 8px;\n}\n\n'], ['\n\n.guify-toast-notification {\n    box-sizing: border-box;\n    color: theme.colors.text1;\n    position: relative;\n    width: 100%;\n    /* height: 20px; */\n    padding: 8px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n    font-family: \'Hack\', monospace;\n    font-size: 11px;\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(odd) {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(even) {\n    color: ', ';\n    background-color: ', ';\n}\n\n.guify-toast-close-button {\n    color: ', ';\n    background: transparent;\n    position: absolute;\n    textAlign: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    border: none;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 8px;\n}\n\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

module.exports = csjs(_templateObject, _theme.theme.colors.textPrimary, _theme.theme.colors.panelBackground, _theme.theme.colors.textPrimary, _theme.theme.colors.menuBarBackground, _theme.theme.colors.textPrimary);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n.guify-container {\n    position: relative;\n    left: 0;\n    width: 100%;\n    font-size: 11px;\n    z-index: 9999;\n}\n\n'], ['\n\n.guify-container {\n    position: relative;\n    left: 0;\n    width: 100%;\n    font-size: 11px;\n    z-index: 9999;\n}\n\n']);

var _theme = __webpack_require__(1);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var csjs = __webpack_require__(3);

module.exports = csjs(_templateObject);

/***/ })
/******/ ]);
});
//# sourceMappingURL=guify.js.map