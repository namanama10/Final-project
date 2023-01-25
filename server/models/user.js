'use strict';
const {encryptPwd} = require ('../helpers/bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.item)
    }
  }
  user.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Username tidak boleh kosong"
        }
      }
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gambar: DataTypes.STRING,
    no_hp: DataTypes.INTEGER,
    alamat: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function (user, options) {
        user.password = encryptPwd(user.password)
        user.gambar = user.gambar || "https://via.placeholder.com/150"
        user.alamat = user.alamat || "Tangerang"
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};