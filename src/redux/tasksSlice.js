import { createSlice } from '@reduxjs/toolkit';

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadTasksFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      saveTasksToLocalStorage(state);
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      saveTasksToLocalStorage(newState);
      return newState;
    },
    toggleComplete: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(state);
      }
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        saveTasksToLocalStorage(state);
      }
    },
    loadTasks: (state, action) => {
      return action.payload;
    }
  },
});

export const { addTask, deleteTask, toggleComplete, editTask, loadTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
