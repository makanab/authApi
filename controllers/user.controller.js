require('../models/user.model')
const mongoose =require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');


//controll logic for user registration**

module.exports.register = (req,res)=>{
    let newUser = new User(req.body);
    newUser.hash_password =bcrypt.hashSync(req.body.password,10);
        newUser.save((err,user)=>{
        if(err){
            res.status(500).send(({message:err}));
        }
        user.password = undefined;
        res.status(201).json(user);

    });
};

//sign in
module.exports.signIn = (req,res)=>{
User.findOne({

    email:req.body.email
       

},(err,user)=>{

    if(err){
        throw err;
        
    }
    if(!user){
        res.status(401).send({message:'user dose not exist'});

    }else if(user){
        if(!user.comparePassword(req.body.password)){
            res.send({message:'login faild'});
        }else{
            res.json({token:
            jwt.sign({
                email:user.email,
                fullName:user.fullName,
                _id:user._id
            },'RESTFULAPIs')
            });
        }

    }
});
}

//verfify if the user is lloged in 

module.exports.loginRequire =(req,res,next)=>{
    if(req.user){
        next();
    }
    else{
        res.send({message:'authentication failed'});
    }


};
