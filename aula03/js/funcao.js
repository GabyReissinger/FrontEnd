function mensagem() {
  //console.log("Aula de JS");
}
//Função anonima
let texto = function (t) {
  console.log(t);
  return "oi";
};
console.log(texto("Aula de JS"));

//Function Expression ou Arrow Function
let msg = () => console.log("Aula de JS");
msg();

//mensagem();
function soma(num1, num2) {
  return num1 + num2;
}
let res = (num1, num2) => num1 + num2;
console.log(res(10, 40));
//console.log(`Resultado: ${soma(10, 20)} texto`);
