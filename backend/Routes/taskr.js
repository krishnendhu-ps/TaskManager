const express=require('express');
const router=express.Router();
const Task=require("../models/task")
const bodyParser=require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
//post
router.post('/tasks',async(req,res)=>{
    const task=new Task({
        Title:req.body.Title,
        Description:req.body.Description,
        Iscompleted:req.body.Iscompleted,
        DueDate:req.body.DueDate
    });
    try{
        const newTask=await task.save()
        res.status(201).json(newTask);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }        
});

//get

router.get('/tasks',async(req,res)=>{
    try{
        const taskes = await Task.find().sort({date:-1});
        res.json(taskes);
    }catch(error){
        res.status(500).json({message:error.message});
    }
    });

//get by id
router.get('/tasks/:id',async(req,res)=>{
    const taskes = await Task.findById(req.params.id);
    try{
        
        res.json(taskes);
    }catch(error){
        res.status(500).json({message:error.message});
    }
    });
//put 
router.put("/tasks/:id", async (req, res) => {
    try{
        const updatedTask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedTask);
 }
catch(error){
    res.status(400).json({message:error.message})
}});
//delete
router.delete("/tasks/:id",async(req, res) => {
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.json({message:"Task details DELETED"});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
module.exports=router;