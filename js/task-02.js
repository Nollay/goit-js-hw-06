const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createList = document.querySelector("#ingredients")

const ingredientsElement = element => {
  const addItem = document.createElement("li");
  addItem.textContent = element;
  return addItem;
};
const elementListEl = ingredients.map(ingridient =>
  ingredientsElement(ingridient));

createList.append(...elementListEl);








