const pessoa = {
    nome: "Jane",
    sobrenome: "Doe",
    idade: 28,
    endereco: {
        rua: "Rua dos Bobos",
        numero: 123,
        cidade: "São Paulo"
    },
    // exibirPessoa() {
    //     return  "OK";
    // },
};
console.log(pessoa.exibirPessoa?.() ?? "Função inexistente");
console.log('nome' in pessoa);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));



