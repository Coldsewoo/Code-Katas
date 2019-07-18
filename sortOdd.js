function sortArray(array) {
  const arr = array.slice();
  const arrOdd = arr.filter(e => e & 1).sort((a, b) => a - b);
  const arrNotodd = arr.filter(e => !(e & 1));
  return arr.map(e => (e & 1 ? arrOdd.shift() : arrNotodd.shift()));
}

sortArray([5, 3, 1, 8, 0]);
