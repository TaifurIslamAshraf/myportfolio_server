const express = require("express");
const router = express.Router();

const {
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  getSinglePortfolio,
} = require("../controller/portfolio.controller");

router.get("/portfolio", getPortfolio);
router.post("/portfolio", createPortfolio);
router.get("/portfolio/:id", getSinglePortfolio);
router.put("/portfolio/:id", updatePortfolio);
router.delete("/portfolio/:id", deletePortfolio);

module.exports = router;
