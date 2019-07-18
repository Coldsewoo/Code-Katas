const stack = [];
function* icombinations(arr, r, n = arr.length, index = 0) {
  if (r > arr.length || arr.length === 0) yield null;
  if (r === 0) {
    yield stack;
  } else if (n === r) {
    for (let i = 0; i < n; i++) {
      stack.push(arr[index + i]);
    }
    yield stack;
    for (let i = 0; i < n; i++) {
      stack.pop();
    }
  } else {
    stack.push(arr[index]);
    yield* icombinations(arr, r - 1, n - 1, index + 1);

    stack.pop();
    yield* icombinations(arr, r, n - 1, index + 1);
  }
}

const g = icombinations([1, 5, 6, 2, 3, 4], 3);
[...g]; // ?
