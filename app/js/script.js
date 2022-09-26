const c1 = new Conta('1', 100);
const c2 = new Conta('2');
const c3 = new Conta('3', 200);
const c4 = new Conta('4', 250);
const c5 = new Conta('5', 350);
const c6 = new Conta('6', 250);
const c7 = new Conta('7', 450);
const c8 = new Conta('8', 250);
const c9 = new Conta('9', 300);
const c10 = new Conta('10', 275);
/*console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());*/
//
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
let cliente1 = new Cliente("Sergio", "35", new Date("7/17/1987"), [c1], "073.816.601-22");
let cliente2 = new Cliente("Clovis", "28", new Date("12/20/1992"), [c2, c7], "074.817.602-23");
let cliente3 = new Cliente("Thales", "31", new Date("1/14/1991"), [c3], "081.895.507-24");
let empresa1 = new Cliente("Atacadao", "60", new Date("4/28/1962"), [c4], "03.816.601/0001-22");
let empresa2 = new Cliente("Assaí", "35", new Date("7/17/1987"), [c5], "00.960.251/0001-16");
let empresa3 = new Cliente("Super Fácil", "31", new Date("1/14/1991"), [c6, c8], "09.659.564/0001-16");
let repositorio_pessoas = new RepositorioPessoas;
repositorio_pessoas.adicionar(cliente1);
repositorio_pessoas.adicionar(cliente2);
repositorio_pessoas.adicionar(cliente3);
repositorio_pessoas.adicionar(empresa1);
repositorio_pessoas.adicionar(empresa2);
repositorio_pessoas.adicionar(empresa3);
console.log(repositorio_pessoas);
console.log(cliente2.saldoTotalContas());
empresa3.removerContas('6');
console.log(empresa3);
console.log(cliente2.mediaSaldoContas());
empresa3.acrescentarConta(c9);
empresa3.acrescentarConta(c10);
console.log(empresa3.consultarContas('9'));
