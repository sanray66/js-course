class Product {
    static CURRENCY = '₽';
    static #nextId = 1;
 
    constructor(name, price) {
        this.id = Product
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
        return { name: this.name, price: this.price };
    }

}
 
const a = new Product('Клавиатура', 1250);
const b = new Product('Мышь', 790);
console.log(a.describe());
console.log(b.describe());
console.log(Product.CURRENCY, a.CURRENCY);
