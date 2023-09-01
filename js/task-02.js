const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach(function (element, index) {
  const elementLi = document.createElement("li");

  elementLi.textContent = element;
  elementLi.classList.add("item");

  ingredientsList.appendChild(elementLi);
});
