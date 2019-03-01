"use strict"
// 5 kyu

/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/



// Z = Sigma(k = 1 -> kmax) [n/5^k] where k = [log(5,n)]
function zeros(n) {
    var kmax = Math.floor(Math.log10(n) / Math.log10(5))
    var Z = 0;
    for (let k = 1; k <= kmax; k++) {
        Z += Math.floor(n / Math.pow(5, k))
    }
    return Z;
}
