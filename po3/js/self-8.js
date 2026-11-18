function deepFreeze(obj) {
    Object.freeze(obj);

    for (const key of Object.keys(obj)) {
        if (obj[key] !== null && typeof obj[key] === "object" && !Object.isFrozen(obj[key])) {
            deepFreeze(obj[key]);
        }
    }

    return obj;
}

// Создаём замороженное состояние магазина
const state = deepFreeze({
    cart: [],
    filters: {}
});

// Добавляем товар, создавая новое состояние
function addToCart(state, item) {
    const newState = {
        ...state,
        cart: [...state.cart, item]
    };

    return deepFreeze(newState);
}

// Проверяем
const newState = addToCart(state, {
    id: 1,
    name: "Мышь",
    price: 790
});

console.log(state.cart);    // [] — старое состояние не изменилось
console.log(newState.cart); // [{ id: 1, name: "Мышь", price: 790 }]

console.log(Object.isFrozen(state)); // true
console.log(Object.isFrozen(newState)); // true
console.log(Object.isFrozen(newState.cart)); // true
console.log(Object.isFrozen(newState.cart[0])); // true