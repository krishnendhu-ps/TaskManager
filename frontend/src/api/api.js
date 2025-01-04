import axios from 'axios';

const API = axios.create({
    baseURL: 'https://taskmanager-tyko.onrender.com/api', 


});

export const getTasks = () => API.get('/tasks');

export const addTask =  (task) =>API.post('/tasks',task);

export const updateTask = (id, updatedTask) => API.put(`/tasks/${id}`, updatedTask);


export const deleteTask = (id) => API.delete(`/tasks/${id}`);