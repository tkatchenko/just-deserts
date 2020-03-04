import { numberWithCommas } from './utility.js';

export default class Player {
  constructor(name, char, x, y, health, maxHealth, attack, defense, speed, map, output, attributes) {
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

    this.attributes.update('health', this.health + '/' + this.maxHealth);
    this.attributes.update('attack', this.attack);
    this.attributes.update('defense', this.defense);

    this.draw();
  }

  move(x, y) {
    if (!this.dead) {
      this.prevX = this.x;
      this.prevY = this.y;
      this.x = this.x + x;
      this.y = this.y + y;

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
  
    this.output.log(this.name + ' takes ' + ((totalDamage) ? numberWithCommas(totalDamage) : 'no') + ' damage from ' + name);

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

  die() {
    this.dead = true;
    this.char = '💀';
    this.output.log(this.name + ' received their Just Deserts.');
    this.draw();
  }
}
