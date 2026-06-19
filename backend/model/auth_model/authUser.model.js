import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength: [2, "Name must be at least 2 characters"],
        maxlength:50
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:[true,'email is required'],
        lowercase:true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password:{
        type:String,
        minlenght:6,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:['teacher','student','admin'],
        default:'student'
    },

    isverify:{
        type:Boolean,
        default:false
    },

},
{
    timestamps:true
})

const User = mongoose.model('Users',UserSchema)

export default User