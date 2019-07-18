/* eslint-disable no-console */
function makePattern(n) {
  const result = {};
  for (let i = 1; i <= n; i++) {
    result[i] = new Array(i);
  }
  let dir = false;
  let num = n;
  let input = 1;
  let index = 0;
  let position = 1;
  const max = n * (n + 1) / 2;
  while (input <= max) {
    if (!dir) {
      result[position][index] = input;
      input += 1;
      if (position === n) {
        dir = true;
        num -= 1;
        index += 1;
      } else position += 1;
    } else if (dir) {
      result[position][index] = input;
      input += 1;
      if (position + num === n + 1) {
        dir = false;
        num -= 1;
        index += 1;
        position += 1;
      } else position -= 1;
    }
  }
  console.log(`n = ${n}`);
  for (let i = 1; i <= n; i++) {
    const temp = result[i].map(e => e.toString());
    console.log(temp.join(' '));
  }
}

makePattern(25);
