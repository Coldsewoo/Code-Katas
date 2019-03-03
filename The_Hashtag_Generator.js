"use strict"

// 5 kyu

/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/


function generateHashtag(str) {
    if (str.trim().length == 0) return false;
    var Hash = "#" + str.split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    if (Hash.length > 140) return false;

    return Hash;
}

