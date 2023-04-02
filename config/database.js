const mongoose = require("mongoose");
const DB_URL = require("../config/config").dbUrl.url;

mongoose.set("strictQuery", false);
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Mongodb is Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
