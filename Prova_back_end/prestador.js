export class Prestador {
    id;
    razao_social;
    cnpj;

    constructor(id, razao_social, cnpj) {
        this.id = id;
        this.razao_social = razao_social;
        this.cnpj = cnpj;
    }
}