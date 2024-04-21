const CommandeClientDto = require('./CommandeClientDto');
const FactureDto = require('./FactureDto');
const ChauffeurDto = require('./ChauffeurDto');

class TrajetsDto {
    constructor(id, referenceTrajet, pointDepart, pointArrivee, distance, duree, dateDepart, dateArrivee, heureDepart, heureArrivee, statut, commandeClient, facture, chauffeur) {
        this.id = id;
        this.referenceTrajet = referenceTrajet;
        this.pointDepart = pointDepart;
        this.pointArrivee = pointArrivee;
        this.distance = distance;
        this.duree = duree;
        this.dateDepart = dateDepart;
        this.dateArrivee = dateArrivee;
        this.heureDepart = heureDepart;
        this.heureArrivee = heureArrivee;
        this.statut = statut;
        this.commandeClient = commandeClient;
        this.facture = facture;
        this.chauffeur = chauffeur;
    }

    static fromEntity(trajets) {
        if (!trajets) return null;
        return new TrajetsDto(
            trajets.id,
            trajets.referenceTrajet,
            trajets.pointDepart,
            trajets.pointArrivee,
            trajets.distance,
            trajets.duree,
            trajets.dateDepart,
            trajets.dateArrivee,
            trajets.heureDepart,
            trajets.heureArrivee,
            trajets.statut,
            CommandeClientDto.fromEntity(trajets.commandeClient),
            FactureDto.fromEntity(trajets.facture),
            ChauffeurDto.fromEntity(trajets.chauffeur)
        );
    }

    static toEntity(trajetsDto) {
        if (!trajetsDto) return null;
        return {
            id: trajetsDto.id,
            referenceTrajet: trajetsDto.referenceTrajet,
            pointDepart: trajetsDto.pointDepart,
            pointArrivee: trajetsDto.pointArrivee,
            distance: trajetsDto.distance,
            duree: trajetsDto.duree,
            dateDepart: trajetsDto.dateDepart,
            dateArrivee: trajetsDto.dateArrivee,
            heureDepart: trajetsDto.heureDepart,
            heureArrivee: trajetsDto.heureArrivee,
            statut: trajetsDto.statut,
            commandeClient: CommandeClientDto.toEntity(trajetsDto.commandeClient),
            facture: FactureDto.toEntity(trajetsDto.facture),
            chauffeur: ChauffeurDto.toEntity(trajetsDto.chauffeur)
        };
    }
}

module.exports = TrajetsDto;