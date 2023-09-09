const express = require("express");
const { createReservation, createReservationType } = require("../controller/reservation");


const router = express.Router();

router.post("/createReservation",createReservation);
router.post("/createReservationType",createReservationType);

module.exports = router;