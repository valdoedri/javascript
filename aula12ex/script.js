var hoje = new Date()
        var hora = hoje.getHours()
        var min  = hoje.getMinutes()
        var corpo = window.document.getElementById('ifundo')
        var saudacao = window.document.getElementById('sauda')
        var mhora = window.document.getElementById('ihora')
        var foto = window.document.getElementById('ifoto')
        if (hora < 12) {
            saudacao.innerHTML = 'Bom dia!'
            corpo.style.background = '#d3a44e'
            mhora.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.`
            foto.style.backgroundImage = 'url(imagens/dia.jpg)'
        } else if (hora < 18) {
            saudacao.innerHTML = 'Boa tarde!'
            corpo.style.background = 'skyblue'
            mhora.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.`
            foto.style.backgroundImage = 'url(imagens/tarde.jpg)'
        } else {
            saudacao.innerHTML = 'Boa noite!'
            corpo.style.background = '#1a1a1a'
            mhora.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.`
            foto.style.backgroundImage = 'url(imagens/noite.jpg)'
        }