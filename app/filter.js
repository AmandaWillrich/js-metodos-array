// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')

// btnFiltrarLivrosDeFront.addEventListener('click', btnFiltrarLivrosFront)

// function btnFiltrarLivrosFront() {
//     let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end')
//     console.table(livrosFiltrados)
// }

const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDisponiveisNaTela(valorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}