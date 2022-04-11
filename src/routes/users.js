const { Router } = require("express");
const router = Router();

// const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  // router.get("/", (req, res) => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  res.send("users");
});

router.get("/", (req, res) => {
  // router.get("/movies", (req, res) => {
  res.json(movies);
});

module.exports = router;
