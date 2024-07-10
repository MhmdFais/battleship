import "./style.css";
import PlayersBoard from "./front-end/playersBoard";

document.addEventListener("DOMContentLoaded", () => {
  const nameContainer = document.querySelector(".name-container");
  const nameTextBox = document.querySelector("#name");
  const form = document.querySelector("#get-name");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameTextBox.value;
    console.log(name);
    nameTextBox.value = "";

    const player = new PlayersBoard(name);

    nameContainer.style.display = "none";
  });
});
