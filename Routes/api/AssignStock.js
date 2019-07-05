const express = require("express");
const router = express.Router();

// @route GET api/AssignStock/test
// @desc test
// @access public
router.get("/test", (req, res) => res.send("AssignStock Route works"));

module.exports = router;
