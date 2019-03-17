/* eslint-disable no-mixed-operators */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable max-len */
// 5 kyu  --- need to handle timeout problem
/*
Given a rational number n

- n >= 0, with denominator strictly positive -

as a string (example: "2/3" in Ruby, Python, Clojure, JS, CS, Go) or as two strings (example: "2" "3" in Haskell, Java, CSharp, C++, Swift) decompose this number as a sum of rationals with numerators equal to one and without repetitions (2/3 = 1/2 + 1/6 is correct but not 2/3 = 1/3 + 1/3, 1/3 is repeated).

The algorithm must be "greedy", so at each stage the new rational obtained in the decomposition must have a denominator as small as possible. In this manner the sum of a few fractions in the decomposition gives a rather good approximation of the rational to decompose.

2/3 = 1/3 + 1/3 doesn't fit because of the repetition but also because the first 1/3 has a denominator bigger than the one in 1/2 in the decomposition 2/3 = 1/2 + 1/6.

Example: (You can see other examples in "Test Examples")

decompose("21/23") or decompose "21" "23" 
should return ["1/2", "1/3", "1/13", "1/359", "1/644046"] in Ruby, Python, Clojure, JS, CS, Haskell, Go
and "[1/2, 1/3, 1/13, 1/359, 1/644046]" in Java, CSharp, C++
and "1/2,1/3,1/13,1/359,1/644046" in C, Swift
The decomposition of 21/23 as

21/23 = 1/2 + 1/3 + 1/13 + 1/598 + 1/897
is exact but don't fulfill our requirement because 598 is bigger than 359. Same for

21/23 = 1/2 + 1/3 + 1/23 + 1/46 + 1/69 (23 is bigger than 13)
or
21/23 = 1/2 + 1/3 + 1/15 + 1/110 + 1/253 (15 is bigger than 13).
The rational given to decompose could be greater than one or equal to one, in which case the first "fraction" will be an integer (with an implicit denominator of 1).

If the numerator parses to zero the function "decompose" returns [] (or "").
The number could also be a decimal which can be expressed as a rational (ex: 0.6 in Ruby, Python, Clojure,JS, CS, Julia, Go or "66" "100" in Haskell, Java, CSharp, C++, C, Swift, Scala).
Ref: http://en.wikipedia.org/wiki/Egyptian_fraction
*/

function decompose(n) {
  let result = [];
  const mod = (x, num) => ((x % num) + num) % num;
  let fraction = n;
  if (fraction.toString().indexOf('/') === -1) fraction = getFraction(fraction);
  else fraction = fraction.toString().split('/');
  let numberOne = [1, Math.ceil(fraction[1] / fraction[0])];
  let numberTwo = getGCD([mod(-Number(fraction[1]), Number(fraction[0])), fraction[1] * Math.ceil(fraction[1] / fraction[0])]);
  result.push(numberOne);
  while (numberTwo[0] !== 1) {
    numberOne = [1, Math.ceil(numberTwo[1] / numberTwo[0])];
    numberTwo = getGCD([mod(-numberTwo[1], numberTwo[0]), numberTwo[1] * Math.ceil(numberTwo[1] / numberTwo[0])]);
    result.push(numberOne);
  }
  result.push(numberTwo);
  result = result.map(e => `${e[0]}/${e[1]}`).reduce((prev,curr,i,arr) => {
    if (arr.indexOf('1/1') !== -1) {
      if (curr === '1/1') prev[0] += 1;
      else prev.push(curr);
    } else prev.push(curr);
    return prev;
  }, [0]);
  if (result[0] === 0) return result.slice(1);
  return result;


  function getFraction(number) {
    const numStr = number.toString();
    const raw = numStr.slice(numStr.indexOf('.') + 1, numStr.length);
    let result = [parseInt(raw), 10 ** raw.length]; //?
    return getGCD(result);
  }

  function getGCD(list) {
    const result = [];
    list.forEach(item => result.push(findDividers(item)));
    const array = [];
    for (const key in result[0]) {
      if (result[1][key]) array.push([Number(key), Math.min(result[0][key], result[1][key])])
    }
    if (array.length === 0) return list;
    const GCD = array.reduce((prev, curr) => {
      prev *= curr[0] ** curr[1];
      return prev;
    }, 1);
    return [list[0] / GCD, list[1] / GCD];

    function findDividers(num) {
      const dividers = [];
      let index = 2;
      while (num > 1) {
        if (num % index === 0) {
          dividers.push(index);
          num /= index;
        } else index += 1;
      }
      return dividers.reduce((prev, curr) => {
        prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
        return prev;
      }, {});
    }
  }
}
decompose('3/4'); // ?
// "1/2", "1/7", "1/59", "1/5163", "1/53307975"
