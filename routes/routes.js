const express = require("express");

const controller = require("../controllers/controller.js");

const router = express.Router();

router.post("/saveData", controller.saveData);
router.get("/getData/:playerName", controller.getData);
router.delete("/delete/:playerName", controller.deleteData);
router.use("/", controller.pageNotFound);

module.exports = router;
