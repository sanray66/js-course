const review = 'Мышь отличная, мышь тихая, но провод у мыши короткий.';
console.log(review.search(/мыш/i));
const first = review.match(/мыш\S*/i);
console.log(first[0], 'на позиции', first.index);
console.log(review.match(/мыш\S*/gi));

for (const m of review.matchAll(/мыш\S*/gi)) {
    console.log(m[0], 'позиция', m.index);
}
const none = 'Клавиатура'.match(/мышь/);
console.log(none);
