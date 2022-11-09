# TO-DO-App

(Developer: Robin Bosch)

![Mockup image](docs/mockup-preview.png)

[Live webpage](https://alphaclass6143.github.io/WhatsMyPC/)

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colors](#colors)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks](#frameworks)
    3. [Tools](#tools)
    4. [Pages](#pages)
5. [Features](#features)
6. [Validation and Testing](#validation-and-testing)
    1. [HTML Validation](#html-validation)
    2. [CSS Validation](#css-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device testing](#device-testing)
    7. [Browser compatibility](#browser-compatibility)
    8. [Testing user stories](#testing-user-stories)
7. [Bugs](#bugs)
8. [Deployment](#deployment)
9. [Credits](#credits)
    1. [Media](#media)
    2. [Code](#code)
    3. [Acknowledgements](#acknowledgements)
10. [License](#license)

## Project Goals

### User Goals

- Have a small To-Do-App to track tasks
- Create tasks, Read them, Update them, Delete them
- Mark tasks as done or active
- Use To-Do-App locally

### Site Owner Goals

- Help user with a small To-Do-App
- Show off repository
- Get the user to subscribe to the newsletter

## User Experience

### Target Audience

- Every day people who want a small browser based To-Do-App for free
- People who are unorganised
- People who don't like to send their data to a server

### User Requirements and Expectations

- Easy to use and easy to understand
- Can do basic CRUD-operations (Create, Read, Update, Delete tasks)
- Can mark tasks as done or active
- Get notified at the alert date

### User Stories

As a user I want to:

1. View all my tasks
2. See the details of one task
3. Turn off notifications for one task
4. Turn off all notifications
5. Mark a task as done or active
6. Create a new task
7. Edit a task

    - Edit only the title
    - Edit only the description
    - Edit only the due date
    - Edit only the alert date

8. Delete a task
9. Change the user settings
  
    - Change the theme
    - Change the alert sound
    - Change the alert volume

As a owner I want the user to

10. subscribe to my newsletter
11. know who made the website
12. see the code and how its made

## Design

### Design Choices

The website is designed as a Single Page Application. It is a full width layout and focused on giving the user all the information they need.  
Modals are put into place for Creating/Editing a task, for changing user settings or to subscribe to the newsletter.  

### Colors

The website is mainly white with black text but the accent color is a custom color.  
The colors can changed in the user settings. The following colors are available:  
![Color palette](docs/color-palette.png)

### Fonts

The Inter font from Google Fonts was chosen for its visual clarity. It is easily readable and friendly to the eye. The second font is sans-serif if the font is not loading.  
[Link to Inter font](<https://fonts.google.com/specimen/Inter>)

### Structure

The structure is very simple. It is a Single Page Application with modals that pop up if user input is required.  
The top of the page allows the user to access the user settings and create new tasks.  
The main page is structured in the task list and task overview.  
There is a small section at the bottom, to subscribe to the newsletter and visit the github repository.

#### Task list

The task list shows the list of tasks categorised in active and done tasks. Clicking one task will show it in the overview.
Tasks can be marked as done on the left with the checkcircle.  

#### Task overview

The task overview shows the details of the current selected task, such as: Title, description, due date and alert date.  
The user can edit the task, delete it or mark it as done in the overview.  

#### There are three different modals that can pop up

- Add/Edit task (depending on the state)
- User settings
- Newsletter (Only pops up when prompted at the bottom)

#### Notifications

There are notification popups in the bottom right corner for warnings or reminders. They disappear after a short time or can be closed with the button.

### Wireframes

<details>
 <summary>Home</summary>
 <img src="docs/wireframes/home.png">
</details>
<details>
 <summary>Create/Edit task modal</summary>
 <img src="docs/wireframes/task-modal.png">
</details>
<details>
 <summary>User settings modal</summary>
 <img src="docs/wireframes/user-settings-modal.png">
</details>
<details>
 <summary>Newsletter modal</summary>
 <img src="docs/wireframes/newsletter-modal.png">
</details>
<details>
 <summary>404 page</summary>
 <img src="docs/wireframes/404.png">
</details>

## Technologies Used  

- HTML  
- CSS
- JavaScript

### Frameworks

- Font Awesome
- Google Fonts

### Tools

- Git
- GitHub
- Visual Studio Code
- Balsamiq

### Pages

- [CSS Generators](<https://html-css-js.com/css/generator>) (to generate effects like drop shadows)

## Features

The website has 1 page only. This one page contains three hidden modals and a notifications container that cannot be seen all the time.
The page has 9 features in total.

### Tasklist header

- Shows the task heading
- Shows the new task button
- User stories covered: 1, 5, 7

![Task header](docs/features/tasklist-header.png)

### Tasklist

- Shows a list of tasks
- Sorts task by active/done
- Allows user to mark tasks as active or done
- User stories covered: 6

![Task list](docs/features/tasklist.png)

### Task header

- Shows the app heading
- Shows the alert bell, to unlock alerts
- Shows button to toggle the user settings modal
- User stories covered: 4, 9

![Task header](docs/features/task-header.png)

### Task details

- Shows the task title, description, alert date, due date
- Shows button to edit or delete task
- Shows button to mark the task as active/done
- Shows the button to turn off/on the alert for the task
- User stories covered: 2, 3, 5, 7, 8

![Task details](docs/features/task-details.png)

### Footer

- Shows the author of the app
- Shows the toggle to the newsletter modal
- Shows the link to the github repository of the app
- User stories covered: 10, 11, 12

![Footer](docs/features/footer.png)

### Task modal

- Allows for editing or creating a new task
- Can be reached from the new task button or the edit button in the task details
- User stories covered: 6, 7

![Create task modal](docs/features/create-task-modal.png)
![Edit task modal](docs/features/edit-task-modal.png)

### User settings modal

- Allows for settings personal setting
- The following settings can be set:

  - Theme color
  - Sound volume
  - Sound type

- Save settings or cancel
- User stories covered: 9

![Create task modal](docs/features/create-task-modal.png)
![Edit task modal](docs/features/edit-task-modal.png)

### Newsletter modal

- Form with name and email
- Allows for subscribing to the newsletter
- User stories covered: 10

![Newsletter modal](docs/features/newsletter-modal.png)

### Notifications feature

- Gives the user information about what is happening

![Notification](docs/features/notifications.png)

## Validation and Testing

### HTML Validation

All HTML validation tests have been passed.  

<details>
 <summary>Index page</summary>
 <img src="docs/validation/html/index-validation.png">
</details>

<details>
 <summary>404 page</summary>
 <img src="docs/validation/html/404-validation.png">
</details>

### CSS Validation

### JavaScript Validation

### Accessibility

All Wave accessibility tests pass with a few alerts.

<details>
 <summary>Index page</summary>
 <img src="docs/validation/wave/index-wave.png">
</details>

<details>
 <summary>404 page</summary>
 <img src="docs/validation/wave/404-wave.png">
</details>


### Performance

The lighthouse tests were good.  
Below are all reports to every page.

<details>
 <summary>Index page</summary>
 <img src="docs/validation/lighthouse/lighthouse-index.png">
 <br>
 <a href="docs/validation/lighthouse/lighthouse-report-index.pdf">Read full report to Index page (PDF)</a>
</details>

<details>
 <summary>404 page</summary>
 <img src="docs/validation/lighthouse/lighthouse-404.png">
 <br>
 <a href="docs/validation/lighthouse/report/lighthouse-404-index.pdf">Read full report to 404 page (PDF)</a>
</details>

### Device testing

The website was tested on the following devices:

- Windows 11 PC (Screen resolution: 2560x1440)
- Xiaomi MI 9 with Android 11 (Screen resolution: 1080x2280)

Other screen resolutions were tested in the browser with dev tools from 2560x1440 down to 320x568.

### Browser compatibility

The following browser were tested:

- Microsoft Edge (Chromium based version)
- Google Chrome
- Mozilla Firefox

Webkit based browser (Safari) could not be tested. Chromium based and Quantum based browser should be working.

### Testing user stories

## Bugs

|Status|Bug|Fix|
|---|---|---|
|Unknown|The modals occasionally flash on the screen on reload. They disappear after less than half a second after loading. The cause is unclear.||

## Deployment

1. In the GitHub repository navigate to the "Settings" tab
2. On the left hand menu select "Pages"
3. For the source select Branch: master
4. After the webpage refreshes automatically you will see a box at the top saying: "Your site is live at <https://alphaclass6143.github.io/CI_PP2_TO-DO-App/>"

You can fork the repository by following these steps:

1. Go to the repository on GitHub  
2. Click on the "Fork" button in the upper right hand corner

You can clone the repository by following these steps:

1. Go to the repository on GitHub
2. Locate the "Code" button above the list of files and click it  
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the "copy" button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone <https://github.com/YOUR-USERNAME/YOUR-REPOSITORY>)  
7. Press Enter to create your local clone.

## Credits

### Media

Icons are taken from Font Awesome:  
[FontAwesome](<https://fontawesome.com/>)

### Code

CSS Reset has been used in the reset.css file.  
It was written by Andy Bell in a blog post:  
[Blog post](<https://piccalil.li/blog/a-modern-css-reset/>)

Guides on Flexbox and Grid from CSS-Tricks, that have been used multiple times as a reference.  
[Complete Guide to Grid](<https://css-tricks.com/snippets/css/complete-guide-grid/>)  
[Complete Guide to Flexbox](<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>)  

### Acknowledgements

## License

This project is published under the MIT license.  
[License](/LICENSE.txt)
