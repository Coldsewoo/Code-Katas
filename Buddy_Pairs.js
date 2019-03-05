"use strict"

// 5 kyu

/*
Buddy pairs
You know what divisors of a number are. The divisors of a positive integer n are said to be proper when you consider only the divisors other than n itself. In the following description, divisors will mean proper divisors. For example for 100 they are 1, 2, 4, 5, 10, 20, 25, and 50.
Let s(n) be the sum of these proper divisors of n. Call buddy two positive integers such that the sum of the proper divisors of each number is one more than the other number:
(n, m) are a pair of buddy if s(m) = n + 1 and s(n) = m + 1
For example 48 & 75 is such a pair:
Divisors of 48 are: 1, 2, 3, 4, 6, 8, 12, 16, 24 --> sum: 76 = 75 + 1
Divisors of 75 are: 1, 3, 5, 15, 25 --> sum: 49 = 48 + 1
Task
Given two positive integers start and limit, the function buddy(start, limit) should return the first pair (n m) of buddy pairs such that n (positive integer) is between start (inclusive) and limit (inclusive); m can be greater than limit and has to be greater than n
If there is no buddy pair satisfying the conditions, then return "Nothing" or (for Go lang) nil
*/



// const { performance } = require('perf_hooks');


function buddy(start, limit) {
    // var t0 = performance.now();
    for (let i = start; i <= limit; i++) {
        let sum, ifBuddy;
        if (isPrime(i) == false) {
            sum = findDivision(i).reduce(sumRed, 1) - i - 1;
            if (sum > i && isPrime(sum) == false) {
                ifBuddy = findDivision(sum).reduce(sumRed, 1) - sum - 1;
                if (i < sum && i == ifBuddy) {
                    // var t1 = performance.now();
                    // console.log(start + " " + limit + " " + (t1 - t0))
                    return [i, sum]
                }
            }
        }
    }

    function sumRed(prev, curr) {
        let temp = 0;
        for (let i = 0; i <= curr[1]; i++) {
            temp += Math.pow(curr[0], i)
        }
        prev *= temp;
        return prev
    }

    function findDivision(num) {
        let index = 2;
        let result = []
        while (num >= index) {
            if (num % index == 0) {
                result.push(index);
                num = num / index
                if (isPrime(num) == true) {
                    result.push(num)
                    break;
                }
            } else index++
        }
        result = result.reduce((prev, curr, i, arr) => {
            prev[curr] = prev[curr] >= 0 ? prev[curr] += 1 : prev[curr] = 1
            return prev;
        }, {})
        var resultArr = []
        for (let key in result) {
            resultArr.push([Number(key), result[key]])
        }
        return resultArr;
    }

    function isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false;
        return num > 1;
    }
    var t1 = performance.now();
    // console.log(t1 - t0)
    return "Nothing";
}


 //?
// // //[48, 75]
// // buddy(4952, 6539) //?
// // //   //[5775, 6128]
// // buddy(381, 4318) //?
// // //   //[1050, 1925]
// // buddy(2382, 3679) //?
// // //"Nothing"

// buddy(30, 50)   //?




