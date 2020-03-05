export default class Attributes {
  constructor(target) {
    this.target = target;
  }

  update(attribute, text) {
    this.target.querySelector('#' + attribute + ' .current').innerHTML = text;
  }

  updateExp(level, percent) {
    if (percent === 1) percent = 0;
    this.target.querySelector('.level span').innerHTML = level;
    this.target.querySelector('.level .progress').style.right = (100 - (100 * percent)) + '%';
  }
}
