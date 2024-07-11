import "./style.css";
import { createPlayerBoard } from "./front-end/playersBoard";

document.addEventListener("DOMContentLoaded", () => {
  const nameContainer = document.querySelector(".name-container");
  const nameTextBox = document.querySelector("#name");
  const form = document.querySelector("#get-name");

  const humanBoardContainer = document.querySelector(".human-board-container");
  const boardArrangeText = document.querySelector(".user-board-arrange-text");

  const shipOrientationDiv = document.querySelector(".ship-orientation");
  const orientationBtn = document.querySelector(".orie-btn");
  const humanBoardDiv = document.querySelector(".human-board");
  const startGameText = document.querySelector(".start-game");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameTextBox.value;
    console.log(name);
    nameTextBox.value = "";

    nameContainer.style.display = "none";

    enablePlayerBoardDisplay(name);
  });

  function enablePlayerBoardDisplay(name) {
    enableDisplay();
    showMessage(name);
    createPlayerBoard(
      shipOrientationDiv,
      orientationBtn,
      humanBoardDiv,
      startGameText,
      name
    );
  }

  function showMessage(name) {
    boardArrangeText.textContent = `Hello ${name} !! arrange your ships on the board`;
  }

  function enableDisplay() {
    humanBoardContainer.style.display = "block";
  }
});
