const express = require('express');
const foodRoute = express.Router();

//import commonjs Module 
// import hàm getUser từ thư mục controller
const { getFood } = require('../controllers/foodController');

// tạo API phương thức GET
foodRoute.get("/getFood", getFood);
// foodRoute.get("/getUserId/:id", getUserId)

// tạo API phương thức POST
// foodRoute.post("/createUser", createUser)

// tạo API phương thức PUT
// userRoute.put("/updateUser/:id", updateUser);

module.exports = foodRoute;