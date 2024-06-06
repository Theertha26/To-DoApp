# React ToDo Application

This is a simple ToDo application built with ReactJS and Redux that allows users to add, view, edit, delete, and mark tasks as completed. The application also includes persistent storage using localStorage, so tasks are not lost on page reload.

## Features
- Add new tasks with a date
- View the list of tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Persistent storage using localStorage

## Technologies Used
- ReactJS
- Redux
- HTML
- CSS
- JavaScript

## Setup Instructions
Follow these steps to set up and run the application on your local machine.

### Prerequisites
Ensure you have the following installed:
- Node.js (version 12 or higher)
- npm (version 6 or higher)

### Installation
1. Clone the repository
2. Install dependencies
   `npm install`
### Building for Production
`npm run build`
This will create an optimized production build of the application in the build directory.
### Running Tests
1.Run the test suite
  `npm test`
### Project Structure
Here is an overview of the project's structure:
react-todo-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskInput.css
│   │   ├── TaskList.js
│   │   ├── TaskList.css
│   ├── redux/
│   │   ├── actions/
│   │   │   └── taskActions.js
│   │   ├── reducers/
│   │   │   └── taskReducer.js
│   │   └── store.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── ...
├── package.json
└── README.md
