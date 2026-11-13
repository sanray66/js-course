
// Изменяем объект
function increaseQty(item) {
    item.qty++;
}

// Изменяем число
function increaseNumber(n) {
    n++;
}

const product = { name: "iPhone", qty: 5 };
increaseQty(product);
console.log(product); 

let number = 5;
increaseNumber(number);
console.log(number);


// Версия функции, которая возвращает новый объект
function increaseQtyCopy(item) {
    return {
        ...item,
        qty: item.qty + 1
    };
}

const product2 = { name: "Наушники", qty: 3 };
const updatedProduct = increaseQtyCopy(product2);
console.log(product2);       
console.log(updatedProduct); 


