import 'babel-polyfill';
import { getRandomInt } from './utility.js';
import Map from './map.js';
import Output from './output.js';
import Attributes from './attributes.js';
import Player from './player.js';
import Bus from './player.js';
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
    52,
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
for (let i = 0; i < 10; i++) {
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
  'Bus',
  '🚌',
  50,
  52,
  1000,
  1000,
  1000,
  1000,
  2,
  map,
  output,
  function() {
    while (this.timePool >= 1) {
      console.log('move');
      if (this.x - 2 < 0) {
        this.remove = true;
      } else {
        this.move(-1, 0, true);
      }

      this.timePool--;
    }
  }
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

  // Check collisions
  const playerCollision = map.checkCollision(player);
  if (playerCollision) {
    if (playerCollision.constructor.name === 'Wall') {
      player.moveBack();
      player.takeDamage(playerCollision.attack, playerCollision.name);
    } else if (playerCollision.constructor.name === 'Enemy') {
      player.moveBack();
      playerCollision.takeDamage(player.attack, player.name);
    }
  }

  enemies.forEach((enemy, i, array) => {
    enemy.timePool += enemy.speed / player.speed;
    enemy.update();

    if (enemy.remove) {
      map.clear(enemy.x, enemy.y);
      array.splice(i, 1); 
    }
  });

  enemies.forEach((enemy) => {
    enemy.draw();
  });

  player.draw();
}, false);

output.log('The bus leaves while you are taking a rest break.');
