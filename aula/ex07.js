const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Quanto dinheiro voce tem?", (dinheiro) => {
  let carteira = Number(dinheiro);
  let dolar = dinheiro / 5.6;

  console.log(
    `Voce tem na carteira: R$ ${dinheiro}, e pode comprar ${dolar} dolares`
  );
  rl.close;
});
