const mongoose = require('mongoose');


const blog = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title must be included"]
  },
  content: {
    type: String,
    required: [true, "Content must be included"]
  },
  comments:{
    type: []
  }
});

const Blog = mongoose.model('blog', blog);

//Create a new collection to store all blog data
Blog.createCollection().then(function(collection) {
  console.log("blog collection created");
})
module.exports = Blog;
