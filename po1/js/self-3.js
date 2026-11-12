const READ = 1;
const WRITE = 2;
const DELETE = 4;

const describe = (perms) => {
    const result = []

    if (perms & READ) {
        result.push('чтение');
    }

    if (perms & WRITE) {
        result.push("запись");
    }

    if (perms & DELETE) {
        result.push("удаление");
    }

    return result.join(', ')
}

console.log(describe(READ | WRITE));
console.log(describe(READ | DELETE));
console.log(describe(READ | WRITE | DELETE));