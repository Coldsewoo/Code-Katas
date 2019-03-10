/* eslint-disable no-use-before-define */
/* eslint-disable max-len */

// 4 kyu
/*
With your birthday coming up soon, your eccentric friend sent you a message to say "happy birthday":

hhhappyyyy biirrrrrthddaaaayyyyyyy to youuuu
hhapppyyyy biirtttthdaaay too youuu
happy birrrthdayy to youuu
happpyyyy birrtthdaaay tooooo youu
At first it looks like a song, but upon closer investigation, you realize that your friend hid the phrase "happy birthday" thousands of times inside his message. In fact, it contains it more than 2 million times! To thank him, you'd like to reply with exactly how many times it occurs.

To count all the occurences, the procedure is as follows: look through the paragraph and find a 'h'; then find an 'a' later in the paragraph; then find an 'p' after that, and so on. Now count the number of ways in which you can choose letters in this way to make the full phrase.

More precisely, given a text string, you are to determine how many times the search string appears as a sub-sequence of that string.

Write a function called countSubsequences that takes two arguments: needle, the string to be search for and haystack, the string to search in. In our example, "happy birthday" is the needle and the birthday message is the haystack. The function should return the number of times needle occurs as a sub-sequence of haystack. Spaces are also considered part of the needle.

Since the answers can be very large, return only the last 8 digits of the answer in case it exceeds 8 digits. The answers to the test cases will all be shorter than 8 digits.
*/

function countSubsequences(needle, haystack) {
  let first = 1;
  let needleStr = needle;
  let haystackStr = haystack;

  while (needleStr.length > 0 && haystackStr.length > 0) {
    const char = needleStr.charAt(0);
    let charIndex = 1;
    while (char === needleStr.charAt(charIndex)) {
      charIndex += 1;
    }
    let index = haystackStr.indexOf(needleStr.charAt(0));
    if (index === -1) return 0;
    let haystackStrNum = 0;
    while (char === haystackStr.charAt(index)) {
      index += 1;
      haystackStrNum += 1;
    }
    if (charIndex >= haystackStrNum) {
      charIndex = haystackStrNum;
      index = haystackStr.indexOf(needleStr.charAt(0)) + charIndex - 1;
    }
    first *= combinations(haystackStrNum, charIndex);
    needleStr = needleStr.slice(charIndex);
    haystackStr = haystackStr.slice(index);
  }

  function factorial(number) {
    let value = number;
    for (let i = number; i > 1; i -= 1) value *= i - 1;
    return value;
  }

  function combinations(n, r) {
    if (n === r) return 1;
    return factorial(n) / (factorial(r) * factorial(n - r));
  }
  return first;
}
countSubsequences('k0txel306omyy3z0k9', 'kk00ttxeel30066omyyyy3zz0k9');
