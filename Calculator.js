const memo = [1];

function dblLinear(n) {
  const max = 2.1 * n;
  if (memo.length >= max) return memo[n];

  let index = 0;
  while (memo.length <= max) {
    const resultOne = 2 * memo[index] + 1;
    const resultTwo = 3 * memo[index] + 1;
    if (memo.indexOf(resultOne) === -1) memo.push(resultOne);
    if (memo.indexOf(resultTwo) === -1) memo.push(resultTwo);
    index += 1;
  }
  memo.sort((a, b) => a - b);
  return memo[n];
}

dblLinear(10);
