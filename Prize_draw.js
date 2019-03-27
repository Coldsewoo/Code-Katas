/* eslint-disable no-restricted-syntax */
// 6 kyu

/*
To participate in a prize draw each one gives his/her firstname.
Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.
The length of the firstname is added to the sum of these ranks hence a number n. An array of random weights is linked to the firstnames and each n is multiplied by its corresponding weight to get what they call a winning number.
Example: names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1]
PAUL -> n = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54 The weight associated with PAUL is 2 so Paul's winning number is 54 * 2 = 108.
Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.
#Task:
parameters: st a string of firstnames, we an array of weights, n a rank
return: the firstname of the participant whose rank is n (ranks are numbered from 1)
#Example: names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1] n: 4
The function should return: PauL
Note:
If st is empty return "No participants".
If n is greater than the number of participants then return "Not enough participants".
See Examples Test Cases for more examples.
*/

const alphabet = '0abcdefghijklmnopqrstuvwxyz';

function rank(st, we, n) {
  if (st.length === 0) return 'No participants';
  const stArr = st.split(/,/);
  if (stArr.length < n) return 'Not enough participants';
  const resultArr = [];
  for (const item in stArr) {
    let winNum = stArr[item].length;
    for (const index in stArr[item].toLowerCase()) {
      winNum += alphabet.indexOf(stArr[item].toLowerCase().charAt(index));  // ?
    }
    resultArr.push(winNum * we[stArr.indexOf(stArr[item])]);
  }
  const result = []
  for (let i = 0; i < resultArr.length; i ++) {
    result.push([stArr[i], resultArr[i]]);
  }
  return result.sort((a, b) => {
    if (a[1] === b[1]) return a[0].localeCompare(b[0]);
    return b[1] - a[1];
  })[n - 1][0];
}

rank('COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH', [1, 4, 4, 5, 2, 1], 4); // ?

