const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllProducts = async () => {
  try {
    const products = await prisma.products.findMany();
    return products;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllProducts,
};
