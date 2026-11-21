const stock = { 101: 5, 205: 2 }; 
const cart = {};                  
const attemptsLog = [];          

function addToCart(productId, qty) {
    if (!Number.isInteger(qty) || qty < 1) {
        throw new ValidationError('qty', 'Количество должно быть целым и больше нуля');
    }
    if (!(productId in stock)) {
        throw new ValidationError('productId', 'Такого товара нет');
    }
    if (qty > stock[productId]) {
        throw new OutOfStockError(productId, stock[productId]);
    }
    cart[productId] = (cart[productId] || 0) + qty;
}

function tryAdd(productId, qty) {
    let result = 'успех';
    try {
        addToCart(productId, qty);
        console.log('Добавлено:', productId, 'x', qty);
    } catch (e) {
        if (e instanceof ValidationError) {
            result = 'ошибка проверки (' + e.field + ')';
            console.log('Поле', e.field + ':', e.message);
        } else if (e instanceof OutOfStockError) {
            result = 'нет на складе';
            console.log('Доступно только', e.available, 'шт.');
        } else {
            throw e; // неизвестную ошибку выбрасываем дальше
        }
    } finally {
        attemptsLog.push({ productId, qty, result });
    }
}

tryAdd(101, 2);   // успех
tryAdd(205, 10);  // нет на складе
tryAdd(101, -1);  // ошибка проверки
tryAdd(999, 1);   // нет такого товара

console.log('Корзина:', cart);
console.log('Журнал попыток:', attemptsLog);
