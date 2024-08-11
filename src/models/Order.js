const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOrder = async (data) => {
  try {
    const order = await prisma.orders.create({
      data,
    });
    return order;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createOrder,
};
