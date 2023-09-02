const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsArr = ingredients.map(function (element) {
  const elementLi = document.createElement("li");
  elementLi.textContent = element;
  elementLi.classList.add("item");
  return elementLi;
});

ingredientsList.append(...ingredientsArr);
