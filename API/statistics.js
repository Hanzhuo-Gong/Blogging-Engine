const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs').promises;
const path = require("path");
const file = path.resolve(__dirname, "../DB/log.txt");
const getStatistics = express.Router();

getStatistics.get("/", (req,res) => {

  fs.readFile(file, "utf-8")
    .then((data) => {
      //console.log(data);
      res.status(200).send(data);
    })


    //res.status(200).send("succeed!");
})

module.exports = getStatistics;
