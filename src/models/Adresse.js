// Adresse.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définir le schéma de l'adresse
const adresseSchema = new Schema({
    telephone1: String,
    telephone2: String,
    adresse: String,
    ville: String,
    pays: String,
    // Chauffeurs associés à cette adresse
    chauffeurs: [{ type: Schema.Types.ObjectId, ref: 'Chauffeur' }]
});

// Appliquer le schéma pour le modèle Adresse
const Adresse = mongoose.model('Adresse', adresseSchema);

module.exports = Adresse;