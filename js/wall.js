export default class Wall {
  constructor(name, char, x, y, attack, map, output) {
    this.name = char + name;
    this.char = char;
    this.x = x;
    this.y = y;
    this.attack = attack;
    this.map = map;
    this.output = output;

    this.draw();
  }

  draw() {
    this.map.draw(this);
  }
}
