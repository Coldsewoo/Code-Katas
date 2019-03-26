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
  for (const item of stArr) {
    let winNum = item.length;
    for (const index in item.toLowerCase()) {
      winNum += alphabet.indexOf(item.charAt(index)); 
    }
    resultArr.push(winNum * we[stArr.indexOf(item)]);
  }
  const result = []
  for (let i = 0; i < resultArr.length; i++) {
    result.push([stArr[i], resultArr[i]]);
  }
  return result.sort((a, b) => {
    if (a[1] === b[1]) return a.localeCompare(b);
    else return b - a
  })[n - 1][0]
}

rank('James,Elizabeth,Emma,Alexander,Grace,Sofia,Natalie,Matthew,Ethan,Lagon,Jayden,Michael,Olivai,Abigail,Lyli,Daniel,Isabella,Jacob,Andrew,Joshua,Robert,Naoh,Emily', [2,3,1,6,3,6,5,4,3,5,3,6,5,3,3,3,5,2,5,5,3,3,5], 8); // ?

// Isabella
