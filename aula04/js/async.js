function asyncFunction(){
    setTimeout(() => {
        console.log("Async function");
    }, 3000);
}
console.log("Inicio do programa");
asyncFunction();
console.log("Fim de programa");

