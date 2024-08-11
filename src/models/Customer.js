const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getCustomerByName = async (name) => {
  try {
    const customer = await prisma.customers.findUnique({
      where: {
        name,
      },
    });

    return customer;
  } catch (err) {
    return err;
  }
};

const createCustomer = async (data) => {
  try {
    const customer = await prisma.customers.create({
      data,
    });

    return customer;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getCustomerByName,
  createCustomer,
};
