const Order = require("../model/Order");

const submitOrder = async (req, res) => {
  const { items, totalCartValue } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Cart items are required." });
  }

  if (typeof totalCartValue !== "number" || totalCartValue <= 0) {
    return res.status(400).json({ message: "Invalid total cart value." });
  }

  try {
    const result = await Order.create({ items, totalCartValue });

    res.status(201).json({ message: "Cart saved successfully", order: result });
  } catch (err) {
    console.error("Error saving cart:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  submitCart,
};
