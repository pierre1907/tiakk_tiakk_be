class CommandeClientDto {
    constructor(id, code, clientId, adresseDepart, adresseDestination, dateHeureCommande, instructionsSpeciales, statutCommande, prix, evaluationConducteur, commentairesClient, distanceEstimee, dureeEstimee) {
        this.id = id;
        this.code = code;
        this.clientId = clientId;
        this.adresseDepart = adresseDepart;
        this.adresseDestination = adresseDestination;
        this.dateHeureCommande = dateHeureCommande;
        this.instructionsSpeciales = instructionsSpeciales;
        this.statutCommande = statutCommande;
        this.prix = prix;
        this.evaluationConducteur = evaluationConducteur;
        this.commentairesClient = commentairesClient;
        this.distanceEstimee = distanceEstimee;
        this.dureeEstimee = dureeEstimee;
    }

    static fromEntity(commandeClient) {
        if (!commandeClient) return null;
        return new CommandeClientDto(
            commandeClient.id,
            commandeClient.codeCommande,
            commandeClient.client.id,
            commandeClient.adresseDepart,
            commandeClient.adresseDestination,
            commandeClient.dateHeureCommande,
            commandeClient.instructionsSpeciales,
            commandeClient.statutCommande,
            commandeClient.prix,
            commandeClient.evaluationConducteur,
            commandeClient.commentairesClient,
            commandeClient.distanceEstimee,
            commandeClient.dureeEstimee
        );
    }

    static toEntity(commandeClientDto) {
        if (!commandeClientDto) return null;
        return {
            id: commandeClientDto.id,
            codeCommande: commandeClientDto.code,
            clientId: commandeClientDto.clientId,
            adresseDepart: commandeClientDto.adresseDepart,
            adresseDestination: commandeClientDto.adresseDestination,
            dateHeureCommande: commandeClientDto.dateHeureCommande,
            instructionsSpeciales: commandeClientDto.instructionsSpeciales,
            statutCommande: commandeClientDto.statutCommande,
            prix: commandeClientDto.prix,
            evaluationConducteur: commandeClientDto.evaluationConducteur,
            commentairesClient: commandeClientDto.commentairesClient,
            distanceEstimee: commandeClientDto.distanceEstimee,
            dureeEstimee: commandeClientDto.dureeEstimee
        };
    }
}

module.exports = CommandeClientDto;