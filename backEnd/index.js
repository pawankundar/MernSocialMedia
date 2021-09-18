const express = require("express");
const App = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();
const userRoute = require("./router/users");
const authRoute = require("./router/auth");

App.use(express.json());
App.use(helmet());
App.use(morgan("common"));
App.use("/api/users", userRoute);
App.use("/api/auth", authRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("database connected"))
  .catch((err) => console.log("error is ",err));

App.listen(process.env.PORT, () => {
  console.log("server running");
});
