import { createPlayer } from "../back-end/player";
import { ships, hitShip } from "./ship";

let currentIndex = 0;
//let player;

export function createPlayerBoard(
  shipOrientationDiv,
  orientationBtn,
  humanBoardDiv,
  startGameText,
  name
) {
  const player = createPlayer(name, false);
  getOrientation(orientationBtn);
  displayBoard(humanBoardDiv, player);
}

function getOrientation(orientationBtn) {
  console.log(`Button ID: ${orientationBtn.id}`);

  if (orientationBtn.id === "horizontal") {
    orientationBtn.innerText = "Horizontal";
  } else {
    orientationBtn.innerText = "Vertical";
  }

  orientationBtn.addEventListener("click", () => {
    if (orientationBtn.id === "horizontal") {
      orientationBtn.id = "vertical";
      orientationBtn.innerText = "Vertical";
    } else {
      orientationBtn.id = "horizontal";
      orientationBtn.innerText = "Horizontal";
    }
    console.log(`Button ID changed to: ${orientationBtn.id}`);
  });
}

function displayBoard(humanBoardDiv, name) {
  humanBoardDiv.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.dataset.x = j;
      cell.dataset.y = i;
      cell.addEventListener("click", (e) => handleCellClick(e, name));
      humanBoardDiv.appendChild(cell);
    }
  }

  // Update the display of the humanBoardDiv
  humanBoardDiv.style.display = "grid";
}

function handleCellClick(e, player) {
  const x = parseInt(e.target.dataset.x);
  const y = parseInt(e.target.dataset.y);
  console.log(`Cell clicked: x=${x}, y=${y}`);

  const currentShip = ships[currentIndex];
  const currentShipName = currentShip.name;
  const currentShipLength = currentShip.length;

  const placed = player.placeShipOnBoard(currentShipName, x, y, "horizontal");
  console.log(player.gameBoard.board);

  if (placed) {
    colorShipOnBoard(x, y, currentShipLength, "horizontal");
    currentIndex++;
  }
}

function colorShipOnBoard(x, y, length, orientation) {
  for (let i = 0; i < length; i++) {
    let cell;
    if (orientation === "horizontal") {
      cell = document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`);
    } else {
      cell = document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`);
    }
    if (cell) {
      cell.style.backgroundColor = "blue";
    }
  }
}
