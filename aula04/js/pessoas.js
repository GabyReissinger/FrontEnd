const pessoas = [
  { nome: "João", idade: 20, cidade: "Petrópolis" },
  { nome: "Ana", idade: 28, cidade: "Petrópolis" },
  { nome: "Carla", idade: 44, cidade: "São Paulo" },
  { nome: "Carlos", idade: 38, cidade: "Petrópolis" },
  { nome: "Igor", idade: 16, cidade: "Juiz de Fora" },
];

const filtro = pessoas.filter(
  (pessoa) => pessoa.cidade === "Petrópolis" && pessoa.idade > 18
);

console.log(filtro.map((pessoa) => pessoa.nome + " - " + pessoa.cidade));
const busca = pessoas.find((pessoa) => pessoa.cidade.toLowerCase() === "Petrópolis".toLowerCase());
console.log(busca);
const buscaLetra = pessoas.filter((pessoa) => pessoa.cidade.toLowerCase().includes("o"));
console.log(buscaLetra);

//atividade
//array com números
//e procurar o primeiro numero múltiplo de 2
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = num.find((n) => n % 2 === 0);