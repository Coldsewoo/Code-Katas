"use strict"

// 4 kyu

/*
https://www.codewars.com/kata/getting-along-with-integer-partitions/train/javascript
From wikipedia https://en.wikipedia.org/wiki/Partition_(number_theory)
In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition.
For example, 4 can be partitioned in five distinct ways:
4, 3 + 1, 2 + 2, 2 + 1 + 1, 1 + 1 + 1 + 1.
We can write:
enum(4) -> [[4],[3,1],[2,2],[2,1,1],[1,1,1,1]] and
enum(5) -> [[5],[4,1],[3,2],[3,1,1],[2,2,1],[2,1,1,1],[1,1,1,1,1]].
The number of parts in a partition grows very fast. For n = 50 number of parts is 204226, for 80 it is 15,796,476 It would be too long to tests answers with arrays of such size. So our task is the following:
1 - n being given (n integer, 1 <= n <= 50) calculate enum(n) ie the partition of n. We will obtain something like that:
enum(n) -> [[n],[n-1,1],[n-2,2],...,[1,1,...,1]] (order of array and sub-arrays doesn't matter). This part is not tested.
2 - For each sub-array of enum(n) calculate its product. If n = 5 we'll obtain after removing duplicates and sorting:
prod(5) -> [1,2,3,4,5,6]
prod(8) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 16, 18]
If n = 40 prod(n) has a length of 2699 hence the tests will not verify such arrays. Instead our task number 3 is:
3 - return the range, the average and the median of prod(n) in the following form (example for n = 5):
"Range: 5 Average: 3.50 Median: 3.50"
Range is an integer, Average and Median are float numbers rounded to two decimal places (".2f" in some languages).
#Notes: Range : difference between the highest and lowest values.
Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.
Median : The median is the number separating the higher half of a data sample from the lower half. (https://en.wikipedia.org/wiki/Median)
#Hints: Try to optimize your program to avoid timing out.
Memoization can be helpful but it is not mandatory for being successful.
*/

Number.prototype.getprecision = function () {
    var num = (Math.round(this.valueOf() * 100) / 100).toString();
    if (num.indexOf(".") == -1) return num + ".00"
    if (num.indexOf(".") == num.length - 2) return num + "0";
    else return num;
}
var result = [[1], [1]]
function part(n) {
    var Product = getPart(n);
    var Average = Product.reduce((prev, curr, i, arr) => {
        prev += curr;
        if (i == arr.length - 1) return prev / arr.length;
        return prev;
    })
    var length = Product.length;
    var Median = Product.length % 2 == 0 ? (Product[length / 2] + Product[length / 2 - 1]) / 2 : Product[Math.floor(length / 2)]
    return `Range: ${Product[length - 1] - Product[0]} Average: ${Average.getprecision()} Median: ${Median.getprecision()}`
    function getPart(n) {
        for (let i = 0; i < n; i++) {
            result[i] = result[i] ? result[i] : getPart(i)
            var temp = result[i].map(e => e * (n - i));
            result[n] = result[n] ? result[n] : []
            for (let item of temp) {
                if (result[n].indexOf(item) == -1) result[n].push(item)
            }
        }
        return result[n].sort((a, b) => Number(a) - Number(b));
    }
}



// part(1) //?
// // //"Range: 0 Average: 1.00 Median: 1.00"
// part(2) //?
// // //"Range: 1 Average: 1.50 Median: 1.50"
// part(3) //?
// // //"Range: 2 Average: 2.00 Median: 2.00"
// part(4) //?
// // //"Range: 3 Average: 2.50 Median: 2.50"
// part(5) //?
// // //"Range: 5 Average: 3.50 Median: 3.50"
const { performance } = require('perf_hooks');
var t1 = performance.now()
part(49) //?
var t2 = performance.now()
console.log(t2 - t1)
// // // Expected: 'Range: 35 Average: 15.00 Median: 14.00', instead got: 'Range: 22 Average: 15.00 Median: 14.00'

// part(9) //?
// // // Expected: 'Range: 26 Average: 11.17 Median: 9.50', instead got: 'Range: 17 Average: 11.160 Median: 9.50'

// part(8) //?
// // // Expected: 'Range: 17 Average: 8.29 Median: 7.50', instead got: 'Range: 13 Average: 8.28 Median: 7.50'
// function getPart(n) {
//     if (n == 1) return [1];
//     let result = [1]
//     for (let i = 0; i < n; i++) {
//         let temp = getPart(i).map(e => e * (n - i))
//         for (let item of temp) {
//             if (result.indexOf(item) == -1) result.push(item)
//         }
//     }
//     return result.sort((a, b) => Number(a) - Number(b));
// // }

// getPart(1) //?
// getPart(2) //?
// getPart(3) //?
// getPart(20) //?

// function getPart(n) {
//     let result = [1]
//     for (let i = 0; i < n; i++) {
//         let temp = getPart(i).map(e => e * (n - i))
//         for (let item of temp) {
//             if (result.indexOf(item) == -1) result.push(item)
//         }
//     }
//     return result.sort((a, b) => Number(a) - Number(b));
// }

// var result = [[1], [1]]
// function getPart(n) {
//     for (let i = 0; i < n; i++) {
//         result[i] = result[i] ? result[i] : getPart(i)
//         var temp = result[i].map(e => e * (n - i));
//         result[n] = result[n] ? result[n] : []
//         for (let item of temp) {
//             if (result[n].indexOf(item) == -1) result[n].push(item)
//         }
//     }
//     return result[n].sort((a, b) => Number(a) - Number(b));
// }
// // getPart(8) //?
// getPart(1) //?
// getPart(2) //?
// getPart(3) //?
// getPart(4) //?
// getPart(5) //?
// getPart(6) //?
// getPart(7) //?
// getPart(8) //?
// getPart(9) //?
// getPart(10) //?
// getPart(11)
// getPart(22) //?
//  //?

getPart(40) //?

 //?