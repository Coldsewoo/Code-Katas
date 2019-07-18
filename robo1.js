/* eslint-disable max-len */
/*
F - Wrap this command around <span style="color: pink"> and </span> tags so that it is highlighted pink in our editor
L - Wrap this command around <span style="color: red"> and </span> tags so that it is highlighted red in our editor
R - Wrap this command around <span style="color: green"> and </span> tags so that it is highlighted green in our editor
Digits from 0 through 9 - Wrap these around <span style="color: orange"> and </span> tags so that they are highlighted orange in our editor
Round Brackets - Do not apply any syntax highlighting to these characters
*/

function highlight(code) {
  const arr = code.split('');
  const arrP = [];
  for (let i = 0; i < arr.length;) {
    let char = arr[i];
    let index = i;
    if (isNaN(Number(arr[i]))) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === arr[i]) char += arr[j];
        else {
          index = j;
          break;
        }
      }
    } else if (!isNaN(Number(arr[i]))) {
      for (let j = i + 1; j < arr.length; j++) {
        if (!isNaN(Number(arr[j]))) char += arr[j];
        else {
          index = j;
          break;
        }
      }
    }
    arrP.push(char);
    i += char.length;
  }
  arrP;
  let index = 0;
  while (index < arrP.length) {
    if (arrP[index] === '(') {
      arrP.splice(index, 3);
    } else {
      arrP[index] = wrap(arrP[index]);
    }
    index += 1;
  }
  return arrP.join('');
}

function wrap(char) {
  let result;
  switch (char.charAt(0)) {
    case 'F':
      result = `<span style="color: pink">${char}</span>`;
      break;
    case 'L':
      result = `<span style="color: red">${char}</span>`;
      break;
    case 'R':
      result = `<span style="color: green">${char}</span>`;
      break;
    default:
      result = `<span style="color: orange">${char}</span>`;
      break;
  }
  return result;
}


highlight('FF3RF5533555LF(7)77LL'); // ?
