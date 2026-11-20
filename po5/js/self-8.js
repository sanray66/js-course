const raw = `
мышь ; 790 ;Электроника

КОВРИК;450;  аксессуары
Наушники;2990;ЭЛЕКТРОНИКА
Клавиатура;abc;Электроника
Телефон;15000
`;

const products = raw.split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line !== '')
    .map(line => {
        const parts = line.split(';');

        if (parts.length !== 3) return null;

        const [name, price, category] = parts;

        const title = name.trim().toLowerCase();
        const cost = Number(price.trim());
        const type = category.trim().toLowerCase();

        if (!title || !type || !Number.isFinite(cost) || cost <= 0) {
            return null;
        }

        return {
            name: title[0].toUpperCase() + title.slice(1),
            price: cost,
            category: type
        };
    })
    .filter(product => product !== null);

console.log(products);