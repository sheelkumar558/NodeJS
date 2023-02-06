const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const TodoRoutes = require("./routes/todoRoutes");
const app = express();
//use express.json() to get data into json formate
app.use(express.json());
const PORT = process.env.PORT || 5500;
app.use(cors());
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("database connected"))
  .then((err) => console.log(err));

app.use("/", TodoRoutes);

app.listen(PORT, () => {
  console.log("server connected", PORT);
});
