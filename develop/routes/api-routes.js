const router = require("express").Router();
const Workout = require("..models/workout.js");


router.get("/api/workouts", (req, res) => {
   Workout.find({})
      .then((dbWorkouts) => {
         res.json(dbWorkouts);
      })
      .catch((err) => {
         res.status(400).json(err);
      });
});

router.post("/api/workouts", ({ body }, res) => {
   Workout.create(body)
      .then((dbWorkouts) => {
         res.json(dbWorkouts);
      })
      .catch((err) => {
         res.status(400).json(err);
      });
});

router.put("/api/workouts/:id", (req, res) => {

   Workout.update(req.parms.id)
      .then((dbWorkouts) => {
         res.json(dbWorkouts);
      })
      .catch((err) => {
         res.status(404).json(err);
      });
});

module.exports = router;