const express = require("express");
const router = express.Router();

// @route GET api/dashBoard/test
// @desc test
// @access public
router.get("/test", (req, res) => res.send("dashBoard Route works"));

module.exports = router;
