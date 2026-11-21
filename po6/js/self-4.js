console.log((1.005).toFixed(2)); 

function roundMoney(value) {
    const kopecks = Math.round(Number((value * 100).toPrecision(15)));
    return kopecks / 100;
}

console.log(roundMoney(1.005));            // 1.01
console.log(roundMoney(0.1 + 0.2));        // 0.3
console.log(roundMoney(19.999));           // 20
console.log(roundMoney(2.675).toFixed(2)); // "2.68"
