const parsePrice = (text) => {
    const cleanedText = text.replace(/\s/g, "").replace("₽", "").replace(",", ".");

    return Number(cleanedText);
}

console.log(parsePrice("1 250,50 ₽"));
console.log(parsePrice("990₽"));
console.log(parsePrice("abc"));