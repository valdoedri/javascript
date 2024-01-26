function fatorial(n) {
    if (n == 1) {
        return 1
    }else {
       return n * fatorial(n-1) // função chama a prórpia função
    }
}

console.log(fatorial(5))