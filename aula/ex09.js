const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("quantos dias voce trabalhou por mes?", (dia) => {
  let horas = 8;
  let dias = dia * horas;
  let salario = dias * 25;

  console.log(`Voce trabalhou ${dia} dias, e ganhou R$ ${salario}`);
  rl.close;
});
