const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/homepage", (req, res) => {
  res.sendFile(__dirname + "/views/homepage.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});
app.get("/photo-gallery", (req, res) => {
  res.sendFile(__dirname + "/views/photo-gallery.html");
});

app.listen(3001, () => console.log("My first app listening on port 3001! "));
