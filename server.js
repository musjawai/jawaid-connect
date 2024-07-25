require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/dbConn");

const express = require("express");
const mongoose = require("mongoose");
app = express();

const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");

connectDB();

// middleware
app.use(logger);
app.use(express.json());
app.use(cookieParser());

app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use("/profile", require("./routes/api/profiles"));

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
