import { getRandomInt, createArray } from './utility.js';
import MapCreator from './map-creator.js';
import Player from './player.js';

export default class Game {
  constructor(name, char, mapTarget, output, attributes) {
    this.output = output;
    this.attributes = attributes;
    this.atlas = createArray(100, 100);
    this.mapCreator = new MapCreator(mapTarget, 50, 50, this.output);
    this.x = 50;
    this.y = 50;
    this.atlas[this.x][this.y] = this.mapCreator.create(0);

    const playerHealthAddition = getRandomInt(0, 50);
    const playerAttributeDiff = getRandomInt(0, 10);
    const playerAttributeAddition = 10 - Math.floor(playerHealthAddition / 10);

    this.player = new Player(
      name,
      char,
      25,
      25,
      100 + playerHealthAddition,
      100 + playerHealthAddition,
      5 + playerAttributeDiff + playerAttributeAddition,
      5 + 10 - playerAttributeDiff + playerAttributeAddition,
      1,
      this.atlas[this.x][this.y],
      this.output,
      this.attributes
    );


    this.startInput();
  }

  startInput() {
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;

      switch (keyName) {
        case 'ArrowUp':
        case 'k':
          this.player.move(0, -1);
          break;
        case 'ArrowRight':
        case 'l':
          this.player.move(1, 0);
          break;
        case 'ArrowDown':
        case 'j':
          this.player.move(0, 1);
          break;
        case 'ArrowLeft':
        case 'h':
          this.player.move(-1, 0);
          break;
        case 'y':
          this.player.move(-1, -1);
          break;
        case 'u':
          this.player.move(1, -1);
          break;
        case 'b':
          this.player.move(-1, 1);
          break;
        case 'n':
          this.player.move(1, 1);
          break;
      }

      this.update();
    }, false);
  }

  update() {
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
}
