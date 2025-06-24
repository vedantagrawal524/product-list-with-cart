const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }, // price per unit
  itemPrice: { type: Number, required: true }, // quantity * price
});

const orderSchema = new mongoose.Schema({
  items: [cartItemSchema],
  totalCartItems: { type: Number, required: true },
  totalCartValue: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
