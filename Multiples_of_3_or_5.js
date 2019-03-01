"use strict"

// 6 kyu

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.


// 1. use reduce
function solution(number) {
    var array = [];
    for (let i = 1; i < number; i++) array.push(i);
    return array.reduce((sum, curr) => {
        if (curr % 5 == 0 || curr % 3 == 0) sum += curr;
        return sum;
    }, 0)
}

// 2. While not making Array?

function solution(number) {
    var sum = 0;
    for (let i = 1; i < number; i++)  if (i % 5 == 0 || i % 3 == 0) sum += i
    return sum;
}




solution(10) //?

