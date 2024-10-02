const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0 // 0 = Patients || 1 = Doctor
    },
});

module.exports = mongoose.model('User', userSchema);