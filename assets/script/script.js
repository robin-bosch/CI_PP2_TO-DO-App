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
    }
}

function createTask() {

}

function showTask(taskId) {
    document.getElementById("taskId").classList.add("active")
    document.getElementById("task-details").innerHTML = `
        <h2>${testTasks[taskId].title}</h2>
        <p>${testTasks[taskId].description}</p>

        <p>Due: ${testTasks[taskId].due}</p>
        <div>
            <p>Bell</p>
            <p>Alert: ${testTasks[taskId].alert}</p>
        </div>
        <div>
            <button onclick="deleteTask('${taskId}')">Delete</button>
            <button>Mark as done</button>
        </div>
    `;
}
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
    } 
    generateList();
    showHome();
}

function generateList() {
    let taskHtml = "";
    for(let key of Object.keys(testTasks)) {
        // console.log(testTasks[key].title)
        taskHtml += `
        <div id="${key}" class="task">
            <input type="checkbox" ${testTasks[key].done ? "checked" : ""} class="task-checkbox"/>
            <div onclick="showTask('${key}')">
                <h3>${testTasks[key].title}</h3>
                <p>${testTasks[key].description.slice(0, 60)}${testTasks[key].description.length > 60 ? "..." : ""}</p>
            </div>
        </div>
        
        `
    }
    document.getElementById("task-list").innerHTML = taskHtml;
}

generateList();