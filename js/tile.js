export default class Tile {
  constructor(name, char, x, y, color, map) {
    this.name = char + name;
    this.char = char;
    this.x = x;
    this.y = y;
    this.color = color;
    this.map = map;

    this.draw();
  }

  draw() {
    this.map.draw(this);
  }
}
