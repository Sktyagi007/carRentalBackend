const express = require("express");
const { createUser } = require("../controller/user");



const router = express.Router();

router.post("/createUser", createUser);

module.exports = router;