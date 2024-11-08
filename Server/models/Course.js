const mongoose= require('mongoose');
const courseSchema = new mongoose.Schema({
    courseName: {
        type: String
    },
    courseDuration: {
        type: String,
        trim: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    whatYouWillLearn: {
        type: String
    },
    courseContent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section"
        }
    ],
    ratingAndReview: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingAndReview"
        }
    ],
    price:{
        type: Number,
        required: true
    },
    thumbnail: {
        type:String,
    },
    tags:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tags"
    },
    studentsEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }]
});
module.exports = mongoose.model('Course', courseSchema);