import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleComplete, editTask } from '../redux/tasksSlice';
import EditTaskModal from './EditTaskModal';
import { toast } from 'react-toastify';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    toast.info('Task deleted!');
  };

  const handleToggle = (id) => {
    dispatch(toggleComplete(id));
    toast.success('Task status updated!');
  };

  const handleEditClick = (task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const handleEditSubmit = (id, text) => {
    dispatch(editTask({ id, text }));
    setIsModalOpen(false);
    toast.success('Task edited successfully!');
  };

  return (
    <div className="task-list-container">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button className="edit-button" onClick={() => handleEditClick(task)}>Edit</button>
            <button className={`status-button ${task.completed ? 'completed' : ''}`} onClick={() => handleToggle(task.id)}>
              {task.completed ? 'Completed' : 'To Do'}
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <EditTaskModal
          task={currentTask}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default TaskList;
