const chessBoardUIEle = document.querySelector(".chessboard");


const chessConfig = {
  boardBuild: {
    board: [],
    grid: {
      column: ["a","b","c","d","e","f","g","h"] ,
      row:["1", "2", "3", "4", "5", "6", "7", "8"],
      formattedRowArray: [],
    }
  }
}

const { board, grid: { column, row, formattedRowArray } } = chessConfig.boardBuild;

// JS BOARD DATA STRUCTURE:
board.push(
  row.map((rowValue) => {
    return column.map((columnValue) => columnValue + rowValue);
  })
);

// CREATE THE UI BOARD:
const chessBoardUI = () => {
 board[0].forEach((rowArr) => {
  // creating our UI rows
  rowEle = document.createElement("div");
  rowEle.setAttribute("class", "row");
  // creating our UI tiles
rowArr.forEach((tile) => {
  const tileEle = document.createElement("button");
  tileEle.setAttribute("class", "tile");
  tileEle.textContent = tile
  rowEle.append(tileEle)
  })
  chessBoardUIEle.append(rowEle)
})
}
chessBoardUI()


console.log(board);

