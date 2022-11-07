//Global scope vars to keep the state between functions
let settings;
let taskList = [];
let activeTaskElement;


document.addEventListener("DOMContentLoaded", function() {
    console.log(window.localStorage.getItem("settings"));
    if(window.localStorage.getItem("settings") == undefined) {
        window.localStorage.setItem("settings", JSON.stringify({
            themeColor: THEME_COLORS.blue,
            notificationsOn: true,
            sound: NOTIFICATION_SOUNDS.sound1,
            volume: 0.80
        }));
    }
    // window.localStorage.setItem("taskList", JSON.stringify([
    //     {
    //         id: "task1",
    //         title:"Task1",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper venenatis ultrices. Nullam condimentum nisi ac elit consectetur, non laoreet leo faucibus. In nec iaculis eros, vel ullamcorper quam. Proin rutrum sapien eget fermentum molestie.",
    //         due: new Date(2022, 11, 2, 10, 33, 30, 0),
    //         alert: new Date(2022, 11, 1, 10, 33, 30, 0),
    //         activeAlert: true,
    //         done: false
    //     },
    //     {
    //         id: "task2",
    //         title:"Task2",
    //         description: "Etiam varius vehicula mi sit amet mollis. Nullam mattis ultrices eros id varius. Donec quam neque, facilisis id tincidunt vel, suscipit in tellus. Quisque faucibus diam non condimentum laoreet.",
    //         due: new Date(2022, 12, 2, 10, 33, 30, 0),
    //         alert: new Date(2022, 12, 1, 10, 33, 30, 0),
    //         activeAlert: false,
    //         done: true
    //     },
    //     {
    //         id: "task3",
    //         title:"Task3",
    //         description: "Fusce vulputate, augue a lacinia feugiat, quam dui molestie mi, id commodo orci neque at magna. Suspendisse ut metus diam. Vestibulum quis dolor nec nisl elementum posuere. Sed eleifend lorem urna, eget dictum nunc congue quis. Integer blandit, nulla sit amet dapibus faucibus, neque tellus semper neque, non bibendum est mauris in magna. Suspendisse at ante ut ex fringilla consequat non a diam. Nulla at aliquam arcu.",
    //         due: new Date(2022, 11, 6, 10, 33, 30, 0),
    //         alert: new Date(2022, 11, 5, 10, 33, 30, 0),
    //         activeAlert: false,
    //         done: false
    //     },
    //     {
    //         id: "task4",
    //         title:"Task4",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper venenatis ultrices. Nullam condimentum nisi ac elit consectetur, non laoreet leo faucibus. In nec iaculis eros, vel ullamcorper quam. Proin rutrum sapien eget fermentum molestie.",
    //         due: new Date(2023, 04, 2, 10, 33, 30, 0),
    //         alert: new Date(2023, 04, 1, 10, 33, 30, 0),
    //         activeAlert: true,
    //         done: false
    //     },
    //     {
    //         id: "task5",
    //         title:"Task5",
    //         description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
    //         due: new Date(2022, 11, 2, 10, 33, 30, 0),
    //         alert: new Date(2018, 11, 1, 10, 33, 30, 0),
    //         activeAlert: true,
    //         done: false
    //     },
    //     {
    //         id: "task6",
    //         title:"Task6",
    //         description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
    //         due: new Date(2022, 11, 2, 10, 33, 30, 0),
    //         alert: new Date(2018, 11, 1, 10, 33, 30, 0),
    //         activeAlert: false,
    //         done: false
    //     },
    //     {
    //         id: "task7",
    //         title:"Task7",
    //         description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
    //         due: new Date(2022, 11, 2, 10, 33, 30, 0),
    //         alert: new Date(2018, 11, 1, 10, 33, 30, 0),
    //         activeAlert: true,
    //         done: false
    //     },
    //     {
    //         id: "task8",
    //         title:"Task8",
    //         description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
    //         due: new Date(2022, 11, 2, 10, 33, 30, 0),
    //         alert: new Date(2018, 11, 1, 10, 33, 30, 0),
    //         activeAlert: true,
    //         done: false
    //     }
    // ]));

    if(window.localStorage.getItem("taskList") != undefined) {
        taskList = JSON.parse(window.localStorage.getItem("taskList"));
    }
    

    settings = JSON.parse(window.localStorage.getItem("settings"))

    generateList();

    setTheme();

});

/**
 * Update theme
 */
function setTheme() {
    document.querySelector("#theme-link").setAttribute("href", `assets/css/themes/${settings.themeColor}.css`);
}

const THEME_COLORS = {
    green: "green",
    blue: "blue",
    red: "red"
}

const NOTIFICATION_SOUNDS = {
    sound1: "got-it-done",
    sound2: "ill-make-it-possible",
    sound2: "relax-message",
    sound2: "you-would-be-glad-to-know",
    sound2: "so-proud"
}

// function setAlerts() {
//     for(let i = 0; i < taskList.length; i++) {
//         if(!taskList[i].done && taskList[i].activeAlert && taskList[i].alert < Date.now()) {
//             var eta_ms = taskList[i].alert - Date.now();
//             let timeout = setTimeout(function(){}, taskList[i].alert - Date.now());
//         }
//     }
    
// }

// function playAlert() {

// }
// function validateTask

