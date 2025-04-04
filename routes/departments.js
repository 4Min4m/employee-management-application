const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a department
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const department = new Department({ name });
    const savedDepartment = await department.save();
    res.status(201).json(savedDepartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;