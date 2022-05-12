// const validSudoku = (input) => {
//   const input = item.value;
//   let rows = [];
//   let columns = [];
//   let boxes = []; 

//   for (let i = 0; i < 9; i++) {
//   rows.push([]);
//   columns.push([]);
//   boxes.push([]); 
//   }

//   for (let i = 0; i < input.length; i++) { // ROW lặp 
//     for (let j = 0; j < input.length; j++) {  // COL lặp
 
//     }
//   }

//   for (let i = 0; i < input.length; i++) {  // ROW lập
//    for (let j = 0; j < input.length; j++) {    // COL lập
//       if(input[i][j] !== ".") {
//           rows[i].push(input[i][j]);
//           columns[j].push(input[i][j]);
//       }
//     }
//   } 

//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input.length; j ++) {
//       let cell = input[i][j]; /* cell chứa hàng và ột */

//       if(cell !== ".") {
//           rows[i].push(cell);
//           columns[j].push(cell);
//         }
//     }
//     for (let i = 0; i < input.length; i++) { 
//       for (let j = 0; j < input.length; j++) {
  
//         let cell = input[i][j];
//         if (cell !== ".") {
//           if( rows[i].includes(cell) ) {
//             return false;
//           } else rows[i].push(cell);
  
//           if( columns[i].includes(cell) ) {
//             return false;
//           } else columns[i].push(cell);
//         }
  
//       }
//     }
//   } 
// }

// module.exports = {
//     validSudoku
// }