const NOTIFICATION_TYPES = {
    warning: "warning",
    reminder: "reminder",
}
function createNotification(text, type) {
    let iconHtml;

    switch(type) {
        case NOTIFICATION_TYPES.warning:
            iconHtml = `<div class="notification-warning-icon notification-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>`;
            break;
        case NOTIFICATION_TYPES.reminder:
            iconHtml = `<div class="notification-reminder-icon notification-icon"><i class="fa-solid fa-bell"></i></div>`;
        default:
            iconHtml = `<div class="notification-default-icon notification-icon"><i class="fa-solid fa-exclamation"></i></div>`;
    }
    let notificationId = Math.random().toString(16).slice(2);
    let notificationHtml = `
        <div class="notification" id="notification-${notificationId}">
            <div class="notification-content">
                ${iconHtml}
                <p>${text == "" ? "Unknown notification" : text}</p>
                <button class="close-notification-btn" id="close-${notificationId}-btn"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>
            <div class="notification-timer">
                <div style="animation: roundtime 5s linear forwards"></div>
            </div>
        </div>
    `
    document.querySelector("#notification-container").innerHTML += notificationHtml;

    document.querySelector(`#close-${notificationId}-btn`).addEventListener("click", () => {removeNotification(notificationId)});

    setTimeout(function(){ 
        removeNotification(notificationId);
    }, 5000);
}

function removeNotification(notificationId) {
    let removeElement = document.querySelector(`#notification-${notificationId}`);
    if(removeElement != null) {
        removeElement.style.opacity = "0";

        setTimeout(function(){ 
            removeElement.remove();
        }, 400);
    }
    
};