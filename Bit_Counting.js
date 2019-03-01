"use strict"

//6 kyu

/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

//todo
// 1.convert it to binary
// 2.count one

var countBits = function (n) {
    //1. convert number to binary
    var result = n % 2;
    n = Math.floor(n / 2)
    while (n > 0) {
        var bit = n % 2
        result = bit.toString() + result;
        n = Math.floor(n / 2)
    }
    var sum = 0;
    for (let i = 0; i < result.length; i++) {
        if (result.charAt(i) == 1) sum += 1
    }
    return sum;

};

// Do not need to make result?
var countBits = function (n) {
    var sum = 0;
    while (n > 0) {
        var bit = n % 2;
        if (bit == 1) sum += 1;
        n = Math.floor(n / 2);

    }
    return sum;
};



countBits(0) //?
countBits(4) //? 
countBits(7) //?
countBits(9) //?
countBits(10) //?
