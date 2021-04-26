import mongoose from 'mongoose';

const studentSchema= new mongoose.Schema({
    
        firstName:{
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true 
        },
      
        address:[{ 
          
          countryAddress:{type:String},
          province:{type:String},
          district:{type:String}
           
 }],
        
        guardian: {
            
            guardianNames:{required: true,type:String},
            guardianPhone:{required: true,type:String},
            guardianEmail:{required: true,type:String},
            guardianRole:{required: true,type:String}
        },
        yearOfStudy: {required: true,type:String},
       /* class: [
          {
              classId:{
                type:mongoose.Schema.ObjectId,
                ref:"class"},
              school:[{
            
            }],
              lessons:[{
                  lessonId:{
                 type:mongoose.Schema.ObjectId,
                 ref:"lesson"
                  }}

              ],
            reportId:[
                {
                Term1:{type:String},
                Term2:{type:String},
                Term3:{type:String}
                }],
            
            }
            ],*/
            schoolId:{
                type:mongoose.Schema.ObjectId,
              ref:"school"},
          userId:{type:mongoose.Schema.ObjectId,
         ref:"user"}
});
studentSchema.pre(/^find/, function(next){
    this.populate({
        path:"userId",
        select:"email  role "
   }).populate({
       path:"schoolId",
       select:"schoolName"
   })
   next();
})

const studentInfo= mongoose.model("student", studentSchema);

export default studentInfo;