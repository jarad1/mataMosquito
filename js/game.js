var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    

}

ajustaTamanhoPalcoJogo()

setInterval(function() {
    posicaoRandomica()
}, 1000)


function posicaoRandomica() {

    // try {
    //     document.getElementById('mosquito').remove()
    // } catch {
    //     var posicaoX = Math.floor(Math.random() * largura) - 90
    // var posicaoY = Math.floor(Math.random() * altura) - 90

    // posicaoX = posicaoX < 0 ? 0 : posicaoX 
    // posicaoY = posicaoY < 0 ? 0 : posicaoY 
    // console.log(posicaoX, posicaoY)

    // var mosquito = document.createElement('img')
    // mosquito.src = colorAleatoria()
    // mosquito.className = tamanhoAleatorio() + ladoAleatorio()
    // mosquito.style.left = posicaoX + 'px'
    // mosquito.style.top = posicaoY + 'px'
    // mosquito.style.position =  'absolute'
    // mosquito.id = 'mosquito'

    // document.body.appendChild(mosquito)

    // }
    

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY 
    console.log(posicaoX, posicaoY)

    var mosquito = document.createElement('img')
    mosquito.src = colorAleatoria()
    mosquito.className = tamanhoAleatorio() + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position =  'absolute'
    mosquito.id = 'mosquito'

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

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
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

function colorAleatoria() {
    var img = Math.floor(Math.random() * 30)

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
            return './img/mosca.png'
        case 5:
        case 16:
        case 22:
            return './img/mosca2.png'
        case 1:
        case 8:
        case 12:
        case 28:
            return './img/mosca1.png'  

    }


}


