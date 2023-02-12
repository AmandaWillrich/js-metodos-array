let livros = []

const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

const elementoParaInserirLivros = document.getElementById('livros')

getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi() {
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    exibirOsLivrosNaTela(livros)
    // aplicaDesconto(livros.preco)
}

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="Capa do livro ${livro.titulo}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
    })
}

// function aplicaDesconto(listaDePrecos) {
//     console.log(listaDePrecos)
// }