const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://Magi:DariiMagiiLove@nodeexpressprojects.nx66c2z.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) =>{
    return mongoose.connect(connectionString, {
        //to remove multiple warnings
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    
    })
}
module.exports = connectDB

