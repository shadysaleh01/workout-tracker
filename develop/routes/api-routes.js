const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
   db.Workout.find({})
      .then((dbWorkouts) => {
         res.json(dbWorkouts);
      })
      .catch((err) => {
         res.status(400).json(err);
      });
});

router.post("/api/workouts", ({ body }, res) => {
   db.Workout.create(body)
      .then((dbWorkouts) => {
         res.json(dbWorkouts);
      })
      .catch((err) => {
         res.status(400).json(err);
      });
});

router.put("/api/workouts/:id", (req, res) => {

   db.Workout.update(req.parms.id)
      .then((dbWorkouts) => {
         res.json(dbWorkouts);
      })
      .catch((err) => {
         res.status(404).json(err);
      });
});

module.exports = router;