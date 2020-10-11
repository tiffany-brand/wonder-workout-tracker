const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const PORT = process.env.PORT || 3000;

const db = require('./models');

// const User = require("./userModel.js");
const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Setup api routes
app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true });

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
