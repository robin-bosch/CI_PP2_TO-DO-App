//Global scope vars to keep the state between functions
//Keeps usersettings to prevent frequent loading from the localstorage
let settings;

//Sets an empty taskList that can be overriden on load by the localstorage
let taskList = [];

//Keeps the active HTML element of the task in the taskList
//Faster than iterating over them every time a different task is selected
let activeTaskElement;

//List of available theme colors
const THEME_COLORS = {
    green: "green",
    blue: "blue",
    red: "red",
    yellow: "yellow"
};

//List of all available notification sounds
const NOTIFICATION_SOUNDS = {
    sound1: "got-it-done",
    sound2: "ill-make-it-possible",
    sound3: "relax-message",
    sound4: "you-would-be-glad-to-know",
    sound5: "so-proud"
};

/**
 * Fetches data on load or creates new one if the user is new
 */
document.addEventListener("DOMContentLoaded", function() {

    //Creates basic settings
    if(window.localStorage.getItem("settings") == undefined) {
        window.localStorage.setItem("settings", JSON.stringify({
            themeColor: THEME_COLORS.blue,
            notificationsOn: true,
            sound: NOTIFICATION_SOUNDS.sound1,
            volume: 0.80
        }));
    }

    //Creates test task
    //Uncommenting will create these tasks with every reload
    //This will override exisiting tasks!
    // createTestTasks();

    //Fetches the taskList on load and saves it to the global task list
    if(window.localStorage.getItem("taskList") != undefined) {
        taskList = JSON.parse(window.localStorage.getItem("taskList"));
    }
    
    //Fetches settings
    settings = JSON.parse(window.localStorage.getItem("settings"));

    //Generate the taskList and load the theme
    generateList();
    setTheme();

});



/**
 * Update theme
 */
function setTheme() {
    document.querySelector("#theme-link").setAttribute("href", `assets/css/themes/${settings.themeColor}.css`);
}


let bellUnlocked = false;

function setAlerts() {
    for(let i = 0; i < taskList.length; i++) {
        if(!taskList[i].done && taskList[i].activeAlert && new Date(taskList[i].alert) > new Date()) {
            if(new Date(taskList[i].alert) - new Date() < 2147483647) {
                playAlert(taskList[i].id, new Date(taskList[i].alert) - new Date());
            }
        }
    }
    
    

    document.querySelector("#notifications-global-setting").innerHTML = bellUnlocked ? `
        <i class="fa-solid fa-bell-slash">
    ` :
    `
        <i class="fa-solid fa-bell">
    `;
    bellUnlocked = bellUnlocked ? false : true;    
    if(bellUnlocked) {
        createNotification("Task alerts are now active!", NOTIFICATION_TYPES.reminder);
    }
    else {
        createNotification("Task alerts are now disabled!", NOTIFICATION_TYPES.reminder);
    }
}

function playAlert(taskId, timeOut) {
    setTimeout(function() {
        if(bellUnlocked) {
            let taskItem = queryTask(taskId);
            const sound = new Audio(`./assets/audio/${settings.sound}.mp3`);

            createNotification(`Task alert: ${taskItem.task.title}`);

            sound.volume = settings.volume;
            sound.play();
        }
        

    }, timeOut);
    
}


/**
 * Creates a new task from the form and saves it to the storage
 */
function createTask() {
    if(validateForm()) {
        let newTaskId = `task${taskList.length+1}`;
        
        taskList.push({
            id: newTaskId,
            title: document.querySelector("#task-title").value,
            description: document.querySelector("#task-description").value,
            due: document.querySelector("#task-due-date").disabled ? "" : new Date(document.querySelector("#task-due-date").value),
            alert: document.querySelector("#task-alert-date").disabled ? "" : new Date(document.querySelector("#task-alert-date").value),
            alertActive: document.querySelector("#task-alert-date").disabled ? false : true,
            done: false
        });
        
        //Save list -> Update tasklist -> Set the added task to show -> Close the modal 
        saveList();
        generateList();
        showTask(newTaskId);
        toggleTaskModal();
    }
    else {

    }
}




/**
 * Updates the task with the given elements
 * @param {string} taskId 
 */
function updateTask(taskId) {
    if(validateForm()) {
        taskList[queryTask(taskId).index] = {
            title: document.querySelector("#task-title").value,
            description: document.querySelector("#task-description").value,
            due: document.querySelector("#task-due-date").disabled == true ? "" : new Date(document.querySelector("#task-due-date").value),
            activeAlert: document.querySelector("#task-alert-date").disabled ? false : true,
            alert: document.querySelector("#task-alert-date").disabled == true ? "" : new Date(document.querySelector("#task-alert-date").value),
            done: false
        };

        //Save list -> Update tasklist -> Set the updated task to show -> Close the modal 
        saveList();
        generateList();
        showTask(taskId);
        toggleTaskModal();
    }
    else {
        
    }
}


/**
 * Updates the status of the task
 * @param {string} taskId 
 */
function updateTaskStatus(taskId) {
    let taskElement = queryTask(taskId);

    //Switch the task between done and not done in the taskList
    taskList[taskElement.index].done = taskElement.task.done ? false : true;

    //Switch the done button if the current task is shown
    if(activeTaskElement != undefined && taskElement.task.id == activeTaskElement.id) {
        document.querySelector("#task-done-btn").innerHTML = taskElement.task.done ? "Unmark" : "Mark as done";
    }
    
    //Save list to storage
    saveList();

    //Update the list
    generateList();
}

