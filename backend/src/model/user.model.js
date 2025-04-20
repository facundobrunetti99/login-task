import mongoose, { mongo } from "mongoose";
import { string } from "zod";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export default mongoose.model('User', userSchema)