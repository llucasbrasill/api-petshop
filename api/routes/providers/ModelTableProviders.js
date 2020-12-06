const { Sequelize } = require('sequelize')
const sequelize = require('sequelize')

const instance =  require('../../database/')

const rows = {
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.ENUM('food', 'toys'),
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'providers',
    timestamps: true,
}

module.exports = instance.define('providers', rows, options);