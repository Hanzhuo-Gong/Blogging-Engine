const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../DB/blogSchema.js');
const getBlogs = express.Router();

//for log
let numberOfGet = 0;

getBlogs.get('/', async (req, res) => {
  Blog.find({}, function(err, result) {
    if(err) {
      console.log(err);
    }
    else {
      //console.log(result);
      numberOfGet++;
      console.log("Total number of GET is: ", numberOfGet);
      res.status(200).json(result);
    }
  });
});

module.exports = getBlogs;
