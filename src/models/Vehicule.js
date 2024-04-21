// Vehicule.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définir le schéma du véhicule
const vehiculeSchema = new Schema({
    marque: String,
    modele: String,
    anneeFabrication: Date,
    matricule: String,
    couleur: String,
    chauffeurs: [{ type: Schema.Types.ObjectId, ref: 'Chauffeur' }]
});

// Appliquer le schéma pour le modèle Vehicule
const Vehicule = mongoose.model('Vehicule', vehiculeSchema);

module.exports = Vehicule;