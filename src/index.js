import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const nameContainer = document.querySelector(".name-container");
  const nameTextBox = document.querySelector("#name");
  const form = document.querySelector("#get-name");

  const humanBoardContainer = document.querySelector(".human-board-container");
  const boardArrangeText = document.querySelector(".user-board-arrange-text");
  const buttonsContainer = document.querySelector(".buttons-container");

  const humanBoard = document.querySelector(".human-board");
  const computerBoard = document.querySelector(".computer-board");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameTextBox.value;
    nameTextBox.value = "";

    nameContainer.style.display = "none";
    enablePlayerBoardDisplay(name);
  });

  function enablePlayerBoardDisplay(name) {
    enableDisplay();
    showMessage(name);
    generateBoardS(humanBoard);
    generateBoardS(computerBoard);
  }

  function showMessage(name) {
    boardArrangeText.textContent = `Hello ${name} !! arrange your ships on the board`;
  }

  function enableDisplay() {
    humanBoardContainer.style.display = "block";
    buttonsContainer.style.display = "block";
  }

  function generateBoardS(boardElement) {
    const humanBoardContainer = document.querySelector(
      ".human-board-container"
    );
    humanBoard.style.display = "grid";

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.classList.add("box");
        cell.dataset.row = row;
        cell.dataset.col = col;
        boardElement.appendChild(cell);
      }
    }

    boardElement.style.gridTemplateRows = `repeat(10, 1fr)`;
    boardElement.style.gridTemplateColumns = `repeat(10, 1fr)`;
  }
});
