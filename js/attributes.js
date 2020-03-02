export default class Attributes {
  constructor(target) {
    this.target = target;
  }

  update(attribute, text) {
    this.target.querySelector('#' + attribute + ' .current').innerHTML = text;
  }
}
