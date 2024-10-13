const nomes = ["Gabriel", "Carlos", "Ana", "Maria"];
for (let i = 0; i < nomes.length; i++) {
  // console.log(nomes[i].substring(0, 1));
}
//console.log("-----Resultados com map -----");
//console.log(nomes.map(nome => nome.substring(0, 1)));
const alunos = [
  { matricula: "123", nome: "Gabriel", email: "gabriel@gmail.com" },
  { matricula: "456", nome: "Carlos", email: "carlos@gmail.com" },
  { matricula: "789", nome: "Ana", email: "ana@gmail.com" },
];
//const alunosMap = alunos.map((aluno) => aluno.nome);
//alunosMap.forEach((nome) => console.log(nome));
alunos.map((a) => a.nome).forEach((a) => console.log(a));