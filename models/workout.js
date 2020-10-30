const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
   day: {
      type: Date,
      default: Date.now
   },
   exercises: [{
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
   }]
},
   {
      toJSON: {
         // include any virtual properties when data is requested
         virtuals: true
      }
   });



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
