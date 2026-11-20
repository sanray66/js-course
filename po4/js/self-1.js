class Product {
    static CURRENCY = '₽';
    static #nextId = 1;

    constructor(name, price) {
        this.id = Product.#nextId++;
        this.name = name;
        this.price = price;
    }

    describe() {
        return `#${this.id} ${this.name}: ${this.price} ${Product.CURRENCY}`;
    }

    static fromJSON(json) {
        const data = JSON.parse(json);
        return new Product(data.name, data.price);
    }

    toJSON() {
        return {
            name: this.name,
            price: this.price
        };
    }
}

const product = new Product("Мышь", 790);

console.log(product.describe());

const json = JSON.stringify(product);
console.log(json);

const product2 = Product.fromJSON(json);
console.log(product2.describe());

console.log(product instanceof Product); // true

console.log(
    Object.getPrototypeOf(product) === Product.prototype
); // true

console.log(
    Object.getPrototypeOf(product2) === Product.prototype
); // true