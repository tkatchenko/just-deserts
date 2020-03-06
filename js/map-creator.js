import { getRandomInt } from './utility.js';
import Map from './map.js';
import Water from './water.js';
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
    const map = new Map(this.target, this.width, this.height, this.output, this.game);

    const oasisX = getRandomInt(0, 50);
    let oasisY = getRandomInt(0, 50);
    while (oasisY === 28) {
      oasisY = getRandomInt(0, 50);
    }

    new Water(
      'Oasis',
      '🏝️',
      oasisX,
      oasisY,
      map,
      this.output
    );

    const walls = [];

    for (let i = 0; i < 5; i++) {
      const x = getRandomInt(oasisX - 10, oasisX + 10);
      const y = getRandomInt(oasisY - 10, oasisY + 10);

      if (x < this.width - 1 && x >= 0 && y < this.height -1 && y >= 0 && !map.checkAllCollision({x: x, y: y})) {
        walls.push(new Wall(
          'Palm Tree',
          '🌴',
          x,
          y,
          0,
          map,
          this.output
        ));
      }
    }

    const enemies = [];

    if (level === 0) {
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

      for (let i = 0; i < 10; i++) {
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
            'bites',
            false
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
    } else if (level === 1) {
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
      for (let i = 0; i < 5; i++) {
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
            'bites',
            false
          ));
        }
      }

      for (let i = 0; i < 10; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Rat',
            '🐀',
            x, 
            y,
            10,
            10,
            40,
            10,
            0.8,
            map,
            this.output,
            false,
            false,
            'bites',
            true,
            10
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Grasshopper',
            '🦗',
            x, 
            y,
            10,
            10,
            5,
            5,
            2,
            map,
            this.output,
            false,
            false,
            'bites',
            false
          ));
        }
      }

      if (this.game.y === 50 && this.game.x < 50) {
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
      }

      map.enemies = enemies;

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
