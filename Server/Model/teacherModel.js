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

           /* school: [
                {
                  schoolId: "#Ref",
                  isActive: true
                }
              ],
       
              class: [
                {
                  classId: "#Ref",
                  lessonId: [
                      "#Ref"
                  ]
                }
              ]*/
            

});
const teacherInfo=mongoose.model('teacher', teacherSchema);



export default teacherInfo;

