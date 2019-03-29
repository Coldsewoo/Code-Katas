//  bata

/*
Your challenge is to create a function that determines whether or not the characters within a word appear in alphabetical order. If the letters appear in order, return 'IN ORDER'. If the letters appear out of order, return 'OUT OF ORDER'. If the letters appear in reverse order, return 'IN REVERSE ORDER'.

For example, the word 'almost' would return 'IN ORDER', 'cat' would return 'OUT OF ORDER', and 'sponge' would return 'IN REVERSE ORDER'.
*/

function order(input){
  let inputArr = input.split('').map(e=> Number(e.charCodeAt(0)))
  for(let index in inputArr) {
    if(inputArr[index] > inputArr[index + 1]) {

      for (let i = index; i < inputArr.length; i++) {
        if (inputArr[i] < inputArr[i+1]) return 'OUT OF ORDER';
      }
      if (index == inputArr.length - 2) return 'IN REVERSE ORDER'
    }
  }
  return 'IN ORDER'
}

order('sponge') // ?