const express = require("express");
const morgan = require("morgan");
const app = express();

// Settings
// Creating the sever, not the API
// SET is "establecer"

// Azure or heroku gives a defined port
app.set("port", process.env.PORT || 3000);

// Gives a neater appearance to the JSON
app.set("json spaces", 2);

// Middlewares
app.use(morgan("combined"));
// app.use(morgan("dev"));

// With this, I can get the data that comes from forms (like texts), not like images, only
app.use(express.urlencoded({ extended: false }));

// To send and receive data
// .json method allows the server to receive data in JSON format
app.use(express.json());

// Routes
app.use(require("./routes/index"));
// app.use(require("./routes/movies"));

// if i want to add api en in the path, I have to add it as a first parameter.
app.use("/api/movies", require("./routes/movies"));
app.use("/api/users", require("./routes/users"));

// Starting the server
// app.listen(3000, () => {
// get is to use the port
app.listen(app.get("port"), () => {
  console.log(`Server on port ${3000}`);
});
