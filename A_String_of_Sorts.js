/* eslint-disable max-len */
// 6 kyu
/*
Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

sortString("foos", "of")       => "oofs"

sortString("string", "gnirts") => "gnirts"

sortString("banana", "abn")    => "aaabnn"
To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
*/

function sortString(string, ordering) {
  const orders = ordering.split('').reduce((p, c) => {
    if (p.indexOf(c) === -1) p.push(c)
    return p
  }, [])
  const result = []
  const stringArr = string.split('')
  let index = 0
  while (index < orders.length) {
    let innerIndex = 0
    while (innerIndex < stringArr.length) {
      if (stringArr[innerIndex] === orders[index]) {
        result.push(stringArr.splice(innerIndex, 1)[0])
      } else innerIndex += 1
    }
    index += 1
  }
  return result.concat(stringArr).join('')
}

sortString('banana', 'aaabnabn') // ?
