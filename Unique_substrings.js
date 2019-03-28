// var getSubstrings = function(str) {
//   str = str.toString();
//   let strArr = str.toLowerCase().split('');
//   let resultArr = []; 
//   // insert your code here!
//   for (let i = 0; i < strArr.length; i++)
//   {
//     for(let j = strArr.length; j > i; j--) {
//       resultArr.push(strArr.slice(i,j).join(''));
//     }
//   }
//   return resultArr.reduce((p,c) => {
//     if(p.indexOf(c) == -1) p.push(c);
//     return p
//   },[]).length
// };


// getSubstrings("YOLO")

Array.prototype.something = function (...args) {
  let result = this;
  result = this.concat(args)
  return {result, result.length};
}

var a = [1,2,3];
a.something('b','c','d','e'); // ?