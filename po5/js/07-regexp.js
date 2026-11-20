const re1 = /мышь/;
const re2 = new RegExp('мышь');
console.log(re1.test('Беспроводная мышь'), re2.test('Клавиатура'));
console.log(/мышь/.test('Беспроводная МЫШЬ'), /мышь/i.test('Беспроводная МЫШЬ'));

const query = 'мышь';
const dynamic = new RegExp(query, 'gi');
console.log(dynamic.source, dynamic.flags);
console.log(dynamic.test('мышь'), dynamic.lastIndex);
console.log(dynamic.test('мышь'), dynamic.lastIndex);
console.log(dynamic.test('мышь'), dynamic.lastIndex);
