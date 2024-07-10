import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const nameTextBox = document.querySelector("#name");
  const form = document.querySelector("#get-name");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameTextBox.value;
    console.log(name);
    nameTextBox.value = "";
  });
});
