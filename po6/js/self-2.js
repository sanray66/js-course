function f4() {
    return null.price; 
}
function f3() {
    return f4();
}
function f2() {
    return f3();
}
function f1() {
    return f2();
}

try {
    f1();
} catch (error) {
    console.log(error.stack);
    const lines = error.stack.split('\n');
    console.log('Место ошибки:', lines[1]);
}

function safe(fn) {
    try {
        return { ok: true, value: fn(), error: null };
    } catch (error) {
        return { ok: false, value: null, error: error };
    }
}

const good = safe(() => 2 + 2);
console.log(good); 

const bad = safe(f1);
console.log(bad.ok, bad.error.name); 
