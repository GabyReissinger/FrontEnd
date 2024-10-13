const numeros = [2, 4, 6, 9, 13];
//numeros.filter((num) => num % 2 == 0).forEach((num) => console.log(num));
//numeros.filter((num) => (num % 2 == 0 ? console.log(num) : ""));
//numeros.filter((num) => {
//    num % 2 == 0 ? console.log(num) : console.log(num + " Não é multíplo :(")
//});
console.log(numeros.filter((num) => num % 2 == 0));