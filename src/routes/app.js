const express = require('express');

const app = express();

const appController = require('../controllers/app');

app.post('/', appController.generatePassword);

module.exports = app;
