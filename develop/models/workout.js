const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
   name: {
      type: String,
      trim: true,
      required: "Enter an exercise type"
   },
   type: {
      type: String,
      trim: true,
      required: "Enter an exercise name"
   },
   weight: {
      type: Number
   },
   sets: {
      type: Number
   },
   reps: {
      type: Number
   },
   duration: {
      type: Number,
      trim: true,
      required: "Enter an exercise duration in minutes"
   },
   distance: {
      type: Number
   }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
