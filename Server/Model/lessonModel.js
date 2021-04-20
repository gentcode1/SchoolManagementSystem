import mongoose from 'mongoose';
const lessonSchema=new mongoose.Schema({
    lessonName:{
        type:String
    },
    lessonCode:{
        type:String
    },
    levelType:{
        enum:["primary","olevel","Alevel"]
    },

})
const lessonData= mongoose.model("lesson",lessonSchema);
export default lessonData;