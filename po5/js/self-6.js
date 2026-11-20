const articleRegex = /^[A-Z]{2}-\d{5}$/;
const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const articles = ["AB-12345", "CD-67890", "XY-00001", "A-12345", "AB12345", "AB-1234"];

console.log("Артикулы:");
articles.forEach(value => console.log(value, articleRegex.test(value)));

const phones = [
    "+7 (999) 123-45-67",
    "+7 (912) 555-12-34",
    "+7 (900) 111-22-33",
    "8 (999) 123-45-67",
    "+7 999 123-45-67",
    "+7 (99) 123-45-67"
];

console.log("Телефоны:");
phones.forEach(value => console.log(value, phoneRegex.test(value)));

const emails = [
    "user@mail.ru",
    "test123@gmail.com",
    "hello@example.org",
    "user@mail",
    "user mail@gmail.com",
    "@mail.ru"
];

console.log("Email:");
emails.forEach(value => console.log(value, emailRegex.test(value)));