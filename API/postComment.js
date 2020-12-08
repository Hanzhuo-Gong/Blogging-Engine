const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../DB/blogSchema.js');
const postComment = express.Router();

postComment.post("/", async(req, res) => {
  //console.log(req);
  const userComment = req.body.comment;
  const blogID = req.body.id;

  Blog.findById(blogID, function(err, result) {
    if(err) {
      console.log(err);
    }
    else {
      result.comments.push(userComment);
      result.save();
      //console.log(result);
      console.log("post comment successfully");
      res.status(201).send(result);
    }
  })
})

module.exports = postComment;
