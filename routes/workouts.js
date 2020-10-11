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
	try {
		const workout = req.body;
		const result = await db.Workout.create(workout);
		res.json(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.put('/:id', async (req, res) => {
	console.log('in put route');
	try {
		// const exercise = JSON.parse(req.body);
		const exercise = req.body;
		console.log(exercise);
		console.log(req.params.id);
		const result = await db.Workout.findOneAndUpdate(
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
