"use strict"

//5 kyu

/*
Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

Subsequence
A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

Example subsequence
Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

LCS examples
LCS( "abcdef" , "abc" ) => returns "abc"
LCS( "abcdef" , "acf" ) => returns "acf"
LCS( "132535365" , "123456789" ) => returns "12356"
Notes
Both arguments will be strings
Return value must be a string
Return an empty string if there exists no common subsequence
Both arguments will have one or more characters (in JavaScript)
All tests will only have a single longest common subsequence. Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".
Note that the Haskell variant will use randomized testing, but any longest common subsequence will be valid.

Note that the OCaml variant is using generic lists instead of strings, and will also have randomized tests (any longest common subsequence will be valid).

Tips
Wikipedia has an explanation of the two properties that can be used to solve the problem:
https://en.wikipedia.org/wiki/Longest_common_subsequence_problem#First_property
*/

function LCS(x, y) {
    var Carr = LCSLength(x, y)
    var i = x.length;
    var j = y.length;
    return LCS2(Carr, x, y, i, j) //?


    function LCS2(Carr, x, y, i, j) {
        if (i == 0 || j == 0) return "";
        if (x.charAt(i - 1) == y.charAt(j - 1)) return LCS2(Carr, x, y, i - 1, j - 1) + x.charAt(i - 1)
        if (Carr[i][j - 1] > Carr[i - 1][j]) return LCS2(Carr, x, y, i, j - 1)
        return LCS2(Carr, x, y, i - 1, j)
    }

    function LCSLength(x, y) {

        var Carr = new Array(x.length + 1);
        for (let k = 0; k <= x.length; k++) {
            Carr[k] = new Array(y.length + 1);
            Carr[k][0] = 0;
            for (let l = 0; l <= y.length; l++) {
                Carr[0][l] = 0;
            }
        }
        for (let i = 1; i <= x.length; i++) {
            for (let j = 1; j <= y.length; j++) {
                if (x.charAt(i - 1) == y.charAt(j - 1)) {
                    Carr[i][j] = Carr[i - 1][j - 1] + 1
                }
                else Carr[i][j] = Math.max(Carr[i][j - 1], Carr[i - 1][j])
            }
        }
        return Carr;
    }

}

/*
Computing the length of the LCS
The function below takes as input sequences X[1..m] and Y[1..n], computes the LCS between X[1..i] and Y[1..j] for all 1 ≤ i ≤ m and 1 ≤ j ≤ n, and stores it in C[i,j]. C[m,n] will contain the length of the LCS of X and Y.

function LCSLength(X[1..m], Y[1..n])
    C = array(0..m, 0..n)
    for i := 0..m
       C[i,0] = 0
    for j := 0..n
       C[0,j] = 0
    for i := 1..m
        for j := 1..n
            if X[i] = Y[j]
                C[i,j] := C[i-1,j-1] + 1
            else
                C[i,j] := max(C[i,j-1], C[i-1,j])
    return C[m,n]

*/

/*
Reading out a LCS
The following function backtracks the choices taken when computing the C table. If the last characters in the prefixes are equal, they must be in an LCS. If not, check what gave the largest LCS of keeping {\displaystyle x_{i}} x_{i} and {\displaystyle y_{j}} y_{j}, and make the same choice. Just choose one if they were equally long. Call the function with i=m and j=n.

function backtrack(C[0..m,0..n], X[1..m], Y[1..n], i, j)
    if i = 0 or j = 0
        return ""
    if  X[i] = Y[j]
        return backtrack(C, X, Y, i-1, j-1) + X[i]
    if C[i,j-1] > C[i-1,j]
        return backtrack(C, X, Y, i, j-1)
    return backtrack(C, X, Y, i-1, j)

*/

