const api = require('./api');
const R = require('../lib/ramda.min.js');

const dashboard = document.getElementById('dashboard');
const dailySummary = document.getElementById('daily-summary');
const progressBars = document.getElementById('progress-bars');
const recommendationsSection = document.getElementById('recommendations');

const renderDailySummary = (data) => {
    dailySummary.innerHTML = `
        <h2>Résumé Journalier</h2>
        <p>Calories: ${data.calories}</p>
        <p>Protéines: ${data.proteins}</p>
        <p>Glucides: ${data.carbs}</p>
        <p>Lipides: ${data.fats}</p>
    `;
};

const renderProgressBars = (goals, totals) => {
    progressBars.innerHTML = '';
    R.forEach(goal => {
        const total = totals[goal.nutrient];
        const progress = (total / goal.target) * 100;
        progressBars.innerHTML += `
            <div class="progress-bar">
                <span>${goal.nutrient}: ${total} / ${goal.target}</span>
                <div class="bar" style="width: ${progress}%;"></div>
            </div>
        `;
    }, goals);
};

const renderRecommendations = (recommendations) => {
    recommendationsSection.innerHTML = '<h2>Recommandations</h2>';
    R.forEach(rec => {
        recommendationsSection.innerHTML += `<p>${rec}</p>`;
    }, recommendations);
};

const loadDashboardData = async () => {
    try {
        const [totals, goals, recommendations] = await Promise.all([
            api.getDailyTotals(),
            api.getGoals(),
            api.getRecommendations()
        ]);
        renderDailySummary(totals);
        renderProgressBars(goals, totals);
        renderRecommendations(recommendations);
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
};

document.addEventListener('DOMContentLoaded', loadDashboardData);