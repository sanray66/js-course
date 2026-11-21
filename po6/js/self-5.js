const cart = new Map();

function addToCart(productId, qty = 1) {
    cart.set(productId, (cart.get(productId) ?? 0) + qty);
}

addToCart(101);
addToCart(205, 3);
addToCart(101, 2);

for (const [id, qty] of cart) {
    console.log('Товар', id, '-', qty, 'шт.');
}
console.log('Позиций в корзине:', cart.size);

const products = [
    { name: 'Мышь', tags: ['usb', 'wireless'] },
    { name: 'Клавиатура', tags: ['usb', 'rgb'] },
    { name: 'Наушники', tags: ['wireless', 'bluetooth'] },
];

const allTags = new Set();
for (const product of products) {
    for (const tag of product.tags) {
        allTags.add(tag);
    }
}
console.log('Уникальные теги:', [...allTags]);

