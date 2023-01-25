'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsTo(models.user)
      item.belongsTo(models.brand)
    }
  }
  item.init({
    nama: DataTypes.STRING,
    type_kendaraan: DataTypes.STRING,
    type_transmisi: DataTypes.STRING,
    warna: DataTypes.STRING,
    kapasitas_kendaraan: DataTypes.STRING,
    gambar: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};