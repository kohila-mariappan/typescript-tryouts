import * as Sequelize from 'sequelize'
import  sequelize  from '../config/db.config'

const Users = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:Sequelize.STRING,
    gender:Sequelize.STRING,
    email: Sequelize.STRING,
})
export default Users