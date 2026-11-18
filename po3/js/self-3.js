function isEqualCart(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i].id !== b[i].id || a[i].qty !== b[i].qty) {
            return false;
        }
    }

    return true;
}

const cart1 = [
    { id: 1, qty: 2 },
    { id: 2, qty: 5 }
];

const cart2 = [
    { id: 1, qty: 2 },
    { id: 2, qty: 5 }
];

const cart3 = [
    { id: 2, qty: 5 },
    { id: 1, qty: 2 }
];

const cart4 = [
    { id: 1, qty: 3 },
    { id: 2, qty: 5 }
];

console.log(isEqualCart(cart1, cart2)); // true — одинаковое содержимое
console.log(isEqualCart(cart1, cart3)); // false — другой порядок
console.log(isEqualCart(cart1, cart4)); // false — отличается количество