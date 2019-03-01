"use strict"
// 5kyu

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

//a-z : 97-122 , A-Z: 65-90
function rot13(message) {
    var messageArr = [];
    for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);
        if (65 <= code && code <= 90) {
            code += 13;
            if (code > 90) code -= 26;
            messageArr.push(String.fromCharCode(code));
        } else if (97 <= code && code <= 122) {
            code += 13;
            if (code > 122) code -= 26;
            messageArr.push(String.fromCharCode(code));
        } else messageArr.push(message.charAt(i));
    }
    return messageArr.join("");
}

// Test.describe("Rot13", function () {
//     Test.it("test", function () {
//         Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
//     })
//     Test.it("Test", function () {
//         Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))
//     })
// })

