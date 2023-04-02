require("dotenv").config();

const dev = {
  app: {
    PORT: process.env.PORT || 4000,
  },
  dbUrl: {
    url:
      process.env.DB_URL ||
      "mongodb+srv://Taifur:Taifur123@cluster0.hhn8y4e.mongodb.net/portfolio",
  },
};

module.exports = dev;
