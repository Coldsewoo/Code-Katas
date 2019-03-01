"use strict"
// 6 kyu
/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str) {
    var resultArr = []
    if (str.length % 2 == 1) str += "_"
    str
    if (str.length == 2) return str;
    for (let i = 0; i < str.length - 1; i += 2) {
        resultArr.push(str.slice(i, i + 2))
    }
    return resultArr
}

// use regex
function solution(str) {
    return (str.length % 2 == 1 ? str += "_" : str).match(/../g)
}


solution('abc')   //?
solution('abcdef')  //?
