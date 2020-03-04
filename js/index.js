import { getRandomInt } from './utility.js';
import Map from './map.js';
import Output from './output.js';
import Attributes from './attributes.js';
import Player from './player.js';
import Wall from './wall.js';
import Tile from './tile.js';
import Enemy from './enemy.js';

const debug = true;

const output = new Output(document.querySelector('#output .box'), debug);
const map = new Map(document.querySelector('#map .box'), 50, 50, output);
const attributes = new Attributes(document.querySelector('#attributes .box'));

const tiles = [];
for (let i = 0; i < 50; i++) {
  tiles.push(new Tile(
    'Road',
    '≡',
    i,
    28,
    '#d60',
    map
  ));
}

const walls = [];
for (let i = 0; i < 500; i++) {
  const x = getRandomInt(0, 50);
  const y = getRandomInt(0, 50);

  if (!map.checkAllCollision({x: x, y: y})) {
    walls.push(new Wall(
      'Cactus',
      '🌵',
      x,
      y,
      10,
      map,
      output
    ));
  }
}

const enemies = [];
for (let i = 0; i < 20; i++) {
  const x = getRandomInt(0, 50);
  const y = getRandomInt(0, 50);
  
  if (!map.checkCollision({x: x, y: y})) {
    enemies.push(new Enemy(
      'Lizard',
      '🦎',
      x, 
      y,
      10,
      10,
      0,
      0,
      0.5,
      map,
      output
    ));
  }
}

enemies.push(new Enemy(
  'Lizard',
  '🦎',
  getRandomInt(20, 24), 
  28,
  0,
  10,
  10,
  0,
  0,
  map,
  output
));

enemies.push(new Enemy(
  'Bus',
  '🚌',
  25,
  28,
  1000000,
  1000000,
  1000000,
  1000000,
  2,
  map,
  output,
  function() {
    while (this.timePool >= 1) {
      if (this.x - 2 < 0) {
        this.map.clear(this.x, this.y);
        this.remove = true;
      } else {
        this.move(-1, 0);
      }

      this.timePool--;
    }
  },
  true
));

const playerHealthAddition = getRandomInt(0, 50);
const playerAttributeDiff = getRandomInt(0, 10);
const playerAttributeAddition = 10 - Math.floor(playerHealthAddition / 10);

const player = new Player(
  'Player',
  '🧔🏽',
  25,
  25,
  100 + playerHealthAddition,
  100 + playerHealthAddition,
  5 + playerAttributeDiff + playerAttributeAddition,
  5 + 10 - playerAttributeDiff + playerAttributeAddition,
  1,
  map,
  output,
  attributes
);

walls.push(new Wall(
  'Cactus',
  '🌵',
  25,
  26,
  20,
  map,
  output
));

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  switch (keyName) {
    case 'ArrowUp':
    case 'k':
      player.move(0, -1);
      break;
    case 'ArrowRight':
    case 'l':
      player.move(1, 0);
      break;
    case 'ArrowDown':
    case 'j':
      player.move(0, 1);
      break;
    case 'ArrowLeft':
    case 'h':
      player.move(-1, 0);
      break;
    case 'y':
      player.move(-1, -1);
      break;
    case 'u':
      player.move(1, -1);
      break;
    case 'b':
      player.move(-1, 1);
      break;
    case 'n':
      player.move(1, 1);
      break;
  }

  enemies.forEach((enemy, i, array) => {
    if (!enemy.remove) {
      enemy.timePool += enemy.speed / player.speed;

      enemy.update();
    }
  });

  enemies.forEach((enemy, i, array) => {
    if (enemy.remove) {
      array.splice(i, 1); 
    }
  });
}, false);

output.log('The bus leaves while you are taking a rest break.');
