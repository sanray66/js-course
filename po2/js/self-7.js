const CartModule = (function() {
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
})();

CartModule.add({ name: "iPhone", price: 85000 });
CartModule.add({ name: "Наушники", price: 5000 });

console.log(CartModule.items());
console.log(CartModule.total()); // 90000

CartModule.remove("iPhone");
console.log(CartModule.total()); // 5000
