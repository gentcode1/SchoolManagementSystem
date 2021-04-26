import mongoose from 'mongoose';
const lessonSchema=new mongoose.Schema({
    lessonName:{
        type:String
    },
    lessonCode:{
        type:String
    },
    levelType:{
        type:String,
        enum:["primary","olevel","alevel"]
    },

})
const lessonData= mongoose.model("lesson",lessonSchema);
export default lessonData;