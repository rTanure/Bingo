var listaDeSorteados = []
let ultimoNumero = 0


function clickSortear() {
    gerarNumero()
    renderizarUltimoNumero()
    renderizarTabela()
}

function gerarNumero() {
    let num = Math.floor(Math.random() * 76)
    if (listaDeSorteados.length < 75) {
        if (listaDeSorteados.indexOf(num) == -1) {
            listaDeSorteados.push(num)
            ultimoNumero = num
        } else {
            gerarNumero()
        }
    } else {
        resetarTabela()
    }
}

function renderizarUltimoNumero() {
    let container = document.getElementById("ultimoNumero")
    container.innerHTML = ultimoNumero
}

function renderizarTabela() {
    for (let id = 1; id <= 75; id++){
        if (listaDeSorteados.indexOf(id) != -1) {
            let numeroDaCartela = document.getElementById(id)
            numeroDaCartela.style.background = "rgb(110, 223, 110)"
            numeroDaCartela.style.color = "white"
        }
    } 
}

