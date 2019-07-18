/* eslint-disable max-len */
// 5 kyu
/*
Given an array of numbers, calculate the largest sum of all possible blocks of consecutive elements within the array. The numbers will be a mix of positive and negative values. If all numbers of the sequence are nonnegative, the answer will be the sum of the entire array. If all numbers in the array are negative, your algorithm should return zero. Similarly, an empty array should result in a zero return from your algorithm.

largestSum([-1,-2,-3]) == 0
largestSum([]) == 0
largestSum([1,2,3]) == 6
Easy, right? This becomes a lot more interesting with a mix of positive and negative numbers:

largestSum([31,-41,59,26,-53,58,97,-93,-23,84]) == 187
The largest sum comes from elements in positions 3 through 7: 59+26+(-53)+58+97 == 187

Once your algorithm works with these, the test-cases will try your submission with increasingly larger random problem sizes.
*/

function largestSum(arr) {
  // // write code to find the sum of the largest sub-sequence in arr
  // if (!arr.length) return 0;
  // if (arr.every(e => e <= 0)) return 0;
  // let largest = arr.reduce((p, c) => {
  //   p += c;
  //   return p;
  // }, 0);
  // if (arr.every(e => e >= 0)) {
  //   return largest;
  // }
  // let sum = largest;
  // for (let i = 0; i < arr.length; i++) {
  //   let currentSum = sum;
  //   for (let j = arr.length - 1; j > i; j--) {
  //     currentSum -= arr[j];
  //     if (currentSum >= largest) largest = currentSum;
  //   }
  //   sum -= arr[i];
  // }
  // return largest;

  if (!arr.length) return 0
  if (arr.every(e => e <= 0)) return 0
  let largest = arr.reduce((p, c) => {
    p += c
    return p
  }, 0)
  if (arr.every(e => e >= 0)) {
    return largest
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      continue
    } else {
      let sum = 0
      for (let j = i; j < arr.length; j++) {
        sum += arr[j]
        if (sum >= largest) largest = sum
        if (sum <= 0) break
      }
    }
  }

  return largest
}
