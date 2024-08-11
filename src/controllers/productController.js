const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const data = await Product.getAllProducts();

    res.status(200).json({
      message: "Berhasil mendapatkan semua produk",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: err,
    });
  }
};

module.exports = {
  getAllProducts,
};
