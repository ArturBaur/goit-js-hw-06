const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.querySelector("#value");

let counterValue = 0;

const decrease = () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
};

const increase = () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
};

decrementButton.addEventListener("click", decrease);
incrementButton.addEventListener("click", increase);
