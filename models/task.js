const mongoose = require('mongoose')



// const TaskSchema = new  mongoose.Schema({
//   name: String, 
//   completed:Boolean  
// })
 
//validation of schema
const TaskSchema = new  mongoose.Schema({
    name: {
       type:String,
       required:[true, 'must provide name'],
       //to ignore unncessary spaces
       trim:true,
       maxlength:[25, 'name connot be morethan 25'] 
    },
    completed:{
        type:Boolean,
        default:false
    }, 
  })

module.exports =  mongoose.model('Tasks', TaskSchema)