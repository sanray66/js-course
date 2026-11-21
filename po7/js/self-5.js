let state = {
    products: [
        { id: 1, name: 'Клавиатура', price: 1250 },
        { id: 2, name: 'Мышь', price: 790 },
        { id: 3, name: 'Коврик', price: 430 },
    ],
    cart: {},
    search: '',
    result: '',
};

function el(tag, props = {}, ...children) {
    const node = document.createElement(tag);
    Object.assign(node, props);
    node.append(...children);
    return node;
}

function measureButton(n) {
    const b = el('button', { className: 'measure' }, `${n} товаров`);
    b.dataset.n = n;
    return b;
}

function render(s) {
    const visible = s.products.filter((p) =>
        p.name.toLowerCase().includes(s.search.toLowerCase()));
    const count = Object.values(s.cart).reduce((a, b) => a + b, 0);
    const total = s.products.reduce((sum, p) => sum + p.price * (s.cart[p.id] ?? 0), 0);

    document.getElementById('app').replaceChildren(
        el('header', { className: 'header' },
            el('input', { id: 'search', value: s.search, placeholder: 'Поиск' }),
            el('span', { className: 'logo' }, `Корзина: ${count}`),
            measureButton(100), measureButton(1000), measureButton(5000),
            el('span', { id: 'result', className: 'logo' }, s.result)),
        el('main', {},
            el('ul', { className: 'products' }, ...visible.map((p) =>
                el('li', { className: 'product' }, `${p.name} `,
                    el('span', { className: 'price' }, `${p.price} ₽ `),
                    el('button', { className: 'minus', disabled: !s.cart[p.id] }, '−'),
                    ` ${s.cart[p.id] ?? 0} `,
                    el('button', { className: 'plus' }, '+')))),
            el('p', {}, `Итого: ${total} ₽`)),
    );
    document.querySelectorAll('.product').forEach((li, i) => (li.dataset.id = visible[i].id));
}

function setState(patch) {
    state = { ...state, ...patch };
    render(state);
}

document.getElementById('app').addEventListener('input', (e) => {
    if (e.target.id !== 'search') return;
    setState({ search: e.target.value });
    const field = document.getElementById('search');
    console.log('в поле:', JSON.stringify(field.value), '│ state.search:', JSON.stringify(state.search),
        '│ фокус на:', document.activeElement.id || document.activeElement.tagName);
});

document.getElementById('app').addEventListener('click', (e) => {
    if (!e.target.matches('.measure')) return;
    const n = Number(e.target.dataset.n);
    const many = Array.from({ length: n }, (_, i) => ({ id: i + 1, name: `Товар ${i + 1}`, price: 100 + i }));

    const t0 = performance.now();
    setState({ products: many });
    const t1 = performance.now();

    const text = `${n} товаров: ${(t1 - t0).toFixed(1)} мс`;
    state = { ...state, result: text };         
    document.getElementById('result').textContent = text;
    console.log('render', text);
});

render(state);
