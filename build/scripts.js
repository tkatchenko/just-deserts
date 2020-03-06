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
/******/ 	return __webpack_require__(__webpack_require__.s = "../js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../js/attributes.js":
/*!***************************!*\
  !*** ../js/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Attributes; });\nclass Attributes {\n  constructor(target) {\n    this.target = target;\n  }\n\n  update(attribute, text) {\n    this.target.querySelector('#' + attribute + ' .current').innerHTML = text;\n  }\n\n  updateExp(level, percent) {\n    if (percent >= 1) percent = 0;\n    this.target.querySelector('.level span').innerHTML = level;\n    this.target.querySelector('.level .progress').style.right = (100 - (100 * percent)) + '%';\n  }\n}\n\n\n//# sourceURL=webpack:///../js/attributes.js?");

/***/ }),

/***/ "../js/enemy.js":
/*!**********************!*\
  !*** ../js/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"../js/utility.js\");\n\n\nclass Enemy {\n  constructor(name, char, x, y, health, maxHealth, attack, defense, speed, map, output, update, unstoppable, attackType, aggressive, awareness) {\n    this.name = name;\n    this.char = char;\n    this.x = x;\n    this.y = y;\n    this.prevX = x;\n    this.prevY = y;\n    this.health = health;\n    this.maxHealth = maxHealth;\n    this.attack = attack;\n    this.defense = defense;\n    this.speed = speed;\n    this.map = map;\n    this.output = output;\n    this.customUpdate = update;\n    this.unstoppable = unstoppable;\n    this.attackType = attackType;\n    this.aggressive = aggressive;\n    this.awareness = awareness;\n\n    this.timePool = 0;\n\n    this.draw();\n  }\n\n  update() {\n    if (this.customUpdate) {\n      this.customUpdate();\n    } else {\n      while (this.timePool >= 1) {\n        if (this.aggressive && Math.abs(this.x - this.map.game.player.x) <= this.awareness && Math.abs(this.y - this.map.game.player.y) <= this.awareness) {\n          let x = 0;\n          let y = 0;\n\n          if (this.map.game.player.x > this.x) {\n            x = 1;  \n          } else if (this.map.game.player.x < this.x) {\n            x = -1;\n          } else {\n            x = 0;  \n          }\n\n          if (this.map.game.player.y > this.y) {\n            y = 1;  \n          } else if (this.map.game.player.y < this.y) {\n            y = -1;  \n          } else {\n            y = 0;  \n          }\n\n          const collision = this.map.checkCollision({x: this.x + x, y: this.y + y});\n          if (collision && (collision.constructor.name === 'Wall' || collision.constructor.name === 'Water')) {\n            this.move(Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 3) - 1, Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 3) - 1);\n          } else {\n            this.move(x, y);\n          }\n        } else {\n          this.move(Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 3) - 1, Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 3) - 1);\n        }\n\n        this.timePool--;\n      }\n    }\n  }\n\n  move(x, y) {\n    this.prevX = this.x;\n    this.prevY = this.y;\n\n    this.map.clear(this.prevX, this.prevY);\n\n    this.x = this.x + x;\n    this.y = this.y + y;\n\n    if (this.x < 0) {\n      this.x = 0;\n    } else if (this.x > this.map.width - 1) {\n      this.x = this.map.width - 1;\n    }\n\n    if (this.y < 0) {\n      this.y = 0;\n    } else if (this.y > this.map.height - 1) {\n      this.y = this.map.height - 1;\n    }\n\n    this.checkCollision();\n  }\n\n  checkCollision() {\n    const collision = this.map.checkCollision(this);\n\n    if (collision) {\n      if (collision.constructor.name === 'Wall' || collision.constructor.name === 'Water') {\n        this.moveBack();\n      } else if (collision.constructor.name === 'Enemy' || collision.constructor.name === 'Player') {\n        if (!this.unstoppable) {\n          this.moveBack();\n        }\n\n        if (collision.constructor.name === 'Player' || this.unstoppable) {\n          const power = this.attack + this.defense;\n          const collisionPower = collision.attack + collision.defense;\n\n          let hitChance = (power / collisionPower);\n\n          const hits = (Math.random() < hitChance) ? true : false;\n\n          if (hits) {\n            const attackType = (this.attackType) ? this.attackType : 'hits';\n            this.output.log(this.name + ' ' + attackType + ' ' + collision.name + '.');\n            collision.takeDamage(this.attack, this.name, this.unstoppable);\n          } else {\n            this.output.log(this.name + ' misses ' + collision.name + '.');\n          }\n        }\n      }\n    }\n\n    this.draw();\n  }\n\n  moveBack() {\n    this.x = this.prevX;\n    this.y = this.prevY;\n  }\n\n  draw() {\n    this.map.draw(this);\n  }\n\n  takeDamage(damage, name, unstoppable) {\n    let totalDamage = (this.defense >= damage) ? 0 : damage - Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(this.defense * 0.8, this.defense);\n    if (unstoppable) totalDamage = damage;\n  \n    this.output.log(this.name + ' takes ' + ((totalDamage) ? Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"numberWithCommas\"])(totalDamage) : 'no') + ' damage from ' + name + '.');\n\n    this.updateHealth(-totalDamage);\n  }\n\n  updateHealth(delta) {\n    this.health += delta;  \n\n    if (this.health <= 0) this.die();\n  }\n\n  die() {\n    this.dead = true;\n    this.remove = true;\n    this.map.addDeath(this.x, this.y);\n    this.output.log(this.name + ' received their Just Deserts.');\n  }\n}\n\n\n//# sourceURL=webpack:///../js/enemy.js?");

/***/ }),

