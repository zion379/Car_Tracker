const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Load tracker model
const tracker_Model = require("../../models/tracker-model");

//load

// @route GET api/dashBoard/test
// @desc test
// @access public
router.get("/test", (req, res) => res.send("dashBoard Route works"));

// @route GET api/dashBoard/
// @desc dashboard view
// @access public
router.get("/", (req, res) => {
  var trackerArr = [];
  // test retrieve data from db.
  tracker_Model.find({}, (err, documents) => {
    if (err) console.log(err);
    else {
      for (var i = 0, len = documents.length; i < len; i++) {
        var UniqueID = documents[i].trackerID;
        var StockNum = documents[i].carStockNumber;
        trackerArr[
          i
        ] = `Car Stock Number : ${StockNum} , Tracker-UID : ${UniqueID}`;
      }
    }
  });
  res.render("dashboard", {
    title: `Car Track Beta`,
    textFieldName: `StockNumber`,
    trackerDevice: trackerArr,
    condition: false
  });
});

// @route GET api/dashBoard/SaveNewTracker
// @desc saves tracker to database
// @access public
router.post("/SaveNewTracker", (req, res) => {
  var newDevice = new tracker_Model({
    trackerID: req.body.TrackerUID,
    carStockNumber: req.body.stockNumber
  });
  newDevice.save().then(() => console.log("tracker saved to database"));

  // redirect to dashboard
  res.redirect("/api/dashboard");
});

//refresh tracker arr
router.post("/refreshList/", (req, res) => {
  // redirect to  dashboard
  res.redirect("/api/dashboard");
});
///////////////// Map Related Stuff/////////

module.exports = router;
