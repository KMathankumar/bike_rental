// controllers/paymentController.js
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../models/paymentModel");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Create Order
exports.createOrder = async (req, res) => {
  const { method } = req.body;

  const options = {
    amount: 1500 * 100, // in paise
    currency: "INR",
    receipt: `receipt_${Math.floor(Math.random() * 1000000)}`,
  };

  try {
    const order = await instance.orders.create(options);

    const payment = new Payment({
      razorpay_order_id: order.id,
      method,
    });

    await payment.save();

    res.json({ orderId: order.id });
  } catch (error) {
    res.status(500).json({ error: "Error creating order" });
  }
};

// Verify Payment
exports.verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generatedSignature = hmac.digest("hex");

  if (generatedSignature === razorpay_signature) {
    // Update payment record
    await Payment.findOneAndUpdate(
      { razorpay_order_id },
      {
        razorpay_payment_id,
        razorpay_signature,
        status: "paid",
      }
    );

    return res.json({ success: true });
  }

  return res.status(400).json({ success: false });
};