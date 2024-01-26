function parimp(n) {
    if (n%2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

var num = 245
var res = parimp(num)

console.log(`O número ${num} é ${res}`)// mostrando o return vindo da variavel de retorno
console.log(`O retorno é ${parimp(num)}`)// mostrando o return direto da função