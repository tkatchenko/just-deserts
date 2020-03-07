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
    const waterX = getRandomInt(0, 50);
    let waterY = getRandomInt(0, 50);
    while (waterY === 28) {
      waterY = getRandomInt(0, 50);
    }

    const walls = [];
    const enemies = [];

    if (level === 0) {
      const map = new Map(this.target, this.width, this.height, 'orange', this.output, this.game);

      new Water(
        'Oasis',
        '🏝️',
        waterX,
        waterY,
        map,
        this.output
      );


      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(waterX - 10, waterX + 10);
        const y = getRandomInt(waterY - 10, waterY + 10);

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

      this.output.log('The 🚌Bus leaves while you are taking a rest break.');

      return map;
    } else if (level === 1) {
      const map = new Map(this.target, this.width, this.height, 'orange', this.output, this.game);

      new Water(
        'Oasis',
        '🏝️',
        waterX,
        waterY,
        map,
        this.output
      );

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(waterX - 10, waterX + 10);
        const y = getRandomInt(waterY - 10, waterY + 10);

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

      if (this.game.y === 50 && this.game.x <= 50) {
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
    } else if (level === 2) {
      const map = new Map(this.target, this.width, this.height, 'green', this.output, this.game);

      new Water(
        'Wave',
        '🌊',
        waterX,
        waterY,
        map,
        this.output
      );

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(waterX - 10, waterX + 10);
        const y = getRandomInt(waterY - 10, waterY + 10);

        if (x < this.width - 1 && x >= 0 && y < this.height -1 && y >= 0 && !map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Tulip',
            '🌷',
            x,
            y,
            0,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 500; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Pine Tree',
            '🌲',
            x,
            y,
            50,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Ant',
            '🐜',
            x, 
            y,
            30,
            30,
            60,
            20,
            0.7,
            map,
            this.output,
            false,
            false,
            'bites',
            true,
            20
          ));
        }
      }

      for (let i = 0; i < 10; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Lady Beetle',
            '🐞',
            x, 
            y,
            20,
            20,
            50,
            25,
            1.1,
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
            'Bee',
            '🐝',
            x, 
            y,
            10,
            10,
            100,
            10,
            2,
            map,
            this.output,
            false,
            false,
            'stings',
            true,
            3
          ));
        }
      }

      if (this.game.y === 50 && this.game.x <= 50) {
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
    } else if (level === 3) {
      const map = new Map(this.target, this.width, this.height, 'green', this.output, this.game);

      new Water(
        'Wave',
        '🌊',
        waterX,
        waterY,
        map,
        this.output
      );

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(waterX - 10, waterX + 10);
        const y = getRandomInt(waterY - 10, waterY + 10);

        if (x < this.width - 1 && x >= 0 && y < this.height -1 && y >= 0 && !map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Tulip',
            '🌷',
            x,
            y,
            0,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 450; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Pine Tree',
            '🌲',
            x,
            y,
            50,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 50; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Mountain',
            '⛰️',
            x,
            y,
            100,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Crocodile',
            '🐊',
            x, 
            y,
            40,
            40,
            100,
            35,
            0.7,
            map,
            this.output,
            false,
            false,
            'bites',
            true,
            5
          ));
        }
      }

      for (let i = 0; i < 10; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Leopard',
            '🐆',
            x, 
            y,
            80,
            80,
            90,
            30,
            1.1,
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
            'Elephant',
            '🐘',
            x, 
            y,
            200,
            200,
            300,
            30,
            0.25,
            map,
            this.output,
            false,
            false,
            'stomps',
            true,
            3
          ));
        }
      }

      if (this.game.y === 50 && this.game.x <= 50) {
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
    } else if (level === 4) {
      const map = new Map(this.target, this.width, this.height, 'gray', this.output, this.game);

      new Water(
        'Faucet',
        '🚰',
        waterX,
        waterY,
        map,
        this.output
      );

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(waterX - 10, waterX + 10);
        const y = getRandomInt(waterY - 10, waterY + 10);

        if (x < this.width - 1 && x >= 0 && y < this.height -1 && y >= 0 && !map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Restroom Sign',
            '🚻',
            x,
            y,
            0,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 400; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Office Building',
            '🏢',
            x,
            y,
            120,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 50; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Construction Sign',
            '🚧',
            x,
            y,
            100,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 50; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Crane',
            '🏗️',
            x,
            y,
            150,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Spider',
            '🕷',
            x, 
            y,
            50,
            50,
            140,
            50,
            0.6,
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

      for (let i = 0; i < 10; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Gear',
            '⚙️',
            x, 
            y,
            40,
            40,
            180,
            0,
            1.7,
            map,
            this.output,
            false,
            false,
            'grinds',
            true,
            4
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Tram',
            '🚋',
            x, 
            y,
            200,
            200,
            300,
            30,
            0.5,
            map,
            this.output,
            false,
            false,
            'runs over',
            true,
            1
          ));
        }
      }

      if (this.game.y === 50 && this.game.x <= 50) {
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
    } else if (level === 5) {
      const map = new Map(this.target, this.width, this.height, 'gray', this.output, this.game);

      new Water(
        'Faucet',
        '🚰',
        waterX,
        waterY,
        map,
        this.output
      );

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(waterX - 10, waterX + 10);
        const y = getRandomInt(waterY - 10, waterY + 10);

        if (x < this.width - 1 && x >= 0 && y < this.height -1 && y >= 0 && !map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Restroom Sign',
            '🚻',
            x,
            y,
            0,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 400; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Office Building',
            '🏢',
            x,
            y,
            120,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 50; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Convenience Store',
            '🏪',
            x,
            y,
            150,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 50; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Hotel',
            '🏨',
            x,
            y,
            170,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Dog',
            '🐕',
            x, 
            y,
            110,
            110,
            150,
            50,
            0.6,
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

      for (let i = 0; i < 10; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Cat',
            '🐈',
            x, 
            y,
            100,
            100,
            200,
            50,
            0.9,
            map,
            this.output,
            false,
            false,
            'scratches',
            true,
            4
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Green Salad',
            '🥗',
            x, 
            y,
            1000,
            1000,
            100,
            0,
            0.5,
            map,
            this.output,
            false,
            false,
            'satiates',
            true,
            1
          ));
        }
      }

      if (this.game.y === 50 && this.game.x <= 50) {
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
    } else if (level === 6) {
      const map = new Map(this.target, this.width, this.height, 'green', this.output, this.game);

      new Water(
        'Fountain',
        '⛲',
        waterX,
        waterY,
        map,
        this.output
      );

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(waterX - 10, waterX + 10);
        const y = getRandomInt(waterY - 10, waterY + 10);

        if (x < this.width - 1 && x >= 0 && y < this.height -1 && y >= 0 && !map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Woman\'s Hat',
            '👒',
            x,
            y,
            0,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 450; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Manicured Tree',
            '🌳',
            x,
            y,
            240,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 50; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Seedling',
            '🌱',
            x,
            y,
            300,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Tiger',
            '🐅',
            x, 
            y,
            110,
            110,
            200,
            70,
            0.7,
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

      for (let i = 0; i < 10; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Monkey',
            '🐒',
            x, 
            y,
            100,
            100,
            150,
            70,
            0.9,
            map,
            this.output,
            false,
            false,
            'scratches',
            true,
            4
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Snail',
            '🐌',
            x, 
            y,
            1000,
            1000,
            100,
            100,
            0.1,
            map,
            this.output,
            false,
            false,
            'squashes',
            true,
            1
          ));
        }
      }

      if (this.game.y === 50 && this.game.x <= 50) {
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
    } else if (level === 7) {
      const map = new Map(this.target, this.width, this.height, 'green', this.output, this.game);

      new Water(
        'Fountain',
        '⛲',
        waterX,
        waterY,
        map,
        this.output
      );

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(waterX - 10, waterX + 10);
        const y = getRandomInt(waterY - 10, waterY + 10);

        if (x < this.width - 1 && x >= 0 && y < this.height -1 && y >= 0 && !map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Woman\'s Hat',
            '👒',
            x,
            y,
            0,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 100; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Sunflower',
            '🌻',
            x,
            y,
            390,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 100; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Hibiscus',
            '🌺',
            x,
            y,
            400,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 100; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Cherry Blossom',
            '🌸',
            x,
            y,
            410,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 200; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Manicured Tree',
            '🌳',
            x,
            y,
            240,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Rose',
            '🌹',
            x, 
            y,
            130,
            130,
            350,
            200,
            1.1,
            map,
            this.output,
            false,
            false,
            'pricks',
            true,
            10
          ));
        }
      }

      for (let i = 0; i < 10; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Ogre',
            '👹',
            x, 
            y,
            110,
            110,
            300,
            100,
            0.9,
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
            'Lemon',
            '🍋',
            x, 
            y,
            150,
            150,
            400,
            150,
            0.9,
            map,
            this.output,
            false,
            false,
            'sours',
            true,
            10
          ));
        }
      }

      if (this.game.y === 50 && this.game.x <= 50) {
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
    } else if (level === 8) {
      const map = new Map(this.target, this.width, this.height, 'brown', this.output, this.game);

      new Water(
        'Water Drops',
        '💦',
        waterX,
        waterY,
        map,
        this.output
      );

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(waterX - 10, waterX + 10);
        const y = getRandomInt(waterY - 10, waterY + 10);

        if (x < this.width - 1 && x >= 0 && y < this.height -1 && y >= 0 && !map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Droplet',
            '💧',
            x,
            y,
            0,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 50; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Amphora',
            '🏺',
            x,
            y,
            350,
            map,
            this.output
          ));
        }
      }


      for (let i = 0; i < 200; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Volcano',
            '🌋',
            x,
            y,
            600,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 50; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);

        if (!map.checkAllCollision({x: x, y: y})) {
          walls.push(new Wall(
            'Classical Architecture',
            '🏛️',
            x,
            y,
            400,
            map,
            this.output
          ));
        }
      }

      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'Brachiosaurus',
            '🦕',
            x, 
            y,
            530,
            530,
            510,
            210,
            0.6,
            map,
            this.output,
            false,
            false,
            'stomps',
            true,
            5
          ));
        }
      }

      for (let i = 0; i < 10; i++) {
        const x = getRandomInt(0, 50);
        const y = getRandomInt(0, 50);
        
        if (!map.checkCollision({x: x, y: y})) {
          enemies.push(new Enemy(
            'T-Rex',
            '🦖',
            x, 
            y,
            210,
            210,
            500,
            110,
            1.1,
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
            'Dragon',
            '🐉',
            x, 
            y,
            250,
            250,
            450,
            160,
            0.9,
            map,
            this.output,
            false,
            false,
            'burns',
            true,
            7
          ));
        }
      }

      if (this.game.y === 50 && this.game.x <= 50) {
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
    } else if (level === 9) {
      const map = new Map(this.target, this.width, this.height, 'orange', this.output, this.game);

      new Water(
        'Oasis',
        '🏝️',
        waterX,
        waterY,
        map,
        this.output
      );


      for (let i = 0; i < 5; i++) {
        const x = getRandomInt(waterX - 10, waterX + 10);
        const y = getRandomInt(waterY - 10, waterY + 10);

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
        'Bus',
        '🚌',
        25,
        28,
        3000,
        3000,
        1000,
        300,
        1.1,
        map,
        this.output,
        false,
        false,
        'runs over',
        true,
        25
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

      this.output.log('The bus speeds towards you.');

      return map;
    } else {
      const map = new Map(this.target, this.width, this.height, 'orange', this.output, this.game);

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
