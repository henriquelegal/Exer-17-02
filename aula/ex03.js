const readline = require("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

rl.question('Digite o seu nome: ',(nome)=>{
    rl.question("Digite o seu salario R$: ", (salario)=>{
        console.log('o funcionario' $(nome)'recebe R$' $(salario) 'por mes')
    })

    rl.close();
}
)