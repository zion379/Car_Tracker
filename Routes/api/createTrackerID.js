const express = require("express");
const router = express.Router();

// @route GET api/createTrackerID/test
// @desc test
// @access public
router.get("/test", (req, res) => res.send("creatTrackerID Route works"));

module.exports = router;
