const express = require("express");
var cors = require("cors");

const connection = require("./services/dbConnection.services");
const userRoute = require("./router/user.route");
const categoryRoute = require("./router/category.route");
const productRoute = require("./router/product.route");
const billRoute = require("./router/bill.route");
const dashboardRoute = require("./router/dashboard.route");

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
