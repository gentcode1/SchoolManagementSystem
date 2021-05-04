import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    

    address: [{

        countryAddress: { type: String },
        province: { type: String },
        district: { type: String }

    }],

    guardian: {

        guardianNames: { type: String },
        guardianPhone: {  type: String },
        guardianEmail: {  type: String },
        guardianRole: { type: String }
    },
    yearOfStudy: { required: true, type: String },
    schoolId: {
        type: mongoose.Schema.ObjectId,
        ref: "school"
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
});
studentSchema.pre(/^find/, function (next) {
    this.populate({
        path: "userId",
        select: "email  role "
    }).populate({
        path: "schoolId",
        select: "schoolName"
    })
    next();
})

const studentInfo = mongoose.model("student", studentSchema);

export default studentInfo;