const express = require('express');
const likeRoute = express.Router();

//import commonjs Module 
// import hàm getUser từ thư mục controller
const { getLike, getLikeIdUser, getLikeIdRes, createLike, deleteLikeIdUser } = require('../controllers/likeController');

// tạo API phương thức GET
likeRoute.get("/getLike", getLike)
likeRoute.get("/getLikeIdUser/:id", getLikeIdUser)
likeRoute.get("/getLikeIdRes/:id", getLikeIdRes)

// tạo API phương thức POST
likeRoute.post("/createLike", createLike)

// tạo API phương thức Delete
likeRoute.delete("/deleteLikeIdUser/:id", deleteLikeIdUser)

module.exports = likeRoute;