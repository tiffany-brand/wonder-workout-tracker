const express = require('express');

const router = express.Router();

const db = require('../models');

router.get('/', async (req, res) => {
	try {
		const workouts = await db.Workout.find({});
		console.log('in api workouts route');
		res.json(workouts);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.get('/range', async (req, res) => {
	try {
		const workouts = await db.Workout.find({});
		console.log('in api workouts route');
		res.json(workouts);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post('/', async (req, res) => {
	console.log("in post route");
	console.log(req.body);
	try {
		const workout = req.body;
		workout.day = Date.now();
		console.log(workout);
		const result = await db.Workout.create(workout);
		res.json(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.put('/:id', async (req, res) => {
	console.log('in put route');
	try {
		const exercise = req.body;
		console.log(exercise);
		console.log(req.params.id);
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
