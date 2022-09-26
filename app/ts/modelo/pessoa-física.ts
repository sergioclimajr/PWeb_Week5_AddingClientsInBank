class PessoaFisica extends Pessoa {

    readonly cpf: string

    constructor(nome: string, idade: string, dataNascimento: Date, cpf: string, contas: Array<Conta>) {
        super(nome + 'Física', idade, dataNascimento, contas)

        this.cpf = cpf;
    }

    getCpf(): string {
        return this.cpf;
    }
}