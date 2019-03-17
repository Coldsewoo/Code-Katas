/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */
// 5 kyu

/*
Common denominators
You will have a list of rationals in the form
 { {numer_1, denom_1} , ... {numer_n, denom_n} } 
or
 [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or
 [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
where all numbers are positive ints.
You have to produce a result in the form
 (N_1, D) ... (N_n, D) 
or
 [ [N_1, D] ... [N_n, D] ] 
or
 [ (N_1', D) , ... (N_n, D) ] 
or
{{N_1, D} ... {N_n, D}} 
depending on the language (See Example tests)
in which D is as small as possible and
 N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Note for Bash
input is a string, e.g "2,4,2,6,2,8"
output is then "6 12 4 12 3 12"
*/
function convertFrac(lst) {
  const denoms = lst.map(e => e[1]);
  const LCM = findLCM(denoms);
  return lst.map((e) => {
    const first = e[0] * (LCM / e[1]);
    const second = LCM;
    return [first, second];
  }).reduce((prev, curr) => {
    const strng = `(${curr[0]},${curr[1]})`;
    prev += strng;
    return prev;
  }, ''); 
  function findLCM(list) {
    const result = [];
    list.forEach(item => result.push(findDividers(item)))
    let finalArr = result.reduce((prev, curr) => {
      for (const key in curr) {
        const prevItem = prev[key];
        if (!prevItem) prev[key] = curr[key];
        else prev[key] = Math.max(prev[key], curr[key]);
      }
      return prev;
    }, {});

    let LCM = 1;
    for (const key in finalArr) {
      LCM *= key ** finalArr[key]
    }
    return LCM;

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
