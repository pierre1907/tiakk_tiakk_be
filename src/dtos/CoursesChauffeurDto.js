const ChauffeurDto = require('./ChauffeurDto');
const TrajetsDto = require('./TrajetsDto');

class CoursesChauffeurDto {
    constructor(id, chauffeur, trajet, dateDepart, dateArrivee, statut) {
        this.id = id;
        this.chauffeur = chauffeur;
        this.trajet = trajet;
        this.dateDepart = dateDepart;
        this.dateArrivee = dateArrivee;
        this.statut = statut;
    }

    static fromEntity(coursesChauffeur) {
        if (!coursesChauffeur) return null;
        return new CoursesChauffeurDto(
            coursesChauffeur.id,
            ChauffeurDto.fromEntity(coursesChauffeur.chauffeur),
            TrajetsDto.fromEntity(coursesChauffeur.trajet),
            coursesChauffeur.dateDepart,
            coursesChauffeur.dateArrivee,
            coursesChauffeur.statut
        );
    }

    static toEntity(coursesChauffeurDto) {
        if (!coursesChauffeurDto) return null;
        return {
            id: coursesChauffeurDto.id,
            chauffeur: ChauffeurDto.toEntity(coursesChauffeurDto.chauffeur),
            trajet: TrajetsDto.toEntity(coursesChauffeurDto.trajet),
            dateDepart: coursesChauffeurDto.dateDepart,
            dateArrivee: coursesChauffeurDto.dateArrivee,
            statut: coursesChauffeurDto.statut
        };
    }
}

module.exports = CoursesChauffeurDto;