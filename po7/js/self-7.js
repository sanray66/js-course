
class ProductCard extends HTMLElement {
    static observedAttributes = ['name', 'price', 'qty'];

    connectedCallback() {
        this.classList.add('product'); // оформление из style.css
        this.innerHTML = '<span class="name"></span> <button class="minus">−</button> <b class="qty"></b> <button class="plus">+</button>';

        this.querySelector('.plus').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('card-plus', { bubbles: true, detail: { id: this.dataset.id } }));
        });
        this.querySelector('.minus').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('card-minus', { bubbles: true, detail: { id: this.dataset.id } }));
        });
        this.show();
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (this.isConnected) this.show();
        if (attr === 'qty' && oldValue !== null) {
            this.dispatchEvent(new CustomEvent('qty-changed', {
                bubbles: true,
                detail: { id: this.dataset.id, from: Number(oldValue), to: Number(newValue) },
            }));
        }
    }

    show() {
        const qty = Number(this.getAttribute('qty') ?? 0);
        this.querySelector('.name').textContent = `${this.getAttribute('name')} ${this.getAttribute('price')} ₽`;
        this.querySelector('.qty').textContent = qty;
        this.querySelector('.minus').disabled = qty === 0;
    }
}
customElements.define('product-card', ProductCard);

// ---- Состояние и отрисовка по ключу (как в версии 3) ----
let state = {
    products: [
        { id: 1, name: 'Клавиатура', price: 1250 },
        { id: 2, name: 'Мышь', price: 790 },
        { id: 3, name: 'Коврик', price: 430 },
    ],
    cart: {},
    search: '',
};

const cards = new Map(); // id -> <product-card>

function render(s) {
    const list = document.getElementById('list');
    for (const p of s.products) {
        let card = cards.get(p.id);
        if (!card) {
            card = document.createElement('product-card');
            card.dataset.id = p.id;
            card.setAttribute('name', p.name);
            card.setAttribute('price', p.price);
            cards.set(p.id, card);
            list.append(card);
        }
        card.hidden = !p.name.toLowerCase().includes(s.search.toLowerCase());
        const qty = String(s.cart[p.id] ?? 0);
        if (card.getAttribute('qty') !== qty) card.setAttribute('qty', qty); // трогаем, только если изменилось
    }
    const count = Object.values(s.cart).reduce((a, b) => a + b, 0);
    const total = s.products.reduce((sum, p) => sum + p.price * (s.cart[p.id] ?? 0), 0);
    document.getElementById('count').textContent = count;
    document.getElementById('total').textContent = total;
}

function setState(patch) {
    state = { ...state, ...patch };
    document.getElementById('search').addEventListener('input', (e) => setState({ search: e.target.value }));

render(state);
}

const list = document.getElementById('list');
list.addEventListener('card-plus', (e) => {
    const id = Number(e.detail.id);
    setState({ cart: { ...state.cart, [id]: (state.cart[id] ?? 0) + 1 } });
});
list.addEventListener('card-minus', (e) => {
    const id = Number(e.detail.id);
    setState({ cart: { ...state.cart, [id]: (state.cart[id] ?? 0) - 1 } });
});
list.addEventListener('qty-changed', (e) => {
    console.log(`товар ${e.detail.id}: ${e.detail.from} → ${e.detail.to}`);
});

document.getElementById('search').addEventListener('input', (e) => setState({ search: e.target.value }));

render(state);
