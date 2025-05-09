const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    dailyCalories: {
        type: Number,
        required: true
    },
    dailyProteins: {
        type: Number,
        required: true
    },
    dailyCarbohydrates: {
        type: Number,
        required: true
    },
    dailyFats: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;