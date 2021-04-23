import mongoose from "mongoose";
const teacherSchema = new mongoose.Schema({
    
        names:String ,
        phone: String,
        userId: String,
        role: { 
            type: String, 
            enum: ["teacher", "classTeacher"], 
            required: [true, "role required"],
            default: "teacher" 
          },

              school:[{
                schoolId:{
                  type:mongoose.Schema.ObjectId,
                  ref:"school"
                },
                  isActive:{
                    type:Boolean,
                    defaults:true,
                    required:[true,"is active or not"]
                
              }
              
              }],
              class: [
                {
                  classId:{
                    type:mongoose.Schema.ObjectId,
                    ref:"class"
                    
                } ,
                lessonsId:{
                  type:mongoose.Schema.ObjectId,
                  ref:"lessons"
                  
              }
                }
              ]
            

});
const teacherInfo=mongoose.model('teacher', teacherSchema);



export default teacherInfo;

