/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "997bf839366afc3ec387294742468ee4.png");

/***/ }),

/***/ "./src/img/coin.png":
/*!**************************!*\
  !*** ./src/img/coin.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a3d8a210a31ea73fa6b536d97277aaf9.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d3f0b5d9be53b813849c8d41d21d749b.png");

/***/ }),

/***/ "./src/img/player.png":
/*!****************************!*\
  !*** ./src/img/player.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1f49994c97c2232fd9d4515cfc342ec5.png");

/***/ }),

/***/ "./src/img/spike.png":
/*!***************************!*\
  !*** ./src/img/spike.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a37487d8d2fc7488bd03041cc16f922e.png");

/***/ }),

/***/ "./src/js/GenericObject.js":
/*!*********************************!*\
  !*** ./src/js/GenericObject.js ***!
  \*********************************/
/*! exports provided: GenericObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericObject", function() { return GenericObject; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(x, y, image) {
    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      _canvas__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

/***/ }),

/***/ "./src/js/KeyDown.js":
/*!***************************!*\
  !*** ./src/js/KeyDown.js ***!
  \***************************/
/*! exports provided: KeyDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyDown", function() { return KeyDown; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");

function KeyDown(key, sp) {
  switch (key) {
    case "a":
      _canvas__WEBPACK_IMPORTED_MODULE_0__["keys"].left.pressed = true;
      break;

    case "d":
      _canvas__WEBPACK_IMPORTED_MODULE_0__["keys"].right.pressed = true;
      break;

    case " ":
      if (sp > 2) {
        _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y -= 50;
        sp += 1;
        break;
      }

  }
}

/***/ }),

/***/ "./src/js/KeyUp.js":
/*!*************************!*\
  !*** ./src/js/KeyUp.js ***!
  \*************************/
/*! exports provided: KeyUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyUp", function() { return KeyUp; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");

function KeyUp(key) {
  switch (key) {
    case "a":
      _canvas__WEBPACK_IMPORTED_MODULE_0__["keys"].left.pressed = false;
      break;

    case "d":
      _canvas__WEBPACK_IMPORTED_MODULE_0__["keys"].right.pressed = false;
      break;

    case " ":
      _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y = 0;
      break;
  }
}

/***/ }),

/***/ "./src/js/Platform.js":
/*!****************************!*\
  !*** ./src/js/Platform.js ***!
  \****************************/
/*! exports provided: Platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Platform = /*#__PURE__*/function () {
  function Platform(x, y, image) {
    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      _canvas__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: coin1, Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coin1", function() { return coin1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var coin1 = false;

var _require = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js"),
    coins_got = _require.coins_got;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 64;
    this.height = 64;
    this.speed = 10;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      _canvas__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(_canvas__WEBPACK_IMPORTED_MODULE_0__["playerImage"], this.position.x, this.position.y);
    }
  }, {
    key: "collidesWith",
    value: function collidesWith(what) {
      if (what === 'platform') {
        _canvas__WEBPACK_IMPORTED_MODULE_0__["platforms"].forEach(function (platform) {
          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].height <= platform.position.y && _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].height + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y >= platform.position.y && _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.x + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].width >= platform.position.x && _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.x <= platform.position.x + platform.width) {
            console.log('Player collidesWith platform');
            return true;
          }
        });
      } else if (what === 'spike') {
        var dead = false;
        _canvas__WEBPACK_IMPORTED_MODULE_0__["spikes"].forEach(function (spike) {
          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].height - 30 >= spike.position.y && _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].height + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y - 30 >= spike.position.y && _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.x + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].width >= spike.position.x && _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.x <= spike.position.x + spike.width) {
            console.log('Player collidesWith spike');
            dead = true;
          }
        });
        if (dead) return true;
      } else if (what === 'coin') {
        _canvas__WEBPACK_IMPORTED_MODULE_0__["coins"].forEach(function (coin) {
          if (_canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].height - 30 >= coin.position.y && _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.y + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].height + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y - 30 >= coin.position.y && _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.x + _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].width >= coin.position.x && _canvas__WEBPACK_IMPORTED_MODULE_0__["player"].position.x <= coin.position.x + coin.width) {
            coin1 = true;
            coin.position.x += 50000;
            coin.position.y += 50000; //Does not work sadly.
            //c.clearRect(coin.position.x, coin.position.y, coin.image.width, coin.image.height)
          }
        });
        if (coin1) return true;else if (coin1) coin1 = falses;
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height) this.velocity.y += _canvas__WEBPACK_IMPORTED_MODULE_0__["gravity"];
    }
  }]);

  return Player;
}();

/***/ }),

