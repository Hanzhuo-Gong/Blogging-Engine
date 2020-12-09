const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs').promises;
const Blog = require('../DB/blogSchema.js');
const path = require("path");
const file = path.resolve(__dirname, "../DB/log.txt");
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
      const message = "GET request triggered, Total number of GET is:" + numberOfGet + "\n";
      console.log(message);
      fs.appendFile(file, message, (err) => {
        if (err) throw err;
      })
      res.status(200).json(result);
    }
  });
});

module.exports = getBlogs;
