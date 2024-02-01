// Array declarada
var nums = []    

function paim(x) {
            if (x%2 == 0) {
                return 'par'                
            } else {
                return 'ímpar'
            }
        }

        function reset() {
            var sel = window.document.getElementById('sel')
            var res = window.document.getElementById('res')
            sel.innerHTML = ''
            res.innerHTML = ''
            res.style.display = 'none'
            nums = []    
        }

   
function adicionar() {
    var num = window.document.getElementById('num')
    var sel = window.document.getElementById('sel')
    var res = window.document.getElementById('res')
    var n = num.value
    var pi = n
        // verifica se o campo está em branco e se o valor está entre 1 e 100       
    if (num.value.length == 0 || num.value < 1 || num.value > 100) { 
        window.alert('Por favor digite um número entre 1 e 100!')
    } else {
        if (nums.indexOf(n) >= 0) { // Verifica se o número ja foi adicionado na array
            window.alert(`O número ${n} já foi adicionado!`)
        } else { // Adiciona o número digitado na array e na tag select > option            
            var opt = window.document.createElement('option') // cria o option
            opt.text = `Valor ${n} adicionado: ${paim(pi)}` // adiciona texto no option
            sel.appendChild(opt) // inseri o option no select
            nums.push(n) // adiciona o número na array
            res.style.display = 'none' // oculta a DIV#RES
            res.innerHTML = '' // Limpa a DIV#RES
                } 
            }  
        num.value = '' // Limpa o campo
        num.focus()    // Foca no campo              
    }

            

function finalizar(){
    if (nums.length == 0) {
        window.alert('Adicione números para poder finalizar!')
    } else {
    var res = window.document.getElementById('res')
    res.style.display = 'block' // Exibe a DIV#RES
    var total = 0
    nums.sort() // coloca a array em ordem crescente
    
    for (var c = 0; c < nums.length; c++) { // Soma todos os números dentro da array
        total = Number(total) + Number(nums[c]) 
    }

    var media = total / nums.length // Calcula a media dos valores da array

    res.innerHTML  = `<p>Ao todo, temos ${nums.length} números adicionados.</p>` 
    res.innerHTML += `<p>O maior valor informado foi ${nums[nums.length -1]}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${nums[0]}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${total}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}