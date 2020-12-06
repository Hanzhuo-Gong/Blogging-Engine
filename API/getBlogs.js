const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../DB/blogSchema.js');
const getBlogs = express.Router();

getBlogs.get('/', async (req, res) => {
  Blog.find({}, function(err, result) {
    if(err) {
      console.log(err);
    }
    else {
      //console.log(result);
      res.json(result);
    }
  });
});

module.exports = getBlogs;
