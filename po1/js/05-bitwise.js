const READ = 1, WRITE = 2, DELETE = 4, ADMIN = 8;
let perms = READ | WRITE;           // 0011
const has = (p, flag) => (p & flag) === flag;
console.log('права:', bin(perms), 'может писать?', has(perms, WRITE));
 
perms = perms | DELETE;             // добавить право
console.log('добавили DELETE:', bin(perms));
perms = perms & ~WRITE;             // снять право
console.log('сняли WRITE:', bin(perms), 'может писать?', has(perms, WRITE));