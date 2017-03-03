/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullet = function () {
  function Bullet(stage, ship, pos_x, pos_y) {
    _classCallCheck(this, Bullet);

    this.stage = stage;
    this.ship = ship;
    this.shape = new createjs.Shape();
    this.shape.graphics.f('white').dc(pos_x, pos_y, 4);
    this.stage.addChild(this.shape);
    this.move = this.move.bind(this);
    this.stage.addEventListener("tick", this.move);
  }

  _createClass(Bullet, [{
    key: "move",
    value: function move(e) {
      this.shape.y -= 20;
    }
  }, {
    key: "render",
    value: function render() {
      return this.shape;
    }
  }]);

  return Bullet;
}();

exports.default = Bullet;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ship = function () {
  function Ship(stage, color) {
    _classCallCheck(this, Ship);

    this.stage = stage;
    this.size = 40;
    this.pos_x = stage.canvas.width / 2 - this.size;
    this.pos_y = stage.canvas.height - this.size * 2;
    this.shape = new createjs.Shape();
    this.shape.graphics.f(color).dr(0, 0, this.size, this.size);
  }

  _createClass(Ship, [{
    key: "render",
    value: function render() {
      return this.shape;
    }
  }]);

  return Ship;
}();

exports.default = Ship;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ship = __webpack_require__(1);

var _ship2 = _interopRequireDefault(_ship);

var _bullet = __webpack_require__(0);

var _bullet2 = _interopRequireDefault(_bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var stage = new createjs.Stage('myCanvas');
  var ship = new _ship2.default(stage, "red");
  stage.addChild(ship.shape);
  stage.update();
  createjs.Ticker.setFPS(45);
  createjs.Ticker.addEventListener("tick", function () {
    stage.update();
  });

  stage.on("stagemousemove", function (e) {
    ship.shape.y = e.stageY - 20;
    ship.shape.x = e.stageX - 20;
  });

  var bulletInterval = void 0;

  ship.shape.on("mousedown", function (e) {
    bulletInterval = setInterval(function () {
      var bullet = new _bullet2.default(stage, ship, ship.shape.x + 20, ship.shape.y);
    }, 150);
  });

  ship.shape.on("pressup", function (e) {
    clearInterval(bulletInterval);
  });
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map