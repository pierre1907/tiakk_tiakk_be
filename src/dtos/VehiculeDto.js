const ChauffeurDto = require('./ChauffeurDto');

class VehiculeDto {
    constructor(id, marque, modele, anneeFabrication, matricule, couleur, chauffeurs) {
        this.id = id;
        this.marque = marque;
        this.modele = modele;
        this.anneeFabrication = anneeFabrication;
        this.matricule = matricule;
        this.couleur = couleur;
        this.chauffeurs = chauffeurs;
    }

    static fromEntity(vehicule) {
        if (!vehicule) return null;
        return new VehiculeDto(
            vehicule.id,
            vehicule.marque,
            vehicule.modele,
            vehicule.anneeFabrication,
            vehicule.matricule,
            vehicule.couleur,
            vehicule.chauffeurs.map(ChauffeurDto.fromEntity)
        );
    }

    static toEntity(vehiculeDto) {
        if (!vehiculeDto) return null;
        return {
            id: vehiculeDto.id,
            marque: vehiculeDto.marque,
            modele: vehiculeDto.modele,
            anneeFabrication: vehiculeDto.anneeFabrication,
            matricule: vehiculeDto.matricule,
            couleur: vehiculeDto.couleur,
            chauffeurs: vehiculeDto.chauffeurs.map(ChauffeurDto.toEntity)
        };
    }
}

module.exports = VehiculeDto;