class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf, contas) {
        super(nome + 'Física', idade, dataNascimento, contas);
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
}
