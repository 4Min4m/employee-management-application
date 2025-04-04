const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{type: String, require:true},
    surname:{type: String, require:true},
    department:{type:mongoose.Schema.ObjectId, ref:'Department',require:true}
});

module.exports=mongoose.model('Employee',employeeSchema);