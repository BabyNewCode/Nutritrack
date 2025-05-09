const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    proteins: {
        type: Number,
        required: true
    },
    carbohydrates: {
        type: Number,
        required: true
    },
    fats: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;