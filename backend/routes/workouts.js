const express = require("express");
const Workout = require("../models/WorkoutModel");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// Get a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELET a  workout
router.delete("/:id", deleteWorkout);

// UPDATE a new workout
router.patch("/:id", updateWorkout);

module.exports = router;
