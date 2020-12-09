
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../DB/blogSchema.js');
const fs = require('fs').promises;
const path = require("path");
const file = path.resolve(__dirname, "../DB/log.txt");
const postBlog = express.Router();

//for log
let numberOfPost = 0;

postBlog.post('/', async (req, res) => {

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
  
  numberOfPost++;
  const message = "POST request triggered, Total number of POST is:" + numberOfPost + "\n";
  console.log(message);
  fs.appendFile(file, message, (err) => {
    if (err) throw err;
  })

  //data send back to user
  let newPost = {};
  newPost.title = req.body.title;
  newPost.content = req.body.content;
  newPost.comments = req.body.comments;
  let newPostModel = new Blog(newPost);
  res.status(201).json(newPostModel);
});


module.exports = postBlog;
