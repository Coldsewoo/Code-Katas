function findD(arr) {
  arr.sort((a, b) => a - b);
  let res;
  for (let j = arr.length - 1; j >= 0; j--) {
    const temp = arr.slice();
    temp.splice(j, 1);
    if (findSum(temp, arr[j]) === true) {
      res = arr[j];
      break;
    }
  }

  function findSum(array, num) {
    let found = false;
    for (let i = 0; i < array.length; i++) {
      if (found) break;
      let leftIndex = i + 1;
      let rightIndex = array.length - 1;
      while (true) {
        if (rightIndex - leftIndex < 1) break;
        const sum = array[i] + array[leftIndex] + array[rightIndex];
        if (sum === num) {
          found = true;
          break;
        } else if (sum >= num) rightIndex--;
        else leftIndex++;
      }
    }
    return found;
  }
  return res === undefined ? null : res;
}


findD([-838, -725, -693, -669, -417, 176, 409, 502, 588, 710, 842, 862, 897, 998]); // ?
