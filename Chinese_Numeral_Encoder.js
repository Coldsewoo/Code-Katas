"use strict"
// 4 kyu

/*
Create a function that takes a Number as its argument and returns a Chinese numeral string. You don't need to validate the input argument, it will always be a Number in the range [-99999.999, 99999.999], rounded to the 8th significant digit.
Simplified Chinese numerals have characters representing each number from 0 to 9 and additional numbers representing larger numbers like 10, 100, 1000, and 10000. ```` javascript 0 líng 零 1 yī 一 2 èr 二 3 sān 三 4 sì 四 5 wǔ 五 6 liù 六 7 qī 七 8 bā 八 9 jiǔ 九 10 shí 十 100 bǎi 百 1000 qiān 千 10000 wàn 万 ```` 
Multiple-digit numbers are constructed by first the digit value (1 to 9) and then the place multiplier (such as 10, 100, 1000), starting with the most significant digit. A special case is made for 10 - 19 where the leading digit value (yī 一) is dropped. Note that this special case is only made for the actual values 10 - 19, not any larger values. ```` javascript 9 九 10 十 11 十一 18 十八 21 二十一 110 一百一十 123 一百二十三 24681 二万四千六百八十一 ```` 
Trailing zeros are omitted, but interior zeros are grouped together and indicated by a single 零 character without giving the place multiplier. ```` javascript 10 十 20 二十 104 一百零四 1004 一千零四 10004 一万零四 10000 一万 ```` 
Decimal numbers are constructed by first writing the whole number part, and then inserting a point (diǎn 点), followed by the decimal portion. The decimal portion is expressed using only the digits 0 to 9, without any positional characters and without grouping zeros. ```` javascript 0.1 零点一 123.45 一百二十三点四五 ```` 
Negative numbers are the same as other numbers, but add a 负 (fù) before the number. 
For more information, please see http://en.wikipedia.org/wiki/Chinese_numerals .
*/
var numerals = {
    "-": "负",
    ".": "点",
    0: "零",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "七",
    8: "八",
    9: "九",
    10: "十",
    100: "百",
    1000: "千",
    10000: "万"
};
String.prototype.first = function () {
    return this.valueOf().charAt(0);
}
String.prototype.shift = function () {
    return this.valueOf().slice(1);
}

function toChineseNumeral(num) {
    var number = num.toString();
    var result = ""
    if (number.charAt(0) == "-") {
        result += numerals["-"];
        number = number.slice(1);
    }
    var numArr = number.split(".")
    var int = numArr[0]
    var len = int.length
    if (int.length == 1 && int == "0") {
        result += "零"
    } else {
        for (let i = int.length - 1; i > 0; i--) {
            result += int.first() == 0 ? result.charAt(result.length - 1) != "零" ? numerals[0] : "" : int.first() != 1 ? numerals[int.first()] + numerals[10 ** i] : i >= 2 || len > 2 ? numerals[int.first()] + numerals[10 ** i] : numerals[10 ** i]
            int = int.shift()
        }
        result += numerals[int]
        result.charAt(result.length - 1) == "零"
        result.slice(0, result.length - 1)
        while (result.charAt(result.length - 1) == "零") {
            result = result.slice(0, result.length - 1)
        }
    }

    if (numArr[1]) {
        result += numerals["."]
        for (let char of numArr[1]) {
            result += numerals[char]
        }
    }
    return result
}



toChineseNumeral(0.01)
// // '十');
// toChineseNumeral(110)
// // '一百一十');
// toChineseNumeral(111)
// // '一百一十一');
// toChineseNumeral(1000)
// // '一千');
// toChineseNumeral(10000)
// // '一万');
// toChineseNumeral(10006)
// // '一万零六');
// toChineseNumeral(10306.005)
// // '一万零三百零六点零零五');
// toChineseNumeral(0.5)
// // '零点五');
// toChineseNumeral(-5)
// // '负五');
// toChineseNumeral(9)
// // '九');