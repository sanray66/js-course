function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.withDiscount = function(p) {
    return this.price - this.price * p / 100;
};

function PhysicalProduct(name, price, weight) {
    Product.call(this, name, price);

    this.weight = weight;
}

PhysicalProduct.prototype = Object.create(Product.prototype);
PhysicalProduct.prototype.constructor = PhysicalProduct;

PhysicalProduct.prototype.shippingCost = function() {
    return this.weight * 100;
};

const product = new Product("Электронная книга", 15000);

const physicalProduct = new PhysicalProduct("Ноутбук", 75000, 3);

console.log(product.withDiscount(10)); // 13500

console.log(physicalProduct.withDiscount(10)); // 67500
console.log(physicalProduct.shippingCost()); // 300