function deepFreeze(obj) {
    Object.freeze(obj);

    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    }

    return obj;
}