const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const models = initModels(sequelize);

const createOrder = async(req, res) => {
    try {
        // lấy data từ FE
        let { user_id, food_id, amount, code } = req.body;
        let model = {
            user_id,
            food_id,
            amount,
            code
        }

        // thêm data vào CSDL
        let data = await models.order.create(model)
        if (data)
            res.status(200).send("Thêm order thành công");
    } catch (err) {
        res.status(500).send("Lỗi Back end");

    }
}



module.exports = {
    createOrder
};