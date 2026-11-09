function dayType(day) {
    let result = '';
    switch (day) {
        case 'сб':
        case 'вс':
            result = 'выходной';
            break;
        case 'пт':
            result = 'короткий день, ';
            // break забыт специально
        default:
            result += 'рабочий';
    }
    return result;
}
console.log(dayType('вс'), '|', dayType('пт'), '|', dayType('ср'));
