import axios from 'axios';

const API = axios.create({
    baseURL:'http://localhost:40003',

});

export const getTasks = () => API.get('/tasks');