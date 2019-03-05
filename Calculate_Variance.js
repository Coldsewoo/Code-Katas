"use strict"

// 5 kyu

/*
https://www.codewars.com/kata/calculate-variance/train/javascript
Write a function which will accept an array of numbers and calculate the variance for the array.
The variance for a set of numbers is found by subtracting the mean from every value, squaring the results, adding them all up and dividing by the number of elements.
For example, in pseudo code, to calculate the variance for [1, 2, 2, 3].
mean = (1 + 2 + 2 + 3) / 4
=> 2
variance = ((1 - 2)^2 + (2 - 2)^2 + (2-2)^2 + (3 - 2)^2)  /  4
=> 0.5
The results are tested after being rounded to 4 decimal places using Javascript's toFixed method.
*/

// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.
var variance = function (numbers) {
    let mean = numbers.reduce((p, c, i, a) => {
        p += c;
        if (i == a.length - 1) return p / a.length
        return p;
    }, 0)
    return numbers.reduce((p, c, i, a) => {
        p += Math.pow((c - mean), 2)
        if (i == a.length - 1) return p / a.length
        return p
    }, 0)
};

var numbers1 = [-10, 0, 10, 20, 30];
variance(numbers1).toFixed(4) //?