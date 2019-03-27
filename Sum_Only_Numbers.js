// beta

/*
It has to return the sum of all numbers passed as arguments (however many are provided). If no numbers are provided as arguments it must return 0. If 1 number is provided as an argument that number must be returned. If anything other than a number is provided as one or more of the arguments, it must be ignored. Example:

sumNumbers()             // 0
sumNumbers(1, 2)         // 3
sumNumbers(4, 5, '6')    // 9

*/

function sumNumbers(...args) {
  if (!args.length) return 0;
  let result = 0;
  for (let item of args) {
    if (!Number.isInteger(item)) result += 0;
    else result += item;
  }
  return result;
}
 
sumNumbers('something', 1, 2) // ?