import { Player } from "../back-end/player";

export function PlaceShipsOnHumanBoard(name) {
  let humanPlayer = new Player(name, false);

  function placeShipOnHumanRandomly() {
    humanPlayer.gameBoard.placeShipRandomly();
  }

  function displayHumanBoard() {
    generateGameBoards(humanPlayer.gameBoard.board, "human", false);
  }

  function generateGameBoards(board, playerType, isComputer) {
    const humanBoardContainer = document.querySelector(
      ".human-board-container"
    );
    humanBoardContainer.innerHTML = "";
    humanBoardContainer.className = "grid";

    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.classList.add("box");
        cell.dataset.row = rowIndex;
        cell.dataset.col = colIndex;
        cell.textContent = col;
        addShipClass(cell, cell, isComputer);
        humanBoardContainer.appendChild(cell);
      });
    });

    function addShipClass(cell, cell, isComputer) {
      if (cell === "ship") {
        cell.classList.add("own-ship");
      }
    }
  }

  // creating the board without any click event
}
