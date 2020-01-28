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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemon */ \"./src/pokemon.js\");\n/* harmony import */ var _trainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainer */ \"./src/trainer.js\");\n\n\n\n\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.cavas = canvas;\n    this.pokemon = [];\n    this.trainer = null;\n    this.NUM_POKEMON = 1;\n    this.BG_COLOR = \"#37d437\";\n    this.FPS = 60;\n    this.addPokemon();\n  }\n  \n  add(object) {\n    if (object instanceof _pokemon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.pokemon.push(object);\n    } else {\n      throw new Error(\"Unable to add this object!\");\n    }\n  }\n\n  addPokemon() {\n    for (let i = 0; i < this.NUM_POKEMON; i++) {\n      this.pokemon.push(new _pokemon__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.canvas, \"test word\", this.randomPosition()[0], this.randomPosition()[1], true));\n    }\n  }\n\n  // addTrainer(){\n  //   const trainer = new Trainer({\n  //     pos: this.randomPosition(),\n  //     game: this\n  //   });\n  //   this.add(trainer);\n  //   return trainer;\n  // }\n\n  moveObject() {\n    for (let i = 0; i < this.pokemon.length; i++) {\n      this.pokemon[i].move();\n    }\n  }\n\n  step(delta) {\n    this.moveObject(delta);\n  }\n\n  removePokemon() {\n    this.pokemon.splice(j, 1);\n  }\n\n  allObjects() {\n    if(this.trainer !== null){\n      return [].concat(this.pokemon, this.trainer);\n    }\n    return this.pokemon;\n  }\n\n  \n  draw(ctx) {\n    this.allObjects().forEach(function(object) {\n      object.draw(ctx);\n    });\n  }\n\n  randomPosition() {\n    return [Math.random() * 700, Math.random() * 700];\n  }\n\n  remove(){\n    if (object instanceof _pokemon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.pokemon.splice(this.pokemon.indexOf(object), 1);\n    } else if (object instanceof _trainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.trainer.splice(this.trainer.indexOf(object), 1);\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView{\n  constructor(game, ctx){\n    this.ctx = ctx;\n    this.game = game;\n\n    this.fps = 36;\n    this.now;\n    this.then = Date.now();\n    this.interval = 1000 / this.fps;\n    this.delta;\n  };\n  \n  start(){\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n\n  };\n\n  // animate(time){\n  //   const timeDelta = time - this.lastTime;\n\n  //   // this.game.step(timeDelta); //move pokemon, doesn't work yet\n  //   this.game.draw(this.ctx);\n  //   this.lastTime = time;\n\n  //   // every call to animate requests causes another call to animate\n  //   requestAnimationFrame(this.animate.bind(this));\n\n  //   // setInterval( () => {\n  //   //     this.game.draw(this.ctx);\n  //   //     this.lastTime = time;\n  //   // }, 1000 / 40)\n  // }\n  \n  animate() {\n    requestAnimationFrame(this.animate.bind(this));\n  \n    this.now = Date.now();\n    this.delta = this.now - this.then;\n    if (this.delta > this.interval) {\n      // update time stuffs\n      // Just `then = now` is not enough.\n      // Lets say we set fps at 10 which means\n      // each frame must take 100ms\n      // Now frame executes in 16ms (60fps) so\n      // the loop iterates 7 times (16*7 = 112ms) until\n      // this.delta > interval === true\n      // Eventually this lowers down the FPS as\n      // 112*10 = 1120ms (NOT 1000ms).\n      // So we have to get rid of that extra 12ms\n      // by subtracting this.delta (112) % interval (100).\n      // Hope that makes sense.\n        \n      this.then = this.now - (this.delta % this.interval);\n        \n      // ... Code for animateing the Frame ...\n          this.game.draw(this.ctx);\n      }\n  }\n \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  console.log('DOM Loaded.');\n  console.log('Webpack is good.')\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 700;\n  canvas.width = 900;\n  const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas, canvas.height, canvas.width);\n  new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, ctx).start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nclass Pokemon {\n  constructor(ctx, canvas, word, x, y, wild){\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.word = word;\n    this.x = x;\n    this.y = y;\n    // this.dx = 2.5;\n    // this.dy = 0;\n    this.shift = 0;\n    this.shift2 = 0;\n    this.wild = wild;\n\n    this.pokeImg = new Image();\n    this.pokeImg.src = \"../assets/sprites/pikachu-sprite.png\"\n\n    this.pokeImg2 = new Image();\n    this.pokeImg2.src = \"../assets/sprites/pikachu-idle.png\"\n  }\n\n  \n  draw(){\n    this.ctx.clearRect(this.x, this.y, 192, 192)\n    this.ctx.drawImage(this.pokeImg, this.shift, 0, \n                        192, 192, \n                        this.x, this.y,\n                        192, 192);\n    this.animate();\n  }\n\n  animate(){\n    if (this.shift <= 11520){\n      this.shift += 192;\n    } else if ( this.shift >= 11712 ){\n      // this.ctx.clearRect(this.x, this.y, 192, 192);\n      this.ctx.drawImage(this.pokeImg2, this.shift2, 0, 60, 60, this.x + 76, this.y + 104, 60, 60);\n      this.shift2 += 60\n      if (this.shift2 >= 1980){\n        this.shift2 = 0;\n      }\n    }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);\n\n//# sourceURL=webpack:///./src/pokemon.js?");

/***/ }),

/***/ "./src/trainer.js":
/*!************************!*\
  !*** ./src/trainer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass Trainer {\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trainer);\n\n\n//# sourceURL=webpack:///./src/trainer.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Util{\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });