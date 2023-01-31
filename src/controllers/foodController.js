const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);


const getFood = async(req, res) => {

    let data = await model.food.findAll({
        include: ["type"]
    });


    // let data = await model.food_type.findAll({
    //     include: ["foods"]
    // });


    res.send(data);
}


module.exports = {
    getFood
};