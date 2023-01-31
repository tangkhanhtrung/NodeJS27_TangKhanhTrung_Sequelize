const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const models = initModels(sequelize);


const getRate = async(req, res) => {

    let data = await models.rate_res.findAll({
        include: ["re", "user"]
    });
    res.send(data);
}
const getRateIdUser = async(req, res) => {
    try {
        let { id } = req.params;
        // SELECT * FROM user WHERE user_id=req.param.id;

        let dataOne = await models.rate_res.findAll({
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
const getRateIdRes = async(req, res) => {
    try {
        let { id } = req.params;
        // SELECT * FROM user WHERE user_id=req.param.id;

        let dataOne = await models.rate_res.findAll({
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

const createRate = async(req, res) => {
    try {
        // lấy data từ FE
        let { user_id, res_id } = req.body;

        // thêm data vào CSDL
        let data = await models.rate_res.create({ user_id, res_id })
        if (data)
            res.status(200).send("Thêm rate thành công");
    } catch (err) {
        res.status(500).send("Lỗi Back end");

    }
}



module.exports = {
    getRate,
    getRateIdUser,
    getRateIdRes,
    createRate
};