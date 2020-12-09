const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../DB/blogSchema.js');
const singleBlog = express.Router();

//for log
let numberOfSingleBlog = 0;
//I tried to call this function, but it never executed
singleBlog.get('/', async (req, res) => {
  //console.log(req);
  Blog.findById(req.query.id, function(err, result) {
    if(err) {
      console.log(err);
    }
    else {
      //console.log(result);
      numberOfSingleBlog++;
      console.log("Total number of GET Single Blog is: ",numberOfSingleBlog);
      res.status(200).json(result);
    }
  });
});

module.exports = singleBlog;
