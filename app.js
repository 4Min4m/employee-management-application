const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employees');
const departmentRoutes = require('./routes/departments');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use(express.static('views'));
app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);

app.get('/', (req, res) => {
  res.send('Apollonia Dental Practice Employee Management App');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});