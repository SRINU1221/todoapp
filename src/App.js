import React, { useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useDispatch } from 'react-redux';
import { loadTasks } from './redux/tasksSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load tasks from localStorage and dispatch to Redux store
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(loadTasks(tasks));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
      <ToastContainer />
    </div>
  );
};

export default App;
