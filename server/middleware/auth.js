const jwt = require("jsonwebtoken");
const User = require("../models/User"); // or your path
const router = require("express").Router();


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token }); // ✅ frontend needs this key exactly
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
