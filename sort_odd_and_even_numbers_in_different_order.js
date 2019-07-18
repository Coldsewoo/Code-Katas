/* eslint-disable no-bitwise */
/* eslint-disable max-len */
// 6 kyu

/*
You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.

For example:

[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]
*/

const sortArray = (array) => {
  const arr = array.slice();
  const oddArrSorted = arr.filter(e => e & 1).sort((a, b) => a - b);
  const evenArrSorted = arr.filter(e => !(e & 1)).sort((a, b) => b - a);
  return arr.map(e => (e & 1 ? oddArrSorted.shift() : evenArrSorted.shift()));
};


// const arr1 = [5, 3, 2, 8, 1, 0, 4];

// const sortOddEv = (array) => {
//   const arr = [...array];
//   const arrLen = arr.length;

//   for (let i = 0; i < arrLen - 1; i++) {
//     let minIdx_even = i;
//     let minIdx_odd = i;

//     for (let j = i + 1; j < arrLen; j++) {
//       if (arr[i] & 1) {
//         if (arr[j] < arr[minIdx_odd] && arr[j] & 1) minIdx_odd = j;
//       }
//       else {
//         if(arr[j] > arr[minIdx_even] && !(arr[j] & 1)) minIdx_even = j
//       }
//     }
//     arr[i] & 1
//       ? [arr[minIdx_odd], arr[i]] = [arr[i], arr[minIdx_odd]]
//       : [arr[minIdx_even], arr[i]] = [arr[i], arr[minIdx_even]];
//   }

//   console.log(arr);
// };

// sortOddEv(arr1);
