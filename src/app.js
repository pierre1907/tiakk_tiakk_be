const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config(); // Charge les variables d'environnement à partir du fichier .env

// Créer une application Express
const app = express();

// Middleware Body Parser pour analyser les corps de requête JSON
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(err => console.error('Erreur de connexion à MongoDB :', err));

// Définir les routes
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require('./routes/tripRoutes');

app.use('/api/users', userRoutes);
app.use('/api/trips', tripRoutes);

// Gestion des erreurs 404 (route non trouvée)
app.use((req, res, next) => {
    const error = new Error('Route non trouvée');
    error.status = 404;
    next(error);
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Une erreur inattendue s\'est produite'
        }
    });
});

// Port d'écoute du serveur
const PORT = process.env.PORT || 3000;

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});