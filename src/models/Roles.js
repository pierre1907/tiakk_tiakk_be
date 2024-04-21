// roles.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Définir les valeurs possibles de l'énumération RoleEnum
const rolesEnumValues = ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_DRIVER'];

// Définir le schéma des rôles
const rolesSchema = new Schema({
    role: { type: String, enum: rolesEnumValues }
});

// Appliquer le schéma pour le modèle Roles
const Roles = mongoose.model('Roles', rolesSchema);

module.exports = Roles;