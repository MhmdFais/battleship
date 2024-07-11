import Player from "../back-end/player";

const humanBoardContainer = document.querySelector(".human-board-container");
const boardArrangeText = document.querySelector(".user-board-arrange-text");

export function enablePlayerBoardDisplay(name) {
  //const player = new Player(name, false);
  enableDisplay();
  showMessage(name);
}

function showMessage(name) {
  boardArrangeText.textContent = `Hello ${name}!, please arrange your ships on the board`;
}

function enableDisplay() {
  humanBoardContainer.style.display = "block";
}
