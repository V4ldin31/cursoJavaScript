const nome = 'Valdinei';
const sobrenome = 'Araujo';
const idade = 33;
const peso = 100;
const alturaEmMt = 1.73;
let indiceMassaCorporal;
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmMt * alturaEmMt);
indiceMassaCorporal = indiceMassaCorporal.toFixed(2);
anoNascimento = anoAtual - idade;

console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log (`tem ${alturaEmMt} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
