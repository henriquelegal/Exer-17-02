const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quantos dias tem no ano?", (dias) => {
  if (dias > 365) {
    console.log("O ano que voce esta e bissexto");
  } else if (dias == 365) {
    console.log("O ano que voce esta nao e bissexto");
  } else {
    console.log("Erro, ano inexistente!");
  }
});
