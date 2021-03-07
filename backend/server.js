const express = require("express"); // for building the Rest apis.
const bodyParser = require("body-parser"); // helps to parse the request and create the req.body object.
const cors = require("cors"); // provides Express middleware to enable CORS with various options.

// create an Express app, 
// then add body-parser and cors middlewares using app.use() method.
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});