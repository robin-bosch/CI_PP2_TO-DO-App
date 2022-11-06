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

function toggleNotificationSwitch() {
    if(document.querySelector("#notification-active-control").classList.contains("enabled")) {
        document.querySelector("#notification-active-control").classList.remove("enabled")
    } 
    else {
        document.querySelector("#notification-active-control").classList.add("enabled")
    }
    settings.notificationsOn = settings.notificationsOn ? false : true;

    document.querySelector("#notification-active-control").innerHTML = settings.notificationsOn ? `
        <i class="fa-solid fa-toggle-on"></i>
        <h4>On</h4>
    ` :
    `
        <i class="fa-solid fa-toggle-off"></i>
        <h4>Off</h4>
    `
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

function toggleSettingsModal() {
    //Get settings
    // let settings = JSON.parse(window.localStorage.getItem("settings"));


    document.querySelector("#volume-slider").value = settings.volume * 100;

    let modalContainer = document.querySelector("#settings-modal-container");



    const sound1 = new Audio("./assets/audio/got-it-done.mp3");
    const sound2 = new Audio("./assets/audio/ill-make-it-possible.mp3");
    const sound3 = new Audio("./assets/audio/relax-message.mp3");
    const sound4 = new Audio("./assets/audio/you-would-be-glad-to-know.mp3");
    const sound5 = new Audio("./assets/audio/so-proud.mp3");

    if(!document.querySelector("#notification-active-control").classList.contains("enabled")) {
        document.querySelector("#notification-active-control").classList.add("enabled")
    };


    document.querySelector(`#theme-${settings.themeColor}`).checked = true;

    document.querySelector(`#sound-${settings.sound}`).checked = true;

    document.querySelector("#volume-slider").addEventListener("change", function() {
        settings.volume = document.querySelector("#volume-slider").value / 100;
    });

    document.querySelector("#notification-active-control").addEventListener("click", toggleNotificationSwitch)

    document.querySelector("#notification-active-control").innerHTML = settings.notificationsOn ? `
        <i class="fa-solid fa-toggle-on"></i>
        <h4>On</h4>
    ` :
    `
        <i class="fa-solid fa-toggle-off"></i>
        <h4>Off</h4>
    `

    document.querySelector("#sound-btn-1").addEventListener("click", function() {
        sound1.volume = settings.volume;
        sound1.play()
    });

    document.querySelector("#sound-btn-2").addEventListener("click", function() {
        sound2.volume = settings.volume;
        sound2.play()
    })

    document.querySelector("#sound-btn-3").addEventListener("click", function() {
        sound3.volume = settings.volume;
        sound3.play()
    })

    document.querySelector("#sound-btn-4").addEventListener("click", function() {
        sound4.volume = settings.volume;
        sound4.play()
    })

    document.querySelector("#sound-btn-5").addEventListener("click", function() {
        sound5.volume = settings.volume;
        sound5.play()
    })

    document.querySelector("#sound-btn-5").addEventListener("click", function() {
        sound5.volume = settings.volume;
        sound5.play()
    })

    document.querySelector("#theme-settings-save-btn").addEventListener("click", function() {
        settings = {
            themeColor: document.querySelector('input[name="theme-selection"]:checked').value,
            notificationsOn: document.querySelector("#notification-active-control").classList.contains("enabled") ? true : false,
            sound: document.querySelector('input[name="sound-selection"]:checked').value,
            volume: document.querySelector("#volume-slider").value / 100,
        }

        console.log(settings);

        
        saveSettings();
        setTheme();
        toggleSettingsModal();
    })


    if(modalContainer.classList.contains("open")) {
        modalContainer.classList.remove("open");
    }
    else {
        modalContainer.classList.add("open");
    } 
}