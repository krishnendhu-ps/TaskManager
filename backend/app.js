const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

mongoose.connect(process.env.DB_URI,{


})

const taskRouter =  require('../backend/Routes/taskr');
app.use('/api',taskRouter);








  

const PORT=4003;
app.listen(PORT,()=>{
console.log(`server is running on http://localhost:${PORT}`);
});