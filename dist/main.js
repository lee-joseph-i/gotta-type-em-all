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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemon */ \"./src/pokemon.js\");\n/* harmony import */ var _trainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainer */ \"./src/trainer.js\");\n/* harmony import */ var _grass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grass */ \"./src/grass.js\");\n\n\n\n\nconst POSITIONS = [\n  // [100, 100],\n  // [100, 200],\n  // [100, 300],\n  // [100, 400],\n  [200, 100],\n  [200, 200],\n  [200, 300],\n  [200, 400],\n  [300, 100],\n  [300, 200],\n  [300, 300],\n  [300, 400],\n  [400, 100],\n  [400, 200],\n  [400, 300],\n  [400, 400],\n  [500, 100],\n  [500, 200],\n  [500, 300],\n  [500, 400],\n  [600, 100],\n  [600, 200],\n  [600, 300],\n  [600, 400],\n];\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.grass = [];\n    this.pokemon = [];\n    this.pokemonCount = 0;\n    this.trainer = null;\n    this.NUM_POKEMON = 9;\n    this.BG_COLOR = \"#37d437\";\n    this.FPS = 60;\n    this.addGrass();\n    this.addPokemon();\n  }\n  \n  add(object) {\n    if (object instanceof _pokemon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.pokemon.push(object);\n    } else {\n      throw new Error(\"Unable to add this object!\");\n    }\n  }\n\n  addGrass(){\n    for (let i = 0; i < POSITIONS.length; i++) {\n      this.grass.push(\n        new _grass__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n          this.ctx,\n          this.canvas,\n          POSITIONS[i],        \n          )\n      );\n    }\n  }\n\n  addPokemon() {\n    for (let i = 0; i < POSITIONS.length; i++) {\n      this.pokemon.push(\n        new _pokemon__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n          this.ctx,\n          this.canvas,\n          POSITIONS[i][0],\n          POSITIONS[i][1],\n          true\n        )\n      );\n      this.pokemonCount += 1;\n      console.log(this.pokemonCount)\n    }\n\n    let randomEncounter = Math.floor(Math.random() * Math.floor(POSITIONS.length));\n    console.log(randomEncounter)\n\n  }\n\n  // addTrainer(){\n  //   const trainer = new Trainer({\n  //     pos: this.randomPosition(),\n  //     game: this\n  //   });\n  //   this.add(trainer);\n  //   return trainer;\n  // }\n\n  moveObject() {\n    for (let i = 0; i < this.pokemon.length; i++) {\n      this.pokemon[i].move();\n    }\n  }\n\n  step(delta) {\n    this.moveObject(delta);\n  }\n\n  throwTypeBall(typeBall){\n    this.pokemon.forEach( poke => {\n      console.log(poke.poke.name)\n      if (typeBall.toLowerCase() === poke.poke.name){\n        console.log(\"true!\")\n       this.pokemon.splice(this.pokemon.indexOf(poke), 1);\n      }\n    })\n  }\n\n  removePokemon() {\n    document.getElementById(\"pokemon-input\").onkeydown = function(e) {\n      if (e.keyCode == 13) {\n       this.pokmeon.splice(this.pokmeon.indexOf(this.pokemon), 1);\n      }\n    };\n    // this.pokmeon.splice(this.pokmeon.indexOf(this.pokemon), 1);\n  }\n\n  allObjects() {\n    if(this.trainer !== null){\n      return [].concat(this.grass, this.pokemon, this.trainer);\n    }\n    return [].concat(this.grass, this.pokemon);\n  }\n\n  draw(ctx) {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)\n    this.allObjects().forEach(function(object) {\n      object.draw(ctx);\n    });\n  }\n\n  // randomPosition() {\n  //   return [Math.random() * 500, Math.random() * 500];\n  // }\n\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView{\n  constructor(game, ctx){\n    this.ctx = ctx;\n    this.game = game;\n\n    this.fps = 36;\n    this.now;\n    this.then = Date.now();\n    this.interval = 1000 / this.fps;\n    this.delta;\n  };\n  \n  handleInput(){\n    let that = this;\n    let input = document.getElementById(\"pokemon-input\");\n    input.onkeydown = function(e) {\n      if (e.keyCode == 13) {\n        that.game.throwTypeBall(e.currentTarget.value)\n        input.value = '';\n      }\n    };\n  }\n\n  start(){\n    this.handleInput();\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n\n  };\n  \n  animate() {\n    requestAnimationFrame(this.animate.bind(this));\n  \n    this.now = Date.now();\n    this.delta = this.now - this.then;\n    if (this.delta > this.interval) {        \n      this.then = this.now - (this.delta % this.interval);\n      this.game.draw(this.ctx);\n      }\n  }\n \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/grass.js":
/*!**********************!*\
  !*** ./src/grass.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\nclass Grass {\n  constructor(ctx, canvas, pos) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.pos = [pos[0], pos[1]];\n\n    this.grassImg = new Image();\n    this.grassImg.src = \"../assets/sprites/tall-grass-adjusted.png\";\n  }\n\n  draw() {\n    // this.ctx.clearRect(this.x, this.y, this.poke.shift1, this.poke.shift1)\n    this.ctx.drawImage(\n      this.grassImg,\n      0,\n      0,\n      90,\n      67,\n      this.pos[0],\n      this.pos[1],\n      90,\n      67\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grass);\n\n\n//# sourceURL=webpack:///./src/grass.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  console.log('DOM Loaded.');\n  console.log('Webpack is good.')\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.height = 700;\n  canvas.width = 900;\n\n\n    let img = new Image();\n\n    img.src = \"../assets/sprites/tall-grass-adjusted.png\";\n    img.onload = function() {\n      // create pattern\n      var ptrn = ctx.createPattern(img, \"repeat\"); // Create a pattern with this image, and set it to \"repeat\".\n      ctx.fillStyle = ptrn;\n      ctx.fillRect(0, 0, canvas.width, canvas.height - 100); // context.fillRect(x, y, width, height);\n    };\n\n\n  const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas, canvas.height, canvas.width);\n  new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, ctx).start();\n})\n\n//challenges (add a README later):\n//animating and connecting multiple spritesheets \n//organizing spritesheets\n//refactoring setinterval to requestAnimationFrame\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pokedex.js":
/*!************************!*\
  !*** ./src/pokedex.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst POKEDEX = {\n  0: {\n    name: \"pikachu\",\n    src: \"../assets/sprites/pikachu-open.png\",\n    src2: \"../assets/sprites/pikachu-idle.png\",\n    shift1: 192,\n    shift2_x: 60,\n    shift2_y: 60,\n    adjustX: 76,\n    adjustX_2: 0,\n    adjustY: 104,\n    adjustY_2: 0,\n    srcSpriteLength: 11520,\n    srcSpriteLength2: 1980\n  },\n  1: {\n    name: \"squirtle\",\n    src: \"../assets/sprites/squirtle-open.png\",\n    src2: \"../assets/sprites/squirtle-idle.png\",\n    shift1: 192,\n    shift2_x: 53,\n    shift2_y: 54,\n    adjustX: 67,\n    adjustX_2: 0,\n    adjustY: 110,\n    adjustY_2: 0,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 1537\n  },\n  2: {\n    name: \"charmander\",\n    src: \"../assets/sprites/charmander-open.png\",\n    src2: \"../assets/sprites/charmander-idle.png\",\n    shift1: 192,\n    shift2_x: 48,\n    shift2_y: 57,\n    adjustX: 73,\n    adjustX_2: 0,\n    adjustY: 107,\n    adjustY_2: 0,\n    srcSpriteLength: 13056 - 192,\n    srcSpriteLength2: 3312\n  },\n  3: {\n    name: \"bulbasaur\",\n    src: \"../assets/sprites/bulbasaur-open.png\",\n    src2: \"../assets/sprites/bulbasaur-idle.png\",\n    shift1: 192,\n    shift2_x: 45,\n    shift2_y: 49,\n    adjustX: 70,\n    adjustX_2: 5,\n    adjustY: 106,\n    adjustY_2: 8,\n    srcSpriteLength: 9792 - 192,\n    srcSpriteLength2: 1845\n  },\n  4: {\n    name: \"abra\",\n    src: \"../assets/sprites/abra-open.png\",\n    src2: \"../assets/sprites/abra-idle.png\",\n    shift1: 192,\n    shift2_x: 69,\n    shift2_y: 53,\n    adjustX: 63,\n    adjustX_2: 0,\n    adjustY: 106,\n    adjustY_2: 0,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 5451\n  },\n  5: {\n    name: \"alakazam\",\n    src: \"../assets/sprites/alakazam-open.png\",\n    src2: \"../assets/sprites/alakazam-idle.png\",\n    shift1: 192,\n    shift2_x: 77,\n    shift2_y: 79,\n    adjustX: 70,\n    adjustX_2: -16,\n    adjustY: 102,\n    adjustY_2: -20,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 5698\n  },\n  6: {\n    name: \"aerodactyl\",\n    src: \"../assets/sprites/aerodactyl-open.png\",\n    src2: \"../assets/sprites/aerodactyl-idle.png\",\n    shift1: 192,\n    shift2_x: 189,\n    shift2_y: 145,\n    adjustX: 70,\n    adjustX_2: -68,\n    adjustY: 85,\n    adjustY_2: -50,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 7371\n  },\n  7: {\n    name: \"eevee\",\n    src: \"../assets/sprites/eevee-open.png\",\n    src2: \"../assets/sprites/eevee-idle.png\",\n    shift1: 192,\n    shift2_x: 64,\n    shift2_y: 55,\n    adjustX: 69,\n    adjustX_2: -8,\n    adjustY: 107,\n    adjustY_2: 0,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 1600\n  },\n  8: {\n    name: \"vaporeon\",\n    src: \"../assets/sprites/vaporeon-open.png\",\n    src2: \"../assets/sprites/vaporeon-idle.png\",\n    shift1: 192,\n    shift2_x: 102,\n    shift2_y: 72,\n    adjustX: 69,\n    adjustX_2: -14,\n    adjustY: 104,\n    adjustY_2: -14,\n    srcSpriteLength: 11712 - 192,\n    srcSpriteLength2: 6426\n  },\n  9: {\n    name: \"flareon\",\n    src: \"../assets/sprites/flareon-open.png\",\n    src2: \"../assets/sprites/flareon-idle.png\",\n    shift1: 192,\n    shift2_x: 59,\n    shift2_y: 93,\n    adjustX: 72,\n    adjustX_2: 0,\n    adjustY: 102,\n    adjustY_2: -34,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 1711\n  },\n  10: {\n    name: \"jigglypuff\",\n    src: \"../assets/sprites/jigglypuff-open.png\",\n    src2: \"../assets/sprites/jigglypuff-idle.png\",\n    shift1: 192,\n    shift2_x: 46,\n    shift2_y: 46,\n    adjustX: 70,\n    adjustX_2: 4,\n    adjustY: 108,\n    adjustY_2: 10,\n    srcSpriteLength: 15552 - 192,\n    srcSpriteLength2: 2254\n  },\n  11: {\n    name: \"psyduck\",\n    src: \"../assets/sprites/psyduck-open.png\",\n    src2: \"../assets/sprites/psyduck-idle.png\",\n    shift1: 192,\n    shift2_x: 51,\n    shift2_y: 53,\n    adjustX: 70,\n    adjustX_2: 2,\n    adjustY: 106,\n    adjustY_2: 4,\n    srcSpriteLength: 15168 - 192,\n    srcSpriteLength2: 1845\n  },\n  12: {\n    name: \"zubat\",\n    src: \"../assets/sprites/zubat-open.png\",\n    src2: \"../assets/sprites/zubat-idle.png\",\n    shift1: 192,\n    shift2_x: 104,\n    shift2_y: 84,\n    adjustX: 72,\n    adjustX_2: -20,\n    adjustY: 98,\n    adjustY_2: -18,\n    srcSpriteLength: 7872 - 192,\n    srcSpriteLength2: 4056\n  },\n\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (POKEDEX);\n\n//# sourceURL=webpack:///./src/pokedex.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _pokedex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokedex */ \"./src/pokedex.js\");\n\n\n\n\nclass Pokemon {\n  constructor(ctx, canvas, x, y, wild){\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.x = x;\n    this.y = y;\n    // this.dx = 2.5;\n    // this.dy = 0;\n    this.shift = 0;\n    this.shift2 = 0;\n    this.wild = wild;\n\n    this.poke = _pokedex__WEBPACK_IMPORTED_MODULE_2__[\"default\"][Math.floor(Math.random() * Math.floor(13))];\n    this.pokeImg = new Image();\n    this.pokeImg.src = this.poke.src\n\n    this.pokeImg2 = new Image();\n    this.pokeImg2.src = this.poke.src2\n  }\n\n  \n  draw(){\n    // this.ctx.clearRect(this.x, this.y, this.poke.shift1, this.poke.shift1)\n    this.ctx.drawImage(this.pokeImg, this.shift, 0, \n                        this.poke.shift1, this.poke.shift1, \n                        this.x - this.poke.adjustX + 20, this.y - this.poke.adjustY,\n                        this.poke.shift1, this.poke.shift1);\n    this.animate();\n  }\n\n  animate(){\n    let that = this;\n    if (this.shift <= this.poke.srcSpriteLength){\n      this.shift += this.poke.shift1;\n    } else if ( this.shift >= this.poke.srcSpriteLength ){\n      // this.ctx.clearRect(this.x, this.y, 192, 192);\n      this.ctx.drawImage(this.pokeImg2, this.shift2, 0, this.poke.shift2_x, this.poke.shift2_y, that.x + 20 + this.poke.adjustX_2, that.y + this.poke.adjustY_2, this.poke.shift2_x, this.poke.shift2_y);\n      this.shift2 += this.poke.shift2_x;\n      if (this.shift2 >= this.poke.srcSpriteLength2){\n        this.shift2 = 0;\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);\n\n//# sourceURL=webpack:///./src/pokemon.js?");

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