import "./style.css";

const nameWrapper = document.querySelector(".name-textbox-popup-wrapper");
const dialogModal = document.querySelector(".dialog-modal");

function createNameTextboxPopup() {
  const enterNameText = document.createElement("p");
  enterNameText.innerHTML = "Enter your name";
  enterNameText.classList.add("enter-name-text");

  const nameTextbox = document.createElement("input");
  nameTextbox.setAttribute("type", "text");
  nameTextbox.setAttribute("placeholder", "Enter your name");
  nameTextbox.classList.add("name-textbox");

  const submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.classList.add("submit-button");

  dialogModal.appendChild(enterNameText);
  dialogModal.appendChild(nameTextbox);
  dialogModal.appendChild(submitButton);

  nameWrapper.appendChild(dialogModal);
}

// show thw dialog modal when the page loads
createNameTextboxPopup();

window.onload = function () {
  dialogModal.showModal();
};
