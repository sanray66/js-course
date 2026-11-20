class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    shippingCost() {
        return 0;
    }

    describe() {
        return `${this.name}: ${this.price} ₽, доставка ${this.shippingCost()} ₽`;
    }
}

class PhysicalProduct extends Product {
    constructor(name, price, weightKg) {
        super(name, price);
        this.weightKg = weightKg;
    }

    shippingCost() {
        return 300 + Math.ceil(this.weightKg) * 50;
    }
}

class DigitalProduct extends Product {
    describe() {
        return super.describe() + ' (ключ придёт на почту)';
    }
}

const products = [
    new PhysicalProduct("Ноутбук", 75000, 3),
    new DigitalProduct("Игра", 2000),
    new PhysicalProduct("Мышь", 1500, 0.5),
    new DigitalProduct("Программа", 5000)
];

let totalShipping = 0;

for (const product of products) {
    totalShipping += product.shippingCost();
    console.log(product.describe());
}

console.log("Общая стоимость доставки:", totalShipping, "₽");