/***/ "../js/game.js":
/*!*********************!*\
  !*** ../js/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"../js/utility.js\");\n/* harmony import */ var _map_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-creator.js */ \"../js/map-creator.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"../js/player.js\");\n\n\n\n\nclass Game {\n  constructor(name, char, width, height, mapTarget, output, attributes) {\n    this.width = width;\n    this.height = height;\n    this.output = output;\n    this.attributes = attributes;\n    this.atlas = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"createArray\"])(100, 100);\n    this.mapCreator = new _map_creator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mapTarget, this.width, this.height, this.output, this);\n    this.x = 50;\n    this.y = 50;\n    this.level = 0;\n    this.atlas[this.x][this.y] = this.mapCreator.create(this.level);\n    this.tick = 0;\n\n    const playerHealthAddition = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n    const playerAttributeDiff = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 10);\n    const playerAttributeAddition = 10 - Math.floor(playerHealthAddition / 10);\n\n    this.player = new _player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n      name,\n      char,\n      25,\n      25,\n      100 + playerHealthAddition,\n      100 + playerHealthAddition,\n      5 + playerAttributeDiff + playerAttributeAddition,\n      5 + 10 - playerAttributeDiff + playerAttributeAddition,\n      1,\n      this.atlas[this.x][this.y],\n      this.output,\n      this.attributes,\n      this\n    );\n\n\n    this.startInput();\n  }\n\n  startInput() {\n    document.addEventListener('keydown', (event) => {\n      const keyName = event.key;\n\n      switch (keyName) {\n        case 'ArrowUp':\n        case 'k':\n        case '8':\n          this.player.move(0, -1);\n          break;\n        case 'ArrowRight':\n        case 'l':\n        case '6':\n          this.player.move(1, 0);\n          break;\n        case 'ArrowDown':\n        case 'j':\n        case '2':\n          this.player.move(0, 1);\n          break;\n        case 'ArrowLeft':\n        case 'h':\n        case '4':\n          this.player.move(-1, 0);\n          break;\n        case 'y':\n        case '7':\n          this.player.move(-1, -1);\n          break;\n        case 'u':\n        case '9':\n          this.player.move(1, -1);\n          break;\n        case 'b':\n        case '1':\n          this.player.move(-1, 1);\n          break;\n        case 'n':\n        case '3':\n          this.player.move(1, 1);\n          break;\n        case 'e':\n          this.player.updateExp(10);\n          break;\n      }\n\n      this.update();\n    }, false);\n  }\n\n  update() {\n    if (this.atlas[this.x][this.y].enemies) {\n      this.atlas[this.x][this.y].enemies.forEach((enemy, i, array) => {\n        if (!enemy.remove) {\n          enemy.timePool += enemy.speed / this.player.speed;\n\n          enemy.update();\n        }\n      });\n\n      this.atlas[this.x][this.y].enemies.forEach((enemy, i, array) => {\n        if (enemy.remove) {\n          array.splice(i, 1); \n        }\n      });\n    }\n\n    this.player.update();\n    this.tick++;\n  }\n\n  moveMap(x, y) {\n    this.x = this.x + x;\n    this.y = this.y + y;\n\n    const realX = this.x - 50;\n    const realY = this.y - 50;\n\n    this.level = Math.max(Math.abs(realX), Math.abs(realY));\n\n    if (!this.atlas[this.x][this.y]) {\n      this.atlas[this.x][this.y] = this.mapCreator.create(this.level);\n    } else {\n      this.atlas[this.x][this.y].redraw();\n    }\n\n    this.player.map = this.atlas[this.x][this.y];\n\n    if (x === 1) {\n      this.player.x = 0;\n    } else if (x === -1) {\n      this.player.x = this.width - 1;\n    }\n\n    if (y === 1) {\n      this.player.y = 0;\n    } else if (y === -1) {\n      this.player.y = this.height - 1;\n    }\n\n    this.atlas[this.x][this.y].clear(this.player.x, this.player.y);\n  }\n}\n\n\n//# sourceURL=webpack:///../js/game.js?");

