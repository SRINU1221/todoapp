import React, { useState } from 'react';
import './EditTaskModal.css';
import { toast } from 'react-toastify';

/**
 * EditTaskModal component for editing a task.
 * Displays a modal with a form to update the task text.
 */
const EditTaskModal = ({ task, onClose, onSubmit }) => {
  const [newText, setNewText] = useState(task.text); // Initialize with the current task text

  // Handler for submitting the edited task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newText.trim()) {
      onSubmit(task.id, newText);
      toast.success('Task edited successfully!'); // Show success message
    } else {
      toast.error('Please enter a task!'); // Show error message if the task is empty
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
