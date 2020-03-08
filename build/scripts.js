"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function s(i) {
    if (e[i]) return e[i].exports;
    var h = e[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(h.exports, h, h.exports, s), h.l = !0, h.exports;
  }

  s.m = t, s.c = e, s.d = function (t, e, i) {
    s.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    });
  }, s.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, s.t = function (t, e) {
    if (1 & e && (t = s(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var i = Object.create(null);
    if (s.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var h in t) {
      s.d(i, h, function (e) {
        return t[e];
      }.bind(null, h));
    }
    return i;
  }, s.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return s.d(e, "a", e), e;
  }, s.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, s.p = "", s(s.s = 0);
}([function (t, e, s) {
  "use strict";

  function i(t, e) {
    return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t)) + t;
  }

  function h(t) {
    var e = new Array(t || 0),
        s = t;

    if (arguments.length > 1) {
      var _i = Array.prototype.slice.call(arguments, 1);

      for (; s--;) {
        e[t - 1 - s] = h.apply(this, _i);
      }
    }

    return e;
  }

  function o(t) {
    return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function a(t, e) {
    var s = t;

    for (var _t = 0; _t < e; _t++) {
      s *= 2;
    }

    return s;
  }

  s.r(e);

  var l = /*#__PURE__*/function () {
    function l(t, e, s, i, h, o) {
      _classCallCheck(this, l);

      this.name = e + t, this.char = e, this.x = s, this.y = i, this.color = h, this.map = o, this.draw();
    }

    _createClass(l, [{
      key: "draw",
      value: function draw() {
        this.map.draw(this);
      }
    }]);

    return l;
  }();

  var r = /*#__PURE__*/function () {
    function r(t, e, s, i, o, a) {
      _classCallCheck(this, r);

      this.target = t, this.width = e, this.height = s, this.color = i, this.output = o, this.game = a, this.objects = h(e, s), this.tiles = h(e, s);
      var _r = "";

      for (var _t2 = 0; _t2 < this.height; _t2++) {
        for (var _e = 0; _e < this.width; _e++) {
          _r += '<span style="color: rgba(255, 255, 255, 0.3)" data-x="' + _e + '" data-y="' + _t2 + '">.</span>';
        }

        _r += "<br>";
      }

      if (document.querySelector("#map").className = "", document.querySelector("#map").classList.add(this.color), this.target.innerHTML = _r, 50 === this.game.y) {
        var _t3 = [];

        for (var _e2 = 0; _e2 < 50; _e2++) {
          _t3.push(new l("Road", "≡", _e2, 28, "rgba(0, 0, 0, 0.3)", this));
        }
      }
    }

    _createClass(r, [{
      key: "draw",
      value: function draw(t, e) {
        var s = document.querySelector('#map > .box span[data-x="' + t.x + '"][data-y="' + t.y + '"]');

        if (s.innerHTML = t.char, "Tile" === t.constructor.name ? (s.style.color = t.color, this.tiles[t.x][t.y] = t) : (s.style.color = null, this.objects[t.x][t.y] = t), e) {
          var _t4 = document.querySelector("#map > .box"),
              _e3 = s.offsetTop - _t4.offsetTop,
              _i2 = s.offsetLeft - _t4.offsetLeft;

          _t4.scrollTop = _e3 - _t4.offsetHeight / 2 + 10, _t4.scrollLeft = _i2 - _t4.offsetWidth / 2 + 10;
        }
      }
    }, {
      key: "clear",
      value: function clear(t, e) {
        var s = document.querySelector('#map > .box span[data-x="' + t + '"][data-y="' + e + '"]');
        this.tiles[t][e] ? (s.innerHTML = this.tiles[t][e].char, s.style.color = this.tiles[t][e].color) : (s.innerHTML = ".", s.style.color = "rgba(255, 255, 255, 0.3)"), this.objects[t][e] = null;
      }
    }, {
      key: "redraw",
      value: function redraw() {
        var t = "";

        for (var _e4 = 0; _e4 < this.height; _e4++) {
          for (var _s = 0; _s < this.width; _s++) {
            var _i3 = ".",
                _h = null;
            this.objects[_s][_e4] && "Player" !== this.objects[_s][_e4].constructor.name ? _i3 = this.objects[_s][_e4].char : this.tiles[_s][_e4] ? (_i3 = this.tiles[_s][_e4].char, _h = this.tiles[_s][_e4].color) : "." === _i3 && (_h = "rgba(255, 255, 255, 0.3)"), _h = _h ? 'style="color:' + _h + '"' : null, t += "<span " + _h + ' data-x="' + _s + '" data-y="' + _e4 + '">' + _i3 + "</span>";
          }

          t += "<br>";
        }

        document.querySelector("#map").className = "", document.querySelector("#map").classList.add(this.color), this.target.innerHTML = t;
      }
    }, {
      key: "addDeath",
      value: function addDeath(t, e) {
        var s = document.querySelector('#map > .box span[data-x="' + t + '"][data-y="' + e + '"]');
        this.clear(t, e), this.tiles[t][e] = {
          char: "🦴"
        }, s.innerHTML = this.tiles[t][e].char, s.style.color = null;
      }
    }, {
      key: "checkCollision",
      value: function checkCollision(t) {
        return this.objects[t.x][t.y];
      }
    }, {
      key: "checkAllCollision",
      value: function checkAllCollision(t) {
        return this.objects[t.x][t.y] || this.tiles[t.x][t.y];
      }
    }]);

    return r;
  }();

  var n = /*#__PURE__*/function () {
    function n(t, e, s, i, h, o) {
      _classCallCheck(this, n);

      this.x = s, this.y = i, this.name = e + t, this.char = e, this.map = h, this.output = o, this.draw();
    }

    _createClass(n, [{
      key: "draw",
      value: function draw() {
        this.map.draw(this);
      }
    }]);

    return n;
  }();

  var u = /*#__PURE__*/function () {
    function u(t, e, s, i, h, o, a) {
      _classCallCheck(this, u);

      this.name = e + t, this.char = e, this.x = s, this.y = i, this.attack = h, this.map = o, this.output = a, this.draw();
    }

    _createClass(u, [{
      key: "draw",
      value: function draw() {
        this.map.draw(this);
      }
    }]);

    return u;
  }();

  var c = /*#__PURE__*/function () {
    function c(t, e, s, i, h, o, a, l, r, n, u, _c, p, m, d, y) {
      _classCallCheck(this, c);

      this.name = e + t, this.char = e, this.x = s, this.y = i, this.prevX = s, this.prevY = i, this.health = h, this.maxHealth = o, this.attack = a, this.defense = l, this.speed = r, this.map = n, this.output = u, this.customUpdate = _c, this.unstoppable = p, this.attackType = m, this.aggressive = d, this.awareness = y, this.timePool = 0, this.draw();
    }

    _createClass(c, [{
      key: "update",
      value: function update() {
        if (this.customUpdate) this.customUpdate();else for (; this.timePool >= 1;) {
          if (this.aggressive && Math.abs(this.x - this.map.game.player.x) <= this.awareness && Math.abs(this.y - this.map.game.player.y) <= this.awareness) {
            var _t5 = 0,
                _e5 = 0;
            _t5 = this.map.game.player.x > this.x ? 1 : this.map.game.player.x < this.x ? -1 : 0, _e5 = this.map.game.player.y > this.y ? 1 : this.map.game.player.y < this.y ? -1 : 0;

            var _s2 = this.map.checkCollision({
              x: this.x + _t5,
              y: this.y + _e5
            });

            !_s2 || "Wall" !== _s2.constructor.name && "Water" !== _s2.constructor.name ? this.move(_t5, _e5) : this.move(i(0, 3) - 1, i(0, 3) - 1);
          } else this.move(i(0, 3) - 1, i(0, 3) - 1);

          this.timePool--;
        }
      }
    }, {
      key: "move",
      value: function move(t, e) {
        this.prevX = this.x, this.prevY = this.y, this.map.clear(this.prevX, this.prevY), this.x = this.x + t, this.y = this.y + e, this.x < 0 ? this.x = 0 : this.x > this.map.width - 1 && (this.x = this.map.width - 1), this.y < 0 ? this.y = 0 : this.y > this.map.height - 1 && (this.y = this.map.height - 1), this.checkCollision();
      }
    }, {
      key: "checkCollision",
      value: function checkCollision() {
        var t = this.map.checkCollision(this);
        if (t) if ("Wall" === t.constructor.name || "Water" === t.constructor.name) this.moveBack();else if (("Enemy" === t.constructor.name || "Player" === t.constructor.name) && (this.unstoppable || this.moveBack(), ("Player" === t.constructor.name || this.unstoppable) && !t.dead)) {
          var _e6 = (this.attack + this.defense) / (t.attack + t.defense);

          if (Math.random() < _e6) {
            var _e7 = this.attackType ? this.attackType : "hits";

            this.output.log(this.name + " " + _e7 + " " + t.name + "."), t.takeDamage(this.attack, this.name, this.unstoppable);
          } else this.output.log(this.name + " misses " + t.name + ".");
        }
        this.draw();
      }
    }, {
      key: "moveBack",
      value: function moveBack() {
        this.x = this.prevX, this.y = this.prevY;
      }
    }, {
      key: "draw",
      value: function draw() {
        this.map.draw(this);
      }
    }, {
      key: "takeDamage",
      value: function takeDamage(t, e, s) {
        var h = this.defense >= t ? 0 : t - i(.8 * this.defense, this.defense);
        s && (h = t), this.output.log(this.name + " takes " + (h ? o(h) : "no") + " damage from " + e + "."), this.updateHealth(-h);
      }
    }, {
      key: "updateHealth",
      value: function updateHealth(t) {
        this.health += t, this.health <= 0 && this.die();
      }
    }, {
      key: "die",
      value: function die() {
        this.dead = !0, this.remove = !0, this.map.addDeath(this.x, this.y), this.output.log(this.name + " received their 🏜️Just Deserts.");
      }
    }]);

    return c;
  }();

  var p = /*#__PURE__*/function () {
    function p(t, e, s, i, h, o) {
      _classCallCheck(this, p);

      this.target = t, this.width = e, this.height = s, this.output = i, this.game = h, this.playerName = o;
    }

    _createClass(p, [{
      key: "create",
      value: function create(t) {
        var e = i(0, 50);
        var s = i(0, 50);

        for (; 28 === s;) {
          s = i(0, 50);
        }

        var h = [],
            o = [];

        if (0 === t) {
          var _t6 = new r(this.target, this.width, this.height, "orange", this.output, this.game);

          new n("Oasis", "🏝️", e, s, _t6, this.output);

          for (var _o = 0; _o < 5; _o++) {
            var _o2 = i(e - 10, e + 10),
                _a = i(s - 10, s + 10);

            _o2 < this.width - 1 && _o2 >= 0 && _a < this.height - 1 && _a >= 0 && !_t6.checkAllCollision({
              x: _o2,
              y: _a
            }) && h.push(new u("Palm Tree", "🌴", _o2, _a, 0, _t6, this.output));
          }

          for (var _e8 = 0; _e8 < 500; _e8++) {
            var _e9 = i(0, 50),
                _s3 = i(0, 50);

            _t6.checkAllCollision({
              x: _e9,
              y: _s3
            }) || h.push(new u("Cactus", "🌵", _e9, _s3, 30, _t6, this.output));
          }

          for (var _e10 = 0; _e10 < 10; _e10++) {
            var _e11 = i(0, 50),
                _s4 = i(0, 50);

            _t6.checkCollision({
              x: _e11,
              y: _s4
            }) || o.push(new c("Lizard", "🦎", _e11, _s4, 10, 10, 10, 10, .5, _t6, this.output, !1, !1, "bites", !1));
          }

          return o.push(new c("Lizard", "🦎", i(18, 22), 28, 10, 10, 10, 10, 0, _t6, this.output, !1, !1, "bites")), o.push(new c("Bus", "🚌", 25, 28, 1e6, 1e6, 1e6, 1e6, 2, _t6, this.output, function () {
            for (; this.timePool >= 1;) {
              this.x - 2 < 0 ? (this.map.clear(this.x, this.y), this.remove = !0) : this.move(-1, 0), this.timePool--;
            }
          }, !0, "runs over")), h.push(new u("Cactus", "🌵", 25, 26, 30, _t6, this.output)), _t6.enemies = o, this.output.log("The 🚌Bus leaves while " + this.playerName + " is taking a rest break."), _t6;
        }

        if (1 === t) {
          var _t7 = new r(this.target, this.width, this.height, "orange", this.output, this.game);

          new n("Oasis", "🏝️", e, s, _t7, this.output);

          for (var _o3 = 0; _o3 < 5; _o3++) {
            var _o4 = i(e - 10, e + 10),
                _a2 = i(s - 10, s + 10);

            _o4 < this.width - 1 && _o4 >= 0 && _a2 < this.height - 1 && _a2 >= 0 && !_t7.checkAllCollision({
              x: _o4,
              y: _a2
            }) && h.push(new u("Palm Tree", "🌴", _o4, _a2, 0, _t7, this.output));
          }

          for (var _e12 = 0; _e12 < 500; _e12++) {
            var _e13 = i(0, 50),
                _s5 = i(0, 50);

            _t7.checkAllCollision({
              x: _e13,
              y: _s5
            }) || h.push(new u("Cactus", "🌵", _e13, _s5, 30, _t7, this.output));
          }

          for (var _e14 = 0; _e14 < 5; _e14++) {
            var _e15 = i(0, 50),
                _s6 = i(0, 50);

            _t7.checkCollision({
              x: _e15,
              y: _s6
            }) || o.push(new c("Lizard", "🦎", _e15, _s6, 10, 10, 10, 10, .5, _t7, this.output, !1, !1, "bites", !1));
          }

          for (var _e16 = 0; _e16 < 10; _e16++) {
            var _e17 = i(0, 50),
                _s7 = i(0, 50);

            _t7.checkCollision({
              x: _e17,
              y: _s7
            }) || o.push(new c("Rat", "🐀", _e17, _s7, 10, 10, 40, 10, .8, _t7, this.output, !1, !1, "bites", !0, 10));
          }

          for (var _e18 = 0; _e18 < 5; _e18++) {
            var _e19 = i(0, 50),
                _s8 = i(0, 50);

            _t7.checkCollision({
              x: _e19,
              y: _s8
            }) || o.push(new c("Grasshopper", "🦗", _e19, _s8, 10, 10, 5, 5, 2, _t7, this.output, !1, !1, "bites", !0, 25));
          }

          return 50 === this.game.y && this.game.x <= 50 && (o.push(new c("Lizard", "🦎", i(18, 22), 28, 10, 10, 10, 10, 0, _t7, this.output, !1, !1, "bites")), o.push(new c("Bus", "🚌", 25, 28, 1e6, 1e6, 1e6, 1e6, 2, _t7, this.output, function () {
            for (; this.timePool >= 1;) {
              this.x - 2 < 0 ? (this.map.clear(this.x, this.y), this.remove = !0) : this.move(-1, 0), this.timePool--;
            }
          }, !0, "runs over"))), _t7.enemies = o, _t7;
        }

        if (2 === t) {
          var _t8 = new r(this.target, this.width, this.height, "green", this.output, this.game);

          new n("Wave", "🌊", e, s, _t8, this.output);

          for (var _o5 = 0; _o5 < 5; _o5++) {
            var _o6 = i(e - 10, e + 10),
                _a3 = i(s - 10, s + 10);

            _o6 < this.width - 1 && _o6 >= 0 && _a3 < this.height - 1 && _a3 >= 0 && !_t8.checkAllCollision({
              x: _o6,
              y: _a3
            }) && h.push(new u("Tulip", "🌷", _o6, _a3, 0, _t8, this.output));
          }

          for (var _e20 = 0; _e20 < 500; _e20++) {
            var _e21 = i(0, 50),
                _s9 = i(0, 50);

            _t8.checkAllCollision({
              x: _e21,
              y: _s9
            }) || h.push(new u("Pine Tree", "🌲", _e21, _s9, 50, _t8, this.output));
          }

          for (var _e22 = 0; _e22 < 5; _e22++) {
            var _e23 = i(0, 50),
                _s10 = i(0, 50);

            _t8.checkCollision({
              x: _e23,
              y: _s10
            }) || o.push(new c("Ant", "🐜", _e23, _s10, 30, 30, 60, 10, .7, _t8, this.output, !1, !1, "bites", !0, 20));
          }

          for (var _e24 = 0; _e24 < 10; _e24++) {
            var _e25 = i(0, 50),
                _s11 = i(0, 50);

            _t8.checkCollision({
              x: _e25,
              y: _s11
            }) || o.push(new c("Lady Beetle", "🐞", _e25, _s11, 20, 20, 40, 15, 1.1, _t8, this.output, !1, !1, "bites", !0, 10));
          }

          for (var _e26 = 0; _e26 < 5; _e26++) {
            var _e27 = i(0, 50),
                _s12 = i(0, 50);

            _t8.checkCollision({
              x: _e27,
              y: _s12
            }) || o.push(new c("Bee", "🐝", _e27, _s12, 10, 10, 100, 10, 2, _t8, this.output, !1, !1, "stings", !0, 3));
          }

          return 50 === this.game.y && this.game.x <= 50 && (o.push(new c("Lizard", "🦎", i(18, 22), 28, 10, 10, 10, 10, 0, _t8, this.output, !1, !1, "bites")), o.push(new c("Bus", "🚌", 25, 28, 1e6, 1e6, 1e6, 1e6, 2, _t8, this.output, function () {
            for (; this.timePool >= 1;) {
              this.x - 2 < 0 ? (this.map.clear(this.x, this.y), this.remove = !0) : this.move(-1, 0), this.timePool--;
            }
          }, !0, "runs over"))), _t8.enemies = o, _t8;
        }

        if (3 === t) {
          var _t9 = new r(this.target, this.width, this.height, "green", this.output, this.game);

          new n("Wave", "🌊", e, s, _t9, this.output);

          for (var _o7 = 0; _o7 < 5; _o7++) {
            var _o8 = i(e - 10, e + 10),
                _a4 = i(s - 10, s + 10);

            _o8 < this.width - 1 && _o8 >= 0 && _a4 < this.height - 1 && _a4 >= 0 && !_t9.checkAllCollision({
              x: _o8,
              y: _a4
            }) && h.push(new u("Tulip", "🌷", _o8, _a4, 0, _t9, this.output));
          }

          for (var _e28 = 0; _e28 < 450; _e28++) {
            var _e29 = i(0, 50),
                _s13 = i(0, 50);

            _t9.checkAllCollision({
              x: _e29,
              y: _s13
            }) || h.push(new u("Pine Tree", "🌲", _e29, _s13, 50, _t9, this.output));
          }

          for (var _e30 = 0; _e30 < 50; _e30++) {
            var _e31 = i(0, 50),
                _s14 = i(0, 50);

            _t9.checkAllCollision({
              x: _e31,
              y: _s14
            }) || h.push(new u("Mountain", "⛰️", _e31, _s14, 100, _t9, this.output));
          }

          for (var _e32 = 0; _e32 < 5; _e32++) {
            var _e33 = i(0, 50),
                _s15 = i(0, 50);

            _t9.checkCollision({
              x: _e33,
              y: _s15
            }) || o.push(new c("Crocodile", "🐊", _e33, _s15, 40, 40, 100, 35, .7, _t9, this.output, !1, !1, "bites", !0, 5));
          }

          for (var _e34 = 0; _e34 < 10; _e34++) {
            var _e35 = i(0, 50),
                _s16 = i(0, 50);

            _t9.checkCollision({
              x: _e35,
              y: _s16
            }) || o.push(new c("Leopard", "🐆", _e35, _s16, 80, 80, 90, 30, 1.1, _t9, this.output, !1, !1, "bites", !0, 10));
          }

          for (var _e36 = 0; _e36 < 5; _e36++) {
            var _e37 = i(0, 50),
                _s17 = i(0, 50);

            _t9.checkCollision({
              x: _e37,
              y: _s17
            }) || o.push(new c("Elephant", "🐘", _e37, _s17, 200, 200, 300, 30, .25, _t9, this.output, !1, !1, "stomps", !0, 3));
          }

          return 50 === this.game.y && this.game.x <= 50 && (o.push(new c("Lizard", "🦎", i(18, 22), 28, 10, 10, 10, 10, 0, _t9, this.output, !1, !1, "bites")), o.push(new c("Bus", "🚌", 25, 28, 1e6, 1e6, 1e6, 1e6, 2, _t9, this.output, function () {
            for (; this.timePool >= 1;) {
              this.x - 2 < 0 ? (this.map.clear(this.x, this.y), this.remove = !0) : this.move(-1, 0), this.timePool--;
            }
          }, !0, "runs over"))), _t9.enemies = o, _t9;
        }

        if (4 === t) {
          var _t10 = new r(this.target, this.width, this.height, "gray", this.output, this.game);

          new n("Faucet", "🚰", e, s, _t10, this.output);

          for (var _o9 = 0; _o9 < 5; _o9++) {
            var _o10 = i(e - 10, e + 10),
                _a5 = i(s - 10, s + 10);

            _o10 < this.width - 1 && _o10 >= 0 && _a5 < this.height - 1 && _a5 >= 0 && !_t10.checkAllCollision({
              x: _o10,
              y: _a5
            }) && h.push(new u("Restroom Sign", "🚻", _o10, _a5, 0, _t10, this.output));
          }

          for (var _e38 = 0; _e38 < 400; _e38++) {
            var _e39 = i(0, 50),
                _s18 = i(0, 50);

            _t10.checkAllCollision({
              x: _e39,
              y: _s18
            }) || h.push(new u("Office Building", "🏢", _e39, _s18, 120, _t10, this.output));
          }

          for (var _e40 = 0; _e40 < 50; _e40++) {
            var _e41 = i(0, 50),
                _s19 = i(0, 50);

            _t10.checkAllCollision({
              x: _e41,
              y: _s19
            }) || h.push(new u("Construction Sign", "🚧", _e41, _s19, 100, _t10, this.output));
          }

          for (var _e42 = 0; _e42 < 50; _e42++) {
            var _e43 = i(0, 50),
                _s20 = i(0, 50);

            _t10.checkAllCollision({
              x: _e43,
              y: _s20
            }) || h.push(new u("Crane", "🏗️", _e43, _s20, 150, _t10, this.output));
          }

          for (var _e44 = 0; _e44 < 5; _e44++) {
            var _e45 = i(0, 50),
                _s21 = i(0, 50);

            _t10.checkCollision({
              x: _e45,
              y: _s21
            }) || o.push(new c("Spider", "🕷", _e45, _s21, 50, 50, 140, 50, .6, _t10, this.output, !1, !1, "bites", !0, 10));
          }

          for (var _e46 = 0; _e46 < 10; _e46++) {
            var _e47 = i(0, 50),
                _s22 = i(0, 50);

            _t10.checkCollision({
              x: _e47,
              y: _s22
            }) || o.push(new c("Gear", "⚙️", _e47, _s22, 40, 40, 180, 0, 1.7, _t10, this.output, !1, !1, "grinds", !0, 4));
          }

          for (var _e48 = 0; _e48 < 5; _e48++) {
            var _e49 = i(0, 50),
                _s23 = i(0, 50);

            _t10.checkCollision({
              x: _e49,
              y: _s23
            }) || o.push(new c("Tram", "🚋", _e49, _s23, 200, 200, 300, 30, .5, _t10, this.output, !1, !1, "runs over", !0, 1));
          }

          return 50 === this.game.y && this.game.x <= 50 && (o.push(new c("Lizard", "🦎", i(18, 22), 28, 10, 10, 10, 10, 0, _t10, this.output, !1, !1, "bites")), o.push(new c("Bus", "🚌", 25, 28, 1e6, 1e6, 1e6, 1e6, 2, _t10, this.output, function () {
            for (; this.timePool >= 1;) {
              this.x - 2 < 0 ? (this.map.clear(this.x, this.y), this.remove = !0) : this.move(-1, 0), this.timePool--;
            }
          }, !0, "runs over"))), _t10.enemies = o, _t10;
        }

        if (5 === t) {
          var _t11 = new r(this.target, this.width, this.height, "gray", this.output, this.game);

          new n("Faucet", "🚰", e, s, _t11, this.output);

          for (var _o11 = 0; _o11 < 5; _o11++) {
            var _o12 = i(e - 10, e + 10),
                _a6 = i(s - 10, s + 10);

            _o12 < this.width - 1 && _o12 >= 0 && _a6 < this.height - 1 && _a6 >= 0 && !_t11.checkAllCollision({
              x: _o12,
              y: _a6
            }) && h.push(new u("Restroom Sign", "🚻", _o12, _a6, 0, _t11, this.output));
          }

          for (var _e50 = 0; _e50 < 400; _e50++) {
            var _e51 = i(0, 50),
                _s24 = i(0, 50);

            _t11.checkAllCollision({
              x: _e51,
              y: _s24
            }) || h.push(new u("Office Building", "🏢", _e51, _s24, 120, _t11, this.output));
          }

          for (var _e52 = 0; _e52 < 50; _e52++) {
            var _e53 = i(0, 50),
                _s25 = i(0, 50);

            _t11.checkAllCollision({
              x: _e53,
              y: _s25
            }) || h.push(new u("Convenience Store", "🏪", _e53, _s25, 150, _t11, this.output));
          }

          for (var _e54 = 0; _e54 < 50; _e54++) {
            var _e55 = i(0, 50),
                _s26 = i(0, 50);

            _t11.checkAllCollision({
              x: _e55,
              y: _s26
            }) || h.push(new u("Hotel", "🏨", _e55, _s26, 170, _t11, this.output));
          }

          for (var _e56 = 0; _e56 < 5; _e56++) {
            var _e57 = i(0, 50),
                _s27 = i(0, 50);

            _t11.checkCollision({
              x: _e57,
              y: _s27
            }) || o.push(new c("Dog", "🐕", _e57, _s27, 110, 110, 150, 50, .6, _t11, this.output, !1, !1, "bites", !0, 10));
          }

          for (var _e58 = 0; _e58 < 10; _e58++) {
            var _e59 = i(0, 50),
                _s28 = i(0, 50);

            _t11.checkCollision({
              x: _e59,
              y: _s28
            }) || o.push(new c("Cat", "🐈", _e59, _s28, 100, 100, 200, 50, .9, _t11, this.output, !1, !1, "scratches", !0, 4));
          }

          for (var _e60 = 0; _e60 < 5; _e60++) {
            var _e61 = i(0, 50),
                _s29 = i(0, 50);

            _t11.checkCollision({
              x: _e61,
              y: _s29
            }) || o.push(new c("Green Salad", "🥗", _e61, _s29, 1e3, 1e3, 100, 0, .5, _t11, this.output, !1, !1, "satiates", !0, 1));
          }

          return 50 === this.game.y && this.game.x <= 50 && (o.push(new c("Lizard", "🦎", i(18, 22), 28, 10, 10, 10, 10, 0, _t11, this.output, !1, !1, "bites")), o.push(new c("Bus", "🚌", 25, 28, 1e6, 1e6, 1e6, 1e6, 2, _t11, this.output, function () {
            for (; this.timePool >= 1;) {
              this.x - 2 < 0 ? (this.map.clear(this.x, this.y), this.remove = !0) : this.move(-1, 0), this.timePool--;
            }
          }, !0, "runs over"))), _t11.enemies = o, _t11;
        }

        if (6 === t) {
          var _t12 = new r(this.target, this.width, this.height, "green", this.output, this.game);

          new n("Fountain", "⛲", e, s, _t12, this.output);

          for (var _o13 = 0; _o13 < 5; _o13++) {
            var _o14 = i(e - 10, e + 10),
                _a7 = i(s - 10, s + 10);

            _o14 < this.width - 1 && _o14 >= 0 && _a7 < this.height - 1 && _a7 >= 0 && !_t12.checkAllCollision({
              x: _o14,
              y: _a7
            }) && h.push(new u("Woman's Hat", "👒", _o14, _a7, 0, _t12, this.output));
          }

          for (var _e62 = 0; _e62 < 450; _e62++) {
            var _e63 = i(0, 50),
                _s30 = i(0, 50);

            _t12.checkAllCollision({
              x: _e63,
              y: _s30
            }) || h.push(new u("Manicured Tree", "🌳", _e63, _s30, 240, _t12, this.output));
          }

          for (var _e64 = 0; _e64 < 50; _e64++) {
            var _e65 = i(0, 50),
                _s31 = i(0, 50);

            _t12.checkAllCollision({
              x: _e65,
              y: _s31
            }) || h.push(new u("Seedling", "🌱", _e65, _s31, 300, _t12, this.output));
          }

          for (var _e66 = 0; _e66 < 5; _e66++) {
            var _e67 = i(0, 50),
                _s32 = i(0, 50);

            _t12.checkCollision({
              x: _e67,
              y: _s32
            }) || o.push(new c("Tiger", "🐅", _e67, _s32, 110, 110, 200, 70, .7, _t12, this.output, !1, !1, "bites", !0, 10));
          }

          for (var _e68 = 0; _e68 < 10; _e68++) {
            var _e69 = i(0, 50),
                _s33 = i(0, 50);

            _t12.checkCollision({
              x: _e69,
              y: _s33
            }) || o.push(new c("Monkey", "🐒", _e69, _s33, 100, 100, 150, 70, .9, _t12, this.output, !1, !1, "scratches", !0, 4));
          }

          for (var _e70 = 0; _e70 < 5; _e70++) {
            var _e71 = i(0, 50),
                _s34 = i(0, 50);

            _t12.checkCollision({
              x: _e71,
              y: _s34
            }) || o.push(new c("Snail", "🐌", _e71, _s34, 1e3, 1e3, 100, 100, .1, _t12, this.output, !1, !1, "squashes", !0, 1));
          }

          return 50 === this.game.y && this.game.x <= 50 && (o.push(new c("Lizard", "🦎", i(18, 22), 28, 10, 10, 10, 10, 0, _t12, this.output, !1, !1, "bites")), o.push(new c("Bus", "🚌", 25, 28, 1e6, 1e6, 1e6, 1e6, 2, _t12, this.output, function () {
            for (; this.timePool >= 1;) {
              this.x - 2 < 0 ? (this.map.clear(this.x, this.y), this.remove = !0) : this.move(-1, 0), this.timePool--;
            }
          }, !0, "runs over"))), _t12.enemies = o, _t12;
        }

        if (7 === t) {
          var _t13 = new r(this.target, this.width, this.height, "green", this.output, this.game);

          new n("Fountain", "⛲", e, s, _t13, this.output);

          for (var _o15 = 0; _o15 < 5; _o15++) {
            var _o16 = i(e - 10, e + 10),
                _a8 = i(s - 10, s + 10);

            _o16 < this.width - 1 && _o16 >= 0 && _a8 < this.height - 1 && _a8 >= 0 && !_t13.checkAllCollision({
              x: _o16,
              y: _a8
            }) && h.push(new u("Woman's Hat", "👒", _o16, _a8, 0, _t13, this.output));
          }

          for (var _e72 = 0; _e72 < 100; _e72++) {
            var _e73 = i(0, 50),
                _s35 = i(0, 50);

            _t13.checkAllCollision({
              x: _e73,
              y: _s35
            }) || h.push(new u("Sunflower", "🌻", _e73, _s35, 390, _t13, this.output));
          }

          for (var _e74 = 0; _e74 < 100; _e74++) {
            var _e75 = i(0, 50),
                _s36 = i(0, 50);

            _t13.checkAllCollision({
              x: _e75,
              y: _s36
            }) || h.push(new u("Hibiscus", "🌺", _e75, _s36, 400, _t13, this.output));
          }

          for (var _e76 = 0; _e76 < 100; _e76++) {
            var _e77 = i(0, 50),
                _s37 = i(0, 50);

            _t13.checkAllCollision({
              x: _e77,
              y: _s37
            }) || h.push(new u("Cherry Blossom", "🌸", _e77, _s37, 410, _t13, this.output));
          }

          for (var _e78 = 0; _e78 < 200; _e78++) {
            var _e79 = i(0, 50),
                _s38 = i(0, 50);

            _t13.checkAllCollision({
              x: _e79,
              y: _s38
            }) || h.push(new u("Manicured Tree", "🌳", _e79, _s38, 240, _t13, this.output));
          }

          for (var _e80 = 0; _e80 < 5; _e80++) {
            var _e81 = i(0, 50),
                _s39 = i(0, 50);

            _t13.checkCollision({
              x: _e81,
              y: _s39
            }) || o.push(new c("Rose", "🌹", _e81, _s39, 130, 130, 350, 200, 1.1, _t13, this.output, !1, !1, "pricks", !0, 10));
          }

          for (var _e82 = 0; _e82 < 10; _e82++) {
            var _e83 = i(0, 50),
                _s40 = i(0, 50);

            _t13.checkCollision({
              x: _e83,
              y: _s40
            }) || o.push(new c("Ogre", "👹", _e83, _s40, 110, 110, 300, 100, .9, _t13, this.output, !1, !1, "bites", !0, 10));
          }

          for (var _e84 = 0; _e84 < 5; _e84++) {
            var _e85 = i(0, 50),
                _s41 = i(0, 50);

            _t13.checkCollision({
              x: _e85,
              y: _s41
            }) || o.push(new c("Lemon", "🍋", _e85, _s41, 150, 150, 400, 150, .9, _t13, this.output, !1, !1, "sours", !0, 10));
          }

          return 50 === this.game.y && this.game.x <= 50 && (o.push(new c("Lizard", "🦎", i(18, 22), 28, 10, 10, 10, 10, 0, _t13, this.output, !1, !1, "bites")), o.push(new c("Bus", "🚌", 25, 28, 1e6, 1e6, 1e6, 1e6, 2, _t13, this.output, function () {
            for (; this.timePool >= 1;) {
              this.x - 2 < 0 ? (this.map.clear(this.x, this.y), this.remove = !0) : this.move(-1, 0), this.timePool--;
            }
          }, !0, "runs over"))), _t13.enemies = o, _t13;
        }

        if (8 === t) {
          var _t14 = new r(this.target, this.width, this.height, "brown", this.output, this.game);

          new n("Water Drops", "💦", e, s, _t14, this.output);

          for (var _o17 = 0; _o17 < 5; _o17++) {
            var _o18 = i(e - 10, e + 10),
                _a9 = i(s - 10, s + 10);

            _o18 < this.width - 1 && _o18 >= 0 && _a9 < this.height - 1 && _a9 >= 0 && !_t14.checkAllCollision({
              x: _o18,
              y: _a9
            }) && h.push(new u("Droplet", "💧", _o18, _a9, 0, _t14, this.output));
          }

          for (var _e86 = 0; _e86 < 50; _e86++) {
            var _e87 = i(0, 50),
                _s42 = i(0, 50);

            _t14.checkAllCollision({
              x: _e87,
              y: _s42
            }) || h.push(new u("Amphora", "🏺", _e87, _s42, 350, _t14, this.output));
          }

          for (var _e88 = 0; _e88 < 200; _e88++) {
            var _e89 = i(0, 50),
                _s43 = i(0, 50);

            _t14.checkAllCollision({
              x: _e89,
              y: _s43
            }) || h.push(new u("Volcano", "🌋", _e89, _s43, 600, _t14, this.output));
          }

          for (var _e90 = 0; _e90 < 50; _e90++) {
            var _e91 = i(0, 50),
                _s44 = i(0, 50);

            _t14.checkAllCollision({
              x: _e91,
              y: _s44
            }) || h.push(new u("Classical Architecture", "🏛️", _e91, _s44, 400, _t14, this.output));
          }

          for (var _e92 = 0; _e92 < 5; _e92++) {
            var _e93 = i(0, 50),
                _s45 = i(0, 50);

            _t14.checkCollision({
              x: _e93,
              y: _s45
            }) || o.push(new c("Brachiosaurus", "🦕", _e93, _s45, 530, 530, 510, 210, .6, _t14, this.output, !1, !1, "stomps", !0, 5));
          }

          for (var _e94 = 0; _e94 < 10; _e94++) {
            var _e95 = i(0, 50),
                _s46 = i(0, 50);

            _t14.checkCollision({
              x: _e95,
              y: _s46
            }) || o.push(new c("T-Rex", "🦖", _e95, _s46, 210, 210, 500, 110, 1.1, _t14, this.output, !1, !1, "bites", !0, 10));
          }

          for (var _e96 = 0; _e96 < 5; _e96++) {
            var _e97 = i(0, 50),
                _s47 = i(0, 50);

            _t14.checkCollision({
              x: _e97,
              y: _s47
            }) || o.push(new c("Dragon", "🐉", _e97, _s47, 250, 250, 450, 160, .9, _t14, this.output, !1, !1, "burns", !0, 7));
          }

          return 50 === this.game.y && this.game.x <= 50 && (o.push(new c("Lizard", "🦎", i(18, 22), 28, 10, 10, 10, 10, 0, _t14, this.output, !1, !1, "bites")), o.push(new c("Bus", "🚌", 25, 28, 1e6, 1e6, 1e6, 1e6, 2, _t14, this.output, function () {
            for (; this.timePool >= 1;) {
              this.x - 2 < 0 ? (this.map.clear(this.x, this.y), this.remove = !0) : this.move(-1, 0), this.timePool--;
            }
          }, !0, "runs over"))), _t14.enemies = o, _t14;
        }

        if (9 === t) {
          var _t15 = new r(this.target, this.width, this.height, "orange", this.output, this.game);

          new n("Oasis", "🏝️", e, s, _t15, this.output);

          for (var _o19 = 0; _o19 < 5; _o19++) {
            var _o20 = i(e - 10, e + 10),
                _a10 = i(s - 10, s + 10);

            _o20 < this.width - 1 && _o20 >= 0 && _a10 < this.height - 1 && _a10 >= 0 && !_t15.checkAllCollision({
              x: _o20,
              y: _a10
            }) && h.push(new u("Palm Tree", "🌴", _o20, _a10, 0, _t15, this.output));
          }

          for (var _e98 = 0; _e98 < 500; _e98++) {
            var _e99 = i(0, 50),
                _s48 = i(0, 50);

            _t15.checkAllCollision({
              x: _e99,
              y: _s48
            }) || h.push(new u("Cactus", "🌵", _e99, _s48, 30, _t15, this.output));
          }

          for (var _e100 = 0; _e100 < 10; _e100++) {
            var _e101 = i(0, 50),
                _s49 = i(0, 50);

            _t15.checkCollision({
              x: _e101,
              y: _s49
            }) || o.push(new c("Lizard", "🦎", _e101, _s49, 10, 10, 10, 10, .5, _t15, this.output, !1, !1, "bites", !1));
          }

          return o.push(new c("Bus", "🚌", 25, 28, 3e3, 3e3, 1e3, 300, 1.1, _t15, this.output, !1, !1, "runs over", !0, 25)), h.push(new u("Cactus", "🌵", 25, 26, 30, _t15, this.output)), _t15.enemies = o, this.output.log("The 🚌Bus speeds towards you."), _t15;
        }

        {
          var _t16 = new r(this.target, this.width, this.height, "orange", this.output, this.game);

          for (var _e102 = 0; _e102 < 2e3; _e102++) {
            var _e103 = i(0, 50),
                _s50 = i(0, 50);

            _t16.checkAllCollision({
              x: _e103,
              y: _s50
            }) || h.push(new u("Cactus", "🌵", _e103, _s50, 30, _t16, this.output));
          }

          return _t16;
        }
      }
    }]);

    return p;
  }();

  var m = /*#__PURE__*/function () {
    function m(t, e, s, i, h, o, a, l, r, n, u, c, p, _m) {
      _classCallCheck(this, m);

      this.name = e + t, this.char = e, this.x = i, this.y = h, this.prevX = i, this.prevY = h, this.health = o, this.maxHealth = a, this.attack = l, this.defense = r, this.speed = n, this.map = u, this.output = c, this.attributes = p, this.game = _m, this.exp = 0, this.level = 1, this.hydration = 100, this.lastDrink = 0, this.kills = [], this.win = !1, this.attributes.update("health", this.health + "/" + this.maxHealth), this.attributes.update("attack", this.attack), this.attributes.update("defense", this.defense), this.attributes.update("hydration", this.hydration), this.updateExp(s), this.draw();
    }

    _createClass(m, [{
      key: "move",
      value: function move(t, e) {
        this.dead || (this.prevX = this.x, this.prevY = this.y, this.x = this.x + t, this.y = this.y + e, this.x < 0 && this.y < 0 ? this.game.moveMap(-1, -1) : this.x > this.map.width - 1 && this.y < 0 ? this.game.moveMap(1, -1) : this.x > this.map.width - 1 && this.y > this.map.height - 1 ? this.game.moveMap(1, 1) : this.x < 0 && this.y > this.map.height - 1 ? this.game.moveMap(-1, 1) : this.x < 0 ? this.game.moveMap(-1, 0) : this.x > this.map.width - 1 ? this.game.moveMap(1, 0) : this.y < 0 ? this.game.moveMap(0, -1) : this.y > this.map.height - 1 && this.game.moveMap(0, 1), this.checkCollision());
      }
    }, {
      key: "checkCollision",
      value: function checkCollision() {
        var t = this.map.checkCollision(this);
        if (t) if ("Wall" === t.constructor.name) this.moveBack(), this.output.log(this.name + " walks into " + t.name + "."), this.takeDamage(t.attack, t.name);else if ("Water" === t.constructor.name) this.moveBack(), this.updateHydration(20), this.output.log(this.name + " drinks from " + t.name + ".");else if ("Enemy" === t.constructor.name) {
          this.moveBack();

          var _e104 = (this.attack + this.defense) / (t.attack + t.defense);

          Math.random() < _e104 ? (this.output.log(this.name + " punches " + t.name + "."), t.takeDamage(this.attack, this.name), t.dead && (this.addKill(t), this.updateExp((t.attack + t.defense) / (3 * (1 - (this.game.level + 1) / 10.5)) * 1.5), "🚌Bus" === t.name && this.game.win())) : this.output.log(this.name + " misses " + t.name + ".");
        }
        this.draw();
      }
    }, {
      key: "moveBack",
      value: function moveBack() {
        this.x = this.prevX, this.y = this.prevY;
      }
    }, {
      key: "draw",
      value: function draw() {
        this.map.clear(this.prevX, this.prevY), this.map.draw(this, !0);
      }
    }, {
      key: "update",
      value: function update() {
        this.dead || (this.dehydrate(), this.heal());
      }
    }, {
      key: "addKill",
      value: function addKill(t) {
        this.kills[t.name] ? this.kills[t.name]++ : this.kills[t.name] = 1;
      }
    }, {
      key: "takeDamage",
      value: function takeDamage(t, e, s) {
        var h = this.defense >= t ? 0 : t - i(.8 * this.defense, this.defense);
        s && (h = t), this.output.log(this.name + " takes " + (h ? o(h) : "no") + " damage from " + e + "."), this.lastAttacked = e, this.updateHealth(-h);
      }
    }, {
      key: "dehydrate",
      value: function dehydrate() {
        if ((this.game.tick - this.lastDrink) % 3 == 2) {
          this.hydration--, this.lastAttacked = "⌛Dehydration";

          var _t17 = document.querySelector("#hydration");

          if (40 === this.hydration && (this.output.log(this.name + " is thirsty."), _t17.classList.remove("red"), _t17.classList.add("orange")), 10 === this.hydration && (this.output.log(this.name + " is really thirsty."), _t17.classList.remove("orange"), _t17.classList.add("red")), this.hydration <= 0) {
            this.hydration = 0;

            var _t18 = Math.floor(this.maxHealth / 10);

            this.output.log(this.name + " is completely dehydrated and loses " + _t18 + " health."), this.updateHealth(-_t18);
          }

          this.attributes.update("hydration", this.hydration);
        }
      }
    }, {
      key: "updateHydration",
      value: function updateHydration(t) {
        this.hydration += t, this.hydration > 100 && (this.hydration = 100);
        var e = document.querySelector("#hydration");
        this.hydration > 40 && (e.classList.remove("orange"), e.classList.remove("red")), this.lastDrink = this.game.tick + 1, this.attributes.update("hydration", this.hydration);
      }
    }, {
      key: "heal",
      value: function heal() {
        this.dead || this.updateHealth(Math.ceil(this.level / 2));
      }
    }, {
      key: "updateHealth",
      value: function updateHealth(t) {
        var _this = this;

        if (this.health += t, this.health > this.maxHealth && (this.health = this.maxHealth), this.health < 0 && (this.health = 0), this.attributes.update("health", this.health + "/" + this.maxHealth), t < 0) {
          var _t19 = document.querySelector("#overlay");

          _t19.classList.add("show"), setTimeout(function () {
            _this.dead || _t19.classList.remove("show");
          }, 100);
        }

        var e = this.health / this.maxHealth,
            s = document.querySelector("#health");
        e < .25 ? (s.classList.remove("orange"), s.classList.add("red")) : e < .5 ? (s.classList.remove("red"), s.classList.add("orange")) : (s.classList.remove("orange"), s.classList.remove("red")), this.health <= 0 && this.die();
      }
    }, {
      key: "updateExp",
      value: function updateExp(t) {
        this.exp += t;
        var e = a(100, this.level - 1),
            s = a(100, this.level);

        for (; this.exp >= s;) {
          this.level++;

          var _t20 = Math.floor(1.5 * this.maxHealth - i(0, .2 * this.maxHealth));

          this.health = this.health + _t20 - this.maxHealth, this.maxHealth = _t20, this.attack = Math.floor(1.5 * this.attack - i(0, .2 * this.attack)), this.defense = Math.floor(1.5 * this.defense - i(0, .2 * this.defense)), this.attributes.update("health", this.health + "/" + this.maxHealth), this.attributes.update("attack", this.attack), this.attributes.update("defense", this.defense), this.output.log(this.name + " reaches level " + this.level + "."), e = a(100, this.level - 1), s = a(100, this.level);
        }

        var h = s - e,
            o = (this.exp - e) / h;
        this.attributes.updateExp(this.level, o);
      }
    }, {
      key: "die",
      value: function die() {
        var _this2 = this;

        this.dead || (this.dead = !0, this.char = "💀", this.draw(), this.game.atlas[this.game.x][this.game.y].enemies.forEach(function (t) {
          t.aggressive = !1;
        }), setInterval(function () {
          _this2.game.update();
        }, 100), this.output.log(this.name + " received their 🏜️Just Deserts."), this.outputEnd());
      }
    }, {
      key: "outputEnd",
      value: function outputEnd() {
        var _this3 = this;

        if (this.output.log("---"), this.win ? this.output.log(this.name + " survived " + this.game.tick + " turns and reached level " + this.level + ".") : this.output.log(this.name + " survived " + this.game.tick + " turns and reached level " + this.level + " before they were defeated by " + this.lastAttacked + "."), Object.keys(this.kills).length) {
          var _t21 = "";
          Object.keys(this.kills).forEach(function (e, s) {
            _t21 += e + ": " + _this3.kills[e] + "<br>";
          }), this.output.log(this.name + " defeated:"), this.output.log(_t21);
        }

        this.score = (this.game.tick + 666 * Object.keys(this.kills).length + 3 * this.maxHealth) * (this.game.level + 1), this.output.log("The final score is " + o(this.score) + "."), this.output.addHighscore(this);
      }
    }]);

    return m;
  }();

  var d = /*#__PURE__*/function () {
    function d(t, e, s, o, a, l, r) {
      _classCallCheck(this, d);

      this.width = s, this.height = o, this.output = l, this.output.clear(), this.attributes = r, this.atlas = h(100, 100), this.mapCreator = new p(a, this.width, this.height, this.output, this, e + t), this.x = 50, this.y = 50, this.level = 0, this.atlas[this.x][this.y] = this.mapCreator.create(this.level), this.tick = 0;
      var n = i(0, 50),
          u = i(0, 10),
          c = 10 - Math.floor(n / 10);
      this.player = new m(t, e, 100, 25, 25, 100 + n, 100 + n, 5 + u + c, 15 - u + c, 1, this.atlas[this.x][this.y], this.output, this.attributes, this), this.startInput();
    }

    _createClass(d, [{
      key: "startInput",
      value: function startInput() {
        var _this4 = this;

        document.querySelector("#controls").onclick = function (t) {
          switch (t.target.className) {
            case "n":
              _this4.player.move(0, -1);

              break;

            case "e":
              _this4.player.move(1, 0);

              break;

            case "s":
              _this4.player.move(0, 1);

              break;

            case "w":
              _this4.player.move(-1, 0);

              break;

            case "nw":
              _this4.player.move(-1, -1);

              break;

            case "ne":
              _this4.player.move(1, -1);

              break;

            case "sw":
              _this4.player.move(-1, 1);

              break;

            case "se":
              _this4.player.move(1, 1);

          }

          _this4.update();
        }, document.addEventListener("keydown", function (t) {
          switch (t.key) {
            case "ArrowUp":
            case "k":
            case "8":
              _this4.player.move(0, -1), _this4.update();
              break;

            case "ArrowRight":
            case "l":
            case "6":
              _this4.player.move(1, 0), _this4.update();
              break;

            case "ArrowDown":
            case "j":
            case "2":
              _this4.player.move(0, 1), _this4.update();
              break;

            case "ArrowLeft":
            case "h":
            case "4":
              _this4.player.move(-1, 0), _this4.update();
              break;

            case "y":
            case "7":
              _this4.player.move(-1, -1), _this4.update();
              break;

            case "u":
            case "9":
              _this4.player.move(1, -1), _this4.update();
              break;

            case "b":
            case "1":
              _this4.player.move(-1, 1), _this4.update();
              break;

            case "n":
            case "3":
              _this4.player.move(1, 1), _this4.update();
              break;

            case "Enter":
            case " ":
            case ".":
            case "5":
              _this4.update();

          }
        }, !1);
      }
    }, {
      key: "stopInput",
      value: function stopInput() {
        document.addEventListener("keydown", function (t) {
          t.stopPropagation();
        }, !0), document.querySelector("#controls").onclick = function (t) {
          t.stopPropagation();
        };
      }
    }, {
      key: "update",
      value: function update() {
        var _this5 = this;

        this.atlas[this.x][this.y].enemies && (this.atlas[this.x][this.y].enemies.forEach(function (t, e, s) {
          t.remove || (t.timePool += t.speed / _this5.player.speed, t.update());
        }), this.atlas[this.x][this.y].enemies.forEach(function (t, e, s) {
          t.remove && s.splice(e, 1);
        })), this.won || this.player.update(), this.tick++;
      }
    }, {
      key: "moveMap",
      value: function moveMap(t, e) {
        this.atlas[this.x][this.y].clear(this.player.prevX, this.player.prevY), this.x = this.x + t, this.y = this.y + e;
        var s = this.x - 50,
            i = this.y - 50;
        this.level = Math.max(Math.abs(s), Math.abs(i)), this.atlas[this.x][this.y] ? this.atlas[this.x][this.y].redraw() : this.atlas[this.x][this.y] = this.mapCreator.create(this.level), this.player.map = this.atlas[this.x][this.y], 1 === t ? this.player.x = 0 : -1 === t && (this.player.x = this.width - 1), 1 === e ? this.player.y = 0 : -1 === e && (this.player.y = this.height - 1), this.atlas[this.x][this.y].clear(this.player.x, this.player.y);
      }
    }, {
      key: "win",
      value: function win() {
        var _this6 = this;

        this.won = !0, this.stopInput(), this.output.log("---"), this.output.log(this.player.name + " has defeated the 🚌Bus."), this.output.log("All is well."), this.player.win = !0, this.player.outputEnd(), setInterval(function () {
          _this6.update();
        }, 100);
      }
    }]);

    return d;
  }();

  var y = "";

  for (var _t22 = 0; _t22 < 50; _t22++) {
    for (var _e105 = 0; _e105 < 50; _e105++) {
      y += '<span style="color: rgba(255, 255, 255, 0.3)" data-x="' + _e105 + '" data-y="' + _t22 + '">.</span>';
    }

    y += "<br>";
  }

  document.querySelector("#map > .box").innerHTML = y;
  var g = new ( /*#__PURE__*/function () {
    function _class(t, e) {
      _classCallCheck(this, _class);

      this.target = t, this.debug = e;
    }

    _createClass(_class, [{
      key: "log",
      value: function log(t, e) {
        this.debug && e ? (this.target.innerHTML = "" === this.target.innerHTML ? this.target.innerHTML + "DEBUG: " + t : this.target.innerHTML + "<br><br>DEBUG: " + t, this.target.scrollTop = this.target.scrollHeight) : e || (this.target.innerHTML = "" === this.target.innerHTML ? this.target.innerHTML + t : this.target.innerHTML + "<br><br>" + t, this.target.scrollTop = this.target.scrollHeight);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.target.innerHTML = "";
      }
    }, {
      key: "addHighscore",
      value: function addHighscore(t) {
        var e = JSON.parse(localStorage.getItem("JustDesertsHighscores"));
        e || (e = []), e.push({
          name: t.name,
          score: t.score
        }), e = e.sort(function (t, e) {
          return e.score - t.score;
        }), localStorage.setItem("JustDesertsHighscores", JSON.stringify(e.slice(0, 5)));
      }
    }, {
      key: "showHighscores",
      value: function showHighscores() {
        var _this7 = this;

        var t = JSON.parse(localStorage.getItem("JustDesertsHighscores"));
        t && t.length && (this.log("---"), this.log("Highscores:"), t.forEach(function (t, e) {
          _this7.log(e + 1 + ". " + t.name + ": " + o(t.score));
        }));
      }
    }]);

    return _class;
  }())(document.querySelector("#output .box"), !0),
      f = new ( /*#__PURE__*/function () {
    function _class2(t) {
      _classCallCheck(this, _class2);

      this.target = t;
    }

    _createClass(_class2, [{
      key: "update",
      value: function update(t, e) {
        this.target.querySelector("#" + t + " .current").innerHTML = e;
      }
    }, {
      key: "updateExp",
      value: function updateExp(t, e) {
        e >= 1 && (e = 0), this.target.querySelector(".level span").innerHTML = t, this.target.querySelector(".level .progress").style.right = 100 - 100 * e + "%";
      }
    }]);

    return _class2;
  }())(document.querySelector("#attributes .box"));
  g.log('Welcome to 🏜️Just Deserts, created for the <a target="_blank" href="https://itch.io/jam/7drl-challenge-2020">7DRL Challenge 2020</a>.'), g.log("You can use the ⬇️arrow keys, 🔢numpad, 💻Vim keys or mouse/touch for movement. Enter, space, period and 5 will 💤rest."), g.showHighscores();

  var w = function w(t) {
    if ("Enter" === t.key) {
      var _t23 = document.querySelectorAll(".modal.look .choices div");

      _t23[i(0, _t23.length - 1)].click();
    }
  };

  var x = "Player";
  document.querySelector(".modal.name input").focus(), document.querySelector(".modal.name input").addEventListener("keydown", function (t) {
    "Enter" === t.key && (x = document.querySelector(".modal.name input").value ? document.querySelector(".modal.name input").value : x, document.querySelector(".modal.name").style.display = "none", document.querySelector(".modal.look").style.display = "block", setTimeout(function () {
      document.addEventListener("keydown", w);
    }));
  }), document.querySelector(".modal.look .choices").onclick = function (t) {
    document.querySelector(".modal.look").style.display = "none", document.removeEventListener("keydown", w);
    new d(x, t.target.innerHTML, 50, 50, document.querySelector("#map > .box"), g, f);
  };
}]);