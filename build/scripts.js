"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
  /* harmony import */


  var _output_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
  /* harmony import */


  var _attributes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
  /* harmony import */


  var _game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);

  var debug = true;
  var mapOutput = '';

  for (var y = 0; y < 50; y++) {
    for (var x = 0; x < 50; x++) {
      mapOutput += '<span style="color: rgba(255, 255, 255, 0.3)" data-x="' + x + '" data-y="' + y + '">.</span>';
    }

    mapOutput += '<br>';
  }

  document.querySelector('#map > .box').innerHTML = mapOutput;
  var output = new _output_js__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('#output .box'), debug);
  var attributes = new _attributes_js__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector('#attributes .box'));
  output.log('Welcome to 🏜️Just Deserts, created for the <a target="_blank" href="https://itch.io/jam/7drl-challenge-2020">7DRL Challenge 2020</a>.');
  output.log('You can use the ⬇️arrow keys, 🔢numpad, 💻Vim keys or mouse/touch for movement. Enter, space, period and 5 will 💤rest.');
  output.showHighscores();

  var randomSelect = function randomSelect(e) {
    if (e.key === 'Enter') {
      var el = document.querySelectorAll('.modal.look .choices div');
      el[Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, el.length - 1)].click();
    }
  };

  var name = 'Player';
  document.querySelector('.modal.name input').focus();
  document.querySelector('.modal.name input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      name = document.querySelector('.modal.name input').value ? document.querySelector('.modal.name input').value : name;
      document.querySelector('.modal.name').style.display = 'none';
      document.querySelector('.modal.look').style.display = 'block';
      setTimeout(function () {
        document.addEventListener('keydown', randomSelect);
      });
    }
  });

  document.querySelector('.modal.look .choices').onclick = function (e) {
    document.querySelector('.modal.look').style.display = 'none';
    document.removeEventListener('keydown', randomSelect);
    var game = new _game_js__WEBPACK_IMPORTED_MODULE_3__["default"](name, e.target.innerHTML, 50, 50, document.querySelector('#map > .box'), output, attributes);
  };
  /***/

},
/* 1 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "getRandomInt", function () {
    return getRandomInt;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "createArray", function () {
    return createArray;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "numberWithCommas", function () {
    return numberWithCommas;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "doubler", function () {
    return doubler;
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
      var args = Array.prototype.slice.call(arguments, 1);

      while (i--) {
        arr[length - 1 - i] = createArray.apply(this, args);
      }
    }

    return arr;
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function doubler(base, times) {
    var number = base;

    for (var i = 0; i < times; i++) {
      number = number * 2;
    }

    return number;
  }
  /***/

},
/* 2 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return Output;
  });
  /* harmony import */


  var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

  var Output = /*#__PURE__*/function () {
    function Output(target, debug) {
      _classCallCheck(this, Output);

      this.target = target;
      this.debug = debug;
    }

    _createClass(Output, [{
      key: "log",
      value: function log(text, debug) {
        if (this.debug && debug) {
          this.target.innerHTML = this.target.innerHTML === '' ? this.target.innerHTML + 'DEBUG: ' + text : this.target.innerHTML + '<br><br>' + 'DEBUG: ' + text;
          this.target.scrollTop = this.target.scrollHeight;
        } else if (!debug) {
          this.target.innerHTML = this.target.innerHTML === '' ? this.target.innerHTML + text : this.target.innerHTML + '<br><br>' + text;
          this.target.scrollTop = this.target.scrollHeight;
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        this.target.innerHTML = '';
      }
    }, {
      key: "addHighscore",
      value: function addHighscore(player) {
        var scores = JSON.parse(localStorage.getItem('JustDesertsHighscores'));

        if (!scores) {
          scores = [];
          scores.push({
            'name': player.name,
            'score': player.score
          });
        } else {
          scores.push({
            'name': player.name,
            'score': player.score
          });
        }

        scores = scores.sort(function (el1, el2) {
          return el2.score - el1.score;
        });
        localStorage.setItem('JustDesertsHighscores', JSON.stringify(scores.slice(0, 5)));
      }
    }, {
      key: "showHighscores",
      value: function showHighscores() {
        var _this = this;

        var scores = JSON.parse(localStorage.getItem('JustDesertsHighscores'));

        if (scores && scores.length) {
          this.log('---');
          this.log('Highscores:');
          scores.forEach(function (el, i) {
            _this.log(i + 1 + '. ' + el.name + ': ' + Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["numberWithCommas"])(el.score));
          });
        }
      }
    }]);

    return Output;
  }();
  /***/

},
/* 3 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return Attributes;
  });

  var Attributes = /*#__PURE__*/function () {
    function Attributes(target) {
      _classCallCheck(this, Attributes);

      this.target = target;
    }

    _createClass(Attributes, [{
      key: "update",
      value: function update(attribute, text) {
        this.target.querySelector('#' + attribute + ' .current').innerHTML = text;
      }
    }, {
      key: "updateExp",
      value: function updateExp(level, percent) {
        if (percent >= 1) percent = 0;
        this.target.querySelector('.level span').innerHTML = level;
        this.target.querySelector('.level .progress').style.right = 100 - 100 * percent + '%';
      }
    }]);

    return Attributes;
  }();
  /***/

},
/* 4 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return Game;
  });
  /* harmony import */


  var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
  /* harmony import */


  var _map_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);

  var Game = /*#__PURE__*/function () {
    function Game(name, char, width, height, mapTarget, output, attributes) {
      _classCallCheck(this, Game);

      this.width = width;
      this.height = height;
      this.output = output;
      this.output.clear();
      this.attributes = attributes;
      this.atlas = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["createArray"])(100, 100);
      this.mapCreator = new _map_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"](mapTarget, this.width, this.height, this.output, this, char + name);
      this.x = 50;
      this.y = 50;
      this.level = 0;
      this.atlas[this.x][this.y] = this.mapCreator.create(this.level);
      this.tick = 0;
      var playerHealthAddition = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);
      var playerAttributeDiff = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 10);
      var playerAttributeAddition = 10 - Math.floor(playerHealthAddition / 10);
      this.player = new _player_js__WEBPACK_IMPORTED_MODULE_2__["default"](name, char, 100, 25, 25, 100 + playerHealthAddition, 100 + playerHealthAddition, 5 + playerAttributeDiff + playerAttributeAddition, 5 + 10 - playerAttributeDiff + playerAttributeAddition, 1, this.atlas[this.x][this.y], this.output, this.attributes, this);
      this.startInput();
    }

    _createClass(Game, [{
      key: "startInput",
      value: function startInput() {
        var _this2 = this;

        document.querySelector('#controls').onclick = function (e) {
          switch (e.target.className) {
            case 'n':
              _this2.player.move(0, -1);

              break;

            case 'e':
              _this2.player.move(1, 0);

              break;

            case 's':
              _this2.player.move(0, 1);

              break;

            case 'w':
              _this2.player.move(-1, 0);

              break;

            case 'nw':
              _this2.player.move(-1, -1);

              break;

            case 'ne':
              _this2.player.move(1, -1);

              break;

            case 'sw':
              _this2.player.move(-1, 1);

              break;

            case 'se':
              _this2.player.move(1, 1);

              break;
          }

          _this2.update();
        };

        document.addEventListener('keydown', function (e) {
          switch (e.key) {
            case 'ArrowUp':
            case 'k':
            case '8':
              _this2.player.move(0, -1);

              _this2.update();

              break;

            case 'ArrowRight':
            case 'l':
            case '6':
              _this2.player.move(1, 0);

              _this2.update();

              break;

            case 'ArrowDown':
            case 'j':
            case '2':
              _this2.player.move(0, 1);

              _this2.update();

              break;

            case 'ArrowLeft':
            case 'h':
            case '4':
              _this2.player.move(-1, 0);

              _this2.update();

              break;

            case 'y':
            case '7':
              _this2.player.move(-1, -1);

              _this2.update();

              break;

            case 'u':
            case '9':
              _this2.player.move(1, -1);

              _this2.update();

              break;

            case 'b':
            case '1':
              _this2.player.move(-1, 1);

              _this2.update();

              break;

            case 'n':
            case '3':
              _this2.player.move(1, 1);

              _this2.update();

              break;

            case 'Enter':
            case ' ':
            case '.':
            case '5':
              _this2.update();

              break;
          }
        }, false);
      }
    }, {
      key: "stopInput",
      value: function stopInput() {
        document.addEventListener('keydown', function (e) {
          e.stopPropagation();
        }, true);

        document.querySelector('#controls').onclick = function (e) {
          e.stopPropagation();
        };
      }
    }, {
      key: "update",
      value: function update() {
        var _this3 = this;

        if (this.atlas[this.x][this.y].enemies) {
          this.atlas[this.x][this.y].enemies.forEach(function (enemy, i, array) {
            if (!enemy.remove) {
              enemy.timePool += enemy.speed / _this3.player.speed;
              enemy.update();
            }
          });
          this.atlas[this.x][this.y].enemies.forEach(function (enemy, i, array) {
            if (enemy.remove) {
              array.splice(i, 1);
            }
          });
        }

        if (!this.won) {
          this.player.update();
        }

        this.tick++;
      }
    }, {
      key: "moveMap",
      value: function moveMap(x, y) {
        this.atlas[this.x][this.y].clear(this.player.prevX, this.player.prevY);
        this.x = this.x + x;
        this.y = this.y + y;
        var realX = this.x - 50;
        var realY = this.y - 50;
        this.level = Math.max(Math.abs(realX), Math.abs(realY));

        if (!this.atlas[this.x][this.y]) {
          this.atlas[this.x][this.y] = this.mapCreator.create(this.level);
        } else {
          this.atlas[this.x][this.y].redraw();
        }

        this.player.map = this.atlas[this.x][this.y];

        if (x === 1) {
          this.player.x = 0;
        } else if (x === -1) {
          this.player.x = this.width - 1;
        }

        if (y === 1) {
          this.player.y = 0;
        } else if (y === -1) {
          this.player.y = this.height - 1;
        }

        this.atlas[this.x][this.y].clear(this.player.x, this.player.y);
      }
    }, {
      key: "win",
      value: function win() {
        var _this4 = this;

        this.won = true;
        this.stopInput();
        this.output.log('---');
        this.output.log(this.player.name + ' has defeated the 🚌Bus.');
        this.output.log('All is well.');
        this.player.win = true;
        this.player.outputEnd();
        setInterval(function () {
          _this4.update();
        }, 100);
      }
    }]);

    return Game;
  }();
  /***/

},
/* 5 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return MapCreator;
  });
  /* harmony import */


  var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
  /* harmony import */


  var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
  /* harmony import */


  var _water_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
  /* harmony import */


  var _wall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
  /* harmony import */


  var _enemy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);

  var MapCreator = /*#__PURE__*/function () {
    function MapCreator(target, width, height, output, game, playerName) {
      _classCallCheck(this, MapCreator);

      this.target = target;
      this.width = width;
      this.height = height;
      this.output = output;
      this.game = game;
      this.playerName = playerName;
    }

    _createClass(MapCreator, [{
      key: "create",
      value: function create(level) {
        var waterX = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);
        var waterY = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

        while (waterY === 28) {
          waterY = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);
        }

        var walls = [];
        var enemies = [];

        if (level === 0) {
          var map = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'orange', this.output, this.game);
          new _water_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Oasis', '🏝️', waterX, waterY, map, this.output);

          for (var i = 0; i < 5; i++) {
            var x = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterX - 10, waterX + 10);
            var y = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterY - 10, waterY + 10);

            if (x < this.width - 1 && x >= 0 && y < this.height - 1 && y >= 0 && !map.checkAllCollision({
              x: x,
              y: y
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Palm Tree', '🌴', x, y, 0, map, this.output));
            }
          }

          for (var _i = 0; _i < 500; _i++) {
            var _x = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!map.checkAllCollision({
              x: _x,
              y: _y
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Cactus', '🌵', _x, _y, 30, map, this.output));
            }
          }

          for (var _i2 = 0; _i2 < 10; _i2++) {
            var _x2 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y2 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!map.checkCollision({
              x: _x2,
              y: _y2
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', _x2, _y2, 10, 10, 10, 10, 0.5, map, this.output, false, false, 'bites', false));
            }
          }

          enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(18, 22), 28, 10, 10, 10, 10, 0, map, this.output, false, false, 'bites'));
          enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bus', '🚌', 25, 28, 1000000, 1000000, 1000000, 1000000, 2, map, this.output, function () {
            while (this.timePool >= 1) {
              if (this.x - 2 < 0) {
                this.map.clear(this.x, this.y);
                this.remove = true;
              } else {
                this.move(-1, 0);
              }

              this.timePool--;
            }
          }, true, 'runs over'));
          walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Cactus', '🌵', 25, 26, 30, map, this.output));
          map.enemies = enemies;
          this.output.log('The 🚌Bus leaves while ' + this.playerName + ' is taking a rest break.');
          return map;
        } else if (level === 1) {
          var _map = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'orange', this.output, this.game);

          new _water_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Oasis', '🏝️', waterX, waterY, _map, this.output);

          for (var _i3 = 0; _i3 < 5; _i3++) {
            var _x3 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterX - 10, waterX + 10);

            var _y3 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterY - 10, waterY + 10);

            if (_x3 < this.width - 1 && _x3 >= 0 && _y3 < this.height - 1 && _y3 >= 0 && !_map.checkAllCollision({
              x: _x3,
              y: _y3
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Palm Tree', '🌴', _x3, _y3, 0, _map, this.output));
            }
          }

          for (var _i4 = 0; _i4 < 500; _i4++) {
            var _x4 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y4 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map.checkAllCollision({
              x: _x4,
              y: _y4
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Cactus', '🌵', _x4, _y4, 30, _map, this.output));
            }
          }

          for (var _i5 = 0; _i5 < 5; _i5++) {
            var _x5 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y5 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map.checkCollision({
              x: _x5,
              y: _y5
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', _x5, _y5, 10, 10, 10, 10, 0.5, _map, this.output, false, false, 'bites', false));
            }
          }

          for (var _i6 = 0; _i6 < 10; _i6++) {
            var _x6 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y6 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map.checkCollision({
              x: _x6,
              y: _y6
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Rat', '🐀', _x6, _y6, 10, 10, 40, 10, 0.8, _map, this.output, false, false, 'bites', true, 10));
            }
          }

          for (var _i7 = 0; _i7 < 5; _i7++) {
            var _x7 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y7 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map.checkCollision({
              x: _x7,
              y: _y7
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Grasshopper', '🦗', _x7, _y7, 10, 10, 5, 5, 2, _map, this.output, false, false, 'bites', true, 25));
            }
          }

          if (this.game.y === 50 && this.game.x <= 50) {
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(18, 22), 28, 10, 10, 10, 10, 0, _map, this.output, false, false, 'bites'));
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bus', '🚌', 25, 28, 1000000, 1000000, 1000000, 1000000, 2, _map, this.output, function () {
              while (this.timePool >= 1) {
                if (this.x - 2 < 0) {
                  this.map.clear(this.x, this.y);
                  this.remove = true;
                } else {
                  this.move(-1, 0);
                }

                this.timePool--;
              }
            }, true, 'runs over'));
          }

          _map.enemies = enemies;
          return _map;
        } else if (level === 2) {
          var _map2 = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'green', this.output, this.game);

          new _water_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Wave', '🌊', waterX, waterY, _map2, this.output);

          for (var _i8 = 0; _i8 < 5; _i8++) {
            var _x8 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterX - 10, waterX + 10);

            var _y8 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterY - 10, waterY + 10);

            if (_x8 < this.width - 1 && _x8 >= 0 && _y8 < this.height - 1 && _y8 >= 0 && !_map2.checkAllCollision({
              x: _x8,
              y: _y8
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Tulip', '🌷', _x8, _y8, 0, _map2, this.output));
            }
          }

          for (var _i9 = 0; _i9 < 500; _i9++) {
            var _x9 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y9 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map2.checkAllCollision({
              x: _x9,
              y: _y9
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Pine Tree', '🌲', _x9, _y9, 50, _map2, this.output));
            }
          }

          for (var _i10 = 0; _i10 < 5; _i10++) {
            var _x10 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y10 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map2.checkCollision({
              x: _x10,
              y: _y10
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Ant', '🐜', _x10, _y10, 30, 30, 60, 10, 0.7, _map2, this.output, false, false, 'bites', true, 20));
            }
          }

          for (var _i11 = 0; _i11 < 10; _i11++) {
            var _x11 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y11 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map2.checkCollision({
              x: _x11,
              y: _y11
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lady Beetle', '🐞', _x11, _y11, 20, 20, 40, 15, 1.1, _map2, this.output, false, false, 'bites', true, 10));
            }
          }

          for (var _i12 = 0; _i12 < 5; _i12++) {
            var _x12 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y12 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map2.checkCollision({
              x: _x12,
              y: _y12
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bee', '🐝', _x12, _y12, 10, 10, 100, 10, 2, _map2, this.output, false, false, 'stings', true, 3));
            }
          }

          if (this.game.y === 50 && this.game.x <= 50) {
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(18, 22), 28, 10, 10, 10, 10, 0, _map2, this.output, false, false, 'bites'));
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bus', '🚌', 25, 28, 1000000, 1000000, 1000000, 1000000, 2, _map2, this.output, function () {
              while (this.timePool >= 1) {
                if (this.x - 2 < 0) {
                  this.map.clear(this.x, this.y);
                  this.remove = true;
                } else {
                  this.move(-1, 0);
                }

                this.timePool--;
              }
            }, true, 'runs over'));
          }

          _map2.enemies = enemies;
          return _map2;
        } else if (level === 3) {
          var _map3 = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'green', this.output, this.game);

          new _water_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Wave', '🌊', waterX, waterY, _map3, this.output);

          for (var _i13 = 0; _i13 < 5; _i13++) {
            var _x13 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterX - 10, waterX + 10);

            var _y13 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterY - 10, waterY + 10);

            if (_x13 < this.width - 1 && _x13 >= 0 && _y13 < this.height - 1 && _y13 >= 0 && !_map3.checkAllCollision({
              x: _x13,
              y: _y13
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Tulip', '🌷', _x13, _y13, 0, _map3, this.output));
            }
          }

          for (var _i14 = 0; _i14 < 450; _i14++) {
            var _x14 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y14 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map3.checkAllCollision({
              x: _x14,
              y: _y14
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Pine Tree', '🌲', _x14, _y14, 50, _map3, this.output));
            }
          }

          for (var _i15 = 0; _i15 < 50; _i15++) {
            var _x15 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y15 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map3.checkAllCollision({
              x: _x15,
              y: _y15
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Mountain', '⛰️', _x15, _y15, 100, _map3, this.output));
            }
          }

          for (var _i16 = 0; _i16 < 5; _i16++) {
            var _x16 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y16 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map3.checkCollision({
              x: _x16,
              y: _y16
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Crocodile', '🐊', _x16, _y16, 40, 40, 100, 35, 0.7, _map3, this.output, false, false, 'bites', true, 5));
            }
          }

          for (var _i17 = 0; _i17 < 10; _i17++) {
            var _x17 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y17 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map3.checkCollision({
              x: _x17,
              y: _y17
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Leopard', '🐆', _x17, _y17, 80, 80, 90, 30, 1.1, _map3, this.output, false, false, 'bites', true, 10));
            }
          }

          for (var _i18 = 0; _i18 < 5; _i18++) {
            var _x18 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y18 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map3.checkCollision({
              x: _x18,
              y: _y18
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Elephant', '🐘', _x18, _y18, 200, 200, 300, 30, 0.25, _map3, this.output, false, false, 'stomps', true, 3));
            }
          }

          if (this.game.y === 50 && this.game.x <= 50) {
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(18, 22), 28, 10, 10, 10, 10, 0, _map3, this.output, false, false, 'bites'));
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bus', '🚌', 25, 28, 1000000, 1000000, 1000000, 1000000, 2, _map3, this.output, function () {
              while (this.timePool >= 1) {
                if (this.x - 2 < 0) {
                  this.map.clear(this.x, this.y);
                  this.remove = true;
                } else {
                  this.move(-1, 0);
                }

                this.timePool--;
              }
            }, true, 'runs over'));
          }

          _map3.enemies = enemies;
          return _map3;
        } else if (level === 4) {
          var _map4 = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'gray', this.output, this.game);

          new _water_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Faucet', '🚰', waterX, waterY, _map4, this.output);

          for (var _i19 = 0; _i19 < 5; _i19++) {
            var _x19 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterX - 10, waterX + 10);

            var _y19 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterY - 10, waterY + 10);

            if (_x19 < this.width - 1 && _x19 >= 0 && _y19 < this.height - 1 && _y19 >= 0 && !_map4.checkAllCollision({
              x: _x19,
              y: _y19
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Restroom Sign', '🚻', _x19, _y19, 0, _map4, this.output));
            }
          }

          for (var _i20 = 0; _i20 < 400; _i20++) {
            var _x20 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y20 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map4.checkAllCollision({
              x: _x20,
              y: _y20
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Office Building', '🏢', _x20, _y20, 120, _map4, this.output));
            }
          }

          for (var _i21 = 0; _i21 < 50; _i21++) {
            var _x21 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y21 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map4.checkAllCollision({
              x: _x21,
              y: _y21
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Construction Sign', '🚧', _x21, _y21, 100, _map4, this.output));
            }
          }

          for (var _i22 = 0; _i22 < 50; _i22++) {
            var _x22 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y22 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map4.checkAllCollision({
              x: _x22,
              y: _y22
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Crane', '🏗️', _x22, _y22, 150, _map4, this.output));
            }
          }

          for (var _i23 = 0; _i23 < 5; _i23++) {
            var _x23 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y23 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map4.checkCollision({
              x: _x23,
              y: _y23
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Spider', '🕷', _x23, _y23, 50, 50, 140, 50, 0.6, _map4, this.output, false, false, 'bites', true, 10));
            }
          }

          for (var _i24 = 0; _i24 < 10; _i24++) {
            var _x24 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y24 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map4.checkCollision({
              x: _x24,
              y: _y24
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Gear', '⚙️', _x24, _y24, 40, 40, 180, 0, 1.7, _map4, this.output, false, false, 'grinds', true, 4));
            }
          }

          for (var _i25 = 0; _i25 < 5; _i25++) {
            var _x25 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y25 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map4.checkCollision({
              x: _x25,
              y: _y25
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Tram', '🚋', _x25, _y25, 200, 200, 300, 30, 0.5, _map4, this.output, false, false, 'runs over', true, 1));
            }
          }

          if (this.game.y === 50 && this.game.x <= 50) {
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(18, 22), 28, 10, 10, 10, 10, 0, _map4, this.output, false, false, 'bites'));
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bus', '🚌', 25, 28, 1000000, 1000000, 1000000, 1000000, 2, _map4, this.output, function () {
              while (this.timePool >= 1) {
                if (this.x - 2 < 0) {
                  this.map.clear(this.x, this.y);
                  this.remove = true;
                } else {
                  this.move(-1, 0);
                }

                this.timePool--;
              }
            }, true, 'runs over'));
          }

          _map4.enemies = enemies;
          return _map4;
        } else if (level === 5) {
          var _map5 = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'gray', this.output, this.game);

          new _water_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Faucet', '🚰', waterX, waterY, _map5, this.output);

          for (var _i26 = 0; _i26 < 5; _i26++) {
            var _x26 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterX - 10, waterX + 10);

            var _y26 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterY - 10, waterY + 10);

            if (_x26 < this.width - 1 && _x26 >= 0 && _y26 < this.height - 1 && _y26 >= 0 && !_map5.checkAllCollision({
              x: _x26,
              y: _y26
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Restroom Sign', '🚻', _x26, _y26, 0, _map5, this.output));
            }
          }

          for (var _i27 = 0; _i27 < 400; _i27++) {
            var _x27 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y27 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map5.checkAllCollision({
              x: _x27,
              y: _y27
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Office Building', '🏢', _x27, _y27, 120, _map5, this.output));
            }
          }

          for (var _i28 = 0; _i28 < 50; _i28++) {
            var _x28 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y28 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map5.checkAllCollision({
              x: _x28,
              y: _y28
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Convenience Store', '🏪', _x28, _y28, 150, _map5, this.output));
            }
          }

          for (var _i29 = 0; _i29 < 50; _i29++) {
            var _x29 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y29 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map5.checkAllCollision({
              x: _x29,
              y: _y29
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Hotel', '🏨', _x29, _y29, 170, _map5, this.output));
            }
          }

          for (var _i30 = 0; _i30 < 5; _i30++) {
            var _x30 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y30 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map5.checkCollision({
              x: _x30,
              y: _y30
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Dog', '🐕', _x30, _y30, 110, 110, 150, 50, 0.6, _map5, this.output, false, false, 'bites', true, 10));
            }
          }

          for (var _i31 = 0; _i31 < 10; _i31++) {
            var _x31 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y31 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map5.checkCollision({
              x: _x31,
              y: _y31
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Cat', '🐈', _x31, _y31, 100, 100, 200, 50, 0.9, _map5, this.output, false, false, 'scratches', true, 4));
            }
          }

          for (var _i32 = 0; _i32 < 5; _i32++) {
            var _x32 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y32 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map5.checkCollision({
              x: _x32,
              y: _y32
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Green Salad', '🥗', _x32, _y32, 1000, 1000, 100, 0, 0.5, _map5, this.output, false, false, 'satiates', true, 1));
            }
          }

          if (this.game.y === 50 && this.game.x <= 50) {
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(18, 22), 28, 10, 10, 10, 10, 0, _map5, this.output, false, false, 'bites'));
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bus', '🚌', 25, 28, 1000000, 1000000, 1000000, 1000000, 2, _map5, this.output, function () {
              while (this.timePool >= 1) {
                if (this.x - 2 < 0) {
                  this.map.clear(this.x, this.y);
                  this.remove = true;
                } else {
                  this.move(-1, 0);
                }

                this.timePool--;
              }
            }, true, 'runs over'));
          }

          _map5.enemies = enemies;
          return _map5;
        } else if (level === 6) {
          var _map6 = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'green', this.output, this.game);

          new _water_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Fountain', '⛲', waterX, waterY, _map6, this.output);

          for (var _i33 = 0; _i33 < 5; _i33++) {
            var _x33 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterX - 10, waterX + 10);

            var _y33 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterY - 10, waterY + 10);

            if (_x33 < this.width - 1 && _x33 >= 0 && _y33 < this.height - 1 && _y33 >= 0 && !_map6.checkAllCollision({
              x: _x33,
              y: _y33
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Woman\'s Hat', '👒', _x33, _y33, 0, _map6, this.output));
            }
          }

          for (var _i34 = 0; _i34 < 450; _i34++) {
            var _x34 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y34 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map6.checkAllCollision({
              x: _x34,
              y: _y34
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Manicured Tree', '🌳', _x34, _y34, 240, _map6, this.output));
            }
          }

          for (var _i35 = 0; _i35 < 50; _i35++) {
            var _x35 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y35 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map6.checkAllCollision({
              x: _x35,
              y: _y35
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Seedling', '🌱', _x35, _y35, 300, _map6, this.output));
            }
          }

          for (var _i36 = 0; _i36 < 5; _i36++) {
            var _x36 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y36 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map6.checkCollision({
              x: _x36,
              y: _y36
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Tiger', '🐅', _x36, _y36, 110, 110, 200, 70, 0.7, _map6, this.output, false, false, 'bites', true, 10));
            }
          }

          for (var _i37 = 0; _i37 < 10; _i37++) {
            var _x37 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y37 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map6.checkCollision({
              x: _x37,
              y: _y37
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Monkey', '🐒', _x37, _y37, 100, 100, 150, 70, 0.9, _map6, this.output, false, false, 'scratches', true, 4));
            }
          }

          for (var _i38 = 0; _i38 < 5; _i38++) {
            var _x38 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y38 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map6.checkCollision({
              x: _x38,
              y: _y38
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Snail', '🐌', _x38, _y38, 1000, 1000, 100, 100, 0.1, _map6, this.output, false, false, 'squashes', true, 1));
            }
          }

          if (this.game.y === 50 && this.game.x <= 50) {
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(18, 22), 28, 10, 10, 10, 10, 0, _map6, this.output, false, false, 'bites'));
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bus', '🚌', 25, 28, 1000000, 1000000, 1000000, 1000000, 2, _map6, this.output, function () {
              while (this.timePool >= 1) {
                if (this.x - 2 < 0) {
                  this.map.clear(this.x, this.y);
                  this.remove = true;
                } else {
                  this.move(-1, 0);
                }

                this.timePool--;
              }
            }, true, 'runs over'));
          }

          _map6.enemies = enemies;
          return _map6;
        } else if (level === 7) {
          var _map7 = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'green', this.output, this.game);

          new _water_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Fountain', '⛲', waterX, waterY, _map7, this.output);

          for (var _i39 = 0; _i39 < 5; _i39++) {
            var _x39 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterX - 10, waterX + 10);

            var _y39 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterY - 10, waterY + 10);

            if (_x39 < this.width - 1 && _x39 >= 0 && _y39 < this.height - 1 && _y39 >= 0 && !_map7.checkAllCollision({
              x: _x39,
              y: _y39
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Woman\'s Hat', '👒', _x39, _y39, 0, _map7, this.output));
            }
          }

          for (var _i40 = 0; _i40 < 100; _i40++) {
            var _x40 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y40 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map7.checkAllCollision({
              x: _x40,
              y: _y40
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Sunflower', '🌻', _x40, _y40, 390, _map7, this.output));
            }
          }

          for (var _i41 = 0; _i41 < 100; _i41++) {
            var _x41 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y41 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map7.checkAllCollision({
              x: _x41,
              y: _y41
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Hibiscus', '🌺', _x41, _y41, 400, _map7, this.output));
            }
          }

          for (var _i42 = 0; _i42 < 100; _i42++) {
            var _x42 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y42 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map7.checkAllCollision({
              x: _x42,
              y: _y42
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Cherry Blossom', '🌸', _x42, _y42, 410, _map7, this.output));
            }
          }

          for (var _i43 = 0; _i43 < 200; _i43++) {
            var _x43 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y43 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map7.checkAllCollision({
              x: _x43,
              y: _y43
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Manicured Tree', '🌳', _x43, _y43, 240, _map7, this.output));
            }
          }

          for (var _i44 = 0; _i44 < 5; _i44++) {
            var _x44 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y44 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map7.checkCollision({
              x: _x44,
              y: _y44
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Rose', '🌹', _x44, _y44, 130, 130, 350, 200, 1.1, _map7, this.output, false, false, 'pricks', true, 10));
            }
          }

          for (var _i45 = 0; _i45 < 10; _i45++) {
            var _x45 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y45 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map7.checkCollision({
              x: _x45,
              y: _y45
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Ogre', '👹', _x45, _y45, 110, 110, 300, 100, 0.9, _map7, this.output, false, false, 'bites', true, 10));
            }
          }

          for (var _i46 = 0; _i46 < 5; _i46++) {
            var _x46 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y46 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map7.checkCollision({
              x: _x46,
              y: _y46
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lemon', '🍋', _x46, _y46, 150, 150, 400, 150, 0.9, _map7, this.output, false, false, 'sours', true, 10));
            }
          }

          if (this.game.y === 50 && this.game.x <= 50) {
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(18, 22), 28, 10, 10, 10, 10, 0, _map7, this.output, false, false, 'bites'));
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bus', '🚌', 25, 28, 1000000, 1000000, 1000000, 1000000, 2, _map7, this.output, function () {
              while (this.timePool >= 1) {
                if (this.x - 2 < 0) {
                  this.map.clear(this.x, this.y);
                  this.remove = true;
                } else {
                  this.move(-1, 0);
                }

                this.timePool--;
              }
            }, true, 'runs over'));
          }

          _map7.enemies = enemies;
          return _map7;
        } else if (level === 8) {
          var _map8 = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'brown', this.output, this.game);

          new _water_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Water Drops', '💦', waterX, waterY, _map8, this.output);

          for (var _i47 = 0; _i47 < 5; _i47++) {
            var _x47 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterX - 10, waterX + 10);

            var _y47 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterY - 10, waterY + 10);

            if (_x47 < this.width - 1 && _x47 >= 0 && _y47 < this.height - 1 && _y47 >= 0 && !_map8.checkAllCollision({
              x: _x47,
              y: _y47
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Droplet', '💧', _x47, _y47, 0, _map8, this.output));
            }
          }

          for (var _i48 = 0; _i48 < 50; _i48++) {
            var _x48 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y48 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map8.checkAllCollision({
              x: _x48,
              y: _y48
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Amphora', '🏺', _x48, _y48, 350, _map8, this.output));
            }
          }

          for (var _i49 = 0; _i49 < 200; _i49++) {
            var _x49 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y49 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map8.checkAllCollision({
              x: _x49,
              y: _y49
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Volcano', '🌋', _x49, _y49, 600, _map8, this.output));
            }
          }

          for (var _i50 = 0; _i50 < 50; _i50++) {
            var _x50 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y50 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map8.checkAllCollision({
              x: _x50,
              y: _y50
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Classical Architecture', '🏛️', _x50, _y50, 400, _map8, this.output));
            }
          }

          for (var _i51 = 0; _i51 < 5; _i51++) {
            var _x51 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y51 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map8.checkCollision({
              x: _x51,
              y: _y51
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Brachiosaurus', '🦕', _x51, _y51, 530, 530, 510, 210, 0.6, _map8, this.output, false, false, 'stomps', true, 5));
            }
          }

          for (var _i52 = 0; _i52 < 10; _i52++) {
            var _x52 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y52 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map8.checkCollision({
              x: _x52,
              y: _y52
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('T-Rex', '🦖', _x52, _y52, 210, 210, 500, 110, 1.1, _map8, this.output, false, false, 'bites', true, 10));
            }
          }

          for (var _i53 = 0; _i53 < 5; _i53++) {
            var _x53 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y53 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map8.checkCollision({
              x: _x53,
              y: _y53
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Dragon', '🐉', _x53, _y53, 250, 250, 450, 160, 0.9, _map8, this.output, false, false, 'burns', true, 7));
            }
          }

          if (this.game.y === 50 && this.game.x <= 50) {
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(18, 22), 28, 10, 10, 10, 10, 0, _map8, this.output, false, false, 'bites'));
            enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bus', '🚌', 25, 28, 1000000, 1000000, 1000000, 1000000, 2, _map8, this.output, function () {
              while (this.timePool >= 1) {
                if (this.x - 2 < 0) {
                  this.map.clear(this.x, this.y);
                  this.remove = true;
                } else {
                  this.move(-1, 0);
                }

                this.timePool--;
              }
            }, true, 'runs over'));
          }

          _map8.enemies = enemies;
          return _map8;
        } else if (level === 9) {
          var _map9 = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'orange', this.output, this.game);

          new _water_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Oasis', '🏝️', waterX, waterY, _map9, this.output);

          for (var _i54 = 0; _i54 < 5; _i54++) {
            var _x54 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterX - 10, waterX + 10);

            var _y54 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(waterY - 10, waterY + 10);

            if (_x54 < this.width - 1 && _x54 >= 0 && _y54 < this.height - 1 && _y54 >= 0 && !_map9.checkAllCollision({
              x: _x54,
              y: _y54
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Palm Tree', '🌴', _x54, _y54, 0, _map9, this.output));
            }
          }

          for (var _i55 = 0; _i55 < 500; _i55++) {
            var _x55 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y55 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map9.checkAllCollision({
              x: _x55,
              y: _y55
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Cactus', '🌵', _x55, _y55, 30, _map9, this.output));
            }
          }

          for (var _i56 = 0; _i56 < 10; _i56++) {
            var _x56 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y56 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map9.checkCollision({
              x: _x56,
              y: _y56
            })) {
              enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Lizard', '🦎', _x56, _y56, 10, 10, 10, 10, 0.5, _map9, this.output, false, false, 'bites', false));
            }
          }

          enemies.push(new _enemy_js__WEBPACK_IMPORTED_MODULE_4__["default"]('Bus', '🚌', 25, 28, 3000, 3000, 1000, 300, 1.1, _map9, this.output, false, false, 'runs over', true, 25));
          walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Cactus', '🌵', 25, 26, 30, _map9, this.output));
          _map9.enemies = enemies;
          this.output.log('The 🚌Bus speeds towards you.');
          return _map9;
        } else {
          var _map10 = new _map_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.target, this.width, this.height, 'orange', this.output, this.game);

          for (var _i57 = 0; _i57 < 2000; _i57++) {
            var _x57 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            var _y57 = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 50);

            if (!_map10.checkAllCollision({
              x: _x57,
              y: _y57
            })) {
              walls.push(new _wall_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Cactus', '🌵', _x57, _y57, 30, _map10, this.output));
            }
          }

          return _map10;
        }
      }
    }]);

    return MapCreator;
  }();
  /***/

},
/* 6 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return Map;
  });
  /* harmony import */


  var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
  /* harmony import */


  var _tile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);

  var Map = /*#__PURE__*/function () {
    function Map(target, width, height, color, output, game) {
      _classCallCheck(this, Map);

      this.target = target;
      this.width = width;
      this.height = height;
      this.color = color;
      this.output = output;
      this.game = game;
      this.objects = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["createArray"])(width, height);
      this.tiles = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["createArray"])(width, height);
      var mapOutput = '';

      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          mapOutput += '<span style="color: rgba(255, 255, 255, 0.3)" data-x="' + x + '" data-y="' + y + '">.</span>';
        }

        mapOutput += '<br>';
      }

      document.querySelector('#map').className = '';
      document.querySelector('#map').classList.add(this.color);
      this.target.innerHTML = mapOutput;

      if (this.game.y === 50) {
        var tiles = [];

        for (var i = 0; i < 50; i++) {
          tiles.push(new _tile_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Road', '≡', i, 28, 'rgba(0, 0, 0, 0.3)', this));
        }
      }
    }

    _createClass(Map, [{
      key: "draw",
      value: function draw(object, focus) {
        var el = document.querySelector('#map > .box span[data-x="' + object.x + '"][data-y="' + object.y + '"]');
        el.innerHTML = object.char;

        if (object.constructor.name === 'Tile') {
          el.style.color = object.color;
          this.tiles[object.x][object.y] = object;
        } else {
          el.style.color = null;
          this.objects[object.x][object.y] = object;
        }

        if (focus) {
          var wrapper = document.querySelector('#map > .box');
          var elTop = el.offsetTop - wrapper.offsetTop;
          var elLeft = el.offsetLeft - wrapper.offsetLeft;
          wrapper.scrollTop = elTop - wrapper.offsetHeight / 2 + 10;
          wrapper.scrollLeft = elLeft - wrapper.offsetWidth / 2 + 10;
        }
      }
    }, {
      key: "clear",
      value: function clear(x, y) {
        var el = document.querySelector('#map > .box span[data-x="' + x + '"][data-y="' + y + '"]');

        if (this.tiles[x][y]) {
          el.innerHTML = this.tiles[x][y].char;
          el.style.color = this.tiles[x][y].color;
        } else {
          el.innerHTML = '.';
          el.style.color = 'rgba(255, 255, 255, 0.3)';
        }

        this.objects[x][y] = null;
      }
    }, {
      key: "redraw",
      value: function redraw() {
        var mapOutput = '';

        for (var y = 0; y < this.height; y++) {
          for (var x = 0; x < this.width; x++) {
            var char = '.';
            var color = null;

            if (this.objects[x][y] && this.objects[x][y].constructor.name !== 'Player') {
              char = this.objects[x][y].char;
            } else if (this.tiles[x][y]) {
              char = this.tiles[x][y].char;
              color = this.tiles[x][y].color;
            } else if (char === '.') {
              color = 'rgba(255, 255, 255, 0.3)';
            }

            color = color ? 'style="color:' + color + '"' : null;
            mapOutput += '<span ' + color + ' data-x="' + x + '" data-y="' + y + '">' + char + '</span>';
          }

          mapOutput += '<br>';
        }

        document.querySelector('#map').className = '';
        document.querySelector('#map').classList.add(this.color);
        this.target.innerHTML = mapOutput;
      }
    }, {
      key: "addDeath",
      value: function addDeath(x, y) {
        var el = document.querySelector('#map > .box span[data-x="' + x + '"][data-y="' + y + '"]');
        this.clear(x, y);
        this.tiles[x][y] = {
          char: '🦴'
        };
        el.innerHTML = this.tiles[x][y].char;
        el.style.color = null;
      }
    }, {
      key: "checkCollision",
      value: function checkCollision(object) {
        return this.objects[object.x][object.y];
      }
    }, {
      key: "checkAllCollision",
      value: function checkAllCollision(object) {
        return this.objects[object.x][object.y] || this.tiles[object.x][object.y];
      }
    }]);

    return Map;
  }();
  /***/

},
/* 7 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return Tile;
  });

  var Tile = /*#__PURE__*/function () {
    function Tile(name, char, x, y, color, map) {
      _classCallCheck(this, Tile);

      this.name = char + name;
      this.char = char;
      this.x = x;
      this.y = y;
      this.color = color;
      this.map = map;
      this.draw();
    }

    _createClass(Tile, [{
      key: "draw",
      value: function draw() {
        this.map.draw(this);
      }
    }]);

    return Tile;
  }();
  /***/

},
/* 8 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return Water;
  });

  var Water = /*#__PURE__*/function () {
    function Water(name, char, x, y, map, output) {
      _classCallCheck(this, Water);

      this.x = x, this.y = y, this.name = char + name;
      this.char = char;
      this.map = map;
      this.output = output;
      this.draw();
    }

    _createClass(Water, [{
      key: "draw",
      value: function draw() {
        this.map.draw(this);
      }
    }]);

    return Water;
  }();
  /***/

},
/* 9 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return Wall;
  });

  var Wall = /*#__PURE__*/function () {
    function Wall(name, char, x, y, attack, map, output) {
      _classCallCheck(this, Wall);

      this.name = char + name;
      this.char = char;
      this.x = x;
      this.y = y;
      this.attack = attack;
      this.map = map;
      this.output = output;
      this.draw();
    }

    _createClass(Wall, [{
      key: "draw",
      value: function draw() {
        this.map.draw(this);
      }
    }]);

    return Wall;
  }();
  /***/

},
/* 10 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return Enemy;
  });
  /* harmony import */


  var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

  var Enemy = /*#__PURE__*/function () {
    function Enemy(name, char, x, y, health, maxHealth, attack, defense, speed, map, output, update, unstoppable, attackType, aggressive, awareness) {
      _classCallCheck(this, Enemy);

      this.name = char + name;
      this.char = char;
      this.x = x;
      this.y = y;
      this.prevX = x;
      this.prevY = y;
      this.health = health;
      this.maxHealth = maxHealth;
      this.attack = attack;
      this.defense = defense;
      this.speed = speed;
      this.map = map;
      this.output = output;
      this.customUpdate = update;
      this.unstoppable = unstoppable;
      this.attackType = attackType;
      this.aggressive = aggressive;
      this.awareness = awareness;
      this.timePool = 0;
      this.draw();
    }

    _createClass(Enemy, [{
      key: "update",
      value: function update() {
        if (this.customUpdate) {
          this.customUpdate();
        } else {
          while (this.timePool >= 1) {
            if (this.aggressive && Math.abs(this.x - this.map.game.player.x) <= this.awareness && Math.abs(this.y - this.map.game.player.y) <= this.awareness) {
              var x = 0;
              var y = 0;

              if (this.map.game.player.x > this.x) {
                x = 1;
              } else if (this.map.game.player.x < this.x) {
                x = -1;
              } else {
                x = 0;
              }

              if (this.map.game.player.y > this.y) {
                y = 1;
              } else if (this.map.game.player.y < this.y) {
                y = -1;
              } else {
                y = 0;
              }

              var collision = this.map.checkCollision({
                x: this.x + x,
                y: this.y + y
              });

              if (collision && (collision.constructor.name === 'Wall' || collision.constructor.name === 'Water')) {
                this.move(Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 3) - 1, Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 3) - 1);
              } else {
                this.move(x, y);
              }
            } else {
              this.move(Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 3) - 1, Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, 3) - 1);
            }

            this.timePool--;
          }
        }
      }
    }, {
      key: "move",
      value: function move(x, y) {
        this.prevX = this.x;
        this.prevY = this.y;
        this.map.clear(this.prevX, this.prevY);
        this.x = this.x + x;
        this.y = this.y + y;

        if (this.x < 0) {
          this.x = 0;
        } else if (this.x > this.map.width - 1) {
          this.x = this.map.width - 1;
        }

        if (this.y < 0) {
          this.y = 0;
        } else if (this.y > this.map.height - 1) {
          this.y = this.map.height - 1;
        }

        this.checkCollision();
      }
    }, {
      key: "checkCollision",
      value: function checkCollision() {
        var collision = this.map.checkCollision(this);

        if (collision) {
          if (collision.constructor.name === 'Wall' || collision.constructor.name === 'Water') {
            this.moveBack();
          } else if (collision.constructor.name === 'Enemy' || collision.constructor.name === 'Player') {
            if (!this.unstoppable) {
              this.moveBack();
            }

            if ((collision.constructor.name === 'Player' || this.unstoppable) && !collision.dead) {
              var power = this.attack + this.defense;
              var collisionPower = collision.attack + collision.defense;
              var hitChance = power / collisionPower;
              var hits = Math.random() < hitChance ? true : false;

              if (hits) {
                var attackType = this.attackType ? this.attackType : 'hits';
                this.output.log(this.name + ' ' + attackType + ' ' + collision.name + '.');
                collision.takeDamage(this.attack, this.name, this.unstoppable);
              } else {
                this.output.log(this.name + ' misses ' + collision.name + '.');
              }
            }
          }
        }

        this.draw();
      }
    }, {
      key: "moveBack",
      value: function moveBack() {
        this.x = this.prevX;
        this.y = this.prevY;
      }
    }, {
      key: "draw",
      value: function draw() {
        this.map.draw(this);
      }
    }, {
      key: "takeDamage",
      value: function takeDamage(damage, name, unstoppable) {
        var totalDamage = this.defense >= damage ? 0 : damage - Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(this.defense * 0.8, this.defense);
        if (unstoppable) totalDamage = damage;
        this.output.log(this.name + ' takes ' + (totalDamage ? Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["numberWithCommas"])(totalDamage) : 'no') + ' damage from ' + name + '.');
        this.updateHealth(-totalDamage);
      }
    }, {
      key: "updateHealth",
      value: function updateHealth(delta) {
        this.health += delta;
        if (this.health <= 0) this.die();
      }
    }, {
      key: "die",
      value: function die() {
        this.dead = true;
        this.remove = true;
        this.map.addDeath(this.x, this.y);
        this.output.log(this.name + ' received their 🏜️Just Deserts.');
      }
    }]);

    return Enemy;
  }();
  /***/

},
/* 11 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "default", function () {
    return Player;
  });
  /* harmony import */


  var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

  var Player = /*#__PURE__*/function () {
    function Player(name, char, startingExp, x, y, health, maxHealth, attack, defense, speed, map, output, attributes, game) {
      _classCallCheck(this, Player);

      this.name = char + name;
      this.char = char;
      this.x = x;
      this.y = y;
      this.prevX = x;
      this.prevY = y;
      this.health = health;
      this.maxHealth = maxHealth;
      this.attack = attack;
      this.defense = defense;
      this.speed = speed;
      this.map = map;
      this.output = output;
      this.attributes = attributes;
      this.game = game;
      this.exp = 0;
      this.level = 1;
      this.hydration = 100;
      this.lastDrink = 0;
      this.kills = [];
      this.win = false;
      this.attributes.update('health', this.health + '/' + this.maxHealth);
      this.attributes.update('attack', this.attack);
      this.attributes.update('defense', this.defense);
      this.attributes.update('hydration', this.hydration);
      this.updateExp(startingExp);
      this.draw();
    }

    _createClass(Player, [{
      key: "move",
      value: function move(x, y) {
        if (!this.dead) {
          this.prevX = this.x;
          this.prevY = this.y;
          this.x = this.x + x;
          this.y = this.y + y;

          if (this.x < 0 && this.y < 0) {
            this.game.moveMap(-1, -1);
          } else if (this.x > this.map.width - 1 && this.y < 0) {
            this.game.moveMap(1, -1);
          } else if (this.x > this.map.width - 1 && this.y > this.map.height - 1) {
            this.game.moveMap(1, 1);
          } else if (this.x < 0 && this.y > this.map.height - 1) {
            this.game.moveMap(-1, 1);
          } else if (this.x < 0) {
            this.game.moveMap(-1, 0);
          } else if (this.x > this.map.width - 1) {
            this.game.moveMap(1, 0);
          } else if (this.y < 0) {
            this.game.moveMap(0, -1);
          } else if (this.y > this.map.height - 1) {
            this.game.moveMap(0, 1);
          }

          this.checkCollision();
        }
      }
    }, {
      key: "checkCollision",
      value: function checkCollision() {
        var collision = this.map.checkCollision(this);

        if (collision) {
          if (collision.constructor.name === 'Wall') {
            this.moveBack();
            this.output.log(this.name + ' walks into ' + collision.name + '.');
            this.takeDamage(collision.attack, collision.name);
          } else if (collision.constructor.name === 'Water') {
            this.moveBack();
            this.updateHydration(20);
            this.output.log(this.name + ' drinks from ' + collision.name + '.');
          } else if (collision.constructor.name === 'Enemy') {
            this.moveBack();
            var power = this.attack + this.defense;
            var collisionPower = collision.attack + collision.defense;
            var hitChance = power / collisionPower;
            var hits = Math.random() < hitChance ? true : false;

            if (hits) {
              this.output.log(this.name + ' punches ' + collision.name + '.');
              collision.takeDamage(this.attack, this.name);

              if (collision.dead) {
                this.addKill(collision);
                this.updateExp(1.5 * ((collision.attack + collision.defense) / (3 * (1 - (this.game.level + 1) / 10.5))));

                if (collision.name === '🚌Bus') {
                  this.game.win();
                }
              }
            } else {
              this.output.log(this.name + ' misses ' + collision.name + '.');
            }
          }
        }

        this.draw();
      }
    }, {
      key: "moveBack",
      value: function moveBack() {
        this.x = this.prevX;
        this.y = this.prevY;
      }
    }, {
      key: "draw",
      value: function draw() {
        this.map.clear(this.prevX, this.prevY);
        this.map.draw(this, true);
      }
    }, {
      key: "update",
      value: function update() {
        if (!this.dead) {
          this.dehydrate();
          this.heal();
        }
      }
    }, {
      key: "addKill",
      value: function addKill(object) {
        if (this.kills[object.name]) {
          this.kills[object.name]++;
        } else {
          this.kills[object.name] = 1;
        }
      }
    }, {
      key: "takeDamage",
      value: function takeDamage(damage, name, unstoppable) {
        var totalDamage = this.defense >= damage ? 0 : damage - Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(this.defense * 0.8, this.defense);
        if (unstoppable) totalDamage = damage;
        this.output.log(this.name + ' takes ' + (totalDamage ? Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["numberWithCommas"])(totalDamage) : 'no') + ' damage from ' + name + '.');
        this.lastAttacked = name;
        this.updateHealth(-totalDamage);
      }
    }, {
      key: "dehydrate",
      value: function dehydrate() {
        if ((this.game.tick - this.lastDrink) % 3 === 2) {
          this.hydration--;
          this.lastAttacked = '⌛Dehydration';
          var el = document.querySelector('#hydration');

          if (this.hydration === 40) {
            this.output.log(this.name + ' is thirsty.');
            el.classList.remove('red');
            el.classList.add('orange');
          }

          if (this.hydration === 10) {
            this.output.log(this.name + ' is really thirsty.');
            el.classList.remove('orange');
            el.classList.add('red');
          }

          if (this.hydration <= 0) {
            this.hydration = 0;
            var healthLoss = Math.floor(this.maxHealth / 10);
            this.output.log(this.name + ' is completely dehydrated and loses ' + healthLoss + ' health.');
            this.updateHealth(-healthLoss);
          }

          this.attributes.update('hydration', this.hydration);
        }
      }
    }, {
      key: "updateHydration",
      value: function updateHydration(delta) {
        this.hydration += delta;
        if (this.hydration > 100) this.hydration = 100;
        var el = document.querySelector('#hydration');

        if (this.hydration > 40) {
          el.classList.remove('orange');
          el.classList.remove('red');
        }

        this.lastDrink = this.game.tick + 1;
        this.attributes.update('hydration', this.hydration);
      }
    }, {
      key: "heal",
      value: function heal() {
        if (!this.dead) {
          this.updateHealth(Math.ceil(this.level / 2));
        }
      }
    }, {
      key: "updateHealth",
      value: function updateHealth(delta) {
        var _this5 = this;

        this.health += delta;
        if (this.health > this.maxHealth) this.health = this.maxHealth;
        if (this.health < 0) this.health = 0;
        this.attributes.update('health', this.health + '/' + this.maxHealth);

        if (delta < 0) {
          var _el = document.querySelector('#overlay');

          _el.classList.add('show');

          setTimeout(function () {
            if (!_this5.dead) {
              _el.classList.remove('show');
            }
          }, 100);
        }

        var percent = this.health / this.maxHealth;
        var el = document.querySelector('#health');

        if (percent < 0.25) {
          el.classList.remove('orange');
          el.classList.add('red');
        } else if (percent < 0.5) {
          el.classList.remove('red');
          el.classList.add('orange');
        } else {
          el.classList.remove('orange');
          el.classList.remove('red');
        }

        if (this.health <= 0) {
          this.die();
        }
      }
    }, {
      key: "updateExp",
      value: function updateExp(delta) {
        this.exp += delta;
        var baseExp = 100;
        var thisLevel = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["doubler"])(baseExp, this.level - 1);
        var nextLevel = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["doubler"])(baseExp, this.level);

        while (this.exp >= nextLevel) {
          this.level++;
          var newHealth = Math.floor(this.maxHealth * 1.5 - Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, this.maxHealth * 0.2));
          this.health = this.health + newHealth - this.maxHealth;
          this.maxHealth = newHealth;
          this.attack = Math.floor(this.attack * 1.5 - Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, this.attack * 0.2));
          this.defense = Math.floor(this.defense * 1.5 - Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(0, this.defense * 0.2));
          this.attributes.update('health', this.health + '/' + this.maxHealth);
          this.attributes.update('attack', this.attack);
          this.attributes.update('defense', this.defense);
          this.output.log(this.name + ' reaches level ' + this.level + '.');
          thisLevel = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["doubler"])(baseExp, this.level - 1);
          nextLevel = Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["doubler"])(baseExp, this.level);
        }

        var levelDiff = nextLevel - thisLevel;
        var progress = (this.exp - thisLevel) / levelDiff;
        this.attributes.updateExp(this.level, progress);
      }
    }, {
      key: "die",
      value: function die() {
        var _this6 = this;

        if (!this.dead) {
          this.dead = true;
          this.char = '💀';
          this.draw();
          this.game.atlas[this.game.x][this.game.y].enemies.forEach(function (enemy) {
            enemy.aggressive = false;
          });
          setInterval(function () {
            _this6.game.update();
          }, 100);
          this.output.log(this.name + ' received their 🏜️Just Deserts.');
          this.outputEnd();
        }
      }
    }, {
      key: "outputEnd",
      value: function outputEnd() {
        var _this7 = this;

        this.output.log('---');

        if (this.win) {
          this.output.log(this.name + ' survived ' + this.game.tick + ' turns and reached level ' + this.level + '.');
        } else {
          this.output.log(this.name + ' survived ' + this.game.tick + ' turns and reached level ' + this.level + ' before they were defeated by ' + this.lastAttacked + '.');
        }

        if (Object.keys(this.kills).length) {
          var killsText = '';
          Object.keys(this.kills).forEach(function (el, i) {
            killsText += el + ': ' + _this7.kills[el] + '<br>';
          });
          this.output.log(this.name + ' defeated:');
          this.output.log(killsText);
        }

        this.score = (this.game.tick + Object.keys(this.kills).length * 666 + this.maxHealth * 3) * (this.game.level + 1);
        this.output.log('The final score is ' + Object(_utility_js__WEBPACK_IMPORTED_MODULE_0__["numberWithCommas"])(this.score) + '.');
        this.output.addHighscore(this);
      }
    }]);

    return Player;
  }();
  /***/

}
/******/
]);