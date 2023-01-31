// const User = require('../models/user');
const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);

// get all
const getUser = async(req, res) => {
    try {
        // SELECT * FROM user;
        // bất đồng bộ
        let data = await model.user.findAll(); // => list object => [{}]

        res.status(200).send(data);

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }
}

//get id
const getUserId = async(req, res) => {
    try {
        let { id } = req.params;
        // SELECT * FROM user WHERE user_id=req.param.id;

        let dataOne = await model.user.findOne({
            where: {
                user_id: id
            }
        }); // => object => {}

        if (dataOne)
            res.status(200).send(dataOne);
        else
            res.status(400).send("User không tồn tại !");

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }
}

// xử lý thêm user
const createUser = async(req, res) => {
    try {

        // lấy data từ FE
        let { full_name, email, pass_word } = req.body;

        // ES6 => object literal
        let model = {
            full_name,
            email,
            pass_word
        }

        // thêm data vào CSDL
        let data = await model.user.create(model);
        if (data)
            res.status(200).send("Thêm user thành công");

    } catch (err) {
        res.status(500).send("Lỗi Back end");

    }
}
const updateUser = async(req, res) => {

    try {
        let { id } = req.params; // => 13
        // SELECT * FROM user WHERE user_id=req.param.id;

        let dataOne = await model.user.findOne({
            where: {
                user_id: id
            }
        }); // => object => {}

        if (dataOne) {
            //update user
            let { full_name, email, pass_word } = req.body;

            // ES6 => object literal
            let model = {
                full_name,
                email,
                pass_word
            }
            let data = await model.user.update(model, {
                where: {
                    user_id: id
                }
            });
            console.log(data); // => [1]
            if (data[0] == 1)
                res.status(200).send("Cập nhật user thành công");
            else
                res.status(200).send("Không có gì mới để cập nhật");
        } else
            res.status(400).send("User không tồn tại !");

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }

}

// User.destroy()

module.exports = {
    getUser,
    createUser,
    getUserId,
    updateUser
}