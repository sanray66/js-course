const cart = {
    items: [
        { name: 'Мышь', price: 790, qty: 2 },
        { name: 'Коврик', price: 350, qty: 1 },
        { name: 'Кабель', price: 200, qty: 3 },
    ],
    // Делаем корзину перебираемой
    [Symbol.iterator]() {
        let index = 0;
        const items = this.items;
        return {
            next() {
                if (index < items.length) {
                    const item = items[index];
                    index++;
                    return { value: item.name + ' x' + item.qty + ' = ' + item.price * item.qty, done: false };
                }
                return { value: undefined, done: true };
            },
        };
    },
};

for (const line of cart) {
    console.log(line);
}
console.log([...cart]);

// Генератор страниц: отдаёт по size товаров за раз
function* paginate(items, size) {
    for (let i = 0; i < items.length; i += size) {
        yield items.slice(i, i + size);
    }
}

const names = ['Мышь', 'Клавиатура', 'Монитор', 'Коврик', 'Кабель'];
const pages = paginate(names, 2);
console.log('Страница 1:', pages.next().value);
console.log('Страница 2:', pages.next().value);
console.log('Страница 3:', pages.next().value);
console.log('Дальше:', pages.next());
