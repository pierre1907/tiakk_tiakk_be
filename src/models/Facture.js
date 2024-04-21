// Facture.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définir le schéma de la facture
const factureSchema = new Schema({
    // Relation avec le modèle Client
    client: { type: Schema.Types.ObjectId, ref: 'Client' },
    reference: String,
    // Relation avec le modèle CommandeClient
    commande: { type: Schema.Types.ObjectId, ref: 'CommandeClient' },
    // Relation avec le modèle Payement
    paiement: { type: Schema.Types.ObjectId, ref: 'Payement' },
    // Relation avec le modèle Trajet
    trajet: { type: Schema.Types.ObjectId, ref: 'Trajet' }
});

// Générer la référence de facture avant la persistance
factureSchema.pre('save', function(next) {
    // Générer une série de 10 chiffres
    const digits = String(Math.floor(Math.random() * 900 _000_000) + 100 _000_000);
    // Définir la référence de facture avec le préfixe et les chiffres générés
    this.reference = "ref_facture_tt_" + digits;
    next();
});

// Appliquer le schéma pour le modèle Facture
const Facture = mongoose.model('Facture', factureSchema);

module.exports = Facture;