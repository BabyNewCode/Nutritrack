const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const goalsRoutes = require('./routes/goals');

dotenv.config(); // Charge les variables d'environnement

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/goals', goalsRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});