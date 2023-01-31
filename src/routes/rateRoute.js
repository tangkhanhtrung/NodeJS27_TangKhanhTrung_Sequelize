const express = require('express');
const rateRoute = express.Router();

//import commonjs Module 
// import hàm getUser từ thư mục controller
const { getRate, getRateIdUser, getRateIdRes, createRate, deleteRate } = require('../controllers/rateController');

// tạo API phương thức GET
rateRoute.get("/getRate", getRate)
rateRoute.get("/getRateIdUser/:id", getRateIdUser)
rateRoute.get("/getRateIdRes/:id", getRateIdRes)

// tạo API phương thức POST
rateRoute.post("/createRate", createRate)


module.exports = rateRoute;