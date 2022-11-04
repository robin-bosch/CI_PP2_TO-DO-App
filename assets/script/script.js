let testTasks = {
    task1: {
        title:"Task1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper venenatis ultrices. Nullam condimentum nisi ac elit consectetur, non laoreet leo faucibus. In nec iaculis eros, vel ullamcorper quam. Proin rutrum sapien eget fermentum molestie.",
        due: new Date(2022, 11, 2, 10, 33, 30, 0),
        alert: new Date(2022, 11, 1, 10, 33, 30, 0),
        done: false
    },
    task2: {
        title:"Task2",
        description: "Etiam varius vehicula mi sit amet mollis. Nullam mattis ultrices eros id varius. Donec quam neque, facilisis id tincidunt vel, suscipit in tellus. Quisque faucibus diam non condimentum laoreet.",
        due: new Date(2022, 12, 2, 10, 33, 30, 0),
        alert: new Date(2022, 12, 1, 10, 33, 30, 0),
        done: true
    },
    task3: {
        title:"Task3",
        description: "Fusce vulputate, augue a lacinia feugiat, quam dui molestie mi, id commodo orci neque at magna. Suspendisse ut metus diam. Vestibulum quis dolor nec nisl elementum posuere. Sed eleifend lorem urna, eget dictum nunc congue quis. Integer blandit, nulla sit amet dapibus faucibus, neque tellus semper neque, non bibendum est mauris in magna. Suspendisse at ante ut ex fringilla consequat non a diam. Nulla at aliquam arcu.",
        due: new Date(2022, 11, 6, 10, 33, 30, 0),
        alert: new Date(2022, 11, 5, 10, 33, 30, 0),
        done: false
    },
    task4: {
        title:"Task4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper venenatis ultrices. Nullam condimentum nisi ac elit consectetur, non laoreet leo faucibus. In nec iaculis eros, vel ullamcorper quam. Proin rutrum sapien eget fermentum molestie.",
        due: new Date(2023, 04, 2, 10, 33, 30, 0),
        alert: new Date(2023, 04, 1, 10, 33, 30, 0),
        done: false
    },
    task5: {
        title:"Task5",
        description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
        due: new Date(2022, 11, 2, 10, 33, 30, 0),
        alert: new Date(2018, 11, 1, 10, 33, 30, 0),
        done: false
    },
    task6: {
        title:"Task6",
        description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
        due: new Date(2022, 11, 2, 10, 33, 30, 0),
        alert: new Date(2018, 11, 1, 10, 33, 30, 0),
        done: false
    },
    task7: {
        title:"Task7",
        description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
        due: new Date(2022, 11, 2, 10, 33, 30, 0),
        alert: new Date(2018, 11, 1, 10, 33, 30, 0),
        done: false
    },
    task8: {
        title:"Task8",
        description: "Donec tempor libero nec consectetur cursus. Ut vehicula ullamcorper justo, quis placerat lorem pulvinar ut. Sed id dui id est tristique fermentum nec eu nisi. Praesent id justo et massa consequat dignissim. Ut laoreet vestibulum commodo. Etiam eget aliquet ante. Mauris placerat massa tincidunt hendrerit rutrum. Phasellus ornare arcu eget dictum auctor. Nam fermentum, eros luctus egestas facilisis, dolor odio maximus neque, ut tincidunt lectus risus et odio. Donec pharetra, arcu ut condimentum cursus, massa lectus tempus ligula, id blandit diam nisl id nisl. Mauris accumsan lectus eu suscipit ornare. Sed convallis leo facilisis, tristique eros eu, fringilla est. Cras efficitur mattis nibh, id ultricies dui ultricies et. Etiam quis mattis nulla.",
        due: new Date(2022, 11, 2, 10, 33, 30, 0),
        alert: new Date(2018, 11, 1, 10, 33, 30, 0),
        done: false
    }
}

let activeTaskElement;

