const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const models = initModels(sequelize);


const getLike = async(req, res) => {

    let data = await models.like_res.findAll({
        include: ["re", "user"]
    });
    res.send(data);
}
const getLikeIdUser = async(req, res) => {
    try {
        let { id } = req.params;
        // SELECT * FROM user WHERE user_id=req.param.id;

        let dataOne = await models.like_res.findAll({
            include: ["user"],
            where: {
                user_id: id,
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
const getLikeIdRes = async(req, res) => {
    try {
        let { id } = req.params;
        // SELECT * FROM user WHERE user_id=req.param.id;

        let dataOne = await models.like_res.findAll({
            include: ["re"],
            where: {
                res_id: id,
            }

        }); // => object => {}

        if (dataOne)
            res.status(200).send(dataOne);
        else
            res.status(400).send("Restaurant không tồn tại !");

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }
}

const createLike = async(req, res) => {
    try {
        // lấy data từ FE
        let { user_id, res_id } = req.body;

        // thêm data vào CSDL
        let data = await models.like_res.create({ user_id, res_id })
        if (data)
            res.status(200).send("Thêm like thành công");
    } catch (err) {
        res.status(500).send("Lỗi Back end");

    }
}

const deleteLikeIdUser = async(req, res) => {
    // lấy data từ FE
    let { id } = req.params;
    let { user_id, res_id } = req.body;
    let model = {
            user_id,
            res_id
        }
        // xoa data vào CSDL
    await models.like_res.destroy(model, {
        where: {
            user_id: id
        }
    });

}

module.exports = {
    getLike,
    getLikeIdUser,
    getLikeIdRes,
    createLike,
    deleteLikeIdUser
};