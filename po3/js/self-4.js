const cart = {
    items: [],
    add(item) { this.items.push(item); },
    total() { return 0; },
};

for (const key in cart) {
    const kind = typeof cart[key] === 'function' ? 'метод' : 'свойство';
    console.log(key, '-', kind);
}

function diff(before, after) {
    const changed = [];

    for (const [key, value] of Object.entries(after)) {
        if (before[key] !== value) {
            changed.push(key);
        }
    }

    for (const key in before) {
        if (!(key in after)) {
            changed.push(key);
        }
    }

    return changed;
}

// Товар до редактирования
const productBefore = {
    name: 'Мышь',
    price: 790,
    color: 'чёрный'
};

// Товар после редактирования
const productAfter = {
    name: 'Мышь',
    price: 690,
    stock: 3
};

console.log(diff(productBefore, productAfter));