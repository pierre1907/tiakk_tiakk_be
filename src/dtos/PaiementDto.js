class PaiementDto {
    constructor(id, reference, montant, datePaiement, methode, statut) {
        this.id = id;
        this.reference = reference;
        this.montant = montant;
        this.datePaiement = datePaiement;
        this.methode = methode;
        this.statut = statut;
    }

    static fromEntity(paiement) {
        if (!paiement) return null;
        return new PaiementDto(
            paiement.id,
            paiement.reference,
            paiement.montant,
            paiement.datePaiement,
            paiement.methode,
            paiement.statut
        );
    }

    static toEntity(paiementDto) {
        if (!paiementDto) return null;
        return {
            id: paiementDto.id,
            reference: paiementDto.reference,
            montant: paiementDto.montant,
            datePaiement: paiementDto.datePaiement,
            methode: paiementDto.methode,
            statut: paiementDto.statut
        };
    }
}

module.exports = PaiementDto;