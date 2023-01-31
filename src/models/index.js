// kết nối CSDL
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_nodeJS27', 'root', '1234', {
    host: "localhost",
    port: "3307",
    dialect: "mysql" // hệ CSDL đang sử dụng 
})



module.exports = sequelize;