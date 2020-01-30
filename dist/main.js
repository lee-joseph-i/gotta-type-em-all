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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemon */ \"./src/pokemon.js\");\n/* harmony import */ var _trainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainer */ \"./src/trainer.js\");\n/* harmony import */ var _grass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grass */ \"./src/grass.js\");\n/* harmony import */ var _pokedex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokedex */ \"./src/pokedex.js\");\n\n\n\n\n\nconst POSITIONS = [\n  // [100, 100],\n  // [100, 200],\n  // [100, 300],\n  // [100, 400],\n  [200, 100],\n  [200, 200],\n  [200, 300],\n  [200, 400],\n  [300, 100],\n  [300, 200],\n  [300, 300],\n  [300, 400],\n  [400, 100],\n  [400, 200],\n  [400, 300],\n  [400, 400],\n  [500, 100],\n  [500, 200],\n  [500, 300],\n  [500, 400],\n  [600, 100],\n  [600, 200],\n  [600, 300],\n  [600, 400],\n];\n\nconst availablePoke = Object.keys(_pokedex__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.grass = [];\n    this.pokemon = [];\n    this.pokemonWildCount = 0;\n    this.pokemonCatchCount = 0;\n    this.pokemonEscapeCount = 0;\n    this.trainer = null;\n    this.BG_COLOR = \"#37d437\";\n    this.FPS = 60;\n    this.addGrass();\n    this.addPokemon();\n  }\n\n  addGrass() {\n    for (let i = 0; i < POSITIONS.length; i++) {\n      this.grass.push(new _grass__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, this.canvas, POSITIONS[i], false));\n    }\n  }\n\n  generateSpawnPoint() {\n    let randomPos = Math.floor(\n      Math.random() * Math.floor(POSITIONS.length - 1)\n    );\n    let chosen = POSITIONS.splice(randomPos, 1);\n    return chosen[0];\n  }\n\n  generatePoke() {\n    let randomIdx = Math.floor(\n      Math.random() * Math.floor(availablePoke.length - 1)\n    );\n    let pos = this.generateSpawnPoint();\n    let pokeid = availablePoke.splice(randomIdx, 1)[0];\n    let poke = new _pokemon__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      this.ctx,\n      this.canvas,\n      this,\n      _pokedex__WEBPACK_IMPORTED_MODULE_3__[\"default\"][pokeid],\n      pos[0],\n      pos[1]\n    );\n    return poke;\n  }\n  // generatePoke(){\n  //   let randomIdx = Math.floor(Math.random() * Math.floor(Object.values(POKEDEX).length));\n  //   let pos = this.generateSpawnPoint();\n  //   console.log(randomIdx);\n  //   console.log(`${Object.values(POKEDEX).length}`)\n  //   let poke = new Pokemon(\n  //     this.ctx,\n  //     this.canvas,\n  //     POKEDEX[randomIdx],\n  //     pos[0],\n  //     pos[1]\n  //   );\n  //   delete POKEDEX[randomIdx];\n  //   return poke;\n  // };\n\n  addPokemon() {\n    let allPositions = POSITIONS.length;\n    let timer = Math.floor(Math.random() * 0) + 2000;\n    let spawnPoke = setTimeout(() => {\n      if (POSITIONS.length > 0) {\n        let poke = this.generatePoke();\n        this.pokemon.push(poke);\n        this.escape(poke);\n        this.pokemonWildCount += 1;\n      }\n      this.addPokemon();\n    }, timer);\n  }\n\n  throwTypeBall(typeBall) {\n    for (let i = 0; i < this.pokemon.length; i++) {\n      let poke = this.pokemon[i];\n      if (typeBall.toLowerCase() === poke.poke.name) {\n        this.removePokemon(poke);\n        this.pokemonCatchCount += 1;\n        break;\n      }\n    }\n  }\n\n  escape(poke) {\n    // console.log(`before timeout: ${poke.poke.name}`)\n    setTimeout(() => {\n          // console.log(`after timeout: ${poke.poke.name}`);\n      // if(this.removePokemon(poke)){\n\n      // }\n      this.removePokemon(poke);\n      this.pokemonEscapeCount += 1;\n      // penalty logic goes here\n    }, poke.poke.escapeTimer);\n  }\n\n  // removePokemon(poke) {\n  //   console.log(\"START\")\n  //   console.log(\"the poke argument\")\n  //   console.log(poke)\n  //   console.log(`pokemon in argument: ${poke.poke.name}`)\n  //   console.log(`the array:`)\n  //   console.log(this.pokemon)\n  //   let pokeIndex = this.pokemon.indexOf(poke);\n  //   console.log(`the index of the pokemon: ${pokeIndex}`)\n  //   console.log(\"END\")\n  //   this.pokemon.splice(pokeIndex, 1);\n  //   this.pokemonWildCount -= 1;\n  //   POSITIONS.push([poke.x, poke.y]);\n  //   availablePoke.push(poke.poke.id);\n  //   return true;\n  // }\n  removePokemon(poke) {\n    let pokeName = poke.poke.name;\n    let pokeIndex;\n    for(let i = 0; i < this.pokemon.length; i++){\n      console.log(this.pokemon[i].poke.name);\n      console.log(pokeName)\n      if(this.pokemon[i].poke.name === pokeName){\n        pokeIndex = i;\n        break;\n      };\n    };\n        // console.log(`the index of the pokemon: ${pokeIndex}`);\n\n    this.pokemon.splice(pokeIndex, 1);\n    this.pokemonWildCount -= 1;\n    POSITIONS.push([poke.x, poke.y]);\n    availablePoke.push(poke.poke.id);\n    return true;\n  }\n  // removePokemon(poke) {\n  //   let pokeIndex = this.pokemon.indexOf(poke);\n  //   this.pokemon.splice(pokeIndex, 1);\n  //   this.pokemonWildCount -= 1;\n  //   POSITIONS.push([poke.x, poke.y]);\n  //   POKEDEX[poke.poke.id] = poke;\n  // }\n\n  // addTrainer(){\n  //   const trainer = new Trainer({\n  //     pos: this.randomPosition(),\n  //     game: this\n  //   });\n  //   this.add(trainer);\n  //   return trainer;\n  // }\n\n  allObjects() {\n    if (this.trainer !== null) {\n      return [].concat(this.grass, this.pokemon, this.trainer);\n    }\n    return [].concat(this.grass, this.pokemon);\n  }\n\n  draw(ctx) {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.allObjects().forEach(function(object) {\n      object.draw(ctx);\n    });\n    \n    //below can be wrapped into a \"draw score\" function. \n    //research draw efficiency\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.font = 'bold 20px \"Arial\"';\n    this.ctx.fillText(`Pokemon Caught: ${this.pokemonCatchCount}`, this.canvas.width - 240, 50);\n    this.ctx.fillText(`Pokemon Escaped: ${this.pokemonEscapeCount}`, this.canvas.width - 240, 80);\n    this.ctx.fill();\n    this.ctx.closePath();\n  \n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n    this.score = game.pokemonCatchCount;\n    this.fps = 36;\n    this.now;\n    this.then = Date.now();\n    this.interval = 1000 / this.fps;\n    this.delta;\n  }\n\n  handleInput() {\n    let that = this;\n    let input = document.getElementById(\"pokemon-input\");\n    input.onkeydown = function(e) {\n      if (e.keyCode == 13) {\n        that.game.throwTypeBall(e.currentTarget.value);\n        input.value = \"\";\n      }\n    };\n  }\n\n  start() {\n    this.handleInput();\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  animate() {\n    requestAnimationFrame(this.animate.bind(this));\n\n    this.now = Date.now();\n    this.delta = this.now - this.then;\n    if (this.delta > this.interval) {\n      this.then = this.now - (this.delta % this.interval);\n      this.game.draw(this.ctx);\n\n    }\n  }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/grass.js":
/*!**********************!*\
  !*** ./src/grass.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\nclass Grass {\n  constructor(ctx, canvas, pos) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.pos = [pos[0], pos[1]];\n    this.grassImg = new Image();\n    this.grassImg.src = \"../assets/sprites/tall-grass-adjusted.png\";\n  }\n\n  draw() {\n    // this.ctx.clearRect(this.x, this.y, this.poke.shift1, this.poke.shift1)\n    this.ctx.drawImage(\n      this.grassImg,\n      0,\n      0,\n      90,\n      67,\n      this.pos[0],\n      this.pos[1],\n      90,\n      67\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grass);\n\n\n//# sourceURL=webpack:///./src/grass.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nconst POKEDEX = {\n  0: {\n    id: 0,\n    name: \"pikachu\",\n    src: \"../assets/sprites/pikachu-open.png\",\n    src2: \"../assets/sprites/pikachu-idle.png\",\n    shift1: 192,\n    shift2_x: 60,\n    shift2_y: 60,\n    adjustX: 76,\n    adjustX_2: 0,\n    adjustY: 104,\n    adjustY_2: 0,\n    srcSpriteLength: 11520,\n    srcSpriteLength2: 1980,\n    escapeTimer: 7000,\n  },\n  1: {\n    id: 1,\n    name: \"squirtle\",\n    src: \"../assets/sprites/squirtle-open.png\",\n    src2: \"../assets/sprites/squirtle-idle.png\",\n    shift1: 192,\n    shift2_x: 53,\n    shift2_y: 54,\n    adjustX: 67,\n    adjustX_2: 0,\n    adjustY: 110,\n    adjustY_2: 0,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 1537,\n    escapeTimer: 7000,\n  },\n  2: {\n    id: 2,\n    name: \"charmander\",\n    src: \"../assets/sprites/charmander-open.png\",\n    src2: \"../assets/sprites/charmander-idle.png\",\n    shift1: 192,\n    shift2_x: 48,\n    shift2_y: 57,\n    adjustX: 73,\n    adjustX_2: 0,\n    adjustY: 107,\n    adjustY_2: 0,\n    srcSpriteLength: 13056 - 192,\n    srcSpriteLength2: 3312,\n    escapeTimer: 7000,\n  },\n  3: {\n    id: 3,\n    name: \"bulbasaur\",\n    src: \"../assets/sprites/bulbasaur-open.png\",\n    src2: \"../assets/sprites/bulbasaur-idle.png\",\n    shift1: 192,\n    shift2_x: 45,\n    shift2_y: 49,\n    adjustX: 70,\n    adjustX_2: 5,\n    adjustY: 106,\n    adjustY_2: 8,\n    srcSpriteLength: 9792 - 192,\n    srcSpriteLength2: 1845,\n    escapeTimer: 7000,\n  },\n  4: {\n    id: 4,\n    name: \"abra\",\n    src: \"../assets/sprites/abra-open.png\",\n    src2: \"../assets/sprites/abra-idle.png\",\n    shift1: 192,\n    shift2_x: 69,\n    shift2_y: 53,\n    adjustX: 63,\n    adjustX_2: 0,\n    adjustY: 106,\n    adjustY_2: 0,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 5451,\n    escapeTimer: 3000,\n  },\n  5: {\n    id: 5,\n    name: \"alakazam\",\n    src: \"../assets/sprites/alakazam-open.png\",\n    src2: \"../assets/sprites/alakazam-idle.png\",\n    shift1: 192,\n    shift2_x: 77,\n    shift2_y: 79,\n    adjustX: 70,\n    adjustX_2: -16,\n    adjustY: 102,\n    adjustY_2: -20,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 5698,\n    escapeTimer: 7000,\n  },\n  6: {\n    id: 6,\n    name: \"aerodactyl\",\n    src: \"../assets/sprites/aerodactyl-open.png\",\n    src2: \"../assets/sprites/aerodactyl-idle.png\",\n    shift1: 192,\n    shift2_x: 189,\n    shift2_y: 145,\n    adjustX: 70,\n    adjustX_2: -68,\n    adjustY: 85,\n    adjustY_2: -50,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 7371,\n    escapeTimer: 7000,\n  },\n  7: {\n    id: 7,\n    name: \"eevee\",\n    src: \"../assets/sprites/eevee-open.png\",\n    src2: \"../assets/sprites/eevee-idle.png\",\n    shift1: 192,\n    shift2_x: 64,\n    shift2_y: 55,\n    adjustX: 69,\n    adjustX_2: -8,\n    adjustY: 107,\n    adjustY_2: 0,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 1600,\n    escapeTimer: 7000,\n  },\n  8: {\n    id: 8,\n    name: \"vaporeon\",\n    src: \"../assets/sprites/vaporeon-open.png\",\n    src2: \"../assets/sprites/vaporeon-idle.png\",\n    shift1: 192,\n    shift2_x: 102,\n    shift2_y: 72,\n    adjustX: 69,\n    adjustX_2: -14,\n    adjustY: 104,\n    adjustY_2: -14,\n    srcSpriteLength: 11712 - 192,\n    srcSpriteLength2: 6426,\n    escapeTimer: 7000,\n  },\n  9: {\n    id: 9,\n    name: \"flareon\",\n    src: \"../assets/sprites/flareon-open.png\",\n    src2: \"../assets/sprites/flareon-idle.png\",\n    shift1: 192,\n    shift2_x: 59,\n    shift2_y: 93,\n    adjustX: 72,\n    adjustX_2: 0,\n    adjustY: 102,\n    adjustY_2: -34,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 1711,\n    escapeTimer: 7000,\n  },\n  10: {\n    id: 10,\n    name: \"jigglypuff\",\n    src: \"../assets/sprites/jigglypuff-open.png\",\n    src2: \"../assets/sprites/jigglypuff-idle.png\",\n    shift1: 192,\n    shift2_x: 46,\n    shift2_y: 46,\n    adjustX: 70,\n    adjustX_2: 4,\n    adjustY: 108,\n    adjustY_2: 10,\n    srcSpriteLength: 15552 - 192,\n    srcSpriteLength2: 2254,\n    escapeTimer: 7000,\n  },\n  11: {\n    id: 11,\n    name: \"psyduck\",\n    src: \"../assets/sprites/psyduck-open.png\",\n    src2: \"../assets/sprites/psyduck-idle.png\",\n    shift1: 192,\n    shift2_x: 51,\n    shift2_y: 53,\n    adjustX: 70,\n    adjustX_2: 2,\n    adjustY: 106,\n    adjustY_2: 4,\n    srcSpriteLength: 15168 - 192,\n    srcSpriteLength2: 1845,\n    escapeTimer: 7000,\n  },\n  12: {\n    id: 12,\n    name: \"zubat\",\n    src: \"../assets/sprites/zubat-open.png\",\n    src2: \"../assets/sprites/zubat-idle.png\",\n    shift1: 192,\n    shift2_x: 104,\n    shift2_y: 84,\n    adjustX: 72,\n    adjustX_2: -20,\n    adjustY: 98,\n    adjustY_2: -18,\n    srcSpriteLength: 7872 - 192,\n    srcSpriteLength2: 4056,\n    escapeTimer: 7000,\n  },\n  13: {\n    id: 13,\n    name: \"azumarill\",\n    src: \"../assets/sprites/azumarill-open.png\",\n    src2: \"../assets/sprites/azumarill-idle.png\",\n    shift1: 192,\n    shift2_x: 89,\n    shift2_y: 90,\n    adjustX: 72,\n    adjustX_2: -20,\n    adjustY: 98,\n    adjustY_2: -24,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 5251,\n    escapeTimer: 7000,\n  },\n  14: {\n    id: 14,\n    name: \"blastoise\",\n    src: \"../assets/sprites/blastoise-open.png\",\n    src2: \"../assets/sprites/blastoise-idle.png\",\n    shift1: 192,\n    shift2_x: 88,\n    shift2_y: 83,\n    adjustX: 72,\n    adjustX_2: -22,\n    adjustY: 98,\n    adjustY_2: -20,\n    srcSpriteLength: 12480 - 192,\n    srcSpriteLength2: 6952,\n    escapeTimer: 7000,\n  },\n  15: {\n    id: 15,\n    name: \"blaziken\",\n    src: \"../assets/sprites/blaziken-open.png\",\n    src2: \"../assets/sprites/blaziken-idle.png\",\n    shift1: 192,\n    shift2_x: 83,\n    shift2_y: 96,\n    adjustX: 72,\n    adjustX_2: -20,\n    adjustY: 98,\n    adjustY_2: -30,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 3901,\n    escapeTimer: 7000,\n  },\n  16: {\n    id: 16,\n    name: \"caterpie\",\n    src: \"../assets/sprites/caterpie-open.png\",\n    src2: \"../assets/sprites/caterpie-idle.png\",\n    shift1: 192,\n    shift2_x: 46,\n    shift2_y: 45,\n    adjustX: 75,\n    adjustX_2: 0,\n    adjustY: 98,\n    adjustY_2: 15,\n    srcSpriteLength: 10752 - 192,\n    srcSpriteLength2: 2254,\n    escapeTimer: 7000,\n  },\n  17: {\n    id: 17,\n    name: \"charizard\",\n    src: \"../assets/sprites/charizard-open.png\",\n    src2: \"../assets/sprites/charizard-idle.png\",\n    shift1: 192,\n    shift2_x: 133,\n    shift2_y: 140,\n    adjustX: 72,\n    adjustX_2: -30,\n    adjustY: 98,\n    adjustY_2: -80,\n    srcSpriteLength: 12096 - 192,\n    srcSpriteLength2: 6251,\n    escapeTimer: 7000,\n  },\n  18: {\n    id: 18,\n    name: \"charmeleon\",\n    src: \"../assets/sprites/charmeleon-open.png\",\n    src2: \"../assets/sprites/charmeleon-idle.png\",\n    shift1: 192,\n    shift2_x: 60,\n    shift2_y: 70,\n    adjustX: 72,\n    adjustX_2: -4,\n    adjustY: 102,\n    adjustY_2: -10,\n    srcSpriteLength: 14208 - 192,\n    srcSpriteLength2: 3540,\n    escapeTimer: 7000,\n  },\n  19: {\n    id: 19,\n    name: \"dodrio\",\n    src: \"../assets/sprites/dodrio-open.png\",\n    src2: \"../assets/sprites/dodrio-idle.png\",\n    shift1: 192,\n    shift2_x: 68,\n    shift2_y: 102,\n    adjustX: 72,\n    adjustX_2: -15,\n    adjustY: 98,\n    adjustY_2: -38,\n    srcSpriteLength: 11712 - 192,\n    srcSpriteLength2: 4012,\n    escapeTimer: 7000,\n  },\n  20: {\n    id: 20,\n    name: \"dragonite\",\n    src: \"../assets/sprites/dragonite-open.png\",\n    src2: \"../assets/sprites/dragonite-idle.png\",\n    shift1: 192,\n    shift2_x: 85,\n    shift2_y: 98,\n    adjustX: 72,\n    adjustX_2: -16,\n    adjustY: 98,\n    adjustY_2: -35,\n    srcSpriteLength: 15552 - 192,\n    srcSpriteLength2: 3740,\n    escapeTimer: 7000,\n  },\n  21: {\n    id: 21,\n    name: \"furret\",\n    src: \"../assets/sprites/furret-open.png\",\n    src2: \"../assets/sprites/furret-idle.png\",\n    shift1: 192,\n    shift2_x: 85,\n    shift2_y: 73,\n    adjustX: 72,\n    adjustX_2: -2,\n    adjustY: 98,\n    adjustY_2: -10,\n    srcSpriteLength: 11520 - 192,\n    srcSpriteLength2: 5015,\n    escapeTimer: 7000,\n  },\n  22: {\n    id: 22,\n    name: \"gengar\",\n    src: \"../assets/sprites/gengar-open.png\",\n    src2: \"../assets/sprites/gengar-idle.png\",\n    shift1: 192,\n    shift2_x: 84,\n    shift2_y: 78,\n    adjustX: 72,\n    adjustX_2: -16,\n    adjustY: 102,\n    adjustY_2: -16,\n    srcSpriteLength: 10368 - 192,\n    srcSpriteLength2: 3276,\n    escapeTimer: 7000,\n  },\n  23: {\n    id: 23,\n    name: \"haunter\",\n    src: \"../assets/sprites/haunter-open.png\",\n    src2: \"../assets/sprites/haunter-idle.png\",\n    shift1: 192,\n    shift2_x: 85,\n    shift2_y: 73,\n    adjustX: 72,\n    adjustX_2: -23,\n    adjustY: 98,\n    adjustY_2: -14,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 5015,\n    escapeTimer: 7000,\n  },\n  24: {\n    id: 24,\n    name: \"ivysaur\",\n    src: \"../assets/sprites/ivysaur-open.png\",\n    src2: \"../assets/sprites/ivysaur-idle.png\",\n    shift1: 192,\n    shift2_x: 84,\n    shift2_y: 80,\n    adjustX: 72,\n    adjustX_2: -14,\n    adjustY: 98,\n    adjustY_2: -4,\n    srcSpriteLength: 11712 - 192,\n    srcSpriteLength2: 4116,\n    escapeTimer: 7000,\n  },\n  25: {\n    id: 25,\n    name: \"jumpluff\",\n    src: \"../assets/sprites/jumpluff-open.png\",\n    src2: \"../assets/sprites/jumpluff-idle.png\",\n    shift1: 192,\n    shift2_x: 90,\n    shift2_y: 84,\n    adjustX: 72,\n    adjustX_2: -12,\n    adjustY: 98,\n    adjustY_2: -28,\n    srcSpriteLength: 16128 - 192,\n    srcSpriteLength2: 7110,\n    escapeTimer: 7000,\n  },\n\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (POKEDEX);\n\n//# sourceURL=webpack:///./src/pokedex.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _pokedex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokedex */ \"./src/pokedex.js\");\n\n\n\n\nclass Pokemon {\n  constructor(ctx, canvas, game, id, x, y){\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.game = game;\n    this.poke = id;\n    this.x = x;\n    this.y = y;\n    // this.dx = 2.5;\n    // this.dy = 0;\n    this.shift = 0;\n    this.shift2 = 0;\n    // this.startEscapeTimer();\n    this.pokeImg = new Image();\n    this.pokeImg.src = this.poke.src\n\n    this.pokeImg2 = new Image();\n    this.pokeImg2.src = this.poke.src2\n  }\n  \n  draw(){\n    // this.ctx.clearRect(this.x, this.y, this.poke.shift1, this.poke.shift1)\n    this.ctx.drawImage(this.pokeImg, this.shift, 0, \n                        this.poke.shift1, this.poke.shift1, \n                        this.x - this.poke.adjustX + 20, this.y - this.poke.adjustY,\n                        this.poke.shift1, this.poke.shift1);\n    this.animate();\n  }\n\n  animate(){\n    let that = this;\n    if (this.shift <= this.poke.srcSpriteLength){\n      this.shift += 192;\n    } else if ( this.shift >= this.poke.srcSpriteLength ){\n      // this.ctx.clearRect(this.x, this.y, 192, 192);\n      this.ctx.drawImage(this.pokeImg2, this.shift2, 0, this.poke.shift2_x, this.poke.shift2_y, that.x + 20 + this.poke.adjustX_2, that.y + this.poke.adjustY_2, this.poke.shift2_x, this.poke.shift2_y);\n      this.shift2 += this.poke.shift2_x;\n      if (this.shift2 >= this.poke.srcSpriteLength2){\n        this.shift2 = 0;\n      }\n    }\n  }\n\n  // startEscapeTimer(){\n  //   console.log(`${this.poke.name}'s escape timer is ${this.poke.escapeTimer}`)\n  //   setTimeout( () => {\n  //     this.game.removePokemon(this);\n  //     this.game.pokemonEscapeCount +=1;\n  //   }, this.poke.escapeTimer);\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);\n\n//# sourceURL=webpack:///./src/pokemon.js?");

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