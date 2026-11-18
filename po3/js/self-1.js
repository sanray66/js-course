const product = {
    name: "Ноутбук",
    price: 75000,

    dimensions: {
        width: 35,
        height: 2,
        depth: 24
    },

    tags: ["электроника", "компьютер", "техника"],

    describe() {
        return `${this.name}, цена: ${this.price} руб.`;
    }
};

console.log(product.describe());

const describeProduct = product.describe;

// При таком вызове this теряется,
// потому что функция вызывается отдельно от объекта.
// В результате this не ссылается на product.
console.log(describeProduct()); // Ошибка или undefined

const boundDescribe = product.describe.bind(product);

// Теперь this всегда ссылается на product
console.log(boundDescribe()); 