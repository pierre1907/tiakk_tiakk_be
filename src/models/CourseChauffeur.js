// CourseChauffeur.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définir le schéma de la course chauffeur
const courseChauffeurSchema = new Schema({
    // Relation avec le modèle Chauffeur
    chauffeur: { type: Schema.Types.ObjectId, ref: 'Chauffeur' },
    // Relation avec le modèle Trajet
    trajet: { type: Schema.Types.ObjectId, ref: 'Trajet' },
    dateDepart: Date,
    dateArrivee: Date,
    statut: String
});

// Appliquer le schéma pour le modèle CourseChauffeur
const CourseChauffeur = mongoose.model('CourseChauffeur', courseChauffeurSchema);

module.exports = CourseChauffeur;