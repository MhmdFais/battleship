import Player from "../back-end/player";

export function createPlayerBoard(
  shipOrientationDiv,
  orientationBtn,
  humanBoardDiv,
  startGameText,
  name
) {
  getOrientation(orientationBtn);
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
