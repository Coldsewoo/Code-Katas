"use strict"

/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

// classic way
function iqTest(numbers) {
    var arr = numbers.split(/\s/g);
    var arreven = [];
    var arrodd = [];
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) % 2 == 0) arreven.push(parseInt(arr[i]))
        else arrodd.push(parseInt(arr[i]))
    }
    return arreven.length == 1 ? arreven[0] : arrodd[0]
}

//use filter?

function iqTest(numbers) {
    var arr = numbers.split(/\s/g);
    var even = arr.filter((e, i) => {
        if (parseInt(e) % 2 == 0) return i + 1;
    })
    var odd = arr.filter((e, i) => {
        if (parseInt(e) % 2 == 1) return i + 1;
    })
    return even.length > odd.length ? odd[0] : even[0]
}

iqTest("2 4 7 8 10")  //?
iqTest("1 2 1 1") //?

