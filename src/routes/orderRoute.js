const express = require('express');
const orderRoute = express.Router();

//import commonjs Module 
// import hàm getUser từ thư mục controller
const { createOrder } = require('../controllers/orderController');


// tạo API phương thức POST
orderRoute.post("/createOrder", createOrder)


module.exports = orderRoute;