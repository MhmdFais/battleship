import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const nameContainer = document.querySelector(".name-container");
  const nameTextBox = document.querySelector("#name");
  const form = document.querySelector("#get-name");

  const humanBoardContainer = document.querySelector(".human-board-container");
  const boardArrangeText = document.querySelector(".user-board-arrange-text");
  const buttonsContainer = document.querySelector(".buttons-container");

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
  }

  function showMessage(name) {
    boardArrangeText.textContent = `Hello ${name} !! arrange your ships on the board`;
  }

  function enableDisplay() {
    humanBoardContainer.style.display = "block";
    buttonsContainer.style.display = "block";
  }
});
