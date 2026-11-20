let arr;

arr = [3, 1, 2];
arr.push(4);
console.log(arr); // [3, 1, 2, 4] — изменился

arr = [3, 1, 2];
arr.sort();
console.log(arr); // [1, 2, 3] — изменился

arr = [3, 1, 2];
arr.splice(1, 1);
console.log(arr); // [3, 2] — изменился

arr = [1, 2, 3];
const mapped = arr.map(x => x * 2);
console.log(arr);    // [1, 2, 3] — не изменился
console.log(mapped); // [2, 4, 6]

arr = [1, 2, 3];
const filtered = arr.filter(x => x > 1);
console.log(arr);      // [1, 2, 3] — не изменился
console.log(filtered); // [2, 3]

arr = [1, 2, 3];
const sliced = arr.slice(0, 2);
console.log(arr);    // [1, 2, 3] — не изменился
console.log(sliced); // [1, 2]

arr = [1, 2];
const combined = arr.concat([3, 4]);
console.log(arr);      // [1, 2] — не изменился
console.log(combined); // [1, 2, 3, 4]

arr = [3, 1, 2];
const sorted = arr.toSorted();
console.log(arr);     // [3, 1, 2] — не изменился
console.log(sorted);  // [1, 2, 3]