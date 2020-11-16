function iniciarJogo() {
    var nivel = document.getElementById('nivel').value
    if (nivel === '' ) {
        alert('Selecione um nível para iniciar o jogo')
        return false
    }
    window.location.href = 'app.html?' + nivel
}

function infosJogo() {
    var dados = document.createElement('div')
        dados.className = 'row'
        dados.innerHTML = '<div class="col"><div id="caixa" ><div id="infos"></div></div></div>'
    var nivel = document.getElementById('nivel').value
    if (nivel == '') {

        document.body.appendChild(dados)
        document.getElementById('infos').remove()
    }
    if (nivel == 'normal'){

        document.body.appendChild(dados)
        document.getElementById('infos').innerHTML = 'O <img class="mosquito1" src="./img/mosca.png" > tem de ser clicado ate o tempo de 1.5s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo <br>O <img class="mosquito1" src="./img/mosca1.png" > não pode ser clicado ate 1.5s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo <br>O <img class="mosquito1" src="./img/mosca2.png" > deve ser clicado ate 1.5s, onde ele some da tela, para ganhar um <img src="./img/coracao_cheio.png"> no lugar de um que tenha sido perdido <br>'
        console.log(dados)   
    }
    if (nivel == 'dificil') {
        document.body.appendChild(dados)
        document.getElementById('infos').innerHTML = 'O <img class="mosquito1" src="./img/mosca.png" > tem de ser clicado ate o tempo de 1s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo <br>O <img class="mosquito1" src="./img/mosca1.png" > não pode ser clicado ate 1s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo <br>O <img class="mosquito1" src="./img/mosca2.png" > deve ser clicado ate 1s, onde ele some da tela, para ganhar um <img src="./img/coracao_cheio.png"> no lugar de um que tenha sido perdido <br>'
    }
    if (nivel == 'chucknorris') {
        document.body.appendChild(dados)
        document.getElementById('infos').innerHTML = 'O <img class="mosquito1" src="./img/mosca.png" > tem de ser clicado ate o tempo de 0.75s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo <br>O <img class="mosquito1" src="./img/mosca1.png" > não pode ser clicado ate 0.75s, onde ele some da tela, para não perder um <img src="./img/coracao_cheio.png"> pois ao zerar perder o jogo <br>O <img class="mosquito1" src="./img/mosca2.png" > deve ser clicado ate 0.75s, onde ele some da tela, para ganhar um <img src="./img/coracao_cheio.png"> no lugar de um que tenha sido perdido <br>'
    }


}