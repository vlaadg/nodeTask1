module.exports.UncollapseDigits = function UncollapseDigits(digits){
    let str = '';
    for (let i=0;i< digits.length;i++){
      for (let j=i+1;j<=digits.length;j++){
        const word = digits.slice(i,j)
        if(digit.includes(word)){
          str += ' ' + word
          i=j
        }
      }
    }
    return str.trim()
  }
  const digit = "zero nine one one eight two seven three six four two five".split(' ')