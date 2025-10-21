import express from "express";
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Example static login (replace with your DB + bcrypt check)
  if (email === "test@example.com" && password === "123456") {
    return res.json({
      message: "Login successful",
      token: "fake-jwt-token",
      user: { email },
    });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
