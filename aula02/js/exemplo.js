let testeDoenca = true;
let resultado = testeDoenca === true ? "Positivo" : "Negativo";
console.log(`O resultado do teste é: ${resultado} em 20-09-2024`);

var frutas = new Array(5);
var cores = [];
var cursos = ["Java", "C#", "Ruby"];

cursos.push("PHP");
cursos.unshift("Java2");

for (let i = 0; i < cursos.length; i++) {
  console.log(cursos[i]);
}
