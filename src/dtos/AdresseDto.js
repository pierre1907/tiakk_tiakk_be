class AdresseDto {
    constructor(id, telephone1, telephone2, adresse, ville, pays) {
        this.id = id;
        this.telephone1 = telephone1;
        this.telephone2 = telephone2;
        this.adresse = adresse;
        this.ville = ville;
        this.pays = pays;
    }

    static fromEntity(adresse) {
        if (!adresse) return null;
        return new AdresseDto(adresse.id, adresse.telephone1, adresse.telephone2, adresse.adresse, adresse.ville, adresse.pays);
    }

    static toEntity(adresseDto) {
        if (!adresseDto) return null;
        return {
            id: adresseDto.id,
            telephone1: adresseDto.telephone1,
            telephone2: adresseDto.telephone2,
            adresse: adresseDto.adresse,
            ville: adresseDto.ville,
            pays: adresseDto.pays
        };
    }
}

module.exports = AdresseDto;