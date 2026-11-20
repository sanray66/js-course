class ProductList extends Array {
    byCategory(name) {
        return this.filter((p) => p.category === name);
    }
    totalPrice() {
        return this.reduce((sum, p) => sum + p.price, 0);
    }
}
 
const catalog = ProductList.from([
    { name: 'Мышь', category: 'Электроника', price: 790 },
    { name: 'Ручка', category: 'Канцелярия', price: 60 },
    { name: 'Монитор', category: 'Электроника', price: 15990 },
]);
 
const electronics = catalog.byCategory('Электроника');
console.log(electronics.length, electronics.totalPrice());
console.log(electronics instanceof ProductList, Array.isArray(electronics));

const one = new ProductList(3);
console.log(one.length, one[0]);
const ok = ProductList.of(3);
console.log(ok.length, ok[0]);

