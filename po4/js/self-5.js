class CartView {
    state = { items: [], promo: null };

    setState(patch) {
        this.state = { ...this.state, ...patch };
        console.log(this.render());
    }

    addItem(item) {
        this.setState({
            items: [...this.state.items, item]
        });
    }

    removeItem(name) {
        this.setState({
            items: this.state.items.filter(item => item.name !== name)
        });
    }

    applyPromo(promo) {
        this.setState({ promo });
    }

    render() {
        const { items, promo } = this.state;

        if (items.length === 0) return "Корзина пуста";

        let total = 0;
        let result = "";

        for (const item of items) {
            const sum = item.price * item.qty;
            total += sum;
            result += `${item.name} x${item.qty} — ${sum} ₽\n`;
        }

        const final = promo ? Math.round(total * 0.9) : total;

        result += `Итого: ${final} ₽`;

        if (promo) {
            result += ` (промокод ${promo})`;
        }

        return result;
    }
}

const cart = new CartView();

cart.addItem({ name: "Мышь", price: 790, qty: 2 });
cart.addItem({ name: "Клавиатура", price: 2500, qty: 1 });

cart.applyPromo("SALE10");

cart.removeItem("Мышь");