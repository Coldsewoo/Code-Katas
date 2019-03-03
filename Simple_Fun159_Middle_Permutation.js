"use strict"

// 4 kyu

/*
You are given a string s. Every letter in s appears once.
Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)
Example
For s = "abc", the result should be "bac".
The permutations in order are:
"abc", "acb", "bac", "bca", "cab", "cba"
So, The middle term is "bac".
Input/Output
[input] string s
unique letters (2 <= length <= 26)
[output] a string
middle permutation.
*/

// Find the largest index k such that a[k] < a[k + 1]. If no such index exists, the permutation is the last permutation.
// Find the largest index l greater than k such that a[k] < a[l].
// Swap the value of a[k] with that of a[l].
// Reverse the sequence from a[k + 1] up to and including the final element a[n].

String.prototype.Swap = function (str, i) {
    let string = this.valueOf()
    return string.substring(0, i - 1) + str + string.substring(i + 1)
}

function middlePermutation(s) {
    if (s.length == 1) return s
    var result = [];
    var string = s.split("").sort().join("");
    result.push(string)
    var nextstr = swap(string)
    var index = 0
    while (index < 10) {
        result.push(nextstr);
        nextstr = swap(nextstr)
        index++
    }
    result //?

    function swap(string) {
        var k, l;
        for (let i = 0; i < string.length - 1; i++) {
            if (string.charAt(i) < string.charAt(i + 1)) k = i;
        }
        for (let i = k; i < string.length - 1; i++) {
            if (string.charAt(i) > string.charAt(i + 1)) l = i;
        }
        if (k == undefined) return "";
        let temp = string.charAt(k);
        string = string.Swap(string.charAt(l), k) //?
        string = string.Swap(temp, l) //?
        return string;
    }
}

//a

//ab ba 

// abc acb bac bca cab cba 6
middlePermutation("abc")
//"bac"
// n!/2번째
//unique letters 


// abcd abdc acbd acdb adbc adcb bacd badc bcad bcda bdac bdca cabd cadb cbad cbda cdab cdba dabc dacb dbac dbca dcab dcba 24
// middlePermutation("abcd")
//"bdca"
// middlePermutation("abcdx")
//"cbxda"
// middlePermutation("abcdxg")
//"cxgdba"
// middlePermutation("abcdxgz")
//"dczxgba"