/***/ }),

/***/ "../js/index.js":
/*!**********************!*\
  !*** ../js/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _output_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output.js */ \"../js/output.js\");\n/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes.js */ \"../js/attributes.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ \"../js/game.js\");\n\n\n\n\nconst debug = true;\n\nconst output = new _output_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector('#output .box'), debug);\nconst attributes = new _attributes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector('#attributes .box'));\n\nconst game = new _game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Player', '🧔🏽', 50, 50, document.querySelector('#map .box'), output, attributes);\n\n\n//# sourceURL=webpack:///../js/index.js?");

/***/ }),

/***/ "../js/map-creator.js":
/*!****************************!*\
  !*** ../js/map-creator.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MapCreator; });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"../js/utility.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ \"../js/map.js\");\n/* harmony import */ var _water_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water.js */ \"../js/water.js\");\n/* harmony import */ var _wall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wall.js */ \"../js/wall.js\");\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemy.js */ \"../js/enemy.js\");\n\n\n\n\n\n\nclass MapCreator {\n  constructor(target, width, height, output, game) {\n    this.target = target;\n    this.width = width;\n    this.height = height;\n    this.output = output;\n    this.game = game;\n  }\n\n  create(level) {\n    const map = new _map_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.target, this.width, this.height, this.output, this.game);\n\n    const oasisX = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n    let oasisY = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n    while (oasisY === 28) {\n      oasisY = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n    }\n\n    new _water_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n      'Oasis',\n      '🏝️',\n      oasisX,\n      oasisY,\n      map,\n      this.output\n    );\n\n    const walls = [];\n\n    for (let i = 0; i < 5; i++) {\n      const x = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(oasisX - 10, oasisX + 10);\n      const y = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(oasisY - 10, oasisY + 10);\n\n      if (x < this.width - 1 && x >= 0 && y < this.height -1 && y >= 0 && !map.checkAllCollision({x: x, y: y})) {\n        walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n          'Palm Tree',\n          '🌴',\n          x,\n          y,\n          0,\n          map,\n          this.output\n        ));\n      }\n    }\n\n    const enemies = [];\n\n    if (level === 0) {\n      for (let i = 0; i < 500; i++) {\n        const x = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        const y = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n\n        if (!map.checkAllCollision({x: x, y: y})) {\n          walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n            'Cactus',\n            '🌵',\n            x,\n            y,\n            30,\n            map,\n            this.output\n          ));\n        }\n      }\n\n      for (let i = 0; i < 10; i++) {\n        const x = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        const y = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        \n        if (!map.checkCollision({x: x, y: y})) {\n          enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n            'Lizard',\n            '🦎',\n            x, \n            y,\n            10,\n            10,\n            10,\n            10,\n            0.5,\n            map,\n            this.output,\n            false,\n            false,\n            'bites',\n            false\n          ));\n        }\n      }\n\n      enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n        'Lizard',\n        '🦎',\n        Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(18, 22), \n        28,\n        10,\n        10,\n        10,\n        10,\n        0,\n        map,\n        this.output,\n        false,\n        false,\n        'bites'\n      ));\n\n      enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n        'Bus',\n        '🚌',\n        25,\n        28,\n        1000000,\n        1000000,\n        1000000,\n        1000000,\n        2,\n        map,\n        this.output,\n        function() {\n          while (this.timePool >= 1) {\n            if (this.x - 2 < 0) {\n              this.map.clear(this.x, this.y);\n              this.remove = true;\n            } else {\n              this.move(-1, 0);\n            }\n\n            this.timePool--;\n          }\n        },\n        true,\n        'runs over'\n      ));\n\n      walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n        'Cactus',\n        '🌵',\n        25,\n        26,\n        30,\n        map,\n        this.output\n      ));\n\n      map.enemies = enemies;\n\n      this.output.log('The bus leaves while you are taking a rest break.');\n\n      return map;\n    } else if (level === 1) {\n      const walls = [];\n      for (let i = 0; i < 500; i++) {\n        const x = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        const y = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n\n        if (!map.checkAllCollision({x: x, y: y})) {\n          walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n            'Cactus',\n            '🌵',\n            x,\n            y,\n            30,\n            map,\n            this.output\n          ));\n        }\n      }\n\n      const enemies = [];\n      for (let i = 0; i < 5; i++) {\n        const x = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        const y = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        \n        if (!map.checkCollision({x: x, y: y})) {\n          enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n            'Lizard',\n            '🦎',\n            x, \n            y,\n            10,\n            10,\n            10,\n            10,\n            0.5,\n            map,\n            this.output,\n            false,\n            false,\n            'bites',\n            false\n          ));\n        }\n      }\n\n      for (let i = 0; i < 10; i++) {\n        const x = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        const y = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        \n        if (!map.checkCollision({x: x, y: y})) {\n          enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n            'Rat',\n            '🐀',\n            x, \n            y,\n            10,\n            10,\n            40,\n            10,\n            0.8,\n            map,\n            this.output,\n            false,\n            false,\n            'bites',\n            true,\n            10\n          ));\n        }\n      }\n\n      for (let i = 0; i < 5; i++) {\n        const x = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        const y = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        \n        if (!map.checkCollision({x: x, y: y})) {\n          enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n            'Grasshopper',\n            '🦗',\n            x, \n            y,\n            10,\n            10,\n            5,\n            5,\n            2,\n            map,\n            this.output,\n            false,\n            false,\n            'bites',\n            false\n          ));\n        }\n      }\n\n      if (this.game.y === 50 && this.game.x < 50) {\n        enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n          'Lizard',\n          '🦎',\n          Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(18, 22), \n          28,\n          10,\n          10,\n          10,\n          10,\n          0,\n          map,\n          this.output,\n          false,\n          false,\n          'bites'\n        ));\n\n        enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\n          'Bus',\n          '🚌',\n          25,\n          28,\n          1000000,\n          1000000,\n          1000000,\n          1000000,\n          2,\n          map,\n          this.output,\n          function() {\n            while (this.timePool >= 1) {\n              if (this.x - 2 < 0) {\n                this.map.clear(this.x, this.y);\n                this.remove = true;\n              } else {\n                this.move(-1, 0);\n              }\n\n              this.timePool--;\n            }\n          },\n          true,\n          'runs over'\n        ));\n      }\n\n      map.enemies = enemies;\n\n      return map;\n    } else {\n      const map = new _map_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.target, this.width, this.height, this.output, this.game);\n\n      const walls = [];\n      for (let i = 0; i < 2000; i++) {\n        const x = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n        const y = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, 50);\n\n        if (!map.checkAllCollision({x: x, y: y})) {\n          walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n            'Cactus',\n            '🌵',\n            x,\n            y,\n            30,\n            map,\n            this.output\n          ));\n        }\n      }\n\n      return map;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///../js/map-creator.js?");

