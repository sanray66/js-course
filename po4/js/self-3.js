class Cart {
    static MAX_ITEMS = 10;

    #items = [];

    #findIndex(name) {
        return this.#items.findIndex(item => item.name === name);
    }

    add(name, price, qty = 1) {
        const index = this.#findIndex(name);

        if (index >= 0) {
            this.#items[index].qty += qty;
        } else {
            if (this.#items.length >= Cart.MAX_ITEMS) {
                console.log("Корзина заполнена");
                return;
            }

            this.#items.push({ name, price, qty });
        }
    }

    remove(name) {
        const index = this.#findIndex(name);

        if (index >= 0) {
            this.#items.splice(index, 1);
        }
    }

    changeQty(name, qty) {
        const index = this.#findIndex(name);

        if (index >= 0 && qty > 0) {
            this.#items[index].qty = qty;
        }
    }

    get total() {
        return this.#items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    get count() {
        return this.#items.length;
    }
}

const cart = new Cart();

cart.add("Мышь", 790, 2);
cart.add("Клавиатура", 2500);
cart.add("Мышь", 790, 1);

console.log(cart.count); // 2
console.log(cart.total); // 4080

cart.changeQty("Мышь", 5);
console.log(cart.total); // 6450

cart.remove("Клавиатура");
console.log(cart.count); // 1
console.log(cart.total); // 3950