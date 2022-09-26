class RepositorioPessoas {
    
    repositorio_pessoas: Array<Pessoa>

    constructor() {
        this.repositorio_pessoas = new Array<Pessoa>();
    }

    getPessoas() {
        return this.repositorio_pessoas;
    }

    pesquisar(nome: string) {
        return this.repositorio_pessoas.find(pessoa => pessoa.nome === nome);
    }

    adicionar(pessoa: Pessoa) {
        this.repositorio_pessoas.push(pessoa);
        
    }

    remover(nome: string) {
        this.repositorio_pessoas.splice(this.repositorio_pessoas.findIndex(pessoa => pessoa.nome === nome));
    }
   
    //função para adicionar mais de uma pessoa à lista de uma única vez
    /*adicionarmais(...pessoaAdds: Pessoa[]) {
        for (let i: number = 0; i < pessoaAdds.length;) this.repositorio_pessoas.push(...pessoaAdds);

    }*/
}