/* eslint-disable max-len */
// 6 kyu

/*
Task
 	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
Rules
 	1.  The input string will always be lower case but maybe empty.

2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function makeUpperCase(str, index) {
  let strArr = str.split('');
  strArr[index] = strArr[index].toUpperCase();
  return strArr.join('')
}


function wave(str){
  const result = [];
  for (let index = 0; index < str.length; index++) {
    if(str.charAt(index) !== ' ') result.push(makeUpperCase(str, index));
  };
  return result; 
}

wave("hello") // ?

