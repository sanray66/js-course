const product = {
    name: "Ноутбук",
    price: 75000,
    dimensions: {
        width: 35,
        height: 2,
        depth: 24
    },
    tags: ["электроника", "компьютер"]
};

const copy1 = { ...product };
copy1.dimensions.width = 40;

console.log(product.dimensions.width); 

// 2. Копирование через Object.assign
const copy2 = Object.assign({}, product);
copy2.dimensions.width = 45;

console.log(product.dimensions.width); 

// 3. Глубокое копирование через structuredClone
const copy3 = structuredClone(product);
copy3.dimensions.width = 50;

console.log(product.dimensions.width); 

console.log(copy1.dimensions.width); // 40
console.log(copy2.dimensions.width); // 45
console.log(copy3.dimensions.width); // 50