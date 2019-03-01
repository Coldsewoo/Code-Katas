"use strict"

// 5 kyu

/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

JavaScript:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
*/

//concept : function in function(operator) in function
// number function -> take function as variable or not?
//

function zero(...args) {
    var num = 0
    if (!arguments[0]) return num;
    var calculation = arguments[0][0] //?
    var secondNum = arguments[0][1]

    if (calculation == "plus") return num + secondNum;
    if (calculation == "minus") return num - secondNum;
    if (calculation == "times") return num * secondNum;
    if (calculation == "divideBy") return Math.floor(num / secondNum);
}

function one(...args) {
    var num = 1
    if (!arguments[0]) return num;
    var calculation = arguments[0][0] //?
    var secondNum = arguments[0][1]

    if (calculation == "plus") return num + secondNum;
    if (calculation == "minus") return num - secondNum;
    if (calculation == "times") return num * secondNum;
    if (calculation == "divideBy") return Math.floor(num / secondNum);
}

function two(...args) {
    var num = 2
    if (!arguments[0]) return num;
    var calculation = arguments[0][0] //?
    var secondNum = arguments[0][1]

    if (calculation == "plus") return num + secondNum;
    if (calculation == "minus") return num - secondNum;
    if (calculation == "times") return num * secondNum;
    if (calculation == "divideBy") return Math.floor(num / secondNum);
}
function three(...args) {
    var num = 3
    if (!arguments[0]) return num;
    var calculation = arguments[0][0] //?
    var secondNum = arguments[0][1]

    if (calculation == "plus") return num + secondNum;
    if (calculation == "minus") return num - secondNum;
    if (calculation == "times") return num * secondNum;
    if (calculation == "divideBy") return Math.floor(num / secondNum);
}
function four(...args) {
    var num = 4
    if (!arguments[0]) return num;
    var calculation = arguments[0][0] //?
    var secondNum = arguments[0][1]

    if (calculation == "plus") return num + secondNum;
    if (calculation == "minus") return num - secondNum;
    if (calculation == "times") return num * secondNum;
    if (calculation == "divideBy") return Math.floor(num / secondNum);
}
function five(...args) {
    var num = 5
    if (!arguments[0]) return num;
    var calculation = arguments[0][0] //?
    var secondNum = arguments[0][1]

    if (calculation == "plus") return num + secondNum;
    if (calculation == "minus") return num - secondNum;
    if (calculation == "times") return num * secondNum;
    if (calculation == "divideBy") return Math.floor(num / secondNum);
}
function six(...args) {
    var num = 6
    if (!arguments[0]) return num;
    var calculation = arguments[0][0] //?
    var secondNum = arguments[0][1]

    if (calculation == "plus") return num + secondNum;
    if (calculation == "minus") return num - secondNum;
    if (calculation == "times") return num * secondNum;
    if (calculation == "divideBy") return Math.floor(num / secondNum);
}
function seven(...args) {
    var num = 7
    if (!arguments[0]) return num;
    var calculation = arguments[0][0] //?
    var secondNum = arguments[0][1]

    if (calculation == "plus") return num + secondNum;
    if (calculation == "minus") return num - secondNum;
    if (calculation == "times") return num * secondNum;
    if (calculation == "divideBy") return Math.floor(num / secondNum);
}
function eight(...args) {
    var num = 8
    if (!arguments[0]) return num;
    var calculation = arguments[0][0] //?
    var secondNum = arguments[0][1]

    if (calculation == "plus") return num + secondNum;
    if (calculation == "minus") return num - secondNum;
    if (calculation == "times") return num * secondNum;
    if (calculation == "divideBy") return Math.floor(num / secondNum);
}
function nine(...args) {
    var num = 9
    if (!arguments[0]) return num;
    var calculation = arguments[0][0] //?
    var secondNum = arguments[0][1]

    if (calculation == "plus") return num + secondNum;
    if (calculation == "minus") return num - secondNum;
    if (calculation == "times") return num * secondNum;
    if (calculation == "divideBy") return Math.floor(num / secondNum);
}

function plus(num) {
    return ["plus", num]
}
//?
function minus(num) {
    return ["minus", num]
}
function times(num) {
    return ["times", num]
}
function dividedBy(num) {
    return ["divideBy", num]
}


