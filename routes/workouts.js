const express = require('express');

const router = express.Router();

const db = require('../models');

router.get('/', async (req, res) => {
	try {
		const workouts = await db.Workout.find({});
		console.log('in api workouts route');
		res.json(workouts);
	} catch (err) {
		res.status(500).statusMessage(err).end();
	}
});

module.exports = router;
