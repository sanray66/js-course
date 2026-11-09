const original = [1, 2, 3];
const copy = original;
copy.push(4);
console.log('original:', original);
console.log(original === copy);
 
const realCopy = [...original];
realCopy.push(5);
console.log('original:', original, 'realCopy:', realCopy);
