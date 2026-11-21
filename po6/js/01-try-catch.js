console.log('Начало программы');

try {
    console.log('Пробуем разобрать JSON');
    const product = JSON.parse('{ name: "Мышь" }');
    console.log('Эта строка не выполнится:', product);
} catch (err) {
    console.log('Перехвачена ошибка:', err.name);
    console.log('Сообщение:', err.message);
}
console.log('Программа продолжает работу');

function loadData(text) {
    try {
        const data = JSON.parse(text);
        return 'Загружено: ' + data.name;
    } catch (err) {
        return 'Ошибка: ' + err.name;
    } finally {
        console.log('finally: скрываем индикатор загрузки');
    }
}
console.log(loadData('{"name": "Клавиатура"}'));
console.log(loadData('не JSON'));

function isValidJSON(text) {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}
console.log(isValidJSON('[1, 2]'), isValidJSON('[1, 2'));

