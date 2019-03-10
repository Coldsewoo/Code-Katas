/* eslint-disable max-len */

// 4 kyu
/*
In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
*/

function parseInt(string) {
  const bigNums = ['hundred', 'thousand', 'million'];
  const shortNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const tens = ['forIndex', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const items = string.replace(/\band/g, '').split(/\W+/);
  // const hundredIndex = items.indexOf(bigNums[0]);  //?
  const thousandIndex = items.indexOf(bigNums[1]);
  const millionIndex = items.indexOf(bigNums[2]);
  let millionPart = [];
  let thousandPart = [];
  let restPart = [];
  if (millionIndex > -1) {
    millionPart = items.slice(0, millionIndex);
    if (thousandIndex > -1) {
      thousandPart = items.slice(millionIndex + 1, thousandIndex);
      restPart = items.slice(thousandIndex + 1);
    }
  } else if (thousandIndex > -1) {
    thousandPart = items.slice(0, thousandIndex);
    restPart = items.slice(thousandIndex + 1);
  } else restPart = items;
  function getNums(arr) {
    if (arr.length === 0) return 0;
    let result = 0;
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      if (i === 0 && arr[i + 1] === 'hundred') result += shortNums.indexOf(arr[i]) * 100;
      else if (shortNums.indexOf(arr[i]) > -1) result += shortNums.indexOf(arr[i]);
      else if (tens.indexOf(arr[i]) > -1) result += tens.indexOf(arr[i]) * 10;
    }
    return result;
  }
  return getNums(millionPart) * 1000000 + getNums(thousandPart) * 1000 + getNums(restPart);
}


parseInt('ten million three hundred and twenty thousand two hundred and forty-six');
