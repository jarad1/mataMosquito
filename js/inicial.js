function iniciarJogo() {
    var nivel = document.getElementById('nivel').value
    if (nivel === '' ) {
        alert('Selecione um nível para iniciar o jogo')
        return false
    }
    window.location.href = 'app.html?' + nivel + tempoJogo()
}

function tempoJogo() {
    var tempo = document.getElementById('range').value
    return tempo
}

function infosJogo() {
    var post = document.getElementById('container')
    var dados = document.createElement('div')
        dados.className = 'row'
        dados.innerHTML = '<div class="col"><div id="caixa" ><div id="infos"></div></div></div>'
    var nivel = document.getElementById('nivel').value
    if (nivel == '') {

        if (document.getElementById('infos')) {
            post.lastElementChild.remove()
        }
        
    }if (nivel == 'facil'){

        if (document.getElementById('infos')) {
            post.lastElementChild.remove()
        }
        

        post.appendChild(dados)
        
        document.getElementById('infos').innerHTML = '<img class="mosquito1" src="./img/mosca.png" >: O Mosquito azul tem de ser clicado ate o tempo de 2.5s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo<br><img class="mosquito1" src="./img/mosca1.png" >: O Mosquito vermelho não pode ser clicado ate 2.5s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo<br><img class="mosquito1" src="./img/mosca2.png" >: O Mosquito verde deve ser clicado ate 2.5s, onde ele some da tela, para ganhar um <img src="./img/coracao_cheio.png"> no lugar de um que tenha sido perdido<br>'
        console.log(dados)   
    }
    if (nivel == 'normal'){

        if (document.getElementById('infos')) {
            post.lastElementChild.remove()
        }
        

        post.appendChild(dados)
        
        document.getElementById('infos').innerHTML = '<img class="mosquito1" src="./img/mosca.png" >: O Mosquito azul tem de ser clicado ate o tempo de 1.5s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo <br><img class="mosquito1" src="./img/mosca1.png" >: O Mosquito vermelho não pode ser clicado ate 1.5s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo <br><img class="mosquito1" src="./img/mosca2.png" >: O Mosquito verde deve ser clicado ate 1.5s, onde ele some da tela, para ganhar um <img src="./img/coracao_cheio.png"> no lugar de um que tenha sido perdido <br>'
        console.log(dados)   
    }
    if (nivel == 'dificil') {

        if (document.getElementById('infos')) {
            post.lastElementChild.remove()
        }
        
        post.appendChild(dados)
        document.getElementById('infos').innerHTML = '<img class="mosquito1" src="./img/mosca.png" >: O Mosquito azul tem de ser clicado ate o tempo de 1s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo <br><img class="mosquito1" src="./img/mosca1.png" >: O Mosquito vermelho não pode ser clicado ate 1s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo <br><img class="mosquito1" src="./img/mosca2.png" >: O Mosquito verde deve ser clicado ate 1s, onde ele some da tela, para ganhar um <img src="./img/coracao_cheio.png"> no lugar de um que tenha sido perdido <br>'
    }
    if (nivel == 'chucknorris') {
        if (document.getElementById('infos')) {
            post.lastElementChild.remove()
        }
        
        post.appendChild(dados)
        document.getElementById('infos').innerHTML = '<img class="mosquito1" src="./img/mosca.png" >: O Mosquito azul tem de ser clicado ate o tempo de 0.75s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo<br><img class="mosquito1" src="./img/mosca1.png" >: O Mosquito vermelho não pode ser clicado ate 0.75s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo<br><img class="mosquito1" src="./img/mosca2.png" >: O Mosquito verde deve ser clicado ate 0.75s, onde ele some da tela, para ganhar um <img src="./img/coracao_cheio.png"> no lugar de um que tenha sido perdido<br>'
    }


}