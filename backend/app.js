const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());


mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


const taskRouter = require('./Routes/taskr'); 
app.use('/api', taskRouter);


const PORT = 4003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
