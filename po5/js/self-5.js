function renderProduct(product) {
    return `
        <div class="product">
            <h3>${product.name}</h3>
            <p>${product.price} ₽</p>
            ${product.stock === 0 ? '<span class="badge">Нет в наличии</span>' : ''}
            ${product.discount ? `<del>${product.oldPrice} ₽</del>` : ''}
        </div>
    `;
}

const product = {
    name: "Мышь",
    price: 790,
    oldPrice: 1000,
    discount: true,
    stock: 0
};

console.log(renderProduct(product));