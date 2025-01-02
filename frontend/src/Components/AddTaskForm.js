import React, { useState } from 'react';

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
      [name]: type === 'checkbox' ? checked : value, // Handle checkbox input
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your API or task addition logic here

      refreshTasks();

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
