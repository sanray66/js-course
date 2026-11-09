const raw = '1 250,50 ₽';
const cleaned = raw.replace(/[^\d,.-]/g, '').replace(',', '.');
const priceValue = Number(cleaned);
console.log(cleaned, priceValue, Number.isNaN(priceValue));
