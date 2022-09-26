class PessoaJuridica extends Pessoa {

    readonly cnpj: string;

    constructor(nome: string, idade: string, dataNascimento: Date, contas: Array<Conta>, cnpj: string) {
        super(nome + 'Jurídica', idade, dataNascimento, contas)

        this.cnpj = cnpj;
    }

    getCnpj(): string {
        return this.cnpj
    }
}