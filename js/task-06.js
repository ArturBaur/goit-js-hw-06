const inputElement = document.getElementById("validation-input");
const requiredLength = parseInt(inputElement.getAttribute("data-length"));

inputElement.addEventListener("blur", () => {
  const inputValue = inputElement.value;

  if (inputValue.length === requiredLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
