const { Router } = require("express");
const router = Router();
const _ = require("underscore");
const movies = require("../sample.json");

router.get("/", (req, res) => {
  // router.get("/movies", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  //   console.log("here is the request", req.body);
  //   res.send("reveiced");

  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    // res.send("Saved");
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    console.log("newMovie, ", newMovie);
    movies.push(newMovie);
    res.send(movies);
  } else {
    res.status(500).json({ error: "Wrong Request" });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;

  if (title && director && year && rating) {
    _.each(movies, (movie, i) => {
      if (movie.id === id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;

        res.send(movies);
        console.log("movies, ", movies);
      }
    });
  } else {
    res.status(500).json({ error: "There is an error" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(movies, (movie, i) => {
    if (movie.id === id) {
      movies.splice(i, 1);
      res.send(movies);
    }
  });
});

module.exports = router;