/***/ }),

/***/ "../js/map.js":
/*!********************!*\
  !*** ../js/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"../js/utility.js\");\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile.js */ \"../js/tile.js\");\n\n\n\nclass Map {\n  constructor(target, width, height, output, game) {\n    this.target = target;\n    this.width = width;\n    this.height = height;\n    this.output = output;\n    this.game = game;\n    this.objects = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"createArray\"])(width, height);\n    this.tiles = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"createArray\"])(width, height);\n\n    let mapOutput = '';\n    for (let y = 0; y < this.height; y++) {\n      for (let x = 0; x < this.width; x++) {\n        mapOutput += '<span data-x=\"' + x + '\" data-y=\"' + y + '\">.</span>';\n      }\n      mapOutput += '<br>';\n    }\n\n    this.target.innerHTML = mapOutput;\n\n    if (this.game.y === 50) {\n      const tiles = [];\n      for (let i = 0; i < 50; i++) {\n        tiles.push(new _tile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n          'Road',\n          '≡',\n          i,\n          28,\n          '#d60',\n          this\n        ));\n      }\n    }\n  }\n\n  draw(object, focus) {\n    const el = document.querySelector('#map .box span[data-x=\"' + object.x + '\"][data-y=\"' + object.y + '\"]');\n\n    el.innerHTML = object.char;\n\n    if (object.constructor.name === 'Tile') {\n      el.style.color = object.color;\n      this.tiles[object.x][object.y] = object;\n    } else {\n      this.objects[object.x][object.y] = object;\n    }\n\n    if (focus) {\n      const wrapper = document.querySelector('#map .box');\n      const elTop = el.offsetTop - wrapper.offsetTop;\n      const elLeft = el.offsetLeft - wrapper.offsetLeft;\n\n      wrapper.scrollTop = elTop - (wrapper.offsetHeight / 2);\n      wrapper.scrollLeft = elLeft - (wrapper.offsetWidth / 2);\n    }\n  }\n\n  clear(x, y) {\n    const el = document.querySelector('#map .box span[data-x=\"' + x + '\"][data-y=\"' + y + '\"]');\n\n    if (this.tiles[x][y]) {\n      el.innerHTML = this.tiles[x][y].char;\n      el.style.color = this.tiles[x][y].color;\n    } else {\n      el.innerHTML = '.';\n    }\n\n    this.objects[x][y] = null;\n  }\n\n  redraw() {\n    let mapOutput = '';\n    for (let y = 0; y < this.height; y++) {\n      for (let x = 0; x < this.width; x++) {\n        let char = '.';\n        let color = null;\n\n        if (this.objects[x][y] && this.objects[x][y].constructor.name !== 'Player') {\n          char = this.objects[x][y].char;\n        } else if (this.tiles[x][y]) {\n          char = this.tiles[x][y].char;\n          color = this.tiles[x][y].color;\n        }\n\n        color = color ? 'style=\"color:' + color + '\"' : null;\n\n        mapOutput += '<span ' + color + ' data-x=\"' + x + '\" data-y=\"' + y + '\">' + char + '</span>';\n      }\n      mapOutput += '<br>';\n    }\n\n    this.target.innerHTML = mapOutput;\n  }\n\n  addDeath(x, y) {\n    const el = document.querySelector('#map .box span[data-x=\"' + x + '\"][data-y=\"' + y + '\"]');\n\n    this.clear(x, y);\n    this.tiles[x][y] = {\n      char: '🦴'\n    };\n    el.innerHTML = this.tiles[x][y].char;\n  }\n\n  checkCollision(object) {\n    return this.objects[object.x][object.y];\n  }\n\n  checkAllCollision(object) {\n    return this.objects[object.x][object.y] || this.tiles[object.x][object.y];\n  }\n}\n\n\n//# sourceURL=webpack:///../js/map.js?");

