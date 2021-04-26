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
        marks:[{
           test: {type:Number},
            exams:{type:Number},
            totalMarks:{type:Number},
            marksPercentage:{type:Number}
        }]
    }],

        className:{
            type:String,
            required:true 
        },
        academicYear:{
            type:Number,
            required:true
        },
        gradeRetention:
        {
            type:String,
            required:true,
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