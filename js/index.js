import 'babel-polyfill';
import { getRandomInt } from './utility.js';
import Map from './map.js';
import Output from './output.js';
import Attributes from './attributes.js';
import Player from './player.js';
import Wall from './wall.js';

const debug = true;

const output = new Output(document.querySelector('#output .box'), debug);
const map = new Map(document.querySelector('#map .box'), 100, 100, output);
const attributes = new Attributes(document.querySelector('#attributes .box'));

const walls = [];
for (let i = 0; i < 100; i++) {
  walls.push(new Wall(
    'Cactus',
    '🌵',
    getRandomInt(0, 100), 
    getRandomInt(0, 100),
    50,
    map,
    output
  ));
}

const player = new Player(
  'Player',
  '🧔🏽',
  50,
  50,
  100,
  150,
  10,
  30,
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
  walls.forEach((wall) => {
    if (player.x === wall.x && player.y === wall.y) {
      player.moveBack();
      player.takeDamage(wall.attack, wall.name);
    }
  });

  player.draw();
}, false);

output.log('Welcome to the desert ' + player.name + '.');
