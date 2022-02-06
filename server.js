const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.use(express.static("./public"));

//sendFile will go here
app.get("/", function (req, res) {
  res.send("index");
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
