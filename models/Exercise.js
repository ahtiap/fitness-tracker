const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// to track the name, type, weight, sets, reps, and duration of exercise.
const Exercise = new Schema({
  name: String,
  type: String,
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number,
});

const Exercice = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
