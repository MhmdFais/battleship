import Player from "../back-end/player";

export function createPlayerBoard(
  shipOrientationDiv,
  orientationBtn,
  humanBoardDiv,
  startGameText,
  name
) {
  getOrientation(orientationBtn);
  displayBoard(humanBoardDiv, name);
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
  humanBoardDiv.innerHTML = ""; // Clear any existing content

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

function handleCellClick(e, name) {
  const x = e.target.dataset.x;
  const y = e.target.dataset.y;
  console.log(`Cell clicked: x=${x}, y=${y}`);

  //const player = new Player(name, false);
  //player.placeShipOnBoard("shipOne", x, y, "horizontal");
  //console.log(player.gameBoard.board);
}
