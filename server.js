const express = require('express');
const connectDB = require('./DB/connection.js');
const fs = require('fs').promises; //delete it if read not working

const main = () => {
  const app = express();
  const port = 3000;

  //connect to the DB
  connectDB();

  app.use(express.json());
  //load file from static folder
  app.use(express.static('./static'));

  //A GET endpoint to list all entries with some filters)
  app.use("/api/get", require('./API/getBlogs.js'));

  //A POST allow user to post new things on the blog (If have time, then do this)
  app.use('/api/post', require('./API/postBlog.js'));

  //A GET endpoint to render a single blog post + templated data
  app.use('/api/single/:id', require('./API/singleBlog.js'));
  //A POST endpoint for comments

  //A GET endpoint for comments

  /*
  fs.readFile("https://cloud.mongodb.com/api/atlas/v1.0/groups/BloggingEngine/clusters/Cluster0", "utf-8")
    .then((fileContents) => JSON.parse(fileContents))
    .then((data) => {
      console.log(data);
    });
  */

  app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
  });
}

main();
