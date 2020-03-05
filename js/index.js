import Output from './output.js';
import Attributes from './attributes.js';
import Game from './game.js';

const debug = true;

const output = new Output(document.querySelector('#output .box'), debug);
const attributes = new Attributes(document.querySelector('#attributes .box'));

const game = new Game('Player', '🧔🏽', document.querySelector('#map .box'), output, attributes);
