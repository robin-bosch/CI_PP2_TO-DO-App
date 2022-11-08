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

## User Experience

### Target Audience

### User Requirements and Expectations

### User Stories

## Design

### Design Choices

The website is designed as a Single Page Application. It is a full width layout and focused on giving the user all they information they need.  
Modals are put into place for Creating/Editing a task or for changing user settings.  

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

#### Task list

The task list shows the list of tasks categorised in active and done tasks. Clicking one task will show it in the overview.
Tasks can be marked as done on the left with the checkcircle.  

#### Task overview

The task overview shows the details of the current selected task, such as: Title, description, due date and alert date.  
The user can edit the task, delete it or mark it as done in the overview.  

#### There are two different modals that can pop up

- Add/Edit task (depending on the state)
- User settings

#### Notifications

There are notification popups in the bottom right corner for warnings or reminders. They disappear after a short time or can be closed with the button.

### Wireframes

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

The website has 1 page only. This one page contains two hidden modals and a notifications that cannot be seen all the time.
The page has 8 feature in total.  

## Validation and Testing

### HTML Validation

### CSS Validation

### JavaScript Validation

### Accessibility

### Performance

### Device testing

### Browser compatibility

### Testing user stories

## Bugs

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

### Code

### Acknowledgements

## License

This project is published under the MIT license.  
[License](/LICENSE.txt)
