function renderLine({ name, price, dimensions: { width = 0 } = {} }) {
    return `${name} — ${price} ₽, ширина: ${width}`;
}

const product = {
    name: "Ноутбук",
    price: 75000
};

console.log(renderLine(product));
// Ноутбук — 75000 ₽, ширина: 0


const email = product?.supplier?.contact?.email ?? "Email не указан";

console.log(email); // Email не указан