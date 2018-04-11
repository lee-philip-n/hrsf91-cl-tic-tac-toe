const board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',
};

const win = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9], 
  [1, 4, 7],
  [2, 5, 8], 
  [3, 6, 9], 
  [1, 5, 9], 
  [3, 5, 7]
];

const printBoard = () => {
  console.log(
    `\n ${board[1]} | ${board[2]} | ${board[3]}\n ---------\n ${board[4]} | ${board[5]} | ${board[6]}\n ---------\n ${board[7]} | ${board[8]} | ${board[9]}`
  );
}

const checkWin = () => {
  for (let i = 0; i < win.length; i++) {
    const num0 = win[i][0];
    const num1 = win[i][1];
    const num2 = win[i][2];
    if (board[num0] === board[num1] && board[num0] === board[num2] && board[num0] !== ' ') {
      return true;
    }
  }
  return false;
}

const checkTie = () => {
  let count = 0;
  if (count === 9 && !checkWin()) {
    return true;
  }
  for (let i = 0; i < win.length; i++) {
    for (let j = 0; j < win[i].length; j++) {
      if(win[i][j] !== ' ') {
        count++
      }
    }
  }
  return false;
}

const placePiece = (coordinate, piece) => {
  board[coordinate] = piece;
}

printBoard();
placePiece(1, 'X');
printBoard();
checkWin();
checkTie();