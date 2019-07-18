function findAB(numbers, c) {
  if (c === 0) {
    const index = numbers.indexOf(0);
    return [numbers[0], numbers[index]];
  }
  const res = [];
  let leftIndex;
  let rightIndex;
  const minusArr = numbers.filter(e => e < 0);
  if (c > 0 && minusArr.length > 1) {
    leftIndex = 0;
    rightIndex = minusArr.length - 1;
    while (rightIndex - leftIndex >= 1) {
      const pro = minusArr[leftIndex] * minusArr[rightIndex];
      if (pro === c) {
        res.push(minusArr[leftIndex], minusArr[rightIndex]);
        return res;
      } if (pro > c) rightIndex--;
      else leftIndex++;
    }
  }
  leftIndex = 0;
  rightIndex = numbers.length - 1;

  while (rightIndex - leftIndex >= 1) {
    const product = numbers[leftIndex] * numbers[rightIndex];
    if (product === c) {
      res.push(numbers[leftIndex]);
      res.push(numbers[rightIndex]);
      return res;
    } if (c >= 0) {
      if (product > c) rightIndex--;
      else leftIndex++;
    } else if (product > c) leftIndex++;
    else rightIndex--;
  }
  return null;
}

findAB([-3, -2, -2, -1, 0, 1, 2, 3, 4], 4); // ?
