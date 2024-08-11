const Customer = require("../models/Customer");
const Order = require("../models/Order");

const store = async (req, res) => {
  try {
    const { total, cash, customer, carts } = req.body;

    let cust = await Customer.getCustomerByName(customer);

    if (!cust) {
      cust = await Customer.createCustomer({
        name: customer,
      });
    }

    if (parseInt(cash) < total) {
      return res.status(400).json({
        message: "Uang tidak cukup",
      });
    }

    carts.forEach(async (cart) => {
      await Order.createOrder({
        productId: cart.productId,
        quantity: cart.qty,
        customerId: cust.customerId,
        status: "SUKSES",
      });
    });

    res.status(200).json({
      message: "Berhasil membuat order",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: err,
    });
  }
};

module.exports = {
  store,
};