/***/ "./src/js/Spike.js":
/*!*************************!*\
  !*** ./src/js/Spike.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spike; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Spike = /*#__PURE__*/function () {
  function Spike(x, y, image) {
    _classCallCheck(this, Spike);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }

  _createClass(Spike, [{
    key: "draw",
    value: function draw() {
      _canvas__WEBPACK_IMPORTED_MODULE_0__["c"].drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Spike;
}();



/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: canvas, c, gravity, playerImage, player, platforms, coins_got, spikes, coins, keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gravity", function() { return gravity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerImage", function() { return playerImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platforms", function() { return platforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coins_got", function() { return coins_got; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spikes", function() { return spikes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coins", function() { return coins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_player_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/player.png */ "./src/img/player.png");
/* harmony import */ var _GenericObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GenericObject */ "./src/js/GenericObject.js");
/* harmony import */ var _KeyDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KeyDown */ "./src/js/KeyDown.js");
/* harmony import */ var _KeyUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KeyUp */ "./src/js/KeyUp.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Platform */ "./src/js/Platform.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");
/* harmony import */ var _img_spike_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/spike.png */ "./src/img/spike.png");
/* harmony import */ var _img_coin_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/coin.png */ "./src/img/coin.png");
/* harmony import */ var _Spike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Spike */ "./src/js/Spike.js");
var canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');
var gravity = 5;












var space_pressed = 0;

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var playerImage = createImage(_img_player_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var player = new _Player__WEBPACK_IMPORTED_MODULE_8__["Player"]();
var platforms = [new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](-1, 660, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](platformImage.width - 3, 660, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](platformImage.width * 2 + 100, 660, platformImage)];
var coins_got = 0;

var first_time = true;
var won = false;
var spikes = [new _Spike__WEBPACK_IMPORTED_MODULE_11__["default"](0, 490, createImage(_img_spike_png__WEBPACK_IMPORTED_MODULE_9__["default"]))];
var coins = [new _GenericObject__WEBPACK_IMPORTED_MODULE_4__["GenericObject"](-1, -1, createImage(_img_coin_png__WEBPACK_IMPORTED_MODULE_10__["default"]))];
var genericObjects = [new _GenericObject__WEBPACK_IMPORTED_MODULE_4__["GenericObject"](-1, -1, createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new _GenericObject__WEBPACK_IMPORTED_MODULE_4__["GenericObject"](-1, -1, createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"]))];
var scrollOffset = 0;

function init() {
  player = new _Player__WEBPACK_IMPORTED_MODULE_8__["Player"]();
  c.fillText(('$KDLKFLKLDKFLFKLDFKLFK', coins_got), 0, 0);
  platforms = [new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](0, 660 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](100, 660 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](200, 660 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](400, 510 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](500, 510 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](600, 510 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](700, 510 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](975, 510 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](1075, 510 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](1175, 510 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](1275, 510 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](1575, 660 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](1675, 660 - 50, platformImage), new _Platform__WEBPACK_IMPORTED_MODULE_7__["Platform"](1775, 660 - 50, platformImage)];
  spikes = [new _Spike__WEBPACK_IMPORTED_MODULE_11__["default"](500, 410, createImage(_img_spike_png__WEBPACK_IMPORTED_MODULE_9__["default"]))];
  coins = [new _GenericObject__WEBPACK_IMPORTED_MODULE_4__["GenericObject"](600, 420, createImage(_img_coin_png__WEBPACK_IMPORTED_MODULE_10__["default"]))];
  genericObjects = [new _GenericObject__WEBPACK_IMPORTED_MODULE_4__["GenericObject"](-1, -1, createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new _GenericObject__WEBPACK_IMPORTED_MODULE_4__["GenericObject"](-1 + 4048, -1, createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new _GenericObject__WEBPACK_IMPORTED_MODULE_4__["GenericObject"](4047 + 4048, -1, createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new _GenericObject__WEBPACK_IMPORTED_MODULE_4__["GenericObject"](8095 + 4048, -1, createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_0__["default"])), new _GenericObject__WEBPACK_IMPORTED_MODULE_4__["GenericObject"](12143 + 4048, -1, createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_0__["default"]))];
  scrollOffset = 0;
}

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);

  if (player.collidesWith('spike')) {
    init();
  }

  if (player.collidesWith('coin') && _Player__WEBPACK_IMPORTED_MODULE_8__["coin1"]) {
    coins_got += 1;
  }

  genericObjects.forEach(function (genericObjects) {
    genericObjects.draw();
  });
  spikes.forEach(function (spike) {
    spike.draw();
  });
  coins.forEach(function (coin) {
    return coin.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (first_time) {
    init();
    first_time = false;
  }

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 50) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * .66;
      });
      spikes.forEach(function (spike) {
        spike.position.x -= player.speed;
      });
      coins.forEach(function (coin) {
        coin.position.x -= player.speed;
      });
    } else if (keys.left.pressed && scrollOffset > 4) {
      scrollOffset -= player.speed * .66;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * .66;
      });
      coins.forEach(function (coin) {
        coin.position.x += player.speed * .66;
      });
      spikes.forEach(function (spike) {
        spike.position.x += player.speed;
      });
    }
  }

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
      space_pressed = 0;
    }
  });

  if (player.position.y > 600) {
    init();
  }
}

animate();
addEventListener("keydown", function (event) {
  Object(_KeyDown__WEBPACK_IMPORTED_MODULE_5__["KeyDown"])(event.key);
});
addEventListener("keyup", function (event) {
  Object(_KeyUp__WEBPACK_IMPORTED_MODULE_6__["KeyUp"])(event.key, space_pressed);
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map