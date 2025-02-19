const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Em que ano voce nasceu? ", (Ano)=>{
rl.question("Em que ano voce esta?", (Atual)=>{
let idade = Atual-Ano;
let AnoAtual = Idade-18;

if(idade>=18){
console.log("voce e maior de idade, se passaram"+ AnoAtual + "do seu alistamento");


}else{
console.log("Voce e menor de idade, faltam" +)

}



})


})