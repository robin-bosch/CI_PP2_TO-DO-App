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

    //Spawn notification here if task was not found
    createNotification(`Task with id ${taskId} was not found`, NOTIFICATION_TYPES.warning);
    return "";
    
}

/**
 * Fetches one task and returns it in an object together with an index
 * @param {*} taskId 
 * @returns Object with 
 */
function queryTask(taskId) {
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == taskId) {
            return {
                index: i,
                task: taskList[i]
            };
        }
    }

    //Spawn notification here if task was not found
    createNotification(`Task with id ${taskId} was not found`, NOTIFICATION_TYPES.warning);
    return "";
}

/**
 * Saves settings into local storage
 */
 function saveSettings() {
    window.localStorage.setItem("settings", JSON.stringify(settings));
}

/**
 * Saves list of tasks into local storage
 */
 function saveList() {
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
}