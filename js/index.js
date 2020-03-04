import 'babel-polyfill';
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
const map = new Map(document.querySelector('#map .box'), 100, 100, output);
const attributes = new Attributes(document.querySelector('#attributes .box'));

const tiles = [];
for (let i = 0; i < 100; i++) {
  tiles.push(new Tile(
    'Road',
    '≡',
    i,
    53,
    '#d60',
    map
  ));
}

const walls = [];
for (let i = 0; i < 1000; i++) {
  const x = getRandomInt(0, 100);
  const y = getRandomInt(0, 100);

  if (!map.checkAllCollision({x: x, y: y})) {
    walls.push(new Wall(
      'Cactus',
      '🌵',
      x,
      y,
      50,
      map,
      output
    ));
  }
}

const enemies = [];
for (let i = 0; i < 40; i++) {
  const x = getRandomInt(0, 100);
  const y = getRandomInt(0, 100);
  
  if (!map.checkCollision({x: x, y: y})) {
    enemies.push(new Enemy(
      'Lizard',
      '🦎',
      getRandomInt(0, 100), 
      getRandomInt(0, 100),
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
  getRandomInt(44, 48), 
  53,
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
  50,
  53,
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

const player = new Player(
  'Player',
  '🧔🏽',
  50,
  50,
  100,
  150,
  10,
  30,
  1,
  map,
  output,
  attributes
);

walls.push(new Wall(
  'Cactus',
  '🌵',
  50,
  51,
  50,
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
