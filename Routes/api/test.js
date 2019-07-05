const express = require("express");
const router = express.Router();

// @route GET api/test
// @desc test
// @access public
router.get("/", (req, res) => {
  res.send("test page works man!");
});

module.exports = router;
