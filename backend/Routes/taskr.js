const express = require('express');
const router = express.Router();
const Task = require('../models/task'); 
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post('/tasks', async (req, res) => {
  try {
    const task = new Task({
      Title: req.body.Title,
      Description: req.body.Description,
      Iscompleted: req.body.Iscompleted,
      DueDate: req.body.DueDate,
    });

    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ date: -1 }); 
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id); 
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
