import mongoose from 'mongoose';
const schoolSchema=new mongoose.Schema({
    schoolName:String,
    address:{
        country:String,
        province:String,
        district:String,
        sector:String
    },
    phone:[String],
    motor:String,
    logo:String,
    website:String,
    headmaster:[{
        names:String,
        phone:String,
        email:String,
        yearOfStart:String,
        isActive:{enum:["true","false"]},
    }],
    userId:String
});
const schoolData= mongoose.model("school",schoolSchema);
export default schoolData;
