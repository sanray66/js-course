
// 1. Function Declaration

console.log(sayHello()); // Работает, выводит "Привет!"

function sayHello() {
    return "Привет!";
}

// Function Declaration полностью всплывает,
// поэтому функцию можно вызвать до её объявления.


// 2. Function Expression через var

console.log(sayGoodbye()); // TypeError

var sayGoodbye = function() {
    return "Пока!";
};

// Переменная var всплывает, но получает значение undefined.
// Функция присваивается ей только при выполнении объявления.
// Поэтому вызвать её раньше не получается.


// 3. Arrow Function через let

console.log(sayHi()); // ReferenceError

let sayHi = () => {
    return "Привет!";
};

// Переменная let находится во временной мёртвой зоне 
// до выполнения строки объявления. Поэтому обратиться к ней раньше нельзя также будет работать и с const.
