const { user } = require("../models");
const {decryptPwd} = require("../helpers/bcrypt");
const { tokenGenerator, tokenVerifier } = require("../helpers/jsonwebtoken");

class UserController {
  static async getAllUsers(req, res) {
    // untuk mengambil semua users
    try {
      let users = await user.findAll({
        order: [["id", "asc"]],
      });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getUserById(req, res) {
    // untuk mengambil user berdasarkan id
    try {
      const id = +req.params.id;
      let result = await user.findByPk(id);

      if (result) res.status(200).json(result);
      else
        res.status(404).json({
          message: `User id ${id} not found.`,
        });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async register(req, res) {
    //
    try {
      const { username, email, password, no_hp } = req.body;
      
      let result = await user.create({
        username,
        email,
        password,
        no_hp,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let emailFound = await user.findOne({
        where: {
          email: email.toLowerCase(),
        },
      });
      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          let acces_token = tokenGenerator(emailFound)

          res.status(200).json({acces_token});

          let verifyToken = tokenVerifier(acces_token)
          console.log(verifyToken)
        } else {
          res.status(403).json({
            message: "Password not match.",
          });
        }
      } else {
        res.status(404).json({
          message: "Email not found.",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    //
    try {
      const id = +req.params.id;
      let result = await user.destroy({
        where: {
          id,
        },
      });
      if (result)
        res.status(200).json({
          message: `User id ${id} has been deleted.`,
        });
      else
        res.status(400).json({
          message: "User has not been deleted.",
        });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    //
    try {
      const { username, email, password, gambar, no_hp, alamat } = req.body;
      const id = +req.params.id;
      let result = await user.update(
        {
          username,
          email,
          password,
          gambar,
          no_hp,
          alamat,
        },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 1)
        res.status(200).json({
          message: `User id ${id} has been updated.`,
        });
      else
        res.status(400).json({
          message: "User has not been updated.",
        });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
