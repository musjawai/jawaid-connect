require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/dbConn");

const express = require("express");
const mongoose = require("mongoose");
app = express();

const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");

connectDB();

app.use(logger);

app.use(express.json());
app.use(express.json());

app.use("/register", require("./routes/register"));

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
