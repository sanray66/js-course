const price = 85000;
const discount = 15;

// Размер скидки 
const discountAmount = price * discount / 100;

// Итоговая цена и переводим в копейки
const finalPrice = (price - discountAmount) * 100;
const finalPrice2 = finalPrice * 3;

// Переводим копейки в рубли и выводим два знака после запятой
console.log(`Цена со скидкой: ${(finalPrice / 100).toFixed(2)} руб.`)
console.log(`Цена со скидкой для 3 товаров: ${(finalPrice2 / 100).toFixed(2)} руб.`)