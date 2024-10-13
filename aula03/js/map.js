const numeros = [10, 20, 30, 22, 44];
let novoNumeros = [];
for (let i = 0; i < numeros.length; i++) {
    novoNumeros.push(numeros[i] * 2);
}
console.log(novoNumeros);
console.log("-----Resultados com map -----");
let novoMap = numeros.map((numero) => numero * 2);
console.log(novoMap);

novoMap.forEach((i) => console.log(i));