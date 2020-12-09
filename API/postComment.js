const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs').promises;
const Blog = require('../DB/blogSchema.js');
const path = require("path");
const file = path.resolve(__dirname, "../DB/log.txt");
const postComment = express.Router();

//for log
let numberOfPostComment = 0;

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
      numberOfPostComment++;
      const message = "POST comment triggered, Total number of POST comment is:" + numberOfPostComment + "\n";
      console.log(message);
      fs.appendFile(file, message, (err) => {
        if (err) throw err;
      })
      res.status(201).send(result);
    }
  })
})

module.exports = postComment;
