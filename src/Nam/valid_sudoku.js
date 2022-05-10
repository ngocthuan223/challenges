const validSudoku = (sodoku) => {
  if (checkValue(sodoku) == false) {
    return false;
  }

  //   for (let i = 0; i < sodoku.length; i++) {
  //     for (let j = 0; j < sodoku[i].length; j++) {
  //       let num = sodoku[i][j];
  //       for (let k = 1; k <= sodoku[i].length; k++) {
  //         if (num == sodoku[i][k] && j != k) {
  //           return false;
  //         }
  //       }
  //     }
  //     return true;
  //   }

  let arr = [];

  for (let i = 0; i < sodoku.length; i++) {
    arr.push([]);
    for (let j = 0; j < sodoku[i].length; j++) {
      arr.push(sodoku[i][j]);
    }
  }

  if (checkValue(arr) == false) {
    return false;
  }

  return true;
};

const checkValue = (sodoku) => {
  for (let i = 0; i < sodoku.length; i++) {
    for (let j = 0; j < sodoku[i].length; j++) {
      let num = sodoku[i][j];
      for (let k = 1; k <= sodoku[i].length; k++) {
        if (num == sodoku[i][k] && j != k) {
          return false;
        }
      }
    }
    return true;
  }
};

module.exports = {
  validSudoku,
};
