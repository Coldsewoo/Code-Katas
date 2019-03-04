"use strict"

// 6 kyu
/*
Encrypt this!
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function (text) {
    if (text.length == 0) return ""
    var textArr = text.split(/\s/g)
    var result = []
    for (let i = 0; i < textArr.length; i++) {
        let text = "";
        for (let char of textArr[i]) {
            text += char
        }
        let temp = text.charAt(1); //?
        let temp2 = text.charAt(textArr[i].length - 1) //?
        let charCode = text.charCodeAt(0) //?
        text = charCode + text.replace(/.$/, temp).replace(/^./, "").replace(/^./, temp2)
        result.push(text);
    }
    return result.join(" ")
}

encryptThis("good") //?

