const R = require('ramda');

// Function to generate meal recommendations based on user goals and current meals
const generateRecommendations = (meals, goals) => {
    const totalNutrients = calculateTotalNutrients(meals);
    const recommendations = [];

    if (totalNutrients.calories < goals.calories) {
        recommendations.push(`Increase calorie intake by adding more meals.`);
    }
    if (totalNutrients.proteins < goals.proteins) {
        recommendations.push(`Increase protein intake by including high-protein foods.`);
    }
    if (totalNutrients.carbohydrates < goals.carbohydrates) {
        recommendations.push(`Add more carbohydrates to your meals.`);
    }
    if (totalNutrients.fats < goals.fats) {
        recommendations.push(`Consider adding healthy fats to your diet.`);
    }

    return recommendations;
};

// Function to calculate total nutrients from meals
const calculateTotalNutrients = (meals) => {
    return meals.reduce((totals, meal) => {
        return {
            calories: totals.calories + meal.calories,
            proteins: totals.proteins + meal.proteins,
            carbohydrates: totals.carbohydrates + meal.carbohydrates,
            fats: totals.fats + meal.fats,
        };
    }, { calories: 0, proteins: 0, carbohydrates: 0, fats: 0 });
};

// Exporting the recommendation functions
module.exports = {
    generateRecommendations,
    calculateTotalNutrients,
};