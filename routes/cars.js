const express = require("express");
const { addSelfVehicles, addChaufferVehicles, getSelfVehicles, getchaufferVehicles, creatSelfVehicle, creatSelfAndChaufferVehicle } = require("../controller/cars");

const router = express.Router();

router.get("/getSelfVehicles",getSelfVehicles);
router.get("/getChaufferVehicles",getchaufferVehicles);
router.post("/addSelfVehicles",addSelfVehicles);
router.post("/addChaufferVehicles",addChaufferVehicles);
router.post("/createSelfChaufferVehicles",creatSelfAndChaufferVehicle);

module.exports = router;