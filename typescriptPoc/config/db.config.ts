// const dbConfig = {

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
  
import * as Sequelize from 'sequelize'

const db = 'typscriptPOC'
const username = 'root'
const password = 'Welcome@123'

const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql"

});

sequelize.authenticate()

export default sequelize;