//npm start
// yarn add express
// yarn add nodemon

// yarn add cors

//commonjs module => import thư viện express
const express = require('express');

// gán lại hàm cho một biến mới
const app = express();
// cho phép server backend đọc được chuỗi json
// middleware
app.use(express.json());

//cấp phép cho front end truy cập server API BE
const cors = require('cors');
app.use(cors());

// khởi tạo server bằng Express
// port: địa chỉ định danh server
app.listen(8080);

const rootRoute = require('./routes/rootRoute');
app.use("/api", rootRoute)


// khởi tạo phương thước trả về cho FE
// Method: GET
// Rest param => ES6 ...
// path => đường dẫn phụ
// app.get("/demo/:id", (req, res) => {
//     //nhận dự liệu từ FE
//     // lấy dữ liệu params
//     // let id = req.params.id;

//     // lấy dữ liệu query 
//     // ?id=123&name=node27
//     // let id = req.query.id;

//     // lấy dữ liệu bằng body
//     let { id, hoTen, tuoi } = req.body;

//     // trả dữ liệu về cho FE
//     // có thể trả: chuỗi, object, list object, bool, 
//     // ko cho phép trả number
//     res.status(333).send({ id, hoTen, tuoi });
// })
// // app.post()
// // app.put()
// // app.delete()

// //yarn add mysql2


// const mysql = require('mysql2');

// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     port: 3306,
//     database: "db_node27"
// })

// // phương thức get có url /user
// app.get("/user", (req, res) => {
//     let { key } = req.params;
//     // const sql = `SELECT * FROM users WHERE ho_ten LIKE '%${key}%'`;
//     const sql = `SELECT * FROM users`;

//     conn.query(sql, (err, result) => {
//         res.send(result);
//     });
//     //ORM sequelize

// })

// app.get("/api/v1/user/getUser", (req, res) => {

// })

// app.post("/api/user/createUser",(req,res)=>{

// })

// app.put("/api/user/updateUser",(req,res)=>{

// })