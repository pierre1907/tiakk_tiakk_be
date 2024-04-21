const UtilisateurDto = require('./UtilisateurDto');

class ClientDto {
    constructor(id, userId, codeClient, adresseFacturation, adresseLivraison) {
        this.id = id;
        this.userId = userId;
        this.codeClient = codeClient;
        this.adresseFacturation = adresseFacturation;
        this.adresseLivraison = adresseLivraison;
    }

    static fromEntity(client) {
        if (!client) return null;
        return new ClientDto(
            client.id,
            client.id,
            client.codeClient,
            client.adresseFacturation,
            client.adresseLivraison
        );
    }

    static toEntity(clientDto) {
        if (!clientDto) return null;
        return {
            id: clientDto.id,
            userId: clientDto.userId,
            codeClient: clientDto.codeClient,
            adresseFacturation: clientDto.adresseFacturation,
            adresseLivraison: clientDto.adresseLivraison
        };
    }
}

module.exports = ClientDto;