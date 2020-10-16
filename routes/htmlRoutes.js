const express = require('express');

const router = express.Router();

const path = require('path');

// Route to add an exercise
router.get('/exercise', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// Route to view workout dashboard
router.get('/stats', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// Route for index page - Add new or continue a workout
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
