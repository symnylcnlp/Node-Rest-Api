const { DataTypes } = require('sequelize')
const sequelize = require('../config/database.js')

const AdSoyadMaas = sequelize.define('AdSoyadMaas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ad: DataTypes.STRING,
    soyad: DataTypes.STRING,
    maas: DataTypes.INTEGER,
    published: DataTypes.BOOLEAN
        
}, {
    tableName: 'ad_soyad_maas',
    timestamps: false 
});

module.exports = { AdSoyadMaas }
