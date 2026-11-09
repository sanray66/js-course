const priceKop = 125050;                 // 1250,50 ₽
const discountKop = Math.round(priceKop * 85 / 100);
const totalKop = discountKop * 3;
console.log('Итого:', (totalKop / 100).toFixed(2), '₽');
console.log(typeof (totalKop / 100).toFixed(2));
