/* eslint-disable guard-for-in */
/* eslint-disable operator-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */

// 5 kyu
/*
The aim of the kata is to decompose n! (factorial n) into its prime factors.

Examples:

n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

Notes

the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
factorial can be a very big number (4000! has 12674 digits, n will go from 300 to 4000).
In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
*/

const memoizeArr = ['11', '11', '2^1'];
const decompArr = ['11', '11', '2^1'];
function decomp(n) {
  if (n === 1) return '1';
  if (n === 2) return '2^1';
  if (!memoizeArr[n - 1]) memoizeArr[n - 1] = findDivision(n - 1);
  const decompPrevious = decompArr[n - 1] ? decompArr[n - 1] : decomp(n - 1);
  const previous = decompPrevious.split('*').map((e) => {
    if (e.indexOf('^') === -1) return [e, '1'];
    return e.split('^');
  });
  const current = findDivision(n).split('*').map((e) => {
    if (e.indexOf('^') === -1) return [e, '1'];
    return e.split('^');
  });
  const previousMap = previous.map(e => e[0].trim());
  // eslint-disable-next-line no-restricted-syntax
  for (const item of current) {
    const index = previousMap.indexOf(item[0]);
    if (index !== -1) previous[index][1] = Number(previous[index][1]) + Number(item[1]);
    else previous.push(item);
  }
  function findDivision(num) {
    let index = 2;
    let result = [];
    while (num >= index) {
      if (num % index === 0) {
        result.push(index);
        num = num / index;
        if (isPrime(num) === true) {
          result.push(num);
          break;
        }
      } else index += 1;
    }
    result = result.reduce((prev, curr) => {
      prev[curr] = prev[curr] >= 0 ? prev[curr] += 1 : prev[curr] = 1;
      return prev;
    }, {});
    const resultArr = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in result) {
      resultArr.push(`${Number(key)}^${result[key]}`);
    }
    return resultArr.join('*');
  }
  function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  const value = previous.map((e) => {
    if (e[1] !== '1') return `${e[0]}^${e[1]}`;
    return e[0];
  }).join(' * ').replace(/\s/g, '').replace(/\*/, ' * ');
  if (!decompArr[n]) decompArr[n] = value;
  return value;
}
