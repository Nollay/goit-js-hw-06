const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredients => {
  const addItem = document.createElement("li");
  addItem.classList.add("item");
  addItem.textContent = ingredients;
  
  const createList = document.querySelector("#ingredients")
  createList.append(addItem)
  
});








