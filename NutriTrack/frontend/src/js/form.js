const form = document.getElementById('meal-form');
const mealList = document.getElementById('meal-list');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const mealData = {
        name: formData.get('name'),
        calories: parseFloat(formData.get('calories')),
        proteins: parseFloat(formData.get('proteins')),
        carbohydrates: parseFloat(formData.get('carbohydrates')),
        fats: parseFloat(formData.get('fats')),
    };

    try {
        const response = await fetch('/api/meals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mealData),
        });

        if (response.ok) {
            const newMeal = await response.json();
            addMealToList(newMeal);
            form.reset();
        } else {
            console.error('Error adding meal:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

function addMealToList(meal) {
    const listItem = document.createElement('li');
    listItem.textContent = `${meal.name}: ${meal.calories} calories, ${meal.proteins}g proteins, ${meal.carbohydrates}g carbohydrates, ${meal.fats}g fats`;
    mealList.appendChild(listItem);
}