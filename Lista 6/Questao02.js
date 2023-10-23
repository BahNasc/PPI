 
var a = prompt("Digite o primeiro número:");
var b = prompt("Digite o segundo número:");

a = parseFloat(a);
b = parseFloat(b);

if (!isNaN(a) && !isNaN(b)) {
    var soma = a + b;
    
    console.log("A soma de " + a + " e " + b + " é igual a " + soma);

} else {
    console.log("Por favor, insira números válidos.");
}