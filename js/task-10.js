function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const inputNumber = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const parentDiv = document.querySelector("#boxes");

function createBox(size) {
  const box = document.createElement("div");
  box.style.backgroundColor = getRandomHexColor();
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  return box;
}

function createBoxes() {
  parentDiv.innerHTML = "";
  const amount = inputNumber.value;
  const boxSizeIncrement = 10;
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = createBox(size);
    parentDiv.appendChild(box);
    size += boxSizeIncrement;
  }
}

function destroyBoxes() {
  parentDiv.innerHTML = "";
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
