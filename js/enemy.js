import { getRandomInt } from './utility.js';

export default class Enemy {
  constructor(name, char, x, y, health, maxHealth, attack, defense, map, output, update) {
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
    this.map = map;
    this.output = output;
    this.customUpdate = update;

    this.draw();
  }

  update() {
    if (this.customUpdate) {
      this.customUpdate();
    } else {
      if (this.health > 0) {
        this.move(getRandomInt(0, 3) - 1, getRandomInt(0, 3) - 1);
      }
    }
  }

  move(x, y) {
    this.prevX = this.x;
    this.prevY = this.y;

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
  }

  moveBack() {
    this.x = this.prevX;
    this.y = this.prevY;
  }

  draw() {
    this.map.clear(this.prevX, this.prevY);
    this.map.draw(this);
  }

  takeDamage(damage, name) {
    const totalDamage = (this.defense >= damage) ? 0 : damage - this.defense;
  
    this.output.log(this.name + ' takes ' + totalDamage + ' damage from ' + name);

    this.updateHealth(-totalDamage);
  }

  updateHealth(delta) {
    this.health += delta;  

    if (this.health <= 0) this.die();
  }

  die() {
    this.remove = true;
    this.output.log(this.name + ' received their Just Deserts.');
  }
}
