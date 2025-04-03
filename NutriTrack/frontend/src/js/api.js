const apiUrl = 'http://localhost:3000'; // Change this to your backend URL if needed

async function fetchMeals() {
    const response = await fetch(`${apiUrl}/meals`);
    if (!response.ok) {
        throw new Error('Failed to fetch meals');
    }
    return await response.json();
}

async function addMeal(mealData) {
    const response = await fetch(`${apiUrl}/meals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mealData),
    });
    if (!response.ok) {
        throw new Error('Failed to add meal');
    }
    return await response.json();
}

async function fetchGoals() {
    const response = await fetch(`${apiUrl}/goals`);
    if (!response.ok) {
        throw new Error('Failed to fetch goals');
    }
    return await response.json();
}

async function addGoal(goalData) {
    const response = await fetch(`${apiUrl}/goals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(goalData),
    });
    if (!response.ok) {
        throw new Error('Failed to add goal');
    }
    return await response.json();
}

export { fetchMeals, addMeal, fetchGoals, addGoal };