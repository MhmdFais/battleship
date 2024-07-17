import "./style.css";
import { GameBoard } from "./back-end/gameBoard";
import { Game } from "./front-end/game";

document.addEventListener("DOMContentLoaded", () => {
  const nameContainer = document.querySelector(".name-container");
  const nameTextBox = document.querySelector("#name");
  const form = document.querySelector("#get-name");

  const humanBoardContainer = document.querySelector(".human-board-container");
  const computerBoardContainer = document.querySelector(
    ".computer-board-container"
  );
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
    startGame(name);
    //generateBoardS(humanBoard);
    //generateBoardS(computerBoard);
  }

  function showMessage(name) {
    boardArrangeText.textContent = `Hello ${name} !! arrange your ships on the board`;
  }

  function enableDisplay() {
    humanBoardContainer.style.display = "block";
    computerBoardContainer.style.display = "block";
    buttonsContainer.style.display = "block";
  }

  function startGame(name) {
    const game = new Game(name);
    game.startGame();
  }
});
