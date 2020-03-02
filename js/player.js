export default class Player {
  constructor(name, char, x, y, health, maxHealth, attack, defense, map, output, attributes) {
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
    this.attributes = attributes;

    this.attributes.update('health', this.health + '/' + this.maxHealth);
    this.attributes.update('attack', this.attack);
    this.attributes.update('defense', this.defense);

    this.draw();
  }

  move(x, y) {
    this.prevX = this.x;
    this.prevY = this.y;
    this.x = this.x + x;
    this.y = this.y + y;
  }

  moveBack() {
    this.x = this.prevX;
    this.y = this.prevY;
  }

  draw() {
    this.map.clear(this.prevX, this.prevY);
    this.map.draw(this.char, this.x, this.y, true);
  }

  takeDamage(damage, name) {
    const totalDamage = (this.defense >= damage) ? 0 : this.defense - damage;
  
    this.output.log(this.name + ' has taken ' + totalDamage + ' damage from ' + name);

    this.updateHealth(totalDamage);
  }

  updateHealth(delta) {
    this.health += delta;  
    this.attributes.update('health', this.health + '/' + this.maxHealth);

    if (this.health <= 0) this.die();
  }

  die() {
    this.char = '💀';
    this.output.log(this.name + ' has received their Just Deserts.');
    this.draw();
  }
}
