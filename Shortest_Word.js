"use strict"

// 7 kyu

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    // 1. find the shortest length and return
    var array = s.split(/\s/g);
    var shortest = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < shortest) shortest = array[i].length;
    }
    return shortest;
}

//use reduce
function findShort(s) {

    return s.split(/\s/g).reduce((prev, curr) => {
        if (curr.length < prev) prev = curr.length
        return prev;
    }, Infinity);
}

//more : find all words have shortest length
function findShort(s) {
    // 1. find the shortest length
    // 2. use reduce?
    // 3. return result
    var array = s.split(/\s/g);
    var shortest = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < shortest) shortest = array[i].length;
    }
    return array.reduce((arr, curr) => {
        if (curr.length == shortest) arr.push(curr)
        return arr;
    }, [])
}


findShort("bitcoin take over the world maybe who knows perhaps") //?
findShort("turns out random test cases are easier than writing out basic ones") //?