/***/ }),

/***/ "../js/output.js":
/*!***********************!*\
  !*** ../js/output.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Output; });\nclass Output {\n  constructor(target, debug) {\n    this.target = target;\n    this.debug = debug;\n  }\n\n  log(text, debug) {\n    if (this.debug && debug) {\n      this.target.innerHTML = (this.target.innerHTML === '') ? this.target.innerHTML + 'DEBUG: ' + text : this.target.innerHTML + '<br><br>' + 'DEBUG: ' + text;\n      this.target.scrollTop = this.target.scrollHeight;\n    } else if (!debug) {\n      this.target.innerHTML = (this.target.innerHTML === '') ? this.target.innerHTML + text : this.target.innerHTML + '<br><br>' + text;\n      this.target.scrollTop = this.target.scrollHeight;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///../js/output.js?");

/***/ }),

/***/ "../js/player.js":
/*!***********************!*\
  !*** ../js/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"../js/utility.js\");\n\n\nclass Player {\n  constructor(name, char, x, y, health, maxHealth, attack, defense, speed, map, output, attributes, game) {\n    this.name = name;\n    this.char = char;\n    this.x = x;\n    this.y = y;\n    this.prevX = x;\n    this.prevY = y;\n    this.health = health;\n    this.maxHealth = maxHealth;\n    this.attack = attack;\n    this.defense = defense;\n    this.speed = speed;\n    this.map = map;\n    this.output = output;\n    this.attributes = attributes;\n    this.game = game;\n    this.exp = 0;\n    this.level = 1;\n    this.hydration = 100;\n    this.lastDrink = 0;\n\n    this.attributes.update('health', this.health + '/' + this.maxHealth);\n    this.attributes.update('attack', this.attack);\n    this.attributes.update('defense', this.defense);\n    this.attributes.update('hydration', this.hydration);\n\n    this.updateExp(100);\n\n    this.draw();\n  }\n\n  move(x, y) {\n    if (!this.dead) {\n      this.prevX = this.x;\n      this.prevY = this.y;\n      this.x = this.x + x;\n      this.y = this.y + y;\n\n      if (this.x < 0 && this.y < 0) {\n        this.game.moveMap(-1, -1);\n      } else if (this.x > this.map.width - 1 && this.y < 0) {\n        this.game.moveMap(1, -1);\n      } else if (this.x > this.map.width - 1 && this.y > this.map.height - 1) {\n        this.game.moveMap(1, 1);\n      } else if (this.x < 0 && this.y > this.map.height - 1) {\n        this.game.moveMap(-1, 1);\n      } else if (this.x < 0) {\n        this.game.moveMap(-1, 0);\n      } else if (this.x > this.map.width - 1) {\n        this.game.moveMap(1, 0);\n      } else if (this.y < 0) {\n        this.game.moveMap(0, -1);\n      } else if (this.y > this.map.height - 1) {\n        this.game.moveMap(0, 1);\n      }\n\n      this.checkCollision();\n    }\n  }\n\n  checkCollision() {\n    const collision = this.map.checkCollision(this);\n\n    if (collision) {\n      if (collision.constructor.name === 'Wall') {\n        this.moveBack();\n        this.output.log(this.name + ' walks into ' + collision.name + '.');\n        this.takeDamage(collision.attack, collision.name);\n      } else if (collision.constructor.name === 'Water') {\n        this.moveBack();\n        this.updateHydration(20);\n        this.output.log(this.name + ' drinks from ' + collision.name + '.');\n      } else if (collision.constructor.name === 'Enemy') {\n        this.moveBack();\n        const power = this.attack + this.defense;\n        const collisionPower = collision.attack + collision.defense;\n\n        let hitChance = (power / collisionPower);\n\n        const hits = (Math.random() < hitChance) ? true : false;\n\n        if (hits) {\n          this.output.log(this.name + ' punches ' + collision.name + '.');\n          collision.takeDamage(this.attack, this.name);\n\n          if (collision.dead) {\n            this.updateExp((collision.attack + collision.defense) / 3);\n          }\n        } else {\n          this.output.log(this.name + ' misses ' + collision.name + '.');\n        }\n      }\n    }\n\n    this.draw();\n  }\n\n  moveBack() {\n    this.x = this.prevX;\n    this.y = this.prevY;\n  }\n\n  draw() {\n    this.map.clear(this.prevX, this.prevY);\n    this.map.draw(this, true);\n  }\n\n  update() {\n    if (!this.dead) {\n      this.dehydrate();\n      this.heal();\n    }\n  }\n\n  takeDamage(damage, name, unstoppable) {\n    let totalDamage = (this.defense >= damage) ? 0 : damage - Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(this.defense * 0.8, this.defense);\n    if (unstoppable) totalDamage = damage;\n  \n    this.output.log(this.name + ' takes ' + ((totalDamage) ? Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"numberWithCommas\"])(totalDamage) : 'no') + ' damage from ' + name + '.');\n\n    this.updateHealth(-totalDamage);\n  }\n\n  dehydrate() {\n    if ((this.game.tick - this.lastDrink) % 5 === 4) {\n      this.hydration--;\n      \n      if (this.hydration <= 0) {\n        this.hydration = 0;\n        this.updateHealth(-Math.floor(this.maxHealth / 10));\n      }\n\n      this.attributes.update('hydration', this.hydration);\n    }\n  }\n\n  updateHydration(delta) {\n    this.hydration += delta;\n    if (this.hydration > 100) this.hydration = 100;\n    this.lastDrink = this.game.tick + 1;\n    this.attributes.update('hydration', this.hydration);\n  }\n\n  heal() {\n    this.updateHealth(Math.ceil(this.level / 2));\n  }\n\n  updateHealth(delta) {\n    this.health += delta;  \n    if (this.health > this.maxHealth) this.health = this.maxHealth;\n    this.attributes.update('health', this.health + '/' + this.maxHealth);\n\n    if (delta < 0) {\n      const el = document.querySelector('#overlay');\n\n      el.classList.add('show');\n\n      setTimeout(() => {\n        if (!this.dead) {\n          el.classList.remove('show');\n        }\n      }, 100);\n    }\n\n    if (this.health <= 0) this.die();\n  }\n\n  updateExp(delta) {\n    this.exp += delta;\n\n    const baseExp = 100;\n    const thisLevel = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"doubler\"])(baseExp, this.level - 1);\n    const nextLevel = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"doubler\"])(baseExp, this.level);\n    const levelDiff = nextLevel - thisLevel;\n\n    const progress = (this.exp - thisLevel) / levelDiff;\n\n    if (this.exp >= nextLevel) {\n      this.level++;\n      const newHealth = Math.floor((this.maxHealth * 1.5) - Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, this.maxHealth * 0.2));\n      this.health = this.health + newHealth - this.maxHealth;\n      this.maxHealth = newHealth;\n      this.attack = Math.floor((this.attack * 1.5) - Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, this.attack * 0.2));\n      this.defense = Math.floor((this.defense * 1.5) - Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, this.defense * 0.2));\n\n      this.attributes.update('health', this.health + '/' + this.maxHealth);\n      this.attributes.update('attack', this.attack);\n      this.attributes.update('defense', this.defense);\n\n      this.output.log(this.name + ' reaches level ' + this.level + '.');\n    }\n\n    this.attributes.updateExp(this.level, progress);\n  }\n\n  die() {\n    if (!this.dead) {\n      this.dead = true;\n      this.char = '💀';\n      this.output.log(this.name + ' received their Just Deserts.');\n      this.draw();\n\n      this.game.atlas[this.game.x][this.game.y].enemies.forEach((enemy) => {\n        enemy.aggressive = false;\n      });\n\n      setInterval(() => {\n        this.game.update();\n      }, 100);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///../js/player.js?");

/***/ }),

