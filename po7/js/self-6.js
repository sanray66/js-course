let state = {
    products: [
        { id: 1, name: 'Клавиатура', price: 1250 },
        { id: 2, name: 'Мышь', price: 790 },
        { id: 3, name: 'Коврик', price: 430 },
        { id: 4, name: 'Монитор', price: 15990 },
        { id: 5, name: 'Наушники', price: 2100 },
    ],
    cart: {},
    search: '',
    sort: 'none', // none, asc, desc
};

const cards = new Map(); // id -> <li>
let created = 0, updated = 0;

function createCard(p) {
    const li = document.createElement('li');
    li.className = 'product';
    li.dataset.id = p.id;
    li.innerHTML = '<span class="name"></span> <button class="minus">−</button> <b class="qty"></b> <button class="plus">+</button> <button class="remove">Удалить</button>';
    li.querySelector('.name').textContent = `${p.name} ${p.price} ₽`;
    created++;
    return li;
}

function updateCard(li, qty) {
    const qtyEl = li.querySelector('.qty');
    if (qtyEl.textContent !== String(qty)) {
        qtyEl.textContent = qty;
        li.querySelector('.minus').disabled = qty === 0;
        updated++;
    }
}

function render(s) {
    const list = document.getElementById('list');

    // фильтр
    let visible = s.products.filter((p) =>
        p.name.toLowerCase().includes(s.search.toLowerCase()));
    if (s.sort === 'asc') visible = [...visible].sort((a, b) => a.price - b.price);
    if (s.sort === 'desc') visible = [...visible].sort((a, b) => b.price - a.price);

    const visibleIds = new Set(visible.map((p) => p.id));

    for (const [id, li] of cards) {
        if (!visibleIds.has(id)) { li.remove(); cards.delete(id); }
    }
    visible.forEach((p, index) => {
        let li = cards.get(p.id);
        if (!li) { li = createCard(p); cards.set(p.id, li); }
        updateCard(li, s.cart[p.id] ?? 0);
        if (list.children[index] !== li) list.insertBefore(li, list.children[index] ?? null); // перестановка, а не пересоздание
    });

    const count = Object.values(s.cart).reduce((a, b) => a + b, 0);
    const total = s.products.reduce((sum, p) => sum + p.price * (s.cart[p.id] ?? 0), 0);
    document.getElementById('count').textContent = count;
    document.getElementById('total').textContent = total;
    console.log(`render: создано ${created}, обновлено ${updated}`);
}

function setState(patch) {
    state = { ...state, ...patch };
    render(state);
}

document.getElementById('list').addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    const id = Number(li.dataset.id);
    const qty = state.cart[id] ?? 0;
    if (e.target.matches('.plus')) setState({ cart: { ...state.cart, [id]: qty + 1 } });
    if (e.target.matches('.minus')) setState({ cart: { ...state.cart, [id]: qty - 1 } });
    if (e.target.matches('.remove')) {
        const newCart = { ...state.cart };
        delete newCart[id];
        setState({ products: state.products.filter((p) => p.id !== id), cart: newCart });
    }
});

document.getElementById('search').addEventListener('input', (e) => setState({ search: e.target.value }));

document.getElementById('sort').addEventListener('click', (e) => {
    const next = { none: 'asc', asc: 'desc', desc: 'none' }[state.sort];
    const names = { none: 'нет', asc: 'по возрастанию', desc: 'по убыванию' };
    e.target.textContent = 'Сортировка по цене: ' + names[next];
    setState({ sort: next });
});

render(state);
