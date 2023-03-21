"use strict";
// const dbConfig = {
exports.__esModule = true;
//     HOST: 'localhost',
//     USER: 'root',
//     PASSWORD: 'Welcome@123',
//     DB: 'ecommerce',
//     dialect: 'mysql',
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   }
//   export default dbConfig;
var Sequelize = require("sequelize");
var db = 'typscriptPOC';
var username = 'root';
var password = 'Welcome@123';
var sequelize = new Sequelize(db, username, password, {
    dialect: "mysql"
});
sequelize.authenticate();
exports["default"] = sequelize;
