const express = require("express");
const router = express.Router();

const {
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controller/portfolio.controller");

router.get("/portfolio", getPortfolio);
router.post("/portfolio", createPortfolio);
router.patch("/portfolio/:id", updatePortfolio);
router.delete("/portfolio/:id", deletePortfolio);

module.exports = router;
