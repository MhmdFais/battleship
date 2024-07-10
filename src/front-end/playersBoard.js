import Player from "../back-end/player";

const humanBoardContainer = document.querySelector(".human-board-container");
const boardArrangeText = document.querySelector(".user-board-arrange-text");

export class PlayersBoard {
  constructor(name) {
    this.name = name;
    this.newPlayer = new Player(this.name, false);
    render();
  }

  enableDisplay() {
    humanBoardContainer.style.display = "block";
    boardArrangeText.style.display = "block";
  }

  displayMessage() {
    boardArrangeText.textContent = `Hello ${this.name}!,Arrange your ships`;
  }

  render() {
    enableDisplay();
    displayMessage();
  }
}
