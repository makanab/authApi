const mongoose = require('mongoose');
const bcrytpt = require('bcryptjs');

//define database 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true['name can not be empty'],
        trim:true

    },
    email:{
        type:String,
        required:true['name can not be empty'],
        lowercase:true,
        unique:true,
        trim:true

    },
    hash_password:{
        type:String,
        required:true['name can not be empty']

    },
    createdOn:{
        type:Date,
        default:Date.now

    },


});

//check password validation 
/* userSchema.methods.comparePassword = function(password){
     return bcrytpt.compareSync(password,this.hash_password)
 }*/

mongoose.model('User',userSchema);


