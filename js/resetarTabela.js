let container = document.getElementById("ultimoNumero")

function resetarTabela() {
    listaDeSorteados = []
    renderizaReset()
}

function renderizaReset() {
    for (let c = 1; c <= 75; c++) {
        let capsulaAtual = document.getElementById(c)
        capsulaAtual.style.background = "white"
        capsulaAtual.style.color = "rgb(110, 223, 110)"
    }
    container.innerHTML = ""
}