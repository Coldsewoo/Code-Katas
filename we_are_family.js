function avgArray(arr) {
  let index = 0;
  const result = [];
  while (index < arr[0].length) {
    result.push(arr.reduce((p, c) => p += c[index], 0) / arr.length);
    index += 1;
  }

  return result;
}


function createPhoneNumber(n) {
  return `(${n.slice(0, 3).join('')}) ${n.slice(3, 6).join('')}-${n.slice(6, 10).join('')}`;
}

function sortByBit(arr) {
  function sortFunc(a, b) {
    const val = arr.slice();
    for (let i = 0; i < arr.length; i++) {
      let num = val[i];
      let index = 31;
      arr[i] = new Array(index + 1);
      while (index >= 0) {
        arr[i][index] = num & 1;
        index--;
        num >>= 1;
      }
      arr[i] = arr[i].join('');
    }
    const aNum = a.split('').filter(e => e === '1').length;
    const bNum = b.split('').filter(e => e === '1').length;
    if (aNum !== bNum) return aNum - bNum;
    return Number(a) - Number(b);
  }
  arr.sort((a, b) => sortFunc(a, b));
}

const arr = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0];
sortByBit(arr);

arr;
