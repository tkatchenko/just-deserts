export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function createArray(length) {
  let arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    const args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length-1 - i] = createArray.apply(this, args);
  }

  return arr;
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function doubler(base, times) {
  let number = base;

  for (let i = 0; i < times; i++) {
    number = number * 2;
  }

  return number;
}
