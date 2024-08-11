require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const middlewareLogRequest = require("./middlewares/logs");
const productRoutes = require("./routes/products");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use("/assets", express.static("public/images"));

const prefix = "/api/v1";
app.use(prefix + "/products", productRoutes);

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
});
