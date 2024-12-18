const Profile = require('../models/Profile');
const User = require('../models/User');
const Course = require('../models/Course');
exports.updateProfile = async (req, res) => {
    try {
        // get data
        const {dataOfBirth ="", about ="", contactNumber, gender} = req.body;

        //get userID
        const id = req.user.id;

        //validation
        if(!contactNumber || !gender || !id){
            return res.status(400).json({
                success: false,
                message: "Missing required fields"
            })
        }

        //find profile
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId);
        
        // // update profile
        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.about = about;
        profileDetails.contactNumber = contactNumber;
        profileDetails.gender = gender;
        await profileDetails.save();
        // const profile = await Profile.findByIdAndUpdate(profileId, 
        //                                 {
        //                                     dataOfBirth, 
        //                                     about, 
        //                                     contactNumber, 
        //                                     gender
        //                                 }, 
        //                                 {new: true});

        // return success response
        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            profileDetails
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update profile",
            error: error.message
        })
    }
}

exports.deleteProfile = async (req, res) => {
    try {
        //get data
        const {id} = req.user.id;

        //validation
        const userDetails = await User.findById(id);
        if(!userDetails){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        //delete profile
        const deletedProfile = await User.findByIdAndDelete(userDetails.additionalDetails);
        if(!deletedProfile){
            return res.status(404).json({
                success: false,
                message: "Profile not found"
            });
        }

        //delete user
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        //Unenroll user from courses
        const courses = userDetails.courses;
        for(let courseId of courses){
            await Course.updateOne(
                { _id: courseId },
                { $pull: { studentsEnrolled: id } }
            )
        }

        //return response
        return res.status(200).json({
            success: true,
            message: "User profile and account deleted successfully",
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete profile",
            error: error.message
        })
    }
}
exports.getAllUserDetails = async (req, res) => {
    try {
        //get id
        const id = req.user.id;

        // validate 
        const userDetails = await User.findById(id).populate("additionalDetails").exec();
        if(!userDetails){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        //return res
        return res.status(200).json({
            success: true,
            userDetails
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get user details",
            error: error.message
        })
    }
    
}