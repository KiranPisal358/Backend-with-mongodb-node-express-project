const mongoose= require('mongoose');
require('../config')

const studentSchema = mongoose.Schema({
    sname:String,
    sclass:String,
    sdept:String,
    studyYear:Number,
    courseName:String,
    fees:Number,
    durationYear:Number
})
module.exports=mongoose.model('students',studentSchema);