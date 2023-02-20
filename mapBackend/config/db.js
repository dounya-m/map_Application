const mongoose = require('mongoose')
mongoose.set("strictQuery", false);


const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongoDB are connect :${conn.connection.host}`.yellow.underline);
    }catch(error){
        console.log(error);
        process.exit(1)
    }
}
module.exports = connectDB