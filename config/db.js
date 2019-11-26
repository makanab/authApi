const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/social';

//optional settings 
const options = {
    reconnectTries:Number.MAX_VALUE,
    poolSize:10,
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}

//set db connection
mongoose.connect(uri,options,(err)=>{
    if(!err){
        console.log('db connected successfuly');
    }
    else{
        console.log('db connected faild due to'+ err);

    }
});
module.exports = mongoose;