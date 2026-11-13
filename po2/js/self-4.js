function createCart() {
    const items = [];

    return {
        add(item) {
            items.push(item);
        },
        remove(name) {
            const index = items.findIndex(item => item.name === name);

            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        total() {
            let sum = 0;

            for (const item of items) {
                sum += item.price;
            }

            return sum;
        },
        items() {
            return [...items];
        }
    };
}


const cart = createCart();

cart.add({ name: "iPhone", price: 85000 });
cart.add({ name: "Наушники", price: 5000 });

console.log(cart.items());
console.log(cart.total()); // 90000

cart.remove("iPhone");

console.log(cart.items());
console.log(cart.total()); // 5000


const copy = cart.items();

copy.push({ name: "Ноутбук", price: 100000 });

console.log(copy);       // В копии 2 товара
console.log(cart.items()); // В корзине 1 товар
console.log(cart.total()); // 5000
