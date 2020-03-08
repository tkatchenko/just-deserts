import { createArray } from './utility.js';
import Tile from './tile.js';

export default class Map {
  constructor(target, width, height, color, output, game) {
    this.target = target;
    this.width = width;
    this.height = height;
    this.color = color;
    this.output = output;
    this.game = game;
    this.objects = createArray(width, height);
    this.tiles = createArray(width, height);

    let mapOutput = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        mapOutput += '<span style="color: rgba(255, 255, 255, 0.3)" data-x="' + x + '" data-y="' + y + '">.</span>';
      }
      mapOutput += '<br>';
    }

    document.querySelector('#map').className = '';
    document.querySelector('#map').classList.add(this.color);
    this.target.innerHTML = mapOutput;

    if (this.game.y === 50) {
      const tiles = [];
      for (let i = 0; i < 50; i++) {
        tiles.push(new Tile(
          'Road',
          '≡',
          i,
          28,
          'rgba(0, 0, 0, 0.3)',
          this
        ));
      }
    }
  }

  draw(object, focus) {
    const el = document.querySelector('#map > .box span[data-x="' + object.x + '"][data-y="' + object.y + '"]');

    el.innerHTML = object.char;

    if (object.constructor.name === 'Tile') {
      el.style.color = object.color;
      this.tiles[object.x][object.y] = object;
    } else {
      el.style.color = null;
      this.objects[object.x][object.y] = object;
    }

    if (focus) {
      const wrapper = document.querySelector('#map > .box');
      const elTop = el.offsetTop - wrapper.offsetTop;
      const elLeft = el.offsetLeft - wrapper.offsetLeft;

      wrapper.scrollTop = elTop - (wrapper.offsetHeight / 2) + 10;
      wrapper.scrollLeft = elLeft - (wrapper.offsetWidth / 2) + 10;
    }
  }

  clear(x, y) {
    const el = document.querySelector('#map > .box span[data-x="' + x + '"][data-y="' + y + '"]');

    if (this.tiles[x][y]) {
      el.innerHTML = this.tiles[x][y].char;
      el.style.color = this.tiles[x][y].color;
    } else {
      el.innerHTML = '.';
      el.style.color = 'rgba(255, 255, 255, 0.3)';
    }

    this.objects[x][y] = null;
  }

  redraw() {
    let mapOutput = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let char = '.';
        let color = null;

        if (this.objects[x][y] && this.objects[x][y].constructor.name !== 'Player') {
          char = this.objects[x][y].char;
        } else if (this.tiles[x][y]) {
          char = this.tiles[x][y].char;
          color = this.tiles[x][y].color;
        } else if (char === '.') {
          color = 'rgba(255, 255, 255, 0.3)';
        }

        color = color ? 'style="color:' + color + '"' : null;

        mapOutput += '<span ' + color + ' data-x="' + x + '" data-y="' + y + '">' + char + '</span>';
      }
      mapOutput += '<br>';
    }

    document.querySelector('#map').className = '';
    document.querySelector('#map').classList.add(this.color);
    this.target.innerHTML = mapOutput;
  }

  addDeath(x, y) {
    const el = document.querySelector('#map > .box span[data-x="' + x + '"][data-y="' + y + '"]');

    this.clear(x, y);
    this.tiles[x][y] = {
      char: '🦴'
    };
    el.innerHTML = this.tiles[x][y].char;
    el.style.color = null;
  }

  checkCollision(object) {
    return this.objects[object.x][object.y];
  }

  checkAllCollision(object) {
    return this.objects[object.x][object.y] || this.tiles[object.x][object.y];
  }
}
