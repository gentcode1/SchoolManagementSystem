import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:[true,"email required"]

    },
    password:{
        type:String,
        required:[true,"password required"]
    },
    role:{
        type:String,
        required:true,
        enum:["teacher", "student", "school" ,"admin"]

    },
    isActive:{
        type:Boolean,
        defaults:true,
        required:[true,"is active or not"]
    }
});

const userInfo= mongoose.model("user", userSchema);
export default  userInfo;