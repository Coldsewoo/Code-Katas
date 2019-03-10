/* eslint-disable max-len */

// 4 kyu
/*
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/

// eslint-disable-next-line no-unused-vars
function snail(array) {
  const cur = {
    x: 0,
    y: 0,
  };
  const Xlen = array.length;
  const Ylen = array[0].length;
  const goal = Xlen * Ylen;
  let index = 0;
  const dir = {
    x: true,
    y: true,
  };
  const result = [];
  while (result.length < goal) {
    result.push(array[cur.y][cur.x]);
    if (dir.x === true && dir.y === true) {
      if (cur.x === Xlen - index - 1) {
        cur.y += 1;
        dir.x = false;
      } else cur.x += 1;
    } else if (dir.x === false && dir.y === true) {
      if (cur.y === Ylen - index - 1) {
        cur.x -= 1;
        dir.y = false;
      } else cur.y += 1;
    } else if (dir.x === false && dir.y === false) {
      if (cur.x === index) {
        cur.y -= 1;
        dir.x = true;
      } else cur.x -= 1;
    } else if (dir.x === true && dir.y === false) {
      if (cur.y === index + 1) {
        cur.x += 1;
        dir.y = true;
        index += 1;
      } else cur.y -= 1;
    }
  }
  return result;
}
