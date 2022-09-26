class RepositorioPessoas {
    constructor() {
        this.repositorio_pessoas = new Array();
    }
    getPessoas() {
        return this.repositorio_pessoas;
    }
    pesquisar(nome) {
        return this.repositorio_pessoas.find(pessoa => pessoa.nome === nome);
    }
    adicionar(pessoa) {
        this.repositorio_pessoas.push(pessoa);
    }
    remover(nome) {
        this.repositorio_pessoas.splice(this.repositorio_pessoas.findIndex(pessoa => pessoa.nome === nome));
    }
}