function toggleCreateTaskModal() {
    if(document.querySelector("#task-create-modal-container").classList.contains("open")) {
        document.querySelector("#task-create-modal-container").classList.remove("open");
    }
    else {
        document.querySelector("#task-create-modal-container").classList.add("open");
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
    if(document.querySelector("#task-due-date-enabler").classList.contains("enabled")) {
        document.querySelector("#task-due-date-enabler").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.querySelector("#task-due-date-label").classList.add("disabled-text");
        document.querySelector("#task-due-date").disabled = true;
        document.querySelector("#task-due-date-enabler").classList.remove("enabled");
        document.querySelector("#task-alert-date-enabler").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.querySelector("#task-alert-date-label").classList.add("disabled-text");
        document.querySelector("#task-alert-date").disabled = true;
        document.querySelector("#task-alert-date-enabler").classList.remove("enabled");
    }
    else {
        document.querySelector("#task-due-date-enabler").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
        document.querySelector("#task-due-date-label").classList.remove("disabled-text");
        document.querySelector("#task-due-date").disabled = false;
        document.querySelector("#task-due-date-enabler").classList.add("enabled");
    } 
}


document.querySelector("#create-task-submit").addEventListener ('click', function(event) {
    event.preventDefault();

    if(document.querySelector("#task-title").value == "") {
        alert("Title please")
    }
    else if(document.querySelector("#task-due-date").disabled != true && document.querySelector("#task-due-date").value == "") {
        alert("due empty");
    }
    else if(document.querySelector("#task-alert-date").disabled != true && document.querySelector("#task-alert-date").value == "") {
        alert("alert empty");
    }
    else if((document.querySelector("#task-alert-date").disabled != true && document.querySelector("#task-due-date").disabled != true) && (document.querySelector("#task-alert-date").value > document.querySelector("#task-due-date").value)) {
        alert("the alert cant be in the future");
    }
    else {
        let newTaskId = `task${Object.keys(testTasks).length+1}`;
        testTasks[newTaskId] = {
            title: document.querySelector("#task-title").value,
            description: document.querySelector("#task-description").value,
            due: document.querySelector("#task-due-date").value,
            alert: document.querySelector("#task-alert-date").value,
            done: false
        };

        generateList();
        showTask(newTaskId);
    }

    
 });

function updateTaskStatus(taskId) {
    testTasks[taskId].done = testTasks[taskId].done ? false : true;
    if(testTasks[taskId].done) {
        document.querySelector(`#${taskId}-checkbox`).classList.add("checked");
        document.querySelector(`#${taskId}-checkbox`).innerHTML = '<i class="fa-solid fa-check"></i>';
    }
    else {
        document.querySelector(`#${taskId}-checkbox`).classList.remove("checked");
        document.querySelector(`#${taskId}-checkbox`).innerHTML = "";
    }
    document.querySelector("#task-done-btn").innerHTML = testTasks[taskId].done ? "Unmark" : "Mark as done";

}

function showTask(taskId) {
    if(activeTaskElement != undefined) {
        activeTaskElement.classList.remove("active");
    }
    activeTaskElement = document.getElementById(taskId);
    activeTaskElement.classList.add("active")
    document.getElementById("task-details").innerHTML = `
        <h2>${testTasks[taskId].title}</h2>
        <p>${testTasks[taskId].description}</p>

        <p>Due: ${testTasks[taskId].due.toLocaleString()}</p>
        <div>
            <p>Bell</p>
            <p>Alert: ${testTasks[taskId].alert.toLocaleString()}</p>
        </div>
        <div id="form-control-container">
            <button onclick="deleteTask('${taskId}')" class="btn">Delete</button>
            <button id="task-done-btn" class="btn" onclick="updateTaskStatus('${taskId}')">${testTasks[taskId].done ? "Unmark" : "Mark as done"}</button>
        </div>
    `;
}

generateList();
showTask("task1");


function showHome() {
    document.getElementById("task-details").innerHTML = `
        <h2>Select one task</h2>
    `;
}


function updateTask() {

}

function deleteTask(taskId) {
    // console.log(document.getElementById(this));
    if(confirm("Do you want to remove the task?")) {
        console.log(testTasks[taskId]);
        testTasks[taskId] = undefined;
        delete testTasks[taskId];
        generateList();
        showHome();
    } 
    
}

function generateList() {
    let taskHtml = "";
    for(let key of Object.keys(testTasks)) {
        // console.log(testTasks[key].title)
        taskHtml += `
        <div id="${key}" class="task">
            <div id="${key}-checkbox" class="task-checkbox ${testTasks[key].done ? "checked" : ""}" onclick="updateTaskStatus('${key}')" >${testTasks[key].done ? '<i class="fa-solid fa-check"></i>' : ""}</div>
            <div class="task-text" onclick="showTask('${key}')">
                <h3>${testTasks[key].title}</h3>
                <p>${testTasks[key].description.slice(0, 60)}${testTasks[key].description.length > 60 ? "..." : ""}</p>
            </div>
        </div>
        
        `
    }
    document.getElementById("task-list").innerHTML = taskHtml;
}

