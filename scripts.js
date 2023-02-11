function notifyMe() {
    if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        // If permission was already granted, then create a notification
        const notification = new Notification("Hi there!");
    } else if (Notification.permission !== "denied") {
        // If no permission, then request it
        Notification.requestPermission().then((permission) => {
            // If the user accepts, create a notification
            if (permission === "granted") {
                const notification = new Notification("Hi there!");
            }
        });
    }
}