const express = require('express');
const connectDB = require('./DB/connection.js');
const fs = require('fs').promises;

const main = () => {
  const app = express();
  const port = 3000;

  //connect to the DB
  connectDB();

  app.use(express.json());
  //load file from static folder
  app.use(express.static('./static'));

  //A GET endpoint to list all entries with some filters)
  app.use('/api/get', require('./API/getBlogs.js'));

  //A POST allow user to post new things on the blog (If have time, then do this)
  app.use('/api/post', require('./API/postBlog.js'));

  //A GET endpoint to render a single blog post + templated data
  //A GET endpoint for comments <- This is combine with this GET endpoint
  app.use('/api/single', require('./API/singleBlog.js'));

  //A POST endpoint for comments
  app.use('/api/comment', require('./API/postComment.js'));

  //A API to display statistics of the server
  app.use('/stats', require('./API/statistics.js'));

  //write a file to record the log
  const dateObj = new Date();

  const initialMessage = "Server log for: " + dateObj +"\n";
  //console.log(initialMessage);
  fs.writeFile('./DB/log.txt', initialMessage, (err) => {
    if (err) throw err;
  })

  app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
  });
}

main();
