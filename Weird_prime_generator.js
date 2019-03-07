/* eslint-disable strict */
/* eslint-disable max-len */

'use strict';

// 5 kyu

/*
Consider the sequence a(1) = 7, a(n) = a(n-1) + gcd(n, a(n-1)) for n >= 2:
7, 8, 9, 10, 15, 18, 19, 20, 21, 22, 33, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 69, 72, 73....
Let us take the differences between successive elements of the sequence and get a second sequence g: 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1....
For the sake of uniformity of the lengths of sequences we add a 1 at the head of g:
g: 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1...
Removing the 1s gives a third sequence: p: 5, 3, 11, 3, 23, 3... where you can see prime numbers.
#Task: Write functions:
1: an(n) with parameter n: returns the first n terms of the series a(n) (not tested)
2: gn(n) with parameter n: returns the first n terms of the series g(n) (not tested)
3: countOnes(n) with parameter n: returns the number of 1 in g(n) 
    (don't forget to add a `1` at the head) # (tested)
4: p(n) with parameter n: returns an array of n unique prime numbers (not tested)
5: maxp(n) with parameter n: returns the biggest prime number of the sequence pn(n) # (tested)
6: anOver(n) with parameter n: returns an array (n terms) of the a(i)/i for every i such g(i) != 1 (not tested but interesting result)
7: anOverAverage(n) with parameter n: returns as an *integer* the average of anOver(n)  (tested
*/

// function an(n) {
//     var result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(findan(i));
//     }
//     return result;
// }

// function findan(n) {
//     if (memoizeArr[n - 1]) return memoizeArr[n - 1];
//     if (!memoizeArr[n - 2]) memoizeArr[n - 2] = findan(n - 1);
//     return findan(n - 1) + getGCD(n, findan(n - 1))
// }

// //?
const findAn = [7];
const n = 1000;
for (let i = 1; i < n; i += 1) {
  findAn.push(findAn[i - 1] + getGCD(i, findAn[i - 1]))
}

function findan(n) {
  return findAn[n - 1]
}

function an(n) {
  return findAn.slice(0, n)
}
function gn(n) {
  const anArr = an(n);
  return anArr.map((e, i, arr) => {
    if (i === 0) return 1;
    return arr[i] - arr[i - 1];
  });
}







findan(1000) //?
an(1000) //?
function countOnes(n) {
    return gn(n).filter(e => e == 1).length
}

countOnes(10) //?


// 3: countOnes(n) with parameter n: returns the number of 1 in g(n) 
//     (don't forget to add a `1` at the head) # (tested)
// function countOnes(n) {
//     return gn(n).reduce((p, c) => {
//         if (c == 1) p += 1
//         return p - 1
//     }, 0)
// };
//?



// function countOnes(n) {
//     var index = 9;
//     var total = n;
//     while (index < n) {
//         total -= 1;
//         index += 2;
//         if (index < n) {
//             total -= 1;
//             index = index * 2 - 1
//         }
//     }
//     return total
// };

function Pn(n) {
    let index = 1
    let primeArr = []
    while (primeArr.length < n) {
        let temp = findan(index + 1) - findan(index)
        if (temp != 1 && primeArr.indexOf(temp) == -1) primeArr.push(temp)
        index++
    }
    return primeArr;
}

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1
}



function maxPn(n) {
    return Pn(n).sort((a, b) => b - a)[0]
}


function anOver(n) {
    return an(n).reduce((p, c, i) => {
        if (c != 1) p.push(c / (i + 1))
        return p
    }, [])
}

// 6: anOver(n) with parameter n: returns an array (n terms) of the a(i)/i for every i such g(i) != 1 (not tested but interesting result)
// 7: anOverAverage(n) with parameter n: returns as an *integer* the average of anOver(n)  (tested

function anOverAverage(n) {
    return parseInt(anOver(n).reduce((p, c) => p += c, 0) / anOver(n).length)
} //?


function getGCD(a, b) {
    if (isPrime(a) && isPrime(b)) return 1;
    var adiv = findDivision(a)
    var bdiv = findDivision(b)

    return GCD(adiv, bdiv)

    function GCD(adiv, bdiv) {
        return adiv.reduce((p, c) => {
            for (let item of bdiv) {
                if (c[0] == item[0]) {
                    p *= c[0] ** Math.min(c[1], item[1])
                }
            }
            return p
        }, 1)
    }


    function findDivision(num) {
        let index = 2
        let result = []
        while (num >= index) {
            if (num % index == 0) {
                result.push(index);
                num = num / index
                if (isPrime(num) == true) {
                    result.push(num)
                    break
                }
            } else index++
        }
        result = result.reduce((prev, curr, i, arr) => {
            prev[curr] = prev[curr] >= 0 ? prev[curr] += 1 : prev[curr] = 1
            return prev
        }, {})
        var resultArr = []
        for (let key in result) {
            resultArr.push([Number(key), result[key]])
        }
        return resultArr
    }

    function isPrime(num) {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false
        return num > 1
    }

}

