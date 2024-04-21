// Paiement.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définir le schéma du paiement
const paiementSchema = new Schema({
    reference: String,
    montant: Number,
    datePaiement: Date,
    methode: String,
    statut: String,
    // Relation avec le modèle Facture
    facture: { type: Schema.Types.ObjectId, ref: 'Facture' }
});

// Générer la référence de paiement avant la persistance
payementSchema.pre('save', function(next) {
    // Générer une série de 10 chiffres
    const digits = String(Math.floor(Math.random() * 900 _000_000) + 100 _000_000);
    // Définir la référence de paiement avec le préfixe et les chiffres générés
    this.reference = "ref_paiement_tt_" + digits;
    next();
});

// Appliquer le schéma pour le modèle Payement
const Payement = mongoose.model('Payement', payementSchema);

module.exports = Payement;