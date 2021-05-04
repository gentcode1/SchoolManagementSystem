import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:[true,"email required"]

    },
    password:{
        type:String,
        
    },
    role:{
        type:String,
        required:true,
        enum:["teacher", "student", "school" ,"admin"]

    },
    isActive:{
        type:Boolean,
        default:true
        
    },

    passwordChangedTime:{
        type: String,
        default: Date.now()
    },
    newPassword:{
    type:String,
    
    },
    confirmPassword:{
        type:String,
    },
    schoolId:{
        type:mongoose.Schema.ObjectId,
        ref:"school"

    }

});

const userInfo= mongoose.model("user", userSchema);
export default  userInfo;