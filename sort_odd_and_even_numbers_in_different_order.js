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
