const fib = [0, 1];

function productFib(prod) {
  const max = Math.ceil(logB(Math.sqrt(prod) * Math.sqrt(5) + 0.5, (1 + Math.sqrt(5)) / 2));
  let index = max + 4;
  let res = false;
  while (fibSum(index) * fibSum(index - 1) >= prod) {
    const sum = fibSum(index) * fibSum(index - 1);
    if (sum === prod) {
      res = true;
      break;
    } else index -= 1;
  }
  if (res === false) index += 1;
  return [fibSum(index - 1), fibSum(index), res];
}

function fibSum(n) {
  if (n < 2) return fib[n];
  if (n < fib.length) return fib[n - 1];

  let fibSumVal = fib[fib.length - 1];
  let index = fib.length;
  while (index <= n) {
    fibSumVal = fib[index - 2] + fib[index - 1];
    fib.push(fibSumVal);
    index += 1;
  }
  return fibSumVal;
}

function logB(x, base) {
  return Math.log(x) / Math.log(base);
}

productFib(5895); // ?
productFib(5895); // ?
productFib(4895); // ?
