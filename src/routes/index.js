const { Router } = require("express");
const router = Router();

// the route "/" is the initial view
router.get("/", (req, res) => {
  //   res.send("Hello World"); // send is for strings
  res.json({ Title: "Hello World" }); //
});

// router.get("/test", (req, res) => {
//   const data = {
//     name: "Alejandra",
//     profession: "Front-end Developer",
//   };

//   res.json(data);
// });

module.exports = router;
