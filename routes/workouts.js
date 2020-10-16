const express = require('express');

const router = express.Router();

const db = require('../models');

// GET - Get all workouts
router.get('/', async (req, res) => {
	try {
		const workouts = await db.Workout.find({});
		res.json(workouts);
	} catch (err) {
		res.status(500).send(err);
	}
});

// GET - Get all workouts
router.get('/range', async (req, res) => {
	try {
		const workouts = await db.Workout.find({});
		res.json(workouts);
	} catch (err) {
		res.status(500).send(err);
	}
});

// POST - Create new workout with current date
router.post('/', async (req, res) => {
	try {
		const workout = req.body;
		workout.day = Date.now();
		const result = await db.Workout.create(workout);
		res.json(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

// PUT - Add exercises to a workout
router.put('/:id', async (req, res) => {
	console.log('in put route');
	try {
		const exercise = req.body;
		const result = await db.Workout.findByIdAndUpdate(
			req.params.id,
			{ $push: { exercises: exercise } },
			{ new: true }
		);
		res.json(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;
