import "./style.css";

const nameTextBox = document.querySelector("#name");
const nameBtn = document.querySelector("#name-btn");

function getNameFromUser() {
  const name = nameTextBox.value;

  nameBtn.addEventListener("click", () => {
    console.log(name);
  });
}

getNameFromUser();
