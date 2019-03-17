/* eslint-disable max-len */
// 5 kyu
/*
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
  let string = parens;
  const parentValidator = /\(\)/;
  let parensCheck = parentValidator.exec(string);
  while (parensCheck !== null) {
    string = string.replace('()', '');
    parensCheck = parentValidator.exec(string);
  }
  return string.length === 0;
}
