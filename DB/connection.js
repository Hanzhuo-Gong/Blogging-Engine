//Require mongoose and URL to connect to the database
const mongoose = require('mongoose');
const URL = "mongodb+srv://dbUser:dbUserPassword@cluster0.roep7.mongodb.net/BloggingEngine?retryWrites=true&w=majority"

const connectDB = async () => {
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true });
  console.log('DB has been connected!');

}

//export the connection
module.exports = connectDB;
