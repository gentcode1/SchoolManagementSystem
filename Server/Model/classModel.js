import mongoose from "mongoose";
const classSchema = new mongoose.Schema({


    
        className: String,
        yearPromotion:String ,
        levelType: {
            type: String, 
            enum: ["primary", "Olevel","Alevel"], 
            required: [true, "level required"]
        },
       
     
        
        
        studentId:{
            type:mongoose.Schema.ObjectId,
            ref:"student"
            
        },
        

          lessonsId:{
            type:mongoose.Schema.ObjectId,
            ref:"lessons"
            
        },
        isActive:{
            type:Boolean,
            defaults:true,
            required:[true,"is active or not"]
        }
      
});
const classModelInfo=mongoose.model('class', classSchema);

export default classModelInfo