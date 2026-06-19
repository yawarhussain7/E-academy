import mongoose from "mongoose";

const ConnectDB = async()=>{
    try{
        if(!process.env.MongoURL){
            throw new Error("MONGO_URL is not defined in environment variables");
        }

        await mongoose.connect(process.env.MongoURL)
        console.log('Databse is connected successfully')
    }catch(error){
        console.error('Database not connected: '+error.message)
        process.exit(1)
    }
}
export default ConnectDB;