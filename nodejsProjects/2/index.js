const express = require("express");
const path = require("path");

const members = require("./Members");
const logger = require('./middleware/logger')

const app = express();
const port = 3000;

app.use(logger);

// gets all members
app.get("/api/v1/members", (req, res) => {
  res.json(members);
});

// get single member
app.get('/api/v1/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `no members with ${req.params.id} id` });
    }
})

app.listen(port, (err, response) => {
  console.log(`port: ${port}`);
});
