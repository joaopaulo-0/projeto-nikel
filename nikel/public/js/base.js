let pessoas = [
    {
        nome: "João Paulo",
        idade: 22,
        trabalho: "Desenvolvedor"
    }
]

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

adicionarPessoa({
    nome: "Pedro Silva",
    idade: 28,
    trabalho: "Desenvolvedor"
});

function imprimirPessoas(){
    pessoas.forEach((item) => {
        console.log(item);
        
    })
}