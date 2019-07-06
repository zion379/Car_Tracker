const mongoose = require("mongoose");

var Tracker = mongoose.model("tracker", {
  trackerID: { type: String },
  carStockNumber: { type: String }
});

module.exports = Tracker;
