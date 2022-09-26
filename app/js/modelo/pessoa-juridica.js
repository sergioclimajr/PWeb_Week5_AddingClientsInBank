class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, contas, cnpj) {
        super(nome + 'Jurídica', idade, dataNascimento, contas);
        this.cnpj = cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
}