/***/ "../js/tile.js":
/*!*********************!*\
  !*** ../js/tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tile; });\nclass Tile {\n  constructor(name, char, x, y, color, map) {\n    this.name = name;\n    this.char = char;\n    this.x = x;\n    this.y = y;\n    this.color = color;\n    this.map = map;\n\n    this.draw();\n  }\n\n  draw() {\n    this.map.draw(this);\n  }\n}\n\n\n//# sourceURL=webpack:///../js/tile.js?");

/***/ }),

/***/ "../js/utility.js":
/*!************************!*\
  !*** ../js/utility.js ***!
  \************************/
/*! exports provided: getRandomInt, createArray, numberWithCommas, doubler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createArray\", function() { return createArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numberWithCommas\", function() { return numberWithCommas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doubler\", function() { return doubler; });\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min)) + min;\n}\n\nfunction createArray(length) {\n  let arr = new Array(length || 0),\n    i = length;\n\n  if (arguments.length > 1) {\n    const args = Array.prototype.slice.call(arguments, 1);\n    while (i--) arr[length-1 - i] = createArray.apply(this, args);\n  }\n\n  return arr;\n}\n\nfunction numberWithCommas(x) {\n  return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\n}\n\nfunction doubler(base, times) {\n  let number = base;\n\n  for (let i = 0; i < times; i++) {\n    number = number * 2;\n  }\n\n  return number;\n}\n\n\n//# sourceURL=webpack:///../js/utility.js?");

/***/ }),

/***/ "../js/wall.js":
/*!*********************!*\
  !*** ../js/wall.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wall; });\nclass Wall {\n  constructor(name, char, x, y, attack, map, output) {\n    this.name = name;\n    this.char = char;\n    this.x = x;\n    this.y = y;\n    this.attack = attack;\n    this.map = map;\n    this.output = output;\n\n    this.draw();\n  }\n\n  draw() {\n    this.map.draw(this);\n  }\n}\n\n\n//# sourceURL=webpack:///../js/wall.js?");

/***/ }),

/***/ "../js/water.js":
/*!**********************!*\
  !*** ../js/water.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Water; });\nclass Water {\n  constructor(name, char, x, y, map, output) {\n    this.x = x,\n    this.y = y,\n    this.name = name;\n    this.char = char;\n    this.map = map;\n    this.output = output;\n\n    this.draw();\n  }\n\n  draw() {\n    this.map.draw(this);\n  }\n}\n\n\n//# sourceURL=webpack:///../js/water.js?");

/***/ })

/******/ });