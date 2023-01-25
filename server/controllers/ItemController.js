const { item, user, brand } = require("../models");


class ItemController {
  static async getAllItems(req, res) {
    // untuk mengambil semua users
    try {
      let items = await item.findAll({
        order: [["id", "asc"]],
        include : [user, brand],
      });
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getItemById(req, res) {
    // untuk mengambil item berdasarkan id
    try {
      const id = +req.params.id;
      let result = await item.findByPk(id);

      if (result) res.status(200).json(result);
      else
        res.status(404).json({
          message: `Item id ${id} not found.`,
        });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    //
    try {
      const { nama, type_kendaraan, type_transmisi, warna, kapasitas_kendaraan, gambar, userId, brandId} = req.body;

      let result = await item.create({
        nama,
        type_kendaraan,
        type_transmisi,
        warna,
        kapasitas_kendaraan,
        gambar,
        userId,
        brandId
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
      let result = await item.destroy({
        where: {
          id,
        },
      });
      if (result)
        res.status(200).json({
          message: `Item id ${id} has been deleted.`,
        });
      else
        res.status(400).json({
          message: "Item has not been deleted.",
        });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    //
    try {
      const { nama, type_kendaraan, type_transmisi, warna, kapasitas_kendaraan, gambar, userId, brandId } = req.body;
      const id = +req.params.id;
      let result = await item.update(
        {
          nama,
          type_kendaraan,
          type_transmisi,
          warna,
          kapasitas_kendaraan,
          gambar,
          userId,
          brandId,
        },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 1)
        res.status(200).json({
          message: `Item id ${id} has been updated.`,
        });
      else
        res.status(400).json({
          message: "Item has not been updated.",
        });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ItemController;
