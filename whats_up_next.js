"use strict"
// 8kyu

/*

Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"

*/

// number for numbers of any kind: integer or floating-point. v
// string for strings. A string may have one or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// object for more complex data structures.
// symbol for unique identifiers.





function nextItem(xs, item) {
    // xs == number
    if (typeof (xs) == "number") {
        xs = xs.toString();
        item = item.toString();
        var index = xs.indexOf(item);
        if (index == -1 || index == xs.length - 1) return undefined;
        return xs[index + item.length];
    }

    // xs == string
    if (typeof (xs) == "string") {
        var index = xs.indexOf(item);
        if (index == -1 || index == xs.length - 1) return undefined;
        return xs[index + item.length];
    }

    // xs == array
    if (Array.isArray(xs) == true) {
        var index = xs.indexOf(item);
        if (index == -1 || index == xs.length - 1) return undefined;
        return xs[index + 1];
    }

    // xs == object 
    if (typeof (xs) == "object") {
        for (const num of xs) {
            if (num == item) {
                return xs.next().value
            }
        }
    }
}


function* countFrom(n) {
    for (let i = n; ; ++i) {
        yield i;

    }
}
