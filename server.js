const express = require('express');
const bodyparser = require('body-parser');
const jsonwebtoken = require('jsonwebtoken');
var app = express();
var PORT = 3000;
require('./models/user.model');
require('./config/db');



// moddleware 
app.use(bodyparser.urlencoded({extended:true}));
 app.use(bodyparser.json());

 
app.use((req,res,next)=>{
    if(req.headers && req.headers.authorization && req.headers.authorization.split('')[0]==='JWT'){
        jsonwebtoken.verify(headers.authorization.split[1]),'RESTFULAPIs',(err,decode)=>{

            if(err)
                res.user= undefined;
                
                res.user=decode;
                next();
            


        }

    }else{
        req.user =undefined;
        next();

    }
});

//add routes
var routes =require('./routes/route');
routes(app);
 
 //start server 

 app.listen(PORT,()=>{
     console.log('server started at port :' + PORT );
 });