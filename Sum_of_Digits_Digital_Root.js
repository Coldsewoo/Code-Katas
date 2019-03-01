"use strict"

// 6 kyu

/*
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works:

digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
*/

// solution 1
function digital_root(n) {
    while (n.toString().length > 1) {
        let temp = 0;
        for (let i = 0; i < n.toString().length; i++) {
            temp += parseInt(n.toString().charAt(i))
        }
        n = temp;
    }
    return n;
}


//with iteration? 
function digital_root(n) {
    if (n < 10) return n;
    let temp = 0;
    for (let i = 0; i < n.toString().length; i++) {
        temp += parseInt(n.toString().charAt(i))
    }
    n = temp;
    return digital_root(n);
}

// with reduce
function digital_root(n) {
    while (n > 9) {
        n = n
            .toString()
            .split("")
            .reduce((prev, curr) => { prev += parseInt(curr); return prev }, 0)
    }

    return n;
}


digital_root(16)  //?
digital_root(456) //? 
digital_root(132189) //?