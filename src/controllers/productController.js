const getAllProducts = async (req, res) => {
  try {
    res.status(200).json({
      message: "Berhasil mendapatkan semua produk",
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
