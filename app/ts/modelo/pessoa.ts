class Pessoa {

    protected _nome: string;
    private _idade: string;
    private _dataNascimento: Date;
    contas: Array<Conta>

    constructor(nome: string, idade: string, dataNascimento: Date, contas: Array<Conta>) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
        this.contas = new Array<Conta>;
    }

    get nome(): string {
        return this._nome;
    }

    get idade(): string {
        return this._idade;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    setNome(novoNome: string) {
        this._nome = novoNome;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    set dataNascimento(novaDataNasc) {
        this._dataNascimento = novaDataNasc;
    }

    //

    acrescentarConta(conta: Conta) {
        this.contas.push(conta);
    }
    
    consultarContas(numero: string): Conta {
        return this.contas.find(conta => conta.numero === numero);
    }
    
    removerContas(numero: string) {
        const contasARemover = this.consultarContas(numero);
        if (contasARemover) {
            const indiceARemover = this.contas.indexOf(contasARemover);
            if (indiceARemover > -1) {
                this.contas.splice(indiceARemover, 1);
            }
        }
    }
    
    saldoTotalContas(): number {
        let somador = 0;
        this.contas.map((it) => somador += it.getSaldo());
        return somador;
    }
    
    mediaSaldoContas() {
        return this.saldoTotalContas() / this.contas.length;
    }
    
}
