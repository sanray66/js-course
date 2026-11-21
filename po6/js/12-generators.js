function* statuses() {
    console.log('  генератор запущен');
    yield 'Новый';
    console.log('  продолжаем после первого yield');
    yield 'Оплачен';
    yield 'Отправлен';
    return 'конец';
}
const gen = statuses();
console.log('генератор создан, но код ещё не выполнялся');
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

for (const s of statuses()) console.log('статус:', s);

function* idGenerator(prefix) {
    let n = 1;
    while (true) yield `${prefix}-${n++}`;
}
const orderIds = idGenerator('ORD');
console.log(orderIds.next().value, orderIds.next().value, orderIds.next().value);

function* paginate(items, size) {
    for (let i = 0; i < items.length; i += size) {
        yield items.slice(i, i + size);
    }
}
const products = ['Мышь', 'Клавиатура', 'Монитор', 'Коврик', 'Кабель'];
const pages = paginate(products, 2);
console.log('страница 1:', pages.next().value);
console.log('страница 2:', pages.next().value);
console.log('остальные:', [...pages]);
