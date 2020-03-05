import { numberWithCommas, doubler } from './utility.js';

export default class Player {
  constructor(name, char, x, y, health, maxHealth, attack, defense, speed, map, output, attributes, game) {
    this.name = name;
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

    this.attributes.update('health', this.health + '/' + this.maxHealth);
    this.attributes.update('attack', this.attack);
    this.attributes.update('defense', this.defense);

    this.updateExp(100);

    this.draw();
  }

  move(x, y) {
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

  checkCollision() {
    const collision = this.map.checkCollision(this);

    if (collision) {
      if (collision.constructor.name === 'Wall') {
        this.moveBack();
        this.takeDamage(collision.attack, collision.name);
      } else if (collision.constructor.name === 'Enemy') {
        this.moveBack();
        collision.takeDamage(this.attack, this.name);

        if (collision.dead) {
          this.updateExp(collision.attack + collision.defense);
        }
      }
    }

    this.draw();
  }

  moveBack() {
    this.x = this.prevX;
    this.y = this.prevY;
  }

  draw() {
    this.map.clear(this.prevX, this.prevY);
    this.map.draw(this, true);
  }

  takeDamage(damage, name) {
    const totalDamage = (this.defense >= damage) ? 0 : damage - this.defense;
  
    this.output.log(this.name + ' takes ' + ((totalDamage) ? numberWithCommas(totalDamage) : 'no') + ' damage from ' + name + '.');

    this.updateHealth(-totalDamage);
  }

  updateHealth(delta) {
    this.health += delta;  
    this.attributes.update('health', this.health + '/' + this.maxHealth);

    if (delta < 0) {
      const el = document.querySelector('#overlay');

      el.classList.add('show');

      setTimeout(() => {
        if (!this.dead) {
          el.classList.remove('show');
        }
      }, 100);
    }

    if (this.health <= 0) this.die();
  }

  updateExp(delta) {
    this.exp += delta;

    const baseExp = 100;
    const thisLevel = doubler(baseExp, this.level - 1);
    const nextLevel = doubler(baseExp, this.level);
    const levelDiff = nextLevel - thisLevel;

    const progress = (this.exp - thisLevel) / levelDiff;

    if (this.exp >= nextLevel) {
      this.level++;
      this.output.log(this.name + ' reaches level ' + this.level + '.');
    }

    this.attributes.updateExp(this.level, progress);
  }

  die() {
    this.dead = true;
    this.char = '💀';
    this.output.log(this.name + ' received their Just Deserts.');
    this.draw();
  }
}
