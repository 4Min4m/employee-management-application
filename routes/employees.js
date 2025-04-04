const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const Department = require('../models/Department');

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find().populate('department');
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create an employee
router.post('/', async (req, res) => {
  const { name, surname, department } = req.body;
  try {
    const departmentDoc = await Department.findById(department);
    if (!departmentDoc) return res.status(404).json({ message: 'Department not found' });

    const employee = new Employee({ name, surname, department });
    const savedEmployee = await employee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an employee
router.put('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    Object.assign(employee, req.body);
    const updatedEmployee = await employee.save();
    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an employee
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    await employee.remove();
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }
});

module.exports = router;