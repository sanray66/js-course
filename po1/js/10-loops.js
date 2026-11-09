const prices = [990, 1250, 430, 2100, 760];


for (const price of prices) {
    if (price < 500) continue;   // пропустить дешёвые
    if (price > 2000) break;     // дальше не смотреть
    console.log('подходит:', price);
}
 
for (let row = 1; row <= 3; row++) {
    let line = '';
    for (let col = 1; col <= 5; col++) {
        line += String(row * col).padStart(4);
    }
    console.log(line);
}
