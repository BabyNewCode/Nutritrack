const R = require('../lib/ramda.min.js');

const calculateTopMeals = (meals) => {
    return R.pipe(
        R.map(meal => ({ name: meal.name, calories: meal.calories })),
        R.sortBy(R.prop('calories')),
        R.reverse,
        R.take(5)
    )(meals);
};

const calculateBalancedMeals = (meals) => {
    return R.filter(meal => {
        const { proteins, carbohydrates, fats } = meal;
        const totalNutrients = proteins + carbohydrates + fats;
        return totalNutrients > 0 && (proteins / totalNutrients) > 0.25 && (carbohydrates / totalNutrients) > 0.25 && (fats / totalNutrients) > 0.25;
    }, meals);
};

const displayStats = (meals) => {
    const topMeals = calculateTopMeals(meals);
    const balancedMeals = calculateBalancedMeals(meals);

    console.log('Top Meals:', topMeals);
    console.log('Balanced Meals:', balancedMeals);
};

const updateStats = async () => {
    const response = await fetch('/api/meals');
    const meals = await response.json();
    displayStats(meals);
};

document.addEventListener('DOMContentLoaded', () => {
    updateStats();
});