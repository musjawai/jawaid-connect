require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/dbConn");

const express = require("express");
app = express();

connectDB();

app.use("/register", require("./routes/register"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
