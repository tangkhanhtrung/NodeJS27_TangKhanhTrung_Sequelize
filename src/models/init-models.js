const DataTypes = require("sequelize").DataTypes;
const _food = require("./food");
const _food_type = require("./food_type");
const _like_res = require("./like_res");
const _order = require("./order");
const _rate_res = require("./rate_res");
const _restaurant = require("./restaurant");
const _sub_food = require("./sub_food");
const _user = require("./user");

function initModels(sequelize) {
    const food = _food(sequelize, DataTypes);
    const food_type = _food_type(sequelize, DataTypes);
    const like_res = _like_res(sequelize, DataTypes);
    const order = _order(sequelize, DataTypes);
    const rate_res = _rate_res(sequelize, DataTypes);
    const restaurant = _restaurant(sequelize, DataTypes);
    const sub_food = _sub_food(sequelize, DataTypes);
    const user = _user(sequelize, DataTypes);

    food.belongsToMany(user, { as: 'user_id_user_orders', through: order, foreignKey: "food_id", otherKey: "user_id" });
    restaurant.belongsToMany(user, { as: 'user_id_users', through: like_res, foreignKey: "res_id", otherKey: "user_id" });
    restaurant.belongsToMany(user, { as: 'user_id_user_rate_res', through: rate_res, foreignKey: "res_id", otherKey: "user_id" });
    user.belongsToMany(food, { as: 'food_id_foods', through: order, foreignKey: "user_id", otherKey: "food_id" });
    user.belongsToMany(restaurant, { as: 'res_id_restaurants', through: like_res, foreignKey: "user_id", otherKey: "res_id" });
    user.belongsToMany(restaurant, { as: 'res_id_restaurant_rate_res', through: rate_res, foreignKey: "user_id", otherKey: "res_id" });
    order.belongsTo(food, { as: "food", foreignKey: "food_id" });
    food.hasMany(order, { as: "orders", foreignKey: "food_id" });
    sub_food.belongsTo(food, { as: "food", foreignKey: "food_id" });
    food.hasMany(sub_food, { as: "sub_foods", foreignKey: "food_id" });
    food.belongsTo(food_type, { as: "type", foreignKey: "type_id" });
    food_type.hasMany(food, { as: "foods", foreignKey: "type_id" });
    like_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id" });
    restaurant.hasMany(like_res, { as: "like_res", foreignKey: "res_id" });
    rate_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id" });
    restaurant.hasMany(rate_res, { as: "rate_res", foreignKey: "res_id" });
    like_res.belongsTo(user, { as: "user", foreignKey: "user_id" });
    user.hasMany(like_res, { as: "like_res", foreignKey: "user_id" });
    order.belongsTo(user, { as: "user", foreignKey: "user_id" });
    user.hasMany(order, { as: "orders", foreignKey: "user_id" });
    rate_res.belongsTo(user, { as: "user", foreignKey: "user_id" });
    user.hasMany(rate_res, { as: "rate_res", foreignKey: "user_id" });

    return {
        food,
        food_type,
        like_res,
        order,
        rate_res,
        restaurant,
        sub_food,
        user,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;