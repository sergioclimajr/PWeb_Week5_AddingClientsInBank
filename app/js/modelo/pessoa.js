class Pessoa {
    constructor(nome, idade, dataNascimento, contas) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
        this.contas = new Array;
    }
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    setNome(novoNome) {
        this._nome = novoNome;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
    set dataNascimento(novaDataNasc) {
        this._dataNascimento = novaDataNasc;
    }
    //
    acrescentarConta(conta) {
        this.contas.push(conta);
    }
    consultarContas(numero) {
        return this.contas.find(conta => conta.numero === numero);
    }
    removerContas(numero) {
        const contasARemover = this.consultarContas(numero);
        if (contasARemover) {
            const indiceARemover = this.contas.indexOf(contasARemover);
            if (indiceARemover > -1) {
                this.contas.splice(indiceARemover, 1);
            }
        }
    }
    saldoTotalContas() {
        let somador = 0;
        this.contas.map((it) => somador += it.getSaldo());
        return somador;
    }
    mediaSaldoContas() {
        return this.saldoTotalContas() / this.contas.length;
    }
}
