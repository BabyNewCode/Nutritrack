const Goal = require('../models/goal');

// Créer un nouvel objectif
exports.createGoal = async (req, res) => {
    try {
        const goal = new Goal(req.body);
        await goal.save();
        res.status(201).json(goal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtenir tous les objectifs
exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find();
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir un objectif par ID
exports.getGoalById = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        if (!goal) return res.status(404).json({ error: 'Goal not found' });
        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un objectif
exports.updateGoal = async (req, res) => {
    try {
        const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!goal) return res.status(404).json({ error: 'Goal not found' });
        res.status(200).json(goal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Supprimer un objectif
exports.deleteGoal = async (req, res) => {
    try {
        const goal = await Goal.findByIdAndDelete(req.params.id);
        if (!goal) return res.status(404).json({ error: 'Goal not found' });
        res.status(200).json({ message: 'Goal deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};