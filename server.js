// Add code to userModel.js to complete the model

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/custommethoddb",
  { useNewUrlParser: true }
);

// Routes
app.get("/exercise", (req, res) => {
  res.redirect("exercise.html");
});
app.get("/api/workouts", (req, res) => {});
// Route to post our form submission to mongoDB via mongoose
app.post("/submit", ({ body }, res) => {
  // Create a new user using req.body
  const newUser = new User(body);
  // Update this route to run the `setFullName` and `lastUpdatedDate` methods before creating a new User
  newUser.name();
  newUser.last();
  // You must create these methods in the model.

  User.create(newUser)
    .then((dbUser) => {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch((err) => {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
