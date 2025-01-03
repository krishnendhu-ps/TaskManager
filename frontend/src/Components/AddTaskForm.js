import React, { useState } from 'react';
import { addTask } from '../api/api';

const AddTaskForm = ({ refreshTasks }) => {
  const [formData, setFormData] = useState({
    Title: '',
    Description: '',
    DueDate: '',
    Iscompleted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      await addTask(formData);

      if (typeof refreshTasks === 'function') {
        refreshTasks();
      } else {
        console.warn('refreshTasks is not a function or is not provided.');
      }

      setFormData({ Title: '', Description: '', DueDate: '', Iscompleted: false });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="Title"
        placeholder="Task Title"
        value={formData.Title}
        onChange={handleChange}
        required
      />
      <textarea
        name="Description"
        placeholder="Task Description"
        value={formData.Description}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="DueDate"
        value={formData.DueDate}
        onChange={handleChange}
        required
      />
      <label>
        <input
          type="checkbox"
          name="Iscompleted"
          checked={formData.Iscompleted}
          onChange={handleChange}
        />
        Mark as Completed
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
