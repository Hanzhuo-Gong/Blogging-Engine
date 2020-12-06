
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../DB/blogSchema.js');
const postBlog = express.Router();


postBlog.post('/', async (req, res) => {
  //const { reqTitle, reqContent, reqComments } = req.body;
  console.log(req);

  /*
  //for checking
  console.log(req.body.title);
  console.log(req.body.content);
  console.log(req.body.comments);
  */

  await Blog.create([{
    title: req.body.title,
    content: req.body.content,
    comments: req.body.comments
  }]);
  //await newPostModel.save();
  //console.log(newPostModel);
  console.log("Post Successfully");

  //data send back to user
  let newPost = {};
  newPost.title = req.body.title;
  newPost.content = req.body.content;
  newPost.comments = req.body.comments;
  let newPostModel = new Blog(newPost);
  res.status(201).json(newPostModel);
});


module.exports = postBlog;
