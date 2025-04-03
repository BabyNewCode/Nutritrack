const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goalsController');

// Route to create a new goal
router.post('/', goalsController.createGoal);

// Route to get all goals
router.get('/', goalsController.getGoals);

module.exports = router;