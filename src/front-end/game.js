import { Player } from "../back-end/player";

class Game {
  constructor(name) {
    this.humanPlayer = new Player(name, false);
    this.computerPlayer = new Player("Computer", true);
    this.isHumanPlayerTurn = true;
  }

  restartGame() {
    this.humanPlayer = new Player(this.humanPlayer.name, false);
    this.computerPlayer = new Player("Computer", true);
    this.isHumanPlayerTurn = true;
    this.placeShips();
    this.displayBoards();
  }

  startGame() {
    this.placeShips();
    this.displayBoards();
  }

  displayBoards() {
    generateGameBoards(this.humanPlayer.gameBoard.board, "human", false);
    generateGameBoards(this.computerPlayer.gameBoard.board, "computer", true);
  }

  generateGameBoards(board, playerType, isComputer) {
    const board = getTheBoardContainer(playerType);
    board.innerHTML = "";
    board.style.display = "grid";

    board.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.classList.add("box");
        cell.dataset.row = rowIndex;
        cell.dataset.col = colIndex;
        cell.textContent = col;
        cell.addEventListener(
          "click",
          this.handleCellClick.bind(this, playerType)
        );
        board.appendChild(cell);
      });
    });

    boardContainer.style.gridTemplateRows = `repeat(10, 1fr)`;
    boardContainer.style.gridTemplateColumns = `repeat(10, 1fr)`;
  }

  getTheBoardContainer(playerType) {
    if (playerType === "human") {
      return document.querySelector(".human-board");
    } else {
      return document.querySelector(".computer-board");
    }
  }

  isGameFinished() {
    return (
      this.humanPlayer.gameBoard.hasAllShipsSunk() ||
      this.computerPlayer.gameBoard.hasAllShipsSunk()
    );
  }

  changeTurn() {
    this.isHumanPlayerTurn = !this.isHumanPlayerTurn;
  }

  computerPlayerTurn() {
    if (!this.isHumanPlayerTurn) {
      setTimeout(() => {
        this.computerPlayerMove();
      }, 1000);
    }
  }

  computerPlayerMove() {
    const result = this.humanPlayer.gameBoard.receiveAttackRandomly();
    if (this.humanPlayer.gameBoard.hasAllShipsSunk()) {
      alert("Computer has won the game");
      return;
    }
    this.changeTurn();
  }

  handleCellClick(e, playerType) {
    if (!this.isHumanPlayerTurn || playerType === "computer") {
      return;
    }

    const row = e.target.dataset.row;
    const col = e.target.dataset.col;

    const result = this.computerPlayer.gameBoard.receiveAttack(row, col);

    if (result === "hit") {
      e.target.textContent = "💥";
    } else {
      e.target.textContent = "❌";
    }

    if (this.computerPlayer.gameBoard.hasAllShipsSunk()) {
      alert("You have won the game");
    }

    this.changeTurn();
    this.computerPlayerTurn();
  }

  placeShips() {
    this.humanPlayer.gameBoard.placeShipRandomly();
    this.computerPlayer.gameBoard.placeShipRandomly();
  }
}

export { Game };
