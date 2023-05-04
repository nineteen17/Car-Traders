const mongoose = require('mongoose');

// Auth Schema 
const AuthSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 30
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 30
    },
    age: {  
        type: Number,
        required: true,
        min: 18,
        max: 100    
    },
    profilePic: {
        type: String,
        required: false,
        default: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
    },
    date: {
        type: Date,
        default: Date.now
    }
});
        
module.exports = mongoose.model('Auth', AuthSchema);