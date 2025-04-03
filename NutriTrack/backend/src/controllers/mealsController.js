const Meal = require('../models/meal');

// Add a new meal
exports.addMeal = async (req, res) => {
    try {
        const { name, calories, proteins, carbohydrates, fats } = req.body;
        const newMeal = new Meal({ name, calories, proteins, carbohydrates, fats });
        await newMeal.save();
        res.status(201).json(newMeal);
    } catch (error) {
        res.status(500).json({ message: 'Error adding meal', error });
    }
};

// Get all meals
exports.getMeals = async (req, res) => {
    try {
        const meals = await Meal.find();
        res.status(200).json(meals);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving meals', error });
    }
};