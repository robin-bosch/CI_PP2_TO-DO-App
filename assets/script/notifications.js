
/**
 * Object that contains possible notification types
 */
const NOTIFICATION_TYPES = {
    warning: "warning",
    reminder: "reminder",
};

/**
 * Spawns a notification at the bottom right, that disappears automatically or by clicking it
 * @param {string} text - Text that is displayed in the notification
 * @param {string} type - Type given with the NOTIFICATION_TYPES object
 */
function createNotification(text, type) {
    let iconHtml;

    //Select the correct icon, depending on the notification type
    switch(type) {
        case NOTIFICATION_TYPES.warning:
            iconHtml = `<div class="notification-warning-icon notification-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>`;
            break;
        case NOTIFICATION_TYPES.reminder:
            iconHtml = `<div class="notification-reminder-icon notification-icon"><i class="fa-solid fa-bell"></i></div>`;
            break;
        default:
            iconHtml = `<div class="notification-default-icon notification-icon"><i class="fa-solid fa-exclamation"></i></div>`;
    }

    //Create a unique notification id to identify it
    let notificationId = Math.random().toString(16).slice(2);

    //Generate notification and add it to the notification container
    let notificationElement = document.createElement("div");
    notificationElement.classList.add("notification")
    notificationElement.id = `notification-${notificationId}`;
    notificationElement.innerHTML = `
        <div class="notification-content">
            ${iconHtml}
            <p>${text == "" ? "Unknown notification" : text}</p>
            <button class="icon-btn" id="close-${notificationId}-btn"><i class="fa-regular fa-circle-xmark"></i></button>
        </div>
        <div class="notification-timer">
            <div style="animation: timer 5s linear forwards"></div>
        </div>
    `;
    document.querySelector("#notification-container").appendChild(notificationElement);

    //Attach eventlistener for closing the notification with a click and automatically after 5 seconds
    document.querySelector(`#close-${notificationId}-btn`).addEventListener("click", function() {
        removeNotification(notificationId);
    });

    setTimeout(function(){ 
        removeNotification(notificationId);
    }, 5000);
}

/**
 * Closes the notification with the given id and removes it
 * @param {string} notificationId 
 */
function removeNotification(notificationId) {
    let removeElement = document.querySelector(`#notification-${notificationId}`);

    //Check if notification exists
    if(removeElement != null) {
        //Setting the opacity to 0 so it transitions to a non visible state
        removeElement.style.opacity = "0";

        //Remove notification after 0.4s -> This needs to be manually extended 
        //if the transition is longer than 0.4s
        setTimeout(function(){ 
            removeElement.remove();
        }, 400);
    }
}