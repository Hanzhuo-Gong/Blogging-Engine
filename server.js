const express = require('express');
const connectDB = require('./DB/connection.js');

const main = () => {
  const app = express();
  const port = 3000;

  connectDB();

  app.use(express.json());
  //load file from static folder
  app.use(express.static('./static'));


  //A GET endpoint to list all entries with some filters)

  //A GET endpoint to render a single blog post + templated data

  //A POST endpoint for comments

  //A GET endpoint for comments


  app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
  });
}

main();
