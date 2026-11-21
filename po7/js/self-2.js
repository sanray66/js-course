const allProducts = [
    ...products,
    { id: 21, name: '<img src=x onerror=alert(1)>', price: 1 },
];


const listA = document.getElementById('listA');
const fragment = document.createDocumentFragment();
for (const p of allProducts) {
    const li = document.createElement('li');
    li.className = 'product';
    li.textContent = p.name + ' ';

    const price = document.createElement('span');
    price.className = 'price';
    price.textContent = p.price + ' ₽';

    li.append(price);
    fragment.append(li);
}
listA.append(fragment);


const listB = document.getElementById('listB');
let html = '';
for (const p of allProducts) {
    html += `<li class="product">${p.name} <span class="price">${p.price} ₽</span></li>`;
}
listB.innerHTML = html;

