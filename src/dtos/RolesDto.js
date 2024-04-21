class RolesDto {
    constructor(id, role) {
        this.id = id;
        this.role = role;
    }

    static fromEntity(roles) {
        if (!roles) return null;
        return new RolesDto(
            roles.id,
            roles.role
        );
    }

    static toEntity(rolesDto) {
        if (!rolesDto) return null;
        return {
            id: rolesDto.id,
            role: rolesDto.role
        };
    }
}

module.exports = RolesDto;