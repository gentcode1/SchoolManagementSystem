import mongoose from 'mongoose';
const schoolSchema=new mongoose.Schema({
    schoolName:String,
    address:{
        country:String,
        province:String,
        district:String,
        sector:String
    },
    phone:{
        type:String
    },
    motor:{
        type:String},
    logo:{
        type:String},
    website:{
        type:String},
    headmaster:{
        names:{
            type:String},
        phone:{
        type:String},
        email:{
            type:String},
        yearOfStart:{
            type:String},
        isActive:{
            enum:["true","false"]
        },
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
        
    }
});


schoolSchema.pre(/^find/, function(next){
    this.populate({
        path:"userId",
        select:"email isActive"
   })
   next();
});
const schoolData= mongoose.model("school",schoolSchema);
export default schoolData;
