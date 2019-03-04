"use strict"

// 6 kyu

/*
If you're faced with an input box, like this:

                                           +--------------+
  Enter the price of the item, in dollars: |              |
                                           +--------------+
do you put the $ sign in, or not? Inevitably, some people will type a $ sign and others will leave it out. The instructions could be made clearer - but that won't help those annoying people who never read instructions anyway.
A better solution is to write code that can handle the input whether it includes a $ sign or not.
So, we need a simple function that converts a string representing a number (possibly with a $ sign in front of it) into the number itself.
Remember to consider negative numbers (the - sign may come either before or after the $ sign, if there is one), and any extraneous space characters (leading, trailing, or around the $ sign) that the users might put in. You do not need to handle trailing characters other than spaces (e.g. "1.2 3"). If the given string does not represent a number, (either with or without a $ sign), return 0.0 .

*/

function money_value(s) {
    var minusRegex = /\-/
    var numbers = /(\d+\.\d+)|\.\d+|\d+/
    numbers //?
    if (numbers.test(s) == false) return "0.0"
    var result = numbers.exec(s)[0].trim() //?
    while (result.startsWith("0") == true) {
        result = result.substring(1, result.length);
    }
    if (result.startsWith(".")) result = 0 + result;
    if (result.indexOf(".") == -1) {
        result += ".0"

    }
    while (result.length < 4) result += "0"
    var minus = minusRegex.test(s) //?
    if (minus == true) result = "-" + result;
    return result;
}


function money_value(s) {
    return s.replace(/\$|\s/g, "") || 0
}


money_value("12.34") //?
//, 12.34
money_value(" $5.67") //?
//, 5.67
money_value("-0.89") //?
//, -0.89
money_value("-$ 0.1") //?
//, -0.10
money_value("$-2.3456") //?
//, -2.3456
money_value("007") //?
//, 7.00
money_value(" $ 89") //?
//, 89.0
money_value("   .11") //?
//, 0.11
money_value("$.2") //?
//, 0.20
money_value("-.34") //?
//, -0.34
money_value("$$$") //?
//, 0.0



