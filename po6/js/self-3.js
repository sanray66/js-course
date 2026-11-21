// Превращаем дату в строку дд.мм.гггг
function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); 
    const yyyy = date.getFullYear();
    return dd + '.' + mm + '.' + yyyy;
}

function addBusinessDays(date, count) {
    const result = new Date(date); // копия, чтобы не менять исходную дату
    while (count > 0) {
        result.setDate(result.getDate() + 1);
        const day = result.getDay(); // 0 - воскресенье, 6 - суббота
        if (day !== 0 && day !== 6) {
            count--;
        }
    }
    return result;
}

const orderDate = new Date(2026, 8, 4); 
const delivery = addBusinessDays(orderDate, 3);
console.log('Дата заказа:', formatDate(orderDate));
console.log('Доставка:', formatDate(delivery));

// Сколько дней осталось до конца месяца
const lastDay = new Date(orderDate.getFullYear(), orderDate.getMonth() + 1, 0); // последний день месяца
const daysLeft = lastDay.getDate() - orderDate.getDate();
console.log('Дней до конца месяца:', daysLeft);
