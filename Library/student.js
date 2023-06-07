// Students Data
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Library');

// creating the schema for students-----
const student = mongoose.Schema({
sname:String,
sclass:String,
sdept:String,
studyYear:Number,
courseName:String,
fees:Number,
durationYear:Number
});

// creating the model for student--------
const Student = mongoose.model('students', student);

// Insert function for add student details-----

const insertStudentData = async () =>{
    const s1 = new Student({
        sname: 'xyz',
        sclass: 'BA',
        sdept: 'Arts',
        studyYear: 2022,
        courseName: 'Paintings',
        fees: 40000,
        durationYear: 3,
    }) 
    let result = await s1.save();
    console.log(result)
}
// insertStudentData();

// Update function for student------
const updateStudentData = async () =>{
    const s1 = await Student.updateOne(
        {sname:'xyz'},
        {$set:{fees:45000}}
        
    ) 
    console.log(s1);
    console.log('updated');
}
//  updateStudentData();

// Delet function for student----------

const deleteStudentData = async () =>{
    const s1 = await Student.deleteOne(
        {courseName:'Paintings'}
    )
    console.log(s1);
    console.log('deleted')
}
// deleteStudentData();

// Find the student data---------

const findStudentData = async () =>{
    const s1 = await Student.findOne(
        {sdept:'Pharmacy'}
    )
    console.log(s1)
}
// findStudentData();

// Find All students----------

const findAllStudents = async () =>{
    const s1 = await Student.find()
    console.log(s1)
}
findAllStudents();