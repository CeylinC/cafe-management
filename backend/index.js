const express = require("express");
var cors = require("cors");

const connection = require("./services/dbConnection.service");
const userRoute = require("./routes/user.route");
const categoryRoute = require("./routes/category.route");
const productRoute = require("./routes/product.route");
const billRoute = require("./routes/bill.route");
const dashboardRoute = require("./routes/dashboard.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);
app.use("/bill", billRoute);
app.use("/dashboard", dashboardRoute);

module.exports = app;
