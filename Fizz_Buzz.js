"use strict"

// 7 kyu

/*
Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).
C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
Replace certain values however if any of the following conditions are met:
If the value is a multiple of 3: use the value 'Fizz' instead
If the value is a multiple of 5: use the value 'Buzz' instead
If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
*/

// Return an array
function fizzbuzz(n) {
    let g = fizzbuzzs(n)
    var result = []
    for (let i = 0; i < n; i++) {
        result.push(g.next().value)
    }
    function* fizzbuzzs(n) {
        for (let k = 1; k <= n; k++) {
            if (k % 3 == 0 && k % 5 == 0) yield "FizzBuzz"
            else if (k % 3 == 0) yield "Fizz"
            else if (k % 5 == 0) yield "Buzz"
            else yield k
        }
    }
    return result;
}

