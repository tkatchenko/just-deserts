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
}
