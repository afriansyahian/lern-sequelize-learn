const express = require("express");
const router = express.Router();

const { addBlog, getBlog } = require("./controllers");

router.post("/", addBlog);
router.get("/", getBlog);

module.exports = router;
