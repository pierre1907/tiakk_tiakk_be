const Client = require('./Client');

class FactureDto {
    constructor(id, clientId, reference) {
        this.id = id;
        this.clientId = clientId;
        this.reference = reference;
    }

    static fromEntity(facture) {
        if (!facture) return null;
        return new FactureDto(
            facture.id,
            facture.client.utilisateur.id,
            facture.reference
        );
    }

    static toEntity(factureDto) {
        if (!factureDto) return null;
        return {
            id: factureDto.id,
            client: {
                utilisateur: {
                    id: factureDto.clientId
                }
            },
            reference: factureDto.reference
        };
    }
}

module.exports = FactureDto;