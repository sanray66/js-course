function createIdGenerator(prefix) {
    let n = 0;

    function nextId() {
        return `${prefix}-${++n}`;
    }

    nextId.reset = function() {
        n = 0;
    };

    return nextId;
}

const nextOrderId = createIdGenerator('ORD');
const nextUserId = createIdGenerator('USR');

console.log(nextOrderId()); // ORD-1
console.log(nextOrderId()); // ORD-2
console.log(nextUserId());  // USR-1

nextOrderId.reset();

console.log(nextOrderId()); // ORD-1
console.log(nextUserId());  // USR-2