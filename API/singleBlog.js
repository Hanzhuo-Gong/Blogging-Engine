const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs').promises;
const Blog = require('../DB/blogSchema.js');
const path = require("path");
const file = path.resolve(__dirname, "../DB/log.txt");
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
      const message = "GET single blog request triggered, Total number of GET single is:" + numberOfSingleBlog + "\n";
      console.log(message);
      fs.appendFile(file, message, (err) => {
        if (err) throw err;
      })
      res.status(200).json(result);
    }
  });
});

module.exports = singleBlog;
