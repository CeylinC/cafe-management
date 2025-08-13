const express = require("express");
var cors = require("cors");

const connection = require("./services/dbConnection.services");
const userRoute = require("./router/user.router");
const categoryRoute = require("./router/category.router");
const productRoute = require("./router/product.router");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);

module.exports = app;
