import { getRandomInt, numberWithCommas, doubler } from './utility.js';

export default class Player {
  constructor(name, char, startingExp, x, y, health, maxHealth, attack, defense, speed, map, output, attributes, game) {
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
        this.output.log(this.name + ' walks into ' + collision.name + '.');
        this.takeDamage(collision.attack, collision.name);
      } else if (collision.constructor.name === 'Water') {
        this.moveBack();
        this.updateHydration(20);
        this.output.log(this.name + ' drinks from ' + collision.name + '.');
      } else if (collision.constructor.name === 'Enemy') {
        this.moveBack();
        const power = this.attack + this.defense;
        const collisionPower = collision.attack + collision.defense;

        let hitChance = (power / collisionPower);

        const hits = (Math.random() < hitChance) ? true : false;

        if (hits) {
          this.output.log(this.name + ' punches ' + collision.name + '.');
          collision.takeDamage(this.attack, this.name);

          if (collision.dead) {
            this.addKill(collision);

            this.updateExp(1.5 * ((collision.attack + collision.defense) / (3 * (1 - ((this.game.level + 1) / 10.5)))));

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

  moveBack() {
    this.x = this.prevX;
    this.y = this.prevY;
  }

  draw() {
    this.map.clear(this.prevX, this.prevY);
    this.map.draw(this, true);
  }

  update() {
    if (!this.dead) {
      this.dehydrate();
      this.heal();
    }
  }

  addKill(object) {
    if (this.kills[object.name]) {
      this.kills[object.name]++;
    } else {
      this.kills[object.name] = 1;
    }
  }

  takeDamage(damage, name, unstoppable) {
    let totalDamage = (this.defense >= damage) ? 0 : damage - getRandomInt(this.defense * 0.8, this.defense);
    if (unstoppable) totalDamage = damage;
  
    this.output.log(this.name + ' takes ' + ((totalDamage) ? numberWithCommas(totalDamage) : 'no') + ' damage from ' + name + '.');

    this.lastAttacked = name;
    this.updateHealth(-totalDamage);
  }

  dehydrate() {
    if ((this.game.tick - this.lastDrink) % 3 === 2) {
      this.hydration--;
      this.lastAttacked = '⌛Dehydration';
      
      const el = document.querySelector('#hydration');

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
        const healthLoss = Math.floor(this.maxHealth / 10);
        this.output.log(this.name + ' is completely dehydrated and loses ' + healthLoss + ' health.');
        this.updateHealth(-healthLoss);
      }

      this.attributes.update('hydration', this.hydration);
    }
  }

  updateHydration(delta) {
    this.hydration += delta;
    if (this.hydration > 100) this.hydration = 100;

    const el = document.querySelector('#hydration');

    if (this.hydration > 40) {
      el.classList.remove('orange');
      el.classList.remove('red');
    }

    this.lastDrink = this.game.tick + 1;
    this.attributes.update('hydration', this.hydration);
  }

  heal() {
    if (!this.dead) {
      this.updateHealth(Math.ceil(this.level / 2));
    }
  }

  updateHealth(delta) {
    this.health += delta;  
    if (this.health > this.maxHealth) this.health = this.maxHealth;
    if (this.health < 0) this.health = 0;
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

    const percent = this.health / this.maxHealth;
    const el = document.querySelector('#health');

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

  updateExp(delta) {
    this.exp += delta;

    const baseExp = 100;
    let thisLevel = doubler(baseExp, this.level - 1);
    let nextLevel = doubler(baseExp, this.level);

    while (this.exp >= nextLevel) {
      this.level++;
      const newHealth = Math.floor((this.maxHealth * 1.5) - getRandomInt(0, this.maxHealth * 0.2));
      this.health = this.health + newHealth - this.maxHealth;
      this.maxHealth = newHealth;
      this.attack = Math.floor((this.attack * 1.5) - getRandomInt(0, this.attack * 0.2));
      this.defense = Math.floor((this.defense * 1.5) - getRandomInt(0, this.defense * 0.2));

      this.attributes.update('health', this.health + '/' + this.maxHealth);
      this.attributes.update('attack', this.attack);
      this.attributes.update('defense', this.defense);

      this.output.log(this.name + ' reaches level ' + this.level + '.');

      thisLevel = doubler(baseExp, this.level - 1);
      nextLevel = doubler(baseExp, this.level);
    }

    const levelDiff = nextLevel - thisLevel;
    const progress = (this.exp - thisLevel) / levelDiff;

    this.attributes.updateExp(this.level, progress);
  }

  die() {
    if (!this.dead) {
      this.dead = true;
      this.char = '💀';
      this.draw();

      this.game.atlas[this.game.x][this.game.y].enemies.forEach((enemy) => {
        enemy.aggressive = false;
      });

      setInterval(() => {
        this.game.update();
      }, 100);

      this.output.log(this.name + ' received their 🏜️Just Deserts.');
      this.outputEnd();
    }
  }

  outputEnd() {
    this.output.log('---');
    if (this.win) {
      this.output.log(this.name + ' survived ' + this.game.tick + ' turns and reached level ' + this.level + '.');
    } else {
      this.output.log(this.name + ' survived ' + this.game.tick + ' turns and reached level ' + this.level + ' before they were defeated by ' + this.lastAttacked + '.');
    }
    if (Object.keys(this.kills).length) {
      let killsText = '';
      Object.keys(this.kills).forEach((el, i) => {
        killsText += el + ': ' + this.kills[el] + '<br>';
      });
      this.output.log(this.name + ' defeated:');
      this.output.log(killsText);
    }

    this.score = (this.game.tick + Object.keys(this.kills).length * 666 + this.maxHealth * 3) * (this.game.level + 1);
    this.output.log('The final score is ' + numberWithCommas(this.score) + '.');

    this.output.addHighscore(this);
  }
}
