export default class Map {
  constructor(target, width, height, output) {
    this.target = target;
    this.width = width;
    this.height = height;
    this.output = output;

    let mapOutput = '';
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        mapOutput += '<span data-x="' + x + '" data-y="' + y + '">.</span>';
      }
      mapOutput += '<br>';
    }

    this.target.innerHTML = mapOutput;
  }

  draw(char, x, y, focus) {
    const el = document.querySelector('#map .box span[data-x="' + x + '"][data-y="' + y + '"]');

    el.innerHTML = char;

    if (focus) {
      const wrapper = document.querySelector('#map .box');
      const elTop = el.offsetTop - wrapper.offsetTop;
      const elLeft = el.offsetLeft - wrapper.offsetLeft;

      wrapper.scrollTop = elTop - (wrapper.offsetHeight / 2);
      wrapper.scrollLeft = elLeft - (wrapper.offsetWidth / 2);
    }
  }

  clear(x, y) {
    if (x || y) {
      document.querySelector('#map .box span[data-x="' + x + '"][data-y="' + y + '"]').innerHTML = '.';
    } else {
      document.querySelectorAll('#map .box span').forEach((el) => {
        el.innerHTML = '.';
      });
    }
  }
}
