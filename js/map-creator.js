import { getRandomInt } from './utility.js';
import Map from './map.js';
import Wall from './wall.js';
import Enemy from './enemy.js';

export default class MapCreator {
  constructor(target, width, height, output, game) {
    this.target = target;
    this.width = width;
    this.height = height;
    this.output = output;
    this.game = game;
  }

  create(level) {
    if (level === 0) {
      const map = new Map(this.target, this.width, this.height, this.output, this.game);

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
            30,
            map,
            this.output
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
            10,
            10,
            0.5,
            map,
            this.output,
            false,
            false,
            'bites'
          ));
        }
      }

      enemies.push(new Enemy(
        'Lizard',
        '🦎',
        getRandomInt(18, 22), 
        28,
        10,
        10,
        10,
        10,
        0,
        map,
        this.output,
        false,
        false,
        'bites'
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
        this.output,
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
        true,
        'runs over'
      ));

      walls.push(new Wall(
        'Cactus',
        '🌵',
        25,
        26,
        30,
        map,
        this.output
      ));

      map.enemies = enemies;

      this.output.log('The bus leaves while you are taking a rest break.');

      return map;
    } else {
      const map = new Map(this.target, this.width, this.height, this.output, this.game);

      const walls = [];
      for (let i = 0; i < 2000; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Cactus',
            '🌵',
            x,
            y,
            30,
            map,
            this.output
          ));
        }
      }

      return map;
    }
  }
}
