const mongoose = require('mongoose');
const Department = require('./models/Department');
const Employee = require('./models/Employee');

mongoose.connect('mongodb://mongo:27017/apollonia_dental', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(async () => {
    await Department.deleteMany({});
    await Employee.deleteMany({});

    const departments = await Department.insertMany([
      { name: 'General Dentistry' },
      { name: 'Pediatric Dentistry' },
      { name: 'Restorative Dentistry' },
      { name: 'Surgery' },
      { name: 'Orthodontics' }
    ]);

    const deptMap = departments.reduce((map, dept) => {
      map[dept.name] = dept._id;
      return map;
    }, {});

    await Employee.insertMany([
      { name: 'Alfred', surname: 'Christensen', department: deptMap['General Dentistry'] },
      { name: 'John', surname: 'Dudley', department: deptMap['General Dentistry'] },
      { name: 'Janet', surname: 'Doe', department: deptMap['General Dentistry'] },
      { name: 'Francisco', surname: 'Willard', department: deptMap['Pediatric Dentistry'] },
      { name: 'Sarah', surname: 'Alvarez', department: deptMap['Pediatric Dentistry'] },
      { name: 'Lisa', surname: 'Harris', department: deptMap['Restorative Dentistry'] },
      { name: 'Danny', surname: 'Perez', department: deptMap['Restorative Dentistry'] },
      { name: 'Constance', surname: 'Smith', department: deptMap['Surgery'] },
      { name: 'Leslie', surname: 'Roche', department: deptMap['Orthodontics'] },
      { name: 'Lisa', surname: 'Harris', department: deptMap['Orthodontics'] }
    ]);

    console.log('Data seeded successfully!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  });