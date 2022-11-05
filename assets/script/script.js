//Global scope vars
let taskList;
let activeTaskElement;


document.addEventListener("DOMContentLoaded", function() {
    // window.localStorage.setItem("taskList", JSON.stringify([
    //     {
    //         id: "task1",
    //         title:"Task1",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper venenatis ultrices. Nullam condimentum nisi ac elit consectetur, non laoreet leo faucibus. In nec iaculis eros, vel ullamcorper quam. Proin rutrum sapien eget fermentum molestie.",
    //         due: new Date(2022, 11, 2, 10, 33, 30, 0),
    //         alert: new Date(2022, 11, 1, 10, 33, 30, 0),
    //         done: false
    //     },
    //     {
    //         id: "task2",
    //         title:"Task2",
    //         description: "Etiam varius vehicula mi sit amet mollis. Nullam mattis ultrices eros id varius. Donec quam neque, facilisis id tincidunt vel, suscipit in tellus. Quisque faucibus diam non condimentum laoreet.",
    //         due: new Date(2022, 12, 2, 10, 33, 30, 0),
    //         alert: new Date(2022, 12, 1, 10, 33, 30, 0),
    //         done: true
    //     },
    //     {
    //         id: "task3",
    //         title:"Task3",
    //         description: "Fusce vulputate, augue a lacinia feugiat, quam dui molestie mi, id commodo orci neque at magna. Suspendisse ut metus diam. Vestibulum quis dolor nec nisl elementum posuere. Sed eleifend lorem urna, eget dictum nunc congue quis. Integer blandit, nulla sit amet dapibus faucibus, neque tellus semper neque, non bibendum est mauris in magna. Suspendisse at ante ut ex fringilla consequat non a diam. Nulla at aliquam arcu.",
    //         due: new Date(2022, 11, 6, 10, 33, 30, 0),
    //         alert: new Date(2022, 11, 5, 10, 33, 30, 0),
    //         done: false
    //     },
    //     {
    //         id: "task4",
    //         title:"Task4",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper venenatis ultrices. Nullam condimentum nisi ac elit consectetur, non laoreet leo faucibus. In nec iaculis eros, vel ullamcorper quam. Proin rutrum sapien eget fermentum molestie.",
    //         due: new Date(2023, 04, 2, 10, 33, 30, 0),
    //         alert: new Date(2023, 04, 1, 10, 33, 30, 0),
    //         done: false
    //     },
    //     {
    //         id: "task5",
    //         title:"Task5",
    //         description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
    //         due: new Date(2022, 11, 2, 10, 33, 30, 0),
    //         alert: new Date(2018, 11, 1, 10, 33, 30, 0),
    //         done: false
    //     },
    //     {
    //         id: "task6",
    //         title:"Task6",
    //         description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
    //         due: new Date(2022, 11, 2, 10, 33, 30, 0),
    //         alert: new Date(2018, 11, 1, 10, 33, 30, 0),
    //         done: false
    //     },
    //     {
    //         id: "task7",
    //         title:"Task7",
    //         description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
    //         due: new Date(2022, 11, 2, 10, 33, 30, 0),
    //         alert: new Date(2018, 11, 1, 10, 33, 30, 0),
    //         done: false
    //     },
    //     {
    //         id: "task8",
    //         title:"Task8",
    //         description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
    //         due: new Date(2022, 11, 2, 10, 33, 30, 0),
    //         alert: new Date(2018, 11, 1, 10, 33, 30, 0),
    //         done: false
    //     }
    // ]));

    taskList = JSON.parse(window.localStorage.getItem("taskList"));

    generateList();
    showHome();

})

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
    alert("not in the list")
    return "";
    
}

/**
 * Opens or closes task modal
 * @param {} taskId default = 0 if not defined
 */
function toggleTaskModal(taskId = 0) {
    let modalContainer = document.querySelector("#task-create-modal-container");


    if(modalContainer.classList.contains("open")) {
        modalContainer.classList.remove("open");
    }
    else {
        modalContainer.classList.add("open");

        //Switch between add or edit modal
        if(taskId != 0) {
            let task = getTask(taskId);
            document.querySelector("#task-heading").innerHTML = "Edit task";
            document.querySelector("#task-title").value = task.title;
            document.querySelector("#task-description").value = task.description;
            document.querySelector("#task-due-date").value = task.due.toISOString();
            document.querySelector("#task-alert-date").value = task.alert;


            document.querySelector("#form-control-container").innerHTML = `
                <input type="reset" value="Reset" class="btn">
                <input type="submit" value="Save task" id="edit-task-submit" class="btn">
            `;

            document.querySelector("#edit-task-submit").addEventListener ('click', function(event) {
                event.preventDefault();
                updateTask(taskId);
            });
        }
        else {
            document.querySelector("#task-heading").innerHTML = "Create task";

            document.querySelector("#form-control-container").innerHTML = `
                <input type="reset" value="Reset" class="btn">
                <input type="submit" value="Create task" id="create-task-submit" class="btn">
            `;

            console.log(document.querySelector("#form-control-container"));
            document.querySelector("#create-task-submit").addEventListener ('click', function(event) {
                event.preventDefault();
                createTask();
            });
        }
    }  
}



function toggleTaskAlertDateEnabler() {
    if(document.querySelector("#task-alert-date-enabler").classList.contains("enabled")) {
        document.querySelector("#task-alert-date-enabler").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.querySelector("#task-alert-date-label").classList.add("disabled-text");
        document.querySelector("#task-alert-date").disabled = true;
        document.querySelector("#task-alert-date-enabler").classList.remove("enabled");
    }
    else {
        document.querySelector("#task-alert-date-enabler").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
        document.querySelector("#task-alert-date-label").classList.remove("disabled-text");
        document.querySelector("#task-alert-date").disabled = false;
        document.querySelector("#task-alert-date-enabler").classList.add("enabled");
    } 
}

