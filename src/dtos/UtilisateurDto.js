const AdresseDto = require('./AdresseDto');
const RolesDto = require('./RolesDto');

class UtilisateurDto {
    constructor(id, referenceClient, nom, prenom, email, password, confirmationPassword, adresse, photo, etat, nomUtilisateur, roles, typePieceIdentite) {
        this.id = id;
        this.referenceClient = referenceClient;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.confirmationPassword = confirmationPassword;
        this.adresse = adresse;
        this.photo = photo;
        this.etat = etat;
        this.nomUtilisateur = nomUtilisateur;
        this.roles = roles;
        this.typePieceIdentite = typePieceIdentite;
    }

    static fromEntity(utilisateur) {
        if (!utilisateur) return null;
        return new UtilisateurDto(
            utilisateur.id,
            utilisateur.referenceClient,
            utilisateur.nom,
            utilisateur.prenom,
            utilisateur.email,
            utilisateur.password,
            utilisateur.confirmationPassword,
            AdresseDto.fromEntity(utilisateur.adresse),
            utilisateur.photo,
            utilisateur.etat,
            utilisateur.nomUtilisateur,
            utilisateur.roles.map(RolesDto.fromEntity),
            utilisateur.typePieceIdentite
        );
    }

    static toEntity(utilisateurDto) {
        if (!utilisateurDto) return null;
        return {
            id: utilisateurDto.id,
            referenceClient: utilisateurDto.referenceClient,
            nom: utilisateurDto.nom,
            prenom: utilisateurDto.prenom,
            email: utilisateurDto.email,
            password: utilisateurDto.password,
            confirmationPassword: utilisateurDto.confirmationPassword,
            adresse: AdresseDto.toEntity(utilisateurDto.adresse),
            photo: utilisateurDto.photo,
            etat: utilisateurDto.etat,
            nomUtilisateur: utilisateurDto.nomUtilisateur,
            roles: utilisateurDto.roles.map(RolesDto.toEntity),
            typePieceIdentite: utilisateurDto.typePieceIdentite
        };
    }
}

module.exports = UtilisateurDto;