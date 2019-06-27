const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passportRoutes = require("./passportAPI");

// API Routes
router.use("/api", apiRoutes);
router.use("/auth", passportRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