function createTask() {
    if(validateForm()) {
        let newTaskId = `task${taskList.length+1}`;

        
        taskList.push({
            id: newTaskId,
            title: document.querySelector("#task-title").value,
            description: document.querySelector("#task-description").value,
            due: document.querySelector("#task-due-date").disabled == true ? "" : new Date(document.querySelector("#task-due-date").value),
            alert: document.querySelector("#task-alert-date").disabled == true ? "" : new Date(document.querySelector("#task-alert-date").value),
            done: false
        });
        
        saveList();

        generateList();
        showTask(newTaskId);
        toggleTaskModal();
    }
    else {

    }
 };

function validateForm() {
    if(document.querySelector("#task-title").value == "") {

        createNotification("The title of the task cannot be empty", NOTIFICATION_TYPES.warning);
        return false;
    }
    else if(document.querySelector("#task-due-date").disabled != true && document.querySelector("#task-due-date").value == "") {
        createNotification("Due date was not set", NOTIFICATION_TYPES.warning);
        return false;
    }
    else if(document.querySelector("#task-alert-date").disabled != true && document.querySelector("#task-alert-date").value == "") {
        createNotification("Alert was not set", NOTIFICATION_TYPES.warning);
        return false;
    }
    else if((document.querySelector("#task-alert-date").disabled != true && document.querySelector("#task-due-date").disabled != true) && (document.querySelector("#task-alert-date").value > document.querySelector("#task-due-date").value)) {
        createNotification("The alert date cannot be after the due date", NOTIFICATION_TYPES.warning);
        return false;
    }
    else {
        return true;
    }
}


/**
 * Updates the task with the given elements
 * @param {} taskId 
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
};



function updateTaskStatus(taskId) {
    let task;
    
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == taskId) {
            taskList[i].done = taskList[i].done ? false : true;
            task = taskList[i];

            if(activeTaskElement != undefined && task.id == activeTaskElement.id) {
                document.querySelector("#task-done-btn").innerHTML = taskList[i].done ? "Unmark" : "Mark as done";
            }
            break;
        }
    }
    
    saveList();

    let checkBoxElement = document.querySelector(`#${taskId}-checkbox`);

    if(task.done) {
        checkBoxElement.classList.add("checked");
        checkBoxElement.innerHTML = '<i class="fa-solid fa-check"></i>';
    }
    else {
        checkBoxElement.classList.remove("checked");
        checkBoxElement.innerHTML = "";
    }
    
    

    generateList();

}

function showTask(taskId) {
    let task = getTask(taskId)
    if(activeTaskElement != undefined) {
        activeTaskElement.classList.remove("active");
    }
    activeTaskElement = document.getElementById(taskId);
    activeTaskElement.classList.add("active")

    let alertHtml = task.activeAlert ? `
        <div id="toggle-alert-container">
            <button class="icon-btn" id="toggle-alert-btn" onclick="toggleAlert('${taskId}')"><i class="fa-solid fa-bell"></i></button>
            <p id="alert-text" class="task-date-text">Alert: ${task.alert.toLocaleString()}</p>
        </div>
    ` : `
        <div id="toggle-alert-container">
            <button class="icon-btn" id="toggle-alert-btn" onclick="toggleAlert('${taskId}')"><i class="fa-solid fa-bell-slash"></i></button>
            <p id="alert-text" class="disabled-text task-date-text">Alert: ${task.alert.toLocaleString()}</p>
        </div>
        `;
    document.getElementById("task-details").innerHTML = `
        <button onclick="toggleTaskModal('${taskId}')" id="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
        <h2>${task.title}</h2>
        <p>${task.description}</p>

        <p class="task-date-text">Due: ${task.due.toLocaleString()}</p>
        ${alertHtml}
        <div id="task-control-container">
            <button onclick="deleteTask('${taskId}')" class="btn">Delete</button>
            <button id="task-done-btn" class="btn" onclick="updateTaskStatus('${taskId}')">${task.done ? "Unmark" : "Mark as done"}</button>
        </div>
    `;
}

function toggleAlert(taskId) {
    let taskItem = queryTask(taskId);

    taskList[taskItem.index].activeAlert = taskList[taskItem.index].activeAlert ? false : true;
    document.querySelector("#toggle-alert-container").innerHTML = taskItem.task.activeAlert ? `
        <button class="icon-btn" id="toggle-alert-btn" onclick="toggleAlert('${taskId}')"><i class="fa-solid fa-bell"></i></button>
        <p id="alert-text" class="task-date-text">Alert: ${taskItem.task.alert.toLocaleString()}</p>
    ` : `
        <button class="icon-btn" id="toggle-alert-btn" onclick="toggleAlert('${taskId}')"><i class="fa-solid fa-bell-slash"></i></button>
        <p id="alert-text" class="disabled-text task-date-text">Alert: ${taskItem.task.alert.toLocaleString()}</p>
    `;  
    saveList();  
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
 * @param {*} taskId 
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
                    <div id="${taskList[i].id}-checkbox" class="task-checkbox ${taskList[i].done ? "checked" : ""}" onclick="updateTaskStatus('${taskList[i].id}')" >${taskList[i].done ? '<i class="fa-solid fa-check"></i>' : ""}</div>
                    <div class="task-text" onclick="showTask('${taskList[i].id}')">
                        <h3>${taskList[i].title}</h3>
                        <p>${taskList[i].description.slice(0, 60)}${taskList[i].description.length > 60 ? "..." : ""}</p>
                    </div>
                </div>
                `
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
            `
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

