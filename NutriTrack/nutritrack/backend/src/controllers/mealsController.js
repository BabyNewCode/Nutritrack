const Meal = require('../models/meal');

exports.addMeal = (req, res) => {
    const { name, calories, proteins, carbohydrates, fats } = req.body;

    const newMeal = new Meal({
        name,
        calories,
        proteins,
        carbohydrates,
        fats
    });

    newMeal.save()
        .then(meal => res.status(201).json(meal))
        .catch(err => res.status(400).json({ error: err.message }));
};

exports.getMeals = (req, res) => {
    Meal.find()
        .then(meals => res.status(200).json(meals))
        .catch(err => res.status(500).json({ error: err.message }));
};