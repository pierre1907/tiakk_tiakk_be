// Client.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définir le schéma du client
const clientSchema = new Schema({
    utilisateur: { type: Schema.Types.ObjectId, ref: 'Utilisateur' },
    codeClient: String,
    adresseFacturation: String,
    adresseLivraison: String,
    commandes: [{ type: Schema.Types.ObjectId, ref: 'CommandeClient' }]
});

// Générer le code client avant la persistance
clientSchema.pre('save', function(next) {
    // Générer une série de 10 chiffres
    const digits = String(Math.floor(Math.random() * 900 _000_000) + 100 _000_000);
    // Définir la référence de client avec le préfixe et les chiffres générés
    this.codeClient = "code_client_tt_" + digits;
    next();
});

// Appliquer le schéma pour le modèle Client
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;