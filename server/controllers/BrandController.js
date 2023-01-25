const { brand } = require("../models");

class BrandController {
  static async getAllBrands(req, res) {
    // untuk mengambil semua users
    try {
      let brands = await brand.findAll({
        order: [["id", "asc"]],
      });
      res.status(200).json(brands);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getBrandById(req, res) {
    // untuk mengambil brand berdasarkan id
    try {
      const id = +req.params.id;
      let result = await brand.findByPk(id);

      if (result) res.status(200).json(result);
      else
        res.status(404).json({
          message: `Brand id ${id} not found.`,
        });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    //
    try {
      const { nama, country, gambar } = req.body;
      let result = await brand.create({
        nama,
        country,
        gambar,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    //
    try {
      const id = +req.params.id;
      let result = await brand.destroy({
        where: {
          id,
        },
      });
      if (result)
        res.status(200).json({
          message: `Brand id ${id} has been deleted.`,
        });
      else
        res.status(400).json({
          message: "Brand has not been deleted.",
        });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    //
    try {
      const { nama, country, gambar } = req.body;
      const id = +req.params.id;
      let result = await brand.update(
        {
          nama,
          country,
          gambar,
        },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 1)
        res.status(200).json({
          message: `Brand id ${id} has been updated.`,
        });
      else
        res.status(400).json({
          message: "Brand has not been updated.",
        });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = BrandController;
