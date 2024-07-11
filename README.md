# React To-Do Application

A simple To-Do application built with React and Redux that allows users to add, view, edit, delete, and mark tasks as completed. The application features persistent storage using `localStorage` and a responsive user interface.

## Features

- Add new tasks
- View the list of tasks
- Edit existing tasks in a popup modal
- Delete tasks
- Toggle task completion status
- Persistent data storage with `localStorage`
- Responsive design with scroll functionality for task list

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for handling the application state.
- **javascript**: for making page is dynamic.
- **CSS**: Styling for the application.
- **React-Redux**: Official React bindings for Redux.
- **React-Toastify**: For showing toast notifications.

## Project structure
react-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── EditTaskModal.js
│   │   ├── EditTaskModal.css
│   │   ├── TaskInput.js
│   │   ├── TaskList.js
│   ├── redux/
│   │   ├── tasksSlice.js
│   │   ├── store.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── index.css
├── .gitignore
├── package.json
├── README.md

