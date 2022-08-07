const categoryEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryEl.length}`);


const categoryListEl = document.querySelectorAll("#categories>li")
categoryListEl.forEach(nameCategory => {
    const categoryListEl = `Category: ${nameCategory.firstElementChild.textContent}`;
    const amountElementEl = `Elements: ${nameCategory.lastElementChild.children.length}`;
    console.log(categoryListEl)
    console.log(amountElementEl)
});












