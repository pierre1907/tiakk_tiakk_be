// CommandeClient.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définir le schéma de la commande client
const commandeClientSchema = new Schema({
    codeCommande: String,
    idClient: Number,
    adresseDepart: String,
    adresseDestination: String,
    dateHeureCommande: Date,
    instructionsSpeciales: String,
    statutCommande: String,
    prix: Number,
    evaluationConducteur: Number,
    commentairesClient: String,
    distanceEstimee: Number,
    dureeEstimee: Number,
    // Relation avec le modèle Trajet
    trajet: { type: Schema.Types.ObjectId, ref: 'Trajet' },
    // Relation avec le modèle Client
    client: { type: Schema.Types.ObjectId, ref: 'Client' },
    // Relation avec le modèle Facture
    facture: { type: Schema.Types.ObjectId, ref: 'Facture' }
});

// Générer le code de commande avant la persistance
commandeClientSchema.pre('save', function(next) {
    // Générer une série de 10 chiffres
    const digits = String(Math.floor(Math.random() * 900 _000_000) + 100 _000_000);
    // Définir la référence de commande avec le préfixe et les chiffres générés
    this.codeCommande = "code_cmd_tt_" + digits;
    next();
});

// Appliquer le schéma pour le modèle CommandeClient
const CommandeClient = mongoose.model('CommandeClient', commandeClientSchema);

module.exports = CommandeClient;