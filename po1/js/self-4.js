const getStatusSwitch = (code) => {
    switch (code) {
        case 0:
            return "Новый";
        case 1:
            return "Оплачен";
        case 2:
            return "В обработке";
        case 3:
            return "Отправлен";
        case 4:
            return "Доставлен";
        default:
            return "Такого статуса нет";
    }
}

const getStatusTernar = (code) => {
    return code === 0 ? "Новый" :
           code === 1 ? "Оплачен" :
           code === 2 ? "В обработке" :
           code === 3 ? "Отправлен" :
           code === 4 ? "Доставлен" :
           'такого статуса нет'
}

const getStatusObject = (code) => {
    const statuses = {
        0: "Новый",
        1: "Оплачен",
        2: "В обработке",
        3: "Отправлен",
        4: "Доставлен"
    };

    return statuses[code] ?? "Неизвестный статус";
}

console.log(getStatusSwitch(2));
console.log(getStatusTernar(2));
console.log(getStatusObject(2));