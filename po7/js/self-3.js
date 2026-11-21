const products = [
    { id: 1, name: 'Клавиатура', price: 1250 },
    { id: 2, name: 'Мышь', price: 790 },
    { id: 3, name: 'Коврик', price: 430 },
];
const cart = new Map(); // id -> количество

const list = document.getElementById('list');
for (const p of products) {
    const li = document.createElement('li');
    li.className = 'product';
    li.dataset.id = p.id;
    li.innerHTML = `${p.name} <span class="price">${p.price} ₽</span>
        <button class="minus" disabled>−</button> <b class="qty">0</b> <button class="plus">+</button>
        <button class="remove">Удалить</button>`;
    list.append(li);
}

// Обновить одну карточку
function showCard(li) {
    const q = cart.get(Number(li.dataset.id)) ?? 0;
    li.querySelector('.qty').textContent = q;          // DOM
    li.querySelector('.minus').disabled = q === 0;     // DOM
}

// Обновить шапку и сумму
function showTotals() {
    let count = 0;
    let total = 0;
    for (const [id, q] of cart) {
        count += q;
        total += products.find((p) => p.id === id).price * q;
    }
    document.getElementById('count').textContent = count;  // DOM
    document.getElementById('total').textContent = total;  // DOM
}

list.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    const id = Number(li.dataset.id);
    const qty = cart.get(id) ?? 0;

    if (e.target.matches('.plus')) cart.set(id, qty + 1);
    else if (e.target.matches('.minus')) cart.set(id, qty - 1);
    else if (e.target.matches('.remove')) cart.delete(id);
    else return;

    showCard(li);
    showTotals();
});

document.getElementById('clear').addEventListener('click', () => {
    cart.clear();
    for (const li of list.children) showCard(li);
    showTotals();
});
