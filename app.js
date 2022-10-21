const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());

//routes
const userRoute = require("./routes/user.route");
const companyRoute = require("./routes/company.route");
const jobRoute = require("./routes/job.route");

app.get("/", (req, res) => {
  res.send("Welcome to Job Portal Management System");
});

app.use("/user", userRoute);
app.use("/company", companyRoute);
app.use("/", jobRoute);

module.exports = app;
