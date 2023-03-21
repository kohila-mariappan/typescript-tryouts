"use strict";
exports.__esModule = true;
var Sequelize = require("sequelize");
var db_config_1 = require("../config/db.config");
var Users = db_config_1["default"].define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    gender: Sequelize.STRING,
    email: Sequelize.STRING
});
exports["default"] = Users;
