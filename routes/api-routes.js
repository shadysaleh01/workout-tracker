const router = require("express").Router();
const db = require("../models");

// GET api to get workout 
router.get("/workouts", (req, res) => {
   db.Workout.find({})
      .then(dbWorkout => {
         res.json(dbWorkout);
      })
      .catch(err => {
         res.json(err);
      });
});

// addExercise PUT /api/workouts/ 

router.put("/workouts/:id", ({ params, body }, res) => {
   console.log(body);
   db.Workout.findByIdAndUpdate(
      params.id,
      {
         $push: {
            exercises: body,

         },
      },
      {
         new: true,
         runValidators: true
      }
   )
      .then(dbWorkout => {
         res.json(dbWorkout);
      })
      .catch(err => {
         res.json(err);
      });
});

// createWorkout POST /api/workouts
router.post("/workouts", ({ body }, res) => {
   console.log(body);
   db.Workout.create({})
      .then(dbWorkout => {
         res.json(dbWorkout);
      })
      .catch(err => {
         res.json(err);
      });

   res.send('Got a POST request')
});



module.exports = router;