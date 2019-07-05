const express = require("express");
const app = express();

const test = require("./Routes/api/test");
const createTrackerID = require("./Routes/api/createTrackerID");
const assignStock = require("./Routes/api/AssignStock");
const dashboard = require("./Routes/api/dashBoard");

app.use("/api/test", test);
app.use("/api/createTrackerID", createTrackerID);
app.use("/api/AssignStock", assignStock);
app.use("/api/dashBoard", dashboard);

app.get("/", (req, res) => {
  res.send("Home");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
