function findMiddle(str){
  var numReg = /[0-9]/
  if(typeof str !== 'string') return -1;
  const arr = str.split('').filter(e=>numReg.test(e))
  if(arr.length === 0) return -1;
  const resultArr = [...arr.reduce((p,c)=>p*c).toString()]
  if(!resultArr.length) return -1;
  let result;
  if(resultArr.length % 2 === 0) {
    result = resultArr.slice(resultArr.length/2-1,resultArr.length/2+1)
    return result[0] === 0 ? result[1] : Number(result.join(''));
  }
  return Number(resultArr[resultArr.length/2 - 0.5])
}