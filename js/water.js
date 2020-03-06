export default class Water {
  constructor(name, char, x, y, map, output) {
    this.x = x,
    this.y = y,
    this.name = name;
    this.char = char;
    this.map = map;
    this.output = output;

    this.draw();
  }

  draw() {
    this.map.draw(this);
  }
}
