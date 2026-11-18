function Product(name, price) {
    this.name = name;

    let price = price;

    Object.defineProperty(this, "price", {
        get() {
            return price;
        },
        set(value) {
            if (value < 0) {
                throw new Error("Цена не может быть отрицательной");
            }
            price = value;
        }
    });

    Object.defineProperty(this, "formattedPrice", {
        get() {
            return price.toFixed(2) + " ₽";
        }
    });
}

const product = new Product("Ноутбук", 75000);

console.log(product.price);          // 75000
console.log(product.formattedPrice); // 75000.00 ₽

product.price = 80000;
console.log(product.formattedPrice); // 80000.00 ₽
