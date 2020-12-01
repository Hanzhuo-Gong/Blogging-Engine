const mongoose = require('mongoose');


const blog = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
});

module.exports = User = mongoose.model('blog', blog);
