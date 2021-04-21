import mongoose from "mongoose";
const classSchema = new mongoose.Schema({


    
        className: String,
        yearPromotion:String ,
        levelType: {
            type: String, 
            enum: ["primary", "Olevel","Alevel"], 
            required: [true, "level required"]
        },
       
        classId:String,
        studentsId:String,
        lessonsId:String   
          
        
      
});
const classModelInfo=mongoose.model('class', classSchema);

export default classModelInfo