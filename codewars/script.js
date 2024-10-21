//Boggle Word Checker
// const board = [
//   ["A", "B", "H"],
//   ["F", "A", "H"],
//   ["G", "C", "G"],
// ];
//coordinates array:
//letterIndex 0 letter A row: 0 col: 0
//letterIndex 1 letter A row: 1 col: 1
//letterIndex 2 letter G row: 0 col: 2
//letterIndex 3 letter G row: 2 col: 2
//letterIndex 4 letter H row: 0 col: 2
//letterIndex 5 letter H row: 1 col: 2

//letter A array:
//letterIndex 0 letter A row: 0 col: 0
//letterIndex 1 letter A row: 1 col: 1

//letter G array:
//letterIndex 2 letter G row: 0 col: 2
//letterIndex 3 letter G row: 2 col: 2

//letter H array:
//letterIndex 4 letter H row: 0 col: 2
//letterIndex 5 letter H row: 1 col: 2

//console.log(checkWord(board, "AGH"));

//checkWord(){
//get board
//create array containing word letters
//loop through the board for each letter
//add the matching letters' coordinates to the COORDINATES array
//if no matches, return FALSE

//loop through the coordinates array
//group letters' coordinates in seperate arrays

//Check adjacency of grouped letter coordinate arrays in pairs:
//try every combinations until there is no break in the pairs
//if it breaks, return FALSE
//if the chain doesn't break, return TRUE
//[A1,A2] - [G1,G2]: A1-G1, A1-G2, A2-G1, A2-G2 => two possibilities: A2-G1, A2-G2
//[G1] - [H1,H2]: G1-H1, G1-H2 => no adjacencies, chain breaks
//[G2] - [H1,H2]: G2-H1, G2-H2 => one possibility: G2-H2, return TRUE

//}

//[1,2], [7,3], [5,4]
// function checkPairs(arr1, arr2){

// }

// function checkAdjacency(arr1, arr2, i =0, j=0){

//     if(!arr2[j]) {
//         checkAdjacency(arr1,arr2, i++, 0)
//     }
//     if (arr1[i] + 1 === arr2[j]) {
//         return true
//     } else {
//         checkAdjacency(arr1,arr2, j++)
//     }
// }

// checkAdjacency([1,2], [7,3])

// function checkAdjacency(arr1, arr2, i =0, j=0){

//     if(!arr2[j]) {
//         return checkAdjacency(arr1,arr2, i++, 0)
//     }
//     if (arr1[i] + 1 === arr2[j]) {
//         return true
//     } else {
//         return checkAdjacency(arr1,arr2, j++)
//     }
//     return false
// }

// checkAdjacency([1], [1])

// let coordinates = [];
// function checkWord(board, word) {
//   wordArr = word.split("");
//   for (let i = 0; i < wordArr.length; i++) {
//     if (isAvailable(wordArr[i], i)) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return isAdjacent();
//   //return true
// }
// function isAvailable(letter, letterIndex) {
//   for (let row = 0; row < board.length; row++) {
//     for (let col = 0; col < board[row].length; col++) {
//       if (letter === board[row][col]) {
//         getCoordinates(row, col, letterIndex, letter);
//         return true;
//       }
//     }
//   }
// }
// function isAdjacent() {
//   if (coordinates.length == 1) return;
//   for (let i = 0; i < coordinates.length; i++) {
//     if (!coordinates[i + 1]) break;

//     let vertical =
//       (coordinates[i].col + 1 === coordinates[i + 1].col ||
//         coordinates[i].col - 1 === coordinates[i + 1].col) &&
//       coordinates[i].row === coordinates[i + 1].row;
//     let horizontal =
//       coordinates[i].col === coordinates[i + 1].col &&
//       (coordinates[i].row + 1 === coordinates[i + 1].row ||
//         coordinates[i].row - 1 === coordinates[i + 1].row);
//     let diagonal =
//       (coordinates[i].col + 1 === coordinates[i + 1].col ||
//         coordinates[i].col - 1 === coordinates[i + 1].col) &&
//       (coordinates[i].row + 1 === coordinates[i + 1].row ||
//         coordinates[i].row - 1 === coordinates[i + 1].row);
//     if (vertical || horizontal || diagonal) {
//       continue;
//     } else {
//       return "NOT ADJACENT";
//     }
//   }
//   return "is adjacent";
// }
// function getCoordinates(row, col, letterIndex, letter) {
//   console.log(
//     "letterIndex",
//     letterIndex,
//     "letter",
//     letter,
//     "row:",
//     row,
//     "col:",
//     col
//   );
//   coordinates.push({
//     letterIndex: letterIndex,
//     letter: letter,
//     row: row,
//     col: col,
//   });
//   coordinates.sort((a, b) => a.letterIndex - b.letterIndex);
// }

///////////////////
// Connect Four

let pieces = [
  "A_Yellow",
  "B_Red",
  "B_Yellow",
  "C_Red",
  "G_Yellow",
  "C_Red",
  "C_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "F_Yellow",
  "E_Red",
  "D_Yellow",
];

function whoIsWinner(pieces) {
  let grid = Array.from({ length: 6 }, () => Array(7).fill(null));

  for (let moves of pieces) {
    let [col, color] = moves.split("_");
    let colIndex = col.charCodeAt() - 65;
    //charCode A = 65; colIndex = 0
    //charCode B = 66; colIndex = 1
    //charCode C = 67; colIndex = 2
    //charCode D = 68; colIndex = 3
    //charCode E = 69; colIndex = 4
    //charCode F = 70; colIndex = 5
    //charCode G = 71; colIndex = 6
    let rowIndex = 5;

    for (; rowIndex >= 0; rowIndex--) {
      if (grid[rowIndex][colIndex] === null) break;
    }
    grid[rowIndex][colIndex] = color;
    if (checkWinner(rowIndex, colIndex, color)) return color;
  }

  function checkWinner(row, col, color) {
    // Check vertical
    let count = 0;
    for (let i = 0; i < 7; i++) {
      if (grid[row][i] === color) {
        count++;
      }
      count === 4 ? true : (count = 0);
    }
    // Check horizontal
    count = 0;
    for (let i = 0; i < 6; i++) {
      if (grid[i][col] === color) {
        count++;
      }
      count === 4 ? true : (count = 0);
    }

    //(down left)
    count = 0;
    let i = row;
    for (let j = col; j >= 0; j--) {
      if (grid[i][j]) {
        count++;
      }
      i++;
      count === 4 ? true : (count = 0);
    }

    //(down right)
    count = 0;
    for (let j = col; j < 7; j++) {
      if (grid[i][j]) {
        count++;
      }
      count === 4 ? true : (count = 0);
    }

    return false;
  }
  return "Draw";
}

console.log(whoIsWinner(pieces));
