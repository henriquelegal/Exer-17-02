const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quantos km/h voce estava dirigindo? ", (velo) => {
  let multa = 5;
  let limite = 80;
  let velocidadeCarro = Number(velo) - Number(limite);
  let valorMulta = velocidadeCarro * multa;

  if (velo > 80) {
    console.log(
      "Voce esta acima do limite de velocidade, multa de " + valorMulta
    );
  } else console.log("Voce esta dentro do limite de velocidade");
});
