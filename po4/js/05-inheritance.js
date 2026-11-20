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
 
const monitor = new PhysicalProduct('Монитор', 15990, 4.2);
const game = new DigitalProduct('Игра', 2499);
console.log(monitor.describe());
console.log(game.describe());

const order = [monitor, game, new PhysicalProduct('Мышь', 790, 0.2)];
let shipping = 0;
for (const item of order) {
    shipping += item.shippingCost();
}
console.log('доставка заказа:', shipping);
