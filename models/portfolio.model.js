const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technology: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
  },
  gitClient: {
    type: Object,
  },
  gitServer: {
    type: Object,
  },
  body: {
    type: Object,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("portfolio", portfolioSchema);
