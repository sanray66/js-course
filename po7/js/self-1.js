const cards = document.querySelectorAll('.card');

cards.forEach((card, i) => {
    card.dataset.index = i;
});

for (const card of cards) {
    card.querySelector('h3').classList.add('accent');
}

cards[cards.length - 1].remove();

let node = document.getElementById('work');
const path = [];
while (node && node !== document.body) {
    path.push(node.tagName.toLowerCase());
    node = node.parentElement;
}
console.log(path.join(' → ')); // button → div → section
