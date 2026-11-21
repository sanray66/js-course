function render() {
    const app = document.getElementById('app');
    let html = '<h2>Корзина</h2><ul>';
    let total = 0;
    for (const item of state.items) {
        html += '<li>' + item.name + ' - ' + item.price + ' ₽</li>';
        total += item.price;
    }
    html += '</ul><p>Итого: ' + total + ' ₽</p>';
    app.innerHTML = html;
    console.log('render: товаров', state.items.length);
}

const state = new Proxy({ items: [] }, {
    set(target, key, value) {
        target[key] = value;
        render();
        return true;
    },
});

render();

state.items = [...state.items, { name: 'Мышь', price: 790 }];
state.items = [...state.items, { name: 'Коврик', price: 350 }];

state.items.push({ name: 'Кабель', price: 200 });
console.log('После push товаров:', state.items.length, '(но на странице пока 2)');

state.items = [...state.items];
