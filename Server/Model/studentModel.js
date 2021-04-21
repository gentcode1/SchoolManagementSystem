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
        class: [
          {
              type:String,
              required: true,
              classId:{required: true,type:String},
              schoolId:{required: true,type:String},
              lessons:{required: true,type:String},
            reportId:[{
                type:String,
                Term1:{type:String},
                Term2:{type:String},
                Term3:{type:String}
            }],
            yearOfStudy: {required: true,type:String}
          
          }]
          //userId:{required: true,type:String}
});

const studentInfo= mongoose.model("student", studentSchema);

export default studentInfo;