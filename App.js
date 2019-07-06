const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/Trackers");
mongoose.Promise = global.Promise;

const test = require("./Routes/api/test");
const createTrackerID = require("./Routes/api/createTrackerID", {
  useNewUrlParser: true
});
const assignStock = require("./Routes/api/AssignStock");
const dashboard = require("./Routes/api/dashBoard");

app.use(bodyParser.urlencoded({ extended: true }));

//View Engine
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/Views/layouts/"
  })
);
app.set("view engine", "hbs");

app.use("/api/test", test);
app.use("/api/createTrackerID", createTrackerID);
app.use("/api/AssignStock", assignStock);
app.use("/api/dashBoard", dashboard);

app.get("/", (req, res) => {
  //res render home here
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = mongoose;
