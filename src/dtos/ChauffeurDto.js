const TrajetsDto = require('./TrajetsDto');
const CoursesChauffeurDto = require('./CoursesChauffeurDto');
const VehiculeDto = require('./VehiculeDto');
const UtilisateurDto = require('./UtilisateurDto');

class ChauffeurDto {
    constructor(id, utilisateur, codeChauffeur, numeroPermisConduire, trajets, courses, vehicule, adresse) {
        this.id = id;
        this.utilisateur = utilisateur;
        this.codeChauffeur = codeChauffeur;
        this.numeroPermisConduire = numeroPermisConduire;
        this.trajets = trajets;
        this.courses = courses;
        this.vehicule = vehicule;
        this.adresse = adresse;
    }

    static fromEntity(chauffeur) {
        if (!chauffeur) return null;
        return new ChauffeurDto(
            chauffeur.id,
            UtilisateurDto.fromEntity(chauffeur.utilisateur),
            chauffeur.codeChauffeur,
            chauffeur.numeroPermisConduire,
            chauffeur.trajets.map(TrajetsDto.fromEntity),
            chauffeur.courses.map(CoursesChauffeurDto.fromEntity),
            VehiculeDto.fromEntity(chauffeur.vehicule),
            AdresseDto.fromEntity(chauffeur.adresse)
        );
    }

    static toEntity(chauffeurDto) {
        if (!chauffeurDto) return null;
        return {
            id: chauffeurDto.id,
            utilisateur: UtilisateurDto.toEntity(chauffeurDto.utilisateur),
            codeChauffeur: chauffeurDto.codeChauffeur,
            numeroPermisConduire: chauffeurDto.numeroPermisConduire,
            trajets: chauffeurDto.trajets.map(TrajetsDto.toEntity),
            courses: chauffeurDto.courses.map(CoursesChauffeurDto.toEntity),
            vehicule: VehiculeDto.toEntity(chauffeurDto.vehicule),
            adresse: AdresseDto.toEntity(chauffeurDto.adresse)
        };
    }
}

module.exports = ChauffeurDto;