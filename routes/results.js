const router = require("express").Router();
const verify = require("./verifyToken");
const Butterfly = require("../modal/Butterflies");

router.get("/", async (req, res) => {
  const butterflyResults = await Butterfly.find({});

  res.send({ results: butterflyResults });
});

module.exports = router;
