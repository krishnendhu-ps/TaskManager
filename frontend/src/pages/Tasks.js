import React, { useEffect, useState } from 'react';
import { getTasks, updateTask, deleteTask } from '../api/api'; 
import '../App.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(null); 
  const [editedTask, setEditedTask] = useState({
    Title: '',
    Description: '',
    DueDate: '',
  });
  const [searchInput, setSearchInput] = useState(''); 

 
  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

 
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

 
  const handleEditSubmit = async (taskId) => {
    try {
      await updateTask(taskId, editedTask);
      setEditMode(null); 
      fetchTasks(); 
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

 
  const handleCancelEdit = () => {
    setEditMode(null);
    setEditedTask({ Title: '', Description: '', DueDate: '' });
  };

 
  const handleUpdate = async (taskId, isCompleted) => {
    try {
      await updateTask(taskId, { Iscompleted: !isCompleted }); 
      fetchTasks(); 
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  
  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId); 
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  
  const filteredTasks = tasks.filter((task) =>
    task.Title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="tasks-page">
      <h1>Tasks</h1>

      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks by title..."
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>

      <div className="task-list">
        {filteredTasks.map((task) => (
          <div key={task._id} className="task-item">
            {editMode === task._id ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="Title"
                  value={editedTask.Title}
                  placeholder="Edit Title"
                  onChange={handleEditChange}
                />
                <textarea
                  name="Description"
                  value={editedTask.Description}
                  placeholder="Edit Description"
                  onChange={handleEditChange}
                />
                <input
                  type="date"
                  name="DueDate"
                  value={editedTask.DueDate}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleEditSubmit(task._id)}>
                  Save
                </button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <h2>{task.Title}</h2>
                <p>{task.Description}</p>
                <p>Due Date: {new Date(task.DueDate).toLocaleDateString()}</p>
                <p>Status: {task.Iscompleted ? 'Completed' : 'Not Completed'}</p>

               
                <button
                  onClick={() => handleUpdate(task._id, task.Iscompleted)}
                  className="update-btn"
                >
                  {task.Iscompleted ? 'Mark as Not Completed' : 'Mark as Completed'}
                </button>

              
                <button
                  onClick={() => {
                    setEditMode(task._id);
                    setEditedTask({
                      Title: task.Title,
                      Description: task.Description,
                      DueDate: task.DueDate.split('T')[0], 
                    });
                  }}
                  className="edit-btn"
                >
                  Edit
                </button>

               
                <button
                  onClick={() => handleDelete(task._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
