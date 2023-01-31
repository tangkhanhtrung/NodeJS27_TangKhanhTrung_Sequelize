const express = require('express');
const userRoute = express.Router();

//import commonjs Module 
// import hàm getUser từ thư mục controller
const { getUser, getUserId, createUser, updateUser } = require('../controllers/userController');

// tạo API phương thức GET
userRoute.get("/getUser", getUser)
userRoute.get("/getUserId/:id", getUserId)

// tạo API phương thức POST
userRoute.post("/createUser", createUser)

// tạo API phương thức PUT
userRoute.put("/updateUser/:id", updateUser);

module.exports = userRoute;