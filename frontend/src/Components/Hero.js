import React,{useState} from 'react';
import AddTaskFrom from './AddTaskForm';
import '../App.css';

const Hero = ({refreshTasks})=>{
    const[showForm,setShowForm ] = useState(false);

const handleAddTaskClick = ()=>{
    setShowForm(!showForm)
};

    return (
        <section className='hero'>
            <h1>Welcome to Task Manager</h1>
        <button onClick={handleAddTaskClick} className='add-task-btn'>
            {showForm?'Close Form': 'Add Task'}
        </button>
{showForm && <AddTaskFrom refreshTasks = {refreshTasks}/>}
        </section>
    );
};
export default Hero;