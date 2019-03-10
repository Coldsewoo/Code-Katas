
function encodeRailFenceCipher(string, numberRails) {
  if (string.length === 0) return '';
  let strng = string;
  const arr = new Array(numberRails);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = [];
  }
  arr[0] += string.charAt(0);
  strng = strng.slice(1);
  let firstIndex = 0;
  let direction = true;
  while (strng.length > 0) {
    if (firstIndex === 0) {
      direction = true;
    }
    if (firstIndex === numberRails - 1) {
      direction = false;
    }
    if (direction === true) {
      firstIndex += 1;
    } else if (direction === false) {
      firstIndex -= 1;
    }
    arr[firstIndex] += strng.charAt(0);
    strng = strng.slice(1);
  }
  return arr.concat().join('');
}

function decodeRailFenceCipher(string, numberRails) {
  if (string.length === 0) return string;
  let strng = string;
  const arrLen = Math.ceil((strng.length - numberRails) / (numberRails - 1)) + 1;
  const arr = new Array(arrLen);
  for (let i = 0; i < arr.length; i += 1) arr[i] = '';
  const anchorDir = arrLen % 2 !== 0;
  let anchor;
  if ((strng.length - numberRails) % (numberRails - 1) === 0) anchor = 0;
  else if (anchorDir === true) anchor = ((strng.length - numberRails) % (numberRails - 1));
  else anchor = numberRails - 1 - ((strng.length - numberRails) % (numberRails - 1));

  arr[0] += strng.charAt(0);
  strng = strng.slice(1);
  let firstIndex = 1;
  while (firstIndex < arrLen) {
    if (!(firstIndex === arrLen - 1 && anchorDir === false && anchor !== 0)) {
      arr[firstIndex] += strng.charAt(0);
      strng = strng.slice(1);
    }
    firstIndex += 2;
  }
  let secondIndex = 1;
  while (secondIndex < numberRails - 1) {
    let tempIndex = 0;
    while (tempIndex < arr.length) {
      if (tempIndex < arrLen - 1) {
        arr[tempIndex] += strng.charAt(0);
        strng = strng.slice(1);
      } else if (anchorDir === true && secondIndex <= anchor) {
        arr[tempIndex] += strng.charAt(0);
        strng = strng.slice(1);
      } else if (anchorDir === false && secondIndex >= anchor) {
        arr[tempIndex] += strng.charAt(0);
        strng = strng.slice(1);
      }
      tempIndex += 1;
    }
    secondIndex += 1;
  }
  let lastIndex = 0;
  while (lastIndex < arrLen) {
    if (!(lastIndex === arrLen - 1 && anchorDir === true && anchor !== 0)) {
      arr[lastIndex] += strng.charAt(0);
      strng = strng.slice(1);
    }
    lastIndex += 2;
  }
  return arr.map((e, i) => {
    if (i % 2 === 1) return e.split('').reverse().join('');
    return e;
  }).join('');
}

// eslint-disable-next-line no-unused-vars
encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE123', 7);
// eslint-disable-next-line no-unused-vars
decodeRailFenceCipher(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE123', 7), 7);
