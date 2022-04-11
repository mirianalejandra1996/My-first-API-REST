const { Router } = require("express");
const router = Router();

const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  res.send(users);
});

router.get("/", (req, res) => {
  res.json(movies);
});

module.exports = router;
