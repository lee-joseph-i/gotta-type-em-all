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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemon */ \"./src/pokemon.js\");\n/* harmony import */ var _trainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainer */ \"./src/trainer.js\");\n/* harmony import */ var _grass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grass */ \"./src/grass.js\");\n/* harmony import */ var _pokedex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokedex */ \"./src/pokedex.js\");\n/* harmony import */ var _game_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game_ui */ \"./src/game_ui.js\");\n\n\n\n\n\n\nconst TRAINER_POSITIONS = {\n  forest: [530, 140]\n};\n\nconst POSITIONS = [\n  // [200, 250],\n  [210, 320],\n  [170, 420],\n  [120, 520],\n  // [300, 250],\n  [330, 330],\n  [280, 420],\n  [230, 520],\n  // [400, 250],\n  [440, 320],\n  [390, 420],\n  [340, 520],\n  // [500, 250],\n  [550, 320],\n  [500, 420],\n  [450, 520],\n  // [600, 250],\n  [660, 320],\n  [610, 420],\n  [560, 520],\n];\n\nconst availablePoke = Object.keys(_pokedex__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nclass Game {\n  constructor(gameCtx, uiCtx, grassCtx) {\n    this.gameCtx = gameCtx;\n    this.uiCtx = uiCtx;\n    this.grassCtx = grassCtx;\n    this.ui = this.addUi();\n    this.wildCount = 0;\n    this.catchCount = 0;\n    this.escapeCount = 0;\n    this.HP = 10;\n    this.ppm;\n    setTimeout(() => {\n      this.ui.draw(this.catchCount, this.escapeCount);\n    }, 50);\n    this.grass = [];\n    this.pokemon = [];\n    this.addGrass();\n    this.addPokemon();\n    this.trainer = this.addTrainer();\n  };\n\n  addUi() {\n    let ui = new _game_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.uiCtx);\n    return ui;\n  };\n\n  throwBall(guessedName) {\n    let pokemon = this.pokemon;\n    let notFound = true;\n    for (let i = 0; i < pokemon.length; i++) {\n      let poke = pokemon[i];\n      if (guessedName.toLowerCase() === poke.poke.name) {\n        clearTimeout(poke.escapeTimer);\n        this.removePokemon(poke);\n        this.catchCount += 1;\n        notFound = false;\n        if(this.catchCount === 1){\n          setTimeout( () => {\n           this.ui.drawStatsBar(this.catchCount, this.escapeCount, this.ppm);\n          }, 0);\n        } else {\n          this.ui.drawStatsBar(this.catchCount, this.escapeCount, this.ppm);\n        };\n        return true;\n      };\n    };\n    if (notFound) {\n      this.ui.missedThrow(this.trainer.pos);\n    };\n  };\n\n  pokemonEscaped() {\n    //pokemon escaped and lower's player's HP.\n    this.HP -= 1;\n    this.escapeCount += 1;\n    this.ui.drawStatsBar(this.catchCount, this.escapeCount, this.ppm);\n    this.ui.drawHealthBar(\"negative\", this.HP);\n    // this.ui.drawHPText(this.HP);\n  };\n\n  addGrass() {\n    for (let i = 0; i < POSITIONS.length; i++) {\n      this.grass.push(new _grass__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.grassCtx, POSITIONS[i]));\n    };\n  };\n\n  generateSpawnPoint() {\n    let randomPos = Math.floor(\n      Math.random() * Math.floor(POSITIONS.length - 1)\n    );\n    let chosen = POSITIONS.splice(randomPos, 1);\n    return chosen[0];\n  };\n\n  generatePoke() {\n    let randomIdx = Math.floor(\n      Math.random() * Math.floor(availablePoke.length)\n    );\n    let pos = this.generateSpawnPoint();\n    let pokeid = availablePoke.splice(randomIdx, 1)[0];\n    let poke = new _pokemon__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.gameCtx, this, _pokedex__WEBPACK_IMPORTED_MODULE_3__[\"default\"][pokeid], pos);\n    return poke;\n  };\n\n  addPokemon() {\n    let allPositions = POSITIONS.length;\n    let timer = Math.floor(Math.random() * 2500) + 100;\n    let spawnPoke = setTimeout(() => {\n      if (POSITIONS.length > 0) {\n        let poke = this.generatePoke();\n        this.pokemon.push(poke);\n        this.wildCount += 1;\n      };\n      this.addPokemon();\n    }, timer);\n  };\n\n  removePokemon(poke) {\n    let pokeName = poke.poke.name;\n    for (let i = 0; i < this.pokemon.length; i++) {\n      if (this.pokemon[i].poke.name === pokeName) {\n        this.pokemon.splice(i, 1);\n        break;\n      };\n    };\n    this.wildCount -= 1;\n    POSITIONS.push([poke.pos[0], poke.pos[1]]);\n    availablePoke.push(poke.poke.id);\n  };\n\n  addTrainer() {\n    let trainer = new _trainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.gameCtx, TRAINER_POSITIONS[\"forest\"]);\n    return trainer;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_ui.js":
/*!************************!*\
  !*** ./src/game_ui.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameUI {\n  constructor(uiCtx) {\n    this.uiCtx = uiCtx;\n    this.exclamation = new Image();\n    this.exclamation.src = \"../assets/sprites/exclamation.png\";\n    this.healthBar = new Image();\n    this.healthBar.src = \"../assets/sprites/hpfinal.png\";\n    this.healthBarPos = [600, 20];\n    this.healthBarDim = [569, 215];\n    this.healthPos = [699.5, 68.5];\n    this.healthDim = [113.2, 5.5];\n    this.health = 113.2;\n    this.healthNet = 113.2 / 10;\n    // this.healthBar.onload = () => {\n    //   this.drawHealthBar(null, 10);\n    // };\n    setTimeout(()=> {\n      this.drawHealthBar(null, 10);\n    }, 80);\n    this.statsBar = new Image();\n    this.statsBar.src = \"../assets/sprites/statsbar.png\";\n    this.statsBarPos = [30, 16];\n    this.statsBarDim = [400, 200];\n    // this.statsBar.onload = () => {\n    //   this.drawStatsBar(0, 0, 0);\n    // };\n    setTimeout(() => {\n      this.drawStatsBar(0, 0, 0);\n    }, 80);\n  }\n\n  missedThrow(pos) {\n    this.uiCtx.drawImage(\n      this.exclamation,\n      0,\n      0,\n      131,\n      132,\n      pos[0] + 90,\n      pos[1] - 25,\n      131 / 2.6,\n      132 / 2.6\n    );\n    setTimeout(() => {\n      this.uiCtx.clearRect(pos[0] + 90, pos[1] - 25, 131, 132);\n    }, 600);\n  }\n\n  drawHealthBar(net, HP) {\n    this.uiCtx.clearRect(\n      this.healthBarPos[0],\n      this.healthBarPos[1],\n      this.healthBarDim[0],\n      this.healthBarDim[1]\n    );\n    this.uiCtx.drawImage(\n      this.healthBar,\n      0,\n      0,\n      this.healthBarDim[0],\n      this.healthBarDim[1],\n      this.healthBarPos[0],\n      this.healthBarPos[1],\n      this.healthBarDim[0] / 2,\n      this.healthBarDim[1] / 2\n    );\n\n    if (this.health >= this.healthNet * 8) {\n      this.uiCtx.fillStyle = \"rgb(35, 223, 57)\";\n    } else if (this.health >= this.healthNet * 4) {\n      this.uiCtx.fillStyle = \"rgb(255, 253.7, 24)\";\n    } else if (this.health >= this.healthNet * 0) {\n      this.uiCtx.fillStyle = \"rgb(224, 98, 43)\";\n    }\n    if (net === \"negative\") {\n      this.health -= this.healthNet;\n      this.uiCtx.fillRect(\n        this.healthPos[0],\n        this.healthPos[1],\n        this.health,\n        this.healthDim[1],\n        5.5\n      );\n    } else if (net === \"positive\") {\n      this.health += this.healthNet;\n      this.uiCtx.fillRect(\n        this.healthPos[0],\n        this.healthPos[1],\n        this.health,\n        this.healthDim[1],\n        5.5\n      );\n    } else {\n      this.uiCtx.fillRect(\n        this.healthPos[0],\n        this.healthPos[1],\n        this.health,\n        this.healthDim[1],\n        5.5\n      );\n    }\n    this.drawHPText(HP);\n  }\n\n  drawHPText(HP) {\n    this.uiCtx.font = 'bold 28px \"VT323\"';\n    this.uiCtx.fillStyle = \"rgb(72, 72, 72)\";\n    if (HP >= 10) {\n      this.uiCtx.fillText(\n        `${HP}/10`,\n        this.healthPos[0] + 59,\n        this.healthPos[1] - 13\n      );\n    } else {\n      this.uiCtx.fillText(\n        `${HP}/10`,\n        this.healthPos[0] + 70,\n        this.healthPos[1] - 13\n      );\n    }\n  }\n\n  drawStatsBar(catchCount, escapeCount, ppm) {\n    let x = this.statsBarPos[0];\n    let y = this.statsBarPos[1];\n    let width = this.statsBarDim[0];\n    let height = this.statsBarDim[1];\n    this.uiCtx.clearRect(x, y, width, height);\n    this.uiCtx.drawImage(\n      this.statsBar,\n      0,\n      0,\n      width,\n      height,\n      x,\n      y,\n      width,\n      height\n    );\n    this.uiCtx.beginPath();\n    this.uiCtx.font = 'bold 30px \"VT323\"';\n    this.uiCtx.fillStyle = \"rgb(72, 72, 72)\";\n    this.uiCtx.fillText(`Caught: ${catchCount}`, x + 70, y + 47);\n    this.uiCtx.fillText(`Escaped: ${escapeCount}`, x + 70, y + 77);\n    this.uiCtx.fillText(`Poke/min: ${ppm}`, x + 70, y + 107);\n    this.uiCtx.fill();\n    this.uiCtx.closePath();\n  }\n\n  draw() {\n    // if (catchCount >= 10) {\n    //   this.game.player.health = 10;\n    //   clearInterval(window.intervalId);\n    //   // cancelAnimationFrame(request);\n    //   // .gameOver();\n    // }\n  }\n\n  drawPPM(ppm) {\n    // this.uiCtx.beginPath();\n    // this.uiCtx.fillStyle = \"white\";\n    // this.uiCtx.font = 'bold 18px \"Roboto Slab\"';\n\n    // if (ppm) {\n    //   this.uiCtx.fillText(\"WPM: \" + ppm, 180, 50);\n    // } else {\n    //   this.uiCtx.fillText(\"WPM: 0\", 180, 50);\n    // }\n\n    // this.uiCtx.fill();\n    // this.uiCtx.closePath();\n    return ppm;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameUI);\n\n\n//# sourceURL=webpack:///./src/game_ui.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_ui */ \"./src/game_ui.js\");\n\n\n\nclass GameView {\n  constructor(gameCtx, uiCtx, grassCtx, input) {\n    this.gameCtx = gameCtx;\n    this.uiCtx = uiCtx;\n    this.grassCtx = grassCtx;\n    this.gameFps = 36;\n    this.gameInterval = 1000 / this.gameFps;\n    this.gameNow;\n    this.gameThen = Date.now();\n    this.gameDelta;\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.gameCtx, this.uiCtx, this.grassCtx);\n    this.input = input;\n    this.startTimer = this.startTimer.bind(this);\n    this.inputTimer = 0;\n    this.typeStart = 0;\n    this.typeEnd = 0;\n    this.gameOver = false;\n\n    // this.game.ui.draw(this.wildCount, this.catchCount);\n  }\n\n  handleInput() {\n    let that = this;\n    // let input = document.getElementById(\"pokemon-input\");\n    this.input.onkeydown = function(e) {\n      if (e.keyCode == 13) {\n        let caught = that.game.throwBall(e.currentTarget.value);\n        that.input.value = \"\";\n        if (caught){\n          if (that.typeStart > 0) {\n            that.typeEnd = Date.now();\n            that.inputTimer += (that.typeEnd - that.typeStart) / 1000;\n          }\n          that.typeStart = 0;\n        }\n      }\n    };\n  }\n\n  start() {\n    this.handleInput();\n    requestAnimationFrame(this.animateGame.bind(this));\n  }\n\n  gameOver() {\n    if (this.player.health <= 0) {\n      this.player.health = 0;\n      this.player.drawHealth();\n      clearInterval(window.intervalId);\n      cancelAnimationFrame(request);\n      this.gameOver();\n    }\n  }\n\n  animateGame() {\n    requestAnimationFrame(this.animateGame.bind(this));\n    this.input.addEventListener(\"input\", this.startTimer);\n    this.gameNow = Date.now();\n    this.gameDelta = this.gameNow - this.gameThen;\n    if (this.gameDelta > this.gameInterval) {\n      this.gameThen = this.gameNow - (this.gameDelta % this.gameInterval);\n      this.gameCtx.clearRect(20, 100, 810, 550);\n      this.game.trainer.cycle++;\n      this.game.trainer.draw();\n      this.game.grass.forEach(grass => {\n        grass.draw();\n      });\n      this.game.pokemon.forEach(poke => {\n        poke.draw();\n      });\n    }\n    if (this.game.catchCount > 0) {\n      this.game.ppm = (\n        this.game.catchCount /\n        (this.inputTimer / 60)\n        ).toFixed(0);\n    } else {\n      this.game.ppm = 0;\n    };\n    this.game.ui.drawPPM(this.game.ppm);\n  };\n\n  startTimer(e) {\n    if (this.typeStart === 0 && e.target.value != \" \") {\n      this.typeStart = Date.now();\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/grass.js":
