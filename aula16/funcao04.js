// calcular o fatorial de um número
// Segue o exemplo do fatorial do número 5
// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
    var fat = 1
    for (var c = n; c > 1; c--) {
    fat *= c
    }
    return fat  // toda função tem que ter um return
}

console.log(fatorial(4))