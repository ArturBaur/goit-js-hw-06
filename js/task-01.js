const categoriesList = document.querySelectorAll("li.item");
const numberOfCategories = categoriesList.length;
console.log(`Number of categories: ${numberOfCategories}`);
console.log(" ");

for (const categoryItem of categoriesList) {
  const categoryHeader = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryHeader}`);
  console.log(`Elements: ${categoryElements}`);
  console.log(" ");
}
