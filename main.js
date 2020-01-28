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
eval("__webpack_require__.r(__webpack_exports__);\n// import Pokemon from ('./pokemon');\n// import Trainer from ('./trainer');\n\nclass Game {\n  constructor(height, width) {\n    this.pokemon = [];\n    this.trainer = null;\n    this.addPokemon();\n    this.DIM_X = height;\n    this.DIM_Y = width;\n    this.NUM_POKEMON = 0;\n    this.BG_COLOR = \"#37d437\";\n    this.FPS = 60;\n  }\n  \n  add(object) {\n    if (object instanceof Pokemon) {\n      this.pokemon.push(object);\n    } else {\n      throw new Error(\"Unable to add this object!\");\n    }\n  }\n\n  addPokemon() {\n    for (let i = 0; i < this.NUM_POKEMON; i++) {\n      this.pokemon.push(new Pokemon(this.randomPosition(), this));\n    }\n  }\n\n  // addTrainer(){\n  //   const trainer = new Trainer({\n  //     pos: this.randomPosition(),\n  //     game: this\n  //   });\n  //   this.add(trainer);\n  //   return trainer;\n  // }\n\n  moveObject() {\n    for (let i = 0; i < this.pokemon.length; i++) {\n      this.pokemon[i].move();\n    }\n  }\n\n  step(delta) {\n    this.moveObject(delta);\n  }\n\n  removePokemon() {\n    this.pokemon.splice(j, 1);\n  }\n\n  allObjects() {\n    if(this.trainer !== null){\n      return [].concat(this.pokemon, this.trainer);\n    }\n    return this.pokemon;\n  }\n\n  \n  draw(ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    ctx.fillStyle = this.BG_COLOR;\n    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n    this.allObjects().forEach(function(object) {\n      object.draw(ctx);\n    });\n  }\n\n  randomPosition() {\n    return {\n      pos: [Math.random() * this.DIM_X, Math.random() * this.DIM_Y]\n    };\n  }\n\n  remove(){\n    if (object instanceof Pokemon) {\n      this.pokemon.splice(this.pokemon.indexOf(object), 1);\n    } else if (object instanceof Trainer) {\n      this.trainer.splice(this.trainer.indexOf(object), 1);\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView{\n  constructor(game, ctx){\n    this.ctx = ctx;\n    this.game = game;\n  };\n  \n  start(){\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n    \n  };\n\n  animate(time){\n    const timeDelta = time - this.lastTime;\n\n    this.game.step(timeDelta);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  console.log('DOM Loaded.');\n  console.log('Webpack is good.')\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 700;\n  canvas.width = 700;\n  const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas.height, canvas.width);\n  new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, ctx).start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });