import { createArray } from './utility.js';

export default class Map {
  constructor(target, width, height, output) {
    this.target = target;
    this.width = width;
    this.height = height;
    this.output = output;
    this.objects = createArray(width, height);
    this.tiles = createArray(width, height);
    this.enemies = [];

    let mapOutput = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        mapOutput += '<span data-x="' + x + '" data-y="' + y + '">.</span>';
      }
      mapOutput += '<br>';
    }

    this.target.innerHTML = mapOutput;
  }

  draw(object, focus) {
    const el = document.querySelector('#map .box span[data-x="' + object.x + '"][data-y="' + object.y + '"]');

    el.innerHTML = object.char;

    if (object.constructor.name === 'Tile') {
      el.style.color = object.color;
      this.tiles[object.x][object.y] = object;
    } else {
      this.objects[object.x][object.y] = object;
    }

    if (focus) {
      const wrapper = document.querySelector('#map .box');
      const elTop = el.offsetTop - wrapper.offsetTop;
      const elLeft = el.offsetLeft - wrapper.offsetLeft;

      wrapper.scrollTop = elTop - (wrapper.offsetHeight / 2);
      wrapper.scrollLeft = elLeft - (wrapper.offsetWidth / 2);
    }
  }

  clear(x, y) {
    const el = document.querySelector('#map .box span[data-x="' + x + '"][data-y="' + y + '"]');

    if (this.tiles[x][y]) {
      el.innerHTML = this.tiles[x][y].char;
    } else {
      el.innerHTML = '.';
    }

    this.objects[x][y] = null;
  }

  addDeath(x, y) {
    const el = document.querySelector('#map .box span[data-x="' + x + '"][data-y="' + y + '"]');

    this.clear(x, y);
    this.tiles[x][y] = {
      char: '🦴'
    };
    el.innerHTML = this.tiles[x][y].char;
  }

  checkCollision(object) {
    return this.objects[object.x][object.y];
  }

  checkAllCollision(object) {
    return this.objects[object.x][object.y] || this.tiles[object.x][object.y];
  }
}
