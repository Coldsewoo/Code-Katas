// 5 kyu

/*
https://www.codewars.com/kata/bird-mountain/train/javascript
Kata Task
A bird flying high above a mountain range is able to estimate the height of the highest peak.
Can you?
*/

var peakHeight = function(mountain) {
 
 let index = 0;
 while(checkEnd(mountain)) {
   
   index += 1;
   let temp = [];
    for (let i = 0; i < mountain.length; i++) {
     for (let j = 0; j < mountain[i].length; j++) {
       if(checkEdge(mountain, i, j) === true) temp.push([i, j]);
     }
   }
   for (let k = 0; k < temp.length; k++) {
     let item = temp[k];
     mountain[item[0]][item[1]] = index;
   }
 }
  return index;

 function checkEnd(arr) {
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[i].length; j++) {
       if (arr[i][j] === '^') return true;
     }
   }
   return false;
 }

 function checkEdge(arr, i, j) {
   if (i === arr.length - 1 || i === 0 || j === arr[i].length - 1 || j === 0) return true;
   if (arr[i + 1][j] !== '^') return true;
   if (arr[i - 1][j] !== '^') return true;
   if (arr[i][j + 1] !== '^') return true;
   if (arr[i][j - 1] !== '^') return true;
 }
}
var mountain = [
      "^^^^^^        ".split(''),
      " ^^^^^^^^     ".split(''),
      "  ^^^^^^^     ".split(''),
      "  ^^^^^       ".split(''),
      "  ^^^^^^^^^^^ ".split(''),
      "  ^^^^^^      ".split(''),
      "  ^^^^        ".split('')
    ];


// everyEvery=(a,n)=>a.every(x=>x>n) //?

function everyEvery(a,n) {
  
}

// everyEvery=(a,n)=>a.forEach(b=>b.every(x=>x>n))

everyEvery([[78, 117], [110, 99, 104], [117, 107, 115]], 8) //?