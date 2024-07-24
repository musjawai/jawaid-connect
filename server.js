require("dotenv").config();
const PORT = process.env.PORT || 3000;

const express = require("express");
app = express();

app.use("/register", require("./routes/register"));
