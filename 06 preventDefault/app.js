const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newEntry = document.createElement('li');
    newEntry.innerText = `${product.value} - ${qty.value}`;
    list.prepend(newEntry);
})