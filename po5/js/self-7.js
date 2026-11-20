function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHTML(text) {
    return text.replace(/[&<>"']/g, char => {
        const entities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return entities[char];
    });
}

function highlight(text, query) {
    if (!query) return escapeHTML(text);

    const safeText = escapeHTML(text);
    const re = new RegExp(escapeRegExp(query), 'gi');

    return safeText.replace(re, found => `<mark>${found}</mark>`);
}

console.log(highlight('Мышь и коврик для мыши', 'мыш'));
console.log(highlight('<script>alert("test")</script>', 'script'));

function parsePrice(text) {
    const re = /от (?<min>[\d ]+) до (?<max>[\d ]+) ₽/;
    const match = text.match(re);

    if (!match) return null;

    return {
        min: Number(match.groups.min.replace(/\s/g, '')),
        max: Number(match.groups.max.replace(/\s/g, ''))
    };
}

console.log(parsePrice("от 1 250 до 3 000 ₽"));