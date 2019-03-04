"use strict"

// 4 kyu

/*
Given an array of positive or negative integers
I= [i1,..,in]
you have to produce a sorted array P of the form
[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]
P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.
Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.
Notes:
It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.
In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
*/

Number.prototype.isPrime = function () {
    var num = this.valueOf()
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false
    }
    return true
}

function findPrimeFactors(number) {
    var num = Math.abs(number)
    var primes = []
    for (let i = 2; i <= num; i++) {
        if (num % i == 0 && i.isPrime()) {
            primes.push(i)
        }
    }
    return primes;
}

function sumOfDivided(lst) {
    var lstPrime = lst.map(e => findPrimeFactors(e))
    var lstResult = lstPrime.reduce((prev, curr) => {
        for (let i = 0; i < curr.length; i++) {
            if (prev.indexOf(curr[i]) == -1) prev.push(curr[i])
        }
        return prev;
    }, []).sort((a, b) => Number(a) - Number(b)).map(e => [e, 0])
    for (let i = 0; i < lstResult.length; i++) {
        for (let j = 0; j < lstPrime.length; j++) {
            if (lstPrime[j].indexOf(lstResult[i][0]) >= 0) lstResult[i][1] += lst[j]
        }
    }
    return lstResult
}

sumOfDivided([12, 15]) //?

