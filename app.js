const express = require("express");
const path = require('path');
const app = express();

// PARSING
app.use(express.json());

//  STATIC
app.use(express.static(path.join(__dirname, 'build')));

app.get("/api", (req, res) => {
  console.log(req);
  res.send("Server works!");
});

//  ROUTING
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }});
});

//  PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
