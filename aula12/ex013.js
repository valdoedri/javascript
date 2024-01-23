var agora = new Date()
var dia = agora.getDay() // pega o dia da semana
/*
 0 domingo
 1 segunda
 2 terca
 3 quarta
 4 quinta
 5 sexta
 6 sábado
*/
console.log(dia)
switch(dia){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda feira')
        break
    case 2:
        console.log('Terça feira')
        break
    case 3:
        console.log('Quarta feira')
        break
    case 4:
        console.log('Quinta feira')
        break
    case 5:
        console.log('Sexta feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[erro] Dia inválido')
}