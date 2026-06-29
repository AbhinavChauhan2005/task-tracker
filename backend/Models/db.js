const mongoose = require("mongoose");
console.log("DB_URL =", process.env.DB_URL);
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("MongoDB is Connected...");
  })
  .catch((err) => {
    console.log("MongoDB Conn Error...", err);
  });
