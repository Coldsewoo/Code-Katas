
/* eslint-disable max-len */
// 6 kyu

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

var uniqueInOrder=function(iterable){
  if(!Array.isArray(iterable)) iterable = iterable.split('');
  return iterable.reduce((p,c,i,a) => {
    if (a[i] !== a[i+1]) p.push(c)
    return p
  }, [])
}

let a = '123123214'
let b = [1,2,3,45,56];

uniqueInOrder(a) //?
uniqueInOrder(b) //?

