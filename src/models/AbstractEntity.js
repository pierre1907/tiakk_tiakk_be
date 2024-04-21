// AbstractEntity.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const abstractEntitySchema = new Schema({
    // Définition des champs du modèle
    createdDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    lastUpdatedDate: {
        type: Date,
        default: Date.now,
        required: true
    }
});

// Ajouter un ID généré automatiquement
abstractEntitySchema.add({
    id: {
        type: Number,
        unique: true,
        required: true
    }
});

// Appliquer le schéma pour le modèle AbstractEntity
const AbstractEntity = mongoose.model('AbstractEntity', abstractEntitySchema);

module.exports = AbstractEntity;