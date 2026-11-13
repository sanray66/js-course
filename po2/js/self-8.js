function log(message) {
    console.log(message);

    log = function(message) {
        console.log("[повтор] " + message);
    };
}

log("Первое сообщение");  
log("Второе сообщение");  
log("Третье сообщение");  