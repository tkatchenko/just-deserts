import { getRandomInt, numberWithCommas } from './utility.js';

export default class Enemy {
  constructor(name, char, x, y, health, maxHealth, attack, defense, speed, map, output, update, unstoppable, attackType) {
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
    this.customUpdate = update;
    this.unstoppable = unstoppable;
    this.attackType = attackType;

    this.timePool = 0;

    this.draw();
  }

  update() {
    if (this.customUpdate) {
      this.customUpdate();
    } else {
      while (this.timePool >= 1) {
        this.move(getRandomInt(0, 3) - 1, getRandomInt(0, 3) - 1);

        this.timePool--;
      }
    }
  }

  move(x, y) {
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

  checkCollision() {
    const collision = this.map.checkCollision(this);

    if (collision) {
      if (collision.constructor.name === 'Wall') {
        this.moveBack();
      } else if (collision.constructor.name === 'Enemy' || collision.constructor.name === 'Player') {
        if (!this.unstoppable) {
          this.moveBack();
        }

        if (collision.constructor.name === 'Player' || this.unstoppable) {
          const power = this.attack + this.defense;
          const collisionPower = collision.attack + collision.defense;

          let hitChance = (power / collisionPower);

          const hits = (Math.random() < hitChance) ? true : false;

          if (hits) {
            const attackType = (this.attackType) ? this.attackType : 'hits';
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

  moveBack() {
    this.x = this.prevX;
    this.y = this.prevY;
  }

  draw() {
    this.map.draw(this);
  }

  takeDamage(damage, name, unstoppable) {
    let totalDamage = (this.defense >= damage) ? 0 : damage - getRandomInt(this.defense * 0.8, this.defense);
    if (unstoppable) totalDamage = damage;
  
    this.output.log(this.name + ' takes ' + ((totalDamage) ? numberWithCommas(totalDamage) : 'no') + ' damage from ' + name + '.');

    this.updateHealth(-totalDamage);
  }

  updateHealth(delta) {
    this.health += delta;  

    if (this.health <= 0) this.die();
  }

  die() {
    this.dead = true;
    this.remove = true;
    this.map.addDeath(this.x, this.y);
    this.output.log(this.name + ' received their Just Deserts.');
  }
}
