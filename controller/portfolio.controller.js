const Portfolio = require("../models/portfolio.model");

const getPortfolio = async (req, res) => {
  try {
    const allPortfolio = await Portfolio.find();
    res.status(200).json({
      success: true,
      message: "find all portfolio successfully",
      allPortfolio,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};

const getSinglePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);

    if (!portfolio) {
      throw new Error("Portfolio not found");
    }

    res.status(200).json({
      success: true,
      portfolio,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};

const createPortfolio = async (req, res) => {
  try {
    const portfolio = req.body;
    const newPortfolio = new Portfolio(portfolio);
    await newPortfolio.save();
    res.status(201).json({
      success: true,
      message: "portfolio created successfully",
      newPortfolio,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};

const updatePortfolio = async (req, res) => {
  try {
    const updatedPortfolio = req.body;
    const id = req.params.id;
    const portfolio = await Portfolio.findByIdAndUpdate(id, updatedPortfolio, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      success: true,
      message: "Portfolio update successfull",
      status: 203,
      portfolio,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};

const deletePortfolio = async (req, res) => {
  try {
    const id = req.params.id;
    await Portfolio.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete portfolio successfully",
      success: true,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  getSinglePortfolio,
};