/*!**********************!*\
  !*** ./src/grass.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\nclass Grass {\n  constructor(ctx, pos) {\n    this.ctx = ctx;\n    this.pos = [pos[0], pos[1]];\n    this.grassImg = new Image();\n    this.grassImg.src = \"../assets/sprites/tall-grass-adjusted.png\";\n  }\n\n  draw() {\n    // this.ctx.clearRect(this.x, this.y, this.poke.shift1, this.poke.shift1)\n    this.ctx.drawImage(\n      this.grassImg,\n      0,\n      0,\n      90,\n      67,\n      this.pos[0],\n      this.pos[1],\n      90,\n      67\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grass);\n\n\n//# sourceURL=webpack:///./src/grass.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n\n  //type form\n  const input = document.getElementById(\"pokemon-input\");\n\n  \n  // game canvas\n  const gameCanvas = document.getElementById(\"game-canvas\");\n  const gameCtx = gameCanvas.getContext(\"2d\");\n  gameCanvas.height = 700;\n  gameCanvas.width = 900;\n  \n  //ui canvas\n  const uiCanvas = document.getElementById(\"game-ui-canvas\");\n  const uiCtx = uiCanvas.getContext(\"2d\");\n  uiCanvas.height = 700;\n  uiCanvas.width = 900;\n\n  //grass canvas\n  const grassCanvas = document.getElementById(\"grass-canvas\");\n  const grassCtx = grassCanvas.getContext(\"2d\");\n  grassCanvas.height = 700;\n  grassCanvas.width = 900;\n  \n  // //initialize game\n  // const game = new Game(gameCtx, gameCanvas);\n  // const gameUI = new GameUI(uiCtx, uiCanvas, game)\n  // new GameView(game, gameUI, gameCtx, uiCtx).start();\n  \n  //menu canvas\n  const menuCanvas = document.getElementById(\"menu-canvas\");\n  const menuCtx = menuCanvas.getContext(\"2d\");\n  menuCanvas.height = 700;\n  menuCanvas.width = 900;\n  \n  new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gameCtx, uiCtx, grassCtx, input).start();\n})\n\n//challenges (add a README later):\n//animating and connecting multiple spritesheets \n//organizing spritesheets\n//refactoring setinterval to requestAnimationFrame\n// freaken stopping the escape timeout for individual pokemon. this would cause some serious bugs if the user \"catches\" and clears the pokemon before the settimout occurs.\n\n\n// use ctx.save(), ctx.clip(), ctx.restore() for spotlight effect.\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pokedex.js":
/*!************************!*\
  !*** ./src/pokedex.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst POKEDEX = {\n  0: {\n    id: 0,\n    name: \"pikachu\",\n    src: \"../assets/sprites/pikachu-open.png\",\n    src2: \"../assets/sprites/pikachu-idle.png\",\n    shift1: 192,\n    shift2_x: 60,\n    shift2_y: 60,\n    adjustX: 76,\n    adjustX_2: 0,\n    adjustY: 104,\n    adjustY_2: 0,\n    srcSpriteLength: 11520,\n    srcSpriteLength2: 1980,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  1: {\n    id: 1,\n    name: \"squirtle\",\n    src: \"../assets/sprites/squirtle-open.png\",\n    src2: \"../assets/sprites/squirtle-idle.png\",\n    shift1: 192,\n    shift2_x: 53,\n    shift2_y: 54,\n    adjustX: 67,\n    adjustX_2: 0,\n    adjustY: 110,\n    adjustY_2: 0,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 1537,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  2: {\n    id: 2,\n    name: \"charmander\",\n    src: \"../assets/sprites/charmander-open.png\",\n    src2: \"../assets/sprites/charmander-idle.png\",\n    shift1: 192,\n    shift2_x: 48,\n    shift2_y: 57,\n    adjustX: 73,\n    adjustX_2: 0,\n    adjustY: 107,\n    adjustY_2: 0,\n    srcSpriteLength: 13056 - 192,\n    srcSpriteLength2: 3312,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  3: {\n    id: 3,\n    name: \"bulbasaur\",\n    src: \"../assets/sprites/bulbasaur-open.png\",\n    src2: \"../assets/sprites/bulbasaur-idle.png\",\n    shift1: 192,\n    shift2_x: 45,\n    shift2_y: 49,\n    adjustX: 70,\n    adjustX_2: 5,\n    adjustY: 106,\n    adjustY_2: 8,\n    srcSpriteLength: 9792 - 192,\n    srcSpriteLength2: 1845,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  4: {\n    id: 4,\n    name: \"abra\",\n    src: \"../assets/sprites/abra-open.png\",\n    src2: \"../assets/sprites/abra-idle.png\",\n    shift1: 192,\n    shift2_x: 69,\n    shift2_y: 53,\n    adjustX: 63,\n    adjustX_2: 0,\n    adjustY: 106,\n    adjustY_2: 0,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 5451,\n    escapeTimer: 3000,\n    shiny: false\n  },\n  5: {\n    id: 5,\n    name: \"alakazam\",\n    src: \"../assets/sprites/alakazam-open.png\",\n    src2: \"../assets/sprites/alakazam-idle.png\",\n    shift1: 192,\n    shift2_x: 77,\n    shift2_y: 79,\n    adjustX: 70,\n    adjustX_2: -16,\n    adjustY: 102,\n    adjustY_2: -20,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 5698,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  6: {\n    id: 6,\n    name: \"aerodactyl\",\n    src: \"../assets/sprites/aerodactyl-open.png\",\n    src2: \"../assets/sprites/aerodactyl-idle.png\",\n    shift1: 192,\n    shift2_x: 189,\n    shift2_y: 145,\n    adjustX: 70,\n    adjustX_2: -68,\n    adjustY: 85,\n    adjustY_2: -50,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 7371,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  7: {\n    id: 7,\n    name: \"eevee\",\n    src: \"../assets/sprites/eevee-open.png\",\n    src2: \"../assets/sprites/eevee-idle.png\",\n    shift1: 192,\n    shift2_x: 64,\n    shift2_y: 55,\n    adjustX: 69,\n    adjustX_2: -8,\n    adjustY: 107,\n    adjustY_2: 0,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 1600,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  8: {\n    id: 8,\n    name: \"vaporeon\",\n    src: \"../assets/sprites/vaporeon-open.png\",\n    src2: \"../assets/sprites/vaporeon-idle.png\",\n    shift1: 192,\n    shift2_x: 102,\n    shift2_y: 72,\n    adjustX: 69,\n    adjustX_2: -14,\n    adjustY: 104,\n    adjustY_2: -14,\n    srcSpriteLength: 11712 - 192,\n    srcSpriteLength2: 6426,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  9: {\n    id: 9,\n    name: \"flareon\",\n    src: \"../assets/sprites/flareon-open.png\",\n    src2: \"../assets/sprites/flareon-idle.png\",\n    shift1: 192,\n    shift2_x: 59,\n    shift2_y: 93,\n    adjustX: 72,\n    adjustX_2: 0,\n    adjustY: 102,\n    adjustY_2: -34,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 1711,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  10: {\n    id: 10,\n    name: \"jigglypuff\",\n    src: \"../assets/sprites/jigglypuff-open.png\",\n    src2: \"../assets/sprites/jigglypuff-idle.png\",\n    shift1: 192,\n    shift2_x: 46,\n    shift2_y: 46,\n    adjustX: 70,\n    adjustX_2: 4,\n    adjustY: 108,\n    adjustY_2: 10,\n    srcSpriteLength: 15552 - 192,\n    srcSpriteLength2: 2254,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  11: {\n    id: 11,\n    name: \"psyduck\",\n    src: \"../assets/sprites/psyduck-open.png\",\n    src2: \"../assets/sprites/psyduck-idle.png\",\n    shift1: 192,\n    shift2_x: 51,\n    shift2_y: 53,\n    adjustX: 70,\n    adjustX_2: 2,\n    adjustY: 106,\n    adjustY_2: 4,\n    srcSpriteLength: 15168 - 192,\n    srcSpriteLength2: 1845,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  12: {\n    id: 12,\n    name: \"zubat\",\n    src: \"../assets/sprites/zubat-open.png\",\n    src2: \"../assets/sprites/zubat-idle.png\",\n    shift1: 192,\n    shift2_x: 104,\n    shift2_y: 84,\n    adjustX: 72,\n    adjustX_2: -20,\n    adjustY: 98,\n    adjustY_2: -18,\n    srcSpriteLength: 7872 - 192,\n    srcSpriteLength2: 4056,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  13: {\n    id: 13,\n    name: \"azumarill\",\n    src: \"../assets/sprites/azumarill-open.png\",\n    src2: \"../assets/sprites/azumarill-idle.png\",\n    shift1: 192,\n    shift2_x: 89,\n    shift2_y: 90,\n    adjustX: 72,\n    adjustX_2: -20,\n    adjustY: 98,\n    adjustY_2: -24,\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 5251,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  14: {\n    id: 14,\n    name: \"blastoise\",\n    src: \"../assets/sprites/blastoise-open.png\",\n    src2: \"../assets/sprites/blastoise-idle.png\",\n    shift1: 192,\n    shift2_x: 88,\n    shift2_y: 83,\n    adjustX: 72,\n    adjustX_2: -22,\n    adjustY: 98,\n    adjustY_2: -20,\n    srcSpriteLength: 12480 - 192,\n    srcSpriteLength2: 6952,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  15: {\n    id: 15,\n    name: \"blaziken\",\n    src: \"../assets/sprites/blaziken-open.png\",\n    src2: \"../assets/sprites/blaziken-idle.png\",\n    shift1: 192,\n    shift2_x: 83,\n    shift2_y: 96,\n    adjustX: 72,\n    adjustX_2: -20,\n    adjustY: 98,\n    adjustY_2: -30,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 3901,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  16: {\n    id: 16,\n    name: \"caterpie\",\n    src: \"../assets/sprites/caterpie-open.png\",\n    src2: \"../assets/sprites/caterpie-idle.png\",\n    shift1: 192,\n    shift2_x: 46,\n    shift2_y: 45,\n    adjustX: 75,\n    adjustX_2: 0,\n    adjustY: 98,\n    adjustY_2: 15,\n    srcSpriteLength: 10752 - 192,\n    srcSpriteLength2: 2254,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  17: {\n    id: 17,\n    name: \"charizard\",\n    src: \"../assets/sprites/charizard-open.png\",\n    src2: \"../assets/sprites/charizard-idle.png\",\n    shift1: 192,\n    shift2_x: 133,\n    shift2_y: 140,\n    adjustX: 72,\n    adjustX_2: -30,\n    adjustY: 98,\n    adjustY_2: -80,\n    srcSpriteLength: 12096 - 192,\n    srcSpriteLength2: 6251,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  18: {\n    id: 18,\n    name: \"charmeleon\",\n    src: \"../assets/sprites/charmeleon-open.png\",\n    src2: \"../assets/sprites/charmeleon-idle.png\",\n    shift1: 192,\n    shift2_x: 60,\n    shift2_y: 70,\n    adjustX: 72,\n    adjustX_2: -4,\n    adjustY: 102,\n    adjustY_2: -10,\n    srcSpriteLength: 14208 - 192,\n    srcSpriteLength2: 3540,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  19: {\n    id: 19,\n    name: \"dodrio\",\n    src: \"../assets/sprites/dodrio-open.png\",\n    src2: \"../assets/sprites/dodrio-idle.png\",\n    shift1: 192,\n    shift2_x: 68,\n    shift2_y: 102,\n    adjustX: 72,\n    adjustX_2: -15,\n    adjustY: 98,\n    adjustY_2: -38,\n    srcSpriteLength: 11712 - 192,\n    srcSpriteLength2: 4012,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  20: {\n    id: 20,\n    name: \"dragonite\",\n    src: \"../assets/sprites/dragonite-open.png\",\n    src2: \"../assets/sprites/dragonite-idle.png\",\n    shift1: 192,\n    shift2_x: 85,\n    shift2_y: 98,\n    adjustX: 72,\n    adjustX_2: -16,\n    adjustY: 98,\n    adjustY_2: -35,\n    srcSpriteLength: 15552 - 192,\n    srcSpriteLength2: 3740,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  21: {\n    id: 21,\n    name: \"furret\",\n    src: \"../assets/sprites/furret-open.png\",\n    src2: \"../assets/sprites/furret-idle.png\",\n    shift1: 192,\n    shift2_x: 85,\n    shift2_y: 73,\n    adjustX: 72,\n    adjustX_2: -2,\n    adjustY: 98,\n    adjustY_2: -10,\n    srcSpriteLength: 11520 - 192,\n    srcSpriteLength2: 5015,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  22: {\n    id: 22,\n    name: \"gengar\",\n    src: \"../assets/sprites/gengar-open.png\",\n    src2: \"../assets/sprites/gengar-idle.png\",\n    shift1: 192,\n    shift2_x: 84,\n    shift2_y: 78,\n    adjustX: 72,\n    adjustX_2: -16,\n    adjustY: 102,\n    adjustY_2: -16,\n    srcSpriteLength: 10368 - 192,\n    srcSpriteLength2: 3276,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  23: {\n    id: 23,\n    name: \"haunter\",\n    src: \"../assets/sprites/haunter-open.png\",\n    src2: \"../assets/sprites/haunter-idle.png\",\n    shift1: 192,\n    shift2_x: 85,\n    shift2_y: 73,\n    adjustX: 72,\n    adjustX_2: -23,\n    adjustY: 98,\n    adjustY_2: -14,\n    srcSpriteLength: 13632 - 192,\n    srcSpriteLength2: 5015,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  24: {\n    id: 24,\n    name: \"ivysaur\",\n    src: \"../assets/sprites/ivysaur-open.png\",\n    src2: \"../assets/sprites/ivysaur-idle.png\",\n    shift1: 192,\n    shift2_x: 84,\n    shift2_y: 80,\n    adjustX: 72,\n    adjustX_2: -14,\n    adjustY: 98,\n    adjustY_2: -4,\n    srcSpriteLength: 11712 - 192,\n    srcSpriteLength2: 4116,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  25: {\n    id: 25,\n    name: \"jumpluff\",\n    src: \"../assets/sprites/jumpluff-open.png\",\n    src2: \"../assets/sprites/jumpluff-idle.png\",\n    shift1: 192,\n    shift2_x: 90,\n    shift2_y: 84,\n    adjustX: 72,\n    adjustX_2: -12,\n    adjustY: 98,\n    adjustY_2: -28,\n    srcSpriteLength: 16128 - 192,\n    srcSpriteLength2: 7110,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  26: {\n    id: 26,\n    name: \"kiria\",\n    src: \"../assets/sprites/kiria-open.png\",\n    src2: \"../assets/sprites/kiria-idle.png\",\n    shift1: 192,\n    shift2_x: 44,\n    shift2_y: 68,\n    adjustX: 72,\n    adjustX_2: 4, // +12\n    adjustY: 102,\n    adjustY_2: -8, // go positive\n    srcSpriteLength: 12480 - 192,\n    srcSpriteLength2: 1672,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  27: {\n    id: 27,\n    name: \"lapras\",\n    src: \"../assets/sprites/lapras-open.png\",\n    src2: \"../assets/sprites/lapras-idle.png\",\n    shift1: 192,\n    shift2_x: 94,\n    shift2_y: 84,\n    adjustX: 72,\n    adjustX_2: -16,\n    adjustY: 98,\n    adjustY_2: -22,\n    srcSpriteLength: 14016 - 192,\n    srcSpriteLength2: 8366,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  28: {\n    id: 28,\n    name: \"ledian\",\n    src: \"../assets/sprites/ledian-open.png\",\n    src2: \"../assets/sprites/ledian-idle.png\",\n    shift1: 192,\n    shift2_x: 46,\n    shift2_y: 83,\n    adjustX: 72,\n    adjustX_2: 0,\n    adjustY: 98,\n    adjustY_2: -30,\n    srcSpriteLength: 11712 - 192,\n    srcSpriteLength2: 1886,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  29: {\n    id: 25,\n    name: \"ledyba\",\n    src: \"../assets/sprites/ledyba-open.png\",\n    src2: \"../assets/sprites/ledyba-idle.png\",\n    shift1: 192,\n    shift2_x: 61,\n    shift2_y: 50,\n    adjustX: 72,\n    adjustX_2: 2,\n    adjustY: 110,\n    adjustY_2: -5, // -8\n    srcSpriteLength: 10752 - 192,\n    srcSpriteLength2: 2379,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  30: {\n    id: 30,\n    name: \"lickitung\",\n    src: \"../assets/sprites/lickitung-open.png\",\n    src2: \"../assets/sprites/lickitung-idle.png\",\n    shift1: 192,\n    shift2_x: 58,\n    shift2_y: 59,\n    adjustX: 72,\n    adjustX_2: -6, //+6\n    adjustY: 102,\n    adjustY_2: 0, // go positive\n    srcSpriteLength: 11712 - 192,\n    srcSpriteLength2: 1334,\n    escapeTimer: 6500,\n    shiny: false\n  },\n  31: {\n    id: 31,\n    name: \"lombre\",\n    src: \"../assets/sprites/lombre-open.png\",\n    src2: \"../assets/sprites/lombre-idle.png\",\n    shift1: 192,\n    shift2_x: 62,\n    shift2_y: 62,\n    adjustX: 68,\n    adjustX_2: -4, // +6\n    adjustY: 102,\n    adjustY_2: 0, //go pos\n    srcSpriteLength: 12672 - 192,\n    srcSpriteLength2: 3658,\n    escapeTimer: 6500,\n    shiny: false\n  },\n\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (POKEDEX);\n\n//# sourceURL=webpack:///./src/pokedex.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _pokedex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokedex */ \"./src/pokedex.js\");\n\n\n\n\nclass Pokemon {\n  constructor(gameCtx, game, id, pos){\n    this.gameCtx = gameCtx;\n    this.game = game;\n    this.poke = id;\n    this.pos = [pos[0], pos[1]];\n    this.shift = 0;\n    this.shift2 = 0;\n    // this.startEscapeTimer();\n    this.pokeImg = new Image();\n    this.pokeImg.src = this.poke.src\n\n    this.pokeImg2 = new Image();\n    this.pokeImg2.src = this.poke.src2\n\n    this.escapeTimer = null;\n    this.startEscapeTimer();\n  }\n  \n  draw(){\n    // this.gameCtx.clearRect(this.pos[0] - this.poke.adjustX + 20, this.pos[1] - this.poke.adjustY, this.poke.shift1, this.poke.shift1)\n    this.gameCtx.drawImage(this.pokeImg, this.shift, 0, \n                        this.poke.shift1, this.poke.shift1, \n                        this.pos[0] - this.poke.adjustX + 20, this.pos[1] - this.poke.adjustY,\n                        this.poke.shift1, this.poke.shift1);\n    this.animate();\n  }\n\n  animate(){\n    if (this.shift <= this.poke.srcSpriteLength){\n      this.shift += 192;\n    } else if ( this.shift >= this.poke.srcSpriteLength ){\n      // this.gameCtx.clearRect(this.x, this.y, 192, 192);\n      this.gameCtx.drawImage(this.pokeImg2, this.shift2, 0, this.poke.shift2_x, this.poke.shift2_y, this.pos[0] + 20 + this.poke.adjustX_2, this.pos[1] + this.poke.adjustY_2, this.poke.shift2_x, this.poke.shift2_y);\n      this.shift2 += this.poke.shift2_x;\n      if (this.shift2 >= this.poke.srcSpriteLength2){\n        this.shift2 = 0;\n      }\n    }\n  }\n\n  startEscapeTimer(){\n    // console.log('test')\n    this.escapeTimer = setTimeout( () => {\n      // console.log(this)\n      // console.log(this.poke.name)\n      this.game.removePokemon(this);\n      this.game.EscapeCount += 1;\n      this.game.pokemonEscaped();\n    }, this.poke.escapeTimer);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);\n\n//# sourceURL=webpack:///./src/pokemon.js?");

/***/ }),

/***/ "./src/trainer.js":
/*!************************!*\
  !*** ./src/trainer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nclass Trainer {\n  constructor(gameCtx, pos) {\n    this.gameCtx = gameCtx;\n    this.shift = 0;\n    this.shifter = 200;\n    this.pos = [pos[0], pos[1]];\n    this.cycle = 0;\n    this.TrainerImg = new Image();\n    this.TrainerImg.src = \"../assets/sprites/trainer.png\";\n  }\n\n  draw() {\n    // this.gameCtx.clearRect(this.pos[0], this.pos[1], 200, 200)\n    this.gameCtx.drawImage(\n      this.TrainerImg,\n      this.shift,\n      0,\n      200,\n      200,\n      this.pos[0],\n      this.pos[1],\n      140,\n      140\n    );\n    if(this.cycle % 4 === 0 && this.cycle < 17){\n      this.animate();\n    } \n    if(this.cycle >16){\n      setTimeout( () => {\n        this.cycle = 0;\n      }, 650);\n    };\n  }\n\n  animate(){\n    this.shift += this.shifter;\n    if(this.shift >= 800 || this.shift <= 0){\n      this.shifter *= -1;\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trainer);\n\n\n//# sourceURL=webpack:///./src/trainer.js?");

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