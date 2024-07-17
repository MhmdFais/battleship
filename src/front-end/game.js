import { Player } from "../back-end/player";

function createGame(name) {
  let humanPlayer = new Player(name, false);
  let computerPlayer = new Player("Computer", true);
  let isHumanPlayerTurn = true;

  function placeShips() {
    humanPlayer.gameBoard.placeShipRandomly();
    computerPlayer.gameBoard.placeShipRandomly();
  }

  function displayBoards() {
    generateGameBoards(humanPlayer.gameBoard.board, "human", false);
    generateGameBoards(computerPlayer.gameBoard.board, "computer", true);
  }

  function generateGameBoards(board, playerType, isComputer) {
    const boardContainer = getTheBoardContainer(playerType);
    boardContainer.innerHTML = "";
    boardContainer.style.display = "grid";

    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellElement = createCellElement(
          rowIndex,
          colIndex,
          cell,
          isComputer
        );
        boardContainer.appendChild(cellElement);
      });
    });

    boardContainer.style.gridTemplateRows = `repeat(10, 1fr)`;
    boardContainer.style.gridTemplateColumns = `repeat(10, 1fr)`;
  }

  function getTheBoardContainer(playerType) {
    if (playerType === "human") {
      return document.querySelector(".human-board");
    } else {
      return document.querySelector(".computer-board");
    }
  }

  function createCellElement(rowIndex, colIndex, cell, isComputer) {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.classList.add("box");

    if (cell === "hit") {
      cellElement.classList.add("hit");
      cellElement.textContent = "💥";
      cellElement.style.backgroundColor = "#475569";
    } else if (cell === "miss") {
      cellElement.classList.add("miss");
      cellElement.textContent = "❌";
      cellElement.style.backgroundColor = "#cbd5e1";
    }

    if (!isComputer && cell === "ship") {
      cellElement.classList.add("own-ship");
      cellElement.style.backgroundColor = "#94a3b8";
      cellElement.style.border = "0.4px solid #64748b";
    }

    if (isComputer && !isGameFinished()) {
      cellElement.addEventListener("click", () => {
        if (isHumanPlayerTurn) {
          computerPlayer.gameBoard.receiveAttack(rowIndex, colIndex);
          attackHumanPlayer(humanPlayer.gameBoard);
          updateTheBoard(true);
        }
      });
    }

    return cellElement;
  }

  function attackHumanPlayer(humanGameBoard) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);

    if (
      humanGameBoard.board[row][col] === "hit" ||
      humanGameBoard.board[row][col] === "miss"
    ) {
      return;
    } else {
      humanGameBoard.receiveAttack(row, col);
    }
  }

  function updateTheBoard(isComputer) {
    isHumanPlayerTurn = !isHumanPlayerTurn;

    if (isGameFinished()) {
      const humanStatus = humanPlayer.gameBoard.hasAllShipsSunk();
      const computerStatus = computerPlayer.gameBoard.hasAllShipsSunk();

      if (humanStatus && computerStatus) {
        displayWinner("draw");
      } else if (humanStatus) {
        displayWinner("computer");
      } else {
        displayWinner("human");
      }

      generateGameBoards(humanPlayer.gameBoard.board, "human", false);
      generateGameBoards(computerPlayer.gameBoard.board, "computer", false);

      return;
    }

    generateGameBoards(computerPlayer.gameBoard.board, "computer", true);

    setTimeout(() => {
      generateGameBoards(humanPlayer.gameBoard.board, "human", false);
      isHumanPlayerTurn = true;
    }, 1000);
  }

  function isGameFinished() {
    return (
      humanPlayer.gameBoard.hasAllShipsSunk() ||
      computerPlayer.gameBoard.hasAllShipsSunk()
    );
  }

  function displayWinner(winner) {
    const message = document.querySelector(".user-board-arrange-text");
    message.textContent = "";
    message.style.display = "block";

    if (winner === "draw") {
      message.textContent = "It's a draw";
    } else if (winner === "computer") {
      message.textContent = "Computer won the game";
    } else {
      message.textContent = `${name} won the game`;
    }
  }

  function startGame() {
    placeShips();
    displayBoards();
  }

  return {
    startGame,
  };
}

export { createGame };
