//Require mongoose and URL to connect to the database
const mongoose = require('mongoose');
const URL = "mongodb+srv://dbUser:dbUserPassword@cluster0.roep7.mongodb.net/Blogging Engine?retryWrites=true&w=majority"

const connectDB = async () => {
  mongoose.connect(URL);
}

//export the connection
module.exports = connectDB;
