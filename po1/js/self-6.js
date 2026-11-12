const prices = [500, 1200, 850, 2500, 700, 1500, 300, 900];
// максимум и сумма
let sum = 0;
let max = prices[0];

for(let i = 0; i < prices.length; i++){
    sum += prices[i];

    if (max < prices[i]){
        max = prices[i];
    }
}

// цены дороже средней 
let pricesMoreAverage = []
const average = sum / prices.length;

for(let i = 0; i < prices.length; i++){
    if (prices[i] > average){
        pricesMoreAverage.push(prices[i])
    }
}

// Находим индекс первой цены выше 1000
let index = -1;

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 1000) {
        index = i;
        break;
    }
}


console.log("Сумма:", sum);
console.log("Максимум:", max);
console.log("Цены дороже средней:", pricesMoreAverage);
console.log("Индекс первой цены выше 1000:", index);
