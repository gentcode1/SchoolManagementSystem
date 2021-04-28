import mongoose from 'mongoose';

const reportSchema= new mongoose.Schema({
    schoolId:{
        type: mongoose.Schema.ObjectId,
        
        ref:"school"
    },
    studentId:{
        type:mongoose.Schema.ObjectId,
        ref:"student",
       
    },
    report:[{
        lesson:{
        type:String,
        required: true,
        },
        marks:{
           test: {type:Number},
            exams:{type:Number}
        }
    }],

        className:{
            type:String,
           
        },
        academicYear:{
            type:Number,
            
        },
        gradeRetention:
        {
            type:String,
            enum:["promoted", "Repeat", "secondSeating"]
            
        }
});
reportSchema.pre(/^find/, function(next){
    this.populate({
    path:"schoolId",
    select:"schoolName  headmaster.names"
}).populate({
    path:"studentId",
    select:" firstName lastName"

})
next();
});
const reportInfo= mongoose.model("report", reportSchema);
export default reportInfo;