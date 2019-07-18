function solution(list) {
  let index = 0;
  const result = [];
  while (index < list.length) {
    const item = list[index];
    if (list[index] + 1 !== list[index + 1]) {
      result.push(item.toString());
      index += 1;
    } else {
      let innerIndex = index + 1;
      while (innerIndex < list.length) {
        if (list[innerIndex] === list[innerIndex + 1] - 1) innerIndex += 1;
        else break;
      }
      const sub = innerIndex - index;
      if (sub >= 3) {
        result.push(`${item}-${list[innerIndex]}`);
        index += sub + 1;
      } else {
        result.push(item.toString());
        index += 1;
      }
    }
  }
  return result.join(',');
}

