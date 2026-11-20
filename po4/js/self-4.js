class CartItem {
    constructor(name, price, qty = 1) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

    set qty(value) {
        if (value < 1) {
            throw new RangeError("Количество должно быть не меньше 1");
        }
        this._qty = value;
    }

    get qty() {
        return this._qty;
    }
}

class Cart {
    #items = [];

    add(name, price, qty = 1) {
        try {
            const item = new CartItem(name, price, qty);
            this.#items.push(item);
        } catch (error) {
            if (error instanceof RangeError) {
                console.log("Ошибка добавления:", error.message);
            } else {
                throw error;
            }
        }
    }
}

const cart = new Cart();

cart.add("Мышь", 790, 2);
cart.add("Клавиатура", 2500, 0);
cart.add("Наушники", 3000, 1);

console.log("Программа продолжает работать");