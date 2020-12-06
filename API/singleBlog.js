const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../DB/blog.js');
const singleBlog = express.Router();

singleBlog.get('/', async (req, res) => {
  console.log(req);
  //Blog.findById(req.params)
  Blog.findById(req.params, function(err, result) {
    if(err) {
      console.log(err);
    }
    else {
      //console.log(result);
      res.json(result);
    }
  });
});

module.exports = singleBlog;
