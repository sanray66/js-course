const productName = "iPhone 16";
let price = 85000;
let stock = 10;
let discount = 15;

/*
    Наличие вычисляем из количества товара
    Если количество станет равно 0, товар автоматически
    будет считаться отсутствующим.
*/

const isAvailable = stockQuantity > 0;

console.log(typeof productName);
console.log(typeof price);
console.log(typeof stock);
console.log(typeof discount);
console.log(typeof isAvailable);