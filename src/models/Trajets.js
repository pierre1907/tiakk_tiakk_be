// Trajets.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définir le schéma des trajets
const trajetsSchema = new Schema({
    referenceTrajet: String,
    pointDepart: String,
    pointArrivee: String,
    distance: Number,
    duree: Number,
    dateDepart: String,
    dateArrivee: String,
    heureDepart: String,
    heureArrivee: String,
    statut: String,
    // Relation avec le modèle CommandeClient
    commandeClient: { type: Schema.Types.ObjectId, ref: 'CommandeClient' },
    // Relation avec le modèle Facture
    facture: { type: Schema.Types.ObjectId, ref: 'Facture' },
    // Relation avec le modèle Chauffeur
    chauffeur: { type: Schema.Types.ObjectId, ref: 'Chauffeur' }
});

// Générer la référence de trajet avant la persistance
trajetsSchema.pre('save', function(next) {
    // Générer une série de 10 chiffres
    const digits = String(Math.floor(Math.random() * 900 _000_000) + 100 _000_000);
    // Définir la référence de trajet avec le préfixe et les chiffres générés
    this.referenceTrajet = "ref_trajet_tt_" + digits;
    next();
});

// Appliquer le schéma pour le modèle Trajets
const Trajets = mongoose.model('Trajets', trajetsSchema);

module.exports = Trajets;