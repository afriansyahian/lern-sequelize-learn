const express = require("express");
const router = express.Router();

const { getAdmin, addAdmin } = require("./controllers");

router.get("/", getAdmin);
router.post("/", addAdmin);

module.exports = router;
