const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o salario: ", (salario) => {
  let Aumento = salario * 0.15;
  let Montante = Number(salario) + Number(Aumento);

  console.log(`Seu novo salario com o aumento de 15% e: ${Montante} R$`);
});
