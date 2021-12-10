module.exports.UncollapseDigits = function UncollapseDigits(digits) {
  let str = '';
  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j <= digits.length; j++) {
      const word = digits.slice(i, j)
      if (digit.includes(word)) {
        str += ' ' + word
        i = j
      }
    }
  }
  return str.trim()
}
const digit = " zero one two three four five six seven eight nine ten ".split(' ')

module.exports.SumMattrix = function SumMattrix(str) {
  const [firstArray, secondArray] = str.toString().split(':');
  const array1 = JSON.parse(firstArray);
  const array2 = JSON.parse(secondArray);
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      array1[i][j] = array1[i][j] + array2[i][j];
    }
  }
  return array1.toString();
}