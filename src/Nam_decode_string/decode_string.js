const decodeString = (s) => {
  let repeatNumber = [];
  let tmpRepeatNumber = "";
  let repeatString = [];
  let result = "";

  //3[a2[c]]

  for (let char of s) {
    if (!isNaN(char)) {
      tmpRepeatNumber += char; //3 //2
    } else if (char === "[") {
      repeatNumber.push(tmpRepeatNumber); //[3,2]
      tmpRepeatNumber = "";

      repeatString.push(result); //[''] //['','a']
      result = "";
    } else if (char === "]") {
      result = repeatString.pop() + result.repeat(repeatNumber.pop()); //a + cc = acc
    } else {
      result += char; //a //c ///acc
    }
  }

  return result;
};

module.exports = {
  decodeString,
};