/**
 * Show the task in the details window
 * @param {string} taskId 
 */
function showTask(taskId) {
    let task = getTask(taskId);


    //Highlights the active task in the task list
    //Check if the current active task isn't empty
    if(activeTaskElement != undefined) {
        //Remove active class before replacing the element with new one
        activeTaskElement.classList.remove("active");
    }
    //Replace the current activeTaskElement and set it active
    activeTaskElement = document.getElementById(taskId);
    activeTaskElement.classList.add("active");


    //Add task details html with all the data
    //If the alert is active the text appears normal
    //If the alert is inactive a the text is grayed out
    document.getElementById("task-details").innerHTML = `
        <button onclick="toggleTaskModal('${taskId}')" id="edit-btn" class="icon-btn"><i class="fa-solid fa-pen-to-square"></i></button>

        <div id="task-details-content">
            <h2>${task.title}</h2>
            <p>${task.description}</p>

            <div id="task-details-dates">
                <p class="task-date-text ${!task.done && new Date(task.due) < new Date() ? "overdue-text" : ""}">
                    <span>Due:</span> 
                    <span>${task.due == "" ? "---" : new Date(task.alert).toLocaleString()}</span>
                </p>
                ${task.activeAlert ? `
                <div id="toggle-alert-container" class="task-date-text">
                    <span>
                        <button class="icon-btn" id="toggle-alert-btn" onclick="toggleAlert('${taskId}')"><i class="fa-solid fa-bell"></i></button>
                        <p>Alert</p>
                    </span>
                    <p id="alert-text" >${task.alert == "" ? "---" : new Date(task.alert).toLocaleString()}</p>
                </div>
                ` : `
                <div id="toggle-alert-container" class="task-date-text">
                    <span>
                        <button class="icon-btn" id="toggle-alert-btn" onclick="toggleAlert('${taskId}')"><i class="fa-solid fa-bell-slash"></i></button>
                        <p>Alert</p>
                    </span>
                    <p id="alert-text" class="disabled-text">${task.alert == "" ? "---" : new Date(task.alert).toLocaleString()}</p>
                </div>
                `}
            </div>
        </div>
        
        <div id="task-control-container">
            <button onclick="deleteTask('${taskId}')" class="btn">Delete</button>
            <button id="task-done-btn" class="btn" onclick="updateTaskStatus('${taskId}')">${task.done ? "Unmark" : "Mark as done"}</button>
        </div>
    `;
}

/**
 * Toggles the alert for a single task
 * @param {string} taskId 
 */
function toggleAlert(taskId) {
    let taskItem = queryTask(taskId);

    //Switches the active alert in the task
    taskList[taskItem.index].activeAlert = taskList[taskItem.index].activeAlert ? false : true;

    //Save to list and reload current task
    saveList(); 
    showTask(taskId);
}

/**
 * Loads and displays the homescreen
 */
function showHome() {
    document.getElementById("task-details").innerHTML = `
        <h2>Select one task</h2>
    `;
}

/**
 * Deletes the task with given id from the list
 * This action is not reversible!
 * @param {string} taskId 
 */
function deleteTask(taskId) {
    //Ask for confirmation to delete task
    if(confirm("Do you want to remove the task?")) {

        //Get index from queryTask and delete item from array
        taskList.splice(queryTask(taskId).index, 1);

        //Save -> Update task list -> Switch to homescreen
        saveList();
        generateList();
        showHome();
    }
}

/**
 * Generates HTML for all tasks and categorizes them into done and active tasks
 */
function generateList() {
    let taskUndoneHtml = "";
    let taskDoneHtml = "";

    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].done) {
            taskDoneHtml += `
                <div id="${taskList[i].id}" class="task">
                    <div id="${taskList[i].id}-checkbox" class="task-checkbox ${taskList[i].done ? "checked" : ""}" onclick="updateTaskStatus('${taskList[i].id}')" aria-role="checkbox">${taskList[i].done ? '<i class="fa-solid fa-check"></i>' : ""}</div>
                    <div class="task-text" onclick="showTask('${taskList[i].id}')" aria-role="button">
                        <h3>${taskList[i].title}</h3>
                        <p>${taskList[i].description.slice(0, 60)}${taskList[i].description.length > 60 ? "..." : ""}</p>
                    </div>
                </div>
                `;
        }
        else {
            taskUndoneHtml += `
                <div id="${taskList[i].id}" class="task">
                    <div id="${taskList[i].id}-checkbox" class="task-checkbox ${taskList[i].done ? "checked" : ""}" onclick="updateTaskStatus('${taskList[i].id}')" >${taskList[i].done ? '<i class="fa-solid fa-check"></i>' : ""}</div>
                    <div class="task-text" onclick="showTask('${taskList[i].id}')">
                        <h3>${taskList[i].title}</h3>
                        <p>${taskList[i].description.slice(0, 60)}${taskList[i].description.length > 60 ? "..." : ""}</p>
                    </div>
                </div>
            `;
        }
    }
    document.getElementById("task-list").innerHTML = `
        <div class="list-category">
            <h3 class="list-category-heading">Active</h3>
            ${taskUndoneHtml}
        </div>
        <div class="list-category">
            <h3 class="list-category-heading">Done</h3>
            ${taskDoneHtml}
        </div>
    `;
}