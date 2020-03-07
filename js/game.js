import { getRandomInt, createArray } from './utility.js';
import MapCreator from './map-creator.js';
import Player from './player.js';

export default class Game {
  constructor(name, char, width, height, mapTarget, output, attributes) {
    this.width = width;
    this.height = height;
    this.output = output;
    this.attributes = attributes;
    this.atlas = createArray(100, 100);
    this.mapCreator = new MapCreator(mapTarget, this.width, this.height, this.output, this);
    this.x = 50;
    this.y = 50;
    this.level = 0;
    this.atlas[this.x][this.y] = this.mapCreator.create(this.level);
    this.tick = 0;

    const playerHealthAddition = getRandomInt(0, 50);
    const playerAttributeDiff = getRandomInt(0, 10);
    const playerAttributeAddition = 10 - Math.floor(playerHealthAddition / 10);

    this.player = new Player(
      name,
      char,
      100,
      25,
      25,
      100 + playerHealthAddition,
      100 + playerHealthAddition,
      5 + playerAttributeDiff + playerAttributeAddition,
      5 + 10 - playerAttributeDiff + playerAttributeAddition,
      1,
      this.atlas[this.x][this.y],
      this.output,
      this.attributes,
      this
    );


    this.startInput();
  }

  startInput() {
    document.querySelector('#controls').onclick = (e) => {
      switch (e.target.className) {
        case 'n':
          this.player.move(0, -1);
          break;
        case 'e':
          this.player.move(1, 0);
          break;
        case 's':
          this.player.move(0, 1);
          break;
        case 'w':
          this.player.move(-1, 0);
          break;
        case 'nw':
          this.player.move(-1, -1);
          break;
        case 'ne':
          this.player.move(1, -1);
          break;
        case 'sw':
          this.player.move(-1, 1);
          break;
        case 'se':
          this.player.move(1, 1);
          break;
      }

      this.update();
    };

    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp':
        case 'k':
        case '8':
          this.player.move(0, -1);
          this.update();
          break;
        case 'ArrowRight':
        case 'l':
        case '6':
          this.player.move(1, 0);
          this.update();
          break;
        case 'ArrowDown':
        case 'j':
        case '2':
          this.player.move(0, 1);
          this.update();
          break;
        case 'ArrowLeft':
        case 'h':
        case '4':
          this.player.move(-1, 0);
          this.update();
          break;
        case 'y':
        case '7':
          this.player.move(-1, -1);
          this.update();
          break;
        case 'u':
        case '9':
          this.player.move(1, -1);
          this.update();
          break;
        case 'b':
        case '1':
          this.player.move(-1, 1);
          this.update();
          break;
        case 'n':
        case '3':
          this.player.move(1, 1);
          this.update();
          break;
        case 'Enter':
        case ' ':
        case '.':
          this.update();
          break;
      }
    }, false);
  }

  update() {
    if (this.atlas[this.x][this.y].enemies) {
      this.atlas[this.x][this.y].enemies.forEach((enemy, i, array) => {
        if (!enemy.remove) {
          enemy.timePool += enemy.speed / this.player.speed;

          enemy.update();
        }
      });

      this.atlas[this.x][this.y].enemies.forEach((enemy, i, array) => {
        if (enemy.remove) {
          array.splice(i, 1); 
        }
      });
    }

    this.player.update();
    this.tick++;
  }

  moveMap(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;

    const realX = this.x - 50;
    const realY = this.y - 50;

    this.level = Math.max(Math.abs(realX), Math.abs(realY));

    if (!this.atlas[this.x][this.y]) {
      this.atlas[this.x][this.y] = this.mapCreator.create(this.level);
    } else {
      this.atlas[this.x][this.y].redraw();
    }

    this.player.map = this.atlas[this.x][this.y];

    if (x === 1) {
      this.player.x = 0;
    } else if (x === -1) {
      this.player.x = this.width - 1;
    }

    if (y === 1) {
      this.player.y = 0;
    } else if (y === -1) {
      this.player.y = this.height - 1;
    }

    this.atlas[this.x][this.y].clear(this.player.x, this.player.y);
  }
}
