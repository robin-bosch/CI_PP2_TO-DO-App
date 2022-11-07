/**
 * Switches the task alert date input on or off
 */
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

/**
 * Switches the task due date input on or off
 */
function toggleTaskDueDateEnabler() {
    let dueDateSwitch = document.querySelector("#task-due-date-enabler");
    let dueDateActive = dueDateSwitch.classList.contains("enabled");

    //Switch visual between on and off
    dueDateSwitch.innerHTML = dueDateActive ? '<i class="fa-solid fa-toggle-off"></i>' : '<i class="fa-solid fa-toggle-on"></i>';
    
    //Switch input on or off -> Note the reversed logic applies (true == off and false == on)
    document.querySelector("#task-due-date").disabled = dueDateActive ? true : false;


    if(dueDateSwitch.classList.contains("enabled")) {
        document.querySelector("#task-due-date-label").classList.add("disabled-text");
        dueDateSwitch.classList.remove("enabled");

        //Disables
        document.querySelector("#task-alert-date-enabler").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.querySelector("#task-alert-date-label").classList.add("disabled-text");
        document.querySelector("#task-alert-date").disabled = true;
        document.querySelector("#task-alert-date-enabler").classList.remove("enabled");
    }
    else {
        document.querySelector("#task-due-date-label").classList.remove("disabled-text");
        dueDateSwitch.classList.add("enabled");
    } 
}

/**
 * Opens or closes task modal depending on its current state
 * Defining a taskId opens the modal in edit mode
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
        //Edit modal
        if(taskId != 0) {
            let task = getTask(taskId);

            //Insert data of the task into the form
            //TODO: Date strings not inserted -> Add it!
            document.querySelector("#task-title").value = task.title;
            document.querySelector("#task-description").value = task.description;
            document.querySelector("#task-due-date").value = task.due;
            document.querySelector("#task-alert-date").value = new Date(task.alert).toISOString();

            //Change heading -> Form controls
            document.querySelector("#task-heading").innerHTML = "Edit task";

            document.querySelector("#form-control-container").innerHTML = `
                <input type="reset" value="Reset" class="btn">
                <input type="submit" value="Save task" id="edit-task-submit" class="btn">
            `;

            //Attach eventlistener to submit button -> edit task on submit
            document.querySelector("#edit-task-submit").addEventListener ('click', function(event) {
                event.preventDefault();
                updateTask(taskId);
            });
        }

        //Add modal
        else {
            //Change heading -> Form controls
            document.querySelector("#task-heading").innerHTML = "Create task";

            document.querySelector("#form-control-container").innerHTML = `
                <input type="reset" value="Reset" class="btn">
                <input type="submit" value="Create task" id="create-task-submit" class="btn">
            `;

            //Attach eventlistener to submit button -> create task on submit
            document.querySelector("#create-task-submit").addEventListener ('click', function(event) {
                event.preventDefault();
                createTask();
            });
        }
    }  
}

/**
 * Validates the form and spawns a notification if the validation wasn't successful
 * @returns boolean - if validation was successful
 */
function validateForm() {
    //Empty task title
    if(document.querySelector("#task-title").value == "") {
        createNotification("The title of the task cannot be empty", NOTIFICATION_TYPES.warning);
        return false;
    }
    //Task due date was empty when active
    else if(document.querySelector("#task-due-date").disabled != true && document.querySelector("#task-due-date").value == "") {
        createNotification("Due date was not set", NOTIFICATION_TYPES.warning);
        return false;
    }
    //Task alert date was empty when active
    else if(document.querySelector("#task-alert-date").disabled != true && document.querySelector("#task-alert-date").value == "") {
        createNotification("Alert was not set", NOTIFICATION_TYPES.warning);
        return false;
    }
    //Task alert date was after due date
    else if((document.querySelector("#task-alert-date").disabled != true && document.querySelector("#task-due-date").disabled != true) && (document.querySelector("#task-alert-date").value > document.querySelector("#task-due-date").value)) {
        createNotification("The alert date cannot be after the due date", NOTIFICATION_TYPES.warning);
        return false;
    }
    else {
        return true;
    }
}


/**
 * Opens or closes the settings modal depending on it's current state
 */
function toggleSettingsModal() {
    document.querySelector("#volume-slider").value = settings.volume * 100;

    let modalContainer = document.querySelector("#settings-modal-container");



    const sound1 = new Audio("./assets/audio/got-it-done.mp3");
    const sound2 = new Audio("./assets/audio/ill-make-it-possible.mp3");
    const sound3 = new Audio("./assets/audio/relax-message.mp3");
    const sound4 = new Audio("./assets/audio/you-would-be-glad-to-know.mp3");
    const sound5 = new Audio("./assets/audio/so-proud.mp3");


    document.querySelector(`#theme-${settings.themeColor}`).checked = true;

    document.querySelector(`#sound-${settings.sound}`).checked = true;

    document.querySelector("#volume-slider").addEventListener("change", function() {
        settings.volume = document.querySelector("#volume-slider").value / 100;
    });


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