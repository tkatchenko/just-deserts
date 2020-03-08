import { numberWithCommas } from './utility.js';

export default class Output {
  constructor(target, debug) {
    this.target = target;
    this.debug = debug;
  }

  log(text, debug) {
    if (this.debug && debug) {
      this.target.innerHTML = (this.target.innerHTML === '') ? this.target.innerHTML + 'DEBUG: ' + text : this.target.innerHTML + '<br><br>' + 'DEBUG: ' + text;
      this.target.scrollTop = this.target.scrollHeight;
    } else if (!debug) {
      this.target.innerHTML = (this.target.innerHTML === '') ? this.target.innerHTML + text : this.target.innerHTML + '<br><br>' + text;
      this.target.scrollTop = this.target.scrollHeight;
    }
  }

  clear() {
    this.target.innerHTML = '';
  }

  addHighscore(player) {
    let scores = JSON.parse(localStorage.getItem('JustDesertsHighscores'));

    if (!scores) {
      scores = [];
      scores.push({
        'name': player.name,
        'score': player.score
      });
    } else {
      scores.push({
        'name': player.name,
        'score': player.score
      });
    }

    scores = scores.sort((el1, el2) => el2.score - el1.score);
    localStorage.setItem('JustDesertsHighscores', JSON.stringify(scores.slice(0, 5)));
  }

  showHighscores() {
    let scores = JSON.parse(localStorage.getItem('JustDesertsHighscores'));

    if (scores && scores.length) {
      this.log('---'); 
      this.log('Highscores:');

      scores.forEach((el, i) => {
        this.log(i + 1 + '. ' + el.name + ': ' + numberWithCommas(el.score));
      });
    }
  }
}
