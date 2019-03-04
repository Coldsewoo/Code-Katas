"use strict"

// 7 kyu
/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
Find max(abs(length(x) − length(y)))
If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
#Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
*/

function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0) return -1
    let a1Arr = a1.map(e => e.length).reduce(reducer, [Infinity, -Infinity])
    let a2Arr = a2.map(e => e.length).reduce(reducer, [Infinity, -Infinity])
    function reducer(prev, curr) {
        if (curr < prev[0]) prev[0] = curr;
        if (curr > prev[1]) prev[1] = curr;
        return prev;
    }
    return Math.max(Math.abs(a1Arr[0] - a2Arr[1]), Math.abs(a1Arr[1] - a2Arr[0]))
}

var a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
var a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2)

