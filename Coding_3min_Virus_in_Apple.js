"use strict"

// 6 kyu

/*
Coding 3min: Virus in Apple
This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version
Task
Your apple has a virus, and the infection is spreading.
The apple is a two-dimensional array, containing strings "V" (virus) and "A" (uninfected parts). For each hour, the infection spreads one space up, down, left and right.
Input: 2D array apple and number n (n >= 0).
Output: 2D array showing the apple after n hours.
*/

function sc(apple, n) {
    while (n > 0) {
        var temp = JSON.parse(JSON.stringify(apple))
        for (let i = 0; i < apple.length; i++) {
            for (let j = 0; j < apple[i].length; j++) {
                if (apple[i][j] == "V") {
                    if (i > 0) temp[i - 1][j] = "V";
                    if (i < apple.length - 1) temp[i + 1][j] = "V";
                    if (j > 0) temp[i][j - 1] = "V";
                    if (j < apple[i].length - 1) temp[i][j + 1] = "V";
                }
            }
        }
        apple = temp.splice(0);
        n -= 1;
    }
    return apple;
}





// describe("Basic Tests", function(){
// it("It should works for basic tests.", function(){
var apple = [
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "V", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"]
]
var n = 2;

console.log(sc(apple, n)) //?

// apple=[
// ["A","A","A","A","A"],
// ["V","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ],n=1,
// answer=[
// ["V","A","A","A","A"],
// ["V","V","A","A","A"],
// ["V","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// Test.assertDeepEquals(sc(apple,n),answer)

// apple=[
// ["A","A","A","A","A"],
// ["V","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ],n=2,
// answer=[
// ["V","V","A","A","A"],
// ["V","V","V","A","A"],
// ["V","V","A","A","A"],
// ["V","A","A","A","A"],
// ["A","A","A","A","A"]
// ];

// Test.assertDeepEquals(sc(apple,n),answer)

// apple=[
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ],n=1,
// answer=[
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","V","V","V","A"],
// ["A","A","V","A","A"],
// ["A","A","A","A","A"]
// ];

// Test.assertDeepEquals(sc(apple,n),answer)

// apple=[
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ],n=2,
// answer=[
// ["A","A","V","A","A"],
// ["A","V","V","V","A"],
// ["V","V","V","V","V"],
// ["A","V","V","V","A"],
// ["A","A","V","A","A"]
// ];

// Test.assertDeepEquals(sc(apple,n),answer)

// apple=[
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ],n=3,
// answer=[
// ["A","V","V","V","A"],
// ["V","V","V","V","V"],
// ["V","V","V","V","V"],
// ["V","V","V","V","V"],
// ["A","V","V","V","A"]
// ];

// Test.assertDeepEquals(sc(apple,n),answer)

// apple=[
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","V","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ],n=4,
// answer=[
// ["V","V","V","V","V"],
// ["V","V","V","V","V"],
// ["V","V","V","V","V"],
// ["V","V","V","V","V"],
// ["V","V","V","V","V"]
// ];

// Test.assertDeepEquals(sc(apple,n),answer)

// })})
// */
