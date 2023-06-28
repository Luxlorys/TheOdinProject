const express = require("express");
const path = require("path");

const logger = require('./middleware/logger')

const app = express();
const port = 3000;

app.use(express.json());

app.use(logger);

app.use('/api/v1/members', require('./routes/api/members'));

app.listen(port, (err, response) => {
  console.log(`port: ${port}`);
});
