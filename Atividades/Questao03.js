var a = prompt("Digite um número para fazer a contagem: ");

a = parseFloat(a);

if (!isNaN(a)) {
    
    for (var i = 1; i <= a; i++) {
        console.log(i);
    }
}