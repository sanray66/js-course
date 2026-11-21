function setQty(product, qty) {
    if (!Number.isInteger(qty)) {
        throw new Error('Количество должно быть целым числом');
    }
    if (qty < 1) {
        throw new Error('Количество должно быть не меньше 1');
    }
    product.qty = qty;
    return product;
}

const mouse = { name: 'Мышь', qty: 1 };
for (const value of [3, 0, 2.5]) {
    try {
        setQty(mouse, value);
        console.log('ok:', value, '->', mouse.qty);
    } catch (err) {
        console.log('отклонено:', value, '│', err.message);
    }
}

try {
    throw 'Что-то пошло не так';
} catch (err) {
    console.log(typeof err, err.message, err.stack);
}

function addToCart(product, qty) {
    try {
        setQty(product, qty);
        console.log('В корзине:', product.name, product.qty);
    } catch (err) {
        if (err.message.startsWith('Количество')) {
            console.log('Покажем пользователю:', err.message);
        } else {
            throw err; 
        }
    }
}
addToCart({ name: 'Монитор', qty: 1 }, 2);
addToCart({ name: 'Монитор', qty: 1 }, -5);

