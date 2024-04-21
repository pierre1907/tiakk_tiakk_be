// Chauffeur.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définir le schéma du chauffeur
const chauffeurSchema = new Schema({
    utilisateur: { type: Schema.Types.ObjectId, ref: 'Utilisateur' },
    codeChauffeur: String,
    numeroPermisConduire: String,
    trajets: [{ type: Schema.Types.ObjectId, ref: 'Trajets' }],
    courses: [{ type: Schema.Types.ObjectId, ref: 'CourseChauffeur' }],
    vehicule: { type: Schema.Types.ObjectId, ref: 'Vehicule' },
    adresse: { type: Schema.Types.ObjectId, ref: 'Adresse' }
});

// Générer le code chauffeur avant la persistance
chauffeurSchema.pre('save', function(next) {
    // Générer une série de 10 chiffres
    const digits = String(Math.floor(Math.random() * 900 _000_000) + 100 _000_000);
    // Définir la référence de facture avec le préfixe et les chiffres générés
    this.codeChauffeur = "code_chauffeur_tt_" + digits;
    next();
});

// Appliquer le schéma pour le modèle Chauffeur
const Chauffeur = mongoose.model('Chauffeur', chauffeurSchema);

module.exports = Chauffeur;