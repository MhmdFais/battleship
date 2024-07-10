import "./style.css";

const nameTextBox = document.querySelector("#name");

function getNameFromUser() {
  return nameTextBox.value;
}

getNameFromUser();
