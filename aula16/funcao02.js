function calc(n1, n2){
    return n1 * n2
}
// função para calcular 2 parametros
console.log(calc(11, 31))

// se algum parametro não for passado, fica com valor = 1
function calc2(n1=1, n2=1){
    return n1 * n2
}