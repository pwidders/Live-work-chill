const router = require("express").Router();
const userRoutes = require("./users");
const marketDataRoutes = require("./mdata");
const authRoutes = require("./auth");

// User routes
router.use("/user", userRoutes);

// Zillow data routes
router.use("/mdata", marketDataRoutes);

// Auth data routes
router.use("/auth", authRoutes);

module.exports = router;
