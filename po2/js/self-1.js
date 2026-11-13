
/*
    Function Declaration:
    Уместна для обычных функций, которые используются в разных местах программы.
*/
function applyDiscountDeclaration(price, percent = 0) {
    return price - price * percent / 100;
}

function withVatDeclaration(price, rate = 20) {
    return price + price * rate / 100;
}

function formatPriceDeclaration(value) {
    const parts = value.toFixed(2).split(".");
    return parts[0] + "," + parts[1] + " ₽";
}


/*
    Function Expression:
    Уместна, когда функцию нужно сохранить в переменную
    или передать в качестве значения.
*/
const applyDiscountExpression = function(price, percent = 0) {
    return price - price * percent / 100;
};

const withVatExpression = function(price, rate = 20) {
    return price + price * rate / 100;
};

const formatPriceExpression = function(value) {
    const parts = value.toFixed(2).split(".");
    return parts[0] + "," + parts[1] + " ₽";
};


/*
    Arrow Function:
    Удобна для коротких функций и callback-функций.
*/
const applyDiscountArrow = (price, percent = 0) => {
    return price - price * percent / 100;
};

const withVatArrow = (price, rate = 20) => {
    return price + price * rate / 100;
};

const formatPriceArrow = (value) => {
    const parts = value.toFixed(2).split(".");
    return parts[0] + "," + parts[1] + " ₽";
}


// Проверка работы функций

console.log(applyDiscountDeclaration(1000, 15));
console.log(withVatDeclaration(1000, 20));
console.log(formatPriceDeclaration(1250.5));

console.log(applyDiscountExpression(1000, 15));
console.log(withVatExpression(1000, 20));
console.log(formatPriceExpression(1250.5));

console.log(applyDiscountArrow(1000, 15));
console.log(withVatArrow(1000, 20));
console.log(formatPriceArrow(1250.5));
