const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/mealsController');

// Route to add a new meal
router.post('/', mealsController.addMeal);

// Route to get all meals
router.get('/', mealsController.getMeals);

module.exports = router;