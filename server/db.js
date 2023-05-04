const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.log('MongoDB connection FAIL');
        process.exit(1);
    }
}

module.exports = connectDb;
