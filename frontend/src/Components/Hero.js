import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import '../App.css';

const Hero = ({ refreshTasks }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddTaskClick = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="hero">
      <h1>"Stay Organized, Achieve More."</h1>
      <button onClick={handleAddTaskClick} className="add-task-btn">
        {showForm ? 'Close Form' : 'Add Task'}
      </button>
      {showForm && <AddTaskForm refreshTasks={refreshTasks} />}
    </section>
  );
};

export default Hero;
