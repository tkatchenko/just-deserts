import Output from './output.js';
import Attributes from './attributes.js';
import Game from './game.js';

const debug = true;

let mapOutput = '';
for (let y = 0; y < 50; y++) {
  for (let x = 0; x < 50; x++) {
    mapOutput += '<span style="color: rgba(255, 255, 255, 0.3)" data-x="' + x + '" data-y="' + y + '">.</span>';
  }
  mapOutput += '<br>';
}

document.querySelector('#map .box').innerHTML = mapOutput;

const output = new Output(document.querySelector('#output .box'), debug);
const attributes = new Attributes(document.querySelector('#attributes .box'));

output.log('Welcome to 🏜️Just Deserts, created for the <a target="_blank" href="https://itch.io/jam/7drl-challenge-2020">7DRL Challenge 2020</a>.');
output.log('You can use the ⬇️arrow keys, 🔢numpad or 💻Vim keys for movement. Enter, space, period and 5 will 💤rest.');

let name = 'Player';
document.querySelector('.modal.name input').focus();
document.querySelector('.modal.name input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    name = document.querySelector('.modal.name input').value;

    document.querySelector('.modal.name').style.display = 'none';
    document.querySelector('.modal.look').style.display = 'block';
  }
});

document.querySelector('.modal.look .choices').onclick = (e) => {
  document.querySelector('.modal.look').style.display = 'none';
  const game = new Game(name, e.target.innerHTML, 50, 50, document.querySelector('#map .box'), output, attributes);
};
