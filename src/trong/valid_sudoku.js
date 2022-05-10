const validSudoku = (sodoku) => {
    for (let i = 0; i < board.length; i++) { 
        for (let j = 0; j < board.length; j++) {
          let cell = board[i][j];
          if(cell !== ".") {
            if (rows[i].includes(cell) {
              return false
            } else rows[i].push(cell);
    
            if (columns[j].includes(cell) {
              return false;
            } else columns[j].push(cell);
    
            let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);
    
            if (boxes[boxIndex].includes(cell) {
              return false;
            } else boxes[boxIndex].push(cell);
    
          }
        }
      } 
      return true;
}
module.exports = {
    validSudoku
}

