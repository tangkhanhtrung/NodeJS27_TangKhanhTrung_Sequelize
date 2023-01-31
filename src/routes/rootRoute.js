const express = require('express');
const rootRoute = express.Router();
const userRoute = require('./userRoute');
const fooRoute = require('./foodRoute');
const likeRoute = require('./likeRoute');
const rateRoute = require('./rateRoute');
const orderRoute = require('./orderRoute');

// sử dụng middleware của express
rootRoute.use("/user", userRoute)

//food
rootRoute.use("/food", fooRoute);

//like
rootRoute.use("/like", likeRoute);

//rate
rootRoute.use("/rate", rateRoute);

//rate
rootRoute.use("/order", orderRoute);

module.exports = rootRoute;