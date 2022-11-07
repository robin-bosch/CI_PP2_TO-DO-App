//Save function
function saveList() {
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
}


/**
 * Fetches one specific task by its given id
 * @param {} taskId 
 * @returns task as JSON or empty string
 */
 function getTask(taskId) {
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == taskId) {
            return taskList[i];
        }
    }

    //Spawn notification here
    createNotification(`Task with id ${taskId} was not found`, NOTIFICATION_TYPES.warning);
    return "";
    
}

function queryTask(taskId) {
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == taskId) {
            return {
                index: i,
                task: taskList[i]
            };
        }
    }

    //Spawn notification here
    createNotification(`Task with id ${taskId} was not found`, NOTIFICATION_TYPES.warning);
    return "";
}


/**
 * Saves settings to local storage
 */
 function saveSettings() {
    window.localStorage.setItem("settings", JSON.stringify(settings));
}
