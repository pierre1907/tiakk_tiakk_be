// Utilisateur.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Importer les valeurs des énumérations
const rolesEnumValues = require('./roleEnum');
const typePieceValues = require('./typePieceEnum');


// Définir le schéma de l'utilisateur
const utilisateurSchema = new Schema({
    referenceClient: String,
    nom: String,
    prenom: String,
    email: String,
    password: String,
    confirmationPassword: String,
    adresse: {
        telephone1: String,
        telephone2: String,
        adresse: String,
        ville: String,
        pays: String
    },
    photo: String,
    etat: Boolean,
    nomUtilisateur: String,
    roles: [{ type: String, enum: roleEnumValues }],
    typePieceIdentite: { type: String, enum: typePieceIdentiteValues }
});

// Générer la référence utilisateur avant la persistance
utilisateurSchema.pre('save', function(next) {
    // Générer 5 chiffres aléatoires
    const randomInt = Math.floor(Math.random() * 90000) + 10000; // Générer un nombre entre 10000 et 99999

    // Créer la référence utilisateur en concaténant nom, prénom et 5 chiffres aléatoires
    this.referenceClient = this.nom.substring(0, 3) + this.prenom.substring(0, 3) + randomInt;
    next();
});

// Appliquer le schéma pour le modèle Utilisateur
const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

module.exports = Utilisateur;