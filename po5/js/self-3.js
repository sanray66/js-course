class ProductList extends Array {
    byCategory(name) {
        return this.filter(p => p.category === name);
    }

    totalPrice() {
        return this.reduce((sum, p) => sum + p.price, 0);
    }

    cheapest() {
        return this.reduce((min, p) => p.price < min.price ? p : min);
    }
}

const products = new ProductList(
    { name: "Мышь", category: "Электроника", price: 790 },
    { name: "Клавиатура", category: "Электроника", price: 2500 },
    { name: "Книга", category: "Книги", price: 500 }
);

console.log(products.byCategory("Электроника"));
console.log(products.totalPrice()); // 3790
console.log(products.cheapest()); // Книга

const filtered = products.filter(p => p.price < 1000);

console.log(filtered instanceof ProductList); // true
console.log(filtered); // ProductList с двумя товарами