function toggleTaskDueDateEnabler() {
    let dueDateSwitch = document.querySelector("#task-due-date-enabler");

    if(dueDateSwitch.classList.contains("enabled")) {
        dueDateSwitch.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.querySelector("#task-due-date-label").classList.add("disabled-text");
        document.querySelector("#task-due-date").disabled = true;
        dueDateSwitch.classList.remove("enabled");
        document.querySelector("#task-alert-date-enabler").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.querySelector("#task-alert-date-label").classList.add("disabled-text");
        document.querySelector("#task-alert-date").disabled = true;
        document.querySelector("#task-alert-date-enabler").classList.remove("enabled");
    }
    else {
        dueDateSwitch.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
        document.querySelector("#task-due-date-label").classList.remove("disabled-text");
        document.querySelector("#task-due-date").disabled = false;
        dueDateSwitch.classList.add("enabled");
    } 
}


// function validateTask

function createTask() {
    if(validateForm()) {
        let newTaskId = `task${taskList.length+1}`;

        
        taskList.push({
            id: newTaskId,
            title: document.querySelector("#task-title").value,
            description: document.querySelector("#task-description").value,
            due: document.querySelector("#task-due-date").disabled == true ? "" : new Date(document.querySelector("#task-due-date").value),
            alert: ocument.querySelector("#task-alert-date").disabled == true ? "" : new Date(document.querySelector("#task-alert-date").value),
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
    //TODO: Spawn alert notifications
    if(document.querySelector("#task-title").value == "") {

        alert("Title please")
        return false;
    }
    else if(document.querySelector("#task-due-date").disabled != true && document.querySelector("#task-due-date").value == "") {
        alert("due empty");
        return false;
    }
    else if(document.querySelector("#task-alert-date").disabled != true && document.querySelector("#task-alert-date").value == "") {
        alert("alert empty");
        return false;
    }
    else if((document.querySelector("#task-alert-date").disabled != true && document.querySelector("#task-due-date").disabled != true) && (document.querySelector("#task-alert-date").value > document.querySelector("#task-due-date").value)) {
        alert("the alert cant be in the future");
        return false;
    }
    else {
        return true;
    }
}


function updateTask(taskId) {
    if(validateForm()) {
        for(let i = 0; i < taskList.length; i++) {
            if(taskList[i].id == taskId) {
                taskList[i] = {
                    title: document.querySelector("#task-title").value,
                    description: document.querySelector("#task-description").value,
                    due: document.querySelector("#task-due-date").disabled == true ? "" : new Date(document.querySelector("#task-due-date").value),
                    alert: document.querySelector("#task-alert-date").disabled == true ? "" : new Date(document.querySelector("#task-alert-date").value),
                    done: false
                };
            }
        }

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
    let taskList = JSON.parse(window.localStorage.getItem("taskList"));
    
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].id == taskId) {
            taskList[i].done = taskList[i].done ? false : true;
            task = taskList[i];
            break;
        }
    }
    
    saveList();

    if(task.done) {
        document.querySelector(`#${taskId}-checkbox`).classList.add("checked");
        document.querySelector(`#${taskId}-checkbox`).innerHTML = '<i class="fa-solid fa-check"></i>';
    }
    else {
        document.querySelector(`#${taskId}-checkbox`).classList.remove("checked");
        document.querySelector(`#${taskId}-checkbox`).innerHTML = "";
    }
    document.querySelector("#task-done-btn").innerHTML = currentTask.done ? "Unmark" : "Mark as done";

    generateList();

}

function showTask(taskId) {
    let task = getTask(taskId)
    if(activeTaskElement != undefined) {
        activeTaskElement.classList.remove("active");
    }
    activeTaskElement = document.getElementById(taskId);
    activeTaskElement.classList.add("active")
    document.getElementById("task-details").innerHTML = `
        <button onclick="toggleTaskModal('${taskId}')"><i class="fa-solid fa-pen-to-square"></i></button>
        <h2>${task.title}</h2>
        <p>${task.description}</p>

        <p>Due: ${task.due.toLocaleString()}</p>
        <div>
            <p>Bell</p>
            <p>Alert: ${task.alert.toLocaleString()}</p>
        </div>
        <div id="task-control-container">
            <button onclick="deleteTask('${taskId}')" class="btn">Delete</button>
            <button id="task-done-btn" class="btn" onclick="updateTaskStatus('${taskId}')">${task.done ? "Unmark" : "Mark as done"}</button>
        </div>
    `;
}




function showHome() {
    document.getElementById("task-details").innerHTML = `
        <h2>Select one task</h2>
    `;
}

function deleteTask(taskId) {
    // console.log(document.getElementById(this));
    if(confirm("Do you want to remove the task?")) {
        let taskList = JSON.parse(window.localStorage.getItem("taskList"));

        for(let i = 0; i < taskList.length; i++) {
            if(taskList[i].id = taskId) {
                taskList.splice(i, 1);
                break;
            }
        }
        window.localStorage.setItem("taskList", JSON.stringify(taskList));

        generateList();
        showHome();
    } 
    
}

function generateList() {
    let taskUndoneHtml = "";
    let taskDoneHtml = "";
    let taskList = JSON.parse(window.localStorage.getItem("taskList"));
    console.log(taskList);

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
        <p>Active</p>
        ${taskUndoneHtml}

        <p>Done</p>
        ${taskDoneHtml}
    `;
}

