const generateRecommendations = (meals, goals) => {
    const totalNutrients = meals.reduce((totals, meal) => {
        totals.calories += meal.calories;
        totals.proteins += meal.proteins;
        totals.carbohydrates += meal.carbohydrates;
        totals.fats += meal.fats;
        return totals;
    }, { calories: 0, proteins: 0, carbohydrates: 0, fats: 0 });

    const recommendations = {
        calories: goals.calories - totalNutrients.calories,
        proteins: goals.proteins - totalNutrients.proteins,
        carbohydrates: goals.carbohydrates - totalNutrients.carbohydrates,
        fats: goals.fats - totalNutrients.fats,
    };

    return recommendations;
};

const filterMealsByNutrient = (meals, nutrient, minValue) => {
    return meals.filter(meal => meal[nutrient] >= minValue);
};

const generateBalancedMealPlan = (meals, goals) => {
    const recommendedMeals = filterMealsByNutrient(meals, 'calories', goals.calories / 3);
    return recommendedMeals.slice(0, 3); // Example: select 3 meals for balance
};

module.exports = {
    generateRecommendations,
    filterMealsByNutrient,
    generateBalancedMealPlan,
};