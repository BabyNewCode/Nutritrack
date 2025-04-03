const api = {
    baseUrl: 'http://localhost:5000/api', // Adjust the base URL as needed

    async fetchMeals() {
        const response = await fetch(`${this.baseUrl}/meals`);
        return response.json();
    },

    async addMeal(meal) {
        const response = await fetch(`${this.baseUrl}/meals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(meal),
        });
        return response.json();
    },

    async fetchGoals() {
        const response = await fetch(`${this.baseUrl}/goals`);
        return response.json();
    },

    async addGoal(goal) {
        const response = await fetch(`${this.baseUrl}/goals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(goal),
        });
        return response.json();
    },
};

const app = {
    async init() {
        this.bindEvents();
        await this.loadMeals();
        await this.loadGoals();
    },

    bindEvents() {
        document.getElementById('meal-form').addEventListener('submit', this.handleMealSubmit.bind(this));
        document.getElementById('goal-form').addEventListener('submit', this.handleGoalSubmit.bind(this));
    },

    async loadMeals() {
        const meals = await api.fetchMeals();
        this.renderMeals(meals);
    },

    async loadGoals() {
        const goals = await api.fetchGoals();
        this.renderGoals(goals);
    },

    async handleMealSubmit(event) {
        event.preventDefault();
        const meal = {
            name: event.target.mealName.value,
            calories: event.target.calories.value,
            proteins: event.target.proteins.value,
            carbohydrates: event.target.carbohydrates.value,
            fats: event.target.fats.value,
        };
        await api.addMeal(meal);
        this.loadMeals();
        event.target.reset();
    },

    async handleGoalSubmit(event) {
        event.preventDefault();
        const goal = {
            dailyCalories: event.target.dailyCalories.value,
            dailyProteins: event.target.dailyProteins.value,
            dailyCarbohydrates: event.target.dailyCarbohydrates.value,
            dailyFats: event.target.dailyFats.value,
        };
        await api.addGoal(goal);
        this.loadGoals();
        event.target.reset();
    },

    renderMeals(meals) {
        const mealsList = document.getElementById('meals-list');
        mealsList.innerHTML = meals.map(meal => `<li>${meal.name}: ${meal.calories} calories</li>`).join('');
    },

    renderGoals(goals) {
        const goalsList = document.getElementById('goals-list');
        goalsList.innerHTML = goals.map(goal => `<li>Daily Goal: ${goal.dailyCalories} calories</li>`).join('');
    },
};

document.addEventListener('DOMContentLoaded', () => app.init());