var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var img = 0

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')
if(nivel === 'normal1' || nivel === 'normal2' || nivel === 'normal3' || nivel === 'normal4' || nivel === 'normal5' ) {
    tempo = nivel.replace('normal','')
    var criaMosquitoTempo = 1500

}else if (nivel === 'dificil1' || nivel === 'dificil2' || nivel === 'dificil3' || nivel === 'dificil4' || nivel === 'dificil5'  ) {
    tempo = nivel.replace('dificil','')
    tempo = tempo == 1 ? 15 : tempo
    tempo = tempo == 2 ? 20 : tempo
    tempo = tempo == 3 ? 25 : tempo
    tempo = tempo == 4 ? 30 : tempo
    tempo = tempo == 5 ? 35 : tempo
    var criaMosquitoTempo = 1000


}else if (nivel === 'chucknorris1' || nivel === 'chucknorris2' || nivel === 'chucknorris3' || nivel === 'chucknorris4' || nivel === 'chucknorris5') {
    tempo = nivel.replace('chucknorris','')
    tempo = tempo == 1 ? 15 : tempo
    tempo = tempo == 2 ? 20 : tempo
    tempo = tempo == 3 ? 25 : tempo
    tempo = tempo == 4 ? 30 : tempo
    tempo = tempo == 5 ? 35 : tempo
    var criaMosquitoTempo = 750

}else if (nivel === 'facil1' || nivel === 'facil2' || nivel === 'facil3' || nivel === 'facil4' || nivel === 'facil5') {
    tempo = nivel.replace('facil','')
    tempo = tempo == 1 ? 15 : tempo
    tempo = tempo == 2 ? 20 : tempo
    tempo = tempo == 3 ? 25 : tempo
    tempo = tempo == 4 ? 30 : tempo
    tempo = tempo == 5 ? 35 : tempo
    console.log(tempo)
    var criaMosquitoTempo = 2500

}




function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else {
        document.getElementById('cronometro').innerHTML = tempo
        
    }
    tempo--
},1000)

var criaMosca =  setInterval(function() {
    img = Math.floor(Math.random() * 30)
    
    switch(img) {
        case 0:
        case 2:
        case 3:
        case 4:
        case 6:
        case 7:
        case 9:
        case 10:
        case 11:
        case 13:
        case 14:
        case 15:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 29:
            return posicaoRandomica()
        case 5:
        case 16:
        case 22:
            return posicaoRandomica1()
        case 1:
        case 8:
        case 12:
        case 28:
            return posicaoRandomica2() 

    }
}, criaMosquitoTempo)


function posicaoRandomica() {

    if(document.getElementById('mosquito2')) {
        document.getElementById('mosquito2').remove()
        if(vidas > 3) {
            window.location.href = 'fim-de-jogo.html'
        } else {
            document.getElementById('v' + vidas).src = './img/coracao_vazio.png'
            vidas++
        }
             
    }
    if(document.getElementById('mosquito3')) {
        document.getElementById('mosquito3').remove()
        if(vidas > 3) {
            window.location.href = 'fim-de-jogo.html'
        } 
             
    }

    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY 

    var mosquito = document.createElement('img')
    mosquito.src = './img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ladoAleatorio() 
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position =  'absolute'
    mosquito.id = 'mosquito1'

    
    mosquito.onclick = function () {
        this.remove()
    
    }

    if(document.getElementById('mosquito1')) {
        document.getElementById('mosquito1').remove()

        if(vidas >= 3) {
            window.location.href = 'fim-de-jogo.html'
            
        } else {
            document.getElementById('v' + vidas).src = './img/coracao_vazio.png'
            vidas++

        }
        
    }
  

    document.body.appendChild(mosquito)

}

function posicaoRandomica1() {

    if(document.getElementById('mosquito1')) {
        document.getElementById('mosquito1').remove()
        if(vidas > 3) {
            window.location.href = 'fim-de-jogo.html'
        } else {
            document.getElementById('v' + vidas).src = './img/coracao_vazio.png'
            vidas++
        }
             
    }
    if(document.getElementById('mosquito3')) {
        document.getElementById('mosquito3').remove()
        if(vidas > 3) {
            window.location.href = 'fim-de-jogo.html'
        }     
    }

    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY 

    var mosquito = document.createElement('img')
    mosquito.src = './img/mosca2.png'
    mosquito.className = tamanhoAleatorio() + ladoAleatorio() 
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position =  'absolute'
    mosquito.id = 'mosquito2'

    
    mosquito.onclick = function () {
        vidas--
        vidas = vidas < 1 ? 1 : vidas
        document.getElementById('v' + vidas).src = './img/coracao_cheio.png'
            
        this.remove()
    
    }

    if(document.getElementById('mosquito2')) {
        document.getElementById('mosquito2').remove()
        

        if(vidas >= 3) {
            window.location.href = 'fim-de-jogo.html'
        } 
        
    }
  

    document.body.appendChild(mosquito)

}

function posicaoRandomica2() {

    if(document.getElementById('mosquito1')) {
        document.getElementById('mosquito1').remove()
        if(vidas > 3) {
            window.location.href = 'fim-de-jogo.html'
        } else {
            document.getElementById('v' + vidas).src = './img/coracao_vazio.png'
            vidas++
        }
             
    }if(document.getElementById('mosquito2')) {
        document.getElementById('mosquito2').remove()
        if(vidas > 3) {
            window.location.href = 'fim-de-jogo.html'
        } else {
            document.getElementById('v' + vidas).src = './img/coracao_vazio.png'
            vidas++
        }
             
    }

    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY 

    var mosquito = document.createElement('img')
    mosquito.src = './img/mosca1.png' 
    mosquito.className = tamanhoAleatorio() + ladoAleatorio() 
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position =  'absolute'
    mosquito.id = 'mosquito3'

    
    mosquito.onclick = function () {
        document.getElementById('v' + vidas).src = './img/coracao_vazio.png'
            vidas++
            console.log('feio')
        this.remove()
    
    }

    

    if(document.getElementById('mosquito3')) {
        document.getElementById('mosquito3').remove()
        

        if(vidas >= 3) {
            window.location.href = 'fim-de-jogo.html'
        }
        
    }
    document.body.appendChild(mosquito)

    

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1 '
        case 1:
            return 'mosquito2 '
        case 2:
            return 'mosquito3 '
    }
}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)
 

    switch(lado) {
        case 0:
            return 'ladoA '
        case 1:
            return 'ladoB '
    }
}

