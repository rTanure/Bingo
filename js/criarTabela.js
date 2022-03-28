function gerarCartela() {
    var cartela = document.getElementById('cartela')
    let HTML = ``
    let n = 1
    for (let c = 0; c < 5; c ++) {
        HTML += `<div class="cartelaColuna">`
        for (let l = 0; l < 15; l++) {
            HTML +=`
            <div class="numeroSingle">
                <div id="${n}">
                    <p>${n}</p> 
                </div>
            </div>
            `
            n++
        }
        HTML += `</div>`
    }
    cartela.innerHTML = HTML
}
gerarCartela()